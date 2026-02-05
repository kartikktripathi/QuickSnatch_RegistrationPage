function cv(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Fg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $c={exports:{}},Ga={},Kc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function fv(){if(mm)return pt;mm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(F,K,be){this.props=F,this.context=K,this.refs=w,this.updater=be||y}x.prototype.isReactComponent={},x.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=x.prototype;function b(F,K,be){this.props=F,this.context=K,this.refs=w,this.updater=be||y}var P=b.prototype=new v;P.constructor=b,T(P,x.prototype),P.isPureReactComponent=!0;var L=Array.isArray,D=Object.prototype.hasOwnProperty,U={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function W(F,K,be){var Ye,Ze={},ie=null,fe=null;if(K!=null)for(Ye in K.ref!==void 0&&(fe=K.ref),K.key!==void 0&&(ie=""+K.key),K)D.call(K,Ye)&&!O.hasOwnProperty(Ye)&&(Ze[Ye]=K[Ye]);var ye=arguments.length-2;if(ye===1)Ze.children=be;else if(1<ye){for(var ke=Array(ye),Ue=0;Ue<ye;Ue++)ke[Ue]=arguments[Ue+2];Ze.children=ke}if(F&&F.defaultProps)for(Ye in ye=F.defaultProps,ye)Ze[Ye]===void 0&&(Ze[Ye]=ye[Ye]);return{$$typeof:s,type:F,key:ie,ref:fe,props:Ze,_owner:U.current}}function A(F,K){return{$$typeof:s,type:F.type,key:K,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return K[be]})}var te=/\/+/g;function ee(F,K){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):K.toString(36)}function ce(F,K,be,Ye,Ze){var ie=typeof F;(ie==="undefined"||ie==="boolean")&&(F=null);var fe=!1;if(F===null)fe=!0;else switch(ie){case"string":case"number":fe=!0;break;case"object":switch(F.$$typeof){case s:case e:fe=!0}}if(fe)return fe=F,Ze=Ze(fe),F=Ye===""?"."+ee(fe,0):Ye,L(Ze)?(be="",F!=null&&(be=F.replace(te,"$&/")+"/"),ce(Ze,K,be,"",function(Ue){return Ue})):Ze!=null&&(R(Ze)&&(Ze=A(Ze,be+(!Ze.key||fe&&fe.key===Ze.key?"":(""+Ze.key).replace(te,"$&/")+"/")+F)),K.push(Ze)),1;if(fe=0,Ye=Ye===""?".":Ye+":",L(F))for(var ye=0;ye<F.length;ye++){ie=F[ye];var ke=Ye+ee(ie,ye);fe+=ce(ie,K,be,ke,Ze)}else if(ke=S(F),typeof ke=="function")for(F=ke.call(F),ye=0;!(ie=F.next()).done;)ie=ie.value,ke=Ye+ee(ie,ye++),fe+=ce(ie,K,be,ke,Ze);else if(ie==="object")throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return fe}function ue(F,K,be){if(F==null)return F;var Ye=[],Ze=0;return ce(F,Ye,"","",function(ie){return K.call(be,ie,Ze++)}),Ye}function oe(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(be){(F._status===0||F._status===-1)&&(F._status=1,F._result=be)},function(be){(F._status===0||F._status===-1)&&(F._status=2,F._result=be)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var Y={current:null},q={transition:null},he={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:q,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ue,forEach:function(F,K,be){ue(F,function(){K.apply(this,arguments)},be)},count:function(F){var K=0;return ue(F,function(){K++}),K},toArray:function(F){return ue(F,function(K){return K})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=x,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=b,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,pt.act=se,pt.cloneElement=function(F,K,be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ye=T({},F.props),Ze=F.key,ie=F.ref,fe=F._owner;if(K!=null){if(K.ref!==void 0&&(ie=K.ref,fe=U.current),K.key!==void 0&&(Ze=""+K.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(ke in K)D.call(K,ke)&&!O.hasOwnProperty(ke)&&(Ye[ke]=K[ke]===void 0&&ye!==void 0?ye[ke]:K[ke])}var ke=arguments.length-2;if(ke===1)Ye.children=be;else if(1<ke){ye=Array(ke);for(var Ue=0;Ue<ke;Ue++)ye[Ue]=arguments[Ue+2];Ye.children=ye}return{$$typeof:s,type:F.type,key:Ze,ref:ie,props:Ye,_owner:fe}},pt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},pt.createElement=W,pt.createFactory=function(F){var K=W.bind(null,F);return K.type=F,K},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:f,render:F}},pt.isValidElement=R,pt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:oe}},pt.memo=function(F,K){return{$$typeof:p,type:F,compare:K===void 0?null:K}},pt.startTransition=function(F){var K=q.transition;q.transition={};try{F()}finally{q.transition=K}},pt.unstable_act=se,pt.useCallback=function(F,K){return Y.current.useCallback(F,K)},pt.useContext=function(F){return Y.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return Y.current.useDeferredValue(F)},pt.useEffect=function(F,K){return Y.current.useEffect(F,K)},pt.useId=function(){return Y.current.useId()},pt.useImperativeHandle=function(F,K,be){return Y.current.useImperativeHandle(F,K,be)},pt.useInsertionEffect=function(F,K){return Y.current.useInsertionEffect(F,K)},pt.useLayoutEffect=function(F,K){return Y.current.useLayoutEffect(F,K)},pt.useMemo=function(F,K){return Y.current.useMemo(F,K)},pt.useReducer=function(F,K,be){return Y.current.useReducer(F,K,be)},pt.useRef=function(F){return Y.current.useRef(F)},pt.useState=function(F){return Y.current.useState(F)},pt.useSyncExternalStore=function(F,K,be){return Y.current.useSyncExternalStore(F,K,be)},pt.useTransition=function(){return Y.current.useTransition()},pt.version="18.3.1",pt}var gm;function Ud(){return gm||(gm=1,Kc.exports=fv()),Kc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function dv(){if(_m)return Ga;_m=1;var s=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var _,g={},S=null,y=null;p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:f,key:S,ref:y,props:g,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=c,Ga.jsxs=c,Ga}var vm;function hv(){return vm||(vm=1,$c.exports=dv()),$c.exports}var j=hv(),Re=Ud();const Og=Fg(Re),pv=cv({__proto__:null,default:Og},[Re]);var Tl={},Zc={exports:{}},Vn={},Qc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function mv(){return xm||(xm=1,(function(s){function e(q,he){var se=q.length;q.push(he);e:for(;0<se;){var F=se-1>>>1,K=q[F];if(0<o(K,he))q[F]=he,q[se]=K,se=F;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var he=q[0],se=q.pop();if(se!==he){q[0]=se;e:for(var F=0,K=q.length,be=K>>>1;F<be;){var Ye=2*(F+1)-1,Ze=q[Ye],ie=Ye+1,fe=q[ie];if(0>o(Ze,se))ie<K&&0>o(fe,Ze)?(q[F]=fe,q[ie]=se,F=ie):(q[F]=Ze,q[Ye]=se,F=Ye);else if(ie<K&&0>o(fe,se))q[F]=fe,q[ie]=se,F=ie;else break e}}return he}function o(q,he){var se=q.sortIndex-he.sortIndex;return se!==0?se:q.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],_=1,g=null,S=3,y=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(q){for(var he=t(p);he!==null;){if(he.callback===null)r(p);else if(he.startTime<=q)r(p),he.sortIndex=he.expirationTime,e(h,he);else break;he=t(p)}}function L(q){if(w=!1,P(q),!T)if(t(h)!==null)T=!0,oe(D);else{var he=t(p);he!==null&&Y(L,he.startTime-q)}}function D(q,he){T=!1,w&&(w=!1,v(W),W=-1),y=!0;var se=S;try{for(P(he),g=t(h);g!==null&&(!(g.expirationTime>he)||q&&!z());){var F=g.callback;if(typeof F=="function"){g.callback=null,S=g.priorityLevel;var K=F(g.expirationTime<=he);he=s.unstable_now(),typeof K=="function"?g.callback=K:g===t(h)&&r(h),P(he)}else r(h);g=t(h)}if(g!==null)var be=!0;else{var Ye=t(p);Ye!==null&&Y(L,Ye.startTime-he),be=!1}return be}finally{g=null,S=se,y=!1}}var U=!1,O=null,W=-1,A=5,R=-1;function z(){return!(s.unstable_now()-R<A)}function te(){if(O!==null){var q=s.unstable_now();R=q;var he=!0;try{he=O(!0,q)}finally{he?ee():(U=!1,O=null)}}else U=!1}var ee;if(typeof b=="function")ee=function(){b(te)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=te,ee=function(){ue.postMessage(null)}}else ee=function(){x(te,0)};function oe(q){O=q,U||(U=!0,ee())}function Y(q,he){W=x(function(){q(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,oe(D))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(q){switch(S){case 1:case 2:case 3:var he=3;break;default:he=S}var se=S;S=he;try{return q()}finally{S=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,he){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=S;S=q;try{return he()}finally{S=se}},s.unstable_scheduleCallback=function(q,he,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,q){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=se+K,q={id:_++,callback:he,priorityLevel:q,startTime:se,expirationTime:K,sortIndex:-1},se>F?(q.sortIndex=se,e(p,q),t(h)===null&&q===t(p)&&(w?(v(W),W=-1):w=!0,Y(L,se-F))):(q.sortIndex=K,e(h,q),T||y||(T=!0,oe(D))),q},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(q){var he=S;return function(){var se=S;S=he;try{return q.apply(this,arguments)}finally{S=se}}}})(Jc)),Jc}var Sm;function gv(){return Sm||(Sm=1,Qc.exports=mv()),Qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function _v(){if(ym)return Vn;ym=1;var s=Ud(),e=gv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function S(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,u)&&(a=null),u||d===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),q=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function K(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var be=!1;function Ye(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,I=m.length-1;1<=E&&0<=I&&d[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==m[I]){var B=`
`+d[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=I);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function Ze(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Ye(n.type,!1),n;case 11:return n=Ye(n.type.render,!1),n;case 1:return n=Ye(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case U:return"Portal";case A:return"Profiler";case W:return"StrictMode";case ee:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mt(n){n._valueTracker||(n._valueTracker=Ue(n))}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=ke(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Nt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ht(n,i){ut(n,i);var a=ye(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function k(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gt=Array.isArray;function St(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Xe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function M(n,i){var a=ye(i.value),u=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var le,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){it.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Se(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ge=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,Me=null,De=null;function ve(n){if(n=Ra(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),Ne(n.stateNode,n.type,i))}}function pe(n){Me?De?De.push(n):De=[n]:Me=n}function Ce(){if(Me){var n=Me,i=De;if(De=Me=null,ve(n),i)for(n=0;n<i.length;n++)ve(i[n])}}function rt(n,i){return n(i)}function It(){}var yt=!1;function Wn(n,i,a){if(yt)return n(i,a);yt=!0;try{return rt(n,i,a)}finally{yt=!1,(Me!==null||De!==null)&&(It(),Ce())}}function Cn(n,i){var a=n.stateNode;if(a===null)return null;var u=ko(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var oa=!1;if(f)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){oa=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{oa=!1}function la(n,i,a,u,d,m,E,I,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(_e){this.onError(_e)}}var Ir=!1,Ur=null,Fr=!1,ui=null,ua={onError:function(n){Ir=!0,Ur=n}};function vo(n,i,a,u,d,m,E,I,B){Ir=!1,Ur=null,la.apply(ua,arguments)}function xo(n,i,a,u,d,m,E,I,B){if(vo.apply(this,arguments),Ir){if(Ir){var re=Ur;Ir=!1,Ur=null}else throw Error(t(198));Fr||(Fr=!0,ui=re)}}function Zn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ca(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Or(n){if(Zn(n)!==n)throw Error(t(188))}function So(n){var i=n.alternate;if(!i){if(i=Zn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Or(d),n;if(m===u)return Or(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var E=!1,I=d.child;I;){if(I===a){E=!0,a=d,u=m;break}if(I===u){E=!0,u=d,a=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===a){E=!0,a=m,u=d;break}if(I===u){E=!0,u=m,a=d;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fa(n){return n=So(n),n!==null?yo(n):null}function yo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=yo(n);if(i!==null)return i;n=n.sibling}return null}var Mo=e.unstable_scheduleCallback,Eo=e.unstable_cancelCallback,vu=e.unstable_shouldYield,xu=e.unstable_requestPaint,Xt=e.unstable_now,C=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Z=e.unstable_LowPriority,Le=e.unstable_IdlePriority,Fe=null,we=null;function He(n){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Fe,n,void 0,(n.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ft,nt=Math.log,Qe=Math.LN2;function ft(n){return n>>>=0,n===0?32:31-(nt(n)/Qe|0)|0}var Mt=64,Ot=4194304;function Ft(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var I=E&~d;I!==0?u=Ft(I):(m&=E,m!==0&&(u=Ft(m)))}else E=a&~d,E!==0?u=Ft(E):m!==0&&(u=Ft(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Be(i),d=1<<a,u|=n[a],i&=~d;return u}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Be(m),I=1<<E,B=d[E];B===-1?((I&a)===0||(I&u)!==0)&&(d[E]=Je(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function _t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function yi(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Be(i),n[i]=a}function Br(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Be(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Dt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Be(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var ot=0;function Rn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ln,un,ps,Mi,Zd,Su=!1,To=[],ir=null,rr=null,sr=null,da=new Map,ha=new Map,ar=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,i){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function pa(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ra(i),i!==null&&un(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function D_(n,i,a,u,d){switch(i){case"focusin":return ir=pa(ir,n,i,a,u,d),!0;case"dragenter":return rr=pa(rr,n,i,a,u,d),!0;case"mouseover":return sr=pa(sr,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return da.set(m,pa(da.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ha.set(m,pa(ha.get(m)||null,n,i,a,u,d)),!0}return!1}function Jd(n){var i=kr(n.target);if(i!==null){var a=Zn(i);if(a!==null){if(i=a.tag,i===13){if(i=ca(a),i!==null){n.blockedOn=i,Zd(n.priority,function(){ps(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);lt=u,a.target.dispatchEvent(u),lt=null}else return i=Ra(a),i!==null&&un(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){wo(n)&&a.delete(i)}function I_(){Su=!1,ir!==null&&wo(ir)&&(ir=null),rr!==null&&wo(rr)&&(rr=null),sr!==null&&wo(sr)&&(sr=null),da.forEach(eh),ha.forEach(eh)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,Su||(Su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,I_)))}function ga(n){function i(d){return ma(d,n)}if(0<To.length){ma(To[0],n);for(var a=1;a<To.length;a++){var u=To[a];u.blockedOn===n&&(u.blockedOn=null)}}for(ir!==null&&ma(ir,n),rr!==null&&ma(rr,n),sr!==null&&ma(sr,n),da.forEach(i),ha.forEach(i),a=0;a<ar.length;a++)u=ar[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&ar.shift()}var ms=L.ReactCurrentBatchConfig,Ao=!0;function U_(n,i,a,u){var d=ot,m=ms.transition;ms.transition=null;try{ot=1,yu(n,i,a,u)}finally{ot=d,ms.transition=m}}function F_(n,i,a,u){var d=ot,m=ms.transition;ms.transition=null;try{ot=4,yu(n,i,a,u)}finally{ot=d,ms.transition=m}}function yu(n,i,a,u){if(Ao){var d=Mu(n,i,a,u);if(d===null)ku(n,i,u,Co,a),Qd(n,u);else if(D_(d,n,i,a,u))u.stopPropagation();else if(Qd(n,u),i&4&&-1<N_.indexOf(n)){for(;d!==null;){var m=Ra(d);if(m!==null&&ln(m),m=Mu(n,i,a,u),m===null&&ku(n,i,u,Co,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else ku(n,i,u,null,a)}}var Co=null;function Mu(n,i,a,u){if(Co=null,n=V(u),n=kr(n),n!==null)if(i=Zn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ca(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Co=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C()){case X:return 1;case ae:return 4;case ne:case Z:return 16;case Le:return 536870912;default:return 16}default:return 16}}var or=null,Eu=null,Ro=null;function nh(){if(Ro)return Ro;var n,i=Eu,a=i.length,u,d="value"in or?or.value:or.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===d[m-u];u++);return Ro=d.slice(n,1<u?1-u:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function ih(){return!1}function Xn(n){function i(a,u,d,m,E){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Po:ih,this.isPropagationStopped=ih,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=Xn(gs),_a=se({},gs,{view:0,detail:0}),O_=Xn(_a),wu,Au,va,Lo=se({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(wu=n.screenX-va.screenX,Au=n.screenY-va.screenY):Au=wu=0,va=n),wu)},movementY:function(n){return"movementY"in n?n.movementY:Au}}),rh=Xn(Lo),B_=se({},Lo,{dataTransfer:0}),k_=Xn(B_),z_=se({},_a,{relatedTarget:0}),Cu=Xn(z_),V_=se({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=Xn(V_),G_=se({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),W_=Xn(G_),X_=se({},gs,{data:0}),sh=Xn(X_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Y_[n])?!!i[n]:!1}function Ru(){return $_}var K_=se({},_a,{key:function(n){if(n.key){var i=j_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?q_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Z_=Xn(K_),Q_=se({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Xn(Q_),J_=se({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),e0=Xn(J_),t0=se({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Xn(t0),i0=se({},Lo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=Xn(i0),s0=[9,13,27,32],bu=f&&"CompositionEvent"in window,xa=null;f&&"documentMode"in document&&(xa=document.documentMode);var a0=f&&"TextEvent"in window&&!xa,oh=f&&(!bu||xa&&8<xa&&11>=xa),lh=" ",uh=!1;function ch(n,i){switch(n){case"keyup":return s0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function o0(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(uh=!0,lh);case"textInput":return n=i.data,n===lh&&uh?null:n;default:return null}}function l0(n,i){if(_s)return n==="compositionend"||!bu&&ch(n,i)?(n=nh(),Ro=Eu=or=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!u0[n.type]:i==="textarea"}function hh(n,i,a,u){pe(u),i=Fo(i,"onChange"),0<i.length&&(a=new Tu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Sa=null,ya=null;function c0(n){Lh(n,0)}function No(n){var i=Ms(n);if(Kt(i))return n}function f0(n,i){if(n==="change")return i}var ph=!1;if(f){var Pu;if(f){var Lu="oninput"in document;if(!Lu){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Lu=typeof mh.oninput=="function"}Pu=Lu}else Pu=!1;ph=Pu&&(!document.documentMode||9<document.documentMode)}function gh(){Sa&&(Sa.detachEvent("onpropertychange",_h),ya=Sa=null)}function _h(n){if(n.propertyName==="value"&&No(ya)){var i=[];hh(i,ya,n,V(n)),Wn(c0,i)}}function d0(n,i,a){n==="focusin"?(gh(),Sa=i,ya=a,Sa.attachEvent("onpropertychange",_h)):n==="focusout"&&gh()}function h0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(ya)}function p0(n,i){if(n==="click")return No(i)}function m0(n,i){if(n==="input"||n==="change")return No(i)}function g0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:g0;function Ma(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ci(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xh(n,i){var a=vh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Nu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function _0(n){var i=yh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(u!==null&&Nu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=xh(a,m);var E=xh(a,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var v0=f&&"documentMode"in document&&11>=document.documentMode,vs=null,Du=null,Ea=null,Iu=!1;function Mh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||vs==null||vs!==ht(u)||(u=vs,"selectionStart"in u&&Nu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ea&&Ma(Ea,u)||(Ea=u,u=Fo(Du,"onSelect"),0<u.length&&(i=new Tu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=vs)))}function Do(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var xs={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Uu={},Eh={};f&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Io(n){if(Uu[n])return Uu[n];if(!xs[n])return n;var i=xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eh)return Uu[n]=i[a];return n}var Th=Io("animationend"),wh=Io("animationiteration"),Ah=Io("animationstart"),Ch=Io("transitionend"),Rh=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,i){Rh.set(n,i),l(i,[n])}for(var Fu=0;Fu<bh.length;Fu++){var Ou=bh[Fu],x0=Ou.toLowerCase(),S0=Ou[0].toUpperCase()+Ou.slice(1);lr(x0,"on"+S0)}lr(Th,"onAnimationEnd"),lr(wh,"onAnimationIteration"),lr(Ah,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Ch,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Ph(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,xo(u,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var I=u[E],B=I.instance,re=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;Ph(d,I,re),m=B}else for(E=0;E<u.length;E++){if(I=u[E],B=I.instance,re=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;Ph(d,I,re),m=B}}}if(Fr)throw n=ui,Fr=!1,ui=null,n}function zt(n,i){var a=i[Xu];a===void 0&&(a=i[Xu]=new Set);var u=n+"__bubble";a.has(u)||(Nh(i,n,2,!1),a.add(u))}function Bu(n,i,a){var u=0;i&&(u|=4),Nh(a,n,u,i)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Uo]){n[Uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(y0.has(a)||Bu(a,!1,n),Bu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Uo]||(i[Uo]=!0,Bu("selectionchange",!1,i))}}function Nh(n,i,a,u){switch(th(i)){case 1:var d=U_;break;case 4:d=F_;break;default:d=yu}a=d.bind(null,i,a,n),d=void 0,!oa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ku(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;I!==null;){if(E=kr(I),E===null)return;if(B=E.tag,B===5||B===6){u=m=E;continue e}I=I.parentNode}}u=u.return}Wn(function(){var re=m,_e=V(a),xe=[];e:{var ge=Rh.get(n);if(ge!==void 0){var Oe=Tu,We=n;switch(n){case"keypress":if(bo(a)===0)break e;case"keydown":case"keyup":Oe=Z_;break;case"focusin":We="focus",Oe=Cu;break;case"focusout":We="blur",Oe=Cu;break;case"beforeblur":case"afterblur":Oe=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=e0;break;case Th:case wh:case Ah:Oe=H_;break;case Ch:Oe=n0;break;case"scroll":Oe=O_;break;case"wheel":Oe=r0;break;case"copy":case"cut":case"paste":Oe=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=ah}var qe=(i&4)!==0,Zt=!qe&&n==="scroll",$=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var H=re,J;H!==null;){J=H;var Ee=J.stateNode;if(J.tag===5&&Ee!==null&&(J=Ee,$!==null&&(Ee=Cn(H,$),Ee!=null&&qe.push(Aa(H,Ee,J)))),Zt)break;H=H.return}0<qe.length&&(ge=new Oe(ge,We,null,a,_e),xe.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ge&&a!==lt&&(We=a.relatedTarget||a.fromElement)&&(kr(We)||We[Fi]))break e;if((Oe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(We=a.relatedTarget||a.toElement,Oe=re,We=We?kr(We):null,We!==null&&(Zt=Zn(We),We!==Zt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=re),Oe!==We)){if(qe=rh,Ee="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(qe=ah,Ee="onPointerLeave",$="onPointerEnter",H="pointer"),Zt=Oe==null?ge:Ms(Oe),J=We==null?ge:Ms(We),ge=new qe(Ee,H+"leave",Oe,a,_e),ge.target=Zt,ge.relatedTarget=J,Ee=null,kr(_e)===re&&(qe=new qe($,H+"enter",We,a,_e),qe.target=J,qe.relatedTarget=Zt,Ee=qe),Zt=Ee,Oe&&We)t:{for(qe=Oe,$=We,H=0,J=qe;J;J=Ss(J))H++;for(J=0,Ee=$;Ee;Ee=Ss(Ee))J++;for(;0<H-J;)qe=Ss(qe),H--;for(;0<J-H;)$=Ss($),J--;for(;H--;){if(qe===$||$!==null&&qe===$.alternate)break t;qe=Ss(qe),$=Ss($)}qe=null}else qe=null;Oe!==null&&Dh(xe,ge,Oe,qe,!1),We!==null&&Zt!==null&&Dh(xe,Zt,We,qe,!0)}}e:{if(ge=re?Ms(re):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ke=f0;else if(dh(ge))if(ph)Ke=m0;else{Ke=h0;var et=d0}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=p0);if(Ke&&(Ke=Ke(n,re))){hh(xe,Ke,a,_e);break e}et&&et(n,ge,re),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Gt(ge,"number",ge.value)}switch(et=re?Ms(re):window,n){case"focusin":(dh(et)||et.contentEditable==="true")&&(vs=et,Du=re,Ea=null);break;case"focusout":Ea=Du=vs=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Mh(xe,a,_e);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Mh(xe,a,_e)}var tt;if(bu)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else _s?ch(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(oh&&a.locale!=="ko"&&(_s||st!=="onCompositionStart"?st==="onCompositionEnd"&&_s&&(tt=nh()):(or=_e,Eu="value"in or?or.value:or.textContent,_s=!0)),et=Fo(re,st),0<et.length&&(st=new sh(st,n,null,a,_e),xe.push({event:st,listeners:et}),tt?st.data=tt:(tt=fh(a),tt!==null&&(st.data=tt)))),(tt=a0?o0(n,a):l0(n,a))&&(re=Fo(re,"onBeforeInput"),0<re.length&&(_e=new sh("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:re}),_e.data=tt))}Lh(xe,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fo(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Cn(n,a),m!=null&&u.unshift(Aa(n,m,d)),m=Cn(n,i),m!=null&&u.push(Aa(n,m,d))),n=n.return}return u}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dh(n,i,a,u,d){for(var m=i._reactName,E=[];a!==null&&a!==u;){var I=a,B=I.alternate,re=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&re!==null&&(I=re,d?(B=Cn(a,m),B!=null&&E.unshift(Aa(a,B,I))):d||(B=Cn(a,m),B!=null&&E.push(Aa(a,B,I)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var M0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(M0,`
`).replace(E0,"")}function Oo(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function Bo(){}var zu=null,Vu=null;function Hu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(A0)}:Gu;function A0(n){setTimeout(function(){throw n})}function Wu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),ga(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ga(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ys,Ca="__reactProps$"+ys,Fi="__reactContainer$"+ys,Xu="__reactEvents$"+ys,C0="__reactListeners$"+ys,R0="__reactHandles$"+ys;function kr(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Fi]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Ei])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Ra(n){return n=n[Ei]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Ca]||null}var ju=[],Es=-1;function cr(n){return{current:n}}function Vt(n){0>Es||(n.current=ju[Es],ju[Es]=null,Es--)}function kt(n,i){Es++,ju[Es]=n.current,n.current=i}var fr={},xn=cr(fr),Fn=cr(!1),zr=fr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return fr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function On(n){return n=n.childContextTypes,n!=null}function zo(){Vt(Fn),Vt(xn)}function Oh(n,i,a){if(xn.current!==fr)throw Error(t(168));kt(xn,i),kt(Fn,a)}function Bh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,fe(n)||"Unknown",d));return se({},a,u)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,zr=xn.current,kt(xn,n),kt(Fn,Fn.current),!0}function kh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Bh(n,i,zr),u.__reactInternalMemoizedMergedChildContext=n,Vt(Fn),Vt(xn),kt(xn,n)):Vt(Fn),kt(Fn,a)}var Oi=null,Ho=!1,qu=!1;function zh(n){Oi===null?Oi=[n]:Oi.push(n)}function b0(n){Ho=!0,zh(n)}function dr(){if(!qu&&Oi!==null){qu=!0;var n=0,i=ot;try{var a=Oi;for(ot=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Oi=null,Ho=!1}catch(d){throw Oi!==null&&(Oi=Oi.slice(n+1)),Mo(X,dr),d}finally{ot=i,qu=!1}}return null}var ws=[],As=0,Go=null,Wo=0,Qn=[],Jn=0,Vr=null,Bi=1,ki="";function Hr(n,i){ws[As++]=Wo,ws[As++]=Go,Go=n,Wo=i}function Vh(n,i,a){Qn[Jn++]=Bi,Qn[Jn++]=ki,Qn[Jn++]=Vr,Vr=n;var u=Bi;n=ki;var d=32-Be(u)-1;u&=~(1<<d),a+=1;var m=32-Be(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Bi=1<<32-Be(i)+d|a<<d|u,ki=m+n}else Bi=1<<m|a<<d|u,ki=n}function Yu(n){n.return!==null&&(Hr(n,1),Vh(n,1,0))}function $u(n){for(;n===Go;)Go=ws[--As],ws[As]=null,Wo=ws[--As],ws[As]=null;for(;n===Vr;)Vr=Qn[--Jn],Qn[Jn]=null,ki=Qn[--Jn],Qn[Jn]=null,Bi=Qn[--Jn],Qn[Jn]=null}var jn=null,qn=null,Wt=!1,fi=null;function Hh(n,i){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,qn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Vr!==null?{id:Bi,overflow:ki}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,jn=n,qn=null,!0):!1;default:return!1}}function Ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zu(n){if(Wt){var i=qn;if(i){var a=i;if(!Gh(n,i)){if(Ku(n))throw Error(t(418));i=ur(a.nextSibling);var u=jn;i&&Gh(n,i)?Hh(u,a):(n.flags=n.flags&-4097|2,Wt=!1,jn=n)}}else{if(Ku(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,jn=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Xo(n){if(n!==jn)return!1;if(!Wt)return Wh(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hu(n.type,n.memoizedProps)),i&&(i=qn)){if(Ku(n))throw Xh(),Error(t(418));for(;i;)Hh(n,i),i=ur(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=jn?ur(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=qn;n;)n=ur(n.nextSibling)}function Cs(){qn=jn=null,Wt=!1}function Qu(n){fi===null?fi=[n]:fi.push(n)}var P0=L.ReactCurrentBatchConfig;function ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=d.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function jo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function qh(n){function i($,H){if(n){var J=$.deletions;J===null?($.deletions=[H],$.flags|=16):J.push(H)}}function a($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function u($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d($,H){return $=Sr($,H),$.index=0,$.sibling=null,$}function m($,H,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<H?($.flags|=2,H):J):($.flags|=2,H)):($.flags|=1048576,H)}function E($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,J,Ee){return H===null||H.tag!==6?(H=Gc(J,$.mode,Ee),H.return=$,H):(H=d(H,J),H.return=$,H)}function B($,H,J,Ee){var Ke=J.type;return Ke===O?_e($,H,J.props.children,Ee,J.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&jh(Ke)===H.type)?(Ee=d(H,J.props),Ee.ref=ba($,H,J),Ee.return=$,Ee):(Ee=gl(J.type,J.key,J.props,null,$.mode,Ee),Ee.ref=ba($,H,J),Ee.return=$,Ee)}function re($,H,J,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=Wc(J,$.mode,Ee),H.return=$,H):(H=d(H,J.children||[]),H.return=$,H)}function _e($,H,J,Ee,Ke){return H===null||H.tag!==7?(H=Kr(J,$.mode,Ee,Ke),H.return=$,H):(H=d(H,J),H.return=$,H)}function xe($,H,J){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Gc(""+H,$.mode,J),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=gl(H.type,H.key,H.props,null,$.mode,J),J.ref=ba($,null,H),J.return=$,J;case U:return H=Wc(H,$.mode,J),H.return=$,H;case oe:var Ee=H._init;return xe($,Ee(H._payload),J)}if(gt(H)||he(H))return H=Kr(H,$.mode,J,null),H.return=$,H;jo($,H)}return null}function ge($,H,J,Ee){var Ke=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ke!==null?null:I($,H,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ke?B($,H,J,Ee):null;case U:return J.key===Ke?re($,H,J,Ee):null;case oe:return Ke=J._init,ge($,H,Ke(J._payload),Ee)}if(gt(J)||he(J))return Ke!==null?null:_e($,H,J,Ee,null);jo($,J)}return null}function Oe($,H,J,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(J)||null,I(H,$,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return $=$.get(Ee.key===null?J:Ee.key)||null,B(H,$,Ee,Ke);case U:return $=$.get(Ee.key===null?J:Ee.key)||null,re(H,$,Ee,Ke);case oe:var et=Ee._init;return Oe($,H,J,et(Ee._payload),Ke)}if(gt(Ee)||he(Ee))return $=$.get(J)||null,_e(H,$,Ee,Ke,null);jo(H,Ee)}return null}function We($,H,J,Ee){for(var Ke=null,et=null,tt=H,st=H=0,dn=null;tt!==null&&st<J.length;st++){tt.index>st?(dn=tt,tt=null):dn=tt.sibling;var At=ge($,tt,J[st],Ee);if(At===null){tt===null&&(tt=dn);break}n&&tt&&At.alternate===null&&i($,tt),H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At,tt=dn}if(st===J.length)return a($,tt),Wt&&Hr($,st),Ke;if(tt===null){for(;st<J.length;st++)tt=xe($,J[st],Ee),tt!==null&&(H=m(tt,H,st),et===null?Ke=tt:et.sibling=tt,et=tt);return Wt&&Hr($,st),Ke}for(tt=u($,tt);st<J.length;st++)dn=Oe(tt,$,st,J[st],Ee),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?st:dn.key),H=m(dn,H,st),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(yr){return i($,yr)}),Wt&&Hr($,st),Ke}function qe($,H,J,Ee){var Ke=he(J);if(typeof Ke!="function")throw Error(t(150));if(J=Ke.call(J),J==null)throw Error(t(151));for(var et=Ke=null,tt=H,st=H=0,dn=null,At=J.next();tt!==null&&!At.done;st++,At=J.next()){tt.index>st?(dn=tt,tt=null):dn=tt.sibling;var yr=ge($,tt,At.value,Ee);if(yr===null){tt===null&&(tt=dn);break}n&&tt&&yr.alternate===null&&i($,tt),H=m(yr,H,st),et===null?Ke=yr:et.sibling=yr,et=yr,tt=dn}if(At.done)return a($,tt),Wt&&Hr($,st),Ke;if(tt===null){for(;!At.done;st++,At=J.next())At=xe($,At.value,Ee),At!==null&&(H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At);return Wt&&Hr($,st),Ke}for(tt=u($,tt);!At.done;st++,At=J.next())At=Oe(tt,$,st,At.value,Ee),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?st:At.key),H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At);return n&&tt.forEach(function(uv){return i($,uv)}),Wt&&Hr($,st),Ke}function Zt($,H,J,Ee){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:e:{for(var Ke=J.key,et=H;et!==null;){if(et.key===Ke){if(Ke=J.type,Ke===O){if(et.tag===7){a($,et.sibling),H=d(et,J.props.children),H.return=$,$=H;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&jh(Ke)===et.type){a($,et.sibling),H=d(et,J.props),H.ref=ba($,et,J),H.return=$,$=H;break e}a($,et);break}else i($,et);et=et.sibling}J.type===O?(H=Kr(J.props.children,$.mode,Ee,J.key),H.return=$,$=H):(Ee=gl(J.type,J.key,J.props,null,$.mode,Ee),Ee.ref=ba($,H,J),Ee.return=$,$=Ee)}return E($);case U:e:{for(et=J.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a($,H.sibling),H=d(H,J.children||[]),H.return=$,$=H;break e}else{a($,H);break}else i($,H);H=H.sibling}H=Wc(J,$.mode,Ee),H.return=$,$=H}return E($);case oe:return et=J._init,Zt($,H,et(J._payload),Ee)}if(gt(J))return We($,H,J,Ee);if(he(J))return qe($,H,J,Ee);jo($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,H!==null&&H.tag===6?(a($,H.sibling),H=d(H,J),H.return=$,$=H):(a($,H),H=Gc(J,$.mode,Ee),H.return=$,$=H),E($)):a($,H)}return Zt}var Rs=qh(!0),Yh=qh(!1),qo=cr(null),Yo=null,bs=null,Ju=null;function ec(){Ju=bs=Yo=null}function tc(n){var i=qo.current;Vt(qo),n._currentValue=i}function nc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){Yo=n,Ju=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ei(n){var i=n._currentValue;if(Ju!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Yo===null)throw Error(t(308));bs=n,Yo.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var Gr=null;function ic(n){Gr===null?Gr=[n]:Gr.push(n)}function $h(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,ic(i)):(a.next=d.next,d.next=a),i.interleaved=a,zi(n,u)}function zi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function rc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,zi(n,a)}return d=u.interleaved,d===null?(i.next=i,ic(u)):(i.next=d.next,d.next=i),u.interleaved=i,zi(n,a)}function $o(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dt(n,a)}}function Zh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ko(n,i,a,u){var d=n.updateQueue;hr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,re=B.next;B.next=null,E===null?m=re:E.next=re,E=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=re:I.next=re,_e.lastBaseUpdate=B))}if(m!==null){var xe=d.baseState;E=0,_e=re=B=null,I=m;do{var ge=I.lane,Oe=I.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,qe=I;switch(ge=i,Oe=a,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){xe=We.call(Oe,xe,ge);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,ge=typeof We=="function"?We.call(Oe,xe,ge):We,ge==null)break e;xe=se({},xe,ge);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Oe={eventTime:Oe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(re=_e=Oe,B=xe):_e=_e.next=Oe,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(B=xe),d.baseState=B,d.firstBaseUpdate=re,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);jr|=E,n.lanes=E,n.memoizedState=xe}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Pa={},Ti=cr(Pa),La=cr(Pa),Na=cr(Pa);function Wr(n){if(n===Pa)throw Error(t(174));return n}function sc(n,i){switch(kt(Na,i),kt(La,n),kt(Ti,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Vt(Ti),kt(Ti,i)}function Ls(){Vt(Ti),Vt(La),Vt(Na)}function Jh(n){Wr(Na.current);var i=Wr(Ti.current),a=me(i,n.type);i!==a&&(kt(La,n),kt(Ti,a))}function ac(n){La.current===n&&(Vt(Ti),Vt(La))}var jt=cr(0);function Zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function lc(){for(var n=0;n<oc.length;n++)oc[n]._workInProgressVersionPrimary=null;oc.length=0}var Qo=L.ReactCurrentDispatcher,uc=L.ReactCurrentBatchConfig,Xr=0,qt=null,rn=null,cn=null,Jo=!1,Da=!1,Ia=0,L0=0;function Sn(){throw Error(t(321))}function cc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ci(n[a],i[a]))return!1;return!0}function fc(n,i,a,u,d,m){if(Xr=m,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=n===null||n.memoizedState===null?U0:F0,n=a(u,d),Da){m=0;do{if(Da=!1,Ia=0,25<=m)throw Error(t(301));m+=1,cn=rn=null,i.updateQueue=null,Qo.current=O0,n=a(u,d)}while(Da)}if(Qo.current=nl,i=rn!==null&&rn.next!==null,Xr=0,cn=rn=qt=null,Jo=!1,i)throw Error(t(300));return n}function dc(){var n=Ia!==0;return Ia=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?qt.memoizedState=cn=n:cn=cn.next=n,cn}function ti(){if(rn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=cn===null?qt.memoizedState:cn.next;if(i!==null)cn=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},cn===null?qt.memoizedState=cn=n:cn=cn.next=n}return cn}function Ua(n,i){return typeof i=="function"?i(n):i}function hc(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=rn,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=E=null,B=null,re=m;do{var _e=re.lane;if((Xr&_e)===_e)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var xe={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(I=B=xe,E=u):B=B.next=xe,qt.lanes|=_e,jr|=_e}re=re.next}while(re!==null&&re!==m);B===null?E=u:B.next=I,ci(u,i.memoizedState)||(Bn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,qt.lanes|=m,jr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pc(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ci(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function ep(){}function tp(n,i){var a=qt,u=ti(),d=i(),m=!ci(u.memoizedState,d);if(m&&(u.memoizedState=d,Bn=!0),u=u.queue,mc(rp.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Fa(9,ip.bind(null,a,u,d,i),void 0,null),fn===null)throw Error(t(349));(Xr&30)!==0||np(a,i,d)}return d}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,u){i.value=a,i.getSnapshot=u,sp(i)&&ap(n)}function rp(n,i,a){return a(function(){sp(i)&&ap(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ci(n,a)}catch{return!0}}function ap(n){var i=zi(n,1);i!==null&&mi(i,n,1,-1)}function op(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=I0.bind(null,qt,n),[i.memoizedState,n]}function Fa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function lp(){return ti().memoizedState}function el(n,i,a,u){var d=wi();qt.flags|=n,d.memoizedState=Fa(1|i,a,void 0,u===void 0?null:u)}function tl(n,i,a,u){var d=ti();u=u===void 0?null:u;var m=void 0;if(rn!==null){var E=rn.memoizedState;if(m=E.destroy,u!==null&&cc(u,E.deps)){d.memoizedState=Fa(i,a,m,u);return}}qt.flags|=n,d.memoizedState=Fa(1|i,a,m,u)}function up(n,i){return el(8390656,8,n,i)}function mc(n,i){return tl(2048,8,n,i)}function cp(n,i){return tl(4,2,n,i)}function fp(n,i){return tl(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,dp.bind(null,i,n),a)}function gc(){}function pp(n,i){var a=ti();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&cc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=ti();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&cc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(ci(a,i)||(a=vn(),qt.lanes|=a,jr|=a,n.baseState=!0),i)}function N0(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var u=uc.transition;uc.transition={};try{n(!1),i()}finally{ot=a,uc.transition=u}}function _p(){return ti().memoizedState}function D0(n,i,a){var u=vr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))xp(i,a);else if(a=$h(n,i,a,u),a!==null){var d=Pn();mi(a,n,u,d),Sp(a,i,u)}}function I0(n,i,a){var u=vr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))xp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,a);if(d.hasEagerState=!0,d.eagerState=I,ci(I,E)){var B=i.interleaved;B===null?(d.next=d,ic(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=$h(n,i,d,u),a!==null&&(d=Pn(),mi(a,n,u,d),Sp(a,i,u))}}function vp(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function xp(n,i){Da=Jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dt(n,a)}}var nl={readContext:ei,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},U0={readContext:ei,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,dp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=wi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=wi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=D0.bind(null,qt,n),[u.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:gc,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=N0.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=qt,d=wi();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(Xr&30)!==0||np(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,up(rp.bind(null,u,m,n),[n]),u.flags|=2048,Fa(9,ip.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=wi(),i=fn.identifierPrefix;if(Wt){var a=ki,u=Bi;a=(u&~(1<<32-Be(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=L0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},F0={readContext:ei,useCallback:pp,useContext:ei,useEffect:mc,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:hc,useRef:lp,useState:function(){return hc(Ua)},useDebugValue:gc,useDeferredValue:function(n){var i=ti();return gp(i,rn.memoizedState,n)},useTransition:function(){var n=hc(Ua)[0],i=ti().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1},O0={readContext:ei,useCallback:pp,useContext:ei,useEffect:mc,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:pc,useRef:lp,useState:function(){return pc(Ua)},useDebugValue:gc,useDeferredValue:function(n){var i=ti();return rn===null?i.memoizedState=n:gp(i,rn.memoizedState,n)},useTransition:function(){var n=pc(Ua)[0],i=ti().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _c(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?Zn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Pn(),d=vr(n),m=Vi(u,d);m.payload=i,a!=null&&(m.callback=a),i=pr(n,m,d),i!==null&&(mi(i,n,d,u),$o(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Pn(),d=vr(n),m=Vi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=pr(n,m,d),i!==null&&(mi(i,n,d,u),$o(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Pn(),u=vr(n),d=Vi(a,u);d.tag=2,i!=null&&(d.callback=i),i=pr(n,d,u),i!==null&&(mi(i,n,u,a),$o(i,n,u))}};function yp(n,i,a,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,u)||!Ma(d,m):!0}function Mp(n,i,a){var u=!1,d=fr,m=i.contextType;return typeof m=="object"&&m!==null?m=ei(m):(d=On(i)?zr:xn.current,u=i.contextTypes,m=(u=u!=null)?Ts(n,d):fr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Ep(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function vc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},rc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ei(m):(m=On(i)?zr:xn.current,d.context=Ts(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(_c(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&il.enqueueReplaceState(d,d.state,null),Ko(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var a="",u=i;do a+=Ze(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function xc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Sc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){cl||(cl=!0,Uc=u),Sc(n,i)},a}function wp(n,i,a){a=Vi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){Sc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Sc(n,i),typeof u!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ap(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new B0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=Q0.bind(null,n,i,a),i.then(n,n))}function Cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Vi(-1,1),i.tag=2,pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var k0=L.ReactCurrentOwner,Bn=!1;function bn(n,i,a,u){i.child=n===null?Yh(i,null,a,u):Rs(i,n.child,a,u)}function bp(n,i,a,u,d){a=a.render;var m=i.ref;return Ps(i,d),u=fc(n,i,a,u,m,d),a=dc(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Hi(n,i,d)):(Wt&&a&&Yu(i),i.flags|=1,bn(n,i,u,d),i.child)}function Pp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Hc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Lp(n,i,m,u,d)):(n=gl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(E,u)&&n.ref===i.ref)return Hi(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(Ma(m,u)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,Hi(n,i,d)}return yc(n,i,a,u,d)}function Np(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Is,Yn),Yn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Is,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,kt(Is,Yn),Yn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,kt(Is,Yn),Yn|=u;return bn(n,i,d,a),i.child}function Dp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function yc(n,i,a,u,d){var m=On(a)?zr:xn.current;return m=Ts(i,m),Ps(i,d),a=fc(n,i,a,u,m,d),u=dc(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Hi(n,i,d)):(Wt&&u&&Yu(i),i.flags|=1,bn(n,i,a,d),i.child)}function Ip(n,i,a,u,d){if(On(a)){var m=!0;Vo(i)}else m=!1;if(Ps(i,d),i.stateNode===null)sl(n,i),Mp(i,a,u),vc(i,a,u,d),u=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,re=a.contextType;typeof re=="object"&&re!==null?re=ei(re):(re=On(a)?zr:xn.current,re=Ts(i,re));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||B!==re)&&Ep(i,E,u,re),hr=!1;var ge=i.memoizedState;E.state=ge,Ko(i,u,E,d),B=i.memoizedState,I!==u||ge!==B||Fn.current||hr?(typeof _e=="function"&&(_c(i,a,_e,u),B=i.memoizedState),(I=hr||yp(i,a,I,u,ge,B,re))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),E.props=u,E.state=B,E.context=re,u=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Kh(n,i),I=i.memoizedProps,re=i.type===i.elementType?I:di(i.type,I),E.props=re,xe=i.pendingProps,ge=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=ei(B):(B=On(a)?zr:xn.current,B=Ts(i,B));var Oe=a.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||ge!==B)&&Ep(i,E,u,B),hr=!1,ge=i.memoizedState,E.state=ge,Ko(i,u,E,d);var We=i.memoizedState;I!==xe||ge!==We||Fn.current||hr?(typeof Oe=="function"&&(_c(i,a,Oe,u),We=i.memoizedState),(re=hr||yp(i,a,re,u,ge,We,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,We,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,We,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=We),E.props=u,E.state=We,E.context=B,u=re):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return Mc(n,i,a,u,m,d)}function Mc(n,i,a,u,d,m){Dp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&kh(i,a,!1),Hi(n,i,m);u=i.stateNode,k0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=Rs(i,n.child,null,m),i.child=Rs(i,null,I,m)):bn(n,i,I,m),i.memoizedState=u.state,d&&kh(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Oh(n,i.context,!1),sc(n,i.containerInfo)}function Fp(n,i,a,u,d){return Cs(),Qu(d),i.flags|=256,bn(n,i,a,u),i.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Tc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Op(n,i,a){var u=i.pendingProps,d=jt.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(jt,d&1),n===null)return Zu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=_l(E,u,0,null),n=Kr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Tc(a),i.memoizedState=Ec,n):wc(i,E));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return z0(n,i,E,u,I,d,a);if(m){m=u.fallback,E=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=Sr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Sr(I,m):(m=Kr(m,E,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?Tc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=Ec,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function wc(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,u){return u!==null&&Qu(u),Rs(i,n.child,null,a),n=wc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function z0(n,i,a,u,d,m,E){if(a)return i.flags&256?(i.flags&=-257,u=xc(Error(t(422))),rl(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=_l({mode:"visible",children:u.children},d,0,null),m=Kr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Rs(i,n.child,null,E),i.child.memoizedState=Tc(E),i.memoizedState=Ec,m);if((i.mode&1)===0)return rl(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=xc(m,u,void 0),rl(n,i,E,u)}if(I=(E&n.childLanes)!==0,Bn||I){if(u=fn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,zi(n,d),mi(u,n,d,-1))}return Vc(),u=xc(Error(t(421))),rl(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=J0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,qn=ur(d.nextSibling),jn=i,Wt=!0,fi=null,n!==null&&(Qn[Jn++]=Bi,Qn[Jn++]=ki,Qn[Jn++]=Vr,Bi=n.id,ki=n.overflow,Vr=i),i=wc(i,u.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),nc(n.return,i,a)}function Ac(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function kp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(bn(n,i,u.children,a),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Zo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ac(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Zo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ac(i,!0,a,null,m);break;case"together":Ac(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Hi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function V0(n,i,a){switch(i.tag){case 3:Up(i),Cs();break;case 5:Jh(i);break;case 1:On(i.type)&&Vo(i);break;case 4:sc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;kt(qo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Op(n,i,a):(kt(jt,jt.current&1),n=Hi(n,i,a),n!==null?n.sibling:null);kt(jt,jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,Np(n,i,a)}return Hi(n,i,a)}var zp,Cc,Vp,Hp;zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cc=function(){},Vp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Wr(Ti.current);var m=null;switch(a){case"input":d=xt(n,d),u=xt(n,u),m=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),m=[];break;case"textarea":d=Xe(n,d),u=Xe(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Bo)}je(a,u);var E;a=null;for(re in d)if(!u.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var I=d[re];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in u){var B=u[re];if(I=d!=null?d[re]:void 0,u.hasOwnProperty(re)&&B!==I&&(B!=null||I!=null))if(re==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(m||(m=[]),m.push(re,a)),a=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&zt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(re,B))}a&&(m=m||[]).push("style",a);var re=m;(i.updateQueue=re)&&(i.flags|=4)}},Hp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Oa(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function H0(n,i,a){var u=i.pendingProps;switch($u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return On(i.type)&&zo(),yn(i),null;case 3:return u=i.stateNode,Ls(),Vt(Fn),Vt(xn),lc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(Bc(fi),fi=null))),Cc(n,i),yn(i),null;case 5:ac(i);var d=Wr(Na.current);if(a=i.type,n!==null&&i.stateNode!=null)Vp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=Wr(Ti.current),Xo(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[Ei]=i,u[Ca]=m,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(d=0;d<Ta.length;d++)zt(Ta[d],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Nt(u,m),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},zt("invalid",u);break;case"textarea":N(u,m),zt("invalid",u)}je(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Oo(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Oo(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&zt("scroll",u)}switch(a){case"input":mt(u),k(u,m,!0);break;case"textarea":mt(u),G(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Bo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[Ei]=i,n[Ca]=u,zp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ae(a,u),a){case"dialog":zt("cancel",n),zt("close",n),d=u;break;case"iframe":case"object":case"embed":zt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ta.length;d++)zt(Ta[d],n);d=u;break;case"source":zt("error",n),d=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),d=u;break;case"details":zt("toggle",n),d=u;break;case"input":Nt(n,u),d=xt(n,u),zt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),zt("invalid",n);break;case"textarea":N(n,u),d=Xe(n,u),zt("invalid",n);break;default:d=u}je(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?Pe(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Te(n,B):typeof B=="number"&&Te(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&zt("scroll",n):B!=null&&P(n,m,B,E))}switch(a){case"input":mt(n),k(n,u,!1);break;case"textarea":mt(n),G(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ye(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?St(n,!!u.multiple,m,!1):u.defaultValue!=null&&St(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Bo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)Hp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wr(Na.current),Wr(Ti.current),Xo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ei]=i,(m=u.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:Oo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oo(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ei]=i,i.stateNode=u}return yn(i),null;case 13:if(Vt(jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),Cs(),i.flags|=98560,m=!1;else if(m=Xo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),m=!1}else fi!==null&&(Bc(fi),fi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?sn===0&&(sn=3):Vc())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Ls(),Cc(n,i),n===null&&wa(i.stateNode.containerInfo),yn(i),null;case 10:return tc(i.type._context),yn(i),null;case 17:return On(i.type)&&zo(),yn(i),null;case 19:if(Vt(jt),m=i.memoizedState,m===null)return yn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Oa(m,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Zo(n),E!==null){for(i.flags|=128,Oa(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xt()>Us&&(i.flags|=128,u=!0,Oa(m,!1),i.lanes=4194304)}else{if(!u)if(n=Zo(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Wt)return yn(i),null}else 2*Xt()-m.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,u=!0,Oa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xt(),i.sibling=null,a=jt.current,kt(jt,u?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return zc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function G0(n,i){switch($u(i),i.tag){case 1:return On(i.type)&&zo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ls(),Vt(Fn),Vt(xn),lc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ac(i),null;case 13:if(Vt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Cs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(jt),null;case 4:return Ls(),null;case 10:return tc(i.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var al=!1,Mn=!1,W0=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Yt(n,i,u)}else a.current=null}function Rc(n,i,a){try{a()}catch(u){Yt(n,i,u)}}var Gp=!1;function X0(n,i){if(zu=Ao,n=yh(),Nu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,I=-1,B=-1,re=0,_e=0,xe=n,ge=null;t:for(;;){for(var Oe;xe!==a||d!==0&&xe.nodeType!==3||(I=E+d),xe!==m||u!==0&&xe.nodeType!==3||(B=E+u),xe.nodeType===3&&(E+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)ge=xe,xe=Oe;for(;;){if(xe===n)break t;if(ge===a&&++re===d&&(I=E),ge===m&&++_e===u&&(B=E),(Oe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Oe}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vu={focusedElem:n,selectionRange:a},Ao=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,Zt=We.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?qe:di(i.type,qe),Zt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return We=Gp,Gp=!1,We}function Ba(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Rc(i,a,m)}d=d.next}while(d!==u)}}function ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function bc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[Ca],delete i[Xu],delete i[C0],delete i[R0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bo));else if(u!==4&&(n=n.child,n!==null))for(Pc(n,i,a),n=n.sibling;n!==null;)Pc(n,i,a),n=n.sibling}function Lc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Lc(n,i,a),n=n.sibling;n!==null;)Lc(n,i,a),n=n.sibling}var pn=null,hi=!1;function mr(n,i,a){for(a=a.child;a!==null;)qp(n,i,a),a=a.sibling}function qp(n,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Fe,a)}catch{}switch(a.tag){case 5:Mn||Ds(a,i);case 6:var u=pn,d=hi;pn=null,mr(n,i,a),pn=u,hi=d,pn!==null&&(hi?(n=pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(hi?(n=pn,a=a.stateNode,n.nodeType===8?Wu(n.parentNode,a):n.nodeType===1&&Wu(n,a),ga(n)):Wu(pn,a.stateNode));break;case 4:u=pn,d=hi,pn=a.stateNode.containerInfo,hi=!0,mr(n,i,a),pn=u,hi=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Rc(a,i,E),d=d.next}while(d!==u)}mr(n,i,a);break;case 1:if(!Mn&&(Ds(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Yt(a,i,I)}mr(n,i,a);break;case 21:mr(n,i,a);break;case 22:a.mode&1?(Mn=(u=Mn)||a.memoizedState!==null,mr(n,i,a),Mn=u):mr(n,i,a);break;default:mr(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new W0),i.forEach(function(u){var d=ev.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function pi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,hi=!1;break e;case 3:pn=I.stateNode.containerInfo,hi=!0;break e;case 4:pn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(pn===null)throw Error(t(160));qp(m,E,d),pn=null,hi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(re){Yt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),Ai(n),u&4){try{Ba(3,n,n.return),ol(3,n)}catch(qe){Yt(n,n.return,qe)}try{Ba(5,n,n.return)}catch(qe){Yt(n,n.return,qe)}}break;case 1:pi(i,n),Ai(n),u&512&&a!==null&&Ds(a,a.return);break;case 5:if(pi(i,n),Ai(n),u&512&&a!==null&&Ds(a,a.return),n.flags&32){var d=n.stateNode;try{Te(d,"")}catch(qe){Yt(n,n.return,qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),Ae(I,E);var re=Ae(I,m);for(E=0;E<B.length;E+=2){var _e=B[E],xe=B[E+1];_e==="style"?Pe(d,xe):_e==="dangerouslySetInnerHTML"?$e(d,xe):_e==="children"?Te(d,xe):P(d,_e,xe,re)}switch(I){case"input":Ht(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?St(d,!!m.multiple,Oe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ca]=m}catch(qe){Yt(n,n.return,qe)}}break;case 6:if(pi(i,n),Ai(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){Yt(n,n.return,qe)}}break;case 3:if(pi(i,n),Ai(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(qe){Yt(n,n.return,qe)}break;case 4:pi(i,n),Ai(n);break;case 13:pi(i,n),Ai(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ic=Xt())),u&4&&Yp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(Mn=(re=Mn)||_e,pi(i,n),Mn=re):pi(i,n),Ai(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!_e&&(n.mode&1)!==0)for(Ve=n,_e=n.child;_e!==null;){for(xe=Ve=_e;Ve!==null;){switch(ge=Ve,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ba(4,ge,ge.return);break;case 1:Ds(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){u=ge,a=ge.return;try{i=u,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(qe){Yt(u,a,qe)}}break;case 5:Ds(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Qp(xe);continue}}Oe!==null?(Oe.return=ge,Ve=Oe):Qp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,re?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Se("display",E))}catch(qe){Yt(n,n.return,qe)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=re?"":xe.memoizedProps}catch(qe){Yt(n,n.return,qe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:pi(i,n),Ai(n),u&4&&Yp(n);break;case 21:break;default:pi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Te(d,""),u.flags&=-33);var m=jp(n);Lc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,I=jp(n);Pc(n,I,E);break;default:throw Error(t(161))}}catch(B){Yt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function j0(n,i,a){Ve=n,Kp(n)}function Kp(n,i,a){for(var u=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||al;if(!E){var I=d.alternate,B=I!==null&&I.memoizedState!==null||Mn;I=al;var re=Mn;if(al=E,(Mn=B)&&!re)for(Ve=d;Ve!==null;)E=Ve,B=E.child,E.tag===22&&E.memoizedState!==null?Jp(d):B!==null?(B.return=E,Ve=B):Jp(d);for(;m!==null;)Ve=m,Kp(m),m=m.sibling;Ve=d,al=I,Mn=re}Zp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Zp(n)}}function Zp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||ol(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Mn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Qh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ga(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&bc(i)}catch(ge){Yt(i,i.return,ge)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Qp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Jp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ol(4,i)}catch(B){Yt(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Yt(i,d,B)}}var m=i.return;try{bc(i)}catch(B){Yt(i,m,B)}break;case 5:var E=i.return;try{bc(i)}catch(B){Yt(i,E,B)}}}catch(B){Yt(i,i.return,B)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var q0=Math.ceil,ll=L.ReactCurrentDispatcher,Nc=L.ReactCurrentOwner,ni=L.ReactCurrentBatchConfig,Et=0,fn=null,Jt=null,mn=0,Yn=0,Is=cr(0),sn=0,ka=null,jr=0,ul=0,Dc=0,za=null,kn=null,Ic=0,Us=1/0,Gi=null,cl=!1,Uc=null,gr=null,fl=!1,_r=null,dl=0,Va=0,Fc=null,hl=-1,pl=0;function Pn(){return(Et&6)!==0?Xt():hl!==-1?hl:hl=Xt()}function vr(n){return(n.mode&1)===0?1:(Et&2)!==0&&mn!==0?mn&-mn:P0.transition!==null?(pl===0&&(pl=vn()),pl):(n=ot,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function mi(n,i,a,u){if(50<Va)throw Va=0,Fc=null,Error(t(185));nn(n,a,u),((Et&2)===0||n!==fn)&&(n===fn&&((Et&2)===0&&(ul|=a),sn===4&&xr(n,mn)),zn(n,u),a===1&&Et===0&&(i.mode&1)===0&&(Us=Xt()+500,Ho&&dr()))}function zn(n,i){var a=n.callbackNode;bt(n,i);var u=wt(n,n===fn?mn:0);if(u===0)a!==null&&Eo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Eo(a),i===1)n.tag===0?b0(tm.bind(null,n)):zh(tm.bind(null,n)),w0(function(){(Et&6)===0&&dr()}),a=null;else{switch(Rn(u)){case 1:a=X;break;case 4:a=ae;break;case 16:a=ne;break;case 536870912:a=Le;break;default:a=ne}a=um(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(hl=-1,pl=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var u=wt(n,n===fn?mn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ml(n,u);else{i=u;var d=Et;Et|=2;var m=im();(fn!==n||mn!==i)&&(Gi=null,Us=Xt()+500,Yr(n,i));do try{K0();break}catch(I){nm(n,I)}while(!0);ec(),ll.current=m,Et=d,Jt!==null?i=0:(fn=null,mn=0,i=sn)}if(i!==0){if(i===2&&(d=_t(n),d!==0&&(u=d,i=Oc(n,d))),i===1)throw a=ka,Yr(n,0),xr(n,u),zn(n,Xt()),a;if(i===6)xr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!Y0(d)&&(i=ml(n,u),i===2&&(m=_t(n),m!==0&&(u=m,i=Oc(n,m))),i===1))throw a=ka,Yr(n,0),xr(n,u),zn(n,Xt()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:$r(n,kn,Gi);break;case 3:if(xr(n,u),(u&130023424)===u&&(i=Ic+500-Xt(),10<i)){if(wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gu($r.bind(null,n,kn,Gi),i);break}$r(n,kn,Gi);break;case 4:if(xr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Be(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=Xt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*q0(u/1960))-u,10<u){n.timeoutHandle=Gu($r.bind(null,n,kn,Gi),u);break}$r(n,kn,Gi);break;case 5:$r(n,kn,Gi);break;default:throw Error(t(329))}}}return zn(n,Xt()),n.callbackNode===a?em.bind(null,n):null}function Oc(n,i){var a=za;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=ml(n,i),n!==2&&(i=kn,kn=a,i!==null&&Bc(i)),n}function Bc(n){kn===null?kn=n:kn.push.apply(kn,n)}function Y0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!ci(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~Dc,i&=~ul,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Be(i),u=1<<a;n[a]=-1,i&=~u}}function tm(n){if((Et&6)!==0)throw Error(t(327));Fs();var i=wt(n,0);if((i&1)===0)return zn(n,Xt()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var u=_t(n);u!==0&&(i=u,a=Oc(n,u))}if(a===1)throw a=ka,Yr(n,0),xr(n,i),zn(n,Xt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$r(n,kn,Gi),zn(n,Xt()),null}function kc(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Us=Xt()+500,Ho&&dr())}}function qr(n){_r!==null&&_r.tag===0&&(Et&6)===0&&Fs();var i=Et;Et|=1;var a=ni.transition,u=ot;try{if(ni.transition=null,ot=1,n)return n()}finally{ot=u,ni.transition=a,Et=i,(Et&6)===0&&dr()}}function zc(){Yn=Is.current,Vt(Is)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,T0(a)),Jt!==null)for(a=Jt.return;a!==null;){var u=a;switch($u(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&zo();break;case 3:Ls(),Vt(Fn),Vt(xn),lc();break;case 5:ac(u);break;case 4:Ls();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:tc(u.type._context);break;case 22:case 23:zc()}a=a.return}if(fn=n,Jt=n=Sr(n.current,null),mn=Yn=i,sn=0,ka=null,Dc=ul=jr=0,kn=za=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}a.pending=u}Gr=null}return n}function nm(n,i){do{var a=Jt;try{if(ec(),Qo.current=nl,Jo){for(var u=qt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Jo=!1}if(Xr=0,cn=rn=qt=null,Da=!1,Ia=0,Nc.current=null,a===null||a.return===null){sn=1,ka=i,Jt=null;break}e:{var m=n,E=a.return,I=a,B=i;if(i=mn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,_e=I,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Cp(E);if(Oe!==null){Oe.flags&=-257,Rp(Oe,E,I,m,i),Oe.mode&1&&Ap(m,re,i),i=Oe,B=re;var We=i.updateQueue;if(We===null){var qe=new Set;qe.add(B),i.updateQueue=qe}else We.add(B);break e}else{if((i&1)===0){Ap(m,re,i),Vc();break e}B=Error(t(426))}}else if(Wt&&I.mode&1){var Zt=Cp(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Rp(Zt,E,I,m,i),Qu(Ns(B,I));break e}}m=B=Ns(B,I),sn!==4&&(sn=2),za===null?za=[m]:za.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=Tp(m,B,i);Zh(m,$);break e;case 1:I=B;var H=m.type,J=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(gr===null||!gr.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=wp(m,I,i);Zh(m,Ee);break e}}m=m.return}while(m!==null)}sm(a)}catch(Ke){i=Ke,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function im(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Vc(){(sn===0||sn===3||sn===2)&&(sn=4),fn===null||(jr&268435455)===0&&(ul&268435455)===0||xr(fn,mn)}function ml(n,i){var a=Et;Et|=2;var u=im();(fn!==n||mn!==i)&&(Gi=null,Yr(n,i));do try{$0();break}catch(d){nm(n,d)}while(!0);if(ec(),Et=a,ll.current=u,Jt!==null)throw Error(t(261));return fn=null,mn=0,sn}function $0(){for(;Jt!==null;)rm(Jt)}function K0(){for(;Jt!==null&&!vu();)rm(Jt)}function rm(n){var i=lm(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?sm(n):Jt=i,Nc.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=H0(a,i,Yn),a!==null){Jt=a;return}}else{if(a=G0(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);sn===0&&(sn=5)}function $r(n,i,a){var u=ot,d=ni.transition;try{ni.transition=null,ot=1,Z0(n,i,a,u)}finally{ni.transition=d,ot=u}return null}function Z0(n,i,a,u){do Fs();while(_r!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Br(n,m),n===fn&&(Jt=fn=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fl||(fl=!0,um(ne,function(){return Fs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ni.transition,ni.transition=null;var E=ot;ot=1;var I=Et;Et|=4,Nc.current=null,X0(n,a),$p(a,n),_0(Vu),Ao=!!zu,Vu=zu=null,n.current=a,j0(a),xu(),Et=I,ot=E,ni.transition=m}else n.current=a;if(fl&&(fl=!1,_r=n,dl=d),m=n.pendingLanes,m===0&&(gr=null),He(a.stateNode),zn(n,Xt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(cl)throw cl=!1,n=Uc,Uc=null,n;return(dl&1)!==0&&n.tag!==0&&Fs(),m=n.pendingLanes,(m&1)!==0?n===Fc?Va++:(Va=0,Fc=n):Va=0,dr(),null}function Fs(){if(_r!==null){var n=Rn(dl),i=ni.transition,a=ot;try{if(ni.transition=null,ot=16>n?16:n,_r===null)var u=!1;else{if(n=_r,_r=null,dl=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Ve=n.current;Ve!==null;){var m=Ve,E=m.child;if((Ve.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var re=I[B];for(Ve=re;Ve!==null;){var _e=Ve;switch(_e.tag){case 0:case 11:case 15:Ba(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,Ve=xe;else for(;Ve!==null;){_e=Ve;var ge=_e.sibling,Oe=_e.return;if(Wp(_e),_e===re){Ve=null;break}if(ge!==null){ge.return=Oe,Ve=ge;break}Ve=Oe}}}var We=m.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var Zt=qe.sibling;qe.sibling=null,qe=Zt}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ve=E;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ba(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Ve=$;break e}Ve=m.return}}var H=n.current;for(Ve=H;Ve!==null;){E=Ve;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Ve=J;else e:for(E=H;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:ol(9,I)}}catch(Ke){Yt(I,I.return,Ke)}if(I===E){Ve=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ve=Ee;break e}Ve=I.return}}if(Et=d,dr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Fe,n)}catch{}u=!0}return u}finally{ot=a,ni.transition=i}}return!1}function am(n,i,a){i=Ns(a,i),i=Tp(n,i,1),n=pr(n,i,1),i=Pn(),n!==null&&(nn(n,1,i),zn(n,i))}function Yt(n,i,a){if(n.tag===3)am(n,n,a);else for(;i!==null;){if(i.tag===3){am(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(gr===null||!gr.has(u))){n=Ns(a,n),n=wp(i,n,1),i=pr(i,n,1),n=Pn(),i!==null&&(nn(i,1,n),zn(i,n));break}}i=i.return}}function Q0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Pn(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(mn&a)===a&&(sn===4||sn===3&&(mn&130023424)===mn&&500>Xt()-Ic?Yr(n,0):Dc|=a),zn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var a=Pn();n=zi(n,i),n!==null&&(nn(n,i,a),zn(n,a))}function J0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function ev(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),om(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,V0(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Wt&&(i.flags&1048576)!==0&&Vh(i,Wo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;sl(n,i),n=i.pendingProps;var d=Ts(i,xn.current);Ps(i,a),d=fc(null,i,u,n,d,a);var m=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(u)?(m=!0,Vo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=il,i.stateNode=d,d._reactInternals=i,vc(i,u,n,a),i=Mc(null,i,u,!0,m,a)):(i.tag=0,Wt&&m&&Yu(i),bn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=nv(u),n=di(u,n),d){case 0:i=yc(null,i,u,n,a);break e;case 1:i=Ip(null,i,u,n,a);break e;case 11:i=bp(null,i,u,n,a);break e;case 14:i=Pp(null,i,u,di(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:di(u,d),yc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:di(u,d),Ip(n,i,u,d,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Kh(n,i),Ko(i,u,null,a);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ns(Error(t(423)),i),i=Fp(n,i,u,a,d);break e}else if(u!==d){d=Ns(Error(t(424)),i),i=Fp(n,i,u,a,d);break e}else for(qn=ur(i.stateNode.containerInfo.firstChild),jn=i,Wt=!0,fi=null,a=Yh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Cs(),u===d){i=Hi(n,i,a);break e}bn(n,i,u,a)}i=i.child}return i;case 5:return Jh(i),n===null&&Zu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Hu(u,d)?E=null:m!==null&&Hu(u,m)&&(i.flags|=32),Dp(n,i),bn(n,i,E,a),i.child;case 6:return n===null&&Zu(i),null;case 13:return Op(n,i,a);case 4:return sc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Rs(i,null,u,a):bn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:di(u,d),bp(n,i,u,d,a);case 7:return bn(n,i,i.pendingProps,a),i.child;case 8:return bn(n,i,i.pendingProps.children,a),i.child;case 12:return bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,kt(qo,u._currentValue),u._currentValue=E,m!==null)if(ci(m.value,E)){if(m.children===d.children&&!Fn.current){i=Hi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(m.tag===1){B=Vi(-1,a&-a),B.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),re.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),nc(m.return,a,i),I.lanes|=a;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),nc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}bn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ps(i,a),d=ei(d),u=u(d),i.flags|=1,bn(n,i,u,a),i.child;case 14:return u=i.type,d=di(u,i.pendingProps),d=di(u.type,d),Pp(n,i,u,d,a);case 15:return Lp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:di(u,d),sl(n,i),i.tag=1,On(u)?(n=!0,Vo(i)):n=!1,Ps(i,a),Mp(i,u,d),vc(i,u,d,a),Mc(null,i,u,!0,n,a);case 19:return kp(n,i,a);case 22:return Np(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return Mo(n,i)}function tv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,a,u){return new tv(n,i,a,u)}function Hc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nv(n){if(typeof n=="function")return Hc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===ue)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=ii(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,u,d,m){var E=2;if(u=n,typeof n=="function")Hc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Kr(a.children,d,m,i);case W:E=8,d|=8;break;case A:return n=ii(12,a,i,d|2),n.elementType=A,n.lanes=m,n;case ee:return n=ii(13,a,i,d),n.elementType=ee,n.lanes=m,n;case ce:return n=ii(19,a,i,d),n.elementType=ce,n.lanes=m,n;case Y:return _l(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case te:E=11;break e;case ue:E=14;break e;case oe:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ii(E,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Kr(n,i,a,u){return n=ii(7,n,u,i),n.lanes=a,n}function _l(n,i,a,u){return n=ii(22,n,u,i),n.elementType=Y,n.lanes=a,n.stateNode={isHidden:!1},n}function Gc(n,i,a){return n=ii(6,n,null,i),n.lanes=a,n}function Wc(n,i,a){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function iv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yi(0),this.expirationTimes=yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xc(n,i,a,u,d,m,E,I,B){return n=new iv(n,i,a,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ii(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(m),n}function rv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return fr;n=n._reactInternals;e:{if(Zn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(On(a))return Bh(n,a,i)}return i}function fm(n,i,a,u,d,m,E,I,B){return n=Xc(a,u,!0,n,d,m,E,I,B),n.context=cm(null),a=n.current,u=Pn(),d=vr(a),m=Vi(u,d),m.callback=i??null,pr(a,m,d),n.current.lanes=d,nn(n,d,u),zn(n,u),n}function vl(n,i,a,u){var d=i.current,m=Pn(),E=vr(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=Vi(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=pr(d,i,E),n!==null&&(mi(n,d,E,m),$o(n,d,E)),E}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function jc(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}function sv(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qc(n){this._internalRoot=n}Sl.prototype.render=qc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},Sl.prototype.unmount=qc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){vl(null,n,null,null)}),i[Fi]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Mi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,n),a===0&&Jd(n)}};function Yc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function av(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var re=xl(E);m.call(re)}}var E=fm(i,u,n,0,null,!1,!1,"",pm);return n._reactRootContainer=E,n[Fi]=E.current,wa(n.nodeType===8?n.parentNode:n),qr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var re=xl(B);I.call(re)}}var B=Xc(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=B,n[Fi]=B.current,wa(n.nodeType===8?n.parentNode:n),qr(function(){vl(i,B,a,u)}),B}function Ml(n,i,a,u,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var I=d;d=function(){var B=xl(E);I.call(B)}}vl(i,E,n,d)}else E=av(a,i,n,d,u);return xl(E)}ln=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ft(i.pendingLanes);a!==0&&(Dt(i,a|1),zn(i,Xt()),(Et&6)===0&&(Us=Xt()+500,dr()))}break;case 13:qr(function(){var u=zi(n,1);if(u!==null){var d=Pn();mi(u,n,1,d)}}),jc(n,1)}},un=function(n){if(n.tag===13){var i=zi(n,134217728);if(i!==null){var a=Pn();mi(i,n,134217728,a)}jc(n,134217728)}},ps=function(n){if(n.tag===13){var i=vr(n),a=zi(n,i);if(a!==null){var u=Pn();mi(a,n,i,u)}jc(n,i)}},Mi=function(){return ot},Zd=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},Ne=function(n,i,a){switch(i){case"input":if(Ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=ko(u);if(!d)throw Error(t(90));Kt(u),Ht(u,d)}}}break;case"textarea":M(n,a);break;case"select":i=a.value,i!=null&&St(n,!!a.multiple,i,!1)}},rt=kc,It=qr;var ov={usingClientEntryPoint:!1,Events:[Ra,Ms,ko,pe,Ce,kc]},Ha={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lv={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Fe=El.inject(lv),we=El}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov,Vn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yc(i))throw Error(t(200));return rv(n,i,null,a)},Vn.createRoot=function(n,i){if(!Yc(n))throw Error(t(299));var a=!1,u="",d=hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xc(n,1,!1,null,null,a,!1,u,d),n[Fi]=i.current,wa(n.nodeType===8?n.parentNode:n),new qc(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return qr(n)},Vn.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Ml(null,n,i,!0,a)},Vn.hydrateRoot=function(n,i,a){if(!Yc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",E=hm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=fm(i,null,n,1,a??null,d,!1,m,E),n[Fi]=i.current,wa(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Sl(i)},Vn.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Ml(null,n,i,!1,a)},Vn.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1},Vn.unstable_batchedUpdates=kc,Vn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,a,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Mm;function Bg(){if(Mm)return Zc.exports;Mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zc.exports=_v(),Zc.exports}var Em;function vv(){if(Em)return Tl;Em=1;var s=Bg();return Tl.createRoot=s.createRoot,Tl.hydrateRoot=s.hydrateRoot,Tl}var xv=vv();const Sv=Fg(xv);Bg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},io.apply(this,arguments)}var Pr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Pr||(Pr={}));const Tm="popstate";function yv(s){s===void 0&&(s={});function e(o,l){let{pathname:c="/",search:f="",hash:h=""}=fs(o.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Ff("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let c=o.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let h=o.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:ru(l))}function r(o,l){fu(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Ev(e,t,r,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function fu(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function wm(s,e){return{usr:s.state,key:s.key,idx:e}}function Ff(s,e,t,r){return t===void 0&&(t=null),io({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?fs(e):e,{state:t,key:e&&e.key||r||Mv()})}function ru(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fs(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function Ev(s,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,c=o.history,f=Pr.Pop,h=null,p=_();p==null&&(p=0,c.replaceState(io({},c.state,{idx:p}),""));function _(){return(c.state||{idx:null}).idx}function g(){f=Pr.Pop;let x=_(),v=x==null?null:x-p;p=x,h&&h({action:f,location:w.location,delta:v})}function S(x,v){f=Pr.Push;let b=Ff(w.location,x,v);t&&t(b,x),p=_()+1;let P=wm(b,p),L=w.createHref(b);try{c.pushState(P,"",L)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;o.location.assign(L)}l&&h&&h({action:f,location:w.location,delta:1})}function y(x,v){f=Pr.Replace;let b=Ff(w.location,x,v);t&&t(b,x),p=_();let P=wm(b,p),L=w.createHref(b);c.replaceState(P,"",L),l&&h&&h({action:f,location:w.location,delta:0})}function T(x){let v=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof x=="string"?x:ru(x);return b=b.replace(/ $/,"%20"),tn(v,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,v)}let w={get action(){return f},get location(){return s(o,c)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Tm,g),h=x,()=>{o.removeEventListener(Tm,g),h=null}},createHref(x){return e(o,x)},createURL:T,encodeLocation(x){let v=T(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:y,go(x){return c.go(x)}};return w}var Am;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Am||(Am={}));function Tv(s,e,t){return t===void 0&&(t="/"),wv(s,e,t)}function wv(s,e,t,r){let o=typeof e=="string"?fs(e):e,l=Fd(o.pathname||"/",t);if(l==null)return null;let c=kg(s);Av(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=Bv(l);f=Uv(c[h],p)}return f}function kg(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(tn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=Nr([r,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(tn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),kg(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Dv(p,l.index),routesMeta:_})};return s.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let h of zg(l.path))o(l,c,h)}),e}function zg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let c=zg(r.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function Av(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Iv(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Cv=/^:[\w-]+$/,Rv=3,bv=2,Pv=1,Lv=10,Nv=-2,Cm=s=>s==="*";function Dv(s,e){let t=s.split("/"),r=t.length;return t.some(Cm)&&(r+=Nv),e&&(r+=bv),t.filter(o=>!Cm(o)).reduce((o,l)=>o+(Cv.test(l)?Rv:l===""?Pv:Lv),r)}function Iv(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function Uv(s,e,t){let{routesMeta:r}=s,o={},l="/",c=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,_=l==="/"?e:e.slice(l.length)||"/",g=Fv({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),S=h.route;if(!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Nr([l,g.pathname]),pathnameBase:Gv(Nr([l,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(l=Nr([l,g.pathnameBase]))}return c}function Fv(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=Ov(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,_,g)=>{let{paramName:S,isOptional:y}=_;if(S==="*"){let w=f[g]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[g];return y&&!T?p[S]=void 0:p[S]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:s}}function Ov(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),fu(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(r.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function Bv(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fu(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Fd(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}const kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=s=>kv.test(s);function Vv(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof s=="string"?fs(s):s,l;if(t)if(zv(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),fu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Rm(t.substring(1),"/"):l=Rm(t,e)}else l=e;return{pathname:l,search:Wv(r),hash:Xv(o)}}function Rm(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ef(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hv(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Vg(s,e){let t=Hv(s);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Hg(s,e,t,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=fs(s):(o=io({},s),tn(!o.pathname||!o.pathname.includes("?"),ef("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),ef("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),ef("#","search","hash",o)));let l=s===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let g=e.length-1;if(!r&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),g-=1;o.pathname=S.join("/")}f=g>=0?e[g]:"/"}let h=Vv(o,f),p=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}const Nr=s=>s.join("/").replace(/\/\/+/g,"/"),Gv=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Wv=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Xv=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function jv(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Gg=["post","put","patch","delete"];new Set(Gg);const qv=["get",...Gg];new Set(qv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},ro.apply(this,arguments)}const Od=Re.createContext(null),Yv=Re.createContext(null),ds=Re.createContext(null),du=Re.createContext(null),hs=Re.createContext({outlet:null,matches:[],isDataRoute:!1}),Wg=Re.createContext(null);function $v(s,e){let{relative:t}=e===void 0?{}:e;uo()||tn(!1);let{basename:r,navigator:o}=Re.useContext(ds),{hash:l,pathname:c,search:f}=qg(s,{relative:t}),h=c;return r!=="/"&&(h=c==="/"?r:Nr([r,c])),o.createHref({pathname:h,search:f,hash:l})}function uo(){return Re.useContext(du)!=null}function co(){return uo()||tn(!1),Re.useContext(du).location}function Xg(s){Re.useContext(ds).static||Re.useLayoutEffect(s)}function jg(){let{isDataRoute:s}=Re.useContext(hs);return s?lx():Kv()}function Kv(){uo()||tn(!1);let s=Re.useContext(Od),{basename:e,future:t,navigator:r}=Re.useContext(ds),{matches:o}=Re.useContext(hs),{pathname:l}=co(),c=JSON.stringify(Vg(o,t.v7_relativeSplatPath)),f=Re.useRef(!1);return Xg(()=>{f.current=!0}),Re.useCallback(function(p,_){if(_===void 0&&(_={}),!f.current)return;if(typeof p=="number"){r.go(p);return}let g=Hg(p,JSON.parse(c),l,_.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Nr([e,g.pathname])),(_.replace?r.replace:r.push)(g,_.state,_)},[e,r,c,l,s])}function qg(s,e){let{relative:t}=e===void 0?{}:e,{future:r}=Re.useContext(ds),{matches:o}=Re.useContext(hs),{pathname:l}=co(),c=JSON.stringify(Vg(o,r.v7_relativeSplatPath));return Re.useMemo(()=>Hg(s,JSON.parse(c),l,t==="path"),[s,c,l,t])}function Zv(s,e){return Qv(s,e)}function Qv(s,e,t,r){uo()||tn(!1);let{navigator:o}=Re.useContext(ds),{matches:l}=Re.useContext(hs),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=co(),_;if(e){var g;let x=typeof e=="string"?fs(e):e;h==="/"||(g=x.pathname)!=null&&g.startsWith(h)||tn(!1),_=x}else _=p;let S=_.pathname||"/",y=S;if(h!=="/"){let x=h.replace(/^\//,"").split("/");y="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=Tv(s,{pathname:y}),w=ix(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Nr([h,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?h:Nr([h,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,r);return e&&w?Re.createElement(du.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Pr.Pop}},w):w}function Jv(){let s=ox(),e=jv(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Re.createElement(Re.Fragment,null,Re.createElement("h2",null,"Unexpected Application Error!"),Re.createElement("h3",{style:{fontStyle:"italic"}},e),t?Re.createElement("pre",{style:o},t):null,null)}const ex=Re.createElement(Jv,null);class tx extends Re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Re.createElement(hs.Provider,{value:this.props.routeContext},Re.createElement(Wg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nx(s){let{routeContext:e,match:t,children:r}=s,o=Re.useContext(Od);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Re.createElement(hs.Provider,{value:e},r)}function ix(s,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let c=s,f=(o=t)==null?void 0:o.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);_>=0||tn(!1),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=_),g.route.id){let{loaderData:S,errors:y}=t,T=g.route.loader&&S[g.route.id]===void 0&&(!y||y[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((_,g,S)=>{let y,T=!1,w=null,x=null;t&&(y=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||ex,h&&(p<0&&S===0?(ux("route-fallback"),T=!0,x=null):p===S&&(T=!0,x=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,S+1)),b=()=>{let P;return y?P=w:T?P=x:g.route.Component?P=Re.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=_,Re.createElement(nx,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:t!=null},children:P})};return t&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?Re.createElement(tx,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}var Yg=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Yg||{}),$g=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})($g||{});function rx(s){let e=Re.useContext(Od);return e||tn(!1),e}function sx(s){let e=Re.useContext(Yv);return e||tn(!1),e}function ax(s){let e=Re.useContext(hs);return e||tn(!1),e}function Kg(s){let e=ax(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function ox(){var s;let e=Re.useContext(Wg),t=sx(),r=Kg();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function lx(){let{router:s}=rx(Yg.UseNavigateStable),e=Kg($g.UseNavigateStable),t=Re.useRef(!1);return Xg(()=>{t.current=!0}),Re.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,ro({fromRouteId:e},l)))},[s,e])}const bm={};function ux(s,e,t){bm[s]||(bm[s]=!0)}function cx(s,e){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Of(s){tn(!1)}function fx(s){let{basename:e="/",children:t=null,location:r,navigationType:o=Pr.Pop,navigator:l,static:c=!1,future:f}=s;uo()&&tn(!1);let h=e.replace(/^\/*/,"/"),p=Re.useMemo(()=>({basename:h,navigator:l,static:c,future:ro({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof r=="string"&&(r=fs(r));let{pathname:_="/",search:g="",hash:S="",state:y=null,key:T="default"}=r,w=Re.useMemo(()=>{let x=Fd(_,h);return x==null?null:{location:{pathname:x,search:g,hash:S,state:y,key:T},navigationType:o}},[h,_,g,S,y,T,o]);return w==null?null:Re.createElement(ds.Provider,{value:p},Re.createElement(du.Provider,{children:t,value:w}))}function dx(s){let{children:e,location:t}=s;return Zv(Bf(e),t)}new Promise(()=>{});function Bf(s,e){e===void 0&&(e=[]);let t=[];return Re.Children.forEach(s,(r,o)=>{if(!Re.isValidElement(r))return;let l=[...e,o];if(r.type===Re.Fragment){t.push.apply(t,Bf(r.props.children,l));return}r.type!==Of&&tn(!1),!r.props.index||!r.props.children||tn(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Bf(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kf(){return kf=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},kf.apply(this,arguments)}function hx(s,e){if(s==null)return{};var t={},r=Object.keys(s),o,l;for(l=0;l<r.length;l++)o=r[l],!(e.indexOf(o)>=0)&&(t[o]=s[o]);return t}function px(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function mx(s,e){return s.button===0&&(!e||e==="_self")&&!px(s)}const gx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_x="6";try{window.__reactRouterVersion=_x}catch{}const vx="startTransition",Pm=pv[vx];function xx(s){let{basename:e,children:t,future:r,window:o}=s,l=Re.useRef();l.current==null&&(l.current=yv({window:o,v5Compat:!0}));let c=l.current,[f,h]=Re.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},_=Re.useCallback(g=>{p&&Pm?Pm(()=>h(g)):h(g)},[h,p]);return Re.useLayoutEffect(()=>c.listen(_),[c,_]),Re.useEffect(()=>cx(r),[r]),Re.createElement(fx,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:r})}const Sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hu=Re.forwardRef(function(e,t){let{onClick:r,relative:o,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:_,viewTransition:g}=e,S=hx(e,gx),{basename:y}=Re.useContext(ds),T,w=!1;if(typeof p=="string"&&yx.test(p)&&(T=p,Sx))try{let P=new URL(window.location.href),L=p.startsWith("//")?new URL(P.protocol+p):new URL(p),D=Fd(L.pathname,y);L.origin===P.origin&&D!=null?p=D+L.search+L.hash:w=!0}catch{}let x=$v(p,{relative:o}),v=Mx(p,{replace:c,state:f,target:h,preventScrollReset:_,relative:o,viewTransition:g});function b(P){r&&r(P),P.defaultPrevented||v(P)}return Re.createElement("a",kf({},S,{href:T||x,onClick:w||l?r:b,ref:t,target:h}))});var Lm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Lm||(Lm={}));var Nm;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Nm||(Nm={}));function Mx(s,e){let{target:t,replace:r,state:o,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,h=jg(),p=co(),_=qg(s,{relative:c});return Re.useCallback(g=>{if(mx(g,t)){g.preventDefault();let S=r!==void 0?r:ru(p)===ru(_);h(s,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,_,r,o,t,s,l,c,f])}const Ex="_navbar_1a2w0_1",Tx="_scrolled_1a2w0_15",wx="_container_1a2w0_19",Ax="_navLeft_1a2w0_28",Cx="_logo_1a2w0_34",Rx="_timeDisplay_1a2w0_55",bx="_links_1a2w0_62",Px="_link_1a2w0_62",Lx="_registerBtn_1a2w0_105",Nx="_hamburger_1a2w0_126",Dx="_active_1a2w0_181",Ix="_barOpen_1a2w0_189",gn={navbar:Ex,scrolled:Tx,container:wx,navLeft:Ax,logo:Cx,timeDisplay:Rx,links:bx,link:Px,registerBtn:Lx,hamburger:Nx,active:Dx,barOpen:Ix},Ux=()=>{const[s,e]=Re.useState(!1),[t,r]=Re.useState(!1),[o,l]=Re.useState(""),c=co();Re.useEffect(()=>{const h=()=>{const g=new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});l(g)};h();const p=setInterval(h,1e3);return()=>clearInterval(p)},[]),Re.useEffect(()=>{const h=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const f=h=>{if(c.pathname!=="/")window.location.href=`/#${h}`;else{const p=document.getElementById(h);p&&p.scrollIntoView({behavior:"smooth"})}e(!1)};return j.jsx("nav",{className:`${gn.navbar} ${t?gn.scrolled:""}`,children:j.jsxs("div",{className:gn.container,children:[j.jsxs("div",{className:gn.navLeft,children:[j.jsxs("div",{className:gn.logo,onClick:()=>f("hero"),children:["CORE_",j.jsx("span",{children:"ROOT"})]}),j.jsxs("div",{className:gn.timeDisplay,children:["[",o,"]"]})]}),j.jsxs("div",{className:`${gn.links} ${s?gn.active:""}`,children:[j.jsx("a",{onClick:()=>f("hero"),className:gn.link,children:"/home"}),j.jsx("a",{onClick:()=>f("about"),className:gn.link,children:"/man_pages"}),j.jsx("a",{onClick:()=>f("committee"),className:gn.link,children:"/sudo_users"}),j.jsx("a",{onClick:()=>f("lastyear"),className:gn.link,children:"/logs"}),j.jsx(hu,{to:"/register",className:gn.registerBtn,children:"./EXEC_REG.sh"})]}),j.jsxs("div",{className:gn.hamburger,onClick:()=>e(!s),children:[j.jsx("div",{className:s?gn.barOpen:""}),j.jsx("div",{className:s?gn.barOpen:""}),j.jsx("div",{className:s?gn.barOpen:""})]})]})})},Fx="_section_1a5th_1",Ox="_visible_1a5th_11",Dm={section:Fx,visible:Ox},fo=({children:s,id:e,className:t})=>{const[r,o]=Re.useState(!1),l=Re.useRef();return Re.useEffect(()=>{const c=new IntersectionObserver(h=>{h.forEach(p=>{p.isIntersecting&&o(!0)})},{threshold:.1}),{current:f}=l;return f&&c.observe(f),()=>{f&&c.unobserve(f)}},[]),j.jsx("section",{id:e,ref:l,className:`${Dm.section} ${r?Dm.visible:""} ${t||""}`,children:s})},Bx="_heroSection_o2t3v_1",kx="_backgroundGlow_o2t3v_74",zx="_content_o2t3v_101",Vx="_title_o2t3v_107",Hx="_tagline_o2t3v_122",Gx="_description_o2t3v_134",Wx="_ctaButton_o2t3v_158",Zr={heroSection:Bx,backgroundGlow:kx,content:zx,title:Vx,tagline:Hx,description:Gx,ctaButton:Wx},Xx=()=>j.jsxs(fo,{id:"hero",className:Zr.heroSection,children:[j.jsx("div",{className:Zr.backgroundGlow}),j.jsxs("div",{className:Zr.content,children:[j.jsxs("h1",{className:`${Zr.title} glitch-text`,"data-text":"QUICK SNATCH 2.0",children:["QUICK SNATCH ",j.jsx("span",{children:"2.0"})]}),j.jsx("p",{className:Zr.tagline,children:"< The CLI Treasure Hunt />"}),j.jsx("p",{className:Zr.description,children:"A high-stakes digital scavenger hunt. Navigate the terminal, decode cryptic logs, and track down the 0xROOT bounty before time runs out."}),j.jsx(hu,{to:"/register",className:Zr.ctaButton,children:"START_THE_HUNT.exe"})]})]}),jx="_aboutSection_11apg_1",qx="_heading_11apg_6",Yx="_grid_11apg_14",$x="_card_11apg_20",Kx="_cardHeader_11apg_35",Zx="_icon_11apg_39",Qx="_cardTitle_11apg_50",Jx="_cardDesc_11apg_56",Mr={aboutSection:jx,heading:qx,grid:Yx,card:$x,cardHeader:Kx,icon:Zx,cardTitle:Qx,cardDesc:Jx},eS=()=>{const s=[{title:"The Hunt",desc:"Navigate through complex puzzles and digital mazes."},{title:"CLI Challenges",desc:"Prove your terminal mastery in timed events."},{title:"Leaderboard",desc:"Climb the ranks and claim your supremacy."},{title:"The Snatch",desc:"First to solve the final clue wins the grand prize."}];return j.jsxs(fo,{id:"about",className:Mr.aboutSection,children:[j.jsx("h2",{className:Mr.heading,children:"System Overview"}),j.jsx("div",{className:Mr.grid,children:s.map((e,t)=>j.jsxs("div",{className:Mr.card,children:[j.jsx("div",{className:Mr.cardHeader,children:j.jsxs("span",{className:Mr.icon,children:["0",t+1]})}),j.jsx("h3",{className:Mr.cardTitle,children:e.title}),j.jsx("p",{className:Mr.cardDesc,children:e.desc})]},t))})]})},tS="_container_ak1ve_1",nS="_content_ak1ve_7",iS="_heading_ak1ve_37",rS="_text_ak1ve_43",sS="_linkButton_ak1ve_49",Wa={container:tS,content:nS,heading:iS,text:rS,linkButton:sS},aS=()=>j.jsx(fo,{id:"lastyear",className:Wa.container,children:j.jsxs("div",{className:Wa.content,children:[j.jsx("h2",{className:Wa.heading,children:"Legacy_Archive"}),j.jsx("p",{className:Wa.text,children:"Quick Snatch 1.0 set the benchmark. Witness where it all began."}),j.jsx("a",{href:"https://quicksnatch.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:Wa.linkButton,children:"ACCESS_ARCHIVE_V1"})]})}),oS="_committeeSection_1xtz2_1",lS="_heading_1xtz2_5",uS="_grid_1xtz2_12",cS="_card_1xtz2_18",fS="_avatarPlaceholder_1xtz2_31",dS="_name_1xtz2_46",hS="_role_1xtz2_52",Qr={committeeSection:oS,heading:lS,grid:uS,card:cS,avatarPlaceholder:fS,name:dS,role:hS},pS=()=>{const s=[{name:"Alex Vern",role:"Event Lead"},{name:"Sarah Jin",role:"Tech Lead"},{name:"Mike Ross",role:"Design Head"},{name:"Emily Chen",role:"Operations"}];return j.jsxs(fo,{id:"committee",className:Qr.committeeSection,children:[j.jsx("h2",{className:Qr.heading,children:"Organizing_Node"}),j.jsx("div",{className:Qr.grid,children:s.map((e,t)=>j.jsxs("div",{className:Qr.card,children:[j.jsx("div",{className:Qr.avatarPlaceholder,children:e.name.charAt(0)}),j.jsx("h3",{className:Qr.name,children:e.name}),j.jsx("p",{className:Qr.role,children:e.role})]},t))})]})},mS="_container_sbhwb_1",gS="_box_sbhwb_7",_S="_title_sbhwb_38",vS="_subtitle_sbhwb_44",xS="_button_sbhwb_50",Xa={container:mS,box:gS,title:_S,subtitle:vS,button:xS},SS=()=>j.jsx(fo,{id:"register",className:Xa.container,children:j.jsxs("div",{className:Xa.box,children:[j.jsx("h2",{className:Xa.title,children:"Are you ready to breach?"}),j.jsx("p",{className:Xa.subtitle,children:"Spots are limited. Secure your terminal access now."}),j.jsx(hu,{to:"/register",className:Xa.button,children:"ENTER_COMPETITION"})]})}),yS="_footer_h2wyu_1",MS="_systemBar_h2wyu_10",ES="_online_h2wyu_23",TS="_grid_h2wyu_41",wS="_col_h2wyu_50",AS="_termHeader_h2wyu_56",CS="_logo_h2wyu_63",RS="_version_h2wyu_71",bS="_desc_h2wyu_76",PS="_cliInput_h2wyu_83",LS="_prompt_h2wyu_93",NS="_linkList_h2wyu_97",DS="_highlight_h2wyu_116",IS="_terminalBlock_h2wyu_121",US="_warning_h2wyu_133",FS="_footerBottom_h2wyu_151",OS="_blink_h2wyu_162",BS="_processing_h2wyu_166",Bt={footer:yS,systemBar:MS,online:ES,grid:TS,col:wS,termHeader:AS,logo:CS,version:RS,desc:bS,cliInput:PS,prompt:LS,linkList:NS,highlight:DS,terminalBlock:IS,warning:US,footerBottom:FS,blink:OS,processing:BS},kS=()=>j.jsxs("footer",{className:Bt.footer,children:[j.jsxs("div",{className:Bt.systemBar,children:[j.jsxs("span",{children:["STATUS: ",j.jsx("span",{className:Bt.online,children:"ONLINE"})]}),j.jsx("span",{children:"UPTIME: 48:22:15"}),j.jsx("span",{children:"ENCRYPTION: AES-256"}),j.jsx("span",{children:"DATA_STREAM: SECURE"})]}),j.jsxs("div",{className:Bt.grid,children:[j.jsxs("div",{className:Bt.col,children:[j.jsx("h4",{className:Bt.termHeader,children:" // IDENTITY_CORE"}),j.jsxs("div",{className:Bt.logo,children:["QUICK_SNATCH_",j.jsx("span",{className:Bt.version,children:"v2.0"})]}),j.jsx("p",{className:Bt.desc,children:"A competitive treasure hunting protocol initialized by Newton School of Technology. Decode. Breach. Win."}),j.jsxs("div",{className:Bt.cliInput,children:[j.jsx("span",{className:Bt.prompt,children:"user@root:~$"})," _"]})]}),j.jsxs("div",{className:Bt.col,children:[j.jsx("h4",{className:Bt.termHeader,children:" // SITE_MAP"}),j.jsxs("ul",{className:Bt.linkList,children:[j.jsx("li",{children:j.jsx("a",{href:"#hero",children:"> cd /home"})}),j.jsx("li",{children:j.jsx("a",{href:"#about",children:"> cat info.txt"})}),j.jsx("li",{children:j.jsx("a",{href:"#committee",children:"> ls /admins"})}),j.jsx("li",{children:j.jsx("a",{href:"#lastyear",children:"> history | grep legacy"})}),j.jsx("li",{children:j.jsx(hu,{to:"/register",className:Bt.highlight,children:"> ./execute_reg.sh"})})]})]}),j.jsxs("div",{className:Bt.col,children:[j.jsx("h4",{className:Bt.termHeader,children:" // COMM_CHANNELS"}),j.jsxs("ul",{className:Bt.linkList,children:[j.jsx("li",{children:j.jsx("a",{href:"#",children:"[0] INSTAGRAM_LINK_ESTABLISHED"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"[1] DISCORD_SERVER_NOT_FOUND"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"[2] LINKEDIN_HANDSHAKE"})}),j.jsx("li",{children:j.jsx("a",{href:"#",children:"[3] MAIL_PROTOCOL_SMTP"})})]})]}),j.jsxs("div",{className:Bt.col,children:[j.jsx("h4",{className:Bt.termHeader,children:" // GEO_LOCATION"}),j.jsxs("div",{className:Bt.terminalBlock,children:[j.jsx("p",{children:"TARGET: NST Pune"}),j.jsx("p",{children:"COORDS: 18.5204° N, 73.8567° E"}),j.jsx("p",{children:"SECTOR: 7-G"}),j.jsx("p",{className:Bt.warning,children:"WARNING: UNAUTHORIZED SECTORS AHEAD"})]})]})]}),j.jsxs("div",{className:Bt.footerBottom,children:[j.jsx("div",{className:Bt.bottomLeft,children:"© 2026 QUICK_SNATCH_SYSTEMS. ALL_RIGHTS_RESERVED."}),j.jsxs("div",{className:Bt.bottomRight,children:[j.jsx("span",{className:Bt.processing,children:"SYSTEM_PROCESSING..."}),j.jsx("span",{className:Bt.blink,children:"_"})," END_OF_FILE"]})]})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="182",zS=0,Im=1,VS=2,Zl=1,HS=2,to=3,Dr=0,Gn=1,$i=2,Zi=0,Zs=1,Um=2,Fm=3,Om=4,GS=5,as=100,WS=101,XS=102,jS=103,qS=104,YS=200,$S=201,KS=202,ZS=203,zf=204,Vf=205,QS=206,JS=207,ey=208,ty=209,ny=210,iy=211,ry=212,sy=213,ay=214,Hf=0,Gf=1,Wf=2,Js=3,Xf=4,jf=5,qf=6,Yf=7,Zg=0,oy=1,ly=2,Li=0,Qg=1,Jg=2,e_=3,t_=4,n_=5,i_=6,r_=7,s_=300,cs=301,ea=302,$f=303,Kf=304,pu=306,Zf=1e3,Ki=1001,Qf=1002,_n=1003,uy=1004,wl=1005,wn=1006,tf=1007,ls=1008,oi=1009,a_=1010,o_=1011,so=1012,kd=1013,Di=1014,bi=1015,Ji=1016,zd=1017,Vd=1018,ao=1020,l_=35902,u_=35899,c_=1021,f_=1022,Si=1023,er=1026,us=1027,d_=1028,Hd=1029,ta=1030,Gd=1031,Wd=1033,Ql=33776,Jl=33777,eu=33778,tu=33779,Jf=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,ad=37488,od=37489,ld=37490,ud=37491,cd=37808,fd=37809,dd=37810,hd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,xd=37817,Sd=37818,yd=37819,Md=37820,Ed=37821,Td=36492,wd=36494,Ad=36495,Cd=36283,Rd=36284,bd=36285,Pd=36286,cy=3200,fy=0,dy=1,br="",si="srgb",na="srgb-linear",su="linear",Ut="srgb",Os=7680,Bm=519,hy=512,py=513,my=514,Xd=515,gy=516,_y=517,jd=518,vy=519,km=35044,zm="300 es",Pi=2e3,au=2001;function h_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xy(){const s=ou("canvas");return s.style.display="block",s}const Vm={};function Hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function at(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function oo(...s){const e=s.join(" ");e in Vm||(Vm[e]=!0,at(...s))}function Sy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=Math.PI/180,Ld=180/Math.PI;function ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function yy(s,e){return(s%e+e)%e}function rf(s,e,t){return(1-t)*s+t*e}function ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class po{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3],S=l[c+0],y=l[c+1],T=l[c+2],w=l[c+3];if(f<=0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f>=1){e[t+0]=S,e[t+1]=y,e[t+2]=T,e[t+3]=w;return}if(g!==w||h!==S||p!==y||_!==T){let x=h*S+p*y+_*T+g*w;x<0&&(S=-S,y=-y,T=-T,w=-w,x=-x);let v=1-f;if(x<.9995){const b=Math.acos(x),P=Math.sin(b);v=Math.sin(v*b)/P,f=Math.sin(f*b)/P,h=h*v+S*f,p=p*v+y*f,_=_*v+T*f,g=g*v+w*f}else{h=h*v+S*f,p=p*v+y*f,_=_*v+T*f,g=g*v+w*f;const b=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=b,p*=b,_*=b,g*=b}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],_=r[o+3],g=l[c],S=l[c+1],y=l[c+2],T=l[c+3];return e[t]=f*T+_*g+h*y-p*S,e[t+1]=h*T+_*S+p*g-f*y,e[t+2]=p*T+_*y+f*S-h*g,e[t+3]=_*T-f*g-h*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(o/2),g=f(l/2),S=h(r/2),y=h(o/2),T=h(l/2);switch(c){case"XYZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"YXZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"ZXY":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"ZYX":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"YZX":this._x=S*_*g+p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g-S*y*T;break;case"XZY":this._x=S*_*g-p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g+S*y*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],_=t[6],g=t[10],S=r+f+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(c-o)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(_-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-p)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(c-o)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+c*f+o*p-l*h,this._y=o*_+c*h+l*f-r*p,this._z=l*_+c*p+r*h-o*f,this._w=c*_-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),_=2*(f*t-l*o),g=2*(l*r-c*t);return this.x=t+h*p+c*g-f*_,this.y=r+h*_+f*p-l*g,this.z=o+h*g+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sf=new Q,Gm=new po;class ct{constructor(e,t,r,o,l,c,f,h,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],_=r[4],g=r[7],S=r[2],y=r[5],T=r[8],w=o[0],x=o[3],v=o[6],b=o[1],P=o[4],L=o[7],D=o[2],U=o[5],O=o[8];return l[0]=c*w+f*b+h*D,l[3]=c*x+f*P+h*U,l[6]=c*v+f*L+h*O,l[1]=p*w+_*b+g*D,l[4]=p*x+_*P+g*U,l[7]=p*v+_*L+g*O,l[2]=S*w+y*b+T*D,l[5]=S*x+y*P+T*U,l[8]=S*v+y*L+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-r*l*_+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=_*c-f*p,S=f*h-_*l,y=p*l-c*h,T=t*g+r*S+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(o*p-_*r)*w,e[2]=(f*r-o*c)*w,e[3]=S*w,e[4]=(_*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=y*w,e[7]=(r*h-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const af=new ct,Wm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const s={enabled:!0,workingColorSpace:na,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?su:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[na]:{primaries:e,whitePoint:r,transfer:su,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Tt=My();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class Ey{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=ou("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ou("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(of(o[c].image)):l.push(of(o[c]))}else l=of(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ey.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let wy=0;const lf=new Q;class Dn extends ra{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=Ki,o=Ki,l=wn,c=ls,f=Si,h=oi,p=Dn.DEFAULT_ANISOTROPY,_=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ho(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lf).x}get height(){return this.source.getSize(lf).y}get depth(){return this.source.getSize(lf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=s_;Dn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,r=0,o=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],_=h[4],g=h[8],S=h[1],y=h[5],T=h[9],w=h[2],x=h[6],v=h[10];if(Math.abs(_-S)<.01&&Math.abs(g-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,L=(y+1)/2,D=(v+1)/2,U=(_+S)/4,O=(g+w)/4,W=(T+x)/4;return P>L&&P>D?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=U/r,l=O/r):L>D?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=U/o,l=W/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=O/l,o=W/l),this.set(r,o,l,t),this}let b=Math.sqrt((x-T)*(x-T)+(g-w)*(g-w)+(S-_)*(S-_));return Math.abs(b)<.001&&(b=1),this.x=(x-T)/b,this.y=(g-w)/b,this.z=(S-_)/b,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ay extends ra{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Dn(o);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new qd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Ay{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class p_ extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(l,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Cl.subVectors(this.max,qa),ks.subVectors(e.a,qa),zs.subVectors(e.b,qa),Vs.subVectors(e.c,qa),Er.subVectors(zs,ks),Tr.subVectors(Vs,zs),Jr.subVectors(ks,Vs);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-Jr.z,Jr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,Jr.z,0,-Jr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-Jr.y,Jr.x,0];return!uf(t,ks,zs,Vs,Cl)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,ks,zs,Vs,Cl))?!1:(Rl.crossVectors(Er,Tr),t=[Rl.x,Rl.y,Rl.z],uf(t,ks,zs,Vs,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],gi=new Q,Al=new mo,ks=new Q,zs=new Q,Vs=new Q,Er=new Q,Tr=new Q,Jr=new Q,qa=new Q,Cl=new Q,Rl=new Q,es=new Q;function uf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){es.fromArray(s,l);const f=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),h=e.dot(es),p=t.dot(es),_=r.dot(es);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const Ry=new mo,Ya=new Q,cf=new Q;class go{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ry.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(cf)),this.expandByPoint(Ya.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new Q,ff=new Q,bl=new Q,wr=new Q,df=new Q,Pl=new Q,hf=new Q;class Yd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ff.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(ff);const l=e.distanceTo(t)*.5,c=-this.direction.dot(bl),f=wr.dot(this.direction),h=-wr.dot(bl),p=wr.lengthSq(),_=Math.abs(1-c*c);let g,S,y,T;if(_>0)if(g=c*h-f,S=c*f-h,T=l*_,g>=0)if(S>=-T)if(S<=T){const w=1/_;g*=w,S*=w,y=g*(g+c*S+2*f)+S*(c*g+S+2*h)+p}else S=l,g=Math.max(0,-(c*S+f)),y=-g*g+S*(S+2*h)+p;else S=-l,g=Math.max(0,-(c*S+f)),y=-g*g+S*(S+2*h)+p;else S<=-T?(g=Math.max(0,-(-c*l+f)),S=g>0?-l:Math.min(Math.max(-l,-h),l),y=-g*g+S*(S+2*h)+p):S<=T?(g=0,S=Math.min(Math.max(-l,-h),l),y=S*(S+2*h)+p):(g=Math.max(0,-(c*l+f)),S=g>0?l:Math.min(Math.max(-l,-h),l),y=-g*g+S*(S+2*h)+p);else S=c>0?-l:l,g=Math.max(0,-(c*S+f)),y=-g*g+S*(S+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(ff).addScaledVector(bl,S),y}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),o=Xi.dot(Xi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,o=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,o=(e.min.x-S.x)*p),_>=0?(l=(e.min.y-S.y)*_,c=(e.max.y-S.y)*_):(l=(e.max.y-S.y)*_,c=(e.min.y-S.y)*_),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),g>=0?(f=(e.min.z-S.z)*g,h=(e.max.z-S.z)*g):(f=(e.max.z-S.z)*g,h=(e.min.z-S.z)*g),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,r,o,l){df.subVectors(t,e),Pl.subVectors(r,e),hf.crossVectors(df,Pl);let c=this.direction.dot(hf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;wr.subVectors(this.origin,e);const h=f*this.direction.dot(Pl.crossVectors(wr,Pl));if(h<0)return null;const p=f*this.direction.dot(df.cross(wr));if(p<0||h+p>c)return null;const _=-f*wr.dot(hf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,r,o,l,c,f,h,p,_,g,S,y,T,w,x){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,_,g,S,y,T,w,x)}set(e,t,r,o,l,c,f,h,p,_,g,S,y,T,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=T,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const S=c*_,y=c*g,T=f*_,w=f*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=y+T*p,t[5]=S-w*p,t[9]=-f*h,t[2]=w-S*p,t[6]=T+y*p,t[10]=c*h}else if(e.order==="YXZ"){const S=h*_,y=h*g,T=p*_,w=p*g;t[0]=S+w*f,t[4]=T*f-y,t[8]=c*p,t[1]=c*g,t[5]=c*_,t[9]=-f,t[2]=y*f-T,t[6]=w+S*f,t[10]=c*h}else if(e.order==="ZXY"){const S=h*_,y=h*g,T=p*_,w=p*g;t[0]=S-w*f,t[4]=-c*g,t[8]=T+y*f,t[1]=y+T*f,t[5]=c*_,t[9]=w-S*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const S=c*_,y=c*g,T=f*_,w=f*g;t[0]=h*_,t[4]=T*p-y,t[8]=S*p+w,t[1]=h*g,t[5]=w*p+S,t[9]=y*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const S=c*h,y=c*p,T=f*h,w=f*p;t[0]=h*_,t[4]=w-S*g,t[8]=T*g+y,t[1]=g,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*g+T,t[10]=S-w*g}else if(e.order==="XZY"){const S=c*h,y=c*p,T=f*h,w=f*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=S*g+w,t[5]=c*_,t[9]=y*g-T,t[2]=T*g-y,t[6]=f*_,t[10]=w*g+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(by,e,Py)}lookAt(e,t,r){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ar.crossVectors(r,$n),Ar.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ar.crossVectors(r,$n)),Ar.normalize(),Ll.crossVectors($n,Ar),o[0]=Ar.x,o[4]=Ll.x,o[8]=$n.x,o[1]=Ar.y,o[5]=Ll.y,o[9]=$n.y,o[2]=Ar.z,o[6]=Ll.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],_=r[1],g=r[5],S=r[9],y=r[13],T=r[2],w=r[6],x=r[10],v=r[14],b=r[3],P=r[7],L=r[11],D=r[15],U=o[0],O=o[4],W=o[8],A=o[12],R=o[1],z=o[5],te=o[9],ee=o[13],ce=o[2],ue=o[6],oe=o[10],Y=o[14],q=o[3],he=o[7],se=o[11],F=o[15];return l[0]=c*U+f*R+h*ce+p*q,l[4]=c*O+f*z+h*ue+p*he,l[8]=c*W+f*te+h*oe+p*se,l[12]=c*A+f*ee+h*Y+p*F,l[1]=_*U+g*R+S*ce+y*q,l[5]=_*O+g*z+S*ue+y*he,l[9]=_*W+g*te+S*oe+y*se,l[13]=_*A+g*ee+S*Y+y*F,l[2]=T*U+w*R+x*ce+v*q,l[6]=T*O+w*z+x*ue+v*he,l[10]=T*W+w*te+x*oe+v*se,l[14]=T*A+w*ee+x*Y+v*F,l[3]=b*U+P*R+L*ce+D*q,l[7]=b*O+P*z+L*ue+D*he,l[11]=b*W+P*te+L*oe+D*se,l[15]=b*A+P*ee+L*Y+D*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],_=e[2],g=e[6],S=e[10],y=e[14],T=e[3],w=e[7],x=e[11],v=e[15],b=h*y-p*S,P=f*y-p*g,L=f*S-h*g,D=c*y-p*_,U=c*S-h*_,O=c*g-f*_;return t*(w*b-x*P+v*L)-r*(T*b-x*D+v*U)+o*(T*P-w*D+v*O)-l*(T*L-w*U+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=e[9],S=e[10],y=e[11],T=e[12],w=e[13],x=e[14],v=e[15],b=g*x*p-w*S*p+w*h*y-f*x*y-g*h*v+f*S*v,P=T*S*p-_*x*p-T*h*y+c*x*y+_*h*v-c*S*v,L=_*w*p-T*g*p+T*f*y-c*w*y-_*f*v+c*g*v,D=T*g*h-_*w*h-T*f*S+c*w*S+_*f*x-c*g*x,U=t*b+r*P+o*L+l*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return e[0]=b*O,e[1]=(w*S*l-g*x*l-w*o*y+r*x*y+g*o*v-r*S*v)*O,e[2]=(f*x*l-w*h*l+w*o*p-r*x*p-f*o*v+r*h*v)*O,e[3]=(g*h*l-f*S*l-g*o*p+r*S*p+f*o*y-r*h*y)*O,e[4]=P*O,e[5]=(_*x*l-T*S*l+T*o*y-t*x*y-_*o*v+t*S*v)*O,e[6]=(T*h*l-c*x*l-T*o*p+t*x*p+c*o*v-t*h*v)*O,e[7]=(c*S*l-_*h*l+_*o*p-t*S*p-c*o*y+t*h*y)*O,e[8]=L*O,e[9]=(T*g*l-_*w*l-T*r*y+t*w*y+_*r*v-t*g*v)*O,e[10]=(c*w*l-T*f*l+T*r*p-t*w*p-c*r*v+t*f*v)*O,e[11]=(_*f*l-c*g*l-_*r*p+t*g*p+c*r*y-t*f*y)*O,e[12]=D*O,e[13]=(_*w*o-T*g*o+T*r*S-t*w*S-_*r*x+t*g*x)*O,e[14]=(T*f*o-c*w*o-T*r*h+t*w*h+c*r*x-t*f*x)*O,e[15]=(c*g*o-_*f*o+_*r*h-t*g*h-c*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,_=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+r,_*h-o*c,0,p*h-o*f,_*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,_=c+c,g=f+f,S=l*p,y=l*_,T=l*g,w=c*_,x=c*g,v=f*g,b=h*p,P=h*_,L=h*g,D=r.x,U=r.y,O=r.z;return o[0]=(1-(w+v))*D,o[1]=(y+L)*D,o[2]=(T-P)*D,o[3]=0,o[4]=(y-L)*U,o[5]=(1-(S+v))*U,o[6]=(x+b)*U,o[7]=0,o[8]=(T+P)*O,o[9]=(x-b)*O,o[10]=(1-(S+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Hs.set(o[0],o[1],o[2]).length();const c=Hs.set(o[4],o[5],o[6]).length(),f=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),_i.copy(this);const p=1/l,_=1/c,g=1/f;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,o,l,c,f=Pi,h=!1){const p=this.elements,_=2*l/(t-e),g=2*l/(r-o),S=(t+e)/(t-e),y=(r+o)/(r-o);let T,w;if(h)T=l/(c-l),w=c*l/(c-l);else if(f===Pi)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===au)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Pi,h=!1){const p=this.elements,_=2/(t-e),g=2/(r-o),S=-(t+e)/(t-e),y=-(r+o)/(r-o);let T,w;if(h)T=1/(c-l),w=c/(c-l);else if(f===Pi)T=-2/(c-l),w=-(c+l)/(c-l);else if(f===au)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hs=new Q,_i=new $t,by=new Q(0,0,0),Py=new Q(1,1,1),Ar=new Q,Ll=new Q,$n=new Q,jm=new $t,qm=new po;class tr{constructor(e=0,t=0,r=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],_=o[9],g=o[2],S=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ly=0;const Ym=new Q,Gs=new po,ji=new $t,Nl=new Q,$a=new Q,Ny=new Q,Dy=new po,$m=new Q(1,0,0),Km=new Q(0,1,0),Zm=new Q(0,0,1),Qm={type:"added"},Iy={type:"removed"},Ws={type:"childadded",child:null},pf={type:"childremoved",child:null};class In extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Q,t=new tr,r=new po,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt($a,Nl,this.up):ji.lookAt(Nl,$a,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(ji),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iy),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),_=c(e.images),g=c(e.shapes),S=c(e.skeletons),y=c(e.animations),T=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=o,r;function c(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}In.DEFAULT_UP=new Q(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new Q,qi=new Q,mf=new Q,Yi=new Q,Xs=new Q,js=new Q,Jm=new Q,gf=new Q,_f=new Q,vf=new Q,xf=new Qt,Sf=new Qt,yf=new Qt;class xi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),vi.subVectors(e,t),o.cross(vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){vi.subVectors(o,t),qi.subVectors(r,t),mf.subVectors(e,t);const c=vi.dot(vi),f=vi.dot(qi),h=vi.dot(mf),p=qi.dot(qi),_=qi.dot(mf),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const S=1/g,y=(p*h-f*_)*S,T=(c*_-f*h)*S;return l.set(1-y-T,T,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(c,Yi.y),h.addScaledVector(f,Yi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return xf.setScalar(0),Sf.setScalar(0),yf.setScalar(0),xf.fromBufferAttribute(e,t),Sf.fromBufferAttribute(e,r),yf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(xf,l.x),c.addScaledVector(Sf,l.y),c.addScaledVector(yf,l.z),c}static isFrontFacing(e,t,r,o){return vi.subVectors(r,t),qi.subVectors(e,t),vi.cross(qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Xs.subVectors(o,r),js.subVectors(l,r),gf.subVectors(e,r);const h=Xs.dot(gf),p=js.dot(gf);if(h<=0&&p<=0)return t.copy(r);_f.subVectors(e,o);const _=Xs.dot(_f),g=js.dot(_f);if(_>=0&&g<=_)return t.copy(o);const S=h*g-_*p;if(S<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(r).addScaledVector(Xs,c);vf.subVectors(e,l);const y=Xs.dot(vf),T=js.dot(vf);if(T>=0&&y<=T)return t.copy(l);const w=y*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(js,f);const x=_*T-y*g;if(x<=0&&g-_>=0&&y-T>=0)return Jm.subVectors(l,o),f=(g-_)/(g-_+(y-T)),t.copy(o).addScaledVector(Jm,f);const v=1/(x+w+S);return c=w*v,f=S*v,t.copy(r).addScaledVector(Xs,c).addScaledVector(js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Mf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=yy(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Mf(c,l,e+1/3),this.g=Mf(c,l,e),this.b=Mf(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=g_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(vt(Tn.r*255,0,255))*65536+Math.round(vt(Tn.g*255,0,255))*256+Math.round(vt(Tn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const _=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case r:h=(o-l)/g+(o<l?6:0);break;case o:h=(l-r)/g+2;break;case l:h=(r-o)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=si){Tt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Dl);const r=rf(Cr.h,Dl.h,t),o=rf(Cr.s,Dl.s,t),l=rf(Cr.l,Dl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Rt;Rt.NAMES=g_;let Uy=0;class sa extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=Zs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Vf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zf&&(r.blendSrc=this.blendSrc),this.blendDst!==Vf&&(r.blendDst=this.blendDst),this.blendEquation!==as&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $d extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new Q,Il=new Lt;let Fy=0;class li{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=km,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class __ extends li{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class v_ extends li{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class An extends li{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Oy=0;const ri=new $t,Ef=new In,qs=new Q,Kn=new mo,Ka=new mo,hn=new Q;class Un extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?v_:__)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ka.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Kn.min,Ka.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Ka.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Ka.min),Kn.expandByPoint(Ka.max))}Kn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(hn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)hn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),hn.add(qs)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let W=0;W<r.count;W++)f[W]=new Q,h[W]=new Q;const p=new Q,_=new Q,g=new Q,S=new Lt,y=new Lt,T=new Lt,w=new Q,x=new Q;function v(W,A,R){p.fromBufferAttribute(r,W),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),S.fromBufferAttribute(l,W),y.fromBufferAttribute(l,A),T.fromBufferAttribute(l,R),_.sub(p),g.sub(p),y.sub(S),T.sub(S);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(z),x.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(z),f[W].add(w),f[A].add(w),f[R].add(w),h[W].add(x),h[A].add(x),h[R].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let W=0,A=b.length;W<A;++W){const R=b[W],z=R.start,te=R.count;for(let ee=z,ce=z+te;ee<ce;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const P=new Q,L=new Q,D=new Q,U=new Q;function O(W){D.fromBufferAttribute(o,W),U.copy(D);const A=f[W];P.copy(A),P.sub(D.multiplyScalar(D.dot(A))).normalize(),L.crossVectors(U,A);const z=L.dot(h[W])<0?-1:1;c.setXYZW(W,P.x,P.y,P.z,z)}for(let W=0,A=b.length;W<A;++W){const R=b[W],z=R.start,te=R.count;for(let ee=z,ce=z+te;ee<ce;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const o=new Q,l=new Q,c=new Q,f=new Q,h=new Q,p=new Q,_=new Q,g=new Q;if(e)for(let S=0,y=e.count;S<y;S+=3){const T=e.getX(S+0),w=e.getX(S+1),x=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,x),_.subVectors(c,l),g.subVectors(o,l),_.cross(g),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),f.add(_),h.add(_),p.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,y=t.count;S<y;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),c.fromBufferAttribute(t,S+2),_.subVectors(c,l),g.subVectors(o,l),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,g=f.normalized,S=new p.constructor(h.length*_);let y=0,T=0;for(let w=0,x=h.length;w<x;w++){f.isInterleavedBufferAttribute?y=h[w]*f.data.stride+f.offset:y=h[w]*_;for(let v=0;v<_;v++)S[T++]=p[y++]}return new li(S,_,g)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=e(S,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new $t,ts=new Yd,Ul=new go,tg=new Q,Fl=new Q,Ol=new Q,Bl=new Q,Tf=new Q,kl=new Q,ng=new Q,zl=new Q;class Ii extends In{constructor(e=new Un,t=new $d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],g=l[h];_!==0&&(Tf.fromBufferAttribute(g,e),c?kl.addScaledVector(Tf,_):kl.addScaledVector(Tf.sub(t),_))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Ul.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ul,tg)===null||ts.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(l).invert(),ts.copy(e.ray).applyMatrix4(eg),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,S=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=S.length;T<w;T++){const x=S[T],v=c[x.materialIndex],b=Math.max(x.start,y.start),P=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=b,D=P;L<D;L+=3){const U=f.getX(L),O=f.getX(L+1),W=f.getX(L+2);o=Vl(this,v,e,r,p,_,g,U,O,W),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let x=T,v=w;x<v;x+=3){const b=f.getX(x),P=f.getX(x+1),L=f.getX(x+2);o=Vl(this,c,e,r,p,_,g,b,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=S.length;T<w;T++){const x=S[T],v=c[x.materialIndex],b=Math.max(x.start,y.start),P=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let L=b,D=P;L<D;L+=3){const U=L,O=L+1,W=L+2;o=Vl(this,v,e,r,p,_,g,U,O,W),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let x=T,v=w;x<v;x+=3){const b=x,P=x+1,L=x+2;o=Vl(this,c,e,r,p,_,g,b,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function By(s,e,t,r,o,l,c,f){let h;if(e.side===Gn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Dr,f),h===null)return null;zl.copy(f),zl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(zl);return p<t.near||p>t.far?null:{distance:p,point:zl.clone(),object:s}}function Vl(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Fl),s.getVertexPosition(h,Ol),s.getVertexPosition(p,Bl);const _=By(s,e,t,r,Fl,Ol,Bl,ng);if(_){const g=new Q;xi.getBarycoord(ng,Fl,Ol,Bl,g),o&&(_.uv=xi.getInterpolatedAttribute(o,f,h,p,g,new Lt)),l&&(_.uv1=xi.getInterpolatedAttribute(l,f,h,p,g,new Lt)),c&&(_.normal=xi.getInterpolatedAttribute(c,f,h,p,g,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:f,b:h,c:p,normal:new Q,materialIndex:0};xi.getNormal(Fl,Ol,Bl,S.normal),_.face=S,_.barycoord=g}return _}class _o extends Un{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],_=[],g=[];let S=0,y=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,o,c,2),T("x","z","y",1,-1,e,r,-t,o,c,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(g,2));function T(w,x,v,b,P,L,D,U,O,W,A){const R=L/O,z=D/W,te=L/2,ee=D/2,ce=U/2,ue=O+1,oe=W+1;let Y=0,q=0;const he=new Q;for(let se=0;se<oe;se++){const F=se*z-ee;for(let K=0;K<ue;K++){const be=K*R-te;he[w]=be*b,he[x]=F*P,he[v]=ce,p.push(he.x,he.y,he.z),he[w]=0,he[x]=0,he[v]=U>0?1:-1,_.push(he.x,he.y,he.z),g.push(K/O),g.push(1-se/W),Y+=1}}for(let se=0;se<W;se++)for(let F=0;F<O;F++){const K=S+F+ue*se,be=S+F+ue*(se+1),Ye=S+(F+1)+ue*(se+1),Ze=S+(F+1)+ue*se;h.push(K,be,Ze),h.push(be,Ye,Ze),q+=6}f.addGroup(y,q,A),y+=q,S+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const r=ia(s[t]);for(const o in r)e[o]=r[o]}return e}function ky(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function x_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const zy={clone:ia,merge:Nn};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class S_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new Q,ig=new Lt,rg=new Lt;class ai extends S_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,ig,rg),t.subVectors(rg,ig)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,$s=1;class Gy extends In{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(Ys,$s,e,t);o.layers=this.layers,this.add(o);const l=new ai(Ys,$s,e,t);l.layers=this.layers,this.add(l);const c=new ai(Ys,$s,e,t);c.layers=this.layers,this.add(c);const f=new ai(Ys,$s,e,t);f.layers=this.layers,this.add(f);const h=new ai(Ys,$s,e,t);h.layers=this.layers,this.add(h);const p=new ai(Ys,$s,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,_),e.setRenderTarget(g,S,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class y_ extends Dn{constructor(e=[],t=cs,r,o,l,c,f,h,p,_){super(e,t,r,o,l,c,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M_ extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new y_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Zi});l.uniforms.tEquirect.value=t;const c=new Ii(o,l),f=t.minFilter;return t.minFilter===ls&&(t.minFilter=wn),new Gy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Hl extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&S>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Xy extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jy extends Dn{constructor(e=null,t=1,r=1,o,l,c,f,h,p=_n,_=_n,g,S){super(null,c,f,h,p,_,o,l,g,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Af=new Q,qy=new Q,Yy=new ct;class ss{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Af.subVectors(r,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Af),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Yy.getNormalMatrix(e),o=this.coplanarPoint(Af).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new go,$y=new Lt(.5,.5),Gl=new Q;class E_{constructor(e=new ss,t=new ss,r=new ss,o=new ss,l=new ss,c=new ss){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Pi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],_=l[4],g=l[5],S=l[6],y=l[7],T=l[8],w=l[9],x=l[10],v=l[11],b=l[12],P=l[13],L=l[14],D=l[15];if(o[0].setComponents(p-c,y-_,v-T,D-b).normalize(),o[1].setComponents(p+c,y+_,v+T,D+b).normalize(),o[2].setComponents(p+f,y+g,v+w,D+P).normalize(),o[3].setComponents(p-f,y-g,v-w,D-P).normalize(),r)o[4].setComponents(h,S,x,L).normalize(),o[5].setComponents(p-h,y-S,v-x,D-L).normalize();else if(o[4].setComponents(p-h,y-S,v-x,D-L).normalize(),t===Pi)o[5].setComponents(p+h,y+S,v+x,D+L).normalize();else if(t===au)o[5].setComponents(h,S,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=$y.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class T_ extends sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lu=new Q,uu=new Q,sg=new $t,Za=new Yd,Wl=new go,Cf=new Q,ag=new Q;class Ky extends In{constructor(e=new Un,t=new T_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)lu.fromBufferAttribute(t,o-1),uu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=lu.distanceTo(uu);e.setAttribute("lineDistance",new An(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;sg.copy(o).invert(),Za.copy(e.ray).applyMatrix4(sg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const y=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let w=y,x=T-1;w<x;w+=p){const v=_.getX(w),b=_.getX(w+1),P=Xl(this,e,Za,h,v,b,w);P&&t.push(P)}if(this.isLineLoop){const w=_.getX(T-1),x=_.getX(y),v=Xl(this,e,Za,h,w,x,T-1);v&&t.push(v)}}else{const y=Math.max(0,c.start),T=Math.min(S.count,c.start+c.count);for(let w=y,x=T-1;w<x;w+=p){const v=Xl(this,e,Za,h,w,w+1,w);v&&t.push(v)}if(this.isLineLoop){const w=Xl(this,e,Za,h,T-1,y,T-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Xl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(lu.fromBufferAttribute(f,o),uu.fromBufferAttribute(f,l),t.distanceSqToSegment(lu,uu,Cf,ag)>r)return;Cf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Cf);if(!(p<e.near||p>e.far))return{distance:p,point:ag.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const og=new Q,lg=new Q;class Zy extends Ky{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)og.fromBufferAttribute(t,o),lg.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+og.distanceTo(lg);e.setAttribute("lineDistance",new An(r,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nu extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ug=new $t,Nd=new Yd,jl=new go,ql=new Q;class Rf extends In{constructor(e=new Un,t=new nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(o),jl.radius+=l,e.ray.intersectsSphere(jl)===!1)return;ug.copy(o).invert(),Nd.copy(e.ray).applyMatrix4(ug);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let T=S,w=y;T<w;T++){const x=p.getX(T);ql.fromBufferAttribute(g,x),cg(ql,x,h,o,e,t,this)}}else{const S=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let T=S,w=y;T<w;T++)ql.fromBufferAttribute(g,T),cg(ql,T,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function cg(s,e,t,r,o,l,c){const f=Nd.distanceSqToPoint(s);if(f<t){const h=new Q;Nd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class lo extends Dn{constructor(e,t,r=Di,o,l,c,f=_n,h=_n,p,_=er,g=1){if(_!==er&&_!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:g};super(S,o,l,c,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qy extends lo{constructor(e,t=Di,r=cs,o,l,c=_n,f=_n,h,p=er){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,t,r,o,l,c,f,h,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class w_ extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kd extends Un{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),p(r),_(),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(l.slice(),3)),this.setAttribute("uv",new An(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const P=new Q,L=new Q,D=new Q;for(let U=0;U<t.length;U+=3)y(t[U+0],P),y(t[U+1],L),y(t[U+2],D),h(P,L,D,b)}function h(b,P,L,D){const U=D+1,O=[];for(let W=0;W<=U;W++){O[W]=[];const A=b.clone().lerp(L,W/U),R=P.clone().lerp(L,W/U),z=U-W;for(let te=0;te<=z;te++)te===0&&W===U?O[W][te]=A:O[W][te]=A.clone().lerp(R,te/z)}for(let W=0;W<U;W++)for(let A=0;A<2*(U-W)-1;A++){const R=Math.floor(A/2);A%2===0?(S(O[W][R+1]),S(O[W+1][R]),S(O[W][R])):(S(O[W][R+1]),S(O[W+1][R+1]),S(O[W+1][R]))}}function p(b){const P=new Q;for(let L=0;L<l.length;L+=3)P.x=l[L+0],P.y=l[L+1],P.z=l[L+2],P.normalize().multiplyScalar(b),l[L+0]=P.x,l[L+1]=P.y,l[L+2]=P.z}function _(){const b=new Q;for(let P=0;P<l.length;P+=3){b.x=l[P+0],b.y=l[P+1],b.z=l[P+2];const L=x(b)/2/Math.PI+.5,D=v(b)/Math.PI+.5;c.push(L,1-D)}T(),g()}function g(){for(let b=0;b<c.length;b+=6){const P=c[b+0],L=c[b+2],D=c[b+4],U=Math.max(P,L,D),O=Math.min(P,L,D);U>.9&&O<.1&&(P<.2&&(c[b+0]+=1),L<.2&&(c[b+2]+=1),D<.2&&(c[b+4]+=1))}}function S(b){l.push(b.x,b.y,b.z)}function y(b,P){const L=b*3;P.x=e[L+0],P.y=e[L+1],P.z=e[L+2]}function T(){const b=new Q,P=new Q,L=new Q,D=new Q,U=new Lt,O=new Lt,W=new Lt;for(let A=0,R=0;A<l.length;A+=9,R+=6){b.set(l[A+0],l[A+1],l[A+2]),P.set(l[A+3],l[A+4],l[A+5]),L.set(l[A+6],l[A+7],l[A+8]),U.set(c[R+0],c[R+1]),O.set(c[R+2],c[R+3]),W.set(c[R+4],c[R+5]),D.copy(b).add(P).add(L).divideScalar(3);const z=x(D);w(U,R+0,b,z),w(O,R+2,P,z),w(W,R+4,L,z)}}function w(b,P,L,D){D<0&&b.x===1&&(c[P]=b.x-1),L.x===0&&L.z===0&&(c[P]=D/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function v(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.vertices,e.indices,e.radius,e.detail)}}class cu extends Kd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cu(e.radius,e.detail)}}class mu extends Un{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,_=h+1,g=e/f,S=t/h,y=[],T=[],w=[],x=[];for(let v=0;v<_;v++){const b=v*S-c;for(let P=0;P<p;P++){const L=P*g-l;T.push(L,-b,0),w.push(0,0,1),x.push(P/f),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let b=0;b<f;b++){const P=b+p*v,L=b+p*(v+1),D=b+1+p*(v+1),U=b+1+p*v;y.push(P,L,U),y.push(L,D,U)}this.setIndex(y),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(w,3)),this.setAttribute("uv",new An(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jy extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eM extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tM extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class A_ extends S_{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nM extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fg extends Zy{constructor(e=10,t=10,r=4473924,o=8947848){r=new Rt(r),o=new Rt(o);const l=t/2,c=e/t,f=e/2,h=[],p=[];for(let S=0,y=0,T=-f;S<=t;S++,T+=c){h.push(-f,0,T,f,0,T),h.push(T,0,-f,T,0,f);const w=S===l?r:o;w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3}const _=new Un;_.setAttribute("position",new An(h,3)),_.setAttribute("color",new An(p,3));const g=new T_({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function dg(s,e,t,r){const o=iM(r);switch(t){case c_:return s*e;case d_:return s*e/o.components*o.byteLength;case Hd:return s*e/o.components*o.byteLength;case ta:return s*e*2/o.components*o.byteLength;case Gd:return s*e*2/o.components*o.byteLength;case f_:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case Wd:return s*e*4/o.components*o.byteLength;case Ql:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(s,16)*Math.max(e,8)/4;case Jf:case td:return Math.max(s,8)*Math.max(e,8)/2;case id:case rd:case ad:case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sd:case ld:case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Td:case wd:case Ad:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cd:case Rd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bd:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iM(s){switch(s){case oi:case a_:return{byteLength:1,components:1};case so:case o_:case Ji:return{byteLength:2,components:1};case zd:case Vd:return{byteLength:2,components:4};case Di:case kd:case bi:return{byteLength:4,components:1};case l_:case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C_(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function rM(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,h,p){const _=h.array,g=h.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<g.length;y++){const T=g[S],w=g[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,g[S]=w)}g.length=S+1;for(let y=0,T=g.length;y<T;y++){const w=g[y];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var sM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
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
#endif`,oM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fM=`#ifdef USE_AOMAP
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
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hM=`#ifdef USE_BATCHING
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
#endif`,pM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vM=`#ifdef USE_IRIDESCENCE
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
#endif`,xM=`#ifdef USE_BUMPMAP
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PM=`vec3 transformedNormal = objectNormal;
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
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",FM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
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
}`,qM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KM=`uniform bool receiveShadow;
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
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
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
#endif`,iE=`uniform sampler2D dfgLUT;
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
}`,rE=`
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pE=`#if defined( USE_POINTS_UV )
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
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
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
#endif`,yE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GE=`float getShadowMask() {
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
}`,WE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,f1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 diffuse;
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
}`,S1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,w1=`#define NORMAL
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
}`,A1=`#define PHONG
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
}`,C1=`#define PHONG
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
}`,R1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,L1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,O1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:sM,alphahash_pars_fragment:aM,alphamap_fragment:oM,alphamap_pars_fragment:lM,alphatest_fragment:uM,alphatest_pars_fragment:cM,aomap_fragment:fM,aomap_pars_fragment:dM,batching_pars_vertex:hM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:xM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:MM,clipping_planes_vertex:EM,color_fragment:TM,color_pars_fragment:wM,color_pars_vertex:AM,color_vertex:CM,common:RM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:PM,displacementmap_pars_vertex:LM,displacementmap_vertex:NM,emissivemap_fragment:DM,emissivemap_pars_fragment:IM,colorspace_fragment:UM,colorspace_pars_fragment:FM,envmap_fragment:OM,envmap_common_pars_fragment:BM,envmap_pars_fragment:kM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:ZM,envmap_vertex:VM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:WM,fog_pars_fragment:XM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:qM,lights_lambert_fragment:YM,lights_lambert_pars_fragment:$M,lights_pars_begin:KM,lights_toon_fragment:QM,lights_toon_pars_fragment:JM,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:aE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:uE,logdepthbuf_vertex:cE,map_fragment:fE,map_pars_fragment:dE,map_particle_fragment:hE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:_E,morphcolor_vertex:vE,morphnormal_vertex:xE,morphtarget_pars_vertex:SE,morphtarget_vertex:yE,normal_fragment_begin:ME,normal_fragment_maps:EE,normal_pars_fragment:TE,normal_pars_vertex:wE,normal_vertex:AE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:LE,opaque_fragment:NE,packing:DE,premultiplied_alpha_fragment:IE,project_vertex:UE,dithering_fragment:FE,dithering_pars_fragment:OE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:VE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:WE,skinning_pars_vertex:XE,skinning_vertex:jE,skinnormal_vertex:qE,specularmap_fragment:YE,specularmap_pars_fragment:$E,tonemapping_fragment:KE,tonemapping_pars_fragment:ZE,transmission_fragment:QE,transmission_pars_fragment:JE,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:r1,background_frag:s1,backgroundCube_vert:a1,backgroundCube_frag:o1,cube_vert:l1,cube_frag:u1,depth_vert:c1,depth_frag:f1,distance_vert:d1,distance_frag:h1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:_1,meshbasic_vert:v1,meshbasic_frag:x1,meshlambert_vert:S1,meshlambert_frag:y1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:T1,meshnormal_frag:w1,meshphong_vert:A1,meshphong_frag:C1,meshphysical_vert:R1,meshphysical_frag:b1,meshtoon_vert:P1,meshtoon_frag:L1,points_vert:N1,points_frag:D1,shadow_vert:I1,shadow_frag:U1,sprite_vert:F1,sprite_frag:O1},Ie={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Nn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Nn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Nn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Nn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Nn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Nn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Nn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Nn([Ie.lights,Ie.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Yl={r:0,b:0,g:0},is=new tr,B1=new $t;function k1(s,e,t,r,o,l,c){const f=new Rt(0);let h=l===!0?0:1,p,_,g=null,S=0,y=null;function T(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?t:e).get(L)),L}function w(P){let L=!1;const D=T(P);D===null?v(f,h):D&&D.isColor&&(v(D,1),L=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,L){const D=T(L);D&&(D.isCubeTexture||D.mapping===pu)?(_===void 0&&(_=new Ii(new _o(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ia(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(U,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),is.copy(L.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(is)),_.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ut,(g!==D||S!==D.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=D,S=D.version,y=s.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Ii(new mu(2,2),new Ui({name:"BackgroundMaterial",uniforms:ia(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ut,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||S!==D.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=D,S=D.version,y=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,L){P.getRGB(Yl,x_(s)),r.buffers.color.setClear(Yl.r,Yl.g,Yl.b,L,c)}function b(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,L=1){f.set(P),h=L,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,v(f,h)},render:w,addToRenderList:x,dispose:b}}function z1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,c=!1;function f(R,z,te,ee,ce){let ue=!1;const oe=g(ee,te,z);l!==oe&&(l=oe,p(l.object)),ue=y(R,ee,te,ce),ue&&T(R,ee,te,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,L(R,z,te,ee),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function g(R,z,te){const ee=te.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let ue=ce[z.id];ue===void 0&&(ue={},ce[z.id]=ue);let oe=ue[ee];return oe===void 0&&(oe=S(h()),ue[ee]=oe),oe}function S(R){const z=[],te=[],ee=[];for(let ce=0;ce<t;ce++)z[ce]=0,te[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:te,attributeDivisors:ee,object:R,attributes:{},index:null}}function y(R,z,te,ee){const ce=l.attributes,ue=z.attributes;let oe=0;const Y=te.getAttributes();for(const q in Y)if(Y[q].location>=0){const se=ce[q];let F=ue[q];if(F===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;oe++}return l.attributesNum!==oe||l.index!==ee}function T(R,z,te,ee){const ce={},ue=z.attributes;let oe=0;const Y=te.getAttributes();for(const q in Y)if(Y[q].location>=0){let se=ue[q];se===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),ce[q]=F,oe++}l.attributes=ce,l.attributesNum=oe,l.index=ee}function w(){const R=l.newAttributes;for(let z=0,te=R.length;z<te;z++)R[z]=0}function x(R){v(R,0)}function v(R,z){const te=l.newAttributes,ee=l.enabledAttributes,ce=l.attributeDivisors;te[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),ce[R]!==z&&(s.vertexAttribDivisor(R,z),ce[R]=z)}function b(){const R=l.newAttributes,z=l.enabledAttributes;for(let te=0,ee=z.length;te<ee;te++)z[te]!==R[te]&&(s.disableVertexAttribArray(te),z[te]=0)}function P(R,z,te,ee,ce,ue,oe){oe===!0?s.vertexAttribIPointer(R,z,te,ce,ue):s.vertexAttribPointer(R,z,te,ee,ce,ue)}function L(R,z,te,ee){w();const ce=ee.attributes,ue=te.getAttributes(),oe=z.defaultAttributeValues;for(const Y in ue){const q=ue[Y];if(q.location>=0){let he=ce[Y];if(he===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const se=he.normalized,F=he.itemSize,K=e.get(he);if(K===void 0)continue;const be=K.buffer,Ye=K.type,Ze=K.bytesPerElement,ie=Ye===s.INT||Ye===s.UNSIGNED_INT||he.gpuType===kd;if(he.isInterleavedBufferAttribute){const fe=he.data,ye=fe.stride,ke=he.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)v(q.location+Ue,fe.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)x(q.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Ue=0;Ue<q.locationSize;Ue++)P(q.location+Ue,F/q.locationSize,Ye,se,ye*Ze,(ke+F/q.locationSize*Ue)*Ze,ie)}else{if(he.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)v(q.location+fe,he.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let fe=0;fe<q.locationSize;fe++)x(q.location+fe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let fe=0;fe<q.locationSize;fe++)P(q.location+fe,F/q.locationSize,Ye,se,F*Ze,F/q.locationSize*fe*Ze,ie)}}else if(oe!==void 0){const se=oe[Y];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(q.location,se);break;case 3:s.vertexAttrib3fv(q.location,se);break;case 4:s.vertexAttrib4fv(q.location,se);break;default:s.vertexAttrib1fv(q.location,se)}}}}b()}function D(){W();for(const R in r){const z=r[R];for(const te in z){const ee=z[te];for(const ce in ee)_(ee[ce].object),delete ee[ce];delete z[te]}delete r[R]}}function U(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const te in z){const ee=z[te];for(const ce in ee)_(ee[ce].object),delete ee[ce];delete z[te]}delete r[R.id]}function O(R){for(const z in r){const te=r[z];if(te[R.id]===void 0)continue;const ee=te[R.id];for(const ce in ee)_(ee[ce].object),delete ee[ce];delete te[R.id]}}function W(){A(),c=!0,l!==o&&(l=o,p(l.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:W,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:b}}function V1(s,e,t){let r;function o(p){r=p}function l(p,_){s.drawArrays(r,p,_),t.update(_,r,1)}function c(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),t.update(_,r,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];t.update(y,r,1)}function h(p,_,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)c(p[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*S[w];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function H1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const W=O===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!W)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(at("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:L,maxSamples:D,samples:U}}function G1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ss,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||o;return o=S,r=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,S){t=_(g,S,0)},this.setState=function(g,S,y){const T=g.clippingPlanes,w=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!o||T===null||T.length===0||l&&!x)l?_(null):p();else{const b=l?0:r,P=b*4;let L=v.clippingState||null;h.value=L,L=_(T,S,P,y);for(let D=0;D!==P;++D)L[D]=t[D];v.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,y,T){const w=g!==null?g.length:0;let x=null;if(w!==0){if(x=h.value,T!==!0||x===null){const v=y+w*4,b=S.matrixWorldInverse;f.getNormalMatrix(b),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,L=y;P!==w;++P,L+=4)c.copy(g[P]).applyMatrix4(b,f),c.normal.toArray(x,L),x[L+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function W1(s){let e=new WeakMap;function t(c,f){return f===$f?c.mapping=cs:f===Kf&&(c.mapping=ea),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===$f||f===Kf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new M_(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Lr=4,hg=[.125,.215,.35,.446,.526,.582],os=20,X1=256,Qa=new A_,pg=new Rt;let bf=null,Pf=0,Lf=0,Nf=!1;const j1=new Q;class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=j1}=l;bf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Pf,Lf),this._renderer.xr.enabled=Nf,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ji,format:Si,colorSpace:na,depthBuffer:!1},o=gg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q1(l)),this._blurMaterial=$1(l,e,t),this._ggxMaterial=Y1(l,e,t)}return o}_compileMaterial(e){const t=new Ii(new Un,e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,r,o,l){const h=new ai(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(pg),g.toneMapping=Li,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new _o,new $d({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let v=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,v=!0):(x.color.copy(pg),v=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[P],l.y,l.z)):L===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[P]));const D=this._cubeSize;Ks(o,L*D,P>2?D:0,D,D),g.setRenderTarget(o),v&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=S,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===cs||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ks(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Qa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,y=g*S,{_lodMax:T}=this,w=this._sizeLods[r],x=3*w*(r>T-Lr?r-T+Lr:0),v=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=T-t,Ks(l,x,v,3*w,2*w),o.setRenderTarget(l),o.render(f,Qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-r,Ks(e,x,v,3*w,2*w),o.setRenderTarget(e),o.render(f,Qa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*os-1),w=l/T,x=isFinite(l)?1+Math.floor(_*w):os;x>os&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${os}`);const v=[];let b=0;for(let O=0;O<os;++O){const W=O/w,A=Math.exp(-W*W/2);v.push(A),O===0?b+=A:O<x&&(b+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/b;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=c==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:P}=this;S.dTheta.value=T,S.mipInt.value=P-r;const L=this._sizeLods[o],D=3*L*(o>P-Lr?o-P+Lr:0),U=4*(this._cubeSize-L);Ks(t,D,U,3*L,2*L),h.setRenderTarget(t),h.render(g,Qa)}}function q1(s){const e=[],t=[],r=[];let o=s;const l=s-Lr+1+hg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>s-Lr?h=hg[c-s+Lr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,w=3,x=2,v=1,b=new Float32Array(w*T*y),P=new Float32Array(x*T*y),L=new Float32Array(v*T*y);for(let U=0;U<y;U++){const O=U%3*2/3-1,W=U>2?0:-1,A=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];b.set(A,w*T*U),P.set(S,x*T*U);const R=[U,U,U,U,U,U];L.set(R,v*T*U)}const D=new Un;D.setAttribute("position",new li(b,w)),D.setAttribute("uv",new li(P,x)),D.setAttribute("faceIndex",new li(L,v)),r.push(new Ii(D,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function gg(s,e,t){const r=new Ni(s,e,t);return r.texture.mapping=pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ks(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function Y1(s,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function $1(s,e,t){const r=new Float32Array(os),o=new Q(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function _g(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function vg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function K1(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===$f||h===Kf,_=h===cs||h===ea;if(p||_){let g=e.get(f);const S=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new mg(s)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&o(y)?(t===null&&(t=new mg(s)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function Z1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&oo("WebGLRenderer: "+r+" extension not supported."),o}}}function Q1(s,e,t,r){const o={},l=new WeakMap;function c(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",c),delete o[S.id];const y=l.get(S);y&&(e.remove(y),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(g,S){return o[S.id]===!0||(S.addEventListener("dispose",c),o[S.id]=!0,t.memory.geometries++),S}function h(g){const S=g.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,T=g.attributes.position;let w=0;if(y!==null){const b=y.array;w=y.version;for(let P=0,L=b.length;P<L;P+=3){const D=b[P+0],U=b[P+1],O=b[P+2];S.push(D,U,U,O,O,D)}}else if(T!==void 0){const b=T.array;w=T.version;for(let P=0,L=b.length/3-1;P<L;P+=3){const D=P+0,U=P+1,O=P+2;S.push(D,U,U,O,O,D)}}else return;const x=new(h_(S)?v_:__)(S,1);x.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const S=l.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:_}}function J1(s,e,t){let r;function o(S){r=S}let l,c;function f(S){l=S.type,c=S.bytesPerElement}function h(S,y){s.drawElements(r,y,l,S*c),t.update(y,r,1)}function p(S,y,T){T!==0&&(s.drawElementsInstanced(r,y,l,S*c,T),t.update(y,r,T))}function _(S,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,S,0,T);let x=0;for(let v=0;v<T;v++)x+=y[v];t.update(x,r,1)}function g(S,y,T,w){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/c,y[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,S,0,w,0,T);let v=0;for(let b=0;b<T;b++)v+=y[b]*w[b];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function eT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function tT(s,e,t){const r=new WeakMap,o=new Qt;function l(c,f,h){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(f);if(S===void 0||S.count!==g){let R=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let L=0;T===!0&&(L=1),w===!0&&(L=2),x===!0&&(L=3);let D=f.attributes.position.count*L,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*U*4*g),W=new p_(O,D,U,g);W.type=bi,W.needsUpdate=!0;const A=L*4;for(let z=0;z<g;z++){const te=v[z],ee=b[z],ce=P[z],ue=D*U*4*z;for(let oe=0;oe<te.count;oe++){const Y=oe*A;T===!0&&(o.fromBufferAttribute(te,oe),O[ue+Y+0]=o.x,O[ue+Y+1]=o.y,O[ue+Y+2]=o.z,O[ue+Y+3]=0),w===!0&&(o.fromBufferAttribute(ee,oe),O[ue+Y+4]=o.x,O[ue+Y+5]=o.y,O[ue+Y+6]=o.z,O[ue+Y+7]=0),x===!0&&(o.fromBufferAttribute(ce,oe),O[ue+Y+8]=o.x,O[ue+Y+9]=o.y,O[ue+Y+10]=o.z,O[ue+Y+11]=ce.itemSize===4?o.w:1)}}S={count:g,texture:W,size:new Lt(D,U)},r.set(f,S),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function nT(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==p&&(S.update(),o.set(S,p))}return g}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const iT={[Qg]:"LINEAR_TONE_MAPPING",[Jg]:"REINHARD_TONE_MAPPING",[e_]:"CINEON_TONE_MAPPING",[t_]:"ACES_FILMIC_TONE_MAPPING",[i_]:"AGX_TONE_MAPPING",[r_]:"NEUTRAL_TONE_MAPPING",[n_]:"CUSTOM_TONE_MAPPING"};function rT(s,e,t,r,o){const l=new Ni(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),c=new Ni(e,t,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),f=new Un;f.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new An([0,2,0,0,2,0],2));const h=new Jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ii(f,h),_=new A_(-1,1,1,-1,0,1);let g=null,S=null,y=!1,T,w=null,x=[],v=!1;this.setSize=function(b,P){l.setSize(b,P),c.setSize(b,P);for(let L=0;L<x.length;L++){const D=x[L];D.setSize&&D.setSize(b,P)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;const P=l.width,L=l.height;for(let D=0;D<x.length;D++){const U=x[D];U.setSize&&U.setSize(P,L)}},this.begin=function(b,P){if(y||b.toneMapping===Li&&x.length===0)return!1;if(w=P,P!==null){const L=P.width,D=P.height;(l.width!==L||l.height!==D)&&this.setSize(L,D)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Li,!0},this.hasRenderPass=function(){return v},this.end=function(b,P){b.toneMapping=T,y=!0;let L=l,D=c;for(let U=0;U<x.length;U++){const O=x[U];if(O.enabled!==!1&&(O.render(b,D,L,P),O.needsSwap!==!1)){const W=L;L=D,D=W}}if(g!==b.outputColorSpace||S!==b.toneMapping){g=b.outputColorSpace,S=b.toneMapping,h.defines={},Tt.getTransfer(g)===Ut&&(h.defines.SRGB_TRANSFER="");const U=iT[S];U&&(h.defines[U]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(w),b.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const R_=new Dn,Dd=new lo(1,1),b_=new p_,P_=new Cy,L_=new y_,xg=[],Sg=[],yg=new Float32Array(16),Mg=new Float32Array(9),Eg=new Float32Array(4);function aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=xg[o];if(l===void 0&&(l=new Float32Array(o),xg[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function _u(s,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function sT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function aT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function uT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Eg.set(r),s.uniformMatrix2fv(this.addr,!1,Eg),on(t,r)}}function cT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Mg.set(r),s.uniformMatrix3fv(this.addr,!1,Mg),on(t,r)}}function fT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;yg.set(r),s.uniformMatrix4fv(this.addr,!1,yg),on(t,r)}}function dT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function pT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function mT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function gT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _T(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function xT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function ST(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Dd.compareFunction=t.isReversedDepthBuffer()?jd:Xd,l=Dd):l=R_,t.setTexture2D(e||l,o)}function yT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||P_,o)}function MT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||L_,o)}function ET(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||b_,o)}function TT(s){switch(s){case 5126:return sT;case 35664:return aT;case 35665:return oT;case 35666:return lT;case 35674:return uT;case 35675:return cT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function wT(s,e){s.uniform1fv(this.addr,e)}function AT(s,e){const t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function CT(s,e){const t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function RT(s,e){const t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function bT(s,e){const t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function PT(s,e){const t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function LT(s,e){const t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function NT(s,e){s.uniform1iv(this.addr,e)}function DT(s,e){s.uniform2iv(this.addr,e)}function IT(s,e){s.uniform3iv(this.addr,e)}function UT(s,e){s.uniform4iv(this.addr,e)}function FT(s,e){s.uniform1uiv(this.addr,e)}function OT(s,e){s.uniform2uiv(this.addr,e)}function BT(s,e){s.uniform3uiv(this.addr,e)}function kT(s,e){s.uniform4uiv(this.addr,e)}function zT(s,e,t){const r=this.cache,o=e.length,l=_u(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Dd:c=R_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function VT(s,e,t){const r=this.cache,o=e.length,l=_u(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||P_,l[c])}function HT(s,e,t){const r=this.cache,o=e.length,l=_u(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||L_,l[c])}function GT(s,e,t){const r=this.cache,o=e.length,l=_u(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||b_,l[c])}function WT(s){switch(s){case 5126:return wT;case 35664:return AT;case 35665:return CT;case 35666:return RT;case 35674:return bT;case 35675:return PT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return UT;case 5125:return FT;case 36294:return OT;case 36295:return BT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class XT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=TT(t.type)}}class jT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WT(t.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Df=/(\w+)(\])?(\[|\.)?/g;function Tg(s,e){s.seq.push(e),s.map[e.id]=e}function YT(s,e,t){const r=s.name,o=r.length;for(Df.lastIndex=0;;){const l=Df.exec(r),c=Df.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){Tg(t,p===void 0?new XT(f,s,e):new jT(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new qT(f),Tg(t,g)),t=g}}}class iu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);YT(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function wg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $T=37297;let KT=0;function ZT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Ag=new ct;function QT(s){Tt._getMatrix(Ag,Tt.workingColorSpace,s);const e=`mat3( ${Ag.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case su:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+ZT(s.getShaderSource(e),f)}else return l}function JT(s,e){const t=QT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ew={[Qg]:"Linear",[Jg]:"Reinhard",[e_]:"Cineon",[t_]:"ACESFilmic",[i_]:"AgX",[r_]:"Neutral",[n_]:"Custom"};function tw(s,e){const t=ew[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $l=new Q;function nw(){Tt.getLuminanceCoefficients($l);const s=$l.x.toFixed(4),e=$l.y.toFixed(4),t=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function rw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function sw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function no(s){return s!==""}function Rg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(aw,lw)}const ow=new Map;function lw(s,e){let t=dt[e];if(t===void 0){const r=ow.get(e);if(r!==void 0)t=dt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Id(t)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(s){return s.replace(uw,cw)}function cw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Lg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const fw={[Zl]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function dw(s){return fw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hw={[cs]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function pw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":hw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const mw={[ea]:"ENVMAP_MODE_REFRACTION"};function gw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _w={[Zg]:"ENVMAP_BLENDING_MULTIPLY",[oy]:"ENVMAP_BLENDING_MIX",[ly]:"ENVMAP_BLENDING_ADD"};function vw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_w[s.combine]||"ENVMAP_BLENDING_NONE"}function xw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Sw(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=dw(t),p=pw(t),_=gw(t),g=vw(t),S=xw(t),y=iw(t),T=rw(l),w=o.createProgram();let x,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(no).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(no).join(`
`),v.length>0&&(v+=`
`)):(x=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),v=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?dt.tonemapping_pars_fragment:"",t.toneMapping!==Li?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,JT("linearToOutputTexel",t.outputColorSpace),nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),c=Id(c),c=Rg(c,t),c=bg(c,t),f=Id(f),f=Rg(f,t),f=bg(f,t),c=Pg(c),f=Pg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=b+x+c,L=b+v+f,D=wg(o,o.VERTEX_SHADER,P),U=wg(o,o.FRAGMENT_SHADER,L);o.attachShader(w,D),o.attachShader(w,U),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(z){if(s.debug.checkShaderErrors){const te=o.getProgramInfoLog(w)||"",ee=o.getShaderInfoLog(D)||"",ce=o.getShaderInfoLog(U)||"",ue=te.trim(),oe=ee.trim(),Y=ce.trim();let q=!0,he=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,D,U);else{const se=Cg(o,D,"vertex"),F=Cg(o,U,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+se+`
`+F)}else ue!==""?at("WebGLProgram: Program Info Log:",ue):(oe===""||Y==="")&&(he=!1);he&&(z.diagnostics={runnable:q,programLog:ue,vertexShader:{log:oe,prefix:x},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(D),o.deleteShader(U),W=new iu(o,w),A=sw(o,w)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,$T)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=U,this}let yw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Ew(e),t.set(e,r)),r}}class Ew{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}}function Tw(s,e,t,r,o,l,c){const f=new m_,h=new Mw,p=new Set,_=[],g=new Map,S=o.logarithmicDepthBuffer;let y=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function x(A,R,z,te,ee){const ce=te.fog,ue=ee.geometry,oe=A.isMeshStandardMaterial?te.environment:null,Y=(A.isMeshStandardMaterial?t:e).get(A.envMap||oe),q=Y&&Y.mapping===pu?Y.image.height:null,he=T[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,F=se!==void 0?se.length:0;let K=0;ue.morphAttributes.position!==void 0&&(K=1),ue.morphAttributes.normal!==void 0&&(K=2),ue.morphAttributes.color!==void 0&&(K=3);let be,Ye,Ze,ie;if(he){const yt=Ri[he];be=yt.vertexShader,Ye=yt.fragmentShader}else be=A.vertexShader,Ye=A.fragmentShader,h.update(A),Ze=h.getVertexShaderID(A),ie=h.getFragmentShaderID(A);const fe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,mt=!!A.map,Kt=!!A.matcap,ht=!!Y,xt=!!A.aoMap,Nt=!!A.lightMap,ut=!!A.bumpMap,Ht=!!A.normalMap,k=!!A.displacementMap,Gt=!!A.emissiveMap,gt=!!A.metalnessMap,St=!!A.roughnessMap,Xe=A.anisotropy>0,N=A.clearcoat>0,M=A.dispersion>0,G=A.iridescence>0,de=A.sheen>0,me=A.transmission>0,le=Xe&&!!A.anisotropyMap,$e=N&&!!A.clearcoatMap,Te=N&&!!A.clearcoatNormalMap,ze=N&&!!A.clearcoatRoughnessMap,it=G&&!!A.iridescenceMap,Se=G&&!!A.iridescenceThicknessMap,Pe=de&&!!A.sheenColorMap,Ge=de&&!!A.sheenRoughnessMap,je=!!A.specularMap,Ae=!!A.specularColorMap,lt=!!A.specularIntensityMap,V=me&&!!A.transmissionMap,Ne=me&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,ve=A.alphaTest>0,pe=!!A.alphaHash,Ce=!!A.extensions;let rt=Li;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=s.toneMapping);const It={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:be,fragmentShader:Ye,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:ie,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&ee._colorsTexture!==null,instancing:ke,instancingColor:ke&&ee.instanceColor!==null,instancingMorph:ke&&ee.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:na,alphaToCoverage:!!A.alphaToCoverage,map:mt,matcap:Kt,envMap:ht,envMapMode:ht&&Y.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:Nt,bumpMap:ut,normalMap:Ht,displacementMap:k,emissiveMap:Gt,normalMapObjectSpace:Ht&&A.normalMapType===dy,normalMapTangentSpace:Ht&&A.normalMapType===fy,metalnessMap:gt,roughnessMap:St,anisotropy:Xe,anisotropyMap:le,clearcoat:N,clearcoatMap:$e,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,dispersion:M,iridescence:G,iridescenceMap:it,iridescenceThicknessMap:Se,sheen:de,sheenColorMap:Pe,sheenRoughnessMap:Ge,specularMap:je,specularColorMap:Ae,specularIntensityMap:lt,transmission:me,transmissionMap:V,thicknessMap:Ne,gradientMap:Me,opaque:A.transparent===!1&&A.blending===Zs&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:pe,combine:A.combine,mapUv:mt&&w(A.map.channel),aoMapUv:xt&&w(A.aoMap.channel),lightMapUv:Nt&&w(A.lightMap.channel),bumpMapUv:ut&&w(A.bumpMap.channel),normalMapUv:Ht&&w(A.normalMap.channel),displacementMapUv:k&&w(A.displacementMap.channel),emissiveMapUv:Gt&&w(A.emissiveMap.channel),metalnessMapUv:gt&&w(A.metalnessMap.channel),roughnessMapUv:St&&w(A.roughnessMap.channel),anisotropyMapUv:le&&w(A.anisotropyMap.channel),clearcoatMapUv:$e&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(A.sheenRoughnessMap.channel),specularMapUv:je&&w(A.specularMap.channel),specularColorMapUv:Ae&&w(A.specularColorMap.channel),specularIntensityMapUv:lt&&w(A.specularIntensityMap.channel),transmissionMapUv:V&&w(A.transmissionMap.channel),thicknessMapUv:Ne&&w(A.thicknessMap.channel),alphaMapUv:De&&w(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Ht||Xe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ue.attributes.uv&&(mt||De),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ye,skinning:ee.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:mt&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Ut,decodeVideoTextureEmissive:Gt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Ut,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$i,flipSided:A.side===Gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(b(R,A),P(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function P(A,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),A.push(f.mask)}function L(A){const R=T[A.type];let z;if(R){const te=Ri[R];z=zy.clone(te.uniforms)}else z=A.uniforms;return z}function D(A,R){let z=g.get(R);return z!==void 0?++z.usedTimes:(z=new Sw(s,R,A,l),_.push(z),g.set(R,z)),z}function U(A){if(--A.usedTimes===0){const R=_.indexOf(A);_[R]=_[_.length-1],_.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){h.remove(A)}function W(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:L,acquireProgram:D,releaseProgram:U,releaseShaderCache:O,programs:_,dispose:W}}function ww(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Aw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g,S,y,T,w,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:T,renderOrder:g.renderOrder,z:w,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=x),e++,v}function f(g,S,y,T,w,x){const v=c(g,S,y,T,w,x);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):t.push(v)}function h(g,S,y,T,w,x){const v=c(g,S,y,T,w,x);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function p(g,S){t.length>1&&t.sort(g||Aw),r.length>1&&r.sort(S||Ng),o.length>1&&o.sort(S||Ng)}function _(){for(let g=e,S=s.length;g<S;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:_,sort:p}}function Cw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Dg,s.set(r,[c])):o>=l.length?(c=new Dg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Rt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Pw=0;function Lw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Nw(s){const e=new Rw,t=bw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const o=new Q,l=new $t,c=new $t;function f(p){let _=0,g=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,T=0,w=0,x=0,v=0,b=0,P=0,L=0,D=0,U=0,O=0;p.sort(Lw);for(let A=0,R=p.length;A<R;A++){const z=p[A],te=z.color,ee=z.intensity,ce=z.distance;let ue=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ta?ue=z.shadow.map.texture:ue=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=te.r*ee,g+=te.g*ee,S+=te.b*ee;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],ee);O++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,q=t.get(z);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=z.shadow.matrix,b++}r.directional[y]=oe,y++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(te).multiplyScalar(ee),oe.distance=ce,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[w]=oe;const Y=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,Y.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[w]=Y.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.spotShadow[w]=q,r.spotShadowMap[w]=ue,L++}w++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(te).multiplyScalar(ee),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=oe,x++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const Y=z.shadow,q=t.get(z);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=z.shadow.matrix,P++}r.point[T]=oe,T++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(ee),oe.groundColor.copy(z.groundColor).multiplyScalar(ee),r.hemi[v]=oe,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==y||W.pointLength!==T||W.spotLength!==w||W.rectAreaLength!==x||W.hemiLength!==v||W.numDirectionalShadows!==b||W.numPointShadows!==P||W.numSpotShadows!==L||W.numSpotMaps!==D||W.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=x,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+D-U,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,W.directionalLength=y,W.pointLength=T,W.spotLength=w,W.rectAreaLength=x,W.hemiLength=v,W.numDirectionalShadows=b,W.numPointShadows=P,W.numSpotShadows=L,W.numSpotMaps=D,W.numLightProbes=O,r.version=Pw++)}function h(p,_){let g=0,S=0,y=0,T=0,w=0;const x=_.matrixWorldInverse;for(let v=0,b=p.length;v<b;v++){const P=p[v];if(P.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),g++}else if(P.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),y++}else if(P.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),T++}else if(P.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(x),w++}}}return{setup:f,setupView:h,state:r}}function Ig(s){const e=new Nw(s),t=[],r=[];function o(_){p.camera=_,t.length=0,r.length=0}function l(_){t.push(_)}function c(_){r.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Dw(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Ig(s),e.set(o,[f])):l>=c.length?(f=new Ig(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
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
}`,Fw=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Ow=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Ug=new $t,Ja=new Q,If=new Q;function Bw(s,e,t){let r=new E_;const o=new Lt,l=new Lt,c=new Qt,f=new eM,h=new tM,p={},_=t.maxTextureSize,g={[Dr]:Gn,[Gn]:Dr,[$i]:$i},S=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Iw,fragmentShader:Uw}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new Un;T.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ii(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let v=this.type;this.render=function(U,O,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;U.type===HS&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=Zl);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),te=s.state;te.setBlending(Zi),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ee=v!==this.type;ee&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(ue=>ue.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,ue=U.length;ce<ue;ce++){const oe=U[ce],Y=oe.shadow;if(Y===void 0){at("WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const q=Y.getFrameExtents();if(o.multiply(q),l.copy(Y.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/q.x),o.x=l.x*q.x,Y.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/q.y),o.y=l.y*q.y,Y.mapSize.y=l.y)),Y.map===null||ee===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===to){if(oe.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ni(o.x,o.y,{format:ta,type:Ji,minFilter:wn,magFilter:wn,generateMipmaps:!1}),Y.map.texture.name=oe.name+".shadowMap",Y.map.depthTexture=new lo(o.x,o.y,bi),Y.map.depthTexture.name=oe.name+".shadowMapDepth",Y.map.depthTexture.format=er,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=_n,Y.map.depthTexture.magFilter=_n}else{oe.isPointLight?(Y.map=new M_(o.x),Y.map.depthTexture=new Qy(o.x,Di)):(Y.map=new Ni(o.x,o.y),Y.map.depthTexture=new lo(o.x,o.y,Di)),Y.map.depthTexture.name=oe.name+".shadowMap",Y.map.depthTexture.format=er;const se=s.state.buffers.depth.getReversed();this.type===Zl?(Y.map.depthTexture.compareFunction=se?jd:Xd,Y.map.depthTexture.minFilter=wn,Y.map.depthTexture.magFilter=wn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=_n,Y.map.depthTexture.magFilter=_n)}Y.camera.updateProjectionMatrix()}const he=Y.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<he;se++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,se),s.clear();else{se===0&&(s.setRenderTarget(Y.map),s.clear());const F=Y.getViewport(se);c.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),te.viewport(c)}if(oe.isPointLight){const F=Y.camera,K=Y.matrix,be=oe.distance||F.far;be!==F.far&&(F.far=be,F.updateProjectionMatrix()),Ja.setFromMatrixPosition(oe.matrixWorld),F.position.copy(Ja),If.copy(F.position),If.add(Fw[se]),F.up.copy(Ow[se]),F.lookAt(If),F.updateMatrixWorld(),K.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Ug.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Ug,F.coordinateSystem,F.reversedDepth)}else Y.updateMatrices(oe);r=Y.getFrustum(),L(O,W,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===to&&b(Y,W),Y.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(A,R,z)};function b(U,O){const W=e.update(w);S.defines.VSM_SAMPLES!==U.blurSamples&&(S.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ni(o.x,o.y,{format:ta,type:Ji})),S.uniforms.shadow_pass.value=U.map.depthTexture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,W,S,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,W,y,w,null)}function P(U,O,W,A){let R=null;const z=W.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)R=z;else if(R=W.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const te=R.uuid,ee=O.uuid;let ce=p[te];ce===void 0&&(ce={},p[te]=ce);let ue=ce[ee];ue===void 0&&(ue=R.clone(),ce[ee]=ue,O.addEventListener("dispose",D)),R=ue}if(R.visible=O.visible,R.wireframe=O.wireframe,A===to?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=s.properties.get(R);te.light=W}return R}function L(U,O,W,A,R){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===to)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,U.matrixWorld);const ee=e.update(U),ce=U.material;if(Array.isArray(ce)){const ue=ee.groups;for(let oe=0,Y=ue.length;oe<Y;oe++){const q=ue[oe],he=ce[q.materialIndex];if(he&&he.visible){const se=P(U,he,A,R);U.onBeforeShadow(s,U,O,W,ee,se,q),s.renderBufferDirect(W,null,ee,se,U,q),U.onAfterShadow(s,U,O,W,ee,se,q)}}}else if(ce.visible){const ue=P(U,ce,A,R);U.onBeforeShadow(s,U,O,W,ee,ue,null),s.renderBufferDirect(W,null,ee,ue,U,null),U.onAfterShadow(s,U,O,W,ee,ue,null)}}const te=U.children;for(let ee=0,ce=te.length;ee<ce;ee++)L(te[ee],O,W,A,R)}function D(U){U.target.removeEventListener("dispose",D);for(const W in p){const A=p[W],R=U.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const kw={[Hf]:Gf,[Wf]:qf,[Xf]:Yf,[Js]:jf,[Gf]:Hf,[qf]:Wf,[Yf]:Xf,[jf]:Js};function zw(s,e){function t(){let V=!1;const Ne=new Qt;let Me=null;const De=new Qt(0,0,0,0);return{setMask:function(ve){Me!==ve&&!V&&(s.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){V=ve},setClear:function(ve,pe,Ce,rt,It){It===!0&&(ve*=rt,pe*=rt,Ce*=rt),Ne.set(ve,pe,Ce,rt),De.equals(Ne)===!1&&(s.clearColor(ve,pe,Ce,rt),De.copy(Ne))},reset:function(){V=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let V=!1,Ne=!1,Me=null,De=null,ve=null;return{setReversed:function(pe){if(Ne!==pe){const Ce=e.get("EXT_clip_control");pe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ne=pe;const rt=ve;ve=null,this.setClear(rt)}},getReversed:function(){return Ne},setTest:function(pe){pe?fe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!V&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Ne&&(pe=kw[pe]),De!==pe){switch(pe){case Hf:s.depthFunc(s.NEVER);break;case Gf:s.depthFunc(s.ALWAYS);break;case Wf:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Xf:s.depthFunc(s.EQUAL);break;case jf:s.depthFunc(s.GEQUAL);break;case qf:s.depthFunc(s.GREATER);break;case Yf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ve!==pe&&(Ne&&(pe=1-pe),s.clearDepth(pe),ve=pe)},reset:function(){V=!1,Me=null,De=null,ve=null,Ne=!1}}}function o(){let V=!1,Ne=null,Me=null,De=null,ve=null,pe=null,Ce=null,rt=null,It=null;return{setTest:function(yt){V||(yt?fe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(yt){Ne!==yt&&!V&&(s.stencilMask(yt),Ne=yt)},setFunc:function(yt,Wn,Cn){(Me!==yt||De!==Wn||ve!==Cn)&&(s.stencilFunc(yt,Wn,Cn),Me=yt,De=Wn,ve=Cn)},setOp:function(yt,Wn,Cn){(pe!==yt||Ce!==Wn||rt!==Cn)&&(s.stencilOp(yt,Wn,Cn),pe=yt,Ce=Wn,rt=Cn)},setLocked:function(yt){V=yt},setClear:function(yt){It!==yt&&(s.clearStencil(yt),It=yt)},reset:function(){V=!1,Ne=null,Me=null,De=null,ve=null,pe=null,Ce=null,rt=null,It=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],T=null,w=!1,x=null,v=null,b=null,P=null,L=null,D=null,U=null,O=new Rt(0,0,0),W=0,A=!1,R=null,z=null,te=null,ee=null,ce=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,Y=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),oe=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),oe=Y>=2);let he=null,se={};const F=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),be=new Qt().fromArray(F),Ye=new Qt().fromArray(K);function Ze(V,Ne,Me,De){const ve=new Uint8Array(4),pe=s.createTexture();s.bindTexture(V,pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Me;Ce++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Ne+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return pe}const ie={};ie[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),c.setFunc(Js),ut(!1),Ht(Im),fe(s.CULL_FACE),xt(Zi);function fe(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function ye(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function ke(V,Ne){return g[V]!==Ne?(s.bindFramebuffer(V,Ne),g[V]=Ne,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ue(V,Ne){let Me=y,De=!1;if(V){Me=S.get(Ne),Me===void 0&&(Me=[],S.set(Ne,Me));const ve=V.textures;if(Me.length!==ve.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ce=ve.length;pe<Ce;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=ve.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function mt(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const Kt={[as]:s.FUNC_ADD,[WS]:s.FUNC_SUBTRACT,[XS]:s.FUNC_REVERSE_SUBTRACT};Kt[jS]=s.MIN,Kt[qS]=s.MAX;const ht={[YS]:s.ZERO,[$S]:s.ONE,[KS]:s.SRC_COLOR,[zf]:s.SRC_ALPHA,[ny]:s.SRC_ALPHA_SATURATE,[ey]:s.DST_COLOR,[QS]:s.DST_ALPHA,[ZS]:s.ONE_MINUS_SRC_COLOR,[Vf]:s.ONE_MINUS_SRC_ALPHA,[ty]:s.ONE_MINUS_DST_COLOR,[JS]:s.ONE_MINUS_DST_ALPHA,[iy]:s.CONSTANT_COLOR,[ry]:s.ONE_MINUS_CONSTANT_COLOR,[sy]:s.CONSTANT_ALPHA,[ay]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(V,Ne,Me,De,ve,pe,Ce,rt,It,yt){if(V===Zi){w===!0&&(ye(s.BLEND),w=!1);return}if(w===!1&&(fe(s.BLEND),w=!0),V!==GS){if(V!==x||yt!==A){if((v!==as||L!==as)&&(s.blendEquation(s.FUNC_ADD),v=as,L=as),yt)switch(V){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Um:s.blendFunc(s.ONE,s.ONE);break;case Fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Om:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Um:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}b=null,P=null,D=null,U=null,O.set(0,0,0),W=0,x=V,A=yt}return}ve=ve||Ne,pe=pe||Me,Ce=Ce||De,(Ne!==v||ve!==L)&&(s.blendEquationSeparate(Kt[Ne],Kt[ve]),v=Ne,L=ve),(Me!==b||De!==P||pe!==D||Ce!==U)&&(s.blendFuncSeparate(ht[Me],ht[De],ht[pe],ht[Ce]),b=Me,P=De,D=pe,U=Ce),(rt.equals(O)===!1||It!==W)&&(s.blendColor(rt.r,rt.g,rt.b,It),O.copy(rt),W=It),x=V,A=!1}function Nt(V,Ne){V.side===$i?ye(s.CULL_FACE):fe(s.CULL_FACE);let Me=V.side===Gn;Ne&&(Me=!Me),ut(Me),V.blending===Zs&&V.transparent===!1?xt(Zi):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const De=V.stencilWrite;f.setTest(De),De&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function Ht(V){V!==zS?(fe(s.CULL_FACE),V!==z&&(V===Im?s.cullFace(s.BACK):V===VS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),z=V}function k(V){V!==te&&(oe&&s.lineWidth(V),te=V)}function Gt(V,Ne,Me){V?(fe(s.POLYGON_OFFSET_FILL),(ee!==Ne||ce!==Me)&&(s.polygonOffset(Ne,Me),ee=Ne,ce=Me)):ye(s.POLYGON_OFFSET_FILL)}function gt(V){V?fe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function St(V){V===void 0&&(V=s.TEXTURE0+ue-1),he!==V&&(s.activeTexture(V),he=V)}function Xe(V,Ne,Me){Me===void 0&&(he===null?Me=s.TEXTURE0+ue-1:Me=he);let De=se[Me];De===void 0&&(De={type:void 0,texture:void 0},se[Me]=De),(De.type!==V||De.texture!==Ne)&&(he!==Me&&(s.activeTexture(Me),he=Me),s.bindTexture(V,Ne||ie[V]),De.type=V,De.texture=Ne)}function N(){const V=se[he];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function de(){try{s.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function me(){try{s.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Te(){try{s.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ze(){try{s.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function it(){try{s.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Se(){try{s.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Pe(V){be.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function Ge(V){Ye.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ye.copy(V))}function je(V,Ne){let Me=p.get(Ne);Me===void 0&&(Me=new WeakMap,p.set(Ne,Me));let De=Me.get(V);De===void 0&&(De=s.getUniformBlockIndex(Ne,V.name),Me.set(V,De))}function Ae(V,Ne){const De=p.get(Ne).get(V);h.get(Ne)!==De&&(s.uniformBlockBinding(Ne,De,V.__bindingPointIndex),h.set(Ne,De))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},he=null,se={},g={},S=new WeakMap,y=[],T=null,w=!1,x=null,v=null,b=null,P=null,L=null,D=null,U=null,O=new Rt(0,0,0),W=0,A=!1,R=null,z=null,te=null,ee=null,ce=null,be.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:fe,disable:ye,bindFramebuffer:ke,drawBuffers:Ue,useProgram:mt,setBlending:xt,setMaterial:Nt,setFlipSided:ut,setCullFace:Ht,setLineWidth:k,setPolygonOffset:Gt,setScissorTest:gt,activeTexture:St,bindTexture:Xe,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:it,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:ze,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:le,compressedTexSubImage3D:$e,scissor:Pe,viewport:Ge,reset:lt}}function Vw(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,M){return y?new OffscreenCanvas(N,M):ou("canvas")}function w(N,M,G){let de=1;const me=Xe(N);if((me.width>G||me.height>G)&&(de=G/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(de*me.width),$e=Math.floor(de*me.height);g===void 0&&(g=T(le,$e));const Te=M?T(le,$e):g;return Te.width=le,Te.height=$e,Te.getContext("2d").drawImage(N,0,0,le,$e),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+le+"x"+$e+")."),Te}else return"data"in N&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function x(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,M,G,de,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=M;if(M===s.RED&&(G===s.FLOAT&&(le=s.R32F),G===s.HALF_FLOAT&&(le=s.R16F),G===s.UNSIGNED_BYTE&&(le=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.R8UI),G===s.UNSIGNED_SHORT&&(le=s.R16UI),G===s.UNSIGNED_INT&&(le=s.R32UI),G===s.BYTE&&(le=s.R8I),G===s.SHORT&&(le=s.R16I),G===s.INT&&(le=s.R32I)),M===s.RG&&(G===s.FLOAT&&(le=s.RG32F),G===s.HALF_FLOAT&&(le=s.RG16F),G===s.UNSIGNED_BYTE&&(le=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RG8UI),G===s.UNSIGNED_SHORT&&(le=s.RG16UI),G===s.UNSIGNED_INT&&(le=s.RG32UI),G===s.BYTE&&(le=s.RG8I),G===s.SHORT&&(le=s.RG16I),G===s.INT&&(le=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGB8UI),G===s.UNSIGNED_SHORT&&(le=s.RGB16UI),G===s.UNSIGNED_INT&&(le=s.RGB32UI),G===s.BYTE&&(le=s.RGB8I),G===s.SHORT&&(le=s.RGB16I),G===s.INT&&(le=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),G===s.UNSIGNED_INT&&(le=s.RGBA32UI),G===s.BYTE&&(le=s.RGBA8I),G===s.SHORT&&(le=s.RGBA16I),G===s.INT&&(le=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),M===s.RGBA){const $e=me?su:Tt.getTransfer(de);G===s.FLOAT&&(le=s.RGBA32F),G===s.HALF_FLOAT&&(le=s.RGBA16F),G===s.UNSIGNED_BYTE&&(le=$e===Ut?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(N,M){let G;return N?M===null||M===Di||M===ao?G=s.DEPTH24_STENCIL8:M===bi?G=s.DEPTH32F_STENCIL8:M===so&&(G=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===ao?G=s.DEPTH_COMPONENT24:M===bi?G=s.DEPTH_COMPONENT32F:M===so&&(G=s.DEPTH_COMPONENT16),G}function D(N,M){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==_n&&N.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function U(N){const M=N.target;M.removeEventListener("dispose",U),W(M),M.isVideoTexture&&_.delete(M)}function O(N){const M=N.target;M.removeEventListener("dispose",O),R(M)}function W(N){const M=r.get(N);if(M.__webglInit===void 0)return;const G=N.source,de=S.get(G);if(de){const me=de[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(N),Object.keys(de).length===0&&S.delete(G)}r.remove(N)}function A(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const G=N.source,de=S.get(G);delete de[M.__cacheKey],c.memory.textures--}function R(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let me=0;me<M.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[de][me]);else s.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)s.deleteFramebuffer(M.__webglFramebuffer[de]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=N.textures;for(let de=0,me=G.length;de<me;de++){const le=r.get(G[de]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),c.memory.textures--),r.remove(G[de])}r.remove(N)}let z=0;function te(){z=0}function ee(){const N=z;return N>=o.maxTextures&&at("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),z+=1,N}function ce(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function ue(N,M){const G=r.get(N);if(N.isVideoTexture&&gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const de=N.image;if(de===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,N,M);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function oe(N,M){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ie(G,N,M);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Y(N,M){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ie(G,N,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function q(N,M){const G=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){fe(G,N,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const he={[Zf]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Qf]:s.MIRRORED_REPEAT},se={[_n]:s.NEAREST,[uy]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[tf]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},F={[hy]:s.NEVER,[vy]:s.ALWAYS,[py]:s.LESS,[Xd]:s.LEQUAL,[my]:s.EQUAL,[jd]:s.GEQUAL,[gy]:s.GREATER,[_y]:s.NOTEQUAL};function K(N,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===tf||M.magFilter===wl||M.magFilter===ls||M.minFilter===wn||M.minFilter===tf||M.minFilter===wl||M.minFilter===ls)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,he[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,he[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,he[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,se[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==wl&&M.minFilter!==ls||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function be(N,M){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",U));const de=M.source;let me=S.get(de);me===void 0&&(me={},S.set(de,me));const le=ce(M);if(le!==N.__cacheKey){me[le]===void 0&&(me[le]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,G=!0),me[le].usedTimes++;const $e=me[N.__cacheKey];$e!==void 0&&(me[N.__cacheKey].usedTimes--,$e.usedTimes===0&&A(M)),N.__cacheKey=le,N.__webglTexture=me[le].texture}return G}function Ye(N,M,G){return Math.floor(Math.floor(N/G)/M)}function Ze(N,M,G,de){const le=N.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,de,M.data);else{le.sort((Se,Pe)=>Se.start-Pe.start);let $e=0;for(let Se=1;Se<le.length;Se++){const Pe=le[$e],Ge=le[Se],je=Pe.start+Pe.count,Ae=Ye(Ge.start,M.width,4),lt=Ye(Pe.start,M.width,4);Ge.start<=je+1&&Ae===lt&&Ye(Ge.start+Ge.count-1,M.width,4)===Ae?Pe.count=Math.max(Pe.count,Ge.start+Ge.count-Pe.start):(++$e,le[$e]=Ge)}le.length=$e+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Pe=le.length;Se<Pe;Se++){const Ge=le[Se],je=Math.floor(Ge.start/4),Ae=Math.ceil(Ge.count/4),lt=je%M.width,V=Math.floor(je/M.width),Ne=Ae,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,lt,V,Ne,Me,G,de,M.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function ie(N,M,G){let de=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=s.TEXTURE_3D);const me=be(N,M),le=M.source;t.bindTexture(de,N.__webglTexture,s.TEXTURE0+G);const $e=r.get(le);if(le.version!==$e.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const Te=Tt.getPrimaries(Tt.workingColorSpace),ze=M.colorSpace===br?null:Tt.getPrimaries(M.colorSpace),it=M.colorSpace===br||Te===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Se=w(M.image,!1,o.maxTextureSize);Se=St(M,Se);const Pe=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let je=P(M.internalFormat,Pe,Ge,M.colorSpace,M.isVideoTexture);K(de,M);let Ae;const lt=M.mipmaps,V=M.isVideoTexture!==!0,Ne=$e.__version===void 0||me===!0,Me=le.dataReady,De=D(M,Se);if(M.isDepthTexture)je=L(M.format===us,M.type),Ne&&(V?t.texStorage2D(s.TEXTURE_2D,1,je,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Pe,Ge,null));else if(M.isDataTexture)if(lt.length>0){V&&Ne&&t.texStorage2D(s.TEXTURE_2D,De,je,lt[0].width,lt[0].height);for(let ve=0,pe=lt.length;ve<pe;ve++)Ae=lt[ve],V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Pe,Ge,Ae.data):t.texImage2D(s.TEXTURE_2D,ve,je,Ae.width,Ae.height,0,Pe,Ge,Ae.data);M.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(s.TEXTURE_2D,De,je,Se.width,Se.height),Me&&Ze(M,Se,Pe,Ge)):t.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Pe,Ge,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,je,lt[0].width,lt[0].height,Se.depth);for(let ve=0,pe=lt.length;ve<pe;ve++)if(Ae=lt[ve],M.format!==Si)if(Pe!==null)if(V){if(Me)if(M.layerUpdates.size>0){const Ce=dg(Ae.width,Ae.height,M.format,M.type);for(const rt of M.layerUpdates){const It=Ae.data.subarray(rt*Ce/Ae.data.BYTES_PER_ELEMENT,(rt+1)*Ce/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,rt,Ae.width,Ae.height,1,Pe,It)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Pe,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,je,Ae.width,Ae.height,Se.depth,0,Ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,Pe,Ge,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,je,Ae.width,Ae.height,Se.depth,0,Pe,Ge,Ae.data)}else{V&&Ne&&t.texStorage2D(s.TEXTURE_2D,De,je,lt[0].width,lt[0].height);for(let ve=0,pe=lt.length;ve<pe;ve++)Ae=lt[ve],M.format!==Si?Pe!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,je,Ae.width,Ae.height,0,Ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Pe,Ge,Ae.data):t.texImage2D(s.TEXTURE_2D,ve,je,Ae.width,Ae.height,0,Pe,Ge,Ae.data)}else if(M.isDataArrayTexture)if(V){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,je,Se.width,Se.height,Se.depth),Me)if(M.layerUpdates.size>0){const ve=dg(Se.width,Se.height,M.format,M.type);for(const pe of M.layerUpdates){const Ce=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Pe,Ge,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Pe,Ge,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Pe,Ge,Se.data);else if(M.isData3DTexture)V?(Ne&&t.texStorage3D(s.TEXTURE_3D,De,je,Se.width,Se.height,Se.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Pe,Ge,Se.data)):t.texImage3D(s.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Pe,Ge,Se.data);else if(M.isFramebufferTexture){if(Ne)if(V)t.texStorage2D(s.TEXTURE_2D,De,je,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Ce=0;Ce<De;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,je,ve,pe,0,Pe,Ge,null),ve>>=1,pe>>=1}}else if(lt.length>0){if(V&&Ne){const ve=Xe(lt[0]);t.texStorage2D(s.TEXTURE_2D,De,je,ve.width,ve.height)}for(let ve=0,pe=lt.length;ve<pe;ve++)Ae=lt[ve],V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Pe,Ge,Ae):t.texImage2D(s.TEXTURE_2D,ve,je,Pe,Ge,Ae);M.generateMipmaps=!1}else if(V){if(Ne){const ve=Xe(Se);t.texStorage2D(s.TEXTURE_2D,De,je,ve.width,ve.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ge,Se)}else t.texImage2D(s.TEXTURE_2D,0,je,Pe,Ge,Se);x(M)&&v(de),$e.__version=le.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function fe(N,M,G){if(M.image.length!==6)return;const de=be(N,M),me=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+G);const le=r.get(me);if(me.version!==le.__version||de===!0){t.activeTexture(s.TEXTURE0+G);const $e=Tt.getPrimaries(Tt.workingColorSpace),Te=M.colorSpace===br?null:Tt.getPrimaries(M.colorSpace),ze=M.colorSpace===br||$e===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let pe=0;pe<6;pe++)!it&&!Se?Pe[pe]=w(M.image[pe],!0,o.maxCubemapSize):Pe[pe]=Se?M.image[pe].image:M.image[pe],Pe[pe]=St(M,Pe[pe]);const Ge=Pe[0],je=l.convert(M.format,M.colorSpace),Ae=l.convert(M.type),lt=P(M.internalFormat,je,Ae,M.colorSpace),V=M.isVideoTexture!==!0,Ne=le.__version===void 0||de===!0,Me=me.dataReady;let De=D(M,Ge);K(s.TEXTURE_CUBE_MAP,M);let ve;if(it){V&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){ve=Pe[pe].mipmaps;for(let Ce=0;Ce<ve.length;Ce++){const rt=ve[Ce];M.format!==Si?je!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,rt.width,rt.height,je,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,lt,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,rt.width,rt.height,je,Ae,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,lt,rt.width,rt.height,0,je,Ae,rt.data)}}}else{if(ve=M.mipmaps,V&&Ne){ve.length>0&&De++;const pe=Xe(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Pe[pe].width,Pe[pe].height,je,Ae,Pe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Pe[pe].width,Pe[pe].height,0,je,Ae,Pe[pe].data);for(let Ce=0;Ce<ve.length;Ce++){const It=ve[Ce].image[pe].image;V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,It.width,It.height,je,Ae,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,lt,It.width,It.height,0,je,Ae,It.data)}}else{V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je,Ae,Pe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,je,Ae,Pe[pe]);for(let Ce=0;Ce<ve.length;Ce++){const rt=ve[Ce];V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,je,Ae,rt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,lt,je,Ae,rt.image[pe])}}}x(M)&&v(s.TEXTURE_CUBE_MAP),le.__version=me.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ye(N,M,G,de,me,le){const $e=l.convert(G.format,G.colorSpace),Te=l.convert(G.type),ze=P(G.internalFormat,$e,Te,G.colorSpace),it=r.get(M),Se=r.get(G);if(Se.__renderTarget=M,!it.__hasExternalTextures){const Pe=Math.max(1,M.width>>le),Ge=Math.max(1,M.height>>le);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,le,ze,Pe,Ge,M.depth,0,$e,Te,null):t.texImage2D(me,le,ze,Pe,Ge,0,$e,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,Se.__webglTexture,0,k(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,Se.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(N,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const de=M.depthTexture,me=de&&de.isDepthTexture?de.type:null,le=L(M.stencilBuffer,me),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),le,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),le,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,le,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,N)}else{const de=M.textures;for(let me=0;me<de.length;me++){const le=de[me],$e=l.convert(le.format,le.colorSpace),Te=l.convert(le.type),ze=P(le.internalFormat,$e,Te,le.colorSpace);Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),ze,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),ze,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ze,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(N,M,G){const de=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),K(s.TEXTURE_CUBE_MAP,M.depthTexture);const it=l.convert(M.depthTexture.format),Se=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===er?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===us&&(Pe=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Pe,M.width,M.height,0,it,Se,null)}}else ue(M.depthTexture,0);const le=me.__webglTexture,$e=k(M),Te=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ze=M.depthTexture.format===us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,le,0);else if(M.depthTexture.format===us)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,le,0);else throw new Error("Unknown depthTexture format")}function mt(N){const M=r.get(N),G=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const de=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=de}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)Ue(M.__webglFramebuffer[de],N,de);else{const de=N.texture.mipmaps;de&&de.length>0?Ue(M.__webglFramebuffer[0],N,0):Ue(M.__webglFramebuffer,N,0)}else if(G){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=s.createRenderbuffer(),ke(M.__webglDepthbuffer[de],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}else{const de=N.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ke(M.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(N,M,G){const de=r.get(N);M!==void 0&&ye(de.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&mt(N)}function ht(N){const M=N.texture,G=r.get(N),de=r.get(M);N.addEventListener("dispose",O);const me=N.textures,le=N.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=M.version,c.memory.textures++),le){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let ze=0;ze<M.mipmaps.length;ze++)G.__webglFramebuffer[Te][ze]=s.createFramebuffer()}else G.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)G.__webglFramebuffer[Te]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if($e)for(let Te=0,ze=me.length;Te<ze;Te++){const it=r.get(me[Te]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),c.memory.textures++)}if(N.samples>0&&Gt(N)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const ze=me[Te];G.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const it=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),Pe=P(ze.internalFormat,it,Se,ze.colorSpace,N.isXRRenderTarget===!0),Ge=k(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Pe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),K(s.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)ye(G.__webglFramebuffer[Te][ze],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze);else ye(G.__webglFramebuffer[Te],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Te=0,ze=me.length;Te<ze;Te++){const it=me[Te],Se=r.get(it);let Pe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Se.__webglTexture),K(Pe,it),ye(G.__webglFramebuffer,N,it,s.COLOR_ATTACHMENT0+Te,Pe,0),x(it)&&v(Pe)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),K(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)ye(G.__webglFramebuffer[ze],N,M,s.COLOR_ATTACHMENT0,Te,ze);else ye(G.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,Te,0);x(M)&&v(Te),t.unbindTexture()}N.depthBuffer&&mt(N)}function xt(N){const M=N.textures;for(let G=0,de=M.length;G<de;G++){const me=M[G];if(x(me)){const le=b(N),$e=r.get(me).__webglTexture;t.bindTexture(le,$e),v(le),t.unbindTexture()}}}const Nt=[],ut=[];function Ht(N){if(N.samples>0){if(Gt(N)===!1){const M=N.textures,G=N.width,de=N.height;let me=s.COLOR_BUFFER_BIT;const le=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(N),Te=M.length>1;if(Te)for(let it=0;it<M.length;it++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=N.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let it=0;it<M.length;it++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Se=r.get(M[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,G,de,0,0,G,de,me,s.NEAREST),h===!0&&(Nt.length=0,ut.length=0,Nt.push(s.COLOR_ATTACHMENT0+it),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(le),ut.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let it=0;it<M.length;it++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Se=r.get(M[it]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function k(N){return Math.min(o.maxSamples,N.samples)}function Gt(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(N){const M=c.render.frame;_.get(N)!==M&&(_.set(N,M),N.update())}function St(N,M){const G=N.colorSpace,de=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==na&&G!==br&&(Tt.getTransfer(G)===Ut?(de!==Si||me!==oi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),M}function Xe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=oe,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Kt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hw(s,e){function t(r,o=br){let l;const c=Tt.getTransfer(o);if(r===oi)return s.UNSIGNED_BYTE;if(r===zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===l_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===u_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===a_)return s.BYTE;if(r===o_)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===kd)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===Ji)return s.HALF_FLOAT;if(r===c_)return s.ALPHA;if(r===f_)return s.RGB;if(r===Si)return s.RGBA;if(r===er)return s.DEPTH_COMPONENT;if(r===us)return s.DEPTH_STENCIL;if(r===d_)return s.RED;if(r===Hd)return s.RED_INTEGER;if(r===ta)return s.RG;if(r===Gd)return s.RG_INTEGER;if(r===Wd)return s.RGBA_INTEGER;if(r===Ql||r===Jl||r===eu||r===tu)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jf||r===ed||r===td||r===nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Jf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===td)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id||r===rd||r===sd||r===ad||r===od||r===ld||r===ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===id||r===rd)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===sd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===ad)return l.COMPRESSED_R11_EAC;if(r===od)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ld)return l.COMPRESSED_RG11_EAC;if(r===ud)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===cd||r===fd||r===dd||r===hd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===cd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===md)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_d)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Md)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ed)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Td||r===wd||r===Ad)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Td)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ad)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cd||r===Rd||r===bd||r===Pd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Cd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Rd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ao?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ww=`
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

}`;class Xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new w_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ui({vertexShader:Gw,fragmentShader:Ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new mu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jw extends ra{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,_=null,g=null,S=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",x=new Xw,v={},b=t.getContextAttributes();let P=null,L=null;const D=[],U=[],O=new Lt;let W=null;const A=new ai;A.viewport=new Qt;const R=new ai;R.viewport=new Qt;const z=[A,R],te=new nM;let ee=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=D[ie];return fe===void 0&&(fe=new wf,D[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=D[ie];return fe===void 0&&(fe=new wf,D[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=D[ie];return fe===void 0&&(fe=new wf,D[ie]=fe),fe.getHandSpace()};function ue(ie){const fe=U.indexOf(ie.inputSource);if(fe===-1)return;const ye=D[fe];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,p||c),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function oe(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",Y);for(let ie=0;ie<D.length;ie++){const fe=U[ie];fe!==null&&(U[ie]=null,D[ie].disconnect(fe))}ee=null,ce=null,x.reset();for(const ie in v)delete v[ie];e.setRenderTarget(P),y=null,S=null,g=null,o=null,L=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Ue=null;b.depth&&(Ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?us:er,ke=b.stencil?ao:Di);const mt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};g=this.getBinding(),S=g.createProjectionLayer(mt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Ni(S.textureWidth,S.textureHeight,{format:Si,type:oi,depthTexture:new lo(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ni(y.framebufferWidth,y.framebufferHeight,{format:Si,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(ie){for(let fe=0;fe<ie.removed.length;fe++){const ye=ie.removed[fe],ke=U.indexOf(ye);ke>=0&&(U[ke]=null,D[ke].disconnect(ye))}for(let fe=0;fe<ie.added.length;fe++){const ye=ie.added[fe];let ke=U.indexOf(ye);if(ke===-1){for(let mt=0;mt<D.length;mt++)if(mt>=U.length){U.push(ye),ke=mt;break}else if(U[mt]===null){U[mt]=ye,ke=mt;break}if(ke===-1)break}const Ue=D[ke];Ue&&Ue.connect(ye)}}const q=new Q,he=new Q;function se(ie,fe,ye){q.setFromMatrixPosition(fe.matrixWorld),he.setFromMatrixPosition(ye.matrixWorld);const ke=q.distanceTo(he),Ue=fe.projectionMatrix.elements,mt=ye.projectionMatrix.elements,Kt=Ue[14]/(Ue[10]-1),ht=Ue[14]/(Ue[10]+1),xt=(Ue[9]+1)/Ue[5],Nt=(Ue[9]-1)/Ue[5],ut=(Ue[8]-1)/Ue[0],Ht=(mt[8]+1)/mt[0],k=Kt*ut,Gt=Kt*Ht,gt=ke/(-ut+Ht),St=gt*-ut;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(St),ie.translateZ(gt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ue[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=Kt+gt,N=ht+gt,M=k-St,G=Gt+(ke-St),de=xt*ht/N*Xe,me=Nt*ht/N*Xe;ie.projectionMatrix.makePerspective(M,G,de,me,Xe,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function F(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let fe=ie.near,ye=ie.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),te.near=R.near=A.near=fe,te.far=R.far=A.far=ye,(ee!==te.near||ce!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),ee=te.near,ce=te.far),te.layers.mask=ie.layers.mask|6,A.layers.mask=te.layers.mask&3,R.layers.mask=te.layers.mask&5;const ke=ie.parent,Ue=te.cameras;F(te,ke);for(let mt=0;mt<Ue.length;mt++)F(Ue[mt],ke);Ue.length===2?se(te,A,R):te.projectionMatrix.copy(A.projectionMatrix),K(ie,te,ke)};function K(ie,fe,ye){ye===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ld*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(S===null&&y===null))return h},this.setFoveation=function(ie){h=ie,S!==null&&(S.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(te)},this.getCameraTexture=function(ie){return v[ie]};let be=null;function Ye(ie,fe){if(_=fe.getViewerPose(p||c),T=fe,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let ke=!1;ye.length!==te.cameras.length&&(te.cameras.length=0,ke=!0);for(let ht=0;ht<ye.length;ht++){const xt=ye[ht];let Nt=null;if(y!==null)Nt=y.getViewport(xt);else{const Ht=g.getViewSubImage(S,xt);Nt=Ht.viewport,ht===0&&(e.setRenderTargetTextures(L,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(L))}let ut=z[ht];ut===void 0&&(ut=new ai,ut.layers.enable(ht),ut.viewport=new Qt,z[ht]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ht===0&&(te.matrix.copy(ut.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),ke===!0&&te.cameras.push(ut)}const Ue=o.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const ht=g.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,o.renderState)}if(Ue&&Ue.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let ht=0;ht<ye.length;ht++){const xt=ye[ht].camera;if(xt){let Nt=v[xt];Nt||(Nt=new w_,v[xt]=Nt);const ut=g.getCameraImage(xt);Nt.sourceTexture=ut}}}}for(let ye=0;ye<D.length;ye++){const ke=U[ye],Ue=D[ye];ke!==null&&Ue!==void 0&&Ue.update(ke,fe,p||c)}be&&be(ie,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const Ze=new C_;Ze.setAnimationLoop(Ye),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}}const rs=new tr,qw=new $t;function Yw(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,x_(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,b,P,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),S(x,v),v.isMeshPhysicalMaterial&&y(x,v,L)):v.isMeshMatcapMaterial?(l(x,v),T(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?h(x,v,b,P):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const b=e.get(v),P=b.envMap,L=b.envMapRotation;P&&(x.envMap.value=P,rs.copy(L),rs.x*=-1,rs.y*=-1,rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),x.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(rs)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,b,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*b,x.scale.value=P*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,b){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const b=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $w(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,P){const L=P.program;r.uniformBlockBinding(b,L)}function p(b,P){let L=o[b.id];L===void 0&&(T(b),L=_(b),o[b.id]=L,b.addEventListener("dispose",x));const D=P.program;r.updateUBOMapping(b,D);const U=e.render.frame;l[b.id]!==U&&(S(b),l[b.id]=U)}function _(b){const P=g();b.__bindingPointIndex=P;const L=s.createBuffer(),D=b.__size,U=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,D,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function g(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(b){const P=o[b.id],L=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let U=0,O=L.length;U<O;U++){const W=Array.isArray(L[U])?L[U]:[L[U]];for(let A=0,R=W.length;A<R;A++){const z=W[A];if(y(z,U,A,D)===!0){const te=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let ue=0;ue<ee.length;ue++){const oe=ee[ue],Y=w(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,te+ce,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,ce),ce+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,P,L,D){const U=b.value,O=P+"_"+L;if(D[O]===void 0)return typeof U=="number"||typeof U=="boolean"?D[O]=U:D[O]=U.clone(),!0;{const W=D[O];if(typeof U=="number"||typeof U=="boolean"){if(W!==U)return D[O]=U,!0}else if(W.equals(U)===!1)return W.copy(U),!0}return!1}function T(b){const P=b.uniforms;let L=0;const D=16;for(let O=0,W=P.length;O<W;O++){const A=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,z=A.length;R<z;R++){const te=A[R],ee=Array.isArray(te.value)?te.value:[te.value];for(let ce=0,ue=ee.length;ce<ue;ce++){const oe=ee[ce],Y=w(oe),q=L%D,he=q%Y.boundary,se=q+he;L+=he,se!==0&&D-se<Y.storage&&(L+=D-se),te.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=Y.storage}}}const U=L%D;return U>0&&(L+=D-U),b.__size=L,b.__cache={},this}function w(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",b),P}function x(b){const P=b.target;P.removeEventListener("dispose",x);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function v(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:h,update:p,dispose:v}}const Kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function Zw(){return Ci===null&&(Ci=new jy(Kw,16,16,ta,Ji),Ci.name="DFG_LUT",Ci.minFilter=wn,Ci.magFilter=wn,Ci.wrapS=Ki,Ci.wrapT=Ki,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class Qw{constructor(e={}){const{canvas:t=xy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=oi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=c;const w=y,x=new Set([Wd,Gd,Hd]),v=new Set([oi,Di,so,ao,zd,Vd]),b=new Uint32Array(4),P=new Int32Array(4);let L=null,D=null;const U=[],O=[];let W=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=si;let z=0,te=0,ee=null,ce=-1,ue=null;const oe=new Qt,Y=new Qt;let q=null;const he=new Rt(0);let se=0,F=t.width,K=t.height,be=1,Ye=null,Ze=null;const ie=new Qt(0,0,F,K),fe=new Qt(0,0,F,K);let ye=!1;const ke=new E_;let Ue=!1,mt=!1;const Kt=new $t,ht=new Q,xt=new Qt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ht(){return ee===null?be:1}let k=r;function Gt(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bd}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",yt,!1),k===null){const X="webgl2";if(k=Gt(X,C),k===null)throw Gt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let gt,St,Xe,N,M,G,de,me,le,$e,Te,ze,it,Se,Pe,Ge,je,Ae,lt,V,Ne,Me,De,ve;function pe(){gt=new Z1(k),gt.init(),Me=new Hw(k,gt),St=new H1(k,gt,e,Me),Xe=new zw(k,gt),St.reversedDepthBuffer&&S&&Xe.buffers.depth.setReversed(!0),N=new eT(k),M=new ww,G=new Vw(k,gt,Xe,M,St,Me,N),de=new W1(A),me=new K1(A),le=new rM(k),De=new z1(k,le),$e=new Q1(k,le,N,De),Te=new nT(k,$e,le,N),lt=new tT(k,St,G),Ge=new G1(M),ze=new Tw(A,de,me,gt,St,De,Ge),it=new Yw(A,M),Se=new Cw,Pe=new Dw(gt),Ae=new k1(A,de,me,Xe,Te,T,h),je=new Bw(A,Te,St),ve=new $w(k,N,St,Xe),V=new V1(k,gt,N),Ne=new J1(k,gt,N),N.programs=ze.programs,A.capabilities=St,A.extensions=gt,A.properties=M,A.renderLists=Se,A.shadowMap=je,A.state=Xe,A.info=N}pe(),w!==oi&&(W=new rT(w,t.width,t.height,o,l));const Ce=new jw(A,k);this.xr=Ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(C){C!==void 0&&(be=C,this.setSize(F,K,!1))},this.getSize=function(C){return C.set(F,K)},this.setSize=function(C,X,ae=!0){if(Ce.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,K=X,t.width=Math.floor(C*be),t.height=Math.floor(X*be),ae===!0&&(t.style.width=C+"px",t.style.height=X+"px"),W!==null&&W.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(F*be,K*be).floor()},this.setDrawingBufferSize=function(C,X,ae){F=C,K=X,be=ae,t.width=Math.floor(C*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(w===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(oe)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,X,ae,ne){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,X,ae,ne),Xe.viewport(oe.copy(ie).multiplyScalar(be).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,X,ae,ne){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,X,ae,ne),Xe.scissor(Y.copy(fe).multiplyScalar(be).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Xe.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Ye=C},this.setTransparentSort=function(C){Ze=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ae=!0){let ne=0;if(C){let Z=!1;if(ee!==null){const Le=ee.texture.format;Z=x.has(Le)}if(Z){const Le=ee.texture.type,Fe=v.has(Le),we=Ae.getClearColor(),He=Ae.getClearAlpha(),Be=we.r,nt=we.g,Qe=we.b;Fe?(b[0]=Be,b[1]=nt,b[2]=Qe,b[3]=He,k.clearBufferuiv(k.COLOR,0,b)):(P[0]=Be,P[1]=nt,P[2]=Qe,P[3]=He,k.clearBufferiv(k.COLOR,0,P))}else ne|=k.COLOR_BUFFER_BIT}X&&(ne|=k.DEPTH_BUFFER_BIT),ae&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Ae.dispose(),Se.dispose(),Pe.dispose(),M.dispose(),de.dispose(),me.dispose(),Te.dispose(),De.dispose(),ve.dispose(),ze.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ur),Ce.removeEventListener("sessionend",Fr),ui.stop()};function rt(C){C.preventDefault(),Hm("WebGLRenderer: Context Lost."),R=!0}function It(){Hm("WebGLRenderer: Context Restored."),R=!1;const C=N.autoReset,X=je.enabled,ae=je.autoUpdate,ne=je.needsUpdate,Z=je.type;pe(),N.autoReset=C,je.enabled=X,je.autoUpdate=ae,je.needsUpdate=ne,je.type=Z}function yt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wn(C){const X=C.target;X.removeEventListener("dispose",Wn),Cn(X)}function Cn(C){oa(C),M.remove(C)}function oa(C){const X=M.get(C).programs;X!==void 0&&(X.forEach(function(ae){ze.releaseProgram(ae)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ae,ne,Z,Le){X===null&&(X=Nt);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,we=yo(C,X,ae,ne,Z);Xe.setMaterial(ne,Fe);let He=ae.index,Be=1;if(ne.wireframe===!0){if(He=$e.getWireframeAttribute(ae),He===void 0)return;Be=2}const nt=ae.drawRange,Qe=ae.attributes.position;let ft=nt.start*Be,Mt=(nt.start+nt.count)*Be;Le!==null&&(ft=Math.max(ft,Le.start*Be),Mt=Math.min(Mt,(Le.start+Le.count)*Be)),He!==null?(ft=Math.max(ft,0),Mt=Math.min(Mt,He.count)):Qe!=null&&(ft=Math.max(ft,0),Mt=Math.min(Mt,Qe.count));const Ot=Mt-ft;if(Ot<0||Ot===1/0)return;De.setup(Z,ne,we,ae,He);let Ft,wt=V;if(He!==null&&(Ft=le.get(He),wt=Ne,wt.setIndex(Ft)),Z.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*Ht()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if(Z.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),Xe.setLineWidth(Je*Ht()),Z.isLineSegments?wt.setMode(k.LINES):Z.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else Z.isPoints?wt.setMode(k.POINTS):Z.isSprite&&wt.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Je=Z._multiDrawStarts,bt=Z._multiDrawCounts,_t=Z._multiDrawCount,vn=He?le.get(He).bytesPerElement:1,yi=M.get(ne).currentProgram.getUniforms();for(let nn=0;nn<_t;nn++)yi.setValue(k,"_gl_DrawID",nn),wt.render(Je[nn]/vn,bt[nn])}else if(Z.isInstancedMesh)wt.renderInstances(ft,Ot,Z.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,bt=Math.min(ae.instanceCount,Je);wt.renderInstances(ft,Ot,bt)}else wt.render(ft,Ot)};function nr(C,X,ae){C.transparent===!0&&C.side===$i&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,Or(C,X,ae),C.side=Dr,C.needsUpdate=!0,Or(C,X,ae),C.side=$i):Or(C,X,ae)}this.compile=function(C,X,ae=null){ae===null&&(ae=C),D=Pe.get(ae),D.init(X),O.push(D),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),C!==ae&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const ne=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Le=Z.material;if(Le)if(Array.isArray(Le))for(let Fe=0;Fe<Le.length;Fe++){const we=Le[Fe];nr(we,ae,Z),ne.add(we)}else nr(Le,ae,Z),ne.add(Le)}),D=O.pop(),ne},this.compileAsync=function(C,X,ae=null){const ne=this.compile(C,X,ae);return new Promise(Z=>{function Le(){if(ne.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){Z(C);return}setTimeout(Le,10)}gt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let la=null;function Ir(C){la&&la(C)}function Ur(){ui.stop()}function Fr(){ui.start()}const ui=new C_;ui.setAnimationLoop(Ir),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(C){la=C,Ce.setAnimationLoop(C),C===null?ui.stop():ui.start()},Ce.addEventListener("sessionstart",Ur),Ce.addEventListener("sessionend",Fr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ae=Ce.enabled===!0&&Ce.isPresenting===!0,ne=W!==null&&(ee===null||ae)&&W.begin(A,ee);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,ee),D=Pe.get(C,O.length),D.init(X),O.push(D),Kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(Kt,Pi,X.reversedDepth),mt=this.localClippingEnabled,Ue=Ge.init(this.clippingPlanes,mt),L=Se.get(C,U.length),L.init(),U.push(L),Ce.enabled===!0&&Ce.isPresenting===!0){const Fe=A.xr.getDepthSensingMesh();Fe!==null&&ua(Fe,X,-1/0,A.sortObjects)}ua(C,X,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Ye,Ze),ut=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ut&&Ae.addToRenderList(L,C),this.info.render.frame++,Ue===!0&&Ge.beginShadows();const Z=D.state.shadowsArray;if(je.render(Z,C,X),Ue===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&W.hasRenderPass())===!1){const Fe=L.opaque,we=L.transmissive;if(D.setupLights(),X.isArrayCamera){const He=X.cameras;if(we.length>0)for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be];xo(Fe,we,C,Qe)}ut&&Ae.render(C);for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be];vo(L,C,Qe,Qe.viewport)}}else we.length>0&&xo(Fe,we,C,X),ut&&Ae.render(C),vo(L,C,X)}ee!==null&&te===0&&(G.updateMultisampleRenderTarget(ee),G.updateRenderTargetMipmap(ee)),ne&&W.end(A),C.isScene===!0&&C.onAfterRender(A,C,X),De.resetDefaultState(),ce=-1,ue=null,O.pop(),O.length>0?(D=O[O.length-1],Ue===!0&&Ge.setGlobalState(A.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?L=U[U.length-1]:L=null};function ua(C,X,ae,ne){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){ne&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Kt);const Fe=Te.update(C),we=C.material;we.visible&&L.push(C,Fe,we,ae,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Fe=Te.update(C),we=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),xt.copy(Fe.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(Kt)),Array.isArray(we)){const He=Fe.groups;for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be],ft=we[Qe.materialIndex];ft&&ft.visible&&L.push(C,Fe,ft,ae,xt.z,Qe)}}else we.visible&&L.push(C,Fe,we,ae,xt.z,null)}}const Le=C.children;for(let Fe=0,we=Le.length;Fe<we;Fe++)ua(Le[Fe],X,ae,ne)}function vo(C,X,ae,ne){const{opaque:Z,transmissive:Le,transparent:Fe}=C;D.setupLightsView(ae),Ue===!0&&Ge.setGlobalState(A.clippingPlanes,ae),ne&&Xe.viewport(oe.copy(ne)),Z.length>0&&Zn(Z,X,ae),Le.length>0&&Zn(Le,X,ae),Fe.length>0&&Zn(Fe,X,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function xo(C,X,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const ft=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Ni(1,1,{generateMipmaps:!0,type:ft?Ji:oi,minFilter:ls,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=D.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||oe;Le.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);const we=A.getRenderTarget(),He=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(he),se=A.getClearAlpha(),se<1&&A.setClearColor(16777215,.5),A.clear(),ut&&Ae.render(ae);const nt=A.toneMapping;A.toneMapping=Li;const Qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),Ue===!0&&Ge.setGlobalState(A.clippingPlanes,ne),Zn(C,ae,ne),G.updateMultisampleRenderTarget(Le),G.updateRenderTargetMipmap(Le),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Mt=0,Ot=X.length;Mt<Ot;Mt++){const Ft=X[Mt],{object:wt,geometry:Je,material:bt,group:_t}=Ft;if(bt.side===$i&&wt.layers.test(ne.layers)){const vn=bt.side;bt.side=Gn,bt.needsUpdate=!0,ca(wt,ae,ne,Je,bt,_t),bt.side=vn,bt.needsUpdate=!0,ft=!0}}ft===!0&&(G.updateMultisampleRenderTarget(Le),G.updateRenderTargetMipmap(Le))}A.setRenderTarget(we,He,Be),A.setClearColor(he,se),Qe!==void 0&&(ne.viewport=Qe),A.toneMapping=nt}function Zn(C,X,ae){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Le=C.length;Z<Le;Z++){const Fe=C[Z],{object:we,geometry:He,group:Be}=Fe;let nt=Fe.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),we.layers.test(ae.layers)&&ca(we,X,ae,He,nt,Be)}}function ca(C,X,ae,ne,Z,Le){C.onBeforeRender(A,X,ae,ne,Z,Le),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(A,X,ae,ne,C,Le),Z.transparent===!0&&Z.side===$i&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,A.renderBufferDirect(ae,X,ne,Z,C,Le),Z.side=Dr,Z.needsUpdate=!0,A.renderBufferDirect(ae,X,ne,Z,C,Le),Z.side=$i):A.renderBufferDirect(ae,X,ne,Z,C,Le),C.onAfterRender(A,X,ae,ne,Z,Le)}function Or(C,X,ae){X.isScene!==!0&&(X=Nt);const ne=M.get(C),Z=D.state.lights,Le=D.state.shadowsArray,Fe=Z.state.version,we=ze.getParameters(C,Z.state,Le,X,ae),He=ze.getProgramCacheKey(we);let Be=ne.programs;ne.environment=C.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(C.isMeshStandardMaterial?me:de).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",Wn),Be=new Map,ne.programs=Be);let nt=Be.get(He);if(nt!==void 0){if(ne.currentProgram===nt&&ne.lightsStateVersion===Fe)return fa(C,we),nt}else we.uniforms=ze.getUniforms(C),C.onBeforeCompile(we,A),nt=ze.acquireProgram(we,He),Be.set(He,nt),ne.uniforms=we.uniforms;const Qe=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),fa(C,we),ne.needsLights=Eo(C),ne.lightsStateVersion=Fe,ne.needsLights&&(Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.directionalShadowMap.value=Z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotShadowMap.value=Z.state.spotShadowMap,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMap.value=Z.state.pointShadowMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=nt,ne.uniformsList=null,nt}function So(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=iu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function fa(C,X){const ae=M.get(C);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function yo(C,X,ae,ne,Z){X.isScene!==!0&&(X=Nt),G.resetTextureUnits();const Le=X.fog,Fe=ne.isMeshStandardMaterial?X.environment:null,we=ee===null?A.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:na,He=(ne.isMeshStandardMaterial?me:de).get(ne.envMap||Fe),Be=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,nt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!ae.morphAttributes.position,ft=!!ae.morphAttributes.normal,Mt=!!ae.morphAttributes.color;let Ot=Li;ne.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ot=A.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,wt=Ft!==void 0?Ft.length:0,Je=M.get(ne),bt=D.state.lights;if(Ue===!0&&(mt===!0||C!==ue)){const ln=C===ue&&ne.id===ce;Ge.setState(ne,C,ln)}let _t=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==bt.state.version||Je.outputColorSpace!==we||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==He||ne.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ge.numPlanes||Je.numIntersection!==Ge.numIntersection)||Je.vertexAlphas!==Be||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==ft||Je.morphColors!==Mt||Je.toneMapping!==Ot||Je.morphTargetsCount!==wt)&&(_t=!0):(_t=!0,Je.__version=ne.version);let vn=Je.currentProgram;_t===!0&&(vn=Or(ne,X,Z));let yi=!1,nn=!1,Br=!1;const Dt=vn.getUniforms(),ot=Je.uniforms;if(Xe.useProgram(vn.program)&&(yi=!0,nn=!0,Br=!0),ne.id!==ce&&(ce=ne.id,nn=!0),yi||ue!==C){Xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(k,"projectionMatrix",C.projectionMatrix),Dt.setValue(k,"viewMatrix",C.matrixWorldInverse);const un=Dt.map.cameraPosition;un!==void 0&&un.setValue(k,ht.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ue!==C&&(ue=C,nn=!0,Br=!0)}if(Je.needsLights&&(bt.state.directionalShadowMap.length>0&&Dt.setValue(k,"directionalShadowMap",bt.state.directionalShadowMap,G),bt.state.spotShadowMap.length>0&&Dt.setValue(k,"spotShadowMap",bt.state.spotShadowMap,G),bt.state.pointShadowMap.length>0&&Dt.setValue(k,"pointShadowMap",bt.state.pointShadowMap,G)),Z.isSkinnedMesh){Dt.setOptional(k,Z,"bindMatrix"),Dt.setOptional(k,Z,"bindMatrixInverse");const ln=Z.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(k,"boneTexture",ln.boneTexture,G))}Z.isBatchedMesh&&(Dt.setOptional(k,Z,"batchingTexture"),Dt.setValue(k,"batchingTexture",Z._matricesTexture,G),Dt.setOptional(k,Z,"batchingIdTexture"),Dt.setValue(k,"batchingIdTexture",Z._indirectTexture,G),Dt.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Dt.setValue(k,"batchingColorTexture",Z._colorsTexture,G));const Rn=ae.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&lt.update(Z,ae,vn),(nn||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,Dt.setValue(k,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ot.envMap.value=He,ot.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(ot.envMapIntensity.value=X.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=Zw()),nn&&(Dt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&Mo(ot,Br),Le&&ne.fog===!0&&it.refreshFogUniforms(ot,Le),it.refreshMaterialUniforms(ot,ne,be,K,D.state.transmissionRenderTarget[C.id]),iu.upload(k,So(Je),ot,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(iu.upload(k,So(Je),ot,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(k,"center",Z.center),Dt.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Dt.setValue(k,"normalMatrix",Z.normalMatrix),Dt.setValue(k,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const ln=ne.uniformsGroups;for(let un=0,ps=ln.length;un<ps;un++){const Mi=ln[un];ve.update(Mi,vn),ve.bind(Mi,vn)}}return vn}function Mo(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Eo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(C,X,ae){const ne=M.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=X,M.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ae=M.get(C);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const vu=k.createFramebuffer();this.setRenderTarget=function(C,X=0,ae=0){ee=C,z=X,te=ae;let ne=null,Z=!1,Le=!1;if(C){const we=M.get(C);if(we.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),oe.copy(C.viewport),Y.copy(C.scissor),q=C.scissorTest,Xe.viewport(oe),Xe.scissor(Y),Xe.setScissorTest(q),ce=-1;return}else if(we.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(we.__hasExternalTextures)G.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(we.__boundDepthTexture!==nt){if(nt!==null&&M.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Le=!0);const Be=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[X])?ne=Be[X][ae]:ne=Be[X],Z=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?ne=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?ne=Be[ae]:ne=Be,oe.copy(C.viewport),Y.copy(C.scissor),q=C.scissorTest}else oe.copy(ie).multiplyScalar(be).floor(),Y.copy(fe).multiplyScalar(be).floor(),q=ye;if(ae!==0&&(ne=vu),Xe.bindFramebuffer(k.FRAMEBUFFER,ne)&&Xe.drawBuffers(C,ne),Xe.viewport(oe),Xe.scissor(Y),Xe.setScissorTest(q),Z){const we=M.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,we.__webglTexture,ae)}else if(Le){const we=X;for(let He=0;He<C.textures.length;He++){const Be=M.get(C.textures[He]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+He,Be.__webglTexture,ae,we)}}else if(C!==null&&ae!==0){const we=M.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,ae)}ce=-1},this.readRenderTargetPixels=function(C,X,ae,ne,Z,Le,Fe,we=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){Xe.bindFramebuffer(k.FRAMEBUFFER,He);try{const Be=C.textures[we],nt=Be.format,Qe=Be.type;if(!St.textureFormatReadable(nt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ne&&ae>=0&&ae<=C.height-Z&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we),k.readPixels(X,ae,ne,Z,Me.convert(nt),Me.convert(Qe),Le))}finally{const Be=ee!==null?M.get(ee).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,X,ae,ne,Z,Le,Fe,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(X>=0&&X<=C.width-ne&&ae>=0&&ae<=C.height-Z){Xe.bindFramebuffer(k.FRAMEBUFFER,He);const Be=C.textures[we],nt=Be.format,Qe=Be.type;if(!St.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.bufferData(k.PIXEL_PACK_BUFFER,Le.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we),k.readPixels(X,ae,ne,Z,Me.convert(nt),Me.convert(Qe),0);const Mt=ee!==null?M.get(ee).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,Mt);const Ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Sy(k,Ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Le),k.deleteBuffer(ft),k.deleteSync(Ot),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ae=0){const ne=Math.pow(2,-ae),Z=Math.floor(C.image.width*ne),Le=Math.floor(C.image.height*ne),Fe=X!==null?X.x:0,we=X!==null?X.y:0;G.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ae,0,0,Fe,we,Z,Le),Xe.unbindTexture()};const xu=k.createFramebuffer(),Xt=k.createFramebuffer();this.copyTextureToTexture=function(C,X,ae=null,ne=null,Z=0,Le=null){Le===null&&(Z!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=Z,Z=0):Le=0);let Fe,we,He,Be,nt,Qe,ft,Mt,Ot;const Ft=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(ae!==null)Fe=ae.max.x-ae.min.x,we=ae.max.y-ae.min.y,He=ae.isBox3?ae.max.z-ae.min.z:1,Be=ae.min.x,nt=ae.min.y,Qe=ae.isBox3?ae.min.z:0;else{const Rn=Math.pow(2,-Z);Fe=Math.floor(Ft.width*Rn),we=Math.floor(Ft.height*Rn),C.isDataArrayTexture?He=Ft.depth:C.isData3DTexture?He=Math.floor(Ft.depth*Rn):He=1,Be=0,nt=0,Qe=0}ne!==null?(ft=ne.x,Mt=ne.y,Ot=ne.z):(ft=0,Mt=0,Ot=0);const wt=Me.convert(X.format),Je=Me.convert(X.type);let bt;X.isData3DTexture?(G.setTexture3D(X,0),bt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),bt=k.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),bt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),vn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),yi=k.getParameter(k.UNPACK_SKIP_PIXELS),nn=k.getParameter(k.UNPACK_SKIP_ROWS),Br=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Dt=C.isDataArrayTexture||C.isData3DTexture,ot=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Rn=M.get(C),ln=M.get(X),un=M.get(Rn.__renderTarget),ps=M.get(ln.__renderTarget);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let Mi=0;Mi<He;Mi++)Dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(C).__webglTexture,Z,Qe+Mi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(X).__webglTexture,Le,Ot+Mi)),k.blitFramebuffer(Be,nt,Fe,we,ft,Mt,Fe,we,k.DEPTH_BUFFER_BIT,k.NEAREST);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||M.has(C)){const Rn=M.get(C),ln=M.get(X);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,xu),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xt);for(let un=0;un<He;un++)Dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,Z,Qe+un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,Z),ot?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,Le,Ot+un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,Le),Z!==0?k.blitFramebuffer(Be,nt,Fe,we,ft,Mt,Fe,we,k.COLOR_BUFFER_BIT,k.NEAREST):ot?k.copyTexSubImage3D(bt,Le,ft,Mt,Ot+un,Be,nt,Fe,we):k.copyTexSubImage2D(bt,Le,ft,Mt,Be,nt,Fe,we);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ot?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(bt,Le,ft,Mt,Ot,Fe,we,He,wt,Je,Ft.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(bt,Le,ft,Mt,Ot,Fe,we,He,wt,Ft.data):k.texSubImage3D(bt,Le,ft,Mt,Ot,Fe,we,He,wt,Je,Ft):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Le,ft,Mt,Fe,we,wt,Je,Ft.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Le,ft,Mt,Ft.width,Ft.height,wt,Ft.data):k.texSubImage2D(k.TEXTURE_2D,Le,ft,Mt,Fe,we,wt,Je,Ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yi),k.pixelStorei(k.UNPACK_SKIP_ROWS,nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Br),Le===0&&X.generateMipmaps&&k.generateMipmap(bt),Xe.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){z=0,te=0,ee=null,Xe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const Jw="_backgroundContainer_uo7du_1",eA="_matrixCanvas_uo7du_12",tA="_threeCanvas_uo7du_22",nA="_overlay_uo7du_30",Kl={backgroundContainer:Jw,matrixCanvas:eA,threeCanvas:tA,overlay:nA},iA=()=>{const s=Re.useRef(),e=Re.useRef();return Re.useEffect(()=>{const t=new Xy,r=new ai(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Qw({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(o.domElement),r.position.z=5;const l=new cu(2,2),c=new $d({color:62463,wireframe:!0,transparent:!0,opacity:.15}),f=new Ii(l,c);t.add(f);const h=new cu(2.05,3),p=new nu({color:62463,size:.02}),_=new Rf(h,p);t.add(_);const g=2e3,S=new Float32Array(g*3);for(let K=0;K<g*3;K++)S[K]=(Math.random()-.5)*20;const y=new Un;y.setAttribute("position",new li(S,3));const T=new nu({size:.005,color:62463,transparent:!0,opacity:.8}),w=new Rf(y,T);t.add(w);const x=10,v=new Un,b=new Float32Array(x*3);for(let K=0;K<x*3;K++)b[K]=(Math.random()-.5)*10;v.setAttribute("position",new li(b,3));const P=new nu({size:.1,color:16711935,transparent:!0,opacity:.6}),L=new Rf(v,P);t.add(L);const D=new fg(20,40,62463,69905);D.position.y=-3,D.rotation.x=Math.PI*.05,t.add(D);const U=new fg(20,40,62463,69905);U.position.y=3,U.rotation.x=-Math.PI*.05,t.add(U);let O=0,W=0;const A=K=>{O=(K.clientX/window.innerWidth-.5)*.3,W=(K.clientY/window.innerHeight-.5)*.3};window.addEventListener("mousemove",A);const R=()=>{requestAnimationFrame(R),f.rotation.y+=.002,_.rotation.y-=.001,w.rotation.y+=5e-4,L.rotation.y-=.001,L.rotation.z+=5e-4,D.position.z=(D.position.z+.01)%.5,U.position.z=(U.position.z+.01)%.5,r.position.x+=(O-r.position.x)*.05,r.position.y+=(-W-r.position.y)*.05,r.lookAt(t.position),o.render(t,r)},z=e.current,te=z.getContext("2d");let ee=z.width=window.innerWidth,ce=z.height=window.innerHeight;const ue=`01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`,oe=14,Y=Math.floor(ee/oe),q=new Array(Y).fill(1),se=setInterval(()=>{te.fillStyle="rgba(0, 0, 0, 0.05)",te.fillRect(0,0,ee,ce),te.fillStyle="#00f3ff66",te.font=oe+"px monospace";for(let K=0;K<q.length;K++){const be=ue.charAt(Math.floor(Math.random()*ue.length));te.fillText(be,K*oe,q[K]*oe),q[K]*oe>ce&&Math.random()>.975&&(q[K]=0),q[K]++}},50),F=()=>{ee=z.width=window.innerWidth,ce=z.height=window.innerHeight,r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",F),R(),()=>{var K;window.removeEventListener("mousemove",A),window.removeEventListener("resize",F),(K=s.current)==null||K.removeChild(o.domElement),clearInterval(se)}},[]),j.jsxs("div",{className:Kl.backgroundContainer,children:[j.jsx("canvas",{ref:e,className:Kl.matrixCanvas}),j.jsx("div",{ref:s,className:Kl.threeCanvas}),j.jsx("div",{className:Kl.overlay})]})},rA="_loaderContainer_ovcto_1",sA="_terminal_ovcto_15",aA="_header_ovcto_25",oA="_dot_ovcto_34",lA="_title_ovcto_53",uA="_content_ovcto_61",cA="_text_ovcto_65",fA="_cursor_ovcto_75",dA="_progressContainer_ovcto_91",hA="_progressBar_ovcto_100",pA="_status_ovcto_107",mA="_scanline_ovcto_115",gA="_fadeOut_ovcto_130",Ln={loaderContainer:rA,terminal:sA,header:aA,dot:oA,title:lA,content:uA,text:cA,cursor:fA,progressContainer:dA,progressBar:hA,status:pA,scanline:mA,fadeOut:gA},_A=({onFinished:s})=>{const[e,t]=Re.useState(""),[r,o]=Re.useState(0),[l,c]=Re.useState(!1),f=["> INITIALIZING TERMINAL CONSOLE...","> LOADING CLI MODULES...","> SCANNING FOR HIDDEN REPOSITORIES...","> DECRYPTING ANCIENT MAP_DATA...",'> SEARCHING FOR TARGET: "TREASURE_ROOT"',"> FOUND CLUE #1 - BYPASSING FIREWALL...","> ACCESS GRANTED. START THE HUNT."];return Re.useEffect(()=>{let h=0,p=0,_;const g=()=>{if(h>=f.length){setTimeout(()=>{c(!0),setTimeout(s,500)},200);return}p<=f[h].length?(t(y=>(p===0?y+`
`:y)+f[h].charAt(p-1)),p++,_=setTimeout(g,10)):(h++,p=0,_=setTimeout(g,100))};g();const S=setInterval(()=>{o(y=>y>=100?(clearInterval(S),100):y+Math.random()*15)},50);return()=>{clearTimeout(_),clearInterval(S)}},[s]),j.jsxs("div",{className:`${Ln.loaderContainer} ${l?Ln.fadeOut:""}`,children:[j.jsxs("div",{className:Ln.terminal,children:[j.jsxs("div",{className:Ln.header,children:[j.jsx("span",{className:Ln.dot}),j.jsx("span",{className:Ln.dot}),j.jsx("span",{className:Ln.dot}),j.jsx("span",{className:Ln.title,children:"SYSTEM_TERMINAL"})]}),j.jsxs("div",{className:Ln.content,children:[j.jsxs("pre",{className:Ln.text,children:[e,j.jsx("span",{className:Ln.cursor,children:"_"})]}),j.jsx("div",{className:Ln.progressContainer,children:j.jsx("div",{className:Ln.progressBar,style:{width:`${r}%`}})}),j.jsxs("div",{className:Ln.status,children:[j.jsxs("span",{children:["STATUS: ",r>=100?"READY":"LOADING..."]}),j.jsxs("span",{children:[Math.floor(r),"%"]})]})]})]}),j.jsx("div",{className:Ln.scanline})]})},vA="_statusContainer_1ndxp_1",xA="_indicator_1ndxp_14",SA="_dot_1ndxp_24",yA="_text_1ndxp_33",MA="_coords_1ndxp_40",eo={statusContainer:vA,indicator:xA,dot:SA,text:yA,coords:MA},EA=()=>j.jsxs("div",{className:eo.statusContainer,children:[j.jsxs("div",{className:eo.indicator,children:[j.jsx("span",{className:eo.dot}),j.jsx("span",{className:eo.text,children:"SYSTEM_PROCESSING..."})]}),j.jsx("div",{className:eo.coords,children:"18.52°N, 73.85°E"})]}),TA=()=>{const[s,e]=Re.useState(!0);return j.jsxs("div",{className:"home-container",children:[s&&j.jsx(_A,{onFinished:()=>e(!1)}),j.jsx(iA,{}),j.jsx(Ux,{}),j.jsx(EA,{}),j.jsxs("main",{children:[j.jsx(Xx,{}),j.jsx(eS,{}),j.jsx(aS,{}),j.jsx(pS,{}),j.jsx(SS,{})]}),j.jsx(kS,{})]})},wA="_formContainer_1pjx1_1",AA="_backgroundGlow_1pjx1_12",CA="_formCard_1pjx1_39",RA="_cardHeader_1pjx1_76",bA="_formTitle_1pjx1_81",PA="_formSubtitle_1pjx1_90",LA="_form_1pjx1_1",NA="_sectionHeader_1pjx1_105",DA="_inputGroup_1pjx1_115",IA="_label_1pjx1_121",UA="_required_1pjx1_129",FA="_input_1pjx1_115",OA="_inputError_1pjx1_156",BA="_errorMessage_1pjx1_160",kA="_membersList_1pjx1_167",zA="_memberRow_1pjx1_173",VA="_memberLabel_1pjx1_181",HA="_memberInputs_1pjx1_189",GA="_addButton_1pjx1_195",WA="_addIcon_1pjx1_215",XA="_submitSection_1pjx1_220",jA="_submitButton_1pjx1_224",qA="_successContainer_1pjx1_266",YA="_successCard_1pjx1_275",$A="_successIcon_1pjx1_288",KA="_successTitle_1pjx1_294",ZA="_successMessage_1pjx1_300",QA="_successSubMessage_1pjx1_306",JA="_successGlow_1pjx1_312",eC="_returnButton_1pjx1_325",Pt={formContainer:wA,backgroundGlow:AA,formCard:CA,cardHeader:RA,formTitle:bA,formSubtitle:PA,form:LA,sectionHeader:NA,inputGroup:DA,label:IA,required:UA,input:FA,inputError:OA,errorMessage:BA,membersList:kA,memberRow:zA,memberLabel:VA,memberInputs:HA,addButton:GA,addIcon:WA,submitSection:XA,submitButton:jA,successContainer:qA,successCard:YA,successIcon:$A,successTitle:KA,successMessage:ZA,successSubMessage:QA,successGlow:JA,returnButton:eC},Uf=({label:s,value:e,onChange:t,error:r,required:o,placeholder:l})=>j.jsxs("div",{className:Pt.inputGroup,children:[j.jsxs("label",{className:Pt.label,children:[s,o&&j.jsx("span",{className:Pt.required,children:"*"})]}),j.jsx("input",{type:"text",value:e,onChange:t,placeholder:l,className:`${Pt.input} ${r?Pt.inputError:""}`,"aria-label":s}),r&&j.jsx("span",{className:Pt.errorMessage,children:r})]}),tC=()=>{const s=jg(),[e,t]=Re.useState(""),[r,o]=Re.useState([{name:"",email:""},{name:"",email:""}]),[l,c]=Re.useState({}),[f,h]=Re.useState(!1),p=()=>{o([...r,{name:"",email:""}])},_=(T,w,x)=>{const v=[...r];v[T][w]=x,o(v)},g=()=>{const T={};return e.trim()||(T.teamName="Team name is required"),r.forEach((w,x)=>{w.name.trim()||(T[`memberName${x}`]=`Member ${x+1} name is required`),w.email.trim()?/\S+@\S+\.\S+/.test(w.email)||(T[`memberEmail${x}`]="Invalid email address"):T[`memberEmail${x}`]=`Member ${x+1} email is required`}),c(T),Object.keys(T).length===0},S=T=>{T.preventDefault(),g()&&h(!0)},y=()=>{s("/")};return f?j.jsx("div",{className:Pt.successContainer,children:j.jsxs("div",{className:Pt.successCard,children:[j.jsx("div",{className:Pt.successIcon,children:"✓"}),j.jsx("h1",{className:Pt.successTitle,children:"Registration Submitted Successfully"}),j.jsx("p",{className:Pt.successMessage,children:"Thank you for registering for Quick Snatch 2.0"}),j.jsx("p",{className:Pt.successSubMessage,children:"Further instructions will be shared soon."}),j.jsx("div",{className:Pt.successGlow}),j.jsx("button",{className:Pt.returnButton,onClick:y,children:"Return to Home"})]})}):j.jsxs("div",{className:Pt.formContainer,children:[j.jsx("div",{className:Pt.backgroundGlow}),j.jsxs("div",{className:Pt.formCard,children:[j.jsxs("div",{className:Pt.cardHeader,children:[j.jsx("h1",{className:Pt.formTitle,children:"Team Registration"}),j.jsx("p",{className:Pt.formSubtitle,children:"Quick Snatch 2.0 // MISSION_ENROLLMENT"})]}),j.jsxs("form",{onSubmit:S,className:Pt.form,children:[j.jsx("div",{className:Pt.sectionHeader,children:"TEAM_IDENTITY"}),j.jsx(Uf,{label:"Team Name",placeholder:"Enter your team name",value:e,onChange:T=>t(T.target.value),error:l.teamName,required:!0}),j.jsx("div",{className:Pt.sectionHeader,children:"SQUAD_MEMBERS"}),j.jsx("div",{className:Pt.membersList,children:r.map((T,w)=>j.jsxs("div",{className:Pt.memberRow,children:[j.jsxs("h3",{className:Pt.memberLabel,children:["Member ",w+1]}),j.jsxs("div",{className:Pt.memberInputs,children:[j.jsx(Uf,{label:"Name",placeholder:"Full Name",value:T.name,onChange:x=>_(w,"name",x.target.value),error:l[`memberName${w}`],required:!0}),j.jsx(Uf,{label:"Email",placeholder:"email@example.com",value:T.email,onChange:x=>_(w,"email",x.target.value),error:l[`memberEmail${w}`],required:!0})]})]},w))}),j.jsxs("button",{type:"button",className:Pt.addButton,onClick:p,children:[j.jsx("span",{className:Pt.addIcon,children:"+"})," ADD NEW SQUAD MEMBER"]}),j.jsx("div",{className:Pt.submitSection,children:j.jsx("button",{type:"submit",className:Pt.submitButton,children:"CONFIRM REGISTRATION"})})]})]})]})},nC=()=>j.jsx(tC,{});function iC(){return j.jsxs(dx,{children:[j.jsx(Of,{path:"/",element:j.jsx(TA,{})}),j.jsx(Of,{path:"/register",element:j.jsx(nC,{})})]})}Sv.createRoot(document.getElementById("root")).render(j.jsx(Og.StrictMode,{children:j.jsx(xx,{children:j.jsx(iC,{})})}));
