parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YOwE":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"pyFg":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.forward_ref"):60112,s=r?Symbol.for("react.suspense"):60113,a=r?Symbol.for("react.memo"):60115,p=r?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}function x(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var S=b.prototype=new x;S.constructor=b,e(S,m.prototype),S.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,$={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,n){var o,u={},f=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(f=""+r.key),r)k.call(r,o)&&!$.hasOwnProperty(o)&&(u[o]=r[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];u.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:t,type:e,key:f,ref:c,props:u,_owner:_.current}}function w(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function E(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var R=/\/+/g,P=[];function j(e,r,t,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function O(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function A(e,r,o,u){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var c=!1;if(null===e)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return o(u,e,""===r?"."+U(e,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=r+U(f=e[l],l);c+=A(f,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=y&&e[y]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(f=e.next()).done;)c+=A(f=f.value,i=r+U(f,l++),o,u);else if("object"===f)throw o=""+e,Error(d(31,"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return c}function I(e,r,t){return null==e?0:A(e,"",r,t)}function U(e,r){return"object"==typeof e&&null!==e&&null!=e.key?E(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function F(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?L(e,n,t,function(e){return e}):null!=e&&(C(e)&&(e=w(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function L(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(R,"$&/")+"/"),I(e,F,r=j(r,u,n,o)),O(r)}var M={current:null};function D(){var e=M.current;if(null===e)throw Error(d(321));return e}var V={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};exports.Children={map:function(e,r,t){if(null==e)return e;var n=[];return L(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;I(e,q,r=j(null,null,r,t)),O(r)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var r=[];return L(e,r,null,function(e){return e}),r},only:function(e){if(!C(e))throw Error(d(143));return e}},exports.Component=m,exports.Fragment=o,exports.Profiler=f,exports.PureComponent=b,exports.StrictMode=u,exports.Suspense=s,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,exports.cloneElement=function(r,n,o){if(null==r)throw Error(d(267,r));var u=e({},r.props),f=r.key,c=r.ref,l=r._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,l=_.current),void 0!==n.key&&(f=""+n.key),r.type&&r.type.defaultProps)var i=r.type.defaultProps;for(s in n)k.call(n,s)&&!$.hasOwnProperty(s)&&(u[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)u.children=o;else if(1<s){i=Array(s);for(var a=0;a<s;a++)i[a]=arguments[a+2];u.children=i}return{$$typeof:t,type:r.type,key:f,ref:c,props:u,_owner:l}},exports.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:l,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},exports.createElement=g,exports.createFactory=function(e){var r=g.bind(null,e);return r.type=e,r},exports.createRef=function(){return{current:null}},exports.forwardRef=function(e){return{$$typeof:i,render:e}},exports.isValidElement=C,exports.lazy=function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},exports.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},exports.useCallback=function(e,r){return D().useCallback(e,r)},exports.useContext=function(e,r){return D().useContext(e,r)},exports.useDebugValue=function(){},exports.useEffect=function(e,r){return D().useEffect(e,r)},exports.useImperativeHandle=function(e,r,t){return D().useImperativeHandle(e,r,t)},exports.useLayoutEffect=function(e,r){return D().useLayoutEffect(e,r)},exports.useMemo=function(e,r){return D().useMemo(e,r)},exports.useReducer=function(e,r,t){return D().useReducer(e,r,t)},exports.useRef=function(e){return D().useRef(e)},exports.useState=function(e){return D().useState(e)},exports.version="16.13.1";
},{"object-assign":"YOwE"}],"HdMw":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"pyFg"}],"dDAi":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Page=void 0;var r=function(e,t,n){return{name:e,action:t,get targetPage(){return n()}}},o=function(){function t(n){e(this,t),this.dialog=n,this.choices=[]}return n(t,[{key:"addChoice",value:function(e,t,n){return this.choices.push(r(e,t,n)),this}}]),t}();exports.Page=o,o.dialog=function(e){return new o(e)};
},{}],"ZZB0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.firstPage=void 0;var e=n(require("react")),t=require("./Page");function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}var o=function(a){return t.Page.dialog(e.createElement(e.Fragment,null,a,e.createElement("p",{className:"death-message"},"Game over"),e.createElement("p",{id:"play-again"},"Play again?")))},r=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"It's a beautiful day at the West Cordovan Grand Prix. As the pace car driver, it is up to you to lead the pack safely around the entire course. Once you have all completed the first lap, the true race may begin."),e.createElement("p",null,"You are at the ",e.createElement("b",null,"starting")," line. It's time to go."))).addChoice("Gas","You press down on the gas pedal.",function(){return l}),l=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"Your car lurches forward and quickly picks up the pace. The racecars behind you roll to a cautious start."),e.createElement("p",null,"The course begins with a straightaway."))).addChoice("Even more gas","You really put the pedal to the medal.",function(){return m}).addChoice("Brake","You slam on the brakes.",function(){return u}),u=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"You hit the brake. Your car stops in the middle of the straightaway. The racecars behind you slam on their brakes. You can sense their confusion."),e.createElement("p",null,"You should keep going. This is no place to stop."))).addChoice("Gas","You put your foot back on the gas.",function(){return m}).addChoice("Do nothing","You do nothing.",function(){return i}),i=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"You sit in the car. It's a nice day. There's barely a cloud in the sky."),e.createElement("p",null,"You can hear confusion in the announcer's voice. The crowd is agitated. A car honks behind you. (These racecars come equipped with horns. It's standard issue these days, to scare the stray geese off of the racetrack.)"))).addChoice("Gas","You put your foot back on the gas.",function(){return m}).addChoice("Turn on the radio","You turn the radio on.",function(){return c}),c=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"You turn on the radio. Are pacecars supposed to have radios? Yours does. It's tuned to the local Top 40 Pop station. "),e.createElement("p",null,"The outside world falls away. It's just you, the car, the empty road ahead, and Ariana Grande."))).addChoice("Gas","You put your foot back on the gas.",function(){return g}).addChoice("Do nothing","You do nothing.",function(){return s}),s=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,'"Imagine a world like that," croons Ariana. Indeed.'),e.createElement("p",null,"There's a tap on your window. A man stands outside your car, gesticulating wildly."))).addChoice("Roll down the window","You roll down the window.",function(){return m}).addChoice("Do nothing","You continue to do nothing.",function(){return h}),h=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"You look at the man. The man looks at you."),e.createElement("p",null,"He pulls on your car door. It's locked. He bangs on the window. Nothing happens. You are safe in your car."))).addChoice("Roll down the window","You roll down the window.",function(){return m}).addChoice("Do nothing","You continue to do nothing at all.",function(){return d}),d=o(e.createElement(e.Fragment,null,e.createElement("p",null,"You tap the steering wheel in time with the music. More men appear outside your windows. Ariana fades out and in her wake you can hear the crowd, the announcer, the other drivers -- they don't know what to make of you."),e.createElement("p",null,"I don't know what to make of you."))),g=t.Page.dialog(e.createElement(e.Fragment,null,e.createElement("p",null,"Ariana hits a high note, and you hit the gas."),e.createElement("p",null,"The cars behind you start up again. Nearby, a booming, crackling voice reassures the crowd."),e.createElement("p",null,"You're still on a straightaway."))).addChoice("Gas","You press harder on the gas pedal.",function(){return m}).addChoice("Turn right","You crank the steering wheel all the way to the right.",function(){return p}),p=o(e.createElement(e.Fragment,null,e.createElement("p",null,"You crank the wheel as far as you can to the right at 60 miles per hour."),e.createElement("p",null,'"Imagine a world like that," Ariana croons as your car careens into a wall.'),e.createElement("p",null,'"Imagine a world like that," she repeats, your car flipping end-over-end into the crowd.'),e.createElement("p",null,"Imagine."))),m=t.Page.dialog(e.createElement("p",null,"There's nothing here.",e.createElement("br",null),"Moooore Features Coming Soon To a Pace Car Near You!")),f=r;exports.firstPage=f;
},{"react":"HdMw","./Page":"dDAi"}],"wi82":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t=require("react");function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.scope"):60119;function g(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}}function x(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case i:return"Fragment";case o:return"Portal";case l:return"Profiler";case a:return"StrictMode";case h:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return"Context.Consumer";case u:return"Context.Provider";case f:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case d:return x(e.type);case y:return x(e.render);case m:if(e=1===e._status?e._result:null)return x(e)}return null}var k=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;k.hasOwnProperty("ReactCurrentDispatcher")||(k.ReactCurrentDispatcher={current:null}),k.hasOwnProperty("ReactCurrentBatchConfig")||(k.ReactCurrentBatchConfig={suspense:null});var b={};function S(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}function E(e,t,r,n){if(n&&("object"==typeof(n=e.contextType)&&null!==n))return S(n,r),n[r];if(e=e.contextTypes){for(var o in r={},e)r[o]=t[o];t=r}else t=b;return t}for(var F=new Uint16Array(16),C=0;15>C;C++)F[C]=C+1;F[15]=0;var D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_=Object.prototype.hasOwnProperty,I={},N={};function O(e){return!!_.call(N,e)||!_.call(I,e)&&(D.test(e)?N[e]=!0:(I[e]=!0,!1))}function M(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}function P(e,t,r,n){if(null==t||M(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function z(e,t,r,n,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new z(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new z(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new z(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new z(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new z(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new z(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){R[e]=new z(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new z(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new z(e,5,!1,e.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(L,T);R[t]=new z(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(L,T);R[t]=new z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(L,T);R[t]=new z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new z(e,1,!1,e.toLowerCase(),null,!1)}),R.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){R[e]=new z(e,1,!1,e.toLowerCase(),null,!0)});var V=/["'&<>]/;function A(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=V.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function W(e,t){var r,n=R.hasOwnProperty(e)?R[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||P(e,t,n,!1)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+A(t)+'"')):O(e)?e+'="'+A(t)+'"':""}function j(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var U="function"==typeof Object.is?Object.is:j,H=null,$=null,q=null,B=!1,Z=!1,G=null,X=0;function Y(){if(null===H)throw Error(r(321));return H}function J(){if(0<X)throw Error(r(312));return{memoizedState:null,queue:null,next:null}}function K(){return null===q?null===$?(B=!1,$=q=J()):(B=!0,q=$):null===q.next?(B=!1,q=q.next=J()):(B=!0,q=q.next),q}function Q(e,t,r,n){for(;Z;)Z=!1,X+=1,q=null,r=e(t,n);return $=H=null,X=0,q=G=null,r}function ee(e,t){return"function"==typeof t?t(e):t}function te(e,t,r){if(H=Y(),q=K(),B){var n=q.queue;if(t=n.dispatch,null!==G&&void 0!==(r=G.get(n))){G.delete(n),n=q.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return q.memoizedState=n,[n,t]}return[q.memoizedState,t]}return e=e===ee?"function"==typeof t?t():t:void 0!==r?r(t):t,q.memoizedState=e,e=(e=q.queue={last:null,dispatch:null}).dispatch=re.bind(null,H,e),[q.memoizedState,e]}function re(e,t,n){if(!(25>X))throw Error(r(301));if(e===H)if(Z=!0,e={action:n,next:null},null===G&&(G=new Map),void 0===(n=G.get(t)))G.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}function ne(){}var oe=0,ie={readContext:function(e){var t=oe;return S(e,t),e[t]},useContext:function(e){Y();var t=oe;return S(e,t),e[t]},useMemo:function(e,t){if(H=Y(),t=void 0===t?null:t,null!==(q=K())){var r=q.memoizedState;if(null!==r&&null!==t){e:{var n=r[1];if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!U(t[o],n[o])){n=!1;break e}n=!0}}if(n)return r[0]}}return e=e(),q.memoizedState=[e,t],e},useReducer:te,useRef:function(e){H=Y();var t=(q=K()).memoizedState;return null===t?(e={current:e},q.memoizedState=e):t},useState:function(e){return te(ee,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:ne,useEffect:ne,useDebugValue:ne,useResponder:function(e,t){return{props:t,responder:e}},useDeferredValue:function(e){return Y(),e},useTransition:function(){return Y(),[function(e){e()},!1]}},ae={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ue={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},se=e({menuitem:!0},ue),ce={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];Object.keys(ce).forEach(function(e){fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ce[t]=ce[e]})});var he=/([A-Z])/g,pe=/^ms-/,de=t.Children.toArray,me=k.ReactCurrentDispatcher,ye={listing:!0,pre:!0,textarea:!0},ve=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,we={},ge={};function xe(e){if(null==e)return e;var r="";return t.Children.forEach(e,function(e){null!=e&&(r+=e)}),r}var ke=Object.prototype.hasOwnProperty,be={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Se(e,t){if(void 0===e)throw Error(r(152,x(t)||"Component"))}function Ee(n,o,i){function a(t,a){var l=a.prototype&&a.prototype.isReactComponent,u=E(a,o,i,l),s=[],c=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){c=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}};if(l){if(l=new a(t.props,u,f),"function"==typeof a.getDerivedStateFromProps){var h=a.getDerivedStateFromProps.call(null,t.props,l.state);null!=h&&(l.state=e({},l.state,h))}}else if(H={},l=a(t.props,u,f),null==(l=Q(a,t.props,l,u))||null==l.render)return void Se(n=l,a);if(l.props=t.props,l.context=u,l.updater=f,void 0===(f=l.state)&&(l.state=f=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),s.length){f=s;var p=c;if(s=null,c=!1,p&&1===f.length)l.state=f[0];else{h=p?f[0]:l.state;var d=!0;for(p=p?1:0;p<f.length;p++){var m=f[p];null!=(m="function"==typeof m?m.call(l,h,t.props,u):m)&&(d?(d=!1,h=e({},h,m)):e(h,m))}l.state=h}}else s=null;if(Se(n=l.render(),a),"function"==typeof l.getChildContext&&"object"==typeof(t=a.childContextTypes)){var y=l.getChildContext();for(var v in y)if(!(v in t))throw Error(r(108,x(a)||"Unknown",v))}y&&(o=e({},o,y))}for(;t.isValidElement(n);){var l=n,u=l.type;if("function"!=typeof u)break;a(l,u)}return{child:n,context:o}}var Fe=function(){function n(e,n){t.isValidElement(e)?e.type!==i?e=[e]:(e=e.props.children,e=t.isValidElement(e)?[e]:de(e)):e=de(e),e={type:null,domNamespace:ae.html,children:e,childIndex:0,context:b,footer:""};var o=F[0];if(0===o){var a=F,l=2*(o=a.length);if(!(65536>=l))throw Error(r(304));var u=new Uint16Array(l);for(u.set(a),(F=u)[0]=o+1,a=o;a<l-1;a++)F[a]=a+1;F[l-1]=0}else F[0]=F[o];this.threadID=o,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}var y=n.prototype;return y.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;F[e]=F[0],F[0]=e}},y.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;S(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},y.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},y.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},y.read=function(e){if(this.exhausted)return null;var t=oe;oe=this.threadID;var n=me.current;me.current=ie;try{for(var o=[""],i=!1;o[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;F[a]=F[0],F[0]=a;break}var l=this.stack[this.stack.length-1];if(i||l.childIndex>=l.children.length){var s=l.footer;if(""!==s&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===u)this.popProvider(l.type);else if(l.type===h){this.suspenseDepth--;var c=o.pop();if(i){i=!1;var f=l.fallbackFrame;if(!f)throw Error(r(303));this.stack.push(f),o[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}o[this.suspenseDepth]+=c}o[this.suspenseDepth]+=s}else{var p=l.children[l.childIndex++],d="";try{d+=this.render(p,l.context,l.domNamespace)}catch(m){if(null!=m&&"function"==typeof m.then)throw Error(r(294));throw m}o.length<=this.suspenseDepth&&o.push(""),o[this.suspenseDepth]+=d}}return o[0]}finally{me.current=n,oe=t}},y.render=function(n,y,x){if("string"==typeof n||"number"==typeof n)return""===(x=""+n)?"":this.makeStaticMarkup?A(x):this.previousWasTextNode?"\x3c!-- --\x3e"+A(x):(this.previousWasTextNode=!0,A(x));if(n=(y=Ee(n,y,this.threadID)).child,y=y.context,null===n||!1===n)return"";if(!t.isValidElement(n)){if(null!=n&&null!=n.$$typeof){if((x=n.$$typeof)===o)throw Error(r(257));throw Error(r(258,x.toString()))}return n=de(n),this.stack.push({type:null,domNamespace:x,children:n,childIndex:0,context:y,footer:""}),""}var k=n.type;if("string"==typeof k)return this.renderDOM(n,y,x);switch(k){case a:case c:case l:case p:case i:return n=de(n.props.children),this.stack.push({type:null,domNamespace:x,children:n,childIndex:0,context:y,footer:""}),"";case h:throw Error(r(294))}if("object"==typeof k&&null!==k)switch(k.$$typeof){case f:H={};var b=k.render(n.props,n.ref);return b=Q(k.render,n.props,b,n.ref),b=de(b),this.stack.push({type:null,domNamespace:x,children:b,childIndex:0,context:y,footer:""}),"";case d:return n=[t.createElement(k.type,e({ref:n.ref},n.props))],this.stack.push({type:null,domNamespace:x,children:n,childIndex:0,context:y,footer:""}),"";case u:return x={type:n,domNamespace:x,children:k=de(n.props.children),childIndex:0,context:y,footer:""},this.pushProvider(n),this.stack.push(x),"";case s:k=n.type,b=n.props;var E=this.threadID;return S(k,E),k=de(b.children(k[E])),this.stack.push({type:n,domNamespace:x,children:k,childIndex:0,context:y,footer:""}),"";case v:throw Error(r(338));case m:switch(g(k=n.type),k._status){case 1:return n=[t.createElement(k._result,e({ref:n.ref},n.props))],this.stack.push({type:null,domNamespace:x,children:n,childIndex:0,context:y,footer:""}),"";case 2:throw k._result;default:throw Error(r(295))}case w:throw Error(r(343))}throw Error(r(130,null==k?k:typeof k,""))},y.renderDOM=function(t,n,o){var i=t.type.toLowerCase();if(o===ae.html&&le(i),!we.hasOwnProperty(i)){if(!ve.test(i))throw Error(r(65,i));we[i]=!0}var a=t.props;if("input"===i)a=e({type:void 0},a,{defaultChecked:void 0,defaultValue:void 0,value:null!=a.value?a.value:a.defaultValue,checked:null!=a.checked?a.checked:a.defaultChecked});else if("textarea"===i){var l=a.value;if(null==l){l=a.defaultValue;var u=a.children;if(null!=u){if(null!=l)throw Error(r(92));if(Array.isArray(u)){if(!(1>=u.length))throw Error(r(93));u=u[0]}l=""+u}null==l&&(l="")}a=e({},a,{value:void 0,children:""+l})}else if("select"===i)this.currentSelectValue=null!=a.value?a.value:a.defaultValue,a=e({},a,{value:void 0});else if("option"===i){u=this.currentSelectValue;var s=xe(a.children);if(null!=u){var c=null!=a.value?a.value+"":s;if(l=!1,Array.isArray(u)){for(var f=0;f<u.length;f++)if(""+u[f]===c){l=!0;break}}else l=""+u===c;a=e({selected:void 0,children:void 0},a,{selected:l,children:s})}}if(l=a){if(se[i]&&(null!=l.children||null!=l.dangerouslySetInnerHTML))throw Error(r(137,i,""));if(null!=l.dangerouslySetInnerHTML){if(null!=l.children)throw Error(r(60));if(!("object"==typeof l.dangerouslySetInnerHTML&&"__html"in l.dangerouslySetInnerHTML))throw Error(r(61))}if(null!=l.style&&"object"!=typeof l.style)throw Error(r(62,""))}for(g in l=a,u=this.makeStaticMarkup,s=1===this.stack.length,c="<"+t.type,l)if(ke.call(l,g)){var h=l[g];if(null!=h){if("style"===g){f=void 0;var p="",d="";for(f in h)if(h.hasOwnProperty(f)){var m=0===f.indexOf("--"),y=h[f];if(null!=y){if(m)var v=f;else if(v=f,ge.hasOwnProperty(v))v=ge[v];else{var w=v.replace(he,"-$1").toLowerCase().replace(pe,"-ms-");v=ge[v]=w}p+=d+v+":",d=f,p+=m=null==y||"boolean"==typeof y||""===y?"":m||"number"!=typeof y||0===y||ce.hasOwnProperty(d)&&ce[d]?(""+y).trim():y+"px",d=";"}}h=p||null}f=null;e:if(m=i,y=l,-1===m.indexOf("-"))m="string"==typeof y.is;else switch(m){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":m=!1;break e;default:m=!0}m?be.hasOwnProperty(g)||(f=O(f=g)&&null!=h?f+'="'+A(h)+'"':""):f=W(g,h),f&&(c+=" "+f)}}u||s&&(c+=' data-reactroot=""');var g=c;l="",ue.hasOwnProperty(i)?g+="/>":(g+=">",l="</"+t.type+">");e:{if(null!=(u=a.dangerouslySetInnerHTML)){if(null!=u.__html){u=u.__html;break e}}else if("string"==typeof(u=a.children)||"number"==typeof u){u=A(u);break e}u=null}return null!=u?(a=[],ye.hasOwnProperty(i)&&"\n"===u.charAt(0)&&(g+="\n"),g+=u):a=de(a.children),t=t.type,o=null==o||"http://www.w3.org/1999/xhtml"===o?le(t):"http://www.w3.org/2000/svg"===o&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":o,this.stack.push({domNamespace:o,type:i,children:a,childIndex:0,context:n,footer:l}),this.previousWasTextNode=!1,g},n}(),Ce={renderToString:function(e){e=new Fe(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new Fe(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){throw Error(r(207))},renderToStaticNodeStream:function(){throw Error(r(208))},version:"16.13.1"};module.exports=Ce.default||Ce;
},{"object-assign":"YOwE","react":"HdMw"}],"gjZ7":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react-dom-server.browser.production.min.js");
},{"./cjs/react-dom-server.browser.production.min.js":"wi82"}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./story.jsx"),t=require("react-dom/server"),n=document.getElementById("start"),r=document.querySelectorAll(".dialog")[0],a=document.querySelectorAll(".choices")[0],c=document.getElementById("storyLog"),i=e.firstPage;n.addEventListener("click",function(){return d()});var d=function(){c.innerHTML="",i=e.firstPage,n.style.display="none",o()},o=function e(){a.innerHTML="",r.innerHTML=(0,t.renderToStaticMarkup)(i.dialog),i.choices.forEach(function(t){var n=document.createElement("span");n.classList.add("choice"),n.innerHTML=t.name,n.addEventListener("click",function(){s(i,t),i=t.targetPage,e()}),a.append(n)});var n=document.getElementById("play-again");n&&n.addEventListener("click",d)},s=function(e,n){var r=document.createElement("p");r.classList.add("latestPage"),r.innerHTML=(0,t.renderToStaticMarkup)(e.dialog);var a=document.createElement("p");a.classList.add("latestChoice"),a.innerHTML=n.action;var i=document.createElement("div");i.classList.add("history-item"),i.append(r,a),c.prepend(i)};
},{"./story.jsx":"ZZB0","react-dom/server":"gjZ7"}]},{},["KIzB"], null)
//# sourceMappingURL=/pacecar/main.43e497d5.js.map