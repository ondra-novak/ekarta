/*
 * rpcInterface.h
 *
 *  Created on: 19. 9. 2020
 *      Author: ondra
 */

#ifndef SRC_MAIN_RPCINTERFACE_H_
#define SRC_MAIN_RPCINTERFACE_H_
#include <main/db.h>
#include "session.h"
#include <rpc/rpcServer.h>
#include <shared/refcnt.h>

class RpcInterface: public ondra_shared::RefCntObj {
public:
	RpcInterface(PCouchDB db, PSessionCntr session);

	void init(json::RpcServer &srv);

	void rpcWhoami(json::RpcRequest req);
	void rpcGetCompanies(json::RpcRequest req);
	void rpcGetAllCompanies(json::RpcRequest req);
	void rpcListObjects(json::RpcRequest req);
	void rpcGetObjects(json::RpcRequest req);
	void rpcPutObjects(json::RpcRequest req);



protected:
	PCouchDB db;
	PSessionCntr session;

	bool checkACL_RO(Session::PSession ses, const StrViewA cmpId) const;
};

using PRpcInterface = ondra_shared::RefCntPtr<RpcInterface>;


#endif /* SRC_MAIN_RPCINTERFACE_H_ */
