function lv(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in s)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(s,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Ig(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qc={exports:{}},Go={},Yc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function uv(){if(pm)return pt;pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(U,ae,Te){this.props=U,this.context=ae,this.refs=w,this.updater=Te||y}x.prototype.isReactComponent={},x.prototype.setState=function(U,ae){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ae,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=x.prototype;function b(U,ae,Te){this.props=U,this.context=ae,this.refs=w,this.updater=Te||y}var P=b.prototype=new v;P.constructor=b,T(P,x.prototype),P.isPureReactComponent=!0;var L=Array.isArray,D=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function W(U,ae,Te){var Xe,Ze={},ne=null,de=null;if(ae!=null)for(Xe in ae.ref!==void 0&&(de=ae.ref),ae.key!==void 0&&(ne=""+ae.key),ae)D.call(ae,Xe)&&!O.hasOwnProperty(Xe)&&(Ze[Xe]=ae[Xe]);var ye=arguments.length-2;if(ye===1)Ze.children=Te;else if(1<ye){for(var ke=Array(ye),Ue=0;Ue<ye;Ue++)ke[Ue]=arguments[Ue+2];Ze.children=ke}if(U&&U.defaultProps)for(Xe in ye=U.defaultProps,ye)Ze[Xe]===void 0&&(Ze[Xe]=ye[Xe]);return{$$typeof:s,type:U,key:ne,ref:de,props:Ze,_owner:F.current}}function A(U,ae){return{$$typeof:s,type:U.type,key:ae,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var ae={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Te){return ae[Te]})}var ee=/\/+/g;function J(U,ae){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ae.toString(36)}function oe(U,ae,Te,Xe,Ze){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(ne){case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case s:case e:de=!0}}if(de)return de=U,Ze=Ze(de),U=Xe===""?"."+J(de,0):Xe,L(Ze)?(Te="",U!=null&&(Te=U.replace(ee,"$&/")+"/"),oe(Ze,ae,Te,"",function(Ue){return Ue})):Ze!=null&&(R(Ze)&&(Ze=A(Ze,Te+(!Ze.key||de&&de.key===Ze.key?"":(""+Ze.key).replace(ee,"$&/")+"/")+U)),ae.push(Ze)),1;if(de=0,Xe=Xe===""?".":Xe+":",L(U))for(var ye=0;ye<U.length;ye++){ne=U[ye];var ke=Xe+J(ne,ye);de+=oe(ne,ae,Te,ke,Ze)}else if(ke=S(U),typeof ke=="function")for(U=ke.call(U),ye=0;!(ne=U.next()).done;)ne=ne.value,ke=Xe+J(ne,ye++),de+=oe(ne,ae,Te,ke,Ze);else if(ne==="object")throw ae=String(U),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return de}function ue(U,ae,Te){if(U==null)return U;var Xe=[],Ze=0;return oe(U,Xe,"","",function(ne){return ae.call(Te,ne,Ze++)}),Xe}function le(U){if(U._status===-1){var ae=U._result;ae=ae(),ae.then(function(Te){(U._status===0||U._status===-1)&&(U._status=1,U._result=Te)},function(Te){(U._status===0||U._status===-1)&&(U._status=2,U._result=Te)}),U._status===-1&&(U._status=0,U._result=ae)}if(U._status===1)return U._result.default;throw U._result}var q={current:null},j={transition:null},fe={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:j,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ue,forEach:function(U,ae,Te){ue(U,function(){ae.apply(this,arguments)},Te)},count:function(U){var ae=0;return ue(U,function(){ae++}),ae},toArray:function(U){return ue(U,function(ae){return ae})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=x,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=b,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,pt.act=re,pt.cloneElement=function(U,ae,Te){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Xe=T({},U.props),Ze=U.key,ne=U.ref,de=U._owner;if(ae!=null){if(ae.ref!==void 0&&(ne=ae.ref,de=F.current),ae.key!==void 0&&(Ze=""+ae.key),U.type&&U.type.defaultProps)var ye=U.type.defaultProps;for(ke in ae)D.call(ae,ke)&&!O.hasOwnProperty(ke)&&(Xe[ke]=ae[ke]===void 0&&ye!==void 0?ye[ke]:ae[ke])}var ke=arguments.length-2;if(ke===1)Xe.children=Te;else if(1<ke){ye=Array(ke);for(var Ue=0;Ue<ke;Ue++)ye[Ue]=arguments[Ue+2];Xe.children=ye}return{$$typeof:s,type:U.type,key:Ze,ref:ne,props:Xe,_owner:de}},pt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},pt.createElement=W,pt.createFactory=function(U){var ae=W.bind(null,U);return ae.type=U,ae},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:f,render:U}},pt.isValidElement=R,pt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:le}},pt.memo=function(U,ae){return{$$typeof:p,type:U,compare:ae===void 0?null:ae}},pt.startTransition=function(U){var ae=j.transition;j.transition={};try{U()}finally{j.transition=ae}},pt.unstable_act=re,pt.useCallback=function(U,ae){return q.current.useCallback(U,ae)},pt.useContext=function(U){return q.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return q.current.useDeferredValue(U)},pt.useEffect=function(U,ae){return q.current.useEffect(U,ae)},pt.useId=function(){return q.current.useId()},pt.useImperativeHandle=function(U,ae,Te){return q.current.useImperativeHandle(U,ae,Te)},pt.useInsertionEffect=function(U,ae){return q.current.useInsertionEffect(U,ae)},pt.useLayoutEffect=function(U,ae){return q.current.useLayoutEffect(U,ae)},pt.useMemo=function(U,ae){return q.current.useMemo(U,ae)},pt.useReducer=function(U,ae,Te){return q.current.useReducer(U,ae,Te)},pt.useRef=function(U){return q.current.useRef(U)},pt.useState=function(U){return q.current.useState(U)},pt.useSyncExternalStore=function(U,ae,Te){return q.current.useSyncExternalStore(U,ae,Te)},pt.useTransition=function(){return q.current.useTransition()},pt.version="18.3.1",pt}var mm;function Id(){return mm||(mm=1,Yc.exports=uv()),Yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function cv(){if(gm)return Go;gm=1;var s=Id(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var _,g={},S=null,y=null;p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:f,key:S,ref:y,props:g,_owner:a.current}}return Go.Fragment=t,Go.jsx=c,Go.jsxs=c,Go}var _m;function fv(){return _m||(_m=1,qc.exports=cv()),qc.exports}var Z=fv(),Le=Id();const Ug=Ig(Le),dv=lv({__proto__:null,default:Ug},[Le]);var yl={},$c={exports:{}},zn={},Kc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function hv(){return vm||(vm=1,(function(s){function e(j,fe){var re=j.length;j.push(fe);e:for(;0<re;){var U=re-1>>>1,ae=j[U];if(0<a(ae,fe))j[U]=fe,j[re]=ae,re=U;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var fe=j[0],re=j.pop();if(re!==fe){j[0]=re;e:for(var U=0,ae=j.length,Te=ae>>>1;U<Te;){var Xe=2*(U+1)-1,Ze=j[Xe],ne=Xe+1,de=j[ne];if(0>a(Ze,re))ne<ae&&0>a(de,Ze)?(j[U]=de,j[ne]=re,U=ne):(j[U]=Ze,j[Xe]=re,U=Xe);else if(ne<ae&&0>a(de,re))j[U]=de,j[ne]=re,U=ne;else break e}}return fe}function a(j,fe){var re=j.sortIndex-fe.sortIndex;return re!==0?re:j.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],_=1,g=null,S=3,y=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(j){for(var fe=t(p);fe!==null;){if(fe.callback===null)r(p);else if(fe.startTime<=j)r(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function L(j){if(w=!1,P(j),!T)if(t(h)!==null)T=!0,le(D);else{var fe=t(p);fe!==null&&q(L,fe.startTime-j)}}function D(j,fe){T=!1,w&&(w=!1,v(W),W=-1),y=!0;var re=S;try{for(P(fe),g=t(h);g!==null&&(!(g.expirationTime>fe)||j&&!z());){var U=g.callback;if(typeof U=="function"){g.callback=null,S=g.priorityLevel;var ae=U(g.expirationTime<=fe);fe=s.unstable_now(),typeof ae=="function"?g.callback=ae:g===t(h)&&r(h),P(fe)}else r(h);g=t(h)}if(g!==null)var Te=!0;else{var Xe=t(p);Xe!==null&&q(L,Xe.startTime-fe),Te=!1}return Te}finally{g=null,S=re,y=!1}}var F=!1,O=null,W=-1,A=5,R=-1;function z(){return!(s.unstable_now()-R<A)}function ee(){if(O!==null){var j=s.unstable_now();R=j;var fe=!0;try{fe=O(!0,j)}finally{fe?J():(F=!1,O=null)}}else F=!1}var J;if(typeof b=="function")J=function(){b(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=ee,J=function(){ue.postMessage(null)}}else J=function(){x(ee,0)};function le(j){O=j,F||(F=!0,J())}function q(j,fe){W=x(function(){j(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,le(D))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(j){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var re=S;S=fe;try{return j()}finally{S=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,fe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=S;S=j;try{return fe()}finally{S=re}},s.unstable_scheduleCallback=function(j,fe,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,j){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=re+ae,j={id:_++,callback:fe,priorityLevel:j,startTime:re,expirationTime:ae,sortIndex:-1},re>U?(j.sortIndex=re,e(p,j),t(h)===null&&j===t(p)&&(w?(v(W),W=-1):w=!0,q(L,re-U))):(j.sortIndex=ae,e(h,j),T||y||(T=!0,le(D))),j},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(j){var fe=S;return function(){var re=S;S=fe;try{return j.apply(this,arguments)}finally{S=re}}}})(Zc)),Zc}var xm;function pv(){return xm||(xm=1,Kc.exports=hv()),Kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function mv(){if(Sm)return zn;Sm=1;var s=Id(),e=pv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function S(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?S(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),j=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function ae(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Te=!1;function Xe(n,i){if(!n||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){u=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,I=m.length-1;1<=E&&0<=I&&d[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==m[I]){var B=`
`+d[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=I);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ae(n):""}function Ze(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case F:return"Portal";case A:return"Profiler";case W:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(n){var i=ke(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mt(n){n._valueTracker||(n._valueTracker=Ue(n))}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=ke(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Nt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ht(n,i){ut(n,i);var o=ye(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function k(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Gt(n,i,o){(i!=="number"||ht(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var gt=Array.isArray;function St(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function je(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(gt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ye(o)}}function M(n,i){var o=ye(i.value),u=ye(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){it.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Se(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function be(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Se(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Ge=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ce(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,Me=null,De=null;function ve(n){if(n=Ro(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fa(i),Ne(n.stateNode,n.type,i))}}function pe(n){Me?De?De.push(n):De=[n]:Me=n}function Re(){if(Me){var n=Me,i=De;if(De=Me=null,ve(n),i)for(n=0;n<i.length;n++)ve(i[n])}}function rt(n,i){return n(i)}function It(){}var yt=!1;function Gn(n,i,o){if(yt)return n(i,o);yt=!0;try{return rt(n,i,o)}finally{yt=!1,(Me!==null||De!==null)&&(It(),Re())}}function Cn(n,i){var o=n.stateNode;if(o===null)return null;var u=Fa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var oo=!1;if(f)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){oo=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{oo=!1}function ao(n,i,o,u,d,m,E,I,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(_e){this.onError(_e)}}var Nr=!1,Dr=null,Ir=!1,li=null,lo={onError:function(n){Nr=!0,Dr=n}};function ma(n,i,o,u,d,m,E,I,B){Nr=!1,Dr=null,ao.apply(lo,arguments)}function ga(n,i,o,u,d,m,E,I,B){if(ma.apply(this,arguments),Nr){if(Nr){var ie=Dr;Nr=!1,Dr=null}else throw Error(t(198));Ir||(Ir=!0,li=ie)}}function Kn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function uo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ur(n){if(Kn(n)!==n)throw Error(t(188))}function _a(n){var i=n.alternate;if(!i){if(i=Kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return Ur(d),n;if(m===u)return Ur(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,I=d.child;I;){if(I===o){E=!0,o=d,u=m;break}if(I===u){E=!0,u=d,o=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===o){E=!0,o=m,u=d;break}if(I===u){E=!0,u=m,o=d;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function co(n){return n=_a(n),n!==null?va(n):null}function va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=va(n);if(i!==null)return i;n=n.sibling}return null}var xa=e.unstable_scheduleCallback,Sa=e.unstable_cancelCallback,gu=e.unstable_shouldYield,_u=e.unstable_requestPaint,Xt=e.unstable_now,C=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,$=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Fe=null,Ae=null;function He(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Fe,n,void 0,(n.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ft,nt=Math.log,Qe=Math.LN2;function ft(n){return n>>>=0,n===0?32:31-(nt(n)/Qe|0)|0}var Mt=64,Bt=4194304;function Ot(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~d;I!==0?u=Ot(I):(m&=E,m!==0&&(u=Ot(m)))}else E=o&~d,E!==0?u=Ot(E):m!==0&&(u=Ot(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Be(i),d=1<<o,u|=n[o],i&=~d;return u}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Be(m),I=1<<E,B=d[E];B===-1?((I&o)===0||(I&u)!==0)&&(d[E]=Je(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function _t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function Si(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Be(i),n[i]=o}function Fr(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Be(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function Dt(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Be(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var at=0;function Rn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ln,un,ds,yi,Kd,vu=!1,ya=[],nr=null,ir=null,rr=null,fo=new Map,ho=new Map,sr=[],P_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ro(i),i!==null&&un(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function L_(n,i,o,u,d){switch(i){case"focusin":return nr=po(nr,n,i,o,u,d),!0;case"dragenter":return ir=po(ir,n,i,o,u,d),!0;case"mouseover":return rr=po(rr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return fo.set(m,po(fo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ho.set(m,po(ho.get(m)||null,n,i,o,u,d)),!0}return!1}function Qd(n){var i=Or(n.target);if(i!==null){var o=Kn(i);if(o!==null){if(i=o.tag,i===13){if(i=uo(o),i!==null){n.blockedOn=i,Kd(n.priority,function(){ds(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Su(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);lt=u,o.target.dispatchEvent(u),lt=null}else return i=Ro(o),i!==null&&un(i),n.blockedOn=o,!1;i.shift()}return!0}function Jd(n,i,o){Ma(n)&&o.delete(i)}function N_(){vu=!1,nr!==null&&Ma(nr)&&(nr=null),ir!==null&&Ma(ir)&&(ir=null),rr!==null&&Ma(rr)&&(rr=null),fo.forEach(Jd),ho.forEach(Jd)}function mo(n,i){n.blockedOn===i&&(n.blockedOn=null,vu||(vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,N_)))}function go(n){function i(d){return mo(d,n)}if(0<ya.length){mo(ya[0],n);for(var o=1;o<ya.length;o++){var u=ya[o];u.blockedOn===n&&(u.blockedOn=null)}}for(nr!==null&&mo(nr,n),ir!==null&&mo(ir,n),rr!==null&&mo(rr,n),fo.forEach(i),ho.forEach(i),o=0;o<sr.length;o++)u=sr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)Qd(o),o.blockedOn===null&&sr.shift()}var hs=L.ReactCurrentBatchConfig,Ea=!0;function D_(n,i,o,u){var d=at,m=hs.transition;hs.transition=null;try{at=1,xu(n,i,o,u)}finally{at=d,hs.transition=m}}function I_(n,i,o,u){var d=at,m=hs.transition;hs.transition=null;try{at=4,xu(n,i,o,u)}finally{at=d,hs.transition=m}}function xu(n,i,o,u){if(Ea){var d=Su(n,i,o,u);if(d===null)Ou(n,i,u,Ta,o),Zd(n,u);else if(L_(d,n,i,o,u))u.stopPropagation();else if(Zd(n,u),i&4&&-1<P_.indexOf(n)){for(;d!==null;){var m=Ro(d);if(m!==null&&ln(m),m=Su(n,i,o,u),m===null&&Ou(n,i,u,Ta,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Ou(n,i,u,null,o)}}var Ta=null;function Su(n,i,o,u){if(Ta=null,n=V(u),n=Or(n),n!==null)if(i=Kn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=uo(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ta=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C()){case X:return 1;case se:return 4;case te:case $:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var or=null,yu=null,wa=null;function th(){if(wa)return wa;var n,i=yu,o=i.length,u,d="value"in or?or.value:or.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return wa=d.slice(n,1<u?1-u:void 0)}function Aa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ca(){return!0}function nh(){return!1}function Wn(n){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ca:nh,this.isPropagationStopped=nh,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Wn(ps),_o=re({},ps,{view:0,detail:0}),U_=Wn(_o),Eu,Tu,vo,Ra=re({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(Eu=n.screenX-vo.screenX,Tu=n.screenY-vo.screenY):Tu=Eu=0,vo=n),Eu)},movementY:function(n){return"movementY"in n?n.movementY:Tu}}),ih=Wn(Ra),F_=re({},Ra,{dataTransfer:0}),O_=Wn(F_),B_=re({},_o,{relatedTarget:0}),wu=Wn(B_),k_=re({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Wn(k_),V_=re({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),H_=Wn(V_),G_=re({},ps,{data:0}),rh=Wn(G_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j_[n])?!!i[n]:!1}function Au(){return q_}var Y_=re({},_o,{key:function(n){if(n.key){var i=W_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Aa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(n){return n.type==="keypress"?Aa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Aa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$_=Wn(Y_),K_=re({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=Wn(K_),Z_=re({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Q_=Wn(Z_),J_=re({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=Wn(J_),t0=re({},Ra,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Wn(t0),i0=[9,13,27,32],Cu=f&&"CompositionEvent"in window,xo=null;f&&"documentMode"in document&&(xo=document.documentMode);var r0=f&&"TextEvent"in window&&!xo,oh=f&&(!Cu||xo&&8<xo&&11>=xo),ah=" ",lh=!1;function uh(n,i){switch(n){case"keyup":return i0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ch(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function s0(n,i){switch(n){case"compositionend":return ch(i);case"keypress":return i.which!==32?null:(lh=!0,ah);case"textInput":return n=i.data,n===ah&&lh?null:n;default:return null}}function o0(n,i){if(ms)return n==="compositionend"||!Cu&&uh(n,i)?(n=th(),wa=yu=or=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!a0[n.type]:i==="textarea"}function dh(n,i,o,u){pe(u),i=Da(i,"onChange"),0<i.length&&(o=new Mu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var So=null,yo=null;function l0(n){Ph(n,0)}function ba(n){var i=Ss(n);if(Kt(i))return n}function u0(n,i){if(n==="change")return i}var hh=!1;if(f){var Ru;if(f){var bu="oninput"in document;if(!bu){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),bu=typeof ph.oninput=="function"}Ru=bu}else Ru=!1;hh=Ru&&(!document.documentMode||9<document.documentMode)}function mh(){So&&(So.detachEvent("onpropertychange",gh),yo=So=null)}function gh(n){if(n.propertyName==="value"&&ba(yo)){var i=[];dh(i,yo,n,V(n)),Gn(l0,i)}}function c0(n,i,o){n==="focusin"?(mh(),So=i,yo=o,So.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function f0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ba(yo)}function d0(n,i){if(n==="click")return ba(i)}function h0(n,i){if(n==="input"||n==="change")return ba(i)}function p0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:p0;function Mo(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ui(n[d],i[d]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vh(n,i){var o=_h(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_h(o)}}function xh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?xh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Sh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ht(n.document)}return i}function Pu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function m0(n){var i=Sh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&xh(o.ownerDocument.documentElement,o)){if(u!==null&&Pu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=vh(o,m);var E=vh(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g0=f&&"documentMode"in document&&11>=document.documentMode,gs=null,Lu=null,Eo=null,Nu=!1;function yh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nu||gs==null||gs!==ht(u)||(u=gs,"selectionStart"in u&&Pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Eo&&Mo(Eo,u)||(Eo=u,u=Da(Lu,"onSelect"),0<u.length&&(i=new Mu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=gs)))}function Pa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var _s={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Du={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function La(n){if(Du[n])return Du[n];if(!_s[n])return n;var i=_s[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Mh)return Du[n]=i[o];return n}var Eh=La("animationend"),Th=La("animationiteration"),wh=La("animationstart"),Ah=La("transitionend"),Ch=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,i){Ch.set(n,i),l(i,[n])}for(var Iu=0;Iu<Rh.length;Iu++){var Uu=Rh[Iu],_0=Uu.toLowerCase(),v0=Uu[0].toUpperCase()+Uu.slice(1);ar(_0,"on"+v0)}ar(Eh,"onAnimationEnd"),ar(Th,"onAnimationIteration"),ar(wh,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(Ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function bh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ga(u,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var I=u[E],B=I.instance,ie=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;bh(d,I,ie),m=B}else for(E=0;E<u.length;E++){if(I=u[E],B=I.instance,ie=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;bh(d,I,ie),m=B}}}if(Ir)throw n=li,Ir=!1,li=null,n}function zt(n,i){var o=i[Gu];o===void 0&&(o=i[Gu]=new Set);var u=n+"__bubble";o.has(u)||(Lh(i,n,2,!1),o.add(u))}function Fu(n,i,o){var u=0;i&&(u|=4),Lh(o,n,u,i)}var Na="_reactListening"+Math.random().toString(36).slice(2);function wo(n){if(!n[Na]){n[Na]=!0,r.forEach(function(o){o!=="selectionchange"&&(x0.has(o)||Fu(o,!1,n),Fu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Na]||(i[Na]=!0,Fu("selectionchange",!1,i))}}function Lh(n,i,o,u){switch(eh(i)){case 1:var d=D_;break;case 4:d=I_;break;default:d=xu}o=d.bind(null,i,o,n),d=void 0,!oo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Ou(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Or(I),E===null)return;if(B=E.tag,B===5||B===6){u=m=E;continue e}I=I.parentNode}}u=u.return}Gn(function(){var ie=m,_e=V(o),xe=[];e:{var ge=Ch.get(n);if(ge!==void 0){var Oe=Mu,We=n;switch(n){case"keypress":if(Aa(o)===0)break e;case"keydown":case"keyup":Oe=$_;break;case"focusin":We="focus",Oe=wu;break;case"focusout":We="blur",Oe=wu;break;case"beforeblur":case"afterblur":Oe=wu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Q_;break;case Eh:case Th:case wh:Oe=z_;break;case Ah:Oe=e0;break;case"scroll":Oe=U_;break;case"wheel":Oe=n0;break;case"copy":case"cut":case"paste":Oe=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=sh}var Ye=(i&4)!==0,Zt=!Ye&&n==="scroll",Y=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var H=ie,Q;H!==null;){Q=H;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,Y!==null&&(Ee=Cn(H,Y),Ee!=null&&Ye.push(Ao(H,Ee,Q)))),Zt)break;H=H.return}0<Ye.length&&(ge=new Oe(ge,We,null,o,_e),xe.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ge&&o!==lt&&(We=o.relatedTarget||o.fromElement)&&(Or(We)||We[Ui]))break e;if((Oe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(We=o.relatedTarget||o.toElement,Oe=ie,We=We?Or(We):null,We!==null&&(Zt=Kn(We),We!==Zt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ie),Oe!==We)){if(Ye=ih,Ee="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=sh,Ee="onPointerLeave",Y="onPointerEnter",H="pointer"),Zt=Oe==null?ge:Ss(Oe),Q=We==null?ge:Ss(We),ge=new Ye(Ee,H+"leave",Oe,o,_e),ge.target=Zt,ge.relatedTarget=Q,Ee=null,Or(_e)===ie&&(Ye=new Ye(Y,H+"enter",We,o,_e),Ye.target=Q,Ye.relatedTarget=Zt,Ee=Ye),Zt=Ee,Oe&&We)t:{for(Ye=Oe,Y=We,H=0,Q=Ye;Q;Q=vs(Q))H++;for(Q=0,Ee=Y;Ee;Ee=vs(Ee))Q++;for(;0<H-Q;)Ye=vs(Ye),H--;for(;0<Q-H;)Y=vs(Y),Q--;for(;H--;){if(Ye===Y||Y!==null&&Ye===Y.alternate)break t;Ye=vs(Ye),Y=vs(Y)}Ye=null}else Ye=null;Oe!==null&&Nh(xe,ge,Oe,Ye,!1),We!==null&&Zt!==null&&Nh(xe,Zt,We,Ye,!0)}}e:{if(ge=ie?Ss(ie):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ke=u0;else if(fh(ge))if(hh)Ke=h0;else{Ke=f0;var et=c0}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=d0);if(Ke&&(Ke=Ke(n,ie))){dh(xe,Ke,o,_e);break e}et&&et(n,ge,ie),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Gt(ge,"number",ge.value)}switch(et=ie?Ss(ie):window,n){case"focusin":(fh(et)||et.contentEditable==="true")&&(gs=et,Lu=ie,Eo=null);break;case"focusout":Eo=Lu=gs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,yh(xe,o,_e);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":yh(xe,o,_e)}var tt;if(Cu)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ms?uh(n,o)&&(st="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(oh&&o.locale!=="ko"&&(ms||st!=="onCompositionStart"?st==="onCompositionEnd"&&ms&&(tt=th()):(or=_e,yu="value"in or?or.value:or.textContent,ms=!0)),et=Da(ie,st),0<et.length&&(st=new rh(st,n,null,o,_e),xe.push({event:st,listeners:et}),tt?st.data=tt:(tt=ch(o),tt!==null&&(st.data=tt)))),(tt=r0?s0(n,o):o0(n,o))&&(ie=Da(ie,"onBeforeInput"),0<ie.length&&(_e=new rh("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:ie}),_e.data=tt))}Ph(xe,i)})}function Ao(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Da(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Cn(n,o),m!=null&&u.unshift(Ao(n,m,d)),m=Cn(n,i),m!=null&&u.push(Ao(n,m,d))),n=n.return}return u}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var I=o,B=I.alternate,ie=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&ie!==null&&(I=ie,d?(B=Cn(o,m),B!=null&&E.unshift(Ao(o,B,I))):d||(B=Cn(o,m),B!=null&&E.push(Ao(o,B,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var S0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function Dh(n){return(typeof n=="string"?n:""+n).replace(S0,`
`).replace(y0,"")}function Ia(n,i,o){if(i=Dh(i),Dh(n)!==i&&o)throw Error(t(425))}function Ua(){}var Bu=null,ku=null;function zu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(n){return Ih.resolve(null).then(n).catch(T0)}:Vu;function T0(n){setTimeout(function(){throw n})}function Hu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),go(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);go(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Uh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+xs,Co="__reactProps$"+xs,Ui="__reactContainer$"+xs,Gu="__reactEvents$"+xs,w0="__reactListeners$"+xs,A0="__reactHandles$"+xs;function Or(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ui]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Uh(n);n!==null;){if(o=n[Mi])return o;n=Uh(n)}return i}n=o,o=n.parentNode}return null}function Ro(n){return n=n[Mi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fa(n){return n[Co]||null}var Wu=[],ys=-1;function ur(n){return{current:n}}function Vt(n){0>ys||(n.current=Wu[ys],Wu[ys]=null,ys--)}function kt(n,i){ys++,Wu[ys]=n.current,n.current=i}var cr={},vn=ur(cr),Un=ur(!1),Br=cr;function Ms(n,i){var o=n.type.contextTypes;if(!o)return cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Fn(n){return n=n.childContextTypes,n!=null}function Oa(){Vt(Un),Vt(vn)}function Fh(n,i,o){if(vn.current!==cr)throw Error(t(168));kt(vn,i),kt(Un,o)}function Oh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,de(n)||"Unknown",d));return re({},o,u)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Br=vn.current,kt(vn,n),kt(Un,Un.current),!0}function Bh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Oh(n,i,Br),u.__reactInternalMemoizedMergedChildContext=n,Vt(Un),Vt(vn),kt(vn,n)):Vt(Un),kt(Un,o)}var Fi=null,ka=!1,Xu=!1;function kh(n){Fi===null?Fi=[n]:Fi.push(n)}function C0(n){ka=!0,kh(n)}function fr(){if(!Xu&&Fi!==null){Xu=!0;var n=0,i=at;try{var o=Fi;for(at=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Fi=null,ka=!1}catch(d){throw Fi!==null&&(Fi=Fi.slice(n+1)),xa(X,fr),d}finally{at=i,Xu=!1}}return null}var Es=[],Ts=0,za=null,Va=0,Zn=[],Qn=0,kr=null,Oi=1,Bi="";function zr(n,i){Es[Ts++]=Va,Es[Ts++]=za,za=n,Va=i}function zh(n,i,o){Zn[Qn++]=Oi,Zn[Qn++]=Bi,Zn[Qn++]=kr,kr=n;var u=Oi;n=Bi;var d=32-Be(u)-1;u&=~(1<<d),o+=1;var m=32-Be(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Oi=1<<32-Be(i)+d|o<<d|u,Bi=m+n}else Oi=1<<m|o<<d|u,Bi=n}function ju(n){n.return!==null&&(zr(n,1),zh(n,1,0))}function qu(n){for(;n===za;)za=Es[--Ts],Es[Ts]=null,Va=Es[--Ts],Es[Ts]=null;for(;n===kr;)kr=Zn[--Qn],Zn[Qn]=null,Bi=Zn[--Qn],Zn[Qn]=null,Oi=Zn[--Qn],Zn[Qn]=null}var Xn=null,jn=null,Wt=!1,ci=null;function Vh(n,i){var o=ni(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Hh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,jn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=kr!==null?{id:Oi,overflow:Bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ni(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Xn=n,jn=null,!0):!1;default:return!1}}function Yu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $u(n){if(Wt){var i=jn;if(i){var o=i;if(!Hh(n,i)){if(Yu(n))throw Error(t(418));i=lr(o.nextSibling);var u=Xn;i&&Hh(n,i)?Vh(u,o):(n.flags=n.flags&-4097|2,Wt=!1,Xn=n)}}else{if(Yu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Xn=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Ha(n){if(n!==Xn)return!1;if(!Wt)return Gh(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zu(n.type,n.memoizedProps)),i&&(i=jn)){if(Yu(n))throw Wh(),Error(t(418));for(;i;)Vh(n,i),i=lr(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){jn=lr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Xn?lr(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=jn;n;)n=lr(n.nextSibling)}function ws(){jn=Xn=null,Wt=!1}function Ku(n){ci===null?ci=[n]:ci.push(n)}var R0=L.ReactCurrentBatchConfig;function bo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=d.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ga(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function jh(n){function i(Y,H){if(n){var Q=Y.deletions;Q===null?(Y.deletions=[H],Y.flags|=16):Q.push(H)}}function o(Y,H){if(!n)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function u(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function d(Y,H){return Y=xr(Y,H),Y.index=0,Y.sibling=null,Y}function m(Y,H,Q){return Y.index=Q,n?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<H?(Y.flags|=2,H):Q):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,H,Q,Ee){return H===null||H.tag!==6?(H=Vc(Q,Y.mode,Ee),H.return=Y,H):(H=d(H,Q),H.return=Y,H)}function B(Y,H,Q,Ee){var Ke=Q.type;return Ke===O?_e(Y,H,Q.props.children,Ee,Q.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&Xh(Ke)===H.type)?(Ee=d(H,Q.props),Ee.ref=bo(Y,H,Q),Ee.return=Y,Ee):(Ee=hl(Q.type,Q.key,Q.props,null,Y.mode,Ee),Ee.ref=bo(Y,H,Q),Ee.return=Y,Ee)}function ie(Y,H,Q,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Hc(Q,Y.mode,Ee),H.return=Y,H):(H=d(H,Q.children||[]),H.return=Y,H)}function _e(Y,H,Q,Ee,Ke){return H===null||H.tag!==7?(H=Yr(Q,Y.mode,Ee,Ke),H.return=Y,H):(H=d(H,Q),H.return=Y,H)}function xe(Y,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Vc(""+H,Y.mode,Q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return Q=hl(H.type,H.key,H.props,null,Y.mode,Q),Q.ref=bo(Y,null,H),Q.return=Y,Q;case F:return H=Hc(H,Y.mode,Q),H.return=Y,H;case le:var Ee=H._init;return xe(Y,Ee(H._payload),Q)}if(gt(H)||fe(H))return H=Yr(H,Y.mode,Q,null),H.return=Y,H;Ga(Y,H)}return null}function ge(Y,H,Q,Ee){var Ke=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ke!==null?null:I(Y,H,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:return Q.key===Ke?B(Y,H,Q,Ee):null;case F:return Q.key===Ke?ie(Y,H,Q,Ee):null;case le:return Ke=Q._init,ge(Y,H,Ke(Q._payload),Ee)}if(gt(Q)||fe(Q))return Ke!==null?null:_e(Y,H,Q,Ee,null);Ga(Y,Q)}return null}function Oe(Y,H,Q,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(Q)||null,I(H,Y,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return Y=Y.get(Ee.key===null?Q:Ee.key)||null,B(H,Y,Ee,Ke);case F:return Y=Y.get(Ee.key===null?Q:Ee.key)||null,ie(H,Y,Ee,Ke);case le:var et=Ee._init;return Oe(Y,H,Q,et(Ee._payload),Ke)}if(gt(Ee)||fe(Ee))return Y=Y.get(Q)||null,_e(H,Y,Ee,Ke,null);Ga(H,Ee)}return null}function We(Y,H,Q,Ee){for(var Ke=null,et=null,tt=H,st=H=0,dn=null;tt!==null&&st<Q.length;st++){tt.index>st?(dn=tt,tt=null):dn=tt.sibling;var At=ge(Y,tt,Q[st],Ee);if(At===null){tt===null&&(tt=dn);break}n&&tt&&At.alternate===null&&i(Y,tt),H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At,tt=dn}if(st===Q.length)return o(Y,tt),Wt&&zr(Y,st),Ke;if(tt===null){for(;st<Q.length;st++)tt=xe(Y,Q[st],Ee),tt!==null&&(H=m(tt,H,st),et===null?Ke=tt:et.sibling=tt,et=tt);return Wt&&zr(Y,st),Ke}for(tt=u(Y,tt);st<Q.length;st++)dn=Oe(tt,Y,st,Q[st],Ee),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?st:dn.key),H=m(dn,H,st),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(Sr){return i(Y,Sr)}),Wt&&zr(Y,st),Ke}function Ye(Y,H,Q,Ee){var Ke=fe(Q);if(typeof Ke!="function")throw Error(t(150));if(Q=Ke.call(Q),Q==null)throw Error(t(151));for(var et=Ke=null,tt=H,st=H=0,dn=null,At=Q.next();tt!==null&&!At.done;st++,At=Q.next()){tt.index>st?(dn=tt,tt=null):dn=tt.sibling;var Sr=ge(Y,tt,At.value,Ee);if(Sr===null){tt===null&&(tt=dn);break}n&&tt&&Sr.alternate===null&&i(Y,tt),H=m(Sr,H,st),et===null?Ke=Sr:et.sibling=Sr,et=Sr,tt=dn}if(At.done)return o(Y,tt),Wt&&zr(Y,st),Ke;if(tt===null){for(;!At.done;st++,At=Q.next())At=xe(Y,At.value,Ee),At!==null&&(H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At);return Wt&&zr(Y,st),Ke}for(tt=u(Y,tt);!At.done;st++,At=Q.next())At=Oe(tt,Y,st,At.value,Ee),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?st:At.key),H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At);return n&&tt.forEach(function(av){return i(Y,av)}),Wt&&zr(Y,st),Ke}function Zt(Y,H,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:e:{for(var Ke=Q.key,et=H;et!==null;){if(et.key===Ke){if(Ke=Q.type,Ke===O){if(et.tag===7){o(Y,et.sibling),H=d(et,Q.props.children),H.return=Y,Y=H;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&Xh(Ke)===et.type){o(Y,et.sibling),H=d(et,Q.props),H.ref=bo(Y,et,Q),H.return=Y,Y=H;break e}o(Y,et);break}else i(Y,et);et=et.sibling}Q.type===O?(H=Yr(Q.props.children,Y.mode,Ee,Q.key),H.return=Y,Y=H):(Ee=hl(Q.type,Q.key,Q.props,null,Y.mode,Ee),Ee.ref=bo(Y,H,Q),Ee.return=Y,Y=Ee)}return E(Y);case F:e:{for(et=Q.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){o(Y,H.sibling),H=d(H,Q.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=Hc(Q,Y.mode,Ee),H.return=Y,Y=H}return E(Y);case le:return et=Q._init,Zt(Y,H,et(Q._payload),Ee)}if(gt(Q))return We(Y,H,Q,Ee);if(fe(Q))return Ye(Y,H,Q,Ee);Ga(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(o(Y,H.sibling),H=d(H,Q),H.return=Y,Y=H):(o(Y,H),H=Vc(Q,Y.mode,Ee),H.return=Y,Y=H),E(Y)):o(Y,H)}return Zt}var As=jh(!0),qh=jh(!1),Wa=ur(null),Xa=null,Cs=null,Zu=null;function Qu(){Zu=Cs=Xa=null}function Ju(n){var i=Wa.current;Vt(Wa),n._currentValue=i}function ec(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Rs(n,i){Xa=n,Zu=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(Zu!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Xa===null)throw Error(t(308));Cs=n,Xa.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Vr=null;function tc(n){Vr===null?Vr=[n]:Vr.push(n)}function Yh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,tc(i)):(o.next=d.next,d.next=o),i.interleaved=o,ki(n,u)}function ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,ki(n,o)}return d=u.interleaved,d===null?(i.next=i,tc(u)):(i.next=d.next,d.next=i),u.interleaved=i,ki(n,o)}function ja(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Dt(n,o)}}function Kh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function qa(n,i,o,u){var d=n.updateQueue;dr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,ie=B.next;B.next=null,E===null?m=ie:E.next=ie,E=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ie:I.next=ie,_e.lastBaseUpdate=B))}if(m!==null){var xe=d.baseState;E=0,_e=ie=B=null,I=m;do{var ge=I.lane,Oe=I.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,Ye=I;switch(ge=i,Oe=o,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){xe=We.call(Oe,xe,ge);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,ge=typeof We=="function"?We.call(Oe,xe,ge):We,ge==null)break e;xe=re({},xe,ge);break e;case 2:dr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Oe={eventTime:Oe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ie=_e=Oe,B=xe):_e=_e.next=Oe,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(B=xe),d.baseState=B,d.firstBaseUpdate=ie,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Wr|=E,n.lanes=E,n.memoizedState=xe}}function Zh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Po={},Ei=ur(Po),Lo=ur(Po),No=ur(Po);function Hr(n){if(n===Po)throw Error(t(174));return n}function ic(n,i){switch(kt(No,i),kt(Lo,n),kt(Ei,Po),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Vt(Ei),kt(Ei,i)}function bs(){Vt(Ei),Vt(Lo),Vt(No)}function Qh(n){Hr(No.current);var i=Hr(Ei.current),o=me(i,n.type);i!==o&&(kt(Lo,n),kt(Ei,o))}function rc(n){Lo.current===n&&(Vt(Ei),Vt(Lo))}var jt=ur(0);function Ya(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sc=[];function oc(){for(var n=0;n<sc.length;n++)sc[n]._workInProgressVersionPrimary=null;sc.length=0}var $a=L.ReactCurrentDispatcher,ac=L.ReactCurrentBatchConfig,Gr=0,qt=null,rn=null,cn=null,Ka=!1,Do=!1,Io=0,b0=0;function xn(){throw Error(t(321))}function lc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ui(n[o],i[o]))return!1;return!0}function uc(n,i,o,u,d,m){if(Gr=m,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$a.current=n===null||n.memoizedState===null?D0:I0,n=o(u,d),Do){m=0;do{if(Do=!1,Io=0,25<=m)throw Error(t(301));m+=1,cn=rn=null,i.updateQueue=null,$a.current=U0,n=o(u,d)}while(Do)}if($a.current=Ja,i=rn!==null&&rn.next!==null,Gr=0,cn=rn=qt=null,Ka=!1,i)throw Error(t(300));return n}function cc(){var n=Io!==0;return Io=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?qt.memoizedState=cn=n:cn=cn.next=n,cn}function ei(){if(rn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=cn===null?qt.memoizedState:cn.next;if(i!==null)cn=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},cn===null?qt.memoizedState=cn=n:cn=cn.next=n}return cn}function Uo(n,i){return typeof i=="function"?i(n):i}function fc(n){var i=ei(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=rn,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=E=null,B=null,ie=m;do{var _e=ie.lane;if((Gr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var xe={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(I=B=xe,E=u):B=B.next=xe,qt.lanes|=_e,Wr|=_e}ie=ie.next}while(ie!==null&&ie!==m);B===null?E=u:B.next=I,ui(u,i.memoizedState)||(On=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,qt.lanes|=m,Wr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function dc(n){var i=ei(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ui(m,i.memoizedState)||(On=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Jh(){}function ep(n,i){var o=qt,u=ei(),d=i(),m=!ui(u.memoizedState,d);if(m&&(u.memoizedState=d,On=!0),u=u.queue,hc(ip.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Fo(9,np.bind(null,o,u,d,i),void 0,null),fn===null)throw Error(t(349));(Gr&30)!==0||tp(o,i,d)}return d}function tp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function np(n,i,o,u){i.value=o,i.getSnapshot=u,rp(i)&&sp(n)}function ip(n,i,o){return o(function(){rp(i)&&sp(n)})}function rp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ui(n,o)}catch{return!0}}function sp(n){var i=ki(n,1);i!==null&&pi(i,n,1,-1)}function op(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},i.queue=n,n=n.dispatch=N0.bind(null,qt,n),[i.memoizedState,n]}function Fo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function ap(){return ei().memoizedState}function Za(n,i,o,u){var d=Ti();qt.flags|=n,d.memoizedState=Fo(1|i,o,void 0,u===void 0?null:u)}function Qa(n,i,o,u){var d=ei();u=u===void 0?null:u;var m=void 0;if(rn!==null){var E=rn.memoizedState;if(m=E.destroy,u!==null&&lc(u,E.deps)){d.memoizedState=Fo(i,o,m,u);return}}qt.flags|=n,d.memoizedState=Fo(1|i,o,m,u)}function lp(n,i){return Za(8390656,8,n,i)}function hc(n,i){return Qa(2048,8,n,i)}function up(n,i){return Qa(4,2,n,i)}function cp(n,i){return Qa(4,4,n,i)}function fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dp(n,i,o){return o=o!=null?o.concat([n]):null,Qa(4,4,fp.bind(null,i,n),o)}function pc(){}function hp(n,i){var o=ei();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&lc(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function pp(n,i){var o=ei();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&lc(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function mp(n,i,o){return(Gr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=o):(ui(o,i)||(o=_n(),qt.lanes|=o,Wr|=o,n.baseState=!0),i)}function P0(n,i){var o=at;at=o!==0&&4>o?o:4,n(!0);var u=ac.transition;ac.transition={};try{n(!1),i()}finally{at=o,ac.transition=u}}function gp(){return ei().memoizedState}function L0(n,i,o){var u=_r(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},_p(n))vp(i,o);else if(o=Yh(n,i,o,u),o!==null){var d=Pn();pi(o,n,u,d),xp(o,i,u)}}function N0(n,i,o){var u=_r(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(_p(n))vp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,o);if(d.hasEagerState=!0,d.eagerState=I,ui(I,E)){var B=i.interleaved;B===null?(d.next=d,tc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=Yh(n,i,d,u),o!==null&&(d=Pn(),pi(o,n,u,d),xp(o,i,u))}}function _p(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function vp(n,i){Do=Ka=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function xp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Dt(n,o)}}var Ja={readContext:Jn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},D0={readContext:Jn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:lp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Za(4194308,4,fp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Za(4194308,4,n,i)},useInsertionEffect:function(n,i){return Za(4,2,n,i)},useMemo:function(n,i){var o=Ti();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ti();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=L0.bind(null,qt,n),[u.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:pc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=P0.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=qt,d=Ti();if(Wt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),fn===null)throw Error(t(349));(Gr&30)!==0||tp(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,lp(ip.bind(null,u,m,n),[n]),u.flags|=2048,Fo(9,np.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Ti(),i=fn.identifierPrefix;if(Wt){var o=Bi,u=Oi;o=(u&~(1<<32-Be(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Io++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=b0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},I0={readContext:Jn,useCallback:hp,useContext:Jn,useEffect:hc,useImperativeHandle:dp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:pp,useReducer:fc,useRef:ap,useState:function(){return fc(Uo)},useDebugValue:pc,useDeferredValue:function(n){var i=ei();return mp(i,rn.memoizedState,n)},useTransition:function(){var n=fc(Uo)[0],i=ei().memoizedState;return[n,i]},useMutableSource:Jh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},U0={readContext:Jn,useCallback:hp,useContext:Jn,useEffect:hc,useImperativeHandle:dp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:pp,useReducer:dc,useRef:ap,useState:function(){return dc(Uo)},useDebugValue:pc,useDeferredValue:function(n){var i=ei();return rn===null?i.memoizedState=n:mp(i,rn.memoizedState,n)},useTransition:function(){var n=dc(Uo)[0],i=ei().memoizedState;return[n,i]},useMutableSource:Jh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function fi(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function mc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var el={isMounted:function(n){return(n=n._reactInternals)?Kn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Pn(),d=_r(n),m=zi(u,d);m.payload=i,o!=null&&(m.callback=o),i=hr(n,m,d),i!==null&&(pi(i,n,d,u),ja(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Pn(),d=_r(n),m=zi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=hr(n,m,d),i!==null&&(pi(i,n,d,u),ja(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Pn(),u=_r(n),d=zi(o,u);d.tag=2,i!=null&&(d.callback=i),i=hr(n,d,u),i!==null&&(pi(i,n,u,o),ja(i,n,u))}};function Sp(n,i,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!Mo(o,u)||!Mo(d,m):!0}function yp(n,i,o){var u=!1,d=cr,m=i.contextType;return typeof m=="object"&&m!==null?m=Jn(m):(d=Fn(i)?Br:vn.current,u=i.contextTypes,m=(u=u!=null)?Ms(n,d):cr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function gc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},nc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Jn(m):(m=Fn(i)?Br:vn.current,d.context=Ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(mc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&el.enqueueReplaceState(d,d.state,null),qa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var o="",u=i;do o+=Ze(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function _c(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function vc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,o){o=zi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){al||(al=!0,Dc=u),vc(n,i)},o}function Tp(n,i,o){o=zi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){vc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){vc(n,i),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function wp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new F0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=K0.bind(null,n,i,o),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=zi(-1,1),i.tag=2,hr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var O0=L.ReactCurrentOwner,On=!1;function bn(n,i,o,u){i.child=n===null?qh(i,null,o,u):As(i,n.child,o,u)}function Rp(n,i,o,u,d){o=o.render;var m=i.ref;return Rs(i,d),u=uc(n,i,o,u,m,d),o=cc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Vi(n,i,d)):(Wt&&o&&ju(i),i.flags|=1,bn(n,i,u,d),i.child)}function bp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!zc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Pp(n,i,m,u,d)):(n=hl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Mo,o(E,u)&&n.ref===i.ref)return Vi(n,i,d)}return i.flags|=1,n=xr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Pp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Mo(m,u)&&n.ref===i.ref)if(On=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,Vi(n,i,d)}return xc(n,i,o,u,d)}function Lp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ns,qn),qn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ns,qn),qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,kt(Ns,qn),qn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,kt(Ns,qn),qn|=u;return bn(n,i,d,o),i.child}function Np(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function xc(n,i,o,u,d){var m=Fn(o)?Br:vn.current;return m=Ms(i,m),Rs(i,d),o=uc(n,i,o,u,m,d),u=cc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Vi(n,i,d)):(Wt&&u&&ju(i),i.flags|=1,bn(n,i,o,d),i.child)}function Dp(n,i,o,u,d){if(Fn(o)){var m=!0;Ba(i)}else m=!1;if(Rs(i,d),i.stateNode===null)nl(n,i),yp(i,o,u),gc(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Jn(ie):(ie=Fn(o)?Br:vn.current,ie=Ms(i,ie));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||B!==ie)&&Mp(i,E,u,ie),dr=!1;var ge=i.memoizedState;E.state=ge,qa(i,u,E,d),B=i.memoizedState,I!==u||ge!==B||Un.current||dr?(typeof _e=="function"&&(mc(i,o,_e,u),B=i.memoizedState),(I=dr||Sp(i,o,I,u,ge,B,ie))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),E.props=u,E.state=B,E.context=ie,u=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,$h(n,i),I=i.memoizedProps,ie=i.type===i.elementType?I:fi(i.type,I),E.props=ie,xe=i.pendingProps,ge=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=Jn(B):(B=Fn(o)?Br:vn.current,B=Ms(i,B));var Oe=o.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||ge!==B)&&Mp(i,E,u,B),dr=!1,ge=i.memoizedState,E.state=ge,qa(i,u,E,d);var We=i.memoizedState;I!==xe||ge!==We||Un.current||dr?(typeof Oe=="function"&&(mc(i,o,Oe,u),We=i.memoizedState),(ie=dr||Sp(i,o,ie,u,ge,We,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,We,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,We,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=We),E.props=u,E.state=We,E.context=B,u=ie):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return Sc(n,i,o,u,m,d)}function Sc(n,i,o,u,d,m){Np(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&Bh(i,o,!1),Vi(n,i,m);u=i.stateNode,O0.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=As(i,n.child,null,m),i.child=As(i,null,I,m)):bn(n,i,I,m),i.memoizedState=u.state,d&&Bh(i,o,!0),i.child}function Ip(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),ic(n,i.containerInfo)}function Up(n,i,o,u,d){return ws(),Ku(d),i.flags|=256,bn(n,i,o,u),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Mc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,o){var u=i.pendingProps,d=jt.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(jt,d&1),n===null)return $u(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=pl(E,u,0,null),n=Yr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Mc(o),i.memoizedState=yc,n):Ec(i,E));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return B0(n,i,E,u,I,d,o);if(m){m=u.fallback,E=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=xr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=xr(I,m):(m=Yr(m,E,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?Mc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=yc,u}return m=n.child,n=m.sibling,u=xr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Ec(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,o,u){return u!==null&&Ku(u),As(i,n.child,null,o),n=Ec(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function B0(n,i,o,u,d,m,E){if(o)return i.flags&256?(i.flags&=-257,u=_c(Error(t(422))),tl(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=pl({mode:"visible",children:u.children},d,0,null),m=Yr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&As(i,n.child,null,E),i.child.memoizedState=Mc(E),i.memoizedState=yc,m);if((i.mode&1)===0)return tl(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=_c(m,u,void 0),tl(n,i,E,u)}if(I=(E&n.childLanes)!==0,On||I){if(u=fn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,ki(n,d),pi(u,n,d,-1))}return kc(),u=_c(Error(t(421))),tl(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Z0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,jn=lr(d.nextSibling),Xn=i,Wt=!0,ci=null,n!==null&&(Zn[Qn++]=Oi,Zn[Qn++]=Bi,Zn[Qn++]=kr,Oi=n.id,Bi=n.overflow,kr=i),i=Ec(i,u.children),i.flags|=4096,i)}function Op(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ec(n.return,i,o)}function Tc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Bp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(bn(n,i,u.children,o),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,o,i);else if(n.tag===19)Op(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ya(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Tc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ya(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Tc(i,!0,o,null,m);break;case"together":Tc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Vi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Wr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=xr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=xr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function k0(n,i,o){switch(i.tag){case 3:Ip(i),ws();break;case 5:Qh(i);break;case 1:Fn(i.type)&&Ba(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;kt(Wa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(jt,jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Fp(n,i,o):(kt(jt,jt.current&1),n=Vi(n,i,o),n!==null?n.sibling:null);kt(jt,jt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Bp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,o)}return Vi(n,i,o)}var kp,wc,zp,Vp;kp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wc=function(){},zp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Hr(Ei.current);var m=null;switch(o){case"input":d=xt(n,d),u=xt(n,u),m=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),m=[];break;case"textarea":d=je(n,d),u=je(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ua)}qe(o,u);var E;o=null;for(ie in d)if(!u.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?m||(m=[]):(m=m||[]).push(ie,null));for(ie in u){var B=u[ie];if(I=d!=null?d[ie]:void 0,u.hasOwnProperty(ie)&&B!==I&&(B!=null||I!=null))if(ie==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(m||(m=[]),m.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&zt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(ie,B))}o&&(m=m||[]).push("style",o);var ie=m;(i.updateQueue=ie)&&(i.flags|=4)}},Vp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Oo(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function z0(n,i,o){var u=i.pendingProps;switch(qu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return Fn(i.type)&&Oa(),Sn(i),null;case 3:return u=i.stateNode,bs(),Vt(Un),Vt(vn),oc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ha(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(Fc(ci),ci=null))),wc(n,i),Sn(i),null;case 5:rc(i);var d=Hr(No.current);if(o=i.type,n!==null&&i.stateNode!=null)zp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Sn(i),null}if(n=Hr(Ei.current),Ha(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Mi]=i,u[Co]=m,n=(i.mode&1)!==0,o){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(d=0;d<To.length;d++)zt(To[d],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Nt(u,m),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},zt("invalid",u);break;case"textarea":N(u,m),zt("invalid",u)}qe(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ia(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ia(u.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&zt("scroll",u)}switch(o){case"input":mt(u),k(u,m,!0);break;case"textarea":mt(u),G(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ua)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[Mi]=i,n[Co]=u,kp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ce(o,u),o){case"dialog":zt("cancel",n),zt("close",n),d=u;break;case"iframe":case"object":case"embed":zt("load",n),d=u;break;case"video":case"audio":for(d=0;d<To.length;d++)zt(To[d],n);d=u;break;case"source":zt("error",n),d=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),d=u;break;case"details":zt("toggle",n),d=u;break;case"input":Nt(n,u),d=xt(n,u),zt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),zt("invalid",n);break;case"textarea":N(n,u),d=je(n,u),zt("invalid",n);break;default:d=u}qe(o,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?be(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(n,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&we(n,B):typeof B=="number"&&we(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&zt("scroll",n):B!=null&&P(n,m,B,E))}switch(o){case"input":mt(n),k(n,u,!1);break;case"textarea":mt(n),G(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ye(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?St(n,!!u.multiple,m,!1):u.defaultValue!=null&&St(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ua)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Hr(No.current),Hr(Ei.current),Ha(i)){if(u=i.stateNode,o=i.memoizedProps,u[Mi]=i,(m=u.nodeValue!==o)&&(n=Xn,n!==null))switch(n.tag){case 3:Ia(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Mi]=i,i.stateNode=u}return Sn(i),null;case 13:if(Vt(jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),ws(),i.flags|=98560,m=!1;else if(m=Ha(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),m=!1}else ci!==null&&(Fc(ci),ci=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?sn===0&&(sn=3):kc())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return bs(),wc(n,i),n===null&&wo(i.stateNode.containerInfo),Sn(i),null;case 10:return Ju(i.type._context),Sn(i),null;case 17:return Fn(i.type)&&Oa(),Sn(i),null;case 19:if(Vt(jt),m=i.memoizedState,m===null)return Sn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Oo(m,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ya(n),E!==null){for(i.flags|=128,Oo(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return kt(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xt()>Ds&&(i.flags|=128,u=!0,Oo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ya(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Oo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Wt)return Sn(i),null}else 2*Xt()-m.renderingStartTime>Ds&&o!==1073741824&&(i.flags|=128,u=!0,Oo(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xt(),i.sibling=null,o=jt.current,kt(jt,u?o&1|2:o&1),i):(Sn(i),null);case 22:case 23:return Bc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(qn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function V0(n,i){switch(qu(i),i.tag){case 1:return Fn(i.type)&&Oa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),Vt(Un),Vt(vn),oc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return rc(i),null;case 13:if(Vt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(jt),null;case 4:return bs(),null;case 10:return Ju(i.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var il=!1,yn=!1,H0=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ls(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Yt(n,i,u)}else o.current=null}function Ac(n,i,o){try{o()}catch(u){Yt(n,i,u)}}var Hp=!1;function G0(n,i){if(Bu=Ea,n=Sh(),Pu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,I=-1,B=-1,ie=0,_e=0,xe=n,ge=null;t:for(;;){for(var Oe;xe!==o||d!==0&&xe.nodeType!==3||(I=E+d),xe!==m||u!==0&&xe.nodeType!==3||(B=E+u),xe.nodeType===3&&(E+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)ge=xe,xe=Oe;for(;;){if(xe===n)break t;if(ge===o&&++ie===d&&(I=E),ge===m&&++_e===u&&(B=E),(Oe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Oe}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(ku={focusedElem:n,selectionRange:o},Ea=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,Zt=We.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:fi(i.type,Ye),Zt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return We=Hp,Hp=!1,We}function Bo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Ac(i,o,m)}d=d.next}while(d!==u)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Cc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[Co],delete i[Gu],delete i[w0],delete i[A0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Rc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ua));else if(u!==4&&(n=n.child,n!==null))for(Rc(n,i,o),n=n.sibling;n!==null;)Rc(n,i,o),n=n.sibling}function bc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(bc(n,i,o),n=n.sibling;n!==null;)bc(n,i,o),n=n.sibling}var pn=null,di=!1;function pr(n,i,o){for(o=o.child;o!==null;)jp(n,i,o),o=o.sibling}function jp(n,i,o){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 5:yn||Ls(o,i);case 6:var u=pn,d=di;pn=null,pr(n,i,o),pn=u,di=d,pn!==null&&(di?(n=pn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):pn.removeChild(o.stateNode));break;case 18:pn!==null&&(di?(n=pn,o=o.stateNode,n.nodeType===8?Hu(n.parentNode,o):n.nodeType===1&&Hu(n,o),go(n)):Hu(pn,o.stateNode));break;case 4:u=pn,d=di,pn=o.stateNode.containerInfo,di=!0,pr(n,i,o),pn=u,di=d;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Ac(o,i,E),d=d.next}while(d!==u)}pr(n,i,o);break;case 1:if(!yn&&(Ls(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Yt(o,i,I)}pr(n,i,o);break;case 21:pr(n,i,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,pr(n,i,o),yn=u):pr(n,i,o);break;default:pr(n,i,o)}}function qp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new H0),i.forEach(function(u){var d=Q0.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function hi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,di=!1;break e;case 3:pn=I.stateNode.containerInfo,di=!0;break e;case 4:pn=I.stateNode.containerInfo,di=!0;break e}I=I.return}if(pn===null)throw Error(t(160));jp(m,E,d),pn=null,di=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ie){Yt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Yp(i,n),i=i.sibling}function Yp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(i,n),wi(n),u&4){try{Bo(3,n,n.return),rl(3,n)}catch(Ye){Yt(n,n.return,Ye)}try{Bo(5,n,n.return)}catch(Ye){Yt(n,n.return,Ye)}}break;case 1:hi(i,n),wi(n),u&512&&o!==null&&Ls(o,o.return);break;case 5:if(hi(i,n),wi(n),u&512&&o!==null&&Ls(o,o.return),n.flags&32){var d=n.stateNode;try{we(d,"")}catch(Ye){Yt(n,n.return,Ye)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),Ce(I,E);var ie=Ce(I,m);for(E=0;E<B.length;E+=2){var _e=B[E],xe=B[E+1];_e==="style"?be(d,xe):_e==="dangerouslySetInnerHTML"?$e(d,xe):_e==="children"?we(d,xe):P(d,_e,xe,ie)}switch(I){case"input":Ht(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?St(d,!!m.multiple,Oe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[Co]=m}catch(Ye){Yt(n,n.return,Ye)}}break;case 6:if(hi(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ye){Yt(n,n.return,Ye)}}break;case 3:if(hi(i,n),wi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Ye){Yt(n,n.return,Ye)}break;case 4:hi(i,n),wi(n);break;case 13:hi(i,n),wi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Nc=Xt())),u&4&&qp(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(ie=yn)||_e,hi(i,n),yn=ie):hi(i,n),wi(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!_e&&(n.mode&1)!==0)for(Ve=n,_e=n.child;_e!==null;){for(xe=Ve=_e;Ve!==null;){switch(ge=Ve,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Bo(4,ge,ge.return);break;case 1:Ls(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ye){Yt(u,o,Ye)}}break;case 5:Ls(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Zp(xe);continue}}Oe!==null?(Oe.return=ge,Ve=Oe):Zp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,ie?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Se("display",E))}catch(Ye){Yt(n,n.return,Ye)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ie?"":xe.memoizedProps}catch(Ye){Yt(n,n.return,Ye)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:hi(i,n),wi(n),u&4&&qp(n);break;case 21:break;default:hi(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Wp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(we(d,""),u.flags&=-33);var m=Xp(n);bc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,I=Xp(n);Rc(n,I,E);break;default:throw Error(t(161))}}catch(B){Yt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W0(n,i,o){Ve=n,$p(n)}function $p(n,i,o){for(var u=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||il;if(!E){var I=d.alternate,B=I!==null&&I.memoizedState!==null||yn;I=il;var ie=yn;if(il=E,(yn=B)&&!ie)for(Ve=d;Ve!==null;)E=Ve,B=E.child,E.tag===22&&E.memoizedState!==null?Qp(d):B!==null?(B.return=E,Ve=B):Qp(d);for(;m!==null;)Ve=m,$p(m),m=m.sibling;Ve=d,il=I,yn=ie}Kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Kp(n)}}function Kp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||rl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:fi(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Zh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Zh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&go(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&Cc(i)}catch(ge){Yt(i,i.return,ge)}}if(i===n){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Zp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Qp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{rl(4,i)}catch(B){Yt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Yt(i,d,B)}}var m=i.return;try{Cc(i)}catch(B){Yt(i,m,B)}break;case 5:var E=i.return;try{Cc(i)}catch(B){Yt(i,E,B)}}}catch(B){Yt(i,i.return,B)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var X0=Math.ceil,sl=L.ReactCurrentDispatcher,Pc=L.ReactCurrentOwner,ti=L.ReactCurrentBatchConfig,Et=0,fn=null,Jt=null,mn=0,qn=0,Ns=ur(0),sn=0,ko=null,Wr=0,ol=0,Lc=0,zo=null,Bn=null,Nc=0,Ds=1/0,Hi=null,al=!1,Dc=null,mr=null,ll=!1,gr=null,ul=0,Vo=0,Ic=null,cl=-1,fl=0;function Pn(){return(Et&6)!==0?Xt():cl!==-1?cl:cl=Xt()}function _r(n){return(n.mode&1)===0?1:(Et&2)!==0&&mn!==0?mn&-mn:R0.transition!==null?(fl===0&&(fl=_n()),fl):(n=at,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function pi(n,i,o,u){if(50<Vo)throw Vo=0,Ic=null,Error(t(185));nn(n,o,u),((Et&2)===0||n!==fn)&&(n===fn&&((Et&2)===0&&(ol|=o),sn===4&&vr(n,mn)),kn(n,u),o===1&&Et===0&&(i.mode&1)===0&&(Ds=Xt()+500,ka&&fr()))}function kn(n,i){var o=n.callbackNode;bt(n,i);var u=wt(n,n===fn?mn:0);if(u===0)o!==null&&Sa(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Sa(o),i===1)n.tag===0?C0(em.bind(null,n)):kh(em.bind(null,n)),E0(function(){(Et&6)===0&&fr()}),o=null;else{switch(Rn(u)){case 1:o=X;break;case 4:o=se;break;case 16:o=te;break;case 536870912:o=Pe;break;default:o=te}o=lm(o,Jp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Jp(n,i){if(cl=-1,fl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Is()&&n.callbackNode!==o)return null;var u=wt(n,n===fn?mn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=dl(n,u);else{i=u;var d=Et;Et|=2;var m=nm();(fn!==n||mn!==i)&&(Hi=null,Ds=Xt()+500,jr(n,i));do try{Y0();break}catch(I){tm(n,I)}while(!0);Qu(),sl.current=m,Et=d,Jt!==null?i=0:(fn=null,mn=0,i=sn)}if(i!==0){if(i===2&&(d=_t(n),d!==0&&(u=d,i=Uc(n,d))),i===1)throw o=ko,jr(n,0),vr(n,u),kn(n,Xt()),o;if(i===6)vr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!j0(d)&&(i=dl(n,u),i===2&&(m=_t(n),m!==0&&(u=m,i=Uc(n,m))),i===1))throw o=ko,jr(n,0),vr(n,u),kn(n,Xt()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:qr(n,Bn,Hi);break;case 3:if(vr(n,u),(u&130023424)===u&&(i=Nc+500-Xt(),10<i)){if(wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Vu(qr.bind(null,n,Bn,Hi),i);break}qr(n,Bn,Hi);break;case 4:if(vr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Be(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=Xt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*X0(u/1960))-u,10<u){n.timeoutHandle=Vu(qr.bind(null,n,Bn,Hi),u);break}qr(n,Bn,Hi);break;case 5:qr(n,Bn,Hi);break;default:throw Error(t(329))}}}return kn(n,Xt()),n.callbackNode===o?Jp.bind(null,n):null}function Uc(n,i){var o=zo;return n.current.memoizedState.isDehydrated&&(jr(n,i).flags|=256),n=dl(n,i),n!==2&&(i=Bn,Bn=o,i!==null&&Fc(i)),n}function Fc(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function j0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ui(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(n,i){for(i&=~Lc,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Be(i),u=1<<o;n[o]=-1,i&=~u}}function em(n){if((Et&6)!==0)throw Error(t(327));Is();var i=wt(n,0);if((i&1)===0)return kn(n,Xt()),null;var o=dl(n,i);if(n.tag!==0&&o===2){var u=_t(n);u!==0&&(i=u,o=Uc(n,u))}if(o===1)throw o=ko,jr(n,0),vr(n,i),kn(n,Xt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,qr(n,Bn,Hi),kn(n,Xt()),null}function Oc(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Ds=Xt()+500,ka&&fr())}}function Xr(n){gr!==null&&gr.tag===0&&(Et&6)===0&&Is();var i=Et;Et|=1;var o=ti.transition,u=at;try{if(ti.transition=null,at=1,n)return n()}finally{at=u,ti.transition=o,Et=i,(Et&6)===0&&fr()}}function Bc(){qn=Ns.current,Vt(Ns)}function jr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,M0(o)),Jt!==null)for(o=Jt.return;o!==null;){var u=o;switch(qu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Oa();break;case 3:bs(),Vt(Un),Vt(vn),oc();break;case 5:rc(u);break;case 4:bs();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:Ju(u.type._context);break;case 22:case 23:Bc()}o=o.return}if(fn=n,Jt=n=xr(n.current,null),mn=qn=i,sn=0,ko=null,Lc=ol=Wr=0,Bn=zo=null,Vr!==null){for(i=0;i<Vr.length;i++)if(o=Vr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}o.pending=u}Vr=null}return n}function tm(n,i){do{var o=Jt;try{if(Qu(),$a.current=Ja,Ka){for(var u=qt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ka=!1}if(Gr=0,cn=rn=qt=null,Do=!1,Io=0,Pc.current=null,o===null||o.return===null){sn=1,ko=i,Jt=null;break}e:{var m=n,E=o.return,I=o,B=i;if(i=mn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,_e=I,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Ap(E);if(Oe!==null){Oe.flags&=-257,Cp(Oe,E,I,m,i),Oe.mode&1&&wp(m,ie,i),i=Oe,B=ie;var We=i.updateQueue;if(We===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else We.add(B);break e}else{if((i&1)===0){wp(m,ie,i),kc();break e}B=Error(t(426))}}else if(Wt&&I.mode&1){var Zt=Ap(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Cp(Zt,E,I,m,i),Ku(Ps(B,I));break e}}m=B=Ps(B,I),sn!==4&&(sn=2),zo===null?zo=[m]:zo.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=Ep(m,B,i);Kh(m,Y);break e;case 1:I=B;var H=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(mr===null||!mr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Tp(m,I,i);Kh(m,Ee);break e}}m=m.return}while(m!==null)}rm(o)}catch(Ke){i=Ke,Jt===o&&o!==null&&(Jt=o=o.return);continue}break}while(!0)}function nm(){var n=sl.current;return sl.current=Ja,n===null?Ja:n}function kc(){(sn===0||sn===3||sn===2)&&(sn=4),fn===null||(Wr&268435455)===0&&(ol&268435455)===0||vr(fn,mn)}function dl(n,i){var o=Et;Et|=2;var u=nm();(fn!==n||mn!==i)&&(Hi=null,jr(n,i));do try{q0();break}catch(d){tm(n,d)}while(!0);if(Qu(),Et=o,sl.current=u,Jt!==null)throw Error(t(261));return fn=null,mn=0,sn}function q0(){for(;Jt!==null;)im(Jt)}function Y0(){for(;Jt!==null&&!gu();)im(Jt)}function im(n){var i=am(n.alternate,n,qn);n.memoizedProps=n.pendingProps,i===null?rm(n):Jt=i,Pc.current=null}function rm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=z0(o,i,qn),o!==null){Jt=o;return}}else{if(o=V0(o,i),o!==null){o.flags&=32767,Jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);sn===0&&(sn=5)}function qr(n,i,o){var u=at,d=ti.transition;try{ti.transition=null,at=1,$0(n,i,o,u)}finally{ti.transition=d,at=u}return null}function $0(n,i,o,u){do Is();while(gr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Fr(n,m),n===fn&&(Jt=fn=null,mn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ll||(ll=!0,lm(te,function(){return Is(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ti.transition,ti.transition=null;var E=at;at=1;var I=Et;Et|=4,Pc.current=null,G0(n,o),Yp(o,n),m0(ku),Ea=!!Bu,ku=Bu=null,n.current=o,W0(o),_u(),Et=I,at=E,ti.transition=m}else n.current=o;if(ll&&(ll=!1,gr=n,ul=d),m=n.pendingLanes,m===0&&(mr=null),He(o.stateNode),kn(n,Xt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,n=Dc,Dc=null,n;return(ul&1)!==0&&n.tag!==0&&Is(),m=n.pendingLanes,(m&1)!==0?n===Ic?Vo++:(Vo=0,Ic=n):Vo=0,fr(),null}function Is(){if(gr!==null){var n=Rn(ul),i=ti.transition,o=at;try{if(ti.transition=null,at=16>n?16:n,gr===null)var u=!1;else{if(n=gr,gr=null,ul=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Ve=n.current;Ve!==null;){var m=Ve,E=m.child;if((Ve.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ie=I[B];for(Ve=ie;Ve!==null;){var _e=Ve;switch(_e.tag){case 0:case 11:case 15:Bo(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,Ve=xe;else for(;Ve!==null;){_e=Ve;var ge=_e.sibling,Oe=_e.return;if(Gp(_e),_e===ie){Ve=null;break}if(ge!==null){ge.return=Oe,Ve=ge;break}Ve=Oe}}}var We=m.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var Zt=Ye.sibling;Ye.sibling=null,Ye=Zt}while(Ye!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ve=E;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Bo(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Ve=Y;break e}Ve=m.return}}var H=n.current;for(Ve=H;Ve!==null;){E=Ve;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,Ve=Q;else e:for(E=H;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:rl(9,I)}}catch(Ke){Yt(I,I.return,Ke)}if(I===E){Ve=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ve=Ee;break e}Ve=I.return}}if(Et=d,fr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Fe,n)}catch{}u=!0}return u}finally{at=o,ti.transition=i}}return!1}function sm(n,i,o){i=Ps(o,i),i=Ep(n,i,1),n=hr(n,i,1),i=Pn(),n!==null&&(nn(n,1,i),kn(n,i))}function Yt(n,i,o){if(n.tag===3)sm(n,n,o);else for(;i!==null;){if(i.tag===3){sm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=Ps(o,n),n=Tp(i,n,1),i=hr(i,n,1),n=Pn(),i!==null&&(nn(i,1,n),kn(i,n));break}}i=i.return}}function K0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Pn(),n.pingedLanes|=n.suspendedLanes&o,fn===n&&(mn&o)===o&&(sn===4||sn===3&&(mn&130023424)===mn&&500>Xt()-Nc?jr(n,0):Lc|=o),kn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var o=Pn();n=ki(n,i),n!==null&&(nn(n,i,o),kn(n,o))}function Z0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),om(n,o)}function Q0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),om(n,o)}var am;am=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Un.current)On=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return On=!1,k0(n,i,o);On=(n.flags&131072)!==0}else On=!1,Wt&&(i.flags&1048576)!==0&&zh(i,Va,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;nl(n,i),n=i.pendingProps;var d=Ms(i,vn.current);Rs(i,o),d=uc(null,i,u,n,d,o);var m=cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Fn(u)?(m=!0,Ba(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nc(i),d.updater=el,i.stateNode=d,d._reactInternals=i,gc(i,u,n,o),i=Sc(null,i,u,!0,m,o)):(i.tag=0,Wt&&m&&ju(i),bn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=ev(u),n=fi(u,n),d){case 0:i=xc(null,i,u,n,o);break e;case 1:i=Dp(null,i,u,n,o);break e;case 11:i=Rp(null,i,u,n,o);break e;case 14:i=bp(null,i,u,fi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),xc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Dp(n,i,u,d,o);case 3:e:{if(Ip(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,$h(n,i),qa(i,u,null,o);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ps(Error(t(423)),i),i=Up(n,i,u,o,d);break e}else if(u!==d){d=Ps(Error(t(424)),i),i=Up(n,i,u,o,d);break e}else for(jn=lr(i.stateNode.containerInfo.firstChild),Xn=i,Wt=!0,ci=null,o=qh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ws(),u===d){i=Vi(n,i,o);break e}bn(n,i,u,o)}i=i.child}return i;case 5:return Qh(i),n===null&&$u(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,zu(u,d)?E=null:m!==null&&zu(u,m)&&(i.flags|=32),Np(n,i),bn(n,i,E,o),i.child;case 6:return n===null&&$u(i),null;case 13:return Fp(n,i,o);case 4:return ic(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=As(i,null,u,o):bn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),Rp(n,i,u,d,o);case 7:return bn(n,i,i.pendingProps,o),i.child;case 8:return bn(n,i,i.pendingProps.children,o),i.child;case 12:return bn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,kt(Wa,u._currentValue),u._currentValue=E,m!==null)if(ui(m.value,E)){if(m.children===d.children&&!Un.current){i=Vi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(m.tag===1){B=zi(-1,o&-o),B.tag=2;var ie=m.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ie.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),ec(m.return,o,i),I.lanes|=o;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),ec(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}bn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Rs(i,o),d=Jn(d),u=u(d),i.flags|=1,bn(n,i,u,o),i.child;case 14:return u=i.type,d=fi(u,i.pendingProps),d=fi(u.type,d),bp(n,i,u,d,o);case 15:return Pp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:fi(u,d),nl(n,i),i.tag=1,Fn(u)?(n=!0,Ba(i)):n=!1,Rs(i,o),yp(i,u,d),gc(i,u,d,o),Sc(null,i,u,!0,n,o);case 19:return Bp(n,i,o);case 22:return Lp(n,i,o)}throw Error(t(156,i.tag))};function lm(n,i){return xa(n,i)}function J0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,i,o,u){return new J0(n,i,o,u)}function zc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ev(n){if(typeof n=="function")return zc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ue)return 14}return 2}function xr(n,i){var o=n.alternate;return o===null?(o=ni(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function hl(n,i,o,u,d,m){var E=2;if(u=n,typeof n=="function")zc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Yr(o.children,d,m,i);case W:E=8,d|=8;break;case A:return n=ni(12,o,i,d|2),n.elementType=A,n.lanes=m,n;case J:return n=ni(13,o,i,d),n.elementType=J,n.lanes=m,n;case oe:return n=ni(19,o,i,d),n.elementType=oe,n.lanes=m,n;case q:return pl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case ee:E=11;break e;case ue:E=14;break e;case le:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ni(E,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Yr(n,i,o,u){return n=ni(7,n,u,i),n.lanes=o,n}function pl(n,i,o,u){return n=ni(22,n,u,i),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function Vc(n,i,o){return n=ni(6,n,null,i),n.lanes=o,n}function Hc(n,i,o){return i=ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function tv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gc(n,i,o,u,d,m,E,I,B){return n=new tv(n,i,o,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ni(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(m),n}function nv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function um(n){if(!n)return cr;n=n._reactInternals;e:{if(Kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Fn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Fn(o))return Oh(n,o,i)}return i}function cm(n,i,o,u,d,m,E,I,B){return n=Gc(o,u,!0,n,d,m,E,I,B),n.context=um(null),o=n.current,u=Pn(),d=_r(o),m=zi(u,d),m.callback=i??null,hr(o,m,d),n.current.lanes=d,nn(n,d,u),kn(n,u),n}function ml(n,i,o,u){var d=i.current,m=Pn(),E=_r(d);return o=um(o),i.context===null?i.context=o:i.pendingContext=o,i=zi(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=hr(d,i,E),n!==null&&(pi(n,d,E,m),ja(n,d,E)),E}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Wc(n,i){fm(n,i),(n=n.alternate)&&fm(n,i)}function iv(){return null}var dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xc(n){this._internalRoot=n}_l.prototype.render=Xc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},_l.prototype.unmount=Xc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xr(function(){ml(null,n,null,null)}),i[Ui]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=yi();n={blockedOn:null,target:n,priority:i};for(var o=0;o<sr.length&&i!==0&&i<sr[o].priority;o++);sr.splice(o,0,n),o===0&&Qd(n)}};function jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function rv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ie=gl(E);m.call(ie)}}var E=cm(i,u,n,0,null,!1,!1,"",hm);return n._reactRootContainer=E,n[Ui]=E.current,wo(n.nodeType===8?n.parentNode:n),Xr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var ie=gl(B);I.call(ie)}}var B=Gc(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=B,n[Ui]=B.current,wo(n.nodeType===8?n.parentNode:n),Xr(function(){ml(i,B,o,u)}),B}function xl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var I=d;d=function(){var B=gl(E);I.call(B)}}ml(i,E,n,d)}else E=rv(o,i,n,d,u);return gl(E)}ln=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);o!==0&&(Dt(i,o|1),kn(i,Xt()),(Et&6)===0&&(Ds=Xt()+500,fr()))}break;case 13:Xr(function(){var u=ki(n,1);if(u!==null){var d=Pn();pi(u,n,1,d)}}),Wc(n,1)}},un=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var o=Pn();pi(i,n,134217728,o)}Wc(n,134217728)}},ds=function(n){if(n.tag===13){var i=_r(n),o=ki(n,i);if(o!==null){var u=Pn();pi(o,n,i,u)}Wc(n,i)}},yi=function(){return at},Kd=function(n,i){var o=at;try{return at=n,i()}finally{at=o}},Ne=function(n,i,o){switch(i){case"input":if(Ht(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Fa(u);if(!d)throw Error(t(90));Kt(u),Ht(u,d)}}}break;case"textarea":M(n,o);break;case"select":i=o.value,i!=null&&St(n,!!o.multiple,i,!1)}},rt=Oc,It=Xr;var sv={usingClientEntryPoint:!1,Events:[Ro,Ss,Fa,pe,Re,Oc]},Ho={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ov={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=co(n),n===null?null:n.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{Fe=Sl.inject(ov),Ae=Sl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv,zn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(i))throw Error(t(200));return nv(n,i,null,o)},zn.createRoot=function(n,i){if(!jc(n))throw Error(t(299));var o=!1,u="",d=dm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Gc(n,1,!1,null,null,o,!1,u,d),n[Ui]=i.current,wo(n.nodeType===8?n.parentNode:n),new Xc(i)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=co(i),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Xr(n)},zn.hydrate=function(n,i,o){if(!vl(i))throw Error(t(200));return xl(null,n,i,!0,o)},zn.hydrateRoot=function(n,i,o){if(!jc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",E=dm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=cm(i,null,n,1,o??null,d,!1,m,E),n[Ui]=i.current,wo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new _l(i)},zn.render=function(n,i,o){if(!vl(i))throw Error(t(200));return xl(null,n,i,!1,o)},zn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(Xr(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},zn.unstable_batchedUpdates=Oc,zn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,o,!1,u)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var ym;function Fg(){if(ym)return $c.exports;ym=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),$c.exports=mv(),$c.exports}var Mm;function gv(){if(Mm)return yl;Mm=1;var s=Fg();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var _v=gv();const vv=Ig(_v);Fg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},ia.apply(this,arguments)}var Rr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Rr||(Rr={}));const Em="popstate";function xv(s){s===void 0&&(s={});function e(a,l){let{pathname:c="/",search:f="",hash:h=""}=us(a.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Uf("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let h=a.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:tu(l))}function r(a,l){lu(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return yv(e,t,r,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function lu(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sv(){return Math.random().toString(36).substr(2,8)}function Tm(s,e){return{usr:s.state,key:s.key,idx:e}}function Uf(s,e,t,r){return t===void 0&&(t=null),ia({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?us(e):e,{state:t,key:e&&e.key||r||Sv()})}function tu(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function us(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function yv(s,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,f=Rr.Pop,h=null,p=_();p==null&&(p=0,c.replaceState(ia({},c.state,{idx:p}),""));function _(){return(c.state||{idx:null}).idx}function g(){f=Rr.Pop;let x=_(),v=x==null?null:x-p;p=x,h&&h({action:f,location:w.location,delta:v})}function S(x,v){f=Rr.Push;let b=Uf(w.location,x,v);t&&t(b,x),p=_()+1;let P=Tm(b,p),L=w.createHref(b);try{c.pushState(P,"",L)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(L)}l&&h&&h({action:f,location:w.location,delta:1})}function y(x,v){f=Rr.Replace;let b=Uf(w.location,x,v);t&&t(b,x),p=_();let P=Tm(b,p),L=w.createHref(b);c.replaceState(P,"",L),l&&h&&h({action:f,location:w.location,delta:0})}function T(x){let v=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof x=="string"?x:tu(x);return b=b.replace(/ $/,"%20"),tn(v,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,v)}let w={get action(){return f},get location(){return s(a,c)},listen(x){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(Em,g),h=x,()=>{a.removeEventListener(Em,g),h=null}},createHref(x){return e(a,x)},createURL:T,encodeLocation(x){let v=T(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:y,go(x){return c.go(x)}};return w}var wm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(wm||(wm={}));function Mv(s,e,t){return t===void 0&&(t="/"),Ev(s,e,t)}function Ev(s,e,t,r){let a=typeof e=="string"?us(e):e,l=Ud(a.pathname||"/",t);if(l==null)return null;let c=Og(s);Tv(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=Fv(l);f=Dv(c[h],p)}return f}function Og(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(tn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=Pr([r,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(tn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Og(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Lv(p,l.index),routesMeta:_})};return s.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of Bg(l.path))a(l,c,h)}),e}function Bg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=Bg(r.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function Tv(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Nv(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const wv=/^:[\w-]+$/,Av=3,Cv=2,Rv=1,bv=10,Pv=-2,Am=s=>s==="*";function Lv(s,e){let t=s.split("/"),r=t.length;return t.some(Am)&&(r+=Pv),e&&(r+=Cv),t.filter(a=>!Am(a)).reduce((a,l)=>a+(wv.test(l)?Av:l===""?Rv:bv),r)}function Nv(s,e){return s.length===e.length&&s.slice(0,-1).every((r,a)=>r===e[a])?s[s.length-1]-e[e.length-1]:0}function Dv(s,e,t){let{routesMeta:r}=s,a={},l="/",c=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,_=l==="/"?e:e.slice(l.length)||"/",g=Iv({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),S=h.route;if(!g)return null;Object.assign(a,g.params),c.push({params:a,pathname:Pr([l,g.pathname]),pathnameBase:Vv(Pr([l,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(l=Pr([l,g.pathnameBase]))}return c}function Iv(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=Uv(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:r.reduce((p,_,g)=>{let{paramName:S,isOptional:y}=_;if(S==="*"){let w=f[g]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[g];return y&&!T?p[S]=void 0:p[S]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:s}}function Uv(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),lu(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(r.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function Fv(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lu(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Ud(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}const Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bv=s=>Ov.test(s);function kv(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof s=="string"?us(s):s,l;if(t)if(Bv(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),lu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Cm(t.substring(1),"/"):l=Cm(t,e)}else l=e;return{pathname:l,search:Hv(r),hash:Gv(a)}}function Cm(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Qc(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zv(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function kg(s,e){let t=zv(s);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function zg(s,e,t,r){r===void 0&&(r=!1);let a;typeof s=="string"?a=us(s):(a=ia({},s),tn(!a.pathname||!a.pathname.includes("?"),Qc("?","pathname","search",a)),tn(!a.pathname||!a.pathname.includes("#"),Qc("#","pathname","hash",a)),tn(!a.search||!a.search.includes("#"),Qc("#","search","hash",a)));let l=s===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let g=e.length-1;if(!r&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),g-=1;a.pathname=S.join("/")}f=g>=0?e[g]:"/"}let h=kv(a,f),p=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}const Pr=s=>s.join("/").replace(/\/\/+/g,"/"),Vv=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Hv=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Gv=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Wv(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Vg=["post","put","patch","delete"];new Set(Vg);const Xv=["get",...Vg];new Set(Xv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},ra.apply(this,arguments)}const Fd=Le.createContext(null),jv=Le.createContext(null),cs=Le.createContext(null),uu=Le.createContext(null),fs=Le.createContext({outlet:null,matches:[],isDataRoute:!1}),Hg=Le.createContext(null);function qv(s,e){let{relative:t}=e===void 0?{}:e;ua()||tn(!1);let{basename:r,navigator:a}=Le.useContext(cs),{hash:l,pathname:c,search:f}=Xg(s,{relative:t}),h=c;return r!=="/"&&(h=c==="/"?r:Pr([r,c])),a.createHref({pathname:h,search:f,hash:l})}function ua(){return Le.useContext(uu)!=null}function no(){return ua()||tn(!1),Le.useContext(uu).location}function Gg(s){Le.useContext(cs).static||Le.useLayoutEffect(s)}function Wg(){let{isDataRoute:s}=Le.useContext(fs);return s?ox():Yv()}function Yv(){ua()||tn(!1);let s=Le.useContext(Fd),{basename:e,future:t,navigator:r}=Le.useContext(cs),{matches:a}=Le.useContext(fs),{pathname:l}=no(),c=JSON.stringify(kg(a,t.v7_relativeSplatPath)),f=Le.useRef(!1);return Gg(()=>{f.current=!0}),Le.useCallback(function(p,_){if(_===void 0&&(_={}),!f.current)return;if(typeof p=="number"){r.go(p);return}let g=zg(p,JSON.parse(c),l,_.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Pr([e,g.pathname])),(_.replace?r.replace:r.push)(g,_.state,_)},[e,r,c,l,s])}function Xg(s,e){let{relative:t}=e===void 0?{}:e,{future:r}=Le.useContext(cs),{matches:a}=Le.useContext(fs),{pathname:l}=no(),c=JSON.stringify(kg(a,r.v7_relativeSplatPath));return Le.useMemo(()=>zg(s,JSON.parse(c),l,t==="path"),[s,c,l,t])}function $v(s,e){return Kv(s,e)}function Kv(s,e,t,r){ua()||tn(!1);let{navigator:a}=Le.useContext(cs),{matches:l}=Le.useContext(fs),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=no(),_;if(e){var g;let x=typeof e=="string"?us(e):e;h==="/"||(g=x.pathname)!=null&&g.startsWith(h)||tn(!1),_=x}else _=p;let S=_.pathname||"/",y=S;if(h!=="/"){let x=h.replace(/^\//,"").split("/");y="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=Mv(s,{pathname:y}),w=tx(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Pr([h,a.encodeLocation?a.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?h:Pr([h,a.encodeLocation?a.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,r);return e&&w?Le.createElement(uu.Provider,{value:{location:ra({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Rr.Pop}},w):w}function Zv(){let s=sx(),e=Wv(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Le.createElement(Le.Fragment,null,Le.createElement("h2",null,"Unexpected Application Error!"),Le.createElement("h3",{style:{fontStyle:"italic"}},e),t?Le.createElement("pre",{style:a},t):null,null)}const Qv=Le.createElement(Zv,null);class Jv extends Le.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Le.createElement(fs.Provider,{value:this.props.routeContext},Le.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ex(s){let{routeContext:e,match:t,children:r}=s,a=Le.useContext(Fd);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),Le.createElement(fs.Provider,{value:e},r)}function tx(s,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let c=s,f=(a=t)==null?void 0:a.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);_>=0||tn(!1),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=_),g.route.id){let{loaderData:S,errors:y}=t,T=g.route.loader&&S[g.route.id]===void 0&&(!y||y[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((_,g,S)=>{let y,T=!1,w=null,x=null;t&&(y=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||Qv,h&&(p<0&&S===0?(ax("route-fallback"),T=!0,x=null):p===S&&(T=!0,x=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,S+1)),b=()=>{let P;return y?P=w:T?P=x:g.route.Component?P=Le.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=_,Le.createElement(ex,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:t!=null},children:P})};return t&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?Le.createElement(Jv,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}var jg=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(jg||{}),qg=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(qg||{});function nx(s){let e=Le.useContext(Fd);return e||tn(!1),e}function ix(s){let e=Le.useContext(jv);return e||tn(!1),e}function rx(s){let e=Le.useContext(fs);return e||tn(!1),e}function Yg(s){let e=rx(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function sx(){var s;let e=Le.useContext(Hg),t=ix(),r=Yg();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function ox(){let{router:s}=nx(jg.UseNavigateStable),e=Yg(qg.UseNavigateStable),t=Le.useRef(!1);return Gg(()=>{t.current=!0}),Le.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?s.navigate(a):s.navigate(a,ra({fromRouteId:e},l)))},[s,e])}const Rm={};function ax(s,e,t){Rm[s]||(Rm[s]=!0)}function lx(s,e){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Ff(s){tn(!1)}function ux(s){let{basename:e="/",children:t=null,location:r,navigationType:a=Rr.Pop,navigator:l,static:c=!1,future:f}=s;ua()&&tn(!1);let h=e.replace(/^\/*/,"/"),p=Le.useMemo(()=>({basename:h,navigator:l,static:c,future:ra({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof r=="string"&&(r=us(r));let{pathname:_="/",search:g="",hash:S="",state:y=null,key:T="default"}=r,w=Le.useMemo(()=>{let x=Ud(_,h);return x==null?null:{location:{pathname:x,search:g,hash:S,state:y,key:T},navigationType:a}},[h,_,g,S,y,T,a]);return w==null?null:Le.createElement(cs.Provider,{value:p},Le.createElement(uu.Provider,{children:t,value:w}))}function cx(s){let{children:e,location:t}=s;return $v(Of(e),t)}new Promise(()=>{});function Of(s,e){e===void 0&&(e=[]);let t=[];return Le.Children.forEach(s,(r,a)=>{if(!Le.isValidElement(r))return;let l=[...e,a];if(r.type===Le.Fragment){t.push.apply(t,Of(r.props.children,l));return}r.type!==Ff&&tn(!1),!r.props.index||!r.props.children||tn(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Of(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bf(){return Bf=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Bf.apply(this,arguments)}function fx(s,e){if(s==null)return{};var t={},r=Object.keys(s),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=s[a]);return t}function dx(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function hx(s,e){return s.button===0&&(!e||e==="_self")&&!dx(s)}const px=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mx="6";try{window.__reactRouterVersion=mx}catch{}const gx="startTransition",bm=dv[gx];function _x(s){let{basename:e,children:t,future:r,window:a}=s,l=Le.useRef();l.current==null&&(l.current=xv({window:a,v5Compat:!0}));let c=l.current,[f,h]=Le.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},_=Le.useCallback(g=>{p&&bm?bm(()=>h(g)):h(g)},[h,p]);return Le.useLayoutEffect(()=>c.listen(_),[c,_]),Le.useEffect(()=>lx(r),[r]),Le.createElement(ux,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:r})}const vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cu=Le.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:_,viewTransition:g}=e,S=fx(e,px),{basename:y}=Le.useContext(cs),T,w=!1;if(typeof p=="string"&&xx.test(p)&&(T=p,vx))try{let P=new URL(window.location.href),L=p.startsWith("//")?new URL(P.protocol+p):new URL(p),D=Ud(L.pathname,y);L.origin===P.origin&&D!=null?p=D+L.search+L.hash:w=!0}catch{}let x=qv(p,{relative:a}),v=Sx(p,{replace:c,state:f,target:h,preventScrollReset:_,relative:a,viewTransition:g});function b(P){r&&r(P),P.defaultPrevented||v(P)}return Le.createElement("a",Bf({},S,{href:T||x,onClick:w||l?r:b,ref:t,target:h}))});var Pm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Pm||(Pm={}));var Lm;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Lm||(Lm={}));function Sx(s,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,h=Wg(),p=no(),_=Xg(s,{relative:c});return Le.useCallback(g=>{if(hx(g,t)){g.preventDefault();let S=r!==void 0?r:tu(p)===tu(_);h(s,{replace:S,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,_,r,a,t,s,l,c,f])}const yx="_navbar_13wbh_1",Mx="_scrolled_13wbh_15",Ex="_container_13wbh_19",Tx="_navLeft_13wbh_29",wx="_logo_13wbh_35",Ax="_timeDisplay_13wbh_56",Cx="_links_13wbh_63",Rx="_link_13wbh_63",bx="_registerBtn_13wbh_106",Px="_hamburger_13wbh_127",Lx="_active_13wbh_183",Nx="_barOpen_13wbh_197",Mn={navbar:yx,scrolled:Mx,container:Ex,navLeft:Tx,logo:wx,timeDisplay:Ax,links:Cx,link:Rx,registerBtn:bx,hamburger:Px,active:Lx,barOpen:Nx},Dx=()=>{const[s,e]=Le.useState(!1),[t,r]=Le.useState(!1),[a,l]=Le.useState(""),c=no();Le.useEffect(()=>{const h=()=>{const g=new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});l(g)};h();const p=setInterval(h,1e3);return()=>clearInterval(p)},[]),Le.useEffect(()=>{const h=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const f=h=>{if(c.pathname!=="/")window.location.href=`/#${h}`;else{const p=document.getElementById(h);p&&p.scrollIntoView({behavior:"smooth"})}e(!1)};return Z.jsx("nav",{className:`${Mn.navbar} ${t?Mn.scrolled:""}`,children:Z.jsxs("div",{className:Mn.container,children:[Z.jsxs("div",{className:Mn.navLeft,children:[Z.jsxs("div",{className:Mn.logo,onClick:()=>f("hero"),children:["NST",Z.jsx("span",{children:"SDC"})]}),Z.jsxs("div",{className:Mn.timeDisplay,children:["[",a,"]"]})]}),Z.jsxs("div",{className:`${Mn.links} ${s?Mn.active:""}`,children:[Z.jsx("a",{onClick:()=>f("hero"),className:Mn.link,children:"/home"}),Z.jsx("a",{onClick:()=>f("about"),className:Mn.link,children:"/man_pages"}),Z.jsx("a",{onClick:()=>f("lastyear"),className:Mn.link,children:"/logs"}),Z.jsx(cu,{to:"/register",className:Mn.registerBtn,children:"./EXEC_REG.sh"})]}),Z.jsxs("div",{className:Mn.hamburger,onClick:()=>e(!s),children:[Z.jsx("div",{className:s?Mn.barOpen:""}),Z.jsx("div",{className:s?Mn.barOpen:""}),Z.jsx("div",{className:s?Mn.barOpen:""})]})]})})},Ix="_section_n8bis_1",Ux="_visible_n8bis_10",Fx="_contentContainer_n8bis_15",Jc={section:Ix,visible:Ux,contentContainer:Fx},fu=({children:s,id:e,className:t})=>{const[r,a]=Le.useState(!1),l=Le.useRef();return Le.useEffect(()=>{const c=new IntersectionObserver(h=>{h.forEach(p=>{p.isIntersecting&&a(!0)})},{threshold:.1}),{current:f}=l;return f&&c.observe(f),()=>{f&&c.unobserve(f)}},[]),Z.jsx("section",{id:e,ref:l,className:`${Jc.section} ${r?Jc.visible:""}`,children:Z.jsx("div",{className:`${Jc.contentContainer} ${t||""}`,children:s})})},Ox="_heroSection_11xvc_1",Bx="_backgroundGlow_11xvc_72",kx="_content_11xvc_101",zx="_title_11xvc_107",Vx="_tagline_11xvc_124",Hx="_description_11xvc_136",Gx="_ctaButton_11xvc_160",$r={heroSection:Ox,backgroundGlow:Bx,content:kx,title:zx,tagline:Vx,description:Hx,ctaButton:Gx},Wx=()=>Z.jsxs(fu,{id:"hero",className:$r.heroSection,children:[Z.jsx("div",{className:$r.backgroundGlow}),Z.jsxs("div",{className:$r.content,children:[Z.jsxs("h1",{className:`${$r.title} glitch-text`,"data-text":"QUICK SNATCH 2.0",children:["QUICK SNATCH ",Z.jsx("span",{children:"2.0"})]}),Z.jsx("p",{className:$r.tagline,children:"< The CLI Treasure Hunt />"}),Z.jsx("p",{className:$r.description,children:"A high-stakes digital scavenger hunt. Navigate the terminal, decode cryptic logs, and track down the 0xROOT bounty before time runs out."}),Z.jsx(cu,{to:"/register",className:$r.ctaButton,children:"START_THE_HUNT.exe"})]})]}),Xx="_heading_1mapd_3",jx="_grid_1mapd_11",qx="_card_1mapd_17",Yx="_cardHeader_1mapd_32",$x="_icon_1mapd_36",Kx="_cardTitle_1mapd_47",Zx="_cardDesc_1mapd_53",Kr={heading:Xx,grid:jx,card:qx,cardHeader:Yx,icon:$x,cardTitle:Kx,cardDesc:Zx},Qx=()=>{const s=[{title:"The Hunt",desc:"Navigate through complex puzzles and digital mazes."},{title:"CLI Challenges",desc:"Prove your terminal mastery in timed events."},{title:"Leaderboard",desc:"Climb the ranks and claim your supremacy."},{title:"The Snatch",desc:"First to solve the final clue wins the grand prize."}];return Z.jsxs(fu,{id:"about",children:[Z.jsx("h2",{className:Kr.heading,children:"System Overview"}),Z.jsx("div",{className:Kr.grid,children:s.map((e,t)=>Z.jsxs("div",{className:Kr.card,children:[Z.jsx("div",{className:Kr.cardHeader,children:Z.jsxs("span",{className:Kr.icon,children:["0",t+1]})}),Z.jsx("h3",{className:Kr.cardTitle,children:e.title}),Z.jsx("p",{className:Kr.cardDesc,children:e.desc})]},t))})]})},Jx="_container_px0c4_1",eS="_content_px0c4_8",tS="_heading_px0c4_38",nS="_text_px0c4_44",iS="_linkButton_px0c4_50",Wo={container:Jx,content:eS,heading:tS,text:nS,linkButton:iS},rS=()=>Z.jsx(fu,{id:"lastyear",className:Wo.container,children:Z.jsxs("div",{className:Wo.content,children:[Z.jsx("h2",{className:Wo.heading,children:"Legacy Archive"}),Z.jsx("p",{className:Wo.text,children:"Quick Snatch 1.0 set the benchmark. Witness where it all began."}),Z.jsx("a",{href:"https://quicksnatch.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:Wo.linkButton,children:"ACCESS ARCHIVES"})]})}),sS="_container_1cp6r_1",oS="_box_1cp6r_8",aS="_title_1cp6r_39",lS="_subtitle_1cp6r_47",uS="_button_1cp6r_53",Xo={container:sS,box:oS,title:aS,subtitle:lS,button:uS},cS=()=>Z.jsx(fu,{id:"register",className:Xo.container,children:Z.jsxs("div",{className:Xo.box,children:[Z.jsx("h2",{className:Xo.title,children:"Are you ready to breach?"}),Z.jsx("p",{className:Xo.subtitle,children:"Spots are limited. Secure your terminal access now."}),Z.jsx(cu,{to:"/register",className:Xo.button,children:"ENTER COMPETITION"})]})}),fS="_footer_zs72q_1",dS="_systemBar_zs72q_10",hS="_systemBarInner_zs72q_19",pS="_online_zs72q_26",mS="_grid_zs72q_44",gS="_col_zs72q_52",_S="_termHeader_zs72q_58",vS="_logo_zs72q_65",xS="_version_zs72q_73",SS="_desc_zs72q_78",yS="_cliInput_zs72q_84",MS="_prompt_zs72q_94",ES="_linkList_zs72q_98",TS="_highlight_zs72q_118",wS="_terminalBlock_zs72q_123",AS="_warning_zs72q_135",CS="_footerBottom_zs72q_153",RS="_footerBottomInner_zs72q_161",bS="_blink_zs72q_168",PS="_processing_zs72q_172",Ut={footer:fS,systemBar:dS,systemBarInner:hS,online:pS,grid:mS,col:gS,termHeader:_S,logo:vS,version:xS,desc:SS,cliInput:yS,prompt:MS,linkList:ES,highlight:TS,terminalBlock:wS,warning:AS,footerBottom:CS,footerBottomInner:RS,blink:bS,processing:PS},LS=()=>{const s=no(),e=t=>{if(s.pathname!=="/")window.location.href=`/#${t}`;else{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})}};return Z.jsxs("footer",{className:Ut.footer,children:[Z.jsx("div",{className:Ut.systemBar,children:Z.jsx("div",{className:"container-standard",children:Z.jsxs("div",{className:Ut.systemBarInner,children:[Z.jsxs("span",{children:["STATUS: ",Z.jsx("span",{className:Ut.online,children:"ONLINE"})]}),Z.jsx("span",{children:"UPTIME: 48:22:15"}),Z.jsx("span",{children:"ENCRYPTION: AES-256"}),Z.jsx("span",{children:"DATA_STREAM: SECURE"})]})})}),Z.jsx("div",{className:"container-standard",children:Z.jsxs("div",{className:Ut.grid,children:[Z.jsxs("div",{className:Ut.col,children:[Z.jsx("h4",{className:Ut.termHeader,children:" // IDENTITY_CORE"}),Z.jsxs("div",{className:Ut.logo,children:["QUICK_SNATCH_",Z.jsx("span",{className:Ut.version,children:"v2.0"})]}),Z.jsx("p",{className:Ut.desc,children:"A competitive treasure hunting protocol initialized by Newton School of Technology. Decode. Breach. Win."}),Z.jsxs("div",{className:Ut.cliInput,children:[Z.jsx("span",{className:Ut.prompt,children:"user@root:~$"})," _"]})]}),Z.jsxs("div",{className:Ut.col,children:[Z.jsx("h4",{className:Ut.termHeader,children:" // SITE_MAP"}),Z.jsxs("ul",{className:Ut.linkList,children:[Z.jsx("li",{children:Z.jsx("a",{onClick:()=>e("hero"),children:"> cd /home"})}),Z.jsx("li",{children:Z.jsx("a",{onClick:()=>e("about"),children:"> cat info.txt"})}),Z.jsx("li",{children:Z.jsx("a",{onClick:()=>e("lastyear"),children:"> history | grep legacy"})}),Z.jsx("li",{children:Z.jsx(cu,{to:"/register",className:Ut.highlight,children:"> ./execute_reg.sh"})})]})]}),Z.jsxs("div",{className:Ut.col,children:[Z.jsx("h4",{className:Ut.termHeader,children:" // COMM_CHANNELS"}),Z.jsxs("ul",{className:Ut.linkList,children:[Z.jsx("li",{children:Z.jsx("a",{href:"#",children:"[0] INSTAGRAM_LINK_ESTABLISHED"})}),Z.jsx("li",{children:Z.jsx("a",{href:"#",children:"[1] DISCORD_SERVER_NOT_FOUND"})}),Z.jsx("li",{children:Z.jsx("a",{href:"#",children:"[2] LINKEDIN_HANDSHAKE"})}),Z.jsx("li",{children:Z.jsx("a",{href:"#",children:"[3] MAIL_PROTOCOL_SMTP"})})]})]}),Z.jsxs("div",{className:Ut.col,children:[Z.jsx("h4",{className:Ut.termHeader,children:" // GEO_LOCATION"}),Z.jsxs("div",{className:Ut.terminalBlock,children:[Z.jsx("p",{children:"TARGET: NST Pune"}),Z.jsx("p",{children:"COORDS: 18.5204° N, 73.8567° E"}),Z.jsx("p",{children:"SECTOR: 7-G"}),Z.jsx("p",{className:Ut.warning,children:"WARNING: UNAUTHORIZED SECTORS AHEAD"})]})]})]})}),Z.jsx("div",{className:Ut.footerBottom,children:Z.jsx("div",{className:"container-standard",children:Z.jsxs("div",{className:Ut.footerBottomInner,children:[Z.jsx("div",{className:Ut.bottomLeft,children:"© 2026 QUICK_SNATCH_SYSTEMS. ALL_RIGHTS_RESERVED."}),Z.jsxs("div",{className:Ut.bottomRight,children:[Z.jsx("span",{className:Ut.processing,children:"SYSTEM_PROCESSING..."}),Z.jsx("span",{className:Ut.blink,children:"_"})," END_OF_FILE"]})]})})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="182",NS=0,Nm=1,DS=2,Yl=1,IS=2,ta=3,Lr=0,Hn=1,Yi=2,Ki=0,$s=1,Dm=2,Im=3,Um=4,US=5,rs=100,FS=101,OS=102,BS=103,kS=104,zS=200,VS=201,HS=202,GS=203,kf=204,zf=205,WS=206,XS=207,jS=208,qS=209,YS=210,$S=211,KS=212,ZS=213,QS=214,Vf=0,Hf=1,Gf=2,Zs=3,Wf=4,Xf=5,jf=6,qf=7,$g=0,JS=1,ey=2,Pi=0,Kg=1,Zg=2,Qg=3,Jg=4,e_=5,t_=6,n_=7,i_=300,ls=301,Qs=302,Yf=303,$f=304,du=306,Kf=1e3,$i=1001,Zf=1002,gn=1003,ty=1004,Ml=1005,wn=1006,ef=1007,os=1008,oi=1009,r_=1010,s_=1011,sa=1012,Bd=1013,Ni=1014,Ri=1015,Qi=1016,kd=1017,zd=1018,oa=1020,o_=35902,a_=35899,l_=1021,u_=1022,xi=1023,Ji=1026,as=1027,c_=1028,Vd=1029,Js=1030,Hd=1031,Gd=1033,$l=33776,Kl=33777,Zl=33778,Ql=33779,Qf=35840,Jf=35841,ed=35842,td=35843,nd=36196,id=37492,rd=37496,sd=37488,od=37489,ad=37490,ld=37491,ud=37808,cd=37809,fd=37810,dd=37811,hd=37812,pd=37813,md=37814,gd=37815,_d=37816,vd=37817,xd=37818,Sd=37819,yd=37820,Md=37821,Ed=36492,Td=36494,wd=36495,Ad=36283,Cd=36284,Rd=36285,bd=36286,ny=3200,iy=0,ry=1,Cr="",ri="srgb",eo="srgb-linear",nu="linear",Ft="srgb",Us=7680,Fm=519,sy=512,oy=513,ay=514,Wd=515,ly=516,uy=517,Xd=518,cy=519,Om=35044,Bm="300 es",bi=2e3,iu=2001;function f_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fy(){const s=ru("canvas");return s.style.display="block",s}const km={};function zm(...s){const e="THREE."+s.shift();console.log(e,...s)}function ot(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function aa(...s){const e=s.join(" ");e in km||(km[e]=!0,ot(...s))}function dy(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=Math.PI/180,Pd=180/Math.PI;function ca(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function hy(s,e){return(s%e+e)%e}function nf(s,e,t){return(1-t)*s+t*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3],S=l[c+0],y=l[c+1],T=l[c+2],w=l[c+3];if(f<=0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f>=1){e[t+0]=S,e[t+1]=y,e[t+2]=T,e[t+3]=w;return}if(g!==w||h!==S||p!==y||_!==T){let x=h*S+p*y+_*T+g*w;x<0&&(S=-S,y=-y,T=-T,w=-w,x=-x);let v=1-f;if(x<.9995){const b=Math.acos(x),P=Math.sin(b);v=Math.sin(v*b)/P,f=Math.sin(f*b)/P,h=h*v+S*f,p=p*v+y*f,_=_*v+T*f,g=g*v+w*f}else{h=h*v+S*f,p=p*v+y*f,_=_*v+T*f,g=g*v+w*f;const b=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=b,p*=b,_*=b,g*=b}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],_=r[a+3],g=l[c],S=l[c+1],y=l[c+2],T=l[c+3];return e[t]=f*T+_*g+h*y-p*S,e[t+1]=h*T+_*S+p*g-f*y,e[t+2]=p*T+_*y+f*S-h*g,e[t+3]=_*T-f*g-h*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(a/2),g=f(l/2),S=h(r/2),y=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"YXZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"ZXY":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"ZYX":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"YZX":this._x=S*_*g+p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g-S*y*T;break;case"XZY":this._x=S*_*g-p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g+S*y*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],_=t[6],g=t[10],S=r+f+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(c-a)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(_-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-p)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(c-a)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+c*f+a*p-l*h,this._y=a*_+c*h+l*f-r*p,this._z=l*_+c*p+r*h-a*f,this._w=c*_-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,a=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),_=2*(f*t-l*a),g=2*(l*r-c*t);return this.x=t+h*p+c*g-f*_,this.y=r+h*_+f*p-l*g,this.z=a+h*g+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rf=new K,Vm=new fa;class ct{constructor(e,t,r,a,l,c,f,h,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],_=r[4],g=r[7],S=r[2],y=r[5],T=r[8],w=a[0],x=a[3],v=a[6],b=a[1],P=a[4],L=a[7],D=a[2],F=a[5],O=a[8];return l[0]=c*w+f*b+h*D,l[3]=c*x+f*P+h*F,l[6]=c*v+f*L+h*O,l[1]=p*w+_*b+g*D,l[4]=p*x+_*P+g*F,l[7]=p*v+_*L+g*O,l[2]=S*w+y*b+T*D,l[5]=S*x+y*P+T*F,l[8]=S*v+y*L+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-r*l*_+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=_*c-f*p,S=f*h-_*l,y=p*l-c*h,T=t*g+r*S+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(a*p-_*r)*w,e[2]=(f*r-a*c)*w,e[3]=S*w,e[4]=(_*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=y*w,e[7]=(r*h-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(sf.makeScale(e,t)),this}rotate(e){return this.premultiply(sf.makeRotation(-e)),this}translate(e,t){return this.premultiply(sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sf=new ct,Hm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function py(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Cr?nu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return aa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return aa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:r,transfer:nu,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),s}const Tt=py();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class my{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=ru("canvas")),Fs.width=e.width,Fs.height=e.height;const a=Fs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Zi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Zi(t[r]/255)*255):t[r]=Zi(t[r]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gy=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(of(a[c].image)):l.push(of(a[c]))}else l=of(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?my.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let _y=0;const af=new K;class Nn extends io{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=$i,a=$i,l=wn,c=os,f=xi,h=oi,p=Nn.DEFAULT_ANISOTROPY,_=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=ca(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(af).x}get height(){return this.source.getSize(af).y}get depth(){return this.source.getSize(af).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kf:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kf:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=i_;Nn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,r=0,a=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],S=h[1],y=h[5],T=h[9],w=h[2],x=h[6],v=h[10];if(Math.abs(_-S)<.01&&Math.abs(g-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,L=(y+1)/2,D=(v+1)/2,F=(_+S)/4,O=(g+w)/4,W=(T+x)/4;return P>L&&P>D?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=F/r,l=O/r):L>D?L<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),r=F/a,l=W/a):D<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),r=O/l,a=W/l),this.set(r,a,l,t),this}let b=Math.sqrt((x-T)*(x-T)+(g-w)*(g-w)+(S-_)*(S-_));return Math.abs(b)<.001&&(b=1),this.x=(x-T)/b,this.y=(g-w)/b,this.z=(S-_)/b,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vy extends io{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new Nn(a);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new jd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends vy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class d_ extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xy extends Nn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,mi):mi.fromBufferAttribute(l,c),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Tl.subVectors(this.max,qo),Os.subVectors(e.a,qo),Bs.subVectors(e.b,qo),ks.subVectors(e.c,qo),yr.subVectors(Bs,Os),Mr.subVectors(ks,Bs),Zr.subVectors(Os,ks);let t=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-Zr.z,Zr.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,Zr.z,0,-Zr.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-Zr.y,Zr.x,0];return!lf(t,Os,Bs,ks,Tl)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Os,Bs,ks,Tl))?!1:(wl.crossVectors(yr,Mr),t=[wl.x,wl.y,wl.z],lf(t,Os,Bs,ks,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new K,new K,new K,new K,new K,new K,new K,new K],mi=new K,El=new da,Os=new K,Bs=new K,ks=new K,yr=new K,Mr=new K,Zr=new K,qo=new K,Tl=new K,wl=new K,Qr=new K;function lf(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Qr.fromArray(s,l);const f=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const Sy=new da,Yo=new K,uf=new K;class ha{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Sy.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Yo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(uf)),this.expandByPoint(Yo.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wi=new K,cf=new K,Al=new K,Er=new K,ff=new K,Cl=new K,df=new K;class qd{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){cf.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(cf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Al),f=Er.dot(this.direction),h=-Er.dot(Al),p=Er.lengthSq(),_=Math.abs(1-c*c);let g,S,y,T;if(_>0)if(g=c*h-f,S=c*f-h,T=l*_,g>=0)if(S>=-T)if(S<=T){const w=1/_;g*=w,S*=w,y=g*(g+c*S+2*f)+S*(c*g+S+2*h)+p}else S=l,g=Math.max(0,-(c*S+f)),y=-g*g+S*(S+2*h)+p;else S=-l,g=Math.max(0,-(c*S+f)),y=-g*g+S*(S+2*h)+p;else S<=-T?(g=Math.max(0,-(-c*l+f)),S=g>0?-l:Math.min(Math.max(-l,-h),l),y=-g*g+S*(S+2*h)+p):S<=T?(g=0,S=Math.min(Math.max(-l,-h),l),y=S*(S+2*h)+p):(g=Math.max(0,-(c*l+f)),S=g>0?l:Math.min(Math.max(-l,-h),l),y=-g*g+S*(S+2*h)+p);else S=c>0?-l:l,g=Math.max(0,-(c*S+f)),y=-g*g+S*(S+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(cf).addScaledVector(Al,S),y}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);const r=Wi.dot(this.direction),a=Wi.dot(Wi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,a=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,a=(e.min.x-S.x)*p),_>=0?(l=(e.min.y-S.y)*_,c=(e.max.y-S.y)*_):(l=(e.max.y-S.y)*_,c=(e.min.y-S.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-S.z)*g,h=(e.max.z-S.z)*g):(f=(e.max.z-S.z)*g,h=(e.min.z-S.z)*g),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,r,a,l){ff.subVectors(t,e),Cl.subVectors(r,e),df.crossVectors(ff,Cl);let c=this.direction.dot(df),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Er.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(Er,Cl));if(h<0)return null;const p=f*this.direction.dot(ff.cross(Er));if(p<0||h+p>c)return null;const _=-f*Er.dot(df);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,r,a,l,c,f,h,p,_,g,S,y,T,w,x){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,_,g,S,y,T,w,x)}set(e,t,r,a,l,c,f,h,p,_,g,S,y,T,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=T,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),c=1/zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const S=c*_,y=c*g,T=f*_,w=f*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=y+T*p,t[5]=S-w*p,t[9]=-f*h,t[2]=w-S*p,t[6]=T+y*p,t[10]=c*h}else if(e.order==="YXZ"){const S=h*_,y=h*g,T=p*_,w=p*g;t[0]=S+w*f,t[4]=T*f-y,t[8]=c*p,t[1]=c*g,t[5]=c*_,t[9]=-f,t[2]=y*f-T,t[6]=w+S*f,t[10]=c*h}else if(e.order==="ZXY"){const S=h*_,y=h*g,T=p*_,w=p*g;t[0]=S-w*f,t[4]=-c*g,t[8]=T+y*f,t[1]=y+T*f,t[5]=c*_,t[9]=w-S*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const S=c*_,y=c*g,T=f*_,w=f*g;t[0]=h*_,t[4]=T*p-y,t[8]=S*p+w,t[1]=h*g,t[5]=w*p+S,t[9]=y*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const S=c*h,y=c*p,T=f*h,w=f*p;t[0]=h*_,t[4]=w-S*g,t[8]=T*g+y,t[1]=g,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*g+T,t[10]=S-w*g}else if(e.order==="XZY"){const S=c*h,y=c*p,T=f*h,w=f*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=S*g+w,t[5]=c*_,t[9]=y*g-T,t[2]=T*g-y,t[6]=f*_,t[10]=w*g+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yy,e,My)}lookAt(e,t,r){const a=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Tr.crossVectors(r,Yn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Tr.crossVectors(r,Yn)),Tr.normalize(),Rl.crossVectors(Yn,Tr),a[0]=Tr.x,a[4]=Rl.x,a[8]=Yn.x,a[1]=Tr.y,a[5]=Rl.y,a[9]=Yn.y,a[2]=Tr.z,a[6]=Rl.z,a[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],_=r[1],g=r[5],S=r[9],y=r[13],T=r[2],w=r[6],x=r[10],v=r[14],b=r[3],P=r[7],L=r[11],D=r[15],F=a[0],O=a[4],W=a[8],A=a[12],R=a[1],z=a[5],ee=a[9],J=a[13],oe=a[2],ue=a[6],le=a[10],q=a[14],j=a[3],fe=a[7],re=a[11],U=a[15];return l[0]=c*F+f*R+h*oe+p*j,l[4]=c*O+f*z+h*ue+p*fe,l[8]=c*W+f*ee+h*le+p*re,l[12]=c*A+f*J+h*q+p*U,l[1]=_*F+g*R+S*oe+y*j,l[5]=_*O+g*z+S*ue+y*fe,l[9]=_*W+g*ee+S*le+y*re,l[13]=_*A+g*J+S*q+y*U,l[2]=T*F+w*R+x*oe+v*j,l[6]=T*O+w*z+x*ue+v*fe,l[10]=T*W+w*ee+x*le+v*re,l[14]=T*A+w*J+x*q+v*U,l[3]=b*F+P*R+L*oe+D*j,l[7]=b*O+P*z+L*ue+D*fe,l[11]=b*W+P*ee+L*le+D*re,l[15]=b*A+P*J+L*q+D*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],_=e[2],g=e[6],S=e[10],y=e[14],T=e[3],w=e[7],x=e[11],v=e[15],b=h*y-p*S,P=f*y-p*g,L=f*S-h*g,D=c*y-p*_,F=c*S-h*_,O=c*g-f*_;return t*(w*b-x*P+v*L)-r*(T*b-x*D+v*F)+a*(T*P-w*D+v*O)-l*(T*L-w*F+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=e[9],S=e[10],y=e[11],T=e[12],w=e[13],x=e[14],v=e[15],b=g*x*p-w*S*p+w*h*y-f*x*y-g*h*v+f*S*v,P=T*S*p-_*x*p-T*h*y+c*x*y+_*h*v-c*S*v,L=_*w*p-T*g*p+T*f*y-c*w*y-_*f*v+c*g*v,D=T*g*h-_*w*h-T*f*S+c*w*S+_*f*x-c*g*x,F=t*b+r*P+a*L+l*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=b*O,e[1]=(w*S*l-g*x*l-w*a*y+r*x*y+g*a*v-r*S*v)*O,e[2]=(f*x*l-w*h*l+w*a*p-r*x*p-f*a*v+r*h*v)*O,e[3]=(g*h*l-f*S*l-g*a*p+r*S*p+f*a*y-r*h*y)*O,e[4]=P*O,e[5]=(_*x*l-T*S*l+T*a*y-t*x*y-_*a*v+t*S*v)*O,e[6]=(T*h*l-c*x*l-T*a*p+t*x*p+c*a*v-t*h*v)*O,e[7]=(c*S*l-_*h*l+_*a*p-t*S*p-c*a*y+t*h*y)*O,e[8]=L*O,e[9]=(T*g*l-_*w*l-T*r*y+t*w*y+_*r*v-t*g*v)*O,e[10]=(c*w*l-T*f*l+T*r*p-t*w*p-c*r*v+t*f*v)*O,e[11]=(_*f*l-c*g*l-_*r*p+t*g*p+c*r*y-t*f*y)*O,e[12]=D*O,e[13]=(_*w*a-T*g*a+T*r*S-t*w*S-_*r*x+t*g*x)*O,e[14]=(T*f*a-c*w*a-T*r*h+t*w*h+c*r*x-t*f*x)*O,e[15]=(c*g*a-_*f*a+_*r*h-t*g*h-c*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,_=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,_*f+r,_*h-a*c,0,p*h-a*f,_*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,_=c+c,g=f+f,S=l*p,y=l*_,T=l*g,w=c*_,x=c*g,v=f*g,b=h*p,P=h*_,L=h*g,D=r.x,F=r.y,O=r.z;return a[0]=(1-(w+v))*D,a[1]=(y+L)*D,a[2]=(T-P)*D,a[3]=0,a[4]=(y-L)*F,a[5]=(1-(S+v))*F,a[6]=(x+b)*F,a[7]=0,a[8]=(T+P)*O,a[9]=(x-b)*O,a[10]=(1-(S+w))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=zs.set(a[0],a[1],a[2]).length();const c=zs.set(a[4],a[5],a[6]).length(),f=zs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),gi.copy(this);const p=1/l,_=1/c,g=1/f;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=bi,h=!1){const p=this.elements,_=2*l/(t-e),g=2*l/(r-a),S=(t+e)/(t-e),y=(r+a)/(r-a);let T,w;if(h)T=l/(c-l),w=c*l/(c-l);else if(f===bi)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===iu)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=bi,h=!1){const p=this.elements,_=2/(t-e),g=2/(r-a),S=-(t+e)/(t-e),y=-(r+a)/(r-a);let T,w;if(h)T=1/(c-l),w=c/(c-l);else if(f===bi)T=-2/(c-l),w=-(c+l)/(c-l);else if(f===iu)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const zs=new K,gi=new $t,yy=new K(0,0,0),My=new K(1,1,1),Tr=new K,Rl=new K,Yn=new K,Wm=new $t,Xm=new fa;class er{constructor(e=0,t=0,r=0,a=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],_=a[9],g=a[2],S=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class h_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ey=0;const jm=new K,Vs=new fa,Xi=new $t,bl=new K,$o=new K,Ty=new K,wy=new fa,qm=new K(1,0,0),Ym=new K(0,1,0),$m=new K(0,0,1),Km={type:"added"},Ay={type:"removed"},Hs={type:"childadded",child:null},hf={type:"childremoved",child:null};class Dn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new K,t=new er,r=new fa,a=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt($o,bl,this.up):Xi.lookAt(bl,$o,this.up),this.quaternion.setFromRotationMatrix(Xi),a&&(Xi.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ay),hf.child=e,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Ty),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),_=c(e.images),g=c(e.shapes),S=c(e.skeletons),y=c(e.animations),T=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Dn.DEFAULT_UP=new K(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new K,ji=new K,pf=new K,qi=new K,Gs=new K,Ws=new K,Zm=new K,mf=new K,gf=new K,_f=new K,vf=new Qt,xf=new Qt,Sf=new Qt;class vi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),_i.subVectors(e,t),a.cross(_i);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){_i.subVectors(a,t),ji.subVectors(r,t),pf.subVectors(e,t);const c=_i.dot(_i),f=_i.dot(ji),h=_i.dot(pf),p=ji.dot(ji),_=ji.dot(pf),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const S=1/g,y=(p*h-f*_)*S,T=(c*_-f*h)*S;return l.set(1-y-T,T,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,qi.x),h.addScaledVector(c,qi.y),h.addScaledVector(f,qi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return vf.setScalar(0),xf.setScalar(0),Sf.setScalar(0),vf.fromBufferAttribute(e,t),xf.fromBufferAttribute(e,r),Sf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(vf,l.x),c.addScaledVector(xf,l.y),c.addScaledVector(Sf,l.z),c}static isFrontFacing(e,t,r,a){return _i.subVectors(r,t),ji.subVectors(e,t),_i.cross(ji).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),_i.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Gs.subVectors(a,r),Ws.subVectors(l,r),mf.subVectors(e,r);const h=Gs.dot(mf),p=Ws.dot(mf);if(h<=0&&p<=0)return t.copy(r);gf.subVectors(e,a);const _=Gs.dot(gf),g=Ws.dot(gf);if(_>=0&&g<=_)return t.copy(a);const S=h*g-_*p;if(S<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(r).addScaledVector(Gs,c);_f.subVectors(e,l);const y=Gs.dot(_f),T=Ws.dot(_f);if(T>=0&&y<=T)return t.copy(l);const w=y*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(Ws,f);const x=_*T-y*g;if(x<=0&&g-_>=0&&y-T>=0)return Zm.subVectors(l,a),f=(g-_)/(g-_+(y-T)),t.copy(a).addScaledVector(Zm,f);const v=1/(x+w+S);return c=w*v,f=S*v,t.copy(r).addScaledVector(Gs,c).addScaledVector(Ws,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function yf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Tt.workingColorSpace){if(e=hy(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=yf(c,l,e+1/3),this.g=yf(c,l,e),this.b=yf(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=ri){function r(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const r=p_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(vt(Tn.r*255,0,255))*65536+Math.round(vt(Tn.g*255,0,255))*256+Math.round(vt(Tn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,a=Tn.g,l=Tn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const _=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ri){Tt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,a=Tn.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Pl);const r=nf(wr.h,Pl.h,t),a=nf(wr.s,Pl.s,t),l=nf(wr.l,Pl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Rt;Rt.NAMES=p_;let Cy=0;class ro extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=$s,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==Lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kf&&(r.blendSrc=this.blendSrc),this.blendDst!==zf&&(r.blendDst=this.blendDst),this.blendEquation!==rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yd extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=$g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new K,Ll=new Lt;let Ry=0;class ai{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Om,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),r=Vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),r=Vn(r,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),r=Vn(r,this.array),a=Vn(a,this.array),l=Vn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}}class m_ extends ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class g_ extends ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class An extends ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}let by=0;const ii=new $t,Mf=new Dn,Xs=new K,$n=new da,Ko=new da,hn=new K;class In extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f_(e)?g_:m_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,r){return ii.makeTranslation(e,t,r),this.applyMatrix4(ii),this}scale(e,t,r){return ii.makeScale(e,t,r),this.applyMatrix4(ii),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ko.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors($n.min,Ko.min),$n.expandByPoint(hn),hn.addVectors($n.max,Ko.max),$n.expandByPoint(hn)):($n.expandByPoint(Ko.min),$n.expandByPoint(Ko.max))}$n.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(hn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)hn.fromBufferAttribute(f,p),h&&(Xs.fromBufferAttribute(e,p),hn.add(Xs)),a=Math.max(a,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let W=0;W<r.count;W++)f[W]=new K,h[W]=new K;const p=new K,_=new K,g=new K,S=new Lt,y=new Lt,T=new Lt,w=new K,x=new K;function v(W,A,R){p.fromBufferAttribute(r,W),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),S.fromBufferAttribute(l,W),y.fromBufferAttribute(l,A),T.fromBufferAttribute(l,R),_.sub(p),g.sub(p),y.sub(S),T.sub(S);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(z),x.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(z),f[W].add(w),f[A].add(w),f[R].add(w),h[W].add(x),h[A].add(x),h[R].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let W=0,A=b.length;W<A;++W){const R=b[W],z=R.start,ee=R.count;for(let J=z,oe=z+ee;J<oe;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new K,L=new K,D=new K,F=new K;function O(W){D.fromBufferAttribute(a,W),F.copy(D);const A=f[W];P.copy(A),P.sub(D.multiplyScalar(D.dot(A))).normalize(),L.crossVectors(F,A);const z=L.dot(h[W])<0?-1:1;c.setXYZW(W,P.x,P.y,P.z,z)}for(let W=0,A=b.length;W<A;++W){const R=b[W],z=R.start,ee=R.count;for(let J=z,oe=z+ee;J<oe;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const a=new K,l=new K,c=new K,f=new K,h=new K,p=new K,_=new K,g=new K;if(e)for(let S=0,y=e.count;S<y;S+=3){const T=e.getX(S+0),w=e.getX(S+1),x=e.getX(S+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),f.add(_),h.add(_),p.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,y=t.count;S<y;S+=3)a.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),c.fromBufferAttribute(t,S+2),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,g=f.normalized,S=new p.constructor(h.length*_);let y=0,T=0;for(let w=0,x=h.length;w<x;w++){f.isInterleavedBufferAttribute?y=h[w]*f.data.stride+f.offset:y=h[w]*_;for(let v=0;v<_;v++)S[T++]=p[y++]}return new ai(S,_,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=e(S,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qm=new $t,Jr=new qd,Nl=new ha,Jm=new K,Dl=new K,Il=new K,Ul=new K,Ef=new K,Fl=new K,eg=new K,Ol=new K;class Di extends Dn{constructor(e=new In,t=new Yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],g=l[h];_!==0&&(Ef.fromBufferAttribute(g,e),c?Fl.addScaledVector(Ef,_):Fl.addScaledVector(Ef.sub(t),_))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Nl,Jm)===null||Jr.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Qm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Qm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,S=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=S.length;T<w;T++){const x=S[T],v=c[x.materialIndex],b=Math.max(x.start,y.start),P=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=b,D=P;L<D;L+=3){const F=f.getX(L),O=f.getX(L+1),W=f.getX(L+2);a=Bl(this,v,e,r,p,_,g,F,O,W),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let x=T,v=w;x<v;x+=3){const b=f.getX(x),P=f.getX(x+1),L=f.getX(x+2);a=Bl(this,c,e,r,p,_,g,b,P,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=S.length;T<w;T++){const x=S[T],v=c[x.materialIndex],b=Math.max(x.start,y.start),P=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let L=b,D=P;L<D;L+=3){const F=L,O=L+1,W=L+2;a=Bl(this,v,e,r,p,_,g,F,O,W),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let x=T,v=w;x<v;x+=3){const b=x,P=x+1,L=x+2;a=Bl(this,c,e,r,p,_,g,b,P,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Py(s,e,t,r,a,l,c,f){let h;if(e.side===Hn?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===Lr,f),h===null)return null;Ol.copy(f),Ol.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ol);return p<t.near||p>t.far?null:{distance:p,point:Ol.clone(),object:s}}function Bl(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,Dl),s.getVertexPosition(h,Il),s.getVertexPosition(p,Ul);const _=Py(s,e,t,r,Dl,Il,Ul,eg);if(_){const g=new K;vi.getBarycoord(eg,Dl,Il,Ul,g),a&&(_.uv=vi.getInterpolatedAttribute(a,f,h,p,g,new Lt)),l&&(_.uv1=vi.getInterpolatedAttribute(l,f,h,p,g,new Lt)),c&&(_.normal=vi.getInterpolatedAttribute(c,f,h,p,g,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:f,b:h,c:p,normal:new K,materialIndex:0};vi.getNormal(Dl,Il,Ul,S.normal),_.face=S,_.barycoord=g}return _}class pa extends In{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],_=[],g=[];let S=0,y=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(g,2));function T(w,x,v,b,P,L,D,F,O,W,A){const R=L/O,z=D/W,ee=L/2,J=D/2,oe=F/2,ue=O+1,le=W+1;let q=0,j=0;const fe=new K;for(let re=0;re<le;re++){const U=re*z-J;for(let ae=0;ae<ue;ae++){const Te=ae*R-ee;fe[w]=Te*b,fe[x]=U*P,fe[v]=oe,p.push(fe.x,fe.y,fe.z),fe[w]=0,fe[x]=0,fe[v]=F>0?1:-1,_.push(fe.x,fe.y,fe.z),g.push(ae/O),g.push(1-re/W),q+=1}}for(let re=0;re<W;re++)for(let U=0;U<O;U++){const ae=S+U+ue*re,Te=S+U+ue*(re+1),Xe=S+(U+1)+ue*(re+1),Ze=S+(U+1)+ue*re;h.push(ae,Te,Ze),h.push(Te,Xe,Ze),j+=6}f.addGroup(y,j,A),y+=j,S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Ln(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const a in r)e[a]=r[a]}return e}function Ly(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function __(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Ny={clone:to,merge:Ln};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class v_ extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new K,tg=new Lt,ng=new Lt;class si extends v_{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,tg,ng),t.subVectors(ng,tg)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tf*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,qs=1;class Uy extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new si(js,qs,e,t);a.layers=this.layers,this.add(a);const l=new si(js,qs,e,t);l.layers=this.layers,this.add(l);const c=new si(js,qs,e,t);c.layers=this.layers,this.add(c);const f=new si(js,qs,e,t);f.layers=this.layers,this.add(f);const h=new si(js,qs,e,t);h.layers=this.layers,this.add(h);const p=new si(js,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,_),e.setRenderTarget(g,S,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class x_ extends Nn{constructor(e=[],t=ls,r,a,l,c,f,h,p,_){super(e,t,r,a,l,c,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S_ extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new x_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new pa(5,5,5),l=new Ii({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ki});l.uniforms.tEquirect.value=t;const c=new Di(a,l),f=t.minFilter;return t.minFilter===os&&(t.minFilter=wn),new Uy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class kl extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class Tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&S>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new kl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Oy extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class By extends Nn{constructor(e=null,t=1,r=1,a,l,c,f,h,p=gn,_=gn,g,S){super(null,c,f,h,p,_,a,l,g,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=new K,ky=new K,zy=new ct;class is{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=wf.subVectors(r,t).cross(ky.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(wf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||zy.getNormalMatrix(e),a=this.coplanarPoint(wf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ha,Vy=new Lt(.5,.5),zl=new K;class y_{constructor(e=new is,t=new is,r=new is,a=new is,l=new is,c=new is){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=bi,r=!1){const a=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],_=l[4],g=l[5],S=l[6],y=l[7],T=l[8],w=l[9],x=l[10],v=l[11],b=l[12],P=l[13],L=l[14],D=l[15];if(a[0].setComponents(p-c,y-_,v-T,D-b).normalize(),a[1].setComponents(p+c,y+_,v+T,D+b).normalize(),a[2].setComponents(p+f,y+g,v+w,D+P).normalize(),a[3].setComponents(p-f,y-g,v-w,D-P).normalize(),r)a[4].setComponents(h,S,x,L).normalize(),a[5].setComponents(p-h,y-S,v-x,D-L).normalize();else if(a[4].setComponents(p-h,y-S,v-x,D-L).normalize(),t===bi)a[5].setComponents(p+h,y+S,v+x,D+L).normalize();else if(t===iu)a[5].setComponents(h,S,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Vy.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(zl.x=a.normal.x>0?e.max.x:e.min.x,zl.y=a.normal.y>0?e.max.y:e.min.y,zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M_ extends ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new K,ou=new K,ig=new $t,Zo=new qd,Vl=new ha,Af=new K,rg=new K;class Hy extends Dn{constructor(e=new In,t=new M_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)su.fromBufferAttribute(t,a-1),ou.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=su.distanceTo(ou);e.setAttribute("lineDistance",new An(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(a),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;ig.copy(a).invert(),Zo.copy(e.ray).applyMatrix4(ig);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const y=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let w=y,x=T-1;w<x;w+=p){const v=_.getX(w),b=_.getX(w+1),P=Hl(this,e,Zo,h,v,b,w);P&&t.push(P)}if(this.isLineLoop){const w=_.getX(T-1),x=_.getX(y),v=Hl(this,e,Zo,h,w,x,T-1);v&&t.push(v)}}else{const y=Math.max(0,c.start),T=Math.min(S.count,c.start+c.count);for(let w=y,x=T-1;w<x;w+=p){const v=Hl(this,e,Zo,h,w,w+1,w);v&&t.push(v)}if(this.isLineLoop){const w=Hl(this,e,Zo,h,T-1,y,T-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Hl(s,e,t,r,a,l,c){const f=s.geometry.attributes.position;if(su.fromBufferAttribute(f,a),ou.fromBufferAttribute(f,l),t.distanceSqToSegment(su,ou,Af,rg)>r)return;Af.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Af);if(!(p<e.near||p>e.far))return{distance:p,point:rg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const sg=new K,og=new K;class Gy extends Hy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)sg.fromBufferAttribute(t,a),og.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+sg.distanceTo(og);e.setAttribute("lineDistance",new An(r,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jl extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ag=new $t,Ld=new qd,Gl=new ha,Wl=new K;class Cf extends Dn{constructor(e=new In,t=new Jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(a),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;ag.copy(a).invert(),Ld.copy(e.ray).applyMatrix4(ag);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let T=S,w=y;T<w;T++){const x=p.getX(T);Wl.fromBufferAttribute(g,x),lg(Wl,x,h,a,e,t,this)}}else{const S=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let T=S,w=y;T<w;T++)Wl.fromBufferAttribute(g,T),lg(Wl,T,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function lg(s,e,t,r,a,l,c){const f=Ld.distanceSqToPoint(s);if(f<t){const h=new K;Ld.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class la extends Nn{constructor(e,t,r=Ni,a,l,c,f=gn,h=gn,p,_=Ji,g=1){if(_!==Ji&&_!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:g};super(S,a,l,c,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wy extends la{constructor(e,t=Ni,r=ls,a,l,c=gn,f=gn,h,p=Ji){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,t,r,a,l,c,f,h,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E_ extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $d extends In{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],c=[];f(a),p(r),_(),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(l.slice(),3)),this.setAttribute("uv",new An(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const P=new K,L=new K,D=new K;for(let F=0;F<t.length;F+=3)y(t[F+0],P),y(t[F+1],L),y(t[F+2],D),h(P,L,D,b)}function h(b,P,L,D){const F=D+1,O=[];for(let W=0;W<=F;W++){O[W]=[];const A=b.clone().lerp(L,W/F),R=P.clone().lerp(L,W/F),z=F-W;for(let ee=0;ee<=z;ee++)ee===0&&W===F?O[W][ee]=A:O[W][ee]=A.clone().lerp(R,ee/z)}for(let W=0;W<F;W++)for(let A=0;A<2*(F-W)-1;A++){const R=Math.floor(A/2);A%2===0?(S(O[W][R+1]),S(O[W+1][R]),S(O[W][R])):(S(O[W][R+1]),S(O[W+1][R+1]),S(O[W+1][R]))}}function p(b){const P=new K;for(let L=0;L<l.length;L+=3)P.x=l[L+0],P.y=l[L+1],P.z=l[L+2],P.normalize().multiplyScalar(b),l[L+0]=P.x,l[L+1]=P.y,l[L+2]=P.z}function _(){const b=new K;for(let P=0;P<l.length;P+=3){b.x=l[P+0],b.y=l[P+1],b.z=l[P+2];const L=x(b)/2/Math.PI+.5,D=v(b)/Math.PI+.5;c.push(L,1-D)}T(),g()}function g(){for(let b=0;b<c.length;b+=6){const P=c[b+0],L=c[b+2],D=c[b+4],F=Math.max(P,L,D),O=Math.min(P,L,D);F>.9&&O<.1&&(P<.2&&(c[b+0]+=1),L<.2&&(c[b+2]+=1),D<.2&&(c[b+4]+=1))}}function S(b){l.push(b.x,b.y,b.z)}function y(b,P){const L=b*3;P.x=e[L+0],P.y=e[L+1],P.z=e[L+2]}function T(){const b=new K,P=new K,L=new K,D=new K,F=new Lt,O=new Lt,W=new Lt;for(let A=0,R=0;A<l.length;A+=9,R+=6){b.set(l[A+0],l[A+1],l[A+2]),P.set(l[A+3],l[A+4],l[A+5]),L.set(l[A+6],l[A+7],l[A+8]),F.set(c[R+0],c[R+1]),O.set(c[R+2],c[R+3]),W.set(c[R+4],c[R+5]),D.copy(b).add(P).add(L).divideScalar(3);const z=x(D);w(F,R+0,b,z),w(O,R+2,P,z),w(W,R+4,L,z)}}function w(b,P,L,D){D<0&&b.x===1&&(c[P]=b.x-1),L.x===0&&L.z===0&&(c[P]=D/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function v(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.vertices,e.indices,e.radius,e.detail)}}class au extends $d{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new au(e.radius,e.detail)}}class hu extends In{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,_=h+1,g=e/f,S=t/h,y=[],T=[],w=[],x=[];for(let v=0;v<_;v++){const b=v*S-c;for(let P=0;P<p;P++){const L=P*g-l;T.push(L,-b,0),w.push(0,0,1),x.push(P/f),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let b=0;b<f;b++){const P=b+p*v,L=b+p*(v+1),D=b+1+p*(v+1),F=b+1+p*v;y.push(P,L,F),y.push(L,D,F)}this.setIndex(y),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(w,3)),this.setAttribute("uv",new An(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xy extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jy extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qy extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class T_ extends v_{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yy extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ug extends Gy{constructor(e=10,t=10,r=4473924,a=8947848){r=new Rt(r),a=new Rt(a);const l=t/2,c=e/t,f=e/2,h=[],p=[];for(let S=0,y=0,T=-f;S<=t;S++,T+=c){h.push(-f,0,T,f,0,T),h.push(T,0,-f,T,0,f);const w=S===l?r:a;w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3}const _=new In;_.setAttribute("position",new An(h,3)),_.setAttribute("color",new An(p,3));const g=new M_({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function cg(s,e,t,r){const a=$y(r);switch(t){case l_:return s*e;case c_:return s*e/a.components*a.byteLength;case Vd:return s*e/a.components*a.byteLength;case Js:return s*e*2/a.components*a.byteLength;case Hd:return s*e*2/a.components*a.byteLength;case u_:return s*e*3/a.components*a.byteLength;case xi:return s*e*4/a.components*a.byteLength;case Gd:return s*e*4/a.components*a.byteLength;case $l:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jf:case td:return Math.max(s,16)*Math.max(e,8)/4;case Qf:case ed:return Math.max(s,8)*Math.max(e,8)/2;case nd:case id:case sd:case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rd:case ad:case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ed:case Td:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ad:case Cd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rd:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $y(s){switch(s){case oi:case r_:return{byteLength:1,components:1};case sa:case s_:case Qi:return{byteLength:2,components:1};case kd:case zd:return{byteLength:2,components:4};case Ni:case Bd:case Ri:return{byteLength:4,components:1};case o_:case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function w_(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ky(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,h,p){const _=h.array,g=h.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<g.length;y++){const T=g[S],w=g[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,g[S]=w)}g.length=S+1;for(let y=0,T=g.length;y<T;y++){const w=g[y];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Zy,alphahash_pars_fragment:Qy,alphamap_fragment:Jy,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:oM,begin_vertex:aM,beginnormal_vertex:lM,bsdfs:uM,iridescence_fragment:cM,bumpmap_pars_fragment:fM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:_M,color_pars_vertex:vM,color_vertex:xM,common:SM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:MM,displacementmap_pars_vertex:EM,displacementmap_vertex:TM,emissivemap_fragment:wM,emissivemap_pars_fragment:AM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:bM,envmap_common_pars_fragment:PM,envmap_pars_fragment:LM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:GM,envmap_vertex:DM,fog_vertex:IM,fog_pars_vertex:UM,fog_fragment:FM,fog_pars_fragment:OM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:kM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:VM,lights_pars_begin:HM,lights_toon_fragment:WM,lights_toon_pars_fragment:XM,lights_phong_fragment:jM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:$M,lights_fragment_begin:KM,lights_fragment_maps:ZM,lights_fragment_end:QM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:oE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:lE,morphinstance_vertex:uE,morphcolor_vertex:cE,morphnormal_vertex:fE,morphtarget_pars_vertex:dE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:_E,normal_vertex:vE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:wE,premultiplied_alpha_fragment:AE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:bE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:DE,shadowmap_vertex:IE,shadowmask_pars_fragment:UE,skinbase_vertex:FE,skinning_pars_vertex:OE,skinning_vertex:BE,skinnormal_vertex:kE,specularmap_fragment:zE,specularmap_pars_fragment:VE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:WE,transmission_pars_fragment:XE,uv_pars_fragment:jE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:$E,background_vert:KE,background_frag:ZE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:r1,distance_frag:s1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:u1,meshbasic_vert:c1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:x1,meshphysical_vert:S1,meshphysical_frag:y1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:T1,points_frag:w1,shadow_vert:A1,shadow_frag:C1,sprite_vert:R1,sprite_frag:b1},Ie={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ci={basic:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Ln([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Ln([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Ln([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Ln([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Ln([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Ln([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Ln([Ie.common,Ie.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Ln([Ie.lights,Ie.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ci.physical={uniforms:Ln([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Xl={r:0,b:0,g:0},ts=new er,P1=new $t;function L1(s,e,t,r,a,l,c){const f=new Rt(0);let h=l===!0?0:1,p,_,g=null,S=0,y=null;function T(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?t:e).get(L)),L}function w(P){let L=!1;const D=T(P);D===null?v(f,h):D&&D.isColor&&(v(D,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,L){const D=T(L);D&&(D.isCubeTexture||D.mapping===du)?(_===void 0&&(_=new Di(new pa(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:to(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),ts.copy(L.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(ts)),_.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ft,(g!==D||S!==D.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=D,S=D.version,y=s.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Di(new hu(2,2),new Ii({name:"BackgroundMaterial",uniforms:to(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ft,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||S!==D.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=D,S=D.version,y=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,L){P.getRGB(Xl,__(s)),r.buffers.color.setClear(Xl.r,Xl.g,Xl.b,L,c)}function b(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,L=1){f.set(P),h=L,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,v(f,h)},render:w,addToRenderList:x,dispose:b}}function N1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=S(null);let l=a,c=!1;function f(R,z,ee,J,oe){let ue=!1;const le=g(J,ee,z);l!==le&&(l=le,p(l.object)),ue=y(R,J,ee,oe),ue&&T(R,J,ee,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,L(R,z,ee,J),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function g(R,z,ee){const J=ee.wireframe===!0;let oe=r[R.id];oe===void 0&&(oe={},r[R.id]=oe);let ue=oe[z.id];ue===void 0&&(ue={},oe[z.id]=ue);let le=ue[J];return le===void 0&&(le=S(h()),ue[J]=le),le}function S(R){const z=[],ee=[],J=[];for(let oe=0;oe<t;oe++)z[oe]=0,ee[oe]=0,J[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ee,attributeDivisors:J,object:R,attributes:{},index:null}}function y(R,z,ee,J){const oe=l.attributes,ue=z.attributes;let le=0;const q=ee.getAttributes();for(const j in q)if(q[j].location>=0){const re=oe[j];let U=ue[j];if(U===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;le++}return l.attributesNum!==le||l.index!==J}function T(R,z,ee,J){const oe={},ue=z.attributes;let le=0;const q=ee.getAttributes();for(const j in q)if(q[j].location>=0){let re=ue[j];re===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),oe[j]=U,le++}l.attributes=oe,l.attributesNum=le,l.index=J}function w(){const R=l.newAttributes;for(let z=0,ee=R.length;z<ee;z++)R[z]=0}function x(R){v(R,0)}function v(R,z){const ee=l.newAttributes,J=l.enabledAttributes,oe=l.attributeDivisors;ee[R]=1,J[R]===0&&(s.enableVertexAttribArray(R),J[R]=1),oe[R]!==z&&(s.vertexAttribDivisor(R,z),oe[R]=z)}function b(){const R=l.newAttributes,z=l.enabledAttributes;for(let ee=0,J=z.length;ee<J;ee++)z[ee]!==R[ee]&&(s.disableVertexAttribArray(ee),z[ee]=0)}function P(R,z,ee,J,oe,ue,le){le===!0?s.vertexAttribIPointer(R,z,ee,oe,ue):s.vertexAttribPointer(R,z,ee,J,oe,ue)}function L(R,z,ee,J){w();const oe=J.attributes,ue=ee.getAttributes(),le=z.defaultAttributeValues;for(const q in ue){const j=ue[q];if(j.location>=0){let fe=oe[q];if(fe===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const re=fe.normalized,U=fe.itemSize,ae=e.get(fe);if(ae===void 0)continue;const Te=ae.buffer,Xe=ae.type,Ze=ae.bytesPerElement,ne=Xe===s.INT||Xe===s.UNSIGNED_INT||fe.gpuType===Bd;if(fe.isInterleavedBufferAttribute){const de=fe.data,ye=de.stride,ke=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<j.locationSize;Ue++)v(j.location+Ue,de.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<j.locationSize;Ue++)x(j.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ue=0;Ue<j.locationSize;Ue++)P(j.location+Ue,U/j.locationSize,Xe,re,ye*Ze,(ke+U/j.locationSize*Ue)*Ze,ne)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)v(j.location+de,fe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<j.locationSize;de++)x(j.location+de);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let de=0;de<j.locationSize;de++)P(j.location+de,U/j.locationSize,Xe,re,U*Ze,U/j.locationSize*de*Ze,ne)}}else if(le!==void 0){const re=le[q];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(j.location,re);break;case 3:s.vertexAttrib3fv(j.location,re);break;case 4:s.vertexAttrib4fv(j.location,re);break;default:s.vertexAttrib1fv(j.location,re)}}}}b()}function D(){W();for(const R in r){const z=r[R];for(const ee in z){const J=z[ee];for(const oe in J)_(J[oe].object),delete J[oe];delete z[ee]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const ee in z){const J=z[ee];for(const oe in J)_(J[oe].object),delete J[oe];delete z[ee]}delete r[R.id]}function O(R){for(const z in r){const ee=r[z];if(ee[R.id]===void 0)continue;const J=ee[R.id];for(const oe in J)_(J[oe].object),delete J[oe];delete ee[R.id]}}function W(){A(),c=!0,l!==a&&(l=a,p(l.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:W,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:b}}function D1(s,e,t){let r;function a(p){r=p}function l(p,_){s.drawArrays(r,p,_),t.update(_,r,1)}function c(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),t.update(_,r,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];t.update(y,r,1)}function h(p,_,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)c(p[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*S[w];t.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function I1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==xi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const W=O===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ri&&!W)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:L,maxSamples:D,samples:F}}function U1(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new is,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||a;return a=S,r=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,S){t=_(g,S,0)},this.setState=function(g,S,y){const T=g.clippingPlanes,w=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!a||T===null||T.length===0||l&&!x)l?_(null):p();else{const b=l?0:r,P=b*4;let L=v.clippingState||null;h.value=L,L=_(T,S,P,y);for(let D=0;D!==P;++D)L[D]=t[D];v.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,y,T){const w=g!==null?g.length:0;let x=null;if(w!==0){if(x=h.value,T!==!0||x===null){const v=y+w*4,b=S.matrixWorldInverse;f.getNormalMatrix(b),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,L=y;P!==w;++P,L+=4)c.copy(g[P]).applyMatrix4(b,f),c.normal.toArray(x,L),x[L+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function F1(s){let e=new WeakMap;function t(c,f){return f===Yf?c.mapping=ls:f===$f&&(c.mapping=Qs),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Yf||f===$f)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new S_(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const br=4,fg=[.125,.215,.35,.446,.526,.582],ss=20,O1=256,Qo=new T_,dg=new Rt;let Rf=null,bf=0,Pf=0,Lf=!1;const B1=new K;class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:f=B1}=l;Rf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,bf,Pf),this._renderer.xr.enabled=Lf,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Qi,format:xi,colorSpace:eo,depthBuffer:!1},a=pg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k1(l)),this._blurMaterial=V1(l,e,t),this._ggxMaterial=z1(l,e,t)}return a}_compileMaterial(e){const t=new Di(new In,e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,r,a,l){const h=new si(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(dg),g.toneMapping=Pi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new pa,new Yd({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let v=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,v=!0):(x.color.copy(dg),v=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[P],l.y,l.z)):L===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[P]));const D=this._cubeSize;Ys(a,L*D,P>2?D:0,D,D),g.setRenderTarget(a),v&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=S,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ls||e.mapping===Qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ys(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Qo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,y=g*S,{_lodMax:T}=this,w=this._sizeLods[r],x=3*w*(r>T-br?r-T+br:0),v=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=T-t,Ys(l,x,v,3*w,2*w),a.setRenderTarget(l),a.render(f,Qo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-r,Ys(e,x,v,3*w,2*w),a.setRenderTarget(e),a.render(f,Qo)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[a];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ss-1),w=l/T,x=isFinite(l)?1+Math.floor(_*w):ss;x>ss&&ot(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);const v=[];let b=0;for(let O=0;O<ss;++O){const W=O/w,A=Math.exp(-W*W/2);v.push(A),O===0?b+=A:O<x&&(b+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/b;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=c==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:P}=this;S.dTheta.value=T,S.mipInt.value=P-r;const L=this._sizeLods[a],D=3*L*(a>P-br?a-P+br:0),F=4*(this._cubeSize-L);Ys(t,D,F,3*L,2*L),h.setRenderTarget(t),h.render(g,Qo)}}function k1(s){const e=[],t=[],r=[];let a=s;const l=s-br+1+fg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);e.push(f);let h=1/f;c>s-br?h=fg[c-s+br-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,w=3,x=2,v=1,b=new Float32Array(w*T*y),P=new Float32Array(x*T*y),L=new Float32Array(v*T*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,W=F>2?0:-1,A=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];b.set(A,w*T*F),P.set(S,x*T*F);const R=[F,F,F,F,F,F];L.set(R,v*T*F)}const D=new In;D.setAttribute("position",new ai(b,w)),D.setAttribute("uv",new ai(P,x)),D.setAttribute("faceIndex",new ai(L,v)),r.push(new Di(D,null)),a>br&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function pg(s,e,t){const r=new Li(s,e,t);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ys(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function z1(s,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function V1(s,e,t){const r=new Float32Array(ss),a=new K(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function mg(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function gg(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Yf||h===$f,_=h===ls||h===Qs;if(p||_){let g=e.get(f);const S=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new hg(s)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&a(y)?(t===null&&(t=new hg(s)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function G1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&aa("WebGLRenderer: "+r+" extension not supported."),a}}}function W1(s,e,t,r){const a={},l=new WeakMap;function c(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",c),delete a[S.id];const y=l.get(S);y&&(e.remove(y),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(g,S){return a[S.id]===!0||(S.addEventListener("dispose",c),a[S.id]=!0,t.memory.geometries++),S}function h(g){const S=g.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,T=g.attributes.position;let w=0;if(y!==null){const b=y.array;w=y.version;for(let P=0,L=b.length;P<L;P+=3){const D=b[P+0],F=b[P+1],O=b[P+2];S.push(D,F,F,O,O,D)}}else if(T!==void 0){const b=T.array;w=T.version;for(let P=0,L=b.length/3-1;P<L;P+=3){const D=P+0,F=P+1,O=P+2;S.push(D,F,F,O,O,D)}}else return;const x=new(f_(S)?g_:m_)(S,1);x.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const S=l.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:_}}function X1(s,e,t){let r;function a(S){r=S}let l,c;function f(S){l=S.type,c=S.bytesPerElement}function h(S,y){s.drawElements(r,y,l,S*c),t.update(y,r,1)}function p(S,y,T){T!==0&&(s.drawElementsInstanced(r,y,l,S*c,T),t.update(y,r,T))}function _(S,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,S,0,T);let x=0;for(let v=0;v<T;v++)x+=y[v];t.update(x,r,1)}function g(S,y,T,w){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/c,y[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,S,0,w,0,T);let v=0;for(let b=0;b<T;b++)v+=y[b]*w[b];t.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function j1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function q1(s,e,t){const r=new WeakMap,a=new Qt;function l(c,f,h){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(f);if(S===void 0||S.count!==g){let R=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let L=0;T===!0&&(L=1),w===!0&&(L=2),x===!0&&(L=3);let D=f.attributes.position.count*L,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*F*4*g),W=new d_(O,D,F,g);W.type=Ri,W.needsUpdate=!0;const A=L*4;for(let z=0;z<g;z++){const ee=v[z],J=b[z],oe=P[z],ue=D*F*4*z;for(let le=0;le<ee.count;le++){const q=le*A;T===!0&&(a.fromBufferAttribute(ee,le),O[ue+q+0]=a.x,O[ue+q+1]=a.y,O[ue+q+2]=a.z,O[ue+q+3]=0),w===!0&&(a.fromBufferAttribute(J,le),O[ue+q+4]=a.x,O[ue+q+5]=a.y,O[ue+q+6]=a.z,O[ue+q+7]=0),x===!0&&(a.fromBufferAttribute(oe,le),O[ue+q+8]=a.x,O[ue+q+9]=a.y,O[ue+q+10]=a.z,O[ue+q+11]=oe.itemSize===4?a.w:1)}}S={count:g,texture:W,size:new Lt(D,F)},r.set(f,S),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function Y1(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==p&&(S.update(),a.set(S,p))}return g}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const $1={[Kg]:"LINEAR_TONE_MAPPING",[Zg]:"REINHARD_TONE_MAPPING",[Qg]:"CINEON_TONE_MAPPING",[Jg]:"ACES_FILMIC_TONE_MAPPING",[t_]:"AGX_TONE_MAPPING",[n_]:"NEUTRAL_TONE_MAPPING",[e_]:"CUSTOM_TONE_MAPPING"};function K1(s,e,t,r,a){const l=new Li(e,t,{type:s,depthBuffer:r,stencilBuffer:a}),c=new Li(e,t,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),f=new In;f.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new An([0,2,0,0,2,0],2));const h=new Xy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Di(f,h),_=new T_(-1,1,1,-1,0,1);let g=null,S=null,y=!1,T,w=null,x=[],v=!1;this.setSize=function(b,P){l.setSize(b,P),c.setSize(b,P);for(let L=0;L<x.length;L++){const D=x[L];D.setSize&&D.setSize(b,P)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;const P=l.width,L=l.height;for(let D=0;D<x.length;D++){const F=x[D];F.setSize&&F.setSize(P,L)}},this.begin=function(b,P){if(y||b.toneMapping===Pi&&x.length===0)return!1;if(w=P,P!==null){const L=P.width,D=P.height;(l.width!==L||l.height!==D)&&this.setSize(L,D)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Pi,!0},this.hasRenderPass=function(){return v},this.end=function(b,P){b.toneMapping=T,y=!0;let L=l,D=c;for(let F=0;F<x.length;F++){const O=x[F];if(O.enabled!==!1&&(O.render(b,D,L,P),O.needsSwap!==!1)){const W=L;L=D,D=W}}if(g!==b.outputColorSpace||S!==b.toneMapping){g=b.outputColorSpace,S=b.toneMapping,h.defines={},Tt.getTransfer(g)===Ft&&(h.defines.SRGB_TRANSFER="");const F=$1[S];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(w),b.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const A_=new Nn,Nd=new la(1,1),C_=new d_,R_=new xy,b_=new x_,_g=[],vg=[],xg=new Float32Array(16),Sg=new Float32Array(9),yg=new Float32Array(4);function so(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=_g[a];if(l===void 0&&(l=new Float32Array(a),_g[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function mu(s,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Z1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function tT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;yg.set(r),s.uniformMatrix2fv(this.addr,!1,yg),an(t,r)}}function nT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;Sg.set(r),s.uniformMatrix3fv(this.addr,!1,Sg),an(t,r)}}function iT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;xg.set(r),s.uniformMatrix4fv(this.addr,!1,xg),an(t,r)}}function rT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function aT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function lT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function fT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function dT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Nd.compareFunction=t.isReversedDepthBuffer()?Xd:Wd,l=Nd):l=A_,t.setTexture2D(e||l,a)}function hT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||R_,a)}function pT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||b_,a)}function mT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||C_,a)}function gT(s){switch(s){case 5126:return Z1;case 35664:return Q1;case 35665:return J1;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return uT;case 36295:return cT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function _T(s,e){s.uniform1fv(this.addr,e)}function vT(s,e){const t=so(e,this.size,2);s.uniform2fv(this.addr,t)}function xT(s,e){const t=so(e,this.size,3);s.uniform3fv(this.addr,t)}function ST(s,e){const t=so(e,this.size,4);s.uniform4fv(this.addr,t)}function yT(s,e){const t=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function MT(s,e){const t=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ET(s,e){const t=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function TT(s,e){s.uniform1iv(this.addr,e)}function wT(s,e){s.uniform2iv(this.addr,e)}function AT(s,e){s.uniform3iv(this.addr,e)}function CT(s,e){s.uniform4iv(this.addr,e)}function RT(s,e){s.uniform1uiv(this.addr,e)}function bT(s,e){s.uniform2uiv(this.addr,e)}function PT(s,e){s.uniform3uiv(this.addr,e)}function LT(s,e){s.uniform4uiv(this.addr,e)}function NT(s,e,t){const r=this.cache,a=e.length,l=mu(t,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Nd:c=A_;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,l[f])}function DT(s,e,t){const r=this.cache,a=e.length,l=mu(t,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||R_,l[c])}function IT(s,e,t){const r=this.cache,a=e.length,l=mu(t,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||b_,l[c])}function UT(s,e,t){const r=this.cache,a=e.length,l=mu(t,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||C_,l[c])}function FT(s){switch(s){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return ST;case 35674:return yT;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return wT;case 35668:case 35672:return AT;case 35669:case 35673:return CT;case 5125:return RT;case 36294:return bT;case 36295:return PT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return UT}}class OT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gT(t.type)}}class BT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FT(t.type)}}class kT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function Mg(s,e){s.seq.push(e),s.map[e.id]=e}function zT(s,e,t){const r=s.name,a=r.length;for(Nf.lastIndex=0;;){const l=Nf.exec(r),c=Nf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Mg(t,p===void 0?new OT(f,s,e):new BT(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new kT(f),Mg(t,g)),t=g}}}class eu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);zT(f,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Eg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const VT=37297;let HT=0;function GT(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Tg=new ct;function WT(s){Tt._getMatrix(Tg,Tt.workingColorSpace,s);const e=`mat3( ${Tg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case nu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+GT(s.getShaderSource(e),f)}else return l}function XT(s,e){const t=WT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jT={[Kg]:"Linear",[Zg]:"Reinhard",[Qg]:"Cineon",[Jg]:"ACESFilmic",[t_]:"AgX",[n_]:"Neutral",[e_]:"Custom"};function qT(s,e){const t=jT[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new K;function YT(){Tt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function KT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ZT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function na(s){return s!==""}function Ag(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(s){return s.replace(QT,ew)}const JT=new Map;function ew(s,e){let t=dt[e];if(t===void 0){const r=JT.get(e);if(r!==void 0)t=dt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(s){return s.replace(tw,nw)}function nw(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function bg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iw={[Yl]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function rw(s){return iw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sw={[ls]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function ow(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":sw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const aw={[Qs]:"ENVMAP_MODE_REFRACTION"};function lw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":aw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uw={[$g]:"ENVMAP_BLENDING_MULTIPLY",[JS]:"ENVMAP_BLENDING_MIX",[ey]:"ENVMAP_BLENDING_ADD"};function cw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uw[s.combine]||"ENVMAP_BLENDING_NONE"}function fw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dw(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=rw(t),p=ow(t),_=lw(t),g=cw(t),S=fw(t),y=$T(t),T=KT(l),w=a.createProgram();let x,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(na).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(na).join(`
`),v.length>0&&(v+=`
`)):(x=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),v=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?dt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?qT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,XT("linearToOutputTexel",t.outputColorSpace),YT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),c=Dd(c),c=Ag(c,t),c=Cg(c,t),f=Dd(f),f=Ag(f,t),f=Cg(f,t),c=Rg(c),f=Rg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=b+x+c,L=b+v+f,D=Eg(a,a.VERTEX_SHADER,P),F=Eg(a,a.FRAGMENT_SHADER,L);a.attachShader(w,D),a.attachShader(w,F),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function O(z){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(w)||"",J=a.getShaderInfoLog(D)||"",oe=a.getShaderInfoLog(F)||"",ue=ee.trim(),le=J.trim(),q=oe.trim();let j=!0,fe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,D,F);else{const re=wg(a,D,"vertex"),U=wg(a,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+re+`
`+U)}else ue!==""?ot("WebGLProgram: Program Info Log:",ue):(le===""||q==="")&&(fe=!1);fe&&(z.diagnostics={runnable:j,programLog:ue,vertexShader:{log:le,prefix:x},fragmentShader:{log:q,prefix:v}})}a.deleteShader(D),a.deleteShader(F),W=new eu(a,w),A=ZT(a,w)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,VT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=F,this}let hw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new mw(e),t.set(e,r)),r}}class mw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function gw(s,e,t,r,a,l,c){const f=new h_,h=new pw,p=new Set,_=[],g=new Map,S=a.logarithmicDepthBuffer;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function x(A,R,z,ee,J){const oe=ee.fog,ue=J.geometry,le=A.isMeshStandardMaterial?ee.environment:null,q=(A.isMeshStandardMaterial?t:e).get(A.envMap||le),j=q&&q.mapping===du?q.image.height:null,fe=T[A.type];A.precision!==null&&(y=a.getMaxPrecision(A.precision),y!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const re=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,U=re!==void 0?re.length:0;let ae=0;ue.morphAttributes.position!==void 0&&(ae=1),ue.morphAttributes.normal!==void 0&&(ae=2),ue.morphAttributes.color!==void 0&&(ae=3);let Te,Xe,Ze,ne;if(fe){const yt=Ci[fe];Te=yt.vertexShader,Xe=yt.fragmentShader}else Te=A.vertexShader,Xe=A.fragmentShader,h.update(A),Ze=h.getVertexShaderID(A),ne=h.getFragmentShaderID(A);const de=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,mt=!!A.map,Kt=!!A.matcap,ht=!!q,xt=!!A.aoMap,Nt=!!A.lightMap,ut=!!A.bumpMap,Ht=!!A.normalMap,k=!!A.displacementMap,Gt=!!A.emissiveMap,gt=!!A.metalnessMap,St=!!A.roughnessMap,je=A.anisotropy>0,N=A.clearcoat>0,M=A.dispersion>0,G=A.iridescence>0,he=A.sheen>0,me=A.transmission>0,ce=je&&!!A.anisotropyMap,$e=N&&!!A.clearcoatMap,we=N&&!!A.clearcoatNormalMap,ze=N&&!!A.clearcoatRoughnessMap,it=G&&!!A.iridescenceMap,Se=G&&!!A.iridescenceThicknessMap,be=he&&!!A.sheenColorMap,Ge=he&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Ce=!!A.specularColorMap,lt=!!A.specularIntensityMap,V=me&&!!A.transmissionMap,Ne=me&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,ve=A.alphaTest>0,pe=!!A.alphaHash,Re=!!A.extensions;let rt=Pi;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(rt=s.toneMapping);const It={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:Te,fragmentShader:Xe,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:eo,alphaToCoverage:!!A.alphaToCoverage,map:mt,matcap:Kt,envMap:ht,envMapMode:ht&&q.mapping,envMapCubeUVHeight:j,aoMap:xt,lightMap:Nt,bumpMap:ut,normalMap:Ht,displacementMap:k,emissiveMap:Gt,normalMapObjectSpace:Ht&&A.normalMapType===ry,normalMapTangentSpace:Ht&&A.normalMapType===iy,metalnessMap:gt,roughnessMap:St,anisotropy:je,anisotropyMap:ce,clearcoat:N,clearcoatMap:$e,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:M,iridescence:G,iridescenceMap:it,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:be,sheenRoughnessMap:Ge,specularMap:qe,specularColorMap:Ce,specularIntensityMap:lt,transmission:me,transmissionMap:V,thicknessMap:Ne,gradientMap:Me,opaque:A.transparent===!1&&A.blending===$s&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:pe,combine:A.combine,mapUv:mt&&w(A.map.channel),aoMapUv:xt&&w(A.aoMap.channel),lightMapUv:Nt&&w(A.lightMap.channel),bumpMapUv:ut&&w(A.bumpMap.channel),normalMapUv:Ht&&w(A.normalMap.channel),displacementMapUv:k&&w(A.displacementMap.channel),emissiveMapUv:Gt&&w(A.emissiveMap.channel),metalnessMapUv:gt&&w(A.metalnessMap.channel),roughnessMapUv:St&&w(A.roughnessMap.channel),anisotropyMapUv:ce&&w(A.anisotropyMap.channel),clearcoatMapUv:$e&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(A.sheenRoughnessMap.channel),specularMapUv:qe&&w(A.specularMap.channel),specularColorMapUv:Ce&&w(A.specularColorMap.channel),specularIntensityMapUv:lt&&w(A.specularIntensityMap.channel),transmissionMapUv:V&&w(A.transmissionMap.channel),thicknessMapUv:Ne&&w(A.thicknessMap.channel),alphaMapUv:De&&w(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Ht||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ue.attributes.uv&&(mt||De),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ye,skinning:J.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:mt&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Ft,decodeVideoTextureEmissive:Gt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Yi,flipSided:A.side===Hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(b(R,A),P(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function P(A,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),A.push(f.mask)}function L(A){const R=T[A.type];let z;if(R){const ee=Ci[R];z=Ny.clone(ee.uniforms)}else z=A.uniforms;return z}function D(A,R){let z=g.get(R);return z!==void 0?++z.usedTimes:(z=new dw(s,R,A,l),_.push(z),g.set(R,z)),z}function F(A){if(--A.usedTimes===0){const R=_.indexOf(A);_[R]=_[_.length-1],_.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){h.remove(A)}function W(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:L,acquireProgram:D,releaseProgram:F,releaseShaderCache:O,programs:_,dispose:W}}function _w(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function vw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(g,S,y,T,w,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:T,renderOrder:g.renderOrder,z:w,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=x),e++,v}function f(g,S,y,T,w,x){const v=c(g,S,y,T,w,x);y.transmission>0?r.push(v):y.transparent===!0?a.push(v):t.push(v)}function h(g,S,y,T,w,x){const v=c(g,S,y,T,w,x);y.transmission>0?r.unshift(v):y.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,S){t.length>1&&t.sort(g||vw),r.length>1&&r.sort(S||Pg),a.length>1&&a.sort(S||Pg)}function _(){for(let g=e,S=s.length;g<S;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:_,sort:p}}function xw(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Lg,s.set(r,[c])):a>=l.length?(c=new Lg,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function Sw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Rt};break;case"SpotLight":t={position:new K,direction:new K,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mw=0;function Ew(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Tw(s){const e=new Sw,t=yw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const a=new K,l=new $t,c=new $t;function f(p){let _=0,g=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,T=0,w=0,x=0,v=0,b=0,P=0,L=0,D=0,F=0,O=0;p.sort(Ew);for(let A=0,R=p.length;A<R;A++){const z=p[A],ee=z.color,J=z.intensity,oe=z.distance;let ue=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Js?ue=z.shadow.map.texture:ue=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=ee.r*J,g+=ee.g*J,S+=ee.b*J;else if(z.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(z.sh.coefficients[le],J);O++}else if(z.isDirectionalLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,j=t.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=z.shadow.matrix,b++}r.directional[y]=le,y++}else if(z.isSpotLight){const le=e.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy(ee).multiplyScalar(J),le.distance=oe,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,r.spot[w]=le;const q=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,q.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[w]=q.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[w]=j,r.spotShadowMap[w]=ue,L++}w++}else if(z.isRectAreaLight){const le=e.get(z);le.color.copy(ee).multiplyScalar(J),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=le,x++}else if(z.isPointLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),le.distance=z.distance,le.decay=z.decay,z.castShadow){const q=z.shadow,j=t.get(z);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=z.shadow.matrix,P++}r.point[T]=le,T++}else if(z.isHemisphereLight){const le=e.get(z);le.skyColor.copy(z.color).multiplyScalar(J),le.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[v]=le,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==y||W.pointLength!==T||W.spotLength!==w||W.rectAreaLength!==x||W.hemiLength!==v||W.numDirectionalShadows!==b||W.numPointShadows!==P||W.numSpotShadows!==L||W.numSpotMaps!==D||W.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=x,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+D-F,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,W.directionalLength=y,W.pointLength=T,W.spotLength=w,W.rectAreaLength=x,W.hemiLength=v,W.numDirectionalShadows=b,W.numPointShadows=P,W.numSpotShadows=L,W.numSpotMaps=D,W.numLightProbes=O,r.version=Mw++)}function h(p,_){let g=0,S=0,y=0,T=0,w=0;const x=_.matrixWorldInverse;for(let v=0,b=p.length;v<b;v++){const P=p[v];if(P.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),g++}else if(P.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),y++}else if(P.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),T++}else if(P.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(x),w++}}}return{setup:f,setupView:h,state:r}}function Ng(s){const e=new Tw(s),t=[],r=[];function a(_){p.camera=_,t.length=0,r.length=0}function l(_){t.push(_)}function c(_){r.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function ww(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Ng(s),e.set(a,[f])):l>=c.length?(f=new Ng(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],bw=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Dg=new $t,Jo=new K,Df=new K;function Pw(s,e,t){let r=new y_;const a=new Lt,l=new Lt,c=new Qt,f=new jy,h=new qy,p={},_=t.maxTextureSize,g={[Lr]:Hn,[Hn]:Lr,[Yi]:Yi},S=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Aw,fragmentShader:Cw}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new In;T.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let v=this.type;this.render=function(F,O,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;F.type===IS&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Yl);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Ki),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const J=v!==this.type;J&&O.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(ue=>ue.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,ue=F.length;oe<ue;oe++){const le=F[oe],q=le.shadow;if(q===void 0){ot("WebGLShadowMap:",le,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const j=q.getFrameExtents();if(a.multiply(j),l.copy(q.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/j.x),a.x=l.x*j.x,q.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/j.y),a.y=l.y*j.y,q.mapSize.y=l.y)),q.map===null||J===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ta){if(le.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Li(a.x,a.y,{format:Js,type:Qi,minFilter:wn,magFilter:wn,generateMipmaps:!1}),q.map.texture.name=le.name+".shadowMap",q.map.depthTexture=new la(a.x,a.y,Ri),q.map.depthTexture.name=le.name+".shadowMapDepth",q.map.depthTexture.format=Ji,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=gn,q.map.depthTexture.magFilter=gn}else{le.isPointLight?(q.map=new S_(a.x),q.map.depthTexture=new Wy(a.x,Ni)):(q.map=new Li(a.x,a.y),q.map.depthTexture=new la(a.x,a.y,Ni)),q.map.depthTexture.name=le.name+".shadowMap",q.map.depthTexture.format=Ji;const re=s.state.buffers.depth.getReversed();this.type===Yl?(q.map.depthTexture.compareFunction=re?Xd:Wd,q.map.depthTexture.minFilter=wn,q.map.depthTexture.magFilter=wn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=gn,q.map.depthTexture.magFilter=gn)}q.camera.updateProjectionMatrix()}const fe=q.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<fe;re++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,re),s.clear();else{re===0&&(s.setRenderTarget(q.map),s.clear());const U=q.getViewport(re);c.set(l.x*U.x,l.y*U.y,l.x*U.z,l.y*U.w),ee.viewport(c)}if(le.isPointLight){const U=q.camera,ae=q.matrix,Te=le.distance||U.far;Te!==U.far&&(U.far=Te,U.updateProjectionMatrix()),Jo.setFromMatrixPosition(le.matrixWorld),U.position.copy(Jo),Df.copy(U.position),Df.add(Rw[re]),U.up.copy(bw[re]),U.lookAt(Df),U.updateMatrixWorld(),ae.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Dg.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Dg,U.coordinateSystem,U.reversedDepth)}else q.updateMatrices(le);r=q.getFrustum(),L(O,W,q.camera,le,this.type)}q.isPointLightShadow!==!0&&this.type===ta&&b(q,W),q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(A,R,z)};function b(F,O){const W=e.update(w);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Li(a.x,a.y,{format:Js,type:Qi})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,W,S,w,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,W,y,w,null)}function P(F,O,W,A){let R=null;const z=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=W.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ee=R.uuid,J=O.uuid;let oe=p[ee];oe===void 0&&(oe={},p[ee]=oe);let ue=oe[J];ue===void 0&&(ue=R.clone(),oe[J]=ue,O.addEventListener("dispose",D)),R=ue}if(R.visible=O.visible,R.wireframe=O.wireframe,A===ta?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=s.properties.get(R);ee.light=W}return R}function L(F,O,W,A,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ta)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const J=e.update(F),oe=F.material;if(Array.isArray(oe)){const ue=J.groups;for(let le=0,q=ue.length;le<q;le++){const j=ue[le],fe=oe[j.materialIndex];if(fe&&fe.visible){const re=P(F,fe,A,R);F.onBeforeShadow(s,F,O,W,J,re,j),s.renderBufferDirect(W,null,J,re,F,j),F.onAfterShadow(s,F,O,W,J,re,j)}}}else if(oe.visible){const ue=P(F,oe,A,R);F.onBeforeShadow(s,F,O,W,J,ue,null),s.renderBufferDirect(W,null,J,ue,F,null),F.onAfterShadow(s,F,O,W,J,ue,null)}}const ee=F.children;for(let J=0,oe=ee.length;J<oe;J++)L(ee[J],O,W,A,R)}function D(F){F.target.removeEventListener("dispose",D);for(const W in p){const A=p[W],R=F.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const Lw={[Vf]:Hf,[Gf]:jf,[Wf]:qf,[Zs]:Xf,[Hf]:Vf,[jf]:Gf,[qf]:Wf,[Xf]:Zs};function Nw(s,e){function t(){let V=!1;const Ne=new Qt;let Me=null;const De=new Qt(0,0,0,0);return{setMask:function(ve){Me!==ve&&!V&&(s.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){V=ve},setClear:function(ve,pe,Re,rt,It){It===!0&&(ve*=rt,pe*=rt,Re*=rt),Ne.set(ve,pe,Re,rt),De.equals(Ne)===!1&&(s.clearColor(ve,pe,Re,rt),De.copy(Ne))},reset:function(){V=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let V=!1,Ne=!1,Me=null,De=null,ve=null;return{setReversed:function(pe){if(Ne!==pe){const Re=e.get("EXT_clip_control");pe?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=pe;const rt=ve;ve=null,this.setClear(rt)}},getReversed:function(){return Ne},setTest:function(pe){pe?de(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!V&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Ne&&(pe=Lw[pe]),De!==pe){switch(pe){case Vf:s.depthFunc(s.NEVER);break;case Hf:s.depthFunc(s.ALWAYS);break;case Gf:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Wf:s.depthFunc(s.EQUAL);break;case Xf:s.depthFunc(s.GEQUAL);break;case jf:s.depthFunc(s.GREATER);break;case qf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ve!==pe&&(Ne&&(pe=1-pe),s.clearDepth(pe),ve=pe)},reset:function(){V=!1,Me=null,De=null,ve=null,Ne=!1}}}function a(){let V=!1,Ne=null,Me=null,De=null,ve=null,pe=null,Re=null,rt=null,It=null;return{setTest:function(yt){V||(yt?de(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(yt){Ne!==yt&&!V&&(s.stencilMask(yt),Ne=yt)},setFunc:function(yt,Gn,Cn){(Me!==yt||De!==Gn||ve!==Cn)&&(s.stencilFunc(yt,Gn,Cn),Me=yt,De=Gn,ve=Cn)},setOp:function(yt,Gn,Cn){(pe!==yt||Re!==Gn||rt!==Cn)&&(s.stencilOp(yt,Gn,Cn),pe=yt,Re=Gn,rt=Cn)},setLocked:function(yt){V=yt},setClear:function(yt){It!==yt&&(s.clearStencil(yt),It=yt)},reset:function(){V=!1,Ne=null,Me=null,De=null,ve=null,pe=null,Re=null,rt=null,It=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],T=null,w=!1,x=null,v=null,b=null,P=null,L=null,D=null,F=null,O=new Rt(0,0,0),W=0,A=!1,R=null,z=null,ee=null,J=null,oe=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),le=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),le=q>=2);let fe=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Te=new Qt().fromArray(U),Xe=new Qt().fromArray(ae);function Ze(V,Ne,Me,De){const ve=new Uint8Array(4),pe=s.createTexture();s.bindTexture(V,pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Me;Re++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Ne+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return pe}const ne={};ne[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),de(s.DEPTH_TEST),c.setFunc(Zs),ut(!1),Ht(Nm),de(s.CULL_FACE),xt(Ki);function de(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function ye(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function ke(V,Ne){return g[V]!==Ne?(s.bindFramebuffer(V,Ne),g[V]=Ne,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ue(V,Ne){let Me=y,De=!1;if(V){Me=S.get(Ne),Me===void 0&&(Me=[],S.set(Ne,Me));const ve=V.textures;if(Me.length!==ve.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Re=ve.length;pe<Re;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=ve.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function mt(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const Kt={[rs]:s.FUNC_ADD,[FS]:s.FUNC_SUBTRACT,[OS]:s.FUNC_REVERSE_SUBTRACT};Kt[BS]=s.MIN,Kt[kS]=s.MAX;const ht={[zS]:s.ZERO,[VS]:s.ONE,[HS]:s.SRC_COLOR,[kf]:s.SRC_ALPHA,[YS]:s.SRC_ALPHA_SATURATE,[jS]:s.DST_COLOR,[WS]:s.DST_ALPHA,[GS]:s.ONE_MINUS_SRC_COLOR,[zf]:s.ONE_MINUS_SRC_ALPHA,[qS]:s.ONE_MINUS_DST_COLOR,[XS]:s.ONE_MINUS_DST_ALPHA,[$S]:s.CONSTANT_COLOR,[KS]:s.ONE_MINUS_CONSTANT_COLOR,[ZS]:s.CONSTANT_ALPHA,[QS]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(V,Ne,Me,De,ve,pe,Re,rt,It,yt){if(V===Ki){w===!0&&(ye(s.BLEND),w=!1);return}if(w===!1&&(de(s.BLEND),w=!0),V!==US){if(V!==x||yt!==A){if((v!==rs||L!==rs)&&(s.blendEquation(s.FUNC_ADD),v=rs,L=rs),yt)switch(V){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dm:s.blendFunc(s.ONE,s.ONE);break;case Im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Um:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Im:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Um:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}b=null,P=null,D=null,F=null,O.set(0,0,0),W=0,x=V,A=yt}return}ve=ve||Ne,pe=pe||Me,Re=Re||De,(Ne!==v||ve!==L)&&(s.blendEquationSeparate(Kt[Ne],Kt[ve]),v=Ne,L=ve),(Me!==b||De!==P||pe!==D||Re!==F)&&(s.blendFuncSeparate(ht[Me],ht[De],ht[pe],ht[Re]),b=Me,P=De,D=pe,F=Re),(rt.equals(O)===!1||It!==W)&&(s.blendColor(rt.r,rt.g,rt.b,It),O.copy(rt),W=It),x=V,A=!1}function Nt(V,Ne){V.side===Yi?ye(s.CULL_FACE):de(s.CULL_FACE);let Me=V.side===Hn;Ne&&(Me=!Me),ut(Me),V.blending===$s&&V.transparent===!1?xt(Ki):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const De=V.stencilWrite;f.setTest(De),De&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function Ht(V){V!==NS?(de(s.CULL_FACE),V!==z&&(V===Nm?s.cullFace(s.BACK):V===DS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),z=V}function k(V){V!==ee&&(le&&s.lineWidth(V),ee=V)}function Gt(V,Ne,Me){V?(de(s.POLYGON_OFFSET_FILL),(J!==Ne||oe!==Me)&&(s.polygonOffset(Ne,Me),J=Ne,oe=Me)):ye(s.POLYGON_OFFSET_FILL)}function gt(V){V?de(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function St(V){V===void 0&&(V=s.TEXTURE0+ue-1),fe!==V&&(s.activeTexture(V),fe=V)}function je(V,Ne,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ue-1:Me=fe);let De=re[Me];De===void 0&&(De={type:void 0,texture:void 0},re[Me]=De),(De.type!==V||De.texture!==Ne)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(V,Ne||ne[V]),De.type=V,De.texture=Ne)}function N(){const V=re[fe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function he(){try{s.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function me(){try{s.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function we(){try{s.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ze(){try{s.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function it(){try{s.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Se(){try{s.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function be(V){Te.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Te.copy(V))}function Ge(V){Xe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Xe.copy(V))}function qe(V,Ne){let Me=p.get(Ne);Me===void 0&&(Me=new WeakMap,p.set(Ne,Me));let De=Me.get(V);De===void 0&&(De=s.getUniformBlockIndex(Ne,V.name),Me.set(V,De))}function Ce(V,Ne){const De=p.get(Ne).get(V);h.get(Ne)!==De&&(s.uniformBlockBinding(Ne,De,V.__bindingPointIndex),h.set(Ne,De))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},fe=null,re={},g={},S=new WeakMap,y=[],T=null,w=!1,x=null,v=null,b=null,P=null,L=null,D=null,F=null,O=new Rt(0,0,0),W=0,A=!1,R=null,z=null,ee=null,J=null,oe=null,Te.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:de,disable:ye,bindFramebuffer:ke,drawBuffers:Ue,useProgram:mt,setBlending:xt,setMaterial:Nt,setFlipSided:ut,setCullFace:Ht,setLineWidth:k,setPolygonOffset:Gt,setScissorTest:gt,activeTexture:St,bindTexture:je,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:it,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:ze,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:$e,scissor:be,viewport:Ge,reset:lt}}function Dw(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,M){return y?new OffscreenCanvas(N,M):ru("canvas")}function w(N,M,G){let he=1;const me=je(N);if((me.width>G||me.height>G)&&(he=G/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(he*me.width),$e=Math.floor(he*me.height);g===void 0&&(g=T(ce,$e));const we=M?T(ce,$e):g;return we.width=ce,we.height=$e,we.getContext("2d").drawImage(N,0,0,ce,$e),ot("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+$e+")."),we}else return"data"in N&&ot("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function x(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,M,G,he,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=M;if(M===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.R8UI),G===s.UNSIGNED_SHORT&&(ce=s.R16UI),G===s.UNSIGNED_INT&&(ce=s.R32UI),G===s.BYTE&&(ce=s.R8I),G===s.SHORT&&(ce=s.R16I),G===s.INT&&(ce=s.R32I)),M===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.RG8UI),G===s.UNSIGNED_SHORT&&(ce=s.RG16UI),G===s.UNSIGNED_INT&&(ce=s.RG32UI),G===s.BYTE&&(ce=s.RG8I),G===s.SHORT&&(ce=s.RG16I),G===s.INT&&(ce=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),G===s.UNSIGNED_INT&&(ce=s.RGB32UI),G===s.BYTE&&(ce=s.RGB8I),G===s.SHORT&&(ce=s.RGB16I),G===s.INT&&(ce=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),G===s.UNSIGNED_INT&&(ce=s.RGBA32UI),G===s.BYTE&&(ce=s.RGBA8I),G===s.SHORT&&(ce=s.RGBA16I),G===s.INT&&(ce=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),M===s.RGBA){const $e=me?nu:Tt.getTransfer(he);G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=$e===Ft?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(N,M){let G;return N?M===null||M===Ni||M===oa?G=s.DEPTH24_STENCIL8:M===Ri?G=s.DEPTH32F_STENCIL8:M===sa&&(G=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===oa?G=s.DEPTH_COMPONENT24:M===Ri?G=s.DEPTH_COMPONENT32F:M===sa&&(G=s.DEPTH_COMPONENT16),G}function D(N,M){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function F(N){const M=N.target;M.removeEventListener("dispose",F),W(M),M.isVideoTexture&&_.delete(M)}function O(N){const M=N.target;M.removeEventListener("dispose",O),R(M)}function W(N){const M=r.get(N);if(M.__webglInit===void 0)return;const G=N.source,he=S.get(G);if(he){const me=he[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(N),Object.keys(he).length===0&&S.delete(G)}r.remove(N)}function A(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const G=N.source,he=S.get(G);delete he[M.__cacheKey],c.memory.textures--}function R(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let me=0;me<M.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[he][me]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=N.textures;for(let he=0,me=G.length;he<me;he++){const ce=r.get(G[he]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),r.remove(G[he])}r.remove(N)}let z=0;function ee(){z=0}function J(){const N=z;return N>=a.maxTextures&&ot("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),z+=1,N}function oe(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function ue(N,M){const G=r.get(N);if(N.isVideoTexture&&gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const he=N.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(G,N,M);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function le(N,M){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ne(G,N,M);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function q(N,M){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ne(G,N,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function j(N,M){const G=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){de(G,N,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const fe={[Kf]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Zf]:s.MIRRORED_REPEAT},re={[gn]:s.NEAREST,[ty]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[ef]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},U={[sy]:s.NEVER,[cy]:s.ALWAYS,[oy]:s.LESS,[Wd]:s.LEQUAL,[ay]:s.EQUAL,[Xd]:s.GEQUAL,[ly]:s.GREATER,[uy]:s.NOTEQUAL};function ae(N,M){if(M.type===Ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===ef||M.magFilter===Ml||M.magFilter===os||M.minFilter===wn||M.minFilter===ef||M.minFilter===Ml||M.minFilter===os)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,fe[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,fe[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,fe[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==Ml&&M.minFilter!==os||M.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Te(N,M){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",F));const he=M.source;let me=S.get(he);me===void 0&&(me={},S.set(he,me));const ce=oe(M);if(ce!==N.__cacheKey){me[ce]===void 0&&(me[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,G=!0),me[ce].usedTimes++;const $e=me[N.__cacheKey];$e!==void 0&&(me[N.__cacheKey].usedTimes--,$e.usedTimes===0&&A(M)),N.__cacheKey=ce,N.__webglTexture=me[ce].texture}return G}function Xe(N,M,G){return Math.floor(Math.floor(N/G)/M)}function Ze(N,M,G,he){const ce=N.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,he,M.data);else{ce.sort((Se,be)=>Se.start-be.start);let $e=0;for(let Se=1;Se<ce.length;Se++){const be=ce[$e],Ge=ce[Se],qe=be.start+be.count,Ce=Xe(Ge.start,M.width,4),lt=Xe(be.start,M.width,4);Ge.start<=qe+1&&Ce===lt&&Xe(Ge.start+Ge.count-1,M.width,4)===Ce?be.count=Math.max(be.count,Ge.start+Ge.count-be.start):(++$e,ce[$e]=Ge)}ce.length=$e+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Se=0,be=ce.length;Se<be;Se++){const Ge=ce[Se],qe=Math.floor(Ge.start/4),Ce=Math.ceil(Ge.count/4),lt=qe%M.width,V=Math.floor(qe/M.width),Ne=Ce,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,lt,V,Ne,Me,G,he,M.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function ne(N,M,G){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const me=Te(N,M),ce=M.source;t.bindTexture(he,N.__webglTexture,s.TEXTURE0+G);const $e=r.get(ce);if(ce.version!==$e.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const we=Tt.getPrimaries(Tt.workingColorSpace),ze=M.colorSpace===Cr?null:Tt.getPrimaries(M.colorSpace),it=M.colorSpace===Cr||we===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Se=w(M.image,!1,a.maxTextureSize);Se=St(M,Se);const be=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let qe=P(M.internalFormat,be,Ge,M.colorSpace,M.isVideoTexture);ae(he,M);let Ce;const lt=M.mipmaps,V=M.isVideoTexture!==!0,Ne=$e.__version===void 0||me===!0,Me=ce.dataReady,De=D(M,Se);if(M.isDepthTexture)qe=L(M.format===as,M.type),Ne&&(V?t.texStorage2D(s.TEXTURE_2D,1,qe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,be,Ge,null));else if(M.isDataTexture)if(lt.length>0){V&&Ne&&t.texStorage2D(s.TEXTURE_2D,De,qe,lt[0].width,lt[0].height);for(let ve=0,pe=lt.length;ve<pe;ve++)Ce=lt[ve],V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,be,Ge,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,be,Ge,Ce.data);M.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(s.TEXTURE_2D,De,qe,Se.width,Se.height),Me&&Ze(M,Se,be,Ge)):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,be,Ge,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,qe,lt[0].width,lt[0].height,Se.depth);for(let ve=0,pe=lt.length;ve<pe;ve++)if(Ce=lt[ve],M.format!==xi)if(be!==null)if(V){if(Me)if(M.layerUpdates.size>0){const Re=cg(Ce.width,Ce.height,M.format,M.type);for(const rt of M.layerUpdates){const It=Ce.data.subarray(rt*Re/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Re/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,rt,Ce.width,Ce.height,1,be,It)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Se.depth,be,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Se.depth,be,Ge,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Se.depth,0,be,Ge,Ce.data)}else{V&&Ne&&t.texStorage2D(s.TEXTURE_2D,De,qe,lt[0].width,lt[0].height);for(let ve=0,pe=lt.length;ve<pe;ve++)Ce=lt[ve],M.format!==xi?be!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,be,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Ce.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,be,Ge,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,be,Ge,Ce.data)}else if(M.isDataArrayTexture)if(V){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,qe,Se.width,Se.height,Se.depth),Me)if(M.layerUpdates.size>0){const ve=cg(Se.width,Se.height,M.format,M.type);for(const pe of M.layerUpdates){const Re=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,be,Ge,Re)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,be,Ge,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,be,Ge,Se.data);else if(M.isData3DTexture)V?(Ne&&t.texStorage3D(s.TEXTURE_3D,De,qe,Se.width,Se.height,Se.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,be,Ge,Se.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,be,Ge,Se.data);else if(M.isFramebufferTexture){if(Ne)if(V)t.texStorage2D(s.TEXTURE_2D,De,qe,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Re=0;Re<De;Re++)t.texImage2D(s.TEXTURE_2D,Re,qe,ve,pe,0,be,Ge,null),ve>>=1,pe>>=1}}else if(lt.length>0){if(V&&Ne){const ve=je(lt[0]);t.texStorage2D(s.TEXTURE_2D,De,qe,ve.width,ve.height)}for(let ve=0,pe=lt.length;ve<pe;ve++)Ce=lt[ve],V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,be,Ge,Ce):t.texImage2D(s.TEXTURE_2D,ve,qe,be,Ge,Ce);M.generateMipmaps=!1}else if(V){if(Ne){const ve=je(Se);t.texStorage2D(s.TEXTURE_2D,De,qe,ve.width,ve.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ge,Se)}else t.texImage2D(s.TEXTURE_2D,0,qe,be,Ge,Se);x(M)&&v(he),$e.__version=ce.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function de(N,M,G){if(M.image.length!==6)return;const he=Te(N,M),me=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+G);const ce=r.get(me);if(me.version!==ce.__version||he===!0){t.activeTexture(s.TEXTURE0+G);const $e=Tt.getPrimaries(Tt.workingColorSpace),we=M.colorSpace===Cr?null:Tt.getPrimaries(M.colorSpace),ze=M.colorSpace===Cr||$e===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!it&&!Se?be[pe]=w(M.image[pe],!0,a.maxCubemapSize):be[pe]=Se?M.image[pe].image:M.image[pe],be[pe]=St(M,be[pe]);const Ge=be[0],qe=l.convert(M.format,M.colorSpace),Ce=l.convert(M.type),lt=P(M.internalFormat,qe,Ce,M.colorSpace),V=M.isVideoTexture!==!0,Ne=ce.__version===void 0||he===!0,Me=me.dataReady;let De=D(M,Ge);ae(s.TEXTURE_CUBE_MAP,M);let ve;if(it){V&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){ve=be[pe].mipmaps;for(let Re=0;Re<ve.length;Re++){const rt=ve[Re];M.format!==xi?qe!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,rt.width,rt.height,qe,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,lt,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,rt.width,rt.height,qe,Ce,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,lt,rt.width,rt.height,0,qe,Ce,rt.data)}}}else{if(ve=M.mipmaps,V&&Ne){ve.length>0&&De++;const pe=je(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,qe,Ce,be[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,be[pe].width,be[pe].height,0,qe,Ce,be[pe].data);for(let Re=0;Re<ve.length;Re++){const It=ve[Re].image[pe].image;V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,It.width,It.height,qe,Ce,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,lt,It.width,It.height,0,qe,Ce,It.data)}}else{V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,qe,Ce,be[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,qe,Ce,be[pe]);for(let Re=0;Re<ve.length;Re++){const rt=ve[Re];V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,qe,Ce,rt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,lt,qe,Ce,rt.image[pe])}}}x(M)&&v(s.TEXTURE_CUBE_MAP),ce.__version=me.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ye(N,M,G,he,me,ce){const $e=l.convert(G.format,G.colorSpace),we=l.convert(G.type),ze=P(G.internalFormat,$e,we,G.colorSpace),it=r.get(M),Se=r.get(G);if(Se.__renderTarget=M,!it.__hasExternalTextures){const be=Math.max(1,M.width>>ce),Ge=Math.max(1,M.height>>ce);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,ze,be,Ge,M.depth,0,$e,we,null):t.texImage2D(me,ce,ze,be,Ge,0,$e,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,me,Se.__webglTexture,0,k(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,me,Se.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(N,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const he=M.depthTexture,me=he&&he.isDepthTexture?he.type:null,ce=L(M.stencilBuffer,me),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),ce,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,N)}else{const he=M.textures;for(let me=0;me<he.length;me++){const ce=he[me],$e=l.convert(ce.format,ce.colorSpace),we=l.convert(ce.type),ze=P(ce.internalFormat,$e,we,ce.colorSpace);Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),ze,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),ze,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ze,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(N,M,G){const he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ae(s.TEXTURE_CUBE_MAP,M.depthTexture);const it=l.convert(M.depthTexture.format),Se=l.convert(M.depthTexture.type);let be;M.depthTexture.format===Ji?be=s.DEPTH_COMPONENT24:M.depthTexture.format===as&&(be=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,be,M.width,M.height,0,it,Se,null)}}else ue(M.depthTexture,0);const ce=me.__webglTexture,$e=k(M),we=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ze=M.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ji)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,we,ce,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,we,ce,0);else if(M.depthTexture.format===as)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,we,ce,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,we,ce,0);else throw new Error("Unknown depthTexture format")}function mt(N){const M=r.get(N),G=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=he}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)Ue(M.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?Ue(M.__webglFramebuffer[0],N,0):Ue(M.__webglFramebuffer,N,0)}else if(G){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),ke(M.__webglDepthbuffer[he],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ke(M.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(N,M,G){const he=r.get(N);M!==void 0&&ye(he.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&mt(N)}function ht(N){const M=N.texture,G=r.get(N),he=r.get(M);N.addEventListener("dispose",O);const me=N.textures,ce=N.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,c.memory.textures++),ce){G.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[we]=[];for(let ze=0;ze<M.mipmaps.length;ze++)G.__webglFramebuffer[we][ze]=s.createFramebuffer()}else G.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)G.__webglFramebuffer[we]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if($e)for(let we=0,ze=me.length;we<ze;we++){const it=r.get(me[we]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),c.memory.textures++)}if(N.samples>0&&Gt(N)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const ze=me[we];G.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[we]);const it=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),be=P(ze.internalFormat,it,Se,ze.colorSpace,N.isXRRenderTarget===!0),Ge=k(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,be,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,G.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ae(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)ye(G.__webglFramebuffer[we][ze],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else ye(G.__webglFramebuffer[we],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let we=0,ze=me.length;we<ze;we++){const it=me[we],Se=r.get(it);let be=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,Se.__webglTexture),ae(be,it),ye(G.__webglFramebuffer,N,it,s.COLOR_ATTACHMENT0+we,be,0),x(it)&&v(be)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),ae(we,M),M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)ye(G.__webglFramebuffer[ze],N,M,s.COLOR_ATTACHMENT0,we,ze);else ye(G.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,we,0);x(M)&&v(we),t.unbindTexture()}N.depthBuffer&&mt(N)}function xt(N){const M=N.textures;for(let G=0,he=M.length;G<he;G++){const me=M[G];if(x(me)){const ce=b(N),$e=r.get(me).__webglTexture;t.bindTexture(ce,$e),v(ce),t.unbindTexture()}}}const Nt=[],ut=[];function Ht(N){if(N.samples>0){if(Gt(N)===!1){const M=N.textures,G=N.width,he=N.height;let me=s.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(N),we=M.length>1;if(we)for(let it=0;it<M.length;it++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=N.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let it=0;it<M.length;it++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Se=r.get(M[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,G,he,0,0,G,he,me,s.NEAREST),h===!0&&(Nt.length=0,ut.length=0,Nt.push(s.COLOR_ATTACHMENT0+it),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(ce),ut.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let it=0;it<M.length;it++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Se=r.get(M[it]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function k(N){return Math.min(a.maxSamples,N.samples)}function Gt(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(N){const M=c.render.frame;_.get(N)!==M&&(_.set(N,M),N.update())}function St(N,M){const G=N.colorSpace,he=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==eo&&G!==Cr&&(Tt.getTransfer(G)===Ft?(he!==xi||me!==oi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),M}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=le,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Kt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Iw(s,e){function t(r,a=Cr){let l;const c=Tt.getTransfer(a);if(r===oi)return s.UNSIGNED_BYTE;if(r===kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===o_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===a_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===r_)return s.BYTE;if(r===s_)return s.SHORT;if(r===sa)return s.UNSIGNED_SHORT;if(r===Bd)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===Ri)return s.FLOAT;if(r===Qi)return s.HALF_FLOAT;if(r===l_)return s.ALPHA;if(r===u_)return s.RGB;if(r===xi)return s.RGBA;if(r===Ji)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===c_)return s.RED;if(r===Vd)return s.RED_INTEGER;if(r===Js)return s.RG;if(r===Hd)return s.RG_INTEGER;if(r===Gd)return s.RGBA_INTEGER;if(r===$l||r===Kl||r===Zl||r===Ql)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qf||r===Jf||r===ed||r===td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ed)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===nd||r===id)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===rd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===sd)return l.COMPRESSED_R11_EAC;if(r===od)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ad)return l.COMPRESSED_RG11_EAC;if(r===ld)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ud||r===cd||r===fd||r===dd||r===hd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ud)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===md)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Md)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ed||r===Td||r===wd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ed)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ad||r===Cd||r===Rd||r===bd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ad)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new E_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ii({vertexShader:Uw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Di(new hu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bw extends io{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,_=null,g=null,S=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",x=new Ow,v={},b=t.getContextAttributes();let P=null,L=null;const D=[],F=[],O=new Lt;let W=null;const A=new si;A.viewport=new Qt;const R=new si;R.viewport=new Qt;const z=[A,R],ee=new Yy;let J=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=D[ne];return de===void 0&&(de=new Tf,D[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=D[ne];return de===void 0&&(de=new Tf,D[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=D[ne];return de===void 0&&(de=new Tf,D[ne]=de),de.getHandSpace()};function ue(ne){const de=F.indexOf(ne.inputSource);if(de===-1)return;const ye=D[de];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,p||c),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function le(){a.removeEventListener("select",ue),a.removeEventListener("selectstart",ue),a.removeEventListener("selectend",ue),a.removeEventListener("squeeze",ue),a.removeEventListener("squeezestart",ue),a.removeEventListener("squeezeend",ue),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",q);for(let ne=0;ne<D.length;ne++){const de=F[ne];de!==null&&(F[ne]=null,D[ne].disconnect(de))}J=null,oe=null,x.reset();for(const ne in v)delete v[ne];e.setRenderTarget(P),y=null,S=null,g=null,a=null,L=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",ue),a.addEventListener("selectstart",ue),a.addEventListener("selectend",ue),a.addEventListener("squeeze",ue),a.addEventListener("squeezestart",ue),a.addEventListener("squeezeend",ue),a.addEventListener("end",le),a.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Ue=null;b.depth&&(Ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?as:Ji,ke=b.stencil?oa:Ni);const mt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};g=this.getBinding(),S=g.createProjectionLayer(mt),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Li(S.textureWidth,S.textureHeight,{format:xi,type:oi,depthTexture:new la(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,ye),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Li(y.framebufferWidth,y.framebufferHeight,{format:xi,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ze.setContext(a),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(ne){for(let de=0;de<ne.removed.length;de++){const ye=ne.removed[de],ke=F.indexOf(ye);ke>=0&&(F[ke]=null,D[ke].disconnect(ye))}for(let de=0;de<ne.added.length;de++){const ye=ne.added[de];let ke=F.indexOf(ye);if(ke===-1){for(let mt=0;mt<D.length;mt++)if(mt>=F.length){F.push(ye),ke=mt;break}else if(F[mt]===null){F[mt]=ye,ke=mt;break}if(ke===-1)break}const Ue=D[ke];Ue&&Ue.connect(ye)}}const j=new K,fe=new K;function re(ne,de,ye){j.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ke=j.distanceTo(fe),Ue=de.projectionMatrix.elements,mt=ye.projectionMatrix.elements,Kt=Ue[14]/(Ue[10]-1),ht=Ue[14]/(Ue[10]+1),xt=(Ue[9]+1)/Ue[5],Nt=(Ue[9]-1)/Ue[5],ut=(Ue[8]-1)/Ue[0],Ht=(mt[8]+1)/mt[0],k=Kt*ut,Gt=Kt*Ht,gt=ke/(-ut+Ht),St=gt*-ut;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(St),ne.translateZ(gt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ue[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=Kt+gt,N=ht+gt,M=k-St,G=Gt+(ke-St),he=xt*ht/N*je,me=Nt*ht/N*je;ne.projectionMatrix.makePerspective(M,G,he,me,je,N),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;let de=ne.near,ye=ne.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),ee.near=R.near=A.near=de,ee.far=R.far=A.far=ye,(J!==ee.near||oe!==ee.far)&&(a.updateRenderState({depthNear:ee.near,depthFar:ee.far}),J=ee.near,oe=ee.far),ee.layers.mask=ne.layers.mask|6,A.layers.mask=ee.layers.mask&3,R.layers.mask=ee.layers.mask&5;const ke=ne.parent,Ue=ee.cameras;U(ee,ke);for(let mt=0;mt<Ue.length;mt++)U(Ue[mt],ke);Ue.length===2?re(ee,A,R):ee.projectionMatrix.copy(A.projectionMatrix),ae(ne,ee,ke)};function ae(ne,de,ye){ye===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Pd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(S===null&&y===null))return h},this.setFoveation=function(ne){h=ne,S!==null&&(S.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(ne){return v[ne]};let Te=null;function Xe(ne,de){if(_=de.getViewerPose(p||c),T=de,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let ke=!1;ye.length!==ee.cameras.length&&(ee.cameras.length=0,ke=!0);for(let ht=0;ht<ye.length;ht++){const xt=ye[ht];let Nt=null;if(y!==null)Nt=y.getViewport(xt);else{const Ht=g.getViewSubImage(S,xt);Nt=Ht.viewport,ht===0&&(e.setRenderTargetTextures(L,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(L))}let ut=z[ht];ut===void 0&&(ut=new si,ut.layers.enable(ht),ut.viewport=new Qt,z[ht]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ht===0&&(ee.matrix.copy(ut.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),ke===!0&&ee.cameras.push(ut)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const ht=g.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,a.renderState)}if(Ue&&Ue.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let ht=0;ht<ye.length;ht++){const xt=ye[ht].camera;if(xt){let Nt=v[xt];Nt||(Nt=new E_,v[xt]=Nt);const ut=g.getCameraImage(xt);Nt.sourceTexture=ut}}}}for(let ye=0;ye<D.length;ye++){const ke=F[ye],Ue=D[ye];ke!==null&&Ue!==void 0&&Ue.update(ke,de,p||c)}Te&&Te(ne,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ze=new w_;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(ne){Te=ne},this.dispose=function(){}}}const ns=new er,kw=new $t;function zw(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,__(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function a(x,v,b,P,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),S(x,v),v.isMeshPhysicalMaterial&&y(x,v,L)):v.isMeshMatcapMaterial?(l(x,v),T(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?h(x,v,b,P):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Hn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Hn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const b=e.get(v),P=b.envMap,L=b.envMapRotation;P&&(x.envMap.value=P,ns.copy(L),ns.x*=-1,ns.y*=-1,ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(ns)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,b,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*b,x.scale.value=P*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,b){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const b=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Vw(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,P){const L=P.program;r.uniformBlockBinding(b,L)}function p(b,P){let L=a[b.id];L===void 0&&(T(b),L=_(b),a[b.id]=L,b.addEventListener("dispose",x));const D=P.program;r.updateUBOMapping(b,D);const F=e.render.frame;l[b.id]!==F&&(S(b),l[b.id]=F)}function _(b){const P=g();b.__bindingPointIndex=P;const L=s.createBuffer(),D=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,D,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function g(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(b){const P=a[b.id],L=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,O=L.length;F<O;F++){const W=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,R=W.length;A<R;A++){const z=W[A];if(y(z,F,A,D)===!0){const ee=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let ue=0;ue<J.length;ue++){const le=J[ue],q=w(le);typeof le=="number"||typeof le=="boolean"?(z.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,ee+oe,z.__data)):le.isMatrix3?(z.__data[0]=le.elements[0],z.__data[1]=le.elements[1],z.__data[2]=le.elements[2],z.__data[3]=0,z.__data[4]=le.elements[3],z.__data[5]=le.elements[4],z.__data[6]=le.elements[5],z.__data[7]=0,z.__data[8]=le.elements[6],z.__data[9]=le.elements[7],z.__data[10]=le.elements[8],z.__data[11]=0):(le.toArray(z.__data,oe),oe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,P,L,D){const F=b.value,O=P+"_"+L;if(D[O]===void 0)return typeof F=="number"||typeof F=="boolean"?D[O]=F:D[O]=F.clone(),!0;{const W=D[O];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return D[O]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function T(b){const P=b.uniforms;let L=0;const D=16;for(let O=0,W=P.length;O<W;O++){const A=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,z=A.length;R<z;R++){const ee=A[R],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let oe=0,ue=J.length;oe<ue;oe++){const le=J[oe],q=w(le),j=L%D,fe=j%q.boundary,re=j+fe;L+=fe,re!==0&&D-re<q.storage&&(L+=D-re),ee.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=L,L+=q.storage}}}const F=L%D;return F>0&&(L+=D-F),b.__size=L,b.__cache={},this}function w(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",b),P}function x(b){const P=b.target;P.removeEventListener("dispose",x);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function v(){for(const b in a)s.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:h,update:p,dispose:v}}const Hw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function Gw(){return Ai===null&&(Ai=new By(Hw,16,16,Js,Qi),Ai.name="DFG_LUT",Ai.minFilter=wn,Ai.magFilter=wn,Ai.wrapS=$i,Ai.wrapT=$i,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class Ww{constructor(e={}){const{canvas:t=fy(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=oi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=c;const w=y,x=new Set([Gd,Hd,Vd]),v=new Set([oi,Ni,sa,oa,kd,zd]),b=new Uint32Array(4),P=new Int32Array(4);let L=null,D=null;const F=[],O=[];let W=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=ri;let z=0,ee=0,J=null,oe=-1,ue=null;const le=new Qt,q=new Qt;let j=null;const fe=new Rt(0);let re=0,U=t.width,ae=t.height,Te=1,Xe=null,Ze=null;const ne=new Qt(0,0,U,ae),de=new Qt(0,0,U,ae);let ye=!1;const ke=new y_;let Ue=!1,mt=!1;const Kt=new $t,ht=new K,xt=new Qt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ht(){return J===null?Te:1}let k=r;function Gt(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",yt,!1),k===null){const X="webgl2";if(k=Gt(X,C),k===null)throw Gt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let gt,St,je,N,M,G,he,me,ce,$e,we,ze,it,Se,be,Ge,qe,Ce,lt,V,Ne,Me,De,ve;function pe(){gt=new G1(k),gt.init(),Me=new Iw(k,gt),St=new I1(k,gt,e,Me),je=new Nw(k,gt),St.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),N=new j1(k),M=new _w,G=new Dw(k,gt,je,M,St,Me,N),he=new F1(A),me=new H1(A),ce=new Ky(k),De=new N1(k,ce),$e=new W1(k,ce,N,De),we=new Y1(k,$e,ce,N),lt=new q1(k,St,G),Ge=new U1(M),ze=new gw(A,he,me,gt,St,De,Ge),it=new zw(A,M),Se=new xw,be=new ww(gt),Ce=new L1(A,he,me,je,we,T,h),qe=new Pw(A,we,St),ve=new Vw(k,N,St,je),V=new D1(k,gt,N),Ne=new X1(k,gt,N),N.programs=ze.programs,A.capabilities=St,A.extensions=gt,A.properties=M,A.renderLists=Se,A.shadowMap=qe,A.state=je,A.info=N}pe(),w!==oi&&(W=new K1(w,t.width,t.height,a,l));const Re=new Bw(A,k);this.xr=Re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(C){C!==void 0&&(Te=C,this.setSize(U,ae,!1))},this.getSize=function(C){return C.set(U,ae)},this.setSize=function(C,X,se=!0){if(Re.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,ae=X,t.width=Math.floor(C*Te),t.height=Math.floor(X*Te),se===!0&&(t.style.width=C+"px",t.style.height=X+"px"),W!==null&&W.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(U*Te,ae*Te).floor()},this.setDrawingBufferSize=function(C,X,se){U=C,ae=X,Te=se,t.width=Math.floor(C*se),t.height=Math.floor(X*se),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(w===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(le)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,X,se,te){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,X,se,te),je.viewport(le.copy(ne).multiplyScalar(Te).round())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,X,se,te){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,X,se,te),je.scissor(q.copy(de).multiplyScalar(Te).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){je.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Xe=C},this.setTransparentSort=function(C){Ze=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,se=!0){let te=0;if(C){let $=!1;if(J!==null){const Pe=J.texture.format;$=x.has(Pe)}if($){const Pe=J.texture.type,Fe=v.has(Pe),Ae=Ce.getClearColor(),He=Ce.getClearAlpha(),Be=Ae.r,nt=Ae.g,Qe=Ae.b;Fe?(b[0]=Be,b[1]=nt,b[2]=Qe,b[3]=He,k.clearBufferuiv(k.COLOR,0,b)):(P[0]=Be,P[1]=nt,P[2]=Qe,P[3]=He,k.clearBufferiv(k.COLOR,0,P))}else te|=k.COLOR_BUFFER_BIT}X&&(te|=k.DEPTH_BUFFER_BIT),se&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Ce.dispose(),Se.dispose(),be.dispose(),M.dispose(),he.dispose(),me.dispose(),we.dispose(),De.dispose(),ve.dispose(),ze.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Dr),Re.removeEventListener("sessionend",Ir),li.stop()};function rt(C){C.preventDefault(),zm("WebGLRenderer: Context Lost."),R=!0}function It(){zm("WebGLRenderer: Context Restored."),R=!1;const C=N.autoReset,X=qe.enabled,se=qe.autoUpdate,te=qe.needsUpdate,$=qe.type;pe(),N.autoReset=C,qe.enabled=X,qe.autoUpdate=se,qe.needsUpdate=te,qe.type=$}function yt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gn(C){const X=C.target;X.removeEventListener("dispose",Gn),Cn(X)}function Cn(C){oo(C),M.remove(C)}function oo(C){const X=M.get(C).programs;X!==void 0&&(X.forEach(function(se){ze.releaseProgram(se)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,se,te,$,Pe){X===null&&(X=Nt);const Fe=$.isMesh&&$.matrixWorld.determinant()<0,Ae=va(C,X,se,te,$);je.setMaterial(te,Fe);let He=se.index,Be=1;if(te.wireframe===!0){if(He=$e.getWireframeAttribute(se),He===void 0)return;Be=2}const nt=se.drawRange,Qe=se.attributes.position;let ft=nt.start*Be,Mt=(nt.start+nt.count)*Be;Pe!==null&&(ft=Math.max(ft,Pe.start*Be),Mt=Math.min(Mt,(Pe.start+Pe.count)*Be)),He!==null?(ft=Math.max(ft,0),Mt=Math.min(Mt,He.count)):Qe!=null&&(ft=Math.max(ft,0),Mt=Math.min(Mt,Qe.count));const Bt=Mt-ft;if(Bt<0||Bt===1/0)return;De.setup($,te,Ae,se,He);let Ot,wt=V;if(He!==null&&(Ot=ce.get(He),wt=Ne,wt.setIndex(Ot)),$.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Ht()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if($.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),je.setLineWidth(Je*Ht()),$.isLineSegments?wt.setMode(k.LINES):$.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else $.isPoints?wt.setMode(k.POINTS):$.isSprite&&wt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)aa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Je=$._multiDrawStarts,bt=$._multiDrawCounts,_t=$._multiDrawCount,_n=He?ce.get(He).bytesPerElement:1,Si=M.get(te).currentProgram.getUniforms();for(let nn=0;nn<_t;nn++)Si.setValue(k,"_gl_DrawID",nn),wt.render(Je[nn]/_n,bt[nn])}else if($.isInstancedMesh)wt.renderInstances(ft,Bt,$.count);else if(se.isInstancedBufferGeometry){const Je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,bt=Math.min(se.instanceCount,Je);wt.renderInstances(ft,Bt,bt)}else wt.render(ft,Bt)};function tr(C,X,se){C.transparent===!0&&C.side===Yi&&C.forceSinglePass===!1?(C.side=Hn,C.needsUpdate=!0,Ur(C,X,se),C.side=Lr,C.needsUpdate=!0,Ur(C,X,se),C.side=Yi):Ur(C,X,se)}this.compile=function(C,X,se=null){se===null&&(se=C),D=be.get(se),D.init(X),O.push(D),se.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(D.pushLight($),$.castShadow&&D.pushShadow($))}),C!==se&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(D.pushLight($),$.castShadow&&D.pushShadow($))}),D.setupLights();const te=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pe=$.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){const Ae=Pe[Fe];tr(Ae,se,$),te.add(Ae)}else tr(Pe,se,$),te.add(Pe)}),D=O.pop(),te},this.compileAsync=function(C,X,se=null){const te=this.compile(C,X,se);return new Promise($=>{function Pe(){if(te.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&te.delete(Fe)}),te.size===0){$(C);return}setTimeout(Pe,10)}gt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ao=null;function Nr(C){ao&&ao(C)}function Dr(){li.stop()}function Ir(){li.start()}const li=new w_;li.setAnimationLoop(Nr),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(C){ao=C,Re.setAnimationLoop(C),C===null?li.stop():li.start()},Re.addEventListener("sessionstart",Dr),Re.addEventListener("sessionend",Ir),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,te=W!==null&&(J===null||se)&&W.begin(A,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,J),D=be.get(C,O.length),D.init(X),O.push(D),Kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(Kt,bi,X.reversedDepth),mt=this.localClippingEnabled,Ue=Ge.init(this.clippingPlanes,mt),L=Se.get(C,F.length),L.init(),F.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Fe=A.xr.getDepthSensingMesh();Fe!==null&&lo(Fe,X,-1/0,A.sortObjects)}lo(C,X,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Xe,Ze),ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ut&&Ce.addToRenderList(L,C),this.info.render.frame++,Ue===!0&&Ge.beginShadows();const $=D.state.shadowsArray;if(qe.render($,C,X),Ue===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&W.hasRenderPass())===!1){const Fe=L.opaque,Ae=L.transmissive;if(D.setupLights(),X.isArrayCamera){const He=X.cameras;if(Ae.length>0)for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be];ga(Fe,Ae,C,Qe)}ut&&Ce.render(C);for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be];ma(L,C,Qe,Qe.viewport)}}else Ae.length>0&&ga(Fe,Ae,C,X),ut&&Ce.render(C),ma(L,C,X)}J!==null&&ee===0&&(G.updateMultisampleRenderTarget(J),G.updateRenderTargetMipmap(J)),te&&W.end(A),C.isScene===!0&&C.onAfterRender(A,C,X),De.resetDefaultState(),oe=-1,ue=null,O.pop(),O.length>0?(D=O[O.length-1],Ue===!0&&Ge.setGlobalState(A.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function lo(C,X,se,te){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){te&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Kt);const Fe=we.update(C),Ae=C.material;Ae.visible&&L.push(C,Fe,Ae,se,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Fe=we.update(C),Ae=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),xt.copy(Fe.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ae)){const He=Fe.groups;for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be],ft=Ae[Qe.materialIndex];ft&&ft.visible&&L.push(C,Fe,ft,se,xt.z,Qe)}}else Ae.visible&&L.push(C,Fe,Ae,se,xt.z,null)}}const Pe=C.children;for(let Fe=0,Ae=Pe.length;Fe<Ae;Fe++)lo(Pe[Fe],X,se,te)}function ma(C,X,se,te){const{opaque:$,transmissive:Pe,transparent:Fe}=C;D.setupLightsView(se),Ue===!0&&Ge.setGlobalState(A.clippingPlanes,se),te&&je.viewport(le.copy(te)),$.length>0&&Kn($,X,se),Pe.length>0&&Kn(Pe,X,se),Fe.length>0&&Kn(Fe,X,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ga(C,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[te.id]===void 0){const ft=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[te.id]=new Li(1,1,{generateMipmaps:!0,type:ft?Qi:oi,minFilter:os,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Pe=D.state.transmissionRenderTarget[te.id],Fe=te.viewport||le;Pe.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);const Ae=A.getRenderTarget(),He=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(Pe),A.getClearColor(fe),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),ut&&Ce.render(se);const nt=A.toneMapping;A.toneMapping=Pi;const Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),D.setupLightsView(te),Ue===!0&&Ge.setGlobalState(A.clippingPlanes,te),Kn(C,se,te),G.updateMultisampleRenderTarget(Pe),G.updateRenderTargetMipmap(Pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Mt=0,Bt=X.length;Mt<Bt;Mt++){const Ot=X[Mt],{object:wt,geometry:Je,material:bt,group:_t}=Ot;if(bt.side===Yi&&wt.layers.test(te.layers)){const _n=bt.side;bt.side=Hn,bt.needsUpdate=!0,uo(wt,se,te,Je,bt,_t),bt.side=_n,bt.needsUpdate=!0,ft=!0}}ft===!0&&(G.updateMultisampleRenderTarget(Pe),G.updateRenderTargetMipmap(Pe))}A.setRenderTarget(Ae,He,Be),A.setClearColor(fe,re),Qe!==void 0&&(te.viewport=Qe),A.toneMapping=nt}function Kn(C,X,se){const te=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Pe=C.length;$<Pe;$++){const Fe=C[$],{object:Ae,geometry:He,group:Be}=Fe;let nt=Fe.material;nt.allowOverride===!0&&te!==null&&(nt=te),Ae.layers.test(se.layers)&&uo(Ae,X,se,He,nt,Be)}}function uo(C,X,se,te,$,Pe){C.onBeforeRender(A,X,se,te,$,Pe),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,X,se,te,C,Pe),$.transparent===!0&&$.side===Yi&&$.forceSinglePass===!1?($.side=Hn,$.needsUpdate=!0,A.renderBufferDirect(se,X,te,$,C,Pe),$.side=Lr,$.needsUpdate=!0,A.renderBufferDirect(se,X,te,$,C,Pe),$.side=Yi):A.renderBufferDirect(se,X,te,$,C,Pe),C.onAfterRender(A,X,se,te,$,Pe)}function Ur(C,X,se){X.isScene!==!0&&(X=Nt);const te=M.get(C),$=D.state.lights,Pe=D.state.shadowsArray,Fe=$.state.version,Ae=ze.getParameters(C,$.state,Pe,X,se),He=ze.getProgramCacheKey(Ae);let Be=te.programs;te.environment=C.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(C.isMeshStandardMaterial?me:he).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",Gn),Be=new Map,te.programs=Be);let nt=Be.get(He);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Fe)return co(C,Ae),nt}else Ae.uniforms=ze.getUniforms(C),C.onBeforeCompile(Ae,A),nt=ze.acquireProgram(Ae,He),Be.set(He,nt),te.uniforms=Ae.uniforms;const Qe=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),co(C,Ae),te.needsLights=Sa(C),te.lightsStateVersion=Fe,te.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function _a(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=eu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function co(C,X){const se=M.get(C);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function va(C,X,se,te,$){X.isScene!==!0&&(X=Nt),G.resetTextureUnits();const Pe=X.fog,Fe=te.isMeshStandardMaterial?X.environment:null,Ae=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:eo,He=(te.isMeshStandardMaterial?me:he).get(te.envMap||Fe),Be=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!se.morphAttributes.position,ft=!!se.morphAttributes.normal,Mt=!!se.morphAttributes.color;let Bt=Pi;te.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wt=Ot!==void 0?Ot.length:0,Je=M.get(te),bt=D.state.lights;if(Ue===!0&&(mt===!0||C!==ue)){const ln=C===ue&&te.id===oe;Ge.setState(te,C,ln)}let _t=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==bt.state.version||Je.outputColorSpace!==Ae||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==He||te.fog===!0&&Je.fog!==Pe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ge.numPlanes||Je.numIntersection!==Ge.numIntersection)||Je.vertexAlphas!==Be||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==ft||Je.morphColors!==Mt||Je.toneMapping!==Bt||Je.morphTargetsCount!==wt)&&(_t=!0):(_t=!0,Je.__version=te.version);let _n=Je.currentProgram;_t===!0&&(_n=Ur(te,X,$));let Si=!1,nn=!1,Fr=!1;const Dt=_n.getUniforms(),at=Je.uniforms;if(je.useProgram(_n.program)&&(Si=!0,nn=!0,Fr=!0),te.id!==oe&&(oe=te.id,nn=!0),Si||ue!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(k,"projectionMatrix",C.projectionMatrix),Dt.setValue(k,"viewMatrix",C.matrixWorldInverse);const un=Dt.map.cameraPosition;un!==void 0&&un.setValue(k,ht.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ue!==C&&(ue=C,nn=!0,Fr=!0)}if(Je.needsLights&&(bt.state.directionalShadowMap.length>0&&Dt.setValue(k,"directionalShadowMap",bt.state.directionalShadowMap,G),bt.state.spotShadowMap.length>0&&Dt.setValue(k,"spotShadowMap",bt.state.spotShadowMap,G),bt.state.pointShadowMap.length>0&&Dt.setValue(k,"pointShadowMap",bt.state.pointShadowMap,G)),$.isSkinnedMesh){Dt.setOptional(k,$,"bindMatrix"),Dt.setOptional(k,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(k,"boneTexture",ln.boneTexture,G))}$.isBatchedMesh&&(Dt.setOptional(k,$,"batchingTexture"),Dt.setValue(k,"batchingTexture",$._matricesTexture,G),Dt.setOptional(k,$,"batchingIdTexture"),Dt.setValue(k,"batchingIdTexture",$._indirectTexture,G),Dt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Dt.setValue(k,"batchingColorTexture",$._colorsTexture,G));const Rn=se.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&lt.update($,se,_n),(nn||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Dt.setValue(k,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(at.envMap.value=He,at.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=Gw()),nn&&(Dt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&xa(at,Fr),Pe&&te.fog===!0&&it.refreshFogUniforms(at,Pe),it.refreshMaterialUniforms(at,te,Te,ae,D.state.transmissionRenderTarget[C.id]),eu.upload(k,_a(Je),at,G)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(eu.upload(k,_a(Je),at,G),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(k,"center",$.center),Dt.setValue(k,"modelViewMatrix",$.modelViewMatrix),Dt.setValue(k,"normalMatrix",$.normalMatrix),Dt.setValue(k,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const ln=te.uniformsGroups;for(let un=0,ds=ln.length;un<ds;un++){const yi=ln[un];ve.update(yi,_n),ve.bind(yi,_n)}}return _n}function xa(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Sa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,X,se){const te=M.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=X,M.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const se=M.get(C);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const gu=k.createFramebuffer();this.setRenderTarget=function(C,X=0,se=0){J=C,z=X,ee=se;let te=null,$=!1,Pe=!1;if(C){const Ae=M.get(C);if(Ae.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(k.FRAMEBUFFER,Ae.__webglFramebuffer),le.copy(C.viewport),q.copy(C.scissor),j=C.scissorTest,je.viewport(le),je.scissor(q),je.setScissorTest(j),oe=-1;return}else if(Ae.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(Ae.__hasExternalTextures)G.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Ae.__boundDepthTexture!==nt){if(nt!==null&&M.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);const Be=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[X])?te=Be[X][se]:te=Be[X],$=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?te=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?te=Be[se]:te=Be,le.copy(C.viewport),q.copy(C.scissor),j=C.scissorTest}else le.copy(ne).multiplyScalar(Te).floor(),q.copy(de).multiplyScalar(Te).floor(),j=ye;if(se!==0&&(te=gu),je.bindFramebuffer(k.FRAMEBUFFER,te)&&je.drawBuffers(C,te),je.viewport(le),je.scissor(q),je.setScissorTest(j),$){const Ae=M.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,se)}else if(Pe){const Ae=X;for(let He=0;He<C.textures.length;He++){const Be=M.get(C.textures[He]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+He,Be.__webglTexture,se,Ae)}}else if(C!==null&&se!==0){const Ae=M.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ae.__webglTexture,se)}oe=-1},this.readRenderTargetPixels=function(C,X,se,te,$,Pe,Fe,Ae=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){je.bindFramebuffer(k.FRAMEBUFFER,He);try{const Be=C.textures[Ae],nt=Be.format,Qe=Be.type;if(!St.textureFormatReadable(nt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-te&&se>=0&&se<=C.height-$&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae),k.readPixels(X,se,te,$,Me.convert(nt),Me.convert(Qe),Pe))}finally{const Be=J!==null?M.get(J).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,X,se,te,$,Pe,Fe,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(X>=0&&X<=C.width-te&&se>=0&&se<=C.height-$){je.bindFramebuffer(k.FRAMEBUFFER,He);const Be=C.textures[Ae],nt=Be.format,Qe=Be.type;if(!St.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.bufferData(k.PIXEL_PACK_BUFFER,Pe.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae),k.readPixels(X,se,te,$,Me.convert(nt),Me.convert(Qe),0);const Mt=J!==null?M.get(J).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Mt);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await dy(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pe),k.deleteBuffer(ft),k.deleteSync(Bt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,se=0){const te=Math.pow(2,-se),$=Math.floor(C.image.width*te),Pe=Math.floor(C.image.height*te),Fe=X!==null?X.x:0,Ae=X!==null?X.y:0;G.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Fe,Ae,$,Pe),je.unbindTexture()};const _u=k.createFramebuffer(),Xt=k.createFramebuffer();this.copyTextureToTexture=function(C,X,se=null,te=null,$=0,Pe=null){Pe===null&&($!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=$,$=0):Pe=0);let Fe,Ae,He,Be,nt,Qe,ft,Mt,Bt;const Ot=C.isCompressedTexture?C.mipmaps[Pe]:C.image;if(se!==null)Fe=se.max.x-se.min.x,Ae=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,Be=se.min.x,nt=se.min.y,Qe=se.isBox3?se.min.z:0;else{const Rn=Math.pow(2,-$);Fe=Math.floor(Ot.width*Rn),Ae=Math.floor(Ot.height*Rn),C.isDataArrayTexture?He=Ot.depth:C.isData3DTexture?He=Math.floor(Ot.depth*Rn):He=1,Be=0,nt=0,Qe=0}te!==null?(ft=te.x,Mt=te.y,Bt=te.z):(ft=0,Mt=0,Bt=0);const wt=Me.convert(X.format),Je=Me.convert(X.type);let bt;X.isData3DTexture?(G.setTexture3D(X,0),bt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),bt=k.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),bt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),_n=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Si=k.getParameter(k.UNPACK_SKIP_PIXELS),nn=k.getParameter(k.UNPACK_SKIP_ROWS),Fr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Dt=C.isDataArrayTexture||C.isData3DTexture,at=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Rn=M.get(C),ln=M.get(X),un=M.get(Rn.__renderTarget),ds=M.get(ln.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let yi=0;yi<He;yi++)Dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(C).__webglTexture,$,Qe+yi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(X).__webglTexture,Pe,Bt+yi)),k.blitFramebuffer(Be,nt,Fe,Ae,ft,Mt,Fe,Ae,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||M.has(C)){const Rn=M.get(C),ln=M.get(X);je.bindFramebuffer(k.READ_FRAMEBUFFER,_u),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xt);for(let un=0;un<He;un++)Dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,$,Qe+un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,$),at?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,Pe,Bt+un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,Pe),$!==0?k.blitFramebuffer(Be,nt,Fe,Ae,ft,Mt,Fe,Ae,k.COLOR_BUFFER_BIT,k.NEAREST):at?k.copyTexSubImage3D(bt,Pe,ft,Mt,Bt+un,Be,nt,Fe,Ae):k.copyTexSubImage2D(bt,Pe,ft,Mt,Be,nt,Fe,Ae);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else at?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(bt,Pe,ft,Mt,Bt,Fe,Ae,He,wt,Je,Ot.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(bt,Pe,ft,Mt,Bt,Fe,Ae,He,wt,Ot.data):k.texSubImage3D(bt,Pe,ft,Mt,Bt,Fe,Ae,He,wt,Je,Ot):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pe,ft,Mt,Fe,Ae,wt,Je,Ot.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pe,ft,Mt,Ot.width,Ot.height,wt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Pe,ft,Mt,Fe,Ae,wt,Je,Ot);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_n),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Si),k.pixelStorei(k.UNPACK_SKIP_ROWS,nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Fr),Pe===0&&X.generateMipmaps&&k.generateMipmap(bt),je.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){z=0,ee=0,J=null,je.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const Xw="_backgroundContainer_g9xoq_1",jw="_matrixCanvas_g9xoq_12",qw="_threeCanvas_g9xoq_22",Yw="_overlay_g9xoq_30",ql={backgroundContainer:Xw,matrixCanvas:jw,threeCanvas:qw,overlay:Yw},$w=()=>{const s=Le.useRef(),e=Le.useRef();return Le.useEffect(()=>{try{if(!s.current)return;const t=new Oy,r=new si(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Ww({antialias:!0,alpha:!0});for(a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2));s.current.firstChild;)s.current.removeChild(s.current.firstChild);s.current.appendChild(a.domElement),r.position.z=5;const l=new au(2,2),c=new Yd({color:62463,wireframe:!0,transparent:!0,opacity:.15}),f=new Di(l,c);t.add(f);const h=new au(2.05,3),p=new Jl({color:62463,size:.02}),_=new Cf(h,p);t.add(_);const g=1e3,S=new Float32Array(g*3);for(let oe=0;oe<g*3;oe++)S[oe]=(Math.random()-.5)*20;const y=new In;y.setAttribute("position",new ai(S,3));const T=new Jl({size:.005,color:62463,transparent:!0,opacity:.8}),w=new Cf(y,T);t.add(w);const x=10,v=new In,b=new Float32Array(x*3);for(let oe=0;oe<x*3;oe++)b[oe]=(Math.random()-.5)*10;v.setAttribute("position",new ai(b,3));const P=new Jl({size:.1,color:16711935,transparent:!0,opacity:.6}),L=new Cf(v,P);t.add(L);const D=new ug(20,40,62463,69905);D.position.y=-3,D.rotation.x=Math.PI*.05,t.add(D);const F=new ug(20,40,62463,69905);F.position.y=3,F.rotation.x=-Math.PI*.05,t.add(F);let O=0,W=0;const A=oe=>{O=(oe.clientX/window.innerWidth-.5)*.3,W=(oe.clientY/window.innerHeight-.5)*.3};window.addEventListener("mousemove",A);let R;const z=()=>{R=requestAnimationFrame(z),f.rotation.y+=.002,_.rotation.y-=.001,w.rotation.y+=5e-4,L.rotation.y-=.001,L.rotation.z+=5e-4,D.position.z=(D.position.z+.01)%.5,F.position.z=(F.position.z+.01)%.5,r.position.x+=(O-r.position.x)*.05,r.position.y+=(-W-r.position.y)*.05,r.lookAt(t.position),a.render(t,r)};let ee;if(e.current){const oe=e.current,ue=oe.getContext("2d");let le=oe.width=window.innerWidth,q=oe.height=window.innerHeight;const j='01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\\#&_(),.;:?!\\\\|{}<>[]^~',fe=14,re=Math.floor(le/fe),U=new Array(re).fill(1);ee=setInterval(()=>{ue.fillStyle="rgba(0, 0, 0, 0.05)",ue.fillRect(0,0,le,q),ue.fillStyle="#00f3ff66",ue.font=fe+"px monospace";for(let Te=0;Te<U.length;Te++){const Xe=j.charAt(Math.floor(Math.random()*j.length));ue.fillText(Xe,Te*fe,U[Te]*fe),U[Te]*fe>q&&Math.random()>.975&&(U[Te]=0),U[Te]++}},50)}const J=()=>{if(!s.current||!e.current)return;const oe=e.current,ue=oe.width=window.innerWidth,le=oe.height=window.innerHeight;r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",J),z(),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("resize",J),cancelAnimationFrame(R),ee&&clearInterval(ee);try{s.current&&a.domElement.parentNode===s.current&&s.current.removeChild(a.domElement),a.dispose(),l.dispose(),c.dispose()}catch(oe){console.warn("Cleanup error:",oe)}}}catch(t){console.error("CyberBackground Error:",t),s.current&&(s.current.style.background="linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)")}},[]),Z.jsxs("div",{className:ql.backgroundContainer,children:[Z.jsx("canvas",{ref:e,className:ql.matrixCanvas}),Z.jsx("div",{ref:s,className:ql.threeCanvas}),Z.jsx("div",{className:ql.overlay})]})},Kw="_statusContainer_1ndxp_1",Zw="_indicator_1ndxp_14",Qw="_dot_1ndxp_24",Jw="_text_1ndxp_33",eA="_coords_1ndxp_40",ea={statusContainer:Kw,indicator:Zw,dot:Qw,text:Jw,coords:eA},tA=()=>Z.jsxs("div",{className:ea.statusContainer,children:[Z.jsxs("div",{className:ea.indicator,children:[Z.jsx("span",{className:ea.dot}),Z.jsx("span",{className:ea.text,children:"SYSTEM_PROCESSING..."})]}),Z.jsx("div",{className:ea.coords,children:"18.52°N, 73.85°E"})]}),nA=()=>Z.jsxs("div",{className:"home-container",children:[Z.jsx($w,{}),Z.jsx(Dx,{}),Z.jsx(tA,{}),Z.jsxs("main",{children:[Z.jsx(Wx,{}),Z.jsx(Qx,{}),Z.jsx(rS,{}),Z.jsx(cS,{})]}),Z.jsx(LS,{})]}),iA="_formContainer_1pjx1_1",rA="_backgroundGlow_1pjx1_12",sA="_formCard_1pjx1_39",oA="_cardHeader_1pjx1_76",aA="_formTitle_1pjx1_81",lA="_formSubtitle_1pjx1_90",uA="_form_1pjx1_1",cA="_sectionHeader_1pjx1_105",fA="_inputGroup_1pjx1_115",dA="_label_1pjx1_121",hA="_required_1pjx1_129",pA="_input_1pjx1_115",mA="_inputError_1pjx1_156",gA="_errorMessage_1pjx1_160",_A="_membersList_1pjx1_167",vA="_memberRow_1pjx1_173",xA="_memberLabel_1pjx1_181",SA="_memberInputs_1pjx1_189",yA="_addButton_1pjx1_195",MA="_addIcon_1pjx1_215",EA="_submitSection_1pjx1_220",TA="_submitButton_1pjx1_224",wA="_successContainer_1pjx1_266",AA="_successCard_1pjx1_275",CA="_successIcon_1pjx1_288",RA="_successTitle_1pjx1_294",bA="_successMessage_1pjx1_300",PA="_successSubMessage_1pjx1_306",LA="_successGlow_1pjx1_312",NA="_returnButton_1pjx1_325",Pt={formContainer:iA,backgroundGlow:rA,formCard:sA,cardHeader:oA,formTitle:aA,formSubtitle:lA,form:uA,sectionHeader:cA,inputGroup:fA,label:dA,required:hA,input:pA,inputError:mA,errorMessage:gA,membersList:_A,memberRow:vA,memberLabel:xA,memberInputs:SA,addButton:yA,addIcon:MA,submitSection:EA,submitButton:TA,successContainer:wA,successCard:AA,successIcon:CA,successTitle:RA,successMessage:bA,successSubMessage:PA,successGlow:LA,returnButton:NA},If=({label:s,value:e,onChange:t,error:r,required:a,placeholder:l})=>Z.jsxs("div",{className:Pt.inputGroup,children:[Z.jsxs("label",{className:Pt.label,children:[s,a&&Z.jsx("span",{className:Pt.required,children:"*"})]}),Z.jsx("input",{type:"text",value:e,onChange:t,placeholder:l,className:`${Pt.input} ${r?Pt.inputError:""}`,"aria-label":s}),r&&Z.jsx("span",{className:Pt.errorMessage,children:r})]}),DA=()=>{const s=Wg(),[e,t]=Le.useState(""),[r,a]=Le.useState([{name:"",email:""},{name:"",email:""}]),[l,c]=Le.useState({}),[f,h]=Le.useState(!1),p=()=>{a([...r,{name:"",email:""}])},_=(T,w,x)=>{const v=[...r];v[T][w]=x,a(v)},g=()=>{const T={};return e.trim()||(T.teamName="Team name is required"),r.forEach((w,x)=>{w.name.trim()||(T[`memberName${x}`]=`Member ${x+1} name is required`),w.email.trim()?/\S+@\S+\.\S+/.test(w.email)||(T[`memberEmail${x}`]="Invalid email address"):T[`memberEmail${x}`]=`Member ${x+1} email is required`}),c(T),Object.keys(T).length===0},S=T=>{T.preventDefault(),g()&&h(!0)},y=()=>{s("/")};return f?Z.jsx("div",{className:Pt.successContainer,children:Z.jsxs("div",{className:Pt.successCard,children:[Z.jsx("div",{className:Pt.successIcon,children:"✓"}),Z.jsx("h1",{className:Pt.successTitle,children:"Registration Submitted Successfully"}),Z.jsx("p",{className:Pt.successMessage,children:"Thank you for registering for Quick Snatch 2.0"}),Z.jsx("p",{className:Pt.successSubMessage,children:"Further instructions will be shared soon."}),Z.jsx("div",{className:Pt.successGlow}),Z.jsx("button",{className:Pt.returnButton,onClick:y,children:"Return to Home"})]})}):Z.jsxs("div",{className:Pt.formContainer,children:[Z.jsx("div",{className:Pt.backgroundGlow}),Z.jsxs("div",{className:Pt.formCard,children:[Z.jsxs("div",{className:Pt.cardHeader,children:[Z.jsx("h1",{className:Pt.formTitle,children:"Team Registration"}),Z.jsx("p",{className:Pt.formSubtitle,children:"Quick Snatch 2.0 // MISSION_ENROLLMENT"})]}),Z.jsxs("form",{onSubmit:S,className:Pt.form,children:[Z.jsx("div",{className:Pt.sectionHeader,children:"TEAM_IDENTITY"}),Z.jsx(If,{label:"Team Name",placeholder:"Enter your team name",value:e,onChange:T=>t(T.target.value),error:l.teamName,required:!0}),Z.jsx("div",{className:Pt.sectionHeader,children:"SQUAD_MEMBERS"}),Z.jsx("div",{className:Pt.membersList,children:r.map((T,w)=>Z.jsxs("div",{className:Pt.memberRow,children:[Z.jsxs("h3",{className:Pt.memberLabel,children:["Member ",w+1]}),Z.jsxs("div",{className:Pt.memberInputs,children:[Z.jsx(If,{label:"Name",placeholder:"Full Name",value:T.name,onChange:x=>_(w,"name",x.target.value),error:l[`memberName${w}`],required:!0}),Z.jsx(If,{label:"Email",placeholder:"email@example.com",value:T.email,onChange:x=>_(w,"email",x.target.value),error:l[`memberEmail${w}`],required:!0})]})]},w))}),Z.jsxs("button",{type:"button",className:Pt.addButton,onClick:p,children:[Z.jsx("span",{className:Pt.addIcon,children:"+"})," ADD NEW SQUAD MEMBER"]}),Z.jsx("div",{className:Pt.submitSection,children:Z.jsx("button",{type:"submit",className:Pt.submitButton,children:"CONFIRM REGISTRATION"})})]})]})]})},IA=()=>Z.jsx(DA,{});function UA(){return Z.jsxs(cx,{children:[Z.jsx(Ff,{path:"/",element:Z.jsx(nA,{})}),Z.jsx(Ff,{path:"/register",element:Z.jsx(IA,{})})]})}vv.createRoot(document.getElementById("root")).render(Z.jsx(Ug.StrictMode,{children:Z.jsx(_x,{children:Z.jsx(UA,{})})}));
