function Vg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bd={exports:{}},hs={},$d={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Hg=Symbol.for("react.portal"),Kg=Symbol.for("react.fragment"),Gg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),Jg=Symbol.for("react.suspense"),Zg=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),yc=Symbol.iterator;function tv(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vd=Object.assign,Hd={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Wd}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kd(){}Kd.prototype=Sr.prototype;function Xl(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Wd}var ql=Xl.prototype=new Kd;ql.constructor=Xl;Vd(ql,Sr.prototype);ql.isPureReactComponent=!0;var wc=Array.isArray,Gd=Object.prototype.hasOwnProperty,Jl={current:null},Yd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Gd.call(t,r)&&!Yd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ni,type:e,key:o,ref:s,props:i,_owner:Jl.current}}function nv(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _c=/\/+/g;function $s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rv(""+e.key):t.toString(36)}function ho(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ni:case Hg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+$s(s,0):r,wc(i)?(n="",e!=null&&(n=e.replace(_c,"$&/")+"/"),ho(i,t,n,"",function(u){return u})):i!=null&&(Zl(i)&&(i=nv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_c,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",wc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+$s(o,a);s+=ho(o,t,n,l,i)}else if(l=tv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+$s(o,a++),s+=ho(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Gi(e,t,n){if(e==null)return e;var r=[],i=0;return ho(e,r,"","",function(o){return t.call(n,o,i++)}),r}function iv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},po={transition:null},ov={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:po,ReactCurrentOwner:Jl};function Xd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Gi,forEach:function(e,t,n){Gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gi(e,function(){t++}),t},toArray:function(e){return Gi(e,function(t){return t})||[]},only:function(e){if(!Zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Sr;M.Fragment=Kg;M.Profiler=Yg;M.PureComponent=Xl;M.StrictMode=Gg;M.Suspense=Jg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;M.act=Xd;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gd.call(t,l)&&!Yd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ni,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qg,_context:e},e.Consumer=e};M.createElement=Qd;M.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:qg,render:e}};M.isValidElement=Zl;M.lazy=function(e){return{$$typeof:ev,_payload:{_status:-1,_result:e},_init:iv}};M.memo=function(e,t){return{$$typeof:Zg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=po.transition;po.transition={};try{e()}finally{po.transition=t}};M.unstable_act=Xd;M.useCallback=function(e,t){return ge.current.useCallback(e,t)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,t){return ge.current.useEffect(e,t)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ge.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.3.1";$d.exports=M;var I=$d.exports;const ps=zd(I),sv=Vg({__proto__:null,default:ps},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=I,lv=Symbol.for("react.element"),uv=Symbol.for("react.fragment"),cv=Object.prototype.hasOwnProperty,fv=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)cv.call(t,r)&&!dv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lv,type:e,key:o,ref:s,props:i,_owner:fv.current}}hs.Fragment=uv;hs.jsx=qd;hs.jsxs=qd;Bd.exports=hs;var g=Bd.exports,Jd={exports:{}},Ne={},Zd={exports:{}},eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var b=T.length;T.push(R);e:for(;0<b;){var q=b-1>>>1,re=T[q];if(0<i(re,R))T[q]=R,T[b]=re,b=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],b=T.pop();if(b!==R){T[0]=b;e:for(var q=0,re=T.length,Hi=re>>>1;q<Hi;){var hn=2*(q+1)-1,Bs=T[hn],pn=hn+1,Ki=T[pn];if(0>i(Bs,b))pn<re&&0>i(Ki,Bs)?(T[q]=Ki,T[pn]=b,q=pn):(T[q]=Bs,T[hn]=b,q=hn);else if(pn<re&&0>i(Ki,b))T[q]=Ki,T[pn]=b,q=pn;else break e}}return R}function i(T,R){var b=T.sortIndex-R.sortIndex;return b!==0?b:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,p=3,v=!1,y=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function w(T){if(_=!1,m(T),!y)if(n(l)!==null)y=!0,Fs(k);else{var R=n(u);R!==null&&zs(w,R.startTime-T)}}function k(T,R){y=!1,_&&(_=!1,h(A),A=-1),v=!0;var b=p;try{for(m(R),d=n(l);d!==null&&(!(d.expirationTime>R)||T&&!Fe());){var q=d.callback;if(typeof q=="function"){d.callback=null,p=d.priorityLevel;var re=q(d.expirationTime<=R);R=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),m(R)}else r(l);d=n(l)}if(d!==null)var Hi=!0;else{var hn=n(u);hn!==null&&zs(w,hn.startTime-R),Hi=!1}return Hi}finally{d=null,p=b,v=!1}}var P=!1,x=null,A=-1,B=5,L=-1;function Fe(){return!(e.unstable_now()-L<B)}function Pr(){if(x!==null){var T=e.unstable_now();L=T;var R=!0;try{R=x(!0,T)}finally{R?Nr():(P=!1,x=null)}}else P=!1}var Nr;if(typeof f=="function")Nr=function(){f(Pr)};else if(typeof MessageChannel<"u"){var vc=new MessageChannel,Wg=vc.port2;vc.port1.onmessage=Pr,Nr=function(){Wg.postMessage(null)}}else Nr=function(){E(Pr,0)};function Fs(T){x=T,P||(P=!0,Nr())}function zs(T,R){A=E(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Fs(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var b=p;p=R;try{return T()}finally{p=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=p;p=T;try{return R()}finally{p=b}},e.unstable_scheduleCallback=function(T,R,b){var q=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?q+b:q):b=q,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=b+re,T={id:c++,callback:R,priorityLevel:T,startTime:b,expirationTime:re,sortIndex:-1},b>q?(T.sortIndex=b,t(u,T),n(l)===null&&T===n(u)&&(_?(h(A),A=-1):_=!0,zs(w,b-q))):(T.sortIndex=re,t(l,T),y||v||(y=!0,Fs(k))),T},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(T){var R=p;return function(){var b=p;p=R;try{return T.apply(this,arguments)}finally{p=b}}}})(eh);Zd.exports=eh;var hv=Zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=I,Pe=hv;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var th=new Set,ii={};function Mn(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ii[e]=t,e=0;e<t.length;e++)th.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Na=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ec={},Sc={};function gv(e){return Na.call(Sc,e)?!0:Na.call(Ec,e)?!1:mv.test(e)?Sc[e]=!0:(Ec[e]=!0,!1)}function vv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yv(e,t,n,r){if(t===null||typeof t>"u"||vv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eu,tu);le[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eu,tu);le[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eu,tu);le[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function nu(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yv(t,n,i,r)&&(n=null),r||i===null?gv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),nh=Symbol.for("react.provider"),rh=Symbol.for("react.context"),iu=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ih=Symbol.for("react.offscreen"),kc=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ws;function Ur(e){if(Ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Vs=!1;function Hs(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function wv(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=Hs(e.type,!1),e;case 11:return e=Hs(e.type.render,!1),e;case 1:return e=Hs(e.type,!0),e;default:return""}}function ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Bn:return"Portal";case Aa:return"Profiler";case ru:return"StrictMode";case Oa:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rh:return(e.displayName||"Context")+".Consumer";case nh:return(e._context.displayName||"Context")+".Provider";case iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ou:return t=e.displayName||null,t!==null?t:ba(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return ba(e(t))}catch{}}return null}function _v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ba(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ev(e){var t=oh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=Ev(e))}function sh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function La(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ic(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ah(e,t){t=t.checked,t!=null&&nu(e,"checked",t,!1)}function Da(e,t){ah(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Fr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function lh(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,ch=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Sv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function fh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function dh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(kv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,nr=null,rr=null;function Pc(e){if(e=Ri(e)){if(typeof $a!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ws(t),$a(e.stateNode,e.type,t))}}function hh(e){nr?rr?rr.push(e):rr=[e]:nr=e}function ph(){if(nr){var e=nr,t=rr;if(rr=nr=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function mh(e,t){return e(t)}function gh(){}var Ks=!1;function vh(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return mh(e,t,n)}finally{Ks=!1,(nr!==null||rr!==null)&&(gh(),ph())}}function si(e,t){var n=e.stateNode;if(n===null)return null;var r=ws(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Wa=!1;if(yt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Wa=!1}function Iv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Gr=!1,Ro=null,bo=!1,Va=null,Cv={onError:function(e){Gr=!0,Ro=e}};function xv(e,t,n,r,i,o,s,a,l){Gr=!1,Ro=null,Iv.apply(Cv,arguments)}function Tv(e,t,n,r,i,o,s,a,l){if(xv.apply(this,arguments),Gr){if(Gr){var u=Ro;Gr=!1,Ro=null}else throw Error(S(198));bo||(bo=!0,Va=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(jn(e)!==e)throw Error(S(188))}function Pv(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Nc(i),e;if(o===r)return Nc(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function wh(e){return e=Pv(e),e!==null?_h(e):null}function _h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_h(e);if(t!==null)return t;e=e.sibling}return null}var Eh=Pe.unstable_scheduleCallback,Ac=Pe.unstable_cancelCallback,Nv=Pe.unstable_shouldYield,Av=Pe.unstable_requestPaint,J=Pe.unstable_now,Ov=Pe.unstable_getCurrentPriorityLevel,au=Pe.unstable_ImmediatePriority,Sh=Pe.unstable_UserBlockingPriority,Lo=Pe.unstable_NormalPriority,Rv=Pe.unstable_LowPriority,kh=Pe.unstable_IdlePriority,ms=null,nt=null;function bv(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(ms,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Mv,Lv=Math.log,Dv=Math.LN2;function Mv(e){return e>>>=0,e===0?32:31-(Lv(e)/Dv|0)|0}var qi=64,Ji=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=zr(a):(o&=s,o!==0&&(r=zr(o)))}else s=n&~i,s!==0?r=zr(s):o!==0&&(r=zr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function jv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-He(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=jv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ih(){var e=qi;return qi<<=1,!(qi&4194240)&&(qi=64),e}function Gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Fv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xh,uu,Th,Ph,Nh,Ka=!1,Zi=[],$t=null,Wt=null,Vt=null,ai=new Map,li=new Map,bt=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function Rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ri(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bv(e,t,n,r,i){switch(t){case"focusin":return $t=Rr($t,e,t,n,r,i),!0;case"dragenter":return Wt=Rr(Wt,e,t,n,r,i),!0;case"mouseover":return Vt=Rr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ai.set(o,Rr(ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,li.set(o,Rr(li.get(o)||null,e,t,n,r,i)),!0}return!1}function Ah(e){var t=wn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=yh(n),t!==null){e.blockedOn=t,Nh(e.priority,function(){Th(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ba=r,n.target.dispatchEvent(r),Ba=null}else return t=Ri(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function Rc(e,t,n){mo(e)&&n.delete(t)}function $v(){Ka=!1,$t!==null&&mo($t)&&($t=null),Wt!==null&&mo(Wt)&&(Wt=null),Vt!==null&&mo(Vt)&&(Vt=null),ai.forEach(Rc),li.forEach(Rc)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Ka||(Ka=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,$v)))}function ui(e){function t(i){return br(i,e)}if(0<Zi.length){br(Zi[0],e);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&br($t,e),Wt!==null&&br(Wt,e),Vt!==null&&br(Vt,e),ai.forEach(t),li.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Ah(n),n.blockedOn===null&&bt.shift()}var ir=xt.ReactCurrentBatchConfig,Mo=!0;function Wv(e,t,n,r){var i=U,o=ir.transition;ir.transition=null;try{U=1,cu(e,t,n,r)}finally{U=i,ir.transition=o}}function Vv(e,t,n,r){var i=U,o=ir.transition;ir.transition=null;try{U=4,cu(e,t,n,r)}finally{U=i,ir.transition=o}}function cu(e,t,n,r){if(Mo){var i=Ga(e,t,n,r);if(i===null)ra(e,t,r,jo,n),Oc(e,r);else if(Bv(i,e,t,n,r))r.stopPropagation();else if(Oc(e,r),t&4&&-1<zv.indexOf(e)){for(;i!==null;){var o=Ri(i);if(o!==null&&xh(o),o=Ga(e,t,n,r),o===null&&ra(e,t,r,jo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ra(e,t,r,null,n)}}var jo=null;function Ga(e,t,n,r){if(jo=null,e=su(r),e=wn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ov()){case au:return 1;case Sh:return 4;case Lo:case Rv:return 16;case kh:return 536870912;default:return 16}default:return 16}}var Ut=null,fu=null,go=null;function Rh(){if(go)return go;var e,t=fu,n=t.length,r,i="value"in Ut?Ut.value:Ut.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return go=i.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function bc(){return!1}function Ae(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?eo:bc,this.isPropagationStopped=bc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=Ae(kr),Oi=Q({},kr,{view:0,detail:0}),Hv=Ae(Oi),Ys,Qs,Lr,gs=Q({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ys=e.screenX-Lr.screenX,Qs=e.screenY-Lr.screenY):Qs=Ys=0,Lr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),Lc=Ae(gs),Kv=Q({},gs,{dataTransfer:0}),Gv=Ae(Kv),Yv=Q({},Oi,{relatedTarget:0}),Xs=Ae(Yv),Qv=Q({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Ae(Qv),qv=Q({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jv=Ae(qv),Zv=Q({},kr,{data:0}),Dc=Ae(Zv),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ny[e])?!!t[e]:!1}function hu(){return ry}var iy=Q({},Oi,{key:function(e){if(e.key){var t=ey[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=Ae(iy),sy=Q({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=Ae(sy),ay=Q({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),ly=Ae(ay),uy=Q({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=Ae(uy),fy=Q({},gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Ae(fy),hy=[9,13,27,32],pu=yt&&"CompositionEvent"in window,Yr=null;yt&&"documentMode"in document&&(Yr=document.documentMode);var py=yt&&"TextEvent"in window&&!Yr,bh=yt&&(!pu||Yr&&8<Yr&&11>=Yr),jc=" ",Uc=!1;function Lh(e,t){switch(e){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function my(e,t){switch(e){case"compositionend":return Dh(t);case"keypress":return t.which!==32?null:(Uc=!0,jc);case"textInput":return e=t.data,e===jc&&Uc?null:e;default:return null}}function gy(e,t){if(Wn)return e==="compositionend"||!pu&&Lh(e,t)?(e=Rh(),go=fu=Ut=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bh&&t.locale!=="ko"?null:t.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vy[e.type]:t==="textarea"}function Mh(e,t,n,r){hh(r),t=Uo(t,"onChange"),0<t.length&&(n=new du("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ci=null;function yy(e){Gh(e,0)}function vs(e){var t=Kn(e);if(sh(t))return e}function wy(e,t){if(e==="change")return t}var jh=!1;if(yt){var qs;if(yt){var Js="oninput"in document;if(!Js){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Js=typeof zc.oninput=="function"}qs=Js}else qs=!1;jh=qs&&(!document.documentMode||9<document.documentMode)}function Bc(){Qr&&(Qr.detachEvent("onpropertychange",Uh),ci=Qr=null)}function Uh(e){if(e.propertyName==="value"&&vs(ci)){var t=[];Mh(t,ci,e,su(e)),vh(yy,t)}}function _y(e,t,n){e==="focusin"?(Bc(),Qr=t,ci=n,Qr.attachEvent("onpropertychange",Uh)):e==="focusout"&&Bc()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vs(ci)}function Sy(e,t){if(e==="click")return vs(t)}function ky(e,t){if(e==="input"||e==="change")return vs(t)}function Iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Iy;function fi(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Na.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function $c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,t){var n=$c(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$c(n)}}function Fh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zh(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cy(e){var t=zh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fh(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wc(n,o);var s=Wc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xy=yt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ya=null,Xr=null,Qa=!1;function Vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qa||Vn==null||Vn!==Oo(r)||(r=Vn,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&fi(Xr,r)||(Xr=r,r=Uo(Ya,"onSelect"),0<r.length&&(t=new du("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},Zs={},Bh={};yt&&(Bh=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function ys(e){if(Zs[e])return Zs[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bh)return Zs[e]=t[n];return e}var $h=ys("animationend"),Wh=ys("animationiteration"),Vh=ys("animationstart"),Hh=ys("transitionend"),Kh=new Map,Hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){Kh.set(e,t),Mn(t,[e])}for(var ea=0;ea<Hc.length;ea++){var ta=Hc[ea],Ty=ta.toLowerCase(),Py=ta[0].toUpperCase()+ta.slice(1);on(Ty,"on"+Py)}on($h,"onAnimationEnd");on(Wh,"onAnimationIteration");on(Vh,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Hh,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tv(r,t,void 0,e),e.currentTarget=null}function Gh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Kc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Kc(i,a,u),o=l}}}if(bo)throw e=Va,bo=!1,Va=null,e}function $(e,t){var n=t[el];n===void 0&&(n=t[el]=new Set);var r=e+"__bubble";n.has(r)||(Yh(t,e,2,!1),n.add(r))}function na(e,t,n){var r=0;t&&(r|=4),Yh(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[no]){e[no]=!0,th.forEach(function(n){n!=="selectionchange"&&(Ny.has(n)||na(n,!1,e),na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,na("selectionchange",!1,t))}}function Yh(e,t,n,r){switch(Oh(t)){case 1:var i=Wv;break;case 4:i=Vv;break;default:i=cu}n=i.bind(null,t,n,e),i=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ra(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=wn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}vh(function(){var u=o,c=su(n),d=[];e:{var p=Kh.get(e);if(p!==void 0){var v=du,y=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":v=oy;break;case"focusin":y="focus",v=Xs;break;case"focusout":y="blur",v=Xs;break;case"beforeblur":case"afterblur":v=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ly;break;case $h:case Wh:case Vh:v=Xv;break;case Hh:v=cy;break;case"scroll":v=Hv;break;case"wheel":v=dy;break;case"copy":case"cut":case"paste":v=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mc}var _=(t&4)!==0,E=!_&&e==="scroll",h=_?p!==null?p+"Capture":null:p;_=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=si(f,h),w!=null&&_.push(hi(f,w,m)))),E)break;f=f.return}0<_.length&&(p=new v(p,y,null,n,c),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ba&&(y=n.relatedTarget||n.fromElement)&&(wn(y)||y[wt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?wn(y):null,y!==null&&(E=jn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Lc,w="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=Mc,w="onPointerLeave",h="onPointerEnter",f="pointer"),E=v==null?p:Kn(v),m=y==null?p:Kn(y),p=new _(w,f+"leave",v,n,c),p.target=E,p.relatedTarget=m,w=null,wn(c)===u&&(_=new _(h,f+"enter",y,n,c),_.target=m,_.relatedTarget=E,w=_),E=w,v&&y)t:{for(_=v,h=y,f=0,m=_;m;m=zn(m))f++;for(m=0,w=h;w;w=zn(w))m++;for(;0<f-m;)_=zn(_),f--;for(;0<m-f;)h=zn(h),m--;for(;f--;){if(_===h||h!==null&&_===h.alternate)break t;_=zn(_),h=zn(h)}_=null}else _=null;v!==null&&Gc(d,p,v,_,!1),y!==null&&E!==null&&Gc(d,E,y,_,!0)}}e:{if(p=u?Kn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=wy;else if(Fc(p))if(jh)k=ky;else{k=Ey;var P=_y}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Sy);if(k&&(k=k(e,u))){Mh(d,k,n,c);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Ma(p,"number",p.value)}switch(P=u?Kn(u):window,e){case"focusin":(Fc(P)||P.contentEditable==="true")&&(Vn=P,Ya=u,Xr=null);break;case"focusout":Xr=Ya=Vn=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,Vc(d,n,c);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":Vc(d,n,c)}var x;if(pu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Wn?Lh(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(bh&&n.locale!=="ko"&&(Wn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Wn&&(x=Rh()):(Ut=c,fu="value"in Ut?Ut.value:Ut.textContent,Wn=!0)),P=Uo(u,A),0<P.length&&(A=new Dc(A,e,null,n,c),d.push({event:A,listeners:P}),x?A.data=x:(x=Dh(n),x!==null&&(A.data=x)))),(x=py?my(e,n):gy(e,n))&&(u=Uo(u,"onBeforeInput"),0<u.length&&(c=new Dc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}Gh(d,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=si(e,n),o!=null&&r.unshift(hi(e,o,i)),o=si(e,t),o!=null&&r.push(hi(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=si(n,o),l!=null&&s.unshift(hi(n,l,a))):i||(l=si(n,o),l!=null&&s.push(hi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ay=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(Ay,`
`).replace(Oy,"")}function ro(e,t,n){if(t=Yc(t),Yc(e)!==t&&n)throw Error(S(425))}function Fo(){}var Xa=null,qa=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,Qc=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Qc<"u"?function(e){return Qc.resolve(null).then(e).catch(Ly)}:Za;function Ly(e){setTimeout(function(){throw e})}function ia(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Ir,pi="__reactProps$"+Ir,wt="__reactContainer$"+Ir,el="__reactEvents$"+Ir,Dy="__reactListeners$"+Ir,My="__reactHandles$"+Ir;function wn(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xc(e);e!==null;){if(n=e[Ze])return n;e=Xc(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[Ze]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ws(e){return e[pi]||null}var tl=[],Gn=-1;function sn(e){return{current:e}}function W(e){0>Gn||(e.current=tl[Gn],tl[Gn]=null,Gn--)}function z(e,t){Gn++,tl[Gn]=e.current,e.current=t}var en={},de=sn(en),_e=sn(!1),Tn=en;function hr(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function zo(){W(_e),W(de)}function qc(e,t,n){if(de.current!==en)throw Error(S(168));z(de,t),z(_e,n)}function Qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,_v(e)||"Unknown",i));return Q({},n,r)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,Tn=de.current,z(de,e),z(_e,_e.current),!0}function Jc(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Qh(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,W(_e),W(de),z(de,e)):W(_e),z(_e,n)}var at=null,_s=!1,oa=!1;function Xh(e){at===null?at=[e]:at.push(e)}function jy(e){_s=!0,Xh(e)}function an(){if(!oa&&at!==null){oa=!0;var e=0,t=U;try{var n=at;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,_s=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),Eh(au,an),i}finally{U=t,oa=!1}}return null}var Yn=[],Qn=0,$o=null,Wo=0,Re=[],be=0,Pn=null,ct=1,ft="";function mn(e,t){Yn[Qn++]=Wo,Yn[Qn++]=$o,$o=e,Wo=t}function qh(e,t,n){Re[be++]=ct,Re[be++]=ft,Re[be++]=Pn,Pn=e;var r=ct;e=ft;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ct=1<<32-He(t)+i|n<<i|r,ft=o+e}else ct=1<<o|n<<i|r,ft=e}function gu(e){e.return!==null&&(mn(e,1),qh(e,1,0))}function vu(e){for(;e===$o;)$o=Yn[--Qn],Yn[Qn]=null,Wo=Yn[--Qn],Yn[Qn]=null;for(;e===Pn;)Pn=Re[--be],Re[be]=null,ft=Re[--be],Re[be]=null,ct=Re[--be],Re[be]=null}var Ce=null,Ie=null,H=!1,We=null;function Jh(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ie=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:ct,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ie=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rl(e){if(H){var t=Ie;if(t){var n=t;if(!Zc(e,t)){if(nl(e))throw Error(S(418));t=Ht(n.nextSibling);var r=Ce;t&&Zc(e,t)?Jh(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(nl(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function ef(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function io(e){if(e!==Ce)return!1;if(!H)return ef(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=Ie)){if(nl(e))throw Zh(),Error(S(418));for(;t;)Jh(e,t),t=Ht(t.nextSibling)}if(ef(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Ce?Ht(e.stateNode.nextSibling):null;return!0}function Zh(){for(var e=Ie;e;)e=Ht(e.nextSibling)}function pr(){Ie=Ce=null,H=!1}function yu(e){We===null?We=[e]:We.push(e)}var Uy=xt.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tf(e){var t=e._init;return t(e._payload)}function ep(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Qt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,w){return f===null||f.tag!==6?(f=da(m,h.mode,w),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,w){var k=m.type;return k===$n?c(h,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ot&&tf(k)===f.type)?(w=i(f,m.props),w.ref=Dr(h,f,m),w.return=h,w):(w=Io(m.type,m.key,m.props,null,h.mode,w),w.ref=Dr(h,f,m),w.return=h,w)}function u(h,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ha(m,h.mode,w),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,w,k){return f===null||f.tag!==7?(f=In(m,h.mode,w,k),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=da(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yi:return m=Io(f.type,f.key,f.props,null,h.mode,m),m.ref=Dr(h,null,f),m.return=h,m;case Bn:return f=ha(f,h.mode,m),f.return=h,f;case Ot:var w=f._init;return d(h,w(f._payload),m)}if(Fr(f)||Ar(f))return f=In(f,h.mode,m,null),f.return=h,f;oo(h,f)}return null}function p(h,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:return m.key===k?l(h,f,m,w):null;case Bn:return m.key===k?u(h,f,m,w):null;case Ot:return k=m._init,p(h,f,k(m._payload),w)}if(Fr(m)||Ar(m))return k!==null?null:c(h,f,m,w,null);oo(h,m)}return null}function v(h,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(f,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yi:return h=h.get(w.key===null?m:w.key)||null,l(f,h,w,k);case Bn:return h=h.get(w.key===null?m:w.key)||null,u(f,h,w,k);case Ot:var P=w._init;return v(h,f,m,P(w._payload),k)}if(Fr(w)||Ar(w))return h=h.get(m)||null,c(f,h,w,k,null);oo(f,w)}return null}function y(h,f,m,w){for(var k=null,P=null,x=f,A=f=0,B=null;x!==null&&A<m.length;A++){x.index>A?(B=x,x=null):B=x.sibling;var L=p(h,x,m[A],w);if(L===null){x===null&&(x=B);break}e&&x&&L.alternate===null&&t(h,x),f=o(L,f,A),P===null?k=L:P.sibling=L,P=L,x=B}if(A===m.length)return n(h,x),H&&mn(h,A),k;if(x===null){for(;A<m.length;A++)x=d(h,m[A],w),x!==null&&(f=o(x,f,A),P===null?k=x:P.sibling=x,P=x);return H&&mn(h,A),k}for(x=r(h,x);A<m.length;A++)B=v(x,h,A,m[A],w),B!==null&&(e&&B.alternate!==null&&x.delete(B.key===null?A:B.key),f=o(B,f,A),P===null?k=B:P.sibling=B,P=B);return e&&x.forEach(function(Fe){return t(h,Fe)}),H&&mn(h,A),k}function _(h,f,m,w){var k=Ar(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var P=k=null,x=f,A=f=0,B=null,L=m.next();x!==null&&!L.done;A++,L=m.next()){x.index>A?(B=x,x=null):B=x.sibling;var Fe=p(h,x,L.value,w);if(Fe===null){x===null&&(x=B);break}e&&x&&Fe.alternate===null&&t(h,x),f=o(Fe,f,A),P===null?k=Fe:P.sibling=Fe,P=Fe,x=B}if(L.done)return n(h,x),H&&mn(h,A),k;if(x===null){for(;!L.done;A++,L=m.next())L=d(h,L.value,w),L!==null&&(f=o(L,f,A),P===null?k=L:P.sibling=L,P=L);return H&&mn(h,A),k}for(x=r(h,x);!L.done;A++,L=m.next())L=v(x,h,A,L.value,w),L!==null&&(e&&L.alternate!==null&&x.delete(L.key===null?A:L.key),f=o(L,f,A),P===null?k=L:P.sibling=L,P=L);return e&&x.forEach(function(Pr){return t(h,Pr)}),H&&mn(h,A),k}function E(h,f,m,w){if(typeof m=="object"&&m!==null&&m.type===$n&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:e:{for(var k=m.key,P=f;P!==null;){if(P.key===k){if(k=m.type,k===$n){if(P.tag===7){n(h,P.sibling),f=i(P,m.props.children),f.return=h,h=f;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ot&&tf(k)===P.type){n(h,P.sibling),f=i(P,m.props),f.ref=Dr(h,P,m),f.return=h,h=f;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===$n?(f=In(m.props.children,h.mode,w,m.key),f.return=h,h=f):(w=Io(m.type,m.key,m.props,null,h.mode,w),w.ref=Dr(h,f,m),w.return=h,h=w)}return s(h);case Bn:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=ha(m,h.mode,w),f.return=h,h=f}return s(h);case Ot:return P=m._init,E(h,f,P(m._payload),w)}if(Fr(m))return y(h,f,m,w);if(Ar(m))return _(h,f,m,w);oo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=da(m,h.mode,w),f.return=h,h=f),s(h)):n(h,f)}return E}var mr=ep(!0),tp=ep(!1),Vo=sn(null),Ho=null,Xn=null,wu=null;function _u(){wu=Xn=Ho=null}function Eu(e){var t=Vo.current;W(Vo),e._currentValue=t}function il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Ho=e,wu=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(wu!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Ho===null)throw Error(S(308));Xn=e,Ho.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var _n=null;function Su(e){_n===null?_n=[e]:_n.push(e)}function np(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Su(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,Su(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lu(e,n)}}function nf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ko(e,t,n,r){var i=e.updateQueue;Rt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,v=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(p=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=Q({},d,p);break e;case 2:Rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);An|=s,e.lanes=s,e.memoizedState=d}}function rf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var bi={},rt=sn(bi),mi=sn(bi),gi=sn(bi);function En(e){if(e===bi)throw Error(S(174));return e}function Iu(e,t){switch(z(gi,t),z(mi,e),z(rt,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}W(rt),z(rt,t)}function gr(){W(rt),W(mi),W(gi)}function ip(e){En(gi.current);var t=En(rt.current),n=Ua(t,e.type);t!==n&&(z(mi,e),z(rt,n))}function Cu(e){mi.current===e&&(W(rt),W(mi))}var G=sn(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function xu(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var wo=xt.ReactCurrentDispatcher,aa=xt.ReactCurrentBatchConfig,Nn=0,Y=null,te=null,ie=null,Yo=!1,qr=!1,vi=0,Fy=0;function ue(){throw Error(S(321))}function Tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,i,o){if(Nn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?Wy:Vy,e=n(r,i),qr){o=0;do{if(qr=!1,vi=0,25<=o)throw Error(S(301));o+=1,ie=te=null,t.updateQueue=null,wo.current=Hy,e=n(r,i)}while(qr)}if(wo.current=Qo,t=te!==null&&te.next!==null,Nn=0,ie=te=Y=null,Yo=!1,t)throw Error(S(300));return e}function Nu(){var e=vi!==0;return vi=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function je(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function yi(e,t){return typeof t=="function"?t(e):t}function la(e){var t=je(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Nn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Y.lanes|=c,An|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ye(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,An|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ua(e){var t=je(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ye(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function op(){}function sp(e,t){var n=Y,r=je(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,Au(up.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,wi(9,lp.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(S(349));Nn&30||ap(n,t,i)}return i}function ap(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lp(e,t,n,r){t.value=n,t.getSnapshot=r,cp(t)&&fp(e)}function up(e,t,n){return n(function(){cp(t)&&fp(e)})}function cp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function fp(e){var t=_t(e,1);t!==null&&Ke(t,e,1,-1)}function of(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=$y.bind(null,Y,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dp(){return je().memoizedState}function _o(e,t,n,r){var i=qe();Y.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Es(e,t,n,r){var i=je();r=r===void 0?null:r;var o=void 0;if(te!==null){var s=te.memoizedState;if(o=s.destroy,r!==null&&Tu(r,s.deps)){i.memoizedState=wi(t,n,o,r);return}}Y.flags|=e,i.memoizedState=wi(1|t,n,o,r)}function sf(e,t){return _o(8390656,8,e,t)}function Au(e,t){return Es(2048,8,e,t)}function hp(e,t){return Es(4,2,e,t)}function pp(e,t){return Es(4,4,e,t)}function mp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gp(e,t,n){return n=n!=null?n.concat([e]):null,Es(4,4,mp.bind(null,t,e),n)}function Ou(){}function vp(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yp(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wp(e,t,n){return Nn&21?(Ye(n,t)||(n=Ih(),Y.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function zy(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=aa.transition;aa.transition={};try{e(!1),t()}finally{U=n,aa.transition=r}}function _p(){return je().memoizedState}function By(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ep(e))Sp(t,n);else if(n=np(e,t,n,r),n!==null){var i=pe();Ke(n,e,r,i),kp(n,t,r)}}function $y(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ep(e))Sp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,s)){var l=t.interleaved;l===null?(i.next=i,Su(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=np(e,t,i,r),n!==null&&(i=pe(),Ke(n,e,r,i),kp(n,t,r))}}function Ep(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Sp(e,t){qr=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lu(e,n)}}var Qo={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Wy={readContext:Me,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:sf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_o(4194308,4,mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=By.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:of,useDebugValue:Ou,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=of(!1),t=e[0];return e=zy.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=qe();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));Nn&30||ap(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,sf(up.bind(null,r,o,e),[e]),r.flags|=2048,wi(9,lp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=oe.identifierPrefix;if(H){var n=ft,r=ct;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vy={readContext:Me,useCallback:vp,useContext:Me,useEffect:Au,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:yp,useReducer:la,useRef:dp,useState:function(){return la(yi)},useDebugValue:Ou,useDeferredValue:function(e){var t=je();return wp(t,te.memoizedState,e)},useTransition:function(){var e=la(yi)[0],t=je().memoizedState;return[e,t]},useMutableSource:op,useSyncExternalStore:sp,useId:_p,unstable_isNewReconciler:!1},Hy={readContext:Me,useCallback:vp,useContext:Me,useEffect:Au,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:yp,useReducer:ua,useRef:dp,useState:function(){return ua(yi)},useDebugValue:Ou,useDeferredValue:function(e){var t=je();return te===null?t.memoizedState=e:wp(t,te.memoizedState,e)},useTransition:function(){var e=ua(yi)[0],t=je().memoizedState;return[e,t]},useMutableSource:op,useSyncExternalStore:sp,useId:_p,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Yt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(Ke(t,e,i,r),yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Yt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(Ke(t,e,i,r),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Yt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(Ke(t,e,r,n),yo(t,e,r))}};function af(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!fi(n,r)||!fi(i,o):!0}function Ip(e,t,n){var r=!1,i=en,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=Ee(t)?Tn:de.current,r=t.contextTypes,o=(r=r!=null)?hr(e,i):en),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function lf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ku(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=Ee(t)?Tn:de.current,i.context=hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ol(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),Ko(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t){try{var n="",r=t;do n+=wv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ky=typeof WeakMap=="function"?WeakMap:Map;function Cp(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,vl=r),al(e,t)},n}function xp(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){al(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){al(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function uf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ky;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s0.bind(null,e,t,n),t.then(e,e))}function cf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ff(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var Gy=xt.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?tp(t,null,n,r):mr(t,e.child,n,r)}function df(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=Pu(e,t,n,r,o,i),n=Nu(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(H&&n&&gu(t),t.flags|=1,he(e,t,r,i),t.child)}function hf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tp(e,t,o,r,i)):(e=Io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:fi,n(s,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(fi(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,Et(e,t,i)}return ll(e,t,n,r,i)}function Pp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Jn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Jn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Jn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Jn,ke),ke|=r;return he(e,t,i,n),t.child}function Np(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ll(e,t,n,r,i){var o=Ee(n)?Tn:de.current;return o=hr(t,o),or(t,i),n=Pu(e,t,n,r,o,i),r=Nu(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(H&&r&&gu(t),t.flags|=1,he(e,t,n,i),t.child)}function pf(e,t,n,r,i){if(Ee(n)){var o=!0;Bo(t)}else o=!1;if(or(t,i),t.stateNode===null)Eo(e,t),Ip(t,n,r),sl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Ee(n)?Tn:de.current,u=hr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&lf(t,s,r,u),Rt=!1;var p=t.memoizedState;s.state=p,Ko(t,r,s,i),l=t.memoizedState,a!==r||p!==l||_e.current||Rt?(typeof c=="function"&&(ol(t,n,c,r),l=t.memoizedState),(a=Rt||af(t,n,a,r,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,rp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Be(t.type,a),s.props=u,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=Ee(n)?Tn:de.current,l=hr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&lf(t,s,r,l),Rt=!1,p=t.memoizedState,s.state=p,Ko(t,r,s,i);var y=t.memoizedState;a!==d||p!==y||_e.current||Rt?(typeof v=="function"&&(ol(t,n,v,r),y=t.memoizedState),(u=Rt||af(t,n,u,r,p,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ul(e,t,n,r,o,i)}function ul(e,t,n,r,i,o){Np(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Jc(t,n,!1),Et(e,t,o);r=t.stateNode,Gy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mr(t,e.child,null,o),t.child=mr(t,null,a,o)):he(e,t,a,o),t.memoizedState=r.state,i&&Jc(t,n,!0),t.child}function Ap(e){var t=e.stateNode;t.pendingContext?qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qc(e,t.context,!1),Iu(e,t.containerInfo)}function mf(e,t,n,r,i){return pr(),yu(i),t.flags|=256,he(e,t,n,r),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Op(e,t,n){var r=t.pendingProps,i=G.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(G,i&1),e===null)return rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Cs(s,r,0,null),e=In(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=fl(n),t.memoizedState=cl,e):Ru(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Yy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Qt(a,o):(o=In(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?fl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=cl,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ru(e,t){return t=Cs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,r){return r!==null&&yu(r),mr(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ca(Error(S(422))),so(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cs({mode:"visible",children:r.children},i,0,null),o=In(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mr(t,e.child,null,s),t.child.memoizedState=fl(s),t.memoizedState=cl,o);if(!(t.mode&1))return so(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=ca(o,r,void 0),so(e,t,s,r)}if(a=(s&e.childLanes)!==0,we||a){if(r=oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(e,i),Ke(r,e,i,-1))}return Uu(),r=ca(Error(S(421))),so(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=a0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ie=Ht(i.nextSibling),Ce=t,H=!0,We=null,e!==null&&(Re[be++]=ct,Re[be++]=ft,Re[be++]=Pn,ct=e.id,ft=e.overflow,Pn=t),t=Ru(t,r.children),t.flags|=4096,t)}function gf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),il(e.return,t,n)}function fa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,n,t);else if(e.tag===19)gf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fa(t,!0,n,null,o);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qy(e,t,n){switch(t.tag){case 3:Ap(t),pr();break;case 5:ip(t);break;case 1:Ee(t.type)&&Bo(t);break;case 4:Iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Op(e,t,n):(z(G,G.current&1),e=Et(e,t,n),e!==null?e.sibling:null);z(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Pp(e,t,n)}return Et(e,t,n)}var bp,dl,Lp,Dp;bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};Lp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,En(rt.current);var o=null;switch(n){case"input":i=La(e,i),r=La(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=ja(e,i),r=ja(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}Fa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Dp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xy(e,t,n){var r=t.pendingProps;switch(vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ee(t.type)&&zo(),ce(t),null;case 3:return r=t.stateNode,gr(),W(_e),W(de),xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(_l(We),We=null))),dl(e,t),ce(t),null;case 5:Cu(t);var i=En(gi.current);if(n=t.type,e!==null&&t.stateNode!=null)Lp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=En(rt.current),io(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ze]=t,r[pi]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)$(Br[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ic(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":xc(r,o),$("invalid",r)}Fa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,a,e),i=["children",""+a]):ii.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":Qi(r),Cc(r,o,!0);break;case"textarea":Qi(r),Tc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ze]=t,e[pi]=r,bp(e,t,!1,!1),t.stateNode=e;e:{switch(s=za(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)$(Br[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Ic(e,r),i=La(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":xc(e,r),i=ja(e,r),$("invalid",e);break;default:i=r}Fa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?dh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ch(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oi(e,l):typeof l=="number"&&oi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&nu(e,o,l,s))}switch(n){case"input":Qi(e),Cc(e,r,!1);break;case"textarea":Qi(e),Tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Dp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=En(gi.current),En(rt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ce(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ie!==null&&t.mode&1&&!(t.flags&128))Zh(),pr(),t.flags|=98560,o=!1;else if(o=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Ze]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else We!==null&&(_l(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):Uu())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return gr(),dl(e,t),e===null&&di(t.stateNode.containerInfo),ce(t),null;case 10:return Eu(t.type._context),ce(t),null;case 17:return Ee(t.type)&&zo(),ce(t),null;case 19:if(W(G),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Mr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Go(e),s!==null){for(t.flags|=128,Mr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>yr&&(t.flags|=128,r=!0,Mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Go(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return ce(t),null}else 2*J()-o.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=G.current,z(G,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function qy(e,t){switch(vu(t),t.tag){case 1:return Ee(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),W(_e),W(de),xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cu(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return gr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var ao=!1,fe=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,C=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){X(e,t,r)}}var vf=!1;function Zy(e,t){if(Xa=Mo,e=zh(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},Mo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,E=y.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:Be(t.type,_),E);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=vf,vf=!1,y}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hl(t,n,o)}i=i.next}while(i!==r)}}function ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mp(e){var t=e.alternate;t!==null&&(e.alternate=null,Mp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[pi],delete t[el],delete t[Dy],delete t[My])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jp(e){return e.tag===5||e.tag===3||e.tag===4}function yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}var se=null,$e=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(ms,n)}catch{}switch(n.tag){case 5:fe||qn(n,t);case 6:var r=se,i=$e;se=null,Pt(e,t,n),se=r,$e=i,se!==null&&($e?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&($e?(e=se,n=n.stateNode,e.nodeType===8?ia(e.parentNode,n):e.nodeType===1&&ia(e,n),ui(e)):ia(se,n.stateNode));break;case 4:r=se,i=$e,se=n.stateNode.containerInfo,$e=!0,Pt(e,t,n),se=r,$e=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&hl(n,t,s),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!fe&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,Pt(e,t,n),fe=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function wf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jy),t.forEach(function(r){var i=l0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,$e=!1;break e;case 3:se=a.stateNode.containerInfo,$e=!0;break e;case 4:se=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(se===null)throw Error(S(160));Up(o,s,i),se=null,$e=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fp(t,e),t=t.sibling}function Fp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Qe(e),r&4){try{Jr(3,e,e.return),ks(3,e)}catch(_){X(e,e.return,_)}try{Jr(5,e,e.return)}catch(_){X(e,e.return,_)}}break;case 1:ze(t,e),Qe(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ze(t,e),Qe(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(_){X(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ah(i,o),za(a,s);var u=za(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?dh(i,d):c==="dangerouslySetInnerHTML"?ch(i,d):c==="children"?oi(i,d):nu(i,c,d,u)}switch(a){case"input":Da(i,o);break;case"textarea":lh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?tr(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(_){X(e,e.return,_)}}break;case 6:if(ze(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){X(e,e.return,_)}}break;case 3:if(ze(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(_){X(e,e.return,_)}break;case 4:ze(t,e),Qe(e);break;case 13:ze(t,e),Qe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=J())),r&4&&wf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(u=fe)||c,ze(t,e),fe=u):ze(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(C=e,c=e.child;c!==null;){for(d=C=c;C!==null;){switch(p=C,v=p.child,p.tag){case 0:case 11:case 14:case 15:Jr(4,p,p.return);break;case 1:qn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){X(r,n,_)}}break;case 5:qn(p,p.return);break;case 22:if(p.memoizedState!==null){Ef(d);continue}}v!==null?(v.return=p,C=v):Ef(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fh("display",s))}catch(_){X(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){X(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ze(t,e),Qe(e),r&4&&wf(e);break;case 21:break;default:ze(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=yf(e);gl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=yf(e);ml(e,a,s);break;default:throw Error(S(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e0(e,t,n){C=e,zp(e)}function zp(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ao;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||fe;a=ao;var u=fe;if(ao=s,(fe=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?Sf(i):l!==null?(l.return=s,C=l):Sf(i);for(;o!==null;)C=o,zp(o),o=o.sibling;C=i,ao=a,fe=u}_f(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):_f(e)}}function _f(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ui(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||t.flags&512&&pl(t)}catch(p){X(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ef(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Sf(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ks(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var o=t.return;try{pl(t)}catch(l){X(t,o,l)}break;case 5:var s=t.return;try{pl(t)}catch(l){X(t,s,l)}}}catch(l){X(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var t0=Math.ceil,Xo=xt.ReactCurrentDispatcher,bu=xt.ReactCurrentOwner,De=xt.ReactCurrentBatchConfig,j=0,oe=null,Z=null,ae=0,ke=0,Jn=sn(0),ne=0,_i=null,An=0,Is=0,Lu=0,Zr=null,ye=null,Du=0,yr=1/0,st=null,qo=!1,vl=null,Gt=null,lo=!1,Ft=null,Jo=0,ei=0,yl=null,So=-1,ko=0;function pe(){return j&6?J():So!==-1?So:So=J()}function Yt(e){return e.mode&1?j&2&&ae!==0?ae&-ae:Uy.transition!==null?(ko===0&&(ko=Ih()),ko):(e=U,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e):1}function Ke(e,t,n,r){if(50<ei)throw ei=0,yl=null,Error(S(185));Ai(e,n,r),(!(j&2)||e!==oe)&&(e===oe&&(!(j&2)&&(Is|=n),ne===4&&Lt(e,ae)),Se(e,r),n===1&&j===0&&!(t.mode&1)&&(yr=J()+500,_s&&an()))}function Se(e,t){var n=e.callbackNode;Uv(e,t);var r=Do(e,e===oe?ae:0);if(r===0)n!==null&&Ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ac(n),t===1)e.tag===0?jy(kf.bind(null,e)):Xh(kf.bind(null,e)),by(function(){!(j&6)&&an()}),n=null;else{switch(Ch(r)){case 1:n=au;break;case 4:n=Sh;break;case 16:n=Lo;break;case 536870912:n=kh;break;default:n=Lo}n=Yp(n,Bp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bp(e,t){if(So=-1,ko=0,j&6)throw Error(S(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Do(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zo(e,r);else{t=r;var i=j;j|=2;var o=Wp();(oe!==e||ae!==t)&&(st=null,yr=J()+500,kn(e,t));do try{i0();break}catch(a){$p(e,a)}while(!0);_u(),Xo.current=o,j=i,Z!==null?t=0:(oe=null,ae=0,t=ne)}if(t!==0){if(t===2&&(i=Ha(e),i!==0&&(r=i,t=wl(e,i))),t===1)throw n=_i,kn(e,0),Lt(e,r),Se(e,J()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!n0(i)&&(t=Zo(e,r),t===2&&(o=Ha(e),o!==0&&(r=o,t=wl(e,o))),t===1))throw n=_i,kn(e,0),Lt(e,r),Se(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:gn(e,ye,st);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=Du+500-J(),10<t)){if(Do(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Za(gn.bind(null,e,ye,st),t);break}gn(e,ye,st);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-He(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t0(r/1960))-r,10<r){e.timeoutHandle=Za(gn.bind(null,e,ye,st),r);break}gn(e,ye,st);break;case 5:gn(e,ye,st);break;default:throw Error(S(329))}}}return Se(e,J()),e.callbackNode===n?Bp.bind(null,e):null}function wl(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=ye,ye=n,t!==null&&_l(t)),e}function _l(e){ye===null?ye=e:ye.push.apply(ye,e)}function n0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~Lu,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function kf(e){if(j&6)throw Error(S(327));sr();var t=Do(e,0);if(!(t&1))return Se(e,J()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=wl(e,r))}if(n===1)throw n=_i,kn(e,0),Lt(e,t),Se(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,ye,st),Se(e,J()),null}function Mu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(yr=J()+500,_s&&an())}}function On(e){Ft!==null&&Ft.tag===0&&!(j&6)&&sr();var t=j;j|=1;var n=De.transition,r=U;try{if(De.transition=null,U=1,e)return e()}finally{U=r,De.transition=n,j=t,!(j&6)&&an()}}function ju(){ke=Jn.current,W(Jn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ry(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:gr(),W(_e),W(de),xu();break;case 5:Cu(r);break;case 4:gr();break;case 13:W(G);break;case 19:W(G);break;case 10:Eu(r.type._context);break;case 22:case 23:ju()}n=n.return}if(oe=e,Z=e=Qt(e.current,null),ae=ke=t,ne=0,_i=null,Lu=Is=An=0,ye=Zr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_n=null}return e}function $p(e,t){do{var n=Z;try{if(_u(),wo.current=Qo,Yo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(Nn=0,ie=te=Y=null,qr=!1,vi=0,bu.current=null,n===null||n.return===null){ne=1,_i=t,Z=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=cf(s);if(v!==null){v.flags&=-257,ff(v,s,a,o,t),v.mode&1&&uf(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){uf(o,u,t),Uu();break e}l=Error(S(426))}}else if(H&&a.mode&1){var E=cf(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ff(E,s,a,o,t),yu(vr(l,a));break e}}o=l=vr(l,a),ne!==4&&(ne=2),Zr===null?Zr=[o]:Zr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Cp(o,l,t);nf(o,h);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Gt===null||!Gt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=xp(o,a,t);nf(o,w);break e}}o=o.return}while(o!==null)}Hp(n)}catch(k){t=k,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Wp(){var e=Xo.current;return Xo.current=Qo,e===null?Qo:e}function Uu(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(An&268435455)&&!(Is&268435455)||Lt(oe,ae)}function Zo(e,t){var n=j;j|=2;var r=Wp();(oe!==e||ae!==t)&&(st=null,kn(e,t));do try{r0();break}catch(i){$p(e,i)}while(!0);if(_u(),j=n,Xo.current=r,Z!==null)throw Error(S(261));return oe=null,ae=0,ne}function r0(){for(;Z!==null;)Vp(Z)}function i0(){for(;Z!==null&&!Nv();)Vp(Z)}function Vp(e){var t=Gp(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?Hp(e):Z=t,bu.current=null}function Hp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qy(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=Xy(n,t,ke),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function gn(e,t,n){var r=U,i=De.transition;try{De.transition=null,U=1,o0(e,t,n,r)}finally{De.transition=i,U=r}return null}function o0(e,t,n,r){do sr();while(Ft!==null);if(j&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Fv(e,o),e===oe&&(Z=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Yp(Lo,function(){return sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=De.transition,De.transition=null;var s=U;U=1;var a=j;j|=4,bu.current=null,Zy(e,n),Fp(n,e),Cy(qa),Mo=!!Xa,qa=Xa=null,e.current=n,e0(n),Av(),j=a,U=s,De.transition=o}else e.current=n;if(lo&&(lo=!1,Ft=e,Jo=i),o=e.pendingLanes,o===0&&(Gt=null),bv(n.stateNode),Se(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,e=vl,vl=null,e;return Jo&1&&e.tag!==0&&sr(),o=e.pendingLanes,o&1?e===yl?ei++:(ei=0,yl=e):ei=0,an(),null}function sr(){if(Ft!==null){var e=Ch(Jo),t=De.transition,n=U;try{if(De.transition=null,U=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Jo=0,j&6)throw Error(S(331));var i=j;for(j|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:Jr(8,c,o)}var d=c.child;if(d!==null)d.return=c,C=d;else for(;C!==null;){c=C;var p=c.sibling,v=c.return;if(Mp(c),c===u){C=null;break}if(p!==null){p.return=v,C=p;break}C=v}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,C=h;break e}C=o.return}}var f=e.current;for(C=f;C!==null;){s=C;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,C=m;else e:for(s=f;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ks(9,a)}}catch(k){X(a,a.return,k)}if(a===s){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(j=i,an(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(ms,e)}catch{}r=!0}return r}finally{U=n,De.transition=t}}return!1}function If(e,t,n){t=vr(n,t),t=Cp(e,t,1),e=Kt(e,t,1),t=pe(),e!==null&&(Ai(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)If(e,e,n);else for(;t!==null;){if(t.tag===3){If(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=vr(n,e),e=xp(t,e,1),t=Kt(t,e,1),e=pe(),t!==null&&(Ai(t,1,e),Se(t,e));break}}t=t.return}}function s0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>J()-Du?kn(e,0):Lu|=n),Se(e,t)}function Kp(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=pe();e=_t(e,t),e!==null&&(Ai(e,t,n),Se(e,n))}function a0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kp(e,n)}function l0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Kp(e,n)}var Gp;Gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Qy(e,t,n);we=!!(e.flags&131072)}else we=!1,H&&t.flags&1048576&&qh(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var i=hr(t,de.current);or(t,n),i=Pu(null,t,r,e,i,n);var o=Nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,Bo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ku(t),i.updater=Ss,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=ul(null,t,r,!0,o,n)):(t.tag=0,H&&o&&gu(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=c0(r),e=Be(r,e),i){case 0:t=ll(null,t,r,e,n);break e;case 1:t=pf(null,t,r,e,n);break e;case 11:t=df(null,t,r,e,n);break e;case 14:t=hf(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),ll(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),pf(e,t,r,i,n);case 3:e:{if(Ap(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,rp(e,t),Ko(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vr(Error(S(423)),t),t=mf(e,t,r,n,i);break e}else if(r!==i){i=vr(Error(S(424)),t),t=mf(e,t,r,n,i);break e}else for(Ie=Ht(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,We=null,n=tp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===i){t=Et(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return ip(t),e===null&&rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ja(r,i)?s=null:o!==null&&Ja(r,o)&&(t.flags|=32),Np(e,t),he(e,t,s,n),t.child;case 6:return e===null&&rl(t),null;case 13:return Op(e,t,n);case 4:return Iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),df(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(Vo,r._currentValue),r._currentValue=s,o!==null)if(Ye(o.value,s)){if(o.children===i.children&&!_e.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),il(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),il(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=Me(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),hf(e,t,r,i,n);case 15:return Tp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Eo(e,t),t.tag=1,Ee(r)?(e=!0,Bo(t)):e=!1,or(t,n),Ip(t,r,i),sl(t,r,i,n),ul(null,t,r,!0,e,n);case 19:return Rp(e,t,n);case 22:return Pp(e,t,n)}throw Error(S(156,t.tag))};function Yp(e,t){return Eh(e,t)}function u0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new u0(e,t,n,r)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function c0(e){if(typeof e=="function")return Fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===iu)return 11;if(e===ou)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Io(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $n:return In(n.children,i,o,t);case ru:s=8,i|=8;break;case Aa:return e=Le(12,n,t,i|2),e.elementType=Aa,e.lanes=o,e;case Oa:return e=Le(13,n,t,i),e.elementType=Oa,e.lanes=o,e;case Ra:return e=Le(19,n,t,i),e.elementType=Ra,e.lanes=o,e;case ih:return Cs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nh:s=10;break e;case rh:s=9;break e;case iu:s=11;break e;case ou:s=14;break e;case Ot:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Le(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function In(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Cs(e,t,n,r){return e=Le(22,e,r,t),e.elementType=ih,e.lanes=n,e.stateNode={isHidden:!1},e}function da(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function ha(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zu(e,t,n,r,i,o,s,a,l){return e=new f0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Le(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(o),e}function d0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qp(e){if(!e)return en;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Qh(e,n,t)}return t}function Xp(e,t,n,r,i,o,s,a,l){return e=zu(n,r,!0,e,i,o,s,a,l),e.context=Qp(null),n=e.current,r=pe(),i=Yt(n),o=mt(r,i),o.callback=t??null,Kt(n,o,i),e.current.lanes=i,Ai(e,i,r),Se(e,r),e}function xs(e,t,n,r){var i=t.current,o=pe(),s=Yt(i);return n=Qp(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,s),e!==null&&(Ke(e,i,s,o),yo(e,i,s)),s}function es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){Cf(e,t),(e=e.alternate)&&Cf(e,t)}function h0(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}Ts.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));xs(e,t,null,null)};Ts.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){xs(null,e,null,null)}),t[wt]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Ah(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xf(){}function p0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=es(s);o.call(u)}}var s=Xp(t,r,e,0,null,!1,!1,"",xf);return e._reactRootContainer=s,e[wt]=s.current,di(e.nodeType===8?e.parentNode:e),On(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=es(l);a.call(u)}}var l=zu(e,0,!1,null,null,!1,!1,"",xf);return e._reactRootContainer=l,e[wt]=l.current,di(e.nodeType===8?e.parentNode:e),On(function(){xs(t,l,n,r)}),l}function Ns(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=es(s);a.call(l)}}xs(t,s,e,i)}else s=p0(n,t,e,i,r);return es(s)}xh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(lu(t,n|1),Se(t,J()),!(j&6)&&(yr=J()+500,an()))}break;case 13:On(function(){var r=_t(e,1);if(r!==null){var i=pe();Ke(r,e,1,i)}}),Bu(e,1)}};uu=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=pe();Ke(t,e,134217728,n)}Bu(e,134217728)}};Th=function(e){if(e.tag===13){var t=Yt(e),n=_t(e,t);if(n!==null){var r=pe();Ke(n,e,t,r)}Bu(e,t)}};Ph=function(){return U};Nh=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};$a=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ws(r);if(!i)throw Error(S(90));sh(r),Da(r,i)}}}break;case"textarea":lh(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};mh=Mu;gh=On;var m0={usingClientEntryPoint:!1,Events:[Ri,Kn,ws,hh,ph,Mu]},jr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g0={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wh(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{ms=uo.inject(g0),nt=uo}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(S(200));return d0(e,t,null,n)};Ne.createRoot=function(e,t){if(!Wu(e))throw Error(S(299));var n=!1,r="",i=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zu(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,di(e.nodeType===8?e.parentNode:e),new $u(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=wh(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return On(e)};Ne.hydrate=function(e,t,n){if(!Ps(t))throw Error(S(200));return Ns(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=qp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Xp(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ts(t)};Ne.render=function(e,t,n){if(!Ps(t))throw Error(S(200));return Ns(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(S(40));return e._reactRootContainer?(On(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Mu;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ns(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Jd.exports=Ne;var v0=Jd.exports,Zp,Tf=v0;Zp=Tf.createRoot,Tf.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Pf="popstate";function y0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return El("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ts(i)}return _0(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function em(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w0(){return Math.random().toString(36).substr(2,8)}function Nf(e,t){return{usr:e.state,key:e.key,idx:t}}function El(e,t,n,r){return n===void 0&&(n=null),Ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||w0()})}function ts(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=zt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ei({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=zt.Pop;let E=c(),h=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:h})}function p(E,h){a=zt.Push;let f=El(_.location,E,h);u=c()+1;let m=Nf(f,u),w=_.createHref(f);try{s.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function v(E,h){a=zt.Replace;let f=El(_.location,E,h);u=c();let m=Nf(f,u),w=_.createHref(f);s.replaceState(m,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function y(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:ts(E);return f=f.replace(/ $/,"%20"),ee(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let _={get action(){return a},get location(){return e(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pf,d),l=E,()=>{i.removeEventListener(Pf,d),l=null}},createHref(E){return t(i,E)},createURL:y,encodeLocation(E){let h=y(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(E){return s.go(E)}};return _}var Af;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Af||(Af={}));function E0(e,t,n){return n===void 0&&(n="/"),S0(e,t,n,!1)}function S0(e,t,n,r){let i=typeof t=="string"?Cr(t):t,o=Vu(i.pathname||"/",n);if(o==null)return null;let s=tm(e);k0(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=L0(o);a=R0(s[l],u,r)}return a}function tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xt([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:A0(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of nm(o.path))i(o,s,l)}),t}function nm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=nm(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function k0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:O0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I0=/^:[\w-]+$/,C0=3,x0=2,T0=1,P0=10,N0=-2,Of=e=>e==="*";function A0(e,t){let n=e.split("/"),r=n.length;return n.some(Of)&&(r+=N0),t&&(r+=x0),n.filter(i=>!Of(i)).reduce((i,o)=>i+(I0.test(o)?C0:o===""?T0:P0),r)}function O0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function R0(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=Rf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Rf({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Xt([o,d.pathname]),pathnameBase:U0(Xt([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=Xt([o,d.pathnameBase]))}return s}function Rf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:v}=c;if(p==="*"){let _=a[d]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function b0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),em(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function L0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return em(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function D0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:M0(n,t):t,search:F0(r),hash:z0(i)}}function M0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rm(e,t){let n=j0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function im(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=Ei({},e),ee(!i.pathname||!i.pathname.includes("?"),pa("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),pa("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),pa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=D0(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),U0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,z0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const om=["post","put","patch","delete"];new Set(om);const $0=["get",...om];new Set($0);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}const Hu=I.createContext(null),W0=I.createContext(null),Un=I.createContext(null),As=I.createContext(null),Fn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),sm=I.createContext(null);function V0(e,t){let{relative:n}=t===void 0?{}:t;Li()||ee(!1);let{basename:r,navigator:i}=I.useContext(Un),{hash:o,pathname:s,search:a}=lm(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Xt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Li(){return I.useContext(As)!=null}function Os(){return Li()||ee(!1),I.useContext(As).location}function am(e){I.useContext(Un).static||I.useLayoutEffect(e)}function Ku(){let{isDataRoute:e}=I.useContext(Fn);return e?r1():H0()}function H0(){Li()||ee(!1);let e=I.useContext(Hu),{basename:t,future:n,navigator:r}=I.useContext(Un),{matches:i}=I.useContext(Fn),{pathname:o}=Os(),s=JSON.stringify(rm(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return am(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=im(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Xt([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,o,e])}function lm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=I.useContext(Un),{matches:i}=I.useContext(Fn),{pathname:o}=Os(),s=JSON.stringify(rm(i,r.v7_relativeSplatPath));return I.useMemo(()=>im(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function K0(e,t){return G0(e,t)}function G0(e,t,n,r){Li()||ee(!1);let{navigator:i}=I.useContext(Un),{matches:o}=I.useContext(Fn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Os(),c;if(t){var d;let E=typeof t=="string"?Cr(t):t;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||ee(!1),c=E}else c=u;let p=c.pathname||"/",v=p;if(l!=="/"){let E=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=E0(e,{pathname:v}),_=J0(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Xt([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Xt([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&_?I.createElement(As.Provider,{value:{location:Si({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:zt.Pop}},_):_}function Y0(){let e=n1(),t=B0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const Q0=I.createElement(Y0,null);class X0 extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(Fn.Provider,{value:this.props.routeContext},I.createElement(sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q0(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Hu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Fn.Provider,{value:t},r)}function J0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||ee(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:v}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,p)=>{let v,y=!1,_=null,E=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||Q0,l&&(u<0&&p===0?(y=!0,E=null):u===p&&(y=!0,E=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),f=()=>{let m;return v?m=_:y?m=E:d.route.Component?m=I.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,I.createElement(q0,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?I.createElement(X0,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var um=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(um||{}),ns=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ns||{});function Z0(e){let t=I.useContext(Hu);return t||ee(!1),t}function e1(e){let t=I.useContext(W0);return t||ee(!1),t}function t1(e){let t=I.useContext(Fn);return t||ee(!1),t}function cm(e){let t=t1(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function n1(){var e;let t=I.useContext(sm),n=e1(ns.UseRouteError),r=cm(ns.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function r1(){let{router:e}=Z0(um.UseNavigateStable),t=cm(ns.UseNavigateStable),n=I.useRef(!1);return am(()=>{n.current=!0}),I.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Si({fromRouteId:t},o)))},[e,t])}const bf={};function i1(e,t){bf[t]||(bf[t]=!0,console.warn(t))}const Lf=(e,t,n)=>i1(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function o1(e,t){e!=null&&e.v7_startTransition||Lf("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&Lf("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Xe(e){ee(!1)}function s1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:o,static:s=!1,future:a}=e;Li()&&ee(!1);let l=t.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:o,static:s,future:Si({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Cr(r));let{pathname:c="/",search:d="",hash:p="",state:v=null,key:y="default"}=r,_=I.useMemo(()=>{let E=Vu(c,l);return E==null?null:{location:{pathname:E,search:d,hash:p,state:v,key:y},navigationType:i}},[l,c,d,p,v,y,i]);return _==null?null:I.createElement(Un.Provider,{value:u},I.createElement(As.Provider,{children:n,value:_}))}function a1(e){let{children:t,location:n}=e;return K0(Sl(t),n)}new Promise(()=>{});function Sl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let o=[...t,i];if(r.type===I.Fragment){n.push.apply(n,Sl(r.props.children,o));return}r.type!==Xe&&ee(!1),!r.props.index||!r.props.children||ee(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Sl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}function l1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function u1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c1(e,t){return e.button===0&&(!t||t==="_self")&&!u1(e)}const f1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d1="6";try{window.__reactRouterVersion=d1}catch{}const h1="startTransition",Df=sv[h1];function p1(e){let{basename:t,children:n,future:r,window:i}=e,o=I.useRef();o.current==null&&(o.current=y0({window:i,v5Compat:!0}));let s=o.current,[a,l]=I.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=I.useCallback(d=>{u&&Df?Df(()=>l(d)):l(d)},[l,u]);return I.useLayoutEffect(()=>s.listen(c),[s,c]),I.useEffect(()=>o1(r),[r]),I.createElement(s1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const m1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d}=t,p=l1(t,f1),{basename:v}=I.useContext(Un),y,_=!1;if(typeof u=="string"&&g1.test(u)&&(y=u,m1))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Vu(w.pathname,v);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:_=!0}catch{}let E=V0(u,{relative:i}),h=v1(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:d});function f(m){r&&r(m),m.defaultPrevented||h(m)}return I.createElement("a",kl({},p,{href:y||E,onClick:_||o?r:f,ref:n,target:l}))});var Mf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mf||(Mf={}));var jf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jf||(jf={}));function v1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=Ku(),u=Os(),c=lm(e,{relative:s});return I.useCallback(d=>{if(c1(d,n)){d.preventDefault();let p=r!==void 0?r:ts(u)===ts(c);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}const ma="/Tickify_Project/assets/pexels-foteros-352505-Dut25Yr5.jpg",Uf=()=>{};let Gu={},fm={},dm=null,hm={mark:Uf,measure:Uf};try{typeof window<"u"&&(Gu=window),typeof document<"u"&&(fm=document),typeof MutationObserver<"u"&&(dm=MutationObserver),typeof performance<"u"&&(hm=performance)}catch{}const{userAgent:Ff=""}=Gu.navigator||{},tn=Gu,V=fm,zf=dm,co=hm;tn.document;const Tt=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",pm=~Ff.indexOf("MSIE")||~Ff.indexOf("Trident/");var K="classic",mm="duotone",xe="sharp",Te="sharp-duotone",y1=[K,mm,xe,Te],w1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Bf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_1=["kit"],E1=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,S1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,k1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},C1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},x1={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},T1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},P1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},gm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},N1=["solid","regular","light","thin","duotone","brands"],vm=[1,2,3,4,5,6,7,8,9,10],A1=vm.concat([11,12,13,14,15,16,17,18,19,20]),$r={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O1=[...Object.keys(x1),...N1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$r.GROUP,$r.SWAP_OPACITY,$r.PRIMARY,$r.SECONDARY].concat(vm.map(e=>"".concat(e,"x"))).concat(A1.map(e=>"w-".concat(e))),R1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},b1={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},L1={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},$f={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const St="___FONT_AWESOME___",Il=16,ym="fa",wm="svg-inline--fa",Rn="data-fa-i2svg",Cl="data-fa-pseudo-element",D1="data-fa-pseudo-element-pending",Yu="data-prefix",Qu="data-icon",Wf="fontawesome-i2svg",M1="async",j1=["HTML","HEAD","STYLE","SCRIPT"],_m=(()=>{try{return!0}catch{return!1}})(),Em=[K,xe,Te];function Di(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[K]}})}const Sm={...gm};Sm[K]={...gm[K],...Bf.kit,...Bf["kit-duotone"]};const Cn=Di(Sm),xl={...P1};xl[K]={...xl[K],...$f.kit,...$f["kit-duotone"]};const ki=Di(xl),Tl={...T1};Tl[K]={...Tl[K],...L1.kit};const xn=Di(Tl),Pl={...C1};Pl[K]={...Pl[K],...b1.kit};const U1=Di(Pl),F1=E1,km="fa-layers-text",z1=S1,B1={...w1};Di(B1);const $1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ga=$r,wr=new Set;Object.keys(ki[K]).map(wr.add.bind(wr));Object.keys(ki[xe]).map(wr.add.bind(wr));Object.keys(ki[Te]).map(wr.add.bind(wr));const W1=[..._1,...O1],ti=tn.FontAwesomeConfig||{};function V1(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function H1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=H1(V1(n));i!=null&&(ti[r]=i)});const Im={styleDefault:"solid",familyDefault:"classic",cssPrefix:ym,replacementClass:wm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ti.familyPrefix&&(ti.cssPrefix=ti.familyPrefix);const _r={...Im,...ti};_r.autoReplaceSvg||(_r.observeMutations=!1);const N={};Object.keys(Im).forEach(e=>{Object.defineProperty(N,e,{enumerable:!0,set:function(t){_r[e]=t,ni.forEach(n=>n(N))},get:function(){return _r[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){_r.cssPrefix=e,ni.forEach(t=>t(N))},get:function(){return _r.cssPrefix}});tn.FontAwesomeConfig=N;const ni=[];function K1(e){return ni.push(e),()=>{ni.splice(ni.indexOf(e),1)}}const Nt=Il,et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function G1(e){if(!e||!Tt)return;const t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=V.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return V.head.insertBefore(t,r),e}const Y1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ii(){let e=12,t="";for(;e-- >0;)t+=Y1[Math.random()*62|0];return t}function xr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xu(e){return e.classList?xr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Cm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q1(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Cm(e[n]),'" '),"").trim()}function Rs(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function qu(e){return e.size!==et.size||e.x!==et.x||e.y!==et.y||e.rotate!==et.rotate||e.flipX||e.flipY}function X1(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function q1(e){let{transform:t,width:n=Il,height:r=Il,startCentered:i=!1}=e,o="";return i&&pm?o+="translate(".concat(t.x/Nt-n/2,"em, ").concat(t.y/Nt-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/Nt,"em), calc(-50% + ").concat(t.y/Nt,"em)) "):o+="translate(".concat(t.x/Nt,"em, ").concat(t.y/Nt,"em) "),o+="scale(".concat(t.size/Nt*(t.flipX?-1:1),", ").concat(t.size/Nt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var J1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xm(){const e=ym,t=wm,n=N.cssPrefix,r=N.replacementClass;let i=J1;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Vf=!1;function va(){N.autoAddCss&&!Vf&&(G1(xm()),Vf=!0)}var Z1={mixout(){return{dom:{css:xm,insertCss:va}}},hooks(){return{beforeDOMElementCreation(){va()},beforeI2svg(){va()}}}};const kt=tn||{};kt[St]||(kt[St]={});kt[St].styles||(kt[St].styles={});kt[St].hooks||(kt[St].hooks={});kt[St].shims||(kt[St].shims=[]);var tt=kt[St];const Tm=[],Pm=function(){V.removeEventListener("DOMContentLoaded",Pm),rs=1,Tm.map(e=>e())};let rs=!1;Tt&&(rs=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),rs||V.addEventListener("DOMContentLoaded",Pm));function ew(e){Tt&&(rs?setTimeout(e,0):Tm.push(e))}function Mi(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Cm(e):"<".concat(t," ").concat(Q1(n),">").concat(r.map(Mi).join(""),"</").concat(t,">")}function Hf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ya=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function tw(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Nl(e){const t=tw(e);return t.length===1?t[0].toString(16):null}function nw(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Kf(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Al(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Kf(t);typeof tt.hooks.addPack=="function"&&!r?tt.hooks.addPack(e,Kf(t)):tt.styles[e]={...tt.styles[e]||{},...i},e==="fas"&&Al("fa",t)}const{styles:yn,shims:rw}=tt,iw={[K]:Object.values(xn[K]),[xe]:Object.values(xn[xe]),[Te]:Object.values(xn[Te])};let Ju=null,Nm={},Am={},Om={},Rm={},bm={};const ow={[K]:Object.keys(Cn[K]),[xe]:Object.keys(Cn[xe]),[Te]:Object.keys(Cn[Te])};function sw(e){return~W1.indexOf(e)}function aw(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!sw(i)?i:null}const Lm=()=>{const e=r=>ya(yn,(i,o,s)=>(i[s]=ya(o,r,{}),i),{});Nm=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Am=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),bm=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in yn||N.autoFetchSvg,n=ya(rw,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Om=n.names,Rm=n.unicodes,Ju=bs(N.styleDefault,{family:N.familyDefault})};K1(e=>{Ju=bs(e.styleDefault,{family:N.familyDefault})});Lm();function Zu(e,t){return(Nm[e]||{})[t]}function lw(e,t){return(Am[e]||{})[t]}function Bt(e,t){return(bm[e]||{})[t]}function Dm(e){return Om[e]||{prefix:null,iconName:null}}function uw(e){const t=Rm[e],n=Zu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nn(){return Ju}const ec=()=>({prefix:null,iconName:null,rest:[]});function bs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=K}=t,r=Cn[n][e],i=ki[n][e]||ki[n][r],o=e in tt.styles?e:null;return i||o||null}const cw={[K]:Object.keys(xn[K]),[xe]:Object.keys(xn[xe]),[Te]:Object.keys(xn[Te])};function Ls(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[K]:"".concat(N.cssPrefix,"-").concat(K),[xe]:"".concat(N.cssPrefix,"-").concat(xe),[Te]:"".concat(N.cssPrefix,"-").concat(Te)};let i=null,o=K;const s=y1.filter(l=>l!==mm);s.forEach(l=>{(e.includes(r[l])||e.some(u=>cw[l].includes(u)))&&(o=l)});const a=e.reduce((l,u)=>{const c=aw(N.cssPrefix,u);if(yn[u]?(u=iw[o].includes(u)?U1[o][u]:u,i=u,l.prefix=u):ow[o].indexOf(u)>-1?(i=u,l.prefix=bs(u,{family:o})):c?l.iconName=c:u!==N.replacementClass&&!s.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=i==="fa"?Dm(l.iconName):{},p=Bt(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!yn.far&&yn.fas&&!N.autoFetchSvg&&(l.prefix="fas")}return l},ec());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===xe&&(yn.fass||N.autoFetchSvg)&&(a.prefix="fass",a.iconName=Bt(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===Te&&(yn.fasds||N.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Bt(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=nn()||"fas"),a}class fw{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Al(o,i[o]);const s=xn[K][o];s&&Al(s,i[o]),Lm()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}}let Gf=[],Zn={};const ar={},dw=Object.keys(ar);function hw(e,t){let{mixoutsTo:n}=t;return Gf=e,Zn={},Object.keys(ar).forEach(r=>{dw.indexOf(r)===-1&&delete ar[r]}),Gf.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{Zn[s]||(Zn[s]=[]),Zn[s].push(o[s])})}r.provides&&r.provides(ar)}),n}function Ol(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Zn[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Zn[e]||[]).forEach(o=>{o.apply(null,n)})}function rn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ar[e]?ar[e].apply(null,t):void 0}function Rl(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||nn();if(t)return t=Bt(n,t)||t,Hf(Mm.definitions,n,t)||Hf(tt.styles,n,t)}const Mm=new fw,pw=()=>{N.autoReplaceSvg=!1,N.observeMutations=!1,bn("noAuto")},mw={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(bn("beforeI2svg",e),rn("pseudoElements2svg",e),rn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,ew(()=>{vw({autoReplaceSvgRoot:t}),bn("watch",e)})}},gw={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Bt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=bs(e[0]);return{prefix:n,iconName:Bt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(N.cssPrefix,"-"))>-1||e.match(F1))){const t=Ls(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||nn(),iconName:Bt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=nn();return{prefix:t,iconName:Bt(t,e)||e}}}},Oe={noAuto:pw,config:N,dom:mw,parse:gw,library:Mm,findIconDefinition:Rl,toHtml:Mi},vw=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=V}=e;(Object.keys(tt.styles).length>0||N.autoFetchSvg)&&Tt&&N.autoReplaceSvg&&Oe.dom.i2svg({node:t})};function Ds(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Mi(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Tt)return;const n=V.createElement("div");return n.innerHTML=e.html,n.children}}),e}function yw(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(qu(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=Rs({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function ww(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function tc(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:u,extra:c,watchable:d=!1}=e,{width:p,height:v}=n.found?n:t,y=r==="fak",_=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(k=>c.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(c.classes).join(" ");let E={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:_,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)}};const h=y&&!~c.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};d&&(E.attributes[Rn]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ii())},children:[a]}),delete E.attributes.title);const f={...E,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...h,...c.styles}},{children:m,attributes:w}=n.found&&t.found?rn("generateAbstractMask",f)||{children:[],attributes:{}}:rn("generateAbstractIcon",f)||{children:[],attributes:{}};return f.children=m,f.attributes=w,s?ww(f):yw(f)}function Yf(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[Rn]="");const u={...s.styles};qu(i)&&(u.transform=q1({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=Rs(u);c.length>0&&(l.style=c);const d=[];return d.push({tag:"span",attributes:l,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function _w(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Rs(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:wa}=tt;function bl(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(ga.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(ga.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(ga.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const Ew={found:!1,width:512,height:512};function Sw(e,t){!_m&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ll(e,t){let n=t;return t==="fa"&&N.styleDefault!==null&&(t=nn()),new Promise((r,i)=>{if(n==="fa"){const o=Dm(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&wa[t]&&wa[t][e]){const o=wa[t][e];return r(bl(o))}Sw(e,t),r({...Ew,icon:N.showMissingIcons&&e?rn("missingIconAbstract")||{}:{}})})}const Qf=()=>{},Dl=N.measurePerformance&&co&&co.mark&&co.measure?co:{mark:Qf,measure:Qf},Wr='FA "6.6.0"',kw=e=>(Dl.mark("".concat(Wr," ").concat(e," begins")),()=>jm(e)),jm=e=>{Dl.mark("".concat(Wr," ").concat(e," ends")),Dl.measure("".concat(Wr," ").concat(e),"".concat(Wr," ").concat(e," begins"),"".concat(Wr," ").concat(e," ends"))};var nc={begin:kw,end:jm};const Co=()=>{};function Xf(e){return typeof(e.getAttribute?e.getAttribute(Rn):null)=="string"}function Iw(e){const t=e.getAttribute?e.getAttribute(Yu):null,n=e.getAttribute?e.getAttribute(Qu):null;return t&&n}function Cw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function xw(){return N.autoReplaceSvg===!0?xo.replace:xo[N.autoReplaceSvg]||xo.replace}function Tw(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Pw(e){return V.createElement(e)}function Um(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Tw:Pw}=t;if(typeof e=="string")return V.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Um(o,{ceFn:n}))}),r}function Nw(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const xo={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Um(n),t)}),t.getAttribute(Rn)===null&&N.keepOriginalSource){let n=V.createComment(Nw(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Xu(t).indexOf(N.replacementClass))return xo.replace(e);const r=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===N.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Mi(o)).join(`
`);t.setAttribute(Rn,""),t.innerHTML=i}};function qf(e){e()}function Fm(e,t){const n=typeof t=="function"?t:Co;if(e.length===0)n();else{let r=qf;N.mutateApproach===M1&&(r=tn.requestAnimationFrame||qf),r(()=>{const i=xw(),o=nc.begin("mutate");e.map(i),o(),n()})}}let rc=!1;function zm(){rc=!0}function Ml(){rc=!1}let is=null;function Jf(e){if(!zf||!N.observeMutations)return;const{treeCallback:t=Co,nodeCallback:n=Co,pseudoElementsCallback:r=Co,observeMutationsRoot:i=V}=e;is=new zf(o=>{if(rc)return;const s=nn();xr(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Xf(a.addedNodes[0])&&(N.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&N.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Xf(a.target)&&~$1.indexOf(a.attributeName))if(a.attributeName==="class"&&Iw(a.target)){const{prefix:l,iconName:u}=Ls(Xu(a.target));a.target.setAttribute(Yu,l||s),u&&a.target.setAttribute(Qu,u)}else Cw(a.target)&&n(a.target)})}),Tt&&is.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Aw(){is&&is.disconnect()}function Ow(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function Rw(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Ls(Xu(e));return i.prefix||(i.prefix=nn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=lw(i.prefix,e.innerText)||Zu(i.prefix,Nl(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function bw(e){const t=xr(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Ii()):(t["aria-hidden"]="true",t.focusable="false")),t}function Lw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Rw(e),o=bw(e),s=Ol("parseNodeAttributes",{},e);let a=t.styleParser?Ow(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:Dw}=tt;function Bm(e){const t=N.autoReplaceSvg==="nest"?Zf(e,{styleParser:!1}):Zf(e);return~t.extra.classes.indexOf(km)?rn("generateLayersText",e,t):rn("generateSvgReplacementMutation",e,t)}let ot=new Set;Em.map(e=>{ot.add("fa-".concat(e))});Object.keys(Cn[K]).map(ot.add.bind(ot));Object.keys(Cn[xe]).map(ot.add.bind(ot));Object.keys(Cn[Te]).map(ot.add.bind(ot));ot=[...ot];function ed(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();const n=V.documentElement.classList,r=c=>n.add("".concat(Wf,"-").concat(c)),i=c=>n.remove("".concat(Wf,"-").concat(c)),o=N.autoFetchSvg?ot:Em.map(c=>"fa-".concat(c)).concat(Object.keys(Dw));o.includes("fa")||o.push("fa");const s=[".".concat(km,":not([").concat(Rn,"])")].concat(o.map(c=>".".concat(c,":not([").concat(Rn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=xr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=nc.begin("onTree"),u=a.reduce((c,d)=>{try{const p=Bm(d);p&&c.push(p)}catch(p){_m||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise((c,d)=>{Promise.all(u).then(p=>{Fm(p,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(p=>{l(),d(p)})})}function Mw(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bm(e).then(n=>{n&&Fm([n],t)})}function jw(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Rl(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Rl(i||{})),e(r,{...n,mask:i})}}const Uw=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=et,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:v}=e;return Ds({type:"icon",...e},()=>(bn("beforeDOMElementCreation",{iconDefinition:e,params:t}),N.autoA11y&&(s?u["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(a||Ii()):(u["aria-hidden"]="true",u.focusable="false")),tc({icons:{main:bl(v),mask:i?bl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...et,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var Fw={mixout(){return{icon:jw(Uw)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=ed,e.nodeCallback=Mw,e}}},provides(e){e.i2svg=function(t){const{node:n=V,callback:r=()=>{}}=t;return ed(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:u,maskId:c,extra:d}=n;return new Promise((p,v)=>{Promise.all([Ll(r,s),u.iconName?Ll(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[_,E]=y;p([t,tc({icons:{main:_,mask:E},prefix:s,iconName:r,transform:a,symbol:l,maskId:c,title:i,titleId:o,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=Rs(s);a.length>0&&(r.style=a);let l;return qu(o)&&(l=rn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},zw={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ds({type:"layer"},()=>{bn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Bw={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return Ds({type:"counter",content:e},()=>(bn("beforeDOMElementCreation",{content:e,params:t}),_w({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(N.cssPrefix,"-layers-counter"),...r]}})))}}}},$w={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=et,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return Ds({type:"text",content:e},()=>(bn("beforeDOMElementCreation",{content:e,params:t}),Yf({content:e,transform:{...et,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(N.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(pm){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/l,a=u.height/l}return N.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Yf({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const Ww=new RegExp('"',"ug"),td=[1105920,1112319],nd={FontAwesome:{normal:"fas",400:"fas"},...I1,...k1,...R1},jl=Object.keys(nd).reduce((e,t)=>(e[t.toLowerCase()]=nd[t],e),{}),Vw=Object.keys(jl).reduce((e,t)=>{const n=jl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Hw(e){const t=e.replace(Ww,""),n=nw(t,0),r=n>=td[0]&&n<=td[1],i=t.length===2?t[0]===t[1]:!1;return{value:Nl(i?t[0]:t),isSecondary:r||i}}function Kw(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(jl[n]||{})[i]||Vw[n]}function rd(e,t){const n="".concat(D1).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=xr(e.children).filter(p=>p.getAttribute(Cl)===t)[0],a=tn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(z1),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let v=Kw(l,c);const{value:y,isSecondary:_}=Hw(p),E=u[0].startsWith("FontAwesome");let h=Zu(v,y),f=h;if(E){const m=uw(y);m.iconName&&m.prefix&&(h=m.iconName,v=m.prefix)}if(h&&!_&&(!s||s.getAttribute(Yu)!==v||s.getAttribute(Qu)!==f)){e.setAttribute(n,f),s&&e.removeChild(s);const m=Lw(),{extra:w}=m;w.attributes[Cl]=t,Ll(h,v).then(k=>{const P=tc({...m,icons:{main:k,mask:ec()},prefix:v,iconName:f,extra:w,watchable:!0}),x=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(x,e.firstChild):e.appendChild(x),x.outerHTML=P.map(A=>Mi(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Gw(e){return Promise.all([rd(e,"::before"),rd(e,"::after")])}function Yw(e){return e.parentNode!==document.head&&!~j1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function id(e){if(Tt)return new Promise((t,n)=>{const r=xr(e.querySelectorAll("*")).filter(Yw).map(Gw),i=nc.begin("searchPseudoElements");zm(),Promise.all(r).then(()=>{i(),Ml(),t()}).catch(()=>{i(),Ml(),n()})})}var Qw={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=id,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=V}=t;N.searchPseudoElements&&id(n)}}};let od=!1;var Xw={mixout(){return{dom:{unwatch(){zm(),od=!0}}}},hooks(){return{bootstrap(){Jf(Ol("mutationObserverCallbacks",{}))},noAuto(){Aw()},watch(e){const{observeMutationsRoot:t}=e;od?Ml():Jf(Ol("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const sd=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var qw={mixout(){return{parse:{transform:e=>sd(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=sd(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const _a={x:0,y:0,width:"100%",height:"100%"};function ad(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Jw(e){return e.tag==="g"?e.children:[e]}var Zw={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Ls(n.split(" ").map(i=>i.trim())):ec();return r.prefix||(r.prefix=nn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:u}=i,{width:c,icon:d}=o,p=X1({transform:a,containerWidth:c,iconWidth:l}),v={tag:"rect",attributes:{..._a,fill:"white"}},y=u.children?{children:u.children.map(ad)}:{},_={tag:"g",attributes:{...p.inner},children:[ad({tag:u.tag,attributes:{...u.attributes,...p.path},...y})]},E={tag:"g",attributes:{...p.outer},children:[_]},h="mask-".concat(s||Ii()),f="clip-".concat(s||Ii()),m={tag:"mask",attributes:{..._a,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,E]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:Jw(d)},m]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(h,")"),..._a}}),{children:n,attributes:r}}}},e_={provides(e){let t=!1;tn.matchMedia&&(t=tn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},t_={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},n_=[Z1,Fw,zw,Bw,$w,Qw,Xw,qw,Zw,e_,t_];hw(n_,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;const Ul=Oe.parse;Oe.findIconDefinition;Oe.toHtml;const r_=Oe.icon;Oe.layer;Oe.text;Oe.counter;var $m={exports:{}},i_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o_=i_,s_=o_;function Wm(){}function Vm(){}Vm.resetWarningCache=Wm;var a_=function(){function e(r,i,o,s,a,l){if(l!==s_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vm,resetWarningCache:Wm};return n.PropTypes=n,n};$m.exports=a_();var l_=$m.exports;const D=zd(l_);function ld(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ld(Object(n),!0).forEach(function(r){er(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ld(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function os(e){"@babel/helpers - typeof";return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},os(e)}function er(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function c_(e,t){if(e==null)return{};var n=u_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fl(e){return f_(e)||d_(e)||h_(e)||p_()}function f_(e){if(Array.isArray(e))return zl(e)}function d_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h_(e,t){if(e){if(typeof e=="string")return zl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zl(e,t)}}function zl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,v=e.inverse,y=e.border,_=e.listItem,E=e.flip,h=e.size,f=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":y,"fa-li":_,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},er(t,"fa-".concat(h),typeof h<"u"&&h!==null),er(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),er(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),er(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function g_(e){return e=e-0,e===e}function Hm(e){return g_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var v_=["style"];function y_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function w_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Hm(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[y_(i)]=o:t[i]=o,t},{})}function Km(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Km(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=w_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Hm(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=c_(n,v_);return i.attrs.style=Je(Je({},i.attrs.style),s),e.apply(void 0,[t.tag,Je(Je({},i.attrs),a)].concat(Fl(r)))}var Gm=!1;try{Gm=!0}catch{}function __(){if(!Gm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ud(e){if(e&&os(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ul.icon)return Ul.icon(e);if(e===null)return null;if(e&&os(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ea(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?er({},e,t):{}}var cd={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},gt=ps.forwardRef(function(e,t){var n=Je(Je({},cd),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,u=n.maskId,c=ud(r),d=Ea("classes",[].concat(Fl(m_(n)),Fl((s||"").split(" ")))),p=Ea("transform",typeof n.transform=="string"?Ul.transform(n.transform):n.transform),v=Ea("mask",ud(i)),y=r_(c,Je(Je(Je(Je({},d),p),v),{},{symbol:o,title:a,titleId:l,maskId:u}));if(!y)return __("Could not find icon",c),null;var _=y.abstract,E={ref:t};return Object.keys(n).forEach(function(h){cd.hasOwnProperty(h)||(E[h]=n[h])}),E_(_[0],E)});gt.displayName="FontAwesomeIcon";gt.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};var E_=Km.bind(null,ps.createElement);const S_={prefix:"fas",iconName:"people-arrows",icon:[640,512,["people-arrows-left-right"],"e068","M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160l44.8 0c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2l0 72.8c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L576 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-72.8 47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240l0 32 96 0 0-32c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-32-96 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"]},k_={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},I_=k_,C_={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},x_={prefix:"fas",iconName:"wallet",icon:[512,512,[],"f555","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},T_={prefix:"fas",iconName:"ticket",icon:[576,512,[127903],"f145","M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"]};function P_(){return g.jsxs("div",{className:"container",children:[g.jsxs("div",{className:"dicoverBlock",children:[g.jsx("h1",{className:"discover",children:"Discover"}),g.jsx(gt,{icon:C_,className:"iconArrow",size:"1x"})]}),g.jsxs("div",{className:"events",children:[g.jsxs("div",{className:"discoverEvents",children:[g.jsx("img",{src:ma,alt:"display 1",className:"photo photo1",loading:"lazy"}),g.jsx("p",{className:"month",children:"AUG"}),g.jsx("p",{className:"date",children:"20th"}),g.jsx("p",{className:"testing",children:"Tickets Available"})]}),g.jsxs("div",{className:"discoverEvents",children:[g.jsx("img",{src:ma,alt:"display 1",className:"photo photo2",loading:"lazy"}),g.jsx("p",{className:"month",children:"AUG"}),g.jsx("p",{className:"date",children:"20th"}),g.jsx("p",{className:"testing",children:"Tickets Available"})]}),g.jsxs("div",{className:"discoverEvents",children:[g.jsx("img",{src:ma,alt:"display 1",className:"photo photo3",loading:"lazy"}),g.jsx("p",{className:"month",children:"AUG"}),g.jsx("p",{className:"date",children:"20th"}),g.jsx("p",{className:"testing",children:"Tickets Available"})]})]}),g.jsxs("div",{className:"eventCreation",children:[g.jsx("h2",{children:"Make your own Event"}),g.jsx("p",{children:"Effortlessly design and organize your event, from small gatherings to large festivals, with our simple, seamless tools."}),g.jsx("button",{className:"eventButton",children:g.jsx(lt,{to:"/Tickify_Project/create-events",style:{textDecoration:"none",color:"white"},children:"Create Events"})})]})]})}function N_(){const e=[{icon:T_,title:"Online Ticketing and Registration",featureDescription:"Offer a simple, easy-to-use platform for creating and selling event tickets online. Organizers can "},{icon:S_,title:"Event Promotion and Social Sharing",featureDescription:"Help event organizers reach their audience by providing social sharing tools and customizable event pages to spread the word."},{icon:x_,title:"Simple Payment Processing",featureDescription:"Facilitate smooth and secure payment processing so that ticket buyers can quickly complete purchases."}];return g.jsxs("div",{className:"container",children:[g.jsx("h1",{className:"features",children:"Features"}),g.jsx("div",{className:"featureTitle",children:e.map((t,n)=>g.jsxs("div",{className:"featureColumn",children:[g.jsx(gt,{icon:t.icon,className:"featureIcons",size:"3x"}),g.jsx("h3",{children:t.title}),g.jsx("p",{children:t.featureDescription})]},n))})]})}const A_={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},O_={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},R_={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},b_={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function L_(){const[e,t]=I.useState("Subscribe Now"),[n,r]=I.useState("");function i(){t("Subscribed"),r(""),setTimeout(()=>{t("Subscribe Now")},3e3)}return g.jsxs("footer",{className:"footer",children:[g.jsxs("div",{className:"footer-container",children:[g.jsxs("div",{className:"footer-column",children:[g.jsx("h4",{children:"Tickify"}),g.jsx("p",{children:"Tickify is a global self-service ticketing platform for live experiences that allows anyone to create, share, find, and attend events that fuel their passions and enrich their lives."}),g.jsxs("div",{className:"social-icons",children:[g.jsx("a",{href:"https://www.instagram.com/tickify.click",className:"social-icon",children:g.jsx(gt,{icon:R_,size:"3x"})}),g.jsx("a",{href:"/",className:"social-icon",children:g.jsx(gt,{icon:b_,size:"3x"})}),g.jsx("a",{href:"/",className:"social-icon",children:g.jsx(gt,{icon:O_,size:"3x"})})]})]}),g.jsxs("div",{className:"footer-column",children:[g.jsx("h4",{children:"Plan Events"}),g.jsxs("div",{className:"footer-links",children:[g.jsx("a",{href:"/",children:"Create and Set Up"}),g.jsx("a",{href:"/",children:"Sell Tickets"}),g.jsx("a",{href:"/",children:"Online RSVP"}),g.jsx("a",{href:"/",children:"Online Events"})]})]}),g.jsxs("div",{className:"footer-column",children:[g.jsx("h4",{children:"Tickify"}),g.jsxs("div",{className:"footer-links",children:[g.jsx("a",{href:"/",children:"About Us"}),g.jsx("a",{href:"/",children:"Contact Us"}),g.jsx("a",{href:"/",children:"Help Center"}),g.jsx("a",{href:"/",children:"How it Works"}),g.jsx("a",{href:"/",children:"Privacy Policy"}),g.jsx("a",{href:"/",children:"Terms & Conditons"})]})]}),g.jsxs("div",{className:"footer-column",children:[g.jsx("h4",{children:"Stay In The Loop"}),g.jsx("p",{children:"Join our mailing list to stay in the loop with our newest events and concerts."}),g.jsxs("div",{className:"subscribeSection",children:[g.jsx("input",{type:"email",placeholder:"Enter your email address.",id:"subscribeInput",value:n,onChange:o=>r(o.target.value)}),g.jsx("button",{className:"subscribeButton",onClick:i,type:"button",children:e})]})]})]}),g.jsx("div",{style:{textAlign:"center",paddingTop:"20px",fontSize:"16px",color:"#fff",fontWeight:"bold"},children:"Copyright © 2024. Tickify, Inc. All rights reserved."})]})}const D_="/Tickify_Project/assets/background%20image-D-y-LHd0.jpg";function M_(){return g.jsx("div",{id:"Header",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"heroSection",children:[g.jsx("img",{src:D_,alt:"displayPhoto",loading:"lazy"}),g.jsxs("div",{style:{alignItems:"center",justifyContent:"center"},children:[g.jsx("h1",{className:"Title",children:"At Tickify,"}),g.jsx("p",{className:"Description",children:"We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we’ve got your back. Join our community today, and let’s make some memories!"})]})]})})})}const j_="/Tickify_Project/assets/Logo%201-DoJojXz6.png";var fd={};/**
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
 */const Ym=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},U_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(p=64)),r.push(n[c],n[d],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ym(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):U_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new F_;const p=o<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z_=function(e){const t=Ym(e);return Qm.encodeByteArray(t,!0)},Xm=function(e){return z_(e).replace(/\./g,"")},qm=function(e){try{return Qm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function B_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $_=()=>B_().__FIREBASE_DEFAULTS__,W_=()=>{if(typeof process>"u"||typeof fd>"u")return;const e=fd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},V_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qm(e[1]);return t&&JSON.parse(t)},ic=()=>{try{return $_()||W_()||V_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},H_=e=>{var t,n;return(n=(t=ic())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Jm=()=>{var e;return(e=ic())===null||e===void 0?void 0:e.config},Zm=e=>{var t;return(t=ic())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class K_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Y_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function X_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function q_(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function J_(){try{return typeof indexedDB=="object"}catch{return!1}}function Z_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const eE="FirebaseError";class ln extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=eE,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?tE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ln(i,a,r)}}function tE(e,t){return e.replace(nE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nE=/\{\$([^}]+)}/g;function rE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ss(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(dd(o)&&dd(s)){if(!ss(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dd(e){return e!==null&&typeof e=="object"}/**
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
 */function Ui(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Vr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Hr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function iE(e,t){const n=new oE(e,t);return n.subscribe.bind(n)}class oE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Sa),i.error===void 0&&(i.error=Sa),i.complete===void 0&&(i.complete=Sa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sa(){}/**
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
 */function un(e){return e&&e._delegate?e._delegate:e}class Er{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class aE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new K_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uE(t))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=vn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vn){return this.instances.has(t)}getOptions(t=vn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=vn){return this.component?this.component.multipleInstances?t:vn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lE(e){return e===vn?void 0:e}function uE(e){return e.instantiationMode==="EAGER"}/**
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
 */class cE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const fE={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},dE=F.INFO,hE={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},pE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=hE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eg{constructor(t){this.name=t,this._logLevel=dE,this._logHandler=pE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const mE=(e,t)=>t.some(n=>e instanceof n);let hd,pd;function gE(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vE(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,Bl=new WeakMap,ng=new WeakMap,ka=new WeakMap,oc=new WeakMap;function yE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(qt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&tg.set(n,e)}).catch(()=>{}),oc.set(t,e),t}function wE(e){if(Bl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Bl.set(e,t)}let $l={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ng.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _E(e){$l=e($l)}function EE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ia(this),t,...n);return ng.set(r,t.sort?t.sort():[t]),qt(r)}:vE().includes(e)?function(...t){return e.apply(Ia(this),t),qt(tg.get(this))}:function(...t){return qt(e.apply(Ia(this),t))}}function SE(e){return typeof e=="function"?EE(e):(e instanceof IDBTransaction&&wE(e),mE(e,gE())?new Proxy(e,$l):e)}function qt(e){if(e instanceof IDBRequest)return yE(e);if(ka.has(e))return ka.get(e);const t=SE(e);return t!==e&&(ka.set(e,t),oc.set(t,e)),t}const Ia=e=>oc.get(e);function kE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=qt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(qt(s.result),l.oldVersion,l.newVersion,qt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const IE=["get","getKey","getAll","getAllKeys","count"],CE=["put","add","delete","clear"],Ca=new Map;function md(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ca.get(t))return Ca.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=CE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||IE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ca.set(t,o),o}_E(e=>({...e,get:(t,n,r)=>md(t,n)||e.get(t,n,r),has:(t,n)=>!!md(t,n)||e.has(t,n)}));/**
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
 */class xE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wl="@firebase/app",gd="0.10.15";/**
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
 */const It=new eg("@firebase/app"),PE="@firebase/app-compat",NE="@firebase/analytics-compat",AE="@firebase/analytics",OE="@firebase/app-check-compat",RE="@firebase/app-check",bE="@firebase/auth",LE="@firebase/auth-compat",DE="@firebase/database",ME="@firebase/data-connect",jE="@firebase/database-compat",UE="@firebase/functions",FE="@firebase/functions-compat",zE="@firebase/installations",BE="@firebase/installations-compat",$E="@firebase/messaging",WE="@firebase/messaging-compat",VE="@firebase/performance",HE="@firebase/performance-compat",KE="@firebase/remote-config",GE="@firebase/remote-config-compat",YE="@firebase/storage",QE="@firebase/storage-compat",XE="@firebase/firestore",qE="@firebase/vertexai",JE="@firebase/firestore-compat",ZE="firebase",eS="11.0.1";/**
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
 */const Vl="[DEFAULT]",tS={[Wl]:"fire-core",[PE]:"fire-core-compat",[AE]:"fire-analytics",[NE]:"fire-analytics-compat",[RE]:"fire-app-check",[OE]:"fire-app-check-compat",[bE]:"fire-auth",[LE]:"fire-auth-compat",[DE]:"fire-rtdb",[ME]:"fire-data-connect",[jE]:"fire-rtdb-compat",[UE]:"fire-fn",[FE]:"fire-fn-compat",[zE]:"fire-iid",[BE]:"fire-iid-compat",[$E]:"fire-fcm",[WE]:"fire-fcm-compat",[VE]:"fire-perf",[HE]:"fire-perf-compat",[KE]:"fire-rc",[GE]:"fire-rc-compat",[YE]:"fire-gcs",[QE]:"fire-gcs-compat",[XE]:"fire-fst",[JE]:"fire-fst-compat",[qE]:"fire-vertex","fire-js":"fire-js",[ZE]:"fire-js-all"};/**
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
 */const as=new Map,nS=new Map,Hl=new Map;function vd(e,t){try{e.container.addComponent(t)}catch(n){It.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ci(e){const t=e.name;if(Hl.has(t))return It.debug(`There were multiple attempts to register component ${t}.`),!1;Hl.set(t,e);for(const n of as.values())vd(n,e);for(const n of nS.values())vd(n,e);return!0}function rg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ve(e){return e.settings!==void 0}/**
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
 */const rS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new ji("app","Firebase",rS);/**
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
 */class iS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=eS;function ig(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Jt.create("bad-app-name",{appName:String(i)});if(n||(n=Jm()),!n)throw Jt.create("no-options");const o=as.get(i);if(o){if(ss(n,o.options)&&ss(r,o.config))return o;throw Jt.create("duplicate-app",{appName:i})}const s=new cE(i);for(const l of Hl.values())s.addComponent(l);const a=new iS(n,r,s);return as.set(i,a),a}function oS(e=Vl){const t=as.get(e);if(!t&&e===Vl&&Jm())return ig();if(!t)throw Jt.create("no-app",{appName:e});return t}function lr(e,t,n){var r;let i=(r=tS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}Ci(new Er(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const sS="firebase-heartbeat-database",aS=1,xi="firebase-heartbeat-store";let xa=null;function og(){return xa||(xa=kE(sS,aS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(e=>{throw Jt.create("idb-open",{originalErrorMessage:e.message})})),xa}async function lS(e){try{const n=(await og()).transaction(xi),r=await n.objectStore(xi).get(sg(e));return await n.done,r}catch(t){if(t instanceof ln)It.warn(t.message);else{const n=Jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});It.warn(n.message)}}}async function yd(e,t){try{const r=(await og()).transaction(xi,"readwrite");await r.objectStore(xi).put(t,sg(e)),await r.done}catch(n){if(n instanceof ln)It.warn(n.message);else{const r=Jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});It.warn(r.message)}}}function sg(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uS=1024,cS=30*24*60*60*1e3;class fS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=cS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){It.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:r,unsentEntries:i}=dS(this._heartbeatsCache.heartbeats),o=Xm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return It.warn(n),""}}}function wd(){return new Date().toISOString().substring(0,10)}function dS(e,t=uS){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),_d(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_d(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J_()?Z_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _d(e){return Xm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function pS(e){Ci(new Er("platform-logger",t=>new xE(t),"PRIVATE")),Ci(new Er("heartbeat",t=>new fS(t),"PRIVATE")),lr(Wl,gd,e),lr(Wl,gd,"esm2017"),lr("fire-js","")}pS("");function sc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ag(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mS=ag,lg=new ji("auth","Firebase",ag());/**
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
 */const ls=new eg("@firebase/auth");function gS(e,...t){ls.logLevel<=F.WARN&&ls.warn(`Auth (${Fi}): ${e}`,...t)}function To(e,...t){ls.logLevel<=F.ERROR&&ls.error(`Auth (${Fi}): ${e}`,...t)}/**
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
 */function Ue(e,...t){throw lc(e,...t)}function Ge(e,...t){return lc(e,...t)}function ac(e,t,n){const r=Object.assign(Object.assign({},mS()),{[t]:n});return new ji("auth","Firebase",r).create(t,{appName:e.name})}function vt(e){return ac(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vS(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ue(e,"argument-error"),ac(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return lg.create(e,...t)}function O(e,t,...n){if(!e)throw lc(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw To(t),new Error(t)}function Ct(e,t){e||dt(t)}/**
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
 */function Kl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yS(){return Ed()==="http:"||Ed()==="https:"}function Ed(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function wS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yS()||Q_()||"connection"in navigator)?navigator.onLine:!0}function _S(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class zi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=G_()||X_()}get(){return wS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uc(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ug{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ES={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SS=new zi(3e4,6e4);function cn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return cg(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ui(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return Y_()||(u.referrerPolicy="no-referrer"),ug.fetch()(fg(e,e.config.apiHost,n,a),u)})}async function cg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ES),t);try{const i=new IS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw fo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw fo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw fo(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ac(e,c,u);Ue(e,c)}}catch(i){if(i instanceof ln)throw i;Ue(e,"network-request-failed",{message:String(i)})}}async function Bi(e,t,n,r,i={}){const o=await fn(e,t,n,r,i);return"mfaPendingCredential"in o&&Ue(e,"multi-factor-auth-required",{_serverResponse:o}),o}function fg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?uc(e.config,i):`${e.config.apiScheme}://${i}`}function kS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),SS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(e,t,r);return i.customData._tokenResponse=n,i}function Sd(e){return e!==void 0&&e.enterprise!==void 0}class CS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return kS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xS(e,t){return fn(e,"GET","/v2/recaptchaConfig",cn(e,t))}/**
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
 */async function TS(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function dg(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ri(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function PS(e,t=!1){const n=un(e),r=await n.getIdToken(t),i=cc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ri(Ta(i.auth_time)),issuedAtTime:ri(Ta(i.iat)),expirationTime:ri(Ta(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ta(e){return Number(e)*1e3}function cc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=qm(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kd(e){const t=cc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ti(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ln&&NS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function NS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class AS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function us(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ti(e,dg(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?hg(o.providerUserInfo):[],a=RS(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Gl(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function OS(e){const t=un(e);await us(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function RS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function hg(e){return e.map(t=>{var{providerId:n}=t,r=sc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bS(e,t){const n=await cg(e,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=fg(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ug.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LS(e,t){return fn(e,"POST","/v2/accounts:revokeToken",cn(e,t))}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):kd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){O(t.length!==0,"internal-error");const n=kd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await bS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ur;return r&&(O(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function At(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ht{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=sc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return PS(this,t)}reload(){return OS(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(vt(this.auth));const t=await this.getIdToken();return await Ti(this,TS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:P,stsTokenManager:x}=n;O(m&&x,t,"internal-error");const A=ur.fromJSON(this.name,x);O(typeof m=="string",t,"internal-error"),At(d,t.name),At(p,t.name),O(typeof w=="boolean",t,"internal-error"),O(typeof k=="boolean",t,"internal-error"),At(v,t.name),At(y,t.name),At(_,t.name),At(E,t.name),At(h,t.name),At(f,t.name);const B=new ht({uid:m,auth:t,email:p,emailVerified:w,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:A,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(B.providerData=P.map(L=>Object.assign({},L))),E&&(B._redirectEventId=E),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new ur;i.updateFromServerResponse(n);const o=new ht({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await us(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?hg(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new ur;a.updateFromIdToken(r);const l=new ht({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Id=new Map;function pt(e){Ct(e instanceof Function,"Expected a class definition");let t=Id.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Id.set(e,t),t)}/**
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
 */class pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}pg.type="NONE";const Cd=pg;/**
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
 */function Po(e,t,n){return`firebase:${e}:${t}:${n}`}class cr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,o),this.fullPersistenceKey=Po("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ht._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new cr(pt(Cd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||pt(Cd);const s=Po(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=ht._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new cr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new cr(o,t,r))}}/**
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
 */function xd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_g(t))return"Blackberry";if(Eg(t))return"Webos";if(gg(t))return"Safari";if((t.includes("chrome/")||vg(t))&&!t.includes("edge/"))return"Chrome";if(wg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mg(e=me()){return/firefox\//i.test(e)}function gg(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vg(e=me()){return/crios\//i.test(e)}function yg(e=me()){return/iemobile/i.test(e)}function wg(e=me()){return/android/i.test(e)}function _g(e=me()){return/blackberry/i.test(e)}function Eg(e=me()){return/webos/i.test(e)}function fc(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function DS(e=me()){var t;return fc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function MS(){return q_()&&document.documentMode===10}function Sg(e=me()){return fc(e)||wg(e)||Eg(e)||_g(e)||/windows phone/i.test(e)||yg(e)}/**
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
 */function kg(e,t=[]){let n;switch(e){case"Browser":n=xd(me());break;case"Worker":n=`${xd(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}/**
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
 */class jS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function US(e,t={}){return fn(e,"GET","/v2/passwordPolicy",cn(e,t))}/**
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
 */const FS=6;class zS{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:FS,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class BS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Td(this),this.idTokenSubscription=new Td(this),this.beforeStateQueue=new jS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await dg(this,{idToken:t}),r=await ht._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ve(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await us(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ve(this.app))return Promise.reject(vt(this));const n=t?un(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ve(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await US(this),n=new zS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ji("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&gS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dn(e){return un(e)}class Td{constructor(t){this.auth=t,this.observer=null,this.addObserver=iE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $S(e){Ms=e}function Ig(e){return Ms.loadJS(e)}function WS(){return Ms.recaptchaEnterpriseScript}function VS(){return Ms.gapiScript}function HS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class KS{constructor(){this.enterprise=new GS}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class GS{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const YS="recaptcha-enterprise",Cg="NO_RECAPTCHA";class QS{constructor(t){this.type=YS,this.auth=dn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{xS(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new CS(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Sd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(Cg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new KS().execute("siteKey",{action:"verify"}):new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Sd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=WS();l.length!==0&&(l+=a),Ig(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Pd(e,t,n,r=!1,i=!1){const o=new QS(e);let s;if(i)s=Cg;else try{s=await o.verify(n)}catch{s=await o.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yl(e,t,n,r,i){var o;if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Pd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Pd(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
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
 */function XS(e,t){const n=rg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ss(o,t??{}))return i;Ue(i,"already-initialized")}return n.initialize({options:t})}function qS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function JS(e,t,n){const r=dn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=xg(t),{host:s,port:a}=ZS(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),ek()}function xg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ZS(e){const t=xg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Nd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Nd(s)}}}function Nd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ek(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class dc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(t){return dt("not implemented")}_linkToIdToken(t,n){return dt("not implemented")}_getReauthenticationResolver(t){return dt("not implemented")}}async function tk(e,t){return fn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function nk(e,t){return Bi(e,"POST","/v1/accounts:signInWithPassword",cn(e,t))}/**
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
 */async function rk(e,t){return Bi(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}async function ik(e,t){return Bi(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}/**
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
 */class Pi extends dc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Pi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Pi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(t,n,"signInWithPassword",nk);case"emailLink":return rk(t,{email:this._email,oobCode:this._password});default:Ue(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(t,r,"signUpPassword",tk);case"emailLink":return ik(t,{idToken:n,email:this._email,oobCode:this._password});default:Ue(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function fr(e,t){return Bi(e,"POST","/v1/accounts:signInWithIdp",cn(e,t))}/**
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
 */const ok="http://localhost";class Ln extends dc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=sc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ln(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fr(t,n)}buildRequest(){const t={requestUri:ok,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ui(n)}return t}}/**
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
 */function sk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ak(e){const t=Vr(Hr(e)).link,n=t?Vr(Hr(t)).deep_link_id:null,r=Vr(Hr(e)).deep_link_id;return(r?Vr(Hr(r)).link:null)||r||n||t||e}class hc{constructor(t){var n,r,i,o,s,a;const l=Vr(Hr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=sk((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=ak(t);try{return new hc(n)}catch{return null}}}/**
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
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(t,n){return Pi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=hc.parseLink(n);return O(r,"argument-error"),Pi._fromEmailAndCode(t,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends pc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends $i{constructor(){super("facebook.com")}static credential(t){return Ln._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class ut extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ln._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ut.credentialFromTaggedObject(t)}static credentialFromError(t){return ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class Mt extends $i{constructor(){super("github.com")}static credential(t){return Ln._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class jt extends $i{constructor(){super("twitter.com")}static credential(t,n){return Ln._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */async function lk(e,t){return Bi(e,"POST","/v1/accounts:signUp",cn(e,t))}/**
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
 */class Dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ht._fromIdTokenResponse(t,r,i),s=Ad(r);return new Dn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Ad(r);return new Dn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Ad(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class cs extends ln{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new cs(t,n,r,i)}}function Tg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(e,o,t,r):o})}async function uk(e,t,n=!1){const r=await Ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dn._forOperation(e,"link",r)}/**
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
 */async function ck(e,t,n=!1){const{auth:r}=e;if(Ve(r.app))return Promise.reject(vt(r));const i="reauthenticate";try{const o=await Ti(e,Tg(r,i,t,e),n);O(o.idToken,r,"internal-error");const s=cc(o.idToken);O(s,r,"internal-error");const{sub:a}=s;return O(e.uid===a,r,"user-mismatch"),Dn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),o}}/**
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
 */async function Pg(e,t,n=!1){if(Ve(e.app))return Promise.reject(vt(e));const r="signIn",i=await Tg(e,r,t),o=await Dn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function fk(e,t){return Pg(dn(e),t)}/**
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
 */async function Ng(e){const t=dn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function dk(e,t,n){if(Ve(e.app))return Promise.reject(vt(e));const r=dn(e),s=await Yl(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ng(e),l}),a=await Dn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function hk(e,t,n){return Ve(e.app)?Promise.reject(vt(e)):fk(un(e),Tr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ng(e),r})}function pk(e,t,n,r){return un(e).onIdTokenChanged(t,n,r)}function mk(e,t,n){return un(e).beforeAuthStateChanged(t,n)}function gk(e,t,n,r){return un(e).onAuthStateChanged(t,n,r)}const fs="__sak";/**
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
 */class Ag{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fs,"1"),this.storage.removeItem(fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vk=1e3,yk=10;class Og extends Ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);MS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,yk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Og.type="LOCAL";const wk=Og;/**
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
 */class Rg extends Ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Rg.type="SESSION";const bg=Rg;/**
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
 */function _k(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class js{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new js(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await _k(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
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
 */function mc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Ek{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=mc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function it(){return window}function Sk(e){it().location.href=e}/**
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
 */function Lg(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function kk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ik(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ck(){return Lg()?self:null}/**
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
 */const Dg="firebaseLocalStorageDb",xk=1,ds="firebaseLocalStorage",Mg="fbase_key";class Wi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Us(e,t){return e.transaction([ds],t?"readwrite":"readonly").objectStore(ds)}function Tk(){const e=indexedDB.deleteDatabase(Dg);return new Wi(e).toPromise()}function Ql(){const e=indexedDB.open(Dg,xk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ds,{keyPath:Mg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ds)?t(r):(r.close(),await Tk(),t(await Ql()))})})}async function Od(e,t,n){const r=Us(e,!0).put({[Mg]:t,value:n});return new Wi(r).toPromise()}async function Pk(e,t){const n=Us(e,!1).get(t),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function Rd(e,t){const n=Us(e,!0).delete(t);return new Wi(n).toPromise()}const Nk=800,Ak=3;class jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ql(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ak)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kk(),!this.activeServiceWorker)return;this.sender=new Ek(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ql();return await Od(t,fs,"1"),await Rd(t,fs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Od(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Pk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Us(i,!1).getAll();return new Wi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jg.type="LOCAL";const Ok=jg;new zi(3e4,6e4);/**
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
 */function Ug(e,t){return t?pt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class gc extends dc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Rk(e){return Pg(e.auth,new gc(e),e.bypassAuthState)}function bk(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),ck(n,new gc(e),e.bypassAuthState)}async function Lk(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),uk(n,new gc(e),e.bypassAuthState)}/**
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
 */class Fg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Rk;case"linkViaPopup":case"linkViaRedirect":return Lk;case"reauthViaPopup":case"reauthViaRedirect":return bk;default:Ue(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Dk=new zi(2e3,1e4);async function Mk(e,t,n){if(Ve(e.app))return Promise.reject(Ge(e,"operation-not-supported-in-this-environment"));const r=dn(e);vS(e,t,pc);const i=Ug(r,n);return new Sn(r,"signInViaPopup",t,i).executeNotNull()}class Sn extends Fg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Dk.get())};t()}}Sn.currentPopupAction=null;/**
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
 */const jk="pendingRedirect",No=new Map;class Uk extends Fg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=No.get(this.auth._key());if(!t){try{const r=await Fk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}No.set(this.auth._key(),t)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fk(e,t){const n=$k(t),r=Bk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zk(e,t){No.set(e._key(),t)}function Bk(e){return pt(e._redirectPersistence)}function $k(e){return Po(jk,e.config.apiKey,e.name)}async function Wk(e,t,n=!1){if(Ve(e.app))return Promise.reject(vt(e));const r=dn(e),i=Ug(r,t),s=await new Uk(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const Vk=10*60*1e3;class Hk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Kk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!zg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(t))}saveEventToCache(t){this.cachedEventUids.add(bd(t)),this.lastProcessedEventTime=Date.now()}}function bd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function zg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Kk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(e);default:return!1}}/**
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
 */async function Gk(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
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
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qk=/^https?/;async function Xk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Gk(e);for(const n of t)try{if(qk(n))return}catch{}Ue(e,"unauthorized-domain")}function qk(e){const t=Kl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Qk.test(n))return!1;if(Yk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Jk=new zi(3e4,6e4);function Ld(){const e=it().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Zk(e){return new Promise((t,n)=>{var r,i,o;function s(){Ld(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ld(),n(Ge(e,"network-request-failed"))},timeout:Jk.get()})}if(!((i=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=it().gapi)===null||o===void 0)&&o.load)s();else{const a=HS("iframefcb");return it()[a]=()=>{gapi.load?s():n(Ge(e,"network-request-failed"))},Ig(`${VS()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ao=null,t})}let Ao=null;function e2(e){return Ao=Ao||Zk(e),Ao}/**
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
 */const t2=new zi(5e3,15e3),n2="__/auth/iframe",r2="emulator/auth/iframe",i2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s2(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?uc(t,r2):`https://${e.config.authDomain}/${n2}`,r={apiKey:t.apiKey,appName:e.name,v:Fi},i=o2.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ui(r).slice(1)}`}async function a2(e){const t=await e2(e),n=it().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:s2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i2,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ge(e,"network-request-failed"),a=it().setTimeout(()=>{o(s)},t2.get());function l(){it().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const l2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u2=500,c2=600,f2="_blank",d2="http://localhost";class Dd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h2(e,t,n,r=u2,i=c2){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},l2),{width:r.toString(),height:i.toString(),top:o,left:s}),u=me().toLowerCase();n&&(a=vg(u)?f2:n),mg(u)&&(t=t||d2,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[v,y])=>`${p}${v}=${y},`,"");if(DS(u)&&a!=="_self")return p2(t||"",a),new Dd(null);const d=window.open(t||"",a,c);O(d,e,"popup-blocked");try{d.focus()}catch{}return new Dd(d)}function p2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const m2="__/auth/handler",g2="emulator/auth/handler",v2=encodeURIComponent("fac");async function Md(e,t,n,r,i,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(t instanceof pc){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",rE(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))s[c]=d}if(t instanceof $i){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${v2}=${encodeURIComponent(l)}`:"";return`${y2(e)}?${Ui(a).slice(1)}${u}`}function y2({config:e}){return e.emulator?uc(e,g2):`https://${e.authDomain}/${m2}`}/**
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
 */const Pa="webStorageSupport";class w2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bg,this._completeRedirectFn=Wk,this._overrideRedirectResult=zk}async _openPopup(t,n,r,i){var o;Ct((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Md(t,n,r,Kl(),i);return h2(t,s,mc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Md(t,n,r,Kl(),i);return Sk(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ct(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await a2(t),r=new Hk(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Pa,{type:Pa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Pa];s!==void 0&&n(!!s),Ue(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sg()||gg()||fc()}}const _2=w2;var jd="@firebase/auth",Ud="1.8.0";/**
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
 */class E2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k2(e){Ci(new Er("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;O(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kg(e)},u=new BS(r,i,o,l);return qS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ci(new Er("auth-internal",t=>{const n=dn(t.getProvider("auth").getImmediate());return(r=>new E2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(jd,Ud,S2(e)),lr(jd,Ud,"esm2017")}/**
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
 */const I2=5*60,C2=Zm("authIdTokenMaxAge")||I2;let Fd=null;const x2=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>C2)return;const i=n==null?void 0:n.token;Fd!==i&&(Fd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function T2(e=oS()){const t=rg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=XS(e,{popupRedirectResolver:_2,persistence:[Ok,wk,bg]}),r=Zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=x2(o.toString());mk(n,s,()=>s(n.currentUser)),pk(n,a=>s(a))}}const i=H_("auth");return i&&JS(n,`http://${i}`),n}function P2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}$S({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ge("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",P2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k2("Browser");var N2="firebase",A2="11.0.1";/**
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
 */lr(N2,A2,"app");const O2={apiKey:"AIzaSyD53zTsuF-3bB6YR0aC4noAmt4GAd70Fio",authDomain:"tickify-88e27.firebaseapp.com",projectId:"tickify-88e27",storageBucket:"tickify-88e27.firebasestorage.app",messagingSenderId:"874828922225",appId:"1:874828922225:web:92660bc3e43ffeb47dcad0"},R2=ig(O2),Vi=T2(R2),Bg=ps.createContext();function $g(){return I.useContext(Bg)}function b2({children:e}){const[t,n]=I.useState(null),[r,i]=I.useState(!1),[o,s]=I.useState(!0);I.useEffect(()=>gk(Vi,a),[]);async function a(u){u?(n({...u}),i(!0)):(n(null),i(!1)),s(!1)}const l={currentUser:t,userLoggedIn:r,loading:o};return g.jsx(Bg.Provider,{value:l,children:!o&&e})}const L2=async(e,t)=>dk(Vi,e,t),D2=async(e,t)=>hk(Vi,e,t),M2=async()=>{const e=new ut;return await Mk(Vi,e)},j2=()=>Vi.signOut();function U2(){const{userLoggedIn:e,currentUser:t}=$g();return g.jsxs("nav",{children:[g.jsxs("div",{className:"info",children:[g.jsx("img",{src:j_,alt:"logo"}),g.jsx("h1",{style:{cursor:"pointer"},children:"Tickify.click"})]}),g.jsx("div",{children:e?g.jsxs("p",{children:["Logged in as ",t.email," "]}):""}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx(lt,{to:"/Tickify_Project/",style:{textDecoration:"none",color:"black"},children:"Home"})}),g.jsx("li",{children:g.jsx(lt,{to:"/Tickify_Project/discovers",style:{textDecoration:"none",color:"black"},children:"Discover"})}),g.jsx("li",{children:g.jsx(lt,{to:"/Tickify_Project/advert",style:{textDecoration:"none",color:"black"},children:"Advert"})}),g.jsx("li",{children:g.jsx(lt,{to:"/Tickify_Project/pricing",style:{textDecoration:"none",color:"black"},children:"Pricing"})}),g.jsx("li",{children:g.jsx(lt,{to:"/Tickify_Project/contact",style:{textDecoration:"none",color:"black"},children:"Contact"})}),g.jsx("div",{children:e?g.jsx("p",{onClick:j2,style:{cursor:"pointer",color:"#b30d0d"},children:"Logout"}):g.jsx("button",{className:"get-started",children:g.jsx(lt,{to:"/Tickify_Project/login-sign-up",style:{textDecoration:"none",color:"white"},children:"Get Started"})})})]})]})}function F2(){return g.jsx("div",{children:g.jsx("h1",{style:{color:"black"},children:"Discover"})})}function z2(){return g.jsx("div",{children:g.jsx("h1",{style:{color:"black"},children:"About"})})}function B2(){return g.jsx("div",{children:g.jsx("h1",{style:{color:"black"},children:"Advert"})})}function $2(){const[e,t]=I.useState(""),[n,r]=I.useState("");$g();const i=Ku(),o=async a=>{a.preventDefault();try{await D2(e,n),i("/Tickify_Project/")}catch(l){console.error(l.message)}};return g.jsx("div",{className:"login-wrapper",children:g.jsxs("div",{className:"login-container",children:[g.jsxs("div",{className:"left-section",children:[g.jsx("h1",{children:"Tickify"}),g.jsx("p",{children:"Your gateway to seamless event experiences"})]}),g.jsxs("form",{className:"login-form",autoComplete:"off",children:[g.jsx("h2",{children:"Welcome Back "}),g.jsx("p",{children:"Please log in to access your tickets"}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"email",id:"email",placeholder:" ",value:e,onChange:a=>t(a.target.value),required:!0}),g.jsx("label",{htmlFor:"email",children:"Email"})]}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"password",id:"password",placeholder:" ",value:n,onChange:a=>r(a.target.value),required:!0}),g.jsx("label",{htmlFor:"password",children:"Password"})]}),g.jsxs("p",{children:["Forgot password? ",g.jsx(lt,{to:"/Tickify_Project/forgetpassword",style:{cursor:"pointer",color:"#b30d0d"},children:"Click here"})]}),g.jsx("button",{type:"submit",className:"login-btn",onClick:o,children:"Log In"}),g.jsxs("p",{className:"signup-text",style:{color:"black"},children:["Don't have an account? ",g.jsx(lt,{to:"/Tickify_Project/sign-up",children:"Sign Up"})]})]})]})})}function W2(){return g.jsx("div",{children:g.jsx("h1",{style:{color:"black"},children:"Pricing"})})}function V2(){return g.jsx("div",{children:g.jsx("h1",{style:{color:"black"},children:"Contact"})})}function H2(){const[e,t]=I.useState({firstName:"",lastName:"",email:"",password:""}),[n,r]=I.useState(""),[i,o]=I.useState(""),s=()=>e.password===n?!0:(o("Password does not match"),g.jsx(gt,{icon:I_,style:{color:"#4CAF50"}})),[a,l]=I.useState(!1),[u,c]=I.useState(""),d=Ku(),p=E=>{t({...e,[E.target.name]:E.target.value}),l(!1)},v=E=>{E.preventDefault(),e.firstName&&e.lastName&&e.email&&e.password&&s()&&a?(c(""),y(),console.log("Form Submitted",e,s(),a)):c("Please fill in all fields")},y=async()=>{try{await L2(e.email,e.password),d("/Tickify_Project/")}catch(E){c(E.message)}},_=async()=>{try{await M2(),d("/Tickify_Project/")}catch(E){c(E.message)}};return g.jsxs("div",{className:"sign-up-content",children:[g.jsx("div",{className:"left-section",children:g.jsxs("form",{children:[g.jsx("h2",{children:"Create Account"}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"text",name:"firstName",value:e.firstName,onChange:p,required:!0,autoComplete:"off",id:"firstName"}),g.jsx("label",{htmlFor:"firstName",children:"First Name"})]}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"text",name:"lastName",value:e.lastName,onChange:p,required:!0,autoComplete:"off",id:"lastName"}),g.jsx("label",{htmlFor:"lastName",children:"Last Name"})]}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"email",name:"email",value:e.email,onChange:p,required:!0,autoComplete:"off",id:"email"}),g.jsx("label",{htmlFor:"email",children:"Email"})]}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"password",name:"password",value:e.password,onChange:p,required:!0,autoComplete:"off",id:"password"}),g.jsx("label",{htmlFor:"password",children:"Password"})]}),g.jsxs("div",{className:"input-group",children:[g.jsx("input",{type:"password",name:"confirmPassword",value:n,onChange:E=>r(E.target.value),required:!0,autoComplete:"off",id:"confirmPassword"}),g.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"})]}),g.jsx("p",{className:"error",children:i}),g.jsxs("div",{className:"terms-and-conditions",children:[g.jsx("input",{type:"checkbox",name:"termsAndConditions",value:"termsAndConditions",onChange:()=>l(!a),checked:a,id:"termsAndConditions"}),g.jsx("label",{htmlFor:"termsAndConditions",children:"Accept Terms and Conditions"})]}),u&&g.jsx("p",{className:"error",children:u}),g.jsx("button",{onClick:v,type:"submit",children:"Sign Up"}),g.jsx("p",{style:{color:"#b30d0d",textAlign:"center",marginTop:"10px"},children:"Or"}),g.jsx("div",{style:{justifyContent:"center",marginTop:"30px",padding:"0 7rem"},children:g.jsx(gt,{icon:A_,size:"2x",style:{color:"#b30d0d",cursor:"pointer"},onClick:_})})]})}),g.jsx("div",{className:"right-section"})]})}function K2(){return g.jsx("div",{children:g.jsx("h1",{style:{color:"black"},children:"ForgetPassword"})})}const G2=()=>g.jsx(b2,{children:g.jsxs(p1,{children:[g.jsx(U2,{}),g.jsxs(a1,{children:[g.jsx(Xe,{path:"/Tickify_Project/",element:g.jsxs(g.Fragment,{children:[g.jsx(M_,{}),g.jsx(P_,{}),g.jsx(N_,{}),g.jsx(L_,{})]})}),g.jsx(Xe,{path:"/Tickify_Project/discovers",element:g.jsx(F2,{})}),g.jsx(Xe,{path:"/Tickify_Project/advert",element:g.jsx(B2,{})}),g.jsx(Xe,{path:"/Tickify_Project/about",element:g.jsx(z2,{})}),g.jsx(Xe,{path:"/Tickify_Project/pricing",element:g.jsx(W2,{})}),g.jsx(Xe,{path:"/Tickify_Project/contact",element:g.jsx(V2,{})}),g.jsx(Xe,{path:"/Tickify_Project/login-sign-up",element:g.jsx($2,{})}),g.jsx(Xe,{path:"/Tickify_Project/sign-up",element:g.jsx(H2,{})}),g.jsx(Xe,{path:"/Tickify_Project/forgetpassword",element:g.jsx(K2,{})})]})]})});Zp(document.getElementById("root")).render(g.jsx(I.StrictMode,{children:g.jsx(G2,{})}));
