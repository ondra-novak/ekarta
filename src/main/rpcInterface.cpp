/*
 * rpcInterface.cpp
 *
 *  Created on: 19. 9. 2020
 *      Author: ondra
 */

#include <couchit/couchDB.h>
#include <couchit/document.h>
#include <couchit/query.h>
#include <couchit/result.h>
#include <couchit/view.h>
#include <couchit/changeset.h>
#include <imtjson/object.h>
#include <imtjson/string.h>
#include <imtjson/value.h>
#include <main/rpcInterface.h>
#include <rpc/rpcServer.h>
#include <shared/linear_set.h>
#include <unordered_set>

using couchit::Document;
using couchit::Result;
using couchit::Row;
using couchit::View;
using json::Object;
using json::String;
using json::Value;
using std::unordered_set;

static Value clientDDoc = Object
		("_id","_design/client")
		("language","javascript")
		("views",Object
				("companies2user",Object
						("map", "function(doc) {"
							"function expandItems(sources, list, used) {"
								"var out = [];"
								"list.forEach(function(k) {"
									"if (k.substr(0, 1) == '$') {"
										"if (used.indexOf(k) == -1) {"
											"used.push(k);"
											"if (sources[k]) {"
												"out = out.concat(expandItems(sources, sources[k], used));"
											"}"
										"}"
									"} else {"
									  "out.push(k);"
									"}"
								"});"
								"return out;"
							"};"
							"if (doc._id.substr(0, 4) == 'cmp.' && typeof (doc.users) == 'object') {"
								"Object.keys(doc.users).forEach(function(z) {"
								  "if (z.substr(0,1) != '$') {"
									  "var acls = doc.users[z];"
									  "if (Array.isArray(acls)) {"
										  "var obj = {};"
										  "acls = expandItems(doc.users, acls, []);"
										  "acls.forEach(function(a) {"
											  "obj[a] = true;"
										  "});"
										  "emit(z, obj);"
									  "}"
								  "}"
								"});"
							"}"
						"}"
						)
				)
				("objects2cmp", Object
						("map", "function(doc) {"
									"if (doc._id.substr(0,4) == \"cmp.\") {"
										"emit(doc._id, doc._rev);"
									"} else if (doc.owner) {"
										"emit(doc.owner, doc._rev);"
									"}"
								"}")
				)

		);

static View view_companies2user("_design/client/_view/companies2user", View::update);
static View view_objects2cmp("_design/client/_view/objects2cmp", View::update);

RpcInterface::RpcInterface(PCouchDB db, PSessionCntr session):db(db),session(session) {
		db->putDesignDocument(clientDDoc);
}


void RpcInterface::init(json::RpcServer &srv) {

	PRpcInterface me(this);
	srv.add("whoami", me, &RpcInterface::rpcWhoami);
	srv.add("Client.companies",me,&RpcInterface::rpcGetCompanies);
	srv.add("Client.Admin.companies",me,&RpcInterface::rpcGetAllCompanies);
	srv.add("Client.list",me,&RpcInterface::rpcListObjects);
	srv.add("Client.get",me,&RpcInterface::rpcGetObjects);
	srv.add("Client.put",me,&RpcInterface::rpcPutObjects);


}

void RpcInterface::rpcWhoami(json::RpcRequest req) {
	if (!req.checkArgs({})) return req.setArgError();
	auto ses = session->parseSession(req, true);
	if (ses != nullptr) {

		req.setResult(Object
				("admin", ses->isAdmin)
				("exp", std::chrono::duration_cast<std::chrono::seconds>(ses->expires - std::chrono::system_clock::now()).count())
				("id", ses->user)
				("roles",ses->roles)
			);

	}
}

void RpcInterface::rpcGetCompanies(json::RpcRequest req) {
	if (!req.checkArgs({})) return req.setArgError();
	auto ses = session->parseSession(req, true);
	if (ses != nullptr) {
		Result res(db->createQuery(view_companies2user).key(ses->user.toString()).exec());
		Object out;
		for (Row rw: res) out.set(rw.id.getString(), rw.value);
		req.setResult(out);
	}

}

json::Value RpcInterface::getACL(Session::PSession ses, const StrViewA cmpId) const {
	String ustr = ses->user.toString();
	Result chk(db->createQuery(view_companies2user).range(ustr,cmpId,ustr,cmpId,false).exec());
	if (chk.empty() || chk[0]["id"].getString() != cmpId) {
		return json::undefined;
	} else {
		return chk[0]["value"];
	}
}

void RpcInterface::rpcListObjects(json::RpcRequest req) {
	if (!req.checkArgs({"string"})) return req.setArgError();
	Value key = req.getArgs()[0];
	auto ses = session->parseSession(req, true);
	if (ses != nullptr) {
		if (!getACL(ses, key.getString()).defined())
			return req.setError(404, "Company not found");
		Result res(db->createQuery(view_objects2cmp).key(key).exec());
		Object out;
		for (Row rw: res) out.set(rw.id.getString(), rw.value);
		req.setResult(out);
	}
}

