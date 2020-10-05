// PouchDB 7.1.1
// 
// (c) 2012-2019 Dale Harvey and the PouchDB team
// PouchDB may be freely distributed under the Apache license, version 2.0.
// For all details and documentation:
// http://pouchdb.com
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).PouchDB=e()}}(function(){return function o(s,a,u){function c(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return c(s[t][1][e]||e)},i,i.exports,o,s,a,u)}return a[t].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";t.exports=function(r){return function(){var e=arguments.length;if(e){for(var t=[],n=-1;++n<e;)t[n]=arguments[n];return r.call(this,t)}return r.call(this,[])}}},{}],2:[function(e,t,n){var u=Object.create||function(e){function t(){}return t.prototype=e,new t},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n},o=Function.prototype.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}};function r(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=u(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}((t.exports=r).EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0;var i,a=10;try{var c={};Object.defineProperty&&Object.defineProperty(c,"x",{value:0}),i=0===c.x}catch(e){i=!1}function f(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var i,o,s;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=u(null),e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=f(e))&&0<i&&s.length>i){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,"object"==typeof console&&console.warn&&console.warn("%s: %s",a.name,a.message)}}else s=o[t]=n,++e._eventsCount;return e}function d(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=o.call(d,r);return i.listener=n,r.wrapFn=i}function p(e,t,n){var r=e._events;if(!r)return[];var i=r[t];return i?"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):y(i,i.length):[]}function v(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function y(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}i?Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');a=e}}):r.defaultMaxListeners=a,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return f(this)},r.prototype.emit=function(e,t,n,r){var i,o,s,a,u,c,f="error"===e;if(c=this._events)f=f&&null==c.error;else if(!f)return!1;if(f){if(1<arguments.length&&(i=t),i instanceof Error)throw i;var l=new Error('Unhandled "error" event. ('+i+")");throw l.context=i,l}if(!(o=c[e]))return!1;var d="function"==typeof o;switch(s=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=y(e,r),o=0;o<r;++o)i[o].call(n)}(o,d,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=y(e,i),s=0;s<i;++s)o[s].call(n,r)}(o,d,this,t);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=y(e,o),a=0;a<o;++a)s[a].call(n,r,i)}(o,d,this,t,n);break;case 4:!function(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=y(e,s),u=0;u<s;++u)a[u].call(n,r,i,o)}(o,d,this,t,n,r);break;default:for(a=new Array(s-1),u=1;u<s;u++)a[u-1]=arguments[u];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=y(e,i),s=0;s<i;++s)o[s].apply(n,r)}(o,d,this,a)}return!0},r.prototype.on=r.prototype.addListener=function(e,t){return l(this,e,t,!1)},r.prototype.prependListener=function(e,t){return l(this,e,t,!0)},r.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,h(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,h(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=u(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;0<=o;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),r.removeListener&&this.emit("removeListener",e,s||t)}return this},r.prototype.removeAllListeners=function(e){var t,n,r;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=u(null),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=u(null):delete n[e]),this;if(0===arguments.length){var i,o=s(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=u(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(r=t.length-1;0<=r;r--)this.removeListener(e,t[r]);return this},r.prototype.listeners=function(e){return p(this,e,!0)},r.prototype.rawListeners=function(e){return p(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},r.prototype.listenerCount=v,r.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]}},{}],3:[function(e,f,t){(function(t){"use strict";var n,r,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,o=new e(c),s=t.document.createTextNode("");o.observe(s,{characterData:!0}),n=function(){s.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)n="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){c(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(c,0)};else{var a=new t.MessageChannel;a.port1.onmessage=c,n=function(){a.port2.postMessage(0)}}var u=[];function c(){var e,t;r=!0;for(var n=u.length;n;){for(t=u,u=[],e=-1;++e<n;)t[e]();n=u.length}r=!1}f.exports=function(e){1!==u.push(e)||r||n()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],5:[function(e,t,n){var r,i,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,f=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?f=c.concat(f):d=-1,f.length&&p())}function p(){if(!l){var e=u(h);l=!0;for(var t=f.length;t;){for(c=f,f=[];++d<t;)c&&c[d].run();d=-1,t=f.length}c=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||l||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],6:[function(e,n,r){!function(e){if("object"==typeof r)n.exports=e();else{var t;try{t=window}catch(e){t=self}t.SparkMD5=e()}}(function(c){"use strict";var r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function f(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+t[1]-389564586|0)<<12|o>>>20)+n|0)&n|~o&r)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&n)+t[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+t[5]+1200080426|0)<<12|o>>>20)+n|0)&n|~o&r)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&n)+t[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+t[9]-1958414417|0)<<12|o>>>20)+n|0)&n|~o&r)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&n)+t[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+t[13]-40341101|0)<<12|o>>>20)+n|0)&n|~o&r)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&n)+t[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+t[6]-1069501632|0)<<9|o>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|i>>>18)+o|0)&n|o&~n)+t[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+t[10]+38016083|0)<<9|o>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|i>>>18)+o|0)&n|o&~n)+t[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+t[14]-1019803690|0)<<9|o>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|i>>>18)+o|0)&n|o&~n)+t[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+t[2]-51403784|0)<<9|o>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&n|o&~n)+t[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+t[8]-2022574463|0)<<11|o>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^n)+t[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+t[4]+1272893353|0)<<11|o>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^n)+t[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+t[0]-358537222|0)<<11|o>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^n)+t[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+t[12]-421815835|0)<<11|o>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^n)+t[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function l(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function d(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function i(e){var t,n,r,i,o,s,a=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=a;t+=64)f(u,l(e.substring(t-64,t)));for(n=(e=e.substring(t-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(f(u,r),t=0;t<16;t+=1)r[t]=0;return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,f(u,r),u}function n(e){var t,n="";for(t=0;t<4;t+=1)n+=r[e>>8*t+4&15]+r[e>>8*t&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=n(e[t]);return e.join("")}function h(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}function o(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function a(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function u(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==s(i("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(e,t){var n,r,i,o,s=this.byteLength,a=h(e,s),u=s;return t!==c&&(u=h(t,s)),u<a?new ArrayBuffer(0):(n=u-a,r=new ArrayBuffer(n),i=new Uint8Array(r),o=new Uint8Array(this,a,n),i.set(o),r)}),u.prototype.append=function(e){return this.appendBinary(o(e)),this},u.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,n=this._buff.length;for(t=64;t<=n;t+=64)f(this._hash,l(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},u.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=a(n)),this.reset(),n},u.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},u.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},u.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},u.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},u.prototype._finish=function(e,t){var n,r,i,o=t;if(e[o>>2]|=128<<(o%4<<3),55<o)for(f(this._hash,e),o=0;o<16;o+=1)e[o]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(n[2],16),i=parseInt(n[1],16)||0,e[14]=r,e[15]=i,f(this._hash,e)},u.hash=function(e,t){return u.hashBinary(o(e),t)},u.hashBinary=function(e,t){var n=s(i(e));return t?a(n):n},(u.ArrayBuffer=function(){this.reset()}).prototype.append=function(e){var t,n=function(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}(this._buff.buffer,e,!0),r=n.length;for(this._length+=e.byteLength,t=64;t<=r;t+=64)f(this._hash,d(n.subarray(t-64,t)));return this._buff=t-64<r?new Uint8Array(n.buffer.slice(t-64)):new Uint8Array(0),this},u.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=a(n)),this.reset(),n},u.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},u.ArrayBuffer.prototype.getState=function(){var e=u.prototype.getState.call(this);return e.buff=function(e){return String.fromCharCode.apply(null,new Uint8Array(e))}(e.buff),e},u.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i);for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n);return t?o:i}(e.buff,!0),u.prototype.setState.call(this,e)},u.ArrayBuffer.prototype.destroy=u.prototype.destroy,u.ArrayBuffer.prototype._finish=u.prototype._finish,u.ArrayBuffer.hash=function(e,t){var n=s(function(e){var t,n,r,i,o,s,a=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=a;t+=64)f(u,d(e.subarray(t-64,t)));for(n=(e=t-64<a?e.subarray(t-64):new Uint8Array(0)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e[t]<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(f(u,r),t=0;t<16;t+=1)r[t]=0;return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,f(u,r),u}(new Uint8Array(e)));return t?a(n):n},u})},{}],7:[function(e,t,n){var r=e(10),i=e(11),o=i;o.v1=r,o.v4=i,t.exports=o},{10:10,11:11}],8:[function(e,t,n){for(var i=[],r=0;r<256;++r)i[r]=(r+256).toString(16).substr(1);t.exports=function(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}},{}],9:[function(e,t,n){var r="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(r){var i=new Uint8Array(16);t.exports=function(){return r(i),i}}else{var o=new Array(16);t.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},{}],10:[function(e,t,n){var p,v,y=e(9),_=e(8),g=0,m=0;t.exports=function(e,t,n){var r=t&&n||0,i=t||[],o=(e=e||{}).node||p,s=void 0!==e.clockseq?e.clockseq:v;if(null==o||null==s){var a=y();null==o&&(o=p=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==s&&(s=v=16383&(a[6]<<8|a[7]))}var u=void 0!==e.msecs?e.msecs:(new Date).getTime(),c=void 0!==e.nsecs?e.nsecs:m+1,f=u-g+(c-m)/1e4;if(f<0&&void 0===e.clockseq&&(s=s+1&16383),(f<0||g<u)&&void 0===e.nsecs&&(c=0),1e4<=c)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");g=u,v=s;var l=(1e4*(268435455&(u+=122192928e5))+(m=c))%4294967296;i[r++]=l>>>24&255,i[r++]=l>>>16&255,i[r++]=l>>>8&255,i[r++]=255&l;var d=u/4294967296*1e4&268435455;i[r++]=d>>>8&255,i[r++]=255&d,i[r++]=d>>>24&15|16,i[r++]=d>>>16&255,i[r++]=s>>>8|128,i[r++]=255&s;for(var h=0;h<6;++h)i[r+h]=o[h];return t||_(i)}},{8:8,9:9}],11:[function(e,t,n){var s=e(9),a=e(8);t.exports=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||a(i)}},{8:8,9:9}],12:[function(e,t,n){"use strict";function h(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(e);else if(o===t.length-2){i[t.pop()]=e}else t.push(e)}n.stringify=function(e){var t=[];t.push({obj:e});for(var n,r,i,o,s,a,u,c,f,l,d="";n=t.pop();)if(r=n.obj,d+=n.prefix||"",i=n.val||"")d+=i;else if("object"!=typeof r)d+=void 0===r?null:JSON.stringify(r);else if(null===r)d+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),o=r.length-1;0<=o;o--)s=0===o?"":",",t.push({obj:r[o],prefix:s});t.push({val:"["})}else{for(u in a=[],r)r.hasOwnProperty(u)&&a.push(u);for(t.push({val:"}"}),o=a.length-1;0<=o;o--)f=r[c=a[o]],l=0<o?",":"",l+=JSON.stringify(c)+":",t.push({obj:f,prefix:l});t.push({val:"{"})}return d},n.parse=function(e){for(var t,n,r,i,o,s,a,u,c,f=[],l=[],d=0;;)if("}"!==(t=e[d++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":d+=3,h(null,f,l);break;case"t":d+=3,h(!0,f,l);break;case"f":d+=4,h(!1,f,l);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",d--;;){if(r=e[d++],!/[\d\.\-e\+]/.test(r)){d--;break}n+=r}h(parseFloat(n),f,l);break;case'"':for(i="",o=void 0,s=0;'"'!==(a=e[d++])||"\\"===o&&s%2==1;)i+=a,"\\"===(o=a)?s++:s=0;h(JSON.parse('"'+i+'"'),f,l);break;case"[":u={element:[],index:f.length},f.push(u.element),l.push(u);break;case"{":c={element:{},index:f.length},f.push(c.element),l.push(c);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===f.length)return f.pop();h(f.pop(),f,l)}}},{}],13:[function(Dr,Ir,e){(function(u,e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var b,x,T=t(Dr(3)),r=t(Dr(7)),d=t(Dr(6)),i=t(Dr(12)),f=t(Dr(1)),o=t(Dr(4)),a=Dr(2);function s(e){return"$"+e}function c(){this._store={}}function n(e){if(this._store=new c,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function l(e){if(e instanceof ArrayBuffer)return function(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}c.prototype.get=function(e){var t=s(e);return this._store[t]},c.prototype.set=function(e,t){var n=s(e);return this._store[n]=t,!0},c.prototype.has=function(e){return s(e)in this._store},c.prototype.delete=function(e){var t=s(e),n=t in this._store;return delete this._store[t],n},c.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var i=t[n];e(this._store[i],i=i.substring(1))}},Object.defineProperty(c.prototype,"size",{get:function(){return Object.keys(this._store).length}}),n.prototype.add=function(e){return this._store.set(e,!0)},n.prototype.has=function(e){return this._store.has(e)},n.prototype.forEach=function(n){this._store.forEach(function(e,t){n(t)})},Object.defineProperty(n.prototype,"size",{get:function(){return this._store.size}}),x=function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(b=Set,Map):(b=n,c);var h=Function.prototype.toString,p=h.call(Object);function R(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=R(e[n]);return t}if(e instanceof Date)return e.toISOString();if(function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}(e))return l(e);if(!function(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&h.call(n)==p}(e))return e;for(n in t={},e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=R(e[n]);void 0!==i&&(t[n]=i)}return t}function v(t){var n=!1;return f(function(e){if(n)throw new Error("once called more than once");n=!0,t.apply(this,e)})}function y(s){return f(function(i){i=R(i);var o=this,t="function"==typeof i[i.length-1]&&i.pop(),e=new Promise(function(n,r){var e;try{var t=v(function(e,t){e?r(e):n(t)});i.push(t),(e=s.apply(o,i))&&"function"==typeof e.then&&n(e)}catch(e){r(e)}});return t&&e.then(function(e){t(null,e)},t),e})}function m(o,e){return y(f(function(r){if(this._closed)return Promise.reject(new Error("database is closed"));if(this._destroyed)return Promise.reject(new Error("database is destroyed"));var i=this;return function(r,i,e){if(r.constructor.listeners("debug").length){for(var t=["api",r.name,i],n=0;n<e.length-1;n++)t.push(e[n]);r.constructor.emit("debug",t);var o=e[e.length-1];e[e.length-1]=function(e,t){var n=["api",r.name,i];n=n.concat(e?["error",e]:["success",t]),r.constructor.emit("debug",n),o(e,t)}}}(i,o,r),this.taskqueue.isReady?e.apply(this,r):new Promise(function(t,n){i.taskqueue.addTask(function(e){e?n(e):t(i[o].apply(i,r))})})}))}function w(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r];o in e&&(n[o]=e[o])}return n}var _,g=6;function k(e){return e}function j(e){return[{ok:e}]}function O(a,u,e){var t=u.docs,c=new x;t.forEach(function(e){c.has(e.id)?c.get(e.id).push(e):c.set(e.id,[e])});var n=c.size,r=0,f=new Array(n);function l(){++r===n&&function(){var n=[];f.forEach(function(t){t.docs.forEach(function(e){n.push({id:t.id,docs:[e]})})}),e(null,{results:n})}()}var i=[];c.forEach(function(e,t){i.push(t)});var o=0;function d(){if(!(o>=i.length)){var e=Math.min(o+g,i.length),t=i.slice(o,e);!function(e,s){e.forEach(function(r,e){var i=s+e,t=c.get(r),n=w(t[0],["atts_since","attachments"]);n.open_revs=t.map(function(e){return e.rev}),n.open_revs=n.open_revs.filter(k);var o=k;0===n.open_revs.length&&(delete n.open_revs,o=j),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in u&&(n[e]=u[e])}),a.get(r,n,function(e,t){var n;n=e?[{error:e}]:o(t),function(e,t,n){f[e]={id:t,docs:n},l()}(i,r,n),d()})})}(t,o),o+=t.length}}d()}try{localStorage.setItem("_pouch_check_localstorage",1),_=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){_=!1}function A(){return _}function q(){a.EventEmitter.call(this),this._listeners={},function(t){A()&&addEventListener("storage",function(e){t.emit(e.key)})}(this)}function E(e){if("undefined"!=typeof console&&"function"==typeof console[e]){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function M(e){var t=0;return e||(t=2e3),function(e,t){return e=parseInt(e,10)||0,(t=parseInt(t,10))!=t||t<=e?t=(e||1)<<1:t+=1,6e5<t&&(e=3e5,t=6e5),~~((t-e)*Math.random()+e)}(e,t)}function S(e,t){E("info","The above "+e+" is totally normal. "+t)}o(q,a.EventEmitter),q.prototype.addListener=function(e,t,n,r){if(!this._listeners[t]){var i=this,o=!1;this._listeners[t]=s,this.on(e,s)}function s(){if(i._listeners[t])if(o)o="waiting";else{o=!0;var e=w(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary","return_docs"]);n.changes(e).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===o&&T(s),o=!1}).on("error",function(){o=!1})}}},q.prototype.removeListener=function(e,t){t in this._listeners&&(a.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},q.prototype.notifyLocalWindows=function(e){A()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},q.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var C="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};function P(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}o(P,Error),P.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};new P(401,"unauthorized","Name or password is incorrect.");var L=new P(400,"bad_request","Missing JSON list of 'docs'"),$=new P(404,"not_found","missing"),D=new P(409,"conflict","Document update conflict"),I=new P(400,"bad_request","_id field must contain a string"),B=new P(412,"missing_id","_id is required for puts"),N=new P(400,"bad_request","Only reserved document ids may start with underscore."),U=(new P(412,"precondition_failed","Database not open"),new P(500,"unknown_error","Database encountered an unknown error")),F=new P(500,"badarg","Some query argument is invalid"),K=(new P(400,"invalid_request","Request was invalid"),new P(400,"query_parse_error","Some query parameter is invalid")),J=new P(500,"doc_validation","Bad special document member"),z=new P(400,"bad_request","Something wrong with the request"),V=new P(400,"bad_request","Document must be a JSON object"),G=(new P(404,"not_found","Database not found"),new P(500,"indexed_db_went_bad","unknown")),Q=(new P(500,"web_sql_went_bad","unknown"),new P(500,"levelDB_went_went_bad","unknown"),new P(403,"forbidden","Forbidden by design doc validate_doc_update function"),new P(400,"bad_request","Invalid rev format")),W=(new P(412,"file_exists","The database could not be created, the file already exists."),new P(412,"missing_stub","A pre-existing attachment stub wasn't found"));new P(413,"invalid_url","Provided URL is invalid");function Y(n,e){function t(e){for(var t in n)"function"!=typeof n[t]&&(this[t]=n[t]);void 0!==e&&(this.reason=e)}return t.prototype=P.prototype,new t(e)}function H(e){if("object"!=typeof e){var t=e;(e=U).data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function X(r){var i={},o=r.filter&&"function"==typeof r.filter;return i.query=r.query_params,function(e){e.doc||(e.doc={});var t=o&&function(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return Y(z,r)}}(r.filter,e.doc,i);if("object"==typeof t)return t;if(t)return!1;if(r.include_docs){if(!r.attachments)for(var n in e.doc._attachments)e.doc._attachments.hasOwnProperty(n)&&(e.doc._attachments[n].stub=!0)}else delete e.doc;return!0}}function Z(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function ee(e){var t;if(e?"string"!=typeof e?t=Y(I):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=Y(N)):t=Y(B),t)throw t}function te(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(E("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function ne(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function re(e){var t=ne(e);return t?t.join("/"):null}var ie=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],oe="queryKey",se=/(?:^|&)([^&=]*)=?([^&]*)/g,ae=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;function ue(e){for(var t=ae.exec(e),r={},n=14;n--;){var i=ie[n],o=t[n]||"",s=-1!==["user","password"].indexOf(i);r[i]=s?decodeURIComponent(o):o}return r[oe]={},r[ie[12]].replace(se,function(e,t,n){t&&(r[oe][t]=n)}),r}function ce(e,t){var n=[],r=[];for(var i in t)t.hasOwnProperty(i)&&(n.push(i),r.push(t[i]));return n.push(e),Function.apply(null,n).apply(null,r)}function fe(s,a,u){return new Promise(function(i,o){s.get(a,function(e,t){if(e){if(404!==e.status)return o(e);t={}}var n=t._rev,r=u(t);if(!r)return i({updated:!1,rev:n});r._id=a,r._rev=n,i(function(t,n,r){return t.put(n).then(function(e){return{updated:!0,rev:e.rev}},function(e){if(409!==e.status)throw e;return fe(t,n._id,r)})}(s,r,u))})})}var le=function(e){return atob(e)},de=function(e){return btoa(e)};function he(t,n){t=t||[],n=n||{};try{return new Blob(t,n)}catch(e){if("TypeError"!==e.name)throw e;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),i=0;i<t.length;i+=1)r.append(t[i]);return r.getBlob(n.type)}}function pe(e,t){return he([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}(e)],{type:t})}function ve(e,t){return pe(le(e),t)}function ye(e,n){var t=new FileReader,r="function"==typeof t.readAsBinaryString;t.onloadend=function(e){var t=e.target.result||"";if(r)return n(t);n(function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,i=0;i<r;i++)t+=String.fromCharCode(n[i]);return t}(t))},r?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}function _e(e,t){ye(e,function(e){t(e)})}function ge(e,t){_e(e,function(e){t(de(e))})}var me=e.setImmediate||e.setTimeout,be=32768;function we(t,e,n,r,i){(0<n||r<e.size)&&(e=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}(e,n,r)),function(e,n){var t=new FileReader;t.onloadend=function(e){var t=e.target.result||new ArrayBuffer(0);n(t)},t.readAsArrayBuffer(e)}(e,function(e){t.append(e),i()})}function ke(e,t,n,r,i){(0<n||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),i()}function je(n,t){var e="string"==typeof n,r=e?n.length:n.size,i=Math.min(be,r),o=Math.ceil(r/i),s=0,a=e?new d:new d.ArrayBuffer,u=e?ke:we;function c(){me(l)}function f(){var e=function(e){return de(e)}(a.end(!0));t(e),a.destroy()}function l(){var e=s*i,t=e+i;u(a,n,e,t,++s<o?c:f)}l()}function Oe(e){return d.hash(e)}function Ae(e,t){var n=R(e);return t?(delete n._rev_tree,Oe(JSON.stringify(n))):r.v4().replace(/-/g,"").toLowerCase()}var qe=r.v4;function Ee(e){for(var t,n,r,i,o=e.rev_tree.slice();i=o.pop();){var s=i.ids,a=s[2],u=i.pos;if(a.length)for(var c=0,f=a.length;c<f;c++)o.push({pos:u+1,ids:a[c]});else{var l=!!s[1].deleted,d=s[0];t&&!(r!==l?r:n!==u?n<u:t<d)||(t=d,n=u,r=l)}}return n+"-"+t}function Se(e,t){for(var n,r=e.slice();n=r.pop();)for(var i=n.pos,o=n.ids,s=o[2],a=t(0===s.length,i,o[0],n.ctx,o[1]),u=0,c=s.length;u<c;u++)r.push({pos:i+1,ids:s[u],ctx:a})}function xe(e,t){return e.pos-t.pos}function Ce(e){var o=[];Se(e,function(e,t,n,r,i){e&&o.push({rev:t+"-"+n,pos:t,opts:i})}),o.sort(xe).reverse();for(var t=0,n=o.length;t<n;t++)delete o[t].pos;return o}function Pe(e){for(var t=Ee(e),n=Ce(e.rev_tree),r=[],i=0,o=n.length;i<o;i++){var s=n[i];s.rev===t||s.opts.deleted||r.push(s.rev)}return r}function Le(e){for(var t,n=[],r=e.slice();t=r.pop();){var i=t.pos,o=t.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=t.history?t.history.slice():[];f.push({id:s,opts:a}),c&&n.push({pos:i+1-f.length,ids:f});for(var l=0,d=u.length;l<d;l++)r.push({pos:i+1,ids:u[l],history:f})}return n.reverse()}function $e(e,t){return e.pos-t.pos}function De(e,t){for(var n,r,i=t,o=e.length;i<o;i++){var s=e[i],a=[s.id,s.opts,[]];r?(r[2].push(a),r=a):n=r=a}return n}function Ie(e,t){return e[0]<t[0]?-1:1}function Be(e,t){for(var n,r,i,o=[{tree1:e,tree2:t}],s=!1;0<o.length;){var a=o.pop(),u=a.tree1,c=a.tree2;(u[1].status||c[1].status)&&(u[1].status="available"===u[1].status||"available"===c[1].status?"available":"missing");for(var f=0;f<c[2].length;f++)if(u[2][0]){for(var l=!1,d=0;d<u[2].length;d++)u[2][d][0]===c[2][f][0]&&(o.push({tree1:u[2][d],tree2:c[2][f]}),l=!0);l||(s="new_branch",n=u[2],r=c[2][f],void 0,i=function(e,t,n){for(var r,i=0,o=e.length;i<o;)n(e[r=i+o>>>1],t)<0?i=1+r:o=r;return i}(n,r,Ie),n.splice(i,0,r))}else s="new_leaf",u[2][0]=c[2][f]}return{conflicts:s,tree:e}}function Te(e,t,n){var r,i=[],o=!1,s=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var a=0,u=e.length;a<u;a++){var c=e[a];if(c.pos===t.pos&&c.ids[0]===t.ids[0])r=Be(c.ids,t.ids),i.push({pos:c.pos,ids:r.tree}),o=o||r.conflicts,s=!0;else if(!0!==n){var f=c.pos<t.pos?c:t,l=c.pos<t.pos?t:c,d=l.pos-f.pos,h=[],p=[];for(p.push({ids:f.ids,diff:d,parent:null,parentIdx:null});0<p.length;){var v=p.pop();if(0!==v.diff)for(var y=v.ids[2],_=0,g=y.length;_<g;_++)p.push({ids:y[_],diff:v.diff-1,parent:v.ids,parentIdx:_});else v.ids[0]===l.ids[0]&&h.push(v)}var m=h[0];m?(r=Be(m.ids,l.ids),m.parent[2][m.parentIdx]=r.tree,i.push({pos:f.pos,ids:f.ids}),o=o||r.conflicts,s=!0):i.push(c)}else i.push(c)}return s||i.push(t),i.sort($e),{tree:i,conflicts:o||"internal_node"}}function Re(e,t,n){var r=Te(e,t),i=function(e,t){for(var r,n,i=Le(e),o=0,s=i.length;o<s;o++){var a,u=i[o],c=u.ids;if(c.length>t){r||(r={});var f=c.length-t;a={pos:u.pos+f,ids:De(c,f)};for(var l=0;l<f;l++){var d=u.pos+l+"-"+c[l].id;r[d]=!0}}else a={pos:u.pos,ids:De(c,0)};n=n?Te(n,a,!0).tree:[a]}return r&&Se(n,function(e,t,n){delete r[t+"-"+n]}),{tree:n,revs:r?Object.keys(r):[]}}(r.tree,n);return{tree:i.tree,stemmedRevs:i.revs,conflicts:r.conflicts}}function Me(e){return e.ids}function Ne(e,t){t||(t=Ee(e));for(var n,r=t.substring(t.indexOf("-")+1),i=e.rev_tree.map(Me);n=i.pop();){if(n[0]===r)return!!n[1].deleted;i=i.concat(n[2])}}function Ue(e){return/^_local/.test(e)}function Fe(n,t,r){a.EventEmitter.call(this);var i=this;this.db=n;var o=(t=t?R(t):{}).complete=v(function(e,t){e?0<function(e,t){return"listenerCount"in e?e.listenerCount(t):a.EventEmitter.listenerCount(e,t)}(i,"error")&&i.emit("error",e):i.emit("complete",t),i.removeAllListeners(),n.removeListener("destroyed",s)});function s(){i.cancel()}r&&(i.on("complete",function(e){r(null,e)}),i.on("error",r)),n.once("destroyed",s),t.onChange=function(e,t,n){i.isCancelled||function(e,t,n,r){try{e.emit("change",t,n,r)}catch(e){E("error",'Error in .on("change", function):',e)}}(i,e,t,n)};var e=new Promise(function(n,r){t.complete=function(e,t){e?r(e):n(t)}});i.once("cancel",function(){n.removeListener("destroyed",s),t.complete(null,{status:"cancelled"})}),this.then=e.then.bind(e),this.catch=e.catch.bind(e),this.then(function(e){o(null,e)},o),n.taskqueue.isReady?i.validateChanges(t):n.taskqueue.addTask(function(e){e?t.complete(e):i.isCancelled?i.emit("cancel"):i.validateChanges(t)})}function Ke(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=Ce(t.rev_tree).map(function(e){return{rev:e.rev}}));var i={id:t.id,changes:r,doc:e};return Ne(t,e._rev)&&(i.deleted=!0),n.conflicts&&(i.doc._conflicts=Pe(t),i.doc._conflicts.length||delete i.doc._conflicts),i}function Je(e,t){return e<t?-1:t<e?1:0}function ze(n,r){return function(e,t){e||t[0]&&t[0].error?((e=e||t[0]).docId=r,n(e)):n(null,t.length?t[0]:t)}}function Ve(e,t){var n=Je(e._id,t._id);return 0!==n?n:Je(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function Ge(){for(var e in a.EventEmitter.call(this),Ge.prototype)"function"==typeof this[e]&&(this[e]=this[e].bind(this))}function Qe(){this.isReady=!1,this.failed=!1,this.queue=[]}function We(e,t){if(!(this instanceof We))return new We(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),void 0===t.deterministic_revs&&(t.deterministic_revs=!0),this.__opts=t=R(t),n.auto_compaction=t.auto_compaction,n.prefix=We.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=function(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=We.adapters,i=We.preferredAdapters,o=We.prefix,s=t.adapter;if(!s)for(var a=0;a<i.length&&("idb"===(s=i[a])&&"websql"in r&&A()&&localStorage["_pouch__websqldb_"+o+e]);++a)E("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.');var u=r[s];return{name:!(u&&"use_prefix"in u)||u.use_prefix?o+e:e,adapter:s}}((t.prefix||"")+e,t);if(t.name=r.name,t.adapter=t.adapter||r.adapter,n.name=e,n._adapter=t.adapter,We.emit("debug",["adapter","Picked adapter: ",t.adapter]),!We.adapters[t.adapter]||!We.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);Ge.call(n),n.taskqueue=new Qe,n.adapter=t.adapter,We.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);!function(t){function e(e){t.removeListener("closed",n),e||t.constructor.emit("destroyed",t.name)}function n(){t.removeListener("destroyed",e),t.constructor.emit("unref",t)}t.once("destroyed",e),t.once("closed",n),t.constructor.emit("ref",t)}(n),n.emit("created",n),We.emit("created",n.name),n.taskqueue.ready(n)})}o(Fe,a.EventEmitter),Fe.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},Fe.prototype.validateChanges=function(t){var n=t.complete,r=this;We._changesFilterPlugin?We._changesFilterPlugin.validate(t,function(e){if(e)return n(e);r.doChanges(t)}):r.doChanges(t)},Fe.prototype.doChanges=function(t){var n=this,r=t.complete;if("live"in(t=R(t))&&!("continuous"in t)&&(t.continuous=t.live),t.processChange=Ke,"latest"===t.since&&(t.since="now"),t.since||(t.since=0),"now"!==t.since){if(We._changesFilterPlugin){if(We._changesFilterPlugin.normalize(t),We._changesFilterPlugin.shouldFilter(this,t))return We._changesFilterPlugin.filter(this,t)}else["doc_ids","filter","selector","view"].forEach(function(e){e in t&&E("warn",'The "'+e+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')});"descending"in t||(t.descending=!1),t.limit=0===t.limit?1:t.limit,t.complete=r;var i=this.db._changes(t);if(i&&"function"==typeof i.cancel){var o=n.cancel;n.cancel=f(function(e){i.cancel(),o.apply(this,e)})}}else this.db.info().then(function(e){n.isCancelled?r(null,{status:"cancelled"}):(t.since=e.update_seq,n.doChanges(t))},r)},o(Ge,a.EventEmitter),Ge.prototype.post=m("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(Y(V));this.bulkDocs({docs:[e]},t,ze(n,e._id))}),Ge.prototype.put=m("put",function(n,t,r){if("function"==typeof t&&(r=t,t={}),"object"!=typeof n||Array.isArray(n))return r(Y(V));if(ee(n._id),Ue(n._id)&&"function"==typeof this._putLocal)return n._deleted?this._removeLocal(n,r):this._putLocal(n,r);var e,i,o,s,a=this;function u(e){"function"==typeof a._put&&!1!==t.new_edits?a._put(n,t,e):a.bulkDocs({docs:[n]},t,ze(e,n._id))}t.force&&n._rev?(e=n._rev.split("-"),i=e[1],o=parseInt(e[0],10)+1,s=Ae(),n._revisions={start:o,ids:[s,i]},n._rev=o+"-"+s,t.new_edits=!1,u(function(e){var t=e?null:{ok:!0,id:n._id,rev:n._rev};r(e,t)})):u(r)}),Ge.prototype.putAttachment=m("putAttachment",function(t,n,r,i,o){var s=this;function a(e){var t="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[n]={content_type:o,data:i,revpos:++t},s.put(e)}return"function"==typeof o&&(o=i,i=r,r=null),void 0===o&&(o=i,i=r,r=null),o||E("warn","Attachment",n,"on document",t,"is missing content_type"),s.get(t).then(function(e){if(e._rev!==r)throw Y(D);return a(e)},function(e){if(e.reason===$.message)return a({_id:t});throw e})}),Ge.prototype.removeAttachment=m("removeAttachment",function(e,n,r,i){var o=this;o.get(e,function(e,t){if(e)i(e);else if(t._rev===r){if(!t._attachments)return i();delete t._attachments[n],0===Object.keys(t._attachments).length&&delete t._attachments,o.put(t,i)}else i(Y(D))})}),Ge.prototype.remove=m("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,n="function"==typeof t?(r=t,{}):(r=n,t)),(n=n||{}).was_delete=!0;var o={_id:i._id,_rev:i._rev||n.rev,_deleted:!0};if(Ue(o._id)&&"function"==typeof this._removeLocal)return this._removeLocal(i,r);this.bulkDocs({docs:[o]},n,ze(r,o._id))}),Ge.prototype.revsDiff=m("revsDiff",function(i,e,o){"function"==typeof e&&(o=e,e={});var s=Object.keys(i);if(!s.length)return o(null,{});var a=0,u=new x;function c(e,t){u.has(e)||u.set(e,{missing:[]}),u.get(e).missing.push(t)}s.map(function(r){this._getRevisionTree(r,function(e,t){if(e&&404===e.status&&"missing"===e.message)u.set(r,{missing:i[r]});else{if(e)return o(e);!function(a,e){var u=i[a].slice(0);Se(e,function(e,t,n,r,i){var o=t+"-"+n,s=u.indexOf(o);-1!==s&&(u.splice(s,1),"available"!==i.status&&c(a,o))}),u.forEach(function(e){c(a,e)})}(r,t)}if(++a===s.length){var n={};return u.forEach(function(e,t){n[t]=e}),o(null,n)}})},this)}),Ge.prototype.bulkGet=m("bulkGet",function(e,t){O(this,e,t)}),Ge.prototype.compactDocument=m("compactDocument",function(r,i,o){var u=this;this._getRevisionTree(r,function(e,t){if(e)return o(e);var n=function(e){var o={},s=[];return Se(e,function(e,t,n,r){var i=t+"-"+n;return e&&(o[i]=0),void 0!==r&&s.push({from:r,to:i}),i}),s.reverse(),s.forEach(function(e){void 0===o[e.from]?o[e.from]=1+o[e.to]:o[e.from]=Math.min(o[e.from],1+o[e.to])}),o}(t),s=[],a=[];Object.keys(n).forEach(function(e){n[e]>i&&s.push(e)}),Se(t,function(e,t,n,r,i){var o=t+"-"+n;"available"===i.status&&-1!==s.indexOf(o)&&a.push(o)}),u._doCompaction(r,a,o)})}),Ge.prototype.compact=m("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&function n(r){var e=r._compactionQueue[0],t=e.opts,i=e.callback;r.get("_local/compaction").catch(function(){return!1}).then(function(e){e&&e.last_seq&&(t.last_seq=e.last_seq),r._compact(t,function(e,t){e?i(e):i(null,t),T(function(){r._compactionQueue.shift(),r._compactionQueue.length&&n(r)})})})}(n)}),Ge.prototype._compact=function(e,n){var r=this,t={return_docs:!1,last_seq:e.last_seq||0},i=[];r.changes(t).on("change",function(e){i.push(r.compactDocument(e.id,0))}).on("complete",function(e){var t=e.last_seq;Promise.all(i).then(function(){return fe(r,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<t)&&(e.last_seq=t,e)})}).then(function(){n(null,{ok:!0})}).catch(n)}).on("error",n)},Ge.prototype.get=m("get",function(b,w,k){if("function"==typeof w&&(k=w,w={}),"string"!=typeof b)return k(Y(I));if(Ue(b)&&"function"==typeof this._getLocal)return this._getLocal(b,k);var n=[],j=this;function r(){var s=[],a=n.length;if(!a)return k(null,s);n.forEach(function(o){j.get(b,{rev:o,revs:w.revs,latest:w.latest,attachments:w.attachments,binary:w.binary},function(e,t){if(e)s.push({missing:o});else{for(var n,r=0,i=s.length;r<i;r++)if(s[r].ok&&s[r].ok._rev===t._rev){n=!0;break}n||s.push({ok:t})}--a||k(null,s)})})}if(!w.open_revs)return this._get(b,w,function(e,t){if(e)return e.docId=b,k(e);var i=t.doc,n=t.metadata,o=t.ctx;if(w.conflicts){var r=Pe(n);r.length&&(i._conflicts=r)}if(Ne(n,i._rev)&&(i._deleted=!0),w.revs||w.revs_info){for(var s=i._rev.split("-"),a=parseInt(s[0],10),u=s[1],c=Le(n.rev_tree),f=null,l=0;l<c.length;l++){var d=c[l],h=d.ids.map(function(e){return e.id}).indexOf(u);(h===a-1||!f&&-1!==h)&&(f=d)}if(!f)return(e=new Error("invalid rev tree")).docId=b,k(e);var p=f.ids.map(function(e){return e.id}).indexOf(i._rev.split("-")[1])+1,v=f.ids.length-p;if(f.ids.splice(p,v),f.ids.reverse(),w.revs&&(i._revisions={start:f.pos+f.ids.length-1,ids:f.ids.map(function(e){return e.id})}),w.revs_info){var y=f.pos+f.ids.length;i._revs_info=f.ids.map(function(e){return{rev:--y+"-"+e.id,status:e.opts.status}})}}if(w.attachments&&i._attachments){var _=i._attachments,g=Object.keys(_).length;if(0===g)return k(null,i);Object.keys(_).forEach(function(r){this._getAttachment(i._id,r,_[r],{rev:i._rev,binary:w.binary,ctx:o},function(e,t){var n=i._attachments[r];n.data=t,delete n.stub,delete n.length,--g||k(null,i)})},j)}else{if(i._attachments)for(var m in i._attachments)i._attachments.hasOwnProperty(m)&&(i._attachments[m].stub=!0);k(null,i)}});if("all"===w.open_revs)this._getRevisionTree(b,function(e,t){if(e)return k(e);n=Ce(t).map(function(e){return e.rev}),r()});else{if(!Array.isArray(w.open_revs))return k(Y(U,"function_clause"));n=w.open_revs;for(var e=0;e<n.length;e++){var t=n[e];if("string"!=typeof t||!/^\d+-/.test(t))return k(Y(Q))}r()}}),Ge.prototype.getAttachment=m("getAttachment",function(n,r,i,o){var s=this;i instanceof Function&&(o=i,i={}),this._get(n,i,function(e,t){return e?o(e):t.doc._attachments&&t.doc._attachments[r]?(i.ctx=t.ctx,i.binary=!0,void s._getAttachment(n,r,t.doc._attachments[r],i,o)):o(Y($))})}),Ge.prototype.allDocs=m("allDocs",function(t,e){if("function"==typeof t&&(e=t,t={}),t.skip=void 0!==t.skip?t.skip:0,t.start_key&&(t.startkey=t.start_key),t.end_key&&(t.endkey=t.end_key),"keys"in t){if(!Array.isArray(t.keys))return e(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(e){return e in t})[0];if(n)return void e(Y(K,"Query parameter `"+n+"` is not compatible with multi-get"));if(!te(this)&&(function(e){var t="limit"in e?e.keys.slice(e.skip,e.limit+e.skip):0<e.skip?e.keys.slice(e.skip):e.keys;e.keys=t,e.skip=0,delete e.limit,e.descending&&(t.reverse(),e.descending=!1)}(t),0===t.keys.length))return this._allDocs({limit:0},e)}return this._allDocs(t,e)}),Ge.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),(e=e||{}).return_docs="return_docs"in e?e.return_docs:!e.live,new Fe(this,e,t)},Ge.prototype.close=m("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),Ge.prototype.info=m("info",function(n){var r=this;this._info(function(e,t){if(e)return n(e);t.db_name=t.db_name||r.name,t.auto_compaction=!(!r.auto_compaction||te(r)),t.adapter=r.adapter,n(null,t)})}),Ge.prototype.id=m("id",function(e){return this._id(e)}),Ge.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},Ge.prototype.bulkDocs=m("bulkDocs",function(e,i,o){if("function"==typeof i&&(o=i,i={}),i=i||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return o(Y(L));for(var t=0;t<e.docs.length;++t)if("object"!=typeof e.docs[t]||Array.isArray(e.docs[t]))return o(Y(V));var n;if(e.docs.forEach(function(t){t._attachments&&Object.keys(t._attachments).forEach(function(e){n=n||function(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}(e),t._attachments[e].content_type||E("warn","Attachment",e,"on document",t._id,"is missing content_type")})}),n)return o(Y(z,n));"new_edits"in i||(i.new_edits=!("new_edits"in e)||e.new_edits);var s=this;i.new_edits||te(s)||e.docs.sort(Ve),function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),i=0;i<r.length;i++){var o=r[i];n._attachments[o]=w(n._attachments[o],["data","digest","content_type","length","revpos","stub"])}}}(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,i,function(e,t){if(e)return o(e);if(i.new_edits||(t=t.filter(function(e){return e.error})),!te(s))for(var n=0,r=t.length;n<r;n++)t[n].id=t[n].id||a[n];o(null,t)})}),Ge.prototype.registerDependentDatabase=m("registerDependentDatabase",function(t,e){var n=new this.constructor(t,this.__opts);fe(this,"_local/_pouch_dependentDbs",function(e){return e.dependentDbs=e.dependentDbs||{},!e.dependentDbs[t]&&(e.dependentDbs[t]=!0,e)}).then(function(){e(null,{db:n})}).catch(e)}),Ge.prototype.destroy=m("destroy",function(e,o){"function"==typeof e&&(o=e,e={});var s=this,a=!("use_prefix"in s)||s.use_prefix;function u(){s._destroy(e,function(e,t){if(e)return o(e);s._destroyed=!0,s.emit("destroyed"),o(null,t||{ok:!0})})}if(te(s))return u();s.get("_local/_pouch_dependentDbs",function(e,t){if(e)return 404!==e.status?o(e):u();var n=t.dependentDbs,r=s.constructor,i=Object.keys(n).map(function(e){var t=a?e.replace(new RegExp("^"+r.prefix),""):e;return new r(t,s.__opts).destroy()});Promise.all(i).then(u,o)})}),Qe.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},Qe.prototype.fail=function(e){this.failed=e,this.execute()},Qe.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},Qe.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},o(We,Ge);var Ye="undefined"!=typeof AbortController?AbortController:function(){return{abort:function(){}}},He=fetch,Xe=Headers;We.adapters={},We.preferredAdapters=[],We.prefix="_pouch_";var Ze=new a.EventEmitter;!function(t){Object.keys(a.EventEmitter.prototype).forEach(function(e){"function"==typeof a.EventEmitter.prototype[e]&&(t[e]=Ze[e].bind(Ze))});var r=t._destructionListeners=new x;t.on("ref",function(e){r.has(e.name)||r.set(e.name,[]),r.get(e.name).push(e)}),t.on("unref",function(e){if(r.has(e.name)){var t=r.get(e.name),n=t.indexOf(e);n<0||(t.splice(n,1),1<t.length?r.set(e.name,t):r.delete(e.name))}}),t.on("destroyed",function(e){if(r.has(e)){var t=r.get(e);r.delete(e),t.forEach(function(e){e.emit("destroyed",!0)})}})}(We),We.adapter=function(e,t,n){t.valid()&&(We.adapters[e]=t,n&&We.preferredAdapters.push(e))},We.plugin=function(t){if("function"==typeof t)t(We);else{if("object"!=typeof t||0===Object.keys(t).length)throw new Error('Invalid plugin: got "'+t+'", expected an object or a function');Object.keys(t).forEach(function(e){We.prototype[e]=t[e]})}return this.__defaults&&(We.__defaults=C({},this.__defaults)),We},We.defaults=function(e){function n(e,t){if(!(this instanceof n))return new n(e,t);t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),t=C({},n.__defaults,t),We.call(this,e,t)}return o(n,We),n.preferredAdapters=We.preferredAdapters.slice(),Object.keys(We).forEach(function(e){e in n||(n[e]=We[e])}),n.__defaults=C({},this.__defaults,e),n},We.fetch=function(e,t){return He(e,t)};function et(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n}function tt(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r];"."===o?n=0<r&&"\\"===e[r-1]?n.substring(0,n.length-1)+".":(t.push(n),""):n+=o}return t.push(n),t}var nt=["$or","$nor","$not"];function rt(e){return-1<nt.indexOf(e)}function it(e){return Object.keys(e)[0]}function ot(e){var i={};return e.forEach(function(t){Object.keys(t).forEach(function(e){var n=t[e];if("object"!=typeof n&&(n={$eq:n}),rt(e))n instanceof Array?i[e]=n.map(function(e){return ot([e])}):i[e]=ot([n]);else{var r=i[e]=i[e]||{};Object.keys(n).forEach(function(e){var t=n[e];return"$gt"===e||"$gte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t}(e,t,r):"$lt"===e||"$lte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t}(e,t,r):"$ne"===e?function(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}(t,r):"$eq"===e?function(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}(t,r):void(r[e]=t)})}})}),i}function st(e){var t=R(e),n=!1;!function e(t,n){for(var r in t){"$and"===r&&(n=!0);var i=t[r];"object"==typeof i&&(n=e(i,n))}return n}(t,!1)||("$and"in(t=function e(t){for(var n in t){if(Array.isArray(t))for(var r in t)t[r].$and&&(t[r]=ot(t[r].$and));var i=t[n];"object"==typeof i&&e(i)}return t}(t))&&(t=ot(t.$and)),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],i=e[r];"object"==typeof i&&null!==i||(e[r]={$eq:i})}})}),"$not"in t&&(t.$not=ot([t.$not]));for(var r=Object.keys(t),i=0;i<r.length;i++){var o=r[i],s=t[o];"object"!=typeof s||null===s?s={$eq:s}:"$ne"in s&&!n&&(s.$ne=[s.$ne]),t[o]=s}return t}var at=-324,ut=3,ct="";function ft(e,t){if(e===t)return 0;e=lt(e),t=lt(t);var n=yt(e),r=yt(t);if(n-r!=0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return function(e,t){return e===t?0:t<e?1:-1}(e,t)}return Array.isArray(e)?function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=ft(e[r],t[r]);if(0!==i)return i}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var n=Object.keys(e),r=Object.keys(t),i=Math.min(n.length,r.length),o=0;o<i;o++){var s=ft(n[o],r[o]);if(0!==s)return s;if(0!==(s=ft(e[n[o]],t[r[o]])))return s}return n.length===r.length?0:n.length>r.length?1:-1}(e,t)}function lt(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=lt(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e)for(var i in e={},t)if(t.hasOwnProperty(i)){var o=t[i];void 0!==o&&(e[i]=lt(o))}}}return e}function dt(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return function(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,i=r?"0":"2",o=function(e,t,n){return function(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t;return r}(e,t,n)+e}(((r?-n:n)-at).toString(),"0",ut);i+=ct+o;var s=Math.abs(parseFloat(t[0]));r&&(s=10-s);var a=s.toFixed(20);return a=a.replace(/\.?0+$/,""),i+=ct+a}(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,i=n.length,o="";if(t)for(;++r<i;)o+=ht(n[r]);else for(;++r<i;){var s=n[r];o+=ht(s)+ht(e[s])}return o}return""}function ht(e){return yt(e=lt(e))+ct+dt(e)+"\0"}function pt(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var i="0"===e[t];t++;var o="",s=e.substring(t,t+ut),a=parseInt(s,10)+at;for(i&&(a=-a),t+=ut;;){var u=e[t];if("\0"===u)break;o+=u,t++}n=1===(o=o.split(".")).length?parseInt(o,10):parseFloat(o[0]+"."+o[1]),i&&(n-=10),0!==a&&(n=parseFloat(n+"e"+a))}return{num:n,length:t-r}}function vt(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(n);else if(o===e.length-2){i[e.pop()]=n}else e.push(n)}}function yt(e){var t=["boolean","number","string","object"].indexOf(typeof e);return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}function _t(e,t,n){if(e=e.filter(function(e){return gt(e.doc,t.selector,n)}),t.sort){var r=function(e){function r(n){return e.map(function(e){var t=tt(it(e));return et(n,t)})}return function(e,t){var n=ft(r(e.doc),r(t.doc));return 0!==n?n:function(e,t){return e<t?-1:t<e?1:0}(e.doc._id,t.doc._id)}}(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===function(e){return e[it(e)]}(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var i=t.skip||0,o=("limit"in t?t.limit:e.length)+i;e=e.slice(i,o)}return e}function gt(i,o,e){return e.every(function(e){var t=o[e],n=tt(e),r=et(i,n);return rt(e)?function(e,t,n){return"$or"!==e?"$not"!==e?!t.find(function(e){return gt(n,e,Object.keys(e))}):!gt(n,t,Object.keys(t)):t.some(function(e){return gt(n,e,Object.keys(e))})}(e,t,i):mt(t,i,n,r)})}function mt(n,r,i,o){return!n||("object"==typeof n?Object.keys(n).every(function(e){var t=n[e];return function(e,t,n,r,i){if(jt[e])return jt[e](t,n,r,i);throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all')}(e,r,t,i,o)}):n===o)}function bt(e){return null!=e}function wt(e){return void 0!==e}function kt(t,e){return e.some(function(e){return t instanceof Array?-1<t.indexOf(e):t===e})}var jt={$elemMatch:function(t,n,r,e){return!!Array.isArray(e)&&(0!==e.length&&("object"==typeof e[0]?e.some(function(e){return gt(e,n,Object.keys(n))}):e.some(function(e){return mt(n,t,r,e)})))},$allMatch:function(t,n,r,e){return!!Array.isArray(e)&&(0!==e.length&&("object"==typeof e[0]?e.every(function(e){return gt(e,n,Object.keys(n))}):e.every(function(e){return mt(n,t,r,e)})))},$eq:function(e,t,n,r){return wt(r)&&0===ft(r,t)},$gte:function(e,t,n,r){return wt(r)&&0<=ft(r,t)},$gt:function(e,t,n,r){return wt(r)&&0<ft(r,t)},$lte:function(e,t,n,r){return wt(r)&&ft(r,t)<=0},$lt:function(e,t,n,r){return wt(r)&&ft(r,t)<0},$exists:function(e,t,n,r){return t?wt(r):!wt(r)},$mod:function(e,t,n,r){return bt(r)&&function(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==ft(r,e)})},$in:function(e,t,n,r){return bt(r)&&kt(r,t)},$nin:function(e,t,n,r){return bt(r)&&!kt(r,t)},$size:function(e,t,n,r){return bt(r)&&function(e,t){return e.length===t}(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&function(t,e){return e.every(function(e){return-1<t.indexOf(e)})}(r,t)},$regex:function(e,t,n,r){return bt(r)&&function(e,t){return new RegExp(t).test(e)}(r,t)},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}};function Ot(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function At(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=re(e.view):e.filter=re(e.filter))}function qt(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!te(e.db)}function Et(r,i){var o=i.complete;if("_view"===i.filter){if(!i.view||"string"!=typeof i.view){var e=Y(z,"`view` filter parameter not found or invalid.");return o(e)}var s=ne(i.view);r.db.get("_design/"+s[0],function(e,t){if(r.isCancelled)return o(null,{status:"cancelled"});if(e)return o(H(e));var n=t&&t.views&&t.views[s[1]]&&t.views[s[1]].map;if(!n)return o(Y($,t.views?"missing json key: "+s[1]:"missing json key: views"));i.filter=function(e){return ce(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+e+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{})}(n),r.doChanges(i)})}else if(i.selector)i.filter=function(e){return function(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");var n=_t([{doc:e}],{selector:t=st(t)},Object.keys(t));return n&&1===n.length}(e,i.selector)},r.doChanges(i);else{var a=ne(i.filter);r.db.get("_design/"+a[0],function(e,t){if(r.isCancelled)return o(null,{status:"cancelled"});if(e)return o(H(e));var n=t&&t.filters&&t.filters[a[1]];if(!n)return o(Y($,t&&t.filters?"missing json key: "+a[1]:"missing json key: filters"));i.filter=function(e){return ce('"use strict";\nreturn '+e+";",{})}(n),r.doChanges(i)})}}function St(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}We.plugin(function(e){e._changesFilterPlugin={validate:Ot,normalize:At,shouldFilter:qt,filter:Et}}),We.version="7.1.1";var xt=St(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),Ct=St(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]);function Pt(e){if(!/^\d+-./.test(e))return Y(Q);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function Lt(e,t,n){var r,i,o;n||(n={deterministic_revs:!0});var s={status:"available"};if(e._deleted&&(s.deleted=!0),t)if(e._id||(e._id=qe()),i=Ae(e,n.deterministic_revs),e._rev){if((o=Pt(e._rev)).error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[i,s,[]]]]}],r=o.prefix+1}else e._rev_tree=[{pos:1,ids:[i,s,[]]}],r=1;else if(e._revisions&&(e._rev_tree=function(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,i=[r[0],t,[]],o=1,s=r.length;o<s;o++)i=[r[o],{status:"missing"},[i]];return[{pos:n,ids:i}]}(e._revisions,s),r=e._revisions.start,i=e._revisions.ids[0]),!e._rev_tree){if((o=Pt(e._rev)).error)return o;r=o.prefix,i=o.id,e._rev_tree=[{pos:r,ids:[i,s,[]]}]}ee(e._id),e._rev=r+"-"+i;var a={metadata:{},data:{}};for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c="_"===u[0];if(c&&!xt[u]){var f=Y(J,u);throw f.message=J.message+": "+u,f}c&&!Ct[u]?a.metadata[u.slice(1)]=e[u]:a.data[u]=e[u]}return a}function $t(t,e,n){var r=function(e){try{return le(e)}catch(e){return{error:Y(F,"Attachment is not a valid base64 string")}}}(t.data);if(r.error)return n(r.error);t.length=r.length,t.data="blob"===e?pe(r,t.content_type):"base64"===e?de(r):r,je(r,function(e){t.digest="md5-"+e,n()})}function Dt(e,t,n){if(e.stub)return n();"string"==typeof e.data?$t(e,t,n):function(t,n,r){je(t.data,function(e){t.digest="md5-"+e,t.length=t.data.size||t.data.length||0,"binary"===n?_e(t.data,function(e){t.data=e,r()}):"base64"===n?ge(t.data,function(e){t.data=e,r()}):r()})}(e,t,n)}function It(e,t,n,r,i,o,s,a){if(function(e,t){for(var n,r=e.slice(),i=t.split("-"),o=parseInt(i[0],10),s=i[1];n=r.pop();){if(n.pos===o&&n.ids[0]===s)return!0;for(var a=n.ids[2],u=0,c=a.length;u<c;u++)r.push({pos:n.pos+1,ids:a[u]})}return!1}(t.rev_tree,n.metadata.rev)&&!a)return r[i]=n,o();var u=t.winningRev||Ee(t),c="deleted"in t?t.deleted:Ne(t,u),f="deleted"in n.metadata?n.metadata.deleted:Ne(n.metadata),l=/^1-/.test(n.metadata.rev);if(c&&!f&&a&&l){var d=n.data;d._rev=u,d._id=n.metadata.id,n=Lt(d,a)}var h=Re(t.rev_tree,n.metadata.rev_tree[0],e);if(a&&(c&&f&&"new_leaf"!==h.conflicts||!c&&"new_leaf"!==h.conflicts||c&&!f&&"new_branch"===h.conflicts)){var p=Y(D);return r[i]=p,o()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var y=Ee(n.metadata),_=Ne(n.metadata,y),g=c===_?0:c<_?-1:1;s(n,y,_,v===y?_:Ne(n.metadata,v),!0,g,i,o)}function Bt(u,e,i,c,o,f,l,d,t){u=u||1e3;var h=d.new_edits,s=new x,n=0,a=e.length;function p(){++n===a&&t&&t()}e.forEach(function(e,n){if(e._id&&Ue(e._id)){var t=e._deleted?"_removeLocal":"_putLocal";i[t](e,{ctx:o},function(e,t){f[n]=e||t,p()})}else{var r=e.metadata.id;s.has(r)?(a--,s.get(r).push([e,n])):s.set(r,[[e,n]])}}),s.forEach(function(i,o){var s=0;function a(){++s<i.length?e():p()}function e(){var e=i[s],t=e[0],n=e[1];if(c.has(o))It(u,c.get(o),t,f,n,a,l,h);else{var r=Re([],t.metadata.rev_tree[0],u);t.metadata.rev_tree=r.tree,t.stemmedRevs=r.stemmedRevs||[],function(e,t,n){var r=Ee(e.metadata),i=Ne(e.metadata,r);if("was_delete"in d&&i)return f[t]=Y($,"deleted"),n();if(h&&function(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}(e)){var o=Y(D);return f[t]=o,n()}l(e,r,i,i,!1,i?0:1,t,n)}(t,n,a)}}e()})}var Tt=5,Rt="document-store",Mt="by-sequence",Nt="attach-store",Ut="attach-seq-store",Ft="meta-store",Kt="local-store",Jt="detect-blob-support";function zt(n){return function(e){var t="unknown_error";e.target&&e.target.error&&(t=e.target.error.name||e.target.error.message),n(Y(G,t,e.type))}}function Vt(e,t,n){return{data:function(t){try{return JSON.stringify(t)}catch(e){return i.stringify(t)}}(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function Gt(e){if(!e)return null;var t=function(t){try{return JSON.parse(t)}catch(e){return i.parse(t)}}(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function Qt(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function Wt(e,t,n,r){n?r(e?"string"!=typeof e?e:ve(e,t):he([""],{type:t})):e?"string"!=typeof e?ye(e,function(e){r(de(e))}):r(e):r("")}function Yt(t,n,i,e){var r=Object.keys(t._attachments||{});if(!r.length)return e&&e();var o=0;function s(){++o===r.length&&e&&e()}r.forEach(function(e){n.attachments&&n.include_docs?function(e,t){var n=e._attachments[t],r=n.digest;i.objectStore(Nt).get(r).onsuccess=function(e){n.body=e.target.result.body,s()}}(t,e):(t._attachments[e].stub=!0,s())})}function Ht(e,s){return Promise.all(e.map(function(o){if(o.doc&&o.doc._attachments){var e=Object.keys(o.doc._attachments);return Promise.all(e.map(function(n){var r=o.doc._attachments[n];if("body"in r){var e=r.body,i=r.content_type;return new Promise(function(t){Wt(e,i,s,function(e){o.doc._attachments[n]=C(w(r,["digest","content_type"]),{data:e}),t()})})}}))}}))}function Xt(e,r,t){var i=[],o=t.objectStore(Mt),n=t.objectStore(Nt),s=t.objectStore(Ut),a=e.length;function u(){--a||function(){if(!i.length)return;i.forEach(function(t){s.index("digestSeq").count(IDBKeyRange.bound(t+"::",t+"::￿",!1,!1)).onsuccess=function(e){e.target.result||n.delete(t)}})}()}e.forEach(function(e){var t=o.index("_doc_id_rev"),n=r+"::"+e;t.getKey(n).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return u();o.delete(t),s.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];i.push(n),s.delete(t.primaryKey),t.continue()}else u()}}})}function Zt(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}var en=new q;function tn(s,e,a,l,t,n){for(var d,h,p,v,y,r,i,o,u=e.docs,c=0,f=u.length;c<f;c++){var _=u[c];_._id&&Ue(_._id)||(_=u[c]=Lt(_,a.new_edits,s)).error&&!i&&(i=_)}if(i)return n(i);var g=!1,m=0,b=new Array(u.length),w=new x,k=!1,j=l._meta.blobSupport?"blob":"base64";function O(){g=!0,A()}function A(){o&&g&&(o.docCount+=m,r.put(o))}function q(){k||(en.notify(l._meta.name),n(null,b))}function E(e,t,n,r,i,o,s,a){e.metadata.winningRev=t,e.metadata.deleted=n;var u=e.data;if(u._id=e.metadata.id,u._rev=e.metadata.rev,r&&(u._deleted=!0),u._attachments&&Object.keys(u._attachments).length)return function(r,i,e,t,n,o){var s=r.data,a=0,u=Object.keys(s._attachments);function c(){a===u.length&&S(r,i,e,t,n,o)}function f(){a++,c()}u.forEach(function(e){var t=r.data._attachments[e];if(t.stub)a++,c();else{var n=t.data;delete t.data,t.revpos=parseInt(i,10),function(n,r,i){v.count(n).onsuccess=function(e){if(e.target.result)return i();var t={digest:n,body:r};v.put(t).onsuccess=i}}(t.digest,n,f)}})}(e,t,n,i,s,a);m+=o,A(),S(e,t,n,i,s,a)}function S(r,i,o,s,e,t){var n=r.data,a=r.metadata;function u(e){var t=r.stemmedRevs||[];s&&l.auto_compaction&&(t=t.concat(function(e){var o=[];return Se(e.rev_tree,function(e,t,n,r,i){"available"!==i.status||e||(o.push(t+"-"+n),i.status="missing")}),o}(r.metadata))),t&&t.length&&Xt(t,r.metadata.id,d),a.seq=e.target.result;var n=Vt(a,i,o);h.put(n).onsuccess=c}function c(){b[e]={ok:!0,id:a.id,rev:a.rev},w.set(r.metadata.id,r.metadata),function(e,t,n){var r=0,i=Object.keys(e.data._attachments||{});if(!i.length)return n();function o(){++r===i.length&&n()}for(var s=0;s<i.length;s++)a=i[s],c=void 0,u=e.data._attachments[a].digest,(c=y.put({seq:t,digestSeq:u+"::"+t})).onsuccess=o,c.onerror=function(e){e.preventDefault(),e.stopPropagation(),o()};var a,u,c}(r,a.seq,t)}n._doc_id_rev=a.id+"::"+a.rev,delete n._id,delete n._rev;var f=p.put(n);f.onsuccess=u,f.onerror=function(e){e.preventDefault(),e.stopPropagation(),p.index("_doc_id_rev").getKey(n._doc_id_rev).onsuccess=function(e){p.put(n,e.target.result).onsuccess=u}}}!function(e,o,t){if(!e.length)return t();var s,n=0;function a(){n++,e.length===n&&(s?t(s):t())}e.forEach(function(e){var t=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],n=0;if(!t.length)return a();function r(e){s=e,++n===t.length&&a()}for(var i in e.data._attachments)e.data._attachments.hasOwnProperty(i)&&Dt(e.data._attachments[i],o,r)})}(u,j,function(e){if(e)return n(e);!function(){var e=Zt(t,[Rt,Mt,Nt,Kt,Ut,Ft],"readwrite");if(e.error)return n(e.error);(d=e.txn).onabort=zt(n),d.ontimeout=zt(n),d.oncomplete=q,h=d.objectStore(Rt),p=d.objectStore(Mt),v=d.objectStore(Nt),y=d.objectStore(Ut),(r=d.objectStore(Ft)).get(Ft).onsuccess=function(e){o=e.target.result,A()},function(t){var r=[];if(u.forEach(function(n){n.data&&n.data._attachments&&Object.keys(n.data._attachments).forEach(function(e){var t=n.data._attachments[e];t.stub&&r.push(t.digest)})}),!r.length)return t();var n,i=0;r.forEach(function(e){!function(n,r){v.get(n).onsuccess=function(e){if(e.target.result)r();else{var t=Y(W,"unknown stub attachment with digest "+n);t.status=412,r(t)}}}(e,function(e){e&&!n&&(n=e),++i===r.length&&t(n)})})}(function(e){if(e)return k=!0,n(e);!function(){if(!u.length)return;var e=0;function n(){++e===u.length&&Bt(s.revs_limit,u,l,w,d,b,E,a,O)}function t(e){var t=Gt(e.target.result);t&&w.set(t.id,t),n()}for(var r=0,i=u.length;r<i;r++){var o=u[r];if(o._id&&Ue(o._id))n();else h.get(o.metadata.id).onsuccess=t}}()})}()})}function nn(n,r,e,i,o){var s,a,t;function u(e){a=e.target.result,s&&o(s,a,t)}function c(e){s=e.target.result,a&&o(s,a,t)}function f(e){var t=e.target.result;if(!t)return o();o([t.key],[t.value],t)}-1===i&&(i=1e3),"function"==typeof n.getAll&&"function"==typeof n.getAllKeys&&1<i&&!e?(t={continue:function(){if(!s.length)return o();var e,t=s[s.length-1];if(r&&r.upper)try{e=IDBKeyRange.bound(t,r.upper,!0,r.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else e=IDBKeyRange.lowerBound(t,!0);r=e,a=s=null,n.getAll(r,i).onsuccess=u,n.getAllKeys(r,i).onsuccess=c}},n.getAll(r,i).onsuccess=u,n.getAllKeys(r,i).onsuccess=c):e?n.openCursor(r,"prev").onsuccess=f:n.openCursor(r).onsuccess=f}function rn(i,e,t){var n,r,o="startkey"in i&&i.startkey,s="endkey"in i&&i.endkey,a="key"in i&&i.key,u="keys"in i&&i.keys,c=i.skip||0,f="number"==typeof i.limit?i.limit:-1,l=!1!==i.inclusive_end;if(!u&&(r=(n=function(e,t,n,r,i){try{if(e&&t)return i?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return i?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return i?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}(o,s,l,a,i.descending))&&n.error)&&("DataError"!==r.name||0!==r.code))return t(Y(G,r.name,r.message));var d=[Rt,Mt,Ft];i.attachments&&d.push(Nt);var h=Zt(e,d,"readonly");if(h.error)return t(h.error);var p=h.txn;p.oncomplete=function(){i.attachments?Ht(k,i.binary).then(q):q()},p.onabort=zt(t);var v,y,_,g=p.objectStore(Rt),m=p.objectStore(Mt),b=p.objectStore(Ft),w=m.index("_doc_id_rev"),k=[];function j(e,t){var n={id:t.id,key:t.id,value:{rev:e}};t.deleted?u&&(k.push(n),n.value.deleted=!0,n.doc=null):c--<=0&&(k.push(n),i.include_docs&&function(n,r,e){var t=n.id+"::"+e;w.get(t).onsuccess=function(e){if(r.doc=Qt(e.target.result)||{},i.conflicts){var t=Pe(n);t.length&&(r.doc._conflicts=t)}Yt(r.doc,i,p)}}(t,n,e))}function O(e){for(var t=0,n=e.length;t<n&&k.length!==f;t++){var r=e[t];if(r.error&&u)k.push(r);else{var i=Gt(r);j(i.winningRev,i)}}}function A(e,t,n){n&&(O(t),k.length<f&&n.continue())}function q(){var e={total_rows:v,offset:i.skip,rows:k};i.update_seq&&void 0!==y&&(e.update_seq=y),t(null,e)}return b.get(Ft).onsuccess=function(e){v=e.target.result.docCount},i.update_seq&&(_=function(e){e.target.result&&0<e.target.result.length&&(y=e.target.result[0])},m.openCursor(null,"prev").onsuccess=function(e){var t=e.target.result,n=void 0;return t&&t.key&&(n=t.key),_({target:{result:[n]}})}),r||0===f?void 0:u?function(r,e,i){var o=new Array(r.length),s=0;r.forEach(function(t,n){e.get(t).onsuccess=function(e){e.target.result?o[n]=e.target.result:o[n]={key:t,error:"not_found"},++s===r.length&&i(r,o,{})}})}(i.keys,g,A):-1===f?function(e,t,n){if("function"!=typeof e.getAll){var r=[];e.openCursor(t).onsuccess=function(e){var t=e.target.result;t?(r.push(t.value),t.continue()):n({target:{result:r}})}}else e.getAll(t).onsuccess=n}(g,n,function(e){var t=e.target.result;i.descending&&(t=t.reverse()),O(t)}):void nn(g,n,i.descending,f+c,A)}var on=!1,sn=[];function an(){!on&&sn.length&&(on=!0,sn.shift()())}function un(c,e,t,n){if((c=R(c)).continuous){var r=t+":"+qe();return en.addListener(t,r,e,c),en.notify(t),{cancel:function(){en.removeListener(t,r)}}}var f=c.doc_ids&&new b(c.doc_ids);c.since=c.since||0;var l=c.since,d="limit"in c?c.limit:-1;0===d&&(d=1);var h,i,p,o,v=[],y=0,_=X(c),g=new x;function m(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var i=e._id+"::"+n.winningRev;o.get(i).onsuccess=function(e){r(n,Qt(e.target.result))}}function s(){c.complete(null,{results:v,last_seq:l})}var a=[Rt,Mt];c.attachments&&a.push(Nt);var u=Zt(n,a,"readonly");if(u.error)return c.complete(u.error);(h=u.txn).onabort=zt(c.complete),h.oncomplete=function(){!c.continuous&&c.attachments?Ht(v).then(s):s()},i=h.objectStore(Mt),p=h.objectStore(Rt),o=i.index("_doc_id_rev"),nn(i,c.since&&!c.descending?IDBKeyRange.lowerBound(c.since,!0):null,c.descending,d,function(r,e,o){if(o&&r.length){var s=new Array(r.length),a=new Array(r.length),i=0;e.forEach(function(e,n){!function(t,n,r){if(f&&!f.has(t._id))return r();var i=g.get(t._id);if(i)return m(t,n,i,r);p.get(t._id).onsuccess=function(e){i=Gt(e.target.result),g.set(t._id,i),m(t,n,i,r)}}(Qt(e),r[n],function(e,t){a[n]=e,s[n]=t,++i===r.length&&function(){for(var e=[],t=0,n=s.length;t<n&&y!==d;t++){var r=s[t];if(r){var i=a[t];e.push(u(i,r))}}Promise.all(e).then(function(e){for(var t=0,n=e.length;t<n;t++)e[t]&&c.onChange(e[t])}).catch(c.complete),y!==d&&o.continue()}()})})}function u(e,t){var n=c.processChange(t,e,c);l=n.seq=e.seq;var r=_(n);return"object"==typeof r?Promise.reject(r):r?(y++,c.return_docs&&v.push(n),c.attachments&&c.include_docs?new Promise(function(e){Yt(t,c,h,function(){Ht([n],c.binary).then(function(){e(n)})})}):Promise.resolve(n)):Promise.resolve()}})}var cn,fn=new x,ln=new x;function dn(t,e){var n=this;!function(e,n,r){sn.push(function(){e(function(e,t){!function(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}(n,e,t,r),on=!1,T(function(){an()})})}),an()}(function(e){!function(c,r,f){var l=r.name,d=null;function o(e,i){var o=e.objectStore(Rt);o.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value,r=Ne(n);n.deletedOrLocal=r?"1":"0",o.put(n),t.continue()}else i()}}function s(e,d){var h=e.objectStore(Kt),p=e.objectStore(Rt),v=e.objectStore(Mt);p.openCursor().onsuccess=function(e){var n=e.target.result;if(n){var t=n.value,r=t.id,i=Ue(r),o=Ee(t);if(i){var s=r+"::"+o,a=r+"::",u=r+"::~",c=v.index("_doc_id_rev"),f=IDBKeyRange.bound(a,u,!1,!1),l=c.openCursor(f);l.onsuccess=function(e){if(l=e.target.result){var t=l.value;t._doc_id_rev===s&&h.put(t),v.delete(l.primaryKey),l.continue()}else p.delete(n.primaryKey),n.continue()}}else n.continue()}else d&&d()}}function a(e,c){var t=e.objectStore(Mt),n=e.objectStore(Nt),f=e.objectStore(Ut);n.count().onsuccess=function(e){if(!e.target.result)return c();t.openCursor().onsuccess=function(e){var t=e.target.result;if(!t)return c();for(var n=t.value,r=t.primaryKey,i=Object.keys(n._attachments||{}),o={},s=0;s<i.length;s++){o[n._attachments[i[s]].digest]=!0}var a=Object.keys(o);for(s=0;s<a.length;s++){var u=a[s];f.put({seq:r,digestSeq:u+"::"+r})}t.continue()}}}function u(e){var u=e.objectStore(Mt),c=e.objectStore(Rt);c.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n,r,i,o,s=function(e){return e.data?Gt(e):(e.deleted="1"===e.deletedOrLocal,e)}(t.value);if(s.winningRev=s.winningRev||Ee(s),s.seq)return a();n=s.id+"::",r=s.id+"::￿",i=u.index("_doc_id_rev").openCursor(IDBKeyRange.bound(n,r)),o=0,i.onsuccess=function(e){var t=e.target.result;if(!t)return s.seq=o,a();var n=t.primaryKey;o<n&&(o=n),t.continue()}}function a(){var e=Vt(s,s.winningRev,s.deleted);c.put(e).onsuccess=function(){t.continue()}}}}c._meta=null,c._remote=!1,c.type=function(){return"idb"},c._id=y(function(e){e(null,c._meta.instanceId)}),c._bulkDocs=function(e,t,n){tn(r,e,t,c,d,n)},c._get=function(e,i,t){var o,s,a,u=i.ctx;if(!u){var n=Zt(d,[Rt,Mt,Nt],"readonly");if(n.error)return t(n.error);u=n.txn}function c(){t(a,{doc:o,metadata:s,ctx:u})}u.objectStore(Rt).get(e).onsuccess=function(e){if(!(s=Gt(e.target.result)))return a=Y($,"missing"),c();var t;if(i.rev)t=i.latest?function(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var i=n.pos,o=n.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=n.history?n.history.slice():[];if(f.push({id:s,pos:i,opts:a}),c)for(var l=0,d=f.length;l<d;l++){var h=f[l];if(h.pos+"-"+h.id===e)return i+"-"+s}for(var p=0,v=u.length;p<v;p++)r.push({pos:i+1,ids:u[p],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}(i.rev,s):i.rev;else if(t=s.winningRev,Ne(s))return a=Y($,"deleted"),c();var n=u.objectStore(Mt),r=s.id+"::"+t;n.index("_doc_id_rev").get(r).onsuccess=function(e){if((o=e.target.result)&&(o=Qt(o)),!o)return a=Y($,"missing"),c();c()}}},c._getAttachment=function(e,t,n,r,i){var o;if(r.ctx)o=r.ctx;else{var s=Zt(d,[Rt,Mt,Nt],"readonly");if(s.error)return i(s.error);o=s.txn}var a=n.digest,u=n.content_type;o.objectStore(Nt).get(a).onsuccess=function(e){Wt(e.target.result.body,u,r.binary,function(e){i(null,e)})}},c._info=function(e){var n,t,r=Zt(d,[Ft,Mt],"readonly");if(r.error)return e(r.error);var i=r.txn;i.objectStore(Ft).get(Ft).onsuccess=function(e){t=e.target.result.docCount},i.objectStore(Mt).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},i.oncomplete=function(){e(null,{doc_count:t,update_seq:n,idb_attachment_format:c._meta.blobSupport?"binary":"base64"})}},c._allDocs=function(e,t){rn(e,d,t)},c._changes=function(e){return un(e,c,l,d)},c._close=function(e){d.close(),fn.delete(l),e()},c._getRevisionTree=function(e,n){var t=Zt(d,[Rt],"readonly");if(t.error)return n(t.error);t.txn.objectStore(Rt).get(e).onsuccess=function(e){var t=Gt(e.target.result);t?n(null,t.rev_tree):n(Y($))}},c._doCompaction=function(i,s,e){var t=Zt(d,[Rt,Mt,Nt,Ut],"readwrite");if(t.error)return e(t.error);var o=t.txn;o.objectStore(Rt).get(i).onsuccess=function(e){var t=Gt(e.target.result);Se(t.rev_tree,function(e,t,n,r,i){var o=t+"-"+n;-1!==s.indexOf(o)&&(i.status="missing")}),Xt(s,i,o);var n=t.winningRev,r=t.deleted;o.objectStore(Rt).put(Vt(t,n,r))},o.onabort=zt(e),o.oncomplete=function(){e()}},c._getLocal=function(e,n){var t=Zt(d,[Kt],"readonly");if(t.error)return n(t.error);var r=t.txn.objectStore(Kt).get(e);r.onerror=zt(n),r.onsuccess=function(e){var t=e.target.result;t?(delete t._doc_id_rev,n(null,t)):n(Y($))}},c._putLocal=function(n,r,i){"function"==typeof r&&(i=r,r={}),delete n._revisions;var o=n._rev,e=n._id;n._rev=o?"0-"+(parseInt(o.split("-")[1],10)+1):"0-1";var s,t=r.ctx;if(!t){var a=Zt(d,[Kt],"readwrite");if(a.error)return i(a.error);(t=a.txn).onerror=zt(i),t.oncomplete=function(){s&&i(null,s)}}var u,c=t.objectStore(Kt);o?(u=c.get(e)).onsuccess=function(e){var t=e.target.result;t&&t._rev===o?c.put(n).onsuccess=function(){s={ok:!0,id:n._id,rev:n._rev},r.ctx&&i(null,s)}:i(Y(D))}:((u=c.add(n)).onerror=function(e){i(Y(D)),e.preventDefault(),e.stopPropagation()},u.onsuccess=function(){s={ok:!0,id:n._id,rev:n._rev},r.ctx&&i(null,s)})},c._removeLocal=function(n,r,i){"function"==typeof r&&(i=r,r={});var o,e=r.ctx;if(!e){var t=Zt(d,[Kt],"readwrite");if(t.error)return i(t.error);(e=t.txn).oncomplete=function(){o&&i(null,o)}}var s=n._id,a=e.objectStore(Kt),u=a.get(s);u.onerror=zt(i),u.onsuccess=function(e){var t=e.target.result;t&&t._rev===n._rev?(a.delete(s),o={ok:!0,id:s,rev:"0-0"},r.ctx&&i(null,o)):i(Y($))}},c._destroy=function(e,t){en.removeAllListeners(l);var n=ln.get(l);n&&n.result&&(n.result.close(),fn.delete(l));var r=indexedDB.deleteDatabase(l);r.onsuccess=function(){ln.delete(l),A()&&l in localStorage&&delete localStorage[l],t(null,{ok:!0})},r.onerror=zt(t)};var e=fn.get(l);if(e)return d=e.idb,c._meta=e.global,T(function(){f(null,c)});var t=indexedDB.open(l,Tt);ln.set(l,t),t.onupgradeneeded=function(e){var t=e.target.result;if(e.oldVersion<1)return function(e){var t=e.createObjectStore(Rt,{keyPath:"id"});e.createObjectStore(Mt,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(Nt,{keyPath:"digest"}),e.createObjectStore(Ft,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(Jt),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(Kt,{keyPath:"_id"});var n=e.createObjectStore(Ut,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}(t);var n=e.currentTarget.transaction;e.oldVersion<3&&function(e){e.createObjectStore(Kt,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}(t),e.oldVersion<4&&function(e){var t=e.createObjectStore(Ut,{autoIncrement:!0});t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}(t);var r=[o,s,a,u],i=e.oldVersion;!function e(){var t=r[i-1];i++,t&&t(n,e)}()},t.onsuccess=function(e){(d=e.target.result).onversionchange=function(){d.close(),fn.delete(l)},d.onabort=function(e){E("error","Database has a global failure",e.target.error),d.close(),fn.delete(l)};var t,n,r,i,o=d.transaction([Ft,Jt,Rt],"readwrite"),s=!1;function a(){void 0!==r&&s&&(c._meta={name:l,instanceId:i,blobSupport:r},fn.set(l,{idb:d,global:c._meta}),f(null,c))}function u(){if(void 0!==n&&void 0!==t){var e=l+"_id";e in t?i=t[e]:t[e]=i=qe(),t.docCount=n,o.objectStore(Ft).put(t)}}o.objectStore(Ft).get(Ft).onsuccess=function(e){t=e.target.result||{id:Ft},u()},function(e,t){e.objectStore(Rt).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}(o,function(e){n=e,u()}),cn||(cn=function(r){return new Promise(function(n){var e=he([""]),t=r.objectStore(Jt).put(e,"key");t.onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||43<=parseInt(e[1],10))},t.onerror=r.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)}}).catch(function(){return!1})}(o)),cn.then(function(e){r=e,a()}),o.oncomplete=function(){s=!0,a()},o.onabort=zt(f)},t.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";E("error",e),f(Y(G,e))}}(n,t,e)},e,n.constructor)}dn.valid=function(){try{return"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}};var hn=25,pn=50,vn=5e3,yn=1e4,_n={};function gn(e){var t=e.doc||e.ok,n=t&&t._attachments;n&&Object.keys(n).forEach(function(e){var t=n[e];t.data=ve(t.data,t.content_type)})}function mn(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function bn(n){return n._attachments&&Object.keys(n._attachments)?Promise.all(Object.keys(n._attachments).map(function(e){var t=n._attachments[e];if(t.data&&"string"!=typeof t.data)return new Promise(function(e){ge(t.data,e)}).then(function(e){t.data=e})})):Promise.resolve()}function wn(e,t){if(function(e){if(!e.prefix)return!1;var t=ue(e.prefix).protocol;return"http"===t||"https"===t}(t)){var n=t.name.substr(t.prefix.length);e=t.prefix.replace(/\/?$/,"/")+encodeURIComponent(n)}var r=ue(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var i=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=i.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=i.join("/"),r}function kn(e,t){return jn(e,e.db+"/"+t)}function jn(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function On(t){return"?"+Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&")}function An(s,e){var t=this,y=wn(s.name,s),n=kn(y,"");s=R(s);var r,a=function(e,t){if((t=t||{}).headers=t.headers||new Xe,t.credentials="include",s.auth||y.auth){var n=s.auth||y.auth,r=n.username+":"+n.password,i=de(unescape(encodeURIComponent(r)));t.headers.set("Authorization","Basic "+i)}var o=s.headers||{};return Object.keys(o).forEach(function(e){t.headers.append(e,o[e])}),function(e){var t="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",n=-1!==t.indexOf("msie"),r=-1!==t.indexOf("trident"),i=-1!==t.indexOf("edge"),o=!("method"in e)||"GET"===e.method;return(n||r||i)&&o}(t)&&(e+=(-1===e.indexOf("?")?"?":"&")+"_nonce="+Date.now()),(s.fetch||He)(e,t)};function i(e,n){return m(e,f(function(t){g().then(function(){return n.apply(this,t)}).catch(function(e){t.pop()(e)})})).bind(t)}function _(e,t,n){var r={};return(t=t||{}).headers=t.headers||new Xe,t.headers.get("Content-Type")||t.headers.set("Content-Type","application/json"),t.headers.get("Accept")||t.headers.set("Accept","application/json"),a(e,t).then(function(e){return r.ok=e.ok,r.status=e.status,e.json()}).then(function(e){if(r.data=e,!r.ok){r.data.status=r.status;var t=H(r.data);if(n)return n(t);throw t}if(Array.isArray(r.data)&&(r.data=r.data.map(function(e){return e.error||e.missing?H(e):e})),!n)return r;n(null,r.data)})}function g(){return s.skip_setup?Promise.resolve():r||((r=_(n).catch(function(e){return e&&e.status&&404===e.status?(S(404,"PouchDB is just detecting if the remote exists."),_(n,{method:"PUT"})):Promise.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||Promise.reject(e)})).catch(function(){r=null}),r)}function c(e){return e.split("/").map(encodeURIComponent).join("/")}T(function(){e(null,t)}),t._remote=!0,t.type=function(){return"http"},t.id=i("id",function(n){a(jn(y,"")).then(function(e){return e.json()}).catch(function(){return{}}).then(function(e){var t=e&&e.uuid?e.uuid+y.db:kn(y,"");n(null,t)})}),t.compact=i("compact",function(r,i){"function"==typeof r&&(i=r,r={}),r=R(r),_(kn(y,"_compact"),{method:"POST"}).then(function(){!function n(){t.info(function(e,t){t&&!t.compact_running?i(null,{ok:!0}):setTimeout(n,r.interval||200)})}()})}),t.bulkGet=m("bulkGet",function(a,u){var c=this;function e(t){var e={};a.revs&&(e.revs=!0),a.attachments&&(e.attachments=!0),a.latest&&(e.latest=!0),_(kn(y,"_bulk_get"+On(e)),{method:"POST",body:JSON.stringify({docs:a.docs})}).then(function(e){a.attachments&&a.binary&&e.data.results.forEach(function(e){e.docs.forEach(gn)}),t(null,e.data)}).catch(t)}function n(){var e=pn,r=Math.ceil(a.docs.length/e),i=0,o=new Array(r);function t(n){return function(e,t){o[n]=t.results,++i===r&&u(null,{results:Z(o)})}}for(var n=0;n<r;n++){var s=w(a,["revs","attachments","binary","latest"]);s.docs=a.docs.slice(n*e,Math.min(a.docs.length,(n+1)*e)),O(c,s,t(n))}}var r=jn(y,""),t=_n[r];"boolean"!=typeof t?e(function(e,t){e?(_n[r]=!1,S(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),n()):(_n[r]=!0,u(null,t))}):t?e(u):n()}),t._info=function(t){g().then(function(){return a(kn(y,""))}).then(function(e){return e.json()}).then(function(e){e.host=kn(y,""),t(null,e)}).catch(t)},t.fetch=function(t,n){return g().then(function(){var e="/"===t.substring(0,1)?jn(y,t.substring(1)):kn(y,t);return a(e,n)})},t.get=i("get",function(t,o,n){"function"==typeof o&&(n=o,o={});var e={};function r(r){var i=r._attachments,e=i&&Object.keys(i);if(i&&e.length)return function(l,d){return new Promise(function(e,t){var n,r=0,i=0,o=0,s=l.length;function a(){++o===s?n?t(n):e():f()}function u(){r--,a()}function c(e){r--,n=n||e,a()}function f(){for(;r<d&&i<s;)r++,l[i++]().then(u,c)}f()})}(e.map(function(e){return function(){return function(e){var n=i[e],t=mn(r._id)+"/"+c(e)+"?rev="+r._rev;return a(kn(y,t)).then(function(e){return void 0===u||u.browser?e.blob():e.buffer()}).then(function(t){return o.binary?(void 0===u||u.browser||(t.type=n.content_type),t):new Promise(function(e){ge(t,e)})}).then(function(e){delete n.stub,delete n.length,n.data=e})}(e)}}),5)}(o=R(o)).revs&&(e.revs=!0),o.revs_info&&(e.revs_info=!0),o.latest&&(e.latest=!0),o.open_revs&&("all"!==o.open_revs&&(o.open_revs=JSON.stringify(o.open_revs)),e.open_revs=o.open_revs),o.rev&&(e.rev=o.rev),o.conflicts&&(e.conflicts=o.conflicts),o.update_seq&&(e.update_seq=o.update_seq),t=mn(t),_(kn(y,t+On(e))).then(function(e){return Promise.resolve().then(function(){if(o.attachments)return function(e){return Array.isArray(e)?Promise.all(e.map(function(e){if(e.ok)return r(e.ok)})):r(e)}(e.data)}).then(function(){n(null,e.data)})}).catch(function(e){e.docId=t,n(e)})}),t.remove=i("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,n="function"==typeof t?(r=t,{}):(r=n,t));var o=i._rev||n.rev;_(kn(y,mn(i._id))+"?rev="+o,{method:"DELETE"},r).catch(r)}),t.getAttachment=i("getAttachment",function(e,t,n,r){"function"==typeof n&&(r=n,n={});var i,o=n.rev?"?rev="+n.rev:"",s=kn(y,mn(e))+"/"+c(t)+o;a(s,{method:"GET"}).then(function(e){if(i=e.headers.get("content-type"),e.ok)return void 0===u||u.browser?e.blob():e.buffer();throw e}).then(function(e){void 0===u||u.browser||(e.type=i),r(null,e)}).catch(function(e){r(e)})}),t.removeAttachment=i("removeAttachment",function(e,t,n,r){_(kn(y,mn(e)+"/"+c(t))+"?rev="+n,{method:"DELETE"},r).catch(r)}),t.putAttachment=i("putAttachment",function(e,t,n,r,i,o){"function"==typeof i&&(o=i,i=r,r=n,n=null);var s=mn(e)+"/"+c(t),a=kn(y,s);if(n&&(a+="?rev="+n),"string"==typeof r){var u;try{u=le(r)}catch(e){return o(Y(F,"Attachment is not a valid base64 string"))}r=u?pe(u,i):""}_(a,{headers:new Xe({"Content-Type":i}),method:"PUT",body:r},o).catch(o)}),t._bulkDocs=function(e,t,n){e.new_edits=t.new_edits,g().then(function(){return Promise.all(e.docs.map(bn))}).then(function(){return _(kn(y,"_bulk_docs"),{method:"POST",body:JSON.stringify(e)},n)}).catch(n)},t._put=function(t,e,n){g().then(function(){return bn(t)}).then(function(){return _(kn(y,mn(t._id)),{method:"PUT",body:JSON.stringify(t)})}).then(function(e){n(null,e.data)}).catch(function(e){e.docId=t&&t._id,n(e)})},t.allDocs=i("allDocs",function(t,n){"function"==typeof t&&(n=t,t={});var e,r={},i="GET";(t=R(t)).conflicts&&(r.conflicts=!0),t.update_seq&&(r.update_seq=!0),t.descending&&(r.descending=!0),t.include_docs&&(r.include_docs=!0),t.attachments&&(r.attachments=!0),t.key&&(r.key=JSON.stringify(t.key)),t.start_key&&(t.startkey=t.start_key),t.startkey&&(r.startkey=JSON.stringify(t.startkey)),t.end_key&&(t.endkey=t.end_key),t.endkey&&(r.endkey=JSON.stringify(t.endkey)),void 0!==t.inclusive_end&&(r.inclusive_end=!!t.inclusive_end),void 0!==t.limit&&(r.limit=t.limit),void 0!==t.skip&&(r.skip=t.skip);var o=On(r);void 0!==t.keys&&(i="POST",e={keys:t.keys}),_(kn(y,"_all_docs"+o),{method:i,body:JSON.stringify(e)}).then(function(e){t.include_docs&&t.attachments&&t.binary&&e.data.rows.forEach(gn),n(null,e.data)}).catch(n)}),t._changes=function(s){var a="batch_size"in s?s.batch_size:hn;!(s=R(s)).continuous||"heartbeat"in s||(s.heartbeat=yn);var e="timeout"in s?s.timeout:3e4;"timeout"in s&&s.timeout&&e-s.timeout<vn&&(e=s.timeout+vn),"heartbeat"in s&&s.heartbeat&&e-s.heartbeat<vn&&(e=s.heartbeat+vn);var i={};"timeout"in s&&s.timeout&&(i.timeout=s.timeout);var u=void 0!==s.limit&&s.limit,c=u;if(s.style&&(i.style=s.style),(s.include_docs||s.filter&&"function"==typeof s.filter)&&(i.include_docs=!0),s.attachments&&(i.attachments=!0),s.continuous&&(i.feed="longpoll"),s.seq_interval&&(i.seq_interval=s.seq_interval),s.conflicts&&(i.conflicts=!0),s.descending&&(i.descending=!0),s.update_seq&&(i.update_seq=!0),"heartbeat"in s&&s.heartbeat&&(i.heartbeat=s.heartbeat),s.filter&&"string"==typeof s.filter&&(i.filter=s.filter),s.view&&"string"==typeof s.view&&(i.filter="_view",i.view=s.view),s.query_params&&"object"==typeof s.query_params)for(var t in s.query_params)s.query_params.hasOwnProperty(t)&&(i[t]=s.query_params[t]);var o,f="GET";s.doc_ids?(i.filter="_doc_ids",f="POST",o={doc_ids:s.doc_ids}):s.selector&&(i.filter="_selector",f="POST",o={selector:s.selector});function l(e,t){if(!s.aborted){i.since=e,"object"==typeof i.since&&(i.since=JSON.stringify(i.since)),s.descending?u&&(i.limit=c):i.limit=!u||a<c?a:c;var n=kn(y,"_changes"+On(i)),r={signal:h.signal,method:f,body:JSON.stringify(o)};d=e,s.aborted||g().then(function(){return _(n,r,t)}).catch(t)}}var d,h=new Ye,p={results:[]},v=function(e,t){if(!s.aborted){var n=0;if(t&&t.results){n=t.results.length,p.last_seq=t.last_seq;var r=null,i=null;"number"==typeof t.pending&&(r=t.pending),"string"!=typeof p.last_seq&&"number"!=typeof p.last_seq||(i=p.last_seq);s.query_params,t.results=t.results.filter(function(e){c--;var t=X(s)(e);return t&&(s.include_docs&&s.attachments&&s.binary&&gn(e),s.return_docs&&p.results.push(e),s.onChange(e,r,i)),t})}else if(e)return s.aborted=!0,void s.complete(e);t&&t.last_seq&&(d=t.last_seq);var o=u&&c<=0||t&&n<a||s.descending;(!s.continuous||u&&c<=0)&&o?s.complete(null,p):T(function(){l(d,v)})}};return l(s.since||0,v),{cancel:function(){s.aborted=!0,h.abort()}}},t.revsDiff=i("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={}),_(kn(y,"_revs_diff"),{method:"POST",body:JSON.stringify(e)},n).catch(n)}),t._close=function(e){e()},t._destroy=function(e,t){_(kn(y,""),{method:"DELETE"}).then(function(e){t(null,e)}).catch(function(e){404===e.status?t(null,{ok:!0}):t(e)})}}function qn(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,qn)}catch(e){}}function En(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,En)}catch(e){}}function Sn(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Sn)}catch(e){}}function xn(e,t){return t&&e.then(function(e){T(function(){t(null,e)})},function(e){T(function(){t(e)})}),e}function Cn(n,r){return function(){var e=arguments,t=this;return n.add(function(){return r.apply(t,e)})}}function Pn(e){var t=new b(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function Ln(e){var n=new Array(e.size),r=-1;return e.forEach(function(e,t){n[++r]=t}),n}function $n(e){return new Sn("builtin "+e+" function requires map values to be numbers or number arrays")}function Dn(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];if("number"!=typeof i){if(!Array.isArray(i))throw $n("_sum");t="number"==typeof t?[t]:t;for(var o=0,s=i.length;o<s;o++){var a=i[o];if("number"!=typeof a)throw $n("_sum");void 0===t[o]?t.push(a):t[o]+=a}}else"number"==typeof t?t+=i:t[0]+=i}return t}An.valid=function(){return!0},o(qn,Error),o(En,Error),o(Sn,Error);var In=E.bind(null,"log"),Bn=Array.isArray,Tn=JSON.parse;function Rn(e,t){return ce("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:Dn,log:In,isArray:Bn,toJSON:Tn})}function Mn(){this.promise=new Promise(function(e){e()})}function Nn(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Un(i,o,s,a,t,n){var u,c=function(e,t){return Nn(e)+Nn(t)+"undefined"}(s,a);if(!t&&(u=i._cachedViews=i._cachedViews||{})[c])return u[c];var e=i.info().then(function(e){var r=e.db_name+"-mrview-"+(t?"temp":Oe(c));return fe(i,"_local/"+n,function(e){e.views=e.views||{};var t=o;-1===t.indexOf("/")&&(t=o+"/"+o);var n=e.views[t]=e.views[t]||{};if(!n[r])return n[r]=!0,e}).then(function(){return i.registerDependentDatabase(r).then(function(e){var t=e.db;t.auto_compaction=!0;var n={name:r,db:t,sourceDB:i,adapter:i.adapter,mapFun:s,reduceFun:a};return n.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return n.seq=e?e.seq:0,u&&n.db.once("destroyed",function(){delete u[c]}),n})})})});return u&&(u[c]=e),e}Mn.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},Mn.prototype.finish=function(){return this.promise};var Fn={},Kn=new Mn;function Jn(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function zn(e,t){try{e.emit("error",t)}catch(e){E("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),E("error",t)}}var Vn={_sum:function(e,t){return Dn(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:Dn(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];t+=i*i}return t}(t)}}};var Gn,Qn,Wn,Yn,Hn,Xn=(Qn="mrviews",Wn=function(e,t){if("function"!=typeof e||2!==e.length)return Rn(e.toString(),t);var n=e;return function(e){return n(e,t)}},Yn=function(e){var t=e.toString(),n=function(e){if(/^_sum/.test(e))return Vn._sum;if(/^_count/.test(e))return Vn._count;if(/^_stats/.test(e))return Vn._stats;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}(t);return n||Rn(t)},Hn=function(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new En("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)},{query:function(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?function(e){return e.group_level=or(e.group_level),e.limit=or(e.limit),e.skip=or(e.skip),e}(t):{},"function"==typeof e&&(e={map:e});var i=Promise.resolve().then(function(){return dr(r,e,t)});return xn(i,n),i},viewCleanup:(Gn=function(){var e=this;return"function"==typeof e._viewCleanup?function(e){return new Promise(function(n,r){e._viewCleanup(function(e,t){if(e)return r(e);n(t)})})}(e):te(e)?function(e){return e.fetch("_view_cleanup",{headers:new Xe({"Content-Type":"application/json"}),method:"POST"}).then(function(e){return e.json()})}(e):function(n){return n.get("_local/"+Qn).then(function(a){var u=new x;Object.keys(a.views).forEach(function(e){var t=Jn(e),n="_design/"+t[0],r=t[1],i=u.get(n);i||(i=new b,u.set(n,i)),i.add(r)});var e={keys:Ln(u),include_docs:!0};return n.allDocs(e).then(function(e){var s={};e.rows.forEach(function(i){var o=i.key.substring(8);u.get(i.key).forEach(function(e){var t=o+"/"+e;a.views[t]||(t=e);var n=Object.keys(a.views[t]),r=i.doc&&i.doc.views&&i.doc.views[e];n.forEach(function(e){s[e]=s[e]||r})})});var t=Object.keys(s).filter(function(e){return!s[e]}).map(function(e){return Cn(cr(e),function(){return new n.constructor(e,n.__opts).destroy()})()});return Promise.all(t).then(function(){return{ok:!0}})})},ar({ok:!0}))}(e)},f(function(e){var t=e.pop(),n=Gn.apply(this,e);return"function"==typeof t&&xn(n,t),n}))});function Zn(t,e,n){try{e(n)}catch(e){zn(t,e)}}function er(t,e,n,r,i){try{return{output:e(n,r,i)}}catch(e){return zn(t,e),{error:e}}}function tr(e,t){var n=ft(e.key,t.key);return 0!==n?n:ft(e.value,t.value)}function nr(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function rr(t){return function(e){return t.include_docs&&t.attachments&&t.binary&&function(e){e.rows.forEach(function(e){var n=e.doc&&e.doc._attachments;n&&Object.keys(n).forEach(function(e){var t=n[e];n[e].data=ve(t.data,t.content_type)})})}(e),e}}function ir(e,t,n,r){var i=t[e];void 0!==i&&(r&&(i=encodeURIComponent(JSON.stringify(i))),n.push(e+"="+i))}function or(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function sr(n,e){var t=n.descending?"endkey":"startkey",r=n.descending?"startkey":"endkey";if(void 0!==n[t]&&void 0!==n[r]&&0<ft(n[t],n[r]))throw new qn("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(e.reduce&&!1!==n.reduce){if(n.include_docs)throw new qn("{include_docs:true} is invalid for reduce");if(n.keys&&1<n.keys.length&&!n.group&&!n.group_level)throw new qn("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(e){var t=function(e){if(e){if("number"!=typeof e)return new qn('Invalid value for integer: "'+e+'"');if(e<0)return new qn('Invalid value for positive integer: "'+e+'"')}}(n[e]);if(t)throw t})}function ar(t){return function(e){if(404===e.status)return t;throw e}}function ur(e,n,t){var r="_local/doc_"+e,i={_id:r,keys:[]},o=t.get(e),c=o[0];return(function(e){return 1===e.length&&/^1-/.test(e[0].rev)}(o[1])?Promise.resolve(i):n.db.get(r).catch(ar(i))).then(function(t){return function(e){return e.keys.length?n.db.allDocs({keys:e.keys,include_docs:!0}):Promise.resolve({rows:[]})}(t).then(function(e){return function(e,t){for(var r=[],i=new b,n=0,o=t.rows.length;n<o;n++){var s=t.rows[n].doc;if(s&&(r.push(s),i.add(s._id),s._deleted=!c.has(s._id),!s._deleted)){var a=c.get(s._id);"value"in a&&(s.value=a.value)}}var u=Ln(c);return u.forEach(function(e){if(!i.has(e)){var t={_id:e},n=c.get(e);"value"in n&&(t.value=n.value),r.push(t)}}),e.keys=Pn(u.concat(e.keys)),r.push(e),r}(t,e)})})}function cr(e){var t="string"==typeof e?e:e.name,n=Fn[t];return n||(n=Fn[t]=new Mn),n}function fr(e){return Cn(cr(e),function(){return function(s){var a,u;var c=Wn(s.mapFun,function(e,t){var n={id:u._id,key:lt(e)};null!=t&&(n.value=lt(t)),a.push(n)}),f=s.seq||0;function r(e,t){return function(){return function(r,t,i){var e="_local/lastSeq";return r.db.get(e).catch(ar({_id:e,seq:0})).then(function(n){var e=Ln(t);return Promise.all(e.map(function(e){return ur(e,r,t)})).then(function(e){var t=Z(e);return n.seq=i,t.push(n),r.db.bulkDocs({docs:t})})})}(s,e,t)}}var i=new Mn;function o(){return s.sourceDB.changes({return_docs:!0,conflicts:!0,include_docs:!0,style:"all_docs",since:f,limit:50}).then(e)}function e(e){var t=e.results;if(t.length){var n=function(e){for(var t=new x,n=0,r=e.length;n<r;n++){var i=e[n];if("_"!==i.doc._id[0]){a=[],(u=i.doc)._deleted||Zn(s.sourceDB,c,u),a.sort(tr);var o=l(a);t.set(i.doc._id,[o,i.changes])}f=i.seq}return t}(t);if(i.add(r(n,f)),!(t.length<50))return o()}}function l(e){for(var t,n=new x,r=0,i=e.length;r<i;r++){var o=e[r],s=[o.key,o.id];0<r&&0===ft(o.key,t)&&s.push(r),n.set(ht(s),o),t=o.key}return n}return o().then(function(){return i.finish()}).then(function(){s.seq=f})}(e)})()}function lr(e,t){return Cn(cr(e),function(){return function(r,i){var o,s=r.reduceFun&&!1!==i.reduce,a=i.skip||0;void 0===i.keys||i.keys.length||(i.limit=0,delete i.keys);function n(e){return e.include_docs=!0,r.db.allDocs(e).then(function(e){return o=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||n<t))return e.doc.value}var r=function(e){for(var t=[],n=[],r=0;;){var i=e[r++];if("\0"!==i)switch(i){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var o=pt(e,r);t.push(o.num),r+=o.length;break;case"4":for(var s="";;){var a=e[r];if("\0"===a)break;s+=a,r++}s=s.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(s);break;case"5":var u={element:[],index:t.length};t.push(u.element),n.push(u);break;case"6":var c={element:{},index:t.length};t.push(c.element),n.push(c);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop();vt(t,n)}}}(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function e(t){var n;if(n=s?function(e,t,n){0===n.group_level&&delete n.group_level;var r=n.group||n.group_level,i=Yn(e.reduceFun),o=[],s=isNaN(n.group_level)?Number.POSITIVE_INFINITY:n.group_level;t.forEach(function(e){var t=o[o.length-1],n=r?e.key:null;if(r&&Array.isArray(n)&&(n=n.slice(0,s)),t&&0===ft(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);o.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var a=0,u=o.length;a<u;a++){var c=o[a],f=er(e.sourceDB,i,c.keys,c.values,!1);if(f.error&&f.error instanceof Sn)throw f.error;t.push({value:f.error?null:f.output,key:c.groupKey})}return{rows:function(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):0<n?e.slice(n):e}(t,n.limit,n.skip)}}(r,t,i):{total_rows:o,offset:a,rows:t},i.update_seq&&(n.update_seq=r.seq),i.include_docs){var e=Pn(t.map(nr));return r.sourceDB.allDocs({keys:e,include_docs:!0,conflicts:i.conflicts,attachments:i.attachments,binary:i.binary}).then(function(e){var r=new x;return e.rows.forEach(function(e){r.set(e.id,e.doc)}),t.forEach(function(e){var t=nr(e),n=r.get(t);n&&(e.doc=n)}),n})}return n}{if(void 0!==i.keys){var t=i.keys.map(function(e){var t={startkey:ht([e]),endkey:ht([e,{}])};return i.update_seq&&(t.update_seq=!0),n(t)});return Promise.all(t).then(Z).then(e)}var u,c,f={descending:i.descending};if(i.update_seq&&(f.update_seq=!0),"start_key"in i&&(u=i.start_key),"startkey"in i&&(u=i.startkey),"end_key"in i&&(c=i.end_key),"endkey"in i&&(c=i.endkey),void 0!==u&&(f.startkey=i.descending?ht([u,{}]):ht([u])),void 0!==c){var l=!1!==i.inclusive_end;i.descending&&(l=!l),f.endkey=ht(l?[c,{}]:[c])}if(void 0!==i.key){var d=ht([i.key]),h=ht([i.key,{}]);f.descending?(f.endkey=d,f.startkey=h):(f.startkey=d,f.endkey=h)}return s||("number"==typeof i.limit&&(f.limit=i.limit),f.skip=a),n(f).then(e)}}(e,t)})()}function dr(n,e,r){if("function"==typeof n._query)return function(e,t,i){return new Promise(function(n,r){e._query(t,i,function(e,t){if(e)return r(e);n(t)})})}(n,e,r);if(te(n))return function(e,t,n){var r,i,o,s=[],a="GET";if(ir("reduce",n,s),ir("include_docs",n,s),ir("attachments",n,s),ir("limit",n,s),ir("descending",n,s),ir("group",n,s),ir("group_level",n,s),ir("skip",n,s),ir("stale",n,s),ir("conflicts",n,s),ir("startkey",n,s,!0),ir("start_key",n,s,!0),ir("endkey",n,s,!0),ir("end_key",n,s,!0),ir("inclusive_end",n,s),ir("key",n,s,!0),ir("update_seq",n,s),s=""===(s=s.join("&"))?"":"?"+s,void 0!==n.keys){var u="keys="+encodeURIComponent(JSON.stringify(n.keys));u.length+s.length+1<=2e3?s+=("?"===s[0]?"&":"?")+u:(a="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"!=typeof t)return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.fetch("_temp_view"+s,{headers:new Xe({"Content-Type":"application/json"}),method:"POST",body:JSON.stringify(r)}).then(function(e){return i=e.ok,o=e.status,e.json()}).then(function(e){if(!i)throw e.status=o,H(e);return e}).then(rr(n));var c=Jn(t);return e.fetch("_design/"+c[0]+"/_view/"+c[1]+s,{headers:new Xe({"Content-Type":"application/json"}),method:a,body:JSON.stringify(r)}).then(function(e){return i=e.ok,o=e.status,e.json()}).then(function(e){if(!i)throw e.status=o,H(e);return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(rr(n))}(n,e,r);if("string"!=typeof e)return sr(r,e),Kn.add(function(){return Un(n,"temp_view/temp_view",e.map,e.reduce,!0,Qn).then(function(e){return function(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})}(fr(e).then(function(){return lr(e,r)}),function(){return e.db.destroy()})})}),Kn.finish();var i=e,t=Jn(i),o=t[0],s=t[1];return n.get("_design/"+o).then(function(e){var t=e.views&&e.views[s];if(!t)throw new En("ddoc "+e._id+" has no view named "+s);return Hn(e,s),sr(r,t),Un(n,i,t.map,t.reduce,!1,Qn).then(function(e){return"ok"===r.stale||"update_after"===r.stale?("update_after"===r.stale&&T(function(){fr(e)}),lr(e,r)):fr(e).then(function(){return lr(e,r)})})})}var hr={query:function(e,t,n){return Xn.query.call(this,e,t,n)},viewCleanup:function(e){return Xn.viewCleanup.call(this,e)}};function pr(e){return/^1-/.test(e)}function vr(t,n){var e=Object.keys(n._attachments);return Promise.all(e.map(function(e){return t.getAttachment(n._id,e,{rev:n._rev})}))}function yr(t,n,r,i){r=R(r);var o=[],s=!0;function a(e){return t.allDocs({keys:e,include_docs:!0,conflicts:!0}).then(function(e){if(i.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){e.deleted||!e.doc||!pr(e.value.rev)||function(e){return e._attachments&&0<Object.keys(e._attachments).length}(e.doc)||function(e){return e._conflicts&&0<e._conflicts.length}(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,o.push(e.doc),delete r[e.id])})})}return Promise.resolve().then(function(){var e=Object.keys(r).filter(function(e){var t=r[e].missing;return 1===t.length&&pr(t[0])});if(0<e.length)return a(e)}).then(function(){var e=function(e){var n=[];return Object.keys(e).forEach(function(t){e[t].missing.forEach(function(e){n.push({id:t,rev:e})})}),{docs:n,revs:!0,latest:!0}}(r);if(e.docs.length)return t.bulkGet(e).then(function(e){if(i.cancelled)throw new Error("cancelled");return Promise.all(e.results.map(function(e){return Promise.all(e.docs.map(function(e){var i=e.ok;return e.error&&(s=!1),i&&i._attachments?function(n,r,i){var e=te(r)&&!te(n),o=Object.keys(i._attachments);return e?n.get(i._id).then(function(t){return Promise.all(o.map(function(e){return function(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}(t,i,e)?r.getAttachment(i._id,e):n.getAttachment(t._id,e)}))}).catch(function(e){if(404!==e.status)throw e;return vr(r,i)}):vr(r,i)}(n,t,i).then(function(e){var r=Object.keys(i._attachments);return e.forEach(function(e,t){var n=i._attachments[r[t]];delete n.stub,delete n.length,n.data=e}),i}):i}))})).then(function(e){o=o.concat(Z(e).filter(Boolean))})})}).then(function(){return{ok:s,docs:o}})}var _r=1,gr="pouchdb",mr=5,br=0;function wr(t,n,r,i,o){return t.get(n).catch(function(e){if(404===e.status)return"http"!==t.adapter&&"https"!==t.adapter||S(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:i,_id:n,history:[],replicator:gr,version:_r};throw e}).then(function(e){if(!o.cancelled&&e.last_seq!==r)return e.history=(e.history||[]).filter(function(e){return e.session_id!==i}),e.history.unshift({last_seq:r,session_id:i}),e.history=e.history.slice(0,mr),e.version=_r,e.replicator=gr,e.session_id=i,e.last_seq=r,t.put(e).catch(function(e){if(409===e.status)return wr(t,n,r,i,o);throw e})})}function kr(e,t,n,r,i){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=i||{}}kr.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},kr.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?wr(this.target,this.id,e,t,this.returnValue):Promise.resolve(!0)},kr.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return wr(this.src,this.id,e,t,this.returnValue).catch(function(e){if(Ar(e))return!(n.opts.writeSourceCheckpoint=!1);throw e})}return Promise.resolve(!0)};var jr={undefined:function(e,t){return 0===ft(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return function(e,t){return e.session_id!==t.session_id?function e(t,n){var r=t[0];var i=t.slice(1);var o=n[0];var s=n.slice(1);if(!r||0===n.length)return{last_seq:br,history:[]};var a=r.session_id;if(Or(a,n))return{last_seq:r.last_seq,history:t};var u=o.session_id;if(Or(u,i))return{last_seq:o.last_seq,history:s};return e(i,s)}(e.history,t.history):{last_seq:e.last_seq,history:e.history}}(t,e).last_seq}};function Or(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||Or(e,r))}function Ar(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}kr.prototype.getCheckpoint=function(){var t=this;return t.opts&&t.opts.writeSourceCheckpoint&&!t.opts.writeTargetCheckpoint?t.src.get(t.id).then(function(e){return e.last_seq||br}).catch(function(e){if(404!==e.status)throw e;return br}):t.target.get(t.id).then(function(n){return t.opts&&t.opts.writeTargetCheckpoint&&!t.opts.writeSourceCheckpoint?n.last_seq||br:t.src.get(t.id).then(function(e){return n.version!==e.version?br:(t=n.version?n.version.toString():"undefined")in jr?jr[t](n,e):br;var t},function(e){if(404===e.status&&n.last_seq)return t.src.put({_id:t.id,last_seq:br}).then(function(){return br},function(e){return Ar(e)?(t.opts.writeSourceCheckpoint=!1,n.last_seq):br});throw e})}).catch(function(e){if(404!==e.status)throw e;return br})};var qr=0;function Er(e,t,n){var r=n.doc_ids?n.doc_ids.sort(ft):"",i=n.filter?n.filter.toString():"",o="",s="",a="";return n.selector&&(a=JSON.stringify(n.selector)),n.filter&&n.query_params&&(o=JSON.stringify(function(n){return Object.keys(n).sort(ft).reduce(function(e,t){return e[t]=n[t],e},{})}(n.query_params))),n.filter&&"_view"===n.filter&&(s=n.view.toString()),Promise.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+i+s+o+r+a;return new Promise(function(e){je(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}function Sr(r,i,o,s,a){var u,n,c,f=[],l={seq:0,changes:[],docs:[]},d=!1,h=!1,p=!1,v=0,y=o.continuous||o.live||!1,t=o.batch_size||100,_=o.batches_limit||10,g=!1,m=o.doc_ids,b=o.selector,w=[],k=qe();a=a||{ok:!0,start_time:(new Date).toISOString(),docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var j={};function e(){return c?Promise.resolve():Er(r,i,o).then(function(e){n=e;var t={};t=!1===o.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===o.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===o.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},c=new kr(r,i,n,s,t)})}function O(){if(w=[],0!==u.docs.length){var n=u.docs,e={timeout:o.timeout};return i.bulkDocs({docs:n,new_edits:!1},e).then(function(e){if(s.cancelled)throw C(),new Error("cancelled");var r=Object.create(null);e.forEach(function(e){e.error&&(r[e.id]=e)});var t=Object.keys(r).length;a.doc_write_failures+=t,a.docs_written+=n.length-t,n.forEach(function(e){var t=r[e._id];if(t){a.errors.push(t);var n=(t.name||"").toLowerCase();if("unauthorized"!==n&&"forbidden"!==n)throw t;s.emit("denied",R(t))}else w.push(e)})},function(e){throw a.doc_write_failures+=n.length,e})}}function A(){if(u.error)throw new Error("There was a problem getting docs.");a.last_seq=v=u.seq;var e=R(a);return w.length&&(e.docs=w,"number"==typeof u.pending&&(e.pending=u.pending,delete u.pending),s.emit("change",e)),d=!0,c.writeCheckpoint(u.seq,k).then(function(){if(d=!1,s.cancelled)throw C(),new Error("cancelled");u=void 0,D()}).catch(function(e){throw B(e),e})}function q(){return yr(r,i,u.diffs,s).then(function(e){u.error=!e.ok,e.docs.forEach(function(e){delete u.diffs[e._id],a.docs_read++,u.docs.push(e)})})}function E(){s.cancelled||u||(0!==f.length?(u=f.shift(),function(){var t={};return u.changes.forEach(function(e){"_user/"!==e.id&&(t[e.id]=e.changes.map(function(e){return e.rev}))}),i.revsDiff(t).then(function(e){if(s.cancelled)throw C(),new Error("cancelled");u.diffs=e})}().then(q).then(O).then(A).then(E).catch(function(e){x("batch processing terminated with error",e)})):S(!0))}function S(e){0!==l.changes.length?(e||h||l.changes.length>=t)&&(f.push(l),l={seq:0,changes:[],docs:[]},"pending"!==s.state&&"stopped"!==s.state||(s.state="active",s.emit("active")),E()):0!==f.length||u||((y&&j.live||h)&&(s.state="pending",s.emit("paused")),h&&C())}function x(e,t){p||(t.message||(t.message=e),a.ok=!1,a.status="aborting",f=[],l={seq:0,changes:[],docs:[]},C(t))}function C(e){if(!(p||s.cancelled&&(a.status="cancelled",d)))if(a.status=a.status||"complete",a.end_time=(new Date).toISOString(),a.last_seq=v,p=!0,e){(e=Y(e)).result=a;var t=(e.name||"").toLowerCase();"unauthorized"===t||"forbidden"===t?(s.emit("error",e),s.removeAllListeners()):function(e,t,n,r){if(!1===e.retry)return t.emit("error",n),t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=M),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var i=function(){e.current_back_off=qr};t.once("paused",function(){t.removeListener("active",i)}),t.once("active",i)}e.current_back_off=e.current_back_off||qr,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}(o,s,e,function(){Sr(r,i,o,s)})}else s.emit("complete",a),s.removeAllListeners()}function P(e,t,n){if(s.cancelled)return C();"number"==typeof t&&(l.pending=t),X(o)(e)&&(l.seq=e.seq||n,l.changes.push(e),T(function(){S(0===f.length&&j.live)}))}function L(e){if(g=!1,s.cancelled)return C();if(0<e.results.length)j.since=e.results[e.results.length-1].seq,D(),S(!0);else{var t=function(){y?(j.live=!0,D()):h=!0,S(!0)};u||0!==e.results.length?t():(d=!0,c.writeCheckpoint(e.last_seq,k).then(function(){d=!1,a.last_seq=v=e.last_seq,t()}).catch(B))}}function $(e){if(g=!1,s.cancelled)return C();x("changes rejected",e)}function D(){if(!g&&!h&&f.length<_){g=!0,s._changes&&(s.removeListener("cancel",s._abortChanges),s._changes.cancel()),s.once("cancel",t);var e=r.changes(j).on("change",P);e.then(n,n),e.then(L).catch($),o.retry&&(s._changes=e,s._abortChanges=t)}function t(){e.cancel()}function n(){s.removeListener("cancel",t)}}function I(){e().then(function(){if(!s.cancelled)return c.getCheckpoint().then(function(e){j={since:v=e,limit:t,batch_size:t,style:"all_docs",doc_ids:m,selector:b,return_docs:!0},o.filter&&("string"!=typeof o.filter?j.include_docs=!0:j.filter=o.filter),"heartbeat"in o&&(j.heartbeat=o.heartbeat),"timeout"in o&&(j.timeout=o.timeout),o.query_params&&(j.query_params=o.query_params),o.view&&(j.view=o.view),D()});C()}).catch(function(e){x("getCheckpoint rejected with ",e)})}function B(e){d=!1,x("writeCheckpoint completed with error",e)}s.ready(r,i),s.cancelled?C():(s._addedListeners||(s.once("cancel",C),"function"==typeof o.complete&&(s.once("error",o.complete),s.once("complete",function(e){o.complete(null,e)})),s._addedListeners=!0),void 0===o.since?I():e().then(function(){return d=!0,c.writeCheckpoint(o.since,k)}).then(function(){d=!1,s.cancelled?C():(v=o.since,I())}).catch(B))}function xr(){a.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var n=this,r=new Promise(function(e,t){n.once("complete",e),n.once("error",t)});n.then=function(e,t){return r.then(e,t)},n.catch=function(e){return r.catch(e)},n.catch(function(){})}function Cr(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function Pr(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw Y(z,"`doc_ids` filter parameter is not a list.");n.complete=r,(n=R(n)).continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var i=new xr(n);return Sr(Cr(e,n),Cr(t,n),n,i),i}function Lr(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),(n=R(n)).PouchConstructor=n.PouchConstructor||this,new $r(e=Cr(e,n),t=Cr(t,n),n,r)}function $r(e,t,n,r){var i=this;this.canceled=!1;var o=n.push?C({},n,n.push):n,s=n.pull?C({},n,n.pull):n;function a(e){i.emit("change",{direction:"pull",change:e})}function u(e){i.emit("change",{direction:"push",change:e})}function c(e){i.emit("denied",{direction:"push",doc:e})}function f(e){i.emit("denied",{direction:"pull",doc:e})}function l(){i.pushPaused=!0,i.pullPaused&&i.emit("paused")}function d(){i.pullPaused=!0,i.pushPaused&&i.emit("paused")}function h(){i.pushPaused=!1,i.pullPaused&&i.emit("active",{direction:"push"})}function p(){i.pullPaused=!1,i.pushPaused&&i.emit("active",{direction:"pull"})}this.push=Pr(e,t,o),this.pull=Pr(t,e,s),this.pushPaused=!0,this.pullPaused=!0;var v={};function y(n){return function(e,t){("change"!==e||t!==a&&t!==u)&&("denied"!==e||t!==f&&t!==c)&&("paused"!==e||t!==d&&t!==l)&&("active"!==e||t!==p&&t!==h)||(e in v||(v[e]={}),v[e][n]=!0,2===Object.keys(v[e]).length&&i.removeAllListeners(e))}}function _(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}n.live&&(this.push.on("complete",i.pull.cancel.bind(i.pull)),this.pull.on("complete",i.push.cancel.bind(i.push))),this.on("newListener",function(e){"change"===e?(_(i.pull,"change",a),_(i.push,"change",u)):"denied"===e?(_(i.pull,"denied",f),_(i.push,"denied",c)):"active"===e?(_(i.pull,"active",p),_(i.push,"active",h)):"paused"===e&&(_(i.pull,"paused",d),_(i.push,"paused",l))}),this.on("removeListener",function(e){"change"===e?(i.pull.removeListener("change",a),i.push.removeListener("change",u)):"denied"===e?(i.pull.removeListener("denied",f),i.push.removeListener("denied",c)):"active"===e?(i.pull.removeListener("active",p),i.push.removeListener("active",h)):"paused"===e&&(i.pull.removeListener("paused",d),i.push.removeListener("paused",l))}),this.pull.on("removeListener",y("pull")),this.push.on("removeListener",y("push"));var g=Promise.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return i.emit("complete",t),r&&r(null,t),i.removeAllListeners(),t},function(e){if(i.cancel(),r?r(e):i.emit("error",e),i.removeAllListeners(),r)throw e});this.then=function(e,t){return g.then(e,t)},this.catch=function(e){return g.catch(e)}}o(xr,a.EventEmitter),xr.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},xr.prototype.ready=function(e,t){var n=this;function r(){n.cancel()}n._readyCalled||(n._readyCalled=!0,e.once("destroyed",r),t.once("destroyed",r),n.once("complete",function(){e.removeListener("destroyed",r),t.removeListener("destroyed",r)}))},o($r,a.EventEmitter),$r.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},We.plugin(function(e){e.adapter("idb",dn,!0)}).plugin(function(e){e.adapter("http",An,!1),e.adapter("https",An,!1)}).plugin(hr).plugin(function(e){e.replicate=Pr,e.sync=Lr,Object.defineProperty(e.prototype,"replicate",{get:function(){var r=this;return void 0===this.replicateMethods&&(this.replicateMethods={from:function(e,t,n){return r.constructor.replicate(e,r,t,n)},to:function(e,t,n){return r.constructor.replicate(r,e,t,n)}}),this.replicateMethods}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}),Ir.exports=We}).call(this,Dr(5),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,12:12,2:2,3:3,4:4,5:5,6:6,7:7}]},{},[13])(13)});

