!function t(e,r,n){function i(s,u){if(!r[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return i(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){"use strict";var n=$,i=n.extend;e.exports=function(){var t=this;this.units={},this.addUnit=function(e){var r=e.TYPE,n=e.SYMBOL;r in t.units||(t.units[r]={}),t.units[r][n]=e},this.getUnit=function(e,r){return t.units[e][r]},this.getDerivedQuantities=function(){var e={};for(var r in t.units){var n=t.units[r],i=n[Object.keys(n)[0]];i.BASE||(e[r]={name:r,types:i.UNITLESS.types})}return e},this.getUnits=function(e){if(1==e)return t.units;if(e)return t.units[e];var r={};for(var n in t.units)i(!0,r,t.units[n]);return r},this.getStandardUnit=function(e){var r=t.units[e];for(var n in r){var i=r[n];if(i.STANDARD)return i}return r[Object.keys(r)[0]]}}},{}],2:[function(t,e,r){"use strict";e.exports={}},{}],3:[function(t,e,r){"use strict";var n=t("./setup_main");e.exports={setupMain:n}},{"./setup_main":4}],4:[function(t,e,r){"use strict";var n=function(){function t(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t("../../server"),o=t("../../app"),s=10,u=null;e.exports=function(){var t=$("#input"),e={handlers:{edit:function(){t.removeClass("active error")}}},r=MQ.MathField(t[0],e),n=$("#equal");n.click(function(){try{!function(){var e=i.evalLaTeX(r.latex()),n=i.search(e);$(".result-container:not(.template)").remove(),u&&$(window).off("scroll",u),u=function(){var t=$(".container:not(.template)").last(),r=$(window).scrollTop()+$(window).height();if(t.offset().top+t.outerHeight()<r)for(var i=0;n.length;){var o=n.shift();if(a(e,o),i++>=s)break}$(".result-container:not(.appear):not(.template)").each(function(){$(this).offset().top<r&&$(this).addClass("appear")})},u(),$(window).scroll(u),$("html, body").animate({scrollTop:$(".search-container").offset().top},300),t.addClass("active")}()}catch(e){console.error(e),t.addClass("error")}}),t.keyup(function(t){13==t.keyCode&&n.click()});var c=$(".unit-wrapper.template"),f=o.getUnits(!0);for(var l in f){var v=c.clone();v.removeClass("template"),v.find(".quantity").text(l);for(var p in f[l])v.find("ul").append("<li>"+p+" ("+f[l][p].NAME+")</li>");v.insertBefore(c)}};var a=function(t,e){for(var r=1,i=[],s=[e.derivedQuantities,e.baseQuantities],u=0;u<s.length;u++){var a=s[u];for(var f in a){var l=o.getStandardUnit(f);r*=Math.pow(l.QUANTITY,a[f]),i.push([l,a[f]])}}var v=c(t,r,i),p=$(".result-container.template"),d=p.clone(),h=d.find(".answer");d.removeClass("template"),h.text(v);var m=MQ.StaticMath(h[0]);d.insertBefore(p);var g=d.find(".selector-wrapper.template"),y=!0,b=!1,_=void 0;try{for(var w,x=function(){var e=n(w.value,1),s=e[0],u=s.TYPE,a=g.clone();a.removeClass("template"),a.find(".quantity").text(u);var f=a.find(".selected");f.text(s.SYMBOL);var l=a.find("ul"),v=o.getUnits(u);for(var p in v){var d=$("<li>"+p+"</li>");d.click(function(){var e=$(this).text();f.text(e);var n=!0,o=!1,s=void 0;try{for(var a,l=i[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var p=a.value,d=v[e];p[0].TYPE==u&&(r/=Math.pow(p[0].QUANTITY,p[1]),p[0]=d,r*=Math.pow(p[0].QUANTITY,p[1]))}}catch(t){o=!0,s=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw s}}var h=c(t,r,i);m.latex(h)}),l.append(d)}a.insertBefore(g)},S=i[Symbol.iterator]();!(y=(w=S.next()).done);y=!0)x()}catch(t){b=!0,_=t}finally{try{!y&&S.return&&S.return()}finally{if(b)throw _}}},c=function(t,e,r){var n=[],i=[],o=!0,s=!1,u=void 0;try{for(var a,c=r[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var f=a.value;f[1]>0?f[1]>1?n.push(f[0].SYMBOL+"^"+f[1]):n.push(f[0].SYMBOL):f[1]<-1?i.push(f[0].SYMBOL+"^"+-f[1]):i.push(f[0].SYMBOL)}}catch(t){s=!0,u=t}finally{try{!o&&c.return&&c.return()}finally{if(s)throw u}}var l=t.quantity/e;l=Math.abs(l)>1e5||Math.abs(l)<1e-5?l.toExponential(5):l.toPrecision(5);var v=l+"\\ "+n.join("\\cdot ");return i.length&&(v+=i.length>1?" / ("+i.join("\\cdot ")+")":" / "+i[0]),v}},{"../../app":2,"../../server":11}],5:[function(t,e,r){"use strict";var n=t("rsvp"),i=t("./dom"),o=(t("./server"),t("./app")),s=t("./app/constructor"),u=t("./unit"),a=$,c=a.extend;n.on("error",function(t){console.assert(!1,t)}),c(!0,o,new s),u.register(),c(!0,window,{main:i.setupMain})},{"./app":2,"./app/constructor":1,"./dom":3,"./server":11,"./unit":15,rsvp:43}],6:[function(t,e,r){"use strict";var n=t("../app/index");e.exports=function(t){var e=n.getUnits();t=t.replace(/\\ /g,""),t=t.replace(/\\left\(/g,"("),t=t.replace(/\\right\)/g,")");for(var r=null;r!=t;)t=r||t,r=t,r=u(r,/\^{([^{}]+)}/g,"^($1)"),r=u(r,/\\frac{([^{}]+)}{([^{}]+)}/g,"($1)/($2)");return t=t.replace(/\\cdot/g,"*"),t=t.replace(/(\\| )/g,""),t=t.replace(/(-|(?!a-zA-ZΩ°µ)((?:[a-zA-Z]|Ω|°|µ)+)(?!a-zA-ZΩ°µ)|([0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?))/g,function(t,r){return"-"==r?"+$$"+JSON.stringify({types:{},quantity:-1})+"$$*":isNaN(r)?"e"==r.toLowerCase()?r:"$$"+JSON.stringify(e[r].UNITLESS)+"$$":"$$"+JSON.stringify({types:{},quantity:Number(r)})+"$$"}),t=u(t,/(?:\(|^)([^()]+)(?:\)|$)/g,function(t,e){return e=u(e,/\$\$([^($$)]+)\$\$\^\$\$([^($$)]+)\$\$/g,function(t,e,r){return i(JSON.parse(e),JSON.parse(r))}),e=u(e,/\$\$([^($$)]+)\$\$(\*|\/|)\$\$([^($$)]+)\$\$/,function(t,e,r,n){return o(JSON.parse(e),r,JSON.parse(n))}),e=u(e,/\+?\$\$([^($$)]+)\$\$\+\$\$([^($$)]+)\$\$/g,function(t,e,r){return s(JSON.parse(e),JSON.parse(r))}),"+"==e[0]&&(e=e.substring(1)),e}),JSON.parse(t.split("$$")[1])};var i=function(t,e){if(Object.keys(e.types).length)return null;var r=e.quantity;t.quantity=Math.pow(t.quantity,r);for(var n in t.types)t.types[n]*=r,0==t.types[n]&&delete t.types[n];return"$$"+JSON.stringify(t)+"$$"},o=function(t,e,r){"/"==e?t.quantity/=r.quantity:t.quantity*=r.quantity;for(var n in r.types)n in t.types?t.types[n]+=("/"==e?-1:1)*r.types[n]:t.types[n]=("/"==e?-1:1)*r.types[n],0==t.types[n]&&delete t.types[n];return"$$"+JSON.stringify(t)+"$$"},s=function(t,e){if(Object.keys(t.types).length!=Object.keys(e.types).length)return null;for(var r in e.types)if(e.types[r]!=t.types[r])return null;return t.quantity+=e.quantity,"+$$"+JSON.stringify(t)+"$$"},u=function(t,e,r){for(var n=null;n!=t;)t=n||t,n=t.replace(e,r);return t}},{"../app/index":2}],7:[function(t,e,r){"use strict";var n=t("../app/index");e.exports=function(t,e){var r=[],i=[],o=[];t.forEach(function(t){var e=t[0],r=t[1];o.push({cls:n.getUnit(e,r),inverse:!1})}),e.forEach(function(t){var e=t[0],r=t[1];o.push({cls:n.getUnit(e,r),inverse:!0})});for(var s=function(){var t=o.shift();t.cls.BASE?(t.inverse?i:r).push(t.cls):(t.cls.MULS.forEach(function(e){o.push({cls:e,inverse:t.inverse})}),t.cls.DIVS.forEach(function(e){o.push({cls:e,inverse:!t.inverse})}))};o.length>0;)s();return{muls:r,divs:i}}},{"../app/index":2}],8:[function(t,e,r){"use strict";e.exports=function(t){return t?[[1e3,"k","kilo"],[.01,"c","centi"],[.001,"m","milli"],[1e-6,"µ","micro"],[1e-9,"n","nano"]]:[[1e24,"Y","yotta"],[1e21,"Z","zetta"],[1e18,"E","exa"],[1e15,"P","peta"],[1e12,"T","tera"],[1e9,"G","giga"],[1e6,"M","mega"],[100,"h","hecto"],[10,"da","deka"],[.1,"d","deci"],[1e-12,"p","pico"],[1e-15,"f","femto"],[1e-18,"a","atto"],[1e-21,"z","zepto"],[1e-24,"y","yocto"]]}},{}],9:[function(t,e,r){"use strict";e.exports=function(t,e){var r=1,n={};t.forEach(function(t){r*=t.QUANTITY,t.TYPE in n?n[t.TYPE]++:n[t.TYPE]=1}),e.forEach(function(t){r/=t.QUANTITY,t.TYPE in n?n[t.TYPE]--:n[t.TYPE]=-1});var i={};for(var o in n){var s=n[o];0!=s&&(i[o]=s)}return{types:n,quantity:r}}},{}],10:[function(t,e,r){"use strict";var n=t("../app/index");e.exports=function(t){var e=n.getUnits();for(var r in e){var i=e[r];if(i.SYMBOL==t)return i}}},{"../app/index":2}],11:[function(t,e,r){"use strict";var n=t("./get_muls_and_divs"),i=t("./identify_unit"),o=t("./get_unitless"),s=t("./eval_latex"),u=t("./search"),a=t("./get_si_prefixes");e.exports={getMulsAndDivs:n,identifyUnit:i,getUnitless:o,evalLaTeX:s,search:u,getSIPrefixes:a}},{"./eval_latex":6,"./get_muls_and_divs":7,"./get_si_prefixes":8,"./get_unitless":9,"./identify_unit":10,"./search":12}],12:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../app"),s=$,u=s.extend,a=function(){function t(e,r,i){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];n(this,t),this.derivedQuantities=e,this.baseQuantities=r,this.lastQuantity=i,o&&this.calculateCount()}return i(t,[{key:"calculateCount",value:function(){var t=0;for(var e in this.derivedQuantities)t+=Math.abs(this.derivedQuantities[e]);for(var r in this.baseQuantities)t+=Math.abs(this.baseQuantities[r]);this.count=t}},{key:"countDerivedUnits",value:function(){var t=0;for(var e in this.derivedQuantities)t+=Math.abs(this.derivedQuantities[e]);return t}},{key:"create",value:function(e,r){var n=r?-1:1,i=new t(u(!0,{},this.derivedQuantities),u(!0,{},this.baseQuantities),e.name,(!1)),o=e.name;if(o in i.derivedQuantities){if(i.derivedQuantities[o]/n<0)return null;i.derivedQuantities[o]+=n}else i.derivedQuantities[o]=n;var s=e.types;for(var a in s)a in i.baseQuantities?i.baseQuantities[a]-=n*s[a]:i.baseQuantities[a]=-n*s[a],0==i.baseQuantities[a]&&delete i.baseQuantities[a];return i.calculateCount(),i}}]),t}();e.exports=function(t){for(var e=10,r=[new a({},t.types,null)],n=o.getDerivedQuantities(),i=[],s=0;s<e;s++)i.push([]);for(;r.length;){var u=r.shift();if(null!=u&&(u.count<e&&i[u.count].push(u),u.countDerivedUnits()<4)){var c=null==u.lastQuantity;for(var f in n)if(f==u.lastQuantity&&(c=!0),c){var l=n[f];r.push(u.create(l,!1)),r.push(u.create(l,!0))}}}var v=[],p=!0,d=!1,h=void 0;try{for(var m,g=i[Symbol.iterator]();!(p=(m=g.next()).done);p=!0){var y=m.value,b=!0,_=!1,w=void 0;try{for(var x,S=y[Symbol.iterator]();!(b=(x=S.next()).done);b=!0){var T=x.value;v.push(T)}}catch(t){_=!0,w=t}finally{try{!b&&S.return&&S.return()}finally{if(_)throw w}}}}catch(t){d=!0,h=t}finally{try{!p&&g.return&&g.return()}finally{if(d)throw h}}return v}},{"../app":2}],13:[function(t,e,r){"use strict";var n=function(){function t(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t("../app"),o=t("../server"),s=$,u=s.extend,a={BASE:!0,QUANTITY:1};a.register=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=o?i.getUnit(t,o):a,c={types:{},quantity:n};c.types[t]=1,c.quantity=s.QUANTITY*n;var f=u(!0,{},s,{TYPE:t,NAME:e,SYMBOL:r,QUANTITY:c.quantity,UNITLESS:c,STANDARD:null==o});i.addUnit(f)},a.registerCommonSIPrefixes=function(t,e){return c(o.getSIPrefixes(!0),t,e)},a.registerUncommonSIPrefixes=function(t,e){return c(o.getSIPrefixes(!1),t,e)};var c=function(t,e,r){var o=i.getUnit(e,r),s=!0,u=!1,c=void 0;try{for(var f,l=t[Symbol.iterator]();!(s=(f=l.next()).done);s=!0){var v=n(f.value,3),p=v[0],d=v[1],h=v[2];a.register(e,h+o.NAME,d+o.SYMBOL,p,r)}}catch(t){u=!0,c=t}finally{try{!s&&l.return&&l.return()}finally{if(u)throw c}}};e.exports=a},{"../app":2,"../server":11}],14:[function(t,e,r){"use strict";var n=function(){function t(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=t("../app"),o=t("../server"),s=$,u=s.extend,a={BASE:!1,QUANTITY:1,MULS:[],DIVS:[]};a.register=function(t,e,r,n,s,c){var f,l,v;s&&c?(f=null,v=s,l=c):(f=s,v=[],l=[]);var p=f?i.getUnit(t,f):a,d=o.getMulsAndDivs(v,l),h=d.muls,m=d.divs;h=p.MULS.concat(h),m=p.DIVS.concat(m);var g=o.getUnitless(h,m);f?g.quantity=p.QUANTITY*n:g.quantity*=n;var y=u(!0,{},a,{TYPE:t,NAME:e,SYMBOL:r,MULS:h,DIVS:m,QUANTITY:g.quantity,UNITLESS:g,STANDARD:null==f});i.addUnit(y)},a.registerCommonSIPrefixes=function(t,e){return c(o.getSIPrefixes(!0),t,e)},a.registerUncommonSIPrefixes=function(t,e){return c(o.getSIPrefixes(!1),t,e)};var c=function(t,e,r){var o=i.getUnit(e,r),s=!0,u=!1,c=void 0;try{for(var f,l=t[Symbol.iterator]();!(s=(f=l.next()).done);s=!0){var v=n(f.value,3),p=v[0],d=v[1],h=v[2];a.register(e,h+o.NAME,d+o.SYMBOL,p,[],[],r)}}catch(t){u=!0,c=t}finally{try{!s&&l.return&&l.return()}finally{if(u)throw c}}};e.exports=a},{"../app":2,"../server":11}],15:[function(t,e,r){"use strict";var n=t("./base_unit"),i=t("./derived_unit"),o=t("./register");e.exports={BaseUnit:n,DerivedUnit:i,register:o}},{"./base_unit":13,"./derived_unit":14,"./register":25}],16:[function(t,e,r){"use strict";var n=t("../base_unit"),i="angle";e.exports=function(){n.register(i,"radian","",1),n.register(i,"radian","rad",1),n.register(i,"degree","°",180/Math.PI,"rad")}},{"../base_unit":13}],17:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="area";e.exports=function(){n.register(i,"acre","acre",4840,[["length","yd"],["length","yd"]],[]),n.register(i,"hectare","ha",1e4,[["length","m"],["length","m"]],[])}},{"../derived_unit":14}],18:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="coulomb";e.exports=function(){n.register(i,"coulomb","C",1,[["current","A"],["time","s"]],[]),n.registerCommonSIPrefixes(i,"C"),n.registerUncommonSIPrefixes(i,"C")}},{"../derived_unit":14}],19:[function(t,e,r){"use strict";var n=t("../base_unit"),i="current";e.exports=function(){n.register(i,"Ampere","A",1),n.registerCommonSIPrefixes(i,"A"),n.registerUncommonSIPrefixes(i,"A")}},{"../base_unit":13}],20:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="energy";e.exports=function(){n.register(i,"joule","J",1,[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"]]),n.registerCommonSIPrefixes(i,"J"),n.register(i,"foot pound","ft-lb",.737562,"J"),n.register(i,"electron volt","eV",8462e15,"ft-lb"),n.registerUncommonSIPrefixes(i,"J")}},{"../derived_unit":14}],21:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="farad";e.exports=function(){n.register(i,"farad","F",1,[["time","s"],["time","s"],["time","s"],["time","s"],["current","A"],["current","A"]],[["mass","kg"],["length","m"],["length","m"]]),n.registerCommonSIPrefixes(i,"F"),n.registerUncommonSIPrefixes(i,"F")}},{"../derived_unit":14}],22:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="force";e.exports=function(){n.register(i,"newton","N",1,[["mass","kg"],["length","m"]],[["time","s"],["time","s"]]),n.registerCommonSIPrefixes(i,"N"),n.registerUncommonSIPrefixes(i,"N")}},{"../derived_unit":14}],23:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="henry";e.exports=function(){n.register(i,"henry","H",1,[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"],["current","A"],["current","A"]]),n.registerCommonSIPrefixes(i,"H"),n.registerUncommonSIPrefixes(i,"H")}},{"../derived_unit":14}],24:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="hertz";e.exports=function(){n.register(i,"hertz","Hz",1,[],[["time","s"]]),n.registerCommonSIPrefixes(i,"Hz"),n.registerUncommonSIPrefixes(i,"Hz")}},{"../derived_unit":14}],25:[function(t,e,r){"use strict";var n=t("./length"),i=t("./mass"),o=t("./time"),s=t("./angle"),u=t("./current"),a=t("./temp"),c=t("./matter"),f=t("./intensity"),l=t("./storage"),v=t("./energy"),p=t("./pressure"),d=t("./force"),h=t("./hertz"),m=t("./watt"),g=t("./coulomb"),y=t("./volt"),b=t("./farad"),_=t("./ohm"),w=t("./siemens"),x=t("./weber"),S=t("./tesla"),T=t("./henry"),$=t("./lux"),E=t("./volume"),P=t("./area");e.exports=function(){n(),i(),o(),s(),u(),a(),c(),f(),l(),v(),p(),d(),h(),m(),g(),y(),b(),_(),w(),x(),S(),T(),$(),E(),P()}},{"./angle":16,"./area":17,"./coulomb":18,"./current":19,"./energy":20,"./farad":21,"./force":22,"./henry":23,"./hertz":24,"./intensity":26,"./length":27,"./lux":28,"./mass":29,"./matter":30,"./ohm":31,"./pressure":32,"./siemens":33,"./storage":34,"./temp":35,"./tesla":36,"./time":37,"./volt":38,"./volume":39,"./watt":40,"./weber":41}],26:[function(t,e,r){"use strict";var n=t("../base_unit"),i="intensity";e.exports=function(){n.register(i,"candela","cd",1)}},{"../base_unit":13}],27:[function(t,e,r){"use strict";var n=t("../base_unit"),i="length";e.exports=function(){n.register(i,"meter","m",1),n.registerCommonSIPrefixes(i,"m"),n.register(i,"feet","ft",.3048,"m"),n.register(i,"yard","yd",3,"ft"),n.register(i,"mile","mi",1760,"yd"),n.register(i,"inch","in",2.54,"cm"),n.registerUncommonSIPrefixes(i,"m")}},{"../base_unit":13}],28:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="lux";e.exports=function(){n.register(i,"lux","lx",1,[["intensity","cd"]],[["length","m"],["length","m"]]),n.registerCommonSIPrefixes(i,"lx"),n.registerUncommonSIPrefixes(i,"lx")}},{"../derived_unit":14}],29:[function(t,e,r){"use strict";var n=t("../base_unit"),i="mass";e.exports=function(){n.register(i,"grams","g",1),n.registerCommonSIPrefixes(i,"g"),n.register(i,"pounds","lb",453.59237,"g"),n.register(i,"ounces","oz",.0625,"lb"),n.registerUncommonSIPrefixes(i,"g")}},{"../base_unit":13}],30:[function(t,e,r){"use strict";var n=t("../base_unit"),i="matter";e.exports=function(){n.register(i,"atom","atom",1),n.register(i,"mole","mol",6.022140857e23,"atom")}},{"../base_unit":13}],31:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="ohm";e.exports=function(){n.register(i,"ohm","Ω",1,[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"],["time","s"],["current","A"],["current","A"]]),n.registerCommonSIPrefixes(i,"Ω"),n.registerUncommonSIPrefixes(i,"Ω")}},{"../derived_unit":14}],32:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="pressure";e.exports=function(){n.register(i,"pascal","Pa",1,[["mass","kg"]],[["length","m"],["time","s"],["time","s"]]),n.register(i,"bar","bar",1e5,"Pa"),n.registerCommonSIPrefixes(i,"Pa"),n.register(i,"atmosphere","atm",101325,"Pa"),n.registerUncommonSIPrefixes(i,"Pa")}},{"../derived_unit":14}],33:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="siemens";e.exports=function(){n.register(i,"siemens","S",1,[["time","s"],["time","s"],["time","s"],["current","A"],["current","A"]],[["mass","kg"],["length","m"],["length","m"]]),n.registerCommonSIPrefixes(i,"S"),n.registerUncommonSIPrefixes(i,"S")}},{"../derived_unit":14}],34:[function(t,e,r){"use strict";var n=t("../base_unit"),i="storage";e.exports=function(){n.register(i,"byte","byte",1),n.register(i,"Kilo byte","kb",1024,"byte"),n.register(i,"Mega byte","Mb",1024,"kb"),n.register(i,"Giga byte","Gb",1024,"Mb"),n.register(i,"Tera byte","Tb",1024,"Gb"),n.register(i,"Peta byte","Pb",1024,"Tb"),n.register(i,"Exa byte","Eb",1024,"Pb"),n.register(i,"Zetta byte","Zb",1024,"Eb"),n.register(i,"Yotta byte","Yb",1024,"Zb"),n.register(i,"bit","bit",1/8,"byte"),n.register(i,"Kilo bit","kbit",1024,"bit"),n.register(i,"Mega bit","Mbit",1024,"kbit"),n.register(i,"Giga bit","Gbit",1024,"Mbit"),n.register(i,"Tera bit","Tbit",1024,"Gbit"),n.register(i,"Peta bit","Pbit",1024,"Tbit"),n.register(i,"Exa bit","Ebit",1024,"Pbit"),n.register(i,"Zetta bit","Zbit",1024,"Ebit"),n.register(i,"Yotta bit","Ybit",1024,"Zbit")}},{"../base_unit":13}],35:[function(t,e,r){"use strict";var n=t("../base_unit"),i="temp";e.exports=function(){n.register(i,"Kelvin","K",1),n.register(i,"Celsius","°C",1,"K"),n.register(i,"Fahrenheit ","°F",1.8,"°C")}},{"../base_unit":13}],36:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="telsa";e.exports=function(){n.register(i,"telsa","T",1,[["mass","kg"]],[["time","s"],["time","s"],["current","A"]]),n.registerCommonSIPrefixes(i,"T"),n.registerUncommonSIPrefixes(i,"T")}},{"../derived_unit":14}],37:[function(t,e,r){"use strict";var n=t("../base_unit"),i="time";e.exports=function(){n.register(i,"second","s",1),n.register(i,"minute","min",60,"s"),n.register(i,"hour","hr",60,"min"),n.register(i,"day","d",24,"hr"),n.register(i,"week","w",7,"d"),n.register(i,"month","mon",4,"w"),n.register(i,"year","yr",12,"mon"),n.register(i,"century","century",100,"yr"),n.registerCommonSIPrefixes(i,"s"),n.registerUncommonSIPrefixes(i,"s")}},{"../base_unit":13}],38:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="volt";e.exports=function(){n.register(i,"volt","V",1,[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"],["time","s"],["current","A"]]),n.registerCommonSIPrefixes(i,"V"),n.registerUncommonSIPrefixes(i,"V")}},{"../derived_unit":14}],39:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="volume";e.exports=function(){n.register(i,"liters","L",1e3,[["length","cm"],["length","cm"],["length","cm"]],[]),n.registerCommonSIPrefixes(i,"L"),n.register(i,"teaspoon","tsp",4.92892159375,"mL"),n.register(i,"tablespoon","Tbsp",3,"tsp"),n.register(i,"US fluid ounce","fl oz",2,"Tbsp"),n.register(i,"US cup","cp",8,"fl oz"),n.register(i,"US pint","pt",2,"cp"),n.register(i,"US quart","qt",2,"pt"),n.register(i,"US gallon","gal",4,"qt"),n.register(i,"barrel","bbl",31.5,"gal"),n.registerUncommonSIPrefixes(i,"L")}},{"../derived_unit":14}],40:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="watt";e.exports=function(){n.register(i,"watt","W",1,[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"],["time","s"]]),n.registerCommonSIPrefixes(i,"W"),n.registerUncommonSIPrefixes(i,"W")}},{"../derived_unit":14}],41:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="weber";e.exports=function(){n.register(i,"weber","Wb",1,[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"],["current","A"]]),n.registerCommonSIPrefixes(i,"Wb"),n.registerUncommonSIPrefixes(i,"Wb")}},{"../derived_unit":14}],42:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function s(t){if(v===clearTimeout)return clearTimeout(t);if((v===i||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(t);try{return v(t)}catch(e){try{return v.call(null,t)}catch(e){return v.call(this,t)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&a())}function a(){if(!m){var t=o(u);m=!0;for(var e=h.length;e;){for(d=h,h=[];++g<e;)d&&d[g].run();g=-1,e=h.length}d=null,m=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function f(){}var l,v,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{v="function"==typeof clearTimeout?clearTimeout:i}catch(t){v=i}}();var d,h=[],m=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new c(t,e)),1!==h.length||m||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],43:[function(t,e,r){(function(n,i){!function(t,n){"object"==typeof r&&"undefined"!=typeof e?n(r):"function"==typeof define&&define.amd?define(["exports"],n):n(t.RSVP=t.RSVP||{})}(this,function(e){"use strict";function r(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function o(t){var e=t._promiseCallbacks;return e||(e=t._promiseCallbacks={}),e}function s(t,e){return"onerror"===t?void Tt.on("error",e):2!==arguments.length?Tt[t]:void(Tt[t]=e)}function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function c(t){return"object"==typeof t&&null!==t}function f(){}function l(){setTimeout(function(){for(var t=0;t<It.length;t++){var e=It[t],r=e.payload;r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),Tt.trigger(e.name,e.payload)}It.length=0},50)}function v(t,e,r){1===It.push({name:t,payload:{key:e._guidKey,id:e._id,eventName:t,detail:e._result,childId:r&&r._id,label:e._label,timeStamp:Pt(),error:Tt["instrument-with-stack"]?new Error(e._label):null}})&&l()}function p(t,e){var r=this;if(t&&"object"==typeof t&&t.constructor===r)return t;var n=new r(h,e);return w(n,t),n}function d(){return new TypeError("A promises callback cannot return that same promise.")}function h(){}function m(t){try{return t.then}catch(t){return kt.error=t,kt}}function g(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function y(t,e,r){Tt.async(function(t){var n=!1,i=g(r,e,function(r){n||(n=!0,e!==r?w(t,r,void 0):S(t,r))},function(e){n||(n=!0,T(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&i&&(n=!0,T(t,i))},t)}function b(t,e){e._state===Mt?S(t,e._result):e._state===Ct?(e._onError=null,T(t,e._result)):$(e,void 0,function(r){e!==r?w(t,r,void 0):S(t,r)},function(e){return T(t,e)})}function _(t,e,r){e.constructor===t.constructor&&r===M&&t.constructor.resolve===p?b(t,e):r===kt?T(t,kt.error):void 0===r?S(t,e):a(r)?y(t,e,r):S(t,e)}function w(t,e){t===e?S(t,e):u(e)?_(t,e,m(e)):S(t,e)}function x(t){t._onError&&t._onError(t._result),E(t)}function S(t,e){t._state===Ut&&(t._result=e,t._state=Mt,0===t._subscribers.length?Tt.instrument&&v("fulfilled",t):Tt.async(E,t))}function T(t,e){t._state===Ut&&(t._state=Ct,t._result=e,Tt.async(x,t))}function $(t,e,r,n){var i=t._subscribers,o=i.length;t._onError=null,i[o]=e,i[o+Mt]=r,i[o+Ct]=n,0===o&&t._state&&Tt.async(E,t)}function E(t){var e=t._subscribers,r=t._state;if(Tt.instrument&&v(r===Mt?"fulfilled":"rejected",t),0!==e.length){for(var n=void 0,i=void 0,o=t._result,s=0;s<e.length;s+=3)n=e[s],i=e[s+r],n?I(r,n,i,o):i(o);t._subscribers.length=0}}function P(){this.error=null}function A(t,e){try{return t(e)}catch(t){return Ot.error=t,Ot}}function I(t,e,r,n){var i=a(r),o=void 0,s=void 0,u=void 0,c=void 0;if(i){if(o=A(r,n),o===Ot?(c=!0,s=o.error,o=null):u=!0,e===o)return void T(e,d())}else o=n,u=!0;e._state!==Ut||(i&&u?w(e,o):c?T(e,s):t===Mt?S(e,o):t===Ct&&T(e,o))}function U(t,e){var r=!1;try{e(function(e){r||(r=!0,w(t,e))},function(e){r||(r=!0,T(t,e))})}catch(e){T(t,e)}}function M(t,e,r){var n=arguments,i=this,o=i._state;if(o===Mt&&!t||o===Ct&&!e)return Tt.instrument&&v("chained",i,i),i;i._onError=null;var s=new i.constructor(h,r),u=i._result;return Tt.instrument&&v("chained",i,s),o?!function(){var t=n[o-1];Tt.async(function(){return I(o,s,t,u)})}():$(i,s,t,e),s}function C(t,e,r){return t===Mt?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}function k(t,e,r,n){this._instanceConstructor=t,this.promise=new t(h,n),this._abortOnReject=r,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):T(this.promise,this._validationError())}function O(t,e){return new k(this,t,(!0),e).promise}function N(t,e){var r=this,n=new r(h,e);if(!Et(t))return T(n,new TypeError("You must pass an array to race.")),n;for(var i=0;n._state===Ut&&i<t.length;i++)$(r.resolve(t[i]),void 0,function(t){return w(n,t)},function(t){return T(n,t)});return n}function j(t,e){var r=this,n=new r(h,e);return T(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t,e){this._id=jt++,this._label=e,this._state=void 0,this._result=void 0,this._subscribers=[],Tt.instrument&&v("created",this),h!==t&&("function"!=typeof t&&Y(),this instanceof L?U(this,t):Q())}function q(){this.value=void 0}function D(t){try{return t.then}catch(t){return Yt.value=t,Yt}}function B(t,e,r){try{t.apply(e,r)}catch(t){return Yt.value=t,Yt}}function J(t,e){for(var r={},n=t.length,i=new Array(n),o=0;o<n;o++)i[o]=t[o];for(var s=0;s<e.length;s++){var u=e[s];r[u]=i[s+1]}return r}function R(t){for(var e=t.length,r=new Array(e-1),n=1;n<e;n++)r[n-1]=t[n];return r}function z(t,e){return{then:function(r,n){return t.call(e,r,n)}}}function V(t,e){var r=function(){for(var r=this,n=arguments.length,i=new Array(n+1),o=!1,s=0;s<n;++s){var u=arguments[s];if(!o){if(o=G(u),o===Qt){var a=new L(h);return T(a,Qt.value),a}o&&o!==!0&&(u=z(o,u))}i[s]=u}var c=new L(h);return i[n]=function(t,r){t?T(c,t):void 0===e?w(c,r):e===!0?w(c,R(arguments)):Et(e)?w(c,J(arguments,e)):w(c,r)},o?F(c,i,t,r):Z(c,i,t,r)};return r.__proto__=t,r}function Z(t,e,r,n){var i=B(r,n,e);return i===Yt&&T(t,i.value),t}function F(t,e,r,n){return L.all(e).then(function(e){var i=B(r,n,e);return i===Yt&&T(t,i.value),t})}function G(t){return!(!t||"object"!=typeof t)&&(t.constructor===L||D(t))}function K(t,e){return L.all(t,e)}function H(t,e,r){this._superConstructor(t,e,!1,r)}function W(t,e){return new H(L,t,e).promise}function X(t,e){return L.race(t,e)}function tt(t,e,r){this._superConstructor(t,e,!0,r)}function et(t,e){return new tt(L,t,e).promise}function rt(t,e,r){this._superConstructor(t,e,!1,r)}function nt(t,e){return new rt(L,t,e).promise}function it(t){throw setTimeout(function(){throw t}),t}function ot(t){var e={resolve:void 0,reject:void 0};return e.promise=new L(function(t,r){e.resolve=t,e.reject=r},t),e}function st(t,e,r){return L.all(t,r).then(function(t){if(!a(e))throw new TypeError("You must pass a function as map's second argument.");for(var n=t.length,i=new Array(n),o=0;o<n;o++)i[o]=e(t[o]);return L.all(i,r)})}function ut(t,e){return L.resolve(t,e)}function at(t,e){return L.reject(t,e)}function ct(t,e){return L.all(t,e)}function ft(t,e){return L.resolve(t,e).then(function(t){return ct(t,e)})}function lt(t,e,r){var n=Et(t)?ct(t,r):ft(t,r);return n.then(function(t){if(!a(e))throw new TypeError("You must pass a function as filter's second argument.");for(var n=t.length,i=new Array(n),o=0;o<n;o++)i[o]=e(t[o]);return ct(i,r).then(function(e){for(var r=new Array(n),i=0,o=0;o<n;o++)e[o]&&(r[i]=t[o],i++);return r.length=i,r})})}function vt(t,e){Vt[Lt]=t,Vt[Lt+1]=e,Lt+=2,2===Lt&&Zt()}function pt(){var t=n.nextTick,e=n.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(e)&&"0"===e[1]&&"10"===e[2]&&(t=setImmediate),function(){return t(yt)}}function dt(){return"undefined"!=typeof qt?function(){qt(yt)}:gt()}function ht(){var t=0,e=new Jt(yt),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){return r.data=t=++t%2}}function mt(){var t=new MessageChannel;return t.port1.onmessage=yt,function(){return t.port2.postMessage(0)}}function gt(){return function(){return setTimeout(yt,1)}}function yt(){for(var t=0;t<Lt;t+=2){var e=Vt[t],r=Vt[t+1];e(r),Vt[t]=void 0,Vt[t+1]=void 0}Lt=0;
}function bt(){try{var e=t,r=e("vertx");return qt=r.runOnLoop||r.runOnContext,dt()}catch(t){return gt()}}function _t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function wt(){Tt.on.apply(Tt,arguments)}function xt(){Tt.off.apply(Tt,arguments)}var St={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,e){if("function"!=typeof e)throw new TypeError("Callback must be a function");var n=o(this),i=void 0;i=n[t],i||(i=n[t]=[]),r(i,e)===-1&&i.push(e)},off:function(t,e){var n=o(this),i=void 0,s=void 0;return e?(i=n[t],s=r(i,e),void(s!==-1&&i.splice(s,1))):void(n[t]=[])},trigger:function(t,e,r){var n=o(this),i=void 0,s=void 0;if(i=n[t])for(var u=0;u<i.length;u++)(s=i[u])(e,r)}},Tt={instrument:!1};St.mixin(Tt);var $t=void 0;$t=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Et=$t,Pt=Date.now||function(){return(new Date).getTime()},At=Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return f.prototype=t,new f},It=[],Ut=void 0,Mt=1,Ct=2,kt=new P,Ot=new P;k.prototype._validateInput=function(t){return Et(t)},k.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},k.prototype._init=function(){this._result=new Array(this.length)},k.prototype._enumerate=function(){for(var t=this.length,e=this.promise,r=this._input,n=0;e._state===Ut&&n<t;n++)this._eachEntry(r[n],n)},k.prototype._settleMaybeThenable=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===p){var i=m(t);if(i===M&&t._state!==Ut)t._onError=null,this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=this._makeResult(Mt,e,t);else if(r===L){var o=new r(h);_(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},k.prototype._eachEntry=function(t,e){c(t)?this._settleMaybeThenable(t,e):(this._remaining--,this._result[e]=this._makeResult(Mt,e,t))},k.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===Ut&&(this._remaining--,this._abortOnReject&&t===Ct?T(n,r):this._result[e]=this._makeResult(t,e,r)),0===this._remaining&&S(n,this._result)},k.prototype._makeResult=function(t,e,r){return r},k.prototype._willSettleAt=function(t,e){var r=this;$(t,void 0,function(t){return r._settledAt(Mt,e,t)},function(t){return r._settledAt(Ct,e,t)})};var Nt="rsvp_"+Pt()+"-",jt=0;L.cast=p,L.all=O,L.race=N,L.resolve=p,L.reject=j,L.prototype={constructor:L,_guidKey:Nt,_onError:function(t){var e=this;Tt.after(function(){e._onError&&Tt.trigger("error",t,e._label)})},then:M,catch:function(t,e){return this.then(void 0,t,e)},finally:function(t,e){var r=this,n=r.constructor;return r.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})},e)}};var Yt=new q,Qt=new q;H.prototype=At(k.prototype),H.prototype._superConstructor=k,H.prototype._makeResult=C,H.prototype._validationError=function(){return new Error("allSettled must be called with an array")},tt.prototype=At(k.prototype),tt.prototype._superConstructor=k,tt.prototype._init=function(){this._result={}},tt.prototype._validateInput=function(t){return t&&"object"==typeof t},tt.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},tt.prototype._enumerate=function(){var t=this,e=t.promise,r=t._input,n=[];for(var i in r)e._state===Ut&&Object.prototype.hasOwnProperty.call(r,i)&&n.push({position:i,entry:r[i]});var o=n.length;t._remaining=o;for(var s=void 0,u=0;e._state===Ut&&u<o;u++)s=n[u],t._eachEntry(s.entry,s.position)},rt.prototype=At(tt.prototype),rt.prototype._superConstructor=k,rt.prototype._makeResult=C,rt.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var Lt=0,qt=void 0,Dt="undefined"!=typeof window?window:void 0,Bt=Dt||{},Jt=Bt.MutationObserver||Bt.WebKitMutationObserver,Rt="undefined"==typeof self&&"undefined"!=typeof n&&"[object process]"==={}.toString.call(n),zt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Vt=new Array(1e3),Zt=void 0;Zt=Rt?pt():Jt?ht():zt?mt():void 0===Dt&&"function"==typeof t?bt():gt();var Ft=void 0;if("object"==typeof self)Ft=self;else{if("object"!=typeof i)throw new Error("no global: `self` or `global` found");Ft=i}var Gt;Tt.async=vt,Tt.after=function(t){return setTimeout(t,0)};var Kt=ut,Ht=function(t,e){return Tt.async(t,e)};if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Wt=window.__PROMISE_INSTRUMENTATION__;s("instrument",!0);for(var Xt in Wt)Wt.hasOwnProperty(Xt)&&wt(Xt,Wt[Xt])}var te=(Gt={cast:Kt,Promise:L,EventTarget:St,all:K,allSettled:W,race:X,hash:et,hashSettled:nt,rethrow:it,defer:ot,denodeify:V,configure:s,on:wt,off:xt,resolve:ut,reject:at,map:st},_t(Gt,"async",Ht),_t(Gt,"filter",lt),Gt);e.default=te,e.cast=Kt,e.Promise=L,e.EventTarget=St,e.all=K,e.allSettled=W,e.race=X,e.hash=et,e.hashSettled=nt,e.rethrow=it,e.defer=ot,e.denodeify=V,e.configure=s,e.on=wt,e.off=xt,e.resolve=ut,e.reject=at,e.map=st,e.async=Ht,e.filter=lt,Object.defineProperty(e,"__esModule",{value:!0})})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:42}]},{},[5]);
//# sourceMappingURL=quantify.js.map
