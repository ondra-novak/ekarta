//!require ../libs/pouchdb.min.js
//!require sync.js
//!require config.js
//!require initrpc.js
// timestamp: {{!timestamp}}

self.addEventListener('install', function(evt) {
	console.log("install");
	self.skipWaiting();
});

self.addEventListener('activate', function(evt) {
	console.log("activate");
    evt.waitUntil(self.clients.claim());
});


self.addEventListener('sync', function(event) {
    event.waitUntil(doSync(event.tag, event.source));
});

function sendMessageToAllClients(msg) {
	 self.clients.matchAll().then(c=>{
	   for (var i = 0 ; i < c.length ; i++) {
		   	c[i].postMessage(msg);
	   }
	 });
}
async function doSync(session) {
	"use strict";
	
	try {
		var context = {};
		
		var login_rpc = new RpcClient("api/login/RPC");
		var control_rpc = new RpcClient("api/control/RPC");
		
		login_rpc.context = context;
		control_rpc.context = context;
	
		var methods = {
				Login: {Login: {login: login_rpc.createMethod("Login.login")}},
				Control: {Client: {
					list: control_rpc.createMethod("Client.list"), 
					get: control_rpc.createMethod("Client.get")
				}}			
		};
		
		await (loginSupport(methods, "Login", session, function() {
			return Promise.reject("unsupported on background");
		}))();
		
		var db = new PouchDB("ekarta");
		var sync = new Sync(db, methods.Control);
		await sync.sync();
		sendMessageToAllClients(["sync", true]);
	} catch (e) {
		sendMessageToAllClients(["sync", false, e]);
	}
	
}