function adjNum(n, decimals) {
	if (typeof n != "number") return n;	
	if (isNaN(n)) return "---";
	if (!isFinite(n)) { 
		if (s < 0) return "-∞";
		else return "∞";
	}
	if (decimals !== undefined) return n.toFixed(decimals);
	var an = Math.abs(n);
	if (an >= 100000) return n.toFixed(0);
	else if (an >= 100) return n.toFixed(2);
	else if (an >= 1) return n.toFixed(4);
	else if (an > 0.0001) return n.toFixed(6);
	else {
		var s = (n*1000000).toFixed(3);
		if (s == "0.000") return s;
		return s+"µ";
	}
}

function adjNumN(n) {
	if (typeof n != "number") return n;
	var an = Math.abs(n);
	if (an >= 100000) return n.toFixed(0);
	else if (an >= 100) return n.toFixed(2);
	else if (an >= 1) return n.toFixed(4);
	else if (an > 0.0001) return n.toFixed(6);
	else {
		if (an === 0) return an;
		else {
			var s = n.toFixed(10);	
			while (s[s.length-1] == '0') {
				s = s.substr(0,s.length-1);
			}
			return s;
		}
	}
	
}
  //"

var RpcClient = (function(){
	"use strict";
	
	
	function RpcClient(url) {
		this.url = url;
		this.nextId = 1;
		this.context={};
	};
	
	function isObjEmpty(obj) {
		Object.keys(obj).length === 0; 
	}
	
	RpcClient.prototype.call2 = function(method,args,retryCnt) {
		if (!retryCnt) retryCnt = 0;

		function retryCallback(status, statusText, decision) {			
			if (decision) {
				return this.call2(method,args, retryCnt+1);
			} else {
				throw {code:status,message:statusText};
			}
		}
		

		var id = this.nextId++;
		var req = {
				jsonrpc: "2.0",
				id:this.nextId,
				method:method,
				params: args
		};
		if (Object.keys(this.context).length) {
			req.context = this.context;
		}
		return fetch(this.url, {
			method: "POST",
			headers: {
				"Content-Type":"application/json",
				"Accept":"application/json"
			},
			body: JSON.stringify(req)
		}).then(function(resp) {
			if (resp.status != 200) {
					return Promise.resolve(this.onConnectionError(
									[resp.status,resp.statusText],retryCnt))
							.then(retryCallback.bind(this,resp.status,resp.statusText));
			} else {
				return resp.json().then(function(jres) {
					if (jres.error) {
						return this.onError(jres.error).then(function(z) {
							if (z === undefined) return this.call2(method,args);
							else return z;
						}.bind(this));
					} else {
						if (jres.context) {
							this.updateContext(jres.context);
						}
						return jres.result;
					}
				}.bind(this),function(err){
					var msg = "Response parse error";
					return Promise.resolve(this.onConnectionError(
							[1,err],retryCnt)).then(retryCallback.bind(this,1,err));
				}.bind(this));
			}			
		}.bind(this), function(err) {
			return Promise.resolve(this.onConnectionError(
					[0,err],retryCnt)).then(retryCallback.bind(this,0,err));
		}.bind(this));		
	};
	
	RpcClient.prototype.updateContext = function(newCtx) {
		for (var i in newCtx) {
			if (newCtx[i] === null) delete this.context[i];
			else this.context[i] = newCtx[i];
		}
	}
	
	
	RpcClient.prototype.call = function(method) {
		var args = Array.prototype.slice.call(arguments,1);
		return this.call2(method,args,0);
	};
	
	RpcClient.prototype.onConnectionError = function(details, retryCnt) {
		if (retryCnt > 3) 
			return false;
		else {
			return new Promise(function(ok){
				setTimeout(function(){ok(true);},retryCnt*500);
			});
		}
	};
	
	RpcClient.prototype.createMethod = function(methodName) {
		return this.call.bind(this, methodName);
	};
	
	RpcClient.prototype.methods = function(retryCnt) {
		if (!retryCnt) retryCnt = 0;
		function retryCallback(status, statusText, decision) {			
			if (decision) {
				return this.methods(retryCnt+1);
			} else {
				fail({code:status,message:statusText});
			}
		}
		var m = "methods";
		if (this.url && !this.url.endsWith("/")) m = "/" + m;
		return fetch(this.url+m).then(function(resp){
			if (resp.status == 200) {
					return resp.json();
			} else {
				return Promise.resolve(this.onConnectionError(
						[resp.status,resp.statusText],retryCnt)).then(
						retryCallback.bind(this,xhr.status,xhr.statusText));
			}				
		}.bind(this)).catch(function(err) {
			return Promise.resolve(this.onConnectionError(
					[0,err], retryCnt)).then(
					retryCallback.bind(this,0,err));

		}.bind(this));
	};
	
	RpcClient.prototype.createObject = function(prefix) {
		return this.methods().then(function(m) {
		
			var obj = {};
			m.forEach(function(itm) {
				
				if (!prefix || itm.substr(0,prefix.length) == prefix) {
					
					if (prefix) {
						itm = itm.substr(prefix.length);
						if (itm.substr(0,1) == ".") itm = itm.substr(1);
					}
					if (itm) {
						var parts = itm.split(".");
						var x = obj;
						var last = null;
						parts.forEach(function(p){
							if (last !== null) {
								if (typeof x[last] != "object") {
									x[last] = {};
								}
								x = x[last];
							}
							last = p;
						});
						if (last !== null) {
							x[last] = this.createMethod(itm);
						}
					}

					
				}			
			}.bind(this));
			return obj;
		}.bind(this));		
	};

	RpcClient.prototype.onError=function(details) {
		return Promise.reject(details);
	}


	return RpcClient;

})();

