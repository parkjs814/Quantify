!function t(e,r,n){function o(s,u){if(!r[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return o(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){"use strict";var n=$,o=n.extend;e.exports=function(){var t=this;this.unitClasses={},this.addUnitClass=function(e){var r=e.TYPE,n=e.SYMBOL;t.unitClasses.hasOwnProperty(r)||(t.unitClasses[r]={}),t.unitClasses[r][n]=e},this.getUnitClass=function(e,r){return t.unitClasses[e][r]},this.getUnitClasses=function(){var e={};for(var r in t.unitClasses)o(!0,e,t.unitClasses[r]);return e}}},{}],2:[function(t,e,r){"use strict";e.exports={}},{}],3:[function(t,e,r){"use strict";var n=t("./setup_main");e.exports={setupMain:n}},{"./setup_main":4}],4:[function(t,e,r){"use strict";var n=t("../../server");e.exports=function(){n.search("8.14 kg m2 / s2")}},{"../../server":6}],5:[function(t,e,r){"use strict";var n=t("rsvp"),o=t("./dom"),i=(t("./server"),t("./app")),s=t("./app/constructor"),u=t("./unit"),a=$,c=a.extend;n.on("error",function(t){console.assert(!1,t)}),c(!0,i,new s),u.register(),c(!0,window,{main:o.setupMain})},{"./app":2,"./app/constructor":1,"./dom":3,"./server":6,"./unit":11,rsvp:23}],6:[function(t,e,r){"use strict";var n=t("./search"),o=t("./simplify");e.exports={search:n,simplify:o}},{"./search":7,"./simplify":8}],7:[function(t,e,r){"use strict";var n=t("../util"),o=t("../app");e.exports=function(t){var e=1.234,r=["kg","m","m"],i=["s","s"],s=[],u=[];r.forEach(function(t){var e=n.identifyUnit(t);s.push([e.TYPE,e.SYMBOL])}),i.forEach(function(t){var e=n.identifyUnit(t);u.push([e.TYPE,e.SYMBOL])});var a=n.getMulAndDivClasses(s,u),c=a.mulClasses,f=a.divClasses,l=n.getUnitless(c,f),p=l.types,h=l.quantity,v=o.getUnitClasses(),d=null;for(var y in v){var _,g=v[y];if(g.BASE?(_={types:{},quantity:g.QUANTITY},_[g.TYPE]=1):_=n.getUnitless(g.MULS,g.DIVS),p.length==_.types.length){var m=!0;for(var w in p)if(p[w]!=_.types[w]){m=!1;break}if(m){d=new g(e*h/_.quantity);break}}}console.log(d)}},{"../app":2,"../util":21}],8:[function(t,e,r){"use strict";t("../app"),t("../util");e.exports=function(t,e,r){}},{"../app":2,"../util":21}],9:[function(t,e,r){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=t("../app"),u=function t(e){i(this,t),this.value=e};u.BASE=u.prototype.base=!0,u.TYPE=u.prototype.type=null,u.SYMBOL=u.prototype.symbol=null,u.QUANTITY=u.prototype.quantity=1,u.register=function(t,e,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=a?s.getUnitClass(t,a):u,f=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return o(e,t),e}(c);f.TYPE=f.prototype.type=t,f.SYMBOL=f.prototype.symbol=e,f.QUANTITY=f.prototype.quantity=c.QUANTITY*r,s.addUnitClass(f)},e.exports=u},{"../app":2}],10:[function(t,e,r){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=t("../app"),u=t("../util"),a=function t(e){i(this,t),this.value=e};a.BASE=a.prototype.base=!1,a.TYPE=a.prototype.type=null,a.SYMBOL=a.prototype.symbol=null,a.MULS=a.prototype.muls=[],a.DIVS=a.prototype.divs=[],a.register=function(t,e,r,c){var f=u.getMulAndDivClasses(r,c),l=f.mulClasses,p=f.divClasses,h=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return o(e,t),e}(a);h.TYPE=h.prototype.type=t,h.SYMBOL=h.prototype.symbol=e,h.MULS=h.prototype.muls=l,h.DIVS=h.prototype.divs=p,s.addUnitClass(h)},e.exports=a},{"../app":2,"../util":21}],11:[function(t,e,r){"use strict";var n=t("./base_unit"),o=t("./derived_unit"),i=t("./register");e.exports={BaseUnit:n,DerivedUnit:o,register:i}},{"./base_unit":9,"./derived_unit":10,"./register":13}],12:[function(t,e,r){"use strict";var n=t("../base_unit"),o="angle";e.exports=function(){n.register(o,"",1),n.register(o,"rad",1),n.register(o,"°",57.2958,"")}},{"../base_unit":9}],13:[function(t,e,r){"use strict";var n=t("./length"),o=t("./mass"),i=t("./time"),s=t("./angle"),u=t("./joule");e.exports=function(){n(),o(),i(),s(),u()}},{"./angle":12,"./joule":14,"./length":15,"./mass":16,"./time":17}],14:[function(t,e,r){"use strict";var n=t("../derived_unit"),o="joule";e.exports=function(){n.register(o,"J",[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"]])}},{"../derived_unit":10}],15:[function(t,e,r){"use strict";var n=t("../base_unit"),o="length";e.exports=function(){n.register(o,"m",1),n.register(o,"cm",.01,"m"),n.register(o,"km",1e3,"m"),n.register(o,"mm",.001,"m"),n.register(o,"µm",1e-6,"m"),n.register(o,"nm",1e-9,"m"),n.register(o,"pm",1e-12,"m"),n.register(o,"ft",.3048,"m"),n.register(o,"yd",3,"ft"),n.register(o,"mi",1760,"yd"),n.register(o,"in",15783e-9,"mi")}},{"../base_unit":9}],16:[function(t,e,r){"use strict";var n=t("../base_unit"),o="mass";e.exports=function(){n.register(o,"g",1),n.register(o,"dg",.1,"g"),n.register(o,"cg",.01,"g"),n.register(o,"kg",1e3,"g"),n.register(o,"mg",.001,"g"),n.register(o,"ng",1e-9,"g"),n.register(o,"pg",1e-12,"g"),n.register(o,"lb",453.59237,"g"),n.register(o,"oz",.0625,"lb")}},{"../base_unit":9}],17:[function(t,e,r){"use strict";var n=t("../base_unit"),o="time";e.exports=function(){n.register(o,"s",1),n.register(o,"ds",.1,"s"),n.register(o,"cs",.01,"s"),n.register(o,"ks",1e3,"s"),n.register(o,"ms",.001,"s"),n.register(o,"µs",1e-6,"s"),n.register(o,"ns",1e-9,"s"),n.register(o,"ps",1e-12,"s"),n.register(o,"min",60,"s"),n.register(o,"hr",60,"min"),n.register(o,"d",24,"hr"),n.register(o,"w",7,"d"),n.register(o,"mon",4,"w")}},{"../base_unit":9}],18:[function(t,e,r){"use strict";var n=t("../app");e.exports=function(t,e){var r=[],o=[],i=[];t.forEach(function(t){var e=t[0],r=t[1];i.push({cls:n.getUnitClass(e,r),inverse:!1})}),e.forEach(function(t){var e=t[0],r=t[1];i.push({cls:n.getUnitClass(e,r),inverse:!0})});for(var s=function(){var t=i.shift();t.cls.BASE?(t.inverse?o:r).push(t.cls):(t.cls.MULS.forEach(function(e){i.push({cls:e,inverse:t.inverse})}),t.cls.DIVS.forEach(function(e){i.push({cls:e,inverse:!t.inverse})}))};i.length>0;)s();return{mulClasses:r,divClasses:o}}},{"../app":2}],19:[function(t,e,r){"use strict";e.exports=function(t,e){var r=1,n={};t.forEach(function(t){r*=t.QUANTITY,n.hasOwnProperty(t.TYPE)?n[t.TYPE]++:n[t.TYPE]=1}),e.forEach(function(t){r/=t.QUANTITY,n.hasOwnProperty(t.TYPE)?n[t.TYPE]--:n[t.TYPE]=-1});var o={};for(var i in n){var s=n[i];0!=s&&(o[i]=s)}return{types:n,quantity:r}}},{}],20:[function(t,e,r){"use strict";var n=t("../app");e.exports=function(t){var e=n.getUnitClasses();for(var r in e){var o=e[r];if(o.SYMBOL==t)return o}}},{"../app":2}],21:[function(t,e,r){"use strict";var n=t("./get_mul_and_div_classes"),o=t("./identify_unit"),i=t("./get_unitless");e.exports={getMulAndDivClasses:n,identifyUnit:o,getUnitless:i}},{"./get_mul_and_div_classes":18,"./get_unitless":19,"./identify_unit":20}],22:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function s(t){if(p===clearTimeout)return clearTimeout(t);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function u(){y&&v&&(y=!1,v.length?d=v.concat(d):_=-1,d.length&&a())}function a(){if(!y){var t=i(u);y=!0;for(var e=d.length;e;){for(v=d,d=[];++_<e;)v&&v[_].run();_=-1,e=d.length}v=null,y=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function f(){}var l,p,h=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(t){p=o}}();var v,d=[],y=!1,_=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],23:[function(t,e,r){(function(n,o){!function(t,n){"object"==typeof r&&"undefined"!=typeof e?n(r):"function"==typeof define&&define.amd?define(["exports"],n):n(t.RSVP=t.RSVP||{})}(this,function(e){"use strict";function r(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function i(t){var e=t._promiseCallbacks;return e||(e=t._promiseCallbacks={}),e}function s(t,e){return"onerror"===t?void At.on("error",e):2!==arguments.length?At[t]:void(At[t]=e)}function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function c(t){return"object"==typeof t&&null!==t}function f(){}function l(){setTimeout(function(){for(var t=0;t<xt.length;t++){var e=xt[t],r=e.payload;r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),At.trigger(e.name,e.payload)}xt.length=0},50)}function p(t,e,r){1===xt.push({name:t,payload:{key:e._guidKey,id:e._id,eventName:t,detail:e._result,childId:r&&r._id,label:e._label,timeStamp:jt(),error:At["instrument-with-stack"]?new Error(e._label):null}})&&l()}function h(t,e){var r=this;if(t&&"object"==typeof t&&t.constructor===r)return t;var n=new r(d,e);return b(n,t),n}function v(){return new TypeError("A promises callback cannot return that same promise.")}function d(){}function y(t){try{return t.then}catch(t){return Mt.error=t,Mt}}function _(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function g(t,e,r){At.async(function(t){var n=!1,o=_(r,e,function(r){n||(n=!0,e!==r?b(t,r,void 0):T(t,r))},function(e){n||(n=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,A(t,o))},t)}function m(t,e){e._state===Ut?T(t,e._result):e._state===Yt?(e._onError=null,A(t,e._result)):C(e,void 0,function(r){e!==r?b(t,r,void 0):T(t,r)},function(e){return A(t,e)})}function w(t,e,r){e.constructor===t.constructor&&r===U&&t.constructor.resolve===h?m(t,e):r===Mt?A(t,Mt.error):void 0===r?T(t,e):a(r)?g(t,e,r):T(t,e)}function b(t,e){t===e?T(t,e):u(e)?w(t,e,y(e)):T(t,e)}function E(t){t._onError&&t._onError(t._result),O(t)}function T(t,e){t._state===Pt&&(t._result=e,t._state=Ut,0===t._subscribers.length?At.instrument&&p("fulfilled",t):At.async(O,t))}function A(t,e){t._state===Pt&&(t._state=Yt,t._result=e,At.async(E,t))}function C(t,e,r,n){var o=t._subscribers,i=o.length;t._onError=null,o[i]=e,o[i+Ut]=r,o[i+Yt]=n,0===i&&t._state&&At.async(O,t)}function O(t){var e=t._subscribers,r=t._state;if(At.instrument&&p(r===Ut?"fulfilled":"rejected",t),0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?x(r,n,o,i):o(i);t._subscribers.length=0}}function j(){this.error=null}function S(t,e){try{return t(e)}catch(t){return kt.error=t,kt}}function x(t,e,r,n){var o=a(r),i=void 0,s=void 0,u=void 0,c=void 0;if(o){if(i=S(r,n),i===kt?(c=!0,s=i.error,i=null):u=!0,e===i)return void A(e,v())}else i=n,u=!0;e._state!==Pt||(o&&u?b(e,i):c?A(e,s):t===Ut?T(e,i):t===Yt&&A(e,i))}function P(t,e){var r=!1;try{e(function(e){r||(r=!0,b(t,e))},function(e){r||(r=!0,A(t,e))})}catch(e){A(t,e)}}function U(t,e,r){var n=arguments,o=this,i=o._state;if(i===Ut&&!t||i===Yt&&!e)return At.instrument&&p("chained",o,o),o;o._onError=null;var s=new o.constructor(d,r),u=o._result;return At.instrument&&p("chained",o,s),i?!function(){var t=n[i-1];At.async(function(){return x(i,s,t,u)})}():C(o,s,t,e),s}function Y(t,e,r){return t===Ut?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}function M(t,e,r,n){this._instanceConstructor=t,this.promise=new t(d,n),this._abortOnReject=r,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&T(this.promise,this._result))):A(this.promise,this._validationError())}function k(t,e){return new M(this,t,(!0),e).promise}function I(t,e){var r=this,n=new r(d,e);if(!Ot(t))return A(n,new TypeError("You must pass an array to race.")),n;for(var o=0;n._state===Pt&&o<t.length;o++)C(r.resolve(t[o]),void 0,function(t){return b(n,t)},function(t){return A(n,t)});return n}function L(t,e){var r=this,n=new r(d,e);return A(n,t),n}function N(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function R(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function B(t,e){this._id=Lt++,this._label=e,this._state=void 0,this._result=void 0,this._subscribers=[],At.instrument&&p("created",this),d!==t&&("function"!=typeof t&&N(),this instanceof B?P(this,t):R())}function D(){this.value=void 0}function q(t){try{return t.then}catch(t){return Nt.value=t,Nt}}function Q(t,e,r){try{t.apply(e,r)}catch(t){return Nt.value=t,Nt}}function V(t,e){for(var r={},n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=t[i];for(var s=0;s<e.length;s++){var u=e[s];r[u]=o[s+1]}return r}function K(t){for(var e=t.length,r=new Array(e-1),n=1;n<e;n++)r[n-1]=t[n];return r}function $(t,e){return{then:function(r,n){return t.call(e,r,n)}}}function F(t,e){var r=function(){for(var r=this,n=arguments.length,o=new Array(n+1),i=!1,s=0;s<n;++s){var u=arguments[s];if(!i){if(i=J(u),i===Rt){var a=new B(d);return A(a,Rt.value),a}i&&i!==!0&&(u=$(i,u))}o[s]=u}var c=new B(d);return o[n]=function(t,r){t?A(c,t):void 0===e?b(c,r):e===!0?b(c,K(arguments)):Ot(e)?b(c,V(arguments,e)):b(c,r)},i?G(c,o,t,r):z(c,o,t,r)};return r.__proto__=t,r}function z(t,e,r,n){var o=Q(r,n,e);return o===Nt&&A(t,o.value),t}function G(t,e,r,n){return B.all(e).then(function(e){var o=Q(r,n,e);return o===Nt&&A(t,o.value),t})}function J(t){return!(!t||"object"!=typeof t)&&(t.constructor===B||q(t))}function W(t,e){return B.all(t,e)}function H(t,e,r){this._superConstructor(t,e,!1,r)}function X(t,e){return new H(B,t,e).promise}function Z(t,e){return B.race(t,e)}function tt(t,e,r){this._superConstructor(t,e,!0,r)}function et(t,e){return new tt(B,t,e).promise}function rt(t,e,r){this._superConstructor(t,e,!1,r)}function nt(t,e){return new rt(B,t,e).promise}function ot(t){throw setTimeout(function(){throw t}),t}function it(t){var e={resolve:void 0,reject:void 0};return e.promise=new B(function(t,r){e.resolve=t,e.reject=r},t),e}function st(t,e,r){return B.all(t,r).then(function(t){if(!a(e))throw new TypeError("You must pass a function as map's second argument.");for(var n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=e(t[i]);return B.all(o,r)})}function ut(t,e){return B.resolve(t,e)}function at(t,e){return B.reject(t,e)}function ct(t,e){return B.all(t,e)}function ft(t,e){return B.resolve(t,e).then(function(t){return ct(t,e)})}function lt(t,e,r){var n=Ot(t)?ct(t,r):ft(t,r);return n.then(function(t){if(!a(e))throw new TypeError("You must pass a function as filter's second argument.");for(var n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=e(t[i]);return ct(o,r).then(function(e){for(var r=new Array(n),o=0,i=0;i<n;i++)e[i]&&(r[o]=t[i],o++);return r.length=o,r})})}function pt(t,e){Ft[Bt]=t,Ft[Bt+1]=e,Bt+=2,2===Bt&&zt()}function ht(){var t=n.nextTick,e=n.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(e)&&"0"===e[1]&&"10"===e[2]&&(t=setImmediate),function(){return t(gt)}}function vt(){return"undefined"!=typeof Dt?function(){Dt(gt)}:_t()}function dt(){var t=0,e=new Vt(gt),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){return r.data=t=++t%2}}function yt(){var t=new MessageChannel;return t.port1.onmessage=gt,function(){return t.port2.postMessage(0)}}function _t(){return function(){return setTimeout(gt,1)}}function gt(){for(var t=0;t<Bt;t+=2){var e=Ft[t],r=Ft[t+1];e(r),Ft[t]=void 0,Ft[t+1]=void 0}Bt=0}function mt(){try{var e=t,r=e("vertx");return Dt=r.runOnLoop||r.runOnContext,vt()}catch(t){return _t()}}function wt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bt(){At.on.apply(At,arguments)}function Et(){At.off.apply(At,arguments)}var Tt={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,e){if("function"!=typeof e)throw new TypeError("Callback must be a function");var n=i(this),o=void 0;o=n[t],o||(o=n[t]=[]),r(o,e)===-1&&o.push(e)},off:function(t,e){var n=i(this),o=void 0,s=void 0;return e?(o=n[t],s=r(o,e),void(s!==-1&&o.splice(s,1))):void(n[t]=[])},trigger:function(t,e,r){var n=i(this),o=void 0,s=void 0;if(o=n[t])for(var u=0;u<o.length;u++)(s=o[u])(e,r)}},At={instrument:!1};Tt.mixin(At);var Ct=void 0;Ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Ot=Ct,jt=Date.now||function(){return(new Date).getTime()},St=Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return f.prototype=t,new f},xt=[],Pt=void 0,Ut=1,Yt=2,Mt=new j,kt=new j;M.prototype._validateInput=function(t){return Ot(t)},M.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},M.prototype._init=function(){this._result=new Array(this.length)},M.prototype._enumerate=function(){for(var t=this.length,e=this.promise,r=this._input,n=0;e._state===Pt&&n<t;n++)this._eachEntry(r[n],n)},M.prototype._settleMaybeThenable=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===h){var o=y(t);if(o===U&&t._state!==Pt)t._onError=null,this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=this._makeResult(Ut,e,t);else if(r===B){var i=new r(d);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},M.prototype._eachEntry=function(t,e){c(t)?this._settleMaybeThenable(t,e):(this._remaining--,this._result[e]=this._makeResult(Ut,e,t))},M.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===Pt&&(this._remaining--,this._abortOnReject&&t===Yt?A(n,r):this._result[e]=this._makeResult(t,e,r)),0===this._remaining&&T(n,this._result)},M.prototype._makeResult=function(t,e,r){return r},M.prototype._willSettleAt=function(t,e){var r=this;C(t,void 0,function(t){return r._settledAt(Ut,e,t)},function(t){return r._settledAt(Yt,e,t)})};var It="rsvp_"+jt()+"-",Lt=0;B.cast=h,B.all=k,B.race=I,B.resolve=h,B.reject=L,B.prototype={constructor:B,_guidKey:It,_onError:function(t){var e=this;At.after(function(){e._onError&&At.trigger("error",t,e._label)})},then:U,catch:function(t,e){return this.then(void 0,t,e)},finally:function(t,e){var r=this,n=r.constructor;return r.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})},e)}};var Nt=new D,Rt=new D;H.prototype=St(M.prototype),H.prototype._superConstructor=M,H.prototype._makeResult=Y,H.prototype._validationError=function(){return new Error("allSettled must be called with an array")},tt.prototype=St(M.prototype),tt.prototype._superConstructor=M,tt.prototype._init=function(){this._result={}},tt.prototype._validateInput=function(t){return t&&"object"==typeof t},tt.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},tt.prototype._enumerate=function(){var t=this,e=t.promise,r=t._input,n=[];for(var o in r)e._state===Pt&&Object.prototype.hasOwnProperty.call(r,o)&&n.push({position:o,entry:r[o]});var i=n.length;t._remaining=i;for(var s=void 0,u=0;e._state===Pt&&u<i;u++)s=n[u],t._eachEntry(s.entry,s.position)},rt.prototype=St(tt.prototype),rt.prototype._superConstructor=M,rt.prototype._makeResult=Y,rt.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var Bt=0,Dt=void 0,qt="undefined"!=typeof window?window:void 0,Qt=qt||{},Vt=Qt.MutationObserver||Qt.WebKitMutationObserver,Kt="undefined"==typeof self&&"undefined"!=typeof n&&"[object process]"==={}.toString.call(n),$t="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Ft=new Array(1e3),zt=void 0;zt=Kt?ht():Vt?dt():$t?yt():void 0===qt&&"function"==typeof t?mt():_t();var Gt=void 0;if("object"==typeof self)Gt=self;else{if("object"!=typeof o)throw new Error("no global: `self` or `global` found");Gt=o}var Jt;At.async=pt,At.after=function(t){return setTimeout(t,0)};var Wt=ut,Ht=function(t,e){return At.async(t,e)};if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Xt=window.__PROMISE_INSTRUMENTATION__;s("instrument",!0);for(var Zt in Xt)Xt.hasOwnProperty(Zt)&&bt(Zt,Xt[Zt])}var te=(Jt={cast:Wt,Promise:B,EventTarget:Tt,all:W,allSettled:X,race:Z,hash:et,hashSettled:nt,rethrow:ot,defer:it,denodeify:F,configure:s,on:bt,off:Et,resolve:ut,reject:at,map:st},wt(Jt,"async",Ht),wt(Jt,"filter",lt),Jt);e.default=te,e.cast=Wt,e.Promise=B,e.EventTarget=Tt,e.all=W,e.allSettled=X,e.race=Z,e.hash=et,e.hashSettled=nt,e.rethrow=ot,e.defer=it,e.denodeify=F,e.configure=s,e.on=bt,e.off=Et,e.resolve=ut,e.reject=at,e.map=st,e.async=Ht,e.filter=lt,Object.defineProperty(e,"__esModule",{value:!0})})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:22}]},{},[5]);
//# sourceMappingURL=quantify.js.map
