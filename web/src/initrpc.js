

var initRPC;
var loginSupport;

(function(){
	"use strict";


initRPC = function (url, context, refresh_token_cb) {
	
	var client = new RpcClient(url);	
	client.context = context;
	client.onConnectionError = function(details, retryCnt) {
		return Promise.resolve(false);
	};
	client.onError = function(error) {
		if (error.code == 401) {				
			return refresh_token_cb();
		} else {
			return Promise.reject(error);
		}
	}
	return client.createObject();
}

loginSupport = function(rpc, name, refresh_token, login_callback) {
	var t = refresh_token;
	return async function() {
		try {
			await rpc[name].Login.login({
				token: t,
				provider: "token",
				app: "ekarta"
			});			
			return          ;
		} catch (e) {
			if (e.code == 401) {
				t = await login_callback(rpc.Login);
				return true;
			} else {
				throw e;
			}
		}
	}
}


})();
