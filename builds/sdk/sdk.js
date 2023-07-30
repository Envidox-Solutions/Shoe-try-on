/*! Copyright © 2023 WANNABY INC. All rights reserved. */
!function webpackUniversalModuleDefinition(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.wanna=n():t.wanna=n()}("undefined"!==typeof self?self:this,(()=>(()=>{var t={f5069e7eabaeac48d7bc:function(t,n,o){var i,c,u,l=o("031b33a991540ae8b415")
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("ca3732918b4d1ccb0e5d"),o("50b796ec98bdad71dd85"),o("4442267810857f1c7c50"),o("dd2fcb0208194e1ebe7c"),o("56af9af470f289f057ae"),o("57b02225047d8557a3ff"),o("6407dcc5f83ff7154bbc"),o("60bcb5ddcbc82eacb243"),o("916dcd4001fc29936364"),o("533c710eace156697fd4"),o("11cda0414325be50fdd7"),o("a36bbefd76113711353f")],i=function(t,n,i,c,u,E,D,R,G,U,W,K,Y){"use strict"
var Z=o("950d5b26fdbfeef2ad0c")
function ownKeys(t,n){var o=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{}
o%2?ownKeys(Object(i),!0).forEach((function(o){(0,n.default)(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return t}
var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,n,o){t[n]=o.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",E=c.asyncIterator||"@@asyncIterator",D=c.toStringTag||"@@toStringTag"
function define(t,n,o){return Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{define({},"")}catch(t){define=function define(t,n,o){return t[n]=o}}function wrap(t,n,o,c){var u=n&&n.prototype instanceof Generator?n:Generator,l=Object.create(u.prototype),E=new Context(c||[])
return i(l,"_invoke",{value:makeInvokeMethod(t,o,E)}),l}function tryCatch(t,n,o){try{return{type:"normal",arg:t.call(n,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=wrap
var R={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var G={}
define(G,u,(function(){return this}))
var U=Object.getPrototypeOf,W=U&&U(U(values([])))
W&&W!==n&&o.call(W,u)&&(G=W)
var K=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(G)
function defineIteratorMethods(t){["next","throw","return"].forEach((function(n){define(t,n,(function(t){return this._invoke(n,t)}))}))}function AsyncIterator(t,n){function invoke(i,c,u,E){var D=tryCatch(t[i],t,c)
if("throw"!==D.type){var R=D.arg,G=R.value
return G&&"object"==l(G)&&o.call(G,"__await")?n.resolve(G.__await).then((function(t){invoke("next",t,u,E)}),(function(t){invoke("throw",t,u,E)})):n.resolve(G).then((function(t){R.value=t,u(R)}),(function(t){return invoke("throw",t,u,E)}))}E(D.arg)}var c
i(this,"_invoke",{value:function value(t,o){function callInvokeWithMethodAndArg(){return new n((function(n,i){invoke(t,o,n,i)}))}return c=c?c.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(t,n,o){var i="suspendedStart"
return function(c,u){if("executing"===i)throw new Error("Generator is already running")
if("completed"===i){if("throw"===c)throw u
return doneResult()}for(o.method=c,o.arg=u;;){var l=o.delegate
if(l){var E=maybeInvokeDelegate(l,o)
if(E){if(E===R)continue
return E}}if("next"===o.method)o.sent=o._sent=o.arg
else if("throw"===o.method){if("suspendedStart"===i)throw i="completed",o.arg
o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg)
i="executing"
var D=tryCatch(t,n,o)
if("normal"===D.type){if(i=o.done?"completed":"suspendedYield",D.arg===R)continue
return{value:D.arg,done:o.done}}"throw"===D.type&&(i="completed",o.method="throw",o.arg=D.arg)}}}function maybeInvokeDelegate(t,n){var o=n.method,i=t.iterator[o]
if(void 0===i)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=void 0,maybeInvokeDelegate(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),R
var c=tryCatch(i,t.iterator,n.arg)
if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,R
var u=c.arg
return u?u.done?(n[t.resultName]=u.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,R):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,R)}function pushTryEntry(t){var n={tryLoc:t[0]}
1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{}
n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u]
if(n)return n.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var i=-1,c=function next(){for(;++i<t.length;)if(o.call(t,i))return next.value=t[i],next.done=!1,next
return next.value=void 0,next.done=!0,next}
return c.next=c}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,i(K,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),i(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,D,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor
return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,D,"GeneratorFunction")),t.prototype=Object.create(K),t},t.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,E,(function(){return this})),t.AsyncIterator=AsyncIterator,t.async=function(n,o,i,c,u){void 0===u&&(u=Promise)
var l=new AsyncIterator(wrap(n,o,i,c),u)
return t.isGeneratorFunction(o)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},defineIteratorMethods(K),define(K,D,"Generator"),define(K,u,(function(){return this})),define(K,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),o=[]
for(var i in n)o.push(i)
return o.reverse(),function next(){for(;o.length;){var t=o.pop()
if(t in n)return next.value=t,next.done=!1,next}return next.done=!0,next}},t.values=values,Context.prototype={constructor:Context,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function stop(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function dispatchException(t){if(this.done)throw t
var n=this
function handle(o,i){return u.type="throw",u.arg=t,n.next=o,i&&(n.method="next",n.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion
if("root"===c.tryLoc)return handle("end")
if(c.tryLoc<=this.prev){var l=o.call(c,"catchLoc"),E=o.call(c,"finallyLoc")
if(l&&E){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally")
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}}}},abrupt:function abrupt(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i]
if(c.tryLoc<=this.prev&&o.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var u=c
break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null)
var l=u?u.completion:{}
return l.type=t,l.arg=n,u?(this.method="next",this.next=u.finallyLoc,R):this.complete(l)},complete:function complete(t,n){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),R},finish:function finish(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),resetTryEntry(o),R}},catch:function _catch(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.tryLoc===t){var i=o.completion
if("throw"===i.type){var c=i.arg
resetTryEntry(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,n,o){return this.delegate={iterator:values(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=void 0),R}},t}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,n=Z(n),i=Z(i),c=Z(c),D=Z(D)
var Q=function App(t){var n=t.font,o=t.theme,l=t.onError,Z=t.onLoadingSuccess,Q=(0,E.useState)(!1),J=(0,c.default)(Q,2),X=J[0],ee=J[1],te=(0,E.useState)(0),re=(0,c.default)(te,2),ne=re[0],oe=re[1],ie=(0,E.useRef)(null),ae=(0,R.usePortraitOrientation)(),ce=function(){var n=(0,i.default)(_regeneratorRuntime().mark((function _callee(){var n,o,i
return _regeneratorRuntime().wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,(0,U.getDeviceData)()
case 3:if(n=c.sent,(o=n.device).screenmmheight&&o.screenmmwidth){c.next=7
break}throw new Error("Couldn't detect device")
case 7:i=Math.max(window.screen.width,window.screen.height)/Math.max(o.screenmmwidth,o.screenmmheight),oe(i),ee(!0),null===Z||void 0===Z||Z(),t.sendLogEvent(W.LogEvent.Started),c.next=17
break
case 14:c.prev=14,c.t0=c.catch(0),l(c.t0)
case 17:case"end":return c.stop()}}),_callee,null,[[0,14]])})))
return function fetchDeviceData(){return n.apply(this,arguments)}}()
return(0,E.useLayoutEffect)((function(){var t=ie.current
t&&(document.documentElement.classList.add("wanna-theme-".concat(o)),null!==n&&void 0!==n&&n.family&&(0,i.default)(_regeneratorRuntime().mark((function _callee2(){var o,i,c
return _regeneratorRuntime().wrap((function _callee2$(u){for(;;)switch(u.prev=u.next){case 0:if(o=n.file,i=n.family,u.prev=1,!n.file){u.next=7
break}return c=new FontFace(i,"url(".concat(o,")")),u.next=6,c.load()
case 6:document.fonts.add(c)
case 7:t.style.fontFamily=i,u.next=13
break
case 10:u.prev=10,u.t0=u.catch(1),console.warn("Can't download and set the font \"".concat(i,'" by url "').concat(o,'"'))
case 13:case"end":return u.stop()}}),_callee2,null,[[1,10]])})))())}),[o,n]),(0,u.jsxs)("div",{className:D.default.container,ref:ie,children:[(0,u.jsx)("script",{async:!0,crossOrigin:"anonymous",src:U.deviceDetectionEndpoint,onLoad:ce,onError:function onError(t){return l(t)}}),(0,u.jsxs)(G.LabelProvider,{labels:t.labels,children:[!ae&&(0,u.jsx)(Y.PortraitOrientation,{}),X&&ae&&(0,u.jsx)(K.WristMeasure,_objectSpread({pixelsInOneMM:ne},t))]})]})}
t.App=Q},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"90c9beed76fb76913278":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("f5069e7eabaeac48d7bc")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"App",{enumerable:!0,get:function get(){return n.App}})})?i.apply(n,c):i)||(t.exports=u)},"93d32413f7ac81002180":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("dd2fcb0208194e1ebe7c"),o("593c4911498739404be2"),o("6df7b09fa910379556cd"),o("1e571a907a28a905c0b6")],void 0===(u="function"===typeof(i=function(t,n,i,c,u){"use strict"
var l=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.PortraitOrientation=void 0,u=l(u)

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var E=function PortraitOrientation(){return(0,n.jsxs)("div",{className:u.default.container,"data-testid":"portraitOrientation",children:[(0,n.jsx)("p",{className:u.default.label,children:(0,n.jsx)(c.Text,{labelKey:"rotateThePhoneToTryOn"})}),(0,n.jsx)(i.RotateDeviceIcon,{})]})}
t.PortraitOrientation=E})?i.apply(n,c):i)||(t.exports=u)},"593c4911498739404be2":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("dd2fcb0208194e1ebe7c")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.RotateDeviceIcon=void 0

;// Copyright © 2023 WANNABY Inc. All rights reserved.
var o=function RotateDeviceIcon(){return(0,n.jsxs)("svg",{width:"84",height:"83",viewBox:"0 0 84 83",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M78.0001 1.99994H39.0237C36.8145 1.99994 35.0237 3.7908 35.0237 5.99994V76.9999C35.0237 79.2091 36.8145 80.9999 39.0237 80.9999H78.0001C80.2092 80.9999 82.0001 79.2091 82.0001 76.9999V5.99994C82.0001 3.7908 80.2092 1.99994 78.0001 1.99994ZM39.0237 -6.10352e-05C35.71 -6.10352e-05 33.0237 2.68623 33.0237 5.99994V76.9999C33.0237 80.3136 35.71 82.9999 39.0237 82.9999H78.0001C81.3138 82.9999 84.0001 80.3136 84.0001 76.9999V5.99994C84.0001 2.68623 81.3138 -6.10352e-05 78.0001 -6.10352e-05H39.0237Z",fill:"currentColor"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M50.1936 0.892426V4.24726C50.1936 4.79955 50.6413 5.24726 51.1936 5.24726H65.9355C66.4878 5.24726 66.9355 4.79955 66.9355 4.24727V0.892426H68.9355V4.24727C68.9355 5.90412 67.5924 7.24726 65.9355 7.24726H51.1936C49.5367 7.24726 48.1936 5.90412 48.1936 4.24726V0.892426H50.1936Z",fill:"currentColor"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 82.9999C3.13401 82.9999 -1.36992e-07 79.8659 -3.0598e-07 75.9999L-1.87959e-06 39.9999C-2.04858e-06 36.1339 3.134 32.9999 7 32.9999L34.7323 32.9999L34.7323 34.9999L7 34.9999C4.23857 34.9999 2 37.2385 2 39.9999L2 75.9999C2 78.7614 4.23858 80.9999 7 80.9999L43 80.9999L43 82.9999L7 82.9999Z",fill:"currentColor"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 66.3817L4.35484 66.3817C4.90712 66.3817 5.35484 65.9339 5.35484 65.3817L5.35484 50.6397C5.35484 50.0874 4.90712 49.6397 4.35484 49.6397L0.999999 49.6397L0.999999 47.6397L4.35484 47.6397C6.01169 47.6397 7.35484 48.9829 7.35484 50.6397L7.35484 65.3817C7.35484 67.0385 6.01169 68.3817 4.35484 68.3817L1 68.3817L1 66.3817Z",fill:"currentColor"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.1382 4.71794C20.5288 4.32742 21.1619 4.32742 21.5524 4.71794L26.9986 10.1641C27.3892 10.5547 27.3892 11.1878 26.9986 11.5784L21.5524 17.0245C21.1619 17.4151 20.5288 17.4151 20.1382 17.0245C19.7477 16.634 19.7477 16.0009 20.1382 15.6103L24.8773 10.8712L20.1382 6.13216C19.7477 5.74163 19.7477 5.10847 20.1382 4.71794Z",fill:"currentColor"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.2206 11.8712C12.3303 11.8712 11.4764 12.2249 10.8469 12.8545C10.2173 13.484 9.86365 14.3379 9.86365 15.2282V25.467C9.86365 26.0193 9.41593 26.467 8.86365 26.467C8.31136 26.467 7.86365 26.0193 7.86365 25.467V15.2282C7.86365 13.8074 8.42804 12.4449 9.43266 11.4403C10.4373 10.4356 11.7998 9.87125 13.2206 9.87125H26.2915C26.8438 9.87125 27.2915 10.319 27.2915 10.8712C27.2915 11.4235 26.8438 11.8712 26.2915 11.8712H13.2206Z",fill:"currentColor"})]})}
t.RotateDeviceIcon=o})?i.apply(n,c):i)||(t.exports=u)},a36bbefd76113711353f:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("93d32413f7ac81002180")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PortraitOrientation",{enumerable:!0,get:function get(){return n.PortraitOrientation}})})?i.apply(n,c):i)||(t.exports=u)},"9d6064de926fb87da58b":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("dd2fcb0208194e1ebe7c"),o("56af9af470f289f057ae"),o("4d102f42dbeb814e5372")],void 0===(u="function"===typeof(i=function(t,n,o,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0
var c=function Text(t){var c=t.labelKey,u=(0,o.useContext)(i.LabelsContext)
return(0,n.jsx)(n.Fragment,{children:u[c]})}
t.Text=c})?i.apply(n,c):i)||(t.exports=u)},"6df7b09fa910379556cd":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("9d6064de926fb87da58b")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Text",{enumerable:!0,get:function get(){return n.Text}})})?i.apply(n,c):i)||(t.exports=u)},"4071e5fef68907ea5435":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("dd2fcb0208194e1ebe7c"),o("bcc148db8dd5a199ff67"),o("afe357255d5776db56b3")],void 0===(u="function"===typeof(i=function(t,n,i,c){"use strict"
var u=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.Tick=void 0,i=u(i),c=u(c)

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var l=function Tick(t){var o=t.letter,u=t.index,l=t.notchHeight,E=Math.round((u+1)*l*2)
return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:(0,i.default)(c.default.tick,c.default.tick_small),style:{top:Math.round(E-l)}}),(0,n.jsx)("div",{className:c.default.tick,style:{top:E},children:(0,n.jsx)("span",{className:c.default.tickLetter,children:o})}),(0,n.jsx)("div",{className:(0,i.default)(c.default.tick,c.default.tick_small,c.default.tick_right),style:{top:Math.round(E-l)}}),(0,n.jsx)("div",{className:(0,i.default)(c.default.tick,c.default.tick_right),style:{top:E}})]})}
t.Tick=l})?i.apply(n,c):i)||(t.exports=u)},b3512f22fb3d7ea68e33:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("ca3732918b4d1ccb0e5d"),o("4442267810857f1c7c50"),o("dd2fcb0208194e1ebe7c"),o("56af9af470f289f057ae"),o("bcc148db8dd5a199ff67"),o("7c349fe9244bfa7437d2"),o("ba03f6ccf36e5f5d648b"),o("2cd9026f20086f6bb04a"),o("a80db40cf6504a41f734"),o("f41104c329b010a6d259"),o("533c710eace156697fd4"),o("6df7b09fa910379556cd"),o("4071e5fef68907ea5435"),o("afe357255d5776db56b3")],void 0===(u="function"===typeof(i=function(t,n,i,c,u,l,E,D,R,G,U,W,K,Y,Z){"use strict"
var Q=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.WristMeasure=void 0,n=Q(n),i=Q(i),l=Q(l),E=Q(E),D=Q(D),R=Q(R),Z=Q(Z)

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var J=14,X=Array.from({length:26},(function(t,n){return String.fromCharCode(n+65)})),ee=function WristMeasure(t){var o=t.pixelsInOneMM,Q=t.startWristSize,ee=t.styles,te=t.onSaveClick,re=t.onCloseClick,ne=t.onInfoClick,oe=t.sendLogEvent,ie=5*o,ae=2*ie,ce=8*ie,se=(0,u.useRef)(null),ue=(0,u.useRef)(null),le=(0,u.useRef)(null),fe=(0,u.useRef)(null),de=(0,u.useState)(!0),pe=(0,i.default)(de,2),_e=pe[0],he=pe[1],ve=(0,u.useState)(Math.max(null!==Q&&void 0!==Q?Q:0,ce/o)),Ee=(0,i.default)(ve,2),ye=Ee[0],be=Ee[1],me=(0,u.useMemo)((function(){return(0,U.getCustomStyles)(ee)}),[ee]),ge=(0,u.useCallback)((function(t){if(ue.current&&se.current){if(le.current){var n=ue.current,i=t.clientY-le.current,c=(0,G.clamp)(n.offsetHeight+i,ce,se.current.offsetHeight-J/2)
n.style.height="".concat(c,"px"),be(c/o)}le.current=t.clientY,fe.current&&cancelAnimationFrame(fe.current),he(!1)}}),[he]),Ae=(0,u.useCallback)((function(){var t=ue.current
if(t){var n=t.offsetHeight,i=n%ie,c=i>ie/2?n+(ie-i):n-i,u=performance.now(),l=function fixRuler(i){var l=(0,G.clamp)((i-u)/100,0,1),E=n+(c-n)*l
t.style.height="".concat(E,"px"),l<1&&(fe.current=requestAnimationFrame(fixRuler)),be(E/o)}
fe.current=requestAnimationFrame(l),le.current=null}}),[]);(0,u.useLayoutEffect)((function(){var t=se.current,n=ue.current
if(t&&n){var i=Math.max((null!==Q&&void 0!==Q?Q:0)*o,ce),c=t.offsetHeight,u=Math.min(ae*X.length,Math.floor(c/ae)*ae)+J/2
return t.style.height="".concat(u,"px"),n.style.height="".concat(i,"px"),function(){fe.current&&cancelAnimationFrame(fe.current)}}}),[])
var we=(0,u.useCallback)((function(){oe(W.LogEvent.Completed),te(Math.round(ye))}),[te,ye]),Te=(0,u.useCallback)((function(){oe(W.LogEvent.Skipped),re()}),[re]),Ce=function renderTicks(){return X.map((function(t,n){return(0,c.jsx)(Y.Tick,{letter:t,index:n,notchHeight:ie},t)}))}
return(0,c.jsxs)("div",{className:Z.default.layout,style:me,"data-testid":"wristMeasure",children:[(0,c.jsxs)("header",{className:Z.default.header,children:[(0,c.jsx)("button",{className:(0,l.default)(Z.default.headerButton,(0,n.default)({},Z.default.headerButton_hidden,!ne)),onClick:function onClick(){return null===ne||void 0===ne?void 0:ne()},"data-testid":"infoButton",children:(0,c.jsx)(D.default,{})}),(0,c.jsxs)("span",{className:Z.default.headerText,children:[(0,c.jsx)(K.Text,{labelKey:"wristMeasureHeader"}),(0,c.jsx)("span",{className:Z.default.headerTextArrow,children:(0,c.jsx)(R.default,{})})]}),(0,c.jsx)("button",{className:Z.default.headerButton,onClick:Te,"data-testid":"closeButton",children:(0,c.jsx)(E.default,{})})]}),(0,c.jsxs)("section",{className:Z.default.content,onPointerMove:ge,onPointerUp:Ae,children:[(0,c.jsxs)("main",{className:Z.default.main,children:[(0,c.jsx)("div",{ref:se,className:Z.default.notches,children:Ce()}),(0,c.jsxs)("div",{className:Z.default.ruler,ref:ue,children:[(0,c.jsx)("div",{className:Z.default.rulerBackground}),(0,c.jsxs)("div",{className:Z.default.rulerContent,children:[(0,c.jsx)("div",{className:Z.default.rulerCircle}),(0,c.jsx)("div",{className:(0,l.default)(Z.default.rulerText,(0,n.default)({},Z.default.rulerTextHidden,!_e)),children:(0,c.jsx)(K.Text,{labelKey:"wristMeasureRulerText"})})]}),(0,c.jsx)("div",{className:Z.default.overlayNotches,children:Ce()})]})]}),(0,c.jsx)("footer",{className:Z.default.footer,children:(0,c.jsx)("button",{className:Z.default.footerButton,onClick:we,"data-testid":"saveButton",children:(0,c.jsx)(K.Text,{labelKey:"wristMeasureSave"})})})]})]})}
t.WristMeasure=ee})?i.apply(n,c):i)||(t.exports=u)},"11cda0414325be50fdd7":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("b3512f22fb3d7ea68e33")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WristMeasure",{enumerable:!0,get:function get(){return n.WristMeasure}})})?i.apply(n,c):i)||(t.exports=u)},"6407dcc5f83ff7154bbc":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("4442267810857f1c7c50"),o("56af9af470f289f057ae"),o("a80db40cf6504a41f734"),o("90236fa64d83c40b20a9")],void 0===(u="function"===typeof(i=function(t,n,i,c,u){"use strict"
var l=o("950d5b26fdbfeef2ad0c")

