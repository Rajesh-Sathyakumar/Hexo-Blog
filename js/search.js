!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(2),i=n(3),s=n(5),u=n(6),a=r(u);a.Axios=s,a.create=function(e){return r(o.merge(u,e))},a.Cancel=n(23),a.CancelToken=n(24),a.isCancel=n(20),a.all=function(e){return Promise.all(e)},a.spread=n(25),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";function r(e){return"[object Array]"===R.call(e)}function o(e){return"[object ArrayBuffer]"===R.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===R.call(e)}function d(e){return"[object File]"===R.call(e)}function l(e){return"[object Blob]"===R.call(e)}function h(e){return"[object Function]"===R.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function g(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function b(e,t,n){return g(t,function(t,r){e[r]=n&&"function"==typeof t?E(t,n):t}),e}var E=n(3),C=n(4),R=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:u,isNumber:a,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:g,merge:x,extend:b,trim:w}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(6),i=n(2),s=n(17),u=n(18),a=n(21),c=n(22);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url));var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(2),i=n(7),s={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(8):"undefined"!=typeof process&&(e=n(8)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(s)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(9),i=n(12),s=n(13),u=n(14),a=n(10),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(15);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var y=e.auth.username||"",w=e.auth.password||"";d.Authorization="Basic "+c(y+":"+w)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onerror=function(){f(a("Network Error",e,null,l)),l=null},l.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var v=n(16),g=(e.withCredentials||u(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(11);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,i=String(e),s="",u=0,a=o;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&t>>8-u%1*8)){if((r=i.charCodeAt(u+=.75))>255)throw new n;t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(19),s=n(20),u=n(6);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||u.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});!function(){var e=function(t){var i=new e.Index;return i.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),t&&t.call(i,i),i};e.version="0.7.1",e.utils={},e.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),e.utils.asString=function(e){return void 0===e||null===e?"":e.toString()},e.EventEmitter=function(){this.events={}},e.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),i=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");i.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},e.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var i=this.events[e].indexOf(t);this.events[e].splice(i,1),this.events[e].length||delete this.events[e]}},e.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)})}},e.EventEmitter.prototype.hasHandler=function(e){return e in this.events},"undefined"!=typeof module&&module.exports&&(nodejieba_segment=require("nodejieba")),e.tokenizer=function(t){if(!arguments.length||null==t||void 0==t)return[];if(Array.isArray(t))return t.map(function(t){return e.utils.asString(t).toLowerCase()});var i=t.toString().trim().toLowerCase();return"undefined"!=typeof nodejieba_segment?nodejieba_segment.cut(i,!0):i.split(e.tokenizer.seperator)},e.tokenizer.seperator=/[\s\-]+/,e.tokenizer.load=function(e){var t=this.registeredFunctions[e];if(!t)throw new Error("Cannot load un-registered function: "+e);return t},e.tokenizer.label="default",e.tokenizer.registeredFunctions={default:e.tokenizer},e.tokenizer.registerFunction=function(t,i){i in this.registeredFunctions&&e.utils.warn("Overwriting existing tokenizer: "+i),t.label=i,this.registeredFunctions[i]=t},e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions={},e.Pipeline.registerFunction=function(t,i){i in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+i),t.label=i,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){t.label&&t.label in this.registeredFunctions||e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},e.Pipeline.load=function(t){var i=new e.Pipeline;return t.forEach(function(t){var n=e.Pipeline.registeredFunctions[t];if(!n)throw new Error("Cannot load un-registered function: "+t);i.add(n)}),i},e.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(t){e.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},e.Pipeline.prototype.after=function(t,i){e.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(t);if(-1==n)throw new Error("Cannot find existingFn");n+=1,this._stack.splice(n,0,i)},e.Pipeline.prototype.before=function(t,i){e.Pipeline.warnIfFunctionNotRegistered(i);var n=this._stack.indexOf(t);if(-1==n)throw new Error("Cannot find existingFn");this._stack.splice(n,0,i)},e.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},e.Pipeline.prototype.run=function(e){for(var t=[],i=e.length,n=this._stack.length,o=0;i>o;o++){for(var r=e[o],s=0;n>s&&void 0!==(r=this._stack[s](r,o,e))&&""!==r;s++);void 0!==r&&""!==r&&t.push(r)}return t},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})},e.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},e.Vector.Node=function(e,t,i){this.idx=e,this.val=t,this.next=i},e.Vector.prototype.insert=function(t,i){this._magnitude=void 0;var n=this.list;if(!n)return this.list=new e.Vector.Node(t,i,n),this.length++;if(t<n.idx)return this.list=new e.Vector.Node(t,i,n),this.length++;for(var o=n,r=n.next;void 0!=r;){if(t<r.idx)return o.next=new e.Vector.Node(t,i,r),this.length++;o=r,r=r.next}return o.next=new e.Vector.Node(t,i,r),this.length++},e.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e,t=this.list,i=0;t;)e=t.val,i+=e*e,t=t.next;return this._magnitude=Math.sqrt(i)},e.Vector.prototype.dot=function(e){for(var t=this.list,i=e.list,n=0;t&&i;)t.idx<i.idx?t=t.next:t.idx>i.idx?i=i.next:(n+=t.val*i.val,t=t.next,i=i.next);return n},e.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},e.SortedSet=function(){this.length=0,this.elements=[]},e.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},e.SortedSet.prototype.add=function(){var e,t;for(e=0;e<arguments.length;e++)t=arguments[e],~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t);this.length=this.elements.length},e.SortedSet.prototype.toArray=function(){return this.elements.slice()},e.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},e.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},e.SortedSet.prototype.indexOf=function(e){for(var t=0,i=this.elements.length,n=i-t,o=t+Math.floor(n/2),r=this.elements[o];n>1;){if(r===e)return o;e>r&&(t=o),r>e&&(i=o),n=i-t,o=t+Math.floor(n/2),r=this.elements[o]}return r===e?o:-1},e.SortedSet.prototype.locationFor=function(e){for(var t=0,i=this.elements.length,n=i-t,o=t+Math.floor(n/2),r=this.elements[o];n>1;)e>r&&(t=o),r>e&&(i=o),n=i-t,o=t+Math.floor(n/2),r=this.elements[o];return r>e?o:e>r?o+1:void 0},e.SortedSet.prototype.intersect=function(t){for(var i=new e.SortedSet,n=0,o=0,r=this.length,s=t.length,a=this.elements,u=t.elements;!(n>r-1||o>s-1);)a[n]!==u[o]?a[n]<u[o]?n++:a[n]>u[o]&&o++:(i.add(a[n]),n++,o++);return i},e.SortedSet.prototype.clone=function(){var t=new e.SortedSet;return t.elements=this.toArray(),t.length=t.elements.length,t},e.SortedSet.prototype.union=function(e){var t,i,n;this.length>=e.length?(t=this,i=e):(t=e,i=this),n=t.clone();for(var o=0,r=i.toArray();o<r.length;o++)n.add(r[o]);return n},e.SortedSet.prototype.toJSON=function(){return this.toArray()},e.Index=function(){this._fields=[],this._ref="id",this.pipeline=new e.Pipeline,this.documentStore=new e.Store,this.tokenStore=new e.TokenStore,this.corpusTokens=new e.SortedSet,this.eventEmitter=new e.EventEmitter,this.tokenizerFn=e.tokenizer,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},e.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},e.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},e.Index.load=function(t){t.version!==e.version&&e.utils.warn("version mismatch: current "+e.version+" importing "+t.version);var i=new this;return i._fields=t.fields,i._ref=t.ref,i.tokenizer=e.tokenizer.load(t.tokenizer),i.documentStore=e.Store.load(t.documentStore),i.tokenStore=e.TokenStore.load(t.tokenStore),i.corpusTokens=e.SortedSet.load(t.corpusTokens),i.pipeline=e.Pipeline.load(t.pipeline),i},e.Index.prototype.field=function(e,t){var t=t||{},i={name:e,boost:t.boost||1};return this._fields.push(i),this},e.Index.prototype.ref=function(e){return this._ref=e,this},e.Index.prototype.tokenizer=function(t){return t.label&&t.label in e.tokenizer.registeredFunctions||e.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"),this.tokenizerFn=t,this},e.Index.prototype.add=function(t,i){var n={},o=new e.SortedSet,r=t[this._ref],i=void 0===i||i;this._fields.forEach(function(e){var i=this.pipeline.run(this.tokenizerFn(t[e.name]));n[e.name]=i;for(var r=0;r<i.length;r++){var s=i[r];o.add(s),this.corpusTokens.add(s)}},this),this.documentStore.set(r,o);for(var s=0;s<o.length;s++){for(var a=o.elements[s],u=0,h=0;h<this._fields.length;h++){var l=this._fields[h],c=n[l.name],d=c.length;if(d){for(var f=0,p=0;d>p;p++)c[p]===a&&f++;u+=f/d*l.boost}}this.tokenStore.add(a,{ref:r,tf:u})}i&&this.eventEmitter.emit("add",t,this)},e.Index.prototype.remove=function(e,t){var i=e[this._ref],t=void 0===t||t;if(this.documentStore.has(i)){var n=this.documentStore.get(i);this.documentStore.remove(i),n.forEach(function(e){this.tokenStore.remove(e,i)},this),t&&this.eventEmitter.emit("remove",e,this)}},e.Index.prototype.update=function(e,t){var t=void 0===t||t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},e.Index.prototype.idf=function(e){var t="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,t))return this._idfCache[t];var i=this.tokenStore.count(e),n=1;return i>0&&(n=1+Math.log(this.documentStore.length/i)),this._idfCache[t]=n},e.Index.prototype.search=function(t){var i=this.pipeline.run(this.tokenizerFn(t)),n=new e.Vector,o=[],r=this._fields.reduce(function(e,t){return e+t.boost},0);return i.some(function(e){return this.tokenStore.has(e)},this)?(i.forEach(function(t,i,s){var a=1/s.length*this._fields.length*r,u=this,h=this.tokenStore.expand(t).reduce(function(i,o){var r=u.corpusTokens.indexOf(o),s=u.idf(o),h=1,l=new e.SortedSet;if(o!==t){var c=Math.max(3,o.length-t.length);h=1/Math.log(c)}r>-1&&n.insert(r,a*s*h);for(var d=u.tokenStore.get(o),f=Object.keys(d),p=f.length,v=0;p>v;v++)l.add(d[f[v]].ref);return i.union(l)},new e.SortedSet);o.push(h)},this),o.reduce(function(e,t){return e.intersect(t)}).map(function(e){return{ref:e,score:n.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})):[]},e.Index.prototype.documentVector=function(t){for(var i=this.documentStore.get(t),n=i.length,o=new e.Vector,r=0;n>r;r++){var s=i.elements[r],a=this.tokenStore.get(s)[t].tf,u=this.idf(s);o.insert(this.corpusTokens.indexOf(s),a*u)}return o},e.Index.prototype.toJSON=function(){return{version:e.version,fields:this._fields,ref:this._ref,tokenizer:this.tokenizerFn.label,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},e.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},e.Store=function(){this.store={},this.length=0},e.Store.load=function(t){var i=new this;return i.length=t.length,i.store=Object.keys(t.store).reduce(function(i,n){return i[n]=e.SortedSet.load(t.store[n]),i},{}),i},e.Store.prototype.set=function(e,t){this.has(e)||this.length++,this.store[e]=t},e.Store.prototype.get=function(e){return this.store[e]},e.Store.prototype.has=function(e){return e in this.store},e.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},e.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},e.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[aeiouy]",n="[^aeiou][^aeiouy]*",o=i+"[aeiou]*",r=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),s=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),a=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),u=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),h=/^(.+?)(ss|i)es$/,l=/^(.+?)([^s])s$/,c=/^(.+?)eed$/,d=/^(.+?)(ed|ing)$/,f=/.$/,p=/(at|bl|iz)$/,v=new RegExp("([^aeiouylsz])\\1$"),g=new RegExp("^"+n+i+"[^aeiouwxy]$"),m=/^(.+?[^aeiou])y$/,y=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,S=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,w=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,k=/^(.+?)(s|t)(ion)$/,x=/^(.+?)e$/,b=/ll$/,E=new RegExp("^"+n+i+"[^aeiouwxy]$");return function(i){var n,o,_,F,z,O,P;if(i.length<3)return i;if(_=i.substr(0,1),"y"==_&&(i=_.toUpperCase()+i.substr(1)),F=h,z=l,F.test(i)?i=i.replace(F,"$1$2"):z.test(i)&&(i=i.replace(z,"$1$2")),F=c,z=d,F.test(i)){var T=F.exec(i);F=r,F.test(T[1])&&(F=f,i=i.replace(F,""))}else if(z.test(i)){var T=z.exec(i);n=T[1],z=u,z.test(n)&&(i=n,z=p,O=v,P=g,z.test(i)?i+="e":O.test(i)?(F=f,i=i.replace(F,"")):P.test(i)&&(i+="e"))}if(F=m,F.test(i)){var T=F.exec(i);n=T[1],i=n+"i"}if(F=y,F.test(i)){var T=F.exec(i);n=T[1],o=T[2],F=r,F.test(n)&&(i=n+e[o])}if(F=S,F.test(i)){var T=F.exec(i);n=T[1],o=T[2],F=r,F.test(n)&&(i=n+t[o])}if(F=w,z=k,F.test(i)){var T=F.exec(i);n=T[1],F=s,F.test(n)&&(i=n)}else if(z.test(i)){var T=z.exec(i);n=T[1]+T[2],z=s,z.test(n)&&(i=n)}if(F=x,F.test(i)){var T=F.exec(i);n=T[1],F=s,z=a,O=E,(F.test(n)||z.test(n)&&!O.test(n))&&(i=n)}return F=b,z=s,F.test(i)&&z.test(i)&&(F=f,i=i.replace(F,"")),"y"==_&&(i=_.toLowerCase()+i.substr(1)),i}}(),e.Pipeline.registerFunction(e.stemmer,"stemmer"),e.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){return e&&t[e]!==e?e:void 0}},e.stopWordFilter=e.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter"),e.trimmer=function(e){var t=e.replace(/^\s+/,"").replace(/\s+$/,"");return""===t?void 0:t},e.Pipeline.registerFunction(e.trimmer,"trimmer"),e.TokenStore=function(){this.root={docs:{}},this.length=0},e.TokenStore.load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},e.TokenStore.prototype.add=function(e,t,i){var i=i||this.root,n=e.charAt(0),o=e.slice(1);return n in i||(i[n]={docs:{}}),0===o.length?(i[n].docs[t.ref]=t,void(this.length+=1)):this.add(o,t,i[n])},e.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,i=0;i<e.length;i++){if(!t[e.charAt(i)])return!1;t=t[e.charAt(i)]}return!0},e.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,i=0;i<e.length;i++){if(!t[e.charAt(i)])return{};t=t[e.charAt(i)]}return t},e.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},e.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},e.TokenStore.prototype.remove=function(e,t){if(e){for(var i=this.root,n=0;n<e.length;n++){if(!(e.charAt(n)in i))return;i=i[e.charAt(n)]}delete i.docs[t]}},e.TokenStore.prototype.expand=function(e,t){var i=this.getNode(e),n=i.docs||{},t=t||[];return Object.keys(n).length&&t.push(e),Object.keys(i).forEach(function(i){"docs"!==i&&t.concat(this.expand(e+i,t))},this),t},e.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}(this,function(){return e})}();!function(){function t(){this.config={minScore:1e-5,minNum:3},this.init()}t.prototype={init:function(){this.container=document.getElementById("page-content"),this.loading=this.container.querySelector(".search__loader"),this.tpl=['<nav id="mb-main-nav" class="mb-main__nav"><ul>','<li class="nav__item nav__item--selected" data-index="0">{{ query }}</li>','<li class="nav__item nav__item--selected" data-index="0">{{ num }} match</li>',"</ul></nav>",'<div class="page__posts clearfix">',"{{ posts }}","</div>"].join(""),this.articleTpl=['<div class="page__post">','<article itemscope itemtype="http://schema.org/Article" class="page__mini-article">','<div class="mini-article__cover">','<img itemprop="image" src="{{ cover }}" alt="{{ title }}"/>','<div itemprop="datePublished" content="{{ date }}" class="mini-article__date">','<span class="date__day">{{ day }}</span>','<span class="date__month">{{ month }}</span>',"</div>",'<a itemprop="url" class="iconfont icon-enter" href="{{ url }}"></a>',"</div>",'<div class="mini-article__info">','<h3 itemprop="name" class="mini-article__title">','<a itemprop="url" href="{{ url }}" title="{{ title }}">{{ title }}</a>',"</h3>",'<p class="mini-article__author">by ','<span itemprop="author" itemscope itemtype="http://schema.org/Person">','<a itemprop="url" href="{{ authorLink }}" target="_blank">','<span itemprop="name">{{ authorNick }}</span>',"</a>","</span>","</p>",'<p itemprop="articleSection" class="min-article__desc">',"{{ desc }}","</p>",'<div class="min-article__tags">','<i class="iconfont icon-tab"></i>','<ul class="tags__list clearfix">',"{{ tagsHtml }}","</ul>","</div>","</div>","</article>","</div>"].join(""),this.tagsTpl='<li class="tags__item"><a href="{{ path }}">{{ name }}</a></li>',this.queryString=decodeURIComponent(location.search.split("=")[1]),this.getData()},getData:function(){var t=this;axios.get("/assets/lunr/all.json").then(function(t){return t.data}).then(function(i){t.initSearch(i)})},initSearch:function(t){this.index=lunr.Index.load(t.index),this.sourceData=t.store,this.result=this.index.search(this.queryString),this.filteredData=this.filterSourceData(),this.render()},compileTemplate:function(t,i){function e(i){for(var e=t,r=0;r<a.length;r++)e=e.replace(/\{\{\s(\S+)\s\}\}/,i[n[r]]);s=e+s}for(var a=t.match(/\{\{\s(\S+)\s\}\}/g),n=[],s="",r=0;r<a.length;r++)n.push(a[r].replace(/\{\{\s(\S+)\s\}\}/,"$1"));return"[object Array]"===Object.prototype.toString.apply(i)?i.forEach(function(t){e(t)}):e(i),s},render:function(){var t=this.filteredData,i="",e="<code>No Posts matching your criteria. Please try again !</code>",a=this;t.length&&(this.filteredData=this.filteredData.map(function(t){return t.tagsHtml=a.compileTemplate(a.tagsTpl,t.tagArr),t}),i=this.compileTemplate(this.articleTpl,this.filteredData),e=this.compileTemplate(this.tpl,{query:this.queryString,num:this.filteredData.length,posts:i})),this.container.innerHTML=e,setTimeout(function(){window._skappPostAnimation()})},filterSourceData:function(){var t=this,i=[];t.config.minNum;return this.result.forEach(function(e,a){t.config.minScore>e.score&&a>=t.config.minScore.minNum||i.push(t.sourceData[e.ref])}),i}},window.addEventListener("load",function(){new t})}();