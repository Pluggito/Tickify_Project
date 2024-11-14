function Kg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},mo={},Wd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=Symbol.for("react.element"),Yg=Symbol.for("react.portal"),Qg=Symbol.for("react.fragment"),Xg=Symbol.for("react.strict_mode"),qg=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),ev=Symbol.for("react.forward_ref"),tv=Symbol.for("react.suspense"),nv=Symbol.for("react.memo"),rv=Symbol.for("react.lazy"),_c=Symbol.iterator;function iv(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var Hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gd=Object.assign,Kd={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Kd,this.updater=n||Hd}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=Ir.prototype;function ql(e,t,n){this.props=e,this.context=t,this.refs=Kd,this.updater=n||Hd}var Jl=ql.prototype=new Yd;Jl.constructor=ql;Gd(Jl,Ir.prototype);Jl.isPureReactComponent=!0;var Ec=Array.isArray,Qd=Object.prototype.hasOwnProperty,Zl={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Qd.call(t,r)&&!Xd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oi,type:e,key:s,ref:o,props:i,_owner:Zl.current}}function sv(e,t){return{$$typeof:Oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oi}function ov(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sc=/\/+/g;function Wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ov(""+e.key):t.toString(36)}function ps(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Oi:case Yg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Wo(o,0):r,Ec(i)?(n="",e!=null&&(n=e.replace(Sc,"$&/")+"/"),ps(i,t,n,"",function(u){return u})):i!=null&&(eu(i)&&(i=sv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ec(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Wo(s,a);o+=ps(s,t,n,l,i)}else if(l=iv(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Wo(s,a++),o+=ps(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qi(e,t,n){if(e==null)return e;var r=[],i=0;return ps(e,r,"","",function(s){return t.call(n,s,i++)}),r}function av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},ms={transition:null},lv={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:ms,ReactCurrentOwner:Zl};function Jd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Qi,forEach:function(e,t,n){Qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qi(e,function(){t++}),t},toArray:function(e){return Qi(e,function(t){return t})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Ir;D.Fragment=Qg;D.Profiler=qg;D.PureComponent=ql;D.StrictMode=Xg;D.Suspense=tv;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;D.act=Jd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Zl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Qd.call(t,l)&&!Xd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oi,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jg,_context:e},e.Consumer=e};D.createElement=qd;D.createFactory=function(e){var t=qd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ev,render:e}};D.isValidElement=eu;D.lazy=function(e){return{$$typeof:rv,_payload:{_status:-1,_result:e},_init:av}};D.memo=function(e,t){return{$$typeof:nv,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ms.transition;ms.transition={};try{e()}finally{ms.transition=t}};D.unstable_act=Jd;D.useCallback=function(e,t){return ve.current.useCallback(e,t)};D.useContext=function(e){return ve.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};D.useEffect=function(e,t){return ve.current.useEffect(e,t)};D.useId=function(){return ve.current.useId()};D.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ve.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};D.useRef=function(e){return ve.current.useRef(e)};D.useState=function(e){return ve.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ve.current.useTransition()};D.version="18.3.1";Wd.exports=D;var I=Wd.exports;const go=$d(I),uv=Kg({__proto__:null,default:go},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv=I,fv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,pv=cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mv={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)hv.call(t,r)&&!mv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fv,type:e,key:s,ref:o,props:i,_owner:pv.current}}mo.Fragment=dv;mo.jsx=Zd;mo.jsxs=Zd;Vd.exports=mo;var c=Vd.exports,eh={exports:{}},Ae={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var b=T.length;T.push(R);e:for(;0<b;){var q=b-1>>>1,re=T[q];if(0<i(re,R))T[q]=R,T[b]=re,b=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],b=T.pop();if(b!==R){T[0]=b;e:for(var q=0,re=T.length,Ki=re>>>1;q<Ki;){var hn=2*(q+1)-1,Vo=T[hn],pn=hn+1,Yi=T[pn];if(0>i(Vo,b))pn<re&&0>i(Yi,Vo)?(T[q]=Yi,T[pn]=b,q=pn):(T[q]=Vo,T[hn]=b,q=hn);else if(pn<re&&0>i(Yi,b))T[q]=Yi,T[pn]=b,q=pn;else break e}}return R}function i(T,R){var b=T.sortIndex-R.sortIndex;return b!==0?b:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,m=3,v=!1,w=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function _(T){if(y=!1,g(T),!w)if(n(l)!==null)w=!0,Bo(k);else{var R=n(u);R!==null&&$o(_,R.startTime-T)}}function k(T,R){w=!1,y&&(y=!1,p(A),A=-1),v=!0;var b=m;try{for(g(R),d=n(l);d!==null&&(!(d.expirationTime>R)||T&&!Be());){var q=d.callback;if(typeof q=="function"){d.callback=null,m=d.priorityLevel;var re=q(d.expirationTime<=R);R=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),g(R)}else r(l);d=n(l)}if(d!==null)var Ki=!0;else{var hn=n(u);hn!==null&&$o(_,hn.startTime-R),Ki=!1}return Ki}finally{d=null,m=b,v=!1}}var P=!1,C=null,A=-1,B=5,L=-1;function Be(){return!(e.unstable_now()-L<B)}function Ar(){if(C!==null){var T=e.unstable_now();L=T;var R=!0;try{R=C(!0,T)}finally{R?Or():(P=!1,C=null)}}else P=!1}var Or;if(typeof h=="function")Or=function(){h(Ar)};else if(typeof MessageChannel<"u"){var wc=new MessageChannel,Gg=wc.port2;wc.port1.onmessage=Ar,Or=function(){Gg.postMessage(null)}}else Or=function(){E(Ar,0)};function Bo(T){C=T,P||(P=!0,Or())}function $o(T,R){A=E(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Bo(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var b=m;m=R;try{return T()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=m;m=T;try{return R()}finally{m=b}},e.unstable_scheduleCallback=function(T,R,b){var q=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?q+b:q):b=q,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=b+re,T={id:f++,callback:R,priorityLevel:T,startTime:b,expirationTime:re,sortIndex:-1},b>q?(T.sortIndex=b,t(u,T),n(l)===null&&T===n(u)&&(y?(p(A),A=-1):y=!0,$o(_,b-q))):(T.sortIndex=re,t(l,T),w||v||(w=!0,Bo(k))),T},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(T){var R=m;return function(){var b=m;m=R;try{return T.apply(this,arguments)}finally{m=b}}}})(nh);th.exports=nh;var gv=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=I,Ne=gv;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,oi={};function Mn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(oi[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,yv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Ic={};function wv(e){return Aa.call(Ic,e)?!0:Aa.call(kc,e)?!1:yv.test(e)?Ic[e]=!0:(kc[e]=!0,!1)}function _v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ev(e,t,n,r){if(t===null||typeof t>"u"||_v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tu,nu);le[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tu,nu);le[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tu,nu);le[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ru(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ev(t,n,i,r)&&(n=null),r||i===null?wv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xi=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),sh=Symbol.for("react.context"),su=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),oh=Symbol.for("react.offscreen"),xc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ho;function zr(e){if(Ho===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var Go=!1;function Ko(e,t){if(!e||Go)return"";Go=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Go=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function Sv(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function La(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Vn:return"Portal";case Oa:return"Profiler";case iu:return"StrictMode";case Ra:return"Suspense";case ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sh:return(e.displayName||"Context")+".Consumer";case ih:return(e._context.displayName||"Context")+".Provider";case su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ou:return t=e.displayName||null,t!==null?t:La(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return La(e(t))}catch{}}return null}function kv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return La(t);case 8:return t===iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ah(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iv(e){var t=ah(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){e._valueTracker||(e._valueTracker=Iv(e))}function lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ah(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uh(e,t){t=t.checked,t!=null&&ru(e,"checked",t,!1)}function Da(e,t){uh(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Br=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Br(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function ch(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ji,dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function ph(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,t){if(t){if(Cv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $a=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,ir=null,sr=null;function Ac(e){if(e=Li(e)){if(typeof Va!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Eo(t),Va(e.stateNode,e.type,t))}}function mh(e){ir?sr?sr.push(e):sr=[e]:ir=e}function gh(){if(ir){var e=ir,t=sr;if(sr=ir=null,Ac(e),t)for(e=0;e<t.length;e++)Ac(t[e])}}function vh(e,t){return e(t)}function yh(){}var Yo=!1;function wh(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return vh(e,t,n)}finally{Yo=!1,(ir!==null||sr!==null)&&(yh(),gh())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Wa=!1;if(yt)try{var br={};Object.defineProperty(br,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Wa=!1}function Tv(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Qr=!1,bs=null,Ls=!1,Ha=null,Pv={onError:function(e){Qr=!0,bs=e}};function Nv(e,t,n,r,i,s,o,a,l){Qr=!1,bs=null,Tv.apply(Pv,arguments)}function Av(e,t,n,r,i,s,o,a,l){if(Nv.apply(this,arguments),Qr){if(Qr){var u=bs;Qr=!1,bs=null}else throw Error(S(198));Ls||(Ls=!0,Ha=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oc(e){if(Un(e)!==e)throw Error(S(188))}function Ov(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Oc(i),e;if(s===r)return Oc(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Eh(e){return e=Ov(e),e!==null?Sh(e):null}function Sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sh(e);if(t!==null)return t;e=e.sibling}return null}var kh=Ne.unstable_scheduleCallback,Rc=Ne.unstable_cancelCallback,Rv=Ne.unstable_shouldYield,bv=Ne.unstable_requestPaint,J=Ne.unstable_now,Lv=Ne.unstable_getCurrentPriorityLevel,lu=Ne.unstable_ImmediatePriority,Ih=Ne.unstable_UserBlockingPriority,js=Ne.unstable_NormalPriority,jv=Ne.unstable_LowPriority,xh=Ne.unstable_IdlePriority,vo=null,it=null;function Dv(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Fv,Mv=Math.log,Uv=Math.LN2;function Fv(e){return e>>>=0,e===0?32:31-(Mv(e)/Uv|0)|0}var Zi=64,es=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$r(a):(s&=o,s!==0&&(r=$r(s)))}else o=n&~i,o!==0?r=$r(o):s!==0&&(r=$r(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function zv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ke(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zv(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ch(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function $v(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function uu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Th(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ph,cu,Nh,Ah,Oh,Ka=!1,ts=[],$t=null,Vt=null,Wt=null,ui=new Map,ci=new Map,bt=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bc(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Lr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Li(t),t!==null&&cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wv(e,t,n,r,i){switch(t){case"focusin":return $t=Lr($t,e,t,n,r,i),!0;case"dragenter":return Vt=Lr(Vt,e,t,n,r,i),!0;case"mouseover":return Wt=Lr(Wt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ui.set(s,Lr(ui.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ci.set(s,Lr(ci.get(s)||null,e,t,n,r,i)),!0}return!1}function Rh(e){var t=_n(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=_h(n),t!==null){e.blockedOn=t,Oh(e.priority,function(){Nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$a=r,n.target.dispatchEvent(r),$a=null}else return t=Li(n),t!==null&&cu(t),e.blockedOn=n,!1;t.shift()}return!0}function Lc(e,t,n){gs(e)&&n.delete(t)}function Hv(){Ka=!1,$t!==null&&gs($t)&&($t=null),Vt!==null&&gs(Vt)&&(Vt=null),Wt!==null&&gs(Wt)&&(Wt=null),ui.forEach(Lc),ci.forEach(Lc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ka||(Ka=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Hv)))}function fi(e){function t(i){return jr(i,e)}if(0<ts.length){jr(ts[0],e);for(var n=1;n<ts.length;n++){var r=ts[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&jr($t,e),Vt!==null&&jr(Vt,e),Wt!==null&&jr(Wt,e),ui.forEach(t),ci.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&bt.shift()}var or=Ct.ReactCurrentBatchConfig,Ms=!0;function Gv(e,t,n,r){var i=U,s=or.transition;or.transition=null;try{U=1,fu(e,t,n,r)}finally{U=i,or.transition=s}}function Kv(e,t,n,r){var i=U,s=or.transition;or.transition=null;try{U=4,fu(e,t,n,r)}finally{U=i,or.transition=s}}function fu(e,t,n,r){if(Ms){var i=Ya(e,t,n,r);if(i===null)sa(e,t,r,Us,n),bc(e,r);else if(Wv(i,e,t,n,r))r.stopPropagation();else if(bc(e,r),t&4&&-1<Vv.indexOf(e)){for(;i!==null;){var s=Li(i);if(s!==null&&Ph(s),s=Ya(e,t,n,r),s===null&&sa(e,t,r,Us,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sa(e,t,r,null,n)}}var Us=null;function Ya(e,t,n,r){if(Us=null,e=au(r),e=_n(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function bh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lv()){case lu:return 1;case Ih:return 4;case js:case jv:return 16;case xh:return 536870912;default:return 16}default:return 16}}var Ut=null,du=null,vs=null;function Lh(){if(vs)return vs;var e,t=du,n=t.length,r,i="value"in Ut?Ut.value:Ut.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return vs=i.slice(e,1<r?1-r:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ns(){return!0}function jc(){return!1}function Oe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ns:jc,this.isPropagationStopped=jc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Oe(xr),bi=Q({},xr,{view:0,detail:0}),Yv=Oe(bi),Xo,qo,Dr,yo=Q({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(Xo=e.screenX-Dr.screenX,qo=e.screenY-Dr.screenY):qo=Xo=0,Dr=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),Dc=Oe(yo),Qv=Q({},yo,{dataTransfer:0}),Xv=Oe(Qv),qv=Q({},bi,{relatedTarget:0}),Jo=Oe(qv),Jv=Q({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=Oe(Jv),ey=Q({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=Oe(ey),ny=Q({},xr,{data:0}),Mc=Oe(ny),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function pu(){return oy}var ay=Q({},bi,{key:function(e){if(e.key){var t=ry[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ly=Oe(ay),uy=Q({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=Oe(uy),cy=Q({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),fy=Oe(cy),dy=Q({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Oe(dy),py=Q({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Oe(py),gy=[9,13,27,32],mu=yt&&"CompositionEvent"in window,Xr=null;yt&&"documentMode"in document&&(Xr=document.documentMode);var vy=yt&&"TextEvent"in window&&!Xr,jh=yt&&(!mu||Xr&&8<Xr&&11>=Xr),Fc=" ",zc=!1;function Dh(e,t){switch(e){case"keyup":return gy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function yy(e,t){switch(e){case"compositionend":return Mh(t);case"keypress":return t.which!==32?null:(zc=!0,Fc);case"textInput":return e=t.data,e===Fc&&zc?null:e;default:return null}}function wy(e,t){if(Hn)return e==="compositionend"||!mu&&Dh(e,t)?(e=Lh(),vs=du=Ut=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jh&&t.locale!=="ko"?null:t.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_y[e.type]:t==="textarea"}function Uh(e,t,n,r){mh(r),t=Fs(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,di=null;function Ey(e){Qh(e,0)}function wo(e){var t=Yn(e);if(lh(t))return e}function Sy(e,t){if(e==="change")return t}var Fh=!1;if(yt){var Zo;if(yt){var ea="oninput"in document;if(!ea){var $c=document.createElement("div");$c.setAttribute("oninput","return;"),ea=typeof $c.oninput=="function"}Zo=ea}else Zo=!1;Fh=Zo&&(!document.documentMode||9<document.documentMode)}function Vc(){qr&&(qr.detachEvent("onpropertychange",zh),di=qr=null)}function zh(e){if(e.propertyName==="value"&&wo(di)){var t=[];Uh(t,di,e,au(e)),wh(Ey,t)}}function ky(e,t,n){e==="focusin"?(Vc(),qr=t,di=n,qr.attachEvent("onpropertychange",zh)):e==="focusout"&&Vc()}function Iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(di)}function xy(e,t){if(e==="click")return wo(t)}function Cy(e,t){if(e==="input"||e==="change")return wo(t)}function Ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Ty;function hi(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var n=Wc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wc(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $h(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Py(e){var t=$h(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Hc(n,s);var o=Hc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ny=yt&&"documentMode"in document&&11>=document.documentMode,Gn=null,Qa=null,Jr=null,Xa=!1;function Gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||Gn==null||Gn!==Rs(r)||(r=Gn,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&hi(Jr,r)||(Jr=r,r=Fs(Qa,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function rs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},ta={},Vh={};yt&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function _o(e){if(ta[e])return ta[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vh)return ta[e]=t[n];return e}var Wh=_o("animationend"),Hh=_o("animationiteration"),Gh=_o("animationstart"),Kh=_o("transitionend"),Yh=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Yh.set(e,t),Mn(t,[e])}for(var na=0;na<Kc.length;na++){var ra=Kc[na],Ay=ra.toLowerCase(),Oy=ra[0].toUpperCase()+ra.slice(1);sn(Ay,"on"+Oy)}sn(Wh,"onAnimationEnd");sn(Hh,"onAnimationIteration");sn(Gh,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Kh,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function Yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Av(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yc(i,a,u),s=l}}}if(Ls)throw e=Ha,Ls=!1,Ha=null,e}function $(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var r=e+"__bubble";n.has(r)||(Xh(t,e,2,!1),n.add(r))}function ia(e,t,n){var r=0;t&&(r|=4),Xh(n,e,r,t)}var is="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[is]){e[is]=!0,rh.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||ia(n,!1,e),ia(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[is]||(t[is]=!0,ia("selectionchange",!1,t))}}function Xh(e,t,n,r){switch(bh(t)){case 1:var i=Gv;break;case 4:i=Kv;break;default:i=fu}n=i.bind(null,t,n,e),i=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sa(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_n(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wh(function(){var u=s,f=au(n),d=[];e:{var m=Yh.get(e);if(m!==void 0){var v=hu,w=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":v=ly;break;case"focusin":w="focus",v=Jo;break;case"focusout":w="blur",v=Jo;break;case"beforeblur":case"afterblur":v=Jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fy;break;case Wh:case Hh:case Gh:v=Zv;break;case Kh:v=hy;break;case"scroll":v=Yv;break;case"wheel":v=my;break;case"copy":case"cut":case"paste":v=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Uc}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?m!==null?m+"Capture":null:m;y=[];for(var h=u,g;h!==null;){g=h;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=li(h,p),_!=null&&y.push(mi(h,_,g)))),E)break;h=h.return}0<y.length&&(m=new v(m,w,null,n,f),d.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==$a&&(w=n.relatedTarget||n.fromElement)&&(_n(w)||w[wt]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?_n(w):null,w!==null&&(E=Un(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(y=Dc,_="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Uc,_="onPointerLeave",p="onPointerEnter",h="pointer"),E=v==null?m:Yn(v),g=w==null?m:Yn(w),m=new y(_,h+"leave",v,n,f),m.target=E,m.relatedTarget=g,_=null,_n(f)===u&&(y=new y(p,h+"enter",w,n,f),y.target=g,y.relatedTarget=E,_=y),E=_,v&&w)t:{for(y=v,p=w,h=0,g=y;g;g=Bn(g))h++;for(g=0,_=p;_;_=Bn(_))g++;for(;0<h-g;)y=Bn(y),h--;for(;0<g-h;)p=Bn(p),g--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=Bn(y),p=Bn(p)}y=null}else y=null;v!==null&&Qc(d,m,v,y,!1),w!==null&&E!==null&&Qc(d,E,w,y,!0)}}e:{if(m=u?Yn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var k=Sy;else if(Bc(m))if(Fh)k=Cy;else{k=Iy;var P=ky}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=xy);if(k&&(k=k(e,u))){Uh(d,k,n,f);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ma(m,"number",m.value)}switch(P=u?Yn(u):window,e){case"focusin":(Bc(P)||P.contentEditable==="true")&&(Gn=P,Qa=u,Jr=null);break;case"focusout":Jr=Qa=Gn=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Gc(d,n,f);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":Gc(d,n,f)}var C;if(mu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Hn?Dh(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(jh&&n.locale!=="ko"&&(Hn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Hn&&(C=Lh()):(Ut=f,du="value"in Ut?Ut.value:Ut.textContent,Hn=!0)),P=Fs(u,A),0<P.length&&(A=new Mc(A,e,null,n,f),d.push({event:A,listeners:P}),C?A.data=C:(C=Mh(n),C!==null&&(A.data=C)))),(C=vy?yy(e,n):wy(e,n))&&(u=Fs(u,"onBeforeInput"),0<u.length&&(f=new Mc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=C))}Qh(d,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=li(e,n),s!=null&&r.unshift(mi(e,s,i)),s=li(e,t),s!=null&&r.push(mi(e,s,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=li(n,s),l!=null&&o.unshift(mi(n,l,a))):i||(l=li(n,s),l!=null&&o.push(mi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var by=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Xc(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(Ly,"")}function ss(e,t,n){if(t=Xc(t),Xc(e)!==t&&n)throw Error(S(425))}function zs(){}var qa=null,Ja=null;function Za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,qc=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof qc<"u"?function(e){return qc.resolve(null).then(e).catch(My)}:el;function My(e){setTimeout(function(){throw e})}function oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),tt="__reactFiber$"+Cr,gi="__reactProps$"+Cr,wt="__reactContainer$"+Cr,tl="__reactEvents$"+Cr,Uy="__reactListeners$"+Cr,Fy="__reactHandles$"+Cr;function _n(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jc(e);e!==null;){if(n=e[tt])return n;e=Jc(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[tt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Eo(e){return e[gi]||null}var nl=[],Qn=-1;function on(e){return{current:e}}function V(e){0>Qn||(e.current=nl[Qn],nl[Qn]=null,Qn--)}function z(e,t){Qn++,nl[Qn]=e.current,e.current=t}var en={},he=on(en),Ee=on(!1),Pn=en;function mr(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Bs(){V(Ee),V(he)}function Zc(e,t,n){if(he.current!==en)throw Error(S(168));z(he,t),z(Ee,n)}function qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,kv(e)||"Unknown",i));return Q({},n,r)}function $s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,Pn=he.current,z(he,e),z(Ee,Ee.current),!0}function ef(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=qh(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,V(Ee),V(he),z(he,e)):V(Ee),z(Ee,n)}var ut=null,So=!1,aa=!1;function Jh(e){ut===null?ut=[e]:ut.push(e)}function zy(e){So=!0,Jh(e)}function an(){if(!aa&&ut!==null){aa=!0;var e=0,t=U;try{var n=ut;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,So=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),kh(lu,an),i}finally{U=t,aa=!1}}return null}var Xn=[],qn=0,Vs=null,Ws=0,Le=[],je=0,Nn=null,ft=1,dt="";function gn(e,t){Xn[qn++]=Ws,Xn[qn++]=Vs,Vs=e,Ws=t}function Zh(e,t,n){Le[je++]=ft,Le[je++]=dt,Le[je++]=Nn,Nn=e;var r=ft;e=dt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var s=32-Ke(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Ke(t)+i|n<<i|r,dt=s+e}else ft=1<<s|n<<i|r,dt=e}function vu(e){e.return!==null&&(gn(e,1),Zh(e,1,0))}function yu(e){for(;e===Vs;)Vs=Xn[--qn],Xn[qn]=null,Ws=Xn[--qn],Xn[qn]=null;for(;e===Nn;)Nn=Le[--je],Le[je]=null,dt=Le[--je],Le[je]=null,ft=Le[--je],Le[je]=null}var Ce=null,xe=null,H=!1,He=null;function ep(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,xe=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,xe=null,!0):!1;default:return!1}}function rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(H){var t=xe;if(t){var n=t;if(!tf(e,t)){if(rl(e))throw Error(S(418));t=Ht(n.nextSibling);var r=Ce;t&&tf(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(rl(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function nf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function os(e){if(e!==Ce)return!1;if(!H)return nf(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Za(e.type,e.memoizedProps)),t&&(t=xe)){if(rl(e))throw tp(),Error(S(418));for(;t;)ep(e,t),t=Ht(t.nextSibling)}if(nf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Ce?Ht(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=xe;e;)e=Ht(e.nextSibling)}function gr(){xe=Ce=null,H=!1}function wu(e){He===null?He=[e]:He.push(e)}var By=Ct.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rf(e){var t=e._init;return t(e._payload)}function np(e){function t(p,h){if(e){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Qt(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,_){return h===null||h.tag!==6?(h=pa(g,p.mode,_),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,_){var k=g.type;return k===Wn?f(p,h,g.props.children,_,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ot&&rf(k)===h.type)?(_=i(h,g.props),_.ref=Mr(p,h,g),_.return=p,_):(_=xs(g.type,g.key,g.props,null,p.mode,_),_.ref=Mr(p,h,g),_.return=p,_)}function u(p,h,g,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ma(g,p.mode,_),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function f(p,h,g,_,k){return h===null||h.tag!==7?(h=xn(g,p.mode,_,k),h.return=p,h):(h=i(h,g),h.return=p,h)}function d(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pa(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xi:return g=xs(h.type,h.key,h.props,null,p.mode,g),g.ref=Mr(p,null,h),g.return=p,g;case Vn:return h=ma(h,p.mode,g),h.return=p,h;case Ot:var _=h._init;return d(p,_(h._payload),g)}if(Br(h)||Rr(h))return h=xn(h,p.mode,g,null),h.return=p,h;as(p,h)}return null}function m(p,h,g,_){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,h,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xi:return g.key===k?l(p,h,g,_):null;case Vn:return g.key===k?u(p,h,g,_):null;case Ot:return k=g._init,m(p,h,k(g._payload),_)}if(Br(g)||Rr(g))return k!==null?null:f(p,h,g,_,null);as(p,g)}return null}function v(p,h,g,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(h,p,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xi:return p=p.get(_.key===null?g:_.key)||null,l(h,p,_,k);case Vn:return p=p.get(_.key===null?g:_.key)||null,u(h,p,_,k);case Ot:var P=_._init;return v(p,h,g,P(_._payload),k)}if(Br(_)||Rr(_))return p=p.get(g)||null,f(h,p,_,k,null);as(h,_)}return null}function w(p,h,g,_){for(var k=null,P=null,C=h,A=h=0,B=null;C!==null&&A<g.length;A++){C.index>A?(B=C,C=null):B=C.sibling;var L=m(p,C,g[A],_);if(L===null){C===null&&(C=B);break}e&&C&&L.alternate===null&&t(p,C),h=s(L,h,A),P===null?k=L:P.sibling=L,P=L,C=B}if(A===g.length)return n(p,C),H&&gn(p,A),k;if(C===null){for(;A<g.length;A++)C=d(p,g[A],_),C!==null&&(h=s(C,h,A),P===null?k=C:P.sibling=C,P=C);return H&&gn(p,A),k}for(C=r(p,C);A<g.length;A++)B=v(C,p,A,g[A],_),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?A:B.key),h=s(B,h,A),P===null?k=B:P.sibling=B,P=B);return e&&C.forEach(function(Be){return t(p,Be)}),H&&gn(p,A),k}function y(p,h,g,_){var k=Rr(g);if(typeof k!="function")throw Error(S(150));if(g=k.call(g),g==null)throw Error(S(151));for(var P=k=null,C=h,A=h=0,B=null,L=g.next();C!==null&&!L.done;A++,L=g.next()){C.index>A?(B=C,C=null):B=C.sibling;var Be=m(p,C,L.value,_);if(Be===null){C===null&&(C=B);break}e&&C&&Be.alternate===null&&t(p,C),h=s(Be,h,A),P===null?k=Be:P.sibling=Be,P=Be,C=B}if(L.done)return n(p,C),H&&gn(p,A),k;if(C===null){for(;!L.done;A++,L=g.next())L=d(p,L.value,_),L!==null&&(h=s(L,h,A),P===null?k=L:P.sibling=L,P=L);return H&&gn(p,A),k}for(C=r(p,C);!L.done;A++,L=g.next())L=v(C,p,A,L.value,_),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?A:L.key),h=s(L,h,A),P===null?k=L:P.sibling=L,P=L);return e&&C.forEach(function(Ar){return t(p,Ar)}),H&&gn(p,A),k}function E(p,h,g,_){if(typeof g=="object"&&g!==null&&g.type===Wn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xi:e:{for(var k=g.key,P=h;P!==null;){if(P.key===k){if(k=g.type,k===Wn){if(P.tag===7){n(p,P.sibling),h=i(P,g.props.children),h.return=p,p=h;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ot&&rf(k)===P.type){n(p,P.sibling),h=i(P,g.props),h.ref=Mr(p,P,g),h.return=p,p=h;break e}n(p,P);break}else t(p,P);P=P.sibling}g.type===Wn?(h=xn(g.props.children,p.mode,_,g.key),h.return=p,p=h):(_=xs(g.type,g.key,g.props,null,p.mode,_),_.ref=Mr(p,h,g),_.return=p,p=_)}return o(p);case Vn:e:{for(P=g.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=ma(g,p.mode,_),h.return=p,p=h}return o(p);case Ot:return P=g._init,E(p,h,P(g._payload),_)}if(Br(g))return w(p,h,g,_);if(Rr(g))return y(p,h,g,_);as(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=pa(g,p.mode,_),h.return=p,p=h),o(p)):n(p,h)}return E}var vr=np(!0),rp=np(!1),Hs=on(null),Gs=null,Jn=null,_u=null;function Eu(){_u=Jn=Gs=null}function Su(e){var t=Hs.current;V(Hs),e._currentValue=t}function sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Gs=e,_u=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(_u!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Gs===null)throw Error(S(308));Jn=e,Gs.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var En=null;function ku(e){En===null?En=[e]:En.push(e)}function ip(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ku(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,ku(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uu(e,n)}}function sf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,r){var i=e.updateQueue;Rt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,f=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(m=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){d=w.call(v,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(v,d,m):w,m==null)break e;d=Q({},d,m);break e;case 2:Rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=d):f=f.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);On|=o,e.lanes=o,e.memoizedState=d}}function of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ji={},st=on(ji),vi=on(ji),yi=on(ji);function Sn(e){if(e===ji)throw Error(S(174));return e}function xu(e,t){switch(z(yi,t),z(vi,e),z(st,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fa(t,e)}V(st),z(st,t)}function yr(){V(st),V(vi),V(yi)}function op(e){Sn(yi.current);var t=Sn(st.current),n=Fa(t,e.type);t!==n&&(z(vi,e),z(st,n))}function Cu(e){vi.current===e&&(V(st),V(vi))}var K=on(0);function Ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=[];function Tu(){for(var e=0;e<la.length;e++)la[e]._workInProgressVersionPrimary=null;la.length=0}var _s=Ct.ReactCurrentDispatcher,ua=Ct.ReactCurrentBatchConfig,An=0,Y=null,te=null,ie=null,Qs=!1,Zr=!1,wi=0,$y=0;function ue(){throw Error(S(321))}function Pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Nu(e,t,n,r,i,s){if(An=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_s.current=e===null||e.memoizedState===null?Gy:Ky,e=n(r,i),Zr){s=0;do{if(Zr=!1,wi=0,25<=s)throw Error(S(301));s+=1,ie=te=null,t.updateQueue=null,_s.current=Yy,e=n(r,i)}while(Zr)}if(_s.current=Xs,t=te!==null&&te.next!==null,An=0,ie=te=Y=null,Qs=!1,t)throw Error(S(300));return e}function Au(){var e=wi!==0;return wi=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function Fe(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function _i(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=Fe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((An&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Y.lanes|=f,On|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Xe(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,On|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fa(e){var t=Fe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Xe(s,t.memoizedState)||(_e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ap(){}function lp(e,t){var n=Y,r=Fe(),i=t(),s=!Xe(r.memoizedState,i);if(s&&(r.memoizedState=i,_e=!0),r=r.queue,Ou(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Ei(9,cp.bind(null,n,r,i,t),void 0,null),se===null)throw Error(S(349));An&30||up(n,t,i)}return i}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,dp(t)&&hp(e)}function fp(e,t,n){return n(function(){dp(t)&&hp(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function hp(e){var t=_t(e,1);t!==null&&Ye(t,e,1,-1)}function af(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=Hy.bind(null,Y,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pp(){return Fe().memoizedState}function Es(e,t,n,r){var i=Je();Y.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=Fe();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&Pu(r,o.deps)){i.memoizedState=Ei(t,n,s,r);return}}Y.flags|=e,i.memoizedState=Ei(1|t,n,s,r)}function lf(e,t){return Es(8390656,8,e,t)}function Ou(e,t){return ko(2048,8,e,t)}function mp(e,t){return ko(4,2,e,t)}function gp(e,t){return ko(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,vp.bind(null,t,e),n)}function Ru(){}function wp(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ep(e,t,n){return An&21?(Xe(n,t)||(n=Ch(),Y.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Vy(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{U=n,ua.transition=r}}function Sp(){return Fe().memoizedState}function Wy(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))Ip(t,n);else if(n=ip(e,t,n,r),n!==null){var i=me();Ye(n,e,r,i),xp(n,t,r)}}function Hy(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Ip(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,o)){var l=t.interleaved;l===null?(i.next=i,ku(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ip(e,t,i,r),n!==null&&(i=me(),Ye(n,e,r,i),xp(n,t,r))}}function kp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ip(e,t){Zr=Qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uu(e,n)}}var Xs={readContext:Ue,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Gy={readContext:Ue,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:lf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Es(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wy.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:af,useDebugValue:Ru,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=af(!1),t=e[0];return e=Vy.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Je();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));An&30||up(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,lf(fp.bind(null,r,s,e),[e]),r.flags|=2048,Ei(9,cp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Je(),t=se.identifierPrefix;if(H){var n=dt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$y++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ky={readContext:Ue,useCallback:wp,useContext:Ue,useEffect:Ou,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:_p,useReducer:ca,useRef:pp,useState:function(){return ca(_i)},useDebugValue:Ru,useDeferredValue:function(e){var t=Fe();return Ep(t,te.memoizedState,e)},useTransition:function(){var e=ca(_i)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1},Yy={readContext:Ue,useCallback:wp,useContext:Ue,useEffect:Ou,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:_p,useReducer:fa,useRef:pp,useState:function(){return fa(_i)},useDebugValue:Ru,useDeferredValue:function(e){var t=Fe();return te===null?t.memoizedState=e:Ep(t,te.memoizedState,e)},useTransition:function(){var e=fa(_i)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=Yt(e),s=gt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Gt(e,s,i),t!==null&&(Ye(t,e,i,r),ws(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=Yt(e),s=gt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gt(e,s,i),t!==null&&(Ye(t,e,i,r),ws(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Yt(e),i=gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(Ye(t,e,r,n),ws(t,e,r))}};function uf(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,s):!0}function Cp(e,t,n){var r=!1,i=en,s=t.contextType;return typeof s=="object"&&s!==null?s=Ue(s):(i=Se(t)?Pn:he.current,r=t.contextTypes,s=(r=r!=null)?mr(e,i):en),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function cf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Iu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ue(s):(s=Se(t)?Pn:he.current,i.context=mr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ol(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Io.enqueueReplaceState(i,i.state,null),Ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var n="",r=t;do n+=Sv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qy=typeof WeakMap=="function"?WeakMap:Map;function Tp(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Js||(Js=!0,yl=r),ll(e,t)},n}function Pp(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ll(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ll(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=u0.bind(null,e,t,n),t.then(e,e))}function df(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Xy=Ct.ReactCurrentOwner,_e=!1;function pe(e,t,n,r){t.child=e===null?rp(t,null,n,r):vr(t,e.child,n,r)}function pf(e,t,n,r,i){n=n.render;var s=t.ref;return ar(t,i),r=Nu(e,t,n,r,s,i),n=Au(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(H&&n&&vu(t),t.flags|=1,pe(e,t,r,i),t.child)}function mf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!zu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Np(e,t,s,r,i)):(e=xs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Qt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Np(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(hi(s,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,Et(e,t,i)}return ul(e,t,n,r,i)}function Ap(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(er,Ie),Ie|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(er,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(er,Ie),Ie|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,z(er,Ie),Ie|=r;return pe(e,t,i,n),t.child}function Op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,n,r,i){var s=Se(n)?Pn:he.current;return s=mr(t,s),ar(t,i),n=Nu(e,t,n,r,s,i),r=Au(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(H&&r&&vu(t),t.flags|=1,pe(e,t,n,i),t.child)}function gf(e,t,n,r,i){if(Se(n)){var s=!0;$s(t)}else s=!1;if(ar(t,i),t.stateNode===null)Ss(e,t),Cp(t,n,r),al(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Se(n)?Pn:he.current,u=mr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cf(t,o,r,u),Rt=!1;var m=t.memoizedState;o.state=m,Ks(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Ee.current||Rt?(typeof f=="function"&&(ol(t,n,f,r),l=t.memoizedState),(a=Rt||uf(t,n,a,r,m,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,sp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ve(t.type,a),o.props=u,d=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Se(n)?Pn:he.current,l=mr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||m!==l)&&cf(t,o,r,l),Rt=!1,m=t.memoizedState,o.state=m,Ks(t,r,o,i);var w=t.memoizedState;a!==d||m!==w||Ee.current||Rt?(typeof v=="function"&&(ol(t,n,v,r),w=t.memoizedState),(u=Rt||uf(t,n,u,r,m,w,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return cl(e,t,n,r,s,i)}function cl(e,t,n,r,i,s){Op(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ef(t,n,!1),Et(e,t,s);r=t.stateNode,Xy.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vr(t,e.child,null,s),t.child=vr(t,null,a,s)):pe(e,t,a,s),t.memoizedState=r.state,i&&ef(t,n,!0),t.child}function Rp(e){var t=e.stateNode;t.pendingContext?Zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zc(e,t.context,!1),xu(e,t.containerInfo)}function vf(e,t,n,r,i){return gr(),wu(i),t.flags|=256,pe(e,t,n,r),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,t,n){var r=t.pendingProps,i=K.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(K,i&1),e===null)return il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=To(o,r,0,null),e=xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=dl(n),t.memoizedState=fl,e):bu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qy(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qt(a,s):(s=xn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?dl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=fl,r}return s=e.child,e=s.sibling,r=Qt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bu(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ls(e,t,n,r){return r!==null&&wu(r),vr(t,e.child,null,n),e=bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=da(Error(S(422))),ls(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),s=xn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&vr(t,e.child,null,o),t.child.memoizedState=dl(o),t.memoizedState=fl,s);if(!(t.mode&1))return ls(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=da(s,r,void 0),ls(e,t,o,r)}if(a=(o&e.childLanes)!==0,_e||a){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_t(e,i),Ye(r,e,i,-1))}return Fu(),r=da(Error(S(421))),ls(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=c0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,xe=Ht(i.nextSibling),Ce=t,H=!0,He=null,e!==null&&(Le[je++]=ft,Le[je++]=dt,Le[je++]=Nn,ft=e.id,dt=e.overflow,Nn=t),t=bu(t,r.children),t.flags|=4096,t)}function yf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sl(e.return,t,n)}function ha(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,n,t);else if(e.tag===19)yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ha(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ha(t,!0,n,null,s);break;case"together":ha(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ss(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jy(e,t,n){switch(t.tag){case 3:Rp(t),gr();break;case 5:op(t);break;case 1:Se(t.type)&&$s(t);break;case 4:xu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Hs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?bp(e,t,n):(z(K,K.current&1),e=Et(e,t,n),e!==null?e.sibling:null);z(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Ap(e,t,n)}return Et(e,t,n)}var jp,hl,Dp,Mp;jp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hl=function(){};Dp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Sn(st.current);var s=null;switch(n){case"input":i=ja(e,i),r=ja(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Ua(e,i),r=Ua(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zs)}za(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zy(e,t,n){var r=t.pendingProps;switch(yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Se(t.type)&&Bs(),ce(t),null;case 3:return r=t.stateNode,yr(),V(Ee),V(he),Tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(El(He),He=null))),hl(e,t),ce(t),null;case 5:Cu(t);var i=Sn(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Dp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Sn(st.current),os(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[tt]=t,r[gi]=s,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Vr.length;i++)$(Vr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Cc(r,s),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$("invalid",r);break;case"textarea":Pc(r,s),$("invalid",r)}za(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,a,e),i=["children",""+a]):oi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":qi(r),Tc(r,s,!0);break;case"textarea":qi(r),Nc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tt]=t,e[gi]=r,jp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ba(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vr.length;i++)$(Vr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Cc(e,r),i=ja(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Pc(e,r),i=Ua(e,r),$("invalid",e);break;default:i=r}za(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ph(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dh(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ai(e,l):typeof l=="number"&&ai(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$("scroll",e):l!=null&&ru(e,s,l,o))}switch(n){case"input":qi(e),Tc(e,r,!1);break;case"textarea":qi(e),Nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?rr(e,!!r.multiple,s,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Sn(yi.current),Sn(st.current),os(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(s=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:ss(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ss(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ce(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&xe!==null&&t.mode&1&&!(t.flags&128))tp(),gr(),t.flags|=98560,s=!1;else if(s=os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[tt]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),s=!1}else He!==null&&(El(He),He=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Fu())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return yr(),hl(e,t),e===null&&pi(t.stateNode.containerInfo),ce(t),null;case 10:return Su(t.type._context),ce(t),null;case 17:return Se(t.type)&&Bs(),ce(t),null;case 19:if(V(K),s=t.memoizedState,s===null)return ce(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ur(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ys(e),o!==null){for(t.flags|=128,Ur(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>_r&&(t.flags|=128,r=!0,Ur(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ys(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!H)return ce(t),null}else 2*J()-s.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Ur(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=K.current,z(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function e0(e,t){switch(yu(t),t.tag){case 1:return Se(t.type)&&Bs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),V(Ee),V(he),Tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cu(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return yr(),null;case 10:return Su(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var us=!1,de=!1,t0=typeof WeakSet=="function"?WeakSet:Set,x=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function pl(e,t,n){try{n()}catch(r){X(e,t,r)}}var wf=!1;function n0(e,t){if(qa=Ms,e=$h(),gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)m=d,d=v;for(;;){if(d===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++f===r&&(l=o),(v=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ja={focusedElem:e,selectionRange:n},Ms=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,E=w.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ve(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){X(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return w=wf,wf=!1,w}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&pl(t,n,s)}i=i.next}while(i!==r)}}function xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Up(e){var t=e.alternate;t!==null&&(e.alternate=null,Up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[gi],delete t[tl],delete t[Uy],delete t[Fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function _f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zs));else if(r!==4&&(e=e.child,e!==null))for(gl(e,t,n),e=e.sibling;e!==null;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}var oe=null,We=!1;function Pt(e,t,n){for(n=n.child;n!==null;)zp(e,t,n),n=n.sibling}function zp(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(vo,n)}catch{}switch(n.tag){case 5:de||Zn(n,t);case 6:var r=oe,i=We;oe=null,Pt(e,t,n),oe=r,We=i,oe!==null&&(We?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(We?(e=oe,n=n.stateNode,e.nodeType===8?oa(e.parentNode,n):e.nodeType===1&&oa(e,n),fi(e)):oa(oe,n.stateNode));break;case 4:r=oe,i=We,oe=n.stateNode.containerInfo,We=!0,Pt(e,t,n),oe=r,We=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pl(n,t,o),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!de&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,Pt(e,t,n),de=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t0),t.forEach(function(r){var i=f0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,We=!1;break e;case 3:oe=a.stateNode.containerInfo,We=!0;break e;case 4:oe=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(oe===null)throw Error(S(160));zp(s,o,i),oe=null,We=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),qe(e),r&4){try{ei(3,e,e.return),xo(3,e)}catch(y){X(e,e.return,y)}try{ei(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:$e(t,e),qe(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if($e(t,e),qe(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(y){X(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uh(i,s),Ba(a,o);var u=Ba(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?ph(i,d):f==="dangerouslySetInnerHTML"?dh(i,d):f==="children"?ai(i,d):ru(i,f,d,u)}switch(a){case"input":Da(i,s);break;case"textarea":ch(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?rr(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?rr(i,!!s.multiple,s.defaultValue,!0):rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[gi]=s}catch(y){X(e,e.return,y)}}break;case 6:if($e(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){X(e,e.return,y)}}break;case 3:if($e(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:$e(t,e),qe(e);break;case 13:$e(t,e),qe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=J())),r&4&&Ef(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||f,$e(t,e),de=u):$e(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(x=e,f=e.child;f!==null;){for(d=x=f;x!==null;){switch(m=x,v=m.child,m.tag){case 0:case 11:case 14:case 15:ei(4,m,m.return);break;case 1:Zn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:Zn(m,m.return);break;case 22:if(m.memoizedState!==null){kf(d);continue}}v!==null?(v.return=m,x=v):kf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hh("display",o))}catch(y){X(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){X(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$e(t,e),qe(e),r&4&&Ef(e);break;case 21:break;default:$e(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var s=_f(e);vl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_f(e);gl(e,a,o);break;default:throw Error(S(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,n){x=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||us;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||de;a=us;var u=de;if(us=o,(de=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?If(i):l!==null?(l.return=o,x=l):If(i);for(;s!==null;)x=s,$p(s),s=s.sibling;x=i,us=a,de=u}Sf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Sf(e)}}function Sf(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&of(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}of(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&fi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&ml(t)}catch(m){X(t,t.return,m)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function kf(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function If(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xo(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var s=t.return;try{ml(t)}catch(l){X(t,s,l)}break;case 5:var o=t.return;try{ml(t)}catch(l){X(t,o,l)}}}catch(l){X(t,t.return,l)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var i0=Math.ceil,qs=Ct.ReactCurrentDispatcher,Lu=Ct.ReactCurrentOwner,Me=Ct.ReactCurrentBatchConfig,M=0,se=null,Z=null,ae=0,Ie=0,er=on(0),ne=0,Si=null,On=0,Co=0,ju=0,ti=null,we=null,Du=0,_r=1/0,lt=null,Js=!1,yl=null,Kt=null,cs=!1,Ft=null,Zs=0,ni=0,wl=null,ks=-1,Is=0;function me(){return M&6?J():ks!==-1?ks:ks=J()}function Yt(e){return e.mode&1?M&2&&ae!==0?ae&-ae:By.transition!==null?(Is===0&&(Is=Ch()),Is):(e=U,e!==0||(e=window.event,e=e===void 0?16:bh(e.type)),e):1}function Ye(e,t,n,r){if(50<ni)throw ni=0,wl=null,Error(S(185));Ri(e,n,r),(!(M&2)||e!==se)&&(e===se&&(!(M&2)&&(Co|=n),ne===4&&Lt(e,ae)),ke(e,r),n===1&&M===0&&!(t.mode&1)&&(_r=J()+500,So&&an()))}function ke(e,t){var n=e.callbackNode;Bv(e,t);var r=Ds(e,e===se?ae:0);if(r===0)n!==null&&Rc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rc(n),t===1)e.tag===0?zy(xf.bind(null,e)):Jh(xf.bind(null,e)),Dy(function(){!(M&6)&&an()}),n=null;else{switch(Th(r)){case 1:n=lu;break;case 4:n=Ih;break;case 16:n=js;break;case 536870912:n=xh;break;default:n=js}n=Xp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(ks=-1,Is=0,M&6)throw Error(S(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=Ds(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var i=M;M|=2;var s=Hp();(se!==e||ae!==t)&&(lt=null,_r=J()+500,In(e,t));do try{a0();break}catch(a){Wp(e,a)}while(!0);Eu(),qs.current=s,M=i,Z!==null?t=0:(se=null,ae=0,t=ne)}if(t!==0){if(t===2&&(i=Ga(e),i!==0&&(r=i,t=_l(e,i))),t===1)throw n=Si,In(e,0),Lt(e,r),ke(e,J()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!s0(i)&&(t=eo(e,r),t===2&&(s=Ga(e),s!==0&&(r=s,t=_l(e,s))),t===1))throw n=Si,In(e,0),Lt(e,r),ke(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:vn(e,we,lt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=Du+500-J(),10<t)){if(Ds(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=el(vn.bind(null,e,we,lt),t);break}vn(e,we,lt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i0(r/1960))-r,10<r){e.timeoutHandle=el(vn.bind(null,e,we,lt),r);break}vn(e,we,lt);break;case 5:vn(e,we,lt);break;default:throw Error(S(329))}}}return ke(e,J()),e.callbackNode===n?Vp.bind(null,e):null}function _l(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=eo(e,t),e!==2&&(t=we,we=n,t!==null&&El(t)),e}function El(e){we===null?we=e:we.push.apply(we,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xe(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~ju,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function xf(e){if(M&6)throw Error(S(327));lr();var t=Ds(e,0);if(!(t&1))return ke(e,J()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=Ga(e);r!==0&&(t=r,n=_l(e,r))}if(n===1)throw n=Si,In(e,0),Lt(e,t),ke(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,we,lt),ke(e,J()),null}function Mu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(_r=J()+500,So&&an())}}function Rn(e){Ft!==null&&Ft.tag===0&&!(M&6)&&lr();var t=M;M|=1;var n=Me.transition,r=U;try{if(Me.transition=null,U=1,e)return e()}finally{U=r,Me.transition=n,M=t,!(M&6)&&an()}}function Uu(){Ie=er.current,V(er)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jy(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bs();break;case 3:yr(),V(Ee),V(he),Tu();break;case 5:Cu(r);break;case 4:yr();break;case 13:V(K);break;case 19:V(K);break;case 10:Su(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(se=e,Z=e=Qt(e.current,null),ae=Ie=t,ne=0,Si=null,ju=Co=On=0,we=ti=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}En=null}return e}function Wp(e,t){do{var n=Z;try{if(Eu(),_s.current=Xs,Qs){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qs=!1}if(An=0,ie=te=Y=null,Zr=!1,wi=0,Lu.current=null,n===null||n.return===null){ne=1,Si=t,Z=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=df(o);if(v!==null){v.flags&=-257,hf(v,o,a,s,t),v.mode&1&&ff(s,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){ff(s,u,t),Fu();break e}l=Error(S(426))}}else if(H&&a.mode&1){var E=df(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),hf(E,o,a,s,t),wu(wr(l,a));break e}}s=l=wr(l,a),ne!==4&&(ne=2),ti===null?ti=[s]:ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=Tp(s,l,t);sf(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kt===null||!Kt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=Pp(s,a,t);sf(s,_);break e}}s=s.return}while(s!==null)}Kp(n)}catch(k){t=k,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Hp(){var e=qs.current;return qs.current=Xs,e===null?Xs:e}function Fu(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(On&268435455)&&!(Co&268435455)||Lt(se,ae)}function eo(e,t){var n=M;M|=2;var r=Hp();(se!==e||ae!==t)&&(lt=null,In(e,t));do try{o0();break}catch(i){Wp(e,i)}while(!0);if(Eu(),M=n,qs.current=r,Z!==null)throw Error(S(261));return se=null,ae=0,ne}function o0(){for(;Z!==null;)Gp(Z)}function a0(){for(;Z!==null&&!Rv();)Gp(Z)}function Gp(e){var t=Qp(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Kp(e):Z=t,Lu.current=null}function Kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e0(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=Zy(n,t,Ie),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function vn(e,t,n){var r=U,i=Me.transition;try{Me.transition=null,U=1,l0(e,t,n,r)}finally{Me.transition=i,U=r}return null}function l0(e,t,n,r){do lr();while(Ft!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if($v(e,s),e===se&&(Z=se=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,Xp(js,function(){return lr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Me.transition,Me.transition=null;var o=U;U=1;var a=M;M|=4,Lu.current=null,n0(e,n),Bp(n,e),Py(Ja),Ms=!!qa,Ja=qa=null,e.current=n,r0(n),bv(),M=a,U=o,Me.transition=s}else e.current=n;if(cs&&(cs=!1,Ft=e,Zs=i),s=e.pendingLanes,s===0&&(Kt=null),Dv(n.stateNode),ke(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Js)throw Js=!1,e=yl,yl=null,e;return Zs&1&&e.tag!==0&&lr(),s=e.pendingLanes,s&1?e===wl?ni++:(ni=0,wl=e):ni=0,an(),null}function lr(){if(Ft!==null){var e=Th(Zs),t=Me.transition,n=U;try{if(Me.transition=null,U=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Zs=0,M&6)throw Error(S(331));var i=M;for(M|=4,x=e.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var f=x;switch(f.tag){case 0:case 11:case 15:ei(8,f,s)}var d=f.child;if(d!==null)d.return=f,x=d;else for(;x!==null;){f=x;var m=f.sibling,v=f.return;if(Up(f),f===u){x=null;break}if(m!==null){m.return=v,x=m;break}x=v}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ei(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var h=e.current;for(x=h;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=h;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xo(9,a)}}catch(k){X(a,a.return,k)}if(a===o){x=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,x=_;break e}x=a.return}}if(M=i,an(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(vo,e)}catch{}r=!0}return r}finally{U=n,Me.transition=t}}return!1}function Cf(e,t,n){t=wr(n,t),t=Tp(e,t,1),e=Gt(e,t,1),t=me(),e!==null&&(Ri(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)Cf(e,e,n);else for(;t!==null;){if(t.tag===3){Cf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=wr(n,e),e=Pp(t,e,1),t=Gt(t,e,1),e=me(),t!==null&&(Ri(t,1,e),ke(t,e));break}}t=t.return}}function u0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>J()-Du?In(e,0):ju|=n),ke(e,t)}function Yp(e,t){t===0&&(e.mode&1?(t=es,es<<=1,!(es&130023424)&&(es=4194304)):t=1);var n=me();e=_t(e,t),e!==null&&(Ri(e,t,n),ke(e,n))}function c0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function f0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Yp(e,n)}var Qp;Qp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Jy(e,t,n);_e=!!(e.flags&131072)}else _e=!1,H&&t.flags&1048576&&Zh(t,Ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ss(e,t),e=t.pendingProps;var i=mr(t,he.current);ar(t,n),i=Nu(null,t,r,e,i,n);var s=Au();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(s=!0,$s(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Iu(t),i.updater=Io,t.stateNode=i,i._reactInternals=t,al(t,r,e,n),t=cl(null,t,r,!0,s,n)):(t.tag=0,H&&s&&vu(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ss(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=h0(r),e=Ve(r,e),i){case 0:t=ul(null,t,r,e,n);break e;case 1:t=gf(null,t,r,e,n);break e;case 11:t=pf(null,t,r,e,n);break e;case 14:t=mf(null,t,r,Ve(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),ul(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),gf(e,t,r,i,n);case 3:e:{if(Rp(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,sp(e,t),Ks(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=wr(Error(S(423)),t),t=vf(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(S(424)),t),t=vf(e,t,r,n,i);break e}else for(xe=Ht(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,He=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){t=Et(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return op(t),e===null&&il(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Za(r,i)?o=null:s!==null&&Za(r,s)&&(t.flags|=32),Op(e,t),pe(e,t,o,n),t.child;case 6:return e===null&&il(t),null;case 13:return bp(e,t,n);case 4:return xu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),pf(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,z(Hs,r._currentValue),r._currentValue=o,s!==null)if(Xe(s.value,o)){if(s.children===i.children&&!Ee.current){t=Et(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=gt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=Ue(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),mf(e,t,r,i,n);case 15:return Np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Ss(e,t),t.tag=1,Se(r)?(e=!0,$s(t)):e=!1,ar(t,n),Cp(t,r,i),al(t,r,i,n),cl(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Ap(e,t,n)}throw Error(S(156,t.tag))};function Xp(e,t){return kh(e,t)}function d0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new d0(e,t,n,r)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h0(e){if(typeof e=="function")return zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===su)return 11;if(e===ou)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")zu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wn:return xn(n.children,i,s,t);case iu:o=8,i|=8;break;case Oa:return e=De(12,n,t,i|2),e.elementType=Oa,e.lanes=s,e;case Ra:return e=De(13,n,t,i),e.elementType=Ra,e.lanes=s,e;case ba:return e=De(19,n,t,i),e.elementType=ba,e.lanes=s,e;case oh:return To(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ih:o=10;break e;case sh:o=9;break e;case su:o=11;break e;case ou:o=14;break e;case Ot:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xn(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=De(22,e,r,t),e.elementType=oh,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function ma(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,i,s,o,a,l){return e=new p0(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=De(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(s),e}function m0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qp(e){if(!e)return en;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Se(n))return qh(e,n,t)}return t}function Jp(e,t,n,r,i,s,o,a,l){return e=Bu(n,r,!0,e,i,s,o,a,l),e.context=qp(null),n=e.current,r=me(),i=Yt(n),s=gt(r,i),s.callback=t??null,Gt(n,s,i),e.current.lanes=i,Ri(e,i,r),ke(e,r),e}function Po(e,t,n,r){var i=t.current,s=me(),o=Yt(i);return n=qp(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,o),e!==null&&(Ye(e,i,o,s),ws(e,i,o)),o}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){Tf(e,t),(e=e.alternate)&&Tf(e,t)}function g0(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}No.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Po(e,t,null,null)};No.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){Po(null,e,null,null)}),t[wt]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ah();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Rh(e)}};function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function v0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=to(o);s.call(u)}}var o=Jp(t,r,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=o,e[wt]=o.current,pi(e.nodeType===8?e.parentNode:e),Rn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=to(l);a.call(u)}}var l=Bu(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=l,e[wt]=l.current,pi(e.nodeType===8?e.parentNode:e),Rn(function(){Po(t,l,n,r)}),l}function Oo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=to(o);a.call(l)}}Po(t,o,e,i)}else o=v0(n,t,e,i,r);return to(o)}Ph=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(uu(t,n|1),ke(t,J()),!(M&6)&&(_r=J()+500,an()))}break;case 13:Rn(function(){var r=_t(e,1);if(r!==null){var i=me();Ye(r,e,1,i)}}),$u(e,1)}};cu=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=me();Ye(t,e,134217728,n)}$u(e,134217728)}};Nh=function(e){if(e.tag===13){var t=Yt(e),n=_t(e,t);if(n!==null){var r=me();Ye(n,e,t,r)}$u(e,t)}};Ah=function(){return U};Oh=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Va=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(S(90));lh(r),Da(r,i)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};vh=Mu;yh=Rn;var y0={usingClientEntryPoint:!1,Events:[Li,Yn,Eo,mh,gh,Mu]},Fr={findFiberByHostInstance:_n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eh(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||g0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{vo=fs.inject(w0),it=fs}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(t))throw Error(S(200));return m0(e,t,null,n)};Ae.createRoot=function(e,t){if(!Wu(e))throw Error(S(299));var n=!1,r="",i=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bu(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,pi(e.nodeType===8?e.parentNode:e),new Vu(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Eh(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Rn(e)};Ae.hydrate=function(e,t,n){if(!Ao(t))throw Error(S(200));return Oo(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Wu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,i,!1,s,o),e[wt]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};Ae.render=function(e,t,n){if(!Ao(t))throw Error(S(200));return Oo(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(S(40));return e._reactRootContainer?(Rn(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ae.unstable_batchedUpdates=Mu;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ao(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Oo(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),eh.exports=Ae;var _0=eh.exports,tm,Nf=_0;tm=Nf.createRoot,Nf.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Af="popstate";function E0(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Sl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:no(i)}return k0(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S0(){return Math.random().toString(36).substr(2,8)}function Of(e,t){return{usr:e.state,key:e.key,idx:t}}function Sl(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tr(t):t,{state:n,key:t&&t.key||r||S0()})}function no(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zt.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(ki({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=zt.Pop;let E=f(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function m(E,p){a=zt.Push;let h=Sl(y.location,E,p);u=f()+1;let g=Of(h,u),_=y.createHref(h);try{o.pushState(g,"",_)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function v(E,p){a=zt.Replace;let h=Sl(y.location,E,p);u=f();let g=Of(h,u),_=y.createHref(h);o.replaceState(g,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function w(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:no(E);return h=h.replace(/ $/,"%20"),ee(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Af,d),l=E,()=>{i.removeEventListener(Af,d),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let p=w(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:v,go(E){return o.go(E)}};return y}var Rf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rf||(Rf={}));function I0(e,t,n){return n===void 0&&(n="/"),x0(e,t,n,!1)}function x0(e,t,n,r){let i=typeof t=="string"?Tr(t):t,s=Hu(i.pathname||"/",n);if(s==null)return null;let o=rm(e);C0(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=M0(s);a=j0(o[l],u,r)}return a}function rm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xt([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rm(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:b0(u,s.index),routesMeta:f})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of im(s.path))i(s,o,l)}),t}function im(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=im(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function C0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:L0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T0=/^:[\w-]+$/,P0=3,N0=2,A0=1,O0=10,R0=-2,bf=e=>e==="*";function b0(e,t){let n=e.split("/"),r=n.length;return n.some(bf)&&(r+=R0),t&&(r+=N0),n.filter(i=>!bf(i)).reduce((i,s)=>i+(T0.test(s)?P0:s===""?A0:O0),r)}function L0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function j0(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",d=Lf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Lf({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Xt([s,d.pathname]),pathnameBase:B0(Xt([s,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(s=Xt([s,d.pathnameBase]))}return o}function Lf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=D0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:v}=f;if(m==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[d];return v&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function D0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function M0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function U0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tr(e):e;return{pathname:n?n.startsWith("/")?n:F0(n,t):t,search:$0(r),hash:V0(i)}}function F0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ga(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sm(e,t){let n=z0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function om(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Tr(e):(i=ki({},e),ee(!i.pathname||!i.pathname.includes("?"),ga("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),ga("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),ga("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?t[d]:"/"}let l=U0(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),B0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function W0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const am=["post","put","patch","delete"];new Set(am);const H0=["get",...am];new Set(H0);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}const Gu=I.createContext(null),G0=I.createContext(null),Fn=I.createContext(null),Ro=I.createContext(null),zn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),lm=I.createContext(null);function K0(e,t){let{relative:n}=t===void 0?{}:t;Di()||ee(!1);let{basename:r,navigator:i}=I.useContext(Fn),{hash:s,pathname:o,search:a}=cm(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Di(){return I.useContext(Ro)!=null}function bo(){return Di()||ee(!1),I.useContext(Ro).location}function um(e){I.useContext(Fn).static||I.useLayoutEffect(e)}function Ku(){let{isDataRoute:e}=I.useContext(zn);return e?o1():Y0()}function Y0(){Di()||ee(!1);let e=I.useContext(Gu),{basename:t,future:n,navigator:r}=I.useContext(Fn),{matches:i}=I.useContext(zn),{pathname:s}=bo(),o=JSON.stringify(sm(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return um(()=>{a.current=!0}),I.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=om(u,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Xt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,s,e])}function cm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=I.useContext(Fn),{matches:i}=I.useContext(zn),{pathname:s}=bo(),o=JSON.stringify(sm(i,r.v7_relativeSplatPath));return I.useMemo(()=>om(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Q0(e,t){return X0(e,t)}function X0(e,t,n,r){Di()||ee(!1);let{navigator:i}=I.useContext(Fn),{matches:s}=I.useContext(zn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=bo(),f;if(t){var d;let E=typeof t=="string"?Tr(t):t;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||ee(!1),f=E}else f=u;let m=f.pathname||"/",v=m;if(l!=="/"){let E=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=I0(e,{pathname:v}),y=t1(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Xt([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Xt([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return t&&y?I.createElement(Ro.Provider,{value:{location:Ii({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:zt.Pop}},y):y}function q0(){let e=s1(),t=W0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const J0=I.createElement(q0,null);class Z0 extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(zn.Provider,{value:this.props.routeContext},I.createElement(lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e1(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Gu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(zn.Provider,{value:t},r)}function t1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||ee(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:v}=n,w=d.route.loader&&m[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let v,w=!1,y=null,E=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||J0,l&&(u<0&&m===0?(w=!0,E=null):u===m&&(w=!0,E=d.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,m+1)),h=()=>{let g;return v?g=y:w?g=E:d.route.Component?g=I.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,I.createElement(e1,{match:d,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?I.createElement(Z0,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fm||{}),ro=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ro||{});function n1(e){let t=I.useContext(Gu);return t||ee(!1),t}function r1(e){let t=I.useContext(G0);return t||ee(!1),t}function i1(e){let t=I.useContext(zn);return t||ee(!1),t}function dm(e){let t=i1(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function s1(){var e;let t=I.useContext(lm),n=r1(ro.UseRouteError),r=dm(ro.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function o1(){let{router:e}=n1(fm.UseNavigateStable),t=dm(ro.UseNavigateStable),n=I.useRef(!1);return um(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ii({fromRouteId:t},s)))},[e,t])}const jf={};function a1(e,t){jf[t]||(jf[t]=!0,console.warn(t))}const Df=(e,t,n)=>a1(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function l1(e,t){e!=null&&e.v7_startTransition||Df("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&Df("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function be(e){ee(!1)}function u1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:s,static:o=!1,future:a}=e;Di()&&ee(!1);let l=t.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:Ii({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Tr(r));let{pathname:f="/",search:d="",hash:m="",state:v=null,key:w="default"}=r,y=I.useMemo(()=>{let E=Hu(f,l);return E==null?null:{location:{pathname:E,search:d,hash:m,state:v,key:w},navigationType:i}},[l,f,d,m,v,w,i]);return y==null?null:I.createElement(Fn.Provider,{value:u},I.createElement(Ro.Provider,{children:n,value:y}))}function c1(e){let{children:t,location:n}=e;return Q0(kl(t),n)}new Promise(()=>{});function kl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let s=[...t,i];if(r.type===I.Fragment){n.push.apply(n,kl(r.props.children,s));return}r.type!==be&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(this,arguments)}function f1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function d1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h1(e,t){return e.button===0&&(!t||t==="_self")&&!d1(e)}const p1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],m1="6";try{window.__reactRouterVersion=m1}catch{}const g1="startTransition",Mf=uv[g1];function v1(e){let{basename:t,children:n,future:r,window:i}=e,s=I.useRef();s.current==null&&(s.current=E0({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=I.useCallback(d=>{u&&Mf?Mf(()=>l(d)):l(d)},[l,u]);return I.useLayoutEffect(()=>o.listen(f),[o,f]),I.useEffect(()=>l1(r),[r]),I.createElement(u1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const y1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f,viewTransition:d}=t,m=f1(t,p1),{basename:v}=I.useContext(Fn),w,y=!1;if(typeof u=="string"&&w1.test(u)&&(w=u,y1))try{let g=new URL(window.location.href),_=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=Hu(_.pathname,v);_.origin===g.origin&&k!=null?u=k+_.search+_.hash:y=!0}catch{}let E=K0(u,{relative:i}),p=_1(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||p(g)}return I.createElement("a",Il({},m,{href:w||E,onClick:y||s?r:h,ref:n,target:l}))});var Uf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uf||(Uf={}));var Ff;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ff||(Ff={}));function _1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=Ku(),u=bo(),f=cm(e,{relative:o});return I.useCallback(d=>{if(h1(d,n)){d.preventDefault();let m=r!==void 0?r:no(u)===no(f);l(e,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,f,r,i,n,e,s,o,a])}const $n="/Tickify_Project/assets/pexels-foteros-352505-Dut25Yr5.jpg",zf=()=>{};let Yu={},hm={},pm=null,mm={mark:zf,measure:zf};try{typeof window<"u"&&(Yu=window),typeof document<"u"&&(hm=document),typeof MutationObserver<"u"&&(pm=MutationObserver),typeof performance<"u"&&(mm=performance)}catch{}const{userAgent:Bf=""}=Yu.navigator||{},tn=Yu,W=hm,$f=pm,ds=mm;tn.document;const Tt=!!W.documentElement&&!!W.head&&typeof W.addEventListener=="function"&&typeof W.createElement=="function",gm=~Bf.indexOf("MSIE")||~Bf.indexOf("Trident/");var G="classic",vm="duotone",Te="sharp",Pe="sharp-duotone",E1=[G,vm,Te,Pe],S1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Vf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},k1=["kit"],I1=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,x1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,C1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},P1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},N1={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},A1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},O1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ym={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},R1=["solid","regular","light","thin","duotone","brands"],wm=[1,2,3,4,5,6,7,8,9,10],b1=wm.concat([11,12,13,14,15,16,17,18,19,20]),Wr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},L1=[...Object.keys(N1),...R1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wr.GROUP,Wr.SWAP_OPACITY,Wr.PRIMARY,Wr.SECONDARY].concat(wm.map(e=>"".concat(e,"x"))).concat(b1.map(e=>"w-".concat(e))),j1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},D1={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},M1={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Wf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const St="___FONT_AWESOME___",xl=16,_m="fa",Em="svg-inline--fa",bn="data-fa-i2svg",Cl="data-fa-pseudo-element",U1="data-fa-pseudo-element-pending",Qu="data-prefix",Xu="data-icon",Hf="fontawesome-i2svg",F1="async",z1=["HTML","HEAD","STYLE","SCRIPT"],Sm=(()=>{try{return!0}catch{return!1}})(),km=[G,Te,Pe];function Mi(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[G]}})}const Im={...ym};Im[G]={...ym[G],...Vf.kit,...Vf["kit-duotone"]};const Cn=Mi(Im),Tl={...O1};Tl[G]={...Tl[G],...Wf.kit,...Wf["kit-duotone"]};const xi=Mi(Tl),Pl={...A1};Pl[G]={...Pl[G],...M1.kit};const Tn=Mi(Pl),Nl={...P1};Nl[G]={...Nl[G],...D1.kit};const B1=Mi(Nl),$1=I1,xm="fa-layers-text",V1=x1,W1={...S1};Mi(W1);const H1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],va=Wr,Er=new Set;Object.keys(xi[G]).map(Er.add.bind(Er));Object.keys(xi[Te]).map(Er.add.bind(Er));Object.keys(xi[Pe]).map(Er.add.bind(Er));const G1=[...k1,...L1],ri=tn.FontAwesomeConfig||{};function K1(e){var t=W.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Y1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}W&&typeof W.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=Y1(K1(n));i!=null&&(ri[r]=i)});const Cm={styleDefault:"solid",familyDefault:"classic",cssPrefix:_m,replacementClass:Em,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ri.familyPrefix&&(ri.cssPrefix=ri.familyPrefix);const Sr={...Cm,...ri};Sr.autoReplaceSvg||(Sr.observeMutations=!1);const N={};Object.keys(Cm).forEach(e=>{Object.defineProperty(N,e,{enumerable:!0,set:function(t){Sr[e]=t,ii.forEach(n=>n(N))},get:function(){return Sr[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){Sr.cssPrefix=e,ii.forEach(t=>t(N))},get:function(){return Sr.cssPrefix}});tn.FontAwesomeConfig=N;const ii=[];function Q1(e){return ii.push(e),()=>{ii.splice(ii.indexOf(e),1)}}const Nt=xl,nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function X1(e){if(!e||!Tt)return;const t=W.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=W.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return W.head.insertBefore(t,r),e}const q1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ci(){let e=12,t="";for(;e-- >0;)t+=q1[Math.random()*62|0];return t}function Pr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qu(e){return e.classList?Pr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Tm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J1(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Tm(e[n]),'" '),"").trim()}function Lo(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ju(e){return e.size!==nt.size||e.x!==nt.x||e.y!==nt.y||e.rotate!==nt.rotate||e.flipX||e.flipY}function Z1(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function ew(e){let{transform:t,width:n=xl,height:r=xl,startCentered:i=!1}=e,s="";return i&&gm?s+="translate(".concat(t.x/Nt-n/2,"em, ").concat(t.y/Nt-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(t.x/Nt,"em), calc(-50% + ").concat(t.y/Nt,"em)) "):s+="translate(".concat(t.x/Nt,"em, ").concat(t.y/Nt,"em) "),s+="scale(".concat(t.size/Nt*(t.flipX?-1:1),", ").concat(t.size/Nt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var tw=`:root, :host {
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
}`;function Pm(){const e=_m,t=Em,n=N.cssPrefix,r=N.replacementClass;let i=tw;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Gf=!1;function ya(){N.autoAddCss&&!Gf&&(X1(Pm()),Gf=!0)}var nw={mixout(){return{dom:{css:Pm,insertCss:ya}}},hooks(){return{beforeDOMElementCreation(){ya()},beforeI2svg(){ya()}}}};const kt=tn||{};kt[St]||(kt[St]={});kt[St].styles||(kt[St].styles={});kt[St].hooks||(kt[St].hooks={});kt[St].shims||(kt[St].shims=[]);var rt=kt[St];const Nm=[],Am=function(){W.removeEventListener("DOMContentLoaded",Am),io=1,Nm.map(e=>e())};let io=!1;Tt&&(io=(W.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(W.readyState),io||W.addEventListener("DOMContentLoaded",Am));function rw(e){Tt&&(io?setTimeout(e,0):Nm.push(e))}function Ui(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Tm(e):"<".concat(t," ").concat(J1(n),">").concat(r.map(Ui).join(""),"</").concat(t,">")}function Kf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wa=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=n,l,u,f;for(r===void 0?(l=1,f=t[s[0]]):(l=0,f=r);l<o;l++)u=s[l],f=a(f,t[u],u,t);return f};function iw(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Al(e){const t=iw(e);return t.length===1?t[0].toString(16):null}function sw(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Yf(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ol(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Yf(t);typeof rt.hooks.addPack=="function"&&!r?rt.hooks.addPack(e,Yf(t)):rt.styles[e]={...rt.styles[e]||{},...i},e==="fas"&&Ol("fa",t)}const{styles:wn,shims:ow}=rt,aw={[G]:Object.values(Tn[G]),[Te]:Object.values(Tn[Te]),[Pe]:Object.values(Tn[Pe])};let Zu=null,Om={},Rm={},bm={},Lm={},jm={};const lw={[G]:Object.keys(Cn[G]),[Te]:Object.keys(Cn[Te]),[Pe]:Object.keys(Cn[Pe])};function uw(e){return~G1.indexOf(e)}function cw(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!uw(i)?i:null}const Dm=()=>{const e=r=>wa(wn,(i,s,o)=>(i[o]=wa(s,r,{}),i),{});Om=e((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Rm=e((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),jm=e((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const t="far"in wn||N.autoFetchSvg,n=wa(ow,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});bm=n.names,Lm=n.unicodes,Zu=jo(N.styleDefault,{family:N.familyDefault})};Q1(e=>{Zu=jo(e.styleDefault,{family:N.familyDefault})});Dm();function ec(e,t){return(Om[e]||{})[t]}function fw(e,t){return(Rm[e]||{})[t]}function Bt(e,t){return(jm[e]||{})[t]}function Mm(e){return bm[e]||{prefix:null,iconName:null}}function dw(e){const t=Lm[e],n=ec("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nn(){return Zu}const tc=()=>({prefix:null,iconName:null,rest:[]});function jo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=G}=t,r=Cn[n][e],i=xi[n][e]||xi[n][r],s=e in rt.styles?e:null;return i||s||null}const hw={[G]:Object.keys(Tn[G]),[Te]:Object.keys(Tn[Te]),[Pe]:Object.keys(Tn[Pe])};function Do(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[G]:"".concat(N.cssPrefix,"-").concat(G),[Te]:"".concat(N.cssPrefix,"-").concat(Te),[Pe]:"".concat(N.cssPrefix,"-").concat(Pe)};let i=null,s=G;const o=E1.filter(l=>l!==vm);o.forEach(l=>{(e.includes(r[l])||e.some(u=>hw[l].includes(u)))&&(s=l)});const a=e.reduce((l,u)=>{const f=cw(N.cssPrefix,u);if(wn[u]?(u=aw[s].includes(u)?B1[s][u]:u,i=u,l.prefix=u):lw[s].indexOf(u)>-1?(i=u,l.prefix=jo(u,{family:s})):f?l.iconName=f:u!==N.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=i==="fa"?Mm(l.iconName):{},m=Bt(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!wn.far&&wn.fas&&!N.autoFetchSvg&&(l.prefix="fas")}return l},tc());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Te&&(wn.fass||N.autoFetchSvg)&&(a.prefix="fass",a.iconName=Bt(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Pe&&(wn.fasds||N.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Bt(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=nn()||"fas"),a}class pw{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Ol(s,i[s]);const o=Tn[G][s];o&&Ol(o,i[s]),Dm()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];t[s]||(t[s]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[s][u]=a)}),t[s][o]=a}),t}}let Qf=[],tr={};const ur={},mw=Object.keys(ur);function gw(e,t){let{mixoutsTo:n}=t;return Qf=e,tr={},Object.keys(ur).forEach(r=>{mw.indexOf(r)===-1&&delete ur[r]}),Qf.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{tr[o]||(tr[o]=[]),tr[o].push(s[o])})}r.provides&&r.provides(ur)}),n}function Rl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(tr[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function Ln(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(tr[e]||[]).forEach(s=>{s.apply(null,n)})}function rn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ur[e]?ur[e].apply(null,t):void 0}function bl(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||nn();if(t)return t=Bt(n,t)||t,Kf(Um.definitions,n,t)||Kf(rt.styles,n,t)}const Um=new pw,vw=()=>{N.autoReplaceSvg=!1,N.observeMutations=!1,Ln("noAuto")},yw={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(Ln("beforeI2svg",e),rn("pseudoElements2svg",e),rn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,rw(()=>{_w({autoReplaceSvgRoot:t}),Ln("watch",e)})}},ww={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Bt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=jo(e[0]);return{prefix:n,iconName:Bt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(N.cssPrefix,"-"))>-1||e.match($1))){const t=Do(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||nn(),iconName:Bt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=nn();return{prefix:t,iconName:Bt(t,e)||e}}}},Re={noAuto:vw,config:N,dom:yw,parse:ww,library:Um,findIconDefinition:bl,toHtml:Ui},_w=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=W}=e;(Object.keys(rt.styles).length>0||N.autoFetchSvg)&&Tt&&N.autoReplaceSvg&&Re.dom.i2svg({node:t})};function Mo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ui(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Tt)return;const n=W.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ew(e){let{children:t,main:n,mask:r,attributes:i,styles:s,transform:o}=e;if(Ju(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=Lo({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Sw(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function nc(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:u,extra:f,watchable:d=!1}=e,{width:m,height:v}=n.found?n:t,w=r==="fak",y=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(k=>f.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(f.classes).join(" ");let E={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)}};const p=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};d&&(E.attributes[bn]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ci())},children:[a]}),delete E.attributes.title);const h={...E,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:s,symbol:o,styles:{...p,...f.styles}},{children:g,attributes:_}=n.found&&t.found?rn("generateAbstractMask",h)||{children:[],attributes:{}}:rn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=g,h.attributes=_,o?Sw(h):Ew(h)}function Xf(e){const{content:t,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=e,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[bn]="");const u={...o.styles};Ju(i)&&(u.transform=ew({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=Lo(u);f.length>0&&(l.style=f);const d=[];return d.push({tag:"span",attributes:l,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function kw(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Lo(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_a}=rt;function Ll(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(va.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(va.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(va.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const Iw={found:!1,width:512,height:512};function xw(e,t){!Sm&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jl(e,t){let n=t;return t==="fa"&&N.styleDefault!==null&&(t=nn()),new Promise((r,i)=>{if(n==="fa"){const s=Mm(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&_a[t]&&_a[t][e]){const s=_a[t][e];return r(Ll(s))}xw(e,t),r({...Iw,icon:N.showMissingIcons&&e?rn("missingIconAbstract")||{}:{}})})}const qf=()=>{},Dl=N.measurePerformance&&ds&&ds.mark&&ds.measure?ds:{mark:qf,measure:qf},Hr='FA "6.6.0"',Cw=e=>(Dl.mark("".concat(Hr," ").concat(e," begins")),()=>Fm(e)),Fm=e=>{Dl.mark("".concat(Hr," ").concat(e," ends")),Dl.measure("".concat(Hr," ").concat(e),"".concat(Hr," ").concat(e," begins"),"".concat(Hr," ").concat(e," ends"))};var rc={begin:Cw,end:Fm};const Cs=()=>{};function Jf(e){return typeof(e.getAttribute?e.getAttribute(bn):null)=="string"}function Tw(e){const t=e.getAttribute?e.getAttribute(Qu):null,n=e.getAttribute?e.getAttribute(Xu):null;return t&&n}function Pw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Nw(){return N.autoReplaceSvg===!0?Ts.replace:Ts[N.autoReplaceSvg]||Ts.replace}function Aw(e){return W.createElementNS("http://www.w3.org/2000/svg",e)}function Ow(e){return W.createElement(e)}function zm(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Aw:Ow}=t;if(typeof e=="string")return W.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(zm(s,{ceFn:n}))}),r}function Rw(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ts={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(zm(n),t)}),t.getAttribute(bn)===null&&N.keepOriginalSource){let n=W.createComment(Rw(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~qu(t).indexOf(N.replacementClass))return Ts.replace(e);const r=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===N.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Ui(s)).join(`
`);t.setAttribute(bn,""),t.innerHTML=i}};function Zf(e){e()}function Bm(e,t){const n=typeof t=="function"?t:Cs;if(e.length===0)n();else{let r=Zf;N.mutateApproach===F1&&(r=tn.requestAnimationFrame||Zf),r(()=>{const i=Nw(),s=rc.begin("mutate");e.map(i),s(),n()})}}let ic=!1;function $m(){ic=!0}function Ml(){ic=!1}let so=null;function ed(e){if(!$f||!N.observeMutations)return;const{treeCallback:t=Cs,nodeCallback:n=Cs,pseudoElementsCallback:r=Cs,observeMutationsRoot:i=W}=e;so=new $f(s=>{if(ic)return;const o=nn();Pr(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Jf(a.addedNodes[0])&&(N.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&N.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Jf(a.target)&&~H1.indexOf(a.attributeName))if(a.attributeName==="class"&&Tw(a.target)){const{prefix:l,iconName:u}=Do(qu(a.target));a.target.setAttribute(Qu,l||o),u&&a.target.setAttribute(Xu,u)}else Pw(a.target)&&n(a.target)})}),Tt&&so.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bw(){so&&so.disconnect()}function Lw(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function jw(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Do(qu(e));return i.prefix||(i.prefix=nn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=fw(i.prefix,e.innerText)||ec(i.prefix,Al(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Dw(e){const t=Pr(e.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Ci()):(t["aria-hidden"]="true",t.focusable="false")),t}function Mw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function td(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=jw(e),s=Dw(e),o=Rl("parseNodeAttributes",{},e);let a=t.styleParser?Lw(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:Uw}=rt;function Vm(e){const t=N.autoReplaceSvg==="nest"?td(e,{styleParser:!1}):td(e);return~t.extra.classes.indexOf(xm)?rn("generateLayersText",e,t):rn("generateSvgReplacementMutation",e,t)}let at=new Set;km.map(e=>{at.add("fa-".concat(e))});Object.keys(Cn[G]).map(at.add.bind(at));Object.keys(Cn[Te]).map(at.add.bind(at));Object.keys(Cn[Pe]).map(at.add.bind(at));at=[...at];function nd(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();const n=W.documentElement.classList,r=f=>n.add("".concat(Hf,"-").concat(f)),i=f=>n.remove("".concat(Hf,"-").concat(f)),s=N.autoFetchSvg?at:km.map(f=>"fa-".concat(f)).concat(Object.keys(Uw));s.includes("fa")||s.push("fa");const o=[".".concat(xm,":not([").concat(bn,"])")].concat(s.map(f=>".".concat(f,":not([").concat(bn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Pr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=rc.begin("onTree"),u=a.reduce((f,d)=>{try{const m=Vm(d);m&&f.push(m)}catch(m){Sm||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,d)=>{Promise.all(u).then(m=>{Bm(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(m=>{l(),d(m)})})}function Fw(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vm(e).then(n=>{n&&Bm([n],t)})}function zw(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:bl(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:bl(i||{})),e(r,{...n,mask:i})}}const Bw=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=nt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:f={}}=t;if(!e)return;const{prefix:d,iconName:m,icon:v}=e;return Mo({type:"icon",...e},()=>(Ln("beforeDOMElementCreation",{iconDefinition:e,params:t}),N.autoA11y&&(o?u["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(a||Ci()):(u["aria-hidden"]="true",u.focusable="false")),nc({icons:{main:Ll(v),mask:i?Ll(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...nt,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:u,styles:f,classes:l}})))};var $w={mixout(){return{icon:zw(Bw)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=nd,e.nodeCallback=Fw,e}}},provides(e){e.i2svg=function(t){const{node:n=W,callback:r=()=>{}}=t;return nd(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:u,maskId:f,extra:d}=n;return new Promise((m,v)=>{Promise.all([jl(r,o),u.iconName?jl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[y,E]=w;m([t,nc({icons:{main:y,mask:E},prefix:o,iconName:r,transform:a,symbol:l,maskId:f,title:i,titleId:s,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:s,styles:o}=t;const a=Lo(o);a.length>0&&(r.style=a);let l;return Ju(s)&&(l=rn("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},Vw={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Mo({type:"layer"},()=>{Ln("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ww={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=t;return Mo({type:"counter",content:e},()=>(Ln("beforeDOMElementCreation",{content:e,params:t}),kw({content:e.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(N.cssPrefix,"-layers-counter"),...r]}})))}}}},Hw={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=nt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=t;return Mo({type:"text",content:e},()=>(Ln("beforeDOMElementCreation",{content:e,params:t}),Xf({content:e,transform:{...nt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(N.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(gm){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/l,a=u.height/l}return N.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Xf({content:t.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const Gw=new RegExp('"',"ug"),rd=[1105920,1112319],id={FontAwesome:{normal:"fas",400:"fas"},...T1,...C1,...j1},Ul=Object.keys(id).reduce((e,t)=>(e[t.toLowerCase()]=id[t],e),{}),Kw=Object.keys(Ul).reduce((e,t)=>{const n=Ul[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Yw(e){const t=e.replace(Gw,""),n=sw(t,0),r=n>=rd[0]&&n<=rd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Al(i?t[0]:t),isSecondary:r||i}}function Qw(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Ul[n]||{})[i]||Kw[n]}function sd(e,t){const n="".concat(U1).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const o=Pr(e.children).filter(m=>m.getAttribute(Cl)===t)[0],a=tn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(V1),f=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=a.getPropertyValue("content");let v=Qw(l,f);const{value:w,isSecondary:y}=Yw(m),E=u[0].startsWith("FontAwesome");let p=ec(v,w),h=p;if(E){const g=dw(w);g.iconName&&g.prefix&&(p=g.iconName,v=g.prefix)}if(p&&!y&&(!o||o.getAttribute(Qu)!==v||o.getAttribute(Xu)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);const g=Mw(),{extra:_}=g;_.attributes[Cl]=t,jl(p,v).then(k=>{const P=nc({...g,icons:{main:k,mask:tc()},prefix:v,iconName:h,extra:_,watchable:!0}),C=W.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=P.map(A=>Ui(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xw(e){return Promise.all([sd(e,"::before"),sd(e,"::after")])}function qw(e){return e.parentNode!==document.head&&!~z1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function od(e){if(Tt)return new Promise((t,n)=>{const r=Pr(e.querySelectorAll("*")).filter(qw).map(Xw),i=rc.begin("searchPseudoElements");$m(),Promise.all(r).then(()=>{i(),Ml(),t()}).catch(()=>{i(),Ml(),n()})})}var Jw={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=od,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=W}=t;N.searchPseudoElements&&od(n)}}};let ad=!1;var Zw={mixout(){return{dom:{unwatch(){$m(),ad=!0}}}},hooks(){return{bootstrap(){ed(Rl("mutationObserverCallbacks",{}))},noAuto(){bw()},watch(e){const{observeMutationsRoot:t}=e;ad?Ml():ed(Rl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ld=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var e_={mixout(){return{parse:{transform:e=>ld(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ld(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:s}=t;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Ea={x:0,y:0,width:"100%",height:"100%"};function ud(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function t_(e){return e.tag==="g"?e.children:[e]}var n_={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Do(n.split(" ").map(i=>i.trim())):tc();return r.prefix||(r.prefix=nn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=t;const{width:l,icon:u}=i,{width:f,icon:d}=s,m=Z1({transform:a,containerWidth:f,iconWidth:l}),v={tag:"rect",attributes:{...Ea,fill:"white"}},w=u.children?{children:u.children.map(ud)}:{},y={tag:"g",attributes:{...m.inner},children:[ud({tag:u.tag,attributes:{...u.attributes,...m.path},...w})]},E={tag:"g",attributes:{...m.outer},children:[y]},p="mask-".concat(o||Ci()),h="clip-".concat(o||Ci()),g={tag:"mask",attributes:{...Ea,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,E]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:t_(d)},g]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...Ea}}),{children:n,attributes:r}}}},r_={provides(e){let t=!1;tn.matchMedia&&(t=tn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},i_={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},s_=[nw,$w,Vw,Ww,Hw,Jw,Zw,e_,n_,r_,i_];gw(s_,{mixoutsTo:Re});Re.noAuto;Re.config;Re.library;Re.dom;const Fl=Re.parse;Re.findIconDefinition;Re.toHtml;const o_=Re.icon;Re.layer;Re.text;Re.counter;var Wm={exports:{}},a_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",l_=a_,u_=l_;function Hm(){}function Gm(){}Gm.resetWarningCache=Hm;var c_=function(){function e(r,i,s,o,a,l){if(l!==u_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gm,resetWarningCache:Hm};return n.PropTypes=n,n};Wm.exports=c_();var f_=Wm.exports;const j=$d(f_);function cd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cd(Object(n),!0).forEach(function(r){nr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oo(e){"@babel/helpers - typeof";return oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oo(e)}function nr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function h_(e,t){if(e==null)return{};var n=d_(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zl(e){return p_(e)||m_(e)||g_(e)||v_()}function p_(e){if(Array.isArray(e))return Bl(e)}function m_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function g_(e,t){if(e){if(typeof e=="string")return Bl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bl(e,t)}}function Bl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,m=e.fixedWidth,v=e.inverse,w=e.border,y=e.listItem,E=e.flip,p=e.size,h=e.rotation,g=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":m,"fa-inverse":v,"fa-border":w,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},nr(t,"fa-".concat(p),typeof p<"u"&&p!==null),nr(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),nr(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),nr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(k){return _[k]?k:null}).filter(function(k){return k})}function w_(e){return e=e-0,e===e}function Km(e){return w_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var __=["style"];function E_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Km(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[E_(i)]=s:t[i]=s,t},{})}function Ym(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ym(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=S_(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[Km(u)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=h_(n,__);return i.attrs.style=et(et({},i.attrs.style),o),e.apply(void 0,[t.tag,et(et({},i.attrs),a)].concat(zl(r)))}var Qm=!1;try{Qm=!0}catch{}function k_(){if(!Qm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fd(e){if(e&&oo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fl.icon)return Fl.icon(e);if(e===null)return null;if(e&&oo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Sa(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?nr({},e,t):{}}var dd={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},fe=go.forwardRef(function(e,t){var n=et(et({},dd),e),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,f=fd(r),d=Sa("classes",[].concat(zl(y_(n)),zl((o||"").split(" ")))),m=Sa("transform",typeof n.transform=="string"?Fl.transform(n.transform):n.transform),v=Sa("mask",fd(i)),w=o_(f,et(et(et(et({},d),m),v),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!w)return k_("Could not find icon",f),null;var y=w.abstract,E={ref:t};return Object.keys(n).forEach(function(p){dd.hasOwnProperty(p)||(E[p]=n[p])}),I_(y[0],E)});fe.displayName="FontAwesomeIcon";fe.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};var I_=Ym.bind(null,go.createElement);const x_={prefix:"fas",iconName:"people-arrows",icon:[640,512,["people-arrows-left-right"],"e068","M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160l44.8 0c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2l0 72.8c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L576 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-72.8 47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240l0 32 96 0 0-32c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-32-96 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"]},mn={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},C_={prefix:"fas",iconName:"wallet",icon:[512,512,[],"f555","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},T_={prefix:"fas",iconName:"ticket",icon:[576,512,[127903],"f145","M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"]},P_={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};function N_(){return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"dicoverBlock",children:[c.jsx("h1",{className:"discover",children:"Discover"}),c.jsx(fe,{icon:mn,className:"iconArrow",size:"1x"})]}),c.jsxs("div",{className:"events",children:[c.jsxs("div",{className:"discoverEvents",children:[c.jsx("img",{src:$n,alt:"display 1",className:"photo photo1",loading:"lazy"}),c.jsx("p",{className:"month",children:"AUG"}),c.jsx("p",{className:"date",children:"20th"}),c.jsx("p",{className:"testing",children:"Event Name"}),c.jsx(fe,{icon:mn,className:"iconArrow1",size:"1x"})]}),c.jsxs("div",{className:"discoverEvents",children:[c.jsx("img",{src:$n,alt:"display 1",className:"photo photo2",loading:"lazy"}),c.jsx("p",{className:"month",children:"AUG"}),c.jsx("p",{className:"date",children:"20th"}),c.jsx("p",{className:"testing",children:"Event Name"}),c.jsx(fe,{icon:mn,className:"iconArrow1",size:"1x"})]}),c.jsxs("div",{className:"discoverEvents",children:[c.jsx("img",{src:$n,alt:"display 1",className:"photo photo3",loading:"lazy"}),c.jsx("p",{className:"month",children:"AUG"}),c.jsx("p",{className:"date",children:"20th"}),c.jsx("p",{className:"testing",children:"Tickets Available"}),c.jsx(fe,{icon:mn,className:"iconArrow1",size:"1x"})]}),c.jsxs("div",{className:"discoverEvents",children:[c.jsx("img",{src:$n,alt:"display 1",className:"photo photo3",loading:"lazy"}),c.jsx("p",{className:"month",children:"AUG"}),c.jsx("p",{className:"date",children:"20th"}),c.jsx("p",{className:"testing",children:"Tickets Available"}),c.jsx(fe,{icon:mn,className:"iconArrow1",size:"1x"})]}),c.jsxs("div",{className:"discoverEvents",children:[c.jsx("img",{src:$n,alt:"display 1",className:"photo photo3",loading:"lazy"}),c.jsx("p",{className:"month",children:"AUG"}),c.jsx("p",{className:"date",children:"20th"}),c.jsx("p",{className:"testing",children:"Tickets Available"}),c.jsx(fe,{icon:mn,className:"iconArrow1",size:"1x"})]}),c.jsxs("div",{className:"discoverEvents",children:[c.jsx("img",{src:$n,alt:"display 1",className:"photo photo3",loading:"lazy"}),c.jsx("p",{className:"month",children:"AUG"}),c.jsx("p",{className:"date",children:"20th"}),c.jsx("p",{className:"testing",children:"Tickets Available"}),c.jsx(fe,{icon:mn,className:"iconArrow1",size:"1x"})]})]}),c.jsx("div",{className:"discoverButtonContainer",children:c.jsx("p",{className:"discoverButton",children:c.jsx(Ze,{to:"/Tickify_Project/discovers",style:{textDecoration:"none",color:"#b30d0d"},className:"discoverButton-text",children:"View All Events"})})})]}),c.jsx("div",{className:"eventCreation",children:c.jsxs("div",{className:"eventCreation-container",children:[c.jsx("h2",{children:"Make your own Event"}),c.jsx("p",{children:"Effortlessly design and organize your event, from small gatherings to large festivals, with our simple, seamless tools."}),c.jsx("button",{className:"eventButton",children:c.jsx(Ze,{to:"/Tickify_Project/create-events",style:{textDecoration:"none"},className:"eventButton-text",children:"Create Events"})})]})})]})}function A_(){const e=[{icon:T_,title:"Online Ticketing and Registration",featureDescription:"Offer a simple, easy-to-use platform for creating and selling event tickets online. Organizers can "},{icon:x_,title:"Event Promotion and Social Sharing",featureDescription:"Help event organizers reach their audience by providing social sharing tools and customizable event pages to spread the word."},{icon:C_,title:"Simple Payment Processing",featureDescription:"Facilitate smooth and secure payment processing so that ticket buyers can quickly complete purchases."}];return c.jsxs("div",{className:"container",children:[c.jsx("h1",{className:"features",children:"Features"}),c.jsx("div",{className:"featureTitle",children:e.map((t,n)=>c.jsxs("div",{className:"featureColumn",children:[c.jsx(fe,{icon:t.icon,className:"featureIcons",size:"3x"}),c.jsx("h3",{children:t.title}),c.jsx("p",{children:t.featureDescription})]},n))})]})}const O_={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},R_={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},b_={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},L_={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},j_={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function D_(){const[e,t]=I.useState("Subscribe Now"),[n,r]=I.useState("");function i(){t("Subscribed"),r(""),setTimeout(()=>{t("Subscribe Now")},3e3)}return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"footer-container",children:[c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"Tickify"}),c.jsx("p",{children:"Tickify is a global self-service ticketing platform for live experiences that allows anyone to create, share, find, and attend events that fuel their passions and enrich their lives."}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"https://www.instagram.com/tickify.click",className:"social-icon",children:c.jsx(fe,{icon:b_,size:"3x"})}),c.jsx("a",{href:"/",className:"social-icon",children:c.jsx(fe,{icon:j_,size:"3x"})}),c.jsx("a",{href:"/",className:"social-icon",children:c.jsx(fe,{icon:R_,size:"3x"})})]})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"Plan Events"}),c.jsxs("div",{className:"footer-links",children:[c.jsx("a",{href:"/",children:"Create and Set Up"}),c.jsx("a",{href:"/",children:"Sell Tickets"}),c.jsx("a",{href:"/",children:"Online RSVP"}),c.jsx("a",{href:"/",children:"Online Events"})]})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"Tickify"}),c.jsxs("div",{className:"footer-links",children:[c.jsx("a",{href:"/",children:"About Us"}),c.jsx("a",{href:"/",children:"Contact Us"}),c.jsx("a",{href:"/",children:"Help Center"}),c.jsx("a",{href:"/",children:"How it Works"}),c.jsx("a",{href:"/",children:"Privacy Policy"}),c.jsx("a",{href:"/",children:"Terms & Conditons"})]})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"Stay In The Loop"}),c.jsx("p",{children:"Join our mailing list to stay in the loop with our newest events and concerts."}),c.jsxs("div",{className:"subscribeSection",children:[c.jsx("input",{type:"email",placeholder:"Enter your email address.",id:"subscribeInput",value:n,onChange:s=>r(s.target.value)}),c.jsx("button",{className:"subscribeButton",onClick:i,type:"button",children:e})]})]})]}),c.jsx("div",{style:{textAlign:"center",paddingTop:"20px",fontSize:"16px",color:"#fff",fontWeight:"bold"},children:"Copyright © 2024. Tickify, Inc. All rights reserved."})]})}const M_="/Tickify_Project/assets/background%20image-D-y-LHd0.jpg";function U_(){return c.jsx("div",{className:"Hero",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"heroSection",children:[c.jsx("img",{src:M_,alt:"displayPhoto",loading:"lazy"}),c.jsxs("div",{style:{alignItems:"center",justifyContent:"center"},children:[c.jsx("h1",{className:"Title",children:"At Tickify,"}),c.jsx("p",{className:"Description",children:"We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we’ve got your back. Join our community today, and let’s make some memories!"})]})]})})})}const F_="/Tickify_Project/assets/Logo%201-DoJojXz6.png";var hd={};/**
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
 */const Xm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},z_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,d=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[f],n[d],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new B_;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class B_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $_=function(e){const t=Xm(e);return qm.encodeByteArray(t,!0)},Jm=function(e){return $_(e).replace(/\./g,"")},Zm=function(e){try{return qm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function V_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W_=()=>V_().__FIREBASE_DEFAULTS__,H_=()=>{if(typeof process>"u"||typeof hd>"u")return;const e=hd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},G_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Zm(e[1]);return t&&JSON.parse(t)},sc=()=>{try{return W_()||H_()||G_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},K_=e=>{var t,n;return(n=(t=sc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},eg=()=>{var e;return(e=sc())===null||e===void 0?void 0:e.config},tg=e=>{var t;return(t=sc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Y_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function X_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function q_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function J_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z_(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function eE(){try{return typeof indexedDB=="object"}catch{return!1}}function tE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const nE="FirebaseError";class ln extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nE,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?rE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function rE(e,t){return e.replace(iE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const iE=/\{\$([^}]+)}/g;function sE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ao(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(pd(s)&&pd(o)){if(!ao(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pd(e){return e!==null&&typeof e=="object"}/**
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
 */function zi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Gr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Kr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function oE(e,t){const n=new aE(e,t);return n.subscribe.bind(n)}class aE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ka(){}/**
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
 */function un(e){return e&&e._delegate?e._delegate:e}class kr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class uE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Y_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fE(t))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=yn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=yn){return this.instances.has(t)}getOptions(t=yn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=yn){return this.component?this.component.multipleInstances?t:yn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cE(e){return e===yn?void 0:e}function fE(e){return e.instantiationMode==="EAGER"}/**
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
 */class dE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new uE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const hE={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},pE=F.INFO,mE={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},gE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ng{constructor(t){this.name=t,this._logLevel=pE,this._logHandler=gE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const vE=(e,t)=>t.some(n=>e instanceof n);let md,gd;function yE(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return gd||(gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,$l=new WeakMap,ig=new WeakMap,Ia=new WeakMap,oc=new WeakMap;function _E(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(qt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&rg.set(n,e)}).catch(()=>{}),oc.set(t,e),t}function EE(e){if($l.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});$l.set(e,t)}let Vl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $l.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ig.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function SE(e){Vl=e(Vl)}function kE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xa(this),t,...n);return ig.set(r,t.sort?t.sort():[t]),qt(r)}:wE().includes(e)?function(...t){return e.apply(xa(this),t),qt(rg.get(this))}:function(...t){return qt(e.apply(xa(this),t))}}function IE(e){return typeof e=="function"?kE(e):(e instanceof IDBTransaction&&EE(e),vE(e,yE())?new Proxy(e,Vl):e)}function qt(e){if(e instanceof IDBRequest)return _E(e);if(Ia.has(e))return Ia.get(e);const t=IE(e);return t!==e&&(Ia.set(e,t),oc.set(t,e)),t}const xa=e=>oc.get(e);function xE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=qt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const CE=["get","getKey","getAll","getAllKeys","count"],TE=["put","add","delete","clear"],Ca=new Map;function vd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ca.get(t))return Ca.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=TE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||CE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ca.set(t,s),s}SE(e=>({...e,get:(t,n,r)=>vd(t,n)||e.get(t,n,r),has:(t,n)=>!!vd(t,n)||e.has(t,n)}));/**
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
 */class PE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wl="@firebase/app",yd="0.10.15";/**
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
 */const It=new ng("@firebase/app"),AE="@firebase/app-compat",OE="@firebase/analytics-compat",RE="@firebase/analytics",bE="@firebase/app-check-compat",LE="@firebase/app-check",jE="@firebase/auth",DE="@firebase/auth-compat",ME="@firebase/database",UE="@firebase/data-connect",FE="@firebase/database-compat",zE="@firebase/functions",BE="@firebase/functions-compat",$E="@firebase/installations",VE="@firebase/installations-compat",WE="@firebase/messaging",HE="@firebase/messaging-compat",GE="@firebase/performance",KE="@firebase/performance-compat",YE="@firebase/remote-config",QE="@firebase/remote-config-compat",XE="@firebase/storage",qE="@firebase/storage-compat",JE="@firebase/firestore",ZE="@firebase/vertexai",eS="@firebase/firestore-compat",tS="firebase",nS="11.0.1";/**
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
 */const Hl="[DEFAULT]",rS={[Wl]:"fire-core",[AE]:"fire-core-compat",[RE]:"fire-analytics",[OE]:"fire-analytics-compat",[LE]:"fire-app-check",[bE]:"fire-app-check-compat",[jE]:"fire-auth",[DE]:"fire-auth-compat",[ME]:"fire-rtdb",[UE]:"fire-data-connect",[FE]:"fire-rtdb-compat",[zE]:"fire-fn",[BE]:"fire-fn-compat",[$E]:"fire-iid",[VE]:"fire-iid-compat",[WE]:"fire-fcm",[HE]:"fire-fcm-compat",[GE]:"fire-perf",[KE]:"fire-perf-compat",[YE]:"fire-rc",[QE]:"fire-rc-compat",[XE]:"fire-gcs",[qE]:"fire-gcs-compat",[JE]:"fire-fst",[eS]:"fire-fst-compat",[ZE]:"fire-vertex","fire-js":"fire-js",[tS]:"fire-js-all"};/**
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
 */const lo=new Map,iS=new Map,Gl=new Map;function wd(e,t){try{e.container.addComponent(t)}catch(n){It.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ti(e){const t=e.name;if(Gl.has(t))return It.debug(`There were multiple attempts to register component ${t}.`),!1;Gl.set(t,e);for(const n of lo.values())wd(n,e);for(const n of iS.values())wd(n,e);return!0}function sg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ge(e){return e.settings!==void 0}/**
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
 */const sS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new Fi("app","Firebase",sS);/**
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
 */class oS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=nS;function og(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Jt.create("bad-app-name",{appName:String(i)});if(n||(n=eg()),!n)throw Jt.create("no-options");const s=lo.get(i);if(s){if(ao(n,s.options)&&ao(r,s.config))return s;throw Jt.create("duplicate-app",{appName:i})}const o=new dE(i);for(const l of Gl.values())o.addComponent(l);const a=new oS(n,r,o);return lo.set(i,a),a}function aS(e=Hl){const t=lo.get(e);if(!t&&e===Hl&&eg())return og();if(!t)throw Jt.create("no-app",{appName:e});return t}function cr(e,t,n){var r;let i=(r=rS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}Ti(new kr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const lS="firebase-heartbeat-database",uS=1,Pi="firebase-heartbeat-store";let Ta=null;function ag(){return Ta||(Ta=xE(lS,uS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Pi)}catch(n){console.warn(n)}}}}).catch(e=>{throw Jt.create("idb-open",{originalErrorMessage:e.message})})),Ta}async function cS(e){try{const n=(await ag()).transaction(Pi),r=await n.objectStore(Pi).get(lg(e));return await n.done,r}catch(t){if(t instanceof ln)It.warn(t.message);else{const n=Jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});It.warn(n.message)}}}async function _d(e,t){try{const r=(await ag()).transaction(Pi,"readwrite");await r.objectStore(Pi).put(t,lg(e)),await r.done}catch(n){if(n instanceof ln)It.warn(n.message);else{const r=Jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});It.warn(r.message)}}}function lg(e){return`${e.name}!${e.options.appId}`}/**
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
 */const fS=1024,dS=30*24*60*60*1e3;class hS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ed();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){It.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:i}=pS(this._heartbeatsCache.heartbeats),s=Jm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return It.warn(n),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function pS(e,t=fS){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sd(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eE()?tE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Sd(e){return Jm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function gS(e){Ti(new kr("platform-logger",t=>new PE(t),"PRIVATE")),Ti(new kr("heartbeat",t=>new hS(t),"PRIVATE")),cr(Wl,yd,e),cr(Wl,yd,"esm2017"),cr("fire-js","")}gS("");function ac(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ug(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vS=ug,cg=new Fi("auth","Firebase",ug());/**
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
 */const uo=new ng("@firebase/auth");function yS(e,...t){uo.logLevel<=F.WARN&&uo.warn(`Auth (${Bi}): ${e}`,...t)}function Ps(e,...t){uo.logLevel<=F.ERROR&&uo.error(`Auth (${Bi}): ${e}`,...t)}/**
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
 */function ze(e,...t){throw uc(e,...t)}function Qe(e,...t){return uc(e,...t)}function lc(e,t,n){const r=Object.assign(Object.assign({},vS()),{[t]:n});return new Fi("auth","Firebase",r).create(t,{appName:e.name})}function vt(e){return lc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wS(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ze(e,"argument-error"),lc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cg.create(e,...t)}function O(e,t,...n){if(!e)throw uc(t,...n)}function ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ps(t),new Error(t)}function xt(e,t){e||ht(t)}/**
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
 */function Kl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function _S(){return kd()==="http:"||kd()==="https:"}function kd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function ES(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_S()||q_()||"connection"in navigator)?navigator.onLine:!0}function SS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class $i{constructor(t,n){this.shortDelay=t,this.longDelay=n,xt(n>t,"Short delay should be less than long delay!"),this.isMobile=Q_()||J_()}get(){return ES()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cc(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class fg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IS=new $i(3e4,6e4);function cn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return dg(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=zi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return X_()||(u.referrerPolicy="no-referrer"),fg.fetch()(hg(e,e.config.apiHost,n,a),u)})}async function dg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},kS),t);try{const i=new CS(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw hs(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lc(e,f,u);ze(e,f)}}catch(i){if(i instanceof ln)throw i;ze(e,"network-request-failed",{message:String(i)})}}async function Vi(e,t,n,r,i={}){const s=await fn(e,t,n,r,i);return"mfaPendingCredential"in s&&ze(e,"multi-factor-auth-required",{_serverResponse:s}),s}function hg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?cc(e.config,i):`${e.config.apiScheme}://${i}`}function xS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),IS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(e,t,r);return i.customData._tokenResponse=n,i}function Id(e){return e!==void 0&&e.enterprise!==void 0}class TS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return xS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PS(e,t){return fn(e,"GET","/v2/recaptchaConfig",cn(e,t))}/**
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
 */async function NS(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function pg(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function si(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function AS(e,t=!1){const n=un(e),r=await n.getIdToken(t),i=fc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:si(Pa(i.auth_time)),issuedAtTime:si(Pa(i.iat)),expirationTime:si(Pa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pa(e){return Number(e)*1e3}function fc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zm(n);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xd(e){const t=fc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ni(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ln&&OS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function OS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class RS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function co(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ni(e,pg(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?mg(s.providerUserInfo):[],a=LS(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,d)}async function bS(e){const t=un(e);await co(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function LS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function mg(e){return e.map(t=>{var{providerId:n}=t,r=ac(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jS(e,t){const n=await dg(e,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=hg(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DS(e,t){return fn(e,"POST","/v2/accounts:revokeToken",cn(e,t))}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){O(t.length!==0,"internal-error");const n=xd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jS(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fr;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function At(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class pt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ac(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ni(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return AS(this,t)}reload(){return bS(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new pt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(vt(this.auth));const t=await this.getIdToken();return await Ni(this,NS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:P,stsTokenManager:C}=n;O(g&&C,t,"internal-error");const A=fr.fromJSON(this.name,C);O(typeof g=="string",t,"internal-error"),At(d,t.name),At(m,t.name),O(typeof _=="boolean",t,"internal-error"),O(typeof k=="boolean",t,"internal-error"),At(v,t.name),At(w,t.name),At(y,t.name),At(E,t.name),At(p,t.name),At(h,t.name);const B=new pt({uid:g,auth:t,email:m,emailVerified:_,displayName:d,isAnonymous:k,photoURL:w,phoneNumber:v,tenantId:y,stsTokenManager:A,createdAt:p,lastLoginAt:h});return P&&Array.isArray(P)&&(B.providerData=P.map(L=>Object.assign({},L))),E&&(B._redirectEventId=E),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new pt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await co(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new fr;a.updateFromIdToken(r);const l=new pt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Cd=new Map;function mt(e){xt(e instanceof Function,"Expected a class definition");let t=Cd.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cd.set(e,t),t)}/**
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
 */class gg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gg.type="NONE";const Td=gg;/**
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
 */function Ns(e,t,n){return`firebase:${e}:${t}:${n}`}class dr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ns(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ns("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?pt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new dr(mt(Td),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||mt(Td);const o=Ns(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const d=pt._fromJSON(t,f);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new dr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new dr(s,t,r))}}/**
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
 */function Pd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_g(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sg(t))return"Blackberry";if(kg(t))return"Webos";if(yg(t))return"Safari";if((t.includes("chrome/")||wg(t))&&!t.includes("edge/"))return"Chrome";if(Eg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vg(e=ge()){return/firefox\//i.test(e)}function yg(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wg(e=ge()){return/crios\//i.test(e)}function _g(e=ge()){return/iemobile/i.test(e)}function Eg(e=ge()){return/android/i.test(e)}function Sg(e=ge()){return/blackberry/i.test(e)}function kg(e=ge()){return/webos/i.test(e)}function dc(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function MS(e=ge()){var t;return dc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function US(){return Z_()&&document.documentMode===10}function Ig(e=ge()){return dc(e)||Eg(e)||kg(e)||Sg(e)||/windows phone/i.test(e)||_g(e)}/**
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
 */function xg(e,t=[]){let n;switch(e){case"Browser":n=Pd(ge());break;case"Worker":n=`${Pd(ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}/**
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
 */class FS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zS(e,t={}){return fn(e,"GET","/v2/passwordPolicy",cn(e,t))}/**
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
 */const BS=6;class $S{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class VS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nd(this),this.idTokenSubscription=new Nd(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await pg(this,{idToken:t}),r=await pt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await co(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=SS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ge(this.app))return Promise.reject(vt(this));const n=t?un(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ge(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await zS(this),n=new $S(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Fi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&mt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&yS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dn(e){return un(e)}class Nd{constructor(t){this.auth=t,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WS(e){Uo=e}function Cg(e){return Uo.loadJS(e)}function HS(){return Uo.recaptchaEnterpriseScript}function GS(){return Uo.gapiScript}function KS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class YS{constructor(){this.enterprise=new QS}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class QS{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const XS="recaptcha-enterprise",Tg="NO_RECAPTCHA";class qS{constructor(t){this.type=XS,this.auth=dn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{PS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new TS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Id(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Tg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Id(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=HS();l.length!==0&&(l+=a),Cg(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ad(e,t,n,r=!1,i=!1){const s=new qS(e);let o;if(i)o=Tg;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ql(e,t,n,r,i){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ad(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ad(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
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
 */function JS(e,t){const n=sg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ao(s,t??{}))return i;ze(i,"already-initialized")}return n.initialize({options:t})}function ZS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function ek(e,t,n){const r=dn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Pg(t),{host:o,port:a}=tk(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),nk()}function Pg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tk(e){const t=Pg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Od(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Od(o)}}}function Od(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class hc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(t){return ht("not implemented")}_linkToIdToken(t,n){return ht("not implemented")}_getReauthenticationResolver(t){return ht("not implemented")}}async function rk(e,t){return fn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function ik(e,t){return Vi(e,"POST","/v1/accounts:signInWithPassword",cn(e,t))}/**
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
 */async function sk(e,t){return Vi(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}async function ok(e,t){return Vi(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}/**
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
 */class Ai extends hc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ai(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ai(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ql(t,n,"signInWithPassword",ik);case"emailLink":return sk(t,{email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ql(t,r,"signUpPassword",rk);case"emailLink":return ok(t,{idToken:n,email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function hr(e,t){return Vi(e,"POST","/v1/accounts:signInWithIdp",cn(e,t))}/**
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
 */const ak="http://localhost";class jn extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ac(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return hr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,hr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,hr(t,n)}buildRequest(){const t={requestUri:ak,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=zi(n)}return t}}/**
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
 */function lk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uk(e){const t=Gr(Kr(e)).link,n=t?Gr(Kr(t)).deep_link_id:null,r=Gr(Kr(e)).deep_link_id;return(r?Gr(Kr(r)).link:null)||r||n||t||e}class pc{constructor(t){var n,r,i,s,o,a;const l=Gr(Kr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,d=lk((i=l.mode)!==null&&i!==void 0?i:null);O(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=uk(t);try{return new pc(n)}catch{return null}}}/**
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
 */class Nr{constructor(){this.providerId=Nr.PROVIDER_ID}static credential(t,n){return Ai._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=pc.parseLink(n);return O(r,"argument-error"),Ai._fromEmailAndCode(t,r.code,r.tenantId)}}Nr.PROVIDER_ID="password";Nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends mc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends Wi{constructor(){super("facebook.com")}static credential(t){return jn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class ct extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return jn._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ct.credentialFromTaggedObject(t)}static credentialFromError(t){return ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class Dt extends Wi{constructor(){super("github.com")}static credential(t){return jn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Mt extends Wi{constructor(){super("twitter.com")}static credential(t,n){return jn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function ck(e,t){return Vi(e,"POST","/v1/accounts:signUp",cn(e,t))}/**
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
 */class Dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await pt._fromIdTokenResponse(t,r,i),o=Rd(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Rd(r);return new Dn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Rd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class fo extends ln{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new fo(t,n,r,i)}}function Ng(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(e,s,t,r):s})}async function fk(e,t,n=!1){const r=await Ni(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dn._forOperation(e,"link",r)}/**
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
 */async function dk(e,t,n=!1){const{auth:r}=e;if(Ge(r.app))return Promise.reject(vt(r));const i="reauthenticate";try{const s=await Ni(e,Ng(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=fc(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(e.uid===a,r,"user-mismatch"),Dn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),s}}/**
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
 */async function Ag(e,t,n=!1){if(Ge(e.app))return Promise.reject(vt(e));const r="signIn",i=await Ng(e,r,t),s=await Dn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function hk(e,t){return Ag(dn(e),t)}/**
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
 */async function Og(e){const t=dn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function pk(e,t,n){if(Ge(e.app))return Promise.reject(vt(e));const r=dn(e),o=await Ql(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ck).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Og(e),l}),a=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mk(e,t,n){return Ge(e.app)?Promise.reject(vt(e)):hk(un(e),Nr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Og(e),r})}function gk(e,t,n,r){return un(e).onIdTokenChanged(t,n,r)}function vk(e,t,n){return un(e).beforeAuthStateChanged(t,n)}function yk(e,t,n,r){return un(e).onAuthStateChanged(t,n,r)}const ho="__sak";/**
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
 */class Rg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wk=1e3,_k=10;class bg extends Rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ig(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);US()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,_k):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}bg.type="LOCAL";const Ek=bg;/**
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
 */class Lg extends Rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lg.type="SESSION";const jg=Lg;/**
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
 */function Sk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Fo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Sk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
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
 */function gc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class kk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=gc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function Ik(e){ot().location.href=e}/**
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
 */function Dg(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ck(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Tk(){return Dg()?self:null}/**
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
 */const Mg="firebaseLocalStorageDb",Pk=1,po="firebaseLocalStorage",Ug="fbase_key";class Hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zo(e,t){return e.transaction([po],t?"readwrite":"readonly").objectStore(po)}function Nk(){const e=indexedDB.deleteDatabase(Mg);return new Hi(e).toPromise()}function Xl(){const e=indexedDB.open(Mg,Pk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(po,{keyPath:Ug})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(po)?t(r):(r.close(),await Nk(),t(await Xl()))})})}async function bd(e,t,n){const r=zo(e,!0).put({[Ug]:t,value:n});return new Hi(r).toPromise()}async function Ak(e,t){const n=zo(e,!1).get(t),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function Ld(e,t){const n=zo(e,!0).delete(t);return new Hi(n).toPromise()}const Ok=800,Rk=3;class Fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance(Tk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new kk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xl();return await bd(t,ho,"1"),await Ld(t,ho),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Ak(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ld(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=zo(i,!1).getAll();return new Hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fg.type="LOCAL";const bk=Fg;new $i(3e4,6e4);/**
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
 */function zg(e,t){return t?mt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class vc extends hc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return hr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return hr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Lk(e){return Ag(e.auth,new vc(e),e.bypassAuthState)}function jk(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),dk(n,new vc(e),e.bypassAuthState)}async function Dk(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),fk(n,new vc(e),e.bypassAuthState)}/**
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
 */class Bg{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Lk;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return jk;default:ze(this.auth,"internal-error")}}resolve(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mk=new $i(2e3,1e4);async function Uk(e,t,n){if(Ge(e.app))return Promise.reject(Qe(e,"operation-not-supported-in-this-environment"));const r=dn(e);wS(e,t,mc);const i=zg(r,n);return new kn(r,"signInViaPopup",t,i).executeNotNull()}class kn extends Bg{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const t=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Mk.get())};t()}}kn.currentPopupAction=null;/**
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
 */const Fk="pendingRedirect",As=new Map;class zk extends Bg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=As.get(this.auth._key());if(!t){try{const r=await Bk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}As.set(this.auth._key(),t)}return this.bypassAuthState||As.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bk(e,t){const n=Wk(t),r=Vk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $k(e,t){As.set(e._key(),t)}function Vk(e){return mt(e._redirectPersistence)}function Wk(e){return Ns(Fk,e.config.apiKey,e.name)}async function Hk(e,t,n=!1){if(Ge(e.app))return Promise.reject(vt(e));const r=dn(e),i=zg(r,t),o=await new zk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Gk=10*60*1e3;class Kk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Yk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!$g(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Gk&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(t))}saveEventToCache(t){this.cachedEventUids.add(jd(t)),this.lastProcessedEventTime=Date.now()}}function jd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function $g({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Yk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $g(e);default:return!1}}/**
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
 */async function Qk(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
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
 */const Xk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qk=/^https?/;async function Jk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qk(e);for(const n of t)try{if(Zk(n))return}catch{}ze(e,"unauthorized-domain")}function Zk(e){const t=Kl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qk.test(n))return!1;if(Xk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const e2=new $i(3e4,6e4);function Dd(){const e=ot().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function t2(e){return new Promise((t,n)=>{var r,i,s;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(Qe(e,"network-request-failed"))},timeout:e2.get()})}if(!((i=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ot().gapi)===null||s===void 0)&&s.load)o();else{const a=KS("iframefcb");return ot()[a]=()=>{gapi.load?o():n(Qe(e,"network-request-failed"))},Cg(`${GS()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Os=null,t})}let Os=null;function n2(e){return Os=Os||t2(e),Os}/**
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
 */const r2=new $i(5e3,15e3),i2="__/auth/iframe",s2="emulator/auth/iframe",o2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l2(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cc(t,s2):`https://${e.config.authDomain}/${i2}`,r={apiKey:t.apiKey,appName:e.name,v:Bi},i=a2.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zi(r).slice(1)}`}async function u2(e){const t=await n2(e),n=ot().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:l2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(e,"network-request-failed"),a=ot().setTimeout(()=>{s(o)},r2.get());function l(){ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const c2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f2=500,d2=600,h2="_blank",p2="http://localhost";class Md{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m2(e,t,n,r=f2,i=d2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},c2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ge().toLowerCase();n&&(a=wg(u)?h2:n),vg(u)&&(t=t||p2,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(MS(u)&&a!=="_self")return g2(t||"",a),new Md(null);const d=window.open(t||"",a,f);O(d,e,"popup-blocked");try{d.focus()}catch{}return new Md(d)}function g2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const v2="__/auth/handler",y2="emulator/auth/handler",w2=encodeURIComponent("fac");async function Ud(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(t instanceof mc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",sE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(t instanceof Wi){const f=t.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${w2}=${encodeURIComponent(l)}`:"";return`${_2(e)}?${zi(a).slice(1)}${u}`}function _2({config:e}){return e.emulator?cc(e,y2):`https://${e.authDomain}/${v2}`}/**
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
 */const Na="webStorageSupport";class E2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jg,this._completeRedirectFn=Hk,this._overrideRedirectResult=$k}async _openPopup(t,n,r,i){var s;xt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ud(t,n,r,Kl(),i);return m2(t,o,gc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ud(t,n,r,Kl(),i);return Ik(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await u2(t),r=new Kk(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Na,{type:Na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Na];o!==void 0&&n(!!o),ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ig()||yg()||dc()}}const S2=E2;var Fd="@firebase/auth",zd="1.8.0";/**
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
 */class k2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function I2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x2(e){Ti(new kr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(e)},u=new VS(r,i,s,l);return ZS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ti(new kr("auth-internal",t=>{const n=dn(t.getProvider("auth").getImmediate());return(r=>new k2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Fd,zd,I2(e)),cr(Fd,zd,"esm2017")}/**
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
 */const C2=5*60,T2=tg("authIdTokenMaxAge")||C2;let Bd=null;const P2=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>T2)return;const i=n==null?void 0:n.token;Bd!==i&&(Bd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function N2(e=aS()){const t=sg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=JS(e,{popupRedirectResolver:S2,persistence:[bk,Ek,jg]}),r=tg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=P2(s.toString());vk(n,o,()=>o(n.currentUser)),gk(n,a=>o(a))}}const i=K_("auth");return i&&ek(n,`http://${i}`),n}function A2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}WS({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",A2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x2("Browser");var O2="firebase",R2="11.0.1";/**
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
 */cr(O2,R2,"app");const b2={apiKey:"AIzaSyD53zTsuF-3bB6YR0aC4noAmt4GAd70Fio",authDomain:"tickify-88e27.firebaseapp.com",projectId:"tickify-88e27",storageBucket:"tickify-88e27.firebasestorage.app",messagingSenderId:"874828922225",appId:"1:874828922225:web:92660bc3e43ffeb47dcad0"},L2=og(b2),Gi=N2(L2),Vg=go.createContext();function yc(){return I.useContext(Vg)}function j2({children:e}){const[t,n]=I.useState(null),[r,i]=I.useState(!1),[s,o]=I.useState(!0);I.useEffect(()=>yk(Gi,a),[]);async function a(u){u?(n({...u}),i(!0)):(n(null),i(!1)),o(!1)}const l={currentUser:t,userLoggedIn:r,loading:s};return c.jsx(Vg.Provider,{value:l,children:!s&&e})}const Wg=async(e,t)=>pk(Gi,e,t),Hg=async(e,t)=>mk(Gi,e,t),D2=async()=>{const e=new ct;return await Uk(Gi,e)},M2=()=>Gi.signOut();function U2(){const{userLoggedIn:e,currentUser:t}=yc();return c.jsxs("nav",{children:[c.jsxs("div",{className:"info",children:[c.jsx("img",{src:F_,alt:"logo"}),c.jsx("h1",{style:{cursor:"pointer"},children:"Tickify.click"})]}),c.jsx("div",{children:e?c.jsxs("p",{children:["Logged in as ",t.email," "]}):""}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(Ze,{to:"/Tickify_Project/",className:"links",children:"Home"})}),c.jsx("li",{children:c.jsx(Ze,{to:"/Tickify_Project/discovers",className:"links",children:"Discover"})}),c.jsx("li",{children:c.jsx(Ze,{to:"/Tickify_Project/advert",className:"links",children:"Advert"})}),c.jsx("li",{children:c.jsx(Ze,{to:"/Tickify_Project/pricing",className:"links",children:"Pricing"})}),c.jsx("li",{children:c.jsx(Ze,{to:"/Tickify_Project/contact",className:"links",children:"Contact"})}),c.jsx("div",{children:e?c.jsx("p",{onClick:M2,style:{cursor:"pointer",color:"#b30d0d"},children:"Logout"}):c.jsx("button",{className:"get-started",children:c.jsx(Ze,{to:"/Tickify_Project/login-sign-up",style:{textDecoration:"none",color:"white"},children:"Get Started"})})})]})]})}function F2(){return c.jsx("div",{children:c.jsx("h1",{style:{color:"black"},children:"Discover"})})}function z2(){return c.jsx("div",{children:c.jsx("h1",{style:{color:"black"},children:"About"})})}function B2(){return c.jsx("div",{children:c.jsx("h1",{style:{color:"black"},children:"Advert"})})}function $2(){const[e,t]=I.useState(""),[n,r]=I.useState(""),{currentUser:i,userLoggedIn:s}=yc();console.log(i==null?void 0:i.displayName,i==null?void 0:i.photoURL);const o=Ku(),a=async u=>{u.preventDefault();try{await Hg(e,n),o("/Tickify_Project/")}catch(f){console.error(f.message)}};return c.jsx("div",{className:"login-wrapper",children:c.jsxs("div",{className:"login-container",children:[c.jsxs("div",{className:"left-section",children:[c.jsx("h1",{children:"Tickify"}),c.jsx("p",{children:"Your gateway to seamless event experiences"})]}),c.jsxs("form",{className:"login-form",autoComplete:"off",children:[c.jsx("h2",{children:"Welcome Back "}),c.jsx("p",{children:"Please log in to access your tickets"}),c.jsxs("div",{className:"input-group",children:[c.jsx("input",{type:"email",id:"email",placeholder:" ",value:e,onChange:u=>t(u.target.value),required:!0,autoComplete:"off"}),c.jsx("label",{htmlFor:"email",children:"Email"})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("input",{type:"password",id:"password",placeholder:" ",value:n,onChange:u=>r(u.target.value),required:!0}),c.jsx("label",{htmlFor:"password",children:"Password"})]}),c.jsxs("p",{children:["Forgot password? ",c.jsx(Ze,{to:"/Tickify_Project/forgetpassword",style:{cursor:"pointer",color:"#b30d0d"},children:"Click here"})]}),c.jsx("button",{type:"submit",className:"login-btn",onClick:a,children:"Log In"}),c.jsxs("p",{className:"signup-text",style:{color:"black"},children:["Don't have an account? ",c.jsx(Ze,{to:"/Tickify_Project/sign-up",children:"Sign Up"})]})]})]})})}function V2(){return c.jsx("div",{children:c.jsx("h1",{style:{color:"black"},children:"Pricing"})})}function W2(){return c.jsx("div",{children:c.jsx("h1",{style:{color:"black"},children:"Contact"})})}function H2(){const[e,t]=I.useState({firstName:"",lastName:"",email:"",password:""}),[n,r]=I.useState(!1),[i,s]=I.useState(""),o=Ku(),a=d=>{t({...e,[d.target.name]:d.target.value.trim()})},l=d=>{d.preventDefault(),e.firstName&&e.lastName&&e.email&&e.password&&n?(s(""),u(),console.log("Form Submitted",e)):(!e.firstName||!e.lastName||!e.email||!e.password||!n)&&s("Please fill in all fields")},u=async()=>{try{await Wg(e.email,e.password),o("/Tickify_Project/")}catch(d){s(d.message)}},f=async()=>{try{await D2(),o("/Tickify_Project/")}catch(d){s(d.message)}};return c.jsx("div",{className:"signup-container",children:c.jsxs("div",{className:"signup-content",children:[c.jsx(fe,{icon:P_,className:"close-icon",onClick:()=>o("/Tickify_Project/login-sign-up"),size:"lg"}),c.jsx("div",{className:"heading",children:c.jsx("h1",{children:"Create an account"})}),c.jsxs("div",{className:"sign-up-socials",children:[c.jsxs("button",{className:"social-button facebook",children:[c.jsx(fe,{icon:L_,size:"lg"}),c.jsx("span",{children:"Sign up with Facebook"})]}),c.jsxs("button",{className:"social-button google",onClick:f,children:[c.jsx(fe,{icon:O_,size:"lg"}),c.jsx("span",{children:"Sign up with Google"})]}),c.jsx("div",{className:"separator",children:c.jsx("span",{children:"OR"})})]}),c.jsxs("form",{children:[c.jsxs("div",{className:"name-fields",children:[c.jsx("input",{type:"text",placeholder:"First name",name:"firstName",value:e.firstName,onChange:a,autoComplete:"off",required:!0}),c.jsx("input",{type:"text",placeholder:"Last name",name:"lastName",value:e.lastName,onChange:a,autoComplete:"off",required:!0})]}),c.jsx("input",{type:"email",placeholder:"Email address",name:"email",value:e.email,onChange:a,autoComplete:"off",required:!0}),c.jsx("input",{type:"password",placeholder:"Password",name:"password",value:e.password,onChange:a,autoComplete:"off",required:!0}),c.jsxs("div",{className:"terms-and-conditions",children:[c.jsx("input",{type:"checkbox",id:"termsAndConditions",name:"termsAndConditions",checked:n,onChange:()=>r(!n),required:!0}),c.jsxs("label",{htmlFor:"termsAndConditions",children:["I agree to the ",c.jsx("a",{href:"#",children:"Terms and Conditions"})]})]}),i&&c.jsx("p",{className:"error",style:{color:"red"},children:i}),c.jsx("button",{type:"submit",className:"submit-button",onClick:l,children:"Sign up"})]})]})})}function G2(){return c.jsx("div",{children:c.jsx("h1",{style:{color:"black"},children:"ForgetPassword"})})}function K2(){const[e,t]=I.useState({name:"",title:"",address:""}),[n,r]=I.useState("");return c.jsx("div",{className:"Event-container",children:c.jsxs("form",{className:"Event-form",children:[c.jsxs("div",{className:"first-content",style:{borderBottom:"5px solid white"},children:[c.jsx("h3",{children:"Event info"}),c.jsx("p",{children:"Tell us more about your events"})]}),c.jsxs("div",{className:"second-content",children:[c.jsxs("div",{className:"inputs",children:[c.jsx("label",{htmlFor:"event-title",children:"Event Name"}),c.jsx("input",{type:"text",name:"event-name",id:"event-name",value:e.name,placeholder:"What is your event name?",onChange:i=>t(i.target.value)})]}),c.jsxs("div",{className:"inputs",children:[c.jsx("label",{htmlFor:"event-name",children:"Event Title"}),c.jsx("input",{type:"text",name:"event-name",id:"event-name",value:e.name,placeholder:"Tell us a bit about your event",onChange:i=>t(i.target.value)})]}),c.jsxs("div",{className:"inputs",children:[c.jsx("label",{htmlFor:"event-date",children:"Event Date"}),c.jsx("input",{type:"date",name:"event-date",id:"event-date",value:n,placeholder:"Where will the events take place?",onChange:i=>r(i.target.value)})]}),c.jsxs("div",{className:"inputs",children:[c.jsx("label",{htmlFor:"event-address",children:"Event Address"}),c.jsx("input",{type:"text",name:"event-address",id:"event-address",value:e.address,placeholder:"Set the venue address",onChange:i=>t(i.target.value)})]})]})]})})}const Y2=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(""),[l,u]=I.useState(""),[f,d]=I.useState(""),{currentUser:m}=yc();console.log(m.displayName);const v=async y=>{y.preventDefault();try{await Hg(e,n),alert(e+" is Logged in")}catch(E){console.error(E.message)}},w=async y=>{y.preventDefault();try{await Wg(i,o,l),alert("Account was created for "+i)}catch(E){d(E.message),console.error(f)}};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{children:[c.jsx("p",{children:"Login"}),c.jsxs("form",{children:[c.jsx("input",{onChange:y=>t(y.target.value),type:"email",placeholder:"Email"}),c.jsx("input",{onChange:y=>r(y.target.value),type:"password",placeholder:"Password"}),c.jsx("button",{onClick:v,type:"submit",children:"Login"}),c.jsx("button",{type:"button",children:"Logout"})]})]}),c.jsx("br",{}),c.jsxs("form",{children:[c.jsx("input",{onChange:y=>u(y.target.value),type:"text",placeholder:"Username"}),c.jsx("input",{onChange:y=>s(y.target.value),type:"email",placeholder:"Email"}),c.jsx("input",{onChange:y=>a(y.target.value),type:"password",placeholder:"Password"}),c.jsx("button",{onClick:w,type:"submit",children:"Sign Up"})]}),c.jsx("h2",{children:m.email})]})},Q2=()=>c.jsx(j2,{children:c.jsxs(v1,{children:[c.jsx(U2,{}),c.jsxs(c1,{children:[c.jsx(be,{path:"/Tickify_Project/",element:c.jsxs(c.Fragment,{children:[c.jsx(U_,{}),c.jsx(N_,{}),c.jsx(A_,{}),c.jsx(D_,{})]})}),c.jsx(be,{path:"/Tickify_Project/discovers",element:c.jsx(F2,{})}),c.jsx(be,{path:"/Tickify_Project/advert",element:c.jsx(B2,{})}),c.jsx(be,{path:"/Tickify_Project/about",element:c.jsx(z2,{})}),c.jsx(be,{path:"/Tickify_Project/pricing",element:c.jsx(V2,{})}),c.jsx(be,{path:"/Tickify_Project/contact",element:c.jsx(W2,{})}),c.jsx(be,{path:"/Tickify_Project/login-sign-up",element:c.jsx($2,{})}),c.jsx(be,{path:"/Tickify_Project/sign-up",element:c.jsx(H2,{})}),c.jsx(be,{path:"/Tickify_Project/forgetpassword",element:c.jsx(G2,{})}),c.jsx(be,{path:"/Tickify_Project/create-events",element:c.jsx(K2,{})}),c.jsx(be,{path:"/Tickify_Project/test",element:c.jsx(Y2,{})})]})]})});tm(document.getElementById("root")).render(c.jsx(I.StrictMode,{children:c.jsx(Q2,{})}));