;// Copyright © 2022 WANNABY Inc. All rights reserved.
function usePortraitOrientation(){var t=(0,i.useState)(!0),o=(0,n.default)(t,2),l=o[0],E=o[1]
return(0,i.useEffect)((function(){var t=(0,c.throttle)((function(){E(u.isPortraitWindow)}),300)
return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}),[]),l}Object.defineProperty(t,"__esModule",{value:!0}),t.usePortraitOrientation=usePortraitOrientation,n=l(n)})?i.apply(n,c):i)||(t.exports=u)},"60bcb5ddcbc82eacb243":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("ca3732918b4d1ccb0e5d"),o("dd2fcb0208194e1ebe7c"),o("4d102f42dbeb814e5372"),o("230186eae70e403fd343")],i=function(t,n,i,c,u){"use strict"
var l=o("950d5b26fdbfeef2ad0c")
function ownKeys(t,n){var o=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{}
o%2?ownKeys(Object(i),!0).forEach((function(o){(0,n.default)(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.LabelProvider=void 0,n=l(n),u=l(u)
var E=function LabelProvider(t){return(0,i.jsx)(c.LabelsContext.Provider,{value:_objectSpread(_objectSpread({},u.default),t.labels),children:t.children})}
t.LabelProvider=E},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"4d102f42dbeb814e5372":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("e692ee41a9a53b261469"),o("230186eae70e403fd343")],void 0===(u="function"===typeof(i=function(t,n,i){"use strict"
var c=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.LabelsContext=void 0,i=c(i)

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var u=(0,n.createContext)(i.default)
t.LabelsContext=u})?i.apply(n,c):i)||(t.exports=u)},"4b571ae1f0dbca84775f":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("ca3732918b4d1ccb0e5d"),o("cdd5bf261f4188f3fa55"),o("dd2fcb0208194e1ebe7c"),o("e692ee41a9a53b261469"),o("0c429deb8efa6ecca416"),o("90c9beed76fb76913278")],i=function(t,n,i,c,u,l,E){"use strict"
var D=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.showWristMeasurement=void 0,n=D(n),i=D(i)
var R=["container","theme"]
function ownKeys(t,n){var o=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{}
o%2?ownKeys(Object(i),!0).forEach((function(o){(0,n.default)(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}var G=function showWristMeasurement(t){try{var n=t.container,o=t.theme,D=(0,i.default)(t,R)
checkParams(t)
var G=document.getElementById(n)
if(!G)throw new Error("Couldn't find element with id '".concat(n,"'"));(0,u.render)((0,c.jsx)(E.App,_objectSpread({theme:null!==o&&void 0!==o?o:l.THEME_LIGHT},D)),G)}catch(n){t.onError(n)}}
function checkParams(t){if(!t.container)throw new Error("'container' should be specified")
if(!t.onCloseClick)throw new Error("'onCloseClick' should be specified")
if("function"!==typeof t.onCloseClick)throw new Error("'onCloseClick' must be a function")
if(!t.onSaveClick)throw new Error("'onSaveClick' should be specified")
if("function"!==typeof t.onSaveClick)throw new Error("'onSaveClick' must be a function")
if(t.onInfoClick&&"function"!==typeof t.onInfoClick)throw new Error("'onInfoClick' must be a function")
if(t.onLoadingSuccess&&"function"!==typeof t.onLoadingSuccess)throw new Error("'onLoadingSuccess' must be a function")
if(t.theme&&![l.THEME_LIGHT,l.THEME_DARK].includes(t.theme))throw new Error("'theme' must be ".concat(l.THEME_LIGHT," or ").concat(l.THEME_DARK))}t.showWristMeasurement=G},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"533c710eace156697fd4":function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[n],void 0===(c="function"===typeof(o=function(t){"use strict"

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var n
Object.defineProperty(t,"__esModule",{value:!0}),t.LogEvent=void 0,t.LogEvent=n,function(t){t.Started="wrist_measure_started",t.Completed="wrist_measure_completed",t.Skipped="wrist_measure_skipped"}(n||(t.LogEvent=n={}))})?o.apply(n,i):o)||(t.exports=c)},"892f5ff50ca1423dc606":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("4442267810857f1c7c50")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
var i=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeColor=t.hexToRgb=t.getRelativeLuminance=t.getContrastRatio=t.getColorsContrastRatio=void 0,n=i(n)

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var c=function normalizeColor(t){return t.startsWith("#")?t:"#".concat(t)}
t.normalizeColor=c
var u=function getColorsContrastRatio(t,n){return E(l(D(t)),l(D(n)))}
t.getColorsContrastRatio=u
var l=function getRelativeLuminance(t){var o=[t.r,t.g,t.b].map((function(t){var n=t/255
return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)})),i=(0,n.default)(o,3)
return.2126*i[0]+.7152*i[1]+.0722*i[2]}
t.getRelativeLuminance=l
var E=function getContrastRatio(t,n){return t>n?(n+.05)/(t+.05):(t+.05)/(n+.05)}
t.getContrastRatio=E
var D=function hexToRgb(t){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i
t=t.trim().replace(n,(function(t,n,o,i){return n+n+o+o+i+i}))
var o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
if(!o)throw new Error("'".concat(t,"' is invalid hex color"))
return{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}}
t.hexToRgb=D})?i.apply(n,c):i)||(t.exports=u)},f41104c329b010a6d259:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("892f5ff50ca1423dc606")],void 0===(u="function"===typeof(i=function(t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomStyles=void 0

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var o=function getCustomStyles(t){var o={}
if(!t)return{}
var c=t.rulerFillColor,u=t.rulerColor,l=t.iconsColor,E=t.buttonFillColor,D=t.buttonRadius,R=t.buttonTextColor,G=t.buttonStrokeColor
if(u&&(o["--ruler-color"]=(0,n.normalizeColor)(u),o["--ruler-notches-color"]=(0,n.normalizeColor)(u)),c){o["--ruler-fill-color"]=(0,n.normalizeColor)(c)
var U=getComputedStyle(document.documentElement)
o["--overlay-notch-color"]=i(c,U.getPropertyValue("--overlay-notch-color-light-theme"),U.getPropertyValue("--overlay-notch-color-dark-theme"))}return l&&(o["--icons-color"]=(0,n.normalizeColor)(l)),E&&(o["--button-fill-color"]=(0,n.normalizeColor)(E)),R&&(o["--button-text-color"]=(0,n.normalizeColor)(R)),G&&(o["--button-stroke-color"]=(0,n.normalizeColor)(G)),void 0!==D&&(o["--button-radius"]="".concat(D,"px")),o}
t.getCustomStyles=o
var i=function getMoreContrastingColor(t,o,i){return(0,n.getColorsContrastRatio)(o,t)<(0,n.getColorsContrastRatio)(i,t)?o:i}})?i.apply(n,c):i)||(t.exports=u)},"916dcd4001fc29936364":function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[n],void 0===(c="function"===typeof(o=function(t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getDeviceData=t.deviceDetectionEndpoint=void 0

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var n="https://cloud.51degrees.com/api/v4/AQQFFOwREOuYgtpr20g.js"
t.deviceDetectionEndpoint=n
var o=function getDeviceData(){return new Promise((function(t,n){try{window.fod.complete((function(n){return t(n)}))}catch(t){n(t)}}))}
t.getDeviceData=o})?o.apply(n,i):o)||(t.exports=c)},"7c349fe9244bfa7437d2":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("e692ee41a9a53b261469")],i=function(t,n){"use strict"
function _extends(){return _extends=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]
for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},_extends.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=function SvgCloseIcon(t){return(0,n.h)("svg",_extends({width:40,height:40,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),(0,n.h)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m20 21.415 6.76 6.762 1.415-1.414L21.413 20l6.762-6.763-1.414-1.414L20 18.586l-6.761-6.763-1.415 1.414L18.585 20l-6.762 6.763 1.415 1.414 6.761-6.762Z",fill:"currentColor"}))}
t.default=o},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},ba03f6ccf36e5f5d648b:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("e692ee41a9a53b261469")],i=function(t,n){"use strict"
function _extends(){return _extends=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]
for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},_extends.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=function SvgInfoIcon(t){return(0,n.h)("svg",_extends({width:44,height:44,xmlns:"http://www.w3.org/2000/svg"},t),(0,n.h)("circle",{cx:22,cy:22,r:11,stroke:"currentColor",strokeWidth:2,fill:"none"}),(0,n.h)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Z",fill:"currentColor"}))}
t.default=o},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"2cd9026f20086f6bb04a":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[n,o("e692ee41a9a53b261469")],i=function(t,n){"use strict"
function _extends(){return _extends=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]
for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},_extends.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=function SvgSmallArrow(t){return(0,n.h)("svg",_extends({width:12,height:12,xmlns:"http://www.w3.org/2000/svg"},t),(0,n.h)("path",{d:"M6.652 8.943 10.76 3.61A1 1 0 0 0 9.967 2h-8a1 1 0 0 0-.807 1.59l3.892 5.333a1 1 0 0 0 1.6.02Z",fill:"currentColor"}))}
t.default=o},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"831395ee644cb077ead0":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
var l=o("031b33a991540ae8b415")
!function(l,E){c=[n,o("e2def955838128a34a31"),o("33a1f57322c9f05baede"),o("17be7f514f0c2961a0dd"),o("acbc614938ff43fc0009"),o("1f638d9643f7d6aedeab")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,E){var D=o("950d5b26fdbfeef2ad0c")
function _getRequireWildcardCache(t){if("function"!==typeof WeakMap)return null
var n=new WeakMap,o=new WeakMap
return(_getRequireWildcardCache=function _getRequireWildcardCache(t){return t?o:n})(t)}function _interopRequireWildcard(t,n){if(!n&&t&&t.__esModule)return t
if(null===t||"object"!==l(t)&&"function"!==typeof t)return{default:t}
var o=_getRequireWildcardCache(n)
if(o&&o.has(t))return o.get(t)
var i={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor
for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var E=c?Object.getOwnPropertyDescriptor(t,u):null
E&&(E.get||E.set)?Object.defineProperty(i,u,E):i[u]=t[u]}return i.default=t,o&&o.set(t,i),i}
// Copyright © 2021 WANNABY Inc. All rights reserved.
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=D(n),i=D(i),c=D(c),E=_interopRequireWildcard(E)
var R=function(){function EventEmitter(){(0,i.default)(this,EventEmitter),this.events={},this.verbose=!1,this.__setDefaultErrorListener()}return(0,c.default)(EventEmitter,[{key:"__setDefaultErrorListener",value:function __setDefaultErrorListener(){this.on(u.ERROR,this.__defaultErrorListener.bind(this))}},{key:"__defaultErrorListener",value:function __defaultErrorListener(t){if(this.events.error&&1===this.events.error.length){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i]
console.error(t,"details:",o)}}},{key:"__addListener",value:function __addListener(t,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
this.events[t]=this.events[t]||[],o?this.events[t].unshift(n):this.events[t].push(n)}},{key:"on",value:function on(t,n){return this.__addListener(t,n),this}},{key:"prependListener",value:function prependListener(t,n){return this.__addListener(t,n,!0),this}},{key:"once",value:function once(t,n){var o=this,i=function selfRemovedListener(){n.apply(void 0,arguments),o.off(t,selfRemovedListener)}
return this.__addListener(t,i),this}},{key:"off",value:function off(t,n){var o=this.events[t]||[]
return this.events[t]=o.filter((function(t){return t!==n})),0===this.events[t].length&&delete this.events[t],this}},{key:"removeAllListeners",value:function removeAllListeners(t){return delete this.events[t],t===u.ERROR&&this.__setDefaultErrorListener(),this}},{key:"clearAll",value:function clearAll(){return this.events={},this.__setDefaultErrorListener(),this}},{key:"emit",value:function emit(t){for(var o=this,i=arguments.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=arguments[l]
var D=this.events[t]
if(this.verbose&&t!==E.EVENT_LOG&&(t||console.warn("Empty event param."),console.log("[".concat(this.constructor.name,"] Emit event: [").concat(t,"]. Data: ").concat(JSON.stringify(c)))),t===E.EVENT_LOG){var R=c[0]
if("object"===(0,n.default)(R)){var G=R.type,U=R.message
if(!R.verbose||!this.verbose)return
U&&("log"===G||"warn"===G||"info"===G||"error"===G?console[G]("[".concat(this.constructor.name,"] ").concat(U)):console.log("[".concat(this.constructor.name,"] ").concat(U)))}else R&&console.log("[".concat(this.constructor.name,"] ").concat(R))}return!!D&&(D.forEach((function(n){try{n.apply(void 0,c)}catch(i){o.emit(u.ERROR,i,{event:t,data:c,callback:n})}})),!0)}}]),EventEmitter}(),G=R
t.default=G}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"1ecb9fde0b87f0f847c8":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("7bc6255b1b9a1c66e838"),o("33a1f57322c9f05baede"),o("17be7f514f0c2961a0dd"),o("b655b2bc1bdce5a9c4c9"),o("61cea65a22ee508ba41d"),o("3c108274403b90131be8"),o("46cb486d8aa85ffd8cb8"),o("831395ee644cb077ead0")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,l,E,D,R){var G=o("950d5b26fdbfeef2ad0c")
function _createSuper(t){var n=_isNativeReflectConstruct()
return function _createSuperInternal(){var o,i=(0,D.default)(t)
if(n){var c=(0,D.default)(this).constructor
o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments)
return(0,E.default)(this,o)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=G(n),i=G(i),c=G(c),u=G(u),l=G(l),E=G(E),D=G(D)
var U=function(t){(0,l.default)(MessageEmitter,t)
var o=_createSuper(MessageEmitter)
function MessageEmitter(){var t
return(0,i.default)(this,MessageEmitter),(t=o.call(this))._setDefaultValues(),t.__handleEvent=t.__handleEvent.bind((0,u.default)(t)),t}return(0,c.default)(MessageEmitter,[{key:"_setDefaultValues",value:function _setDefaultValues(){this.origin=null,this.targetToPostElement=null,this.targetToListenElement=window}},{key:"initListener",value:function initListener(t){var n=t.origin,o=t.targetToPostElement
return this.targetToPostElement=o,this.origin=n,this.targetToListenElement.addEventListener("message",this.__handleEvent,!1),this}},{key:"__handleEvent",value:function __handleEvent(t){if(this.origin===t.origin||"*"===this.origin){var o=t.data
if(o&&o.type){var i=o.type,c=o.args,u=void 0===c?[]:c
this.emit.apply(this,[i].concat((0,n.default)(u),[t]))}}}},{key:"remoteEmit",value:function remoteEmit(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i]
try{this.targetToPostElement.postMessage({type:t,args:o},this.origin)}catch(t){}return this}},{key:"destroy",value:function destroy(){this.targetToListenElement.removeEventListener("message",this.__handleEvent,!1),this.clearAll(),this._setDefaultValues()}}]),MessageEmitter}((R=G(R)).default),W=U
t.default=W}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},acbc614938ff43fc0009:function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.RESOURCE_TYPE_MODEL=t.ERROR=void 0

;// Copyright © 2021 WANNABY Inc. All rights reserved.
var n="error"
t.ERROR=n
var o="model"
t.RESOURCE_TYPE_MODEL=o}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},"9d1d3e6683fdb558ac36":function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var n={ONBOARDING_3D_MODE_PINCH:"pinch",ONBOARDING_3D_MODE_DOUBLE_CLICK:"double_click"}
t.default=n}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},"1f638d9643f7d6aedeab":function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT_WARMED_UP=t.EVENT_VIDEO_INIT_FAILED=t.EVENT_VIDEO_INITIALIZED=t.EVENT_TRY_ON=t.EVENT_TOGGLE_DIMENSIONS_SUCCESS=t.EVENT_TOGGLE_DIMENSIONS_FAILED=t.EVENT_TOGGLE_DIMENSIONS_ACKNOWLEDGE=t.EVENT_TOGGLE_DIMENSIONS=t.EVENT_TAKE_PHOTO_ACKNOWLEDGE=t.EVENT_TAKE_PHOTO=t.EVENT_STOP_PIPELINE_ACKNOWLEDGE=t.EVENT_STOP_PIPELINE=t.EVENT_START_PIPELINE_ACKNOWLEDGE=t.EVENT_START_PIPELINE=t.EVENT_START_INIT=t.EVENT_SET_POI_FAILED=t.EVENT_SET_POI_ACKNOWLEDGE=t.EVENT_SET_POI=t.EVENT_SET_MODE_FAILED=t.EVENT_SET_MODE_ACKNOWLEDGE=t.EVENT_SET_MODEL_ACKNOWLEDGE=t.EVENT_SET_MODEL=t.EVENT_SET_MODE=t.EVENT_SDK_LOADED=t.EVENT_RESOURCE_LOAD_STARTED=t.EVENT_RESOURCE_LOAD_PROGRESS=t.EVENT_RESOURCE_LOAD_FINISHED=t.EVENT_RESOURCE_LOAD_FAILED=t.EVENT_POI_SET=t.EVENT_PIPELINE_STOP_FAILED=t.EVENT_PIPELINE_STOPPED=t.EVENT_PIPELINE_START_FAILED=t.EVENT_PIPELINE_STARTED=t.EVENT_PIPELINE_PAUSE_FAILED=t.EVENT_PIPELINE_PAUSED=t.EVENT_PHOTO_TAKE_FAILED=t.EVENT_PHOTO_TAKEN=t.EVENT_PAUSE_PIPELINE_ACKNOWLEDGE=t.EVENT_PAUSE_PIPELINE=t.EVENT_ONBOARDING_SUCCESS=t.EVENT_ONBOARDING_FAILED=t.EVENT_ONBOARDING_ACKNOWLEDGE=t.EVENT_ONBOARDING=t.EVENT_OBJECT_DISAPPEARED=t.EVENT_OBJECT_APPEARED=t.EVENT_MODE_SET=t.EVENT_MODEL_SET_FAILED=t.EVENT_MODEL_SET=t.EVENT_LOG_WRIST_MEASURE_EVENT_SUCCESS=t.EVENT_LOG_WRIST_MEASURE_EVENT_FAILED=t.EVENT_LOG_WRIST_MEASURE_EVENT_ACKNOWLEDGE=t.EVENT_LOG_WRIST_MEASURE_EVENT=t.EVENT_LOG_3D_VIEWER_DURATION_SENT=t.EVENT_LOG_3D_VIEWER_DURATION_FAILED=t.EVENT_LOG_3D_VIEWER_DURATION_ACKNOWLEDGE=t.EVENT_LOG_3D_VIEWER_DURATION=t.EVENT_LOG=t.EVENT_LOAD_RESOURCE_MODEL_ACKNOWLEDGE=t.EVENT_LOAD_RESOURCE_MODEL=t.EVENT_LAZY_INIT_FAILED=t.EVENT_INTERACTION_STARTED=t.EVENT_INTERACTION_ENDED=t.EVENT_INIT_VIDEO_ACKNOWLEDGE=t.EVENT_INIT_VIDEO=t.EVENT_INIT_STARTED=t.EVENT_INIT_FINISHED=t.EVENT_INIT_FAILED=t.EVENT_GET_CAMERAS_LIST_ACKNOWLEDGE=t.EVENT_GET_CAMERAS_LIST=t.EVENT_FREEZE_ON_CAMERA_CHANGE=t.EVENT_FRAME_SIZE_CHANGED=t.EVENT_ERROR=t.EVENT_DESTROY_FAILED=t.EVENT_DESTROY_ACKNOWLEDGE=t.EVENT_DESTROYED=t.EVENT_DESTROY=t.EVENT_DEBUG_SUCCESS=t.EVENT_DEBUG_FAILED=t.EVENT_DEBUG=t.EVENT_CHANGE_CAMERA_ACKNOWLEDGE=t.EVENT_CHANGE_CAMERA=t.EVENT_CAMERA_ZOOM_FAILED=t.EVENT_CAMERA_ZOOM_ACKNOWLEDGE=t.EVENT_CAMERA_ZOOMED=t.EVENT_CAMERA_ZOOM=t.EVENT_CAMERA_CHANGE_FAILED=t.EVENT_CAMERA_CHANGED=t.EVENT_CAMERA_ACCESS_REQUESTED=t.EVENT_CAMERA_ACCESS_GRANTED=t.EVENT_CAMERA_ACCESS_FAILED=t.EVENT_CAMERAS_LIST_FAILED=t.EVENT_CAMERAS_LIST=t.EVENT_3D_SUCCEEDED=void 0

;// Copyright © 2021 WANNABY Inc. All rights reserved.
var n="EVENT",o="".concat("WANNA","_").concat(n),i="".concat(o,"_SDK_LOADED")
t.EVENT_SDK_LOADED=i
var c="".concat(o,"_LOAD_RESOURCE_MODEL")
t.EVENT_LOAD_RESOURCE_MODEL=c
var u="".concat(o,"_LOAD_RESOURCE_MODEL_ACKNOWLEDGE")
t.EVENT_LOAD_RESOURCE_MODEL_ACKNOWLEDGE=u
var l="".concat(o,"_RESOURCE_LOAD_STARTED")
t.EVENT_RESOURCE_LOAD_STARTED=l
var E="".concat(o,"_RESOURCE_LOAD_PROGRESS")
t.EVENT_RESOURCE_LOAD_PROGRESS=E
var D="".concat(o,"_RESOURCE_LOAD_FINISHED")
t.EVENT_RESOURCE_LOAD_FINISHED=D
var R="".concat(o,"_RESOURCE_LOAD_FAILED")
t.EVENT_RESOURCE_LOAD_FAILED=R
var G="".concat(o,"_START_INIT")
t.EVENT_START_INIT=G
var U="".concat(o,"_INIT_STARTED")
t.EVENT_INIT_STARTED=U
var W="".concat(o,"_INIT_FINISHED")
t.EVENT_INIT_FINISHED=W
var K="".concat(o,"_INIT_FAILED")
t.EVENT_INIT_FAILED=K
var Y="".concat(o,"_LAZY_INIT_FAILED")
t.EVENT_LAZY_INIT_FAILED=Y
var Z="".concat(o,"_DESTROY")
t.EVENT_DESTROY=Z
var Q="".concat(o,"_DESTROY_ACKNOWLEDGE")
t.EVENT_DESTROY_ACKNOWLEDGE=Q
var J="".concat(o,"_DESTROYED")
t.EVENT_DESTROYED=J
var X="".concat(o,"_DESTROY_FAILED")
t.EVENT_DESTROY_FAILED=X
var ee="".concat(o,"_START_PIPELINE")
t.EVENT_START_PIPELINE=ee
var te="".concat(o,"_START_PIPELINE_ACKNOWLEDGE")
t.EVENT_START_PIPELINE_ACKNOWLEDGE=te
var re="".concat(o,"_PIPELINE_STARTED")
t.EVENT_PIPELINE_STARTED=re
var ne="".concat(o,"_PIPELINE_START_FAILED")
t.EVENT_PIPELINE_START_FAILED=ne
var oe="".concat(o,"_PAUSE_PIPELINE")
t.EVENT_PAUSE_PIPELINE=oe
var ie="".concat(o,"_PAUSE_PIPELINE_ACKNOWLEDGE")
t.EVENT_PAUSE_PIPELINE_ACKNOWLEDGE=ie
var ae="".concat(o,"_PIPELINE_PAUSED")
t.EVENT_PIPELINE_PAUSED=ae
var ce="".concat(o,"_PIPELINE_PAUSE_FAILED")
t.EVENT_PIPELINE_PAUSE_FAILED=ce
var se="".concat(o,"_STOP_PIPELINE")
t.EVENT_STOP_PIPELINE=se
var ue="".concat(o,"_STOP_PIPELINE_ACKNOWLEDGE")
t.EVENT_STOP_PIPELINE_ACKNOWLEDGE=ue
var le="".concat(o,"_PIPELINE_STOPPED")
t.EVENT_PIPELINE_STOPPED=le
var fe="".concat(o,"_PIPELINE_STOP_FAILED")
t.EVENT_PIPELINE_STOP_FAILED=fe
var de="".concat(o,"_CHANGE_CAMERA")
t.EVENT_CHANGE_CAMERA=de
var pe="".concat(o,"_CHANGE_CAMERA_ACKNOWLEDGE")
t.EVENT_CHANGE_CAMERA_ACKNOWLEDGE=pe
var _e="".concat(o,"_CAMERA_CHANGED")
t.EVENT_CAMERA_CHANGED=_e
var he="".concat(o,"_CAMERA_CHANGE_FAILED")
t.EVENT_CAMERA_CHANGE_FAILED=he
var ve="".concat(o,"_CAMERA_ACCESS_REQUESTED")
t.EVENT_CAMERA_ACCESS_REQUESTED=ve
var Ee="".concat(o,"_CAMERA_ACCESS_GRANTED")
t.EVENT_CAMERA_ACCESS_GRANTED=Ee
var ye="".concat(o,"_CAMERA_ACCESS_FAILED")
t.EVENT_CAMERA_ACCESS_FAILED=ye
var be="".concat(o,"_GET_CAMERAS_LIST")
t.EVENT_GET_CAMERAS_LIST=be
var me="".concat(o,"_GET_CAMERAS_LIST_ACKNOWLEDGE")
t.EVENT_GET_CAMERAS_LIST_ACKNOWLEDGE=me
var ge="".concat(o,"_CAMERAS_LIST")
t.EVENT_CAMERAS_LIST=ge
var Ae="".concat(o,"_CAMERAS_LIST_FAILED")
t.EVENT_CAMERAS_LIST_FAILED=Ae
var we="".concat(o,"_SET_MODEL")
t.EVENT_SET_MODEL=we
var Te="".concat(o,"_SET_MODEL_ACKNOWLEDGE")
t.EVENT_SET_MODEL_ACKNOWLEDGE=Te
var Ce="".concat(o,"_MODEL_SET")
t.EVENT_MODEL_SET=Ce
var Oe="".concat(o,"_MODEL_SET_FAILED")
t.EVENT_MODEL_SET_FAILED=Oe
var Se="".concat(o,"_LOG_3D_VIEWER_DURATION")
t.EVENT_LOG_3D_VIEWER_DURATION=Se
var xe="".concat(o,"_LOG_3D_VIEWER_DURATION_ACKNOWLEDGE")
t.EVENT_LOG_3D_VIEWER_DURATION_ACKNOWLEDGE=xe
var Ie="".concat(o,"_LOG_3D_VIEWER_DURATION_SENT")
t.EVENT_LOG_3D_VIEWER_DURATION_SENT=Ie
var Ne="".concat(o,"_LOG_3D_VIEWER_DURATION_FAILED")
t.EVENT_LOG_3D_VIEWER_DURATION_FAILED=Ne
var ke="".concat(o,"_TAKE_PHOTO")
t.EVENT_TAKE_PHOTO=ke
var De="".concat(o,"_TAKE_PHOTO_ACKNOWLEDGE")
t.EVENT_TAKE_PHOTO_ACKNOWLEDGE=De
var Le="".concat(o,"_PHOTO_TAKEN")
t.EVENT_PHOTO_TAKEN=Le
var Re="".concat(o,"_PHOTO_TAKE_FAILED")
t.EVENT_PHOTO_TAKE_FAILED=Re
var Pe="".concat(o,"_TRY_ON")
t.EVENT_TRY_ON=Pe
var Me="".concat(o,"_3D_SUCCEEDED")
t.EVENT_3D_SUCCEEDED=Me
var Ve="".concat(o,"_ERROR")
t.EVENT_ERROR=Ve
var Be="".concat(o,"_OBJECT_APPEARED")
t.EVENT_OBJECT_APPEARED=Be
var je="".concat(o,"_OBJECT_DISAPPEARED")
t.EVENT_OBJECT_DISAPPEARED=je
var Ge="".concat(o,"_DEBUG")
t.EVENT_DEBUG=Ge
var Ue="".concat(o,"_DEBUG_FAILED")
t.EVENT_DEBUG_FAILED=Ue
var We="".concat(o,"_DEBUG_SUCCESS")
t.EVENT_DEBUG_SUCCESS=We
var Fe="".concat(o,"_FREEZE_ON_CAMERA_CHANGE")
t.EVENT_FREEZE_ON_CAMERA_CHANGE=Fe
var He="".concat(o,"_WARMED_UP")
t.EVENT_WARMED_UP=He
var Ke="".concat(o,"_FRAME_SIZE_CHANGED")
t.EVENT_FRAME_SIZE_CHANGED=Ke
var qe="".concat(o,"_INIT_VIDEO")
t.EVENT_INIT_VIDEO=qe
var ze="".concat(o,"_INIT_VIDEO_ACKNOWLEDGE")
t.EVENT_INIT_VIDEO_ACKNOWLEDGE=ze
var Ye="".concat(o,"_VIDEO_INITIALIZED")
t.EVENT_VIDEO_INITIALIZED=Ye
var Ze="".concat(o,"_VIDEO_INIT_FAILED")
t.EVENT_VIDEO_INIT_FAILED=Ze
var $e="".concat(o,"_LOG")
t.EVENT_LOG=$e
var Qe="".concat(o,"_SET_MODE")
t.EVENT_SET_MODE=Qe
var Je="".concat(o,"_SET_MODE_ACKNOWLEDGE")
t.EVENT_SET_MODE_ACKNOWLEDGE=Je
var Xe="".concat(o,"_MODE_SET")
t.EVENT_MODE_SET=Xe
var et="".concat(o,"_SET_MODE_FAILED")
t.EVENT_SET_MODE_FAILED=et
var tt="".concat(o,"_SET_POI")
t.EVENT_SET_POI=tt
var rt="".concat(o,"_SET_POI_ACKNOWLEDGE")
t.EVENT_SET_POI_ACKNOWLEDGE=rt
var nt="".concat(o,"_POI_SET")
t.EVENT_POI_SET=nt
var ot="".concat(o,"_SET_POI_FAILED")
t.EVENT_SET_POI_FAILED=ot
var it="".concat(o,"_CAMERA_ZOOM")
t.EVENT_CAMERA_ZOOM=it
var at="".concat(o,"_CAMERA_ZOOM_ACKNOWLEDGE")
t.EVENT_CAMERA_ZOOM_ACKNOWLEDGE=at
var ct="".concat(o,"_CAMERA_ZOOMED")
t.EVENT_CAMERA_ZOOMED=ct
var st="".concat(o,"_CAMERA_ZOOM_FAILED")
t.EVENT_CAMERA_ZOOM_FAILED=st
var ut="".concat(o,"_ONBOARDING")
t.EVENT_ONBOARDING=ut
var lt="".concat(o,"_ONBOARDING_ACKNOWLEDGE")
t.EVENT_ONBOARDING_ACKNOWLEDGE=lt
var ft="".concat(o,"_ONBOARDING_SUCCESS")
t.EVENT_ONBOARDING_SUCCESS=ft
var dt="".concat(o,"_ONBOARDING_FAILED")
t.EVENT_ONBOARDING_FAILED=dt
var pt="".concat(o,"_TOGGLE_DIMENSIONS")
t.EVENT_TOGGLE_DIMENSIONS=pt
var _t="".concat(o,"_TOGGLE_DIMENSIONS_ACKNOWLEDGE")
t.EVENT_TOGGLE_DIMENSIONS_ACKNOWLEDGE=_t
var ht="".concat(o,"_TOGGLE_DIMENSIONS_SUCCESS")
t.EVENT_TOGGLE_DIMENSIONS_SUCCESS=ht
var vt="".concat(o,"_TOGGLE_DIMENSIONS_FAILED")
t.EVENT_TOGGLE_DIMENSIONS_FAILED=vt
var Et="".concat(o,"_INTERACTION_STARTED")
t.EVENT_INTERACTION_STARTED=Et
var yt="".concat(o,"_INTERACTION_ENDED")
t.EVENT_INTERACTION_ENDED=yt
var bt="".concat(o,"_LOG_WRIST_MEASURE")
t.EVENT_LOG_WRIST_MEASURE_EVENT=bt
var mt="".concat(o,"__LOG_WRIST_MEASURE_ACKNOWLEDGE")
t.EVENT_LOG_WRIST_MEASURE_EVENT_ACKNOWLEDGE=mt
var gt="".concat(o,"_LOG_WRIST_MEASURE_SUCCESS")
t.EVENT_LOG_WRIST_MEASURE_EVENT_SUCCESS=gt
var At="".concat(o,"_LOG_WRIST_MEASURE_FAILED")
t.EVENT_LOG_WRIST_MEASURE_EVENT_FAILED=At}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},ad3392aa297a625a6207:function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.listOfTypes=t.default=t.arSupportTypes=t.MODEL_TYPE_WATCH=t.MODEL_TYPE_SNEAKER=t.MODEL_TYPE_BAG=t.DEPRECATED_MODEL_TYPE_SNEAKER=void 0

