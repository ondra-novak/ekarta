
class MsgDispatch {
	
	constructor() {
		this.promises = {};
		this.callbacks = {};
	}
	
	
	reg(name) {
		var val = this.promises[name];
		if (val === undefined) {
			var promise = new Promise(ok=>{
				this.callbacks[name] = ok;
			})
			this.promises[name] = promise
			return promise;
		} else {
			return val;
		}
	}
	
	dispatch(name) {
		var prom = this.callbacks[name];
		if (prom !== undefined) {
			delete this.promises[name];
			delete this.callbacks[name];
			var args = Array.prototype.slice.call(arguments,1);
			prom.apply(this, args);
		}		
	}
	
};

