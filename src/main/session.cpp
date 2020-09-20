/*
 * session.cpp
 *
 *  Created on: 19. 9. 2020
 *      Author: ondra
 */

#include <imtjson/jwtcrypto.h>
#include <imtjson/string.h>
#include <imtjson/value.h>
#include <main/session.h>

using json::String;
using json::Value;


Session::Session(const std::string &pubkeyfile) {
	FILE *f = fopen(pubkeyfile.c_str(), "r");
	if (f == nullptr) {
		throw std::runtime_error("Can't open public key: "+pubkeyfile);
	}
	EC_KEY *key = nullptr;
	auto res  =PEM_read_EC_PUBKEY(f, &key, 0 ,0);
	fclose(f);
	if (res == nullptr) {
		throw std::runtime_error("Unable to parse pubkey: "+pubkeyfile);
	}
	jwt = new json::JWTCrypto_ES(key, 256);
}



Session::PSession Session::parseSession(const json::String &sessionStr) {
	std::lock_guard _(lock);
	auto now = std::chrono::system_clock::now();
	auto iter = std::lower_bound(sessionCache.begin(), sessionCache.end(), SessionItem(sessionStr,nullptr), sessionCacheCompare);
	if (iter != sessionCache.end() && iter->first == sessionStr && iter->second->expires > now) {
		return iter->second;
	}

	Value token = json::checkJWTTime(json::parseJWT(sessionStr, jwt),now);
	if (token.defined()) {
		PSession ses = std::make_shared<SInfo>(SInfo {
			token["admin"].getBool(),
			token["id"],
			token["roles"],
			std::chrono::system_clock::from_time_t(token["exp"].getUIntLong())
		});

		String shiftOut = "~";
		for (auto &&k : sessionCache) {
			if (k.second->expires < now) k.first  =shiftOut;
		}

		sessionCache.push_back(SessionItem(sessionStr, ses));
		std::sort(sessionCache.begin(), sessionCache.end(), sessionCacheCompare);
		while (sessionCache.back().first == shiftOut) sessionCache.pop_back();
		return ses;
	} else {
		return nullptr;
	}
}

Session::PSession Session::parseSession(json::RpcRequest req, bool set_error) {
	Value sesstr = req.getContext()["session"];
	PSession out;
	if (sesstr.type()==json::string) {
		out = parseSession(sesstr.toString());
		if (out != nullptr) return out;
	}

	if (set_error) req.setError(401, "Need valid session");
	return out;
}

bool Session::sessionCacheCompare(const SessionItem &a, const SessionItem &b) {
	return a.first.str().compare(b.first.str()) < 0;
}