;// Copyright © 2021 WANNABY Inc. All rights reserved.
var n="sneaker"
t.DEPRECATED_MODEL_TYPE_SNEAKER=n
var o="sneakers"
t.MODEL_TYPE_SNEAKER=o
var i="watch"
t.MODEL_TYPE_WATCH=i
var c="bag"
t.MODEL_TYPE_BAG=c
var u=[o,i,c]
t.listOfTypes=u
var l=[o,i]
t.arSupportTypes=l
var E={MODEL_TYPE_SNEAKER:o,MODEL_TYPE_WATCH:i,MODEL_TYPE_BAG:c}
t.default=E}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},"5ce3042649a076bb849e":function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.listOfModes=t.default=void 0

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var n="ar",o="3d",i=[n,o]
t.listOfModes=i
var c={MODE_TYPE_AR:n,MODE_TYPE_3D:o}
t.default=c}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},dc5a17f696fff9829499:function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.mode3dZoomTo=t.mode3dDimensionsUnits=t.VIEWER_3D_CONTROLS_SETTINGS=void 0

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var n={maxDistance:5.5,minDistance:.4,zoomSpeed:.025,rotateSpeed:.03,dampingFactor:.0015}
t.VIEWER_3D_CONTROLS_SETTINGS=n
var o={MODE_3D_ZOOM_IN:"in",MODE_3D_ZOOM_OUT:"out"}
t.mode3dZoomTo=o
var i={MODE_3D_DIMENSIONS_CM:"cm",MODE_3D_DIMENSIONS_INCH:"inch"}
t.mode3dDimensionsUnits=i}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},"0c429deb8efa6ecca416":function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.THEME_TYPES=t.THEME_LIGHT=t.THEME_DARK=void 0

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var n="dark"
t.THEME_DARK=n
var o="light"
t.THEME_LIGHT=o
var i=[n,o]
t.THEME_TYPES=i
var c={THEME_DARK:n,THEME_LIGHT:o}
t.default=c}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},"393fe908eef3c1383fcb":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("33a1f57322c9f05baede"),o("17be7f514f0c2961a0dd"),o("b655b2bc1bdce5a9c4c9"),o("61cea65a22ee508ba41d"),o("3c108274403b90131be8"),o("46cb486d8aa85ffd8cb8"),o("4d732541f8f298d40c90"),o("ca3732918b4d1ccb0e5d"),o("ae915d0780a0a6b00fd0")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,l,E,D,R,G){var U=o("950d5b26fdbfeef2ad0c")
function _createSuper(t){var n=_isNativeReflectConstruct()
return function _createSuperInternal(){var o,i=(0,E.default)(t)
if(n){var c=(0,E.default)(this).constructor
o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments)
return(0,l.default)(this,o)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=U(n),i=U(i),c=U(c),u=U(u),l=U(l),E=U(E),D=U(D),R=U(R)
var W="Error",K="Unknown error",Y=function(t){(0,u.default)(TraceError,t)
var o=_createSuper(TraceError)
function TraceError(t,i){var u
if((0,n.default)(this,TraceError),u=o.call(this,t,i),(0,R.default)((0,c.default)(u),"name","TraceError"),u.constructor!==TraceError)throw new Error("Not allowed to inherit TraceError")
var l=null===i||void 0===i?void 0:i.cause
return"string"===typeof l&&(l=new Error(l)),u.cause=l,u.name=(null===i||void 0===i?void 0:i.name)||u.name,u.params=null===i||void 0===i?void 0:i.params,u}return(0,i.default)(TraceError,[{key:"rootCause",value:function rootCause(){for(var t=this;t.cause;)t=t.cause
return t}},{key:"getCallStack",value:function getCallStack(){for(var t="",n=this;n;){var o=null
try{o=JSON.stringify(n.params)}catch(t){o="*impossible to stringify*"}t+="".concat(TraceError.getErrorStack(n)).concat(o?"\n".concat(o):""),n.cause&&(t+="\nCaused by: "),n=n.cause}return t}}],[{key:"generateErrorId",value:function generateErrorId(){return(0,G.v4)()}},{key:"toObject",value:function toObject(t){var n,o,i=t
return TraceError.isTraceError(i)&&(i=i.rootCause()),{errorId:TraceError.generateErrorId(),message:(null===(n=i)||void 0===n?void 0:n.message)||K,name:(null===(o=i)||void 0===o?void 0:o.name)||W}}},{key:"getErrorStack",value:function getErrorStack(t){var n="".concat((null===t||void 0===t?void 0:t.name)||W,": ").concat((null===t||void 0===t?void 0:t.message)||K),o=(null===t||void 0===t?void 0:t.stack)||(null===t||void 0===t?void 0:t.toString())||""
return o.startsWith(n)||(o="".concat(n).concat(o?"\n".concat(o):"")),o}},{key:"callStack",value:function callStack(t){return TraceError.isTraceError(t)?t.getCallStack():t instanceof Error?TraceError.getErrorStack(t):(null===t||void 0===t?void 0:t.toString)instanceof Function?t.toString():"".concat(W,": ").concat(K)}},{key:"isTraceError",value:function isTraceError(t){return t instanceof Error&&t.name===TraceError.name}},{key:"containsInstance",value:function containsInstance(t,n){if(TraceError.isTraceError(t)){for(var o=t;o;){if(o instanceof n)return!0
o=o.cause}return!1}return t instanceof n}},{key:"getRootCause",value:function getRootCause(t){return TraceError.isTraceError(t)?t.rootCause():t}}]),TraceError}((0,D.default)(Error))
t.default=Y}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"201cdb97c23c36105df6":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("6c753cb75fab3b780c2d"),o("5ce3042649a076bb849e"),o("5a603b19029ffe837c13"),o("3d7f1c22cdbe1f6abe21"),o("48e54dfb38e1e890fc31")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,l){var E=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.isVersionGreaterOrEquals=t.checkBrowserSupport=void 0,n=E(n),i=E(i),c=E(c),u=E(u)

;// Copyright © 2022 WANNABY Inc. All rights reserved.
var D=function checkBrowserSupport(t){switch(t){case i.default.MODE_TYPE_AR:return checkRequirements(u.default)
case i.default.MODE_TYPE_3D:return checkRequirements(c.default)
default:throw new Error("Invalid mode")}}
t.checkBrowserSupport=D
var R=function isVersionGreaterOrEquals(t,o){var i=!1
return t&&n.default.validate(t)&&(i=n.default.compare(t,o,">=")),i}
function checkRequirements(t){var n,o=null===(n=t["*"])||void 0===n?void 0:n.find((function(t){return t.type===l.device.type})),i=t[l.os.name]
if(!i&&o&&(i=[o]),!i)return!1
var c=i.filter((function(t){return!t.version||R(l.os.version,t.version)}))
return!!c.length&&!!c.find((function(t){var n=t.browsers[l.browser.name]
return!!n&&(!n.version||R(l.browser.version,n.version))}))}t.isVersionGreaterOrEquals=R}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"48e54dfb38e1e890fc31":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("8e5531a739ad2a362fcc")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n){var i=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.osVersion=t.os=t.mobileVendor=t.mobileModel=t.isWeChat=t.isSamsungBrowser=t.isSafari=t.isKakaoTalks=t.isInstagram=t.isIOS=t.isFacebook=t.isDesktop=t.isChromeWebView=t.isChrome=t.isAndroid=t.deviceVendor=t.deviceDetect=t.device=t.checkIphoneHasNotch=t.browserName=t.browser=t.OsTypes=t.DeviceVendors=t.DeviceTypes=t.BrowserTypes=void 0,n=i(n)

;// Copyright © 2021 WANNABY Inc. All rights reserved.
var c="none",u={Facebook:"Facebook",Instagram:"Instagram",Chrome:"Chrome",ChromeWebView:"Chrome WebView",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser",AndroidBrowser:"Android Browser",WeChat:"WeChat",Line:"Line",WebKit:"WebKit",KakaoTalks:"KAKAOTALK"}
t.BrowserTypes=u
var l={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"}
t.OsTypes=l
var E={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Browser:void 0}
t.DeviceTypes=E
var D={Samsung:"Samsung"}
t.DeviceVendors=D
var R=function getNavigatorInstance(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},G=function isIOS13Check(t){var n=R()
return n&&n.platform&&(-1!==n.platform.indexOf(t)||"MacIntel"===n.platform&&n.maxTouchPoints>1&&!window.MSStream)},U=new n.default,W=U.getDevice()
t.device=W
var K=U.getOS()
t.os=K
var Y=U.getBrowser()
t.browser=Y,Y.name===u.Safari&&K.name===l.IOS&&(Y.name=u.MobileSafari),Y.version||Y.name!==u.MobileSafari||(Y.version=K.version)
var Z=K.version
t.osVersion=Z
var Q=Y.name===u.Chrome
t.isChrome=Q
var J=Y.name===u.Safari||Y.name===u.MobileSafari
t.isSafari=J
var X=Y.name===u.Instagram
t.isInstagram=X
var ee=Y.name===u.Facebook
t.isFacebook=ee
var te=Y.name===u.WeChat
t.isWeChat=te
var re=Y.name===u.KakaoTalks
t.isKakaoTalks=re
var ne=Y.name===u.ChromeWebView
t.isChromeWebView=ne
var oe=Y.name===u.SamsungBrowser
t.isSamsungBrowser=oe
var ie=K.name===l.IOS||G("iPad")
t.isIOS=ie
var ae=K.name===l.Android
t.isAndroid=ae
var ce=Y.vendor||c
t.mobileVendor=ce
var se=W.model||c
t.mobileModel=se
var ue=W.vendor||c
t.deviceVendor=ue
var le=Y.name||c
t.browserName=le
var fe=W.type===E.Browser
t.isDesktop=fe
var de=function deviceDetect(){return{isMobile:W.type===E.Mobile,deviceType:W.type||c,model:W.model||c,vendor:W.vendor||c,os:K.name||c,osVersion:K.version||c,screenWidth:window.screen.width,screenHeight:window.screen.height,ua:U.getUA()||c}}
t.deviceDetect=de
var pe=function checkIphoneHasNotch(){return window.screen.width/window.screen.height<.48}
t.checkIphoneHasNotch=pe}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"5a603b19029ffe837c13":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("ca3732918b4d1ccb0e5d"),o("48e54dfb38e1e890fc31")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i){var c,u,l,E,D,R=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var G=(D={},(0,(n=R(n)).default)(D,i.OsTypes.IOS,[{version:"15",browsers:(c={},(0,n.default)(c,i.BrowserTypes.MobileSafari,{}),(0,n.default)(c,i.BrowserTypes.Facebook,{}),(0,n.default)(c,i.BrowserTypes.Instagram,{}),(0,n.default)(c,i.BrowserTypes.WeChat,{}),(0,n.default)(c,i.BrowserTypes.Line,{}),(0,n.default)(c,i.BrowserTypes.WebKit,{}),(0,n.default)(c,i.BrowserTypes.Chrome,{}),(0,n.default)(c,i.BrowserTypes.KakaoTalks,{}),c)}]),(0,n.default)(D,i.OsTypes.Android,[{browsers:(u={},(0,n.default)(u,i.BrowserTypes.Chrome,{version:"83"}),(0,n.default)(u,i.BrowserTypes.ChromeWebView,{version:"83"}),(0,n.default)(u,i.BrowserTypes.AndroidBrowser,{version:"103"}),(0,n.default)(u,i.BrowserTypes.SamsungBrowser,{version:"17"}),(0,n.default)(u,i.BrowserTypes.Facebook,{}),(0,n.default)(u,i.BrowserTypes.Instagram,{}),(0,n.default)(u,i.BrowserTypes.WeChat,{}),(0,n.default)(u,i.BrowserTypes.Line,{}),(0,n.default)(u,i.BrowserTypes.KakaoTalks,{}),u)}]),(0,n.default)(D,i.OsTypes.Windows,[{browsers:(l={},(0,n.default)(l,i.BrowserTypes.Chrome,{version:"102"}),(0,n.default)(l,i.BrowserTypes.Firefox,{version:"102"}),(0,n.default)(l,i.BrowserTypes.Edge,{version:"103"}),l)}]),(0,n.default)(D,i.OsTypes.MAC_OS,[{browsers:(E={},(0,n.default)(E,i.BrowserTypes.Chrome,{version:"102"}),(0,n.default)(E,i.BrowserTypes.Firefox,{version:"102"}),(0,n.default)(E,i.BrowserTypes.Safari,{version:"15.0"}),E)}]),(0,n.default)(D,"*",[{type:i.DeviceTypes.Browser,browsers:(0,n.default)({},i.BrowserTypes.Chrome,{version:"102"})}]),D)
t.default=G}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"3d7f1c22cdbe1f6abe21":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("ca3732918b4d1ccb0e5d"),o("48e54dfb38e1e890fc31")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i){var c,u,l,E=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var D=(l={},(0,(n=E(n)).default)(l,i.OsTypes.IOS,[{version:"15",browsers:(c={},(0,n.default)(c,i.BrowserTypes.MobileSafari,{}),(0,n.default)(c,i.BrowserTypes.Chrome,{}),(0,n.default)(c,i.BrowserTypes.Facebook,{}),(0,n.default)(c,i.BrowserTypes.Instagram,{}),(0,n.default)(c,i.BrowserTypes.WeChat,{}),(0,n.default)(c,i.BrowserTypes.Line,{}),(0,n.default)(c,i.BrowserTypes.WebKit,{}),(0,n.default)(c,i.BrowserTypes.KakaoTalks,{}),c)}]),(0,n.default)(l,i.OsTypes.Android,[{browsers:(u={},(0,n.default)(u,i.BrowserTypes.Chrome,{version:"83"}),(0,n.default)(u,i.BrowserTypes.ChromeWebView,{version:"83"}),(0,n.default)(u,i.BrowserTypes.AndroidBrowser,{version:"103"}),(0,n.default)(u,i.BrowserTypes.SamsungBrowser,{version:"17"}),(0,n.default)(u,i.BrowserTypes.Facebook,{}),(0,n.default)(u,i.BrowserTypes.Instagram,{}),(0,n.default)(u,i.BrowserTypes.WeChat,{}),(0,n.default)(u,i.BrowserTypes.KakaoTalks,{}),u)}]),l)
t.default=D}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},a80db40cf6504a41f734:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
var l=o("031b33a991540ae8b415")
!function(l,E){c=[n,o("50b796ec98bdad71dd85")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n){var i=o("950d5b26fdbfeef2ad0c")
function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return t}
var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,n,o){t[n]=o.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",E=c.asyncIterator||"@@asyncIterator",D=c.toStringTag||"@@toStringTag"
function define(t,n,o){return Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{define({},"")}catch(t){define=function define(t,n,o){return t[n]=o}}function wrap(t,n,o,c){var u=n&&n.prototype instanceof Generator?n:Generator,l=Object.create(u.prototype),E=new Context(c||[])
return i(l,"_invoke",{value:makeInvokeMethod(t,o,E)}),l}function tryCatch(t,n,o){try{return{type:"normal",arg:t.call(n,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=wrap
var R={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var G={}
define(G,u,(function(){return this}))
var U=Object.getPrototypeOf,W=U&&U(U(values([])))
W&&W!==n&&o.call(W,u)&&(G=W)
var K=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(G)
function defineIteratorMethods(t){["next","throw","return"].forEach((function(n){define(t,n,(function(t){return this._invoke(n,t)}))}))}function AsyncIterator(t,n){function invoke(i,c,u,E){var D=tryCatch(t[i],t,c)
if("throw"!==D.type){var R=D.arg,G=R.value
return G&&"object"==l(G)&&o.call(G,"__await")?n.resolve(G.__await).then((function(t){invoke("next",t,u,E)}),(function(t){invoke("throw",t,u,E)})):n.resolve(G).then((function(t){R.value=t,u(R)}),(function(t){return invoke("throw",t,u,E)}))}E(D.arg)}var c
i(this,"_invoke",{value:function value(t,o){function callInvokeWithMethodAndArg(){return new n((function(n,i){invoke(t,o,n,i)}))}return c=c?c.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(t,n,o){var i="suspendedStart"
return function(c,u){if("executing"===i)throw new Error("Generator is already running")
if("completed"===i){if("throw"===c)throw u
return doneResult()}for(o.method=c,o.arg=u;;){var l=o.delegate
if(l){var E=maybeInvokeDelegate(l,o)
if(E){if(E===R)continue
return E}}if("next"===o.method)o.sent=o._sent=o.arg
else if("throw"===o.method){if("suspendedStart"===i)throw i="completed",o.arg
o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg)
i="executing"
var D=tryCatch(t,n,o)
if("normal"===D.type){if(i=o.done?"completed":"suspendedYield",D.arg===R)continue
return{value:D.arg,done:o.done}}"throw"===D.type&&(i="completed",o.method="throw",o.arg=D.arg)}}}function maybeInvokeDelegate(t,n){var o=n.method,i=t.iterator[o]
if(void 0===i)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=void 0,maybeInvokeDelegate(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),R
var c=tryCatch(i,t.iterator,n.arg)
if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,R
var u=c.arg
return u?u.done?(n[t.resultName]=u.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,R):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,R)}function pushTryEntry(t){var n={tryLoc:t[0]}
1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{}
n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u]
if(n)return n.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var i=-1,c=function next(){for(;++i<t.length;)if(o.call(t,i))return next.value=t[i],next.done=!1,next
return next.value=void 0,next.done=!0,next}
return c.next=c}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,i(K,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),i(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,D,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor
return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,D,"GeneratorFunction")),t.prototype=Object.create(K),t},t.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,E,(function(){return this})),t.AsyncIterator=AsyncIterator,t.async=function(n,o,i,c,u){void 0===u&&(u=Promise)
var l=new AsyncIterator(wrap(n,o,i,c),u)
return t.isGeneratorFunction(o)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},defineIteratorMethods(K),define(K,D,"Generator"),define(K,u,(function(){return this})),define(K,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),o=[]
for(var i in n)o.push(i)
return o.reverse(),function next(){for(;o.length;){var t=o.pop()
if(t in n)return next.value=t,next.done=!1,next}return next.done=!0,next}},t.values=values,Context.prototype={constructor:Context,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function stop(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function dispatchException(t){if(this.done)throw t
var n=this
function handle(o,i){return u.type="throw",u.arg=t,n.next=o,i&&(n.method="next",n.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion
if("root"===c.tryLoc)return handle("end")
if(c.tryLoc<=this.prev){var l=o.call(c,"catchLoc"),E=o.call(c,"finallyLoc")
if(l&&E){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally")
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}}}},abrupt:function abrupt(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i]
if(c.tryLoc<=this.prev&&o.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var u=c
break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null)
var l=u?u.completion:{}
return l.type=t,l.arg=n,u?(this.method="next",this.next=u.finallyLoc,R):this.complete(l)},complete:function complete(t,n){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),R},finish:function finish(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),resetTryEntry(o),R}},catch:function _catch(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.tryLoc===t){var i=o.completion
if("throw"===i.type){var c=i.arg
resetTryEntry(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,n,o){return this.delegate={iterator:values(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=void 0),R}},t}
// Copyright © 2021 WANNABY Inc. All rights reserved.
Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=t.onceSuccess=t.once=t.normalizeImportedUrl=t.normalize=t.getUniqId=t.getHorizontalFovByVerticalFov=t.easeOutQuint=t.easeOutQuad=t.delay=t.debounce=t.clamp=void 0,n=i(n)
var c=function throttle(t,n){var o,i,c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(){var u=arguments,l=this
clearTimeout(i),!o||Date.now()-o>n?(o=Date.now(),t.apply(this,arguments)):c&&(i=setTimeout((function(){t.apply(l,u)}),n))}}
t.throttle=c
var u=function once(t){var n,o=!1,i=!1
return function(){if(i){if(o)throw n
return n}try{n=t.apply(this,arguments)}catch(t){o=!0,n=t}return i=!0,n}}
t.once=u
var E=function onceSuccess(t){var n,o=!1
return function(){var i=arguments,c=this
return o||(n instanceof Promise?n=n.catch((function(){return t.apply(c,i)})).then((function(t){return o=!0,t})):(n=t.apply(this,arguments))instanceof Promise?n=n.then((function(t){return o=!0,t})):o=!0),n}}
t.onceSuccess=E
var D=function getUniqId(){return Math.random().toString(36).substr(2,9)}
t.getUniqId=D
var R=function debounce(t,n){var o,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
return function(){var c=arguments,u=this,l=function debounced(){o=null,t.apply(u,c)}
i&&!o&&(i=!1,t.apply(this,arguments)),clearTimeout(o),o=setTimeout(l,n)}}
t.debounce=R
var G=function(){var t=(0,n.default)(_regeneratorRuntime().mark((function _callee(t){return _regeneratorRuntime().wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){return setTimeout(n,t)})))
case 1:case"end":return n.stop()}}),_callee)})))
return function delay(n){return t.apply(this,arguments)}}()
t.delay=G
var U=function normalize(t,n,o){return(t-n)/(o-n)}
t.normalize=U
var W=function easeOutQuint(t){return 1-Math.pow(1-t,5)}
t.easeOutQuint=W
var K=function easeOutQuad(t){return t*(2-t)}
t.easeOutQuad=K
var Y=function getHorizontalFovByVerticalFov(t,n){return 360*Math.atan(Math.tan(t*Math.PI/360)*n)/Math.PI}
t.getHorizontalFovByVerticalFov=Y
var Z=function clamp(t,n,o){return t<=n?n:t>=o?o:t}
t.clamp=Z
var Q=function normalizeImportedUrl(t){return"string"===typeof t&&t.startsWith("/")?t.substring(1):t}
t.normalizeImportedUrl=Q}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"90236fa64d83c40b20a9":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
var l=o("031b33a991540ae8b415")
!function(l,E){c=[n,o("4442267810857f1c7c50"),o("50b796ec98bdad71dd85"),o("939561e068e9fe7b464c"),o("393fe908eef3c1383fcb"),o("a80db40cf6504a41f734")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,E){var D=o("950d5b26fdbfeef2ad0c")
function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return t}
var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,n,o){t[n]=o.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",E=c.asyncIterator||"@@asyncIterator",D=c.toStringTag||"@@toStringTag"
function define(t,n,o){return Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{define({},"")}catch(t){define=function define(t,n,o){return t[n]=o}}function wrap(t,n,o,c){var u=n&&n.prototype instanceof Generator?n:Generator,l=Object.create(u.prototype),E=new Context(c||[])
return i(l,"_invoke",{value:makeInvokeMethod(t,o,E)}),l}function tryCatch(t,n,o){try{return{type:"normal",arg:t.call(n,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=wrap
var R={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var G={}
define(G,u,(function(){return this}))
var U=Object.getPrototypeOf,W=U&&U(U(values([])))
W&&W!==n&&o.call(W,u)&&(G=W)
var K=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(G)
function defineIteratorMethods(t){["next","throw","return"].forEach((function(n){define(t,n,(function(t){return this._invoke(n,t)}))}))}function AsyncIterator(t,n){function invoke(i,c,u,E){var D=tryCatch(t[i],t,c)
if("throw"!==D.type){var R=D.arg,G=R.value
return G&&"object"==l(G)&&o.call(G,"__await")?n.resolve(G.__await).then((function(t){invoke("next",t,u,E)}),(function(t){invoke("throw",t,u,E)})):n.resolve(G).then((function(t){R.value=t,u(R)}),(function(t){return invoke("throw",t,u,E)}))}E(D.arg)}var c
i(this,"_invoke",{value:function value(t,o){function callInvokeWithMethodAndArg(){return new n((function(n,i){invoke(t,o,n,i)}))}return c=c?c.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(t,n,o){var i="suspendedStart"
return function(c,u){if("executing"===i)throw new Error("Generator is already running")
if("completed"===i){if("throw"===c)throw u
return doneResult()}for(o.method=c,o.arg=u;;){var l=o.delegate
if(l){var E=maybeInvokeDelegate(l,o)
if(E){if(E===R)continue
return E}}if("next"===o.method)o.sent=o._sent=o.arg
else if("throw"===o.method){if("suspendedStart"===i)throw i="completed",o.arg
o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg)
i="executing"
var D=tryCatch(t,n,o)
if("normal"===D.type){if(i=o.done?"completed":"suspendedYield",D.arg===R)continue
return{value:D.arg,done:o.done}}"throw"===D.type&&(i="completed",o.method="throw",o.arg=D.arg)}}}function maybeInvokeDelegate(t,n){var o=n.method,i=t.iterator[o]
if(void 0===i)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=void 0,maybeInvokeDelegate(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),R
var c=tryCatch(i,t.iterator,n.arg)
if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,R
var u=c.arg
return u?u.done?(n[t.resultName]=u.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,R):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,R)}function pushTryEntry(t){var n={tryLoc:t[0]}
1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{}
n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u]
if(n)return n.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var i=-1,c=function next(){for(;++i<t.length;)if(o.call(t,i))return next.value=t[i],next.done=!1,next
return next.value=void 0,next.done=!0,next}
return c.next=c}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,i(K,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),i(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,D,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor
return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,D,"GeneratorFunction")),t.prototype=Object.create(K),t},t.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,E,(function(){return this})),t.AsyncIterator=AsyncIterator,t.async=function(n,o,i,c,u){void 0===u&&(u=Promise)
var l=new AsyncIterator(wrap(n,o,i,c),u)
return t.isGeneratorFunction(o)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},defineIteratorMethods(K),define(K,D,"Generator"),define(K,u,(function(){return this})),define(K,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),o=[]
for(var i in n)o.push(i)
return o.reverse(),function next(){for(;o.length;){var t=o.pop()
if(t in n)return next.value=t,next.done=!1,next}return next.done=!0,next}},t.values=values,Context.prototype={constructor:Context,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function stop(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function dispatchException(t){if(this.done)throw t
var n=this
function handle(o,i){return u.type="throw",u.arg=t,n.next=o,i&&(n.method="next",n.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion
if("root"===c.tryLoc)return handle("end")
if(c.tryLoc<=this.prev){var l=o.call(c,"catchLoc"),E=o.call(c,"finallyLoc")
if(l&&E){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally")
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}}}},abrupt:function abrupt(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i]
if(c.tryLoc<=this.prev&&o.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var u=c
break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null)
var l=u?u.completion:{}
return l.type=t,l.arg=n,u?(this.method="next",this.next=u.finallyLoc,R):this.complete(l)},complete:function complete(t,n){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),R},finish:function finish(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),resetTryEntry(o),R}},catch:function _catch(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.tryLoc===t){var i=o.completion
if("throw"===i.type){var c=i.arg
resetTryEntry(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,n,o){return this.delegate={iterator:values(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=void 0),R}},t}Object.defineProperty(t,"__esModule",{value:!0}),t.scaleToFit=t.runInsideRaf=t.queueCalls=t.noConsole=t.isTouchDevice=t.isPortraitWindow=t.isPortraitOrientation=t.isLandscapeWindow=t.isLandscapeOrientation=t.isElementInViewport=t.isConnectionError=t.injectScript=t.importScript=t.getWatermarkImg=t.getViewportBlockTracker=t.getScriptBlob=t.getImage=t.getCurrentScriptBaseUrl=t.getCropSizeByAspect=t.getCanvasScreenshot=t.getAvailableSize=t.customFetch=t.blobToDataUrl=void 0,n=D(n),i=D(i),c=D(c),u=D(u)
var R=12,G=36,U=199,W=function isLandscapeOrientation(t){return t.width>t.height}
t.isLandscapeOrientation=W
var K=function isPortraitOrientation(t){var n=t.width
return t.height>n}
t.isPortraitOrientation=K
var Y=function isLandscapeWindow(){return window.innerWidth>window.innerHeight}
t.isLandscapeWindow=Y
var Z=function isPortraitWindow(){return window.innerHeight>window.innerWidth}
t.isPortraitWindow=Z
var Q=function scaleToFit(t,n){var o=t.width,i=t.height,c=n.width,u=n.height
return Math.max(o/c,i/u)}
t.scaleToFit=Q
var J=function getAvailableSize(t){return{width:t?t.offsetWidth:window.innerWidth,height:t?t.offsetHeight:window.innerHeight}}
t.getAvailableSize=J
var X=function getImage(t){return new Promise((function(n,o){var i=new Image
i.onload=function(){return n(i)},i.onerror=function(){return o(new Error("Failed to download ".concat(t,".")))},i.crossOrigin="anonymous",i.src=t}))}
t.getImage=X
var ee=(0,E.once)((0,i.default)(_regeneratorRuntime().mark((function _callee(){var t,n,o
return _regeneratorRuntime().wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:return t=new Blob([c.default],{type:"image/svg+xml"}),n=URL.createObjectURL(t),i.next=4,X(n)
case 4:return o=i.sent,URL.revokeObjectURL(n),i.abrupt("return",o)
case 7:case"end":return i.stop()}}),_callee)}))))
t.getWatermarkImg=ee
var te=function getCropSizeByAspect(t,n){var o=t.width,i=t.height,c=o/i
return c>n?o=i*n:c<n&&(i=o/n),{width:o,height:i}}
t.getCropSizeByAspect=te
var re=function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee2(t){var n,o,i,c,l,E,D,W,K,Y,Z,Q,J,re
return _regeneratorRuntime().wrap((function _callee2$(ne){for(;;)switch(ne.prev=ne.next){case 0:if(n=t.backgroundCanvas,o=t.sneakersCanvas,i=t.previewSize,c=t.watermark,l=t.watermarkUrl,E=document.createElement("canvas"),D=te({width:o.width,height:o.height},i.width/i.height),W=D.width,K=D.height,E.width=W,E.height=K,Y=E.getContext("2d")){ne.next=8
break}throw new Error("Could not get 2d context for screenshot.")
case 8:if([n,o].forEach((function(t){Y.drawImage(t,0,0,W,K,0,0,W,K)})),!c){ne.next=14
break}Z=c,ne.next=24
break
case 14:if(!l||!1===c){ne.next=20
break}return ne.next=17,X(l)
case 17:Z=ne.sent,ne.next=24
break
case 20:if(c||!1===c){ne.next=24
break}return ne.next=23,ee()
case 23:Z=ne.sent
case 24:return Z&&(Q=Z.width,(J=Z.height)>G&&(Q=Math.floor(G*Q/J),J=G),Q>U&&(J=Math.floor(U*J/Q),Q=U),re=W/i.width,Y.drawImage(Z,R*re,K-(J+R)*re,Q*re,J*re)),ne.abrupt("return",new Promise((function(t,n){try{E.toBlob((function(n){t(n)}))}catch(t){n(new u.default("Error in getCanvasScreenshot",{cause:t,params:{sneakersCanvas:o,width:W,height:K,watermark:c,watermarkUrl:l}}))}})))
case 26:case"end":return ne.stop()}}),_callee2)})))
return function getCanvasScreenshot(n){return t.apply(this,arguments)}}()
t.getCanvasScreenshot=re
var ne=function queueCalls(t){var n
return function(){var o=arguments,i=this
if(n)n=n.then((function(){return t.apply(i,o)}),(function(){return t.apply(i,o)}))
else{var c=t.apply(this,arguments)
n=c instanceof Promise?c:Promise.resolve(c)}return n}}
t.queueCalls=ne
var oe=function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee3(t){var n,o,i=arguments
return _regeneratorRuntime().wrap((function _callee3$(c){for(;;)switch(c.prev=c.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},o=n.crossOrigin,c.abrupt("return",new Promise((function(n,i){var c=document.createElement("script")
c.defer=!0,c.src=t,o&&(c.crossOrigin="anonymous"),c.onload=function(){return n(c)},c.onerror=function(){return i(new Error('Failed to load "'.concat(t,'"')))},document.body.appendChild(c)})))
case 2:case"end":return c.stop()}}),_callee3)})))
return function injectScript(n){return t.apply(this,arguments)}}()
t.injectScript=oe
var ie=function isElementInViewport(t){var n=t.getBoundingClientRect()
return n.top<(window.innerHeight||document.documentElement.clientHeight)&&n.bottom>0&&n.left>=0&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}
t.isElementInViewport=ie
var ae=function getViewportBlockTracker(t){var n,o=t.container,i=t.logDuration,c=t.logVisible
ie(o)&&(n=performance.now())
var u=function __log(){var t=performance.now()-n
if(n=null,t>1500)return i(t)},l=function __handleAll(t){var i=t.scroll,l=t.visibility
if(i){var E=ie(o)
if(E&&!n)n=performance.now(),c()
else if(!E&&n)return u()}if(l)if("visible"!==document.visibilityState){if(n)return u()}else ie(o)&&(n=performance.now(),c())},D=function __handleTabVisibility(){return l({visibility:!0})},R=(0,E.throttle)((function(){return l({scroll})}),500)
return document.addEventListener("visibilitychange",D),window.addEventListener("scroll",R),{destroy:function destroy(){window.removeEventListener("scroll",R),document.removeEventListener("visibilitychange",D)}}}
t.getViewportBlockTracker=ae
var ce=function getCurrentScriptBaseUrl(t){var n
return((n=t&&t.src?new URL(t.src).href:window.location.origin+window.location.pathname).endsWith(".html")||n.endsWith("/")||n.endsWith(".js"))&&(n=n.substring(0,n.lastIndexOf("/"))),n}
t.getCurrentScriptBaseUrl=ce
var se="application/javascript",ue=function getScriptBlob(t){return(t instanceof Promise?t:fetch(t)).then((function(t){return t.blob()})).then((function(t){return t.type===se?t:new Blob([t],{type:se})}))}
t.getScriptBlob=ue
var le=function blobToDataUrl(t){return new Promise((function(n,o){var i=new FileReader
i.onload=function(){return n(i.result)},i.onerror=function(){return o(i.error)},i.onabort=function(){return o(new Error("Aborted read"))},i.readAsDataURL(t)}))}
t.blobToDataUrl=le
var fe=function importScript(t){return import(t)}
t.importScript=fe
var de=function isTouchDevice(t){return"ios"===t||"android"===t}
t.isTouchDevice=de
var pe=function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee4(t){return _regeneratorRuntime().wrap((function _callee4$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){requestAnimationFrame((function(){return n(t())}))})))
case 1:case"end":return n.stop()}}),_callee4)})))
return function runInsideRaf(n){return t.apply(this,arguments)}}()
t.runInsideRaf=pe
var _e=function noConsole(t,o){if(!o)return t()
var i=["log","warn","error"].map((function(t){var n=console[t]
return console[t]=function(){},[t,n]}))
try{return t()}finally{i.forEach((function(t){var o=(0,n.default)(t,2),i=o[0],c=o[1]
console[i]=c}))}}
t.noConsole=_e
var he="CONNECTION_FAIL_ERROR",ve=function customFetch(t,n){return fetch(t,n).catch((function(n){throw n.name=he,n.message+=' url: "'.concat(t,'"'),n}))}
t.customFetch=ve
var Ee="HTTP failure status code: 0",ye=function isConnectionError(t){var n=u.default.getRootCause(t),o=(null===n||void 0===n?void 0:n.message)||n||""
return(null===n||void 0===n?void 0:n.name)===he||o.endsWith&&o.endsWith(Ee)}
t.isConnectionError=ye}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"939d20e611984b6b072d":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("33a1f57322c9f05baede"),o("17be7f514f0c2961a0dd"),o("61cea65a22ee508ba41d"),o("3c108274403b90131be8"),o("46cb486d8aa85ffd8cb8"),o("1ecb9fde0b87f0f847c8")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,l,E){var D=o("950d5b26fdbfeef2ad0c")
function _createSuper(t){var n=_isNativeReflectConstruct()
return function _createSuperInternal(){var o,i=(0,l.default)(t)
if(n){var c=(0,l.default)(this).constructor
o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments)
return(0,u.default)(this,o)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=D(n),i=D(i),c=D(c),u=D(u),l=D(l)
var R=function(t){(0,c.default)(CoreSdkAdapterInterface,t)
var o=_createSuper(CoreSdkAdapterInterface)
function CoreSdkAdapterInterface(){return(0,n.default)(this,CoreSdkAdapterInterface),o.apply(this,arguments)}return(0,i.default)(CoreSdkAdapterInterface,[{key:"init",value:function init(){throw new Error("Not implemented")}}]),CoreSdkAdapterInterface}((E=D(E)).default),G=R
t.default=G}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},cd643e1db643a9e0378b:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("33a1f57322c9f05baede"),o("17be7f514f0c2961a0dd"),o("2ccb2914246d45367659"),o("61cea65a22ee508ba41d"),o("3c108274403b90131be8"),o("46cb486d8aa85ffd8cb8"),o("393fe908eef3c1383fcb"),o("5ce3042649a076bb849e"),o("939d20e611984b6b072d")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,l,E,D,R,G){var U=o("950d5b26fdbfeef2ad0c")
function _createSuper(t){var n=_isNativeReflectConstruct()
return function _createSuperInternal(){var o,i=(0,E.default)(t)
if(n){var c=(0,E.default)(this).constructor
o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments)
return(0,l.default)(this,o)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=U(n),i=U(i),c=U(c),u=U(u),l=U(l),E=U(E),D=U(D),R=U(R)
var W=new(function(t){(0,u.default)(CoreSdkAdapter,t)
var o=_createSuper(CoreSdkAdapter)
function CoreSdkAdapter(){var t
return(0,n.default)(this,CoreSdkAdapter),(t=o.call(this))._setInitialValues(),t}return(0,i.default)(CoreSdkAdapter,[{key:"_setInitialValues",value:function _setInitialValues(){this.container=null,this.iframeSrc=null,this.iframeElement=null,this.iframeSize={height:"100%",width:"100%"},this.verbose=!1}},{key:"init",value:function init(t){var n,o=t.container,i=t.iframeSrc,c=t.mode,u=t.iframeSize,l=void 0===u?{}:u,E=t.verbose,R=void 0!==E&&E
if(this.iframeElement)throw new Error("Already initialized. Destroy before initializing again.")
if(o instanceof HTMLElement)this.container=o
else{var G=document.getElementById(o)
if(!G)throw new Error("Element with id ".concat(o," was not found in dom."))
this.container=G}this.iframeSrc=i,this.iframeSize.height=l.height||this.iframeSize.height,this.iframeSize.width=l.width||this.iframeSize.width,this.verbose=R
try{n=new URL(i,location.href)}catch(t){throw new D.default('Failed to construct iframe url from "'.concat(i,'" and "').concat(location.href,'".'),{cause:t})}var U=n.origin
return this.__createIframe(c),this.initListener({origin:U,targetToPostElement:this.iframeElement.contentWindow}),this}},{key:"__createIframe",value:function __createIframe(t){var n=document.createElement("iframe"),o="iframe_".concat((new Date).getTime())
n.setAttribute("src",this.iframeSrc),n.setAttribute("id",o),n.setAttribute("frameborder",0)
var i=[["document-domain","'none'"],["autoplay","*"]]
t===R.default.MODE_TYPE_AR&&i.push(["camera","*"]),n.setAttribute("allow",i.map((function(t){return t.join(" ")})).join(";")),n.style.height=this.iframeSize.height,n.style.width=this.iframeSize.width,this.container.appendChild(n),this.iframeElement=n}},{key:"destroy",value:function destroy(){(0,c.default)((0,E.default)(CoreSdkAdapter.prototype),"destroy",this).call(this),this.iframeElement&&(this.iframeElement.parentNode&&this.iframeElement.parentNode.removeChild(this.iframeElement),this._setInitialValues())}}]),CoreSdkAdapter}((G=U(G)).default))
t.default=W}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},e483b4afa0e8cba77bb1:function(t,n){var o,i,c
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,i=[],o=function(){"use strict"
!function(u,l){i=[n],void 0===(c="function"===typeof(o=l)?o.apply(n,i):o)||(t.exports=c)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0

;// Copyright © 2021 WANNABY Inc. All rights reserved.
var n={STATUS_PREPARING:"STATUS_PREPARING",STATUS_SDK_LOADED:"STATUS_SDK_LOADED",STATUS_INITIALIZING:"STATUS_INITIALIZING",STATUS_INITIALIZED:"STATUS_INITIALIZED",STATUS_RUNNING:"STATUS_RUNNING",STATUS_PAUSED:"STATUS_PAUSED",STATUS_ERROR:"STATUS_ERROR"}
t.default=n}))},void 0===(c="function"===typeof o?o.apply(n,i):o)||(t.exports=c)},"991cd2f7a8aad4246d15":function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
!function(l,E){c=[n,o("17be7f514f0c2961a0dd"),o("33a1f57322c9f05baede"),o("b655b2bc1bdce5a9c4c9"),o("61cea65a22ee508ba41d"),o("3c108274403b90131be8"),o("46cb486d8aa85ffd8cb8"),o("4d732541f8f298d40c90"),o("ca3732918b4d1ccb0e5d")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,l,E,D,R){var G=o("950d5b26fdbfeef2ad0c")
function _createSuper(t){var n=_isNativeReflectConstruct()
return function _createSuperInternal(){var o,i=(0,E.default)(t)
if(n){var c=(0,E.default)(this).constructor
o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments)
return(0,l.default)(this,o)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}
// Copyright © 2021 WANNABY Inc. All rights reserved.
Object.defineProperty(t,"__esModule",{value:!0}),t.SdkDestroyedError=t.ERROR_SDK_DESTROYED=void 0,n=G(n),i=G(i),c=G(c),u=G(u),l=G(l),E=G(E),D=G(D),R=G(R)
var U="SdkDestroyedError"
t.ERROR_SDK_DESTROYED=U
var W=function(t){(0,u.default)(SdkDestroyedError,t)
var o=_createSuper(SdkDestroyedError)
function SdkDestroyedError(){var t;(0,i.default)(this,SdkDestroyedError)
for(var n=arguments.length,u=new Array(n),l=0;l<n;l++)u[l]=arguments[l]
return t=o.call.apply(o,[this].concat(u)),(0,R.default)((0,c.default)(t),"name",U),t}return(0,n.default)(SdkDestroyedError)}((0,D.default)(Error))
t.SdkDestroyedError=W}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},ade1d101f887b62127d0:function(t,n,o){var i,c,u
"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,c=[],i=function(){"use strict"
var l=o("031b33a991540ae8b415")
!function(l,E){c=[n,o("cdd5bf261f4188f3fa55"),o("50b796ec98bdad71dd85"),o("4442267810857f1c7c50"),o("33a1f57322c9f05baede"),o("17be7f514f0c2961a0dd"),o("b655b2bc1bdce5a9c4c9"),o("61cea65a22ee508ba41d"),o("3c108274403b90131be8"),o("46cb486d8aa85ffd8cb8"),o("ca3732918b4d1ccb0e5d"),o("201cdb97c23c36105df6"),o("831395ee644cb077ead0"),o("1f638d9643f7d6aedeab"),o("ad3392aa297a625a6207"),o("5ce3042649a076bb849e"),o("0c429deb8efa6ecca416"),o("acbc614938ff43fc0009"),o("dc5a17f696fff9829499"),o("9d1d3e6683fdb558ac36"),o("90236fa64d83c40b20a9"),o("cc627320c8f002896e49"),o("393fe908eef3c1383fcb"),o("4b571ae1f0dbca84775f"),o("cd643e1db643a9e0378b"),o("e483b4afa0e8cba77bb1"),o("991cd2f7a8aad4246d15")],void 0===(u="function"===typeof(i=E)?i.apply(n,c):i)||(t.exports=u)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,n,i,c,u,E,D,R,G,U,W,K,Y,Z,Q,J,X,ee,te,re,ne,oe,ie,ae,ce,se,ue){var le=o("950d5b26fdbfeef2ad0c")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n=le(n),i=le(i),c=le(c),u=le(u),E=le(E),D=le(D),R=le(R),G=le(G),U=le(U),W=le(W),Y=le(Y),Z=_interopRequireWildcard(Z),Q=_interopRequireWildcard(Q),J=_interopRequireWildcard(J),X=_interopRequireWildcard(X),re=le(re),ie=le(ie),ce=le(ce),se=le(se)
var fe,de=["onError"]
function _getRequireWildcardCache(t){if("function"!==typeof WeakMap)return null
var n=new WeakMap,o=new WeakMap
return(_getRequireWildcardCache=function _getRequireWildcardCache(t){return t?o:n})(t)}function _interopRequireWildcard(t,n){if(!n&&t&&t.__esModule)return t
if(null===t||"object"!==l(t)&&"function"!==typeof t)return{default:t}
var o=_getRequireWildcardCache(n)
if(o&&o.has(t))return o.get(t)
var i={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor
for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var E=c?Object.getOwnPropertyDescriptor(t,u):null
E&&(E.get||E.set)?Object.defineProperty(i,u,E):i[u]=t[u]}return i.default=t,o&&o.set(t,i),i}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return t}
var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,n,o){t[n]=o.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",E=c.asyncIterator||"@@asyncIterator",D=c.toStringTag||"@@toStringTag"
function define(t,n,o){return Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{define({},"")}catch(t){define=function define(t,n,o){return t[n]=o}}function wrap(t,n,o,c){var u=n&&n.prototype instanceof Generator?n:Generator,l=Object.create(u.prototype),E=new Context(c||[])
return i(l,"_invoke",{value:makeInvokeMethod(t,o,E)}),l}function tryCatch(t,n,o){try{return{type:"normal",arg:t.call(n,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=wrap
var R={}
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var G={}
define(G,u,(function(){return this}))
var U=Object.getPrototypeOf,W=U&&U(U(values([])))
W&&W!==n&&o.call(W,u)&&(G=W)
var K=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(G)
function defineIteratorMethods(t){["next","throw","return"].forEach((function(n){define(t,n,(function(t){return this._invoke(n,t)}))}))}function AsyncIterator(t,n){function invoke(i,c,u,E){var D=tryCatch(t[i],t,c)
if("throw"!==D.type){var R=D.arg,G=R.value
return G&&"object"==l(G)&&o.call(G,"__await")?n.resolve(G.__await).then((function(t){invoke("next",t,u,E)}),(function(t){invoke("throw",t,u,E)})):n.resolve(G).then((function(t){R.value=t,u(R)}),(function(t){return invoke("throw",t,u,E)}))}E(D.arg)}var c
i(this,"_invoke",{value:function value(t,o){function callInvokeWithMethodAndArg(){return new n((function(n,i){invoke(t,o,n,i)}))}return c=c?c.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(t,n,o){var i="suspendedStart"
return function(c,u){if("executing"===i)throw new Error("Generator is already running")
if("completed"===i){if("throw"===c)throw u
return doneResult()}for(o.method=c,o.arg=u;;){var l=o.delegate
if(l){var E=maybeInvokeDelegate(l,o)
if(E){if(E===R)continue
return E}}if("next"===o.method)o.sent=o._sent=o.arg
else if("throw"===o.method){if("suspendedStart"===i)throw i="completed",o.arg
o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg)
i="executing"
var D=tryCatch(t,n,o)
if("normal"===D.type){if(i=o.done?"completed":"suspendedYield",D.arg===R)continue
return{value:D.arg,done:o.done}}"throw"===D.type&&(i="completed",o.method="throw",o.arg=D.arg)}}}function maybeInvokeDelegate(t,n){var o=n.method,i=t.iterator[o]
if(void 0===i)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=void 0,maybeInvokeDelegate(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),R
var c=tryCatch(i,t.iterator,n.arg)
if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,R
var u=c.arg
return u?u.done?(n[t.resultName]=u.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,R):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,R)}function pushTryEntry(t){var n={tryLoc:t[0]}
1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{}
n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u]
if(n)return n.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var i=-1,c=function next(){for(;++i<t.length;)if(o.call(t,i))return next.value=t[i],next.done=!1,next
return next.value=void 0,next.done=!0,next}
return c.next=c}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,i(K,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),i(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,D,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor
return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,D,"GeneratorFunction")),t.prototype=Object.create(K),t},t.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,E,(function(){return this})),t.AsyncIterator=AsyncIterator,t.async=function(n,o,i,c,u){void 0===u&&(u=Promise)
var l=new AsyncIterator(wrap(n,o,i,c),u)
return t.isGeneratorFunction(o)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},defineIteratorMethods(K),define(K,D,"Generator"),define(K,u,(function(){return this})),define(K,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),o=[]
for(var i in n)o.push(i)
return o.reverse(),function next(){for(;o.length;){var t=o.pop()
if(t in n)return next.value=t,next.done=!1,next}return next.done=!0,next}},t.values=values,Context.prototype={constructor:Context,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function stop(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function dispatchException(t){if(this.done)throw t
var n=this
function handle(o,i){return u.type="throw",u.arg=t,n.next=o,i&&(n.method="next",n.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion
if("root"===c.tryLoc)return handle("end")
if(c.tryLoc<=this.prev){var l=o.call(c,"catchLoc"),E=o.call(c,"finallyLoc")
if(l&&E){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return handle(c.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally")
if(this.prev<c.finallyLoc)return handle(c.finallyLoc)}}}},abrupt:function abrupt(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i]
if(c.tryLoc<=this.prev&&o.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var u=c
break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null)
var l=u?u.completion:{}
return l.type=t,l.arg=n,u?(this.method="next",this.next=u.finallyLoc,R):this.complete(l)},complete:function complete(t,n){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),R},finish:function finish(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),resetTryEntry(o),R}},catch:function _catch(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.tryLoc===t){var i=o.completion
if("throw"===i.type){var c=i.arg
resetTryEntry(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,n,o){return this.delegate={iterator:values(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=void 0),R}},t}function ownKeys(t,n){var o=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(o),!0).forEach((function(n){(0,W.default)(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(o,n))}))}return t}function _createSuper(t){var n=_isNativeReflectConstruct()
return function _createSuperInternal(){var o,i=(0,U.default)(t)
if(n){var c=(0,U.default)(this).constructor
o=Reflect.construct(i,arguments,c)}else o=i.apply(this,arguments)
return(0,G.default)(this,o)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var pe=(fe={},(0,W.default)(fe,Z.EVENT_SDK_LOADED,se.default.STATUS_SDK_LOADED),(0,W.default)(fe,Z.EVENT_INIT_FINISHED,se.default.STATUS_INITIALIZED),(0,W.default)(fe,Z.EVENT_INIT_FAILED,se.default.STATUS_ERROR),(0,W.default)(fe,Z.EVENT_PIPELINE_STARTED,se.default.STATUS_RUNNING),(0,W.default)(fe,Z.EVENT_PIPELINE_PAUSED,se.default.STATUS_PAUSED),fe),_e=function(t){(0,R.default)(PublicSdk,t)
var o=_createSuper(PublicSdk)
function PublicSdk(){var t
return(0,u.default)(this,PublicSdk),t=o.call(this),(0,W.default)((0,D.default)(t),"version",oe.version),t._setDefaultProps(),t.coreSdkAdapter=ce.default,t}return(0,E.default)(PublicSdk,[{key:"_mockAdapter",value:function _mockAdapter(t){this.coreSdkAdapter=t}},{key:"_setDefaultProps",value:function _setDefaultProps(){this.pipelineStatus=se.default.STATUS_PREPARING,this.container=null,this.iframeSrc=null,this.verbose=!1,this.modelId=!1}},{key:"isReady",value:function isReady(){return[se.default.STATUS_INITIALIZED,se.default.STATUS_RUNNING,se.default.STATUS_PAUSED].includes(this.pipelineStatus)}},{key:"isInitializing",value:function isInitializing(){return[se.default.STATUS_SDK_LOADED,se.default.STATUS_INITIALIZING].includes(this.pipelineStatus)}},{key:"isLoaded",value:function isLoaded(){return this.pipelineStatus===se.default.STATUS_SDK_LOADED||this.isReady()}},{key:"_initListeners",value:function _initListeners(){var t=this
Object.values(Z).forEach((function(n){t.coreSdkAdapter.prependListener(n,(function(){for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c]
return t.emit.apply(t,[n].concat(i))}))})),Object.entries(pe).forEach((function(n){var o=(0,c.default)(n,2),i=o[0],u=o[1]
t.coreSdkAdapter.prependListener(i,(function(){return t.pipelineStatus=se.default[u]}))}))}},{key:"_logPublicMethodCall",value:function _logPublicMethodCall(t){this.emit(Z.EVENT_LOG,{type:"log",message:"Call [".concat(t,"] method"),verbose:this.verbose})}},{key:"_promisifyEvents",value:function _promisifyEvents(t){for(var n=this,o=t.triggerEvent,i=t.successEvent,c=t.acknowledgeEvent,u=t.failEvent,l=t.acknowledgeTimeout,E=void 0===l?5e3:l,D=t.testData,R=void 0===D?function(){return!0}:D,G=t.getResolveValue,U=void 0===G?function(t){return t}:G,W=arguments.length,K=new Array(W>1?W-1:0),Y=1;Y<W;Y++)K[Y-1]=arguments[Y]
return new Promise((function(t,l){var D,G,W,Y=function onSuccess(n){R(n)&&(D(),t(U(n)))},Q=function rejectPromise(t){if(D(),!(t instanceof Error)){var n=t,o=n.message,i=n.name,c=n.errorId
t=new Error(o||t),i&&(t.name=i),c&&(t.errorId=c)}l(t)},J=function logError(t){var o=ie.default.toObject(t)
n.coreSdkAdapter.remoteEmit("error",_objectSpread(_objectSpread({},o),{},{details:ie.default.callStack(t)}))},X=function onError(t,n){if(R(t)){var o=n||new Error("Something went wrong while waiting for ".concat(i))
J(o),Q(o)}},ee=function onTimeout(){var t=new Error("Timeout for event ".concat(i,"."))
J(t),Q(t)},te=function onAcknowledge(){clearTimeout(G)},re=function onDestroy(){Q(new ue.SdkDestroyedError("Sdk destroyed while waiting for ".concat(i,".")))}
D=function clearCallbacks(){n.off(Z.EVENT_DESTROYED,re),n.coreSdkAdapter.off(i,Y),u&&n.coreSdkAdapter.off(u,X),c&&(n.coreSdkAdapter.off(c,te),clearTimeout(G))},n.on(Z.EVENT_DESTROYED,re),n.coreSdkAdapter.on(i,Y),u&&n.coreSdkAdapter.on(u,X),c&&(n.coreSdkAdapter.on(c,te),G=setTimeout(ee,E)),o&&(W=n.coreSdkAdapter).remoteEmit.apply(W,[o].concat(K))}))}},{key:"_waitForInit",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._promisifyEvents({successEvent:Z.EVENT_INIT_FINISHED,failEvent:Z.EVENT_INIT_FAILED}))
case 1:case"end":return t.stop()}}),_callee,this)})))
function _waitForInit(){return t.apply(this,arguments)}return _waitForInit}()},{key:"_waitForLoad",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee2(){return _regeneratorRuntime().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this._promisifyEvents({successEvent:Z.EVENT_SDK_LOADED}))
case 1:case"end":return t.stop()}}),_callee2,this)})))
function _waitForLoad(){return t.apply(this,arguments)}return _waitForLoad}()},{key:"_checkInitOptions",value:function _checkInitOptions(t){var n=t.container,o=t.type,i=t.license,c=t.iframeSrc,u=t.mode,l=t.theme
if(!c)throw new Error('"iframeSrc" option is required')
if(!i)throw new Error('"license" option is required')
if(!n)throw new Error('"container" option is required')
if(!o)throw new Error('"type" option is required')
if(!Q.listOfTypes.includes(o))throw new Error('"type" option is not correct. Please check documentation.')
if(u&&!J.listOfModes.includes(u))throw new Error('"mode" option is not correct. Please check documentation.')
if(u===J.default.MODE_TYPE_AR&&!Q.arSupportTypes.includes(o))throw new Error('"type" '.concat(o,' cannot be used with "mode" ').concat(J.default.MODE_TYPE_AR))
if(l&&!X.THEME_TYPES.includes(l))throw new Error('"theme" option is not correct. Please check documentation.')}},{key:"_checkEnv",value:function _checkEnv(){if("https:"!==location.protocol&&"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname)throw new Error("You should run the instance over HTTPS or localhost.")}},{key:"init",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee3(t){var n,o,i,c,u,l,E,D,R,G,U,W,K,Y,ee,te,re,oe,ie,ae,ce
return _regeneratorRuntime().wrap((function _callee3$(ue){for(;;)switch(ue.prev=ue.next){case 0:if(t.type===Q.DEPRECATED_MODEL_TYPE_SNEAKER&&(console.warn("Type 'sneaker' is deprecated. Use type 'sneakers' instead."),t.type=Q.MODEL_TYPE_SNEAKER),n=t.container,o=t.license,i=t.iframeSrc,c=t.iframeSize,u=t.verbose,l=void 0!==u&&u,E=t.modelsCacheSize,D=void 0===E?5:E,R=t.type,G=t.metaUrlPrefix,U=t.query,W=t.loadingStubColor,K=void 0===W?"#000":W,Y=t.inDebugMode,ee=void 0!==Y&&Y,te=t.mode,re=void 0===te?J.default.MODE_TYPE_AR:te,oe=t.theme,ie=void 0===oe?X.default.THEME_DARK:oe,ae=Date.now(),this.inDebugMode=ee,this.verbose=l,this.mode=re,this.type=R,this._logPublicMethodCall(this.init.name),this._checkInitOptions(t),this._checkEnv(),!(this.prevContainer&&this.prevContainer!==n||this.prevIframeSrc&&this.prevIframeSrc!==i)){ue.next=12
break}throw new Error("Destroy sdk before initializing it with different params.")
case 12:if(!this.isReady()){ue.next=14
break}return ue.abrupt("return")
case 14:if(!this.isInitializing()){ue.next=18
break}return ue.next=17,this._waitForInit()
case 17:return ue.abrupt("return")
case 18:return this.pipelineStatus=se.default.STATUS_INITIALIZING,this.coreSdkAdapter.init({container:n,iframeSize:c,iframeSrc:i,verbose:l,mode:re}),this._initListeners(),ue.next=23,this._waitForLoad()
case 23:return this.prevContainer=n,this.prevIframeSrc=i,this.mode===J.default.MODE_TYPE_3D&&this._setContainerViewportTracker(this.coreSdkAdapter.container),ce=(0,ne.isElementInViewport)(this.coreSdkAdapter.container),ue.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_START_INIT,acknowledgeEvent:Z.EVENT_INIT_STARTED,successEvent:Z.EVENT_INIT_FINISHED,failEvent:Z.EVENT_INIT_FAILED},{license:o.trim(),query:U,inDebugMode:ee,modelsCacheSize:D,type:R,metaUrlPrefix:G,initTimestamp:ae,loadingStubColor:K,mode:re,theme:ie,inViewport:ce}))
case 28:case"end":return ue.stop()}}),_callee3,this)})))
function init(n){return t.apply(this,arguments)}return init}()},{key:"_setContainerViewportTracker",value:function _setContainerViewportTracker(t){var n=this
this.viewportTracker=(0,ne.getViewportBlockTracker)({container:t,logDuration:function logDuration(t){if(n.isReady())return n.log3dViewerDuration({duration:Math.trunc(t),visible:!1})},logVisible:function logVisible(){if(n.isReady())return n.log3dViewerDuration({visible:!0})}})}},{key:"_removeContainerViewportTracker",value:function _removeContainerViewportTracker(){this.viewportTracker&&(this.viewportTracker.destroy(),this.viewportTracker=null)}},{key:"_validateReady",value:function _validateReady(){if(!this.isReady())throw new Error("Pipeline is not initialized.")}},{key:"_validateEnv",value:function _validateEnv(){if(!this.modelId)throw new Error("You should set a model before pipeline starting")}},{key:"startPipeline",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee4(){return _regeneratorRuntime().wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return this._logPublicMethodCall(this.startPipeline.name),this._validateReady(),this._validateEnv(),t.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_START_PIPELINE,acknowledgeEvent:Z.EVENT_START_PIPELINE_ACKNOWLEDGE,successEvent:Z.EVENT_PIPELINE_STARTED,failEvent:Z.EVENT_PIPELINE_START_FAILED}))
case 4:case"end":return t.stop()}}),_callee4,this)})))
function startPipeline(){return t.apply(this,arguments)}return startPipeline}()},{key:"pausePipeline",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee5(){var t,n=arguments
return _regeneratorRuntime().wrap((function _callee5$(o){for(;;)switch(o.prev=o.next){case 0:return t=n.length>0&&void 0!==n[0]&&n[0],this._logPublicMethodCall(this.pausePipeline.name),this._validateReady(),o.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_PAUSE_PIPELINE,acknowledgeEvent:Z.EVENT_PAUSE_PIPELINE_ACKNOWLEDGE,successEvent:Z.EVENT_PIPELINE_PAUSED,failEvent:Z.EVENT_PIPELINE_PAUSE_FAILED},t))
case 4:case"end":return o.stop()}}),_callee5,this)})))
function pausePipeline(){return t.apply(this,arguments)}return pausePipeline}()},{key:"checkEnvironment",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee6(){var t,n=arguments
return _regeneratorRuntime().wrap((function _callee6$(o){for(;;)switch(o.prev=o.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:J.default.MODE_TYPE_AR,this._logPublicMethodCall(this.checkEnvironment.name),o.abrupt("return",(0,K.checkBrowserSupport)(t))
case 3:case"end":return o.stop()}}),_callee6,this)})))
function checkEnvironment(){return t.apply(this,arguments)}return checkEnvironment}()},{key:"downloadModel",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee7(t){var n,o
return _regeneratorRuntime().wrap((function _callee7$(i){for(;;)switch(i.prev=i.next){case 0:return n=t.id,o=t.decrypted,this._logPublicMethodCall(this.downloadModel.name),this._validateReady(),i.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_LOAD_RESOURCE_MODEL,acknowledgeEvent:Z.EVENT_LOAD_RESOURCE_MODEL_ACKNOWLEDGE,successEvent:Z.EVENT_RESOURCE_LOAD_FINISHED,failEvent:Z.EVENT_RESOURCE_LOAD_FAILED,testData:function testData(t){var o=t.id,i=t.type
return o===n&&i===ee.RESOURCE_TYPE_MODEL}},{modelId:n,decrypted:o}))
case 4:case"end":return i.stop()}}),_callee7,this)})))
function downloadModel(n){return t.apply(this,arguments)}return downloadModel}()},{key:"downloadAndSetModel",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee8(t){var n,o,i,c,u
return _regeneratorRuntime().wrap((function _callee8$(l){for(;;)switch(l.prev=l.next){case 0:return n=t.id,o=t.decrypted,this._logPublicMethodCall(this.downloadAndSetModel.name),this._validateReady(),l.next=5,this._promisifyEvents({triggerEvent:Z.EVENT_SET_MODEL,acknowledgeEvent:Z.EVENT_SET_MODEL_ACKNOWLEDGE,successEvent:Z.EVENT_MODEL_SET,failEvent:Z.EVENT_MODEL_SET_FAILED,testData:function testData(t){return t.modelId===n}},{modelId:n,decrypted:o})
case 5:if(i=l.sent,c=i.modelWasSet,u=i.modelInfo,!c){l.next=12
break}return this.modelId=n,l.next=12,this.startPipeline()
case 12:return l.abrupt("return",{modelWasSet:c,modelInfo:u})
case 13:case"end":return l.stop()}}),_callee8,this)})))
function downloadAndSetModel(n){return t.apply(this,arguments)}return downloadAndSetModel}()},{key:"log3dViewerDuration",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee9(t){var n,o
return _regeneratorRuntime().wrap((function _callee9$(i){for(;;)switch(i.prev=i.next){case 0:return n=t.duration,o=t.visible,this._logPublicMethodCall(this.log3dViewerDuration.name),this._validateReady(),i.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_LOG_3D_VIEWER_DURATION,acknowledgeEvent:Z.EVENT_LOG_3D_VIEWER_DURATION_ACKNOWLEDGE,successEvent:Z.EVENT_LOG_3D_VIEWER_DURATION_SENT,failEvent:Z.EVENT_LOG_3D_VIEWER_DURATION_FAILED},{duration:n,visible:o}))
case 4:case"end":return i.stop()}}),_callee9,this)})))
function log3dViewerDuration(n){return t.apply(this,arguments)}return log3dViewerDuration}()},{key:"getCamerasList",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee10(){return _regeneratorRuntime().wrap((function _callee10$(t){for(;;)switch(t.prev=t.next){case 0:return this._logPublicMethodCall(this.getCamerasList.name),this._validateReady(),t.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_GET_CAMERAS_LIST,acknowledgeEvent:Z.EVENT_GET_CAMERAS_LIST_ACKNOWLEDGE,successEvent:Z.EVENT_CAMERAS_LIST,failEvent:Z.EVENT_CAMERAS_LIST_FAILED}))
case 3:case"end":return t.stop()}}),_callee10,this)})))
function getCamerasList(){return t.apply(this,arguments)}return getCamerasList}()},{key:"changeCamera",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee11(t){return _regeneratorRuntime().wrap((function _callee11$(n){for(;;)switch(n.prev=n.next){case 0:return this._logPublicMethodCall(this.changeCamera.name),this._validateReady(),n.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_CHANGE_CAMERA,acknowledgeEvent:Z.EVENT_CHANGE_CAMERA_ACKNOWLEDGE,successEvent:Z.EVENT_CAMERA_CHANGED,failEvent:Z.EVENT_CAMERA_CHANGE_FAILED,testData:function testData(n){return n===t}},{cameraId:t}))
case 3:case"end":return n.stop()}}),_callee11,this)})))
function changeCamera(n){return t.apply(this,arguments)}return changeCamera}()},{key:"initVideo",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee12(){var t,n=arguments
return _regeneratorRuntime().wrap((function _callee12$(o){for(;;)switch(o.prev=o.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:{},this.isLoaded()){o.next=4
break}return o.next=4,this._waitForLoad()
case 4:return o.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_INIT_VIDEO,acknowledgeEvent:Z.EVENT_INIT_VIDEO_ACKNOWLEDGE,successEvent:Z.EVENT_VIDEO_INITIALIZED,failEvent:Z.EVENT_VIDEO_INIT_FAILED},t))
case 5:case"end":return o.stop()}}),_callee12,this)})))
function initVideo(){return t.apply(this,arguments)}return initVideo}()},{key:"getPipelineStatus",value:function getPipelineStatus(){return this._logPublicMethodCall(this.getPipelineStatus.name),this.pipelineStatus}},{key:"takePhoto",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee13(){var t,n,o=arguments
return _regeneratorRuntime().wrap((function _callee13$(i){for(;;)switch(i.prev=i.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:{},n=t.watermarkUrl,this._logPublicMethodCall(this.takePhoto.name),[se.default.STATUS_RUNNING,se.default.STATUS_PAUSED].includes(this.pipelineStatus)){i.next=4
break}throw new Error("takePhoto is only available in RUNNING or PAUSED status")
case 4:return i.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_TAKE_PHOTO,acknowledgeEvent:Z.EVENT_TAKE_PHOTO_ACKNOWLEDGE,successEvent:Z.EVENT_PHOTO_TAKEN,failEvent:Z.EVENT_PHOTO_TAKE_FAILED},{watermarkUrl:n}))
case 5:case"end":return i.stop()}}),_callee13,this)})))
function takePhoto(){return t.apply(this,arguments)}return takePhoto}()},{key:"destroy",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee14(){return _regeneratorRuntime().wrap((function _callee14$(t){for(;;)switch(t.prev=t.next){case 0:this._logPublicMethodCall(this.destroy.name)
try{this.emit(Z.EVENT_DESTROYED),this._removeContainerViewportTracker(),this.clearAll()}finally{this.coreSdkAdapter.destroy(),this._setDefaultProps()}case 2:case"end":return t.stop()}}),_callee14,this)})))
function destroy(){return t.apply(this,arguments)}return destroy}()},{key:"setMode",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee15(t){var n,o
return _regeneratorRuntime().wrap((function _callee15$(i){for(;;)switch(i.prev=i.next){case 0:if(this._logPublicMethodCall(this.setMode.name),this._validateReady(),J.listOfModes.includes(t)){i.next=4
break}throw new Error('"mode" parameter is not correct. Please check documentation.')
case 4:if(t!==J.default.MODE_TYPE_AR||Q.arSupportTypes.includes(this.type)){i.next=6
break}throw new Error('"type" '.concat(this.type,' cannot be used with "mode" ').concat(J.default.MODE_TYPE_AR))
case 6:return n=performance.now(),(o=this._promisifyEvents({triggerEvent:Z.EVENT_SET_MODE,acknowledgeEvent:Z.EVENT_SET_MODE_ACKNOWLEDGE,successEvent:Z.EVENT_MODE_SET,failEvent:Z.EVENT_SET_MODE_FAILED,testData:function testData(t){return t.startTime===n},getResolveValue:function getResolveValue(t){return t.modeWasSet}},{mode:t,startTime:n}))&&(this.mode=t),i.abrupt("return",o)
case 10:case"end":return i.stop()}}),_callee15,this)})))
function setMode(n){return t.apply(this,arguments)}return setMode}()},{key:"getMode",value:function getMode(){return this._logPublicMethodCall(this.getMode.name),this.mode}},{key:"showWristMeasurement",value:function showWristMeasurement(t){var o=this,i=t.onError,c=(0,n.default)(t,de)
if(!i)throw new Error("'onError' should be specified");(0,ae.showWristMeasurement)(_objectSpread(_objectSpread({},c),{},{onError:function onError(t){o._logWristMeasureError(t),i(t)},sendLogEvent:this._logWristMeasureEvent.bind(this)}))}},{key:"debug",value:function debug(t){return this._promisifyEvents({triggerEvent:Z.EVENT_DEBUG,successEvent:Z.EVENT_DEBUG_SUCCESS,failEvent:Z.EVENT_DEBUG_FAILED},t)}},{key:"setPOI",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee16(t){return _regeneratorRuntime().wrap((function _callee16$(n){for(;;)switch(n.prev=n.next){case 0:if(this._logPublicMethodCall(this.setPOI.name),this.mode===J.default.MODE_TYPE_3D){n.next=3
break}throw new Error('"setPOI" available only in 3D mode. Please check documentation.')
case 3:return n.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_SET_POI,acknowledgeEvent:Z.EVENT_SET_POI_ACKNOWLEDGE,successEvent:Z.EVENT_POI_SET,failEvent:Z.EVENT_SET_POI_FAILED},{index:t}))
case 4:case"end":return n.stop()}}),_callee16,this)})))
function setPOI(n){return t.apply(this,arguments)}return setPOI}()},{key:"cameraZoom",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee17(t){return _regeneratorRuntime().wrap((function _callee17$(n){for(;;)switch(n.prev=n.next){case 0:if(this._logPublicMethodCall(this.cameraZoom.name),this.mode===J.default.MODE_TYPE_3D){n.next=3
break}throw new Error('"cameraZoom" available only in 3D mode. Please check documentation.')
case 3:if(Object.values(te.mode3dZoomTo).includes(t)){n.next=5
break}throw new Error('Incorrect "to" param. Please check documentation.')
case 5:return n.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_CAMERA_ZOOM,acknowledgeEvent:Z.EVENT_CAMERA_ZOOM_ACKNOWLEDGE,successEvent:Z.EVENT_CAMERA_ZOOMED,failEvent:Z.EVENT_CAMERA_ZOOM_FAILED},{to:t}))
case 6:case"end":return n.stop()}}),_callee17,this)})))
function cameraZoom(n){return t.apply(this,arguments)}return cameraZoom}()},{key:"showOnboarding",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee18(t){return _regeneratorRuntime().wrap((function _callee18$(n){for(;;)switch(n.prev=n.next){case 0:if(this._logPublicMethodCall(this.showOnboarding.name),this.mode===J.default.MODE_TYPE_3D){n.next=3
break}throw new Error('"showOnboarding" available only in 3D mode. Please check documentation.')
case 3:if(Object.values(re.default).includes(t)){n.next=5
break}throw new Error('Incorrect "action" param. Please check documentation.')
case 5:return n.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_ONBOARDING,acknowledgeEvent:Z.EVENT_ONBOARDING_ACKNOWLEDGE,successEvent:Z.EVENT_ONBOARDING_SUCCESS,failEvent:Z.EVENT_ONBOARDING_FAILED},{action:t}))
case 6:case"end":return n.stop()}}),_callee18,this)})))
function showOnboarding(n){return t.apply(this,arguments)}return showOnboarding}()},{key:"toggleDimensions",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee19(t,n){return _regeneratorRuntime().wrap((function _callee19$(o){for(;;)switch(o.prev=o.next){case 0:if(this._logPublicMethodCall(this.toggleDimensions.name),this.mode===J.default.MODE_TYPE_3D){o.next=3
break}throw new Error('"toggleDimensions" available only in 3D mode. Please check documentation.')
case 3:if(Object.values(te.mode3dDimensionsUnits).includes(n)){o.next=5
break}throw new Error('Incorrect "dimensionsUnit" param. Please check documentation.')
case 5:return o.abrupt("return",this._promisifyEvents({triggerEvent:Z.EVENT_TOGGLE_DIMENSIONS,acknowledgeEvent:Z.EVENT_TOGGLE_DIMENSIONS_ACKNOWLEDGE,successEvent:Z.EVENT_TOGGLE_DIMENSIONS_SUCCESS,failEvent:Z.EVENT_TOGGLE_DIMENSIONS_FAILED},{show:t,dimensionsUnit:n}))
case 6:case"end":return o.stop()}}),_callee19,this)})))
function toggleDimensions(n,o){return t.apply(this,arguments)}return toggleDimensions}()},{key:"_logWristMeasureEvent",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee20(t){var n,o,i,c=this
return _regeneratorRuntime().wrap((function _callee20$(u){for(;;)switch(u.prev=u.next){case 0:if(n=function sendEvent(t,n){return c._promisifyEvents({triggerEvent:Z.EVENT_LOG_WRIST_MEASURE_EVENT,acknowledgeEvent:Z.EVENT_LOG_WRIST_MEASURE_EVENT_ACKNOWLEDGE,successEvent:Z.EVENT_LOG_WRIST_MEASURE_EVENT_SUCCESS,failEvent:Z.EVENT_LOG_WRIST_MEASURE_EVENT_FAILED},{eventName:t,timestamp:n})},o=6e4*(new Date).getTimezoneOffset(),i=new Date(Date.now()-o).toISOString().replace("T"," ").replace("Z",""),!this.isReady()){u.next=5
break}return u.abrupt("return",n(t,i))
case 5:this.wristMeasurePostponedLogs||(this.wristMeasurePostponedLogs=[],this.once(Z.EVENT_INIT_FINISHED,(function(){c.wristMeasurePostponedLogs.forEach((function(t){var o=t.event,i=t.timestamp
n(o,i)})),c.wristMeasurePostponedLogs=null}))),this.wristMeasurePostponedLogs.push({event:t,timestamp:i})
case 7:case"end":return u.stop()}}),_callee20,this)})))
function _logWristMeasureEvent(n){return t.apply(this,arguments)}return _logWristMeasureEvent}()},{key:"_logWristMeasureError",value:function _logWristMeasureError(t){var n=this,o=function sendError(t){var o=t.message,i=new ie.default(o,{cause:t.error}),c=ie.default.toObject(i)
n.coreSdkAdapter.remoteEmit("error",_objectSpread(_objectSpread({},c),{},{details:ie.default.callStack(i)}))}
this.isReady()?o(t):(this.wristMeasureErrors||(this.once(Z.EVENT_INIT_FINISHED,(function(){n.wristMeasureErrors.forEach((function(t){o(t)})),n.wristMeasureErrors=null})),this.wristMeasureErrors=[]),this.wristMeasureErrors.push(t))}},{key:"setCustomPOI",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee21(t){var n,o,i
return _regeneratorRuntime().wrap((function _callee21$(c){for(;;)switch(c.prev=c.next){case 0:return n=t.cameraPosition,o=t.cameraRotation,i=t.pivot,c.abrupt("return",this.debug({setCustomPOI:{cameraPosition:n,cameraRotation:o,pivot:i}}))
case 2:case"end":return c.stop()}}),_callee21,this)})))
function setCustomPOI(n){return t.apply(this,arguments)}return setCustomPOI}()},{key:"getCurrentPOI",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee22(){return _regeneratorRuntime().wrap((function _callee22$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.debug({getCurrentPOI:!0}))
case 1:case"end":return t.stop()}}),_callee22,this)})))
function getCurrentPOI(){return t.apply(this,arguments)}return getCurrentPOI}()},{key:"getPOIsList",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee23(){return _regeneratorRuntime().wrap((function _callee23$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.debug({getPOIsList:!0}))
case 1:case"end":return t.stop()}}),_callee23,this)})))
function getPOIsList(){return t.apply(this,arguments)}return getPOIsList}()},{key:"resetCameraPosition",value:function(){var t=(0,i.default)(_regeneratorRuntime().mark((function _callee24(){return _regeneratorRuntime().wrap((function _callee24$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.debug({resetCameraPosition:!0}))
case 1:case"end":return t.stop()}}),_callee24,this)})))
function resetCameraPosition(){return t.apply(this,arguments)}return resetCameraPosition}()}]),PublicSdk}(Y.default)
Object.assign(_e.prototype,Z),Object.assign(_e.prototype,se.default),Object.assign(_e.prototype,Q.default),Object.assign(_e.prototype,J.default),Object.assign(_e.prototype,te.mode3dZoomTo),Object.assign(_e.prototype,X.default),Object.assign(_e.prototype,re.default),Object.assign(_e.prototype,te.mode3dDimensionsUnits),Object.assign(_e.prototype,{RESOURCE_TYPE_MODEL:ee.RESOURCE_TYPE_MODEL,ERROR_SDK_DESTROYED:ue.ERROR_SDK_DESTROYED})
var he=new _e
t.default=he}))},void 0===(u="function"===typeof i?i.apply(n,c):i)||(t.exports=u)},"6c753cb75fab3b780c2d":function(t,n){var o,i,c
i=[],void 0===(c="function"===typeof(o=function(){var t=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i
function indexOrEnd(t,n){return-1===t.indexOf(n)?t.length:t.indexOf(n)}function split(t){var n=t.replace(/^v/,"").replace(/\+.*$/,""),o=indexOrEnd(n,"-"),i=n.substring(0,o).split(".")
return i.push(n.substring(o+1)),i}function tryParse(t){return isNaN(Number(t))?t:Number(t)}function validate(n){if("string"!==typeof n)throw new TypeError("Invalid argument expected string")
if(!t.test(n))throw new Error("Invalid argument not valid semver ('"+n+"' received)")}function compareVersions(t,n){[t,n].forEach(validate)
for(var o=split(t),i=split(n),c=0;c<Math.max(o.length-1,i.length-1);c++){var u=parseInt(o[c]||0,10),l=parseInt(i[c]||0,10)
if(u>l)return 1
if(l>u)return-1}var E=o[o.length-1],D=i[i.length-1]
if(E&&D){var R=E.split(".").map(tryParse),G=D.split(".").map(tryParse)
for(c=0;c<Math.max(R.length,G.length);c++){if(void 0===R[c]||"string"===typeof G[c]&&"number"===typeof R[c])return-1
if(void 0===G[c]||"string"===typeof R[c]&&"number"===typeof G[c])return 1
if(R[c]>G[c])return 1
if(G[c]>R[c])return-1}}else if(E||D)return E?-1:1
return 0}var n=[">",">=","=","<","<="],o={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]}
function validateOperator(t){if("string"!==typeof t)throw new TypeError("Invalid operator type, expected string but got "+typeof t)
if(-1===n.indexOf(t))throw new TypeError("Invalid operator, expected one of "+n.join("|"))}return compareVersions.validate=function(n){return"string"===typeof n&&t.test(n)},compareVersions.compare=function(t,n,i){validateOperator(i)
var c=compareVersions(t,n)
return o[i].indexOf(c)>-1},compareVersions})?o.apply(n,i):o)||(t.exports=c)},"33309d0f96eb815b5606":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>E})
var i=o("efc7acb2c2f57c966541"),c=o.n(i),u=o("ad9267f4a32434209478"),l=o.n(u)()(c())
l.push([t.id,".styles-module__container__nKw-I{display:flex;flex-direction:column;width:100%;height:100%;touch-action:none;-webkit-user-select:none;user-select:none}.styles-module__container__nKw-I *{margin:0;padding:0}.styles-module__container__nKw-I *,.styles-module__container__nKw-I ::before,.styles-module__container__nKw-I ::after{box-sizing:border-box}\n","",{version:3,sources:["webpack://./../public-sdk/src/wristMeasurement/components/App/styles.module.scss"],names:[],mappings:"AAAA,iCAAW,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,gBAAgB,CAAC,mCAAa,QAAQ,CAAC,SAAS,CAAC,sHAAoD,qBAAqB",sourcesContent:[".container{display:flex;flex-direction:column;width:100%;height:100%;touch-action:none;-webkit-user-select:none;user-select:none}.container *{margin:0;padding:0}.container *,.container ::before,.container ::after{box-sizing:border-box}\n"],sourceRoot:""}]),l.locals={container:"styles-module__container__nKw-I"}
const E=l},c56e301c0ec77ef0712d:(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>E})
var i=o("efc7acb2c2f57c966541"),c=o.n(i),u=o("ad9267f4a32434209478"),l=o.n(u)()(c())
l.push([t.id,".styles-module__container__u-yuQ{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;font-size:20px;line-height:120%;background:var(--background-color);color:var(--primary-color);position:fixed;z-index:999}.styles-module__label__090Aq{margin-bottom:40px}\n","",{version:3,sources:["webpack://./../public-sdk/src/wristMeasurement/components/PortraitOrientation/styles.module.scss"],names:[],mappings:"AAAA,iCAAW,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,gBAAgB,CAAC,kCAAkC,CAAC,0BAA0B,CAAC,cAAc,CAAC,WAAW,CAAC,6BAAO,kBAAkB",sourcesContent:[".container{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;font-size:20px;line-height:120%;background:var(--background-color);color:var(--primary-color);position:fixed;z-index:999}.label{margin-bottom:40px}\n"],sourceRoot:""}]),l.locals={container:"styles-module__container__u-yuQ",label:"styles-module__label__090Aq"}
const E=l},adcd96c63fc76bc01678:(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>E})
var i=o("efc7acb2c2f57c966541"),c=o.n(i),u=o("ad9267f4a32434209478"),l=o.n(u)()(c())
l.push([t.id,":root{--overlay-notch-color-light-theme: #000;--overlay-notch-color-dark-theme: #fff;--background-color: #ffffff;--primary-color: #000000;--notch-color: #878787;--overlay-notch-color: var(--overlay-notch-color-light-theme);--ruler-color: var(--primary-color);--ruler-notches-color: #000000;--ruler-fill-color: #ececec;--icons-color: var(--primary-color);--button-fill-color: var(--primary-color);--button-text-color: var(--background-color);--button-stroke-color: transparent;--button-radius: 24px}.wanna-theme-dark{--background-color: #2d2d2d;--primary-color: #ffffff;--overlay-notch-color: var(--overlay-notch-color-dark-theme);--ruler-fill-color: rgba(255, 255, 255, 0.2)}.styles-module__layout__rbxPD{box-sizing:border-box;height:100%;position:relative;background:var(--background-color);display:flex;flex-direction:column;--notch-letter-width: 25px}.styles-module__header__6L2F4{height:65px;padding:12px 8px 8px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;color:var(--primary-color)}.styles-module__headerButton__S6nCb{height:44px;width:44px;border:0;outline:none;padding:0;background:transparent;color:var(--icons-color)}.styles-module__headerButton_hidden__HsTTt{visibility:hidden}.styles-module__headerText__dRBj7{font-size:14px;line-height:16px;font-weight:500;position:relative;text-align:center}.styles-module__headerTextArrow__SJS0D{position:absolute;display:block;width:12px;height:12px;bottom:-16px;right:calc(50% - 6px)}.styles-module__content__ueRv6{flex-grow:1;display:flex;flex-direction:column}.styles-module__main__\\+tXa7{flex-grow:1;position:relative}.styles-module__footer__0tX0\\+{padding:32px 0 16px;display:flex;justify-content:center}.styles-module__footerButton__Dts2q{outline:none;padding:10px 40px;border-radius:var(--button-radius);background:var(--button-fill-color);color:var(--button-text-color);border:1px solid var(--button-stroke-color);font-size:16px;line-height:16px;font-weight:500;transition:opacity 150ms ease-in-out;font-family:inherit}.styles-module__footerButton__Dts2q:active{opacity:0.8}.styles-module__tick__UZy2f{display:block;position:absolute;height:1px;width:25px;background:var(--notch-color);left:0}.styles-module__tick_small__j7Znm{width:16px}.styles-module__tick_right__Yn0On{left:initial;right:0}.styles-module__tickLetter__djaEg{position:absolute;color:var(--notch-color);transform:translate(100%, -50%);right:-8px;font-weight:500;user-select:none}.styles-module__notches__o4AHV,.styles-module__overlayNotches__E91fJ{position:absolute;top:0;width:100%;height:100%;overflow:hidden}.styles-module__notches__o4AHV{background-size:16px 2px;background-repeat:repeat-x}.styles-module__overlayNotches__E91fJ{--notch-color: var(--overlay-notch-color);background:linear-gradient(to right, var(--primary-color) 10px, transparent 1px) repeat-x;background-size:16px 2px}.styles-module__ruler__MOJo4{position:absolute;box-sizing:border-box;width:100%;display:flex;flex-direction:column;justify-content:flex-end}.styles-module__rulerBackground__bx65P{position:absolute;width:100%;height:100%;background:var(--ruler-fill-color)}.styles-module__rulerContent__8XrUT{display:flex;position:absolute;width:100%;bottom:0;transform:translateY(50%);flex-direction:column;align-items:center;background-image:linear-gradient(to right, var(--ruler-color), var(--ruler-color));background-repeat:repeat-x;background-position:center center;background-size:100% 4px;z-index:1}.styles-module__rulerCircle__xqkeJ{z-index:1;height:40px;width:40px;background:#ffffff;border-radius:50%;box-shadow:0px 4px 8px rgba(0,0,0,0.2);background-image:linear-gradient(to bottom, var(--ruler-notches-color) 1px, transparent 2px, transparent 6px, var(--ruler-notches-color) 7px);background-size:16px 8px;background-position-y:16px;background-position-x:12px;background-repeat:no-repeat}.styles-module__rulerText__8sve1{position:absolute;bottom:0;font-size:14px;line-height:16px;font-weight:500;max-width:calc(100% - 96px);text-align:center;color:var(--primary-color);transform:translateY(30px);transition:opacity 150ms ease-in-out}.styles-module__rulerTextHidden__w25y6{opacity:0}\n","",{version:3,sources:["webpack://./../public-sdk/src/wristMeasurement/components/WristMeasure/styles.module.scss"],names:[],mappings:"AAAA,MAAM,uCAAuC,CAAC,sCAAsC,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,sBAAsB,CAAC,6DAA6D,CAAC,mCAAmC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mCAAmC,CAAC,yCAAyC,CAAC,4CAA4C,CAAC,kCAAkC,CAAC,qBAAqB,CAAC,kBAA2B,2BAA2B,CAAC,wBAAwB,CAAC,4DAA4D,CAAC,4CAA4C,CAAC,8BAAQ,qBAAqB,CAAC,WAAW,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,YAAY,CAAC,qBAAqB,CAAC,0BAA0B,CAAC,8BAAQ,WAAW,CAAC,oBAAoB,CAAC,YAAY,CAAC,6BAA6B,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,0BAA0B,CAAC,oCAAc,WAAW,CAAC,UAAU,CAAC,QAAQ,CAAC,YAAY,CAAC,SAAS,CAAC,sBAAsB,CAAC,wBAAwB,CAAC,2CAAqB,iBAAiB,CAAC,kCAAY,cAAc,CAAC,gBAAgB,CAAC,eAAe,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,uCAAiB,iBAAiB,CAAC,aAAa,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY,CAAC,qBAAqB,CAAC,+BAAS,WAAW,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAAM,WAAW,CAAC,iBAAiB,CAAC,+BAAQ,mBAAmB,CAAC,YAAY,CAAC,sBAAsB,CAAC,oCAAc,YAAY,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,mCAAmC,CAAC,8BAA8B,CAAC,2CAA2C,CAAC,cAAc,CAAC,gBAAgB,CAAC,eAAe,CAAC,oCAAoC,CAAC,mBAAmB,CAAC,2CAAqB,WAAW,CAAC,4BAAM,aAAa,CAAC,iBAAiB,CAAC,UAAU,CAAC,UAAU,CAAC,6BAA6B,CAAC,MAAM,CAAC,kCAAY,UAAU,CAAC,kCAAY,YAAY,CAAC,OAAO,CAAC,kCAAY,iBAAiB,CAAC,wBAAwB,CAAC,+BAA+B,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,qEAAyB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,eAAe,CAAC,+BAAS,wBAAwB,CAAC,0BAA0B,CAAC,sCAAgB,yCAAyC,CAAC,yFAAyF,CAAC,wBAAwB,CAAC,6BAAO,iBAAiB,CAAC,qBAAqB,CAAC,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,wBAAwB,CAAC,uCAAiB,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,kCAAkC,CAAC,oCAAc,YAAY,CAAC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,yBAAyB,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,kFAAkF,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,wBAAwB,CAAC,SAAS,CAAC,mCAAa,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,sCAAsC,CAAC,6IAA6I,CAAC,wBAAwB,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,2BAA2B,CAAC,iCAAW,iBAAiB,CAAC,QAAQ,CAAC,cAAc,CAAC,gBAAgB,CAAC,eAAe,CAAC,2BAA2B,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,0BAA0B,CAAC,oCAAoC,CAAC,uCAAiB,SAAS",sourcesContent:[":root{--overlay-notch-color-light-theme: #000;--overlay-notch-color-dark-theme: #fff;--background-color: #ffffff;--primary-color: #000000;--notch-color: #878787;--overlay-notch-color: var(--overlay-notch-color-light-theme);--ruler-color: var(--primary-color);--ruler-notches-color: #000000;--ruler-fill-color: #ececec;--icons-color: var(--primary-color);--button-fill-color: var(--primary-color);--button-text-color: var(--background-color);--button-stroke-color: transparent;--button-radius: 24px}:global(.wanna-theme-dark){--background-color: #2d2d2d;--primary-color: #ffffff;--overlay-notch-color: var(--overlay-notch-color-dark-theme);--ruler-fill-color: rgba(255, 255, 255, 0.2)}.layout{box-sizing:border-box;height:100%;position:relative;background:var(--background-color);display:flex;flex-direction:column;--notch-letter-width: 25px}.header{height:65px;padding:12px 8px 8px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;color:var(--primary-color)}.headerButton{height:44px;width:44px;border:0;outline:none;padding:0;background:transparent;color:var(--icons-color)}.headerButton_hidden{visibility:hidden}.headerText{font-size:14px;line-height:16px;font-weight:500;position:relative;text-align:center}.headerTextArrow{position:absolute;display:block;width:12px;height:12px;bottom:-16px;right:calc(50% - 6px)}.content{flex-grow:1;display:flex;flex-direction:column}.main{flex-grow:1;position:relative}.footer{padding:32px 0 16px;display:flex;justify-content:center}.footerButton{outline:none;padding:10px 40px;border-radius:var(--button-radius);background:var(--button-fill-color);color:var(--button-text-color);border:1px solid var(--button-stroke-color);font-size:16px;line-height:16px;font-weight:500;transition:opacity 150ms ease-in-out;font-family:inherit}.footerButton:active{opacity:0.8}.tick{display:block;position:absolute;height:1px;width:25px;background:var(--notch-color);left:0}.tick_small{width:16px}.tick_right{left:initial;right:0}.tickLetter{position:absolute;color:var(--notch-color);transform:translate(100%, -50%);right:-8px;font-weight:500;user-select:none}.notches,.overlayNotches{position:absolute;top:0;width:100%;height:100%;overflow:hidden}.notches{background-size:16px 2px;background-repeat:repeat-x}.overlayNotches{--notch-color: var(--overlay-notch-color);background:linear-gradient(to right, var(--primary-color) 10px, transparent 1px) repeat-x;background-size:16px 2px}.ruler{position:absolute;box-sizing:border-box;width:100%;display:flex;flex-direction:column;justify-content:flex-end}.rulerBackground{position:absolute;width:100%;height:100%;background:var(--ruler-fill-color)}.rulerContent{display:flex;position:absolute;width:100%;bottom:0;transform:translateY(50%);flex-direction:column;align-items:center;background-image:linear-gradient(to right, var(--ruler-color), var(--ruler-color));background-repeat:repeat-x;background-position:center center;background-size:100% 4px;z-index:1}.rulerCircle{z-index:1;height:40px;width:40px;background:#ffffff;border-radius:50%;box-shadow:0px 4px 8px rgba(0,0,0,0.2);background-image:linear-gradient(to bottom, var(--ruler-notches-color) 1px, transparent 2px, transparent 6px, var(--ruler-notches-color) 7px);background-size:16px 8px;background-position-y:16px;background-position-x:12px;background-repeat:no-repeat}.rulerText{position:absolute;bottom:0;font-size:14px;line-height:16px;font-weight:500;max-width:calc(100% - 96px);text-align:center;color:var(--primary-color);transform:translateY(30px);transition:opacity 150ms ease-in-out}.rulerTextHidden{opacity:0}\n"],sourceRoot:""}]),l.locals={layout:"styles-module__layout__rbxPD",header:"styles-module__header__6L2F4",headerButton:"styles-module__headerButton__S6nCb",headerButton_hidden:"styles-module__headerButton_hidden__HsTTt",headerText:"styles-module__headerText__dRBj7",headerTextArrow:"styles-module__headerTextArrow__SJS0D",content:"styles-module__content__ueRv6",main:"styles-module__main__+tXa7",footer:"styles-module__footer__0tX0+",footerButton:"styles-module__footerButton__Dts2q",tick:"styles-module__tick__UZy2f",tick_small:"styles-module__tick_small__j7Znm",tick_right:"styles-module__tick_right__Yn0On",tickLetter:"styles-module__tickLetter__djaEg",notches:"styles-module__notches__o4AHV",overlayNotches:"styles-module__overlayNotches__E91fJ",ruler:"styles-module__ruler__MOJo4",rulerBackground:"styles-module__rulerBackground__bx65P",rulerContent:"styles-module__rulerContent__8XrUT",rulerCircle:"styles-module__rulerCircle__xqkeJ",rulerText:"styles-module__rulerText__8sve1",rulerTextHidden:"styles-module__rulerTextHidden__w25y6"}
const E=l},ad9267f4a32434209478:t=>{"use strict"
t.exports=function(t){var n=[]
return n.toString=function toString(){return this.map((function(n){var o=t(n)
return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},n.i=function(t,o,i){"string"===typeof t&&(t=[[null,t,""]])
var c={}
if(i)for(var u=0;u<this.length;u++){var l=this[u][0]
null!=l&&(c[l]=!0)}for(var E=0;E<t.length;E++){var D=[].concat(t[E])
i&&c[D[0]]||(o&&(D[2]?D[2]="".concat(o," and ").concat(D[2]):D[2]=o),n.push(D))}},n}},efc7acb2c2f57c966541:t=>{"use strict"
function _slicedToArray(t,n){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return
var o=[],i=!0,c=!1,u=void 0
try{for(var l,E=t[Symbol.iterator]();!(i=(l=E.next()).done)&&(o.push(l.value),!n||o.length!==n);i=!0);}catch(t){c=!0,u=t}finally{try{i||null==E.return||E.return()}finally{if(c)throw u}}return o}(t,n)||function _unsupportedIterableToArray(t,n){if(!t)return
if("string"===typeof t)return _arrayLikeToArray(t,n)
var o=Object.prototype.toString.call(t).slice(8,-1)
"Object"===o&&t.constructor&&(o=t.constructor.name)
if("Map"===o||"Set"===o)return Array.from(t)
if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _arrayLikeToArray(t,n)}(t,n)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length)
for(var o=0,i=new Array(n);o<n;o++)i[o]=t[o]
return i}t.exports=function cssWithMappingToString(t){var n=_slicedToArray(t,4),o=n[1],i=n[3]
if("function"===typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(u," */"),E=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}))
return[o].concat(E).concat([l]).join("\n")}return[o].join("\n")}},e692ee41a9a53b261469:(t,n,o)=>{"use strict"
o.r(n),o.d(n,{Component:()=>d,Fragment:()=>p,cloneElement:()=>q,createContext:()=>B,createElement:()=>h,createRef:()=>y,h:()=>h,hydrate:()=>S,isValidElement:()=>l,options:()=>c,render:()=>P,toChildArray:()=>x})
var i,c,u,l,E,D,R,G={},U=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
function s(t,n){for(var o in n)t[o]=n[o]
return t}function a(t){var n=t.parentNode
n&&n.removeChild(t)}function h(t,n,o){var c,u,l,E={}
for(l in n)"key"==l?c=n[l]:"ref"==l?u=n[l]:E[l]=n[l]
if(arguments.length>2&&(E.children=arguments.length>3?i.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===E[l]&&(E[l]=t.defaultProps[l])
return v(t,E,c,u,null)}function v(t,n,o,i,l){var E={type:t,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++u:l}
return null==l&&null!=c.vnode&&c.vnode(E),E}function y(){return{current:null}}function p(t){return t.children}function d(t,n){this.props=t,this.context=n}function _(t,n){if(null==n)return t.__?_(t.__,t.__.__k.indexOf(t)+1):null
for(var o;n<t.__k.length;n++)if(null!=(o=t.__k[n])&&null!=o.__e)return o.__e
return"function"==typeof t.type?_(t):null}function k(t){var n,o
if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(o=t.__k[n])&&null!=o.__e){t.__e=t.__c.base=o.__e
break}return k(t)}}function b(t){(!t.__d&&(t.__d=!0)&&E.push(t)&&!g.__r++||D!==c.debounceRendering)&&((D=c.debounceRendering)||setTimeout)(g)}function g(){for(var t;g.__r=E.length;)t=E.sort((function(t,n){return t.__v.__b-n.__v.__b})),E=[],t.some((function(t){var n,o,i,c,u,l
t.__d&&(u=(c=(n=t).__v).__e,(l=n.__P)&&(o=[],(i=s({},c)).__v=c.__v+1,j(l,c,i,n.__n,void 0!==l.ownerSVGElement,null!=c.__h?[u]:null,o,null==u?_(c):u,c.__h),z(o,c),c.__e!=u&&k(c)))}))}function w(t,n,o,i,c,u,l,E,D,R){var W,K,Y,Z,Q,J,X,ee=i&&i.__k||U,te=ee.length
for(o.__k=[],W=0;W<n.length;W++)if(null!=(Z=o.__k[W]=null==(Z=n[W])||"boolean"==typeof Z?null:"string"==typeof Z||"number"==typeof Z||"bigint"==typeof Z?v(null,Z,null,null,Z):Array.isArray(Z)?v(p,{children:Z},null,null,null):Z.__b>0?v(Z.type,Z.props,Z.key,null,Z.__v):Z)){if(Z.__=o,Z.__b=o.__b+1,null===(Y=ee[W])||Y&&Z.key==Y.key&&Z.type===Y.type)ee[W]=void 0
else for(K=0;K<te;K++){if((Y=ee[K])&&Z.key==Y.key&&Z.type===Y.type){ee[K]=void 0
break}Y=null}j(t,Z,Y=Y||G,c,u,l,E,D,R),Q=Z.__e,(K=Z.ref)&&Y.ref!=K&&(X||(X=[]),Y.ref&&X.push(Y.ref,null,Z),X.push(K,Z.__c||Q,Z)),null!=Q?(null==J&&(J=Q),"function"==typeof Z.type&&Z.__k===Y.__k?Z.__d=D=m(Z,D,t):D=A(t,Z,Y,ee,Q,D),"function"==typeof o.type&&(o.__d=D)):D&&Y.__e==D&&D.parentNode!=t&&(D=_(Y))}for(o.__e=J,W=te;W--;)null!=ee[W]&&("function"==typeof o.type&&null!=ee[W].__e&&ee[W].__e==o.__d&&(o.__d=_(i,W+1)),N(ee[W],ee[W]))
if(X)for(W=0;W<X.length;W++)M(X[W],X[++W],X[++W])}function m(t,n,o){for(var i,c=t.__k,u=0;c&&u<c.length;u++)(i=c[u])&&(i.__=t,n="function"==typeof i.type?m(i,n,o):A(o,i,i,c,i.__e,n))
return n}function x(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){x(t,n)})):n.push(t)),n}function A(t,n,o,i,c,u){var l,E,D
if(void 0!==n.__d)l=n.__d,n.__d=void 0
else if(null==o||c!=u||null==c.parentNode)e:if(null==u||u.parentNode!==t)t.appendChild(c),l=null
else{for(E=u,D=0;(E=E.nextSibling)&&D<i.length;D+=2)if(E==c)break e
t.insertBefore(c,u),l=u}return void 0!==l?l:c.nextSibling}function $(t,n,o){"-"===n[0]?t.setProperty(n,o):t[n]=null==o?"":"number"!=typeof o||W.test(n)?o:o+"px"}function H(t,n,o,i,c){var u
e:if("style"===n)if("string"==typeof o)t.style.cssText=o
else{if("string"==typeof i&&(t.style.cssText=i=""),i)for(n in i)o&&n in o||$(t.style,n,"")
if(o)for(n in o)i&&o[n]===i[n]||$(t.style,n,o[n])}else if("o"===n[0]&&"n"===n[1])u=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+u]=o,o?i||t.addEventListener(n,u?T:I,u):t.removeEventListener(n,u?T:I,u)
else if("dangerouslySetInnerHTML"!==n){if(c)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in t)try{t[n]=null==o?"":o
break e}catch(t){}"function"==typeof o||(null!=o&&(!1!==o||"a"===n[0]&&"r"===n[1])?t.setAttribute(n,o):t.removeAttribute(n))}}function I(t){this.l[t.type+!1](c.event?c.event(t):t)}function T(t){this.l[t.type+!0](c.event?c.event(t):t)}function j(t,n,o,i,u,l,E,D,R){var G,U,W,K,Y,Z,Q,J,X,ee,te,re,ne,oe=n.type
if(void 0!==n.constructor)return null
null!=o.__h&&(R=o.__h,D=n.__e=o.__e,n.__h=null,l=[D]),(G=c.__b)&&G(n)
try{e:if("function"==typeof oe){if(J=n.props,X=(G=oe.contextType)&&i[G.__c],ee=G?X?X.props.value:G.__:i,o.__c?Q=(U=n.__c=o.__c).__=U.__E:("prototype"in oe&&oe.prototype.render?n.__c=U=new oe(J,ee):(n.__c=U=new d(J,ee),U.constructor=oe,U.render=O),X&&X.sub(U),U.props=J,U.state||(U.state={}),U.context=ee,U.__n=i,W=U.__d=!0,U.__h=[]),null==U.__s&&(U.__s=U.state),null!=oe.getDerivedStateFromProps&&(U.__s==U.state&&(U.__s=s({},U.__s)),s(U.__s,oe.getDerivedStateFromProps(J,U.__s))),K=U.props,Y=U.state,W)null==oe.getDerivedStateFromProps&&null!=U.componentWillMount&&U.componentWillMount(),null!=U.componentDidMount&&U.__h.push(U.componentDidMount)
else{if(null==oe.getDerivedStateFromProps&&J!==K&&null!=U.componentWillReceiveProps&&U.componentWillReceiveProps(J,ee),!U.__e&&null!=U.shouldComponentUpdate&&!1===U.shouldComponentUpdate(J,U.__s,ee)||n.__v===o.__v){U.props=J,U.state=U.__s,n.__v!==o.__v&&(U.__d=!1),U.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(t){t&&(t.__=n)})),U.__h.length&&E.push(U)
break e}null!=U.componentWillUpdate&&U.componentWillUpdate(J,U.__s,ee),null!=U.componentDidUpdate&&U.__h.push((function(){U.componentDidUpdate(K,Y,Z)}))}if(U.context=ee,U.props=J,U.__v=n,U.__P=t,te=c.__r,re=0,"prototype"in oe&&oe.prototype.render)U.state=U.__s,U.__d=!1,te&&te(n),G=U.render(U.props,U.state,U.context)
else do{U.__d=!1,te&&te(n),G=U.render(U.props,U.state,U.context),U.state=U.__s}while(U.__d&&++re<25)
U.state=U.__s,null!=U.getChildContext&&(i=s(s({},i),U.getChildContext())),W||null==U.getSnapshotBeforeUpdate||(Z=U.getSnapshotBeforeUpdate(K,Y)),ne=null!=G&&G.type===p&&null==G.key?G.props.children:G,w(t,Array.isArray(ne)?ne:[ne],n,o,i,u,l,E,D,R),U.base=n.__e,n.__h=null,U.__h.length&&E.push(U),Q&&(U.__E=U.__=null),U.__e=!1}else null==l&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=L(o.__e,n,o,i,u,l,E,R);(G=c.diffed)&&G(n)}catch(t){n.__v=null,(R||null!=l)&&(n.__e=D,n.__h=!!R,l[l.indexOf(D)]=null),c.__e(t,n,o)}}function z(t,n){c.__c&&c.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){c.__e(t,n.__v)}}))}function L(t,n,o,c,u,l,E,D){var R,U,W,K=o.props,Y=n.props,Z=n.type,Q=0
if("svg"===Z&&(u=!0),null!=l)for(;Q<l.length;Q++)if((R=l[Q])&&"setAttribute"in R==!!Z&&(Z?R.localName===Z:3===R.nodeType)){t=R,l[Q]=null
break}if(null==t){if(null===Z)return document.createTextNode(Y)
t=u?document.createElementNS("http://www.w3.org/2000/svg",Z):document.createElement(Z,Y.is&&Y),l=null,D=!1}if(null===Z)K===Y||D&&t.data===Y||(t.data=Y)
else{if(l=l&&i.call(t.childNodes),U=(K=o.props||G).dangerouslySetInnerHTML,W=Y.dangerouslySetInnerHTML,!D){if(null!=l)for(K={},Q=0;Q<t.attributes.length;Q++)K[t.attributes[Q].name]=t.attributes[Q].value;(W||U)&&(W&&(U&&W.__html==U.__html||W.__html===t.innerHTML)||(t.innerHTML=W&&W.__html||""))}if(function C(t,n,o,i,c){var u
for(u in o)"children"===u||"key"===u||u in n||H(t,u,null,o[u],i)
for(u in n)c&&"function"!=typeof n[u]||"children"===u||"key"===u||"value"===u||"checked"===u||o[u]===n[u]||H(t,u,n[u],o[u],i)}(t,Y,K,u,D),W)n.__k=[]
else if(Q=n.props.children,w(t,Array.isArray(Q)?Q:[Q],n,o,c,u&&"foreignObject"!==Z,l,E,l?l[0]:o.__k&&_(o,0),D),null!=l)for(Q=l.length;Q--;)null!=l[Q]&&a(l[Q])
D||("value"in Y&&void 0!==(Q=Y.value)&&(Q!==t.value||"progress"===Z&&!Q||"option"===Z&&Q!==K.value)&&H(t,"value",Q,K.value,!1),"checked"in Y&&void 0!==(Q=Y.checked)&&Q!==t.checked&&H(t,"checked",Q,K.checked,!1))}return t}function M(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){c.__e(t,o)}}function N(t,n,o){var i,u
if(c.unmount&&c.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||M(i,null,n)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){c.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(u=0;u<i.length;u++)i[u]&&N(i[u],n,"function"!=typeof t.type)
o||null==t.__e||a(t.__e),t.__e=t.__d=void 0}function O(t,n,o){return this.constructor(t,o)}function P(t,n,o){var u,l,E
c.__&&c.__(t,n),l=(u="function"==typeof o)?null:o&&o.__k||n.__k,E=[],j(n,t=(!u&&o||n).__k=h(p,null,[t]),l||G,G,void 0!==n.ownerSVGElement,!u&&o?[o]:l?null:n.firstChild?i.call(n.childNodes):null,E,!u&&o?o:l?l.__e:n.firstChild,u),z(E,t)}function S(t,n){P(t,n,S)}function q(t,n,o){var c,u,l,E=s({},t.props)
for(l in n)"key"==l?c=n[l]:"ref"==l?u=n[l]:E[l]=n[l]
return arguments.length>2&&(E.children=arguments.length>3?i.call(arguments,2):o),v(t.type,E,c||t.key,u||t.ref,null)}function B(t,n){var o={__c:n="__cC"+R++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var o,i
return this.getChildContext||(o=[],(i={})[n]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&o.some(b)},this.sub=function(t){o.push(t)
var n=t.componentWillUnmount
t.componentWillUnmount=function(){o.splice(o.indexOf(t),1),n&&n.call(t)}}),t.children}}
return o.Provider.__=o.Consumer.contextType=o}i=U.slice,c={__e:function(t,n,o,i){for(var c,u,l;n=n.__;)if((c=n.__c)&&!c.__)try{if((u=c.constructor)&&null!=u.getDerivedStateFromError&&(c.setState(u.getDerivedStateFromError(t)),l=c.__d),null!=c.componentDidCatch&&(c.componentDidCatch(t,i||{}),l=c.__d),l)return c.__E=c}catch(n){t=n}throw t}},u=0,l=function(t){return null!=t&&void 0===t.constructor},d.prototype.setState=function(t,n){var o
o=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof t&&(t=t(s({},o),this.props)),t&&s(o,t),null!=t&&this.__v&&(n&&this.__h.push(n),b(this))},d.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),b(this))},d.prototype.render=p,E=[],g.__r=0,R=0},"56af9af470f289f057ae":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{useCallback:()=>T,useContext:()=>q,useDebugValue:()=>x,useEffect:()=>h,useErrorBoundary:()=>V,useImperativeHandle:()=>A,useLayoutEffect:()=>s,useMemo:()=>F,useReducer:()=>y,useRef:()=>_,useState:()=>p})
var i,c,u,l,E=o("e692ee41a9a53b261469"),D=0,R=[],G=[],U=E.options.__b,W=E.options.__r,K=E.options.diffed,Y=E.options.__c,Z=E.options.unmount
function d(t,n){E.options.__h&&E.options.__h(c,t,D||n),D=0
var o=c.__H||(c.__H={__:[],__h:[]})
return t>=o.__.length&&o.__.push({__V:G}),o.__[t]}function p(t){return D=1,y(z,t)}function y(t,n,o){var u=d(i++,2)
if(u.t=t,!u.__c&&(u.__=[o?o(n):z(void 0,n),function(t){var n=u.__N?u.__N[0]:u.__[0],o=u.t(n,t)
n!==o&&(u.__N=[o,u.__[1]],u.__c.setState({}))}],u.__c=c,!c.u)){c.u=!0
var l=c.shouldComponentUpdate
c.shouldComponentUpdate=function(t,n,o){if(!u.__c.__H)return!0
var i=u.__c.__H.__.filter((function(t){return t.__c}))
if(i.every((function(t){return!t.__N})))return!l||l.call(this,t,n,o)
var c=!1
return i.forEach((function(t){if(t.__N){var n=t.__[0]
t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(c=!0)}})),!!c&&(!l||l.call(this,t,n,o))}}return u.__N||u.__}function h(t,n){var o=d(i++,3)
!E.options.__s&&w(o.__H,n)&&(o.__=t,o.i=n,c.__H.__h.push(o))}function s(t,n){var o=d(i++,4)
!E.options.__s&&w(o.__H,n)&&(o.__=t,o.i=n,c.__h.push(o))}function _(t){return D=5,F((function(){return{current:t}}),[])}function A(t,n,o){D=6,s((function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0}),null==o?o:o.concat(t))}function F(t,n){var o=d(i++,7)
return w(o.__H,n)?(o.__V=t(),o.i=n,o.__h=t,o.__V):o.__}function T(t,n){return D=8,F((function(){return t}),n)}function q(t){var n=c.context[t.__c],o=d(i++,9)
return o.c=t,n?(null==o.__&&(o.__=!0,n.sub(c)),n.props.value):t.__}function x(t,n){E.options.useDebugValue&&E.options.useDebugValue(n?n(t):t)}function V(t){var n=d(i++,10),o=p()
return n.__=t,c.componentDidCatch||(c.componentDidCatch=function(t){n.__&&n.__(t),o[1](t)}),[o[0],function(){o[1](void 0)}]}function b(){for(var t;t=R.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(k),t.__H.__h=[]}catch(n){t.__H.__h=[],E.options.__e(n,t.__v)}}E.options.__b=function(t){c=null,U&&U(t)},E.options.__r=function(t){W&&W(t),i=0
var n=(c=t.__c).__H
n&&(u===c?(n.__h=[],c.__h=[],n.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=G,t.__N=t.i=void 0}))):(n.__h.forEach(j),n.__h.forEach(k),n.__h=[])),u=c},E.options.diffed=function(t){K&&K(t)
var n=t.__c
n&&n.__H&&(n.__H.__h.length&&(1!==R.push(n)&&l===E.options.requestAnimationFrame||((l=E.options.requestAnimationFrame)||function(t){var n,r=function(){clearTimeout(o),Q&&cancelAnimationFrame(n),setTimeout(t)},o=setTimeout(r,100)
Q&&(n=requestAnimationFrame(r))})(b)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==G&&(t.__=t.__V),t.i=void 0,t.__V=G}))),u=c=null},E.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(j),t.__h=t.__h.filter((function(t){return!t.__||k(t)}))}catch(o){n.some((function(t){t.__h&&(t.__h=[])})),n=[],E.options.__e(o,t.__v)}})),Y&&Y(t,n)},E.options.unmount=function(t){Z&&Z(t)
var n,o=t.__c
o&&o.__H&&(o.__H.__.forEach((function(t){try{j(t)}catch(t){n=t}})),n&&E.options.__e(n,o.__v))}
var Q="function"==typeof requestAnimationFrame
function j(t){var n=c,o=t.__c
"function"==typeof o&&(t.__c=void 0,o()),c=n}function k(t){var n=c
t.__c=t.__(),c=n}function w(t,n){return!t||t.length!==n.length||n.some((function(n,o){return n!==t[o]}))}function z(t,n){return"function"==typeof n?n(t):n}},dd2fcb0208194e1ebe7c:(t,n,o)=>{"use strict"
o.r(n),o.d(n,{Fragment:()=>i.Fragment,jsx:()=>e,jsxDEV:()=>e,jsxs:()=>e})
var i=o("e692ee41a9a53b261469"),c=0
function e(t,n,o,u,l){var E,D,R={}
for(D in n)"ref"==D?E=n[D]:R[D]=n[D]
var G={type:t,props:R,key:o,ref:E,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--c,__source:l,__self:u}
if("function"==typeof t&&(E=t.defaultProps))for(D in E)void 0===R[D]&&(R[D]=E[D])
return i.options.vnode&&i.options.vnode(G),G}},"939561e068e9fe7b464c":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>i})
const i='<svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g opacity="0.4">\n<path d="M11.2677 3L13.0218 13.41H13.123L14.9782 3H18.1809L14.9521 19.1538H11.5487L9.63931 8.05094H9.53985L7.63221 19.1538H4.22884L1 3H4.40337L6.20977 13.41H6.31188L8.11653 3H11.2677Z" fill="white"/>\n<path d="M25.609 3L30.2096 19.1538H26.7521L25.7608 15.4358H21.0842L20.0676 19.1538H16.8911L21.4909 3H25.609ZM21.8216 12.718H25.0234L23.4989 6.94866H23.3977L21.8216 12.718Z" fill="white"/>\n<path d="M39.5051 12.5639H39.6063V3H42.7322V19.1538H40.0636L34.5746 8.97449H34.4724V19.1538H31.3213V3H34.5501L39.5051 12.5639Z" fill="white"/>\n<path d="M52.5471 12.5639H52.6483V3H55.7742V19.1538H53.1056L47.6166 8.97449H47.5127V19.1538H44.3633V3H47.5921L52.5471 12.5639Z" fill="white"/>\n<path d="M65.6047 3L70.2019 19.1538H66.7479L65.7566 15.4358H61.0808L60.0642 19.1538H56.8868L61.4866 3H65.6047ZM61.8173 12.718H65.02L63.4945 6.94866H63.3951L61.8173 12.718Z" fill="white"/>\n</g>\n</svg>\n'},"57b02225047d8557a3ff":(t,n,o)=>{var i=o("e2a57f817fa881bed603"),c=o("33309d0f96eb815b5606")
"string"===typeof(c=c.__esModule?c.default:c)&&(c=[[t.id,c,""]])
var u={insert:"head",singleton:!1}
i(c,u)
t.exports=c.locals||{}},"1e571a907a28a905c0b6":(t,n,o)=>{var i=o("e2a57f817fa881bed603"),c=o("c56e301c0ec77ef0712d")
"string"===typeof(c=c.__esModule?c.default:c)&&(c=[[t.id,c,""]])
var u={insert:"head",singleton:!1}
i(c,u)
t.exports=c.locals||{}},afe357255d5776db56b3:(t,n,o)=>{var i=o("e2a57f817fa881bed603"),c=o("adcd96c63fc76bc01678")
"string"===typeof(c=c.__esModule?c.default:c)&&(c=[[t.id,c,""]])
var u={insert:"head",singleton:!1}
i(c,u)
t.exports=c.locals||{}},e2a57f817fa881bed603:(t,n,o)=>{"use strict"
var i=function isOldIE(){var t
return function memorize(){return"undefined"===typeof t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t}}(),c=function getTarget(){var t={}
return function memorize(n){if("undefined"===typeof t[n]){var o=document.querySelector(n)
if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[n]=o}return t[n]}}(),u=[]
function getIndexByIdentifier(t){for(var n=-1,o=0;o<u.length;o++)if(u[o].identifier===t){n=o
break}return n}function modulesToDom(t,n){for(var o={},i=[],c=0;c<t.length;c++){var l=t[c],E=n.base?l[0]+n.base:l[0],D=o[E]||0,R="".concat(E," ").concat(D)
o[E]=D+1
var G=getIndexByIdentifier(R),U={css:l[1],media:l[2],sourceMap:l[3]};-1!==G?(u[G].references++,u[G].updater(U)):u.push({identifier:R,updater:addStyle(U,n),references:1}),i.push(R)}return i}function insertStyleElement(t){var n=document.createElement("style"),i=t.attributes||{}
if("undefined"===typeof i.nonce){var u=o.nc
u&&(i.nonce=u)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"===typeof t.insert)t.insert(n)
else{var l=c(t.insert||"head")
if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
l.appendChild(n)}return n}var l=function replaceText(){var t=[]
return function replace(n,o){return t[n]=o,t.filter(Boolean).join("\n")}}()
function applyToSingletonTag(t,n,o,i){var c=o?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css
if(t.styleSheet)t.styleSheet.cssText=l(n,c)
else{var u=document.createTextNode(c),E=t.childNodes
E[n]&&t.removeChild(E[n]),E.length?t.insertBefore(u,E[n]):t.appendChild(u)}}function applyToTag(t,n,o){var i=o.css,c=o.media,u=o.sourceMap
if(c?t.setAttribute("media",c):t.removeAttribute("media"),u&&"undefined"!==typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleSheet)t.styleSheet.cssText=i
else{for(;t.firstChild;)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(i))}}var E=null,D=0
function addStyle(t,n){var o,i,c
if(n.singleton){var u=D++
o=E||(E=insertStyleElement(n)),i=applyToSingletonTag.bind(null,o,u,!1),c=applyToSingletonTag.bind(null,o,u,!0)}else o=insertStyleElement(n),i=applyToTag.bind(null,o,n),c=function remove(){!function removeStyleElement(t){if(null===t.parentNode)return!1
t.parentNode.removeChild(t)}(o)}
return i(t),function updateStyle(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return
i(t=n)}else c()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"===typeof n.singleton||(n.singleton=i())
var o=modulesToDom(t=t||[],n)
return function update(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<o.length;i++){var c=getIndexByIdentifier(o[i])
u[c].references--}for(var l=modulesToDom(t,n),E=0;E<o.length;E++){var D=getIndexByIdentifier(o[E])
0===u[D].references&&(u[D].updater(),u.splice(D,1))}o=l}}}},"8e5531a739ad2a362fcc":function(t,n,o){var i
!function(c,u){"use strict"
var l="function",E="undefined",D="object",R="string",G="major",U="model",W="name",K="type",Y="vendor",Z="version",Q="architecture",J="console",X="mobile",ee="tablet",te="smarttv",re="wearable",ne="embedded",oe="Amazon",ie="Apple",ae="ASUS",ce="BlackBerry",se="Browser",ue="Chrome",le="Firefox",fe="Google",de="Huawei",pe="LG",_e="Microsoft",he="Motorola",ve="Opera",Ee="Samsung",ye="Sharp",be="Sony",me="Xiaomi",ge="Zebra",Ae="Facebook",we="Chromium OS",Te="Mac OS",enumerize=function(t){for(var n={},o=0;o<t.length;o++)n[t[o].toUpperCase()]=t[o]
return n},has=function(t,n){return typeof t===R&&-1!==lowerize(n).indexOf(lowerize(t))},lowerize=function(t){return t.toLowerCase()},trim=function(t,n){if(typeof t===R)return t=t.replace(/^\s\s*/,""),typeof n===E?t:t.substring(0,350)},rgxMapper=function(t,n){for(var o,i,c,E,R,G,U=0;U<n.length&&!R;){var W=n[U],K=n[U+1]
for(o=i=0;o<W.length&&!R&&W[o];)if(R=W[o++].exec(t))for(c=0;c<K.length;c++)G=R[++i],typeof(E=K[c])===D&&E.length>0?2===E.length?typeof E[1]==l?this[E[0]]=E[1].call(this,G):this[E[0]]=E[1]:3===E.length?typeof E[1]!==l||E[1].exec&&E[1].test?this[E[0]]=G?G.replace(E[1],E[2]):u:this[E[0]]=G?E[1].call(this,G,E[2]):u:4===E.length&&(this[E[0]]=G?E[3].call(this,G.replace(E[1],E[2])):u):this[E]=G||u
U+=2}},strMapper=function(t,n){for(var o in n)if(typeof n[o]===D&&n[o].length>0){for(var i=0;i<n[o].length;i++)if(has(n[o][i],t))return"?"===o?u:o}else if(has(n[o],t))return"?"===o?u:o
return t},Ce={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Oe={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[Z,[W,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[Z,[W,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[W,Z],[/opios[\/ ]+([\w\.]+)/i],[Z,[W,ve+" Mini"]],[/\bopr\/([\w\.]+)/i],[Z,[W,ve]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[W,Z],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[Z,[W,"UC"+se]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[Z,[W,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[Z,[W,"WeChat"]],[/konqueror\/([\w\.]+)/i],[Z,[W,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[Z,[W,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[Z,[W,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[W,/(.+)/,"$1 Secure "+se],Z],[/\bfocus\/([\w\.]+)/i],[Z,[W,le+" Focus"]],[/\bopt\/([\w\.]+)/i],[Z,[W,ve+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[Z,[W,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[Z,[W,"Dolphin"]],[/coast\/([\w\.]+)/i],[Z,[W,ve+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[Z,[W,"MIUI "+se]],[/fxios\/([-\w\.]+)/i],[Z,[W,le]],[/\bqihu|(qi?ho?o?|360)browser/i],[[W,"360 "+se]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[W,/(.+)/,"$1 "+se],Z],[/(comodo_dragon)\/([\w\.]+)/i],[[W,/_/g," "],Z],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[W,Z],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[W],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[W,Ae],Z],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[W,Z],[/\bgsa\/([\w\.]+) .*safari\//i],[Z,[W,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[Z,[W,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[Z,[W,ue+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[W,ue+" WebView"],Z],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[Z,[W,"Android "+se]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[W,Z],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[Z,[W,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[Z,W],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[W,[Z,strMapper,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[W,Z],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[W,"Netscape"],Z],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[Z,[W,le+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[W,Z],[/(cobalt)\/([\w\.]+)/i],[W,[Z,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[Q,"amd64"]],[/(ia32(?=;))/i],[[Q,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[Q,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[Q,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[Q,"armhf"]],[/windows (ce|mobile); ppc;/i],[[Q,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[Q,/ower/,"",lowerize]],[/(sun4\w)[;\)]/i],[[Q,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[Q,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[U,[Y,Ee],[K,ee]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[U,[Y,Ee],[K,X]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[U,[Y,ie],[K,X]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[U,[Y,ie],[K,ee]],[/(macintosh);/i],[U,[Y,ie]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[U,[Y,ye],[K,X]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[U,[Y,de],[K,ee]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[U,[Y,de],[K,X]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[U,/_/g," "],[Y,me],[K,X]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[U,/_/g," "],[Y,me],[K,ee]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[U,[Y,"OPPO"],[K,X]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[U,[Y,"Vivo"],[K,X]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[U,[Y,"Realme"],[K,X]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[U,[Y,he],[K,X]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[U,[Y,he],[K,ee]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[U,[Y,pe],[K,ee]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[U,[Y,pe],[K,X]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[U,[Y,"Lenovo"],[K,ee]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[U,/_/g," "],[Y,"Nokia"],[K,X]],[/(pixel c)\b/i],[U,[Y,fe],[K,ee]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[U,[Y,fe],[K,X]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[U,[Y,be],[K,X]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[U,"Xperia Tablet"],[Y,be],[K,ee]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[U,[Y,"OnePlus"],[K,X]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[U,[Y,oe],[K,ee]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[U,/(.+)/g,"Fire Phone $1"],[Y,oe],[K,X]],[/(playbook);[-\w\),; ]+(rim)/i],[U,Y,[K,ee]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[U,[Y,ce],[K,X]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[U,[Y,ae],[K,ee]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[U,[Y,ae],[K,X]],[/(nexus 9)/i],[U,[Y,"HTC"],[K,ee]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[Y,[U,/_/g," "],[K,X]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[U,[Y,"Acer"],[K,ee]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[U,[Y,"Meizu"],[K,X]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[Y,U,[K,X]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[Y,U,[K,ee]],[/(surface duo)/i],[U,[Y,_e],[K,ee]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[U,[Y,"Fairphone"],[K,X]],[/(u304aa)/i],[U,[Y,"AT&T"],[K,X]],[/\bsie-(\w*)/i],[U,[Y,"Siemens"],[K,X]],[/\b(rct\w+) b/i],[U,[Y,"RCA"],[K,ee]],[/\b(venue[\d ]{2,7}) b/i],[U,[Y,"Dell"],[K,ee]],[/\b(q(?:mv|ta)\w+) b/i],[U,[Y,"Verizon"],[K,ee]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[U,[Y,"Barnes & Noble"],[K,ee]],[/\b(tm\d{3}\w+) b/i],[U,[Y,"NuVision"],[K,ee]],[/\b(k88) b/i],[U,[Y,"ZTE"],[K,ee]],[/\b(nx\d{3}j) b/i],[U,[Y,"ZTE"],[K,X]],[/\b(gen\d{3}) b.+49h/i],[U,[Y,"Swiss"],[K,X]],[/\b(zur\d{3}) b/i],[U,[Y,"Swiss"],[K,ee]],[/\b((zeki)?tb.*\b) b/i],[U,[Y,"Zeki"],[K,ee]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[Y,"Dragon Touch"],U,[K,ee]],[/\b(ns-?\w{0,9}) b/i],[U,[Y,"Insignia"],[K,ee]],[/\b((nxa|next)-?\w{0,9}) b/i],[U,[Y,"NextBook"],[K,ee]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[Y,"Voice"],U,[K,X]],[/\b(lvtel\-)?(v1[12]) b/i],[[Y,"LvTel"],U,[K,X]],[/\b(ph-1) /i],[U,[Y,"Essential"],[K,X]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[U,[Y,"Envizen"],[K,ee]],[/\b(trio[-\w\. ]+) b/i],[U,[Y,"MachSpeed"],[K,ee]],[/\btu_(1491) b/i],[U,[Y,"Rotor"],[K,ee]],[/(shield[\w ]+) b/i],[U,[Y,"Nvidia"],[K,ee]],[/(sprint) (\w+)/i],[Y,U,[K,X]],[/(kin\.[onetw]{3})/i],[[U,/\./g," "],[Y,_e],[K,X]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[U,[Y,ge],[K,ee]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[U,[Y,ge],[K,X]],[/smart-tv.+(samsung)/i],[Y,[K,te]],[/hbbtv.+maple;(\d+)/i],[[U,/^/,"SmartTV"],[Y,Ee],[K,te]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[Y,pe],[K,te]],[/(apple) ?tv/i],[Y,[U,ie+" TV"],[K,te]],[/crkey/i],[[U,ue+"cast"],[Y,fe],[K,te]],[/droid.+aft(\w)( bui|\))/i],[U,[Y,oe],[K,te]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[U,[Y,ye],[K,te]],[/(bravia[\w ]+)( bui|\))/i],[U,[Y,be],[K,te]],[/(mitv-\w{5}) bui/i],[U,[Y,me],[K,te]],[/Hbbtv.*(technisat) (.*);/i],[Y,U,[K,te]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[Y,trim],[U,trim],[K,te]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[K,te]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[Y,U,[K,J]],[/droid.+; (shield) bui/i],[U,[Y,"Nvidia"],[K,J]],[/(playstation [345portablevi]+)/i],[U,[Y,be],[K,J]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[U,[Y,_e],[K,J]],[/((pebble))app/i],[Y,U,[K,re]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[U,[Y,ie],[K,re]],[/droid.+; (glass) \d/i],[U,[Y,fe],[K,re]],[/droid.+; (wt63?0{2,3})\)/i],[U,[Y,ge],[K,re]],[/(quest( 2| pro)?)/i],[U,[Y,Ae],[K,re]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[Y,[K,ne]],[/(aeobc)\b/i],[U,[Y,oe],[K,ne]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[U,[K,X]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[U,[K,ee]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[K,ee]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[K,X]],[/(android[-\w\. ]{0,9});.+buil/i],[U,[Y,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[Z,[W,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[Z,[W,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[W,Z],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[Z,W]],os:[[/microsoft (windows) (vista|xp)/i],[W,Z],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[W,[Z,strMapper,Ce]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[W,"Windows"],[Z,strMapper,Ce]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[Z,/_/g,"."],[W,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[W,Te],[Z,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[Z,W],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[W,Z],[/\(bb(10);/i],[Z,[W,ce]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[Z,[W,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[Z,[W,le+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[Z,[W,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[Z,[W,"watchOS"]],[/crkey\/([\d\.]+)/i],[Z,[W,ue+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[W,we],Z],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[W,Z],[/(sunos) ?([\w\.\d]*)/i],[[W,"Solaris"],Z],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[W,Z]]},UAParser=function(t,n){if(typeof t===D&&(n=t,t=u),!(this instanceof UAParser))return new UAParser(t,n).getResult()
var o=typeof c!==E&&c.navigator?c.navigator:u,i=t||(o&&o.userAgent?o.userAgent:""),J=o&&o.userAgentData?o.userAgentData:u,te=n?function(t,n){var o={}
for(var i in t)n[i]&&n[i].length%2===0?o[i]=n[i].concat(t[i]):o[i]=t[i]
return o}(Oe,n):Oe,re=o&&o.userAgent==i
return this.getBrowser=function(){var t,n={}
return n[W]=u,n[Z]=u,rgxMapper.call(n,i,te.browser),n[G]=typeof(t=n[Z])===R?t.replace(/[^\d\.]/g,"").split(".")[0]:u,re&&o&&o.brave&&typeof o.brave.isBrave==l&&(n[W]="Brave"),n},this.getCPU=function(){var t={}
return t[Q]=u,rgxMapper.call(t,i,te.cpu),t},this.getDevice=function(){var t={}
return t[Y]=u,t[U]=u,t[K]=u,rgxMapper.call(t,i,te.device),re&&!t[K]&&J&&J.mobile&&(t[K]=X),re&&"Macintosh"==t[U]&&o&&typeof o.standalone!==E&&o.maxTouchPoints&&o.maxTouchPoints>2&&(t[U]="iPad",t[K]=ee),t},this.getEngine=function(){var t={}
return t[W]=u,t[Z]=u,rgxMapper.call(t,i,te.engine),t},this.getOS=function(){var t={}
return t[W]=u,t[Z]=u,rgxMapper.call(t,i,te.os),re&&!t[W]&&J&&"Unknown"!=J.platform&&(t[W]=J.platform.replace(/chrome os/i,we).replace(/macos/i,Te)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(t){return i=typeof t===R&&t.length>350?trim(t,350):t,this},this.setUA(i),this}
UAParser.VERSION="1.0.35",UAParser.BROWSER=enumerize([W,Z,G]),UAParser.CPU=enumerize([Q]),UAParser.DEVICE=enumerize([U,Y,K,J,X,te,ee,re,ne]),UAParser.ENGINE=UAParser.OS=enumerize([W,Z]),typeof n!==E?(t.exports&&(n=t.exports=UAParser),n.UAParser=UAParser):o.amdO?(i=function(){return UAParser}.call(n,o,n,t))===u||(t.exports=i):typeof c!==E&&(c.UAParser=UAParser)
var Se=typeof c!==E&&(c.jQuery||c.Zepto)
if(Se&&!Se.ua){var xe=new UAParser
Se.ua=xe.getResult(),Se.ua.get=function(){return xe.getUA()},Se.ua.set=function(t){xe.setUA(t)
var n=xe.getResult()
for(var o in n)Se.ua[o]=n[o]}}}("object"===typeof window?window:this)},ae915d0780a0a6b00fd0:(t,n,o)=>{"use strict"
var i
o.r(n),o.d(n,{NIL:()=>re,parse:()=>Z,stringify:()=>R,v1:()=>Y,v3:()=>J,v4:()=>X,v5:()=>te,validate:()=>l,version:()=>ne})
var c=new Uint8Array(16)
function rng(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
return i(c)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
const l=function validate(t){return"string"===typeof t&&u.test(t)}
for(var E=[],D=0;D<256;++D)E.push((D+256).toString(16).substr(1))
const R=function stringify(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(E[t[n+0]]+E[t[n+1]]+E[t[n+2]]+E[t[n+3]]+"-"+E[t[n+4]]+E[t[n+5]]+"-"+E[t[n+6]]+E[t[n+7]]+"-"+E[t[n+8]]+E[t[n+9]]+"-"+E[t[n+10]]+E[t[n+11]]+E[t[n+12]]+E[t[n+13]]+E[t[n+14]]+E[t[n+15]]).toLowerCase()
if(!l(o))throw TypeError("Stringified UUID is invalid")
return o}
var G,U,W=0,K=0
const Y=function v1(t,n,o){var i=n&&o||0,c=n||new Array(16),u=(t=t||{}).node||G,l=void 0!==t.clockseq?t.clockseq:U
if(null==u||null==l){var E=t.random||(t.rng||rng)()
null==u&&(u=G=[1|E[0],E[1],E[2],E[3],E[4],E[5]]),null==l&&(l=U=16383&(E[6]<<8|E[7]))}var D=void 0!==t.msecs?t.msecs:Date.now(),Y=void 0!==t.nsecs?t.nsecs:K+1,Z=D-W+(Y-K)/1e4
if(Z<0&&void 0===t.clockseq&&(l=l+1&16383),(Z<0||D>W)&&void 0===t.nsecs&&(Y=0),Y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
W=D,K=Y,U=l
var Q=(1e4*(268435455&(D+=122192928e5))+Y)%4294967296
c[i++]=Q>>>24&255,c[i++]=Q>>>16&255,c[i++]=Q>>>8&255,c[i++]=255&Q
var J=D/4294967296*1e4&268435455
c[i++]=J>>>8&255,c[i++]=255&J,c[i++]=J>>>24&15|16,c[i++]=J>>>16&255,c[i++]=l>>>8|128,c[i++]=255&l
for(var X=0;X<6;++X)c[i+X]=u[X]
return n||R(c)}
const Z=function parse(t){if(!l(t))throw TypeError("Invalid UUID")
var n,o=new Uint8Array(16)
return o[0]=(n=parseInt(t.slice(0,8),16))>>>24,o[1]=n>>>16&255,o[2]=n>>>8&255,o[3]=255&n,o[4]=(n=parseInt(t.slice(9,13),16))>>>8,o[5]=255&n,o[6]=(n=parseInt(t.slice(14,18),16))>>>8,o[7]=255&n,o[8]=(n=parseInt(t.slice(19,23),16))>>>8,o[9]=255&n,o[10]=(n=parseInt(t.slice(24,36),16))/1099511627776&255,o[11]=n/4294967296&255,o[12]=n>>>24&255,o[13]=n>>>16&255,o[14]=n>>>8&255,o[15]=255&n,o}
function v35(t,n,o){function generateUUID(t,i,c,u){if("string"===typeof t&&(t=function stringToBytes(t){t=unescape(encodeURIComponent(t))
for(var n=[],o=0;o<t.length;++o)n.push(t.charCodeAt(o))
return n}(t)),"string"===typeof i&&(i=Z(i)),16!==i.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)")
var l=new Uint8Array(16+t.length)
if(l.set(i),l.set(t,i.length),(l=o(l))[6]=15&l[6]|n,l[8]=63&l[8]|128,c){u=u||0
for(var E=0;E<16;++E)c[u+E]=l[E]
return c}return R(l)}try{generateUUID.name=t}catch(t){}return generateUUID.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",generateUUID.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",generateUUID}function getOutputLength(t){return 14+(t+64>>>9<<4)+1}function safeAdd(t,n){var o=(65535&t)+(65535&n)
return(t>>16)+(n>>16)+(o>>16)<<16|65535&o}function md5cmn(t,n,o,i,c,u){return safeAdd(function bitRotateLeft(t,n){return t<<n|t>>>32-n}(safeAdd(safeAdd(n,t),safeAdd(i,u)),c),o)}function md5ff(t,n,o,i,c,u,l){return md5cmn(n&o|~n&i,t,n,c,u,l)}function md5gg(t,n,o,i,c,u,l){return md5cmn(n&i|o&~i,t,n,c,u,l)}function md5hh(t,n,o,i,c,u,l){return md5cmn(n^o^i,t,n,c,u,l)}function md5ii(t,n,o,i,c,u,l){return md5cmn(o^(n|~i),t,n,c,u,l)}const Q=function md5(t){if("string"===typeof t){var n=unescape(encodeURIComponent(t))
t=new Uint8Array(n.length)
for(var o=0;o<n.length;++o)t[o]=n.charCodeAt(o)}return function md5ToHexEncodedArray(t){for(var n=[],o=32*t.length,i="0123456789abcdef",c=0;c<o;c+=8){var u=t[c>>5]>>>c%32&255,l=parseInt(i.charAt(u>>>4&15)+i.charAt(15&u),16)
n.push(l)}return n}(function wordsToMd5(t,n){t[n>>5]|=128<<n%32,t[getOutputLength(n)-1]=n
for(var o=1732584193,i=-271733879,c=-1732584194,u=271733878,l=0;l<t.length;l+=16){var E=o,D=i,R=c,G=u
o=md5ff(o,i,c,u,t[l],7,-680876936),u=md5ff(u,o,i,c,t[l+1],12,-389564586),c=md5ff(c,u,o,i,t[l+2],17,606105819),i=md5ff(i,c,u,o,t[l+3],22,-1044525330),o=md5ff(o,i,c,u,t[l+4],7,-176418897),u=md5ff(u,o,i,c,t[l+5],12,1200080426),c=md5ff(c,u,o,i,t[l+6],17,-1473231341),i=md5ff(i,c,u,o,t[l+7],22,-45705983),o=md5ff(o,i,c,u,t[l+8],7,1770035416),u=md5ff(u,o,i,c,t[l+9],12,-1958414417),c=md5ff(c,u,o,i,t[l+10],17,-42063),i=md5ff(i,c,u,o,t[l+11],22,-1990404162),o=md5ff(o,i,c,u,t[l+12],7,1804603682),u=md5ff(u,o,i,c,t[l+13],12,-40341101),c=md5ff(c,u,o,i,t[l+14],17,-1502002290),o=md5gg(o,i=md5ff(i,c,u,o,t[l+15],22,1236535329),c,u,t[l+1],5,-165796510),u=md5gg(u,o,i,c,t[l+6],9,-1069501632),c=md5gg(c,u,o,i,t[l+11],14,643717713),i=md5gg(i,c,u,o,t[l],20,-373897302),o=md5gg(o,i,c,u,t[l+5],5,-701558691),u=md5gg(u,o,i,c,t[l+10],9,38016083),c=md5gg(c,u,o,i,t[l+15],14,-660478335),i=md5gg(i,c,u,o,t[l+4],20,-405537848),o=md5gg(o,i,c,u,t[l+9],5,568446438),u=md5gg(u,o,i,c,t[l+14],9,-1019803690),c=md5gg(c,u,o,i,t[l+3],14,-187363961),i=md5gg(i,c,u,o,t[l+8],20,1163531501),o=md5gg(o,i,c,u,t[l+13],5,-1444681467),u=md5gg(u,o,i,c,t[l+2],9,-51403784),c=md5gg(c,u,o,i,t[l+7],14,1735328473),o=md5hh(o,i=md5gg(i,c,u,o,t[l+12],20,-1926607734),c,u,t[l+5],4,-378558),u=md5hh(u,o,i,c,t[l+8],11,-2022574463),c=md5hh(c,u,o,i,t[l+11],16,1839030562),i=md5hh(i,c,u,o,t[l+14],23,-35309556),o=md5hh(o,i,c,u,t[l+1],4,-1530992060),u=md5hh(u,o,i,c,t[l+4],11,1272893353),c=md5hh(c,u,o,i,t[l+7],16,-155497632),i=md5hh(i,c,u,o,t[l+10],23,-1094730640),o=md5hh(o,i,c,u,t[l+13],4,681279174),u=md5hh(u,o,i,c,t[l],11,-358537222),c=md5hh(c,u,o,i,t[l+3],16,-722521979),i=md5hh(i,c,u,o,t[l+6],23,76029189),o=md5hh(o,i,c,u,t[l+9],4,-640364487),u=md5hh(u,o,i,c,t[l+12],11,-421815835),c=md5hh(c,u,o,i,t[l+15],16,530742520),o=md5ii(o,i=md5hh(i,c,u,o,t[l+2],23,-995338651),c,u,t[l],6,-198630844),u=md5ii(u,o,i,c,t[l+7],10,1126891415),c=md5ii(c,u,o,i,t[l+14],15,-1416354905),i=md5ii(i,c,u,o,t[l+5],21,-57434055),o=md5ii(o,i,c,u,t[l+12],6,1700485571),u=md5ii(u,o,i,c,t[l+3],10,-1894986606),c=md5ii(c,u,o,i,t[l+10],15,-1051523),i=md5ii(i,c,u,o,t[l+1],21,-2054922799),o=md5ii(o,i,c,u,t[l+8],6,1873313359),u=md5ii(u,o,i,c,t[l+15],10,-30611744),c=md5ii(c,u,o,i,t[l+6],15,-1560198380),i=md5ii(i,c,u,o,t[l+13],21,1309151649),o=md5ii(o,i,c,u,t[l+4],6,-145523070),u=md5ii(u,o,i,c,t[l+11],10,-1120210379),c=md5ii(c,u,o,i,t[l+2],15,718787259),i=md5ii(i,c,u,o,t[l+9],21,-343485551),o=safeAdd(o,E),i=safeAdd(i,D),c=safeAdd(c,R),u=safeAdd(u,G)}return[o,i,c,u]}(function bytesToWords(t){if(0===t.length)return[]
for(var n=8*t.length,o=new Uint32Array(getOutputLength(n)),i=0;i<n;i+=8)o[i>>5]|=(255&t[i/8])<<i%32
return o}(t),8*t.length))}
const J=v35("v3",48,Q)
const X=function v4(t,n,o){var i=(t=t||{}).random||(t.rng||rng)()
if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){o=o||0
for(var c=0;c<16;++c)n[o+c]=i[c]
return n}return R(i)}
function f(t,n,o,i){switch(t){case 0:return n&o^~n&i
case 1:case 3:return n^o^i
case 2:return n&o^n&i^o&i}}function ROTL(t,n){return t<<n|t>>>32-n}const ee=function sha1(t){var n=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520]
if("string"===typeof t){var i=unescape(encodeURIComponent(t))
t=[]
for(var c=0;c<i.length;++c)t.push(i.charCodeAt(c))}else Array.isArray(t)||(t=Array.prototype.slice.call(t))
t.push(128)
for(var u=t.length/4+2,l=Math.ceil(u/16),E=new Array(l),D=0;D<l;++D){for(var R=new Uint32Array(16),G=0;G<16;++G)R[G]=t[64*D+4*G]<<24|t[64*D+4*G+1]<<16|t[64*D+4*G+2]<<8|t[64*D+4*G+3]
E[D]=R}E[l-1][14]=8*(t.length-1)/Math.pow(2,32),E[l-1][14]=Math.floor(E[l-1][14]),E[l-1][15]=8*(t.length-1)&4294967295
for(var U=0;U<l;++U){for(var W=new Uint32Array(80),K=0;K<16;++K)W[K]=E[U][K]
for(var Y=16;Y<80;++Y)W[Y]=ROTL(W[Y-3]^W[Y-8]^W[Y-14]^W[Y-16],1)
for(var Z=o[0],Q=o[1],J=o[2],X=o[3],ee=o[4],te=0;te<80;++te){var re=Math.floor(te/20),ne=ROTL(Z,5)+f(re,Q,J,X)+ee+n[re]+W[te]>>>0
ee=X,X=J,J=ROTL(Q,30)>>>0,Q=Z,Z=ne}o[0]=o[0]+Z>>>0,o[1]=o[1]+Q>>>0,o[2]=o[2]+J>>>0,o[3]=o[3]+X>>>0,o[4]=o[4]+ee>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}
const te=v35("v5",80,ee),re="00000000-0000-0000-0000-000000000000"
const ne=function version(t){if(!l(t))throw TypeError("Invalid UUID")
return parseInt(t.substr(14,1),16)}},bcc148db8dd5a199ff67:(t,n)=>{var o
!function(){"use strict"
var i={}.hasOwnProperty
function classNames(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n]
if(o){var c=typeof o
if("string"===c||"number"===c)t.push(o)
else if(Array.isArray(o)){if(o.length){var u=classNames.apply(null,o)
u&&t.push(u)}}else if("object"===c){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){t.push(o.toString())
continue}for(var l in o)i.call(o,l)&&o[l]&&t.push(l)}}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):void 0===(o=function(){return classNames}.apply(n,[]))||(t.exports=o)}()},"950d5b26fdbfeef2ad0c":t=>{t.exports=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},"031b33a991540ae8b415":t=>{function _typeof(n){return t.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,_typeof(n)}t.exports=_typeof,t.exports.__esModule=!0,t.exports.default=t.exports},"38e96ba1fdf8f8cfe42a":(t,n,o)=>{"use strict"
function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length)
for(var o=0,i=new Array(n);o<n;o++)i[o]=t[o]
return i}o.d(n,{Z:()=>_arrayLikeToArray})},b655b2bc1bdce5a9c4c9:(t,n,o)=>{"use strict"
function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}o.r(n),o.d(n,{default:()=>_assertThisInitialized})},"50b796ec98bdad71dd85":(t,n,o)=>{"use strict"
function asyncGeneratorStep(t,n,o,i,c,u,l){try{var E=t[u](l),D=E.value}catch(t){return void o(t)}E.done?n(D):Promise.resolve(D).then(i,c)}function _asyncToGenerator(t){return function(){var n=this,o=arguments
return new Promise((function(i,c){var u=t.apply(n,o)
function _next(t){asyncGeneratorStep(u,i,c,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(u,i,c,_next,_throw,"throw",t)}_next(void 0)}))}}o.r(n),o.d(n,{default:()=>_asyncToGenerator})},"33a1f57322c9f05baede":(t,n,o)=>{"use strict"
function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}o.r(n),o.d(n,{default:()=>_classCallCheck})},dd6d663ecbd6af3c2e96:(t,n,o)=>{"use strict"
o.d(n,{default:()=>_construct})
var i=o("713cde908841ed4a4408")
function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"===typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _construct(t,n,o){return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(t,n,o){var c=[null]
c.push.apply(c,n)
var u=new(Function.bind.apply(t,c))
return o&&(0,i.Z)(u,o.prototype),u},_construct.apply(null,arguments)}},"17be7f514f0c2961a0dd":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_createClass})
var i=o("7a1bd53a554da0083e16")
function _defineProperties(t,n){for(var o=0;o<n.length;o++){var c=n[o]
c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,(0,i.Z)(c.key),c)}}function _createClass(t,n,o){return n&&_defineProperties(t.prototype,n),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}},ca3732918b4d1ccb0e5d:(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_defineProperty})
var i=o("7a1bd53a554da0083e16")
function _defineProperty(t,n,o){return(n=(0,i.Z)(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}},"2ccb2914246d45367659":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_get})
var i=o("46cb486d8aa85ffd8cb8")
function _superPropBase(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,i.default)(t)););return t}function _get(){return _get="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(t,n,o){var i=_superPropBase(t,n)
if(i){var c=Object.getOwnPropertyDescriptor(i,n)
return c.get?c.get.call(arguments.length<3?t:o):c.value}},_get.apply(this,arguments)}},"46cb486d8aa85ffd8cb8":(t,n,o)=>{"use strict"
function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}o.r(n),o.d(n,{default:()=>_getPrototypeOf})},"61cea65a22ee508ba41d":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_inherits})
var i=o("713cde908841ed4a4408")
function _inherits(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&(0,i.Z)(t,n)}},cdd5bf261f4188f3fa55:(t,n,o)=>{"use strict"
function _objectWithoutProperties(t,n){if(null==t)return{}
var o,i,c=function _objectWithoutPropertiesLoose(t,n){if(null==t)return{}
var o,i,c={},u=Object.keys(t)
for(i=0;i<u.length;i++)o=u[i],n.indexOf(o)>=0||(c[o]=t[o])
return c}(t,n)
if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t)
for(i=0;i<u.length;i++)o=u[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(c[o]=t[o])}return c}o.r(n),o.d(n,{default:()=>_objectWithoutProperties})},"3c108274403b90131be8":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_possibleConstructorReturn})
var i=o("e2def955838128a34a31"),c=o("b655b2bc1bdce5a9c4c9")
function _possibleConstructorReturn(t,n){if(n&&("object"===(0,i.default)(n)||"function"===typeof n))return n
if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined")
return(0,c.default)(t)}},"713cde908841ed4a4408":(t,n,o)=>{"use strict"
function _setPrototypeOf(t,n){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(t,n){return t.__proto__=n,t},_setPrototypeOf(t,n)}o.d(n,{Z:()=>_setPrototypeOf})},"4442267810857f1c7c50":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_slicedToArray})
var i=o("855f14ebdf1985a8fbae")
function _slicedToArray(t,n){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,n){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(null!=o){var i,c,u,l,E=[],D=!0,R=!1
try{if(u=(o=o.call(t)).next,0===n){if(Object(o)!==o)return
D=!1}else for(;!(D=(i=u.call(o)).done)&&(E.push(i.value),E.length!==n);D=!0);}catch(t){R=!0,c=t}finally{try{if(!D&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(R)throw c}}return E}}(t,n)||(0,i.Z)(t,n)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"7bc6255b1b9a1c66e838":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_toConsumableArray})
var i=o("38e96ba1fdf8f8cfe42a")
var c=o("855f14ebdf1985a8fbae")
function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return(0,i.Z)(t)}(t)||function _iterableToArray(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,c.Z)(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"7a1bd53a554da0083e16":(t,n,o)=>{"use strict"
o.d(n,{Z:()=>_toPropertyKey})
var i=o("e2def955838128a34a31")
function _toPropertyKey(t){var n=function _toPrimitive(t,n){if("object"!==(0,i.default)(t)||null===t)return t
var o=t[Symbol.toPrimitive]
if(void 0!==o){var c=o.call(t,n||"default")
if("object"!==(0,i.default)(c))return c
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string")
return"symbol"===(0,i.default)(n)?n:String(n)}},e2def955838128a34a31:(t,n,o)=>{"use strict"
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}o.r(n),o.d(n,{default:()=>_typeof})},"855f14ebdf1985a8fbae":(t,n,o)=>{"use strict"
o.d(n,{Z:()=>_unsupportedIterableToArray})
var i=o("38e96ba1fdf8f8cfe42a")
function _unsupportedIterableToArray(t,n){if(t){if("string"===typeof t)return(0,i.Z)(t,n)
var o=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?(0,i.Z)(t,n):void 0}}},"4d732541f8f298d40c90":(t,n,o)=>{"use strict"
o.r(n),o.d(n,{default:()=>_wrapNativeSuper})
var i=o("46cb486d8aa85ffd8cb8"),c=o("713cde908841ed4a4408")
var u=o("dd6d663ecbd6af3c2e96")
function _wrapNativeSuper(t){var n="function"===typeof Map?new Map:void 0
return _wrapNativeSuper=function _wrapNativeSuper(t){if(null===t||!function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t
if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function")
if("undefined"!==typeof n){if(n.has(t))return n.get(t)
n.set(t,Wrapper)}function Wrapper(){return(0,u.default)(t,arguments,(0,i.default)(this).constructor)}return Wrapper.prototype=Object.create(t.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),(0,c.Z)(Wrapper,t)},_wrapNativeSuper(t)}},cc627320c8f002896e49:t=>{"use strict"
t.exports=JSON.parse('{"name":"@wanna-webar/public-sdk","version":"2.6.0","description":"Wanna WEB-AR SDK","main":"lib/index.js","module":"src/index.js","scripts":{"dev":"cross-env BABEL_ENV=production NODE_ENV=production webpack serve --hot --color --config webpack.config.js --mode production","test":"npm run lint && npm run cover","clean":"rimraf lib","test:prod":"cross-env NODE_ENV=test npm run test","test:only":"jest --colors","test:watch":"cross-env NODE_ENV=test jest --watch","test:examples":"node examples/","cover":"nyc --check-coverage npm run test:only","lint":"eslint src","prepublish":"npm run clean && npm run lint && npm run test && npm run build"},"directories":{"lib":"lib","test":"__tests__"},"files":["lib","src"],"repository":{"type":"git","url":"git+https://github.com/WANNABY/web_ar.git","directory":"packages/public-sdk"},"keywords":["module","javascript"],"author":"Igor Kozlovsky <igor@wanna.by>","bugs":{"url":"https://github.com/WANNABY/web_ar/issues"},"homepage":"https://github.com/WANNABY/web_ar/tree/main/packages/public-sdk#readme","devDependencies":{"@types/jest":"27.4.1","@testing-library/preact":"3.2.3","@testing-library/preact-hooks":"1.1.0","@testing-library/jest-dom":"5.16.5"},"dependencies":{"@wanna-webar/core":"^2.6.0","classnames":"2.3.2","preact":"10.10.6"},"browser":{"fs":false,"path":false,"os":false}}')},"230186eae70e403fd343":t=>{"use strict"
t.exports=JSON.parse('{"wristMeasureHeader":"Align top of your wrist with this line","wristMeasureSave":"Save","wristMeasureRulerText":"Drag to measure width of your wrist","rotateThePhoneToTryOn":"Rotate the phone to try on"}')}},n={}
function __webpack_require__(o){var i=n[o]
if(void 0!==i)return i.exports
var c=n[o]={id:o,exports:{}}
return t[o].call(c.exports,c,c.exports,__webpack_require__),c.exports}__webpack_require__.amdO={},__webpack_require__.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t
return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(t,n)=>{for(var o in n)__webpack_require__.o(n,o)&&!__webpack_require__.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},__webpack_require__.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),__webpack_require__.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.nc=void 0
var o=__webpack_require__("ade1d101f887b62127d0")
return o=o.default})()))
