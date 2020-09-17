#include <shared/default_app.h>
#include <simpleServer/abstractService.h>
#include <rpc/rpcServer.h>
#include <simpleServer/threadPoolAsync.h>


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

	svc.enableRestart();

	auto serverSection = config["server"];


	AsyncProvider async = ThreadPoolAsync::create(
			serverSection.mandatory["threads"].getUInt(),
			serverSection.mandatory["dispatchers"].getUInt()
	);

	RpcHttpServer rpcsrv(NetAddr::create(serverSection.mandatory["listen"].getString(),7788,NetAddr::IPvAll),async);
	rpcsrv.addRPCPath("/RPC", RpcHttpServer::Config{
		serverSection["console"].getBool(true),
		serverSection["websocket"].getBool(true),
		serverSection["direct"].getBool(true),
		serverSection["maxReqSize"].getUInt(1024*1024),
	});
	rpcsrv.add_listMethods();
	rpcsrv.add_ping();


	rpcsrv.start();

	svc.dispatch();
	return 0;

}