var WsRpcClient  = (function(){
	"use strict";

	function fixUrl(url) {
		var wsurl;
		var httpurl;
		if (url.substr(0,5) == "ws://") {
			wsurl = url;
			httpurl = "http://"+url.substr(5);
		}
		else if (url.substr(0,6) == "wss://") {
			wsurl = url;
			httpurl = "https://"+url.substr(6);
		}
		else if (url.substr(0,7) == "http://") {
			wsurl = "ws://"+url.substr(7);
			httpurl = url;
		}
		else if (url.substr(0,8) == "https://") {
			wsurl = "wss://"+url.substr(8);
			httpurl = url;
		} else if (url.substr(0,1) == "/") {
			return fixUrl(location.origin+url);
		} else {
			var x = location.pathname.lastIndexOf("/");
			var path = location.pathname.substr(0,x+1);
			return fixUrl(location.origin+path+url);			
		}
		
		return {
			wsurl:wsurl,
			httpurl:httpurl
		};

	}
	

	function WsRpcClient(url) {
		var u = fixUrl(url);
		this.wsurl = u.wsurl;
		RpcClient.call(this,u.httpurl);
		this.socket = null;
		this.waiting = {};
		this.notify = {};
		this.retryCnt = 0;
	}
	WsRpcClient.prototype = Object.create(RpcClient.prototype);
	WsRpcClient.prototype.connect = function() {
		if (this.socket == null) {
			return (this.socket = new Promise(function(ok,error) {
				var init = function() {
					s.removeEventListener("open", init);
					s.removeEventListener("error", e);	
					s.addEventListener("close", this.onclose.bind(this));
					s.addEventListener("message", this.onmessage.bind(this));
					s.addEventListener("error", this.onerror.bind(this));
					ok(s);
				}.bind(this);
				var e = function(x) {
					s.removeEventListener("open", init);
					s.removeEventListener("error", e);	
					error(x);
				}.bind(this);
				var s = new WebSocket(this.wsurl);
				s.addEventListener("open",init);
				s.addEventListener("error",e);
			}.bind(this))).then(function(){});	
		}
	} 

	WsRpcClient.prototype.onclose = function() {	
		this.socket = null;
		if (Object.keys(this.waiting).length != 0) {
			Promise.resolve(this.onConnectionError([-1,"WebSocket closed"],this.retryCnt++)).
				then(function(resp) {
					var w = this.waiting;
					this.waiting = {};
					for (var x in w) {
						var c = w[x];
						if (resp) {
							c.ok = this.call2(c.method, c.args);
						} else {
							c.error({"code":-1,"message":"connection lost"});
						}
					}					
				}.bind(this));
		}
	}

	WsRpcClient.prototype.onmessage = function(event) {


		this.retryCnt = 0;
		var data = event.data;
		var jdata = JSON.parse(data);
		if (jdata.result) {
			var id = jdata.id;
			var reg = this.waiting[id];
			if (jdata.context) {
				this.updateContext(jdata.context);
			}
			if (reg) reg.ok(jdata.result);
			delete this.waiting[id];
		} else if (jdata.error) {
			var id = jdata.id;
			var reg = this.waiting[id];
			if (reg) reg.ok(this.onError(jdata.error).then(function(z) {
					if (z == undefined) return this.call2(reg.method, reg.args);
					else return z;
				}.bind(this)));
			delete this.waiting[id];
		} else if (jdata.method) {
			this.onnotify(jdata.method, jdata.params, jdata.jsonrpc, jdata.id)
		}
	}

	WsRpcClient.prototype.onerror = function() {
	
	} 

	WsRpcClient.prototype.onnotify = function(method,params,version,id) {

		function sendSuccess(id, version, result) {
			if (typeof result =="undefined") {
				sendError(id,version,"Method didn't produce a result");
			} else {
				this.socket.send(JSON.stringify({"id":id, "jsonrpc":version, "result": result}));
			}
		}

		function sendError(id, version, error) {
			if (!(typeof error == "object" && "code" in error && "message" in error)) {
				error = {"code":-32603,"message":"Internal error", "data":error.toString()};
			}
			this.socket.send(JSON.stringify({"id":id, "jsonrpc":version, "error": error}));	
		}	


		var n = this.notify[method];
		if (typeof id != "undefined" && id != null) {
			if (n) {
				var resp = n(params);
				if (typeof resp == "object" && resp instanceof Promise) {
					resp.then(sendSuccess.bind(this,id, version),
						sendError.bind(this,id, version));
				} else {
					sendSiccess.call(this,id, version, resp);
				}
			} else {
				sendError.call(this, id,version,{
					"code":-32601,
					"message":"Method not found",
					"data": method
				})
			}
		} else if (n) {
			n(params);
		}					
	} 

	WsRpcClient.prototype.call2 = function(method,args) {
		return new Promise(function(ok,error) {
			var id = "ws"+(++this.nextId);
			this.waiting[id] = {
				method:method,
				args:args,
				ok:ok,
				error,error};
			var req = {
					"jsonrpc":"2.0",
					"method":method,
					"params":args,
					"id":id};

			if (Object.keys(this.context).length) {
				req.context = this.context;
			}
			
			var m = JSON.stringify(req);

			
			function send() {
				if (this.socket == null) {
					this.connect()
						.then(send.bind(this),this.onclose.bind(this));
				} else {
					this.socket.then(function(s) {
						s.send(m);
					});
				}
			}
			send.call(this);
		}.bind(this));
	}
	
	return WsRpcClient;

})();
	 

