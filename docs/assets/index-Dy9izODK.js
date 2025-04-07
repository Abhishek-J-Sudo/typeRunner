(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();var Lf={exports:{}},Sr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function WE(){if(b_)return Sr;b_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:u}}return Sr.Fragment=e,Sr.jsx=i,Sr.jsxs=i,Sr}var E_;function ZE(){return E_||(E_=1,Lf.exports=WE()),Lf.exports}var E=ZE(),Uf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function JE(){if(T_)return re;T_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function V(S,x,z){this.props=S,this.context=x,this.refs=B,this.updater=z||N}V.prototype.isReactComponent={},V.prototype.setState=function(S,x){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,x,"setState")},V.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ae(){}ae.prototype=V.prototype;function le(S,x,z){this.props=S,this.context=x,this.refs=B,this.updater=z||N}var ee=le.prototype=new ae;ee.constructor=le,U(ee,V.prototype),ee.isPureReactComponent=!0;var ge=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},ye=Object.prototype.hasOwnProperty;function Te(S,x,z,H,$,ve){return z=ve.ref,{$$typeof:s,type:S,key:x,ref:z!==void 0?z:null,props:ve}}function Re(S,x){return Te(S.type,x,void 0,void 0,void 0,S.props)}function G(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function xe(S){var x={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(z){return x[z]})}var Ke=/\/+/g;function Ge(S,x){return typeof S=="object"&&S!==null&&S.key!=null?xe(""+S.key):x.toString(36)}function Wt(){}function Zt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Wt,Wt):(S.status="pending",S.then(function(x){S.status==="pending"&&(S.status="fulfilled",S.value=x)},function(x){S.status==="pending"&&(S.status="rejected",S.reason=x)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function F(S,x,z,H,$){var ve=typeof S;(ve==="undefined"||ve==="boolean")&&(S=null);var se=!1;if(S===null)se=!0;else switch(ve){case"bigint":case"string":case"number":se=!0;break;case"object":switch(S.$$typeof){case s:case e:se=!0;break;case y:return se=S._init,F(se(S._payload),x,z,H,$)}}if(se)return $=$(S),se=H===""?"."+Ge(S,0):H,ge($)?(z="",se!=null&&(z=se.replace(Ke,"$&/")+"/"),F($,x,z,"",function(Qn){return Qn})):$!=null&&(G($)&&($=Re($,z+($.key==null||S&&S.key===$.key?"":(""+$.key).replace(Ke,"$&/")+"/")+se)),x.push($)),1;se=0;var At=H===""?".":H+":";if(ge(S))for(var je=0;je<S.length;je++)H=S[je],ve=At+Ge(H,je),se+=F(H,x,z,ve,$);else if(je=w(S),typeof je=="function")for(S=je.call(S),je=0;!(H=S.next()).done;)H=H.value,ve=At+Ge(H,je++),se+=F(H,x,z,ve,$);else if(ve==="object"){if(typeof S.then=="function")return F(Zt(S),x,z,H,$);throw x=String(S),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return se}function D(S,x,z){if(S==null)return S;var H=[],$=0;return F(S,H,"","",function(ve){return x.call(z,ve,$++)}),H}function P(S){if(S._status===-1){var x=S._result;x=x(),x.then(function(z){(S._status===0||S._status===-1)&&(S._status=1,S._result=z)},function(z){(S._status===0||S._status===-1)&&(S._status=2,S._result=z)}),S._status===-1&&(S._status=0,S._result=x)}if(S._status===1)return S._result.default;throw S._result}var Y=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function ie(){}return re.Children={map:D,forEach:function(S,x,z){D(S,function(){x.apply(this,arguments)},z)},count:function(S){var x=0;return D(S,function(){x++}),x},toArray:function(S){return D(S,function(x){return x})||[]},only:function(S){if(!G(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},re.Component=V,re.Fragment=i,re.Profiler=o,re.PureComponent=le,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,re.__COMPILER_RUNTIME={__proto__:null,c:function(S){return X.H.useMemoCache(S)}},re.cache=function(S){return function(){return S.apply(null,arguments)}},re.cloneElement=function(S,x,z){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var H=U({},S.props),$=S.key,ve=void 0;if(x!=null)for(se in x.ref!==void 0&&(ve=void 0),x.key!==void 0&&($=""+x.key),x)!ye.call(x,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&x.ref===void 0||(H[se]=x[se]);var se=arguments.length-2;if(se===1)H.children=z;else if(1<se){for(var At=Array(se),je=0;je<se;je++)At[je]=arguments[je+2];H.children=At}return Te(S.type,$,void 0,void 0,ve,H)},re.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:u,_context:S},S},re.createElement=function(S,x,z){var H,$={},ve=null;if(x!=null)for(H in x.key!==void 0&&(ve=""+x.key),x)ye.call(x,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&($[H]=x[H]);var se=arguments.length-2;if(se===1)$.children=z;else if(1<se){for(var At=Array(se),je=0;je<se;je++)At[je]=arguments[je+2];$.children=At}if(S&&S.defaultProps)for(H in se=S.defaultProps,se)$[H]===void 0&&($[H]=se[H]);return Te(S,ve,void 0,void 0,null,$)},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:d,render:S}},re.isValidElement=G,re.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:P}},re.memo=function(S,x){return{$$typeof:p,type:S,compare:x===void 0?null:x}},re.startTransition=function(S){var x=X.T,z={};X.T=z;try{var H=S(),$=X.S;$!==null&&$(z,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ie,Y)}catch(ve){Y(ve)}finally{X.T=x}},re.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},re.use=function(S){return X.H.use(S)},re.useActionState=function(S,x,z){return X.H.useActionState(S,x,z)},re.useCallback=function(S,x){return X.H.useCallback(S,x)},re.useContext=function(S){return X.H.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S,x){return X.H.useDeferredValue(S,x)},re.useEffect=function(S,x,z){var H=X.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(S,x)},re.useId=function(){return X.H.useId()},re.useImperativeHandle=function(S,x,z){return X.H.useImperativeHandle(S,x,z)},re.useInsertionEffect=function(S,x){return X.H.useInsertionEffect(S,x)},re.useLayoutEffect=function(S,x){return X.H.useLayoutEffect(S,x)},re.useMemo=function(S,x){return X.H.useMemo(S,x)},re.useOptimistic=function(S,x){return X.H.useOptimistic(S,x)},re.useReducer=function(S,x,z){return X.H.useReducer(S,x,z)},re.useRef=function(S){return X.H.useRef(S)},re.useState=function(S){return X.H.useState(S)},re.useSyncExternalStore=function(S,x,z){return X.H.useSyncExternalStore(S,x,z)},re.useTransition=function(){return X.H.useTransition()},re.version="19.1.0",re}var w_;function Ih(){return w_||(w_=1,Uf.exports=JE()),Uf.exports}var K=Ih(),jf={exports:{}},br={},Pf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function eT(){return C_||(C_=1,function(s){function e(D,P){var Y=D.length;D.push(P);e:for(;0<Y;){var ie=Y-1>>>1,S=D[ie];if(0<o(S,P))D[ie]=P,D[Y]=S,Y=ie;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var P=D[0],Y=D.pop();if(Y!==P){D[0]=Y;e:for(var ie=0,S=D.length,x=S>>>1;ie<x;){var z=2*(ie+1)-1,H=D[z],$=z+1,ve=D[$];if(0>o(H,Y))$<S&&0>o(ve,H)?(D[ie]=ve,D[$]=Y,ie=$):(D[ie]=H,D[z]=Y,ie=z);else if($<S&&0>o(ve,Y))D[ie]=ve,D[$]=Y,ie=$;else break e}}return P}function o(D,P){var Y=D.sortIndex-P.sortIndex;return Y!==0?Y:D.id-P.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],y=1,v=null,w=3,N=!1,U=!1,B=!1,V=!1,ae=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ge(D){for(var P=i(p);P!==null;){if(P.callback===null)r(p);else if(P.startTime<=D)r(p),P.sortIndex=P.expirationTime,e(m,P);else break;P=i(p)}}function X(D){if(B=!1,ge(D),!U)if(i(m)!==null)U=!0,ye||(ye=!0,Ge());else{var P=i(p);P!==null&&F(X,P.startTime-D)}}var ye=!1,Te=-1,Re=5,G=-1;function xe(){return V?!0:!(s.unstable_now()-G<Re)}function Ke(){if(V=!1,ye){var D=s.unstable_now();G=D;var P=!0;try{e:{U=!1,B&&(B=!1,le(Te),Te=-1),N=!0;var Y=w;try{t:{for(ge(D),v=i(m);v!==null&&!(v.expirationTime>D&&xe());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,w=v.priorityLevel;var S=ie(v.expirationTime<=D);if(D=s.unstable_now(),typeof S=="function"){v.callback=S,ge(D),P=!0;break t}v===i(m)&&r(m),ge(D)}else r(m);v=i(m)}if(v!==null)P=!0;else{var x=i(p);x!==null&&F(X,x.startTime-D),P=!1}}break e}finally{v=null,w=Y,N=!1}P=void 0}}finally{P?Ge():ye=!1}}}var Ge;if(typeof ee=="function")Ge=function(){ee(Ke)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,Zt=Wt.port2;Wt.port1.onmessage=Ke,Ge=function(){Zt.postMessage(null)}}else Ge=function(){ae(Ke,0)};function F(D,P){Te=ae(function(){D(s.unstable_now())},P)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return w},s.unstable_next=function(D){switch(w){case 1:case 2:case 3:var P=3;break;default:P=w}var Y=w;w=P;try{return D()}finally{w=Y}},s.unstable_requestPaint=function(){V=!0},s.unstable_runWithPriority=function(D,P){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=w;w=D;try{return P()}finally{w=Y}},s.unstable_scheduleCallback=function(D,P,Y){var ie=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ie+Y:ie):Y=ie,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=Y+S,D={id:y++,callback:P,priorityLevel:D,startTime:Y,expirationTime:S,sortIndex:-1},Y>ie?(D.sortIndex=Y,e(p,D),i(m)===null&&D===i(p)&&(B?(le(Te),Te=-1):B=!0,F(X,Y-ie))):(D.sortIndex=S,e(m,D),U||N||(U=!0,ye||(ye=!0,Ge()))),D},s.unstable_shouldYield=xe,s.unstable_wrapCallback=function(D){var P=w;return function(){var Y=w;w=P;try{return D.apply(this,arguments)}finally{w=Y}}}}(zf)),zf}var A_;function tT(){return A_||(A_=1,Pf.exports=eT()),Pf.exports}var Hf={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function nT(){if(R_)return mt;R_=1;var s=Ih();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:y}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,mt.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,y)},mt.flushSync=function(m){var p=h.T,y=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=y,r.d.f()}},mt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},mt.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},mt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,N=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:N}):y==="script"&&r.d.X(m,{crossOrigin:v,integrity:w,fetchPriority:N,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},mt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},mt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},mt.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},mt.requestFormReset=function(m){r.d.r(m)},mt.unstable_batchedUpdates=function(m,p){return m(p)},mt.useFormState=function(m,p,y){return h.H.useFormState(m,p,y)},mt.useFormStatus=function(){return h.H.useHostTransitionStatus()},mt.version="19.1.0",mt}var N_;function iT(){if(N_)return Hf.exports;N_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hf.exports=nT(),Hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function sT(){if(I_)return br;I_=1;var s=tT(),e=Ih(),i=iT();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,l=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===l)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=c,l=f;else{for(var g=!1,_=c.child;_;){if(_===a){g=!0,a=c,l=f;break}if(_===l){g=!0,l=c,a=f;break}_=_.sibling}if(!g){for(_=f.child;_;){if(_===a){g=!0,a=f,l=c;break}if(_===l){g=!0,l=f,a=c;break}_=_.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),le=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),Ke=Symbol.iterator;function Ge(t){return t===null||typeof t!="object"?null:(t=Ke&&t[Ke]||t["@@iterator"],typeof t=="function"?t:null)}var Wt=Symbol.for("react.client.reference");function Zt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Wt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case V:return"Profiler";case B:return"StrictMode";case X:return"Suspense";case ye:return"SuspenseList";case G:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case ee:return(t.displayName||"Context")+".Provider";case le:return(t._context.displayName||"Context")+".Consumer";case ge:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Te:return n=t.displayName||null,n!==null?n:Zt(t.type)||"Memo";case Re:n=t._payload,t=t._init;try{return Zt(t(n))}catch{}}return null}var F=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ie=[],S=-1;function x(t){return{current:t}}function z(t){0>S||(t.current=ie[S],ie[S]=null,S--)}function H(t,n){S++,ie[S]=t.current,t.current=n}var $=x(null),ve=x(null),se=x(null),At=x(null);function je(t,n){switch(H(se,n),H(ve,t),H($,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Xg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Xg(n),t=$g(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}z($),H($,t)}function Qn(){z($),z(ve),z(se)}function vc(t){t.memoizedState!==null&&H(At,t);var n=$.current,a=$g(n,t.type);n!==a&&(H(ve,t),H($,a))}function tl(t){ve.current===t&&(z($),z(ve)),At.current===t&&(z(At),pr._currentValue=Y)}var Sc=Object.prototype.hasOwnProperty,bc=s.unstable_scheduleCallback,Ec=s.unstable_cancelCallback,IS=s.unstable_shouldYield,OS=s.unstable_requestPaint,fn=s.unstable_now,DS=s.unstable_getCurrentPriorityLevel,Id=s.unstable_ImmediatePriority,Od=s.unstable_UserBlockingPriority,nl=s.unstable_NormalPriority,xS=s.unstable_LowPriority,Dd=s.unstable_IdlePriority,MS=s.log,kS=s.unstable_setDisableYieldValue,Ta=null,Rt=null;function Kn(t){if(typeof MS=="function"&&kS(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Ta,t)}catch{}}var Nt=Math.clz32?Math.clz32:jS,LS=Math.log,US=Math.LN2;function jS(t){return t>>>=0,t===0?32:31-(LS(t)/US|0)|0}var il=256,sl=4194304;function Mi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function al(t,n,a){var l=t.pendingLanes;if(l===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var _=l&134217727;return _!==0?(l=_&~f,l!==0?c=Mi(l):(g&=_,g!==0?c=Mi(g):a||(a=_&~t,a!==0&&(c=Mi(a))))):(_=l&~f,_!==0?c=Mi(_):g!==0?c=Mi(g):a||(a=l&~t,a!==0&&(c=Mi(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function PS(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(){var t=il;return il<<=1,(il&4194048)===0&&(il=256),t}function Md(){var t=sl;return sl<<=1,(sl&62914560)===0&&(sl=4194304),t}function Tc(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ca(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zS(t,n,a,l,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var _=t.entanglements,b=t.expirationTimes,R=t.hiddenUpdates;for(a=g&~a;0<a;){var M=31-Nt(a),L=1<<M;_[M]=0,b[M]=-1;var I=R[M];if(I!==null)for(R[M]=null,M=0;M<I.length;M++){var O=I[M];O!==null&&(O.lane&=-536870913)}a&=~L}l!==0&&kd(t,l,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function kd(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Nt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Ld(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-Nt(a),c=1<<l;c&n|t[l]&n&&(t[l]|=n),a&=~c}}function wc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ud(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function HS(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var Xn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Xn,vt="__reactProps$"+Xn,ms="__reactContainer$"+Xn,Ac="__reactEvents$"+Xn,BS="__reactListeners$"+Xn,GS="__reactHandles$"+Xn,jd="__reactResources$"+Xn,Aa="__reactMarker$"+Xn;function Rc(t){delete t[ht],delete t[vt],delete t[Ac],delete t[BS],delete t[GS]}function ps(t){var n=t[ht];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ms]||a[ht]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=e_(t);t!==null;){if(a=t[ht])return a;t=e_(t)}return n}t=a,a=t.parentNode}return null}function gs(t){if(t=t[ht]||t[ms]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ra(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function _s(t){var n=t[jd];return n||(n=t[jd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(t){t[Aa]=!0}var Pd=new Set,zd={};function ki(t,n){ys(t,n),ys(t+"Capture",n)}function ys(t,n){for(zd[t]=n,t=0;t<n.length;t++)Pd.add(n[t])}var qS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hd={},Bd={};function VS(t){return Sc.call(Bd,t)?!0:Sc.call(Hd,t)?!1:qS.test(t)?Bd[t]=!0:(Hd[t]=!0,!1)}function rl(t,n,a){if(VS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ll(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Tn(t,n,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+l)}}var Nc,Gd;function vs(t){if(Nc===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nc=n&&n[1]||"",Gd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nc+t+Gd}var Ic=!1;function Oc(t,n){if(!t||Ic)return"";Ic=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(O){var I=O}Reflect.construct(t,[],L)}else{try{L.call()}catch(O){I=O}t.call(L.prototype)}}else{try{throw Error()}catch(O){I=O}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(O){if(O&&I&&typeof O.stack=="string")return[O.stack,I.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),g=f[0],_=f[1];if(g&&_){var b=g.split(`
`),R=_.split(`
`);for(c=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;c<R.length&&!R[c].includes("DetermineComponentFrameRoot");)c++;if(l===b.length||c===R.length)for(l=b.length-1,c=R.length-1;1<=l&&0<=c&&b[l]!==R[c];)c--;for(;1<=l&&0<=c;l--,c--)if(b[l]!==R[c]){if(l!==1||c!==1)do if(l--,c--,0>c||b[l]!==R[c]){var M=`
`+b[l].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=l&&0<=c);break}}}finally{Ic=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vs(a):""}function YS(t){switch(t.tag){case 26:case 27:case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 15:return Oc(t.type,!1);case 11:return Oc(t.type.render,!1);case 1:return Oc(t.type,!0);case 31:return vs("Activity");default:return""}}function qd(t){try{var n="";do n+=YS(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vd(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function FS(t){var n=Vd(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){l=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ol(t){t._valueTracker||(t._valueTracker=FS(t))}function Yd(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=Vd(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var QS=/[\n"\\]/g;function Ht(t){return t.replace(QS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dc(t,n,a,l,c,f,g,_){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+zt(n)):t.value!==""+zt(n)&&(t.value=""+zt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xc(t,g,zt(n)):a!=null?xc(t,g,zt(a)):l!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+zt(_):t.removeAttribute("name")}function Fd(t,n,a,l,c,f,g,_){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+zt(a):"",n=n!=null?""+zt(n):a,_||n===t.value||(t.value=n),t.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=_?t.checked:!!l,t.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function xc(t,n,a){n==="number"&&cl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ss(t,n,a,l){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&l&&(t[a].defaultSelected=!0)}else{for(a=""+zt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Qd(t,n,a){if(n!=null&&(n=""+zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+zt(a):""}function Kd(t,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(F(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=zt(n),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function bs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var KS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xd(t,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,a):typeof a!="number"||a===0||KS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function $d(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&a[c]!==l&&Xd(t,c,l)}else for(var f in n)n.hasOwnProperty(f)&&Xd(t,f,n[f])}function Mc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$S=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(t){return $S.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var kc=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Es=null,Ts=null;function Wd(t){var n=gs(t);if(n&&(t=n.stateNode)){var a=t[vt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Dc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var c=l[vt]||null;if(!c)throw Error(r(90));Dc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===t.form&&Yd(l)}break e;case"textarea":Qd(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ss(t,!!a.multiple,n,!1)}}}var Uc=!1;function Zd(t,n,a){if(Uc)return t(n,a);Uc=!0;try{var l=t(n);return l}finally{if(Uc=!1,(Es!==null||Ts!==null)&&(Xl(),Es&&(n=Es,t=Ts,Ts=Es=null,Wd(n),t)))for(n=0;n<t.length;n++)Wd(t[n])}}function Na(t,n){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(wn)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{jc=!1}var $n=null,Pc=null,fl=null;function Jd(){if(fl)return fl;var t,n=Pc,a=n.length,l,c="value"in $n?$n.value:$n.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(l=1;l<=g&&n[a-l]===c[f-l];l++);return fl=c.slice(t,1<l?1-l:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function em(){return!1}function St(t){function n(a,l,c,f,g){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(a=t[_],this[_]=a?a(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:em,this.isPropagationStopped=em,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=St(Li),Oa=y({},Li,{view:0,detail:0}),WS=St(Oa),zc,Hc,Da,pl=y({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(zc=t.screenX-Da.screenX,Hc=t.screenY-Da.screenY):Hc=zc=0,Da=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),tm=St(pl),ZS=y({},pl,{dataTransfer:0}),JS=St(ZS),eb=y({},Oa,{relatedTarget:0}),Bc=St(eb),tb=y({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),nb=St(tb),ib=y({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sb=St(ib),ab=y({},Li,{data:0}),nm=St(ab),rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cb(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ob[t])?!!n[t]:!1}function Gc(){return cb}var ub=y({},Oa,{key:function(t){if(t.key){var n=rb[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fb=St(ub),hb=y({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=St(hb),db=y({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),mb=St(db),pb=y({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),gb=St(pb),_b=y({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yb=St(_b),vb=y({},Li,{newState:0,oldState:0}),Sb=St(vb),bb=[9,13,27,32],qc=wn&&"CompositionEvent"in window,xa=null;wn&&"documentMode"in document&&(xa=document.documentMode);var Eb=wn&&"TextEvent"in window&&!xa,sm=wn&&(!qc||xa&&8<xa&&11>=xa),am=" ",rm=!1;function lm(t,n){switch(t){case"keyup":return bb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function Tb(t,n){switch(t){case"compositionend":return om(n);case"keypress":return n.which!==32?null:(rm=!0,am);case"textInput":return t=n.data,t===am&&rm?null:t;default:return null}}function wb(t,n){if(ws)return t==="compositionend"||!qc&&lm(t,n)?(t=Jd(),fl=Pc=$n=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sm&&n.locale!=="ko"?null:n.data;default:return null}}var Cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Cb[t.type]:n==="textarea"}function um(t,n,a,l){Es?Ts?Ts.push(l):Ts=[l]:Es=l,n=to(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var Ma=null,ka=null;function Ab(t){Vg(t,0)}function gl(t){var n=Ra(t);if(Yd(n))return t}function fm(t,n){if(t==="change")return n}var hm=!1;if(wn){var Vc;if(wn){var Yc="oninput"in document;if(!Yc){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Yc=typeof dm.oninput=="function"}Vc=Yc}else Vc=!1;hm=Vc&&(!document.documentMode||9<document.documentMode)}function mm(){Ma&&(Ma.detachEvent("onpropertychange",pm),ka=Ma=null)}function pm(t){if(t.propertyName==="value"&&gl(ka)){var n=[];um(n,ka,t,Lc(t)),Zd(Ab,n)}}function Rb(t,n,a){t==="focusin"?(mm(),Ma=n,ka=a,Ma.attachEvent("onpropertychange",pm)):t==="focusout"&&mm()}function Nb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(ka)}function Ib(t,n){if(t==="click")return gl(n)}function Ob(t,n){if(t==="input"||t==="change")return gl(n)}function Db(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var It=typeof Object.is=="function"?Object.is:Db;function La(t,n){if(It(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!Sc.call(n,c)||!It(t[c],n[c]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,n){var a=gm(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gm(a)}}function ym(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ym(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function vm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=cl(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=cl(t.document)}return n}function Fc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xb=wn&&"documentMode"in document&&11>=document.documentMode,Cs=null,Qc=null,Ua=null,Kc=!1;function Sm(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Cs==null||Cs!==cl(l)||(l=Cs,"selectionStart"in l&&Fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ua&&La(Ua,l)||(Ua=l,l=to(Qc,"onSelect"),0<l.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=Cs)))}function Ui(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var As={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionrun:Ui("Transition","TransitionRun"),transitionstart:Ui("Transition","TransitionStart"),transitioncancel:Ui("Transition","TransitionCancel"),transitionend:Ui("Transition","TransitionEnd")},Xc={},bm={};wn&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function ji(t){if(Xc[t])return Xc[t];if(!As[t])return t;var n=As[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in bm)return Xc[t]=n[a];return t}var Em=ji("animationend"),Tm=ji("animationiteration"),wm=ji("animationstart"),Mb=ji("transitionrun"),kb=ji("transitionstart"),Lb=ji("transitioncancel"),Cm=ji("transitionend"),Am=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function Jt(t,n){Am.set(t,n),ki(n,[t])}var Rm=new WeakMap;function Bt(t,n){if(typeof t=="object"&&t!==null){var a=Rm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qd(n)},Rm.set(t,n),n)}return{value:t,source:n,stack:qd(n)}}var Gt=[],Rs=0,Wc=0;function _l(){for(var t=Rs,n=Wc=Rs=0;n<t;){var a=Gt[n];Gt[n++]=null;var l=Gt[n];Gt[n++]=null;var c=Gt[n];Gt[n++]=null;var f=Gt[n];if(Gt[n++]=null,l!==null&&c!==null){var g=l.pending;g===null?c.next=c:(c.next=g.next,g.next=c),l.pending=c}f!==0&&Nm(a,c,f)}}function yl(t,n,a,l){Gt[Rs++]=t,Gt[Rs++]=n,Gt[Rs++]=a,Gt[Rs++]=l,Wc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Zc(t,n,a,l){return yl(t,n,a,l),vl(t)}function Ns(t,n){return yl(t,null,null,n),vl(t)}function Nm(t,n,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Nt(a),t=f.hiddenUpdates,l=t[c],l===null?t[c]=[n]:l.push(n),n.lane=a|536870912),f):null}function vl(t){if(50<lr)throw lr=0,af=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Is={};function Ub(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,n,a,l){return new Ub(t,n,a,l)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cn(t,n){var a=t.alternate;return a===null?(a=Ot(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Im(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,l,c,f){var g=0;if(l=t,typeof t=="function")Jc(t)&&(g=1);else if(typeof t=="string")g=PE(t,a,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case G:return t=Ot(31,a,n,c),t.elementType=G,t.lanes=f,t;case U:return Pi(a.children,c,f,n);case B:g=8,c|=24;break;case V:return t=Ot(12,a,n,c|2),t.elementType=V,t.lanes=f,t;case X:return t=Ot(13,a,n,c),t.elementType=X,t.lanes=f,t;case ye:return t=Ot(19,a,n,c),t.elementType=ye,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ae:case ee:g=10;break e;case le:g=9;break e;case ge:g=11;break e;case Te:g=14;break e;case Re:g=16,l=null;break e}g=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Ot(g,a,n,c),n.elementType=t,n.type=l,n.lanes=f,n}function Pi(t,n,a,l){return t=Ot(7,t,l,n),t.lanes=a,t}function eu(t,n,a){return t=Ot(6,t,null,n),t.lanes=a,t}function tu(t,n,a){return n=Ot(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Os=[],Ds=0,bl=null,El=0,qt=[],Vt=0,zi=null,An=1,Rn="";function Hi(t,n){Os[Ds++]=El,Os[Ds++]=bl,bl=t,El=n}function Om(t,n,a){qt[Vt++]=An,qt[Vt++]=Rn,qt[Vt++]=zi,zi=t;var l=An;t=Rn;var c=32-Nt(l)-1;l&=~(1<<c),a+=1;var f=32-Nt(n)+c;if(30<f){var g=c-c%5;f=(l&(1<<g)-1).toString(32),l>>=g,c-=g,An=1<<32-Nt(n)+c|a<<c|l,Rn=f+t}else An=1<<f|a<<c|l,Rn=t}function nu(t){t.return!==null&&(Hi(t,1),Om(t,1,0))}function iu(t){for(;t===bl;)bl=Os[--Ds],Os[Ds]=null,El=Os[--Ds],Os[Ds]=null;for(;t===zi;)zi=qt[--Vt],qt[Vt]=null,Rn=qt[--Vt],qt[Vt]=null,An=qt[--Vt],qt[Vt]=null}var pt=null,qe=null,Ee=!1,Bi=null,hn=!1,su=Error(r(519));function Gi(t){var n=Error(r(418,""));throw za(Bt(n,t)),su}function Dm(t){var n=t.stateNode,a=t.type,l=t.memoizedProps;switch(n[ht]=t,n[vt]=l,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<cr.length;a++)me(cr[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Fd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ol(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Kd(n,l.value,l.defaultValue,l.children),ol(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Kg(n.textContent,a)?(l.popover!=null&&(me("beforetoggle",n),me("toggle",n)),l.onScroll!=null&&me("scroll",n),l.onScrollEnd!=null&&me("scrollend",n),l.onClick!=null&&(n.onclick=no),n=!0):n=!1,n||Gi(t)}function xm(t){for(pt=t.return;pt;)switch(pt.tag){case 5:case 13:hn=!1;return;case 27:case 3:hn=!0;return;default:pt=pt.return}}function ja(t){if(t!==pt)return!1;if(!Ee)return xm(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&qe&&Gi(t),xm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){qe=tn(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}qe=null}}else n===27?(n=qe,hi(t.type)?(t=Cf,Cf=null,qe=t):qe=n):qe=pt?tn(t.stateNode.nextSibling):null;return!0}function Pa(){qe=pt=null,Ee=!1}function Mm(){var t=Bi;return t!==null&&(Tt===null?Tt=t:Tt.push.apply(Tt,t),Bi=null),t}function za(t){Bi===null?Bi=[t]:Bi.push(t)}var au=x(null),qi=null,Nn=null;function Wn(t,n,a){H(au,n._currentValue),n._currentValue=a}function In(t){t._currentValue=au.current,z(au)}function ru(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function lu(t,n,a,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var _=f;f=c;for(var b=0;b<n.length;b++)if(_.context===n[b]){f.lanes|=a,_=f.alternate,_!==null&&(_.lanes|=a),ru(f.return,a,t),l||(g=null);break e}f=_.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ru(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ha(t,n,a,l){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var _=c.type;It(c.pendingProps.value,g.value)||(t!==null?t.push(_):t=[_])}}else if(c===At.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(pr):t=[pr])}c=c.return}t!==null&&lu(n,t,a,l),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!It(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vi(t){qi=t,Nn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return km(qi,t)}function wl(t,n){return qi===null&&Vi(t),km(t,n)}function km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Nn===null){if(t===null)throw Error(r(308));Nn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Nn=Nn.next=n;return a}var jb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Pb=s.unstable_scheduleCallback,zb=s.unstable_NormalPriority,We={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new jb,data:new Map,refCount:0}}function Ba(t){t.refCount--,t.refCount===0&&Pb(zb,function(){t.controller.abort()})}var Ga=null,cu=0,xs=0,Ms=null;function Hb(t,n){if(Ga===null){var a=Ga=[];cu=0,xs=hf(),Ms={status:"pending",value:void 0,then:function(l){a.push(l)}}}return cu++,n.then(Lm,Lm),n}function Lm(){if(--cu===0&&Ga!==null){Ms!==null&&(Ms.status="fulfilled");var t=Ga;Ga=null,xs=0,Ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Bb(t,n){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var Um=D.S;D.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hb(t,n),Um!==null&&Um(t,n)};var Yi=x(null);function uu(){var t=Yi.current;return t!==null?t:Le.pooledCache}function Cl(t,n){n===null?H(Yi,Yi.current):H(Yi,n.pool)}function jm(){var t=uu();return t===null?null:{parent:We._currentValue,pool:t}}var qa=Error(r(460)),Pm=Error(r(474)),Al=Error(r(542)),fu={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rl(){}function Hm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Rl,Rl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gm(t),t;default:if(typeof n.status=="string")n.then(Rl,Rl);else{if(t=Le,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Gm(t),t}throw Va=n,qa}}var Va=null;function Bm(){if(Va===null)throw Error(r(459));var t=Va;return Va=null,t}function Gm(t){if(t===qa||t===Al)throw Error(r(483))}var Zn=!1;function hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function du(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Jn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ei(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=vl(t),Nm(t,null,a),n}return yl(t,l,n,a),vl(t)}function Ya(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ld(t,a)}}function mu(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pu=!1;function Fa(){if(pu){var t=Ms;if(t!==null)throw t}}function Qa(t,n,a,l){pu=!1;var c=t.updateQueue;Zn=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var b=_,R=b.next;b.next=null,g===null?f=R:g.next=R,g=b;var M=t.alternate;M!==null&&(M=M.updateQueue,_=M.lastBaseUpdate,_!==g&&(_===null?M.firstBaseUpdate=R:_.next=R,M.lastBaseUpdate=b))}if(f!==null){var L=c.baseState;g=0,M=R=b=null,_=f;do{var I=_.lane&-536870913,O=I!==_.lane;if(O?(_e&I)===I:(l&I)===I){I!==0&&I===xs&&(pu=!0),M!==null&&(M=M.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var te=t,W=_;I=n;var Oe=a;switch(W.tag){case 1:if(te=W.payload,typeof te=="function"){L=te.call(Oe,L,I);break e}L=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=W.payload,I=typeof te=="function"?te.call(Oe,L,I):te,I==null)break e;L=y({},L,I);break e;case 2:Zn=!0}}I=_.callback,I!==null&&(t.flags|=64,O&&(t.flags|=8192),O=c.callbacks,O===null?c.callbacks=[I]:O.push(I))}else O={lane:I,tag:_.tag,payload:_.payload,callback:_.callback,next:null},M===null?(R=M=O,b=L):M=M.next=O,g|=I;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;O=_,_=O.next,O.next=null,c.lastBaseUpdate=O,c.shared.pending=null}}while(!0);M===null&&(b=L),c.baseState=b,c.firstBaseUpdate=R,c.lastBaseUpdate=M,f===null&&(c.shared.lanes=0),oi|=g,t.lanes=g,t.memoizedState=L}}function qm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qm(a[t],n)}var ks=x(null),Nl=x(0);function Ym(t,n){t=Un,H(Nl,t),H(ks,n),Un=t|n.baseLanes}function gu(){H(Nl,Un),H(ks,ks.current)}function _u(){Un=Nl.current,z(ks),z(Nl)}var ti=0,oe=null,Ne=null,Xe=null,Il=!1,Ls=!1,Fi=!1,Ol=0,Ka=0,Us=null,Gb=0;function Fe(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!It(t[a],n[a]))return!1;return!0}function vu(t,n,a,l,c,f){return ti=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Np:Ip,Fi=!1,f=a(l,c),Fi=!1,Ls&&(f=Qm(n,a,l,c)),Fm(t),f}function Fm(t){D.H=Ul;var n=Ne!==null&&Ne.next!==null;if(ti=0,Xe=Ne=oe=null,Il=!1,Ka=0,Us=null,n)throw Error(r(300));t===null||tt||(t=t.dependencies,t!==null&&Tl(t)&&(tt=!0))}function Qm(t,n,a,l){oe=t;var c=0;do{if(Ls&&(Us=null),Ka=0,Ls=!1,25<=c)throw Error(r(301));if(c+=1,Xe=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=Xb,f=n(a,l)}while(Ls);return f}function qb(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?Xa(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(oe.flags|=1024),n}function Su(){var t=Ol!==0;return Ol=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Eu(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}ti=0,Xe=Ne=oe=null,Ls=!1,Ka=Ol=0,Us=null}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?oe.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function $e(){if(Ne===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=Xe===null?oe.memoizedState:Xe.next;if(n!==null)Xe=n,Ne=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Xe===null?oe.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xa(t){var n=Ka;return Ka+=1,Us===null&&(Us=[]),t=Hm(Us,t,n),n=oe,(Xe===null?n.memoizedState:Xe.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Np:Ip),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xa(t);if(t.$$typeof===ee)return dt(t)}throw Error(r(438,String(t)))}function wu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),l=0;l<t;l++)a[l]=xe;return n.index++,a}function On(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=$e();return Cu(n,Ne,t)}function Cu(t,n,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var c=t.baseQueue,f=l.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,l.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var _=g=null,b=null,R=n,M=!1;do{var L=R.lane&-536870913;if(L!==R.lane?(_e&L)===L:(ti&L)===L){var I=R.revertLane;if(I===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),L===xs&&(M=!0);else if((ti&I)===I){R=R.next,I===xs&&(M=!0);continue}else L={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(_=b=L,g=f):b=b.next=L,oe.lanes|=I,oi|=I;L=R.action,Fi&&a(f,L),f=R.hasEagerState?R.eagerState:a(f,L)}else I={lane:L,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(_=b=I,g=f):b=b.next=I,oe.lanes|=L,oi|=L;R=R.next}while(R!==null&&R!==n);if(b===null?g=f:b.next=_,!It(f,t.memoizedState)&&(tt=!0,M&&(a=Ms,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=b,l.lastRenderedState=f}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Au(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);It(f,n.memoizedState)||(tt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function Km(t,n,a){var l=oe,c=$e(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!It((Ne||c).memoizedState,a);g&&(c.memoizedState=a,tt=!0),c=c.queue;var _=Wm.bind(null,l,c,t);if($a(2048,8,_,[t]),c.getSnapshot!==n||g||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,js(9,Ml(),$m.bind(null,l,c,a,n),null),Le===null)throw Error(r(349));f||(ti&124)!==0||Xm(l,n,a)}return a}function Xm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Tu(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $m(t,n,a,l){n.value=a,n.getSnapshot=l,Zm(n)&&Jm(t)}function Wm(t,n,a){return a(function(){Zm(n)&&Jm(t)})}function Zm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!It(t,a)}catch{return!0}}function Jm(t){var n=Ns(t,2);n!==null&&Lt(n,t,2)}function Ru(t){var n=bt();if(typeof t=="function"){var a=t;if(t=a(),Fi){Kn(!0);try{a()}finally{Kn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:t},n}function ep(t,n,a,l){return t.baseState=a,Cu(t,Ne,typeof l=="function"?l:On)}function Vb(t,n,a,l,c){if(Ll(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};D.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,tp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tp(t,n){var a=n.action,l=n.payload,c=t.state;if(n.isTransition){var f=D.T,g={};D.T=g;try{var _=a(c,l),b=D.S;b!==null&&b(g,_),np(t,n,_)}catch(R){Nu(t,n,R)}finally{D.T=f}}else try{f=a(c,l),np(t,n,f)}catch(R){Nu(t,n,R)}}function np(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ip(t,n,l)},function(l){return Nu(t,n,l)}):ip(t,n,a)}function ip(t,n,a){n.status="fulfilled",n.value=a,sp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tp(t,a)))}function Nu(t,n,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,sp(n),n=n.next;while(n!==l)}t.action=null}function sp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ap(t,n){return n}function rp(t,n){if(Ee){var a=Le.formState;if(a!==null){e:{var l=oe;if(Ee){if(qe){t:{for(var c=qe,f=hn;c.nodeType!==8;){if(!f){c=null;break t}if(c=tn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=tn(c.nextSibling),l=c.data==="F!";break e}}Gi(l)}l=!1}l&&(n=a[0])}}return a=bt(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ap,lastRenderedState:n},a.queue=l,a=Cp.bind(null,oe,l),l.dispatch=a,l=Ru(!1),f=Mu.bind(null,oe,!1,l.queue),l=bt(),c={state:n,dispatch:null,action:t,pending:null},l.queue=c,a=Vb.bind(null,oe,c,f,a),c.dispatch=a,l.memoizedState=t,[n,a,!1]}function lp(t){var n=$e();return op(n,Ne,t)}function op(t,n,a){if(n=Cu(t,n,ap)[0],t=xl(On)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Xa(n)}catch(g){throw g===qa?Al:g}else l=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,js(9,Ml(),Yb.bind(null,c,a),null)),[l,f,t]}function Yb(t,n){t.action=n}function cp(t){var n=$e(),a=Ne;if(a!==null)return op(n,a,t);$e(),n=n.memoizedState,a=$e();var l=a.queue.dispatch;return a.memoizedState=t,[n,l,!1]}function js(t,n,a,l){return t={tag:t,create:a,deps:l,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Tu(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t),t}function Ml(){return{destroy:void 0,resource:void 0}}function up(){return $e().memoizedState}function kl(t,n,a,l){var c=bt();l=l===void 0?null:l,oe.flags|=t,c.memoizedState=js(1|n,Ml(),a,l)}function $a(t,n,a,l){var c=$e();l=l===void 0?null:l;var f=c.memoizedState.inst;Ne!==null&&l!==null&&yu(l,Ne.memoizedState.deps)?c.memoizedState=js(n,f,a,l):(oe.flags|=t,c.memoizedState=js(1|n,f,a,l))}function fp(t,n){kl(8390656,8,t,n)}function hp(t,n){$a(2048,8,t,n)}function dp(t,n){return $a(4,2,t,n)}function mp(t,n){return $a(4,4,t,n)}function pp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gp(t,n,a){a=a!=null?a.concat([t]):null,$a(4,4,pp.bind(null,n,t),a)}function Iu(){}function _p(t,n){var a=$e();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&yu(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function yp(t,n){var a=$e();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&yu(n,l[1]))return l[0];if(l=t(),Fi){Kn(!0);try{t()}finally{Kn(!1)}}return a.memoizedState=[l,n],l}function Ou(t,n,a){return a===void 0||(ti&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=bg(),oe.lanes|=t,oi|=t,a)}function vp(t,n,a,l){return It(a,n)?a:ks.current!==null?(t=Ou(t,a,l),It(t,n)||(tt=!0),t):(ti&42)===0?(tt=!0,t.memoizedState=a):(t=bg(),oe.lanes|=t,oi|=t,n)}function Sp(t,n,a,l,c){var f=P.p;P.p=f!==0&&8>f?f:8;var g=D.T,_={};D.T=_,Mu(t,!1,n,a);try{var b=c(),R=D.S;if(R!==null&&R(_,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var M=Bb(b,l);Wa(t,n,M,kt(t))}else Wa(t,n,l,kt(t))}catch(L){Wa(t,n,{then:function(){},status:"rejected",reason:L},kt())}finally{P.p=f,D.T=g}}function Fb(){}function Du(t,n,a,l){if(t.tag!==5)throw Error(r(476));var c=bp(t).queue;Sp(t,c,n,Y,a===null?Fb:function(){return Ep(t),a(l)})}function bp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ep(t){var n=bp(t).next.queue;Wa(t,n,{},kt())}function xu(){return dt(pr)}function Tp(){return $e().memoizedState}function wp(){return $e().memoizedState}function Qb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kt();t=Jn(a);var l=ei(n,t,a);l!==null&&(Lt(l,n,a),Ya(l,n,a)),n={cache:ou()},t.payload=n;return}n=n.return}}function Kb(t,n,a){var l=kt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(t)?Ap(n,a):(a=Zc(t,n,a,l),a!==null&&(Lt(a,t,l),Rp(a,n,l)))}function Cp(t,n,a){var l=kt();Wa(t,n,a,l)}function Wa(t,n,a,l){var c={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(t))Ap(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,_=f(g,a);if(c.hasEagerState=!0,c.eagerState=_,It(_,g))return yl(t,n,c,0),Le===null&&_l(),!1}catch{}finally{}if(a=Zc(t,n,c,l),a!==null)return Lt(a,t,l),Rp(a,n,l),!0}return!1}function Mu(t,n,a,l){if(l={lane:2,revertLane:hf(),action:l,hasEagerState:!1,eagerState:null,next:null},Ll(t)){if(n)throw Error(r(479))}else n=Zc(t,a,l,2),n!==null&&Lt(n,t,2)}function Ll(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Ap(t,n){Ls=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Rp(t,n,a){if((a&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ld(t,a)}}var Ul={readContext:dt,use:Dl,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe},Np={readContext:dt,use:Dl,useCallback:function(t,n){return bt().memoizedState=[t,n===void 0?null:n],t},useContext:dt,useEffect:fp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,kl(4194308,4,pp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return kl(4194308,4,t,n)},useInsertionEffect:function(t,n){kl(4,2,t,n)},useMemo:function(t,n){var a=bt();n=n===void 0?null:n;var l=t();if(Fi){Kn(!0);try{t()}finally{Kn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(t,n,a){var l=bt();if(a!==void 0){var c=a(n);if(Fi){Kn(!0);try{a(n)}finally{Kn(!1)}}}else c=n;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=Kb.bind(null,oe,t),[l.memoizedState,t]},useRef:function(t){var n=bt();return t={current:t},n.memoizedState=t},useState:function(t){t=Ru(t);var n=t.queue,a=Cp.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(t,n){var a=bt();return Ou(a,t,n)},useTransition:function(){var t=Ru(!1);return t=Sp.bind(null,oe,t.queue,!0,!1),bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var l=oe,c=bt();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Le===null)throw Error(r(349));(_e&124)!==0||Xm(l,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,fp(Wm.bind(null,l,f,t),[t]),l.flags|=2048,js(9,Ml(),$m.bind(null,l,f,a,n),null),a},useId:function(){var t=bt(),n=Le.identifierPrefix;if(Ee){var a=Rn,l=An;a=(l&~(1<<32-Nt(l)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Gb++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:xu,useFormState:rp,useActionState:rp,useOptimistic:function(t){var n=bt();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:wu,useCacheRefresh:function(){return bt().memoizedState=Qb.bind(null,oe)}},Ip={readContext:dt,use:Dl,useCallback:_p,useContext:dt,useEffect:hp,useImperativeHandle:gp,useInsertionEffect:dp,useLayoutEffect:mp,useMemo:yp,useReducer:xl,useRef:up,useState:function(){return xl(On)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=$e();return vp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=xl(On)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Xa(t),n]},useSyncExternalStore:Km,useId:Tp,useHostTransitionStatus:xu,useFormState:lp,useActionState:lp,useOptimistic:function(t,n){var a=$e();return ep(a,Ne,t,n)},useMemoCache:wu,useCacheRefresh:wp},Xb={readContext:dt,use:Dl,useCallback:_p,useContext:dt,useEffect:hp,useImperativeHandle:gp,useInsertionEffect:dp,useLayoutEffect:mp,useMemo:yp,useReducer:Au,useRef:up,useState:function(){return Au(On)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=$e();return Ne===null?Ou(a,t,n):vp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=Au(On)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:Xa(t),n]},useSyncExternalStore:Km,useId:Tp,useHostTransitionStatus:xu,useFormState:cp,useActionState:cp,useOptimistic:function(t,n){var a=$e();return Ne!==null?ep(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:wp},Ps=null,Za=0;function jl(t){var n=Za;return Za+=1,Ps===null&&(Ps=[]),Hm(Ps,t,n)}function Ja(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Op(t){var n=t._init;return n(t._payload)}function Dp(t){function n(C,T){if(t){var A=C.deletions;A===null?(C.deletions=[T],C.flags|=16):A.push(T)}}function a(C,T){if(!t)return null;for(;T!==null;)n(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function c(C,T){return C=Cn(C,T),C.index=0,C.sibling=null,C}function f(C,T,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<T?(C.flags|=67108866,T):A):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function g(C){return t&&C.alternate===null&&(C.flags|=67108866),C}function _(C,T,A,k){return T===null||T.tag!==6?(T=eu(A,C.mode,k),T.return=C,T):(T=c(T,A),T.return=C,T)}function b(C,T,A,k){var q=A.type;return q===U?M(C,T,A.props.children,k,A.key):T!==null&&(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Re&&Op(q)===T.type)?(T=c(T,A.props),Ja(T,A),T.return=C,T):(T=Sl(A.type,A.key,A.props,null,C.mode,k),Ja(T,A),T.return=C,T)}function R(C,T,A,k){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=tu(A,C.mode,k),T.return=C,T):(T=c(T,A.children||[]),T.return=C,T)}function M(C,T,A,k,q){return T===null||T.tag!==7?(T=Pi(A,C.mode,k,q),T.return=C,T):(T=c(T,A),T.return=C,T)}function L(C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=eu(""+T,C.mode,A),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return A=Sl(T.type,T.key,T.props,null,C.mode,A),Ja(A,T),A.return=C,A;case N:return T=tu(T,C.mode,A),T.return=C,T;case Re:var k=T._init;return T=k(T._payload),L(C,T,A)}if(F(T)||Ge(T))return T=Pi(T,C.mode,A,null),T.return=C,T;if(typeof T.then=="function")return L(C,jl(T),A);if(T.$$typeof===ee)return L(C,wl(C,T),A);Pl(C,T)}return null}function I(C,T,A,k){var q=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return q!==null?null:_(C,T,""+A,k);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return A.key===q?b(C,T,A,k):null;case N:return A.key===q?R(C,T,A,k):null;case Re:return q=A._init,A=q(A._payload),I(C,T,A,k)}if(F(A)||Ge(A))return q!==null?null:M(C,T,A,k,null);if(typeof A.then=="function")return I(C,T,jl(A),k);if(A.$$typeof===ee)return I(C,T,wl(C,A),k);Pl(C,A)}return null}function O(C,T,A,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return C=C.get(A)||null,_(T,C,""+k,q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return C=C.get(k.key===null?A:k.key)||null,b(T,C,k,q);case N:return C=C.get(k.key===null?A:k.key)||null,R(T,C,k,q);case Re:var ue=k._init;return k=ue(k._payload),O(C,T,A,k,q)}if(F(k)||Ge(k))return C=C.get(A)||null,M(T,C,k,q,null);if(typeof k.then=="function")return O(C,T,A,jl(k),q);if(k.$$typeof===ee)return O(C,T,A,wl(T,k),q);Pl(T,k)}return null}function te(C,T,A,k){for(var q=null,ue=null,Q=T,Z=T=0,it=null;Q!==null&&Z<A.length;Z++){Q.index>Z?(it=Q,Q=null):it=Q.sibling;var Se=I(C,Q,A[Z],k);if(Se===null){Q===null&&(Q=it);break}t&&Q&&Se.alternate===null&&n(C,Q),T=f(Se,T,Z),ue===null?q=Se:ue.sibling=Se,ue=Se,Q=it}if(Z===A.length)return a(C,Q),Ee&&Hi(C,Z),q;if(Q===null){for(;Z<A.length;Z++)Q=L(C,A[Z],k),Q!==null&&(T=f(Q,T,Z),ue===null?q=Q:ue.sibling=Q,ue=Q);return Ee&&Hi(C,Z),q}for(Q=l(Q);Z<A.length;Z++)it=O(Q,C,Z,A[Z],k),it!==null&&(t&&it.alternate!==null&&Q.delete(it.key===null?Z:it.key),T=f(it,T,Z),ue===null?q=it:ue.sibling=it,ue=it);return t&&Q.forEach(function(_i){return n(C,_i)}),Ee&&Hi(C,Z),q}function W(C,T,A,k){if(A==null)throw Error(r(151));for(var q=null,ue=null,Q=T,Z=T=0,it=null,Se=A.next();Q!==null&&!Se.done;Z++,Se=A.next()){Q.index>Z?(it=Q,Q=null):it=Q.sibling;var _i=I(C,Q,Se.value,k);if(_i===null){Q===null&&(Q=it);break}t&&Q&&_i.alternate===null&&n(C,Q),T=f(_i,T,Z),ue===null?q=_i:ue.sibling=_i,ue=_i,Q=it}if(Se.done)return a(C,Q),Ee&&Hi(C,Z),q;if(Q===null){for(;!Se.done;Z++,Se=A.next())Se=L(C,Se.value,k),Se!==null&&(T=f(Se,T,Z),ue===null?q=Se:ue.sibling=Se,ue=Se);return Ee&&Hi(C,Z),q}for(Q=l(Q);!Se.done;Z++,Se=A.next())Se=O(Q,C,Z,Se.value,k),Se!==null&&(t&&Se.alternate!==null&&Q.delete(Se.key===null?Z:Se.key),T=f(Se,T,Z),ue===null?q=Se:ue.sibling=Se,ue=Se);return t&&Q.forEach(function($E){return n(C,$E)}),Ee&&Hi(C,Z),q}function Oe(C,T,A,k){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case w:e:{for(var q=A.key;T!==null;){if(T.key===q){if(q=A.type,q===U){if(T.tag===7){a(C,T.sibling),k=c(T,A.props.children),k.return=C,C=k;break e}}else if(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Re&&Op(q)===T.type){a(C,T.sibling),k=c(T,A.props),Ja(k,A),k.return=C,C=k;break e}a(C,T);break}else n(C,T);T=T.sibling}A.type===U?(k=Pi(A.props.children,C.mode,k,A.key),k.return=C,C=k):(k=Sl(A.type,A.key,A.props,null,C.mode,k),Ja(k,A),k.return=C,C=k)}return g(C);case N:e:{for(q=A.key;T!==null;){if(T.key===q)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){a(C,T.sibling),k=c(T,A.children||[]),k.return=C,C=k;break e}else{a(C,T);break}else n(C,T);T=T.sibling}k=tu(A,C.mode,k),k.return=C,C=k}return g(C);case Re:return q=A._init,A=q(A._payload),Oe(C,T,A,k)}if(F(A))return te(C,T,A,k);if(Ge(A)){if(q=Ge(A),typeof q!="function")throw Error(r(150));return A=q.call(A),W(C,T,A,k)}if(typeof A.then=="function")return Oe(C,T,jl(A),k);if(A.$$typeof===ee)return Oe(C,T,wl(C,A),k);Pl(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(a(C,T.sibling),k=c(T,A),k.return=C,C=k):(a(C,T),k=eu(A,C.mode,k),k.return=C,C=k),g(C)):a(C,T)}return function(C,T,A,k){try{Za=0;var q=Oe(C,T,A,k);return Ps=null,q}catch(Q){if(Q===qa||Q===Al)throw Q;var ue=Ot(29,Q,null,C.mode);return ue.lanes=k,ue.return=C,ue}finally{}}}var zs=Dp(!0),xp=Dp(!1),Yt=x(null),dn=null;function ni(t){var n=t.alternate;H(Ze,Ze.current&1),H(Yt,t),dn===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(dn=t)}function Mp(t){if(t.tag===22){if(H(Ze,Ze.current),H(Yt,t),dn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(dn=t)}}else ii()}function ii(){H(Ze,Ze.current),H(Yt,Yt.current)}function Dn(t){z(Yt),dn===t&&(dn=null),z(Ze)}var Ze=x(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ku(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lu={enqueueSetState:function(t,n,a){t=t._reactInternals;var l=kt(),c=Jn(l);c.payload=n,a!=null&&(c.callback=a),n=ei(t,c,l),n!==null&&(Lt(n,t,l),Ya(n,t,l))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=kt(),c=Jn(l);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ei(t,c,l),n!==null&&(Lt(n,t,l),Ya(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kt(),l=Jn(a);l.tag=2,n!=null&&(l.callback=n),n=ei(t,l,a),n!==null&&(Lt(n,t,a),Ya(n,t,a))}};function kp(t,n,a,l,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,g):n.prototype&&n.prototype.isPureReactComponent?!La(a,l)||!La(c,f):!0}function Lp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&Lu.enqueueReplaceState(n,n.state,null)}function Qi(t,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Up(t){Hl(t)}function jp(t){console.error(t)}function Pp(t){Hl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function zp(t,n,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Uu(t,n,a){return a=Jn(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function Hp(t){return t=Jn(t),t.tag=3,t}function Bp(t,n,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;t.payload=function(){return c(f)},t.callback=function(){zp(n,a,l)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){zp(n,a,l),typeof c!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function $b(t,n,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Ha(n,a,c,!0),a=Yt.current,a!==null){switch(a.tag){case 13:return dn===null?lf():a.alternate===null&&Ve===0&&(Ve=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===fu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),cf(t,l,c)),!1;case 22:return a.flags|=65536,l===fu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),cf(t,l,c)),!1}throw Error(r(435,a.tag))}return cf(t,l,c),lf(),!1}if(Ee)return n=Yt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==su&&(t=Error(r(422),{cause:l}),za(Bt(t,a)))):(l!==su&&(n=Error(r(423),{cause:l}),za(Bt(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=Bt(l,a),c=Uu(t.stateNode,l,c),mu(t,c),Ve!==4&&(Ve=2)),!1;var f=Error(r(520),{cause:l});if(f=Bt(f,a),rr===null?rr=[f]:rr.push(f),Ve!==4&&(Ve=2),n===null)return!0;l=Bt(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Uu(a.stateNode,l,t),mu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ci===null||!ci.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Hp(c),Bp(c,t,a,l),mu(a,c),!1}a=a.return}while(a!==null);return!1}var Gp=Error(r(461)),tt=!1;function ct(t,n,a,l){n.child=t===null?xp(n,null,a,l):zs(n,t.child,a,l)}function qp(t,n,a,l,c){a=a.render;var f=n.ref;if("ref"in l){var g={};for(var _ in l)_!=="ref"&&(g[_]=l[_])}else g=l;return Vi(n),l=vu(t,n,a,g,f,c),_=Su(),t!==null&&!tt?(bu(t,n,c),xn(t,n,c)):(Ee&&_&&nu(n),n.flags|=1,ct(t,n,l,c),n.child)}function Vp(t,n,a,l,c){if(t===null){var f=a.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Yp(t,n,f,l,c)):(t=Sl(a.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Vu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:La,a(g,l)&&t.ref===n.ref)return xn(t,n,c)}return n.flags|=1,t=Cn(f,l),t.ref=n.ref,t.return=n,n.child=t}function Yp(t,n,a,l,c){if(t!==null){var f=t.memoizedProps;if(La(f,l)&&t.ref===n.ref)if(tt=!1,n.pendingProps=l=f,Vu(t,c))(t.flags&131072)!==0&&(tt=!0);else return n.lanes=t.lanes,xn(t,n,c)}return ju(t,n,a,l,c)}function Fp(t,n,a){var l=n.pendingProps,c=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return Qp(t,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?Ym(n,f):gu(),Mp(n);else return n.lanes=n.childLanes=536870912,Qp(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Cl(n,f.cachePool),Ym(n,f),ii(),n.memoizedState=null):(t!==null&&Cl(n,null),gu(),ii());return ct(t,n,c,a),n.child}function Qp(t,n,a,l){var c=uu();return c=c===null?null:{parent:We._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Cl(n,null),gu(),Mp(n),t!==null&&Ha(t,n,l,!0),null}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ju(t,n,a,l,c){return Vi(n),a=vu(t,n,a,l,void 0,c),l=Su(),t!==null&&!tt?(bu(t,n,c),xn(t,n,c)):(Ee&&l&&nu(n),n.flags|=1,ct(t,n,a,c),n.child)}function Kp(t,n,a,l,c,f){return Vi(n),n.updateQueue=null,a=Qm(n,l,a,c),Fm(t),l=Su(),t!==null&&!tt?(bu(t,n,f),xn(t,n,f)):(Ee&&l&&nu(n),n.flags|=1,ct(t,n,a,f),n.child)}function Xp(t,n,a,l,c){if(Vi(n),n.stateNode===null){var f=Is,g=a.contextType;typeof g=="object"&&g!==null&&(f=dt(g)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},hu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?dt(g):Is,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ku(n,a,g,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Lu.enqueueReplaceState(f,f.state,null),Qa(n,l,f,c),Fa(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var _=n.memoizedProps,b=Qi(a,_);f.props=b;var R=f.context,M=a.contextType;g=Is,typeof M=="object"&&M!==null&&(g=dt(M));var L=a.getDerivedStateFromProps;M=typeof L=="function"||typeof f.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,M||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_||R!==g)&&Lp(n,f,l,g),Zn=!1;var I=n.memoizedState;f.state=I,Qa(n,l,f,c),Fa(),R=n.memoizedState,_||I!==R||Zn?(typeof L=="function"&&(ku(n,a,L,l),R=n.memoizedState),(b=Zn||kp(n,a,b,l,I,R,g))?(M||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=R),f.props=l,f.state=R,f.context=g,l=b):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,du(t,n),g=n.memoizedProps,M=Qi(a,g),f.props=M,L=n.pendingProps,I=f.context,R=a.contextType,b=Is,typeof R=="object"&&R!==null&&(b=dt(R)),_=a.getDerivedStateFromProps,(R=typeof _=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==L||I!==b)&&Lp(n,f,l,b),Zn=!1,I=n.memoizedState,f.state=I,Qa(n,l,f,c),Fa();var O=n.memoizedState;g!==L||I!==O||Zn||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof _=="function"&&(ku(n,a,_,l),O=n.memoizedState),(M=Zn||kp(n,a,M,l,I,O,b)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(R||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,O,b),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,O,b)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&I===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&I===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=O),f.props=l,f.state=O,f.context=b,l=M):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&I===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&I===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,Gl(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=zs(n,t.child,null,c),n.child=zs(n,null,a,c)):ct(t,n,a,c),n.memoizedState=f.state,t=n.child):t=xn(t,n,c),t}function $p(t,n,a,l){return Pa(),n.flags|=256,ct(t,n,a,l),n.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(t){return{baseLanes:t,cachePool:jm()}}function Hu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ft),t}function Wp(t,n,a){var l=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ze.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(c?ni(n):ii(),Ee){var _=qe,b;if(b=_){e:{for(b=_,_=hn;b.nodeType!==8;){if(!_){_=null;break e}if(b=tn(b.nextSibling),b===null){_=null;break e}}_=b}_!==null?(n.memoizedState={dehydrated:_,treeContext:zi!==null?{id:An,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},b=Ot(18,null,null,0),b.stateNode=_,b.return=n,n.child=b,pt=n,qe=null,b=!0):b=!1}b||Gi(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return wf(_)?n.lanes=32:n.lanes=536870912,null;Dn(n)}return _=l.children,l=l.fallback,c?(ii(),c=n.mode,_=ql({mode:"hidden",children:_},c),l=Pi(l,c,a,null),_.return=n,l.return=n,_.sibling=l,n.child=_,c=n.child,c.memoizedState=zu(a),c.childLanes=Hu(t,g,a),n.memoizedState=Pu,l):(ni(n),Bu(n,_))}if(b=t.memoizedState,b!==null&&(_=b.dehydrated,_!==null)){if(f)n.flags&256?(ni(n),n.flags&=-257,n=Gu(t,n,a)):n.memoizedState!==null?(ii(),n.child=t.child,n.flags|=128,n=null):(ii(),c=l.fallback,_=n.mode,l=ql({mode:"visible",children:l.children},_),c=Pi(c,_,a,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,zs(n,t.child,null,a),l=n.child,l.memoizedState=zu(a),l.childLanes=Hu(t,g,a),n.memoizedState=Pu,n=c);else if(ni(n),wf(_)){if(g=_.nextSibling&&_.nextSibling.dataset,g)var R=g.dgst;g=R,l=Error(r(419)),l.stack="",l.digest=g,za({value:l,source:null,stack:null}),n=Gu(t,n,a)}else if(tt||Ha(t,n,a,!1),g=(a&t.childLanes)!==0,tt||g){if(g=Le,g!==null&&(l=a&-a,l=(l&42)!==0?1:wc(l),l=(l&(g.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,Ns(t,l),Lt(g,t,l),Gp;_.data==="$?"||lf(),n=Gu(t,n,a)}else _.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=b.treeContext,qe=tn(_.nextSibling),pt=n,Ee=!0,Bi=null,hn=!1,t!==null&&(qt[Vt++]=An,qt[Vt++]=Rn,qt[Vt++]=zi,An=t.id,Rn=t.overflow,zi=n),n=Bu(n,l.children),n.flags|=4096);return n}return c?(ii(),c=l.fallback,_=n.mode,b=t.child,R=b.sibling,l=Cn(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,R!==null?c=Cn(R,c):(c=Pi(c,_,a,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,_=t.child.memoizedState,_===null?_=zu(a):(b=_.cachePool,b!==null?(R=We._currentValue,b=b.parent!==R?{parent:R,pool:R}:b):b=jm(),_={baseLanes:_.baseLanes|a,cachePool:b}),c.memoizedState=_,c.childLanes=Hu(t,g,a),n.memoizedState=Pu,l):(ni(n),a=t.child,t=a.sibling,a=Cn(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Bu(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Ot(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Gu(t,n,a){return zs(n,t.child,null,a),t=Bu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Zp(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),ru(t.return,n,a)}function qu(t,n,a,l,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=c)}function Jp(t,n,a){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(ct(t,n,l.children,a),l=Ze.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,a,n);else if(t.tag===19)Zp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(H(Ze,l),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),qu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&zl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}qu(n,!0,a,null,f);break;case"together":qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xn(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),oi|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ha(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Cn(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Cn(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Vu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function Wb(t,n,a){switch(n.tag){case 3:je(n,n.stateNode.containerInfo),Wn(n,We,t.memoizedState.cache),Pa();break;case 27:case 5:vc(n);break;case 4:je(n,n.stateNode.containerInfo);break;case 10:Wn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ni(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wp(t,n,a):(ni(n),t=xn(t,n,a),t!==null?t.sibling:null);ni(n);break;case 19:var c=(t.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Ha(t,n,a,!1),l=(a&n.childLanes)!==0),c){if(l)return Jp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),H(Ze,Ze.current),l)break;return null;case 22:case 23:return n.lanes=0,Fp(t,n,a);case 24:Wn(n,We,t.memoizedState.cache)}return xn(t,n,a)}function eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)tt=!0;else{if(!Vu(t,a)&&(n.flags&128)===0)return tt=!1,Wb(t,n,a);tt=(t.flags&131072)!==0}else tt=!1,Ee&&(n.flags&1048576)!==0&&Om(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")Jc(l)?(t=Qi(l,t),n.tag=1,n=Xp(null,n,l,t,a)):(n.tag=0,n=ju(null,n,l,t,a));else{if(l!=null){if(c=l.$$typeof,c===ge){n.tag=11,n=qp(null,n,l,t,a);break e}else if(c===Te){n.tag=14,n=Vp(null,n,l,t,a);break e}}throw n=Zt(l)||l,Error(r(306,n,""))}}return n;case 0:return ju(t,n,n.type,n.pendingProps,a);case 1:return l=n.type,c=Qi(l,n.pendingProps),Xp(t,n,l,c,a);case 3:e:{if(je(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;c=f.element,du(t,n),Qa(n,l,null,a);var g=n.memoizedState;if(l=g.cache,Wn(n,We,l),l!==f.cache&&lu(n,[We],a,!0),Fa(),l=g.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$p(t,n,l,a);break e}else if(l!==c){c=Bt(Error(r(424)),n),za(c),n=$p(t,n,l,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=tn(t.firstChild),pt=n,Ee=!0,Bi=null,hn=!0,a=xp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Pa(),l===c){n=xn(t,n,a);break e}ct(t,n,l,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=s_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,l=io(se.current).createElement(a),l[ht]=n,l[vt]=t,ft(l,a,t),et(l),n.stateNode=l):n.memoizedState=s_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return vc(n),t===null&&Ee&&(l=n.stateNode=t_(n.type,n.pendingProps,se.current),pt=n,hn=!0,c=qe,hi(n.type)?(Cf=c,qe=tn(l.firstChild)):qe=c),ct(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((c=l=qe)&&(l=CE(l,n.type,n.pendingProps,hn),l!==null?(n.stateNode=l,pt=n,qe=tn(l.firstChild),hn=!1,c=!0):c=!1),c||Gi(n)),vc(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,l=f.children,bf(c,f)?l=null:g!==null&&bf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=vu(t,n,qb,null,null,a),pr._currentValue=c),Gl(t,n),ct(t,n,l,a),n.child;case 6:return t===null&&Ee&&((t=a=qe)&&(a=AE(a,n.pendingProps,hn),a!==null?(n.stateNode=a,pt=n,qe=null,t=!0):t=!1),t||Gi(n)),null;case 13:return Wp(t,n,a);case 4:return je(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=zs(n,null,l,a):ct(t,n,l,a),n.child;case 11:return qp(t,n,n.type,n.pendingProps,a);case 7:return ct(t,n,n.pendingProps,a),n.child;case 8:return ct(t,n,n.pendingProps.children,a),n.child;case 12:return ct(t,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Wn(n,n.type,l.value),ct(t,n,l.children,a),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,Vi(n),c=dt(c),l=l(c),n.flags|=1,ct(t,n,l,a),n.child;case 14:return Vp(t,n,n.type,n.pendingProps,a);case 15:return Yp(t,n,n.type,n.pendingProps,a);case 19:return Jp(t,n,a);case 31:return l=n.pendingProps,a=n.mode,l={mode:l.mode,children:l.children},t===null?(a=ql(l,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Cn(t.child,l),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fp(t,n,a);case 24:return Vi(n),l=dt(We),t===null?(c=uu(),c===null&&(c=Le,f=ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:l,cache:c},hu(n),Wn(n,We,c)):((t.lanes&a)!==0&&(du(t,n),Qa(n,null,null,a),Fa()),c=t.memoizedState,f=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Wn(n,We,l)):(l=f.cache,Wn(n,We,l),l!==c.cache&&lu(n,[We],a,!0))),ct(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Mn(t){t.flags|=4}function tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c_(n)){if(n=Yt.current,n!==null&&((_e&4194048)===_e?dn!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==dn))throw Va=fu,Pm;t.flags|=8192}}function Vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Md():536870912,t.lanes|=n,qs|=n)}function er(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function Zb(t,n,a){var l=n.pendingProps;switch(iu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return ze(n),null;case 3:return a=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),In(We),Qn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ja(n)?Mn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mm())),ze(n),null;case 26:return a=n.memoizedState,t===null?(Mn(n),a!==null?(ze(n),tg(n,a)):(ze(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Mn(n),ze(n),tg(n,a)):(ze(n),n.flags&=-16777217):(t.memoizedProps!==l&&Mn(n),ze(n),n.flags&=-16777217),null;case 27:tl(n),a=se.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ze(n),null}t=$.current,ja(n)?Dm(n):(t=t_(c,l,a),n.stateNode=t,Mn(n))}return ze(n),null;case 5:if(tl(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ze(n),null}if(t=$.current,ja(n))Dm(n);else{switch(c=io(se.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(a,{is:l.is}):c.createElement(a)}}t[ht]=n,t[vt]=l;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(ft(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Mn(n)}}return ze(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Mn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,ja(n)){if(t=n.stateNode,a=n.memoizedProps,l=null,c=pt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[ht]=n,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Kg(t.nodeValue,a)),t||Gi(n)}else t=io(t).createTextNode(l),t[ht]=n,n.stateNode=t}return ze(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ja(n),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ht]=n}else Pa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ze(n),c=!1}else c=Mm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Dn(n),n):(Dn(n),null)}if(Dn(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),ze(n),null;case 4:return Qn(),t===null&&gf(n.stateNode.containerInfo),ze(n),null;case 10:return In(n.type),ze(n),null;case 19:if(z(Ze),c=n.memoizedState,c===null)return ze(n),null;if(l=(n.flags&128)!==0,f=c.rendering,f===null)if(l)er(c,!1);else{if(Ve!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=zl(t),f!==null){for(n.flags|=128,er(c,!1),t=f.updateQueue,n.updateQueue=t,Vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Im(a,t),a=a.sibling;return H(Ze,Ze.current&1|2),n.child}t=t.sibling}c.tail!==null&&fn()>Ql&&(n.flags|=128,l=!0,er(c,!1),n.lanes=4194304)}else{if(!l)if(t=zl(f),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Vl(n,t),er(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ee)return ze(n),null}else 2*fn()-c.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,l=!0,er(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=fn(),n.sibling=null,t=Ze.current,H(Ze,l?t&1|2:t&1),n):(ze(n),null);case 22:case 23:return Dn(n),_u(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),t!==null&&z(Yi),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),In(We),ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Jb(t,n){switch(iu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return In(We),Qn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return tl(n),null;case 13:if(Dn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Pa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return z(Ze),null;case 4:return Qn(),null;case 10:return In(n.type),null;case 22:case 23:return Dn(n),_u(),t!==null&&z(Yi),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return In(We),null;case 25:return null;default:return null}}function ng(t,n){switch(iu(n),n.tag){case 3:In(We),Qn();break;case 26:case 27:case 5:tl(n);break;case 4:Qn();break;case 13:Dn(n);break;case 19:z(Ze);break;case 10:In(n.type);break;case 22:case 23:Dn(n),_u(),t!==null&&z(Yi);break;case 24:In(We)}}function tr(t,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&t)===t){l=void 0;var f=a.create,g=a.inst;l=f(),g.destroy=l}a=a.next}while(a!==c)}}catch(_){Me(n,n.return,_)}}function si(t,n,a){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&t)===t){var g=l.inst,_=g.destroy;if(_!==void 0){g.destroy=void 0,c=n;var b=a,R=_;try{R()}catch(M){Me(c,b,M)}}}l=l.next}while(l!==f)}}catch(M){Me(n,n.return,M)}}function ig(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vm(n,a)}catch(l){Me(t,t.return,l)}}}function sg(t,n,a){a.props=Qi(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Me(t,n,l)}}function nr(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(c){Me(t,n,c)}}function mn(t,n){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){Me(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Me(t,n,c)}else a.current=null}function ag(t){var n=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){Me(t,t.return,c)}}function Yu(t,n,a){try{var l=t.stateNode;SE(l,t.type,a,n),l[vt]=n}catch(c){Me(t,t.return,c)}}function rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&hi(t.type)||t.tag===4}function Fu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&hi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=no));else if(l!==4&&(l===27&&hi(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Qu(t,n,a),t=t.sibling;t!==null;)Qu(t,n,a),t=t.sibling}function Yl(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(l===27&&hi(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ft(n,l,a),n[ht]=t,n[vt]=a}catch(f){Me(t,t.return,f)}}var kn=!1,Qe=!1,Ku=!1,og=typeof WeakSet=="function"?WeakSet:Set,nt=null;function eE(t,n){if(t=t.containerInfo,vf=co,t=vm(t),Fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,_=-1,b=-1,R=0,M=0,L=t,I=null;t:for(;;){for(var O;L!==a||c!==0&&L.nodeType!==3||(_=g+c),L!==f||l!==0&&L.nodeType!==3||(b=g+l),L.nodeType===3&&(g+=L.nodeValue.length),(O=L.firstChild)!==null;)I=L,L=O;for(;;){if(L===t)break t;if(I===a&&++R===c&&(_=g),I===f&&++M===l&&(b=g),(O=L.nextSibling)!==null)break;L=I,I=L.parentNode}L=O}a=_===-1||b===-1?null:{start:_,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:t,selectionRange:a},co=!1,nt=n;nt!==null;)if(n=nt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,nt=t;else for(;nt!==null;){switch(n=nt,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var te=Qi(a.type,c,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(te,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(W){Me(a,a.return,W)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,nt=t;break}nt=n.return}}function cg(t,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ai(t,a),l&4&&tr(5,a);break;case 1:if(ai(t,a),l&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Me(a,a.return,g)}else{var c=Qi(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Me(a,a.return,g)}}l&64&&ig(a),l&512&&nr(a,a.return);break;case 3:if(ai(t,a),l&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vm(t,n)}catch(g){Me(a,a.return,g)}}break;case 27:n===null&&l&4&&lg(a);case 26:case 5:ai(t,a),n===null&&l&4&&ag(a),l&512&&nr(a,a.return);break;case 12:ai(t,a);break;case 13:ai(t,a),l&4&&hg(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cE.bind(null,a),RE(t,a))));break;case 22:if(l=a.memoizedState!==null||kn,!l){n=n!==null&&n.memoizedState!==null||Qe,c=kn;var f=Qe;kn=l,(Qe=n)&&!f?ri(t,a,(a.subtreeFlags&8772)!==0):ai(t,a),kn=c,Qe=f}break;case 30:break;default:ai(t,a)}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Rc(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pe=null,Et=!1;function Ln(t,n,a){for(a=a.child;a!==null;)fg(t,n,a),a=a.sibling}function fg(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ta,a)}catch{}switch(a.tag){case 26:Qe||mn(a,n),Ln(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||mn(a,n);var l=Pe,c=Et;hi(a.type)&&(Pe=a.stateNode,Et=!1),Ln(t,n,a),fr(a.stateNode),Pe=l,Et=c;break;case 5:Qe||mn(a,n);case 6:if(l=Pe,c=Et,Pe=null,Ln(t,n,a),Pe=l,Et=c,Pe!==null)if(Et)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(f){Me(a,n,f)}else try{Pe.removeChild(a.stateNode)}catch(f){Me(a,n,f)}break;case 18:Pe!==null&&(Et?(t=Pe,Jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vr(t)):Jg(Pe,a.stateNode));break;case 4:l=Pe,c=Et,Pe=a.stateNode.containerInfo,Et=!0,Ln(t,n,a),Pe=l,Et=c;break;case 0:case 11:case 14:case 15:Qe||si(2,a,n),Qe||si(4,a,n),Ln(t,n,a);break;case 1:Qe||(mn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&sg(a,n,l)),Ln(t,n,a);break;case 21:Ln(t,n,a);break;case 22:Qe=(l=Qe)||a.memoizedState!==null,Ln(t,n,a),Qe=l;break;default:Ln(t,n,a)}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vr(t)}catch(a){Me(n,n.return,a)}}function tE(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new og),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new og),n;default:throw Error(r(435,t.tag))}}function Xu(t,n){var a=tE(t);n.forEach(function(l){var c=uE.bind(null,t,l);a.has(l)||(a.add(l),l.then(c,c))})}function Dt(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],f=t,g=n,_=g;e:for(;_!==null;){switch(_.tag){case 27:if(hi(_.type)){Pe=_.stateNode,Et=!1;break e}break;case 5:Pe=_.stateNode,Et=!1;break e;case 3:case 4:Pe=_.stateNode.containerInfo,Et=!0;break e}_=_.return}if(Pe===null)throw Error(r(160));fg(f,g,c),Pe=null,Et=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)dg(n,t),n=n.sibling}var en=null;function dg(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Dt(n,t),xt(t),l&4&&(si(3,t,t.return),tr(3,t),si(5,t,t.return));break;case 1:Dt(n,t),xt(t),l&512&&(Qe||a===null||mn(a,a.return)),l&64&&kn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=en;if(Dt(n,t),xt(t),l&512&&(Qe||a===null||mn(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Aa]||f[ht]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),ft(f,l,a),f[ht]=t,et(f),l=f;break e;case"link":var g=l_("link","href",c).get(l+(a.href||""));if(g){for(var _=0;_<g.length;_++)if(f=g[_],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(_,1);break t}}f=c.createElement(l),ft(f,l,a),c.head.appendChild(f);break;case"meta":if(g=l_("meta","content",c).get(l+(a.content||""))){for(_=0;_<g.length;_++)if(f=g[_],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(_,1);break t}}f=c.createElement(l),ft(f,l,a),c.head.appendChild(f);break;default:throw Error(r(468,l))}f[ht]=t,et(f),l=f}t.stateNode=l}else o_(c,t.type,t.stateNode);else t.stateNode=r_(c,l,t.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?o_(c,t.type,t.stateNode):r_(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Dt(n,t),xt(t),l&512&&(Qe||a===null||mn(a,a.return)),a!==null&&l&4&&Yu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Dt(n,t),xt(t),l&512&&(Qe||a===null||mn(a,a.return)),t.flags&32){c=t.stateNode;try{bs(c,"")}catch(O){Me(t,t.return,O)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,Yu(t,c,a!==null?a.memoizedProps:c)),l&1024&&(Ku=!0);break;case 6:if(Dt(n,t),xt(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(O){Me(t,t.return,O)}}break;case 3:if(ro=null,c=en,en=so(n.containerInfo),Dt(n,t),en=c,xt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(O){Me(t,t.return,O)}Ku&&(Ku=!1,mg(t));break;case 4:l=en,en=so(t.stateNode.containerInfo),Dt(n,t),xt(t),en=l;break;case 12:Dt(n,t),xt(t);break;case 13:Dt(n,t),xt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tf=fn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Xu(t,l)));break;case 22:c=t.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,R=kn,M=Qe;if(kn=R||c,Qe=M||b,Dt(n,t),Qe=M,kn=R,xt(t),l&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||b||kn||Qe||Ki(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){b=a=n;try{if(f=b.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{_=b.stateNode;var L=b.memoizedProps.style,I=L!=null&&L.hasOwnProperty("display")?L.display:null;_.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(O){Me(b,b.return,O)}}}else if(n.tag===6){if(a===null){b=n;try{b.stateNode.nodeValue=c?"":b.memoizedProps}catch(O){Me(b,b.return,O)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Xu(t,a))));break;case 19:Dt(n,t),xt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Xu(t,l)));break;case 30:break;case 21:break;default:Dt(n,t),xt(t)}}function xt(t){var n=t.flags;if(n&2){try{for(var a,l=t.return;l!==null;){if(rg(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Fu(t);Yl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(bs(g,""),a.flags&=-33);var _=Fu(t);Yl(t,_,g);break;case 3:case 4:var b=a.stateNode.containerInfo,R=Fu(t);Qu(t,R,b);break;default:throw Error(r(161))}}catch(M){Me(t,t.return,M)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ai(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(t,n.alternate,n),n=n.sibling}function Ki(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:si(4,n,n.return),Ki(n);break;case 1:mn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),Ki(n);break;case 27:fr(n.stateNode);case 26:case 5:mn(n,n.return),Ki(n);break;case 22:n.memoizedState===null&&Ki(n);break;case 30:Ki(n);break;default:Ki(n)}t=t.sibling}}function ri(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ri(c,f,a),tr(4,f);break;case 1:if(ri(c,f,a),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(R){Me(l,l.return,R)}if(l=f,c=l.updateQueue,c!==null){var _=l.stateNode;try{var b=c.shared.hiddenCallbacks;if(b!==null)for(c.shared.hiddenCallbacks=null,c=0;c<b.length;c++)qm(b[c],_)}catch(R){Me(l,l.return,R)}}a&&g&64&&ig(f),nr(f,f.return);break;case 27:lg(f);case 26:case 5:ri(c,f,a),a&&l===null&&g&4&&ag(f),nr(f,f.return);break;case 12:ri(c,f,a);break;case 13:ri(c,f,a),a&&g&4&&hg(c,f);break;case 22:f.memoizedState===null&&ri(c,f,a),nr(f,f.return);break;case 30:break;default:ri(c,f,a)}n=n.sibling}}function $u(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ba(a))}function Wu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ba(t))}function pn(t,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pg(t,n,a,l),n=n.sibling}function pg(t,n,a,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:pn(t,n,a,l),c&2048&&tr(9,n);break;case 1:pn(t,n,a,l);break;case 3:pn(t,n,a,l),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ba(t)));break;case 12:if(c&2048){pn(t,n,a,l),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,_=f.onPostCommit;typeof _=="function"&&_(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){Me(n,n.return,b)}}else pn(t,n,a,l);break;case 13:pn(t,n,a,l);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?pn(t,n,a,l):ir(t,n):f._visibility&2?pn(t,n,a,l):(f._visibility|=2,Hs(t,n,a,l,(n.subtreeFlags&10256)!==0)),c&2048&&$u(g,n);break;case 24:pn(t,n,a,l),c&2048&&Wu(n.alternate,n);break;default:pn(t,n,a,l)}}function Hs(t,n,a,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,g=n,_=a,b=l,R=g.flags;switch(g.tag){case 0:case 11:case 15:Hs(f,g,_,b,c),tr(8,g);break;case 23:break;case 22:var M=g.stateNode;g.memoizedState!==null?M._visibility&2?Hs(f,g,_,b,c):ir(f,g):(M._visibility|=2,Hs(f,g,_,b,c)),c&&R&2048&&$u(g.alternate,g);break;case 24:Hs(f,g,_,b,c),c&&R&2048&&Wu(g.alternate,g);break;default:Hs(f,g,_,b,c)}n=n.sibling}}function ir(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,l=n,c=l.flags;switch(l.tag){case 22:ir(a,l),c&2048&&$u(l.alternate,l);break;case 24:ir(a,l),c&2048&&Wu(l.alternate,l);break;default:ir(a,l)}n=n.sibling}}var sr=8192;function Bs(t){if(t.subtreeFlags&sr)for(t=t.child;t!==null;)gg(t),t=t.sibling}function gg(t){switch(t.tag){case 26:Bs(t),t.flags&sr&&t.memoizedState!==null&&HE(en,t.memoizedState,t.memoizedProps);break;case 5:Bs(t);break;case 3:case 4:var n=en;en=so(t.stateNode.containerInfo),Bs(t),en=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=sr,sr=16777216,Bs(t),sr=n):Bs(t));break;default:Bs(t)}}function _g(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ar(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];nt=l,vg(l,t)}_g(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:ar(t),t.flags&2048&&si(9,t,t.return);break;case 3:ar(t);break;case 12:ar(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):ar(t);break;default:ar(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];nt=l,vg(l,t)}_g(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:si(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function vg(t,n){for(;nt!==null;){var a=nt;switch(a.tag){case 0:case 11:case 15:si(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ba(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,nt=l;else e:for(a=t;nt!==null;){l=nt;var c=l.sibling,f=l.return;if(ug(l),l===a){nt=null;break e}if(c!==null){c.return=f,nt=c;break e}nt=f}}}var nE={getCacheForType:function(t){var n=dt(We),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},iE=typeof WeakMap=="function"?WeakMap:Map,we=0,Le=null,de=null,_e=0,Ce=0,Mt=null,li=!1,Gs=!1,Zu=!1,Un=0,Ve=0,oi=0,Xi=0,Ju=0,Ft=0,qs=0,rr=null,Tt=null,ef=!1,tf=0,Ql=1/0,Kl=null,ci=null,ut=0,ui=null,Vs=null,Ys=0,nf=0,sf=null,Sg=null,lr=0,af=null;function kt(){if((we&2)!==0&&_e!==0)return _e&-_e;if(D.T!==null){var t=xs;return t!==0?t:hf()}return Ud()}function bg(){Ft===0&&(Ft=(_e&536870912)===0||Ee?xd():536870912);var t=Yt.current;return t!==null&&(t.flags|=32),Ft}function Lt(t,n,a){(t===Le&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(Fs(t,0),fi(t,_e,Ft,!1)),Ca(t,a),((we&2)===0||t!==Le)&&(t===Le&&((we&2)===0&&(Xi|=a),Ve===4&&fi(t,_e,Ft,!1)),gn(t))}function Eg(t,n,a){if((we&6)!==0)throw Error(r(327));var l=!a&&(n&124)===0&&(n&t.expiredLanes)===0||wa(t,n),c=l?rE(t,n):of(t,n,!0),f=l;do{if(c===0){Gs&&!l&&fi(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!sE(a)){c=of(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var _=t;c=rr;var b=_.current.memoizedState.isDehydrated;if(b&&(Fs(_,g).flags|=256),g=of(_,g,!1),g!==2){if(Zu&&!b){_.errorRecoveryDisabledLanes|=f,Xi|=f,c=4;break e}f=Tt,Tt=c,f!==null&&(Tt===null?Tt=f:Tt.push.apply(Tt,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Fs(t,0),fi(t,n,0,!0);break}e:{switch(l=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:fi(l,n,Ft,!li);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=tf+300-fn(),10<c)){if(fi(l,n,Ft,!li),al(l,0,!0)!==0)break e;l.timeoutHandle=Wg(Tg.bind(null,l,a,Tt,Kl,ef,n,Ft,Xi,qs,li,f,2,-0,0),c);break e}Tg(l,a,Tt,Kl,ef,n,Ft,Xi,qs,li,f,0,-0,0)}}break}while(!0);gn(t)}function Tg(t,n,a,l,c,f,g,_,b,R,M,L,I,O){if(t.timeoutHandle=-1,L=n.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(mr={stylesheets:null,count:0,unsuspend:zE},gg(n),L=BE(),L!==null)){t.cancelPendingCommit=L(Og.bind(null,t,n,f,a,l,c,g,_,b,M,1,I,O)),fi(t,f,g,!R);return}Og(t,n,f,a,l,c,g,_,b)}function sE(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],f=c.getSnapshot;c=c.value;try{if(!It(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fi(t,n,a,l){n&=~Ju,n&=~Xi,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var c=n;0<c;){var f=31-Nt(c),g=1<<f;l[f]=-1,c&=~g}a!==0&&kd(t,a,n)}function Xl(){return(we&6)===0?(or(0),!1):!0}function rf(){if(de!==null){if(Ce===0)var t=de.return;else t=de,Nn=qi=null,Eu(t),Ps=null,Za=0,t=de;for(;t!==null;)ng(t.alternate,t),t=t.return;de=null}}function Fs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,EE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),rf(),Le=t,de=a=Cn(t.current,null),_e=n,Ce=0,Mt=null,li=!1,Gs=wa(t,n),Zu=!1,qs=Ft=Ju=Xi=oi=Ve=0,Tt=rr=null,ef=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var c=31-Nt(l),f=1<<c;n|=t[c],l&=~f}return Un=n,_l(),a}function wg(t,n){oe=null,D.H=Ul,n===qa||n===Al?(n=Bm(),Ce=3):n===Pm?(n=Bm(),Ce=4):Ce=n===Gp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Mt=n,de===null&&(Ve=1,Bl(t,Bt(n,t.current)))}function Cg(){var t=D.H;return D.H=Ul,t===null?Ul:t}function Ag(){var t=D.A;return D.A=nE,t}function lf(){Ve=4,li||(_e&4194048)!==_e&&Yt.current!==null||(Gs=!0),(oi&134217727)===0&&(Xi&134217727)===0||Le===null||fi(Le,_e,Ft,!1)}function of(t,n,a){var l=we;we|=2;var c=Cg(),f=Ag();(Le!==t||_e!==n)&&(Kl=null,Fs(t,n)),n=!1;var g=Ve;e:do try{if(Ce!==0&&de!==null){var _=de,b=Mt;switch(Ce){case 8:rf(),g=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(n=!0);var R=Ce;if(Ce=0,Mt=null,Qs(t,_,b,R),a&&Gs){g=0;break e}break;default:R=Ce,Ce=0,Mt=null,Qs(t,_,b,R)}}aE(),g=Ve;break}catch(M){wg(t,M)}while(!0);return n&&t.shellSuspendCounter++,Nn=qi=null,we=l,D.H=c,D.A=f,de===null&&(Le=null,_e=0,_l()),g}function aE(){for(;de!==null;)Rg(de)}function rE(t,n){var a=we;we|=2;var l=Cg(),c=Ag();Le!==t||_e!==n?(Kl=null,Ql=fn()+500,Fs(t,n)):Gs=wa(t,n);e:do try{if(Ce!==0&&de!==null){n=de;var f=Mt;t:switch(Ce){case 1:Ce=0,Mt=null,Qs(t,n,f,1);break;case 2:case 9:if(zm(f)){Ce=0,Mt=null,Ng(n);break}n=function(){Ce!==2&&Ce!==9||Le!==t||(Ce=7),gn(t)},f.then(n,n);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:zm(f)?(Ce=0,Mt=null,Ng(n)):(Ce=0,Mt=null,Qs(t,n,f,7));break;case 5:var g=null;switch(de.tag){case 26:g=de.memoizedState;case 5:case 27:var _=de;if(!g||c_(g)){Ce=0,Mt=null;var b=_.sibling;if(b!==null)de=b;else{var R=_.return;R!==null?(de=R,$l(R)):de=null}break t}}Ce=0,Mt=null,Qs(t,n,f,5);break;case 6:Ce=0,Mt=null,Qs(t,n,f,6);break;case 8:rf(),Ve=6;break e;default:throw Error(r(462))}}lE();break}catch(M){wg(t,M)}while(!0);return Nn=qi=null,D.H=l,D.A=c,we=a,de!==null?0:(Le=null,_e=0,_l(),Ve)}function lE(){for(;de!==null&&!IS();)Rg(de)}function Rg(t){var n=eg(t.alternate,t,Un);t.memoizedProps=t.pendingProps,n===null?$l(t):de=n}function Ng(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Kp(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Kp(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Eu(n);default:ng(a,n),n=de=Im(n,Un),n=eg(a,n,Un)}t.memoizedProps=t.pendingProps,n===null?$l(t):de=n}function Qs(t,n,a,l){Nn=qi=null,Eu(n),Ps=null,Za=0;var c=n.return;try{if($b(t,c,n,a,_e)){Ve=1,Bl(t,Bt(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ve=1,Bl(t,Bt(a,t.current)),de=null;return}n.flags&32768?(Ee||l===1?t=!0:Gs||(_e&536870912)!==0?t=!1:(li=t=!0,(l===2||l===9||l===3||l===6)&&(l=Yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ig(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){Ig(n,li);return}t=n.return;var a=Zb(n.alternate,n,Un);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ve===0&&(Ve=5)}function Ig(t,n){do{var a=Jb(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ve=6,de=null}function Og(t,n,a,l,c,f,g,_,b){t.cancelPendingCommit=null;do Wl();while(ut!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Wc,zS(t,a,f,g,_,b),t===Le&&(de=Le=null,_e=0),Vs=n,ui=t,Ys=a,nf=f,sf=c,Sg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fE(nl,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,c=P.p,P.p=2,g=we,we|=4;try{eE(t,n,a)}finally{we=g,P.p=c,D.T=l}}ut=1,Dg(),xg(),Mg()}}function Dg(){if(ut===1){ut=0;var t=ui,n=Vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=P.p;P.p=2;var c=we;we|=4;try{dg(n,t);var f=Sf,g=vm(t.containerInfo),_=f.focusedElem,b=f.selectionRange;if(g!==_&&_&&_.ownerDocument&&ym(_.ownerDocument.documentElement,_)){if(b!==null&&Fc(_)){var R=b.start,M=b.end;if(M===void 0&&(M=R),"selectionStart"in _)_.selectionStart=R,_.selectionEnd=Math.min(M,_.value.length);else{var L=_.ownerDocument||document,I=L&&L.defaultView||window;if(I.getSelection){var O=I.getSelection(),te=_.textContent.length,W=Math.min(b.start,te),Oe=b.end===void 0?W:Math.min(b.end,te);!O.extend&&W>Oe&&(g=Oe,Oe=W,W=g);var C=_m(_,W),T=_m(_,Oe);if(C&&T&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==T.node||O.focusOffset!==T.offset)){var A=L.createRange();A.setStart(C.node,C.offset),O.removeAllRanges(),W>Oe?(O.addRange(A),O.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),O.addRange(A))}}}}for(L=[],O=_;O=O.parentNode;)O.nodeType===1&&L.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<L.length;_++){var k=L[_];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}co=!!vf,Sf=vf=null}finally{we=c,P.p=l,D.T=a}}t.current=n,ut=2}}function xg(){if(ut===2){ut=0;var t=ui,n=Vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=P.p;P.p=2;var c=we;we|=4;try{cg(t,n.alternate,n)}finally{we=c,P.p=l,D.T=a}}ut=3}}function Mg(){if(ut===4||ut===3){ut=0,OS();var t=ui,n=Vs,a=Ys,l=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ut=5:(ut=0,Vs=ui=null,kg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ci=null),Cc(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ta,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,c=P.p,P.p=2,D.T=null;try{for(var f=t.onRecoverableError,g=0;g<l.length;g++){var _=l[g];f(_.value,{componentStack:_.stack})}}finally{D.T=n,P.p=c}}(Ys&3)!==0&&Wl(),gn(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===af?lr++:(lr=0,af=t):lr=0,or(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ba(n)))}function Wl(t){return Dg(),xg(),Mg(),Lg()}function Lg(){if(ut!==5)return!1;var t=ui,n=nf;nf=0;var a=Cc(Ys),l=D.T,c=P.p;try{P.p=32>a?32:a,D.T=null,a=sf,sf=null;var f=ui,g=Ys;if(ut=0,Vs=ui=null,Ys=0,(we&6)!==0)throw Error(r(331));var _=we;if(we|=4,yg(f.current),pg(f,f.current,g,a),we=_,or(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ta,f)}catch{}return!0}finally{P.p=c,D.T=l,kg(t,n)}}function Ug(t,n,a){n=Bt(a,n),n=Uu(t.stateNode,n,2),t=ei(t,n,2),t!==null&&(Ca(t,2),gn(t))}function Me(t,n,a){if(t.tag===3)Ug(t,t,a);else for(;n!==null;){if(n.tag===3){Ug(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ci===null||!ci.has(l))){t=Bt(a,t),a=Hp(2),l=ei(n,a,2),l!==null&&(Bp(a,l,n,t),Ca(l,2),gn(l));break}}n=n.return}}function cf(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new iE;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(a)||(Zu=!0,c.add(a),t=oE.bind(null,t,n,a),n.then(t,t))}function oE(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Le===t&&(_e&a)===a&&(Ve===4||Ve===3&&(_e&62914560)===_e&&300>fn()-tf?(we&2)===0&&Fs(t,0):Ju|=a,qs===_e&&(qs=0)),gn(t)}function jg(t,n){n===0&&(n=Md()),t=Ns(t,n),t!==null&&(Ca(t,n),gn(t))}function cE(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jg(t,a)}function uE(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),jg(t,a)}function fE(t,n){return bc(t,n)}var Zl=null,Ks=null,uf=!1,Jl=!1,ff=!1,$i=0;function gn(t){t!==Ks&&t.next===null&&(Ks===null?Zl=Ks=t:Ks=Ks.next=t),Jl=!0,uf||(uf=!0,dE())}function or(t,n){if(!ff&&Jl){ff=!0;do for(var a=!1,l=Zl;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var g=l.suspendedLanes,_=l.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=c&~(g&~_),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(l,f))}else f=_e,f=al(l,l===Le?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||wa(l,f)||(a=!0,Bg(l,f));l=l.next}while(a);ff=!1}}function hE(){Pg()}function Pg(){Jl=uf=!1;var t=0;$i!==0&&(bE()&&(t=$i),$i=0);for(var n=fn(),a=null,l=Zl;l!==null;){var c=l.next,f=zg(l,n);f===0?(l.next=null,a===null?Zl=c:a.next=c,c===null&&(Ks=a)):(a=l,(t!==0||(f&3)!==0)&&(Jl=!0)),l=c}or(t)}function zg(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Nt(f),_=1<<g,b=c[g];b===-1?((_&a)===0||(_&l)!==0)&&(c[g]=PS(_,n)):b<=n&&(t.expiredLanes|=_),f&=~_}if(n=Le,a=_e,a=al(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ec(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(l!==null&&Ec(l),Cc(a)){case 2:case 8:a=Od;break;case 32:a=nl;break;case 268435456:a=Dd;break;default:a=nl}return l=Hg.bind(null,t),a=bc(a,l),t.callbackPriority=n,t.callbackNode=a,n}return l!==null&&l!==null&&Ec(l),t.callbackPriority=2,t.callbackNode=null,2}function Hg(t,n){if(ut!==0&&ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var l=_e;return l=al(t,t===Le?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Eg(t,l,n),zg(t,fn()),t.callbackNode!=null&&t.callbackNode===a?Hg.bind(null,t):null)}function Bg(t,n){if(Wl())return null;Eg(t,n,!0)}function dE(){TE(function(){(we&6)!==0?bc(Id,hE):Pg()})}function hf(){return $i===0&&($i=xd()),$i}function Gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ul(""+t)}function qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function mE(t,n,a,l,c){if(n==="submit"&&a&&a.stateNode===c){var f=Gg((c[vt]||null).action),g=l.submitter;g&&(n=(n=g[vt]||null)?Gg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var _=new ml("action","action",null,l,c);t.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($i!==0){var b=g?qg(c,g):new FormData(c);Du(a,{pending:!0,data:b,method:c.method,action:f},null,b)}}else typeof f=="function"&&(_.preventDefault(),b=g?qg(c,g):new FormData(c),Du(a,{pending:!0,data:b,method:c.method,action:f},f,b))},currentTarget:c}]})}}for(var df=0;df<$c.length;df++){var mf=$c[df],pE=mf.toLowerCase(),gE=mf[0].toUpperCase()+mf.slice(1);Jt(pE,"on"+gE)}Jt(Em,"onAnimationEnd"),Jt(Tm,"onAnimationIteration"),Jt(wm,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(Mb,"onTransitionRun"),Jt(kb,"onTransitionStart"),Jt(Lb,"onTransitionCancel"),Jt(Cm,"onTransitionEnd"),ys("onMouseEnter",["mouseout","mouseover"]),ys("onMouseLeave",["mouseout","mouseover"]),ys("onPointerEnter",["pointerout","pointerover"]),ys("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_E=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function Vg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var g=l.length-1;0<=g;g--){var _=l[g],b=_.instance,R=_.currentTarget;if(_=_.listener,b!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=R;try{f(c)}catch(M){Hl(M)}c.currentTarget=null,f=b}else for(g=0;g<l.length;g++){if(_=l[g],b=_.instance,R=_.currentTarget,_=_.listener,b!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=R;try{f(c)}catch(M){Hl(M)}c.currentTarget=null,f=b}}}}function me(t,n){var a=n[Ac];a===void 0&&(a=n[Ac]=new Set);var l=t+"__bubble";a.has(l)||(Yg(n,t,2,!1),a.add(l))}function pf(t,n,a){var l=0;n&&(l|=4),Yg(a,t,l,n)}var eo="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[eo]){t[eo]=!0,Pd.forEach(function(a){a!=="selectionchange"&&(_E.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[eo]||(n[eo]=!0,pf("selectionchange",!1,n))}}function Yg(t,n,a,l){switch(p_(n)){case 2:var c=VE;break;case 8:c=YE;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function _f(t,n,a,l,c){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var _=l.stateNode.containerInfo;if(_===c)break;if(g===4)for(g=l.return;g!==null;){var b=g.tag;if((b===3||b===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;_!==null;){if(g=ps(_),g===null)return;if(b=g.tag,b===5||b===6||b===26||b===27){l=f=g;continue e}_=_.parentNode}}l=l.return}Zd(function(){var R=f,M=Lc(a),L=[];e:{var I=Am.get(t);if(I!==void 0){var O=ml,te=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":O=fb;break;case"focusin":te="focus",O=Bc;break;case"focusout":te="blur",O=Bc;break;case"beforeblur":case"afterblur":O=Bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=mb;break;case Em:case Tm:case wm:O=nb;break;case Cm:O=gb;break;case"scroll":case"scrollend":O=WS;break;case"wheel":O=yb;break;case"copy":case"cut":case"paste":O=sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=im;break;case"toggle":case"beforetoggle":O=Sb}var W=(n&4)!==0,Oe=!W&&(t==="scroll"||t==="scrollend"),C=W?I!==null?I+"Capture":null:I;W=[];for(var T=R,A;T!==null;){var k=T;if(A=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||A===null||C===null||(k=Na(T,C),k!=null&&W.push(ur(T,k,A))),Oe)break;T=T.return}0<W.length&&(I=new O(I,te,null,a,M),L.push({event:I,listeners:W}))}}if((n&7)===0){e:{if(I=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",I&&a!==kc&&(te=a.relatedTarget||a.fromElement)&&(ps(te)||te[ms]))break e;if((O||I)&&(I=M.window===M?M:(I=M.ownerDocument)?I.defaultView||I.parentWindow:window,O?(te=a.relatedTarget||a.toElement,O=R,te=te?ps(te):null,te!==null&&(Oe=u(te),W=te.tag,te!==Oe||W!==5&&W!==27&&W!==6)&&(te=null)):(O=null,te=R),O!==te)){if(W=tm,k="onMouseLeave",C="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(W=im,k="onPointerLeave",C="onPointerEnter",T="pointer"),Oe=O==null?I:Ra(O),A=te==null?I:Ra(te),I=new W(k,T+"leave",O,a,M),I.target=Oe,I.relatedTarget=A,k=null,ps(M)===R&&(W=new W(C,T+"enter",te,a,M),W.target=A,W.relatedTarget=Oe,k=W),Oe=k,O&&te)t:{for(W=O,C=te,T=0,A=W;A;A=Xs(A))T++;for(A=0,k=C;k;k=Xs(k))A++;for(;0<T-A;)W=Xs(W),T--;for(;0<A-T;)C=Xs(C),A--;for(;T--;){if(W===C||C!==null&&W===C.alternate)break t;W=Xs(W),C=Xs(C)}W=null}else W=null;O!==null&&Fg(L,I,O,W,!1),te!==null&&Oe!==null&&Fg(L,Oe,te,W,!0)}}e:{if(I=R?Ra(R):window,O=I.nodeName&&I.nodeName.toLowerCase(),O==="select"||O==="input"&&I.type==="file")var q=fm;else if(cm(I))if(hm)q=Ob;else{q=Nb;var ue=Rb}else O=I.nodeName,!O||O.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?R&&Mc(R.elementType)&&(q=fm):q=Ib;if(q&&(q=q(t,R))){um(L,q,a,M);break e}ue&&ue(t,I,R),t==="focusout"&&R&&I.type==="number"&&R.memoizedProps.value!=null&&xc(I,"number",I.value)}switch(ue=R?Ra(R):window,t){case"focusin":(cm(ue)||ue.contentEditable==="true")&&(Cs=ue,Qc=R,Ua=null);break;case"focusout":Ua=Qc=Cs=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Sm(L,a,M);break;case"selectionchange":if(xb)break;case"keydown":case"keyup":Sm(L,a,M)}var Q;if(qc)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else ws?lm(t,a)&&(Z="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(sm&&a.locale!=="ko"&&(ws||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&ws&&(Q=Jd()):($n=M,Pc="value"in $n?$n.value:$n.textContent,ws=!0)),ue=to(R,Z),0<ue.length&&(Z=new nm(Z,t,null,a,M),L.push({event:Z,listeners:ue}),Q?Z.data=Q:(Q=om(a),Q!==null&&(Z.data=Q)))),(Q=Eb?Tb(t,a):wb(t,a))&&(Z=to(R,"onBeforeInput"),0<Z.length&&(ue=new nm("onBeforeInput","beforeinput",null,a,M),L.push({event:ue,listeners:Z}),ue.data=Q)),mE(L,t,R,a,M)}Vg(L,n)})}function ur(t,n,a){return{instance:t,listener:n,currentTarget:a}}function to(t,n){for(var a=n+"Capture",l=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Na(t,a),c!=null&&l.unshift(ur(t,c,f)),c=Na(t,n),c!=null&&l.push(ur(t,c,f))),t.tag===3)return l;t=t.return}return[]}function Xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fg(t,n,a,l,c){for(var f=n._reactName,g=[];a!==null&&a!==l;){var _=a,b=_.alternate,R=_.stateNode;if(_=_.tag,b!==null&&b===l)break;_!==5&&_!==26&&_!==27||R===null||(b=R,c?(R=Na(a,f),R!=null&&g.unshift(ur(a,R,b))):c||(R=Na(a,f),R!=null&&g.push(ur(a,R,b)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var yE=/\r\n?/g,vE=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(yE,`
`).replace(vE,"")}function Kg(t,n){return n=Qg(n),Qg(t)===n}function no(){}function Ie(t,n,a,l,c,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||bs(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&bs(t,""+l);break;case"className":ll(t,"class",l);break;case"tabIndex":ll(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ll(t,a,l);break;case"style":$d(t,l,f);break;case"data":if(n!=="object"){ll(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ul(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ul(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=no);break;case"onScroll":l!=null&&me("scroll",t);break;case"onScrollEnd":l!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ul(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":me("beforetoggle",t),me("toggle",t),rl(t,"popover",l);break;case"xlinkActuate":Tn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=XS.get(a)||a,rl(t,a,l))}}function yf(t,n,a,l,c,f){switch(a){case"style":$d(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?bs(t,l):(typeof l=="number"||typeof l=="bigint")&&bs(t,""+l);break;case"onScroll":l!=null&&me("scroll",t);break;case"onScrollEnd":l!=null&&me("scrollend",t);break;case"onClick":l!=null&&(t.onclick=no);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,l,c);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):rl(t,a,l)}}}function ft(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var l=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,g,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),l&&Ie(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var _=f=g=c=null,b=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":c=M;break;case"type":g=M;break;case"checked":b=M;break;case"defaultChecked":R=M;break;case"value":f=M;break;case"defaultValue":_=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,n));break;default:Ie(t,n,l,M,a,null)}}Fd(t,f,_,b,R,g,c,!1),ol(t);return;case"select":me("invalid",t),l=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(_=a[c],_!=null))switch(c){case"value":f=_;break;case"defaultValue":g=_;break;case"multiple":l=_;default:Ie(t,n,c,_,a,null)}n=f,a=g,t.multiple=!!l,n!=null?Ss(t,!!l,n,!1):a!=null&&Ss(t,!!l,a,!0);return;case"textarea":me("invalid",t),f=c=l=null;for(g in a)if(a.hasOwnProperty(g)&&(_=a[g],_!=null))switch(g){case"value":l=_;break;case"defaultValue":c=_;break;case"children":f=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:Ie(t,n,g,_,a,null)}Kd(t,l,c,f),ol(t);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ie(t,n,b,l,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(l=0;l<cr.length;l++)me(cr[l],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,R,l,a,null)}return;default:if(Mc(n)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&yf(t,n,M,l,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!=null&&Ie(t,n,_,l,a,null))}function SE(t,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,_=null,b=null,R=null,M=null;for(O in a){var L=a[O];if(a.hasOwnProperty(O)&&L!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=L;default:l.hasOwnProperty(O)||Ie(t,n,O,null,l,L)}}for(var I in l){var O=l[I];if(L=a[I],l.hasOwnProperty(I)&&(O!=null||L!=null))switch(I){case"type":f=O;break;case"name":c=O;break;case"checked":R=O;break;case"defaultChecked":M=O;break;case"value":g=O;break;case"defaultValue":_=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:O!==L&&Ie(t,n,I,O,l,L)}}Dc(t,g,_,b,R,M,f,c);return;case"select":O=g=_=I=null;for(f in a)if(b=a[f],a.hasOwnProperty(f)&&b!=null)switch(f){case"value":break;case"multiple":O=b;default:l.hasOwnProperty(f)||Ie(t,n,f,null,l,b)}for(c in l)if(f=l[c],b=a[c],l.hasOwnProperty(c)&&(f!=null||b!=null))switch(c){case"value":I=f;break;case"defaultValue":_=f;break;case"multiple":g=f;default:f!==b&&Ie(t,n,c,f,l,b)}n=_,a=g,l=O,I!=null?Ss(t,!!a,I,!1):!!l!=!!a&&(n!=null?Ss(t,!!a,n,!0):Ss(t,!!a,a?[]:"",!1));return;case"textarea":O=I=null;for(_ in a)if(c=a[_],a.hasOwnProperty(_)&&c!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ie(t,n,_,null,l,c)}for(g in l)if(c=l[g],f=a[g],l.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":I=c;break;case"defaultValue":O=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,g,c,l,f)}Qd(t,I,O);return;case"option":for(var te in a)if(I=a[te],a.hasOwnProperty(te)&&I!=null&&!l.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:Ie(t,n,te,null,l,I)}for(b in l)if(I=l[b],O=a[b],l.hasOwnProperty(b)&&I!==O&&(I!=null||O!=null))switch(b){case"selected":t.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Ie(t,n,b,I,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)I=a[W],a.hasOwnProperty(W)&&I!=null&&!l.hasOwnProperty(W)&&Ie(t,n,W,null,l,I);for(R in l)if(I=l[R],O=a[R],l.hasOwnProperty(R)&&I!==O&&(I!=null||O!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,n));break;default:Ie(t,n,R,I,l,O)}return;default:if(Mc(n)){for(var Oe in a)I=a[Oe],a.hasOwnProperty(Oe)&&I!==void 0&&!l.hasOwnProperty(Oe)&&yf(t,n,Oe,void 0,l,I);for(M in l)I=l[M],O=a[M],!l.hasOwnProperty(M)||I===O||I===void 0&&O===void 0||yf(t,n,M,I,l,O);return}}for(var C in a)I=a[C],a.hasOwnProperty(C)&&I!=null&&!l.hasOwnProperty(C)&&Ie(t,n,C,null,l,I);for(L in l)I=l[L],O=a[L],!l.hasOwnProperty(L)||I===O||I==null&&O==null||Ie(t,n,L,I,l,O)}var vf=null,Sf=null;function io(t){return t.nodeType===9?t:t.ownerDocument}function Xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $g(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function bE(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,TE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(wE)}:Wg;function wE(t){setTimeout(function(){throw t})}function hi(t){return t==="head"}function Jg(t,n){var a=n,l=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<l&&8>l){a=l;var g=t.ownerDocument;if(a&1&&fr(g.documentElement),a&2&&fr(g.body),a&4)for(a=g.head,fr(a),g=a.firstChild;g;){var _=g.nextSibling,b=g.nodeName;g[Aa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=_}}if(c===0){t.removeChild(f),vr(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:l=a.charCodeAt(0)-48;else l=0;a=f}while(a);vr(n)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Rc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function CE(t,n,a,l){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=tn(t.nextSibling),t===null)break}return null}function AE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=tn(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function RE(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function tn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Cf=null;function e_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function t_(t,n,a){switch(n=io(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function fr(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Rc(t)}var Qt=new Map,n_=new Set;function so(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var jn=P.d;P.d={f:NE,r:IE,D:OE,C:DE,L:xE,m:ME,X:LE,S:kE,M:UE};function NE(){var t=jn.f(),n=Xl();return t||n}function IE(t){var n=gs(t);n!==null&&n.tag===5&&n.type==="form"?Ep(n):jn.r(t)}var $s=typeof document>"u"?null:document;function i_(t,n,a){var l=$s;if(l&&typeof n=="string"&&n){var c=Ht(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),n_.has(c)||(n_.add(c),t={rel:t,crossOrigin:a,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),ft(n,"link",t),et(n),l.head.appendChild(n)))}}function OE(t){jn.D(t),i_("dns-prefetch",t,null)}function DE(t,n){jn.C(t,n),i_("preconnect",t,n)}function xE(t,n,a){jn.L(t,n,a);var l=$s;if(l&&t&&n){var c='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ht(a.imageSizes)+'"]')):c+='[href="'+Ht(t)+'"]';var f=c;switch(n){case"style":f=Ws(t);break;case"script":f=Zs(t)}Qt.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Qt.set(f,t),l.querySelector(c)!==null||n==="style"&&l.querySelector(hr(f))||n==="script"&&l.querySelector(dr(f))||(n=l.createElement("link"),ft(n,"link",t),et(n),l.head.appendChild(n)))}}function ME(t,n){jn.m(t,n);var a=$s;if(a&&t){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(t)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zs(t)}if(!Qt.has(f)&&(t=y({rel:"modulepreload",href:t},n),Qt.set(f,t),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dr(f)))return}l=a.createElement("link"),ft(l,"link",t),et(l),a.head.appendChild(l)}}}function kE(t,n,a){jn.S(t,n,a);var l=$s;if(l&&t){var c=_s(l).hoistableStyles,f=Ws(t);n=n||"default";var g=c.get(f);if(!g){var _={loading:0,preload:null};if(g=l.querySelector(hr(f)))_.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Qt.get(f))&&Af(t,a);var b=g=l.createElement("link");et(b),ft(b,"link",t),b._p=new Promise(function(R,M){b.onload=R,b.onerror=M}),b.addEventListener("load",function(){_.loading|=1}),b.addEventListener("error",function(){_.loading|=2}),_.loading|=4,ao(g,n,l)}g={type:"stylesheet",instance:g,count:1,state:_},c.set(f,g)}}}function LE(t,n){jn.X(t,n);var a=$s;if(a&&t){var l=_s(a).hoistableScripts,c=Zs(t),f=l.get(c);f||(f=a.querySelector(dr(c)),f||(t=y({src:t,async:!0},n),(n=Qt.get(c))&&Rf(t,n),f=a.createElement("script"),et(f),ft(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function UE(t,n){jn.M(t,n);var a=$s;if(a&&t){var l=_s(a).hoistableScripts,c=Zs(t),f=l.get(c);f||(f=a.querySelector(dr(c)),f||(t=y({src:t,async:!0,type:"module"},n),(n=Qt.get(c))&&Rf(t,n),f=a.createElement("script"),et(f),ft(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function s_(t,n,a,l){var c=(c=se.current)?so(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ws(a.href),a=_s(c).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ws(a.href);var f=_s(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(hr(t)))&&!f._p&&(g.instance=f,g.state.loading=5),Qt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(t,a),f||jE(c,t,a,g.state))),n&&l===null)throw Error(r(528,""));return g}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zs(a),a=_s(c).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ws(t){return'href="'+Ht(t)+'"'}function hr(t){return'link[rel="stylesheet"]['+t+"]"}function a_(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function jE(t,n,a,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ft(n,"link",a),et(n),t.head.appendChild(n))}function Zs(t){return'[src="'+Ht(t)+'"]'}function dr(t){return"script[async]"+t}function r_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(l)return n.instance=l,et(l),l;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),et(l),ft(l,"style",c),ao(l,a.precedence,t),n.instance=l;case"stylesheet":c=Ws(a.href);var f=t.querySelector(hr(c));if(f)return n.state.loading|=4,n.instance=f,et(f),f;l=a_(a),(c=Qt.get(c))&&Af(l,c),f=(t.ownerDocument||t).createElement("link"),et(f);var g=f;return g._p=new Promise(function(_,b){g.onload=_,g.onerror=b}),ft(f,"link",l),n.state.loading|=4,ao(f,a.precedence,t),n.instance=f;case"script":return f=Zs(a.src),(c=t.querySelector(dr(f)))?(n.instance=c,et(c),c):(l=a,(c=Qt.get(f))&&(l=y({},a),Rf(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),et(c),ft(c,"link",l),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,ao(l,a.precedence,t));return n.instance}function ao(t,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,g=0;g<l.length;g++){var _=l[g];if(_.dataset.precedence===n)f=_;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ro=null;function l_(t,n,a){if(ro===null){var l=new Map,c=ro=new Map;c.set(a,l)}else c=ro,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Aa]||f[ht]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var _=l.get(g);_?_.push(f):l.set(g,[f])}}return l}function o_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function PE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var mr=null;function zE(){}function HE(t,n,a){if(mr===null)throw Error(r(475));var l=mr;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ws(a.href),f=t.querySelector(hr(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=lo.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=f,et(f);return}f=t.ownerDocument||t,a=a_(a),(c=Qt.get(c))&&Af(a,c),f=f.createElement("link"),et(f);var g=f;g._p=new Promise(function(_,b){g.onload=_,g.onerror=b}),ft(f,"link",a),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=lo.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function BE(){if(mr===null)throw Error(r(475));var t=mr;return t.stylesheets&&t.count===0&&Nf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Nf(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function lo(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oo=null;function Nf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oo=new Map,n.forEach(GE,t),oo=null,lo.call(t))}function GE(t,n){if(!(n.state.loading&4)){var a=oo.get(t);if(a)var l=a.get(null);else{a=new Map,oo.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),l=g)}l&&a.set(null,l)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||l,f===l&&a.set(null,c),a.set(g,c),this.count++,l=lo.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var pr={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function qE(t,n,a,l,c,f,g,_){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.hiddenUpdates=Tc(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function u_(t,n,a,l,c,f,g,_,b,R,M,L){return t=new qE(t,n,a,g,_,b,R,L),n=1,f===!0&&(n|=24),f=Ot(3,null,null,n),t.current=f,f.stateNode=t,n=ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},hu(f),t}function f_(t){return t?(t=Is,t):Is}function h_(t,n,a,l,c,f){c=f_(c),l.context===null?l.context=c:l.pendingContext=c,l=Jn(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=ei(t,l,n),a!==null&&(Lt(a,t,n),Ya(a,t,n))}function d_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){d_(t,n),(t=t.alternate)&&d_(t,n)}function m_(t){if(t.tag===13){var n=Ns(t,67108864);n!==null&&Lt(n,t,67108864),If(t,67108864)}}var co=!0;function VE(t,n,a,l){var c=D.T;D.T=null;var f=P.p;try{P.p=2,Of(t,n,a,l)}finally{P.p=f,D.T=c}}function YE(t,n,a,l){var c=D.T;D.T=null;var f=P.p;try{P.p=8,Of(t,n,a,l)}finally{P.p=f,D.T=c}}function Of(t,n,a,l){if(co){var c=Df(l);if(c===null)_f(t,n,l,uo,a),g_(t,l);else if(QE(c,t,n,a,l))l.stopPropagation();else if(g_(t,l),n&4&&-1<FE.indexOf(t)){for(;c!==null;){var f=gs(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mi(f.pendingLanes);if(g!==0){var _=f;for(_.pendingLanes|=2,_.entangledLanes|=2;g;){var b=1<<31-Nt(g);_.entanglements[1]|=b,g&=~b}gn(f),(we&6)===0&&(Ql=fn()+500,or(0))}}break;case 13:_=Ns(f,2),_!==null&&Lt(_,f,2),Xl(),If(f,2)}if(f=Df(l),f===null&&_f(t,n,l,uo,a),f===c)break;c=f}c!==null&&l.stopPropagation()}else _f(t,n,l,null,a)}}function Df(t){return t=Lc(t),xf(t)}var uo=null;function xf(t){if(uo=null,t=ps(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uo=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(DS()){case Id:return 2;case Od:return 8;case nl:case xS:return 32;case Dd:return 268435456;default:return 32}default:return 32}}var Mf=!1,di=null,mi=null,pi=null,gr=new Map,_r=new Map,gi=[],FE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(t,n){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":gr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(n.pointerId)}}function yr(t,n,a,l,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=gs(n),n!==null&&m_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function QE(t,n,a,l,c){switch(n){case"focusin":return di=yr(di,t,n,a,l,c),!0;case"dragenter":return mi=yr(mi,t,n,a,l,c),!0;case"mouseover":return pi=yr(pi,t,n,a,l,c),!0;case"pointerover":var f=c.pointerId;return gr.set(f,yr(gr.get(f)||null,t,n,a,l,c)),!0;case"gotpointercapture":return f=c.pointerId,_r.set(f,yr(_r.get(f)||null,t,n,a,l,c)),!0}return!1}function __(t){var n=ps(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,HS(t.priority,function(){if(a.tag===13){var l=kt();l=wc(l);var c=Ns(a,l);c!==null&&Lt(c,a,l),If(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fo(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Df(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);kc=l,a.target.dispatchEvent(l),kc=null}else return n=gs(a),n!==null&&m_(n),t.blockedOn=a,!1;n.shift()}return!0}function y_(t,n,a){fo(t)&&a.delete(n)}function KE(){Mf=!1,di!==null&&fo(di)&&(di=null),mi!==null&&fo(mi)&&(mi=null),pi!==null&&fo(pi)&&(pi=null),gr.forEach(y_),_r.forEach(y_)}function ho(t,n){t.blockedOn===n&&(t.blockedOn=null,Mf||(Mf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,KE)))}var mo=null;function v_(t){mo!==t&&(mo=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mo===t&&(mo=null);for(var n=0;n<t.length;n+=3){var a=t[n],l=t[n+1],c=t[n+2];if(typeof l!="function"){if(xf(l||a)===null)continue;break}var f=gs(a);f!==null&&(t.splice(n,3),n-=3,Du(f,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function vr(t){function n(b){return ho(b,t)}di!==null&&ho(di,t),mi!==null&&ho(mi,t),pi!==null&&ho(pi,t),gr.forEach(n),_r.forEach(n);for(var a=0;a<gi.length;a++){var l=gi[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<gi.length&&(a=gi[0],a.blockedOn===null);)__(a),a.blockedOn===null&&gi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],f=a[l+1],g=c[vt]||null;if(typeof f=="function")g||v_(a);else if(g){var _=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[vt]||null)_=g.formAction;else if(xf(c)!==null)continue}else _=g.action;typeof _=="function"?a[l+1]=_:(a.splice(l,3),l-=3),v_(a)}}}function kf(t){this._internalRoot=t}po.prototype.render=kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=kt();h_(a,l,t,n,null,null)},po.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h_(t.current,2,null,t,null,null),Xl(),n[ms]=null}};function po(t){this._internalRoot=t}po.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ud();t={blockedOn:null,target:t,priority:n};for(var a=0;a<gi.length&&n!==0&&n<gi[a].priority;a++);gi.splice(a,0,t),a===0&&__(t)}};var S_=e.version;if(S_!=="19.1.0")throw Error(r(527,S_,"19.1.0"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var XE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ta=go.inject(XE),Rt=go}catch{}}return br.createRoot=function(t,n){if(!o(t))throw Error(r(299));var a=!1,l="",c=Up,f=jp,g=Pp,_=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=u_(t,1,!1,null,null,a,l,c,f,g,_,null),t[ms]=n.current,gf(t),new kf(n)},br.hydrateRoot=function(t,n,a){if(!o(t))throw Error(r(299));var l=!1,c="",f=Up,g=jp,_=Pp,b=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),n=u_(t,1,!0,n,a??null,l,c,f,g,_,b,R),n.context=f_(null),a=n.current,l=kt(),l=wc(l),c=Jn(l),c.callback=null,ei(a,c,l),a=l,n.current.lanes=a,Ca(n,a),gn(n),t[ms]=n.current,gf(t),new po(n)},br.version="19.1.0",br}var O_;function aT(){if(O_)return jf.exports;O_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),jf.exports=sT(),jf.exports}var rT=aT();const lT=({leftSection:s,middleSection:e,rightSection:i})=>E.jsxs("div",{className:"type-runner-layout",children:[E.jsx("div",{className:"left-section",children:s}),E.jsx("div",{className:"middle-section",children:e}),E.jsx("div",{className:"right-section",children:i})]}),oT=({roomId:s,players:e,currentPlayer:i,isGameStarter:r,onBecomeGameStarter:o,onStartGame:u,onStopGame:h,gameState:d,onBack:m})=>E.jsxs("div",{className:"lobby-container",children:[E.jsx("div",{className:"section-header",children:E.jsx("h2",{children:"Players"})}),E.jsx("div",{className:"room-info",children:E.jsxs("p",{children:["Room: ",E.jsx("span",{className:"room-id",children:s})]})}),i&&E.jsxs("div",{className:"game-controls",children:[d==="lobby"&&E.jsxs("div",{className:"waiting-area",children:[E.jsxs("p",{children:["Waiting for players... (",e.length,"/10)"]}),!r&&E.jsx("button",{onClick:o,children:"Become Game Starter"}),r&&e.length>=4&&E.jsx("button",{onClick:u,className:"start-game-btn",children:"Start Game"}),e.length<4&&r&&E.jsx("p",{children:"Need at least 4 players to start"})]}),(d==="playing"||d==="starting")&&r&&E.jsx("div",{className:"game-starter-controls",children:E.jsx("button",{onClick:h,className:"stop-game-btn",children:"Stop Game"})}),E.jsx("button",{onClick:m,className:"back-btn",children:"Exit Room"})]}),E.jsxs("div",{className:"players-list",children:[E.jsx("h3",{children:d==="lobby"?"Players in Room:":"Active Players:"}),E.jsx("ul",{children:e.filter(p=>d==="lobby"||!p.eliminated).map(p=>E.jsxs("li",{className:`${p.isGameStarter?"game-starter":""} ${p.status==="disconnected"?"disconnected":""}`,children:[p.name,p.isGameStarter?" (Game Starter)":"",i&&p.id===i.id?" (You)":"",p.status==="disconnected"?" (Disconnected)":""]},p.id))})]})]}),Bf=["The quick brown fox jumps over the lazy dog.","A journey of a thousand miles begins with a single step.","All that glitters is not gold.","Early to bed and early to rise makes a man healthy wealthy and wise.","Life is what happens when you are busy making other plans.","The only thing we have to fear is fear itself.","In the end we only regret the chances we didn't take.","Be yourself everyone else is already taken.","You miss one hundred percent of the shots you don't take.","The best way to predict the future is to create it.","If you want something you never had you must do something you never did.","Believe you can and you are halfway there.","Change your thoughts and you change your world.","Every accomplishment starts with the decision to try.","The secret of getting ahead is getting started.","Success is not final failure is not fatal it is the courage to continue that counts.","It always seems impossible until it is done.","Keep your face to the sunshine and you cannot see a shadow.","The future belongs to those who believe in the beauty of their dreams.","It does not matter how slowly you go as long as you do not stop."],cT=s=>(s=s.replace(/^["']|["']$/g,""),s.match(/[.!?]$/)||(s+="."),s),uT=async(s=4)=>{try{const e=[];for(let i=0;i<s;i++){const o=await(await fetch("https://api.quotable.io/random?maxLength=100")).json();e.push(cT(o.content))}return e}catch(e){return console.error("Error fetching random sentences:",e),Zy(s)}},Zy=s=>{const e=[],i=new Set;for(;e.length<s&&e.length<Bf.length;){const r=Math.floor(Math.random()*Bf.length);i.has(r)||(i.add(r),e.push(Bf[r]))}return e},D_=s=>({display:s.replace(/[aeiou]/gi,"_"),answer:s}),fT=async()=>{try{const s=await uT(3);return{stage1:{display:s[0],answer:s[0]},stage2:D_(s[1]),stage4:{display:s[2],answer:s[2]}}}catch(s){console.error("Error preparing sentences:",s);const e=Zy(3);return{stage1:{display:e[0],answer:e[0]},stage2:D_(e[1]),stage4:{display:e[2],answer:e[2]}}}},x_=[{emoji:"🍕",word:"pizza"},{emoji:"🏠",word:"house"},{emoji:"🐶",word:"dog"},{emoji:"😂",word:"laugh"},{emoji:"🌮",word:"taco"},{emoji:"🌎",word:"earth"},{emoji:"📱",word:"phone"},{emoji:"🚗",word:"car"},{emoji:"🎉",word:"party"},{emoji:"👋",word:"wave"},{emoji:"❤️",word:"heart"},{emoji:"🔥",word:"fire"},{emoji:"🌧️",word:"rain"},{emoji:"🎵",word:"music"},{emoji:"🎮",word:"game"},{emoji:"📚",word:"books"},{emoji:"🏀",word:"basketball"},{emoji:"🍔",word:"burger"},{emoji:"🍦",word:"icecream"},{emoji:"🚀",word:"rocket"},{emoji:"🌈",word:"rainbow"},{emoji:"🎸",word:"guitar"},{emoji:"🏆",word:"trophy"},{emoji:"🧠",word:"brain"},{emoji:"⚽",word:"football"},{emoji:"💻",word:"computer"},{emoji:"🎂",word:"cake"},{emoji:"🚲",word:"bicycle"},{emoji:"🌻",word:"sunflower"}],hT=(s=5)=>{const e=Math.min(s,x_.length),r=[...x_].sort(()=>.5-Math.random()).slice(0,e);return{display:r.map(u=>u.emoji).join(" "),answer:r.map(u=>u.word).join(" ")}},dT=()=>hT(5),mT=async()=>{try{const s=await fT(),e=dT();return{...s,stage3:e}}catch(s){throw console.error("Error preparing game challenges:",s),s}},pT=(s,e,i)=>e?i===4?s.split("").reverse().join("")===e.answer:s.trim().toLowerCase()===e.answer.trim().toLowerCase():!1,gT=s=>{switch(s){case 1:return"Type the sentence exactly as shown below:";case 2:return"Fill in the missing vowels to complete the sentence:";case 3:return"Type the words represented by these emojis (separated by spaces):";case 4:return"Type the sentence in reverse (right to left):";default:return"Type the challenge:"}},_T=({challenge:s,playerInput:e,inputCorrect:i,finishTime:r,onInputChange:o,onSubmit:u,currentStage:h})=>{const d=V=>{if(V.key==="Enter"&&u(),(V.ctrlKey||V.metaKey)&&(V.key==="v"||V.key==="V"))return V.preventDefault(),!1},m=V=>(V.preventDefault(),!1),p=V=>(V.preventDefault(),!1),y=()=>{switch(h){case 1:return E.jsx("p",{children:s});case 2:return E.jsx("p",{children:s});case 3:return E.jsx("p",{className:"emoji-challenge",children:s});case 4:return E.jsx("p",{children:s});default:return E.jsx("p",{children:s})}},v=()=>{if(!e.trim())return null;switch(h){case 1:return w();case 2:return N();case 3:return U();case 4:return B();default:return null}},w=()=>{const V=e.split(""),ae=s.split("");return E.jsxs("div",{className:"word-progress-helper",children:[E.jsx("p",{children:"Your progress:"}),E.jsx("div",{className:"typed-words",children:V.map((le,ee)=>{const ge=ee<ae.length&&le===ae[ee];return E.jsx("span",{className:ge?"char-correct":"char-incorrect",children:le},ee)})})]})},N=()=>{const V=e.split(""),ae=s.split("");return ae.forEach((le,ee)=>{}),E.jsxs("div",{className:"word-progress-helper",children:[E.jsx("p",{children:"Your progress:"}),E.jsx("div",{className:"typed-words",children:V.map((le,ee)=>{const ge=ee<ae.length?ae[ee]:"",X=ge==="_",ye=/[aeiou]/i.test(le),Te=!X&&ge===le;let Re="";return X?Re=ye?"char-correct":"char-incorrect":Re=Te?"":"char-incorrect",E.jsx("span",{className:Re,children:le},ee)})})]})},U=()=>{const V=e.trim().split(" "),ae=s.split(" ");return E.jsxs("div",{className:"word-progress-helper",children:[E.jsx("p",{children:"Your translation:"}),E.jsx("div",{className:"typed-words",children:V.map((le,ee)=>{const X=le.trim().length>0?"word-correct":"";return E.jsxs("span",{className:`emoji-word ${X}`,children:[ee<ae.length?`${ae[ee]} = `:"",le," "]},ee)})}),E.jsx("p",{className:"help-text",children:"Type the word each emoji represents, separated by spaces"})]})},B=()=>{const V=e.split("").reverse().join(""),ae=e.split(""),le=s.split("");return E.jsxs("div",{className:"word-progress-helper",children:[E.jsx("p",{children:"Reversed Preview:"}),E.jsx("div",{className:"reverse-helper",children:V}),E.jsx("p",{children:"Your Answer:"}),E.jsx("div",{className:"typed-words",children:ae.map((ee,ge)=>{const X=le.length-1-ge,ye=X>=0?le[X]:"",Te=X>=0&&ee===ye;return E.jsx("span",{className:Te?"char-correct":"char-incorrect",children:ee},ge)})})]})};return E.jsxs("div",{className:"type-challenge",children:[E.jsx("div",{className:"challenge-instructions",children:E.jsx("p",{children:gT(h)})}),E.jsx("div",{className:"challenge-text",children:y()}),v(),E.jsx("div",{className:"player-input-area",children:r?E.jsxs("div",{className:"completion-info",children:[E.jsxs("p",{children:["Challenge completed in ",(r/1e3).toFixed(2)," seconds!"]}),E.jsx("p",{children:"Waiting for other players..."})]}):E.jsxs(E.Fragment,{children:[E.jsx("input",{type:"text",value:e,onChange:o,onKeyDown:d,onPaste:m,onContextMenu:p,className:i===!0?"correct":i===!1?"incorrect":"",placeholder:"Type your answer here...",autoFocus:!0,disabled:r!==null}),E.jsx("button",{onClick:u,children:"Submit"}),i===!1&&E.jsx("p",{className:"error-message",children:"Incorrect! Try again."})]})})]})},yT=({player:s,isCurrentPlayer:e})=>{const i=u=>u?`${(u/1e3).toFixed(2)}s`:"",o=s.status==="completed"?{text:`Completed in ${i(s.finishTime)}`,className:"status-completed"}:s.status==="disconnected"?{text:"Disconnected",className:"status-disconnected"}:{text:"Typing...",className:"status-typing"};return E.jsxs("li",{className:`player-status ${e?"current-player":""}`,children:[E.jsxs("div",{className:"player-info",children:[E.jsxs("div",{className:"player-name",children:[s.name," ",s.isGameStarter?"(Game Starter)":""]}),s.totalTime>0&&E.jsxs("div",{className:"player-total-time",children:["Total: ",i(s.totalTime)]})]}),E.jsx("div",{className:`player-status-text ${o.className}`,children:o.text})]})},vT=()=>{};var M_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(s,e){if(!s)throw pa(e)},pa=function(s){return new Error("Firebase Database ("+Jy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(s){const e=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},ST=function(s){const e=[];let i=0,r=0;for(;i<s.length;){const o=s[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[i++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[i++],h=s[i++],d=s[i++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const u=s[i++],h=s[i++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],h=o+1<s.length,d=h?s[o+1]:0,m=o+2<s.length,p=m?s[o+2]:0,y=u>>2,v=(u&3)<<4|d>>4;let w=(d&15)<<2|p>>6,N=p&63;m||(N=64,h||(w=64)),r.push(i[y],i[v],i[w],i[N])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(ev(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):ST(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const p=o<s.length?i[s.charAt(o)]:64;++o;const v=o<s.length?i[s.charAt(o)]:64;if(++o,u==null||d==null||p==null||v==null)throw new bT;const w=u<<2|d>>4;if(r.push(w),p!==64){const N=d<<4&240|p>>2;if(r.push(N),v!==64){const U=p<<6&192|v;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class bT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tv=function(s){const e=ev(s);return Oh.encodeByteArray(e,!0)},Ao=function(s){return tv(s).replace(/\./g,"")},Ro=function(s){try{return Oh.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(s){return nv(void 0,s)}function nv(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!TT(i)||(s[i]=nv(s[i],e[i]));return s}function TT(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=()=>wT().__FIREBASE_DEFAULTS__,AT=()=>{if(typeof process>"u"||typeof M_>"u")return;const s=M_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},RT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Ro(s[1]);return e&&JSON.parse(e)},Dh=()=>{try{return vT()||CT()||AT()||RT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},iv=s=>{var e,i;return(i=(e=Dh())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[s]},NT=s=>{const e=iv(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},sv=()=>{var s;return(s=Dh())===null||s===void 0?void 0:s.config},av=s=>{var e;return(e=Dh())===null||e===void 0?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Ao(JSON.stringify(i)),Ao(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function OT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rv(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DT(){const s=yt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function xT(){return Jy.NODE_ADMIN===!0}function ov(){try{return typeof indexedDB=="object"}catch{return!1}}function cv(){return new Promise((s,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(i){e(i)}})}function MT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="FirebaseError";class bn extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=kT,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?LT(u,r):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new bn(o,d,r)}}function LT(s,e){return s.replace(UT,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const UT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(s){return JSON.parse(s)}function Je(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=function(s){let e={},i={},r={},o="";try{const u=s.split(".");e=kr(Ro(u[0])||""),i=kr(Ro(u[1])||""),o=u[2],r=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:r,signature:o}},jT=function(s){const e=uv(s),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},PT=function(s){const e=uv(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function la(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function No(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Io(s,e,i){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=e.call(i,s[o],o,s));return r}function Ni(s,e){if(s===e)return!0;const i=Object.keys(s),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const u=s[o],h=e[o];if(k_(u)&&k_(h)){if(!Ni(u,h))return!1}else if(u!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function k_(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(s){const e=[];for(const[i,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let v=0;v<16;v++)r[v]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let v=16;v<80;v++){const w=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],h=this.chain_[2],d=this.chain_[3],m=this.chain_[4],p,y;for(let v=0;v<80;v++){v<40?v<20?(p=d^u&(h^d),y=1518500249):(p=u^h^d,y=1859775393):v<60?(p=u&h|d&(u|h),y=2400959708):(p=u^h^d,y=3395469782);const w=(o<<5|o>>>27)+p+m+y+r[v]&4294967295;m=d,d=h,h=(u<<30|u>>>2)&4294967295,u=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const r=i-this.blockSize;let o=0;const u=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(u[h]=e.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}else for(;o<i;)if(u[h]=e[o],++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[r]=this.chain_[o]>>u&255,++r;return e}}function HT(s,e){const i=new BT(s,e);return i.subscribe.bind(i)}class BT{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");GT(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Gf),o.error===void 0&&(o.error=Gf),o.complete===void 0&&(o.complete=Gf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GT(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function Gf(){}function oa(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=function(s){const e=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const u=o-55296;r++,j(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(u<<10)+h}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Jo=function(s){let e=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=1e3,YT=2,FT=4*60*60*1e3,QT=.5;function L_(s,e=VT,i=YT){const r=e*Math.pow(i,s),o=Math.round(QT*r*(Math.random()-.5)*2);return Math.min(FT,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(s){return s&&s._delegate?s._delegate:s}class un{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new _n;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($T(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[u,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(u);r===d&&h.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(s){return s===Wi?void 0:s}function $T(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new KT(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(De||(De={}));const ZT={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},JT=De.INFO,ew={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},tw=(s,e,...i)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=ew[e];if(o)console[o](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=JT,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const nw=(s,e)=>e.some(i=>s instanceof i);let U_,j_;function iw(){return U_||(U_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sw(){return j_||(j_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,rh=new WeakMap,hv=new WeakMap,qf=new WeakMap,Mh=new WeakMap;function aw(s){const e=new Promise((i,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",h)},u=()=>{i(wi(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&fv.set(i,s)}).catch(()=>{}),Mh.set(e,s),e}function rw(s){if(rh.has(s))return;const e=new Promise((i,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",h),s.removeEventListener("abort",h)},u=()=>{i(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",h),s.addEventListener("abort",h)});rh.set(s,e)}let lh={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return rh.get(s);if(e==="objectStoreNames")return s.objectStoreNames||hv.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return wi(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function lw(s){lh=s(lh)}function ow(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=s.call(Vf(this),e,...i);return hv.set(r,e.sort?e.sort():[e]),wi(r)}:sw().includes(s)?function(...e){return s.apply(Vf(this),e),wi(fv.get(this))}:function(...e){return wi(s.apply(Vf(this),e))}}function cw(s){return typeof s=="function"?ow(s):(s instanceof IDBTransaction&&rw(s),nw(s,iw())?new Proxy(s,lh):s)}function wi(s){if(s instanceof IDBRequest)return aw(s);if(qf.has(s))return qf.get(s);const e=cw(s);return e!==s&&(qf.set(s,e),Mh.set(e,s)),e}const Vf=s=>Mh.get(s);function dv(s,e,{blocked:i,upgrade:r,blocking:o,terminated:u}={}){const h=indexedDB.open(s,e),d=wi(h);return r&&h.addEventListener("upgradeneeded",m=>{r(wi(h.result),m.oldVersion,m.newVersion,wi(h.transaction),m)}),i&&h.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),d.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),d}const uw=["get","getKey","getAll","getAllKeys","count"],fw=["put","add","delete","clear"],Yf=new Map;function P_(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Yf.get(e))return Yf.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=fw.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||uw.includes(i)))return;const u=async function(h,...d){const m=this.transaction(h,o?"readwrite":"readonly");let p=m.store;return r&&(p=p.index(d.shift())),(await Promise.all([p[i](...d),o&&m.done]))[0]};return Yf.set(e,u),u}lw(s=>({...s,get:(e,i,r)=>P_(e,i)||s.get(e,i,r),has:(e,i)=>!!P_(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(dw(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function dw(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",z_="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new ec("@firebase/app"),mw="@firebase/app-compat",pw="@firebase/analytics-compat",gw="@firebase/analytics",_w="@firebase/app-check-compat",yw="@firebase/app-check",vw="@firebase/auth",Sw="@firebase/auth-compat",bw="@firebase/database",Ew="@firebase/data-connect",Tw="@firebase/database-compat",ww="@firebase/functions",Cw="@firebase/functions-compat",Aw="@firebase/installations",Rw="@firebase/installations-compat",Nw="@firebase/messaging",Iw="@firebase/messaging-compat",Ow="@firebase/performance",Dw="@firebase/performance-compat",xw="@firebase/remote-config",Mw="@firebase/remote-config-compat",kw="@firebase/storage",Lw="@firebase/storage-compat",Uw="@firebase/firestore",jw="@firebase/vertexai",Pw="@firebase/firestore-compat",zw="firebase",Hw="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="[DEFAULT]",Bw={[oh]:"fire-core",[mw]:"fire-core-compat",[gw]:"fire-analytics",[pw]:"fire-analytics-compat",[yw]:"fire-app-check",[_w]:"fire-app-check-compat",[vw]:"fire-auth",[Sw]:"fire-auth-compat",[bw]:"fire-rtdb",[Ew]:"fire-data-connect",[Tw]:"fire-rtdb-compat",[ww]:"fire-fn",[Cw]:"fire-fn-compat",[Aw]:"fire-iid",[Rw]:"fire-iid-compat",[Nw]:"fire-fcm",[Iw]:"fire-fcm-compat",[Ow]:"fire-perf",[Dw]:"fire-perf-compat",[xw]:"fire-rc",[Mw]:"fire-rc-compat",[kw]:"fire-gcs",[Lw]:"fire-gcs-compat",[Uw]:"fire-fst",[Pw]:"fire-fst-compat",[jw]:"fire-vertex","fire-js":"fire-js",[zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,Gw=new Map,uh=new Map;function H_(s,e){try{s.container.addComponent(e)}catch(i){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function vn(s){const e=s.name;if(uh.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,s);for(const i of Oo.values())H_(i,s);for(const i of Gw.values())H_(i,s);return!0}function fs(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function sn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new us("app","Firebase",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=Hw;function mv(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ch,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(i||(i=sv()),!i)throw Ci.create("no-options");const u=Oo.get(o);if(u){if(Ni(i,u.options)&&Ni(r,u.config))return u;throw Ci.create("duplicate-app",{appName:o})}const h=new WT(o);for(const m of uh.values())h.addComponent(m);const d=new Vw(i,r,h);return Oo.set(o,d),d}function kh(s=ch){const e=Oo.get(s);if(!e&&s===ch&&sv())return mv();if(!e)throw Ci.create("no-app",{appName:s});return e}function Xt(s,e,i){var r;let o=(r=Bw[s])!==null&&r!==void 0?r:s;i&&(o+=`-${i}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const d=[`Unable to register library "${o}" with version "${e}":`];u&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(d.join(" "));return}vn(new un(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebase-heartbeat-database",Fw=1,Lr="firebase-heartbeat-store";let Ff=null;function pv(){return Ff||(Ff=dv(Yw,Fw,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Lr)}catch(i){console.warn(i)}}}}).catch(s=>{throw Ci.create("idb-open",{originalErrorMessage:s.message})})),Ff}async function Qw(s){try{const i=(await pv()).transaction(Lr),r=await i.objectStore(Lr).get(gv(s));return await i.done,r}catch(e){if(e instanceof bn)qn.warn(e.message);else{const i=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(i.message)}}}async function B_(s,e){try{const r=(await pv()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,gv(s)),await r.done}catch(i){if(i instanceof bn)qn.warn(i.message);else{const r=Ci.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});qn.warn(r.message)}}}function gv(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=1024,Xw=30;class $w{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Zw(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=G_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Xw){const h=Jw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=G_(),{heartbeatsToSend:r,unsentEntries:o}=Ww(this._heartbeatsCache.heartbeats),u=Ao(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return qn.warn(i),""}}}function G_(){return new Date().toISOString().substring(0,10)}function Ww(s,e=Kw){const i=[];let r=s.slice();for(const o of s){const u=i.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),q_(i)>e){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),q_(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Zw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ov()?cv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Qw(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function q_(s){return Ao(JSON.stringify({version:2,heartbeats:s})).length}function Jw(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let r=1;r<s.length;r++)s[r].date<i&&(i=s[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(s){vn(new un("platform-logger",e=>new hw(e),"PRIVATE")),vn(new un("heartbeat",e=>new $w(e),"PRIVATE")),Xt(oh,z_,s),Xt(oh,z_,"esm2017"),Xt("fire-js","")}eC("");var V_={};const Y_="@firebase/database",F_="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _v="";function tC(s){_v=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:kr(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return En(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nC(e)}}catch{}return new iC},Ji=yv("localStorage"),sC=yv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new ec("@firebase/database"),aC=function(){let s=1;return function(){return s++}}(),vv=function(s){const e=qT(s),i=new zT;i.update(e);const r=i.digest();return Oh.encodeByteArray(r)},Fr=function(...s){let e="";for(let i=0;i<s.length;i++){const r=s[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fr.apply(null,r):typeof r=="object"?e+=Je(r):e+=r,e+=" "}return e};let Ar=null,Q_=!0;const rC=function(s,e){j(!0,"Can't turn on custom loggers persistently."),ta.logLevel=De.VERBOSE,Ar=ta.log.bind(ta)},rt=function(...s){if(Q_===!0&&(Q_=!1,Ar===null&&sC.get("logging_enabled")===!0&&rC()),Ar){const e=Fr.apply(null,s);Ar(e)}},Qr=function(s){return function(...e){rt(s,...e)}},fh=function(...s){const e="FIREBASE INTERNAL ERROR: "+Fr(...s);ta.error(e)},Vn=function(...s){const e=`FIREBASE FATAL ERROR: ${Fr(...s)}`;throw ta.error(e),new Error(e)},_t=function(...s){const e="FIREBASE WARNING: "+Fr(...s);ta.warn(e)},lC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tc=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},oC=function(s){if(document.readyState==="complete")s();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},ca="[MIN_NAME]",ss="[MAX_NAME]",hs=function(s,e){if(s===e)return 0;if(s===ca||e===ss)return-1;if(e===ca||s===ss)return 1;{const i=K_(s),r=K_(e);return i!==null?r!==null?i-r===0?s.length-e.length:i-r:-1:r!==null?1:s<e?-1:1}},cC=function(s,e){return s===e?0:s<e?-1:1},Er=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+Je(e))},Lh=function(s){if(typeof s!="object"||s===null)return Je(s);const e=[];for(const r in s)e.push(r);e.sort();let i="{";for(let r=0;r<e.length;r++)r!==0&&(i+=","),i+=Je(e[r]),i+=":",i+=Lh(s[e[r]]);return i+="}",i},Sv=function(s,e){const i=s.length;if(i<=e)return[s];const r=[];for(let o=0;o<i;o+=e)o+e>i?r.push(s.substring(o,i)):r.push(s.substring(o,o+e));return r};function lt(s,e){for(const i in s)s.hasOwnProperty(i)&&e(i,s[i])}const bv=function(s){j(!tc(s),"Invalid JSON number");const e=11,i=52,r=(1<<e-1)-1;let o,u,h,d,m;s===0?(u=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),r),u=d+r,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(u=0,h=Math.round(s/Math.pow(2,1-r-i))));const p=[];for(m=i;m;m-=1)p.push(h%2?1:0),h=Math.floor(h/2);for(m=e;m;m-=1)p.push(u%2?1:0),u=Math.floor(u/2);p.push(o?1:0),p.reverse();const y=p.join("");let v="";for(m=0;m<64;m+=8){let w=parseInt(y.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),v=v+w}return v.toLowerCase()},uC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hC(s,e){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const r=new Error(s+" at "+e._path.toString()+": "+i);return r.code=s.toUpperCase(),r}const dC=new RegExp("^-?(0*)\\d{1,10}$"),mC=-2147483648,pC=2147483647,K_=function(s){if(dC.test(s)){const e=Number(s);if(e>=mC&&e<=pC)return e}return null},ya=function(s){try{s()}catch(e){setTimeout(()=>{const i=e.stack||"";throw _t("Exception was thrown by user callback.",i),e},Math.floor(0))}},gC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rr=function(s,e){const i=setTimeout(s,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,i){this.appCheckProvider=i,this.appName=e.name,sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,i,r){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class bo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="5",Ev="v",Tv="s",wv="r",Cv="f",Av=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rv="ls",Nv="p",hh="ac",Iv="websocket",Ov="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,i,r,o,u=!1,h="",d=!1,m=!1,p=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ji.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ji.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function vC(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function xv(s,e,i){j(typeof e=="string","typeof type must == string"),j(typeof i=="object","typeof params must == object");let r;if(e===Iv)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===Ov)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vC(s)&&(i.ns=s.namespace);const o=[];return lt(i,(u,h)=>{o.push(u+"="+h)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.counters_={}}incrementCounter(e,i=1){En(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return ET(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={},Kf={};function jh(s){const e=s.toString();return Qf[e]||(Qf[e]=new SC),Qf[e]}function bC(s,e){const i=s.toString();return Kf[i]||(Kf[i]=e()),Kf[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&ya(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="start",TC="close",wC="pLPCommand",CC="pRTLPCB",Mv="id",kv="pw",Lv="ser",AC="cb",RC="seg",NC="ts",IC="d",OC="dframe",Uv=1870,jv=30,DC=Uv-jv,xC=25e3,MC=3e4;class ea{constructor(e,i,r,o,u,h,d){this.connId=e,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qr(e),this.stats_=jh(i),this.urlFn=m=>(this.appCheckToken&&(m[hh]=this.appCheckToken),xv(i,Ov,m))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new EC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MC)),oC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ph((...u)=>{const[h,d,m,p,y]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===X_)this.id=d,this.password=m;else if(h===TC)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,d]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[X_]="t",r[Lv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[AC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ev]=Uh,this.transportSessionId&&(r[Tv]=this.transportSessionId),this.lastSessionId&&(r[Rv]=this.lastSessionId),this.applicationId&&(r[Nv]=this.applicationId),this.appCheckToken&&(r[hh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Av.test(location.hostname)&&(r[wv]=Cv);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ea.forceAllow_=!0}static forceDisallow(){ea.forceDisallow_=!0}static isAvailable(){return ea.forceAllow_?!0:!ea.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uC()&&!fC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=Je(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=tv(i),o=Sv(r,DC);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[OC]="t",r[Mv]=e,r[kv]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=Je(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Ph{constructor(e,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aC(),window[wC+this.uniqueCallbackIdentifier]=e,window[CC+this.uniqueCallbackIdentifier]=i,this.myIFrame=Ph.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){rt("frame writing exception"),d.stack&&rt(d.stack),rt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mv]=this.myID,e[kv]=this.myPW,e[Lv]=this.currentSerial;let i=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jv+r.length<=Uv;){const h=this.pendingSegs.shift();r=r+"&"+RC+o+"="+h.seg+"&"+NC+o+"="+h.ts+"&"+IC+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,r){this.pendingSegs.push({seg:e,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(xC)),u=()=>{clearTimeout(o),r()};this.addTag(e,u)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=16384,LC=45e3;let Do=null;typeof MozWebSocket<"u"?Do=MozWebSocket:typeof WebSocket<"u"&&(Do=WebSocket);class an{constructor(e,i,r,o,u,h,d){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qr(this.connId),this.stats_=jh(i),this.connURL=an.connectionURL_(i,h,d,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,r,o,u){const h={};return h[Ev]=Uh,typeof location<"u"&&location.hostname&&Av.test(location.hostname)&&(h[wv]=Cv),i&&(h[Tv]=i),r&&(h[Rv]=r),o&&(h[hh]=o),u&&(h[Nv]=u),xv(e,Iv,h)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ji.set("previous_websocket_failure",!0);try{let r;xT(),this.mySock=new Do(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Do!==null&&!an.forceDisallow_}static previouslyFailed(){return Ji.isInMemoryStorage||Ji.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ji.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=kr(i);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const i=Je(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Sv(i,kC);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LC))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{static get ALL_TRANSPORTS(){return[ea,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const i=an&&an.isAvailable();let r=i&&!an.previouslyFailed();if(e.webSocketOnly&&(i||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[an];else{const o=this.transports_=[];for(const u of Ur.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Ur.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ur.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=6e4,jC=5e3,PC=10*1024,zC=100*1024,Xf="t",$_="d",HC="s",W_="r",BC="e",Z_="o",J_="a",ey="n",ty="p",GC="h";class qC{constructor(e,i,r,o,u,h,d,m,p,y){this.id=e,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=m,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qr("c:"+this.id+":"),this.transportManager_=new Ur(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Rr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xf in e){const i=e[Xf];i===J_?this.upgradeIfSecondaryHealthy_():i===W_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Z_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=Er("t",e),r=Er("d",e);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ty,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:J_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ey,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=Er("t",e),r=Er("d",e);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=Er(Xf,e);if($_ in e){const r=e[$_];if(i===GC){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===ey){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===HC?this.onConnectionShutdown_(r):i===W_?this.onReset_(r):i===BC?fh("Server Error: "+r):i===Z_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fh("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Uh!==r&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),Rr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ty,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ji.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{put(e,i,r,o){}merge(e,i,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,r){}onDisconnectMerge(e,i,r){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(e,i,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:r});const o=this.getInitialEvent(e);o&&i.apply(r,o)}off(e,i,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===i&&(!r||r===o[u].context)){o.splice(u,1);return}}validateEventType_(e){j(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends zv{static getInstance(){return new xo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=32,iy=768;class Ae{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function be(){return new Ae("")}function ce(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ii(s){return s.pieces_.length-s.pieceNum_}function ke(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Ae(s.pieces_,e)}function zh(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function VC(s){let e="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[i])));return e||"/"}function jr(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function Hv(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)e.push(s.pieces_[i]);return new Ae(e,0)}function He(s,e){const i=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)i.push(s.pieces_[r]);if(e instanceof Ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)i.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Ae(i,0)}function fe(s){return s.pieceNum_>=s.pieces_.length}function gt(s,e){const i=ce(s),r=ce(e);if(i===null)return e;if(i===r)return gt(ke(s),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function YC(s,e){const i=jr(s,0),r=jr(e,0);for(let o=0;o<i.length&&o<r.length;o++){const u=hs(i[o],r[o]);if(u!==0)return u}return i.length===r.length?0:i.length<r.length?-1:1}function Hh(s,e){if(Ii(s)!==Ii(e))return!1;for(let i=s.pieceNum_,r=e.pieceNum_;i<=s.pieces_.length;i++,r++)if(s.pieces_[i]!==e.pieces_[r])return!1;return!0}function Kt(s,e){let i=s.pieceNum_,r=e.pieceNum_;if(Ii(s)>Ii(e))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==e.pieces_[r])return!1;++i,++r}return!0}class FC{constructor(e,i){this.errorPrefix_=i,this.parts_=jr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jo(this.parts_[r]);Bv(this)}}function QC(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=Jo(e),Bv(s)}function KC(s){const e=s.parts_.pop();s.byteLength_-=Jo(e),s.parts_.length>0&&(s.byteLength_-=1)}function Bv(s){if(s.byteLength_>iy)throw new Error(s.errorPrefix_+"has a key path longer than "+iy+" bytes ("+s.byteLength_+").");if(s.parts_.length>ny)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ny+") or object contains a cycle "+Zi(s))}function Zi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends zv{static getInstance(){return new Bh}constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=1e3,XC=60*5*1e3,sy=30*1e3,$C=1.3,WC=3e4,ZC="server_kill",ay=3;class Gn extends Pv{constructor(e,i,r,o,u,h,d,m){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=Gn.nextPersistentConnectionId_++,this.log_=Qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Tr,this.maxReconnectDelay_=XC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,r){const o=++this.requestNumber_,u={r:o,a:e,b:i};this.log_(Je(u)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const i=new _n,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),i.promise}listen(e,i,r,o){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:e,tag:r};this.listens.get(h).set(u,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(e){const i=e.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const u={p:r},h="q";e.tag&&(u.q=i._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,d=>{const m=d.d,p=d.s;Gn.warnOnListenWarnings_(m,i),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",d),p!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(p,m))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&En(e,"w")){const r=la(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',u=i._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||PT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=jT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const u=o.s,h=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,r=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(e,i){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,i)}sendUnlisten_(e,i,r,o){this.log_("Unlisten on "+e+" for "+i);const u={p:e},h="n";o&&(u.q=r,u.t=o),this.sendRequest(h,u)}onDisconnectPut(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:r})}onDisconnectMerge(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:r})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,r,o){const u={p:i,d:r};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(e,i,r,o){this.putInternal("p",e,i,r,o)}merge(e,i,r,o){this.putInternal("m",e,i,r,o)}putInternal(e,i,r,o,u){this.initConnection_();const h={p:i,d:r};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,r,u=>{this.log_(i+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const u=r.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const i=e.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):fh("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WC&&(this.reconnectDelay_=Tr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Gn.nextConnectionId_++,u=this.lastSessionId;let h=!1,d=null;const m=function(){d?d.close():(h=!0,r())},p=function(v){j(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(v)};this.realtime_={close:m,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=w&&w.token,d=new qC(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,r,N=>{_t(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZC)},u))}catch(v){this.log_("Failed to get token: "+v),h||(this.repoInfo_.nodeAdmin&&_t(v),m())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],No(this.interruptReasons_)&&(this.reconnectDelay_=Tr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let r;i?r=i.map(u=>Lh(u)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const r=new Ae(e).toString();let o;if(this.listens.has(r)){const u=this.listens.get(r);o=u.get(i),u.delete(i),u.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,i){rt("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ay&&(this.reconnectDelay_=sy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){rt("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ay&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+_v.replace(/\./g,"-")]=1,xh()?e["framework.cordova"]=1:lv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return No(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new he(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const r=new he(ca,e),o=new he(ca,i);return this.compare(r,o)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class Gv extends nc{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(e){_o=e}compare(e,i){return hs(e.name,i.name)}isDefinedOn(e){throw pa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return he.MIN}maxPost(){return new he(ss,_o)}makePost(e,i){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,_o)}toString(){return".key"}}const na=new Gv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,i,r,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=i?r(e.key,i):1,o&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,i,r,o,u){this.key=e,this.value=i,this.color=r??at.RED,this.left=o??wt.EMPTY_NODE,this.right=u??wt.EMPTY_NODE}copy(e,i,r,o,u){return new at(e??this.key,i??this.value,r??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,r){let o=this;const u=r(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,i,r),null):u===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let r,o;if(r=this,i(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(e,r.key)===0){if(r.right.isEmpty())return wt.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class JC{copy(e,i,r,o,u){return this}insert(e,i,r){return new at(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,i=wt.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new wt(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(e,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(e){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(e,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new yo(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new yo(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new yo(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new JC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(s,e){return hs(s.name,e.name)}function Gh(s,e){return hs(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh;function tA(s){dh=s}const qv=function(s){return typeof s=="number"?"number:"+bv(s):"string:"+s},Vv=function(s){if(s.isLeafNode()){const e=s.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&En(e,".sv"),"Priority must be a string or number.")}else j(s===dh||s.isEmpty(),"priority of unexpected type.");j(s===dh||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry;class st{static set __childrenNodeConstructor(e){ry=e}static get __childrenNodeConstructor(){return ry}constructor(e,i=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:ce(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const r=ce(e);return r===null?i:i.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||Ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qv(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=bv(this.value_):e+=this.value_,this.lazyHash_=vv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,r=typeof this.value_,o=st.VALUE_TYPE_ORDER.indexOf(i),u=st.VALUE_TYPE_ORDER.indexOf(r);return j(o>=0,"Unknown leaf type: "+i),j(u>=0,"Unknown leaf type: "+r),o===u?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yv,Fv;function nA(s){Yv=s}function iA(s){Fv=s}class sA extends nc{compare(e,i){const r=e.node.getPriority(),o=i.node.getPriority(),u=r.compareTo(o);return u===0?hs(e.name,i.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return he.MIN}maxPost(){return new he(ss,new st("[PRIORITY-POST]",Fv))}makePost(e,i){const r=Yv(e);return new he(i,new st("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new sA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=Math.log(2);class rA{constructor(e){const i=u=>parseInt(Math.log(u)/aA,10),r=u=>parseInt(Array(u+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mo=function(s,e,i,r){s.sort(e);const o=function(m,p){const y=p-m;let v,w;if(y===0)return null;if(y===1)return v=s[m],w=i?i(v):v,new at(w,v.node,at.BLACK,null,null);{const N=parseInt(y/2,10)+m,U=o(m,N),B=o(N+1,p);return v=s[N],w=i?i(v):v,new at(w,v.node,at.BLACK,U,B)}},u=function(m){let p=null,y=null,v=s.length;const w=function(U,B){const V=v-U,ae=v;v-=U;const le=o(V+1,ae),ee=s[V],ge=i?i(ee):ee;N(new at(ge,ee.node,B,null,le))},N=function(U){p?(p.left=U,p=U):(y=U,p=U)};for(let U=0;U<m.count;++U){const B=m.nextBitIsOne(),V=Math.pow(2,m.count-(U+1));B?w(V,at.BLACK):(w(V,at.BLACK),w(V,at.RED))}return y},h=new rA(s.length),d=u(h);return new wt(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f;const Js={};class zn{static get Default(){return j(Js&&Be,"ChildrenNode.ts has not been loaded"),$f=$f||new zn({".priority":Js},{".priority":Be}),$f}constructor(e,i){this.indexes_=e,this.indexSet_=i}get(e){const i=la(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof wt?i:null}hasIndex(e){return En(this.indexSet_,e.toString())}addIndex(e,i){j(e!==na,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const u=i.getIterator(he.Wrap);let h=u.getNext();for(;h;)o=o||e.isDefinedOn(h.node),r.push(h),h=u.getNext();let d;o?d=Mo(r,e.getCompare()):d=Js;const m=e.toString(),p=Object.assign({},this.indexSet_);p[m]=e;const y=Object.assign({},this.indexes_);return y[m]=d,new zn(y,p)}addToIndexes(e,i){const r=Io(this.indexes_,(o,u)=>{const h=la(this.indexSet_,u);if(j(h,"Missing index implementation for "+u),o===Js)if(h.isDefinedOn(e.node)){const d=[],m=i.getIterator(he.Wrap);let p=m.getNext();for(;p;)p.name!==e.name&&d.push(p),p=m.getNext();return d.push(e),Mo(d,h.getCompare())}else return Js;else{const d=i.get(e.name);let m=o;return d&&(m=m.remove(new he(e.name,d))),m.insert(e,e.node)}});return new zn(r,this.indexSet_)}removeFromIndexes(e,i){const r=Io(this.indexes_,o=>{if(o===Js)return o;{const u=i.get(e.name);return u?o.remove(new he(e.name,u)):o}});return new zn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;class J{static get EMPTY_NODE(){return wr||(wr=new J(new wt(Gh),null,zn.Default))}constructor(e,i,r){this.children_=e,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Vv(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wr}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?wr:i}}getChild(e){const i=ce(e);return i===null?this:this.getImmediateChild(i).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(j(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const r=new he(e,i);let o,u;i.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,i),u=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?wr:this.priorityNode_;return new J(o,h,u)}}updateChild(e,i){const r=ce(e);if(r===null)return i;{j(ce(e)!==".priority"||Ii(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(ke(e),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let r=0,o=0,u=!0;if(this.forEachChild(Be,(h,d)=>{i[h]=d.val(e),r++,u&&J.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):u=!1}),!e&&u&&o<2*r){const h=[];for(const d in i)h[d]=i[d];return h}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qv(this.getPriority().val())+":"),this.forEachChild(Be,(i,r)=>{const o=r.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":vv(e)}return this.lazyHash_}getPredecessorChildName(e,i,r){const o=this.resolveIndex_(r);if(o){const u=o.getPredecessorKey(new he(e,i));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new he(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new he(i,this.children_.get(i)):null}forEachChild(e,i){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,he.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kr?-1:0}withIndex(e){if(e===na||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===na||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Be),o=i.getIterator(Be);let u=r.getNext(),h=o.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=r.getNext(),h=o.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===na?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lA extends J{constructor(){super(new wt(Gh),J.EMPTY_NODE,zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Kr=new lA;Object.defineProperties(he,{MIN:{value:new he(ca,J.EMPTY_NODE)},MAX:{value:new he(ss,Kr)}});Gv.__EMPTY_NODE=J.EMPTY_NODE;st.__childrenNodeConstructor=J;tA(Kr);iA(Kr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=!0;function Ye(s,e=null){if(s===null)return J.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new st(i,Ye(e))}if(!(s instanceof Array)&&oA){const i=[];let r=!1;if(lt(s,(h,d)=>{if(h.substring(0,1)!=="."){const m=Ye(d);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),i.push(new he(h,m)))}}),i.length===0)return J.EMPTY_NODE;const u=Mo(i,eA,h=>h.name,Gh);if(r){const h=Mo(i,Be.getCompare());return new J(u,Ye(e),new zn({".priority":h},{".priority":Be}))}else return new J(u,Ye(e),zn.Default)}else{let i=J.EMPTY_NODE;return lt(s,(r,o)=>{if(En(s,r)&&r.substring(0,1)!=="."){const u=Ye(o);(u.isLeafNode()||!u.isEmpty())&&(i=i.updateImmediateChild(r,u))}}),i.updatePriority(Ye(e))}}nA(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA extends nc{constructor(e){super(),this.indexPath_=e,j(!fe(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const r=this.extractChild(e.node),o=this.extractChild(i.node),u=r.compareTo(o);return u===0?hs(e.name,i.name):u}makePost(e,i){const r=Ye(e),o=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(i,o)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Kr);return new he(ss,e)}toString(){return jr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA extends nc{compare(e,i){const r=e.node.compareTo(i.node);return r===0?hs(e.name,i.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,i){const r=Ye(e);return new he(i,r)}toString(){return".value"}}const fA=new uA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(s){return{type:"value",snapshotNode:s}}function ua(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function Pr(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function zr(s,e,i){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:i}}function hA(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.index_=e}updateChild(e,i,r,o,u,h){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(i);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?e.hasChild(i)?h.trackChildChange(Pr(i,d)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(ua(i,r)):h.trackChildChange(zr(i,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(e,i,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(o,u)=>{i.hasChild(o)||r.trackChildChange(Pr(o,u))}),i.isLeafNode()||i.forEachChild(Be,(o,u)=>{if(e.hasChild(o)){const h=e.getImmediateChild(o);h.equals(u)||r.trackChildChange(zr(o,u,h))}else r.trackChildChange(ua(o,u))})),i.withIndex(this.index_)}updatePriority(e,i){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.indexedFilter_=new qh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hr.getStartPost_(e),this.endPost_=Hr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return i&&r}updateChild(e,i,r,o,u,h){return this.matches(new he(i,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,i,r,o,u,h)}updateFullNode(e,i,r){i.isLeafNode()&&(i=J.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(J.EMPTY_NODE);const u=this;return i.forEachChild(Be,(h,d)=>{u.matches(new he(h,d))||(o=o.updateImmediateChild(h,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const i=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),i)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const i=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),i)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Hr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,i,r,o,u,h){return this.rangedFilter_.matches(new he(i,r))||(r=J.EMPTY_NODE),e.getImmediateChild(i).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,i,r,o,u,h):this.fullLimitUpdateChild_(e,i,r,u,h)}updateFullNode(e,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=J.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;u.hasNext()&&h<this.limit_;){const d=u.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(J.EMPTY_NODE);let u;this.reverse_?u=o.getReverseIterator(this.index_):u=o.getIterator(this.index_);let h=0;for(;u.hasNext();){const d=u.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,i,r,o,u){let h;if(this.reverse_){const v=this.index_.getCompare();h=(w,N)=>v(N,w)}else h=this.index_.getCompare();const d=e;j(d.numChildren()===this.limit_,"");const m=new he(i,r),p=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(d.hasChild(i)){const v=d.getImmediateChild(i);let w=o.getChildAfterChild(this.index_,p,this.reverse_);for(;w!=null&&(w.name===i||d.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const N=w==null?1:h(w,m);if(y&&!r.isEmpty()&&N>=0)return u!=null&&u.trackChildChange(zr(i,r,v)),d.updateImmediateChild(i,r);{u!=null&&u.trackChildChange(Pr(i,v));const B=d.updateImmediateChild(i,J.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(u!=null&&u.trackChildChange(ua(w.name,w.node)),B.updateImmediateChild(w.name,w.node)):B}}else return r.isEmpty()?e:y&&h(p,m)>=0?(u!=null&&(u.trackChildChange(Pr(p.name,p.node)),u.trackChildChange(ua(i,r))),d.updateImmediateChild(i,r).updateImmediateChild(p.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ca}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Vh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mA(s){return s.loadsAllData()?new qh(s.getIndex()):s.hasLimit()?new dA(s):new Hr(s)}function ly(s){const e={};if(s.isDefault())return e;let i;if(s.index_===Be?i="$priority":s.index_===fA?i="$value":s.index_===na?i="$key":(j(s.index_ instanceof cA,"Unrecognized index type!"),i=s.index_.toString()),e.orderBy=Je(i),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";e[r]=Je(s.indexStartValue_),s.startNameSet_&&(e[r]+=","+Je(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";e[r]=Je(s.indexEndValue_),s.endNameSet_&&(e[r]+=","+Je(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function oy(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),e.vf=i}return s.index_!==Be&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Pv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,i,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Qr("p:rest:"),this.listens_={}}listen(e,i,r,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=ko.getListenId_(e,r),d={};this.listens_[h]=d;const m=ly(e._queryParams);this.restRequest_(u+".json",m,(p,y)=>{let v=y;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(u,v,!1,r),la(this.listens_,h)===d){let w;p?p===401?w="permission_denied":w="rest_error:"+p:w="ok",o(w,null)}})}unlisten(e,i){const r=ko.getListenId_(e,i);delete this.listens_[r]}get(e){const i=ly(e._queryParams),r=e._path.toString(),o=new _n;return this.restRequest_(r+".json",i,(u,h)=>{let d=h;u===404&&(d=null,u=null),u===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(i.auth=o.accessToken),u&&u.token&&(i.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ga(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=kr(d.responseText)}catch{_t("Failed to parse JSON response for "+h+": "+d.responseText)}r(null,m)}else d.status!==401&&d.status!==404&&_t("Got unsuccessful REST response for "+h+" Status: "+d.status),r(d.status);r=null}},d.open("GET",h,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(){return{value:null,children:new Map}}function va(s,e,i){if(fe(e))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,i);else{const r=ce(e);s.children.has(r)||s.children.set(r,Lo());const o=s.children.get(r);e=ke(e),va(o,e,i)}}function mh(s,e){if(fe(e))return s.value=null,s.children.clear(),!0;if(s.value!==null){if(s.value.isLeafNode())return!1;{const i=s.value;return s.value=null,i.forEachChild(Be,(r,o)=>{va(s,new Ae(r),o)}),mh(s,e)}}else if(s.children.size>0){const i=ce(e);return e=ke(e),s.children.has(i)&&mh(s.children.get(i),e)&&s.children.delete(i),s.children.size===0}else return!0}function ph(s,e,i){s.value!==null?i(e,s.value):gA(s,(r,o)=>{const u=new Ae(e.toString()+"/"+r);ph(o,u,i)})}function gA(s,e){s.children.forEach((i,r)=>{e(r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i=Object.assign({},e);return this.last_&&lt(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=10*1e3,yA=30*1e3,vA=5*60*1e3;class SA{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new _A(e);const r=cy+(yA-cy)*Math.random();Rr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),i={};let r=!1;lt(e,(o,u)=>{u>0&&En(this.statsToReport_,o)&&(i[o]=u,r=!0)}),r&&this.server_.reportStats(i),Rr(this.reportStats_.bind(this),Math.floor(Math.random()*2*vA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function Yh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,i,r){this.path=e,this.affectedTree=i,this.revert=r,this.type=rn.ACK_USER_WRITE,this.source=Yh()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ae(e));return new Uo(be(),i,this.revert)}}else return j(ce(this.path)===e,"operationForChild called for unrelated child."),new Uo(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,i){this.source=e,this.path=i,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new Br(this.source,be()):new Br(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,i,r){this.source=e,this.path=i,this.snap=r,this.type=rn.OVERWRITE}operationForChild(e){return fe(this.path)?new as(this.source,be(),this.snap.getImmediateChild(e)):new as(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,i,r){this.source=e,this.path=i,this.children=r,this.type=rn.MERGE}operationForChild(e){if(fe(this.path)){const i=this.children.subtree(new Ae(e));return i.isEmpty()?null:i.value?new as(this.source,be(),i.value):new fa(this.source,be(),i)}else return j(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fa(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,i,r){this.node_=e,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const i=ce(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function EA(s,e,i,r){const o=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(hA(h.childName,h.snapshotNode))}),Cr(s,o,"child_removed",e,r,i),Cr(s,o,"child_added",e,r,i),Cr(s,o,"child_moved",u,r,i),Cr(s,o,"child_changed",e,r,i),Cr(s,o,"value",e,r,i),o}function Cr(s,e,i,r,o,u){const h=r.filter(d=>d.type===i);h.sort((d,m)=>wA(s,d,m)),h.forEach(d=>{const m=TA(s,d,u);o.forEach(p=>{p.respondsTo(d.type)&&e.push(p.createEvent(m,s.query_))})})}function TA(s,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function wA(s,e,i){if(e.childName==null||i.childName==null)throw pa("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),o=new he(i.childName,i.snapshotNode);return s.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(s,e){return{eventCache:s,serverCache:e}}function Nr(s,e,i,r){return ic(new Oi(e,i,r),s.serverCache)}function Kv(s,e,i,r){return ic(s.eventCache,new Oi(e,i,r))}function jo(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function rs(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;const CA=()=>(Wf||(Wf=new wt(cC)),Wf);class Ue{static fromObject(e){let i=new Ue(null);return lt(e,(r,o)=>{i=i.set(new Ae(r),o)}),i}constructor(e,i=CA()){this.value=e,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:be(),value:this.value};if(fe(e))return null;{const r=ce(e),o=this.children.get(r);if(o!==null){const u=o.findRootMostMatchingPathAndValue(ke(e),i);return u!=null?{path:He(new Ae(r),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const i=ce(e),r=this.children.get(i);return r!==null?r.subtree(ke(e)):new Ue(null)}}set(e,i){if(fe(e))return new Ue(i,this.children);{const r=ce(e),u=(this.children.get(r)||new Ue(null)).set(ke(e),i),h=this.children.insert(r,u);return new Ue(this.value,h)}}remove(e){if(fe(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const i=ce(e),r=this.children.get(i);if(r){const o=r.remove(ke(e));let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),this.value===null&&u.isEmpty()?new Ue(null):new Ue(this.value,u)}else return this}}get(e){if(fe(e))return this.value;{const i=ce(e),r=this.children.get(i);return r?r.get(ke(e)):null}}setTree(e,i){if(fe(e))return i;{const r=ce(e),u=(this.children.get(r)||new Ue(null)).setTree(ke(e),i);let h;return u.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,u),new Ue(this.value,h)}}fold(e){return this.fold_(be(),e)}fold_(e,i){const r={};return this.children.inorderTraversal((o,u)=>{r[o]=u.fold_(He(e,o),i)}),i(e,this.value,r)}findOnPath(e,i){return this.findOnPath_(e,be(),i)}findOnPath_(e,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(fe(e))return null;{const u=ce(e),h=this.children.get(u);return h?h.findOnPath_(ke(e),He(i,u),r):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,be(),i)}foreachOnPath_(e,i,r){if(fe(e))return this;{this.value&&r(i,this.value);const o=ce(e),u=this.children.get(o);return u?u.foreachOnPath_(ke(e),He(i,o),r):new Ue(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,i){this.children.inorderTraversal((r,o)=>{o.foreach_(He(e,r),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,r)=>{r.value&&e(i,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new Ue(null))}}function Ir(s,e,i){if(fe(e))return new on(new Ue(i));{const r=s.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let u=r.value;const h=gt(o,e);return u=u.updateChild(h,i),new on(s.writeTree_.set(o,u))}else{const o=new Ue(i),u=s.writeTree_.setTree(e,o);return new on(u)}}}function gh(s,e,i){let r=s;return lt(i,(o,u)=>{r=Ir(r,He(e,o),u)}),r}function uy(s,e){if(fe(e))return on.empty();{const i=s.writeTree_.setTree(e,new Ue(null));return new on(i)}}function _h(s,e){return ds(s,e)!=null}function ds(s,e){const i=s.writeTree_.findRootMostValueAndPath(e);return i!=null?s.writeTree_.get(i.path).getChild(gt(i.path,e)):null}function fy(s){const e=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Be,(r,o)=>{e.push(new he(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new he(r,o.value))}),e}function Ai(s,e){if(fe(e))return s;{const i=ds(s,e);return i!=null?new on(new Ue(i)):new on(s.writeTree_.subtree(e))}}function yh(s){return s.writeTree_.isEmpty()}function ha(s,e){return Xv(be(),s.writeTree_,e)}function Xv(s,e,i){if(e.value!=null)return i.updateChild(s,e.value);{let r=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(j(u.value!==null,"Priority writes must always be leaf nodes"),r=u.value):i=Xv(He(s,o),u,i)}),!i.getChild(s).isEmpty()&&r!==null&&(i=i.updateChild(He(s,".priority"),r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(s,e){return Jv(e,s)}function AA(s,e,i,r,o){j(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:i,writeId:r,visible:o}),o&&(s.visibleWrites=Ir(s.visibleWrites,e,i)),s.lastWriteId=r}function RA(s,e,i,r){j(r>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:e,children:i,writeId:r,visible:!0}),s.visibleWrites=gh(s.visibleWrites,e,i),s.lastWriteId=r}function NA(s,e){for(let i=0;i<s.allWrites.length;i++){const r=s.allWrites[i];if(r.writeId===e)return r}return null}function IA(s,e){const i=s.allWrites.findIndex(d=>d.writeId===e);j(i>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[i];s.allWrites.splice(i,1);let o=r.visible,u=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&OA(d,r.path)?o=!1:Kt(r.path,d.path)&&(u=!0)),h--}if(o){if(u)return DA(s),!0;if(r.snap)s.visibleWrites=uy(s.visibleWrites,r.path);else{const d=r.children;lt(d,m=>{s.visibleWrites=uy(s.visibleWrites,He(r.path,m))})}return!0}else return!1}function OA(s,e){if(s.snap)return Kt(s.path,e);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Kt(He(s.path,i),e))return!0;return!1}function DA(s){s.visibleWrites=$v(s.allWrites,xA,be()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function xA(s){return s.visible}function $v(s,e,i){let r=on.empty();for(let o=0;o<s.length;++o){const u=s[o];if(e(u)){const h=u.path;let d;if(u.snap)Kt(i,h)?(d=gt(i,h),r=Ir(r,d,u.snap)):Kt(h,i)&&(d=gt(h,i),r=Ir(r,be(),u.snap.getChild(d)));else if(u.children){if(Kt(i,h))d=gt(i,h),r=gh(r,d,u.children);else if(Kt(h,i))if(d=gt(h,i),fe(d))r=gh(r,be(),u.children);else{const m=la(u.children,ce(d));if(m){const p=m.getChild(ke(d));r=Ir(r,be(),p)}}}else throw pa("WriteRecord should have .snap or .children")}}return r}function Wv(s,e,i,r,o){if(!r&&!o){const u=ds(s.visibleWrites,e);if(u!=null)return u;{const h=Ai(s.visibleWrites,e);if(yh(h))return i;if(i==null&&!_h(h,be()))return null;{const d=i||J.EMPTY_NODE;return ha(h,d)}}}else{const u=Ai(s.visibleWrites,e);if(!o&&yh(u))return i;if(!o&&i==null&&!_h(u,be()))return null;{const h=function(p){return(p.visible||o)&&(!r||!~r.indexOf(p.writeId))&&(Kt(p.path,e)||Kt(e,p.path))},d=$v(s.allWrites,h,e),m=i||J.EMPTY_NODE;return ha(d,m)}}}function MA(s,e,i){let r=J.EMPTY_NODE;const o=ds(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Be,(u,h)=>{r=r.updateImmediateChild(u,h)}),r;if(i){const u=Ai(s.visibleWrites,e);return i.forEachChild(Be,(h,d)=>{const m=ha(Ai(u,new Ae(h)),d);r=r.updateImmediateChild(h,m)}),fy(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const u=Ai(s.visibleWrites,e);return fy(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function kA(s,e,i,r,o){j(r||o,"Either existingEventSnap or existingServerSnap must exist");const u=He(e,i);if(_h(s.visibleWrites,u))return null;{const h=Ai(s.visibleWrites,u);return yh(h)?o.getChild(i):ha(h,o.getChild(i))}}function LA(s,e,i,r){const o=He(e,i),u=ds(s.visibleWrites,o);if(u!=null)return u;if(r.isCompleteForChild(i)){const h=Ai(s.visibleWrites,o);return ha(h,r.getNode().getImmediateChild(i))}else return null}function UA(s,e){return ds(s.visibleWrites,e)}function jA(s,e,i,r,o,u,h){let d;const m=Ai(s.visibleWrites,e),p=ds(m,be());if(p!=null)d=p;else if(i!=null)d=ha(m,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const y=[],v=h.getCompare(),w=u?d.getReverseIteratorFrom(r,h):d.getIteratorFrom(r,h);let N=w.getNext();for(;N&&y.length<o;)v(N,r)!==0&&y.push(N),N=w.getNext();return y}else return[]}function PA(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function Po(s,e,i,r){return Wv(s.writeTree,s.treePath,e,i,r)}function Kh(s,e){return MA(s.writeTree,s.treePath,e)}function hy(s,e,i,r){return kA(s.writeTree,s.treePath,e,i,r)}function zo(s,e){return UA(s.writeTree,He(s.treePath,e))}function zA(s,e,i,r,o,u){return jA(s.writeTree,s.treePath,e,i,r,o,u)}function Xh(s,e,i){return LA(s.writeTree,s.treePath,e,i)}function Zv(s,e){return Jv(He(s.treePath,e),s.writeTree)}function Jv(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,r=e.childName;j(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const u=o.type;if(i==="child_added"&&u==="child_removed")this.changeMap.set(r,zr(r,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&u==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&u==="child_changed")this.changeMap.set(r,Pr(r,o.oldSnap));else if(i==="child_changed"&&u==="child_added")this.changeMap.set(r,ua(r,e.snapshotNode));else if(i==="child_changed"&&u==="child_changed")this.changeMap.set(r,zr(r,e.snapshotNode,o.oldSnap));else throw pa("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{getCompleteChild(e){return null}getChildAfterChild(e,i,r){return null}}const e0=new BA;class $h{constructor(e,i,r=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Oi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xh(this.writes_,e,r)}}getChildAfterChild(e,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rs(this.viewCache_),u=zA(this.writes_,o,i,1,r,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(s){return{filter:s}}function qA(s,e){j(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function VA(s,e,i,r,o){const u=new HA;let h,d;if(i.type===rn.OVERWRITE){const p=i;p.source.fromUser?h=vh(s,e,p.path,p.snap,r,o,u):(j(p.source.fromServer,"Unknown source."),d=p.source.tagged||e.serverCache.isFiltered()&&!fe(p.path),h=Ho(s,e,p.path,p.snap,r,o,d,u))}else if(i.type===rn.MERGE){const p=i;p.source.fromUser?h=FA(s,e,p.path,p.children,r,o,u):(j(p.source.fromServer,"Unknown source."),d=p.source.tagged||e.serverCache.isFiltered(),h=Sh(s,e,p.path,p.children,r,o,d,u))}else if(i.type===rn.ACK_USER_WRITE){const p=i;p.revert?h=XA(s,e,p.path,r,o,u):h=QA(s,e,p.path,p.affectedTree,r,o,u)}else if(i.type===rn.LISTEN_COMPLETE)h=KA(s,e,i.path,r,u);else throw pa("Unknown operation type: "+i.type);const m=u.getChanges();return YA(e,h,m),{viewCache:h,changes:m}}function YA(s,e,i){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),u=jo(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(u)||!r.getNode().getPriority().equals(u.getPriority()))&&i.push(Qv(jo(e)))}}function t0(s,e,i,r,o,u){const h=e.eventCache;if(zo(r,i)!=null)return e;{let d,m;if(fe(i))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=rs(e),y=p instanceof J?p:J.EMPTY_NODE,v=Kh(r,y);d=s.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const p=Po(r,rs(e));d=s.filter.updateFullNode(e.eventCache.getNode(),p,u)}else{const p=ce(i);if(p===".priority"){j(Ii(i)===1,"Can't have a priority with additional path components");const y=h.getNode();m=e.serverCache.getNode();const v=hy(r,i,y,m);v!=null?d=s.filter.updatePriority(y,v):d=h.getNode()}else{const y=ke(i);let v;if(h.isCompleteForChild(p)){m=e.serverCache.getNode();const w=hy(r,i,h.getNode(),m);w!=null?v=h.getNode().getImmediateChild(p).updateChild(y,w):v=h.getNode().getImmediateChild(p)}else v=Xh(r,p,e.serverCache);v!=null?d=s.filter.updateChild(h.getNode(),p,v,y,o,u):d=h.getNode()}}return Nr(e,d,h.isFullyInitialized()||fe(i),s.filter.filtersNodes())}}function Ho(s,e,i,r,o,u,h,d){const m=e.serverCache;let p;const y=h?s.filter:s.filter.getIndexedFilter();if(fe(i))p=y.updateFullNode(m.getNode(),r,null);else if(y.filtersNodes()&&!m.isFiltered()){const N=m.getNode().updateChild(i,r);p=y.updateFullNode(m.getNode(),N,null)}else{const N=ce(i);if(!m.isCompleteForPath(i)&&Ii(i)>1)return e;const U=ke(i),V=m.getNode().getImmediateChild(N).updateChild(U,r);N===".priority"?p=y.updatePriority(m.getNode(),V):p=y.updateChild(m.getNode(),N,V,U,e0,null)}const v=Kv(e,p,m.isFullyInitialized()||fe(i),y.filtersNodes()),w=new $h(o,v,u);return t0(s,v,i,o,w,d)}function vh(s,e,i,r,o,u,h){const d=e.eventCache;let m,p;const y=new $h(o,e,u);if(fe(i))p=s.filter.updateFullNode(e.eventCache.getNode(),r,h),m=Nr(e,p,!0,s.filter.filtersNodes());else{const v=ce(i);if(v===".priority")p=s.filter.updatePriority(e.eventCache.getNode(),r),m=Nr(e,p,d.isFullyInitialized(),d.isFiltered());else{const w=ke(i),N=d.getNode().getImmediateChild(v);let U;if(fe(w))U=r;else{const B=y.getCompleteChild(v);B!=null?zh(w)===".priority"&&B.getChild(Hv(w)).isEmpty()?U=B:U=B.updateChild(w,r):U=J.EMPTY_NODE}if(N.equals(U))m=e;else{const B=s.filter.updateChild(d.getNode(),v,U,w,y,h);m=Nr(e,B,d.isFullyInitialized(),s.filter.filtersNodes())}}}return m}function dy(s,e){return s.eventCache.isCompleteForChild(e)}function FA(s,e,i,r,o,u,h){let d=e;return r.foreach((m,p)=>{const y=He(i,m);dy(e,ce(y))&&(d=vh(s,d,y,p,o,u,h))}),r.foreach((m,p)=>{const y=He(i,m);dy(e,ce(y))||(d=vh(s,d,y,p,o,u,h))}),d}function my(s,e,i){return i.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function Sh(s,e,i,r,o,u,h,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,p;fe(i)?p=r:p=new Ue(null).setTree(i,r);const y=e.serverCache.getNode();return p.children.inorderTraversal((v,w)=>{if(y.hasChild(v)){const N=e.serverCache.getNode().getImmediateChild(v),U=my(s,N,w);m=Ho(s,m,new Ae(v),U,o,u,h,d)}}),p.children.inorderTraversal((v,w)=>{const N=!e.serverCache.isCompleteForChild(v)&&w.value===null;if(!y.hasChild(v)&&!N){const U=e.serverCache.getNode().getImmediateChild(v),B=my(s,U,w);m=Ho(s,m,new Ae(v),B,o,u,h,d)}}),m}function QA(s,e,i,r,o,u,h){if(zo(o,i)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(r.value!=null){if(fe(i)&&m.isFullyInitialized()||m.isCompleteForPath(i))return Ho(s,e,i,m.getNode().getChild(i),o,u,d,h);if(fe(i)){let p=new Ue(null);return m.getNode().forEachChild(na,(y,v)=>{p=p.set(new Ae(y),v)}),Sh(s,e,i,p,o,u,d,h)}else return e}else{let p=new Ue(null);return r.foreach((y,v)=>{const w=He(i,y);m.isCompleteForPath(w)&&(p=p.set(y,m.getNode().getChild(w)))}),Sh(s,e,i,p,o,u,d,h)}}function KA(s,e,i,r,o){const u=e.serverCache,h=Kv(e,u.getNode(),u.isFullyInitialized()||fe(i),u.isFiltered());return t0(s,h,i,r,e0,o)}function XA(s,e,i,r,o,u){let h;if(zo(r,i)!=null)return e;{const d=new $h(r,e,o),m=e.eventCache.getNode();let p;if(fe(i)||ce(i)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Po(r,rs(e));else{const v=e.serverCache.getNode();j(v instanceof J,"serverChildren would be complete if leaf node"),y=Kh(r,v)}y=y,p=s.filter.updateFullNode(m,y,u)}else{const y=ce(i);let v=Xh(r,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=m.getImmediateChild(y)),v!=null?p=s.filter.updateChild(m,y,v,ke(i),d,u):e.eventCache.getNode().hasChild(y)?p=s.filter.updateChild(m,y,J.EMPTY_NODE,ke(i),d,u):p=m,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Po(r,rs(e)),h.isLeafNode()&&(p=s.filter.updateFullNode(p,h,u)))}return h=e.serverCache.isFullyInitialized()||zo(r,be())!=null,Nr(e,p,h,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,i){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new qh(r.getIndex()),u=mA(r);this.processor_=GA(u);const h=i.serverCache,d=i.eventCache,m=o.updateFullNode(J.EMPTY_NODE,h.getNode(),null),p=u.updateFullNode(J.EMPTY_NODE,d.getNode(),null),y=new Oi(m,h.isFullyInitialized(),o.filtersNodes()),v=new Oi(p,d.isFullyInitialized(),u.filtersNodes());this.viewCache_=ic(v,y),this.eventGenerator_=new bA(this.query_)}get query(){return this.query_}}function WA(s){return s.viewCache_.serverCache.getNode()}function ZA(s){return jo(s.viewCache_)}function JA(s,e){const i=rs(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!fe(e)&&!i.getImmediateChild(ce(e)).isEmpty())?i.getChild(e):null}function py(s){return s.eventRegistrations_.length===0}function eR(s,e){s.eventRegistrations_.push(e)}function gy(s,e,i){const r=[];if(i){j(e==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(u=>{const h=u.createCancelEvent(i,o);h&&r.push(h)})}if(e){let o=[];for(let u=0;u<s.eventRegistrations_.length;++u){const h=s.eventRegistrations_[u];if(!h.matches(e))o.push(h);else if(e.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(u+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return r}function _y(s,e,i,r){e.type===rn.MERGE&&e.source.queryId!==null&&(j(rs(s.viewCache_),"We should always have a full cache before handling merges"),j(jo(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=VA(s.processor_,o,e,i,r);return qA(s.processor_,u.viewCache),j(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,n0(s,u.changes,u.viewCache.eventCache.getNode(),null)}function tR(s,e){const i=s.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Be,(u,h)=>{r.push(ua(u,h))}),i.isFullyInitialized()&&r.push(Qv(i.getNode())),n0(s,r,i.getNode(),e)}function n0(s,e,i,r){const o=r?[r]:s.eventRegistrations_;return EA(s.eventGenerator_,e,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;class i0{constructor(){this.views=new Map}}function nR(s){j(!Bo,"__referenceConstructor has already been defined"),Bo=s}function iR(){return j(Bo,"Reference.ts has not been loaded"),Bo}function sR(s){return s.views.size===0}function Wh(s,e,i,r){const o=e.source.queryId;if(o!==null){const u=s.views.get(o);return j(u!=null,"SyncTree gave us an op for an invalid query."),_y(u,e,i,r)}else{let u=[];for(const h of s.views.values())u=u.concat(_y(h,e,i,r));return u}}function s0(s,e,i,r,o){const u=e._queryIdentifier,h=s.views.get(u);if(!h){let d=Po(i,o?r:null),m=!1;d?m=!0:r instanceof J?(d=Kh(i,r),m=!1):(d=J.EMPTY_NODE,m=!1);const p=ic(new Oi(d,m,!1),new Oi(r,o,!1));return new $A(e,p)}return h}function aR(s,e,i,r,o,u){const h=s0(s,e,r,o,u);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,h),eR(h,i),tR(h,i)}function rR(s,e,i,r){const o=e._queryIdentifier,u=[];let h=[];const d=Di(s);if(o==="default")for(const[m,p]of s.views.entries())h=h.concat(gy(p,i,r)),py(p)&&(s.views.delete(m),p.query._queryParams.loadsAllData()||u.push(p.query));else{const m=s.views.get(o);m&&(h=h.concat(gy(m,i,r)),py(m)&&(s.views.delete(o),m.query._queryParams.loadsAllData()||u.push(m.query)))}return d&&!Di(s)&&u.push(new(iR())(e._repo,e._path)),{removed:u,events:h}}function a0(s){const e=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||e.push(i);return e}function Ri(s,e){let i=null;for(const r of s.views.values())i=i||JA(r,e);return i}function r0(s,e){if(e._queryParams.loadsAllData())return ac(s);{const r=e._queryIdentifier;return s.views.get(r)}}function l0(s,e){return r0(s,e)!=null}function Di(s){return ac(s)!=null}function ac(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;function lR(s){j(!Go,"__referenceConstructor has already been defined"),Go=s}function oR(){return j(Go,"Reference.ts has not been loaded"),Go}let cR=1;class yy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=PA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o0(s,e,i,r,o){return AA(s.pendingWriteTree_,e,i,r,o),o?Sa(s,new as(Yh(),e,i)):[]}function uR(s,e,i,r){RA(s.pendingWriteTree_,e,i,r);const o=Ue.fromObject(i);return Sa(s,new fa(Yh(),e,o))}function Ti(s,e,i=!1){const r=NA(s.pendingWriteTree_,e);if(IA(s.pendingWriteTree_,e)){let u=new Ue(null);return r.snap!=null?u=u.set(be(),!0):lt(r.children,h=>{u=u.set(new Ae(h),!0)}),Sa(s,new Uo(r.path,u,i))}else return[]}function Xr(s,e,i){return Sa(s,new as(Fh(),e,i))}function fR(s,e,i){const r=Ue.fromObject(i);return Sa(s,new fa(Fh(),e,r))}function hR(s,e){return Sa(s,new Br(Fh(),e))}function dR(s,e,i){const r=Jh(s,i);if(r){const o=ed(r),u=o.path,h=o.queryId,d=gt(u,e),m=new Br(Qh(h),d);return td(s,u,m)}else return[]}function qo(s,e,i,r,o=!1){const u=e._path,h=s.syncPointTree_.get(u);let d=[];if(h&&(e._queryIdentifier==="default"||l0(h,e))){const m=rR(h,e,i,r);sR(h)&&(s.syncPointTree_=s.syncPointTree_.remove(u));const p=m.removed;if(d=m.events,!o){const y=p.findIndex(w=>w._queryParams.loadsAllData())!==-1,v=s.syncPointTree_.findOnPath(u,(w,N)=>Di(N));if(y&&!v){const w=s.syncPointTree_.subtree(u);if(!w.isEmpty()){const N=gR(w);for(let U=0;U<N.length;++U){const B=N[U],V=B.query,ae=h0(s,B);s.listenProvider_.startListening(Or(V),Gr(s,V),ae.hashFn,ae.onComplete)}}}!v&&p.length>0&&!r&&(y?s.listenProvider_.stopListening(Or(e),null):p.forEach(w=>{const N=s.queryToTagMap.get(rc(w));s.listenProvider_.stopListening(Or(w),N)}))}_R(s,p)}return d}function c0(s,e,i,r){const o=Jh(s,r);if(o!=null){const u=ed(o),h=u.path,d=u.queryId,m=gt(h,e),p=new as(Qh(d),m,i);return td(s,h,p)}else return[]}function mR(s,e,i,r){const o=Jh(s,r);if(o){const u=ed(o),h=u.path,d=u.queryId,m=gt(h,e),p=Ue.fromObject(i),y=new fa(Qh(d),m,p);return td(s,h,y)}else return[]}function bh(s,e,i,r=!1){const o=e._path;let u=null,h=!1;s.syncPointTree_.foreachOnPath(o,(w,N)=>{const U=gt(w,o);u=u||Ri(N,U),h=h||Di(N)});let d=s.syncPointTree_.get(o);d?(h=h||Di(d),u=u||Ri(d,be())):(d=new i0,s.syncPointTree_=s.syncPointTree_.set(o,d));let m;u!=null?m=!0:(m=!1,u=J.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((N,U)=>{const B=Ri(U,be());B&&(u=u.updateImmediateChild(N,B))}));const p=l0(d,e);if(!p&&!e._queryParams.loadsAllData()){const w=rc(e);j(!s.queryToTagMap.has(w),"View does not exist, but we have a tag");const N=yR();s.queryToTagMap.set(w,N),s.tagToQueryMap.set(N,w)}const y=sc(s.pendingWriteTree_,o);let v=aR(d,e,i,y,u,m);if(!p&&!h&&!r){const w=r0(d,e);v=v.concat(vR(s,e,w))}return v}function Zh(s,e,i){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(e,(h,d)=>{const m=gt(h,e),p=Ri(d,m);if(p)return p});return Wv(o,e,u,i,!0)}function pR(s,e){const i=e._path;let r=null;s.syncPointTree_.foreachOnPath(i,(p,y)=>{const v=gt(p,i);r=r||Ri(y,v)});let o=s.syncPointTree_.get(i);o?r=r||Ri(o,be()):(o=new i0,s.syncPointTree_=s.syncPointTree_.set(i,o));const u=r!=null,h=u?new Oi(r,!0,!1):null,d=sc(s.pendingWriteTree_,e._path),m=s0(o,e,d,u?h.getNode():J.EMPTY_NODE,u);return ZA(m)}function Sa(s,e){return u0(e,s.syncPointTree_,null,sc(s.pendingWriteTree_,be()))}function u0(s,e,i,r){if(fe(s.path))return f0(s,e,i,r);{const o=e.get(be());i==null&&o!=null&&(i=Ri(o,be()));let u=[];const h=ce(s.path),d=s.operationForChild(h),m=e.children.get(h);if(m&&d){const p=i?i.getImmediateChild(h):null,y=Zv(r,h);u=u.concat(u0(d,m,p,y))}return o&&(u=u.concat(Wh(o,s,r,i))),u}}function f0(s,e,i,r){const o=e.get(be());i==null&&o!=null&&(i=Ri(o,be()));let u=[];return e.children.inorderTraversal((h,d)=>{const m=i?i.getImmediateChild(h):null,p=Zv(r,h),y=s.operationForChild(h);y&&(u=u.concat(f0(y,d,m,p)))}),o&&(u=u.concat(Wh(o,s,r,i))),u}function h0(s,e){const i=e.query,r=Gr(s,i);return{hashFn:()=>(WA(e)||J.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?dR(s,i._path,r):hR(s,i._path);{const u=hC(o,i);return qo(s,i,null,u)}}}}function Gr(s,e){const i=rc(e);return s.queryToTagMap.get(i)}function rc(s){return s._path.toString()+"$"+s._queryIdentifier}function Jh(s,e){return s.tagToQueryMap.get(e)}function ed(s){const e=s.indexOf("$");return j(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Ae(s.substr(0,e))}}function td(s,e,i){const r=s.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const o=sc(s.pendingWriteTree_,e);return Wh(r,i,o,null)}function gR(s){return s.fold((e,i,r)=>{if(i&&Di(i))return[ac(i)];{let o=[];return i&&(o=a0(i)),lt(r,(u,h)=>{o=o.concat(h)}),o}})}function Or(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(oR())(s._repo,s._path):s}function _R(s,e){for(let i=0;i<e.length;++i){const r=e[i];if(!r._queryParams.loadsAllData()){const o=rc(r),u=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(u)}}}function yR(){return cR++}function vR(s,e,i){const r=e._path,o=Gr(s,e),u=h0(s,i),h=s.listenProvider_.startListening(Or(e),o,u.hashFn,u.onComplete),d=s.syncPointTree_.subtree(r);if(o)j(!Di(d.value),"If we're adding a query, it shouldn't be shadowed");else{const m=d.fold((p,y,v)=>{if(!fe(p)&&y&&Di(y))return[ac(y).query];{let w=[];return y&&(w=w.concat(a0(y).map(N=>N.query))),lt(v,(N,U)=>{w=w.concat(U)}),w}});for(let p=0;p<m.length;++p){const y=m[p];s.listenProvider_.stopListening(Or(y),Gr(s,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new nd(i)}node(){return this.node_}}class id{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=He(this.path_,e);return new id(this.syncTree_,i)}node(){return Zh(this.syncTree_,this.path_)}}const SR=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},vy=function(s,e,i){if(!s||typeof s!="object")return s;if(j(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return bR(s[".sv"],e,i);if(typeof s[".sv"]=="object")return ER(s[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},bR=function(s,e,i){switch(s){case"timestamp":return i.timestamp;default:j(!1,"Unexpected server value: "+s)}},ER=function(s,e,i){s.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const o=e.node();if(j(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},d0=function(s,e,i,r){return sd(e,new id(i,s),r)},m0=function(s,e,i){return sd(s,new nd(e),i)};function sd(s,e,i){const r=s.getPriority().val(),o=vy(r,e.getImmediateChild(".priority"),i);let u;if(s.isLeafNode()){const h=s,d=vy(h.getValue(),e,i);return d!==h.getValue()||o!==h.getPriority().val()?new st(d,Ye(o)):s}else{const h=s;return u=h,o!==h.getPriority().val()&&(u=u.updatePriority(new st(o))),h.forEachChild(Be,(d,m)=>{const p=sd(m,e.getImmediateChild(d),i);p!==m&&(u=u.updateImmediateChild(d,p))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e="",i=null,r={children:{},childCount:0}){this.name=e,this.parent=i,this.node=r}}function rd(s,e){let i=e instanceof Ae?e:new Ae(e),r=s,o=ce(i);for(;o!==null;){const u=la(r.node.children,o)||{children:{},childCount:0};r=new ad(o,r,u),i=ke(i),o=ce(i)}return r}function ba(s){return s.node.value}function p0(s,e){s.node.value=e,Eh(s)}function g0(s){return s.node.childCount>0}function TR(s){return ba(s)===void 0&&!g0(s)}function lc(s,e){lt(s.node.children,(i,r)=>{e(new ad(i,s,r))})}function _0(s,e,i,r){i&&e(s),lc(s,o=>{_0(o,e,!0)})}function wR(s,e,i){let r=s.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $r(s){return new Ae(s.parent===null?s.name:$r(s.parent)+"/"+s.name)}function Eh(s){s.parent!==null&&CR(s.parent,s.name,s)}function CR(s,e,i){const r=TR(i),o=En(s.node.children,e);r&&o?(delete s.node.children[e],s.node.childCount--,Eh(s)):!r&&!o&&(s.node.children[e]=i.node,s.node.childCount++,Eh(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=/[\[\].#$\/\u0000-\u001F\u007F]/,RR=/[\[\].#$\u0000-\u001F\u007F]/,Zf=10*1024*1024,ld=function(s){return typeof s=="string"&&s.length!==0&&!AR.test(s)},y0=function(s){return typeof s=="string"&&s.length!==0&&!RR.test(s)},NR=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),y0(s)},v0=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!tc(s)||s&&typeof s=="object"&&En(s,".sv")},Vo=function(s,e,i,r){r&&e===void 0||oc(oa(s,"value"),e,i)},oc=function(s,e,i){const r=i instanceof Ae?new FC(i,s):i;if(e===void 0)throw new Error(s+"contains undefined "+Zi(r));if(typeof e=="function")throw new Error(s+"contains a function "+Zi(r)+" with contents = "+e.toString());if(tc(e))throw new Error(s+"contains "+e.toString()+" "+Zi(r));if(typeof e=="string"&&e.length>Zf/3&&Jo(e)>Zf)throw new Error(s+"contains a string greater than "+Zf+" utf8 bytes "+Zi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(lt(e,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!ld(h)))throw new Error(s+" contains an invalid key ("+h+") "+Zi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);QC(r,h),oc(s,d,r),KC(r)}),o&&u)throw new Error(s+' contains ".value" child '+Zi(r)+" in addition to actual children.")}},IR=function(s,e){let i,r;for(i=0;i<e.length;i++){r=e[i];const u=jr(r);for(let h=0;h<u.length;h++)if(!(u[h]===".priority"&&h===u.length-1)){if(!ld(u[h]))throw new Error(s+"contains an invalid key ("+u[h]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(YC);let o=null;for(i=0;i<e.length;i++){if(r=e[i],o!==null&&Kt(o,r))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},S0=function(s,e,i,r){const o=oa(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const u=[];lt(e,(h,d)=>{const m=new Ae(h);if(oc(o,d,He(i,m)),zh(m)===".priority"&&!v0(d))throw new Error(o+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(m)}),IR(o,u)},OR=function(s,e,i){if(tc(e))throw new Error(oa(s,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!v0(e))throw new Error(oa(s,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},b0=function(s,e,i,r){if(!y0(i))throw new Error(oa(s,e)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},DR=function(s,e,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),b0(s,e,i)},es=function(s,e){if(ce(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},xR=function(s,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ld(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!NR(i))throw new Error(oa(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cc(s,e){let i=null;for(let r=0;r<e.length;r++){const o=e[r],u=o.getPath();i!==null&&!Hh(u,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:u}),i.events.push(o)}i&&s.eventLists_.push(i)}function E0(s,e,i){cc(s,i),T0(s,r=>Hh(r,e))}function $t(s,e,i){cc(s,i),T0(s,r=>Kt(r,e)||Kt(e,r))}function T0(s,e){s.recursionDepth_++;let i=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const u=o.path;e(u)?(kR(s.eventLists_[r]),s.eventLists_[r]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function kR(s){for(let e=0;e<s.events.length;e++){const i=s.events[e];if(i!==null){s.events[e]=null;const r=i.getEventRunner();Ar&&rt("event: "+i.toString()),ya(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="repo_interrupt",UR=25;class jR{constructor(e,i,r,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lo(),this.transactionQueueTree_=new ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PR(s,e,i){if(s.stats_=jh(s.repoInfo_),s.forceRestClient_||gC())s.server_=new ko(s.repoInfo_,(r,o,u,h)=>{Sy(s,r,o,u,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>by(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Gn(s.repoInfo_,e,(r,o,u,h)=>{Sy(s,r,o,u,h)},r=>{by(s,r)},r=>{zR(s,r)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=bC(s.repoInfo_,()=>new SA(s.stats_,s.server_)),s.infoData_=new pA,s.infoSyncTree_=new yy({startListening:(r,o,u,h)=>{let d=[];const m=s.infoData_.getNode(r._path);return m.isEmpty()||(d=Xr(s.infoSyncTree_,r._path,m),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),od(s,"connected",!1),s.serverSyncTree_=new yy({startListening:(r,o,u,h)=>(s.server_.listen(r,u,o,(d,m)=>{const p=h(d,m);$t(s.eventQueue_,r._path,p)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function w0(s){const i=s.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function uc(s){return SR({timestamp:w0(s)})}function Sy(s,e,i,r,o){s.dataUpdateCount++;const u=new Ae(e);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,i):i;let h=[];if(o)if(r){const m=Io(i,p=>Ye(p));h=mR(s.serverSyncTree_,u,m,o)}else{const m=Ye(i);h=c0(s.serverSyncTree_,u,m,o)}else if(r){const m=Io(i,p=>Ye(p));h=fR(s.serverSyncTree_,u,m)}else{const m=Ye(i);h=Xr(s.serverSyncTree_,u,m)}let d=u;h.length>0&&(d=da(s,u)),$t(s.eventQueue_,d,h)}function by(s,e){od(s,"connected",e),e===!1&&qR(s)}function zR(s,e){lt(e,(i,r)=>{od(s,i,r)})}function od(s,e,i){const r=new Ae("/.info/"+e),o=Ye(i);s.infoData_.updateSnapshot(r,o);const u=Xr(s.infoSyncTree_,r,o);$t(s.eventQueue_,r,u)}function cd(s){return s.nextWriteId_++}function HR(s,e,i){const r=pR(s.serverSyncTree_,e);return r!=null?Promise.resolve(r):s.server_.get(e).then(o=>{const u=Ye(o).withIndex(e._queryParams.getIndex());bh(s.serverSyncTree_,e,i,!0);let h;if(e._queryParams.loadsAllData())h=Xr(s.serverSyncTree_,e._path,u);else{const d=Gr(s.serverSyncTree_,e);h=c0(s.serverSyncTree_,e._path,u,d)}return $t(s.eventQueue_,e._path,h),qo(s.serverSyncTree_,e,i,null,!0),u},o=>(Wr(s,"get for query "+Je(e)+" failed: "+o),Promise.reject(new Error(o))))}function BR(s,e,i,r,o){Wr(s,"set",{path:e.toString(),value:i,priority:r});const u=uc(s),h=Ye(i,r),d=Zh(s.serverSyncTree_,e),m=m0(h,d,u),p=cd(s),y=o0(s.serverSyncTree_,e,m,p,!0);cc(s.eventQueue_,y),s.server_.put(e.toString(),h.val(!0),(w,N)=>{const U=w==="ok";U||_t("set at "+e+" failed: "+w);const B=Ti(s.serverSyncTree_,p,!U);$t(s.eventQueue_,e,B),xi(s,o,w,N)});const v=fd(s,e);da(s,v),$t(s.eventQueue_,v,[])}function GR(s,e,i,r){Wr(s,"update",{path:e.toString(),value:i});let o=!0;const u=uc(s),h={};if(lt(i,(d,m)=>{o=!1,h[d]=d0(He(e,d),Ye(m),s.serverSyncTree_,u)}),o)rt("update() called with empty data.  Don't do anything."),xi(s,r,"ok",void 0);else{const d=cd(s),m=uR(s.serverSyncTree_,e,h,d);cc(s.eventQueue_,m),s.server_.merge(e.toString(),i,(p,y)=>{const v=p==="ok";v||_t("update at "+e+" failed: "+p);const w=Ti(s.serverSyncTree_,d,!v),N=w.length>0?da(s,e):e;$t(s.eventQueue_,N,w),xi(s,r,p,y)}),lt(i,p=>{const y=fd(s,He(e,p));da(s,y)}),$t(s.eventQueue_,e,[])}}function qR(s){Wr(s,"onDisconnectEvents");const e=uc(s),i=Lo();ph(s.onDisconnect_,be(),(o,u)=>{const h=d0(o,u,s.serverSyncTree_,e);va(i,o,h)});let r=[];ph(i,be(),(o,u)=>{r=r.concat(Xr(s.serverSyncTree_,o,u));const h=fd(s,o);da(s,h)}),s.onDisconnect_=Lo(),$t(s.eventQueue_,be(),r)}function VR(s,e,i){s.server_.onDisconnectCancel(e.toString(),(r,o)=>{r==="ok"&&mh(s.onDisconnect_,e),xi(s,i,r,o)})}function Ey(s,e,i,r){const o=Ye(i);s.server_.onDisconnectPut(e.toString(),o.val(!0),(u,h)=>{u==="ok"&&va(s.onDisconnect_,e,o),xi(s,r,u,h)})}function YR(s,e,i,r,o){const u=Ye(i,r);s.server_.onDisconnectPut(e.toString(),u.val(!0),(h,d)=>{h==="ok"&&va(s.onDisconnect_,e,u),xi(s,o,h,d)})}function FR(s,e,i,r){if(No(i)){rt("onDisconnect().update() called with empty data.  Don't do anything."),xi(s,r,"ok",void 0);return}s.server_.onDisconnectMerge(e.toString(),i,(o,u)=>{o==="ok"&&lt(i,(h,d)=>{const m=Ye(d);va(s.onDisconnect_,He(e,h),m)}),xi(s,r,o,u)})}function QR(s,e,i){let r;ce(e._path)===".info"?r=bh(s.infoSyncTree_,e,i):r=bh(s.serverSyncTree_,e,i),E0(s.eventQueue_,e._path,r)}function KR(s,e,i){let r;ce(e._path)===".info"?r=qo(s.infoSyncTree_,e,i):r=qo(s.serverSyncTree_,e,i),E0(s.eventQueue_,e._path,r)}function XR(s){s.persistentConnection_&&s.persistentConnection_.interrupt(LR)}function Wr(s,...e){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),rt(i,...e)}function xi(s,e,i,r){e&&ya(()=>{if(i==="ok")e(null);else{const o=(i||"error").toUpperCase();let u=o;r&&(u+=": "+r);const h=new Error(u);h.code=o,e(h)}})}function C0(s,e,i){return Zh(s.serverSyncTree_,e,i)||J.EMPTY_NODE}function ud(s,e=s.transactionQueueTree_){if(e||fc(s,e),ba(e)){const i=R0(s,e);j(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&$R(s,$r(e),i)}else g0(e)&&lc(e,i=>{ud(s,i)})}function $R(s,e,i){const r=i.map(p=>p.currentWriteId),o=C0(s,e,r);let u=o;const h=o.hash();for(let p=0;p<i.length;p++){const y=i[p];j(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=gt(e,y.path);u=u.updateChild(v,y.currentOutputSnapshotRaw)}const d=u.val(!0),m=e;s.server_.put(m.toString(),d,p=>{Wr(s,"transaction put response",{path:m.toString(),status:p});let y=[];if(p==="ok"){const v=[];for(let w=0;w<i.length;w++)i[w].status=2,y=y.concat(Ti(s.serverSyncTree_,i[w].currentWriteId)),i[w].onComplete&&v.push(()=>i[w].onComplete(null,!0,i[w].currentOutputSnapshotResolved)),i[w].unwatcher();fc(s,rd(s.transactionQueueTree_,e)),ud(s,s.transactionQueueTree_),$t(s.eventQueue_,e,y);for(let w=0;w<v.length;w++)ya(v[w])}else{if(p==="datastale")for(let v=0;v<i.length;v++)i[v].status===3?i[v].status=4:i[v].status=0;else{_t("transaction at "+m.toString()+" failed: "+p);for(let v=0;v<i.length;v++)i[v].status=4,i[v].abortReason=p}da(s,e)}},h)}function da(s,e){const i=A0(s,e),r=$r(i),o=R0(s,i);return WR(s,o,r),r}function WR(s,e,i){if(e.length===0)return;const r=[];let o=[];const h=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],p=gt(i,m.path);let y=!1,v;if(j(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,v=m.abortReason,o=o.concat(Ti(s.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=UR)y=!0,v="maxretry",o=o.concat(Ti(s.serverSyncTree_,m.currentWriteId,!0));else{const w=C0(s,m.path,h);m.currentInputSnapshot=w;const N=e[d].update(w.val());if(N!==void 0){oc("transaction failed: Data returned ",N,m.path);let U=Ye(N);typeof N=="object"&&N!=null&&En(N,".priority")||(U=U.updatePriority(w.getPriority()));const V=m.currentWriteId,ae=uc(s),le=m0(U,w,ae);m.currentOutputSnapshotRaw=U,m.currentOutputSnapshotResolved=le,m.currentWriteId=cd(s),h.splice(h.indexOf(V),1),o=o.concat(o0(s.serverSyncTree_,m.path,le,m.currentWriteId,m.applyLocally)),o=o.concat(Ti(s.serverSyncTree_,V,!0))}else y=!0,v="nodata",o=o.concat(Ti(s.serverSyncTree_,m.currentWriteId,!0))}$t(s.eventQueue_,i,o),o=[],y&&(e[d].status=2,function(w){setTimeout(w,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(v==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(v),!1,null))))}fc(s,s.transactionQueueTree_);for(let d=0;d<r.length;d++)ya(r[d]);ud(s,s.transactionQueueTree_)}function A0(s,e){let i,r=s.transactionQueueTree_;for(i=ce(e);i!==null&&ba(r)===void 0;)r=rd(r,i),e=ke(e),i=ce(e);return r}function R0(s,e){const i=[];return N0(s,e,i),i.sort((r,o)=>r.order-o.order),i}function N0(s,e,i){const r=ba(e);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);lc(e,o=>{N0(s,o,i)})}function fc(s,e){const i=ba(e);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,p0(e,i.length>0?i:void 0)}lc(e,r=>{fc(s,r)})}function fd(s,e){const i=$r(A0(s,e)),r=rd(s.transactionQueueTree_,e);return wR(r,o=>{Jf(s,o)}),Jf(s,r),_0(r,o=>{Jf(s,o)}),i}function Jf(s,e){const i=ba(e);if(i){const r=[];let o=[],u=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(j(u===h-1,"All SENT items should be at beginning of queue."),u=h,i[h].status=3,i[h].abortReason="set"):(j(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Ti(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?p0(e,void 0):i.length=u+1,$t(s.eventQueue_,$r(e),o);for(let h=0;h<r.length;h++)ya(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(s){let e="";const i=s.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function JR(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_t(`Invalid query segment '${i}' in query '${s}'`)}return e}const Ty=function(s,e){const i=eN(s),r=i.namespace;i.domain==="firebase.com"&&Vn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&Vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||lC();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new Dv(i.host,i.secure,r,o,e,"",r!==i.subdomain),path:new Ae(i.pathString)}},eN=function(s){let e="",i="",r="",o="",u="",h=!0,d="https",m=443;if(typeof s=="string"){let p=s.indexOf("//");p>=0&&(d=s.substring(0,p-1),s=s.substring(p+2));let y=s.indexOf("/");y===-1&&(y=s.length);let v=s.indexOf("?");v===-1&&(v=s.length),e=s.substring(0,Math.min(y,v)),y<v&&(o=ZR(s.substring(y,v)));const w=JR(s.substring(Math.min(s.length,v)));p=e.indexOf(":"),p>=0?(h=d==="https"||d==="wss",m=parseInt(e.substring(p+1),10)):p=e.length;const N=e.slice(0,p);if(N.toLowerCase()==="localhost")i="localhost";else if(N.split(".").length<=2)i=N;else{const U=e.indexOf(".");r=e.substring(0,U).toLowerCase(),i=e.substring(U+1),u=r}"ns"in w&&(u=w.ns)}return{host:e,port:m,domain:i,subdomain:r,secure:h,scheme:d,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tN=function(){let s=0;const e=[];return function(i){const r=i===s;s=i;let o;const u=new Array(8);for(o=7;o>=0;o--)u[o]=wy.charAt(i%64),i=Math.floor(i/64);j(i===0,"Cannot push at time == 0");let h=u.join("");if(r){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=wy.charAt(e[o]);return j(h.length===20,"nextPushId: Length should be 20."),h}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,i,r,o){this.eventType=e,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class iN{constructor(e,i,r){this.eventRegistration=e,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,i){this.snapshotCallback=e,this.cancelCallback=i}onValue(e,i){this.snapshotCallback.call(null,e,i)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,i){this._repo=e,this._path=i}cancel(){const e=new _n;return VR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){es("OnDisconnect.remove",this._path);const e=new _n;return Ey(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){es("OnDisconnect.set",this._path),Vo("OnDisconnect.set",e,this._path,!1);const i=new _n;return Ey(this._repo,this._path,e,i.wrapCallback(()=>{})),i.promise}setWithPriority(e,i){es("OnDisconnect.setWithPriority",this._path),Vo("OnDisconnect.setWithPriority",e,this._path,!1),OR("OnDisconnect.setWithPriority",i);const r=new _n;return YR(this._repo,this._path,e,i,r.wrapCallback(()=>{})),r.promise}update(e){es("OnDisconnect.update",this._path),S0("OnDisconnect.update",e,this._path);const i=new _n;return FR(this._repo,this._path,e,i.wrapCallback(()=>{})),i.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,i,r,o){this._repo=e,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return fe(this._path)?null:zh(this._path)}get ref(){return new Fn(this._repo,this._path)}get _queryIdentifier(){const e=oy(this._queryParams),i=Lh(e);return i==="{}"?"default":i}get _queryObject(){return oy(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof hd))return!1;const i=this._repo===e._repo,r=Hh(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+VC(this._path)}}class Fn extends hd{constructor(e,i){super(e,i,new Vh,!1)}get parent(){const e=Hv(this._path);return e===null?null:new Fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qr{constructor(e,i,r){this._node=e,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const i=new Ae(e),r=Vr(this.ref,e);return new qr(this._node.getChild(i),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new qr(o,Vr(this.ref,r),Be)))}hasChild(e){const i=new Ae(e);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pe(s,e){return s=ot(s),s._checkNotDeleted("ref"),e!==void 0?Vr(s._root,e):s._root}function Vr(s,e){return s=ot(s),ce(s._path)===null?DR("child","path",e):b0("child","path",e),new Fn(s._repo,He(s._path,e))}function Th(s){return s=ot(s),new sN(s._repo,s._path)}function Cy(s,e){s=ot(s),es("push",s._path),Vo("push",e,s._path,!0);const i=w0(s._repo),r=tN(i),o=Vr(s,r),u=Vr(s,r);let h;return h=Promise.resolve(u),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function Ay(s){return es("remove",s._path),Dr(s,null)}function Dr(s,e){s=ot(s),es("set",s._path),Vo("set",e,s._path,!1);const i=new _n;return BR(s._repo,s._path,e,null,i.wrapCallback(()=>{})),i.promise}function Ut(s,e){S0("update",e,s._path);const i=new _n;return GR(s._repo,s._path,e,i.wrapCallback(()=>{})),i.promise}function jt(s){s=ot(s);const e=new I0(()=>{}),i=new hc(e);return HR(s._repo,s,i).then(r=>new qr(r,new Fn(s._repo,s._path),s._queryParams.getIndex()))}class hc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,i){const r=i._queryParams.getIndex();return new nN("value",this,new qr(e.snapshotNode,new Fn(i._repo,i._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,i){return this.callbackContext.hasCancelCallback?new iN(this,e,i):null}matches(e){return e instanceof hc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function aN(s,e,i,r,o){const u=new I0(i,void 0),h=new hc(u);return QR(s._repo,s,h),()=>KR(s._repo,s,h)}function eh(s,e,i,r){return aN(s,"value",e)}nR(Fn);lR(Fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="FIREBASE_DATABASE_EMULATOR_HOST",wh={};let lN=!1;function oN(s,e,i,r){s.repoInfo_=new Dv(e,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(s.authTokenProvider_=r)}function cN(s,e,i,r,o){let u=r||s.options.databaseURL;u===void 0&&(s.options.projectId||Vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=Ty(u,o),d=h.repoInfo,m;typeof process<"u"&&V_&&(m=V_[rN]),m?(u=`http://${m}?ns=${d.namespace}`,h=Ty(u,o),d=h.repoInfo):h.repoInfo.secure;const p=new yC(s.name,s.options,e);xR("Invalid Firebase Database URL",h),fe(h.path)||Vn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=fN(d,s,p,new _C(s,i));return new hN(y,s)}function uN(s,e){const i=wh[e];(!i||i[s.key]!==s)&&Vn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),XR(s),delete i[s.key]}function fN(s,e,i,r){let o=wh[e.name];o||(o={},wh[e.name]=o);let u=o[s.toURLString()];return u&&Vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new jR(s,lN,i,r),o[s.toURLString()]=u,u}class hN{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fn(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vn("Cannot call "+e+" on a deleted database.")}}function O0(s=kh(),e){const i=fs(s,"database").getImmediate({identifier:e});if(!i._instanceStarted){const r=NT("database");r&&dN(i,...r)}return i}function dN(s,e,i,r={}){s=ot(s),s._checkNotDeleted("useEmulator");const o=`${e}:${i}`,u=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Ni(r,u.repoInfo_.emulatorOptions))return;Vn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(u.repoInfo_.nodeAdmin)r.mockUserToken&&Vn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new bo(bo.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:IT(r.mockUserToken,s.app.options.projectId);h=new bo(d)}oN(u,o,r,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(s){tC(_a),vn(new un("database",(e,{instanceIdentifier:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return cN(r,o,u,i)},"PUBLIC").setMultipleInstances(!0)),Xt(Y_,F_,s),Xt(Y_,F_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN={".sv":"timestamp"};function gN(){return pN}Gn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Gn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};mN();const _N=({currentStage:s,currentChallenge:e,players:i,currentPlayer:r,isGameStarter:o,startTime:u,onNextStage:h,updatePlayerStatus:d,database:m,roomId:p})=>{const[y,v]=K.useState(""),[w,N]=K.useState(null),[U,B]=K.useState(null),[V,ae]=K.useState(0),[le,ee]=K.useState("");K.useEffect(()=>{let G;return u&&!U&&(G=setInterval(()=>{ae(Date.now()-u)},100)),()=>{G&&clearTimeout(G)}},[u,U]);const ge=G=>{v(G.target.value),r&&d({input:G.target.value})};K.useEffect(()=>{v(""),N(null),B(null),(async()=>{try{const xe=pe(m,`rooms/${p}/challenges/stage${s}`),Ke=await jt(xe);if(Ke.exists()){const Ge=Ke.val();ee(Ge.answer)}}catch(xe){console.error("Error fetching challenge answer:",xe)}})()},[s,m,p]);const X=()=>{const G=pT(y,{answer:le},s);if(N(G),G){const xe=Date.now()-u;B(xe),console.log(`Player ${r.id} completed in ${xe}ms, updating status`),d({finishTime:xe,status:"completed"})}return G},ye=i.every(G=>G.status==="completed"||G.status==="disconnected"),Te=()=>[...i].filter(G=>G.finishTime!==null&&G.status!=="disconnected").sort((G,xe)=>G.finishTime-xe.finishTime),Re=G=>G?`${(G/1e3).toFixed(2)}s`:"--";return E.jsxs("div",{className:"gameplay-container",children:[E.jsx("div",{className:"section-header",children:E.jsxs("h2",{children:["Stage ",s]})}),E.jsxs("div",{className:"timer-display",children:[E.jsxs("div",{className:"timer",children:[(V/1e3).toFixed(1),"s"]}),r&&r.totalTime>0&&E.jsxs("div",{className:"cumulative-time",children:["Total time: ",Re(r.totalTime)]})]}),E.jsx(_T,{challenge:e,playerInput:y,inputCorrect:w,finishTime:U,onInputChange:ge,onSubmit:X,currentStage:s}),E.jsxs("div",{className:"players-status",children:[E.jsx("h3",{children:"Players Status:"}),E.jsx("ul",{className:"player-status-list",children:i.map(G=>E.jsx(yT,{player:G,isCurrentPlayer:r&&G.id===r.id},G.id))})]}),o&&ye&&E.jsx("div",{className:"next-stage-controls",children:E.jsx("button",{onClick:h,children:s<4?"Next Stage":"Finish Game"})}),U&&E.jsxs("div",{className:"stage-standings",children:[E.jsx("h3",{children:"Current Stage Standings:"}),E.jsx("ol",{className:"standings-list",children:Te().map((G,xe)=>E.jsxs("li",{className:r&&G.id===r.id?"current-player":"",children:[G.name,": ",Re(G.finishTime),xe===0&&" 🥇",xe===1&&" 🥈",xe===2&&" 🥉"]},G.id))})]})]})},yN=({gameState:s,players:e,stageResults:i,startTime:r,currentStage:o})=>{const[u,h]=K.useState(0),[d,m]=K.useState(!1),p=N=>N?`${(N/1e3).toFixed(2)}s`:"--";K.useEffect(()=>{let N;return r&&s==="playing"&&!d&&(N=setInterval(()=>{h(Date.now()-r)},100)),()=>{N&&clearInterval(N)}},[r,s,d]),K.useEffect(()=>{if(s==="playing"){const N=e.filter(B=>B.status!=="disconnected"),U=N.length>0&&N.every(B=>B.status==="completed");m(U)}else m(!1)},[e,s]),K.useEffect(()=>{s==="playing"&&(h(0),m(!1))},[o,s]);const y=()=>[...e].filter(N=>N.totalTime>0&&N.status!=="disconnected").sort((N,U)=>N.totalTime-U.totalTime),v=()=>[...e].filter(N=>N.finishTime!==null&&N.status!=="disconnected").sort((N,U)=>N.finishTime-U.finishTime),w=()=>!i||i.length===0?[]:[...i].sort((N,U)=>U.stage-N.stage).slice(0,3);return E.jsxs("div",{className:"results-container",children:[E.jsx("div",{className:"section-header",children:E.jsx("h2",{children:"Results"})}),(s==="playing"||s==="finished")&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"timer-display",children:[E.jsxs("h3",{children:["Stage ",o," ",s==="finished"?"(Final)":""]}),E.jsx("p",{children:d?`Stage Completed in ${p(u)}`:`Time: ${p(u)}`})]}),s==="playing"&&E.jsxs("div",{className:"player-times",children:[E.jsx("h3",{children:"Current Stage:"}),v().length>0?E.jsx("ul",{children:v().map((N,U)=>E.jsxs("li",{children:[E.jsxs("span",{children:[U===0?"🥇 ":"",U===1?"🥈 ":"",U===2?"🥉 ":"",N.name]}),E.jsx("span",{children:p(N.finishTime)})]},N.id))}):E.jsx("p",{children:"No players have finished yet"})]}),E.jsxs("div",{className:"player-times",children:[E.jsx("h3",{children:"Overall Standings:"}),y().length>0?E.jsx("ul",{children:y().map((N,U)=>E.jsxs("li",{children:[E.jsxs("span",{children:[U===0?"🥇 ":"",U===1?"🥈 ":"",N.name]}),E.jsx("span",{children:p(N.totalTime)})]},N.id))}):E.jsx("p",{children:"No overall results yet"})]})]}),w().length>0&&E.jsxs("div",{className:"previous-stages",children:[E.jsx("h3",{children:"Previous Stages:"}),w().map(N=>E.jsxs("div",{className:"stage-result",children:[E.jsxs("h4",{children:["Stage ",N.stage]}),E.jsx("ul",{children:N.results.filter(U=>U.finishTime).sort((U,B)=>U.finishTime-B.finishTime).slice(0,3).map((U,B)=>E.jsxs("li",{children:[B===0?"🥇 ":"",B===1?"🥈 ":"",B===2?"🥉 ":"",U.name,": ",p(U.finishTime)]},U.id))})]},N.stage))]}),s==="lobby"&&E.jsxs("div",{className:"game-rules",children:[E.jsx("h3",{children:"Game Rules:"}),E.jsxs("ul",{children:[E.jsx("li",{children:"4-10 Players"}),E.jsx("li",{children:"4 Stages"}),E.jsx("li",{children:"All players participate in all stages"}),E.jsx("li",{children:"Times are cumulative across all stages"}),E.jsx("li",{children:"Fastest two players win"})]}),E.jsxs("div",{className:"stage-descriptions",children:[E.jsx("h4",{children:"Stage Descriptions:"}),E.jsxs("p",{children:[E.jsx("strong",{children:"Stage 1:"})," Type a sentence exactly as shown"]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Stage 2:"})," Fill in missing vowels in a sentence"]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Stage 3:"})," Translate emoji symbols to words"]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Stage 4:"})," Type a sentence in reverse order"]})]})]})]})},vN=({seconds:s,onComplete:e})=>{const[i,r]=K.useState(s);return K.useEffect(()=>{r(s)},[s]),K.useEffect(()=>{if(i<=0){e();return}const o=setTimeout(()=>{r(i-1)},1e3);return console.log("Current count:",i),()=>clearTimeout(o)},[i,e]),E.jsx("div",{className:"countdown-overlay",children:E.jsxs("div",{className:"countdown",children:[E.jsx("h2",{children:"Starting in"}),E.jsx("div",{className:"countdown-number",children:i})]})})};class SN{constructor(){this.database=null,this.roomId=null,this.sessionId=this._getOrCreateSessionId(),this.currentPlayer=null,this.listeners={},this.callbacks={onPlayersChange:null,onGameStateChange:null,onEliminatedPlayersChange:null,onError:null},this.initialized=!1}init(e,i){return console.log(`[PlayerService] Initializing with room: ${i}`),this.database=e,this.roomId=i,this.initialized=!0,this}_getOrCreateSessionId(){const e=localStorage.getItem("typeRunnerSessionId");if(e)return e;const i=Math.random().toString(36).substring(2,15);return localStorage.setItem("typeRunnerSessionId",i),i}setCallbacks(e){this.callbacks={...this.callbacks,...e}}async joinRoom(e){if(!this.initialized)return console.error("[PlayerService] Not initialized"),this.callbacks.onError&&this.callbacks.onError("Service not initialized"),null;try{console.log(`[PlayerService] Joining room ${this.roomId} as ${e}`);const i=await this._findExistingPlayer();if(i)console.log(`[PlayerService] Found existing player: ${i.id}`),(i.name!==e||i.status==="disconnected")&&await this._updatePlayer(i.id,{name:e,status:"waiting",reconnected:Date.now()}),await this._setupDisconnectHandler(i.id),this.currentPlayer={...i,name:e,status:"waiting"};else{const r=await this._createPlayer(e);this.currentPlayer=r}return this._setupListeners(),this.currentPlayer}catch(i){return console.error("[PlayerService] Error joining room:",i),this.callbacks.onError&&this.callbacks.onError(`Failed to join room: ${i.message}`),null}}async _findExistingPlayer(){try{console.log(`[PlayerService] Checking for existing player with sessionId: ${this.sessionId}`);const e=pe(this.database,`rooms/${this.roomId}/players`),i=await jt(e);if(i.exists()){const r=i.val(),o=Object.entries(r).find(([u,h])=>h.sessionId===this.sessionId);if(o){const[u,h]=o;return console.log(`[PlayerService] Found existing player: ${u}`),{id:u,...h}}}return console.log("[PlayerService] No existing player found"),null}catch(e){return console.error("[PlayerService] Error finding existing player:",e),null}}async _createPlayer(e){try{const i=pe(this.database,`rooms/${this.roomId}`),r=await jt(i);let o=!1;if(!r.exists())throw console.error(`[PlayerService] Room ${this.roomId} does not exist`),new Error(`Room ${this.roomId} does not exist`);const u=r.val();(!u.players||Object.keys(u.players).length===0)&&(o=!0,console.log("[PlayerService] No players in room, making new player the game starter"));const h=pe(this.database,`rooms/${this.roomId}/players`),d=Cy(h),m=d.key,p={id:m,name:e,isGameStarter:o,status:"waiting",joined:Date.now(),input:"",finishTime:null,totalTime:0,stageCompletions:{},sessionId:this.sessionId};return console.log("[PlayerService] Creating new player:",p),await Dr(d,p),await this._setupDisconnectHandler(m),p}catch(i){throw console.error("[PlayerService] Error creating player:",i),i}}async _updatePlayer(e,i){try{const r=pe(this.database,`rooms/${this.roomId}/players/${e}`);return await Ut(r,i),!0}catch(r){return console.error("[PlayerService] Error updating player:",r),!1}}async _setupDisconnectHandler(e){try{console.log(`[PlayerService] Setting up disconnect handler for ${e}`);const i=pe(this.database,`rooms/${this.roomId}/players/${e}`);await Th(i).update({status:"disconnected",disconnectedAt:gN()}),console.log("[PlayerService] Disconnect handler set up successfully")}catch(i){console.error("[PlayerService] Error setting up disconnect handler:",i)}}_setupListeners(){console.log("[PlayerService] Setting up Firebase listeners"),this._cleanupListeners();const e=pe(this.database,`rooms/${this.roomId}/players`);this.listeners.players=eh(e,o=>{if(o.exists()){const u=o.val(),h=Object.entries(u).map(([d,m])=>({...m,id:d}));if(this.currentPlayer){const d=h.find(m=>m.id===this.currentPlayer.id);d&&(this.currentPlayer=d)}this.callbacks.onPlayersChange&&this.callbacks.onPlayersChange(h)}else this.callbacks.onPlayersChange&&this.callbacks.onPlayersChange([])});const i=pe(this.database,`rooms/${this.roomId}/state`);this.listeners.gameState=eh(i,o=>{o.exists()&&this.callbacks.onGameStateChange&&this.callbacks.onGameStateChange(o.val())});const r=pe(this.database,`rooms/${this.roomId}/stageResults`);this.listeners.stageResults=eh(r,o=>{o.exists()&&this.callbacks.onEliminatedPlayersChange?this.callbacks.onEliminatedPlayersChange(Object.values(o.val())):this.callbacks.onEliminatedPlayersChange&&this.callbacks.onEliminatedPlayersChange([])})}_cleanupListeners(){console.log("[PlayerService] Cleaning up listeners"),Object.values(this.listeners).forEach(e=>{e&&e()}),this.listeners={}}async updatePlayerStatus(e){if(!this.currentPlayer)return console.error("[PlayerService] No current player"),!1;try{if(console.log(`[PlayerService] Updating player ${this.currentPlayer.id} with data:`,e),e.finishTime!==void 0){const r=pe(this.database,`rooms/${this.roomId}/state`),o=await jt(r);if(o.exists()){const h=o.val().stage,d=pe(this.database,`rooms/${this.roomId}/players/${this.currentPlayer.id}`),m=await jt(d);if(m.exists()){const p=m.val(),y=p.stageCompletions||{};let v=p.totalTime||0;y[`stage${h}`]=e.finishTime,v+=e.finishTime,e.stageCompletions=y,e.totalTime=v}}}const i=pe(this.database,`rooms/${this.roomId}/players/${this.currentPlayer.id}`);return await Ut(i,e),!0}catch(i){return console.error("[PlayerService] Error updating player status:",i),this.callbacks.onError&&this.callbacks.onError(`Failed to update status: ${i.message}`),!1}}async becomeGameStarter(){if(!this.currentPlayer)return console.error("[PlayerService] No current player"),!1;try{const e=pe(this.database,`rooms/${this.roomId}/players`),i=await jt(e);if(i.exists()){const r=i.val(),o={};return Object.keys(r).forEach(u=>{o[`/rooms/${this.roomId}/players/${u}/isGameStarter`]=u===this.currentPlayer.id}),await Ut(pe(this.database),o),!0}return!1}catch(e){return console.error("[PlayerService] Error becoming game starter:",e),this.callbacks.onError&&this.callbacks.onError(`Failed to become game starter: ${e.message}`),!1}}async startGame(){if(!this.currentPlayer||!this.currentPlayer.isGameStarter)return console.error("[PlayerService] Only game starter can start game"),!1;try{const e=await mT();await Ut(pe(this.database,`rooms/${this.roomId}/challenges`),e),await Ut(pe(this.database,`rooms/${this.roomId}/state`),{status:"starting",countdown:3,startingAt:Date.now()});let i=3;const r=setInterval(async()=>{i--,await Ut(pe(this.database,`rooms/${this.roomId}/state`),{countdown:i}),i<=0&&(clearInterval(r),await Ut(pe(this.database,`rooms/${this.roomId}/state`),{status:"playing",stage:1,challenge:e.stage1.display,startTime:Date.now()}))},1e3);return!0}catch(e){return console.error("[PlayerService] Error starting game:",e),this.callbacks.onError&&this.callbacks.onError(`Failed to start game: ${e.message}`),!1}}async moveToNextStage(e,i){if(!this.currentPlayer||!this.currentPlayer.isGameStarter)return console.error("[PlayerService] Only game starter can move to next stage"),!1;try{const r=i.filter(u=>u.status!=="disconnected"),o=Cy(pe(this.database,`rooms/${this.roomId}/stageResults`));if(await Dr(o,{stage:e,completedAt:Date.now(),results:r.map(u=>({id:u.id,name:u.name,finishTime:u.finishTime||null,totalTime:u.totalTime||0}))}),e>=4){const u=[...r].filter(v=>v.totalTime>0).sort((v,w)=>v.totalTime-w.totalTime),h=r.filter(v=>v.totalTime>0).map(v=>v.totalTime),d=h.length?h.reduce((v,w)=>v+w,0)/h.length:0,m=u[0]||{name:"N/A"},p=u.length>0?u[u.length-1]:{name:"N/A"};await Ut(pe(this.database,`rooms/${this.roomId}/statistics`),{averageCompletionTime:d,fastestPlayer:m.name,slowestPlayer:p.name});const y=u.slice(0,Math.min(2,u.length)).map(v=>v.id);await Ut(pe(this.database,`rooms/${this.roomId}/state`),{status:"finished",winners:y,playerRankings:u.map(v=>({id:v.id,name:v.name,totalTime:v.totalTime})),endTime:Date.now()})}else{for(const w of r)w.status!=="disconnected"&&await this._updatePlayer(w.id,{status:"waiting",input:"",finishTime:null});const u=e+1,h=pe(this.database,`rooms/${this.roomId}/challenges`),d=await jt(h);if(!d.exists())throw new Error("Challenges not found!");const p=d.val()[`stage${u}`].display;await Ut(pe(this.database,`rooms/${this.roomId}/state`),{status:"starting",stage:u,countdown:3,startingAt:Date.now(),challenge:p});let y=3;const v=setInterval(async()=>{y--,await Ut(pe(this.database,`rooms/${this.roomId}/state`),{countdown:y}),y<=0&&(clearInterval(v),await Ut(pe(this.database,`rooms/${this.roomId}/state`),{status:"playing",startTime:Date.now()}))},1e3)}return!0}catch(r){return console.error("[PlayerService] Error moving to next stage:",r),this.callbacks.onError&&this.callbacks.onError(`Failed to move to next stage: ${r.message}`),!1}}async leaveRoom(){if(!this.currentPlayer)return console.log("[PlayerService] No current player to leave room"),!0;try{const e=pe(this.database,`rooms/${this.roomId}/state`),i=await jt(e),r=pe(this.database,`rooms/${this.roomId}/players/${this.currentPlayer.id}`);return await Th(r).cancel(),!i.exists()||i.val().status==="lobby"?await Dr(r,null):await Ut(r,{status:"disconnected",disconnectedAt:Date.now()}),this._cleanupListeners(),this.currentPlayer=null,!0}catch(e){return console.error("[PlayerService] Error leaving room:",e),!1}}getCurrentPlayer(){return this.currentPlayer}cleanup(){this.leaveRoom().then(()=>{this._cleanupListeners(),this.currentPlayer=null,this.initialized=!1})}}const nn=new SN,bN=(s,e,i)=>{const[r,o]=K.useState(!1),[u,h]=K.useState(null),[d,m]=K.useState([]),[p,y]=K.useState(null),[v,w]=K.useState({status:"lobby"}),[N,U]=K.useState([]),[B,V]=K.useState(!1);K.useEffect(()=>{if(u){const G=setTimeout(()=>h(null),5e3);return()=>clearTimeout(G)}},[u]),K.useEffect(()=>{if(!(!s||!e||B))return console.log("[usePlayerService] Initializing player service"),nn.init(s,e),nn.setCallbacks({onPlayersChange:m,onGameStateChange:w,onEliminatedPlayersChange:U,onError:h}),V(!0),()=>{console.log("[usePlayerService] Component unmounting, keeping service active")}},[s,e,B]);const ae=K.useCallback(async()=>{if(!(!i||!B))try{o(!0),console.log("[usePlayerService] Joining room as",i);const G=await nn.joinRoom(i);G?(console.log("[usePlayerService] Player joined successfully",G),y(G)):h("Failed to join room")}catch(G){console.error("[usePlayerService] Error joining room",G),h(`Error joining room: ${G.message}`)}finally{o(!1)}},[i,B]),le=K.useCallback(async()=>p||ae(),[p,ae]),ee=K.useCallback(async G=>nn.updatePlayerStatus(G),[]),ge=K.useCallback(async()=>{o(!0);try{return await nn.becomeGameStarter()}finally{o(!1)}},[]),X=K.useCallback(async()=>{o(!0);try{return await nn.startGame()}finally{o(!1)}},[]),ye=K.useCallback(async G=>{o(!0);try{return await nn.moveToNextStage(G,d)}finally{o(!1)}},[d]),Te=K.useCallback(async()=>{o(!0);try{const G=await nn.leaveRoom();return G&&y(null),G}finally{o(!1)}},[]),Re=K.useCallback(()=>{nn.cleanup(),y(null),m([]),w({status:"lobby"}),U([]),V(!1)},[]);return{loading:r,error:u,players:d,currentPlayer:p,gameState:v,stageResults:N,isGameStarter:(p==null?void 0:p.isGameStarter)||!1,ensureJoined:le,updatePlayerStatus:ee,becomeGameStarter:ge,startGame:X,moveToNextStage:ye,leaveRoom:Te,cleanup:Re}},EN=({roomId:s,database:e,playerName:i,onBack:r})=>{const{loading:o,error:u,players:h,currentPlayer:d,gameState:m,stageResults:p,isGameStarter:y,ensureJoined:v,updatePlayerStatus:w,becomeGameStarter:N,startGame:U,moveToNextStage:B,leaveRoom:V,cleanup:ae}=bN(e,s,i),[le,ee]=K.useState(null),[ge,X]=K.useState(null),[ye,Te]=K.useState(1),[Re,G]=K.useState(""),[xe,Ke]=K.useState(null),Ge=()=>`stage-${ye}`;K.useEffect(()=>{if(u){Ke(u);const S=setTimeout(()=>Ke(null),5e3);return()=>clearTimeout(S)}},[u]),K.useEffect(()=>{let S=!0;return(async()=>{S&&await v()})(),()=>{S=!1}},[v]),K.useEffect(()=>{m&&(m.status&&console.log("[TypeRunner] Game state changed:",m.status),m.countdown!==void 0&&X(m.countdown),m.stage!==void 0&&Te(m.stage),m.challenge!==void 0&&G(m.challenge),m.startTime!==void 0&&ee(m.startTime))},[m]);const Wt=async()=>{await N()},Zt=async()=>{if(h.filter(x=>x.status!=="disconnected").length<4){Ke("Need at least 4 players to start the game");return}await U()},F=async()=>{const S=h.filter(z=>z.status!=="disconnected");if(S.filter(z=>z.status==="completed").length!==S.length){Ke("Cannot move to next stage until all players have completed");return}await B(ye)},D=async()=>{await V(),ae(),r()},P=()=>E.jsx(oT,{roomId:s,players:h,currentPlayer:d,isGameStarter:y,onBecomeGameStarter:Wt,onStartGame:Zt,onStopGame:D,gameState:m.status,onBack:D}),Y=()=>{if(m.status==="starting")return E.jsxs("div",{className:"gameplay-container",children:[E.jsx("div",{className:"section-header",children:E.jsx("h2",{children:"Game Starting..."})}),E.jsx("div",{className:"countdown-display",children:E.jsxs("p",{children:["Get ready! Game will start in ",ge," seconds."]})})]});if(m.status==="playing"){const S=h.filter(x=>x.status!=="disconnected");return E.jsx("div",{className:`gameplay-container ${Ge()}`,children:E.jsx(_N,{currentStage:ye,currentChallenge:Re,players:S,currentPlayer:d,isGameStarter:y,startTime:le,onNextStage:F,updatePlayerStatus:x=>w(x),database:e,roomId:s})})}else if(m.status==="finished"){const S=m.playerRankings||h.filter(x=>x.totalTime>0&&x.status!=="disconnected").sort((x,z)=>x.totalTime-z.totalTime);return E.jsxs("div",{className:"gameplay-container",children:[E.jsx("div",{className:"section-header",children:E.jsx("h2",{children:"Game Over!"})}),E.jsx("div",{className:"winners",children:S.slice(0,2).map((x,z)=>E.jsx("div",{className:"winner",children:E.jsxs("p",{children:[z===0?"🥇 Winner":"🥈 Runner-up",": ",x.name,x.totalTime?` - Total Time: ${(x.totalTime/1e3).toFixed(2)}s`:""]})},x.id))}),E.jsxs("div",{className:"game-statistics",children:[E.jsx("h3",{children:"Final Rankings"}),E.jsx("ol",{className:"final-rankings",children:S.map(x=>E.jsxs("li",{children:[x.name,": ",(x.totalTime/1e3).toFixed(2),"s"]},x.id))}),E.jsx("div",{className:"game-actions",children:E.jsx("button",{onClick:D,className:"back-btn",children:"Back to Lobby"})})]})]})}else return E.jsxs("div",{className:"gameplay-container",children:[E.jsx("div",{className:"section-header",children:E.jsx("h2",{children:"TypeRunner"})}),E.jsxs("div",{className:"room-info",children:[E.jsxs("h3",{children:["Room #",s]}),E.jsx("p",{children:"Share this code with others to invite them to your game!"})]}),E.jsxs("div",{className:"game-info",children:[E.jsx("h3",{children:"How to Play:"}),E.jsx("p",{children:"TypeRunner is a typing race game with four challenging stages:"}),E.jsxs("ul",{children:[E.jsx("li",{children:"Stage 1: Type a sentence correctly"}),E.jsx("li",{children:"Stage 2: Fill in missing vowels/words"}),E.jsx("li",{children:"Stage 3: Unscramble and type a sentence"}),E.jsx("li",{children:"Stage 4: Type a reversed sentence"})]}),E.jsx("p",{children:"All players participate in all four stages."}),E.jsx("p",{children:"Your times are cumulative across all stages."}),E.jsx("p",{children:"The two players with the lowest total time win!"})]})]})},ie=()=>E.jsx(yN,{gameState:m.status,players:h.filter(S=>S.status!=="disconnected"),stageResults:p,startTime:le,currentStage:ye});return E.jsxs("div",{className:"type-runner",children:[xe&&E.jsx("div",{className:"error-message",children:E.jsx("p",{children:xe})}),o&&E.jsx("div",{className:"loading-indicator",children:E.jsx("p",{children:"Loading..."})}),m.status==="starting"&&E.jsx(vN,{seconds:ge,onComplete:()=>{}}),E.jsx(lT,{leftSection:P(),middleSection:Y(),rightSection:ie()})]})};var TN="firebase",wN="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(TN,wN,"app");const D0="@firebase/installations",dd="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=1e4,M0=`w:${dd}`,k0="FIS_v2",CN="https://firebaseinstallations.googleapis.com/v1",AN=60*60*1e3,RN="installations",NN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ls=new us(RN,NN,IN);function L0(s){return s instanceof bn&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0({projectId:s}){return`${CN}/projects/${s}/installations`}function j0(s){return{token:s.token,requestStatus:2,expiresIn:DN(s.expiresIn),creationTime:Date.now()}}async function P0(s,e){const r=(await e.json()).error;return ls.create("request-failed",{requestName:s,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function z0({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function ON(s,{refreshToken:e}){const i=z0(s);return i.append("Authorization",xN(e)),i}async function H0(s){const e=await s();return e.status>=500&&e.status<600?s():e}function DN(s){return Number(s.replace("s","000"))}function xN(s){return`${k0} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN({appConfig:s,heartbeatServiceProvider:e},{fid:i}){const r=U0(s),o=z0(s),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const h={fid:i,authVersion:k0,appId:s.appId,sdkVersion:M0},d={method:"POST",headers:o,body:JSON.stringify(h)},m=await H0(()=>fetch(r,d));if(m.ok){const p=await m.json();return{fid:p.fid||i,registrationStatus:2,refreshToken:p.refreshToken,authToken:j0(p.authToken)}}else throw await P0("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=/^[cdef][\w-]{21}$/,Ch="";function UN(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=jN(s);return LN.test(i)?i:Ch}catch{return Ch}}function jN(s){return kN(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new Map;function q0(s,e){const i=dc(s);V0(i,e),PN(i,e)}function V0(s,e){const i=G0.get(s);if(i)for(const r of i)r(e)}function PN(s,e){const i=zN();i&&i.postMessage({key:s,fid:e}),HN()}let ts=null;function zN(){return!ts&&"BroadcastChannel"in self&&(ts=new BroadcastChannel("[Firebase] FID Change"),ts.onmessage=s=>{V0(s.data.key,s.data.fid)}),ts}function HN(){G0.size===0&&ts&&(ts.close(),ts=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="firebase-installations-database",GN=1,os="firebase-installations-store";let th=null;function md(){return th||(th=dv(BN,GN,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(os)}}})),th}async function Yo(s,e){const i=dc(s),o=(await md()).transaction(os,"readwrite"),u=o.objectStore(os),h=await u.get(i);return await u.put(e,i),await o.done,(!h||h.fid!==e.fid)&&q0(s,e.fid),e}async function Y0(s){const e=dc(s),r=(await md()).transaction(os,"readwrite");await r.objectStore(os).delete(e),await r.done}async function mc(s,e){const i=dc(s),o=(await md()).transaction(os,"readwrite"),u=o.objectStore(os),h=await u.get(i),d=e(h);return d===void 0?await u.delete(i):await u.put(d,i),await o.done,d&&(!h||h.fid!==d.fid)&&q0(s,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(s){let e;const i=await mc(s.appConfig,r=>{const o=qN(r),u=VN(s,o);return e=u.registrationPromise,u.installationEntry});return i.fid===Ch?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function qN(s){const e=s||{fid:UN(),registrationStatus:0};return F0(e)}function VN(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ls.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=YN(s,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:FN(s)}:{installationEntry:e}}async function YN(s,e){try{const i=await MN(s,e);return Yo(s.appConfig,i)}catch(i){throw L0(i)&&i.customData.serverCode===409?await Y0(s.appConfig):await Yo(s.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function FN(s){let e=await Ry(s.appConfig);for(;e.registrationStatus===1;)await B0(100),e=await Ry(s.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await pd(s);return r||i}return e}function Ry(s){return mc(s,e=>{if(!e)throw ls.create("installation-not-found");return F0(e)})}function F0(s){return QN(s)?{fid:s.fid,registrationStatus:0}:s}function QN(s){return s.registrationStatus===1&&s.registrationTime+x0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN({appConfig:s,heartbeatServiceProvider:e},i){const r=XN(s,i),o=ON(s,i),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const h={installation:{sdkVersion:M0,appId:s.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},m=await H0(()=>fetch(r,d));if(m.ok){const p=await m.json();return j0(p)}else throw await P0("Generate Auth Token",m)}function XN(s,{fid:e}){return`${U0(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(s,e=!1){let i;const r=await mc(s.appConfig,u=>{if(!Q0(u))throw ls.create("not-registered");const h=u.authToken;if(!e&&ZN(h))return u;if(h.requestStatus===1)return i=$N(s,e),u;{if(!navigator.onLine)throw ls.create("app-offline");const d=e1(u);return i=WN(s,d),d}});return i?await i:r.authToken}async function $N(s,e){let i=await Ny(s.appConfig);for(;i.authToken.requestStatus===1;)await B0(100),i=await Ny(s.appConfig);const r=i.authToken;return r.requestStatus===0?gd(s,e):r}function Ny(s){return mc(s,e=>{if(!Q0(e))throw ls.create("not-registered");const i=e.authToken;return t1(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function WN(s,e){try{const i=await KN(s,e),r=Object.assign(Object.assign({},e),{authToken:i});return await Yo(s.appConfig,r),i}catch(i){if(L0(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await Y0(s.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yo(s.appConfig,r)}throw i}}function Q0(s){return s!==void 0&&s.registrationStatus===2}function ZN(s){return s.requestStatus===2&&!JN(s)}function JN(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+AN}function e1(s){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},s),{authToken:e})}function t1(s){return s.requestStatus===1&&s.requestTime+x0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(s){const e=s,{installationEntry:i,registrationPromise:r}=await pd(e);return r?r.catch(console.error):gd(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(s,e=!1){const i=s;return await s1(i),(await gd(i,e)).token}async function s1(s){const{registrationPromise:e}=await pd(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(s){if(!s||!s.options)throw nh("App Configuration");if(!s.name)throw nh("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!s.options[i])throw nh(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function nh(s){return ls.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="installations",r1="installations-internal",l1=s=>{const e=s.getProvider("app").getImmediate(),i=a1(e),r=fs(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},o1=s=>{const e=s.getProvider("app").getImmediate(),i=fs(e,K0).getImmediate();return{getId:()=>n1(i),getToken:o=>i1(i,o)}};function c1(){vn(new un(K0,l1,"PUBLIC")),vn(new un(r1,o1,"PRIVATE"))}c1();Xt(D0,dd);Xt(D0,dd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="analytics",u1="firebase_id",f1="origin",h1=60*1e3,d1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_d="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new ec("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pt=new us("analytics","Analytics",m1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(s){if(!s.startsWith(_d)){const e=Pt.create("invalid-gtag-resource",{gtagURL:s});return Ct.warn(e.message),""}return s}function X0(s){return Promise.all(s.map(e=>e.catch(i=>i)))}function g1(s,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,e)),i}function _1(s,e){const i=g1("firebase-js-sdk-policy",{createScriptURL:p1}),r=document.createElement("script"),o=`${_d}?l=${s}&id=${e}`;r.src=i?i==null?void 0:i.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function y1(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function v1(s,e,i,r,o,u){const h=r[o];try{if(h)await e[h];else{const m=(await X0(i)).find(p=>p.measurementId===o);m&&await e[m.appId]}}catch(d){Ct.error(d)}s("config",o,u)}async function S1(s,e,i,r,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await X0(i);for(const m of h){const p=d.find(v=>v.measurementId===m),y=p&&e[p.appId];if(y)u.push(y);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),s("event",r,o||{})}catch(u){Ct.error(u)}}function b1(s,e,i,r){async function o(u,...h){try{if(u==="event"){const[d,m]=h;await S1(s,e,i,d,m)}else if(u==="config"){const[d,m]=h;await v1(s,e,i,r,d,m)}else if(u==="consent"){const[d,m]=h;s("consent",d,m)}else if(u==="get"){const[d,m,p]=h;s("get",d,m,p)}else if(u==="set"){const[d]=h;s("set",d)}else s(u,...h)}catch(d){Ct.error(d)}}return o}function E1(s,e,i,r,o){let u=function(...h){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=b1(u,s,e,i),{gtagCore:u,wrappedGtag:window[o]}}function T1(s){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(_d)&&i.src.includes(s))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=30,C1=1e3;class A1{constructor(e={},i=C1){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $0=new A1;function R1(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function N1(s){var e;const{appId:i,apiKey:r}=s,o={method:"GET",headers:R1(r)},u=d1.replace("{app-id}",i),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let d="";try{const m=await h.json();!((e=m.error)===null||e===void 0)&&e.message&&(d=m.error.message)}catch{}throw Pt.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function I1(s,e=$0,i){const{appId:r,apiKey:o,measurementId:u}=s.options;if(!r)throw Pt.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:r};throw Pt.create("no-api-key")}const h=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new x1;return setTimeout(async()=>{d.abort()},h1),W0({appId:r,apiKey:o,measurementId:u},h,d,e)}async function W0(s,{throttleEndTimeMillis:e,backoffCount:i},r,o=$0){var u;const{appId:h,measurementId:d}=s;try{await O1(r,e)}catch(m){if(d)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:h,measurementId:d};throw m}try{const m=await N1(s);return o.deleteThrottleMetadata(h),m}catch(m){const p=m;if(!D1(p)){if(o.deleteThrottleMetadata(h),d)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw m}const y=Number((u=p==null?void 0:p.customData)===null||u===void 0?void 0:u.httpStatus)===503?L_(i,o.intervalMillis,w1):L_(i,o.intervalMillis),v={throttleEndTimeMillis:Date.now()+y,backoffCount:i+1};return o.setThrottleMetadata(h,v),Ct.debug(`Calling attemptFetch again in ${y} millis`),W0(s,v,r,o)}}function O1(s,e){return new Promise((i,r)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(i,o);s.addEventListener(()=>{clearTimeout(u),r(Pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function D1(s){if(!(s instanceof bn)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class x1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function M1(s,e,i,r,o){if(o&&o.global){s("event",i,r);return}else{const u=await e,h=Object.assign(Object.assign({},r),{send_to:u});s("event",i,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(){if(ov())try{await cv()}catch(s){return Ct.warn(Pt.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return Ct.warn(Pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function L1(s,e,i,r,o,u,h){var d;const m=I1(s);m.then(N=>{i[N.measurementId]=N.appId,s.options.measurementId&&N.measurementId!==s.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>Ct.error(N)),e.push(m);const p=k1().then(N=>{if(N)return r.getId()}),[y,v]=await Promise.all([m,p]);T1(u)||_1(u,y.measurementId),o("js",new Date);const w=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return w[f1]="firebase",w.update=!0,v!=null&&(w[u1]=v),o("config",y.measurementId,w),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.app=e}_delete(){return delete xr[this.app.options.appId],Promise.resolve()}}let xr={},Iy=[];const Oy={};let ih="dataLayer",j1="gtag",Dy,Z0,xy=!1;function P1(){const s=[];if(rv()&&s.push("This is a browser extension environment."),MT()||s.push("Cookies are not available."),s.length>0){const e=s.map((r,o)=>`(${o+1}) ${r}`).join(" "),i=Pt.create("invalid-analytics-context",{errorInfo:e});Ct.warn(i.message)}}function z1(s,e,i){P1();const r=s.options.appId;if(!r)throw Pt.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pt.create("no-api-key");if(xr[r]!=null)throw Pt.create("already-exists",{id:r});if(!xy){y1(ih);const{wrappedGtag:u,gtagCore:h}=E1(xr,Iy,Oy,ih,j1);Z0=u,Dy=h,xy=!0}return xr[r]=L1(s,Iy,Oy,e,Dy,ih,i),new U1(s)}function H1(s=kh()){s=ot(s);const e=fs(s,Fo);return e.isInitialized()?e.getImmediate():B1(s)}function B1(s,e={}){const i=fs(s,Fo);if(i.isInitialized()){const o=i.getImmediate();if(Ni(e,i.getOptions()))return o;throw Pt.create("already-initialized")}return i.initialize({options:e})}function G1(s,e,i,r){s=ot(s),M1(Z0,xr[s.app.options.appId],e,i,r).catch(o=>Ct.error(o))}const My="@firebase/analytics",ky="0.10.12";function q1(){vn(new un(Fo,(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return z1(r,o,i)},"PUBLIC")),vn(new un("analytics-internal",s,"PRIVATE")),Xt(My,ky),Xt(My,ky,"esm2017");function s(e){try{const i=e.getProvider(Fo).getImmediate();return{logEvent:(r,o,u)=>G1(i,r,o,u)}}catch(i){throw Pt.create("interop-component-reg-failed",{reason:i})}}}q1();const V1={apiKey:"AIzaSyBB5gbZ6RLNKmL7d4pOOSrxewGf3dU-psw",authDomain:"typerunner-72151.firebaseapp.com",projectId:"typerunner-72151",databaseURL:"https://typerunner-72151-default-rtdb.asia-southeast1.firebasedatabase.app/",storageBucket:"typerunner-72151.firebasestorage.app",messagingSenderId:"1007225152479",appId:"1:1007225152479:web:8315b3daba0ff8d2359a6a",measurementId:"G-ESKNMMJ6LX"},pc=mv(V1),yi=O0(pc);H1(pc);function yd(s,e){var i={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(i[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(i[r[o]]=s[r[o]]);return i}function J0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y1=J0,eS=new us("auth","Firebase",J0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new ec("@firebase/auth");function F1(s,...e){Qo.logLevel<=De.WARN&&Qo.warn(`Auth (${_a}): ${s}`,...e)}function Eo(s,...e){Qo.logLevel<=De.ERROR&&Qo.error(`Auth (${_a}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(s,...e){throw Sd(s,...e)}function cn(s,...e){return Sd(s,...e)}function vd(s,e,i){const r=Object.assign(Object.assign({},Y1()),{[e]:i});return new us("auth","Firebase",r).create(e,{appName:s.name})}function is(s){return vd(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Q1(s,e,i){const r=i;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(s,"argument-error"),vd(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sd(s,...e){if(typeof s!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return eS.create(s,...e)}function ne(s,e,...i){if(!s)throw Sd(e,...i)}function Hn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Eo(e),new Error(e)}function Yn(s,e){s||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function K1(){return Ly()==="http:"||Ly()==="https:"}function Ly(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K1()||rv()||"connection"in navigator)?navigator.onLine:!0}function $1(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,i){this.shortDelay=e,this.longDelay=i,Yn(i>e,"Short delay should be less than long delay!"),this.isMobile=xh()||lv()}get(){return X1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(s,e){Yn(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J1=new Zr(3e4,6e4);function Ed(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Ea(s,e,i,r,o={}){return nS(s,o,async()=>{let u={},h={};r&&(e==="GET"?h=r:u={body:JSON.stringify(r)});const d=ga(Object.assign({key:s.config.apiKey},h)).slice(1),m=await s._getAdditionalHeaders();m["Content-Type"]="application/json",s.languageCode&&(m["X-Firebase-Locale"]=s.languageCode);const p=Object.assign({method:e,headers:m},u);return OT()||(p.referrerPolicy="no-referrer"),tS.fetch()(await iS(s,s.config.apiHost,i,d),p)})}async function nS(s,e,i){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},W1),e);try{const o=new tI(s),u=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw vo(s,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const d=u.ok?h.errorMessage:h.error.message,[m,p]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(s,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw vo(s,"email-already-in-use",h);if(m==="USER_DISABLED")throw vo(s,"user-disabled",h);const y=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw vd(s,y,p);Sn(s,y)}}catch(o){if(o instanceof bn)throw o;Sn(s,"network-request-failed",{message:String(o)})}}async function eI(s,e,i,r,o={}){const u=await Ea(s,e,i,r,o);return"mfaPendingCredential"in u&&Sn(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function iS(s,e,i,r){const o=`${e}${i}?${r}`,u=s,h=u.config.emulator?bd(s.config,o):`${s.config.apiScheme}://${o}`;return Z1.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class tI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),J1.get())})}}function vo(s,e,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=cn(s,e,r);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(s,e){return Ea(s,"POST","/v1/accounts:delete",e)}async function Ko(s,e){return Ea(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iI(s,e=!1){const i=ot(s),r=await i.getIdToken(e),o=Td(r);ne(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:Mr(sh(o.auth_time)),issuedAtTime:Mr(sh(o.iat)),expirationTime:Mr(sh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function sh(s){return Number(s)*1e3}function Td(s){const[e,i,r]=s.split(".");if(e===void 0||i===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ro(i);return o?JSON.parse(o):(Eo("Failed to decode base64 JWT payload"),null)}catch(o){return Eo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Uy(s){const e=Td(s);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(s,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof bn&&sI(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function sI({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(s){var e;const i=s.auth,r=await s.getIdToken(),o=await Yr(s,Ko(i,{idToken:r}));ne(o==null?void 0:o.users.length,i,"internal-error");const u=o.users[0];s._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?sS(u.providerUserInfo):[],d=lI(s.providerData,h),m=s.isAnonymous,p=!(s.email&&u.passwordHash)&&!(d!=null&&d.length),y=m?p:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:d,metadata:new Rh(u.createdAt,u.lastLoginAt),isAnonymous:y};Object.assign(s,v)}async function rI(s){const e=ot(s);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lI(s,e){return[...s.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function sS(s){return s.map(e=>{var{providerId:i}=e,r=yd(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(s,e){const i=await nS(s,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,h=await iS(s,o,"/v1/token",`key=${u}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",tS.fetch()(h,{method:"POST",headers:d,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function cI(s,e){return Ea(s,"POST","/v2/accounts:revokeToken",Ed(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const i=Uy(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:u}=await oI(e,i);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:u}=i,h=new ia;return r&&(ne(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(ne(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ne(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ia,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(s,e){ne(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,u=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Rh(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const i=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return ne(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return iI(this,e)}reload(){return rI(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await Yr(this,nI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,u,h,d,m,p,y;const v=(r=i.displayName)!==null&&r!==void 0?r:void 0,w=(o=i.email)!==null&&o!==void 0?o:void 0,N=(u=i.phoneNumber)!==null&&u!==void 0?u:void 0,U=(h=i.photoURL)!==null&&h!==void 0?h:void 0,B=(d=i.tenantId)!==null&&d!==void 0?d:void 0,V=(m=i._redirectEventId)!==null&&m!==void 0?m:void 0,ae=(p=i.createdAt)!==null&&p!==void 0?p:void 0,le=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ee,emailVerified:ge,isAnonymous:X,providerData:ye,stsTokenManager:Te}=i;ne(ee&&Te,e,"internal-error");const Re=ia.fromJSON(this.name,Te);ne(typeof ee=="string",e,"internal-error"),vi(v,e.name),vi(w,e.name),ne(typeof ge=="boolean",e,"internal-error"),ne(typeof X=="boolean",e,"internal-error"),vi(N,e.name),vi(U,e.name),vi(B,e.name),vi(V,e.name),vi(ae,e.name),vi(le,e.name);const G=new ln({uid:ee,auth:e,email:w,emailVerified:ge,displayName:v,isAnonymous:X,photoURL:U,phoneNumber:N,tenantId:B,stsTokenManager:Re,createdAt:ae,lastLoginAt:le});return ye&&Array.isArray(ye)&&(G.providerData=ye.map(xe=>Object.assign({},xe))),V&&(G._redirectEventId=V),G}static async _fromIdTokenResponse(e,i,r=!1){const o=new ia;o.updateFromServerResponse(i);const u=new ln({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Xo(u),u}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];ne(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?sS(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),d=new ia;d.updateFromIdToken(r);const m=new ln({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Rh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,p),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Map;function Bn(s){Yn(s instanceof Function,"Expected a class definition");let e=jy.get(s);return e?(Yn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,jy.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}aS.type="NONE";const Py=aS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(s,e,i){return`firebase:${s}:${e}:${i}`}class sa{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=To(this.userKey,o.apiKey,u),this.fullPersistenceKey=To("persistence",o.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Ko(this.auth,{idToken:e}).catch(()=>{});return i?ln._fromGetAccountInfoResponse(this.auth,i,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new sa(Bn(Py),e,r);const o=(await Promise.all(i.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||Bn(Py);const h=To(r,e.config.apiKey,e.name);let d=null;for(const p of i)try{const y=await p._get(h);if(y){let v;if(typeof y=="string"){const w=await Ko(e,{idToken:y}).catch(()=>{});if(!w)break;v=await ln._fromGetAccountInfoResponse(e,w,y)}else v=ln._fromJSON(e,y);p!==u&&(d=v),u=p;break}}catch{}const m=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new sa(u,e,r):(u=m[0],d&&await u._set(h,d.toJSON()),await Promise.all(i.map(async p=>{if(p!==u)try{await p._remove(h)}catch{}})),new sa(u,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fS(e))return"Blackberry";if(hS(e))return"Webos";if(lS(e))return"Safari";if((e.includes("chrome/")||oS(e))&&!e.includes("edge/"))return"Chrome";if(uS(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rS(s=yt()){return/firefox\//i.test(s)}function lS(s=yt()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oS(s=yt()){return/crios\//i.test(s)}function cS(s=yt()){return/iemobile/i.test(s)}function uS(s=yt()){return/android/i.test(s)}function fS(s=yt()){return/blackberry/i.test(s)}function hS(s=yt()){return/webos/i.test(s)}function wd(s=yt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function uI(s=yt()){var e;return wd(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fI(){return DT()&&document.documentMode===10}function dS(s=yt()){return wd(s)||uS(s)||hS(s)||fS(s)||/windows phone/i.test(s)||cS(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(s,e=[]){let i;switch(s){case"Browser":i=zy(yt());break;case"Worker":i=`${zy(yt())}-${s}`;break;default:i=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${_a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=u=>new Promise((h,d)=>{try{const m=e(u);h(m)}catch(m){d(m)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(s,e={}){return Ea(s,"GET","/v2/passwordPolicy",Ed(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=6;class pI{constructor(e){var i,r,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:mI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,u,h,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(i=m.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new hI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Bn(i)),this._initializationPromise=this.queue(async()=>{var r,o,u;if(!this._deleted&&(this.persistenceManager=await sa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Ko(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(sn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===d)&&(m!=null&&m.user)&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(is(this));const i=e?ot(e):null;return i&&ne(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dI(this),i=new pI(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await cI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Bn(e)||this._popupRedirectResolver;ne(i,this,"argument-error"),this.redirectPersistenceManager=await sa.create(this,[Bn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(d,this,"internal-error"),d.then(()=>{h||u(this.currentUser)}),typeof i=="function"){const m=e.addObserver(i,r,o);return()=>{h=!0,m()}}else{const m=e.addObserver(i);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&F1(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function gc(s){return ot(s)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=HT(i=>this.observer=i)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _I(s){Cd=s}function yI(s){return Cd.loadJS(s)}function vI(){return Cd.gapiScript}function SI(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(s,e){const i=fs(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),u=i.getOptions();if(Ni(u,e??{}))return o;Sn(o,"already-initialized")}return i.initialize({options:e})}function EI(s,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Bn);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TI(s,e,i){const r=gc(s);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,u=pS(e),{host:h,port:d}=wI(e),m=d===null?"":`:${d}`,p={url:`${u}//${h}${m}/`},y=Object.freeze({host:h,port:d,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Ni(p,r.config.emulator)&&Ni(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,CI()}function pS(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function wI(s){const e=pS(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:By(r.substr(u.length+1))}}else{const[u,h]=r.split(":");return{host:u,port:By(h)}}}function By(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function CI(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,i){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(s,e){return eI(s,"POST","/v1/accounts:signInWithIdp",Ed(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="http://localhost";class cs extends gS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,u=yd(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new cs(r,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return aa(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,aa(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,aa(e,i)}buildRequest(){const e={requestUri:AI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=ga(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Jr{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.FACEBOOK_SIGN_IN_METHOD="facebook.com";Si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return cs._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Pn.credential(i,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Jr{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.GITHUB_SIGN_IN_METHOD="github.com";bi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Jr{constructor(){super("twitter.com")}static credential(e,i){return cs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Ei.credential(i,r)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const u=await ln._fromIdTokenResponse(e,r,o),h=Gy(r);return new ma({user:u,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=Gy(r);return new ma({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function Gy(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends bn{constructor(e,i,r,o){var u;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new $o(e,i,r,o)}}function _S(s,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(s,u,e,r):u})}async function RI(s,e,i=!1){const r=await Yr(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return ma._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(s,e,i=!1){const{auth:r}=s;if(sn(r.app))return Promise.reject(is(r));const o="reauthenticate";try{const u=await Yr(s,_S(r,o,e,s),i);ne(u.idToken,r,"internal-error");const h=Td(u.idToken);ne(h,r,"internal-error");const{sub:d}=h;return ne(s.uid===d,r,"user-mismatch"),ma._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(s,e,i=!1){if(sn(s.app))return Promise.reject(is(s));const r="signIn",o=await _S(s,r,e),u=await ma._fromIdTokenResponse(s,r,o);return i||await s._updateCurrentUser(u.user),u}function OI(s,e,i,r){return ot(s).onIdTokenChanged(e,i,r)}function DI(s,e,i){return ot(s).beforeAuthStateChanged(e,i)}function xI(s,e,i,r){return ot(s).onAuthStateChanged(e,i,r)}function MI(s){return ot(s).signOut()}const Wo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=1e3,LI=10;class vS extends yS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,d,m)=>{this.notifyListeners(h,m)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},u=this.storage.getItem(r);fI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,LI):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}vS.type="LOCAL";const UI=vS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS extends yS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}SS.type="SESSION";const bS=SS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new _c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:u}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(h).map(async p=>p(i.origin,u)),m=await jI(d);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(s="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((d,m)=>{const p=Rd("",20);o.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(v){const w=v;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),d(w.data.response);break;default:clearTimeout(y),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:p,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function zI(s){yn().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BI(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function GI(){return ES()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="firebaseLocalStorageDb",qI=1,Zo="firebaseLocalStorage",wS="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function yc(s,e){return s.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function VI(){const s=indexedDB.deleteDatabase(TS);return new el(s).toPromise()}function Nh(){const s=indexedDB.open(TS,qI);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Zo,{keyPath:wS})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await VI(),e(await Nh()))})})}async function qy(s,e,i){const r=yc(s,!0).put({[wS]:e,value:i});return new el(r).toPromise()}async function YI(s,e){const i=yc(s,!1).get(e),r=await new el(i).toPromise();return r===void 0?null:r.value}function Vy(s,e){const i=yc(s,!0).delete(e);return new el(i).toPromise()}const FI=800,QI=3;class CS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>QI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ES()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(GI()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new PI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await qy(e,Wo,"1"),await Vy(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>qy(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>YI(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vy(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=yc(o,!1).getAll();return new el(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CS.type="LOCAL";const KI=CS;new Zr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(s,e){return e?Bn(e):(ne(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends gS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return aa(e,this._buildIdpRequest())}_linkToIdToken(e,i){return aa(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return aa(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function XI(s){return II(s.auth,new Nd(s),s.bypassAuthState)}function $I(s){const{auth:e,user:i}=s;return ne(i,e,"internal-error"),NI(i,new Nd(s),s.bypassAuthState)}async function WI(s){const{auth:e,user:i}=s;return ne(i,e,"internal-error"),RI(i,new Nd(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,i,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:u,error:h,type:d}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:i,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XI;case"linkViaPopup":case"linkViaRedirect":return WI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:Sn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Zr(2e3,1e4);async function JI(s,e,i){if(sn(s.app))return Promise.reject(cn(s,"operation-not-supported-in-this-environment"));const r=gc(s);Q1(s,e,Ad);const o=AS(r,i);return new ns(r,"signInViaPopup",e,o).executeNotNull()}class ns extends RS{constructor(e,i,r,o,u){super(e,i,o,u),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZI.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="pendingRedirect",wo=new Map;class tO extends RS{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await nO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nO(s,e){const i=aO(e),r=sO(s);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function iO(s,e){wo.set(s._key(),e)}function sO(s){return Bn(s._redirectPersistence)}function aO(s){return To(eO,s.config.apiKey,s.name)}async function rO(s,e,i=!1){if(sn(s.app))return Promise.reject(is(s));const r=gc(s),o=AS(r,e),h=await new tO(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=10*60*1e3;class oO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cO(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!NS(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(cn(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yy(e))}saveEventToCache(e){this.cachedEventUids.add(Yy(e)),this.lastProcessedEventTime=Date.now()}}function Yy(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function NS({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cO(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NS(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(s,e={}){return Ea(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hO=/^https?/;async function dO(s){if(s.config.emulator)return;const{authorizedDomains:e}=await uO(s);for(const i of e)try{if(mO(i))return}catch{}Sn(s,"unauthorized-domain")}function mO(s){const e=Ah(),{protocol:i,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!hO.test(i))return!1;if(fO.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new Zr(3e4,6e4);function Fy(){const s=yn().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function gO(s){return new Promise((e,i)=>{var r,o,u;function h(){Fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fy(),i(cn(s,"network-request-failed"))},timeout:pO.get()})}if(!((o=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=yn().gapi)===null||u===void 0)&&u.load)h();else{const d=SI("iframefcb");return yn()[d]=()=>{gapi.load?h():i(cn(s,"network-request-failed"))},yI(`${vI()}?onload=${d}`).catch(m=>i(m))}}).catch(e=>{throw Co=null,e})}let Co=null;function _O(s){return Co=Co||gO(s),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=new Zr(5e3,15e3),vO="__/auth/iframe",SO="emulator/auth/iframe",bO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TO(s){const e=s.config;ne(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?bd(e,SO):`https://${s.config.authDomain}/${vO}`,r={apiKey:e.apiKey,appName:s.name,v:_a},o=EO.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${i}?${ga(r).slice(1)}`}async function wO(s){const e=await _O(s),i=yn().gapi;return ne(i,s,"internal-error"),e.open({where:document.body,url:TO(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bO,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const h=cn(s,"network-request-failed"),d=yn().setTimeout(()=>{u(h)},yO.get());function m(){yn().clearTimeout(d),o(r)}r.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AO=500,RO=600,NO="_blank",IO="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OO(s,e,i,r=AO,o=RO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const m=Object.assign(Object.assign({},CO),{width:r.toString(),height:o.toString(),top:u,left:h}),p=yt().toLowerCase();i&&(d=oS(p)?NO:i),rS(p)&&(e=e||IO,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[N,U])=>`${w}${N}=${U},`,"");if(uI(p)&&d!=="_self")return DO(e||"",d),new Qy(null);const v=window.open(e||"",d,y);ne(v,s,"popup-blocked");try{v.focus()}catch{}return new Qy(v)}function DO(s,e){const i=document.createElement("a");i.href=s,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO="__/auth/handler",MO="emulator/auth/handler",kO=encodeURIComponent("fac");async function Ky(s,e,i,r,o,u){ne(s.config.authDomain,s,"auth-domain-config-required"),ne(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:_a,eventId:o};if(e instanceof Ad){e.setDefaultLanguage(s.languageCode),h.providerId=e.providerId||"",No(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries({}))h[y]=v}if(e instanceof Jr){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(h.scopes=y.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const m=await s._getAppCheckToken(),p=m?`#${kO}=${encodeURIComponent(m)}`:"";return`${LO(s)}?${ga(d).slice(1)}${p}`}function LO({config:s}){return s.emulator?bd(s,MO):`https://${s.authDomain}/${xO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="webStorageSupport";class UO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bS,this._completeRedirectFn=rO,this._overrideRedirectResult=iO}async _openPopup(e,i,r,o){var u;Yn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ky(e,i,r,Ah(),o);return OO(e,h,Rd())}async _openRedirect(e,i,r,o){await this._originValidation(e);const u=await Ky(e,i,r,Ah(),o);return zI(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:u}=this.eventManagers[i];return o?Promise.resolve(o):(Yn(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await wO(e),r=new oO(e);return i.register("authEvent",o=>(ne(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ah,{type:ah},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ah];h!==void 0&&i(!!h),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=dO(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return dS()||lS()||wd()}}const jO=UO;var Xy="@firebase/auth",$y="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HO(s){vn(new un("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=r.options;ne(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mS(s)},p=new gI(r,o,u,m);return EI(p,i),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),vn(new un("auth-internal",e=>{const i=gc(e.getProvider("auth").getImmediate());return(r=>new PO(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Xy,$y,zO(s)),Xt(Xy,$y,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=5*60,GO=av("authIdTokenMaxAge")||BO;let Wy=null;const qO=s=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>GO)return;const o=i==null?void 0:i.token;Wy!==o&&(Wy=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function VO(s=kh()){const e=fs(s,"auth");if(e.isInitialized())return e.getImmediate();const i=bI(s,{popupRedirectResolver:jO,persistence:[KI,UI,bS]}),r=av("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const h=qO(u.toString());DI(i,h,()=>h(i.currentUser)),OI(i,d=>h(d))}}const o=iv("auth");return o&&TI(i,`http://${o}`),i}function YO(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}_I({loadJS(s){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const u=cn("internal-error");u.customData=o,i(u)},r.type="text/javascript",r.charset="UTF-8",YO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HO("Browser");const So=VO(pc),FO=O0(pc),QO=new Pn,ra={isUserAdmin:async s=>{if(!s)return!1;try{const e=pe(FO,`admins/${s}`),i=await jt(e);return i.exists()&&i.val()===!0}catch(e){return console.error("Error checking admin status:",e),!1}},loginWithGoogle:async()=>{try{return(await JI(So,QO)).user}catch(s){throw console.error("Google sign-in error:",s),s}},logout:async()=>{try{await MI(So)}catch(s){throw console.error("Logout error:",s),s}},getCurrentUser:()=>So.currentUser,observeAuthState:s=>xI(So,s)},KO=({onLoginSuccess:s,onLoginError:e})=>{const[i,r]=K.useState(!1),o=async()=>{r(!0);try{const u=await ra.loginWithGoogle();await ra.isUserAdmin(u.uid)?s&&s(u):(await ra.logout(),e&&e("You do not have admin privileges"))}catch(u){console.error("Login error:",u),e&&e(u.message)}finally{r(!1)}};return E.jsx("div",{className:"admin-login-container",children:E.jsx("button",{onClick:o,disabled:i,className:"google-login-btn",children:i?"Signing in...":"Admin Sign In with Google"})})},XO=({user:s,onLogout:e,onCleanInactiveRooms:i,onClearAllRooms:r,isLoading:o})=>{const u=async()=>{try{await ra.logout(),e&&e()}catch(h){console.error("Logout error:",h)}};return E.jsxs("div",{className:"admin-panel",children:[E.jsxs("div",{className:"admin-header",children:[E.jsx("h3",{children:"Admin Panel"}),E.jsxs("div",{className:"admin-user-info",children:[s.photoURL&&E.jsx("img",{src:s.photoURL,alt:"Profile"}),E.jsx("span",{children:s.displayName||s.email}),E.jsx("button",{onClick:u,className:"admin-logout-btn",children:"Logout"})]})]}),E.jsxs("div",{className:"admin-actions",children:[E.jsx("button",{onClick:i,disabled:o,className:"admin-btn",children:"Clean Inactive Rooms"}),E.jsx("button",{onClick:r,disabled:o,className:"admin-btn danger-btn",children:"Clear All Rooms"})]})]})},$O=()=>{const[s,e]=K.useState("home"),[i,r]=K.useState(""),[o,u]=K.useState(""),[h,d]=K.useState(""),[m,p]=K.useState([]),[y,v]=K.useState(!1),[w,N]=K.useState(null),[U,B]=K.useState(null),[V,ae]=K.useState(!1);K.useEffect(()=>{const F=ra.observeAuthState(async D=>{if(D){const P=await ra.isUserAdmin(D.uid);B(D),ae(P)}else B(null),ae(!1)});return()=>F()},[]);const le=F=>{B(F),ae(!0)},ee=F=>{N(F)},ge=()=>{B(null),ae(!1)};K.useEffect(()=>{const F=localStorage.getItem("typeRunnerPlayerName");F&&r(F)},[]),K.useEffect(()=>{i&&localStorage.setItem("typeRunnerPlayerName",i)},[i]),K.useEffect(()=>{if(w){const F=setTimeout(()=>N(null),5e3);return()=>clearTimeout(F)}},[w]);const X=async()=>{v(!0);try{const F=pe(yi,"rooms"),D=await jt(F);if(D.exists()){const P=D.val(),Y=Object.entries(P).filter(([ie,S])=>!S.state||S.state.status!=="lobby"?!1:(S.players?Object.values(S.players).filter(z=>z.status!=="disconnected").length:0)<10).map(([ie,S])=>{const x=S.players?Object.values(S.players).filter(z=>z.status!=="disconnected").length:0;return{id:ie,playerCount:x,createdBy:S.createdBy||"Unknown",createdAt:S.createdAt||Date.now()}});Y.sort((ie,S)=>S.createdAt-ie.createdAt),p(Y)}else p([])}catch(F){console.error("Error fetching rooms:",F),N("Failed to load available rooms. Please try again.")}finally{v(!1)}},ye=async()=>{if(!i.trim()){N("Please enter your name to create a room");return}v(!0);try{const F=Math.random().toString(36).substring(2,8).toUpperCase(),D=pe(yi,`rooms/${F}`);await Dr(D,{createdAt:Date.now(),createdBy:i,state:{status:"lobby",createdAt:Date.now()}}),u(F),e("game")}catch(F){console.error("Error creating room:",F),N("Failed to create room. Please try again.")}finally{v(!1)}},Te=async(F=null)=>{if(!i.trim()){N("Please enter your name to join a room");return}const D=F||h.trim();if(!D){N("Please enter a valid room ID");return}v(!0);try{const P=pe(yi,`rooms/${D}`),Y=await jt(P);if(!Y.exists()){localStorage.removeItem("typeRunnerSessionId"),N(`Room ${D} does not exist`);return}const ie=Y.val();if(ie.state&&ie.state.status!=="lobby"){N(`Game in room ${D} has already started`);return}if((ie.players?Object.values(ie.players).filter(x=>x.status!=="disconnected").length:0)>=10){N(`Room ${D} is full (10/10 players)`);return}u(D),e("game")}catch(P){console.error("Error joining room:",P),N("Failed to join room. Please try again.")}finally{v(!1)}},Re=()=>{nn.cleanup(),u(""),e("home")},G=async()=>{if(window.confirm("Are you sure you want to clean inactive rooms?")){v(!0);try{const F=pe(yi,"rooms"),D=await jt(F);if(D.exists()){const P=D.val();let Y=0;for(const[ie,S]of Object.entries(P)){let x=!1;S.players&&(x=Object.values(S.players).filter(H=>H.status!=="disconnected").length>0),x||(await Ay(pe(yi,`rooms/${ie}`)),Y++)}alert(`${Y} inactive rooms have been cleaned successfully.`)}else alert("No rooms found in the database.")}catch(F){console.error("Error cleaning rooms:",F),N("Failed to clean inactive rooms. Please try again.")}finally{v(!1)}}},xe=async()=>{if(window.confirm("WARNING: This will delete ALL rooms. Are you absolutely sure?")){v(!0);try{const F=pe(yi,"rooms"),D=await jt(F);if(D.exists()){const P=D.val();for(const[Y,ie]of Object.entries(P))if(ie.players)for(const[S,x]of Object.entries(ie.players)){const z=pe(yi,`rooms/${Y}/players/${S}`);await Th(z).cancel()}}await Ay(F),nn.cleanup(),localStorage.removeItem("typeRunnerSessionId"),alert("All rooms have been cleared from the database.")}catch(F){console.error("Error clearing all rooms:",F),N("Failed to clear all rooms. Please try again.")}finally{v(!1)}}},Ke=()=>E.jsxs("div",{className:"home-screen",children:[E.jsx("h1",{children:"TypeRunner"}),E.jsxs("div",{className:"name-input",children:[E.jsx("label",{htmlFor:"player-name",children:"Your Name:"}),E.jsx("input",{id:"player-name",type:"text",placeholder:"Enter your name",value:i,onChange:F=>r(F.target.value),maxLength:20})]}),E.jsxs("div",{className:"main-actions",children:[E.jsx("button",{onClick:ye,disabled:!i.trim()||y,className:"create-room-btn",children:y?"Creating...":"Create New Room"}),E.jsx("button",{onClick:()=>{e("join"),X()},disabled:!i.trim()||y,className:"join-room-btn",children:"Join Room"})]}),V&&U?E.jsx(XO,{user:U,onLogout:ge,onCleanInactiveRooms:G,onClearAllRooms:xe,isLoading:y}):E.jsx(KO,{onLoginSuccess:le,onLoginError:ee})]}),Ge=()=>E.jsxs("div",{className:"join-room-screen",children:[E.jsx("h2",{children:"Join Room"}),E.jsxs("div",{className:"join-by-id",children:[E.jsxs("div",{className:"room-id-input",children:[E.jsx("label",{htmlFor:"room-id",children:"Room ID:"}),E.jsx("input",{id:"room-id",type:"text",placeholder:"Enter room ID (e.g., A1B2C3)",value:h,onChange:F=>d(F.target.value.toUpperCase()),maxLength:6})]}),E.jsx("button",{onClick:()=>Te(),disabled:!h.trim()||y,className:"join-btn",children:y?"Joining...":"Join Room"})]}),E.jsxs("div",{className:"available-rooms",children:[E.jsxs("div",{className:"rooms-header",children:[E.jsx("h3",{children:"Available Rooms"}),E.jsx("button",{onClick:X,disabled:y,className:"refresh-btn",children:y?"Loading...":"Refresh"})]}),E.jsx("div",{className:"rooms-list-container",children:m.length>0?E.jsx("ul",{className:"rooms-list",children:m.map(F=>E.jsx("li",{children:E.jsxs("button",{onClick:()=>Te(F.id),disabled:y,className:"join-room-btn",children:["Room #",F.id," - Created by ",F.createdBy," - Players: ",F.playerCount,"/10"]})},F.id))}):E.jsx("p",{className:"no-rooms",children:y?"Loading available rooms...":"No active rooms available. Create a new one!"})})]}),E.jsx("div",{className:"room-actions",children:E.jsx("button",{onClick:()=>e("home"),disabled:y,className:"back-btn",children:"Back"})})]}),Wt=()=>E.jsx(EN,{roomId:o,database:yi,playerName:i,onBack:Re}),Zt=()=>{switch(s){case"home":return Ke();case"join":return Ge();case"game":return Wt();default:return Ke()}};return E.jsxs("div",{className:"typerunner-app",children:[w&&E.jsx("div",{className:"error-message",children:w}),Zt()]})};rT.createRoot(document.getElementById("root")).render(E.jsx(K.StrictMode,{children:E.jsx($O,{})}));
