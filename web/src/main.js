//!require ../libs/pouchdb.min.js
//!require ../libs/common.js
//!require ../libs/rpc.js
//!require ../libs/template.js/template.js
//!require initrpc.js
//!require sync.js
//!require @svc service_worker.js
//!require msgdispatch.js
//!require config.js



App.init = async function() {
	this.rpc_context = {};

	var loginFn = loginSupport(this, "Login", localStorage["refresh_token"], function() {
		alert("login not supported yet");
		throw "unsupported";
	});
	
	var rpcs = await Promise.all([
		initRPC("api/control/RPC",this.rpc_context, loginFn),
		initRPC("api/login/RPC",this.rpc_context, loginFn),
	]);
	App.Control = rpcs[0];
	App.Login = rpcs[1];		
	App.db = new PouchDB("ekarta");
	App.Sync = new Sync(this.db, App.Control);	
}


App.start = async function() {
		
	this.msgdispatch = new MsgDispatch;
	var svc;
	if ('serviceWorker' in navigator) {
		this.svc = await navigator.serviceWorker.register('service_worker.js',{scope:"."});		
        this.svc.sync = null;		
		navigator.serviceWorker.onmessage = (event)=>{
			var msg = event.data;
			if (Array.isArray(msg) && msg.length>0) {
				var cmd = msg.shift();
				this.msgdispatch.dispatch(cmd, msg);
			}
		}
	} else {
		this.svc = null;
	}
	
    await App.init();

}


App.sync = function() {
	if (this.svc) {
		var token = localStorage["refresh_token"];
		if (this.svc.sync && navigator.serviceWorker.controller) {
			return navigator.serviceWorker.ready.then(()=>{
		        var promise = this.msgdispatch.reg("sync");	
	    		this.svc.sync.register(token);
				return promise.then((x,y)=>{
					if (x === false) throw y;
					else return true;
				});
			});
		}
	}
	return App.Sync.sync().then(()=>true);
}