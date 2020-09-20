/*
 * rpcInterface.cpp
 *
 *  Created on: 19. 9. 2020
 *      Author: ondra
 */

#include <couchit/query.h>
#include <couchit/result.h>
#include <couchit/view.h>
#include <imtjson/object.h>
#include <imtjson/string.h>
#include <imtjson/value.h>
#include <main/rpcInterface.h>
#include <rpc/rpcServer.h>
#include <unordered_set>

using couchit::Result;
using couchit::Row;
using couchit::View;
using json::Object;
using json::String;
using json::Value;

static Value clientDDoc = Object
		("_id","_design/client")
		("language","javascript")
		("views",Object
				("companies2user",Object
						("map", "function(doc) {"
									"if (doc._id.substr(0,4) == \"cmp.\" && typeof(doc.users) == \"object\") { "
										"Object.keys(doc.users).forEach(function(z) {"
											"emit(z,doc.users[z]);"
										"})"
									"}"
								"}")
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

bool RpcInterface::checkACL_RO(Session::PSession ses, const StrViewA cmpId) const {
	String ustr = ses->user.toString();
	Result chk(db->createQuery(view_companies2user).range(ustr,cmpId,ustr,cmpId,false).exec());
	if (chk.empty() || chk[0]["id"].getString() != cmpId) {
		return false;
	} else {
		return true;
	}

}

void RpcInterface::rpcListObjects(json::RpcRequest req) {
	if (!req.checkArgs({"string"})) return req.setArgError();
	Value key = req.getArgs()[0];
	auto ses = session->parseSession(req, true);
	if (ses != nullptr) {
		if (!checkACL_RO(ses, key.getString()))
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
							allow = checkACL_RO(ses, owner.getString());
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

void RpcInterface::rpcPutObjects(json::RpcRequest req) {
}