//

///declare namespace TemplateJS
var TemplateJS = function(){
	"use strict";

	///registers to an event for once fire - returns promise
	/**
	 * @param element element which to register
	 * @param name of the event similar to addEventListener
	 * @param arg arguments passed to the promise when event is fired
	 * 
	 * @return Promise object which is resolved once the event triggers
	 */
	function once(element, event, args) {

		return new Promise(function(ok) {
			
			function fire(z) {
				element.removeEventListener(event, fire, args);				
				ok(z);
			}			
			element.addEventListener(event, fire, args);
		});
	};
	
	///Creates a promise which is resolved after some tome
	/**
	 * @param time time in milliseconds (same as setTimeout)
	 * @param arg argument passed to the promise
	 * @return a Promise resolved after specified time
	 */
	function delay(time, arg) {
		return new Promise(function(ok) {
			setTimeout(function() {
				ok(arg);
			},time);
		});
	};
	

	
	///Creates a promise which is resolved once the specified element is added to the DOM
	/** @param elem element to monitor
	 *  @param arg arguments passed to the promise once the element is added to the DOM
	 *  @param timeout count of seconds to wait for render. Default is 10 seconds 
	 *  @return a Promise resolved once the element is rendered
	 *  
	 *  @note The function takes strong reference to the element. To avoid memory leak, there is a timeout
	 *  in which the element must be rendered (a.k.a. put to the DOM) otherwise, the Promise is rejected
	 *  
	 *  You can specify timeout by the timeout argument. Note that the timeout is not exactly in seconds. It
	 *  defines count of DOM changes rounds, where each round contains all changes made during 1 seconds
	 *  So if there is no activity in the DOM, the counter is stopped. 
	 *  This better accomodiate waiting to slow DOM changes and animations, which can cover an
	 *  animations which takes longer than 10 seconds to play especially, when whole animation is made by CSS
	 *  and no other DOM changes are made during the play
	 */
	function waitForRender(elem, arg, timeout){
		if (!timeout) timeout = 10;
		if (elem.isConnected) return Promise.resolve(arg);
		init_waitForRender();
		return new Promise(function(ok, err){
			
			waitForRender_list.push({
				elem:elem,
				fn:ok,
				err:err,
				arg:arg,
				time:Date.now(),
				timeouts: timeout,
				st:true
			});
		});
		
	};
	
	///Creates a promise which is resolved once the specified element is removed from the DOM
	/** @param elem element to monitor
	 *  @param arg argument
	 *  @param timeout specify timeout. If missing, function will never timeout
	 *  @return a Promise resolved once the element is removed
	 *  
	 *  @note function is useful to emulate destructor when the particular element
	 *  is removed from the DOM
	 */
	function waitForRemove(elem, arg, timeout) {
		if (timeout === undefined) timeout = null;
		if (!elem.isConnected) return Promise.resolve(arg);
		init_waitForRender();
		return new Promise(function(ok, err){
			
			waitForRender_list.push({
				elem:elem,
				fn:ok,
				err:err,
				arg:arg,
				time:Date.now(),
				timeouts: timeout,
				st:false
			});
		});
		
	}

	function init_waitForRender() {
		if (waitForRender_observer == null) {
			waitForRender_observer = new MutationObserver(waitForRender_callback);				
			waitForRender_observer.observe(document, 
				{attributes: false,
				 childList: true,
				  characterData: false,
				   subtree:true});
		}		
	}
	
	var waitForRender_list = [];
	var waitForRender_observer = null;
	var waitForRender_callback = function() {
		if (waitForRender_list.length == 0) {
			waitForRender_observer.disconnect();
			waitForRender_observer = null;
		} else {
			var tm = Date.now();
			waitForRender_list = waitForRender_list.reduce(function(acc,x){				
				if (x.elem.isConnected  == x.st) {
					x.fn(x.arg);
				} else if (x.timeouts !== null) {
					if (tm - x.time > 1000) {
						x.time = tm;
						if (--x.timeouts <= 0) {
							x.err(new Error("waitForRender/waitForRemove timeout"));
							return acc;
						} 
					} 
					acc.push(x);
				} else {
					acc.push(x);
				}
				return acc;
			},[]);
		}
	};


	
	
	function Animation(elem) {
		this.elem = elem;
		
		var computed = window.getComputedStyle(elem, null); 
		if (computed.animationDuration != "0" && computed.animationDuration != "0s") {
			this.type =  this.ANIMATION;
			this.dur = computed.animationDuration;
		} else if (computed.transitionDuration != "0" && computed.transitionDuration != "0s") {
			this.type = this.TRANSITION;
			this.dur = computed.transitionDuration;
		} else {
			this.type = this.NOANIM;
			this.dur = "0s";
		}	
		if (this.dur.endsWith("ms")) this.durms = parseFloat(this.dur);
		else if (this.dur.endsWith("s")) this.durms = parseFloat(this.dur)*1000;
		else if (this.dur.endsWith("m")) this.durms = parseFloat(this.dur)*60000;
		else this.durms = 1000;
	}
	 Animation.prototype.ANIMATION = 1;
	 Animation.prototype.TRANSITION = 2;
	 Animation.prototype.NOANIM = 0;
	
	 Animation.prototype.isAnimated = function() {
		return this.type != this.NOANIM;
	}
	 Animation.prototype.isTransition = function() {
		return this.type == this.TRANSITION;
	}
	 Animation.prototype.isAnimation = function() {
		return this.type == this.ANIMATION;
	}
	
	 Animation.prototype.restart = function() {
		var parent = this.elem.parentElement;
		var next = this.elem.nextSibling;
		parent.insertBefore(this.elem, next);		
	}
	
	 Animation.prototype.wait = function(arg) {
		var res;
		switch (this.type) {
			case this.ANIMATION: res = Promise.race([delay(this.durms),once(this.elem,"animationend")]);break;
			case this.TRANSITION: res = Promise.race([delay(this.durms),once(this.elem,"transitionend")]);break;
			default:
			case this.NOTHING:res = Promise.resolve();break;
		}
		if (arg !== undefined) {
			return res.then(function(){return arg;});
		} else {
			return res;
		}
	}

	///removes element from the DOM, but it plays "close" animation before removal
	/**
	 * @param element element to remove
	 * @param skip_anim remove element immediately, do not play animation (optional)
	 * @return function returns Promise which resolves once the element is removed
	 */
	function removeElement(element, skip_anim) {
		if (!element.isConnected) return Promise.resolve();
		if (element.dataset.closeAnim && !skip_anim) {			
		    var remopen = element.dataset.openAnim;
			if (remopen && !element.classList.contains(remopen)) {
					return removeElement(element,true);
			}			
			var closeAnim = element.dataset.closeAnim;
			return waitForDOMUpdate().then(function() {
				if (remopen) 
					element.classList.remove(remopen);
				element.classList.add(closeAnim);
				var anim = new Animation(element);
				if (anim.isAnimation()) 
					anim.restart();				
				return anim.wait();
			}).then(function() {
				return removeElement(element,true);			
			})
		} else {
			var event = new Event("remove");
			element.parentElement.removeChild(element);
			element.dispatchEvent(event);
			return Promise.resolve();
		}		
	}
	
	function waitForDOMUpdate() {
		return new Promise(function(ok) {
			window.requestAnimationFrame(function() {
				window.requestAnimationFrame(ok);
			});
		})
	}
	
	function addElement(parent, element, before) {
		if (before === undefined) before = null;
		if (element.dataset.closeAnim) {
			element.classList.remove(element.dataset.closeAnim);
		}
		element.classList.remove(element.dataset.openAnim);
		parent.insertBefore(element,before);
		window.getComputedStyle(element);
		if (element.dataset.openAnim) {
			waitForDOMUpdate().then(function() {
				element.classList.add(element.dataset.openAnim);				
			});
		}
	}
	
	function createElement(def) {
		if (typeof def == "string") {
			return document.createElement(def);
		} else if (typeof def == "object") {
			if ("tag" in def) {
				var elem = document.createElement(def.tag);
				var attrs = def.attrs || def.attributes;
				if (typeof attrs == "object") {
					for (var i in attrs) {
						elem.setAttribute(i,attrs[i]);
					}
				}
				if ("html" in def) {
					elem.innerHTML=def.html;
				} else if ("text" in def) {
					elem.appendChild(document.createTextNode(def.text));
				} else {
					var content = def.content || def.value || def.inner;
					if (content !== undefined) {
						elem.appendChild(loadTemplate(content));
					}
				}
				return elem;
			} else if ("text" in def) {
				return document.createTextNode(def.text);
			}
		}
		return document.createElement("div");
	}
	
	function loadTemplate(templateID) {
		var tempel;
		if (typeof templateID == "string") {
			tempel = document.getElementById(templateID);
			if (!tempel) {
				throw new Error("Template element doesn't exists: "+templateID);				
			}
		} else if (typeof templateID == "object") {
			if (templateID instanceof Element) {
				tempel = templateID;
			} else if (Array.isArray(templateID)) {
				return templateID.reduce(function(accum,item){
					var x = loadTemplate(item);
					if (accum === null) accum = x; else accum.appendChild(x);
					return accum;
				},document.createDocumentFragment());
			} else {
				return createElement(templateID);
			}
		}
		var cloned;
		if ("content" in tempel) {
			cloned = document.importNode(tempel.content,true);
		} else {
			cloned = document.createDocumentFragment();
			var x= tempel.firstChild;
			while (x) {
				cloned.appendChild(x.cloneNode(true));
				x = x.nextSibling;
			}
		}
		return cloned;
		
	}
	
		
	function View(elem) {
		if (typeof elem == "string") elem = document.getElementById(elem);
		this.root = elem;
		this.marked =[];
		this.groups =[];
		this.rebuildMap();
		//apply any animation now
		if (this.root.dataset && this.root.dataset.openAnim) {
			this.root.classList.add(this.root.dataset.openAnim);
		}
		
	};
	
		
	///Get root element of the view
	View.prototype.getRoot = function() {
		return this.root;
	}
	
	///Replace content of the view
	/**
	 * @param elem element which is put into the view. It can be also instance of View
	 */
	View.prototype.setContent = function(elem) {
		if (elem instanceof View) 
			return this.setContent(elem.getRoot());		
		this.clearContent();
		this.defaultAction = null;
		this.cancelAction = null;
		this.root.appendChild(elem);
		this.rebuildMap();
	};
	
	///Replace content of the view generated from the template
	/**
	 * @param templateRef ID of the template
	 */
	View.prototype.loadTemplate = function(templateRef) {
		this.setContent(loadTemplate(templateRef));
	}
		
	View.prototype.replace = function(view, skip_wait) {
		
		if (this.lock_replace) {
			view.lock_replace = this.lock_replace =  this.lock_replace.then(function(v) {
				delete view.lock_replace 
				return v.replace(view,skip_wait);
			});
			return this.lock_replace;
		}

		var nx = this.getRoot().nextSibling;
		var parent = this.getRoot().parentElement;
		var newelm = view.getRoot();
		
		view.modal_elem = this.modal_elem;
		delete this.modal_elem;
		
		if (!skip_wait) {
			var mark = document.createComment("#");
			parent.insertBefore(mark,nx);			
			view.lock_replace = this.close().then(function(){				
				addElement(parent,view.getRoot(), mark);
				parent.removeChild(mark);
				delete view.lock_replace;
				return view;
			});
			return view.lock_replace;
		} else {
			this.close();
			addElement(parent,view.getRoot(),nx);
			return Promise.resolve(view);
		}			
	}
	///Visibility state - whole view is hidden
	View.HIDDEN = 0;
	///Visibility state - whole view is visible
	View.VISIBLE = 1;
	///Visibility state - whole view is hidden, but still occupies area (transparent)
	View.TRANSPARENT=-1
	
	View.prototype.setVisibility = function(vis_state) {
		if (vis_state == View.VISIBLE) {
			this.root.hidden = false;
			this.root.style.visibility = "";
		} else if (vis_state == View.TRANSPARENT) {
			this.root.hidden = false;
			this.root.style.visibility = "hidden";			
		} else {
			this.root.hidden = true;
		}
	}
	
	View.prototype.show = function() {
		this.setVisibility(View.VISIBLE);
	}
	
	View.prototype.hide = function() {
		this.setVisibility(View.HIDDEN);
	}
	
	///Closes the view by unmapping it from the doom
	/** The view can be remapped through the setConent or open() 
	 * 
	 * @param skip_anim set true to skip any possible closing animation
	 *  
	 * @return function returns promise once the view is closed, this is useful especially when
	 * there is closing animation
	 * 
	 * */
	View.prototype.close = function(skip_anim) {
		return removeElement(this.root).then(function() {		
			if (this.modal_elem && this.modal_elem.isConnected) 
				this.modal_elem.parentElement.removeChild(this.modal_elem);			
		}.bind(this));
	}

	///Opens the view as toplevel window
	/** @note visual of toplevel window must be achieved through styles. 
	 * This function just only adds the view to root of page
	 * 
	 * @param elem (optional)if specified, the view is opened under specified element
	 * 
	 * @note function also installs focus handler allowing focus cycling by TAB key
	 */
	View.prototype.open = function(elem) {
		if (!elem) elem = document.body;
		addElement(elem,this.root);
		this._installFocusHandler();
	}


	///Opens the view as modal window
	/**
	 * Append lightbox which prevents accesing background of the window
	 * 
	 * @note function also installs focus handler allowing focus cycling by TAB key
	 */
	View.prototype.openModal = function() {
		if (this.modal_elem) return;
		var lb = this.modal_elem = document.createElement("light-box");
		if (View.lightbox_class) lb.classList.add(View.lightbox_class);
		else lb.setAttribute("style", "display:block;position:fixed;left:0;top:0;width:100vw;height:100vh;"+View.lightbox_style);
		document.body.appendChild(lb);
		this.open();
	//	this.setFirstTabElement()
	}
	
	View.clearContent = function(element) {
		var event = new Event("remove");
		var x =  element.firstChild
		while (x) {
			var y = x.nextSibling; 
			element.removeChild(x);
			x.dispatchEvent(event)
			x = y;
		}		
	}
	
	View.prototype.clearContent = function() {
		View.clearContent(this.root);
		this.byName = {};
	};
	
	///Creates view at element specified by its name
	/**@param name name of the element used as root of View
	 * 
	 * @note view is not registered as collection, so it is not accessible from the parent
	 * view though the findElements() function. However inner items are still visible directly
	 * on parent view.  
	 */
	View.prototype.createView = function(name) {
		var elem = this.findElements(name);
		if (!elem) throw new Error("Cannot find item "+name);		
		if (elem.length != 1) throw new Error("The element must be unique "+name);
		var view = new View(elem[0]);
		return view;
	};
	
	///Creates collection at given element
	/**
	 * @param selector which defines where collection is created. If there are multiple
	 * elements matching the selector, they are all registered as collection.
	 * @param name new name of collection. If the selector is also name of existing
	 * item, then this argument is ignored, because function replaces item by collection 
	 * 
	 * @note you don't need to call this function if you make collection by adding [] after
	 * the name 
	 */
	View.prototype.createCollection = function(selector, name) {
		var elems = this.findElements(selector);
		if (typeof selector == "string" && this.byName[selector]) name = selector;		
		var res = elems.reduce(function(sum, item){
			var x = new GroupManager(item, name);
			this.groups.push(x);
			sum.push(x);
			return sum;
		},[]); 
		this.byName[name] = res;
	};
	
	///Returns the name of class used for the mark() and unmark()
	/**
	 * If you need to use different name, you have to override this value
	 */
	View.prototype.markClass = "mark";	
	
	///Finds elements specified by selector or name
	/**
	 * @param selector can be either a string or an array. If the string is specified, then
	 * the sting can be either name of the element(group), which is specified by data-name or name
	 * or it can be a CSS selector if it starts by dot ('.'), hash ('#') or brace ('['). It
	 * can also start by $ to specify, that rest of the string is complete CSS selector, including
	 * a tag name ('$tagname'). If the selector is array, then only last item can be selector. Other
	 * items are names of collections as the function searches for the elements inside of 
	 * collections where the argument specifies a search path (['group-name','index1','index2','item'])
	 * 
	 * @note if `index1` is null, then all collections of given name are searched. if `index2` is
	 *  null, then result is all elements matching given selector for all items in the collection. This
	 *  is useful especially when item is name, because searching by CSS selector is faster if
	 *  achieveded directly from root
	 * 
	 *  
	 */
	View.prototype.findElements = function(selector) {
		if (typeof selector == "string") {
			if (selector) {
				var firstChar =selector.charAt(0);
				switch (firstChar) {
					case '.':
					case '[':			
					case '#': return Array.from(this.root.querySelectorAll(selector));
					case '$': return Array.from(this.root.querySelectorAll(selector.substr(1)));
					default: return selector in this.byName?this.byName[selector]:[];
				}
			} else {
				return [this.root];
			}
		} else if (Array.isArray(selector)) {
			if (selector.length==1) {
				return this.findElements(selector[0]);
			}
			if (selector.length) {
				var gg = this.byName[selector.shift()];
				if (gg) {
						var idx = selector.shift();
						if (idx === null) {
							return gg.reduce(function(sum,item){
								if (item.findElements)
									sum.push.apply(sum,item.findElements(selector));
								return sum;
							},[]);						
						} else {
							var g = gg[idx];
							if (g && g.findElements) {
								return g.findElements(selector);
							}
						}
					}
			}			
		} else if (typeof selector == "object" && selector instanceof Element) {
			return [selector];
		} 
		return [];
	}
	
	
	///Marks every element specified as CSS selector with a mark
	/**
	 * The mark class is stored in variable markClass. 
	 * This function is useful to mark elements for various purposes. For example if
	 * you need to highlight an error code, you can use selectors equal to error code. It
	 * will mark all elements that contain anything relate to that error code. Marked
	 * elements can be highlighted, or there can be hidden message which is exposed once
	 * it is marked
	 * 
	 */
	View.prototype.mark = function(selector) {
		var items = this.findElements(selector);
		var cnt = items.length;
		for (var i = 0; i < cnt; i++) {
			items[i].classList.add(this.markClass);
			this.marked.push(items[i]);
		}				
	};
			

	View.prototype.forEachElement = function(selector, fn, a, b) {
		var items = this.findElements(selector);
		items.forEach(fn, a, b);
	}

	
	///Removes all marks
	/** Useful to remove any highlight in the View
	 */
	View.prototype.unmark = function() {
		var cnt = this.marked.length;
		for (var i = 0; i < cnt; i++) {
			this.marked[i].classList.remove(this.markClass);
		}
		this.marked = [];
	};
	
	View.prototype.anyMarked = function() {
		return this.marked.length > 0;
	}
	///Installs keyboard handler for keys ESC and ENTER
	/**
	 * This function is called by setDefaultAction or setCancelAction, do not call directly
	 */
	View.prototype._installKbdHandler = function() {
		if (this.kbdHandler) return;
		this.kbdHandler = function(ev) {
			var x = ev.which || ev.keyCode;
			if (x == 13 && this.defaultAction && ev.target.tagName != "TEXTAREA" && ev.target.tagName != "BUTTON") {
				if (this.defaultAction(this)) {
					ev.preventDefault();
					ev.stopPropagation();
				}
			} else if (x == 27 && this.cancelAction) {
				if (this.cancelAction(this)) {
					ev.preventDefault();
					ev.stopPropagation();
				}			
			}		
		}.bind(this);
		this.root.addEventListener("keydown", this.kbdHandler);
	};
	
	///Sets function for default action
	/** Default action is action called when user presses ENTER. 
	 *
	 * @param fn a function called on default action. The function receives reference to
	 * the view as first argument. The function must return true to preven propagation
	 * of the event
	 * @param el_name optional, if set, corresponding element receives click event for default action
	 *                  (button OK in dialog)
	 * 
	 * The most common default action is to validate and sumbit entered data
	 */
	View.prototype.setDefaultAction = function(fn, el_name) {
		this.defaultAction = fn;
		this._installKbdHandler();
		if (el_name) {
			var data = {};
			data[el_name] = {"!click":fn};
			this.setData(data)
		}
	};

	///Sets function for cancel action
	/** Cancel action is action called when user presses ESC. 
	 *
	 * @param fn a function called on cancel action. The function receives reference to
	 * the view as first argument. The function must return true to preven propagation
	 * of the event

	 * @param el_name optional, if set, corresponding element receives click event for default action
	 *                  (button CANCEL in dialog)
	 * 
	 * The most common cancel action is to reset form or to exit current activity without 
	 * saving the data
	 */
	View.prototype.setCancelAction = function(fn, el_name) {
		this.cancelAction = fn;
		this._installKbdHandler();
		if (el_name) {
			var data = {};
			data[el_name] = {"!click":fn};
			this.setData(data)
		}
	};
	
	function walkDOM(el, fn) {
		var c = el.firstChild;
		while (c) {
			fn(c);
			walkDOM(c,fn);
			c = c.nextSibling;
		}
	}
	
	///Installs focus handler
	/** Function is called from setFirstTabElement, do not call directly */
	View.prototype._installFocusHandler = function(fn) {
		if (this.focus_top && this.focus_bottom) {
			if (this.focus_top.isConnected && this.focus_bottom.isConnected)
				this.focus_top.focus();
				return;
		}
		var focusHandler = function(where, ev) {
			setTimeout(function() {
				where.focus();
			},10);	
		};
		
		var highestTabIndex=null;
		var lowestTabIndex=null;
		var firstElement=null;
		var lastElement = null;
		walkDOM(this.root,function(x){
			if (typeof x.tabIndex == "number" && x.tabIndex != -1) {
				if (highestTabIndex===null) {
					highestTabIndex = lowestTabIndex = x.tabIndex;
					firstElement = x;
				} else {
					if (x.tabIndex >highestTabIndex) highestTabIndex = x.tabIndex;
					else if (x.tabIndex <lowestTabIndex) {
						lowestTabIndex= x.tabIndex;
						firstElement  = x;
					}
				}
				if (x.tabIndex == highestTabIndex) lastElement = x;
			}
		});
		
		if (firstElement && lastElement) {
			var le = document.createElement("focus-end");
			le.setAttribute("tabindex",highestTabIndex);
			this.root.appendChild(le);
			le.addEventListener("focus", focusHandler.bind(this,firstElement));
	
			var fe = document.createElement("focus-begin");
			fe.setAttribute("tabindex",highestTabIndex);
			this.root.insertBefore(fe,this.root.firstChild);
			fe.addEventListener("focus", focusHandler.bind(this,lastElement));
			
			firstElement.focus();
		}				
		this.focus_top = firstElement;
		this.focus_bottom = lastElement;
	};
	
	///Sets first TAB element and installs focus handler (obsolete)
	/**
	 * @param el the first TAB element in the form, it also receives a focus. You should
	 * specify really first TAB, even if you need to move focus elsewhere. Just move the
	 * focus after setting the first TAB element.
	 * 
	 * The focus handler ensures that focus will not leave the current View by pressing TAB.
	 * key. Function provides of cycling of the focus on the View. The first TAB element 
	 * is need to have a home position defined.
	 */
	View.prototype.setFirstTabElement = function(el) {
		this._installFocusHandler();
	}
	
	function GroupManager(template_el,name) {
		this.baseEl = template_el;
		this.parent = template_el.parentNode;
		this.anchor = document.createComment("><");
		this.idmap={};
		this.result = [];
		this.curOrder =[];		
		this.parent.insertBefore(this.anchor, this.baseEl);
		this.parent.removeChild(this.baseEl);
		this.name = name;
		template_el.dataset.group=true;
		template_el.removeAttribute("data-name");
		template_el.removeAttribute("name");

	}
	
	GroupManager.prototype.isConnectedTo = function(elem) {
		return elem.contains(this.anchor);
	}
	
	GroupManager.prototype.begin = function() {
		this.result = [];
		this.newOrder = [];		
	}
	
	
	GroupManager.prototype.setValue = function(id, data) {			
		var x = this.idmap[id];
		if (!x) {
			var newel = this.baseEl.cloneNode(true);
			var newview = new View(newel);
			x = this.idmap[id] = newview;			
		} else {
			this.lastElem = x.getRoot();
		}
		this.newOrder.push(id);
		var t = data["@template"];
		if (t) {
			x.loadTemplate(t);
		}
		var res =  x.setData(data);
		if (res)
		   this.result.push(res);				 
	}
	
	GroupManager.prototype.findElements = function(selector) {
		var item = selector.shift();
		if (item === null) {
			var res = [];
			for (var x in this.idmap) {
				res.push.apply(res,this.idmap[x].findElements(selector));
			}
			return res;
		} else {			
			return this.idmap[item]?this.idmap[item].findElements(selector):[];
		}
	}
	
	GroupManager.prototype.finish = function() {
		var newidmap = {};		
		this.newOrder.forEach(function(x){
			if (this.idmap[x]) {
				newidmap[x] = this.idmap[x];
				delete this.idmap[x];
			} else {
				throw new Error("Duplicate row id: "+x);
			
			}		
		},this);
		var oldp = 0;
		var oldlen = this.curOrder.length;		
		var newp = 0;
		var newlen = this.newOrder.length;
		var ep = this.anchor.nextSibling;
		var movedid = {};
		while (oldp < oldlen) {
			var oldid = this.curOrder[oldp];
			var newid = this.newOrder[newp];
			if (oldid in this.idmap) {
				oldp++;
				ep = this.idmap[oldid].getRoot().nextSibling;
			} else if (oldid == newid) {
				oldp++;
				newp++;
				ep = newidmap[oldid].getRoot().nextSibling;
			} else if (!movedid[oldid]) {
				this.parent.insertBefore(newidmap[newid].getRoot(),ep);
				newp++;
				movedid[newid] = true;
			} else {
				oldp++;
			}
		}
		while (newp < newlen) {			
			var newid = this.newOrder[newp];
			this.parent.insertBefore(newidmap[newid].getRoot(),ep);
			newp++;			
		}
		for (var x in this.idmap) {
			try {
				this.idmap[x].close();
			} catch (e) {
				
			}
		}
		
		this.idmap = newidmap;
		this.curOrder = this.newOrder;		
		this.newOrder = [];
		return this.result;
		
	}
	
	GroupManager.prototype.readData = function() {
	
		var out = [];		
		for (var x in this.idmap) {
			var d = this.idmap[x].readData();
			d["@id"] = x;
			out.push(d);			
		}
		return out;
		
	}
	
	///enables items
	/**
	 * @param name name of item
	 * @param enable true/false whether item has to be enabled
	 */
	View.prototype.enableItem = function(name, enable) {
		var d = {};
		d[name] = {"disabled":enable?null:""};
		this.setData(d);
	}

	///show or hide item
	/**
	 * @param name name of item
	 * @param showCmd true/false to show or hide item, or you can use constants View.VISIBLE,View.HIDDEN and View.TRANSPARENT
	 */
	View.prototype.showItem = function(name, showCmd) {
		var d = {};
		if (typeof showCmd == "boolean") {
			this.showItem(name,showCmd?View.VISIBLE:View.HIDDEN);
		}else {			
			if (showCmd == View.VISIBLE) {
				d[name] = {".hidden":false,".style.visibility":""};
			} else if (showCmd == View.TRANSPARENT) {
				d[name] = {".hidden":false,".style.visibility":"hidden"};
			} else {
				d[name] = {".hidden":true};
			}
		}
		this.setData(d);
	}

	///sets an event procedure to the item
	/**
	 * @param name name of item
	 * @param event name of event procedure
	 * @param fn function. To remove event procedure, specify null
	 * 
	 * @note it is faster to set the event procedure through setData along with other items
	 */
	View.prototype.setItemEvent = function(name, event, fn) {
		var d = {}
		var evdef = {};
		evdef["!"+event] = fn;
		d[name] = evdef;
		this.setData(d);
		
	}

	View.prototype.setItemValue = function(name, value) {
		var d = {};
		d[name] = {value:value}
		this.setData(d);
	}

	View.prototype.loadItemTemplate = function(name, template_name) {
		var v = View.createFromTemplate(template_name);
		this.setItemValue(name, v);
		return v;
	}
	
	View.prototype.clearItem = function(name) {
		this.setItemValue(name, null);
	}

	///Rebuilds map of elements
	/**
	 * This function is called in various situations especialy, after content of the
	 * View has been changed. The function must be called manually to register
	 * any new field added by function outside of the View.
	 * 
	 * After the map is builtm, you can access the elements through the variable byName["name"],
	 * Please do not modify the map manually
	 */
	View.prototype.rebuildMap = function(rootel) {
		if (!rootel) rootel = this.root;
		this.byName = {};
		
		this.groups = this.groups.filter(function(x) {return x.isConnectedTo(rootel);});
		this.groups.forEach(function(x) {this.byName[x.name] = [x];},this);
		
		function checkSubgroup(el) {
			while (el && el != rootel) {
				if (el.dataset.group) return true;
				el = el.parentElement;
			}
			return false;
		}
		
		var elems = rootel.querySelectorAll("[data-name],[name]");
		var cnt = elems.length;
		var i;
		for (i = 0; i < cnt; i++) {
			var pl = elems[i];
			if (rootel.contains(pl) && !checkSubgroup(pl)) {
				var name = pl.name || pl.dataset.name || pl.getAttribute("name");
				name.split(" ").forEach(function(vname) {
					if (vname) {
						if (vname && vname.endsWith("[]")) {
							vname = vname.substr(0,name.length-2);
							var gm = new GroupManager(pl, vname);
							this.groups.push(gm);
							if (!Array.isArray(this.byName[vname])) this.byName[vname] = [];
							this.byName[vname].push(gm);
						} else{
							if (!Array.isArray(this.byName[vname])) this.byName[vname] = [];
							this.byName[vname].push(pl);
						}
					}
				},this);

				}
			}		
	}
	
	///Sets data in the view
	/**
	 * @param structured data. Promise can be used as value, the value is rendered when the promise
	 *  is resolved
	 *  
	 * @return Returns Promise which becomes resolved once ale items are set to they
	 * controls. The delay can happen, when one of the values is a Promise. 
	 */
	View.prototype.setData = function(data) {
		var me = this;
		var results = [];
		
		function checkSpecialValue(val, elem) {
			if (val instanceof Element) {
				View.clearContent(elem)
				elem.appendChild(val);
				return true;
			} else if (val instanceof View) {
				View.clearContent(elem)
				elem.appendChild(val.getRoot());
				return true;
			} else if (val instanceof Date && elem.type == "date") {
				elem.valueAsDate = val;
				return true;
			}

		}
		
		function isPromise(v) {
			return (typeof v == "object" && v instanceof Promise);
		}
		
		
		function processItem(itm, elemArr, val) {
					var out = [];
					elemArr.forEach(function(elem) {
						var res /* = undefined*/;
						if (elem) {
							var eltype = elem.tagName;
							if (elem.dataset && elem.dataset.type) eltype = elem.dataset.type;			
							var customEl = eltype && View.customElements[eltype.toUpperCase()];							
							if (typeof val == "object" && val !== null) {
								if (checkSpecialValue(val,elem)) {
									return							
								} else if (!Array.isArray(val)) {									
									if (!customEl || !customEl.setAttrs || !customEl.setAttrs(elem,val)) {
										updateElementAttributes(elem,val);										
									}
									if (!("value" in val)) {
										return;
									}else {
										val = val.value;
										if (typeof val == "object" && checkSpecialValue(val,elem)) return;
									}
								}
							}
							if (elem instanceof GroupManager) {
								var group = elem;
								group.begin();
								if (Array.isArray(val) ) {
									var i = 0;
									var cnt = val.length;
									for (i = 0; i < cnt; i++) {
										var id = val[i]["@id"] || i;
										group.setValue(id, val[i]);
									}
								}
								res = group.finish();
								out.push.apply(out,res);
							} else {
								function render_val(val) {
									if (customEl) {
										return  customEl.setValue(elem,val);
									} else {
										return updateBasicElement(elem, val);								
									}								
								}
								if (val !== undefined) {
									if (isPromise(val)) res = val.then(render_val);
									else res = render_val(val);
								}
								if (res)
									out.push(res);;
							}
						}
					});
					return out;
		
		}
		
		for (var itm in data) {
			var elemArr = this.findElements(itm);
			if (elemArr) {
				var val = data[itm];
				if (isPromise(val)) {
					results.push(val.then(processItem.bind(this,itm,elemArr)));
				} else {
					var r = processItem(itm,elemArr,val);
					results.push.apply(results,r);
				}
			}
		}
		return Promise.all(results);
	}
	
	var event_handlers = new WeakMap();
	
	function updateElementAttributes (elem,val) {
		for (var itm in val) {
			if (itm == "value") continue;
			if (itm == "classList" && typeof val[itm] == "object") {
				for (var x in val[itm]) {
					if (val[itm][x]) elem.classList.add(x);
					else elem.classList.remove(x);
				}
			} else if (itm.substr(0,1) == "!") {
				var name = itm.substr(1);
				var fn = val[itm];
				var eh = event_handlers.get(elem);
				if (!eh) eh = {};
				if (eh[name]) {
					var reg = eh[name];
					elem.removeEventListener(name,reg);					
				}
				eh[name] = fn;
				elem.addEventListener(name, fn);
				event_handlers.set(elem,eh);
			} else if (itm.substr(0,1) == ".") {				
				var name = itm.substr(1);
				var obj = elem;
				var nextobj;
				var idx;
				var subkey;
				while ((idx = name.indexOf(".")) != -1) {
					subkey = name.substr(0,idx);
					nextobj = obj[subkey];
					if (nextobj == undefined) {
						if (v !== undefined) nextobj = obj[subkey] = {};
						else return;
					}
					name = name.substr(idx+1);
					obj = nextobj;
				}
				var v = val[itm];
				if ( v === undefined) {
					delete obj[name];
				} else {
					obj[name] = v;
				}					
			} else if (val[itm]===null) {
				elem.removeAttribute(itm);
			} else {
				elem.setAttribute(itm, val[itm].toString())
			} 
		}
	}
	
	function updateInputElement(elem, val) {
		var type = elem.getAttribute("type");
		if (type == "checkbox" || type == "radio") {
			if (typeof (val) == "boolean") {
				elem.checked = !(!val);
			} else if (Array.isArray(val)) {
				elem.checked = val.indexOf(elem.value) != -1;
			} else if (typeof (val) == "string") {
				elem.checked = elem.value == val;
			} 
		} else if (type == "date" && typeof val == "object" && val instanceof Date) {
			elem.valueAsDate = val;
		} else {
			elem.value = val;
		}
	}
	
	
	function updateSelectElement(elem, val) {
		if (typeof val == "object") {
			var curVal = elem.value;
			View.clearContent(elem);
			if (Array.isArray(val)) {
				var i = 0;
				var l = val.length;
				while (i < l) {
					var opt = document.createElement("option");
					opt.appendChild(document.createTextNode(val[i].toString()));
					elem.appendChild(opt);
					i++;
				}
			} else {
				for (var itm in val) {
					var opt = document.createElement("option");
					opt.appendChild(document.createTextNode(val[itm].toString()));
					opt.setAttribute("value",itm);
					elem.appendChild(opt);				
				}
			}
			elem.value = curVal;
		} else {
			elem.value = val;
		}
	}
	
	function updateBasicElement (elem, val) {
		View.clearContent(elem);
		if (val !== null && val !== undefined) {
			elem.appendChild(document.createTextNode(val));
		}
	}

	///Reads data from the elements
	/**
	 * For each named element, the field is created in result Object. If there
	 * are multiple values for the name, they are put to the array.
	 * 
	 * Because many named elements are purposed to only display values and not enter
	 * values, you can mark such elements as data-readonly="1"
	 */
	View.prototype.readData = function(keys) {
		if (typeof keys == "undefined") {
			keys = Object.keys(this.byName);
		}
		var res = {};
		var me = this;
		keys.forEach(function(itm) {
			var elemArr = me.findElements(itm);
			elemArr.forEach(function(elem){			
				if (elem) {					
					if (elem instanceof GroupManager) {
						var x =  elem.readData();
						if (res[itm] === undefined) res[itm] = x;
						else x.forEach(function(c){res[itm].push(c);});
					} else if (!elem.dataset || !elem.dataset.readonly) {
						var val;
						var eltype = elem.tagName;
						if (elem.dataset.type) eltype = elem.dataset.type;
						var eltypeuper = eltype.toUpperCase();
						if (View.customElements[eltypeuper]) {
							val = View.customElements[eltypeuper].getValue(elem, res[itm]);
						} else {
							val = readBasicElement(elem,res[itm]);					
						}
						if (typeof val != "undefined") {
							res[itm] = val;
						}
					}
				}
			});
		});
		return res;
	}
	
	function readInputElement(elem, curVal) {
		var type = elem.getAttribute("type");
		if (type == "checkbox") {
			if (!elem.hasAttribute("value")) {
				return elem.checked;						
			} else {
				if (!Array.isArray(curVal)) {
					curVal = [];
				}
				if (elem.checked) {
					curVal.push(elem.value);
				}
				return curVal;
			}
		} else if (type == "radio") {
			if (elem.checked) return elem.value;
			else return curVal;
		} else if (type == "number") {
			return elem.valueAsNumber;		
		} else if (type == "date") {
			return	elem.valueAsDate;
		} else {
			return elem.value;
		}
	}
	function readSelectElement(elem) {
		return elem.value;	
	}
		
	function readBasicElement(elem) {
		var group = elem.template_js_group;
		if (group) {
			return group.readData();			
		} else {
			if (elem.contentEditable == "true" ) {
				if (elem.dataset.format == "html")
					return elem.innerHTML;
				else 
					return elem.innerText;
			}
		}
	}
	
	///Registers custrom element
	/**
	 * @param tagName name of the tag
	 * @param customElementObject new CustomElementEvents(setFunction(),getFunction())
	 */
	View.regCustomElement = function(tagName, customElementObject) {
		var upper = tagName.toUpperCase();
		View.customElements[upper] = customElementObject;
	}

	///Creates root View in current page
	/**
	 * @param visibility of the view. Because the default value is View.HIDDEN, if called
	 * without arguments the view will be hidden and must be shown by the function show()
	 */
	View.createPageRoot = function(visibility /* = View.HIDDEN */) {
		var elem = document.createElement(View.topLevelViewName);
		document.body.appendChild(elem)
		var view = new View(elem);
		view.setVisibility(visibility);
		return view;
	}
	
	View.topLevelViewName = "div";
	
	///Creates view from template
	/**
	 * @param id of template. The template must by a single-root template or extra tag will be created
	 *  If you need to create from multi-root template, you need to specify definition of parent element
	 *  @param def parent element definition, it could be single tag name, or object, which 
	 *  specifies "tag" as tagname and "attrs" which contains key=value attributes
	 *  
	 *  @return newly created view
	 */
	View.fromTemplate = function(id, def) {
		var t = loadTemplate(id);		
		if (t.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {
			var x = t.firstElementChild;
			if (x != null && x.nextElementSibling == null) {
				t = x;
			} else {
				var el = createElement(def);
				el.appendChild(t);
				t = el;
			}
		}
		return new View(t);
	}

	View.createFromTemplate = View.fromTemplate;
	
	View.createEmpty = function(tagName, attrs) {
		if (tagName === undefined) tagName = "div";
		var elem = document.createElement(tagName);
		if (attrs) {
			for (var v in attrs) {
				elem.setAttribute(v, attrs[v]);
			}
		}
		return new View(elem);			
	}
	
	function CustomElementEvents(setval,getval,setattrs) {
		this.setValue = setval;
		this.getValue = getval;
		this.setAttrs = setattrs;
		
	}

	View.customElements = {
			"INPUT":{
				"setValue":updateInputElement,
				"getValue":readInputElement,
			},
			"TEXTAREA":{
				"setValue":updateInputElement,
				"getValue":readInputElement,
			},
			"SELECT":{
				"setValue":updateSelectElement,
				"getValue":readSelectElement,
			},
			"IMG":{
				"setValue":function(elem,val) {
					elem.setAttribute("src",val);
				},
				"getValue":function(elem) {
					elem.getAttribute("src");
				}
			},
			"IFRAME":{
				"setValue":function(elem,val) {
					elem.setAttribute("src",val);
				},
				"getValue":function(elem) {
					elem.getAttribute("src");
				}
			}
	};

	///Lightbox style, mostly color and opacity
	View.lightbox_style = "background-color:black;opacity:0.25";
	///Lightbox class, if defined, style is ignored
	View.lightbox_class = "";

	
	
	return {
		"View":View,
		"loadTemplate":loadTemplate,
		"CustomElement":CustomElementEvents,
		"once":once,
		"delay":delay,
		"Animation":Animation,
		"removeElement":removeElement,
		"addElement":addElement,
		"waitForRender":waitForRender,
		"waitForRemove":waitForRemove,
		"waitForDOMUpdate":waitForDOMUpdate
	};
	
}();




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

class Sync {
	constructor(db, rpc) {
		this.db = db;
		this.rpc = rpc;		
	}
	
	async sync() {
		let objects = await this.rpc.Client.list();
		let objnames = Object.keys(objects);
		let curobjects = await this.db.allDocs({keys: objnames, include_docs:true});
		let to_download=[];
		let cur_revs = {};
		curobjects.rows.forEach((rw)=>{
			var o = objects[rw.key];
			var rev = rw.doc && rw.doc.current && rw.doc.current._rev;
			if (o != rev) to_download.push(rw.key);
			if (rw.value) cur_revs[rw.key] = rw.value.rev;
		});
		if (to_download.length) {
			let download = await this.rpc.Client.get.apply(this, to_download);
			let bulk_upload = [];
			for (let k in download ) {
				let doc = {"_id":k, "current":download[k]}
				if (cur_revs[k]) doc._rev = cur_revs[k];
				bulk_upload.push(doc);
			}
			return this.db.bulkDocs(bulk_upload);
		} else {
			return null;
		}
	}
}


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

var App = {}


App.config = {
		dbname: "ekarta",
		control_rpc: "api/control/RPC",
		login_rpc: "api/login/RPC"		
};




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