void RpcInterface::rpcGetObjects(json::RpcRequest req) {
	auto ses = session->parseSession(req, true);
	if (ses != nullptr) {
		std::vector<CouchDB::MGetItem> ids;
		std::unordered_map<Value, bool> approved_cmps;
		ids.reserve(req.getArgs().size());
		std::transform(req.getArgs().begin(), req.getArgs().end(),std::back_inserter(ids),
				[&](Value n){return CouchDB::MGetItem{n.getString(),StrViewA()};});
		Value mres = db->mget(ids.begin(), ids.end(), db->flgRevisions);
		Object out;
		int idx = 0;
		for (Value doc: mres) {
			if (doc.hasValue()) {
				bool allow = false;
				Value id = doc["_id"];
				if (ses->isAdmin) {
					allow = true;
				}
				else {
					Value owner = id.getString().startsWith("cmp.")?id:doc["owner"];
					if (owner.defined()) {
						auto iter = approved_cmps.find(owner);
						if (iter == approved_cmps.end()) {
							allow = getACL(ses, owner.getString()).defined();
							approved_cmps.emplace(owner, allow);
						} else {
							allow = iter->second;
						}
					}
				}
				if (allow) {
					out.set(id.getString(), doc);
				} else {
					out.set(id.getString(), nullptr);
				}
			} else{
				out.set(req.getArgs()[idx].toString(), nullptr);
			}
			idx++;
		}
		req.setResult(out);
	}
}

void RpcInterface::rpcGetAllCompanies(json::RpcRequest req) {
	if (!req.checkArgs({})) return req.setArgError();
	auto ses = session->parseSession(req, true);
	if (ses != nullptr) {
		if (ses->isAdmin) {
			Result res(db->createQuery(0).prefixString("cmp.").exec());
			Object out;
			for (Row rw: res) out.set(rw.id.getString(), rw.value["rev"]);
			req.setResult(out);
		} else {
			req.setError(403,"Need admin");
		}
	}
}

static json::Value applyDiff(Value source, Value diff) {
	Value df = diff["_diff"];
	Value del = diff["_deleted"];
	if (del.getBool() && diff.size() == 1) {
		return json::undefined;
	}
	if (df.getBool()) {
		Object s(source);
		for (Value x: diff) {
			if (x.isCopyOf(df)) continue;
			StrViewA k = x.getKey();
			Value src = source[k];
			if (x.type() == json::object) {
				s.set(x.getKey(), applyDiff(src, x));
			} else {
				s.set(x);
			}
		}
		return s;
	} else {
		return diff;
	}
}

void RpcInterface::rpcPutObjects(json::RpcRequest req) {
	auto ses = session->parseSession(req, true);
	bool conflicted = false;
	if (ses != nullptr) {
		Value docs = req.getArgs();
		auto chset = db->createChangeset();
		std::unordered_set<Value> ids;
		std::unordered_map<Value, Value> acls;
		Object output;
		for (Value doc: docs) {
			Value id = doc["_id"];
			if (id.type() != json::string) return req.setError(400, "Every item must have _id");
			ids.insert(id);
		}
		do {

			for (Value doc: docs) {
				Value id = doc["_id"];

				if (ids.find(id) != ids.end()) {

					ids.erase(id);

					Value diff = doc["_diff"];
					Document uptdoc;
					if (diff.getBool()) {

						Value origDoc = db->get(id.getString(), CouchDB::flgCreateNew|CouchDB::flgRevisions);
						Value updated = applyDiff(origDoc, doc);
						if (updated.defined()) {
							uptdoc.setBaseObject(updated);
						} else {
							uptdoc.setID(id);
							uptdoc.setRev(origDoc["_rev"]);
							uptdoc.setDeleted({},true);
						}

					} else {
						if (conflicted) {
							output.set(id.getString(),"conflict");
							continue;
						} else {
							uptdoc.setBaseObject(doc);
						}
					}
					uptdoc.unset("_diff");
					uptdoc.enableTimestamp();
					uptdoc.set("modified_by",ses->user);

					if (!ses->isAdmin) {
						Value owner = id.getString().startsWith("cmp.")?id:doc["owner"];
						if (owner.defined()) {
							Value &acl = acls[owner];
							if (!acl.defined()) {
								acl = getACL(ses, owner.getString());
							}
							StrViewA pfx = id.getString().split(".")();
							if (acl[pfx].getBool() || acl["*"].getBool()) {
								chset.update(uptdoc);
								output.set(id.getString(), uptdoc);
							} else {
								output.set(id.getString(), "forbidden");
							}
						} else {
							output.set(id.getString(), "no owner");
						}
					} else {
						output.set(id.getString(), uptdoc);
					}

				}
			}
			try {
				chset.commit();
				for (const auto &a: chset.getCommitedDocs()) {
					Document d = a.doc;
					d.setRev(a.newRev);
					{
						auto revs = d.object("_revisions");
						couchit::Revision rev (a.newRev);
						Value ids = revs["ids"];
						if (ids.type() != json::array) ids = json::array;
						ids.unshift(Value(rev.getTag()));
						revs.set("ids", ids);
						revs.set("start", rev.getRevId());
					}
					output.set(a.id, d);
				}
			} catch (const couchit::UpdateException &e) {
				for (const auto &x : e.getErrors()) {
					if (x.isConflict()) {
						ids.insert(x.document["_id"]);
					} else {
						output.set(x.document["_id"].getString(), x.reason);
					}
				}
				conflicted = true;
			}

		} while (!ids.empty());
		req.setResult(output);
	}

}







