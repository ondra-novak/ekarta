#include <main/rpcInterface.h>
#include <main/session.h>
#include <shared/default_app.h>
#include <simpleServer/abstractService.h>
#include <rpc/rpcServer.h>
#include <simpleServer/threadPoolAsync.h>
#include "db.h"


using namespace ondra_shared;
using namespace simpleServer;


class MainApp: public DefaultApp {
public:


	MainApp(std::ostream &output):DefaultApp({},output, nullptr) {}

	int run(ServiceControl svc, ArgList args);
};



int main(int argc, char **argv) {
	MainApp app(std::cerr);

	if (!app.init(argc, argv)) {
		std::cerr << "Invalid arguments. Use -h for help" << std::endl;
		return 1;
	}

	auto serverSection = app.config["server"];
	StrViewA cmd = app.args->getNext();
	if (cmd.empty()) {
		std::cerr << "Need command start|stop|restart|status|run" << std::endl;
	}

	return ServiceControl::create("ekarta",serverSection.mandatory["instfile"].getPath(), cmd,
			[&](ServiceControl svc, StrViewA name, ArgList args) {
		return app.run(svc, args);
	}, app.getArgs());

}

int MainApp::run(ServiceControl svc, ArgList args) {

	//----------- init -------------------

	auto serverSection = config["server"];
	auto dbSection = config["db"];
	auto sessionSection = config["session"];

	auto dbcfg = CouchDB::initDB(dbSection);
	PCouchDB db = new CouchDB(dbcfg);

	PSessionCntr sesCntr = new Session(sessionSection.mandatory["public_key"].getPath());

	RpcHttpServer::Config svrcfg {
		serverSection["console"].getBool(true),
		serverSection["websocket"].getBool(true),
		serverSection["direct"].getBool(true),
		serverSection["maxReqSize"].getUInt(1024*1024),
	};
	unsigned int thread_cnt = serverSection.mandatory["threads"].getUInt();
	unsigned int disp_cnt = serverSection.mandatory["dispatchers"].getUInt();
	auto naddr = NetAddr::create(serverSection.mandatory["listen"].getString(),7788,NetAddr::IPvAll);

	PRpcInterface rpcifc = new RpcInterface(db, sesCntr);

	//----------- start ------------

	svc.enableRestart();

	AsyncProvider async = ThreadPoolAsync::create(thread_cnt,disp_cnt);


	RpcHttpServer rpcsrv(naddr,async);
	rpcsrv.addRPCPath("/RPC", svrcfg);
	rpcsrv.add_listMethods();
	rpcsrv.add_ping();
	rpcsrv.setHostMapping(serverSection["mapHosts"].getString(""));



	rpcifc->init(rpcsrv);

	rpcsrv.start();

	svc.dispatch();
	return 0;

}
