/*
 * session.h
 *
 *  Created on: 19. 9. 2020
 *      Author: ondra
 */

#ifndef SRC_MAIN_SESSION_H_
#define SRC_MAIN_SESSION_H_

#include <imtjson/jwt.h>
#include <imtjson/rpc.h>
#include <imtjson/value.h>
#include <shared/linear_map.h>
#include <shared/refcnt.h>
#include <chrono>

class Session: public ondra_shared::RefCntObj {
public:
	Session(const std::string &pubkeyfile);



	struct SInfo {
		bool isAdmin = false;
		json::Value user;
		json::Value roles;
		std::chrono::system_clock::time_point expires;
	};

	using PSession = std::shared_ptr<SInfo>;


	PSession parseSession(const json::String &sessionStr);
	PSession parseSession(json::RpcRequest req, bool set_error = true);



protected:

	using SessionItem = std::pair<json::String, PSession>;
	using SessionCache = std::vector<SessionItem>;


	SessionCache sessionCache;
	std::mutex lock;
	json::PJWTCrypto jwt;

	static bool sessionCacheCompare(const SessionItem &a, const SessionItem &b);

};

using PSessionCntr = ondra_shared::RefCntPtr<Session>;

#endif /* SRC_MAIN_SESSION_H_ */
