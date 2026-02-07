function uv(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Fg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $u={exports:{}},Ga={},Ku={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function fv(){if(gm)return pt;gm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(U,oe,Te){this.props=U,this.context=oe,this.refs=w,this.updater=Te||y}x.prototype.isReactComponent={},x.prototype.setState=function(U,oe){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,oe,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=x.prototype;function b(U,oe,Te){this.props=U,this.context=oe,this.refs=w,this.updater=Te||y}var P=b.prototype=new v;P.constructor=b,T(P,x.prototype),P.isPureReactComponent=!0;var L=Array.isArray,D=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function X(U,oe,Te){var Xe,Ze={},ne=null,de=null;if(oe!=null)for(Xe in oe.ref!==void 0&&(de=oe.ref),oe.key!==void 0&&(ne=""+oe.key),oe)D.call(oe,Xe)&&!O.hasOwnProperty(Xe)&&(Ze[Xe]=oe[Xe]);var ye=arguments.length-2;if(ye===1)Ze.children=Te;else if(1<ye){for(var ke=Array(ye),Ue=0;Ue<ye;Ue++)ke[Ue]=arguments[Ue+2];Ze.children=ke}if(U&&U.defaultProps)for(Xe in ye=U.defaultProps,ye)Ze[Xe]===void 0&&(Ze[Xe]=ye[Xe]);return{$$typeof:s,type:U,key:ne,ref:de,props:Ze,_owner:F.current}}function A(U,oe){return{$$typeof:s,type:U.type,key:oe,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var oe={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Te){return oe[Te]})}var ee=/\/+/g;function J(U,oe){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):oe.toString(36)}function ae(U,oe,Te,Xe,Ze){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(ne){case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case s:case e:de=!0}}if(de)return de=U,Ze=Ze(de),U=Xe===""?"."+J(de,0):Xe,L(Ze)?(Te="",U!=null&&(Te=U.replace(ee,"$&/")+"/"),ae(Ze,oe,Te,"",function(Ue){return Ue})):Ze!=null&&(R(Ze)&&(Ze=A(Ze,Te+(!Ze.key||de&&de.key===Ze.key?"":(""+Ze.key).replace(ee,"$&/")+"/")+U)),oe.push(Ze)),1;if(de=0,Xe=Xe===""?".":Xe+":",L(U))for(var ye=0;ye<U.length;ye++){ne=U[ye];var ke=Xe+J(ne,ye);de+=ae(ne,oe,Te,ke,Ze)}else if(ke=S(U),typeof ke=="function")for(U=ke.call(U),ye=0;!(ne=U.next()).done;)ne=ne.value,ke=Xe+J(ne,ye++),de+=ae(ne,oe,Te,ke,Ze);else if(ne==="object")throw oe=String(U),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return de}function ce(U,oe,Te){if(U==null)return U;var Xe=[],Ze=0;return ae(U,Xe,"","",function(ne){return oe.call(Te,ne,Ze++)}),Xe}function le(U){if(U._status===-1){var oe=U._result;oe=oe(),oe.then(function(Te){(U._status===0||U._status===-1)&&(U._status=1,U._result=Te)},function(Te){(U._status===0||U._status===-1)&&(U._status=2,U._result=Te)}),U._status===-1&&(U._status=0,U._result=oe)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},q={transition:null},fe={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:q,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ce,forEach:function(U,oe,Te){ce(U,function(){oe.apply(this,arguments)},Te)},count:function(U){var oe=0;return ce(U,function(){oe++}),oe},toArray:function(U){return ce(U,function(oe){return oe})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=x,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=b,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,pt.act=re,pt.cloneElement=function(U,oe,Te){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Xe=T({},U.props),Ze=U.key,ne=U.ref,de=U._owner;if(oe!=null){if(oe.ref!==void 0&&(ne=oe.ref,de=F.current),oe.key!==void 0&&(Ze=""+oe.key),U.type&&U.type.defaultProps)var ye=U.type.defaultProps;for(ke in oe)D.call(oe,ke)&&!O.hasOwnProperty(ke)&&(Xe[ke]=oe[ke]===void 0&&ye!==void 0?ye[ke]:oe[ke])}var ke=arguments.length-2;if(ke===1)Xe.children=Te;else if(1<ke){ye=Array(ke);for(var Ue=0;Ue<ke;Ue++)ye[Ue]=arguments[Ue+2];Xe.children=ye}return{$$typeof:s,type:U.type,key:Ze,ref:ne,props:Xe,_owner:de}},pt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},pt.createElement=X,pt.createFactory=function(U){var oe=X.bind(null,U);return oe.type=U,oe},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:f,render:U}},pt.isValidElement=R,pt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:le}},pt.memo=function(U,oe){return{$$typeof:p,type:U,compare:oe===void 0?null:oe}},pt.startTransition=function(U){var oe=q.transition;q.transition={};try{U()}finally{q.transition=oe}},pt.unstable_act=re,pt.useCallback=function(U,oe){return Y.current.useCallback(U,oe)},pt.useContext=function(U){return Y.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},pt.useEffect=function(U,oe){return Y.current.useEffect(U,oe)},pt.useId=function(){return Y.current.useId()},pt.useImperativeHandle=function(U,oe,Te){return Y.current.useImperativeHandle(U,oe,Te)},pt.useInsertionEffect=function(U,oe){return Y.current.useInsertionEffect(U,oe)},pt.useLayoutEffect=function(U,oe){return Y.current.useLayoutEffect(U,oe)},pt.useMemo=function(U,oe){return Y.current.useMemo(U,oe)},pt.useReducer=function(U,oe,Te){return Y.current.useReducer(U,oe,Te)},pt.useRef=function(U){return Y.current.useRef(U)},pt.useState=function(U){return Y.current.useState(U)},pt.useSyncExternalStore=function(U,oe,Te){return Y.current.useSyncExternalStore(U,oe,Te)},pt.useTransition=function(){return Y.current.useTransition()},pt.version="18.3.1",pt}var _m;function Fd(){return _m||(_m=1,Ku.exports=fv()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function dv(){if(vm)return Ga;vm=1;var s=Fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,g={},S=null,y=null;p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:f,key:S,ref:y,props:g,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=u,Ga.jsxs=u,Ga}var xm;function hv(){return xm||(xm=1,$u.exports=dv()),$u.exports}var G=hv(),be=Fd();const Og=Fg(be),pv=uv({__proto__:null,default:Og},[be]);var Tl={},Zu={exports:{}},Vn={},Qu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function mv(){return Sm||(Sm=1,(function(s){function e(q,fe){var re=q.length;q.push(fe);e:for(;0<re;){var U=re-1>>>1,oe=q[U];if(0<o(oe,fe))q[U]=fe,q[re]=oe,re=U;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var fe=q[0],re=q.pop();if(re!==fe){q[0]=re;e:for(var U=0,oe=q.length,Te=oe>>>1;U<Te;){var Xe=2*(U+1)-1,Ze=q[Xe],ne=Xe+1,de=q[ne];if(0>o(Ze,re))ne<oe&&0>o(de,Ze)?(q[U]=de,q[ne]=re,U=ne):(q[U]=Ze,q[Xe]=re,U=Xe);else if(ne<oe&&0>o(de,re))q[U]=de,q[ne]=re,U=ne;else break e}}return fe}function o(q,fe){var re=q.sortIndex-fe.sortIndex;return re!==0?re:q.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,g=null,S=3,y=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(q){for(var fe=t(p);fe!==null;){if(fe.callback===null)r(p);else if(fe.startTime<=q)r(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function L(q){if(w=!1,P(q),!T)if(t(h)!==null)T=!0,le(D);else{var fe=t(p);fe!==null&&Y(L,fe.startTime-q)}}function D(q,fe){T=!1,w&&(w=!1,v(X),X=-1),y=!0;var re=S;try{for(P(fe),g=t(h);g!==null&&(!(g.expirationTime>fe)||q&&!z());){var U=g.callback;if(typeof U=="function"){g.callback=null,S=g.priorityLevel;var oe=U(g.expirationTime<=fe);fe=s.unstable_now(),typeof oe=="function"?g.callback=oe:g===t(h)&&r(h),P(fe)}else r(h);g=t(h)}if(g!==null)var Te=!0;else{var Xe=t(p);Xe!==null&&Y(L,Xe.startTime-fe),Te=!1}return Te}finally{g=null,S=re,y=!1}}var F=!1,O=null,X=-1,A=5,R=-1;function z(){return!(s.unstable_now()-R<A)}function ee(){if(O!==null){var q=s.unstable_now();R=q;var fe=!0;try{fe=O(!0,q)}finally{fe?J():(F=!1,O=null)}}else F=!1}var J;if(typeof b=="function")J=function(){b(ee)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=ee,J=function(){ce.postMessage(null)}}else J=function(){x(ee,0)};function le(q){O=q,F||(F=!0,J())}function Y(q,fe){X=x(function(){q(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,le(D))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(q){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var re=S;S=fe;try{return q()}finally{S=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,fe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var re=S;S=q;try{return fe()}finally{S=re}},s.unstable_scheduleCallback=function(q,fe,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,q){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=re+oe,q={id:_++,callback:fe,priorityLevel:q,startTime:re,expirationTime:oe,sortIndex:-1},re>U?(q.sortIndex=re,e(p,q),t(h)===null&&q===t(p)&&(w?(v(X),X=-1):w=!0,Y(L,re-U))):(q.sortIndex=oe,e(h,q),T||y||(T=!0,le(D))),q},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(q){var fe=S;return function(){var re=S;S=fe;try{return q.apply(this,arguments)}finally{S=re}}}})(Ju)),Ju}var ym;function gv(){return ym||(ym=1,Qu.exports=mv()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function _v(){if(Mm)return Vn;Mm=1;var s=Fd(),e=gv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function S(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,b);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),q=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function oe(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Te=!1;function Xe(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),m=c.stack.split(`
`),E=d.length-1,I=m.length-1;1<=E&&0<=I&&d[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==m[I]){var B=`
`+d[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=I);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?oe(n):""}function Ze(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case F:return"Portal";case A:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mt(n){n._valueTracker||(n._valueTracker=Ue(n))}function Kt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Nt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ht(n,i){ct(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function k(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gt=Array.isArray;function St(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function je(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function M(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function W(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){it.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ge=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ce(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,Me=null,De=null;function ve(n){if(n=Ra(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),Ne(n.stateNode,n.type,i))}}function pe(n){Me?De?De.push(n):De=[n]:Me=n}function Re(){if(Me){var n=Me,i=De;if(De=Me=null,ve(n),i)for(n=0;n<i.length;n++)ve(i[n])}}function rt(n,i){return n(i)}function It(){}var yt=!1;function Wn(n,i,a){if(yt)return n(i,a);yt=!0;try{return rt(n,i,a)}finally{yt=!1,(Me!==null||De!==null)&&(It(),Re())}}function Rn(n,i){var a=n.stateNode;if(a===null)return null;var c=ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var oa=!1;if(f)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){oa=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{oa=!1}function la(n,i,a,c,d,m,E,I,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(_e){this.onError(_e)}}var Dr=!1,Ir=null,Ur=!1,ci=null,ca={onError:function(n){Dr=!0,Ir=n}};function vo(n,i,a,c,d,m,E,I,B){Dr=!1,Ir=null,la.apply(ca,arguments)}function xo(n,i,a,c,d,m,E,I,B){if(vo.apply(this,arguments),Dr){if(Dr){var ie=Ir;Dr=!1,Ir=null}else throw Error(t(198));Ur||(Ur=!0,ci=ie)}}function Zn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ua(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Fr(n){if(Zn(n)!==n)throw Error(t(188))}function So(n){var i=n.alternate;if(!i){if(i=Zn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Fr(d),n;if(m===c)return Fr(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var E=!1,I=d.child;I;){if(I===a){E=!0,a=d,c=m;break}if(I===c){E=!0,c=d,a=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===a){E=!0,a=m,c=d;break}if(I===c){E=!0,c=m,a=d;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fa(n){return n=So(n),n!==null?yo(n):null}function yo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=yo(n);if(i!==null)return i;n=n.sibling}return null}var Mo=e.unstable_scheduleCallback,Eo=e.unstable_cancelCallback,vc=e.unstable_shouldYield,xc=e.unstable_requestPaint,Xt=e.unstable_now,C=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,K=e.unstable_LowPriority,Le=e.unstable_IdlePriority,Fe=null,Ae=null;function He(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Fe,n,void 0,(n.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ft,nt=Math.log,Qe=Math.LN2;function ft(n){return n>>>=0,n===0?32:31-(nt(n)/Qe|0)|0}var Mt=64,Bt=4194304;function Ot(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var I=E&~d;I!==0?c=Ot(I):(m&=E,m!==0&&(c=Ot(m)))}else E=a&~d,E!==0?c=Ot(E):m!==0&&(c=Ot(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Be(i),d=1<<a,c|=n[a],i&=~d;return c}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Be(m),I=1<<E,B=d[E];B===-1?((I&a)===0||(I&c)!==0)&&(d[E]=Je(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function _t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xn(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function yi(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Be(i),n[i]=a}function Or(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Be(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Dt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Be(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ot=0;function bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ln,cn,hs,Mi,Qd,Sc=!1,To=[],ir=null,rr=null,sr=null,da=new Map,ha=new Map,ar=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(n,i){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function pa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ra(i),i!==null&&cn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function D_(n,i,a,c,d){switch(i){case"focusin":return ir=pa(ir,n,i,a,c,d),!0;case"dragenter":return rr=pa(rr,n,i,a,c,d),!0;case"mouseover":return sr=pa(sr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return da.set(m,pa(da.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ha.set(m,pa(ha.get(m)||null,n,i,a,c,d)),!0}return!1}function eh(n){var i=Br(n.target);if(i!==null){var a=Zn(i);if(a!==null){if(i=a.tag,i===13){if(i=ua(a),i!==null){n.blockedOn=i,Qd(n.priority,function(){hs(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Mc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);lt=c,a.target.dispatchEvent(c),lt=null}else return i=Ra(a),i!==null&&cn(i),n.blockedOn=a,!1;i.shift()}return!0}function th(n,i,a){wo(n)&&a.delete(i)}function I_(){Sc=!1,ir!==null&&wo(ir)&&(ir=null),rr!==null&&wo(rr)&&(rr=null),sr!==null&&wo(sr)&&(sr=null),da.forEach(th),ha.forEach(th)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,Sc||(Sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,I_)))}function ga(n){function i(d){return ma(d,n)}if(0<To.length){ma(To[0],n);for(var a=1;a<To.length;a++){var c=To[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ir!==null&&ma(ir,n),rr!==null&&ma(rr,n),sr!==null&&ma(sr,n),da.forEach(i),ha.forEach(i),a=0;a<ar.length;a++)c=ar[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)eh(a),a.blockedOn===null&&ar.shift()}var ps=L.ReactCurrentBatchConfig,Ao=!0;function U_(n,i,a,c){var d=ot,m=ps.transition;ps.transition=null;try{ot=1,yc(n,i,a,c)}finally{ot=d,ps.transition=m}}function F_(n,i,a,c){var d=ot,m=ps.transition;ps.transition=null;try{ot=4,yc(n,i,a,c)}finally{ot=d,ps.transition=m}}function yc(n,i,a,c){if(Ao){var d=Mc(n,i,a,c);if(d===null)kc(n,i,c,Co,a),Jd(n,c);else if(D_(d,n,i,a,c))c.stopPropagation();else if(Jd(n,c),i&4&&-1<N_.indexOf(n)){for(;d!==null;){var m=Ra(d);if(m!==null&&ln(m),m=Mc(n,i,a,c),m===null&&kc(n,i,c,Co,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else kc(n,i,c,null,a)}}var Co=null;function Mc(n,i,a,c){if(Co=null,n=V(c),n=Br(n),n!==null)if(i=Zn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ua(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Co=n,null}function nh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C()){case j:return 1;case se:return 4;case te:case K:return 16;case Le:return 536870912;default:return 16}default:return 16}}var or=null,Ec=null,Ro=null;function ih(){if(Ro)return Ro;var n,i=Ec,a=i.length,c,d="value"in or?or.value:or.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===d[m-c];c++);return Ro=d.slice(n,1<c?1-c:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function rh(){return!1}function Xn(n){function i(a,c,d,m,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Po:rh,this.isPropagationStopped=rh,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Xn(ms),_a=re({},ms,{view:0,detail:0}),O_=Xn(_a),wc,Ac,va,Lo=re({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(wc=n.screenX-va.screenX,Ac=n.screenY-va.screenY):Ac=wc=0,va=n),wc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),sh=Xn(Lo),B_=re({},Lo,{dataTransfer:0}),k_=Xn(B_),z_=re({},_a,{relatedTarget:0}),Cc=Xn(z_),V_=re({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=Xn(V_),G_=re({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),W_=Xn(G_),X_=re({},ms,{data:0}),ah=Xn(X_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Y_[n])?!!i[n]:!1}function Rc(){return $_}var K_=re({},_a,{key:function(n){if(n.key){var i=j_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?q_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Z_=Xn(K_),Q_=re({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Xn(Q_),J_=re({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),e0=Xn(J_),t0=re({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Xn(t0),i0=re({},Lo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=Xn(i0),s0=[9,13,27,32],bc=f&&"CompositionEvent"in window,xa=null;f&&"documentMode"in document&&(xa=document.documentMode);var a0=f&&"TextEvent"in window&&!xa,lh=f&&(!bc||xa&&8<xa&&11>=xa),ch=" ",uh=!1;function fh(n,i){switch(n){case"keyup":return s0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function o0(n,i){switch(n){case"compositionend":return dh(i);case"keypress":return i.which!==32?null:(uh=!0,ch);case"textInput":return n=i.data,n===ch&&uh?null:n;default:return null}}function l0(n,i){if(gs)return n==="compositionend"||!bc&&fh(n,i)?(n=ih(),Ro=Ec=or=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lh&&i.locale!=="ko"?null:i.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!c0[n.type]:i==="textarea"}function ph(n,i,a,c){pe(c),i=Fo(i,"onChange"),0<i.length&&(a=new Tc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Sa=null,ya=null;function u0(n){Nh(n,0)}function No(n){var i=ys(n);if(Kt(i))return n}function f0(n,i){if(n==="change")return i}var mh=!1;if(f){var Pc;if(f){var Lc="oninput"in document;if(!Lc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Lc=typeof gh.oninput=="function"}Pc=Lc}else Pc=!1;mh=Pc&&(!document.documentMode||9<document.documentMode)}function _h(){Sa&&(Sa.detachEvent("onpropertychange",vh),ya=Sa=null)}function vh(n){if(n.propertyName==="value"&&No(ya)){var i=[];ph(i,ya,n,V(n)),Wn(u0,i)}}function d0(n,i,a){n==="focusin"?(_h(),Sa=i,ya=a,Sa.attachEvent("onpropertychange",vh)):n==="focusout"&&_h()}function h0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(ya)}function p0(n,i){if(n==="click")return No(i)}function m0(n,i){if(n==="input"||n==="change")return No(i)}function g0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:g0;function Ma(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!ui(n[d],i[d]))return!1}return!0}function xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,i){var a=xh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xh(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Nc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function _0(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Sh(a,m);var E=Sh(a,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var v0=f&&"documentMode"in document&&11>=document.documentMode,_s=null,Dc=null,Ea=null,Ic=!1;function Eh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||_s==null||_s!==ht(c)||(c=_s,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&Ma(Ea,c)||(Ea=c,c=Fo(Dc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=_s)))}function Do(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var vs={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Uc={},Th={};f&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Io(n){if(Uc[n])return Uc[n];if(!vs[n])return n;var i=vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Th)return Uc[n]=i[a];return n}var wh=Io("animationend"),Ah=Io("animationiteration"),Ch=Io("animationstart"),Rh=Io("transitionend"),bh=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(n,i){bh.set(n,i),l(i,[n])}for(var Fc=0;Fc<Ph.length;Fc++){var Oc=Ph[Fc],x0=Oc.toLowerCase(),S0=Oc[0].toUpperCase()+Oc.slice(1);lr(x0,"on"+S0)}lr(wh,"onAnimationEnd"),lr(Ah,"onAnimationIteration"),lr(Ch,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Lh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,xo(c,i,void 0,n),n.currentTarget=null}function Nh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],B=I.instance,ie=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;Lh(d,I,ie),m=B}else for(E=0;E<c.length;E++){if(I=c[E],B=I.instance,ie=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;Lh(d,I,ie),m=B}}}if(Ur)throw n=ci,Ur=!1,ci=null,n}function zt(n,i){var a=i[Xc];a===void 0&&(a=i[Xc]=new Set);var c=n+"__bubble";a.has(c)||(Dh(i,n,2,!1),a.add(c))}function Bc(n,i,a){var c=0;i&&(c|=4),Dh(a,n,c,i)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Uo]){n[Uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(y0.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Uo]||(i[Uo]=!0,Bc("selectionchange",!1,i))}}function Dh(n,i,a,c){switch(nh(i)){case 1:var d=U_;break;case 4:d=F_;break;default:d=yc}a=d.bind(null,i,a,n),d=void 0,!oa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function kc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Br(I),E===null)return;if(B=E.tag,B===5||B===6){c=m=E;continue e}I=I.parentNode}}c=c.return}Wn(function(){var ie=m,_e=V(a),xe=[];e:{var ge=bh.get(n);if(ge!==void 0){var Oe=Tc,We=n;switch(n){case"keypress":if(bo(a)===0)break e;case"keydown":case"keyup":Oe=Z_;break;case"focusin":We="focus",Oe=Cc;break;case"focusout":We="blur",Oe=Cc;break;case"beforeblur":case"afterblur":Oe=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=e0;break;case wh:case Ah:case Ch:Oe=H_;break;case Rh:Oe=n0;break;case"scroll":Oe=O_;break;case"wheel":Oe=r0;break;case"copy":case"cut":case"paste":Oe=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=oh}var Ye=(i&4)!==0,Zt=!Ye&&n==="scroll",$=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var H=ie,Q;H!==null;){Q=H;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,$!==null&&(Ee=Rn(H,$),Ee!=null&&Ye.push(Aa(H,Ee,Q)))),Zt)break;H=H.return}0<Ye.length&&(ge=new Oe(ge,We,null,a,_e),xe.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ge&&a!==lt&&(We=a.relatedTarget||a.fromElement)&&(Br(We)||We[Fi]))break e;if((Oe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(We=a.relatedTarget||a.toElement,Oe=ie,We=We?Br(We):null,We!==null&&(Zt=Zn(We),We!==Zt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ie),Oe!==We)){if(Ye=sh,Ee="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=oh,Ee="onPointerLeave",$="onPointerEnter",H="pointer"),Zt=Oe==null?ge:ys(Oe),Q=We==null?ge:ys(We),ge=new Ye(Ee,H+"leave",Oe,a,_e),ge.target=Zt,ge.relatedTarget=Q,Ee=null,Br(_e)===ie&&(Ye=new Ye($,H+"enter",We,a,_e),Ye.target=Q,Ye.relatedTarget=Zt,Ee=Ye),Zt=Ee,Oe&&We)t:{for(Ye=Oe,$=We,H=0,Q=Ye;Q;Q=xs(Q))H++;for(Q=0,Ee=$;Ee;Ee=xs(Ee))Q++;for(;0<H-Q;)Ye=xs(Ye),H--;for(;0<Q-H;)$=xs($),Q--;for(;H--;){if(Ye===$||$!==null&&Ye===$.alternate)break t;Ye=xs(Ye),$=xs($)}Ye=null}else Ye=null;Oe!==null&&Ih(xe,ge,Oe,Ye,!1),We!==null&&Zt!==null&&Ih(xe,Zt,We,Ye,!0)}}e:{if(ge=ie?ys(ie):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ke=f0;else if(hh(ge))if(mh)Ke=m0;else{Ke=h0;var et=d0}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=p0);if(Ke&&(Ke=Ke(n,ie))){ph(xe,Ke,a,_e);break e}et&&et(n,ge,ie),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Gt(ge,"number",ge.value)}switch(et=ie?ys(ie):window,n){case"focusin":(hh(et)||et.contentEditable==="true")&&(_s=et,Dc=ie,Ea=null);break;case"focusout":Ea=Dc=_s=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Eh(xe,a,_e);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Eh(xe,a,_e)}var tt;if(bc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else gs?fh(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(lh&&a.locale!=="ko"&&(gs||st!=="onCompositionStart"?st==="onCompositionEnd"&&gs&&(tt=ih()):(or=_e,Ec="value"in or?or.value:or.textContent,gs=!0)),et=Fo(ie,st),0<et.length&&(st=new ah(st,n,null,a,_e),xe.push({event:st,listeners:et}),tt?st.data=tt:(tt=dh(a),tt!==null&&(st.data=tt)))),(tt=a0?o0(n,a):l0(n,a))&&(ie=Fo(ie,"onBeforeInput"),0<ie.length&&(_e=new ah("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ie}),_e.data=tt))}Nh(xe,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Rn(n,a),m!=null&&c.unshift(Aa(n,m,d)),m=Rn(n,i),m!=null&&c.push(Aa(n,m,d))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ih(n,i,a,c,d){for(var m=i._reactName,E=[];a!==null&&a!==c;){var I=a,B=I.alternate,ie=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&ie!==null&&(I=ie,d?(B=Rn(a,m),B!=null&&E.unshift(Aa(a,B,I))):d||(B=Rn(a,m),B!=null&&E.push(Aa(a,B,I)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var M0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(M0,`
`).replace(E0,"")}function Oo(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function Bo(){}var zc=null,Vc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(n){return Fh.resolve(null).then(n).catch(A0)}:Gc;function A0(n){setTimeout(function(){throw n})}function Wc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ga(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ga(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Ss,Ca="__reactProps$"+Ss,Fi="__reactContainer$"+Ss,Xc="__reactEvents$"+Ss,C0="__reactListeners$"+Ss,R0="__reactHandles$"+Ss;function Br(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Fi]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Oh(n);n!==null;){if(a=n[Ei])return a;n=Oh(n)}return i}n=a,a=n.parentNode}return null}function Ra(n){return n=n[Ei]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Ca]||null}var jc=[],Ms=-1;function ur(n){return{current:n}}function Vt(n){0>Ms||(n.current=jc[Ms],jc[Ms]=null,Ms--)}function kt(n,i){Ms++,jc[Ms]=n.current,n.current=i}var fr={},Sn=ur(fr),Fn=ur(!1),kr=fr;function Es(n,i){var a=n.type.contextTypes;if(!a)return fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function On(n){return n=n.childContextTypes,n!=null}function zo(){Vt(Fn),Vt(Sn)}function Bh(n,i,a){if(Sn.current!==fr)throw Error(t(168));kt(Sn,i),kt(Fn,a)}function kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,de(n)||"Unknown",d));return re({},a,c)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,kr=Sn.current,kt(Sn,n),kt(Fn,Fn.current),!0}function zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kh(n,i,kr),c.__reactInternalMemoizedMergedChildContext=n,Vt(Fn),Vt(Sn),kt(Sn,n)):Vt(Fn),kt(Fn,a)}var Oi=null,Ho=!1,qc=!1;function Vh(n){Oi===null?Oi=[n]:Oi.push(n)}function b0(n){Ho=!0,Vh(n)}function dr(){if(!qc&&Oi!==null){qc=!0;var n=0,i=ot;try{var a=Oi;for(ot=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Oi=null,Ho=!1}catch(d){throw Oi!==null&&(Oi=Oi.slice(n+1)),Mo(j,dr),d}finally{ot=i,qc=!1}}return null}var Ts=[],ws=0,Go=null,Wo=0,Qn=[],Jn=0,zr=null,Bi=1,ki="";function Vr(n,i){Ts[ws++]=Wo,Ts[ws++]=Go,Go=n,Wo=i}function Hh(n,i,a){Qn[Jn++]=Bi,Qn[Jn++]=ki,Qn[Jn++]=zr,zr=n;var c=Bi;n=ki;var d=32-Be(c)-1;c&=~(1<<d),a+=1;var m=32-Be(i)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Bi=1<<32-Be(i)+d|a<<d|c,ki=m+n}else Bi=1<<m|a<<d|c,ki=n}function Yc(n){n.return!==null&&(Vr(n,1),Hh(n,1,0))}function $c(n){for(;n===Go;)Go=Ts[--ws],Ts[ws]=null,Wo=Ts[--ws],Ts[ws]=null;for(;n===zr;)zr=Qn[--Jn],Qn[Jn]=null,ki=Qn[--Jn],Qn[Jn]=null,Bi=Qn[--Jn],Qn[Jn]=null}var jn=null,qn=null,Wt=!1,fi=null;function Gh(n,i){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,qn=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:Bi,overflow:ki}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,jn=n,qn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Wt){var i=qn;if(i){var a=i;if(!Wh(n,i)){if(Kc(n))throw Error(t(418));i=cr(a.nextSibling);var c=jn;i&&Wh(n,i)?Gh(c,a):(n.flags=n.flags&-4097|2,Wt=!1,jn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,jn=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Xo(n){if(n!==jn)return!1;if(!Wt)return Xh(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=qn)){if(Kc(n))throw jh(),Error(t(418));for(;i;)Gh(n,i),i=cr(i.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=jn?cr(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=qn;n;)n=cr(n.nextSibling)}function As(){qn=jn=null,Wt=!1}function Qc(n){fi===null?fi=[n]:fi.push(n)}var P0=L.ReactCurrentBatchConfig;function ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=d.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function jo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qh(n){var i=n._init;return i(n._payload)}function Yh(n){function i($,H){if(n){var Q=$.deletions;Q===null?($.deletions=[H],$.flags|=16):Q.push(H)}}function a($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function c($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d($,H){return $=Sr($,H),$.index=0,$.sibling=null,$}function m($,H,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<H?($.flags|=2,H):Q):($.flags|=2,H)):($.flags|=1048576,H)}function E($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,Q,Ee){return H===null||H.tag!==6?(H=Gu(Q,$.mode,Ee),H.return=$,H):(H=d(H,Q),H.return=$,H)}function B($,H,Q,Ee){var Ke=Q.type;return Ke===O?_e($,H,Q.props.children,Ee,Q.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&qh(Ke)===H.type)?(Ee=d(H,Q.props),Ee.ref=ba($,H,Q),Ee.return=$,Ee):(Ee=gl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=ba($,H,Q),Ee.return=$,Ee)}function ie($,H,Q,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Wu(Q,$.mode,Ee),H.return=$,H):(H=d(H,Q.children||[]),H.return=$,H)}function _e($,H,Q,Ee,Ke){return H===null||H.tag!==7?(H=$r(Q,$.mode,Ee,Ke),H.return=$,H):(H=d(H,Q),H.return=$,H)}function xe($,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Gu(""+H,$.mode,Q),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return Q=gl(H.type,H.key,H.props,null,$.mode,Q),Q.ref=ba($,null,H),Q.return=$,Q;case F:return H=Wu(H,$.mode,Q),H.return=$,H;case le:var Ee=H._init;return xe($,Ee(H._payload),Q)}if(gt(H)||fe(H))return H=$r(H,$.mode,Q,null),H.return=$,H;jo($,H)}return null}function ge($,H,Q,Ee){var Ke=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ke!==null?null:I($,H,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:return Q.key===Ke?B($,H,Q,Ee):null;case F:return Q.key===Ke?ie($,H,Q,Ee):null;case le:return Ke=Q._init,ge($,H,Ke(Q._payload),Ee)}if(gt(Q)||fe(Q))return Ke!==null?null:_e($,H,Q,Ee,null);jo($,Q)}return null}function Oe($,H,Q,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return $=$.get(Q)||null,I(H,$,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return $=$.get(Ee.key===null?Q:Ee.key)||null,B(H,$,Ee,Ke);case F:return $=$.get(Ee.key===null?Q:Ee.key)||null,ie(H,$,Ee,Ke);case le:var et=Ee._init;return Oe($,H,Q,et(Ee._payload),Ke)}if(gt(Ee)||fe(Ee))return $=$.get(Q)||null,_e(H,$,Ee,Ke,null);jo(H,Ee)}return null}function We($,H,Q,Ee){for(var Ke=null,et=null,tt=H,st=H=0,dn=null;tt!==null&&st<Q.length;st++){tt.index>st?(dn=tt,tt=null):dn=tt.sibling;var At=ge($,tt,Q[st],Ee);if(At===null){tt===null&&(tt=dn);break}n&&tt&&At.alternate===null&&i($,tt),H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At,tt=dn}if(st===Q.length)return a($,tt),Wt&&Vr($,st),Ke;if(tt===null){for(;st<Q.length;st++)tt=xe($,Q[st],Ee),tt!==null&&(H=m(tt,H,st),et===null?Ke=tt:et.sibling=tt,et=tt);return Wt&&Vr($,st),Ke}for(tt=c($,tt);st<Q.length;st++)dn=Oe(tt,$,st,Q[st],Ee),dn!==null&&(n&&dn.alternate!==null&&tt.delete(dn.key===null?st:dn.key),H=m(dn,H,st),et===null?Ke=dn:et.sibling=dn,et=dn);return n&&tt.forEach(function(yr){return i($,yr)}),Wt&&Vr($,st),Ke}function Ye($,H,Q,Ee){var Ke=fe(Q);if(typeof Ke!="function")throw Error(t(150));if(Q=Ke.call(Q),Q==null)throw Error(t(151));for(var et=Ke=null,tt=H,st=H=0,dn=null,At=Q.next();tt!==null&&!At.done;st++,At=Q.next()){tt.index>st?(dn=tt,tt=null):dn=tt.sibling;var yr=ge($,tt,At.value,Ee);if(yr===null){tt===null&&(tt=dn);break}n&&tt&&yr.alternate===null&&i($,tt),H=m(yr,H,st),et===null?Ke=yr:et.sibling=yr,et=yr,tt=dn}if(At.done)return a($,tt),Wt&&Vr($,st),Ke;if(tt===null){for(;!At.done;st++,At=Q.next())At=xe($,At.value,Ee),At!==null&&(H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At);return Wt&&Vr($,st),Ke}for(tt=c($,tt);!At.done;st++,At=Q.next())At=Oe(tt,$,st,At.value,Ee),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?st:At.key),H=m(At,H,st),et===null?Ke=At:et.sibling=At,et=At);return n&&tt.forEach(function(cv){return i($,cv)}),Wt&&Vr($,st),Ke}function Zt($,H,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===O&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:e:{for(var Ke=Q.key,et=H;et!==null;){if(et.key===Ke){if(Ke=Q.type,Ke===O){if(et.tag===7){a($,et.sibling),H=d(et,Q.props.children),H.return=$,$=H;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===le&&qh(Ke)===et.type){a($,et.sibling),H=d(et,Q.props),H.ref=ba($,et,Q),H.return=$,$=H;break e}a($,et);break}else i($,et);et=et.sibling}Q.type===O?(H=$r(Q.props.children,$.mode,Ee,Q.key),H.return=$,$=H):(Ee=gl(Q.type,Q.key,Q.props,null,$.mode,Ee),Ee.ref=ba($,H,Q),Ee.return=$,$=Ee)}return E($);case F:e:{for(et=Q.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a($,H.sibling),H=d(H,Q.children||[]),H.return=$,$=H;break e}else{a($,H);break}else i($,H);H=H.sibling}H=Wu(Q,$.mode,Ee),H.return=$,$=H}return E($);case le:return et=Q._init,Zt($,H,et(Q._payload),Ee)}if(gt(Q))return We($,H,Q,Ee);if(fe(Q))return Ye($,H,Q,Ee);jo($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(a($,H.sibling),H=d(H,Q),H.return=$,$=H):(a($,H),H=Gu(Q,$.mode,Ee),H.return=$,$=H),E($)):a($,H)}return Zt}var Cs=Yh(!0),$h=Yh(!1),qo=ur(null),Yo=null,Rs=null,Jc=null;function eu(){Jc=Rs=Yo=null}function tu(n){var i=qo.current;Vt(qo),n._currentValue=i}function nu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function bs(n,i){Yo=n,Jc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ei(n){var i=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(Yo===null)throw Error(t(308));Rs=n,Yo.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Hr=null;function iu(n){Hr===null?Hr=[n]:Hr.push(n)}function Kh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,iu(i)):(a.next=d.next,d.next=a),i.interleaved=a,zi(n,c)}function zi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function ru(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,zi(n,a)}return d=c.interleaved,d===null?(i.next=i,iu(c)):(i.next=d.next,d.next=i),c.interleaved=i,zi(n,a)}function $o(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dt(n,a)}}function Qh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ko(n,i,a,c){var d=n.updateQueue;hr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,ie=B.next;B.next=null,E===null?m=ie:E.next=ie,E=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ie:I.next=ie,_e.lastBaseUpdate=B))}if(m!==null){var xe=d.baseState;E=0,_e=ie=B=null,I=m;do{var ge=I.lane,Oe=I.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,Ye=I;switch(ge=i,Oe=a,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){xe=We.call(Oe,xe,ge);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,ge=typeof We=="function"?We.call(Oe,xe,ge):We,ge==null)break e;xe=re({},xe,ge);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Oe={eventTime:Oe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ie=_e=Oe,B=xe):_e=_e.next=Oe,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(B=xe),d.baseState=B,d.firstBaseUpdate=ie,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Xr|=E,n.lanes=E,n.memoizedState=xe}}function Jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Pa={},Ti=ur(Pa),La=ur(Pa),Na=ur(Pa);function Gr(n){if(n===Pa)throw Error(t(174));return n}function su(n,i){switch(kt(Na,i),kt(La,n),kt(Ti,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Vt(Ti),kt(Ti,i)}function Ps(){Vt(Ti),Vt(La),Vt(Na)}function ep(n){Gr(Na.current);var i=Gr(Ti.current),a=me(i,n.type);i!==a&&(kt(La,n),kt(Ti,a))}function au(n){La.current===n&&(Vt(Ti),Vt(La))}var jt=ur(0);function Zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ou=[];function lu(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var Qo=L.ReactCurrentDispatcher,cu=L.ReactCurrentBatchConfig,Wr=0,qt=null,rn=null,un=null,Jo=!1,Da=!1,Ia=0,L0=0;function yn(){throw Error(t(321))}function uu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ui(n[a],i[a]))return!1;return!0}function fu(n,i,a,c,d,m){if(Wr=m,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=n===null||n.memoizedState===null?U0:F0,n=a(c,d),Da){m=0;do{if(Da=!1,Ia=0,25<=m)throw Error(t(301));m+=1,un=rn=null,i.updateQueue=null,Qo.current=O0,n=a(c,d)}while(Da)}if(Qo.current=nl,i=rn!==null&&rn.next!==null,Wr=0,un=rn=qt=null,Jo=!1,i)throw Error(t(300));return n}function du(){var n=Ia!==0;return Ia=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?qt.memoizedState=un=n:un=un.next=n,un}function ti(){if(rn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=un===null?qt.memoizedState:un.next;if(i!==null)un=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},un===null?qt.memoizedState=un=n:un=un.next=n}return un}function Ua(n,i){return typeof i=="function"?i(n):i}function hu(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=rn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=E=null,B=null,ie=m;do{var _e=ie.lane;if((Wr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var xe={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(I=B=xe,E=c):B=B.next=xe,qt.lanes|=_e,Xr|=_e}ie=ie.next}while(ie!==null&&ie!==m);B===null?E=c:B.next=I,ui(c,i.memoizedState)||(Bn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,qt.lanes|=m,Xr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pu(n){var i=ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ui(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function tp(){}function np(n,i){var a=qt,c=ti(),d=i(),m=!ui(c.memoizedState,d);if(m&&(c.memoizedState=d,Bn=!0),c=c.queue,mu(sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,Fa(9,rp.bind(null,a,c,d,i),void 0,null),fn===null)throw Error(t(349));(Wr&30)!==0||ip(a,i,d)}return d}function ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rp(n,i,a,c){i.value=a,i.getSnapshot=c,ap(i)&&op(n)}function sp(n,i,a){return a(function(){ap(i)&&op(n)})}function ap(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ui(n,a)}catch{return!0}}function op(n){var i=zi(n,1);i!==null&&mi(i,n,1,-1)}function lp(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=I0.bind(null,qt,n),[i.memoizedState,n]}function Fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function cp(){return ti().memoizedState}function el(n,i,a,c){var d=wi();qt.flags|=n,d.memoizedState=Fa(1|i,a,void 0,c===void 0?null:c)}function tl(n,i,a,c){var d=ti();c=c===void 0?null:c;var m=void 0;if(rn!==null){var E=rn.memoizedState;if(m=E.destroy,c!==null&&uu(c,E.deps)){d.memoizedState=Fa(i,a,m,c);return}}qt.flags|=n,d.memoizedState=Fa(1|i,a,m,c)}function up(n,i){return el(8390656,8,n,i)}function mu(n,i){return tl(2048,8,n,i)}function fp(n,i){return tl(4,2,n,i)}function dp(n,i){return tl(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,hp.bind(null,i,n),a)}function gu(){}function mp(n,i){var a=ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gp(n,i){var a=ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function _p(n,i,a){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(ui(a,i)||(a=xn(),qt.lanes|=a,Xr|=a,n.baseState=!0),i)}function N0(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var c=cu.transition;cu.transition={};try{n(!1),i()}finally{ot=a,cu.transition=c}}function vp(){return ti().memoizedState}function D0(n,i,a){var c=vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))Sp(i,a);else if(a=Kh(n,i,a,c),a!==null){var d=Ln();mi(a,n,c,d),yp(a,i,c)}}function I0(n,i,a){var c=vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))Sp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,a);if(d.hasEagerState=!0,d.eagerState=I,ui(I,E)){var B=i.interleaved;B===null?(d.next=d,iu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Kh(n,i,d,c),a!==null&&(d=Ln(),mi(a,n,c,d),yp(a,i,c))}}function xp(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function Sp(n,i){Da=Jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dt(n,a)}}var nl={readContext:ei,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},U0={readContext:ei,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:ei,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=wi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=wi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=D0.bind(null,qt,n),[c.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:lp,useDebugValue:gu,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=lp(!1),i=n[0];return n=N0.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=qt,d=wi();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),fn===null)throw Error(t(349));(Wr&30)!==0||ip(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,up(sp.bind(null,c,m,n),[n]),c.flags|=2048,Fa(9,rp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=wi(),i=fn.identifierPrefix;if(Wt){var a=ki,c=Bi;a=(c&~(1<<32-Be(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=L0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},F0={readContext:ei,useCallback:mp,useContext:ei,useEffect:mu,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:hu,useRef:cp,useState:function(){return hu(Ua)},useDebugValue:gu,useDeferredValue:function(n){var i=ti();return _p(i,rn.memoizedState,n)},useTransition:function(){var n=hu(Ua)[0],i=ti().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1},O0={readContext:ei,useCallback:mp,useContext:ei,useEffect:mu,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:pu,useRef:cp,useState:function(){return pu(Ua)},useDebugValue:gu,useDeferredValue:function(n){var i=ti();return rn===null?i.memoizedState=n:_p(i,rn.memoizedState,n)},useTransition:function(){var n=pu(Ua)[0],i=ti().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _u(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?Zn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=vr(n),m=Vi(c,d);m.payload=i,a!=null&&(m.callback=a),i=pr(n,m,d),i!==null&&(mi(i,n,d,c),$o(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=vr(n),m=Vi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=pr(n,m,d),i!==null&&(mi(i,n,d,c),$o(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=vr(n),d=Vi(a,c);d.tag=2,i!=null&&(d.callback=i),i=pr(n,d,c),i!==null&&(mi(i,n,c,a),$o(i,n,c))}};function Mp(n,i,a,c,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(d,m):!0}function Ep(n,i,a){var c=!1,d=fr,m=i.contextType;return typeof m=="object"&&m!==null?m=ei(m):(d=On(i)?kr:Sn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,d):fr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Tp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function vu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ru(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ei(m):(m=On(i)?kr:Sn.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(_u(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&il.enqueueReplaceState(d,d.state,null),Ko(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=Ze(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function xu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Su(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function wp(n,i,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ul||(ul=!0,Uu=c),Su(n,i)},a}function Ap(n,i,a){a=Vi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Su(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Su(n,i),typeof c!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new B0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Q0.bind(null,n,i,a),i.then(n,n))}function Rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function bp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Vi(-1,1),i.tag=2,pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var k0=L.ReactCurrentOwner,Bn=!1;function Pn(n,i,a,c){i.child=n===null?$h(i,null,a,c):Cs(i,n.child,a,c)}function Pp(n,i,a,c,d){a=a.render;var m=i.ref;return bs(i,d),c=fu(n,i,a,c,m,d),a=du(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Hi(n,i,d)):(Wt&&a&&Yc(i),i.flags|=1,Pn(n,i,c,d),i.child)}function Lp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Hu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Np(n,i,m,c,d)):(n=gl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(E,c)&&n.ref===i.ref)return Hi(n,i,d)}return i.flags|=1,n=Sr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Np(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ma(m,c)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,Hi(n,i,d)}return yu(n,i,a,c,d)}function Dp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ds,Yn),Yn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ds,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Ds,Yn),Yn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Ds,Yn),Yn|=c;return Pn(n,i,d,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function yu(n,i,a,c,d){var m=On(a)?kr:Sn.current;return m=Es(i,m),bs(i,d),a=fu(n,i,a,c,m,d),c=du(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Hi(n,i,d)):(Wt&&c&&Yc(i),i.flags|=1,Pn(n,i,a,d),i.child)}function Up(n,i,a,c,d){if(On(a)){var m=!0;Vo(i)}else m=!1;if(bs(i,d),i.stateNode===null)sl(n,i),Ep(i,a,c),vu(i,a,c,d),c=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=ei(ie):(ie=On(a)?kr:Sn.current,ie=Es(i,ie));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||B!==ie)&&Tp(i,E,c,ie),hr=!1;var ge=i.memoizedState;E.state=ge,Ko(i,c,E,d),B=i.memoizedState,I!==c||ge!==B||Fn.current||hr?(typeof _e=="function"&&(_u(i,a,_e,c),B=i.memoizedState),(I=hr||Mp(i,a,I,c,ge,B,ie))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=ie,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Zh(n,i),I=i.memoizedProps,ie=i.type===i.elementType?I:di(i.type,I),E.props=ie,xe=i.pendingProps,ge=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=ei(B):(B=On(a)?kr:Sn.current,B=Es(i,B));var Oe=a.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||ge!==B)&&Tp(i,E,c,B),hr=!1,ge=i.memoizedState,E.state=ge,Ko(i,c,E,d);var We=i.memoizedState;I!==xe||ge!==We||Fn.current||hr?(typeof Oe=="function"&&(_u(i,a,Oe,c),We=i.memoizedState),(ie=hr||Mp(i,a,ie,c,ge,We,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,We,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,We,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),E.props=c,E.state=We,E.context=B,c=ie):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return Mu(n,i,a,c,m,d)}function Mu(n,i,a,c,d,m){Ip(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&zh(i,a,!1),Hi(n,i,m);c=i.stateNode,k0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Cs(i,n.child,null,m),i.child=Cs(i,null,I,m)):Pn(n,i,I,m),i.memoizedState=c.state,d&&zh(i,a,!0),i.child}function Fp(n){var i=n.stateNode;i.pendingContext?Bh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bh(n,i.context,!1),su(n,i.containerInfo)}function Op(n,i,a,c,d){return As(),Qc(d),i.flags|=256,Pn(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bp(n,i,a){var c=i.pendingProps,d=jt.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(jt,d&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=_l(E,c,0,null),n=$r(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Tu(a),i.memoizedState=Eu,n):wu(i,E));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return z0(n,i,E,c,I,d,a);if(m){m=c.fallback,E=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Sr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Sr(I,m):(m=$r(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?Tu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return m=n.child,n=m.sibling,c=Sr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function wu(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,c){return c!==null&&Qc(c),Cs(i,n.child,null,a),n=wu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function z0(n,i,a,c,d,m,E){if(a)return i.flags&256?(i.flags&=-257,c=xu(Error(t(422))),rl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=_l({mode:"visible",children:c.children},d,0,null),m=$r(m,d,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Cs(i,n.child,null,E),i.child.memoizedState=Tu(E),i.memoizedState=Eu,m);if((i.mode&1)===0)return rl(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=xu(m,c,void 0),rl(n,i,E,c)}if(I=(E&n.childLanes)!==0,Bn||I){if(c=fn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,zi(n,d),mi(c,n,d,-1))}return Vu(),c=xu(Error(t(421))),rl(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=J0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,qn=cr(d.nextSibling),jn=i,Wt=!0,fi=null,n!==null&&(Qn[Jn++]=Bi,Qn[Jn++]=ki,Qn[Jn++]=zr,Bi=n.id,ki=n.overflow,zr=i),i=wu(i,c.children),i.flags|=4096,i)}function kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nu(n.return,i,a)}function Au(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function zp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Pn(n,i,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,i);else if(n.tag===19)kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Zo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Au(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Zo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Au(i,!0,a,null,m);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Hi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function V0(n,i,a){switch(i.tag){case 3:Fp(i),As();break;case 5:ep(i);break;case 1:On(i.type)&&Vo(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(qo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Bp(n,i,a):(kt(jt,jt.current&1),n=Hi(n,i,a),n!==null?n.sibling:null);kt(jt,jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return zp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(jt,jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return Hi(n,i,a)}var Vp,Cu,Hp,Gp;Vp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},Hp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Gr(Ti.current);var m=null;switch(a){case"input":d=xt(n,d),c=xt(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=je(n,d),c=je(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Bo)}qe(a,c);var E;a=null;for(ie in d)if(!c.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?m||(m=[]):(m=m||[]).push(ie,null));for(ie in c){var B=c[ie];if(I=d!=null?d[ie]:void 0,c.hasOwnProperty(ie)&&B!==I&&(B!=null||I!=null))if(ie==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(m||(m=[]),m.push(ie,a)),a=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&zt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(ie,B))}a&&(m=m||[]).push("style",a);var ie=m;(i.updateQueue=ie)&&(i.flags|=4)}},Gp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Oa(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function H0(n,i,a){var c=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return On(i.type)&&zo(),Mn(i),null;case 3:return c=i.stateNode,Ps(),Vt(Fn),Vt(Sn),lu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(Bu(fi),fi=null))),Cu(n,i),Mn(i),null;case 5:au(i);var d=Gr(Na.current);if(a=i.type,n!==null&&i.stateNode!=null)Hp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=Gr(Ti.current),Xo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ei]=i,c[Ca]=m,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(d=0;d<Ta.length;d++)zt(Ta[d],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":Nt(c,m),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},zt("invalid",c);break;case"textarea":N(c,m),zt("invalid",c)}qe(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Oo(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Oo(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&zt("scroll",c)}switch(a){case"input":mt(c),k(c,m,!0);break;case"textarea":mt(c),W(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Bo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Ei]=i,n[Ca]=c,Vp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ce(a,c),a){case"dialog":zt("cancel",n),zt("close",n),d=c;break;case"iframe":case"object":case"embed":zt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ta.length;d++)zt(Ta[d],n);d=c;break;case"source":zt("error",n),d=c;break;case"img":case"image":case"link":zt("error",n),zt("load",n),d=c;break;case"details":zt("toggle",n),d=c;break;case"input":Nt(n,c),d=xt(n,c),zt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),zt("invalid",n);break;case"textarea":N(n,c),d=je(n,c),zt("invalid",n);break;default:d=c}qe(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?Pe(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&we(n,B):typeof B=="number"&&we(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&zt("scroll",n):B!=null&&P(n,m,B,E))}switch(a){case"input":mt(n),k(n,c,!1);break;case"textarea":mt(n),W(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?St(n,!!c.multiple,m,!1):c.defaultValue!=null&&St(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)Gp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gr(Na.current),Gr(Ti.current),Xo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ei]=i,(m=c.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:Oo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return Mn(i),null;case 13:if(Vt(jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jh(),As(),i.flags|=98560,m=!1;else if(m=Xo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),m=!1}else fi!==null&&(Bu(fi),fi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?sn===0&&(sn=3):Vu())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Ps(),Cu(n,i),n===null&&wa(i.stateNode.containerInfo),Mn(i),null;case 10:return tu(i.type._context),Mn(i),null;case 17:return On(i.type)&&zo(),Mn(i),null;case 19:if(Vt(jt),m=i.memoizedState,m===null)return Mn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Oa(m,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Zo(n),E!==null){for(i.flags|=128,Oa(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xt()>Is&&(i.flags|=128,c=!0,Oa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Zo(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Wt)return Mn(i),null}else 2*Xt()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Oa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xt(),i.sibling=null,a=jt.current,kt(jt,c?a&1|2:a&1),i):(Mn(i),null);case 22:case 23:return zu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function G0(n,i){switch($c(i),i.tag){case 1:return On(i.type)&&zo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Vt(Fn),Vt(Sn),lu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(Vt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(jt),null;case 4:return Ps(),null;case 10:return tu(i.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var al=!1,En=!1,W0=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ns(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Yt(n,i,c)}else a.current=null}function Ru(n,i,a){try{a()}catch(c){Yt(n,i,c)}}var Wp=!1;function X0(n,i){if(zc=Ao,n=Mh(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,I=-1,B=-1,ie=0,_e=0,xe=n,ge=null;t:for(;;){for(var Oe;xe!==a||d!==0&&xe.nodeType!==3||(I=E+d),xe!==m||c!==0&&xe.nodeType!==3||(B=E+c),xe.nodeType===3&&(E+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)ge=xe,xe=Oe;for(;;){if(xe===n)break t;if(ge===a&&++ie===d&&(I=E),ge===m&&++_e===c&&(B=E),(Oe=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Oe}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Ao=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,Zt=We.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:di(i.type,Ye),Zt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return We=Wp,Wp=!1,We}function Ba(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Ru(i,a,m)}d=d.next}while(d!==c)}}function ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Xp(n){var i=n.alternate;i!==null&&(n.alternate=null,Xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[Ca],delete i[Xc],delete i[C0],delete i[R0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jp(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bo));else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}var pn=null,hi=!1;function mr(n,i,a){for(a=a.child;a!==null;)Yp(n,i,a),a=a.sibling}function Yp(n,i,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Fe,a)}catch{}switch(a.tag){case 5:En||Ns(a,i);case 6:var c=pn,d=hi;pn=null,mr(n,i,a),pn=c,hi=d,pn!==null&&(hi?(n=pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(hi?(n=pn,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),ga(n)):Wc(pn,a.stateNode));break;case 4:c=pn,d=hi,pn=a.stateNode.containerInfo,hi=!0,mr(n,i,a),pn=c,hi=d;break;case 0:case 11:case 14:case 15:if(!En&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Ru(a,i,E),d=d.next}while(d!==c)}mr(n,i,a);break;case 1:if(!En&&(Ns(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Yt(a,i,I)}mr(n,i,a);break;case 21:mr(n,i,a);break;case 22:a.mode&1?(En=(c=En)||a.memoizedState!==null,mr(n,i,a),En=c):mr(n,i,a);break;default:mr(n,i,a)}}function $p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new W0),i.forEach(function(c){var d=ev.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function pi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,hi=!1;break e;case 3:pn=I.stateNode.containerInfo,hi=!0;break e;case 4:pn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(pn===null)throw Error(t(160));Yp(m,E,d),pn=null,hi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ie){Yt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),Ai(n),c&4){try{Ba(3,n,n.return),ol(3,n)}catch(Ye){Yt(n,n.return,Ye)}try{Ba(5,n,n.return)}catch(Ye){Yt(n,n.return,Ye)}}break;case 1:pi(i,n),Ai(n),c&512&&a!==null&&Ns(a,a.return);break;case 5:if(pi(i,n),Ai(n),c&512&&a!==null&&Ns(a,a.return),n.flags&32){var d=n.stateNode;try{we(d,"")}catch(Ye){Yt(n,n.return,Ye)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ct(d,m),Ce(I,E);var ie=Ce(I,m);for(E=0;E<B.length;E+=2){var _e=B[E],xe=B[E+1];_e==="style"?Pe(d,xe):_e==="dangerouslySetInnerHTML"?$e(d,xe):_e==="children"?we(d,xe):P(d,_e,xe,ie)}switch(I){case"input":Ht(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?St(d,!!m.multiple,Oe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ca]=m}catch(Ye){Yt(n,n.return,Ye)}}break;case 6:if(pi(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ye){Yt(n,n.return,Ye)}}break;case 3:if(pi(i,n),Ai(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(Ye){Yt(n,n.return,Ye)}break;case 4:pi(i,n),Ai(n);break;case 13:pi(i,n),Ai(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Iu=Xt())),c&4&&$p(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(En=(ie=En)||_e,pi(i,n),En=ie):pi(i,n),Ai(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!_e&&(n.mode&1)!==0)for(Ve=n,_e=n.child;_e!==null;){for(xe=Ve=_e;Ve!==null;){switch(ge=Ve,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ba(4,ge,ge.return);break;case 1:Ns(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ye){Yt(c,a,Ye)}}break;case 5:Ns(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Jp(xe);continue}}Oe!==null?(Oe.return=ge,Ve=Oe):Jp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,ie?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Se("display",E))}catch(Ye){Yt(n,n.return,Ye)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ie?"":xe.memoizedProps}catch(Ye){Yt(n,n.return,Ye)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:pi(i,n),Ai(n),c&4&&$p(n);break;case 21:break;default:pi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(jp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(we(d,""),c.flags&=-33);var m=qp(n);Lu(n,m,d);break;case 3:case 4:var E=c.stateNode.containerInfo,I=qp(n);Pu(n,I,E);break;default:throw Error(t(161))}}catch(B){Yt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function j0(n,i,a){Ve=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||al;if(!E){var I=d.alternate,B=I!==null&&I.memoizedState!==null||En;I=al;var ie=En;if(al=E,(En=B)&&!ie)for(Ve=d;Ve!==null;)E=Ve,B=E.child,E.tag===22&&E.memoizedState!==null?em(d):B!==null?(B.return=E,Ve=B):em(d);for(;m!==null;)Ve=m,Zp(m),m=m.sibling;Ve=d,al=I,En=ie}Qp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Qp(n)}}function Qp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||ol(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!En)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Jh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ga(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&bu(i)}catch(ge){Yt(i,i.return,ge)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Jp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function em(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ol(4,i)}catch(B){Yt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){Yt(i,d,B)}}var m=i.return;try{bu(i)}catch(B){Yt(i,m,B)}break;case 5:var E=i.return;try{bu(i)}catch(B){Yt(i,E,B)}}}catch(B){Yt(i,i.return,B)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var q0=Math.ceil,ll=L.ReactCurrentDispatcher,Nu=L.ReactCurrentOwner,ni=L.ReactCurrentBatchConfig,Et=0,fn=null,Jt=null,mn=0,Yn=0,Ds=ur(0),sn=0,ka=null,Xr=0,cl=0,Du=0,za=null,kn=null,Iu=0,Is=1/0,Gi=null,ul=!1,Uu=null,gr=null,fl=!1,_r=null,dl=0,Va=0,Fu=null,hl=-1,pl=0;function Ln(){return(Et&6)!==0?Xt():hl!==-1?hl:hl=Xt()}function vr(n){return(n.mode&1)===0?1:(Et&2)!==0&&mn!==0?mn&-mn:P0.transition!==null?(pl===0&&(pl=xn()),pl):(n=ot,n!==0||(n=window.event,n=n===void 0?16:nh(n.type)),n)}function mi(n,i,a,c){if(50<Va)throw Va=0,Fu=null,Error(t(185));nn(n,a,c),((Et&2)===0||n!==fn)&&(n===fn&&((Et&2)===0&&(cl|=a),sn===4&&xr(n,mn)),zn(n,c),a===1&&Et===0&&(i.mode&1)===0&&(Is=Xt()+500,Ho&&dr()))}function zn(n,i){var a=n.callbackNode;bt(n,i);var c=wt(n,n===fn?mn:0);if(c===0)a!==null&&Eo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Eo(a),i===1)n.tag===0?b0(nm.bind(null,n)):Vh(nm.bind(null,n)),w0(function(){(Et&6)===0&&dr()}),a=null;else{switch(bn(c)){case 1:a=j;break;case 4:a=se;break;case 16:a=te;break;case 536870912:a=Le;break;default:a=te}a=um(a,tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tm(n,i){if(hl=-1,pl=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=wt(n,n===fn?mn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ml(n,c);else{i=c;var d=Et;Et|=2;var m=rm();(fn!==n||mn!==i)&&(Gi=null,Is=Xt()+500,qr(n,i));do try{K0();break}catch(I){im(n,I)}while(!0);eu(),ll.current=m,Et=d,Jt!==null?i=0:(fn=null,mn=0,i=sn)}if(i!==0){if(i===2&&(d=_t(n),d!==0&&(c=d,i=Ou(n,d))),i===1)throw a=ka,qr(n,0),xr(n,c),zn(n,Xt()),a;if(i===6)xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Y0(d)&&(i=ml(n,c),i===2&&(m=_t(n),m!==0&&(c=m,i=Ou(n,m))),i===1))throw a=ka,qr(n,0),xr(n,c),zn(n,Xt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,kn,Gi);break;case 3:if(xr(n,c),(c&130023424)===c&&(i=Iu+500-Xt(),10<i)){if(wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gc(Yr.bind(null,n,kn,Gi),i);break}Yr(n,kn,Gi);break;case 4:if(xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-Be(c);m=1<<E,E=i[E],E>d&&(d=E),c&=~m}if(c=d,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*q0(c/1960))-c,10<c){n.timeoutHandle=Gc(Yr.bind(null,n,kn,Gi),c);break}Yr(n,kn,Gi);break;case 5:Yr(n,kn,Gi);break;default:throw Error(t(329))}}}return zn(n,Xt()),n.callbackNode===a?tm.bind(null,n):null}function Ou(n,i){var a=za;return n.current.memoizedState.isDehydrated&&(qr(n,i).flags|=256),n=ml(n,i),n!==2&&(i=kn,kn=a,i!==null&&Bu(i)),n}function Bu(n){kn===null?kn=n:kn.push.apply(kn,n)}function Y0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!ui(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~Du,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Be(i),c=1<<a;n[a]=-1,i&=~c}}function nm(n){if((Et&6)!==0)throw Error(t(327));Us();var i=wt(n,0);if((i&1)===0)return zn(n,Xt()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var c=_t(n);c!==0&&(i=c,a=Ou(n,c))}if(a===1)throw a=ka,qr(n,0),xr(n,i),zn(n,Xt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,kn,Gi),zn(n,Xt()),null}function ku(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Is=Xt()+500,Ho&&dr())}}function jr(n){_r!==null&&_r.tag===0&&(Et&6)===0&&Us();var i=Et;Et|=1;var a=ni.transition,c=ot;try{if(ni.transition=null,ot=1,n)return n()}finally{ot=c,ni.transition=a,Et=i,(Et&6)===0&&dr()}}function zu(){Yn=Ds.current,Vt(Ds)}function qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,T0(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zo();break;case 3:Ps(),Vt(Fn),Vt(Sn),lu();break;case 5:au(c);break;case 4:Ps();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:tu(c.type._context);break;case 22:case 23:zu()}a=a.return}if(fn=n,Jt=n=Sr(n.current,null),mn=Yn=i,sn=0,ka=null,Du=cl=Xr=0,kn=za=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,c.next=E}a.pending=c}Hr=null}return n}function im(n,i){do{var a=Jt;try{if(eu(),Qo.current=nl,Jo){for(var c=qt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Jo=!1}if(Wr=0,un=rn=qt=null,Da=!1,Ia=0,Nu.current=null,a===null||a.return===null){sn=1,ka=i,Jt=null;break}e:{var m=n,E=a.return,I=a,B=i;if(i=mn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,_e=I,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Rp(E);if(Oe!==null){Oe.flags&=-257,bp(Oe,E,I,m,i),Oe.mode&1&&Cp(m,ie,i),i=Oe,B=ie;var We=i.updateQueue;if(We===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else We.add(B);break e}else{if((i&1)===0){Cp(m,ie,i),Vu();break e}B=Error(t(426))}}else if(Wt&&I.mode&1){var Zt=Rp(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),bp(Zt,E,I,m,i),Qc(Ls(B,I));break e}}m=B=Ls(B,I),sn!==4&&(sn=2),za===null?za=[m]:za.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=wp(m,B,i);Qh(m,$);break e;case 1:I=B;var H=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(gr===null||!gr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Ap(m,I,i);Qh(m,Ee);break e}}m=m.return}while(m!==null)}am(a)}catch(Ke){i=Ke,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function rm(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Vu(){(sn===0||sn===3||sn===2)&&(sn=4),fn===null||(Xr&268435455)===0&&(cl&268435455)===0||xr(fn,mn)}function ml(n,i){var a=Et;Et|=2;var c=rm();(fn!==n||mn!==i)&&(Gi=null,qr(n,i));do try{$0();break}catch(d){im(n,d)}while(!0);if(eu(),Et=a,ll.current=c,Jt!==null)throw Error(t(261));return fn=null,mn=0,sn}function $0(){for(;Jt!==null;)sm(Jt)}function K0(){for(;Jt!==null&&!vc();)sm(Jt)}function sm(n){var i=cm(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?am(n):Jt=i,Nu.current=null}function am(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=H0(a,i,Yn),a!==null){Jt=a;return}}else{if(a=G0(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);sn===0&&(sn=5)}function Yr(n,i,a){var c=ot,d=ni.transition;try{ni.transition=null,ot=1,Z0(n,i,a,c)}finally{ni.transition=d,ot=c}return null}function Z0(n,i,a,c){do Us();while(_r!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Or(n,m),n===fn&&(Jt=fn=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fl||(fl=!0,um(te,function(){return Us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ni.transition,ni.transition=null;var E=ot;ot=1;var I=Et;Et|=4,Nu.current=null,X0(n,a),Kp(a,n),_0(Vc),Ao=!!zc,Vc=zc=null,n.current=a,j0(a),xc(),Et=I,ot=E,ni.transition=m}else n.current=a;if(fl&&(fl=!1,_r=n,dl=d),m=n.pendingLanes,m===0&&(gr=null),He(a.stateNode),zn(n,Xt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ul)throw ul=!1,n=Uu,Uu=null,n;return(dl&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===Fu?Va++:(Va=0,Fu=n):Va=0,dr(),null}function Us(){if(_r!==null){var n=bn(dl),i=ni.transition,a=ot;try{if(ni.transition=null,ot=16>n?16:n,_r===null)var c=!1;else{if(n=_r,_r=null,dl=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Ve=n.current;Ve!==null;){var m=Ve,E=m.child;if((Ve.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ie=I[B];for(Ve=ie;Ve!==null;){var _e=Ve;switch(_e.tag){case 0:case 11:case 15:Ba(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,Ve=xe;else for(;Ve!==null;){_e=Ve;var ge=_e.sibling,Oe=_e.return;if(Xp(_e),_e===ie){Ve=null;break}if(ge!==null){ge.return=Oe,Ve=ge;break}Ve=Oe}}}var We=m.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var Zt=Ye.sibling;Ye.sibling=null,Ye=Zt}while(Ye!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ve=E;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ba(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Ve=$;break e}Ve=m.return}}var H=n.current;for(Ve=H;Ve!==null;){E=Ve;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,Ve=Q;else e:for(E=H;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:ol(9,I)}}catch(Ke){Yt(I,I.return,Ke)}if(I===E){Ve=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Ve=Ee;break e}Ve=I.return}}if(Et=d,dr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Fe,n)}catch{}c=!0}return c}finally{ot=a,ni.transition=i}}return!1}function om(n,i,a){i=Ls(a,i),i=wp(n,i,1),n=pr(n,i,1),i=Ln(),n!==null&&(nn(n,1,i),zn(n,i))}function Yt(n,i,a){if(n.tag===3)om(n,n,a);else for(;i!==null;){if(i.tag===3){om(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(gr===null||!gr.has(c))){n=Ls(a,n),n=Ap(i,n,1),i=pr(i,n,1),n=Ln(),i!==null&&(nn(i,1,n),zn(i,n));break}}i=i.return}}function Q0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,fn===n&&(mn&a)===a&&(sn===4||sn===3&&(mn&130023424)===mn&&500>Xt()-Iu?qr(n,0):Du|=a),zn(n,i)}function lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var a=Ln();n=zi(n,i),n!==null&&(nn(n,i,a),zn(n,a))}function J0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lm(n,a)}function ev(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lm(n,a)}var cm;cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,V0(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Wt&&(i.flags&1048576)!==0&&Hh(i,Wo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sl(n,i),n=i.pendingProps;var d=Es(i,Sn.current);bs(i,a),d=fu(null,i,c,n,d,a);var m=du();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(c)?(m=!0,Vo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ru(i),d.updater=il,i.stateNode=d,d._reactInternals=i,vu(i,c,n,a),i=Mu(null,i,c,!0,m,a)):(i.tag=0,Wt&&m&&Yc(i),Pn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nv(c),n=di(c,n),d){case 0:i=yu(null,i,c,n,a);break e;case 1:i=Up(null,i,c,n,a);break e;case 11:i=Pp(null,i,c,n,a);break e;case 14:i=Lp(null,i,c,di(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),yu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),Up(n,i,c,d,a);case 3:e:{if(Fp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Zh(n,i),Ko(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=Op(n,i,c,a,d);break e}else if(c!==d){d=Ls(Error(t(424)),i),i=Op(n,i,c,a,d);break e}else for(qn=cr(i.stateNode.containerInfo.firstChild),jn=i,Wt=!0,fi=null,a=$h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===d){i=Hi(n,i,a);break e}Pn(n,i,c,a)}i=i.child}return i;case 5:return ep(i),n===null&&Zc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Hc(c,d)?E=null:m!==null&&Hc(c,m)&&(i.flags|=32),Ip(n,i),Pn(n,i,E,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Bp(n,i,a);case 4:return su(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Cs(i,null,c,a):Pn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),Pp(n,i,c,d,a);case 7:return Pn(n,i,i.pendingProps,a),i.child;case 8:return Pn(n,i,i.pendingProps.children,a),i.child;case 12:return Pn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,kt(qo,c._currentValue),c._currentValue=E,m!==null)if(ui(m.value,E)){if(m.children===d.children&&!Fn.current){i=Hi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Vi(-1,a&-a),B.tag=2;var ie=m.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ie.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),nu(m.return,a,i),I.lanes|=a;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),nu(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Pn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,bs(i,a),d=ei(d),c=c(d),i.flags|=1,Pn(n,i,c,a),i.child;case 14:return c=i.type,d=di(c,i.pendingProps),d=di(c.type,d),Lp(n,i,c,d,a);case 15:return Np(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:di(c,d),sl(n,i),i.tag=1,On(c)?(n=!0,Vo(i)):n=!1,bs(i,a),Ep(i,c,d),vu(i,c,d,a),Mu(null,i,c,!0,n,a);case 19:return zp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return Mo(n,i)}function tv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,a,c){return new tv(n,i,a,c)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nv(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ce)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=ii(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,c,d,m){var E=2;if(c=n,typeof n=="function")Hu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return $r(a.children,d,m,i);case X:E=8,d|=8;break;case A:return n=ii(12,a,i,d|2),n.elementType=A,n.lanes=m,n;case J:return n=ii(13,a,i,d),n.elementType=J,n.lanes=m,n;case ae:return n=ii(19,a,i,d),n.elementType=ae,n.lanes=m,n;case Y:return _l(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case ee:E=11;break e;case ce:E=14;break e;case le:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ii(E,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function $r(n,i,a,c){return n=ii(7,n,c,i),n.lanes=a,n}function _l(n,i,a,c){return n=ii(22,n,c,i),n.elementType=Y,n.lanes=a,n.stateNode={isHidden:!1},n}function Gu(n,i,a){return n=ii(6,n,null,i),n.lanes=a,n}function Wu(n,i,a){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function iv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yi(0),this.expirationTimes=yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xu(n,i,a,c,d,m,E,I,B){return n=new iv(n,i,a,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ii(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(m),n}function rv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function fm(n){if(!n)return fr;n=n._reactInternals;e:{if(Zn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(On(a))return kh(n,a,i)}return i}function dm(n,i,a,c,d,m,E,I,B){return n=Xu(a,c,!0,n,d,m,E,I,B),n.context=fm(null),a=n.current,c=Ln(),d=vr(a),m=Vi(c,d),m.callback=i??null,pr(a,m,d),n.current.lanes=d,nn(n,d,c),zn(n,c),n}function vl(n,i,a,c){var d=i.current,m=Ln(),E=vr(d);return a=fm(a),i.context===null?i.context=a:i.pendingContext=a,i=Vi(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=pr(d,i,E),n!==null&&(mi(n,d,E,m),$o(n,d,E)),E}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ju(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function sv(){return null}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}Sl.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},Sl.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){vl(null,n,null,null)}),i[Fi]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Mi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,n),a===0&&eh(n)}};function Yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function av(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ie=xl(E);m.call(ie)}}var E=dm(i,c,n,0,null,!1,!1,"",mm);return n._reactRootContainer=E,n[Fi]=E.current,wa(n.nodeType===8?n.parentNode:n),jr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var ie=xl(B);I.call(ie)}}var B=Xu(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=B,n[Fi]=B.current,wa(n.nodeType===8?n.parentNode:n),jr(function(){vl(i,B,a,c)}),B}function Ml(n,i,a,c,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var I=d;d=function(){var B=xl(E);I.call(B)}}vl(i,E,n,d)}else E=av(a,i,n,d,c);return xl(E)}ln=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ot(i.pendingLanes);a!==0&&(Dt(i,a|1),zn(i,Xt()),(Et&6)===0&&(Is=Xt()+500,dr()))}break;case 13:jr(function(){var c=zi(n,1);if(c!==null){var d=Ln();mi(c,n,1,d)}}),ju(n,1)}},cn=function(n){if(n.tag===13){var i=zi(n,134217728);if(i!==null){var a=Ln();mi(i,n,134217728,a)}ju(n,134217728)}},hs=function(n){if(n.tag===13){var i=vr(n),a=zi(n,i);if(a!==null){var c=Ln();mi(a,n,i,c)}ju(n,i)}},Mi=function(){return ot},Qd=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},Ne=function(n,i,a){switch(i){case"input":if(Ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ko(c);if(!d)throw Error(t(90));Kt(c),Ht(c,d)}}}break;case"textarea":M(n,a);break;case"select":i=a.value,i!=null&&St(n,!!a.multiple,i,!1)}},rt=ku,It=jr;var ov={usingClientEntryPoint:!1,Events:[Ra,ys,ko,pe,Re,ku]},Ha={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lv={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Fe=El.inject(lv),Ae=El}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov,Vn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(i))throw Error(t(200));return rv(n,i,null,a)},Vn.createRoot=function(n,i){if(!Yu(n))throw Error(t(299));var a=!1,c="",d=pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xu(n,1,!1,null,null,a,!1,c,d),n[Fi]=i.current,wa(n.nodeType===8?n.parentNode:n),new qu(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return jr(n)},Vn.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Ml(null,n,i,!0,a)},Vn.hydrateRoot=function(n,i,a){if(!Yu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",E=pm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=dm(i,null,n,1,a??null,d,!1,m,E),n[Fi]=i.current,wa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Sl(i)},Vn.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Ml(null,n,i,!1,a)},Vn.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1},Vn.unstable_batchedUpdates=ku,Vn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,a,!1,c)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Em;function Bg(){if(Em)return Zu.exports;Em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=_v(),Zu.exports}var Tm;function vv(){if(Tm)return Tl;Tm=1;var s=Bg();return Tl.createRoot=s.createRoot,Tl.hydrateRoot=s.hydrateRoot,Tl}var xv=vv();const Sv=Fg(xv);Bg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},io.apply(this,arguments)}var br;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(br||(br={}));const wm="popstate";function yv(s){s===void 0&&(s={});function e(o,l){let{pathname:u="/",search:f="",hash:h=""}=us(o.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Of("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=o.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:rc(l))}function r(o,l){fc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Ev(e,t,r,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function fc(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function Am(s,e){return{usr:s.state,key:s.key,idx:e}}function Of(s,e,t,r){return t===void 0&&(t=null),io({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?us(e):e,{state:t,key:e&&e.key||r||Mv()})}function rc(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function us(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function Ev(s,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,f=br.Pop,h=null,p=_();p==null&&(p=0,u.replaceState(io({},u.state,{idx:p}),""));function _(){return(u.state||{idx:null}).idx}function g(){f=br.Pop;let x=_(),v=x==null?null:x-p;p=x,h&&h({action:f,location:w.location,delta:v})}function S(x,v){f=br.Push;let b=Of(w.location,x,v);t&&t(b,x),p=_()+1;let P=Am(b,p),L=w.createHref(b);try{u.pushState(P,"",L)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;o.location.assign(L)}l&&h&&h({action:f,location:w.location,delta:1})}function y(x,v){f=br.Replace;let b=Of(w.location,x,v);t&&t(b,x),p=_();let P=Am(b,p),L=w.createHref(b);u.replaceState(P,"",L),l&&h&&h({action:f,location:w.location,delta:0})}function T(x){let v=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof x=="string"?x:rc(x);return b=b.replace(/ $/,"%20"),tn(v,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,v)}let w={get action(){return f},get location(){return s(o,u)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(wm,g),h=x,()=>{o.removeEventListener(wm,g),h=null}},createHref(x){return e(o,x)},createURL:T,encodeLocation(x){let v=T(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:y,go(x){return u.go(x)}};return w}var Cm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Cm||(Cm={}));function Tv(s,e,t){return t===void 0&&(t="/"),wv(s,e,t)}function wv(s,e,t,r){let o=typeof e=="string"?us(e):e,l=Od(o.pathname||"/",t);if(l==null)return null;let u=kg(s);Av(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=Bv(l);f=Uv(u[h],p)}return f}function kg(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,u,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(tn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=Lr([r,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(tn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),kg(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Dv(p,l.index),routesMeta:_})};return s.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let h of zg(l.path))o(l,u,h)}),e}function zg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=zg(r.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function Av(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Iv(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Cv=/^:[\w-]+$/,Rv=3,bv=2,Pv=1,Lv=10,Nv=-2,Rm=s=>s==="*";function Dv(s,e){let t=s.split("/"),r=t.length;return t.some(Rm)&&(r+=Nv),e&&(r+=bv),t.filter(o=>!Rm(o)).reduce((o,l)=>o+(Cv.test(l)?Rv:l===""?Pv:Lv),r)}function Iv(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function Uv(s,e,t){let{routesMeta:r}=s,o={},l="/",u=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,_=l==="/"?e:e.slice(l.length)||"/",g=Fv({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),S=h.route;if(!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Lr([l,g.pathname]),pathnameBase:Gv(Lr([l,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(l=Lr([l,g.pathnameBase]))}return u}function Fv(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=Ov(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,_,g)=>{let{paramName:S,isOptional:y}=_;if(S==="*"){let w=f[g]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[g];return y&&!T?p[S]=void 0:p[S]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:s}}function Ov(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),fc(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(r.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function Bv(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fc(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Od(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}const kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=s=>kv.test(s);function Vv(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof s=="string"?us(s):s,l;if(t)if(zv(t))l=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),fc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?l=bm(t.substring(1),"/"):l=bm(t,e)}else l=e;return{pathname:l,search:Wv(r),hash:Xv(o)}}function bm(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ef(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hv(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Vg(s,e){let t=Hv(s);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Hg(s,e,t,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=us(s):(o=io({},s),tn(!o.pathname||!o.pathname.includes("?"),ef("?","pathname","search",o)),tn(!o.pathname||!o.pathname.includes("#"),ef("#","pathname","hash",o)),tn(!o.search||!o.search.includes("#"),ef("#","search","hash",o)));let l=s===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let g=e.length-1;if(!r&&u.startsWith("..")){let S=u.split("/");for(;S[0]==="..";)S.shift(),g-=1;o.pathname=S.join("/")}f=g>=0?e[g]:"/"}let h=Vv(o,f),p=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}const Lr=s=>s.join("/").replace(/\/\/+/g,"/"),Gv=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Wv=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Xv=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function jv(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Gg=["post","put","patch","delete"];new Set(Gg);const qv=["get",...Gg];new Set(qv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},ro.apply(this,arguments)}const Bd=be.createContext(null),Yv=be.createContext(null),fs=be.createContext(null),dc=be.createContext(null),ds=be.createContext({outlet:null,matches:[],isDataRoute:!1}),Wg=be.createContext(null);function $v(s,e){let{relative:t}=e===void 0?{}:e;co()||tn(!1);let{basename:r,navigator:o}=be.useContext(fs),{hash:l,pathname:u,search:f}=qg(s,{relative:t}),h=u;return r!=="/"&&(h=u==="/"?r:Lr([r,u])),o.createHref({pathname:h,search:f,hash:l})}function co(){return be.useContext(dc)!=null}function uo(){return co()||tn(!1),be.useContext(dc).location}function Xg(s){be.useContext(fs).static||be.useLayoutEffect(s)}function jg(){let{isDataRoute:s}=be.useContext(ds);return s?lx():Kv()}function Kv(){co()||tn(!1);let s=be.useContext(Bd),{basename:e,future:t,navigator:r}=be.useContext(fs),{matches:o}=be.useContext(ds),{pathname:l}=uo(),u=JSON.stringify(Vg(o,t.v7_relativeSplatPath)),f=be.useRef(!1);return Xg(()=>{f.current=!0}),be.useCallback(function(p,_){if(_===void 0&&(_={}),!f.current)return;if(typeof p=="number"){r.go(p);return}let g=Hg(p,JSON.parse(u),l,_.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Lr([e,g.pathname])),(_.replace?r.replace:r.push)(g,_.state,_)},[e,r,u,l,s])}function qg(s,e){let{relative:t}=e===void 0?{}:e,{future:r}=be.useContext(fs),{matches:o}=be.useContext(ds),{pathname:l}=uo(),u=JSON.stringify(Vg(o,r.v7_relativeSplatPath));return be.useMemo(()=>Hg(s,JSON.parse(u),l,t==="path"),[s,u,l,t])}function Zv(s,e){return Qv(s,e)}function Qv(s,e,t,r){co()||tn(!1);let{navigator:o}=be.useContext(fs),{matches:l}=be.useContext(ds),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let p=uo(),_;if(e){var g;let x=typeof e=="string"?us(e):e;h==="/"||(g=x.pathname)!=null&&g.startsWith(h)||tn(!1),_=x}else _=p;let S=_.pathname||"/",y=S;if(h!=="/"){let x=h.replace(/^\//,"").split("/");y="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=Tv(s,{pathname:y}),w=ix(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Lr([h,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?h:Lr([h,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,r);return e&&w?be.createElement(dc.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:br.Pop}},w):w}function Jv(){let s=ox(),e=jv(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return be.createElement(be.Fragment,null,be.createElement("h2",null,"Unexpected Application Error!"),be.createElement("h3",{style:{fontStyle:"italic"}},e),t?be.createElement("pre",{style:o},t):null,null)}const ex=be.createElement(Jv,null);class tx extends be.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?be.createElement(ds.Provider,{value:this.props.routeContext},be.createElement(Wg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nx(s){let{routeContext:e,match:t,children:r}=s,o=be.useContext(Bd);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),be.createElement(ds.Provider,{value:e},r)}function ix(s,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let u=s,f=(o=t)==null?void 0:o.errors;if(f!=null){let _=u.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);_>=0||tn(!1),u=u.slice(0,Math.min(u.length,_+1))}let h=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let _=0;_<u.length;_++){let g=u[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=_),g.route.id){let{loaderData:S,errors:y}=t,T=g.route.loader&&S[g.route.id]===void 0&&(!y||y[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((_,g,S)=>{let y,T=!1,w=null,x=null;t&&(y=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||ex,h&&(p<0&&S===0?(cx("route-fallback"),T=!0,x=null):p===S&&(T=!0,x=g.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,S+1)),b=()=>{let P;return y?P=w:T?P=x:g.route.Component?P=be.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=_,be.createElement(nx,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:t!=null},children:P})};return t&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?be.createElement(tx,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}var Yg=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Yg||{}),$g=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})($g||{});function rx(s){let e=be.useContext(Bd);return e||tn(!1),e}function sx(s){let e=be.useContext(Yv);return e||tn(!1),e}function ax(s){let e=be.useContext(ds);return e||tn(!1),e}function Kg(s){let e=ax(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function ox(){var s;let e=be.useContext(Wg),t=sx(),r=Kg();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function lx(){let{router:s}=rx(Yg.UseNavigateStable),e=Kg($g.UseNavigateStable),t=be.useRef(!1);return Xg(()=>{t.current=!0}),be.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,ro({fromRouteId:e},l)))},[s,e])}const Pm={};function cx(s,e,t){Pm[s]||(Pm[s]=!0)}function ux(s,e){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Bf(s){tn(!1)}function fx(s){let{basename:e="/",children:t=null,location:r,navigationType:o=br.Pop,navigator:l,static:u=!1,future:f}=s;co()&&tn(!1);let h=e.replace(/^\/*/,"/"),p=be.useMemo(()=>({basename:h,navigator:l,static:u,future:ro({v7_relativeSplatPath:!1},f)}),[h,f,l,u]);typeof r=="string"&&(r=us(r));let{pathname:_="/",search:g="",hash:S="",state:y=null,key:T="default"}=r,w=be.useMemo(()=>{let x=Od(_,h);return x==null?null:{location:{pathname:x,search:g,hash:S,state:y,key:T},navigationType:o}},[h,_,g,S,y,T,o]);return w==null?null:be.createElement(fs.Provider,{value:p},be.createElement(dc.Provider,{children:t,value:w}))}function dx(s){let{children:e,location:t}=s;return Zv(kf(e),t)}new Promise(()=>{});function kf(s,e){e===void 0&&(e=[]);let t=[];return be.Children.forEach(s,(r,o)=>{if(!be.isValidElement(r))return;let l=[...e,o];if(r.type===be.Fragment){t.push.apply(t,kf(r.props.children,l));return}r.type!==Bf&&tn(!1),!r.props.index||!r.props.children||tn(!1);let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=kf(r.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zf(){return zf=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},zf.apply(this,arguments)}function hx(s,e){if(s==null)return{};var t={},r=Object.keys(s),o,l;for(l=0;l<r.length;l++)o=r[l],!(e.indexOf(o)>=0)&&(t[o]=s[o]);return t}function px(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function mx(s,e){return s.button===0&&(!e||e==="_self")&&!px(s)}const gx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_x="6";try{window.__reactRouterVersion=_x}catch{}const vx="startTransition",Lm=pv[vx];function xx(s){let{basename:e,children:t,future:r,window:o}=s,l=be.useRef();l.current==null&&(l.current=yv({window:o,v5Compat:!0}));let u=l.current,[f,h]=be.useState({action:u.action,location:u.location}),{v7_startTransition:p}=r||{},_=be.useCallback(g=>{p&&Lm?Lm(()=>h(g)):h(g)},[h,p]);return be.useLayoutEffect(()=>u.listen(_),[u,_]),be.useEffect(()=>ux(r),[r]),be.createElement(fx,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:r})}const Sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hc=be.forwardRef(function(e,t){let{onClick:r,relative:o,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:_,viewTransition:g}=e,S=hx(e,gx),{basename:y}=be.useContext(fs),T,w=!1;if(typeof p=="string"&&yx.test(p)&&(T=p,Sx))try{let P=new URL(window.location.href),L=p.startsWith("//")?new URL(P.protocol+p):new URL(p),D=Od(L.pathname,y);L.origin===P.origin&&D!=null?p=D+L.search+L.hash:w=!0}catch{}let x=$v(p,{relative:o}),v=Mx(p,{replace:u,state:f,target:h,preventScrollReset:_,relative:o,viewTransition:g});function b(P){r&&r(P),P.defaultPrevented||v(P)}return be.createElement("a",zf({},S,{href:T||x,onClick:w||l?r:b,ref:t,target:h}))});var Nm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Nm||(Nm={}));var Dm;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Dm||(Dm={}));function Mx(s,e){let{target:t,replace:r,state:o,preventScrollReset:l,relative:u,viewTransition:f}=e===void 0?{}:e,h=jg(),p=uo(),_=qg(s,{relative:u});return be.useCallback(g=>{if(mx(g,t)){g.preventDefault();let S=r!==void 0?r:rc(p)===rc(_);h(s,{replace:S,state:o,preventScrollReset:l,relative:u,viewTransition:f})}},[p,h,_,r,o,t,s,l,u,f])}const Ex="_navbar_13wbh_1",Tx="_scrolled_13wbh_15",wx="_container_13wbh_19",Ax="_navLeft_13wbh_29",Cx="_logo_13wbh_35",Rx="_timeDisplay_13wbh_56",bx="_links_13wbh_63",Px="_link_13wbh_63",Lx="_registerBtn_13wbh_106",Nx="_hamburger_13wbh_127",Dx="_active_13wbh_183",Ix="_barOpen_13wbh_197",gn={navbar:Ex,scrolled:Tx,container:wx,navLeft:Ax,logo:Cx,timeDisplay:Rx,links:bx,link:Px,registerBtn:Lx,hamburger:Nx,active:Dx,barOpen:Ix},Ux=()=>{const[s,e]=be.useState(!1),[t,r]=be.useState(!1),[o,l]=be.useState(""),u=uo();be.useEffect(()=>{const h=()=>{const g=new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});l(g)};h();const p=setInterval(h,1e3);return()=>clearInterval(p)},[]),be.useEffect(()=>{const h=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const f=h=>{if(u.pathname!=="/")window.location.href=`/#${h}`;else{const p=document.getElementById(h);p&&p.scrollIntoView({behavior:"smooth"})}e(!1)};return G.jsx("nav",{className:`${gn.navbar} ${t?gn.scrolled:""}`,children:G.jsxs("div",{className:gn.container,children:[G.jsxs("div",{className:gn.navLeft,children:[G.jsxs("div",{className:gn.logo,onClick:()=>f("hero"),children:["NST_",G.jsx("span",{children:"SDC"})]}),G.jsxs("div",{className:gn.timeDisplay,children:["[",o,"]"]})]}),G.jsxs("div",{className:`${gn.links} ${s?gn.active:""}`,children:[G.jsx("a",{onClick:()=>f("hero"),className:gn.link,children:"/home"}),G.jsx("a",{onClick:()=>f("about"),className:gn.link,children:"/man_pages"}),G.jsx("a",{onClick:()=>f("committee"),className:gn.link,children:"/sudo_users"}),G.jsx("a",{onClick:()=>f("lastyear"),className:gn.link,children:"/logs"}),G.jsx(hc,{to:"/register",className:gn.registerBtn,children:"./EXEC_REG.sh"})]}),G.jsxs("div",{className:gn.hamburger,onClick:()=>e(!s),children:[G.jsx("div",{className:s?gn.barOpen:""}),G.jsx("div",{className:s?gn.barOpen:""}),G.jsx("div",{className:s?gn.barOpen:""})]})]})})},Fx="_section_n8bis_1",Ox="_visible_n8bis_10",Bx="_contentContainer_n8bis_15",tf={section:Fx,visible:Ox,contentContainer:Bx},fo=({children:s,id:e,className:t})=>{const[r,o]=be.useState(!1),l=be.useRef();return be.useEffect(()=>{const u=new IntersectionObserver(h=>{h.forEach(p=>{p.isIntersecting&&o(!0)})},{threshold:.1}),{current:f}=l;return f&&u.observe(f),()=>{f&&u.unobserve(f)}},[]),G.jsx("section",{id:e,ref:l,className:`${tf.section} ${r?tf.visible:""}`,children:G.jsx("div",{className:`${tf.contentContainer} ${t||""}`,children:s})})},kx="_heroSection_11xvc_1",zx="_backgroundGlow_11xvc_72",Vx="_content_11xvc_101",Hx="_title_11xvc_107",Gx="_tagline_11xvc_124",Wx="_description_11xvc_136",Xx="_ctaButton_11xvc_160",Kr={heroSection:kx,backgroundGlow:zx,content:Vx,title:Hx,tagline:Gx,description:Wx,ctaButton:Xx},jx=()=>G.jsxs(fo,{id:"hero",className:Kr.heroSection,children:[G.jsx("div",{className:Kr.backgroundGlow}),G.jsxs("div",{className:Kr.content,children:[G.jsxs("h1",{className:`${Kr.title} glitch-text`,"data-text":"QUICK SNATCH 2.0",children:["QUICK SNATCH ",G.jsx("span",{children:"2.0"})]}),G.jsx("p",{className:Kr.tagline,children:"< The CLI Treasure Hunt />"}),G.jsx("p",{className:Kr.description,children:"A high-stakes digital scavenger hunt. Navigate the terminal, decode cryptic logs, and track down the 0xROOT bounty before time runs out."}),G.jsx(hc,{to:"/register",className:Kr.ctaButton,children:"START_THE_HUNT.exe"})]})]}),qx="_heading_hzalx_3",Yx="_grid_hzalx_11",$x="_card_hzalx_17",Kx="_cardHeader_hzalx_32",Zx="_icon_hzalx_36",Qx="_cardTitle_hzalx_47",Jx="_cardDesc_hzalx_53",Zr={heading:qx,grid:Yx,card:$x,cardHeader:Kx,icon:Zx,cardTitle:Qx,cardDesc:Jx},eS=()=>{const s=[{title:"The Hunt",desc:"Navigate through complex puzzles and digital mazes."},{title:"CLI Challenges",desc:"Prove your terminal mastery in timed events."},{title:"Leaderboard",desc:"Climb the ranks and claim your supremacy."},{title:"The Snatch",desc:"First to solve the final clue wins the grand prize."}];return G.jsxs(fo,{id:"about",children:[G.jsx("h2",{className:Zr.heading,children:"System Overview"}),G.jsx("div",{className:Zr.grid,children:s.map((e,t)=>G.jsxs("div",{className:Zr.card,children:[G.jsx("div",{className:Zr.cardHeader,children:G.jsxs("span",{className:Zr.icon,children:["0",t+1]})}),G.jsx("h3",{className:Zr.cardTitle,children:e.title}),G.jsx("p",{className:Zr.cardDesc,children:e.desc})]},t))})]})},tS="_container_px0c4_1",nS="_content_px0c4_8",iS="_heading_px0c4_38",rS="_text_px0c4_44",sS="_linkButton_px0c4_50",Wa={container:tS,content:nS,heading:iS,text:rS,linkButton:sS},aS=()=>G.jsx(fo,{id:"lastyear",className:Wa.container,children:G.jsxs("div",{className:Wa.content,children:[G.jsx("h2",{className:Wa.heading,children:"Legacy Archive"}),G.jsx("p",{className:Wa.text,children:"Quick Snatch 1.0 set the benchmark. Witness where it all began."}),G.jsx("a",{href:"https://quicksnatch.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:Wa.linkButton,children:"ACCESS ARCHIVES"})]})}),oS="_heading_1nzlc_3",lS="_grid_1nzlc_10",cS="_card_1nzlc_16",uS="_avatarPlaceholder_1nzlc_29",fS="_name_1nzlc_44",dS="_role_1nzlc_50",Fs={heading:oS,grid:lS,card:cS,avatarPlaceholder:uS,name:fS,role:dS},hS=()=>{const s=[{name:"Alex Vern",role:"Event Lead"},{name:"Sarah Jin",role:"Tech Lead"},{name:"Mike Ross",role:"Design Head"},{name:"Emily Chen",role:"Operations"}];return G.jsxs(fo,{id:"committee",children:[G.jsx("h2",{className:Fs.heading,children:"Organizing Node"}),G.jsx("div",{className:Fs.grid,children:s.map((e,t)=>G.jsxs("div",{className:Fs.card,children:[G.jsx("div",{className:Fs.avatarPlaceholder,children:e.name.charAt(0)}),G.jsx("h3",{className:Fs.name,children:e.name}),G.jsx("p",{className:Fs.role,children:e.role})]},t))})]})},pS="_container_1cp6r_1",mS="_box_1cp6r_8",gS="_title_1cp6r_39",_S="_subtitle_1cp6r_47",vS="_button_1cp6r_53",Xa={container:pS,box:mS,title:gS,subtitle:_S,button:vS},xS=()=>G.jsx(fo,{id:"register",className:Xa.container,children:G.jsxs("div",{className:Xa.box,children:[G.jsx("h2",{className:Xa.title,children:"Are you ready to breach?"}),G.jsx("p",{className:Xa.subtitle,children:"Spots are limited. Secure your terminal access now."}),G.jsx(hc,{to:"/register",className:Xa.button,children:"ENTER COMPETITION"})]})}),SS="_footer_166d2_1",yS="_systemBar_166d2_10",MS="_systemBarInner_166d2_19",ES="_online_166d2_26",TS="_grid_166d2_44",wS="_col_166d2_52",AS="_termHeader_166d2_58",CS="_logo_166d2_65",RS="_version_166d2_73",bS="_desc_166d2_78",PS="_cliInput_166d2_84",LS="_prompt_166d2_94",NS="_linkList_166d2_98",DS="_highlight_166d2_117",IS="_terminalBlock_166d2_122",US="_warning_166d2_134",FS="_footerBottom_166d2_152",OS="_footerBottomInner_166d2_160",BS="_blink_166d2_167",kS="_processing_166d2_171",Ut={footer:SS,systemBar:yS,systemBarInner:MS,online:ES,grid:TS,col:wS,termHeader:AS,logo:CS,version:RS,desc:bS,cliInput:PS,prompt:LS,linkList:NS,highlight:DS,terminalBlock:IS,warning:US,footerBottom:FS,footerBottomInner:OS,blink:BS,processing:kS},zS=()=>G.jsxs("footer",{className:Ut.footer,children:[G.jsx("div",{className:Ut.systemBar,children:G.jsx("div",{className:"container-standard",children:G.jsxs("div",{className:Ut.systemBarInner,children:[G.jsxs("span",{children:["STATUS: ",G.jsx("span",{className:Ut.online,children:"ONLINE"})]}),G.jsx("span",{children:"UPTIME: 48:22:15"}),G.jsx("span",{children:"ENCRYPTION: AES-256"}),G.jsx("span",{children:"DATA_STREAM: SECURE"})]})})}),G.jsx("div",{className:"container-standard",children:G.jsxs("div",{className:Ut.grid,children:[G.jsxs("div",{className:Ut.col,children:[G.jsx("h4",{className:Ut.termHeader,children:" // IDENTITY_CORE"}),G.jsxs("div",{className:Ut.logo,children:["QUICK_SNATCH_",G.jsx("span",{className:Ut.version,children:"v2.0"})]}),G.jsx("p",{className:Ut.desc,children:"A competitive treasure hunting protocol initialized by Newton School of Technology. Decode. Breach. Win."}),G.jsxs("div",{className:Ut.cliInput,children:[G.jsx("span",{className:Ut.prompt,children:"user@root:~$"})," _"]})]}),G.jsxs("div",{className:Ut.col,children:[G.jsx("h4",{className:Ut.termHeader,children:" // SITE_MAP"}),G.jsxs("ul",{className:Ut.linkList,children:[G.jsx("li",{children:G.jsx("a",{href:"#hero",children:"> cd /home"})}),G.jsx("li",{children:G.jsx("a",{href:"#about",children:"> cat info.txt"})}),G.jsx("li",{children:G.jsx("a",{href:"#committee",children:"> ls /admins"})}),G.jsx("li",{children:G.jsx("a",{href:"#lastyear",children:"> history | grep legacy"})}),G.jsx("li",{children:G.jsx(hc,{to:"/register",className:Ut.highlight,children:"> ./execute_reg.sh"})})]})]}),G.jsxs("div",{className:Ut.col,children:[G.jsx("h4",{className:Ut.termHeader,children:" // COMM_CHANNELS"}),G.jsxs("ul",{className:Ut.linkList,children:[G.jsx("li",{children:G.jsx("a",{href:"#",children:"[0] INSTAGRAM_LINK_ESTABLISHED"})}),G.jsx("li",{children:G.jsx("a",{href:"#",children:"[1] DISCORD_SERVER_NOT_FOUND"})}),G.jsx("li",{children:G.jsx("a",{href:"#",children:"[2] LINKEDIN_HANDSHAKE"})}),G.jsx("li",{children:G.jsx("a",{href:"#",children:"[3] MAIL_PROTOCOL_SMTP"})})]})]}),G.jsxs("div",{className:Ut.col,children:[G.jsx("h4",{className:Ut.termHeader,children:" // GEO_LOCATION"}),G.jsxs("div",{className:Ut.terminalBlock,children:[G.jsx("p",{children:"TARGET: NST Pune"}),G.jsx("p",{children:"COORDS: 18.5204° N, 73.8567° E"}),G.jsx("p",{children:"SECTOR: 7-G"}),G.jsx("p",{className:Ut.warning,children:"WARNING: UNAUTHORIZED SECTORS AHEAD"})]})]})]})}),G.jsx("div",{className:Ut.footerBottom,children:G.jsx("div",{className:"container-standard",children:G.jsxs("div",{className:Ut.footerBottomInner,children:[G.jsx("div",{className:Ut.bottomLeft,children:"© 2026 QUICK_SNATCH_SYSTEMS. ALL_RIGHTS_RESERVED."}),G.jsxs("div",{className:Ut.bottomRight,children:[G.jsx("span",{className:Ut.processing,children:"SYSTEM_PROCESSING..."}),G.jsx("span",{className:Ut.blink,children:"_"})," END_OF_FILE"]})]})})})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="182",VS=0,Im=1,HS=2,Zl=1,GS=2,to=3,Nr=0,Gn=1,$i=2,Zi=0,Zs=1,Um=2,Fm=3,Om=4,WS=5,ss=100,XS=101,jS=102,qS=103,YS=104,$S=200,KS=201,ZS=202,QS=203,Vf=204,Hf=205,JS=206,ey=207,ty=208,ny=209,iy=210,ry=211,sy=212,ay=213,oy=214,Gf=0,Wf=1,Xf=2,Js=3,jf=4,qf=5,Yf=6,$f=7,Zg=0,ly=1,cy=2,Li=0,Qg=1,Jg=2,e_=3,t_=4,n_=5,i_=6,r_=7,s_=300,cs=301,ea=302,Kf=303,Zf=304,pc=306,Qf=1e3,Ki=1001,Jf=1002,vn=1003,uy=1004,wl=1005,An=1006,nf=1007,os=1008,oi=1009,a_=1010,o_=1011,so=1012,zd=1013,Di=1014,bi=1015,Ji=1016,Vd=1017,Hd=1018,ao=1020,l_=35902,c_=35899,u_=1021,f_=1022,Si=1023,er=1026,ls=1027,d_=1028,Gd=1029,ta=1030,Wd=1031,Xd=1033,Ql=33776,Jl=33777,ec=33778,tc=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,ad=37496,od=37488,ld=37489,cd=37490,ud=37491,fd=37808,dd=37809,hd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,Sd=37817,yd=37818,Md=37819,Ed=37820,Td=37821,wd=36492,Ad=36494,Cd=36495,Rd=36283,bd=36284,Pd=36285,Ld=36286,fy=3200,dy=0,hy=1,Rr="",si="srgb",na="srgb-linear",sc="linear",Ft="srgb",Os=7680,Bm=519,py=512,my=513,gy=514,jd=515,_y=516,vy=517,qd=518,xy=519,km=35044,zm="300 es",Pi=2e3,ac=2001;function h_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sy(){const s=oc("canvas");return s.style.display="block",s}const Vm={};function Hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function at(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ct(...s){const e="THREE."+s.shift();console.error(e,...s)}function oo(...s){const e=s.join(" ");e in Vm||(Vm[e]=!0,at(...s))}function yy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,Nd=180/Math.PI;function ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function My(s,e){return(s%e+e)%e}function sf(s,e,t){return(1-t)*s+t*e}function ja(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class po{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3],S=l[u+0],y=l[u+1],T=l[u+2],w=l[u+3];if(f<=0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f>=1){e[t+0]=S,e[t+1]=y,e[t+2]=T,e[t+3]=w;return}if(g!==w||h!==S||p!==y||_!==T){let x=h*S+p*y+_*T+g*w;x<0&&(S=-S,y=-y,T=-T,w=-w,x=-x);let v=1-f;if(x<.9995){const b=Math.acos(x),P=Math.sin(b);v=Math.sin(v*b)/P,f=Math.sin(f*b)/P,h=h*v+S*f,p=p*v+y*f,_=_*v+T*f,g=g*v+w*f}else{h=h*v+S*f,p=p*v+y*f,_=_*v+T*f,g=g*v+w*f;const b=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=b,p*=b,_*=b,g*=b}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],_=r[o+3],g=l[u],S=l[u+1],y=l[u+2],T=l[u+3];return e[t]=f*T+_*g+h*y-p*S,e[t+1]=h*T+_*S+p*g-f*y,e[t+2]=p*T+_*y+f*S-h*g,e[t+3]=_*T-f*g-h*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(o/2),g=f(l/2),S=h(r/2),y=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"YXZ":this._x=S*_*g+p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"ZXY":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g-S*y*T;break;case"ZYX":this._x=S*_*g-p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g+S*y*T;break;case"YZX":this._x=S*_*g+p*y*T,this._y=p*y*g+S*_*T,this._z=p*_*T-S*y*g,this._w=p*_*g-S*y*T;break;case"XZY":this._x=S*_*g-p*y*T,this._y=p*y*g-S*_*T,this._z=p*_*T+S*y*g,this._w=p*_*g+S*y*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],g=t[10],S=r+f+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(_-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+o*p-l*h,this._y=o*_+u*h+l*f-r*p,this._z=l*_+u*p+r*h-o*f,this._w=u*_-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),_=2*(f*t-l*o),g=2*(l*r-u*t);return this.x=t+h*p+u*g-f*_,this.y=r+h*_+f*p-l*g,this.z=o+h*g+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new Z,Gm=new po;class ut{constructor(e,t,r,o,l,u,f,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],_=r[4],g=r[7],S=r[2],y=r[5],T=r[8],w=o[0],x=o[3],v=o[6],b=o[1],P=o[4],L=o[7],D=o[2],F=o[5],O=o[8];return l[0]=u*w+f*b+h*D,l[3]=u*x+f*P+h*F,l[6]=u*v+f*L+h*O,l[1]=p*w+_*b+g*D,l[4]=p*x+_*P+g*F,l[7]=p*v+_*L+g*O,l[2]=S*w+y*b+T*D,l[5]=S*x+y*P+T*F,l[8]=S*v+y*L+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=_*u-f*p,S=f*h-_*l,y=p*l-u*h,T=t*g+r*S+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(o*p-_*r)*w,e[2]=(f*r-o*u)*w,e[3]=S*w,e[4]=(_*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=y*w,e[7]=(r*h-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new ut,Wm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ey(){const s={enabled:!0,workingColorSpace:na,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ft&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rr?sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[na]:{primaries:e,whitePoint:r,transfer:sc,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Tt=Ey();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class Ty{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=oc("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wy=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(lf(o[u].image)):l.push(lf(o[u]))}else l=lf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function lf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ty.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Ay=0;const cf=new Z;class Dn extends ra{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=Ki,o=Ki,l=An,u=os,f=Si,h=oi,p=Dn.DEFAULT_ANISOTROPY,_=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=ho(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qf:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qf:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=s_;Dn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,r=0,o=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],_=h[4],g=h[8],S=h[1],y=h[5],T=h[9],w=h[2],x=h[6],v=h[10];if(Math.abs(_-S)<.01&&Math.abs(g-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,L=(y+1)/2,D=(v+1)/2,F=(_+S)/4,O=(g+w)/4,X=(T+x)/4;return P>L&&P>D?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=F/r,l=O/r):L>D?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=F/o,l=X/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=O/l,o=X/l),this.set(r,o,l,t),this}let b=Math.sqrt((x-T)*(x-T)+(g-w)*(g-w)+(S-_)*(S-_));return Math.abs(b)<.001&&(b=1),this.x=(x-T)/b,this.y=(g-w)/b,this.z=(S-_)/b,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends ra{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Dn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Yd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Cy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class p_ extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ry extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Cl.subVectors(this.max,qa),ks.subVectors(e.a,qa),zs.subVectors(e.b,qa),Vs.subVectors(e.c,qa),Mr.subVectors(zs,ks),Er.subVectors(Vs,zs),Qr.subVectors(ks,Vs);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-Qr.z,Qr.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,Qr.z,0,-Qr.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-Qr.y,Qr.x,0];return!uf(t,ks,zs,Vs,Cl)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,ks,zs,Vs,Cl))?!1:(Rl.crossVectors(Mr,Er),t=[Rl.x,Rl.y,Rl.z],uf(t,ks,zs,Vs,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],gi=new Z,Al=new mo,ks=new Z,zs=new Z,Vs=new Z,Mr=new Z,Er=new Z,Qr=new Z,qa=new Z,Cl=new Z,Rl=new Z,Jr=new Z;function uf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Jr.fromArray(s,l);const f=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),h=e.dot(Jr),p=t.dot(Jr),_=r.dot(Jr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const by=new mo,Ya=new Z,ff=new Z;class go{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):by.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(ff)),this.expandByPoint(Ya.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new Z,df=new Z,bl=new Z,Tr=new Z,hf=new Z,Pl=new Z,pf=new Z;class $d{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){df.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(df);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),f=Tr.dot(this.direction),h=-Tr.dot(bl),p=Tr.lengthSq(),_=Math.abs(1-u*u);let g,S,y,T;if(_>0)if(g=u*h-f,S=u*f-h,T=l*_,g>=0)if(S>=-T)if(S<=T){const w=1/_;g*=w,S*=w,y=g*(g+u*S+2*f)+S*(u*g+S+2*h)+p}else S=l,g=Math.max(0,-(u*S+f)),y=-g*g+S*(S+2*h)+p;else S=-l,g=Math.max(0,-(u*S+f)),y=-g*g+S*(S+2*h)+p;else S<=-T?(g=Math.max(0,-(-u*l+f)),S=g>0?-l:Math.min(Math.max(-l,-h),l),y=-g*g+S*(S+2*h)+p):S<=T?(g=0,S=Math.min(Math.max(-l,-h),l),y=S*(S+2*h)+p):(g=Math.max(0,-(u*l+f)),S=g>0?l:Math.min(Math.max(-l,-h),l),y=-g*g+S*(S+2*h)+p);else S=u>0?-l:l,g=Math.max(0,-(u*S+f)),y=-g*g+S*(S+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(df).addScaledVector(bl,S),y}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),o=Xi.dot(Xi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,o=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,o=(e.min.x-S.x)*p),_>=0?(l=(e.min.y-S.y)*_,u=(e.max.y-S.y)*_):(l=(e.max.y-S.y)*_,u=(e.min.y-S.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(f=(e.min.z-S.z)*g,h=(e.max.z-S.z)*g):(f=(e.max.z-S.z)*g,h=(e.min.z-S.z)*g),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,r,o,l){hf.subVectors(t,e),Pl.subVectors(r,e),pf.crossVectors(hf,Pl);let u=this.direction.dot(pf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const h=f*this.direction.dot(Pl.crossVectors(Tr,Pl));if(h<0)return null;const p=f*this.direction.dot(hf.cross(Tr));if(p<0||h+p>u)return null;const _=-f*Tr.dot(pf);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,r,o,l,u,f,h,p,_,g,S,y,T,w,x){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,_,g,S,y,T,w,x)}set(e,t,r,o,l,u,f,h,p,_,g,S,y,T,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=T,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const S=u*_,y=u*g,T=f*_,w=f*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=y+T*p,t[5]=S-w*p,t[9]=-f*h,t[2]=w-S*p,t[6]=T+y*p,t[10]=u*h}else if(e.order==="YXZ"){const S=h*_,y=h*g,T=p*_,w=p*g;t[0]=S+w*f,t[4]=T*f-y,t[8]=u*p,t[1]=u*g,t[5]=u*_,t[9]=-f,t[2]=y*f-T,t[6]=w+S*f,t[10]=u*h}else if(e.order==="ZXY"){const S=h*_,y=h*g,T=p*_,w=p*g;t[0]=S-w*f,t[4]=-u*g,t[8]=T+y*f,t[1]=y+T*f,t[5]=u*_,t[9]=w-S*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const S=u*_,y=u*g,T=f*_,w=f*g;t[0]=h*_,t[4]=T*p-y,t[8]=S*p+w,t[1]=h*g,t[5]=w*p+S,t[9]=y*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const S=u*h,y=u*p,T=f*h,w=f*p;t[0]=h*_,t[4]=w-S*g,t[8]=T*g+y,t[1]=g,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*g+T,t[10]=S-w*g}else if(e.order==="XZY"){const S=u*h,y=u*p,T=f*h,w=f*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=S*g+w,t[5]=u*_,t[9]=y*g-T,t[2]=T*g-y,t[6]=f*_,t[10]=w*g+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Py,e,Ly)}lookAt(e,t,r){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),wr.crossVectors(r,$n),wr.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),wr.crossVectors(r,$n)),wr.normalize(),Ll.crossVectors($n,wr),o[0]=wr.x,o[4]=Ll.x,o[8]=$n.x,o[1]=wr.y,o[5]=Ll.y,o[9]=$n.y,o[2]=wr.z,o[6]=Ll.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],_=r[1],g=r[5],S=r[9],y=r[13],T=r[2],w=r[6],x=r[10],v=r[14],b=r[3],P=r[7],L=r[11],D=r[15],F=o[0],O=o[4],X=o[8],A=o[12],R=o[1],z=o[5],ee=o[9],J=o[13],ae=o[2],ce=o[6],le=o[10],Y=o[14],q=o[3],fe=o[7],re=o[11],U=o[15];return l[0]=u*F+f*R+h*ae+p*q,l[4]=u*O+f*z+h*ce+p*fe,l[8]=u*X+f*ee+h*le+p*re,l[12]=u*A+f*J+h*Y+p*U,l[1]=_*F+g*R+S*ae+y*q,l[5]=_*O+g*z+S*ce+y*fe,l[9]=_*X+g*ee+S*le+y*re,l[13]=_*A+g*J+S*Y+y*U,l[2]=T*F+w*R+x*ae+v*q,l[6]=T*O+w*z+x*ce+v*fe,l[10]=T*X+w*ee+x*le+v*re,l[14]=T*A+w*J+x*Y+v*U,l[3]=b*F+P*R+L*ae+D*q,l[7]=b*O+P*z+L*ce+D*fe,l[11]=b*X+P*ee+L*le+D*re,l[15]=b*A+P*J+L*Y+D*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],g=e[6],S=e[10],y=e[14],T=e[3],w=e[7],x=e[11],v=e[15],b=h*y-p*S,P=f*y-p*g,L=f*S-h*g,D=u*y-p*_,F=u*S-h*_,O=u*g-f*_;return t*(w*b-x*P+v*L)-r*(T*b-x*D+v*F)+o*(T*P-w*D+v*O)-l*(T*L-w*F+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=e[9],S=e[10],y=e[11],T=e[12],w=e[13],x=e[14],v=e[15],b=g*x*p-w*S*p+w*h*y-f*x*y-g*h*v+f*S*v,P=T*S*p-_*x*p-T*h*y+u*x*y+_*h*v-u*S*v,L=_*w*p-T*g*p+T*f*y-u*w*y-_*f*v+u*g*v,D=T*g*h-_*w*h-T*f*S+u*w*S+_*f*x-u*g*x,F=t*b+r*P+o*L+l*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=b*O,e[1]=(w*S*l-g*x*l-w*o*y+r*x*y+g*o*v-r*S*v)*O,e[2]=(f*x*l-w*h*l+w*o*p-r*x*p-f*o*v+r*h*v)*O,e[3]=(g*h*l-f*S*l-g*o*p+r*S*p+f*o*y-r*h*y)*O,e[4]=P*O,e[5]=(_*x*l-T*S*l+T*o*y-t*x*y-_*o*v+t*S*v)*O,e[6]=(T*h*l-u*x*l-T*o*p+t*x*p+u*o*v-t*h*v)*O,e[7]=(u*S*l-_*h*l+_*o*p-t*S*p-u*o*y+t*h*y)*O,e[8]=L*O,e[9]=(T*g*l-_*w*l-T*r*y+t*w*y+_*r*v-t*g*v)*O,e[10]=(u*w*l-T*f*l+T*r*p-t*w*p-u*r*v+t*f*v)*O,e[11]=(_*f*l-u*g*l-_*r*p+t*g*p+u*r*y-t*f*y)*O,e[12]=D*O,e[13]=(_*w*o-T*g*o+T*r*S-t*w*S-_*r*x+t*g*x)*O,e[14]=(T*f*o-u*w*o-T*r*h+t*w*h+u*r*x-t*f*x)*O,e[15]=(u*g*o-_*f*o+_*r*h-t*g*h-u*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+r,_*h-o*u,0,p*h-o*f,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,g=f+f,S=l*p,y=l*_,T=l*g,w=u*_,x=u*g,v=f*g,b=h*p,P=h*_,L=h*g,D=r.x,F=r.y,O=r.z;return o[0]=(1-(w+v))*D,o[1]=(y+L)*D,o[2]=(T-P)*D,o[3]=0,o[4]=(y-L)*F,o[5]=(1-(S+v))*F,o[6]=(x+b)*F,o[7]=0,o[8]=(T+P)*O,o[9]=(x-b)*O,o[10]=(1-(S+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Hs.set(o[0],o[1],o[2]).length();const u=Hs.set(o[4],o[5],o[6]).length(),f=Hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),_i.copy(this);const p=1/l,_=1/u,g=1/f;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Pi,h=!1){const p=this.elements,_=2*l/(t-e),g=2*l/(r-o),S=(t+e)/(t-e),y=(r+o)/(r-o);let T,w;if(h)T=l/(u-l),w=u*l/(u-l);else if(f===Pi)T=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===ac)T=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Pi,h=!1){const p=this.elements,_=2/(t-e),g=2/(r-o),S=-(t+e)/(t-e),y=-(r+o)/(r-o);let T,w;if(h)T=1/(u-l),w=u/(u-l);else if(f===Pi)T=-2/(u-l),w=-(u+l)/(u-l);else if(f===ac)T=-1/(u-l),w=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hs=new Z,_i=new $t,Py=new Z(0,0,0),Ly=new Z(1,1,1),wr=new Z,Ll=new Z,$n=new Z,jm=new $t,qm=new po;class tr{constructor(e=0,t=0,r=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],_=o[9],g=o[2],S=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ny=0;const Ym=new Z,Gs=new po,ji=new $t,Nl=new Z,$a=new Z,Dy=new Z,Iy=new po,$m=new Z(1,0,0),Km=new Z(0,1,0),Zm=new Z(0,0,1),Qm={type:"added"},Uy={type:"removed"},Ws={type:"childadded",child:null},mf={type:"childremoved",child:null};class In extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Z,t=new tr,r=new po,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ut}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt($a,Nl,this.up):ji.lookAt(Nl,$a,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(ji),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uy),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,Iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),S=u(e.skeletons),y=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}In.DEFAULT_UP=new Z(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new Z,qi=new Z,gf=new Z,Yi=new Z,Xs=new Z,js=new Z,Jm=new Z,_f=new Z,vf=new Z,xf=new Z,Sf=new Qt,yf=new Qt,Mf=new Qt;class xi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),vi.subVectors(e,t),o.cross(vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){vi.subVectors(o,t),qi.subVectors(r,t),gf.subVectors(e,t);const u=vi.dot(vi),f=vi.dot(qi),h=vi.dot(gf),p=qi.dot(qi),_=qi.dot(gf),g=u*p-f*f;if(g===0)return l.set(0,0,0),null;const S=1/g,y=(p*h-f*_)*S,T=(u*_-f*h)*S;return l.set(1-y-T,T,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(u,Yi.y),h.addScaledVector(f,Yi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Sf.setScalar(0),yf.setScalar(0),Mf.setScalar(0),Sf.fromBufferAttribute(e,t),yf.fromBufferAttribute(e,r),Mf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Sf,l.x),u.addScaledVector(yf,l.y),u.addScaledVector(Mf,l.z),u}static isFrontFacing(e,t,r,o){return vi.subVectors(r,t),qi.subVectors(e,t),vi.cross(qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Xs.subVectors(o,r),js.subVectors(l,r),_f.subVectors(e,r);const h=Xs.dot(_f),p=js.dot(_f);if(h<=0&&p<=0)return t.copy(r);vf.subVectors(e,o);const _=Xs.dot(vf),g=js.dot(vf);if(_>=0&&g<=_)return t.copy(o);const S=h*g-_*p;if(S<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(r).addScaledVector(Xs,u);xf.subVectors(e,l);const y=Xs.dot(xf),T=js.dot(xf);if(T>=0&&y<=T)return t.copy(l);const w=y*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(js,f);const x=_*T-y*g;if(x<=0&&g-_>=0&&y-T>=0)return Jm.subVectors(l,o),f=(g-_)/(g-_+(y-T)),t.copy(o).addScaledVector(Jm,f);const v=1/(x+w+S);return u=w*v,f=S*v,t.copy(r).addScaledVector(Xs,u).addScaledVector(js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Ef(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=My(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ef(u,l,e+1/3),this.g=Ef(u,l,e),this.b=Ef(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=g_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Tt.workingToColorSpace(wn.copy(this),e),Math.round(vt(wn.r*255,0,255))*65536+Math.round(vt(wn.g*255,0,255))*256+Math.round(vt(wn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),t);const r=wn.r,o=wn.g,l=wn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const g=u-f;switch(p=_<=.5?g/(u+f):g/(2-u-f),u){case r:h=(o-l)/g+(o<l?6:0);break;case o:h=(l-r)/g+2;break;case l:h=(r-o)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=si){Tt.workingToColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,o=wn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Dl);const r=sf(Ar.h,Dl.h,t),o=sf(Ar.s,Dl.s,t),l=sf(Ar.l,Dl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Rt;Rt.NAMES=g_;let Fy=0;class sa extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=Zs,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Hf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vf&&(r.blendSrc=this.blendSrc),this.blendDst!==Hf&&(r.blendDst=this.blendDst),this.blendEquation!==ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kd extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new Z,Il=new Lt;let Oy=0;class li{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=km,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ja(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class __ extends li{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class v_ extends li{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Cn extends li{constructor(e,t,r){super(new Float32Array(e),t,r)}}let By=0;const ri=new $t,Tf=new In,qs=new Z,Kn=new mo,Ka=new mo,hn=new Z;class Un extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?v_:__)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Cn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ka.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Kn.min,Ka.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Ka.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Ka.min),Kn.expandByPoint(Ka.max))}Kn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)hn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),hn.add(qs)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<r.count;X++)f[X]=new Z,h[X]=new Z;const p=new Z,_=new Z,g=new Z,S=new Lt,y=new Lt,T=new Lt,w=new Z,x=new Z;function v(X,A,R){p.fromBufferAttribute(r,X),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),S.fromBufferAttribute(l,X),y.fromBufferAttribute(l,A),T.fromBufferAttribute(l,R),_.sub(p),g.sub(p),y.sub(S),T.sub(S);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(z),x.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(z),f[X].add(w),f[A].add(w),f[R].add(w),h[X].add(x),h[A].add(x),h[R].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let X=0,A=b.length;X<A;++X){const R=b[X],z=R.start,ee=R.count;for(let J=z,ae=z+ee;J<ae;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new Z,L=new Z,D=new Z,F=new Z;function O(X){D.fromBufferAttribute(o,X),F.copy(D);const A=f[X];P.copy(A),P.sub(D.multiplyScalar(D.dot(A))).normalize(),L.crossVectors(F,A);const z=L.dot(h[X])<0?-1:1;u.setXYZW(X,P.x,P.y,P.z,z)}for(let X=0,A=b.length;X<A;++X){const R=b[X],z=R.start,ee=R.count;for(let J=z,ae=z+ee;J<ae;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const o=new Z,l=new Z,u=new Z,f=new Z,h=new Z,p=new Z,_=new Z,g=new Z;if(e)for(let S=0,y=e.count;S<y;S+=3){const T=e.getX(S+0),w=e.getX(S+1),x=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,x),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),f.add(_),h.add(_),p.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,y=t.count;S<y;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),u.fromBufferAttribute(t,S+2),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,g=f.normalized,S=new p.constructor(h.length*_);let y=0,T=0;for(let w=0,x=h.length;w<x;w++){f.isInterleavedBufferAttribute?y=h[w]*f.data.stride+f.offset:y=h[w]*_;for(let v=0;v<_;v++)S[T++]=p[y++]}return new li(S,_,g)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=e(S,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new $t,es=new $d,Ul=new go,tg=new Z,Fl=new Z,Ol=new Z,Bl=new Z,wf=new Z,kl=new Z,ng=new Z,zl=new Z;class Ii extends In{constructor(e=new Un,t=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],g=l[h];_!==0&&(wf.fromBufferAttribute(g,e),u?kl.addScaledVector(wf,_):kl.addScaledVector(wf.sub(t),_))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Ul.containsPoint(es.origin)===!1&&(es.intersectSphere(Ul,tg)===null||es.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(l).invert(),es.copy(e.ray).applyMatrix4(eg),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,S=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,w=S.length;T<w;T++){const x=S[T],v=u[x.materialIndex],b=Math.max(x.start,y.start),P=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=b,D=P;L<D;L+=3){const F=f.getX(L),O=f.getX(L+1),X=f.getX(L+2);o=Vl(this,v,e,r,p,_,g,F,O,X),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let x=T,v=w;x<v;x+=3){const b=f.getX(x),P=f.getX(x+1),L=f.getX(x+2);o=Vl(this,u,e,r,p,_,g,b,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,w=S.length;T<w;T++){const x=S[T],v=u[x.materialIndex],b=Math.max(x.start,y.start),P=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let L=b,D=P;L<D;L+=3){const F=L,O=L+1,X=L+2;o=Vl(this,v,e,r,p,_,g,F,O,X),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let x=T,v=w;x<v;x+=3){const b=x,P=x+1,L=x+2;o=Vl(this,u,e,r,p,_,g,b,P,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function ky(s,e,t,r,o,l,u,f){let h;if(e.side===Gn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Nr,f),h===null)return null;zl.copy(f),zl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(zl);return p<t.near||p>t.far?null:{distance:p,point:zl.clone(),object:s}}function Vl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Fl),s.getVertexPosition(h,Ol),s.getVertexPosition(p,Bl);const _=ky(s,e,t,r,Fl,Ol,Bl,ng);if(_){const g=new Z;xi.getBarycoord(ng,Fl,Ol,Bl,g),o&&(_.uv=xi.getInterpolatedAttribute(o,f,h,p,g,new Lt)),l&&(_.uv1=xi.getInterpolatedAttribute(l,f,h,p,g,new Lt)),u&&(_.normal=xi.getInterpolatedAttribute(u,f,h,p,g,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:f,b:h,c:p,normal:new Z,materialIndex:0};xi.getNormal(Fl,Ol,Bl,S.normal),_.face=S,_.barycoord=g}return _}class _o extends Un{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],g=[];let S=0,y=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(_,3)),this.setAttribute("uv",new Cn(g,2));function T(w,x,v,b,P,L,D,F,O,X,A){const R=L/O,z=D/X,ee=L/2,J=D/2,ae=F/2,ce=O+1,le=X+1;let Y=0,q=0;const fe=new Z;for(let re=0;re<le;re++){const U=re*z-J;for(let oe=0;oe<ce;oe++){const Te=oe*R-ee;fe[w]=Te*b,fe[x]=U*P,fe[v]=ae,p.push(fe.x,fe.y,fe.z),fe[w]=0,fe[x]=0,fe[v]=F>0?1:-1,_.push(fe.x,fe.y,fe.z),g.push(oe/O),g.push(1-re/X),Y+=1}}for(let re=0;re<X;re++)for(let U=0;U<O;U++){const oe=S+U+ce*re,Te=S+U+ce*(re+1),Xe=S+(U+1)+ce*(re+1),Ze=S+(U+1)+ce*re;h.push(oe,Te,Ze),h.push(Te,Xe,Ze),q+=6}f.addGroup(y,q,A),y+=q,S+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const r=ia(s[t]);for(const o in r)e[o]=r[o]}return e}function zy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function x_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Vy={clone:ia,merge:Nn};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=zy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class S_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new Z,ig=new Lt,rg=new Lt;class ai extends S_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,ig,rg),t.subVectors(rg,ig)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,$s=1;class Wy extends In{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(Ys,$s,e,t);o.layers=this.layers,this.add(o);const l=new ai(Ys,$s,e,t);l.layers=this.layers,this.add(l);const u=new ai(Ys,$s,e,t);u.layers=this.layers,this.add(u);const f=new ai(Ys,$s,e,t);f.layers=this.layers,this.add(f);const h=new ai(Ys,$s,e,t);h.layers=this.layers,this.add(h);const p=new ai(Ys,$s,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,_),e.setRenderTarget(g,S,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class y_ extends Dn{constructor(e=[],t=cs,r,o,l,u,f,h,p,_){super(e,t,r,o,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M_ extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new y_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Zi});l.uniforms.tEquirect.value=t;const u=new Ii(o,l),f=t.minFilter;return t.minFilter===os&&(t.minFilter=An),new Wy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Hl extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class Af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&S>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class jy extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qy extends Dn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=vn,_=vn,g,S){super(null,u,f,h,p,_,o,l,g,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new Z,Yy=new Z,$y=new ut;class rs{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Cf.subVectors(r,t).cross(Yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Cf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$y.getNormalMatrix(e),o=this.coplanarPoint(Cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new go,Ky=new Lt(.5,.5),Gl=new Z;class E_{constructor(e=new rs,t=new rs,r=new rs,o=new rs,l=new rs,u=new rs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Pi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],g=l[5],S=l[6],y=l[7],T=l[8],w=l[9],x=l[10],v=l[11],b=l[12],P=l[13],L=l[14],D=l[15];if(o[0].setComponents(p-u,y-_,v-T,D-b).normalize(),o[1].setComponents(p+u,y+_,v+T,D+b).normalize(),o[2].setComponents(p+f,y+g,v+w,D+P).normalize(),o[3].setComponents(p-f,y-g,v-w,D-P).normalize(),r)o[4].setComponents(h,S,x,L).normalize(),o[5].setComponents(p-h,y-S,v-x,D-L).normalize();else if(o[4].setComponents(p-h,y-S,v-x,D-L).normalize(),t===Pi)o[5].setComponents(p+h,y+S,v+x,D+L).normalize();else if(t===ac)o[5].setComponents(h,S,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=Ky.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class T_ extends sa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lc=new Z,cc=new Z,sg=new $t,Za=new $d,Wl=new go,Rf=new Z,ag=new Z;class Zy extends In{constructor(e=new Un,t=new T_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)lc.fromBufferAttribute(t,o-1),cc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new Cn(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;sg.copy(o).invert(),Za.copy(e.ray).applyMatrix4(sg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const y=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let w=y,x=T-1;w<x;w+=p){const v=_.getX(w),b=_.getX(w+1),P=Xl(this,e,Za,h,v,b,w);P&&t.push(P)}if(this.isLineLoop){const w=_.getX(T-1),x=_.getX(y),v=Xl(this,e,Za,h,w,x,T-1);v&&t.push(v)}}else{const y=Math.max(0,u.start),T=Math.min(S.count,u.start+u.count);for(let w=y,x=T-1;w<x;w+=p){const v=Xl(this,e,Za,h,w,w+1,w);v&&t.push(v)}if(this.isLineLoop){const w=Xl(this,e,Za,h,T-1,y,T-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Xl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(lc.fromBufferAttribute(f,o),cc.fromBufferAttribute(f,l),t.distanceSqToSegment(lc,cc,Rf,ag)>r)return;Rf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Rf);if(!(p<e.near||p>e.far))return{distance:p,point:ag.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const og=new Z,lg=new Z;class Qy extends Zy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)og.fromBufferAttribute(t,o),lg.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+og.distanceTo(lg);e.setAttribute("lineDistance",new Cn(r,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nc extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cg=new $t,Dd=new $d,jl=new go,ql=new Z;class bf extends In{constructor(e=new Un,t=new nc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(o),jl.radius+=l,e.ray.intersectsSphere(jl)===!1)return;cg.copy(o).invert(),Dd.copy(e.ray).applyMatrix4(cg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let T=S,w=y;T<w;T++){const x=p.getX(T);ql.fromBufferAttribute(g,x),ug(ql,x,h,o,e,t,this)}}else{const S=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let T=S,w=y;T<w;T++)ql.fromBufferAttribute(g,T),ug(ql,T,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ug(s,e,t,r,o,l,u){const f=Dd.distanceSqToPoint(s);if(f<t){const h=new Z;Dd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class lo extends Dn{constructor(e,t,r=Di,o,l,u,f=vn,h=vn,p,_=er,g=1){if(_!==er&&_!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:g};super(S,o,l,u,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jy extends lo{constructor(e,t=Di,r=cs,o,l,u=vn,f=vn,h,p=er){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,h,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class w_ extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zd extends Un{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];f(o),p(r),_(),this.setAttribute("position",new Cn(l,3)),this.setAttribute("normal",new Cn(l.slice(),3)),this.setAttribute("uv",new Cn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const P=new Z,L=new Z,D=new Z;for(let F=0;F<t.length;F+=3)y(t[F+0],P),y(t[F+1],L),y(t[F+2],D),h(P,L,D,b)}function h(b,P,L,D){const F=D+1,O=[];for(let X=0;X<=F;X++){O[X]=[];const A=b.clone().lerp(L,X/F),R=P.clone().lerp(L,X/F),z=F-X;for(let ee=0;ee<=z;ee++)ee===0&&X===F?O[X][ee]=A:O[X][ee]=A.clone().lerp(R,ee/z)}for(let X=0;X<F;X++)for(let A=0;A<2*(F-X)-1;A++){const R=Math.floor(A/2);A%2===0?(S(O[X][R+1]),S(O[X+1][R]),S(O[X][R])):(S(O[X][R+1]),S(O[X+1][R+1]),S(O[X+1][R]))}}function p(b){const P=new Z;for(let L=0;L<l.length;L+=3)P.x=l[L+0],P.y=l[L+1],P.z=l[L+2],P.normalize().multiplyScalar(b),l[L+0]=P.x,l[L+1]=P.y,l[L+2]=P.z}function _(){const b=new Z;for(let P=0;P<l.length;P+=3){b.x=l[P+0],b.y=l[P+1],b.z=l[P+2];const L=x(b)/2/Math.PI+.5,D=v(b)/Math.PI+.5;u.push(L,1-D)}T(),g()}function g(){for(let b=0;b<u.length;b+=6){const P=u[b+0],L=u[b+2],D=u[b+4],F=Math.max(P,L,D),O=Math.min(P,L,D);F>.9&&O<.1&&(P<.2&&(u[b+0]+=1),L<.2&&(u[b+2]+=1),D<.2&&(u[b+4]+=1))}}function S(b){l.push(b.x,b.y,b.z)}function y(b,P){const L=b*3;P.x=e[L+0],P.y=e[L+1],P.z=e[L+2]}function T(){const b=new Z,P=new Z,L=new Z,D=new Z,F=new Lt,O=new Lt,X=new Lt;for(let A=0,R=0;A<l.length;A+=9,R+=6){b.set(l[A+0],l[A+1],l[A+2]),P.set(l[A+3],l[A+4],l[A+5]),L.set(l[A+6],l[A+7],l[A+8]),F.set(u[R+0],u[R+1]),O.set(u[R+2],u[R+3]),X.set(u[R+4],u[R+5]),D.copy(b).add(P).add(L).divideScalar(3);const z=x(D);w(F,R+0,b,z),w(O,R+2,P,z),w(X,R+4,L,z)}}function w(b,P,L,D){D<0&&b.x===1&&(u[P]=b.x-1),L.x===0&&L.z===0&&(u[P]=D/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function v(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.vertices,e.indices,e.radius,e.detail)}}class uc extends Zd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uc(e.radius,e.detail)}}class mc extends Un{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,_=h+1,g=e/f,S=t/h,y=[],T=[],w=[],x=[];for(let v=0;v<_;v++){const b=v*S-u;for(let P=0;P<p;P++){const L=P*g-l;T.push(L,-b,0),w.push(0,0,1),x.push(P/f),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let b=0;b<f;b++){const P=b+p*v,L=b+p*(v+1),D=b+1+p*(v+1),F=b+1+p*v;y.push(P,L,F),y.push(L,D,F)}this.setIndex(y),this.setAttribute("position",new Cn(T,3)),this.setAttribute("normal",new Cn(w,3)),this.setAttribute("uv",new Cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class eM extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tM extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class A_ extends S_{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iM extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fg extends Qy{constructor(e=10,t=10,r=4473924,o=8947848){r=new Rt(r),o=new Rt(o);const l=t/2,u=e/t,f=e/2,h=[],p=[];for(let S=0,y=0,T=-f;S<=t;S++,T+=u){h.push(-f,0,T,f,0,T),h.push(T,0,-f,T,0,f);const w=S===l?r:o;w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3}const _=new Un;_.setAttribute("position",new Cn(h,3)),_.setAttribute("color",new Cn(p,3));const g=new T_({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function dg(s,e,t,r){const o=rM(r);switch(t){case u_:return s*e;case d_:return s*e/o.components*o.byteLength;case Gd:return s*e/o.components*o.byteLength;case ta:return s*e*2/o.components*o.byteLength;case Wd:return s*e*2/o.components*o.byteLength;case f_:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case Xd:return s*e*4/o.components*o.byteLength;case Ql:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(s,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(s,8)*Math.max(e,8)/2;case rd:case sd:case od:case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ad:case cd:case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wd:case Ad:case Cd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rd:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rM(s){switch(s){case oi:case a_:return{byteLength:1,components:1};case so:case o_:case Ji:return{byteLength:2,components:1};case Vd:case Hd:return{byteLength:2,components:4};case Di:case zd:case bi:return{byteLength:4,components:1};case l_:case c_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C_(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function sM(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,h,p){const _=h.array,g=h.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<g.length;y++){const T=g[S],w=g[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,g[S]=w)}g.length=S+1;for(let y=0,T=g.length;y<T;y++){const w=g[y];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
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
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
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
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
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
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bM=`#define PI 3.141592653589793
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
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
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
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
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
#endif`,rE=`uniform sampler2D dfgLUT;
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
}`,sE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mE=`#if defined( USE_POINTS_UV )
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
#endif`,gE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
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
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
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
#endif`,bE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c1=`varying vec3 vWorldDirection;
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
}`,f1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,p1=`#define DISTANCE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
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
}`,v1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,y1=`#define LAMBERT
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
}`,M1=`#define LAMBERT
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
}`,E1=`#define MATCAP
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
}`,T1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,A1=`#define NORMAL
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
}`,C1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,L1=`#define TOON
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
}`,N1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,F1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,B1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:aM,alphahash_pars_fragment:oM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:fM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:gM,beginnormal_vertex:_M,bsdfs:vM,iridescence_fragment:xM,bumpmap_pars_fragment:SM,clipping_planes_fragment:yM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:EM,clipping_planes_vertex:TM,color_fragment:wM,color_pars_fragment:AM,color_pars_vertex:CM,color_vertex:RM,common:bM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:LM,displacementmap_pars_vertex:NM,displacementmap_vertex:DM,emissivemap_fragment:IM,emissivemap_pars_fragment:UM,colorspace_fragment:FM,colorspace_pars_fragment:OM,envmap_fragment:BM,envmap_common_pars_fragment:kM,envmap_pars_fragment:zM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:QM,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:WM,fog_fragment:XM,fog_pars_fragment:jM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:KM,lights_pars_begin:ZM,lights_toon_fragment:JM,lights_toon_pars_fragment:eE,lights_phong_fragment:tE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:aE,lights_fragment_end:oE,logdepthbuf_fragment:lE,logdepthbuf_pars_fragment:cE,logdepthbuf_pars_vertex:uE,logdepthbuf_vertex:fE,map_fragment:dE,map_pars_fragment:hE,map_particle_fragment:pE,map_particle_pars_fragment:mE,metalnessmap_fragment:gE,metalnessmap_pars_fragment:_E,morphinstance_vertex:vE,morphcolor_vertex:xE,morphnormal_vertex:SE,morphtarget_pars_vertex:yE,morphtarget_vertex:ME,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:wE,normal_pars_vertex:AE,normal_vertex:CE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:bE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:DE,packing:IE,premultiplied_alpha_fragment:UE,project_vertex:FE,dithering_fragment:OE,dithering_pars_fragment:BE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:WE,skinbase_vertex:XE,skinning_pars_vertex:jE,skinning_vertex:qE,skinnormal_vertex:YE,specularmap_fragment:$E,specularmap_pars_fragment:KE,tonemapping_fragment:ZE,tonemapping_pars_fragment:QE,transmission_fragment:JE,transmission_pars_fragment:e1,uv_pars_fragment:t1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:r1,background_vert:s1,background_frag:a1,backgroundCube_vert:o1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:f1,depth_frag:d1,distance_vert:h1,distance_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:_1,linedashed_frag:v1,meshbasic_vert:x1,meshbasic_frag:S1,meshlambert_vert:y1,meshlambert_frag:M1,meshmatcap_vert:E1,meshmatcap_frag:T1,meshnormal_vert:w1,meshnormal_frag:A1,meshphong_vert:C1,meshphong_frag:R1,meshphysical_vert:b1,meshphysical_frag:P1,meshtoon_vert:L1,meshtoon_frag:N1,points_vert:D1,points_frag:I1,shadow_vert:U1,shadow_frag:F1,sprite_vert:O1,sprite_frag:B1},Ie={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Nn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Nn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Nn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Nn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Nn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Nn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Nn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Nn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Nn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Nn([Ie.lights,Ie.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Yl={r:0,b:0,g:0},ns=new tr,k1=new $t;function z1(s,e,t,r,o,l,u){const f=new Rt(0);let h=l===!0?0:1,p,_,g=null,S=0,y=null;function T(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?t:e).get(L)),L}function w(P){let L=!1;const D=T(P);D===null?v(f,h):D&&D.isColor&&(v(D,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,L){const D=T(L);D&&(D.isCubeTexture||D.mapping===pc)?(_===void 0&&(_=new Ii(new _o(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ia(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),ns.copy(L.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(ns)),_.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ft,(g!==D||S!==D.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=D,S=D.version,y=s.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Ii(new mc(2,2),new Ui({name:"BackgroundMaterial",uniforms:ia(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ft,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||S!==D.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=D,S=D.version,y=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,L){P.getRGB(Yl,x_(s)),r.buffers.color.setClear(Yl.r,Yl.g,Yl.b,L,u)}function b(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,L=1){f.set(P),h=L,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,v(f,h)},render:w,addToRenderList:x,dispose:b}}function V1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,u=!1;function f(R,z,ee,J,ae){let ce=!1;const le=g(J,ee,z);l!==le&&(l=le,p(l.object)),ce=y(R,J,ee,ae),ce&&T(R,J,ee,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,L(R,z,ee,J),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function g(R,z,ee){const J=ee.wireframe===!0;let ae=r[R.id];ae===void 0&&(ae={},r[R.id]=ae);let ce=ae[z.id];ce===void 0&&(ce={},ae[z.id]=ce);let le=ce[J];return le===void 0&&(le=S(h()),ce[J]=le),le}function S(R){const z=[],ee=[],J=[];for(let ae=0;ae<t;ae++)z[ae]=0,ee[ae]=0,J[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ee,attributeDivisors:J,object:R,attributes:{},index:null}}function y(R,z,ee,J){const ae=l.attributes,ce=z.attributes;let le=0;const Y=ee.getAttributes();for(const q in Y)if(Y[q].location>=0){const re=ae[q];let U=ce[q];if(U===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;le++}return l.attributesNum!==le||l.index!==J}function T(R,z,ee,J){const ae={},ce=z.attributes;let le=0;const Y=ee.getAttributes();for(const q in Y)if(Y[q].location>=0){let re=ce[q];re===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ae[q]=U,le++}l.attributes=ae,l.attributesNum=le,l.index=J}function w(){const R=l.newAttributes;for(let z=0,ee=R.length;z<ee;z++)R[z]=0}function x(R){v(R,0)}function v(R,z){const ee=l.newAttributes,J=l.enabledAttributes,ae=l.attributeDivisors;ee[R]=1,J[R]===0&&(s.enableVertexAttribArray(R),J[R]=1),ae[R]!==z&&(s.vertexAttribDivisor(R,z),ae[R]=z)}function b(){const R=l.newAttributes,z=l.enabledAttributes;for(let ee=0,J=z.length;ee<J;ee++)z[ee]!==R[ee]&&(s.disableVertexAttribArray(ee),z[ee]=0)}function P(R,z,ee,J,ae,ce,le){le===!0?s.vertexAttribIPointer(R,z,ee,ae,ce):s.vertexAttribPointer(R,z,ee,J,ae,ce)}function L(R,z,ee,J){w();const ae=J.attributes,ce=ee.getAttributes(),le=z.defaultAttributeValues;for(const Y in ce){const q=ce[Y];if(q.location>=0){let fe=ae[Y];if(fe===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const re=fe.normalized,U=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;const Te=oe.buffer,Xe=oe.type,Ze=oe.bytesPerElement,ne=Xe===s.INT||Xe===s.UNSIGNED_INT||fe.gpuType===zd;if(fe.isInterleavedBufferAttribute){const de=fe.data,ye=de.stride,ke=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)v(q.location+Ue,de.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)x(q.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ue=0;Ue<q.locationSize;Ue++)P(q.location+Ue,U/q.locationSize,Xe,re,ye*Ze,(ke+U/q.locationSize*Ue)*Ze,ne)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)v(q.location+de,fe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<q.locationSize;de++)x(q.location+de);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let de=0;de<q.locationSize;de++)P(q.location+de,U/q.locationSize,Xe,re,U*Ze,U/q.locationSize*de*Ze,ne)}}else if(le!==void 0){const re=le[Y];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(q.location,re);break;case 3:s.vertexAttrib3fv(q.location,re);break;case 4:s.vertexAttrib4fv(q.location,re);break;default:s.vertexAttrib1fv(q.location,re)}}}}b()}function D(){X();for(const R in r){const z=r[R];for(const ee in z){const J=z[ee];for(const ae in J)_(J[ae].object),delete J[ae];delete z[ee]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const ee in z){const J=z[ee];for(const ae in J)_(J[ae].object),delete J[ae];delete z[ee]}delete r[R.id]}function O(R){for(const z in r){const ee=r[z];if(ee[R.id]===void 0)continue;const J=ee[R.id];for(const ae in J)_(J[ae].object),delete J[ae];delete ee[R.id]}}function X(){A(),u=!0,l!==o&&(l=o,p(l.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:X,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:b}}function H1(s,e,t){let r;function o(p){r=p}function l(p,_){s.drawArrays(r,p,_),t.update(_,r,1)}function u(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),t.update(_,r,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];t.update(y,r,1)}function h(p,_,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)u(p[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*S[w];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function G1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const X=O===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!X)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(at("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:L,maxSamples:D,samples:F}}function W1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new rs,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||o;return o=S,r=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,S){t=_(g,S,0)},this.setState=function(g,S,y){const T=g.clippingPlanes,w=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!o||T===null||T.length===0||l&&!x)l?_(null):p();else{const b=l?0:r,P=b*4;let L=v.clippingState||null;h.value=L,L=_(T,S,P,y);for(let D=0;D!==P;++D)L[D]=t[D];v.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,y,T){const w=g!==null?g.length:0;let x=null;if(w!==0){if(x=h.value,T!==!0||x===null){const v=y+w*4,b=S.matrixWorldInverse;f.getNormalMatrix(b),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,L=y;P!==w;++P,L+=4)u.copy(g[P]).applyMatrix4(b,f),u.normal.toArray(x,L),x[L+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function X1(s){let e=new WeakMap;function t(u,f){return f===Kf?u.mapping=cs:f===Zf&&(u.mapping=ea),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Kf||f===Zf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new M_(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Pr=4,hg=[.125,.215,.35,.446,.526,.582],as=20,j1=256,Qa=new A_,pg=new Rt;let Pf=null,Lf=0,Nf=0,Df=!1;const q1=new Z;class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=q1}=l;Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Lf,Nf),this._renderer.xr.enabled=Df,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ji,format:Si,colorSpace:na,depthBuffer:!1},o=gg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Y1(l)),this._blurMaterial=K1(l,e,t),this._ggxMaterial=$1(l,e,t)}return o}_compileMaterial(e){const t=new Ii(new Un,e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,r,o,l){const h=new ai(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(pg),g.toneMapping=Li,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new _o,new Kd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let v=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,v=!0):(x.color.copy(pg),v=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[P],l.y,l.z)):L===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[P]));const D=this._cubeSize;Ks(o,L*D,P>2?D:0,D,D),g.setRenderTarget(o),v&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=S,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===cs||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ks(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Qa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,y=g*S,{_lodMax:T}=this,w=this._sizeLods[r],x=3*w*(r>T-Pr?r-T+Pr:0),v=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=T-t,Ks(l,x,v,3*w,2*w),o.setRenderTarget(l),o.render(f,Qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-r,Ks(e,x,v,3*w,2*w),o.setRenderTarget(e),o.render(f,Qa)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*as-1),w=l/T,x=isFinite(l)?1+Math.floor(_*w):as;x>as&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${as}`);const v=[];let b=0;for(let O=0;O<as;++O){const X=O/w,A=Math.exp(-X*X/2);v.push(A),O===0?b+=A:O<x&&(b+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/b;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=u==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:P}=this;S.dTheta.value=T,S.mipInt.value=P-r;const L=this._sizeLods[o],D=3*L*(o>P-Pr?o-P+Pr:0),F=4*(this._cubeSize-L);Ks(t,D,F,3*L,2*L),h.setRenderTarget(t),h.render(g,Qa)}}function Y1(s){const e=[],t=[],r=[];let o=s;const l=s-Pr+1+hg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Pr?h=hg[u-s+Pr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,w=3,x=2,v=1,b=new Float32Array(w*T*y),P=new Float32Array(x*T*y),L=new Float32Array(v*T*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,X=F>2?0:-1,A=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];b.set(A,w*T*F),P.set(S,x*T*F);const R=[F,F,F,F,F,F];L.set(R,v*T*F)}const D=new Un;D.setAttribute("position",new li(b,w)),D.setAttribute("uv",new li(P,x)),D.setAttribute("faceIndex",new li(L,v)),r.push(new Ii(D,null)),o>Pr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function gg(s,e,t){const r=new Ni(s,e,t);return r.texture.mapping=pc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ks(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function $1(s,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function K1(s,e,t){const r=new Float32Array(as),o=new Z(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function _g(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function vg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function Z1(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Kf||h===Zf,_=h===cs||h===ea;if(p||_){let g=e.get(f);const S=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new mg(s)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&o(y)?(t===null&&(t=new mg(s)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function Q1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&oo("WebGLRenderer: "+r+" extension not supported."),o}}}function J1(s,e,t,r){const o={},l=new WeakMap;function u(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",u),delete o[S.id];const y=l.get(S);y&&(e.remove(y),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(g,S){return o[S.id]===!0||(S.addEventListener("dispose",u),o[S.id]=!0,t.memory.geometries++),S}function h(g){const S=g.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,T=g.attributes.position;let w=0;if(y!==null){const b=y.array;w=y.version;for(let P=0,L=b.length;P<L;P+=3){const D=b[P+0],F=b[P+1],O=b[P+2];S.push(D,F,F,O,O,D)}}else if(T!==void 0){const b=T.array;w=T.version;for(let P=0,L=b.length/3-1;P<L;P+=3){const D=P+0,F=P+1,O=P+2;S.push(D,F,F,O,O,D)}}else return;const x=new(h_(S)?v_:__)(S,1);x.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const S=l.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:_}}function eT(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,y){s.drawElements(r,y,l,S*u),t.update(y,r,1)}function p(S,y,T){T!==0&&(s.drawElementsInstanced(r,y,l,S*u,T),t.update(y,r,T))}function _(S,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,S,0,T);let x=0;for(let v=0;v<T;v++)x+=y[v];t.update(x,r,1)}function g(S,y,T,w){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/u,y[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,S,0,w,0,T);let v=0;for(let b=0;b<T;b++)v+=y[b]*w[b];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function tT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function nT(s,e,t){const r=new WeakMap,o=new Qt;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(f);if(S===void 0||S.count!==g){let R=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let L=0;T===!0&&(L=1),w===!0&&(L=2),x===!0&&(L=3);let D=f.attributes.position.count*L,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*F*4*g),X=new p_(O,D,F,g);X.type=bi,X.needsUpdate=!0;const A=L*4;for(let z=0;z<g;z++){const ee=v[z],J=b[z],ae=P[z],ce=D*F*4*z;for(let le=0;le<ee.count;le++){const Y=le*A;T===!0&&(o.fromBufferAttribute(ee,le),O[ce+Y+0]=o.x,O[ce+Y+1]=o.y,O[ce+Y+2]=o.z,O[ce+Y+3]=0),w===!0&&(o.fromBufferAttribute(J,le),O[ce+Y+4]=o.x,O[ce+Y+5]=o.y,O[ce+Y+6]=o.z,O[ce+Y+7]=0),x===!0&&(o.fromBufferAttribute(ae,le),O[ce+Y+8]=o.x,O[ce+Y+9]=o.y,O[ce+Y+10]=o.z,O[ce+Y+11]=ae.itemSize===4?o.w:1)}}S={count:g,texture:X,size:new Lt(D,F)},r.set(f,S),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function iT(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,_=h.geometry,g=e.get(h,_);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==p&&(S.update(),o.set(S,p))}return g}function u(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const rT={[Qg]:"LINEAR_TONE_MAPPING",[Jg]:"REINHARD_TONE_MAPPING",[e_]:"CINEON_TONE_MAPPING",[t_]:"ACES_FILMIC_TONE_MAPPING",[i_]:"AGX_TONE_MAPPING",[r_]:"NEUTRAL_TONE_MAPPING",[n_]:"CUSTOM_TONE_MAPPING"};function sT(s,e,t,r,o){const l=new Ni(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Ni(e,t,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),f=new Un;f.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const h=new eM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ii(f,h),_=new A_(-1,1,1,-1,0,1);let g=null,S=null,y=!1,T,w=null,x=[],v=!1;this.setSize=function(b,P){l.setSize(b,P),u.setSize(b,P);for(let L=0;L<x.length;L++){const D=x[L];D.setSize&&D.setSize(b,P)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;const P=l.width,L=l.height;for(let D=0;D<x.length;D++){const F=x[D];F.setSize&&F.setSize(P,L)}},this.begin=function(b,P){if(y||b.toneMapping===Li&&x.length===0)return!1;if(w=P,P!==null){const L=P.width,D=P.height;(l.width!==L||l.height!==D)&&this.setSize(L,D)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Li,!0},this.hasRenderPass=function(){return v},this.end=function(b,P){b.toneMapping=T,y=!0;let L=l,D=u;for(let F=0;F<x.length;F++){const O=x[F];if(O.enabled!==!1&&(O.render(b,D,L,P),O.needsSwap!==!1)){const X=L;L=D,D=X}}if(g!==b.outputColorSpace||S!==b.toneMapping){g=b.outputColorSpace,S=b.toneMapping,h.defines={},Tt.getTransfer(g)===Ft&&(h.defines.SRGB_TRANSFER="");const F=rT[S];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(w),b.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const R_=new Dn,Id=new lo(1,1),b_=new p_,P_=new Ry,L_=new y_,xg=[],Sg=[],yg=new Float32Array(16),Mg=new Float32Array(9),Eg=new Float32Array(4);function aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=xg[o];if(l===void 0&&(l=new Float32Array(o),xg[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function _c(s,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function aT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function uT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Eg.set(r),s.uniformMatrix2fv(this.addr,!1,Eg),on(t,r)}}function fT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;Mg.set(r),s.uniformMatrix3fv(this.addr,!1,Mg),on(t,r)}}function dT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,r))return;yg.set(r),s.uniformMatrix4fv(this.addr,!1,yg),on(t,r)}}function hT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function pT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function mT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function gT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function _T(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function xT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function ST(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function yT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Id.compareFunction=t.isReversedDepthBuffer()?qd:jd,l=Id):l=R_,t.setTexture2D(e||l,o)}function MT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||P_,o)}function ET(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||L_,o)}function TT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||b_,o)}function wT(s){switch(s){case 5126:return aT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function AT(s,e){s.uniform1fv(this.addr,e)}function CT(s,e){const t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function RT(s,e){const t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function bT(s,e){const t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function PT(s,e){const t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function LT(s,e){const t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function NT(s,e){const t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function DT(s,e){s.uniform1iv(this.addr,e)}function IT(s,e){s.uniform2iv(this.addr,e)}function UT(s,e){s.uniform3iv(this.addr,e)}function FT(s,e){s.uniform4iv(this.addr,e)}function OT(s,e){s.uniform1uiv(this.addr,e)}function BT(s,e){s.uniform2uiv(this.addr,e)}function kT(s,e){s.uniform3uiv(this.addr,e)}function zT(s,e){s.uniform4uiv(this.addr,e)}function VT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Id:u=R_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function HT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||P_,l[u])}function GT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||L_,l[u])}function WT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||b_,l[u])}function XT(s){switch(s){case 5126:return AT;case 35664:return CT;case 35665:return RT;case 35666:return bT;case 35674:return PT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return DT;case 35667:case 35671:return IT;case 35668:case 35672:return UT;case 35669:case 35673:return FT;case 5125:return OT;case 36294:return BT;case 36295:return kT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class jT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}}class qT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XT(t.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const If=/(\w+)(\])?(\[|\.)?/g;function Tg(s,e){s.seq.push(e),s.map[e.id]=e}function $T(s,e,t){const r=s.name,o=r.length;for(If.lastIndex=0;;){const l=If.exec(r),u=If.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Tg(t,p===void 0?new jT(f,s,e):new qT(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new YT(f),Tg(t,g)),t=g}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);$T(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function wg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const KT=37297;let ZT=0;function QT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ag=new ut;function JT(s){Tt._getMatrix(Ag,Tt.workingColorSpace,s);const e=`mat3( ${Ag.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case sc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+QT(s.getShaderSource(e),f)}else return l}function ew(s,e){const t=JT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tw={[Qg]:"Linear",[Jg]:"Reinhard",[e_]:"Cineon",[t_]:"ACESFilmic",[i_]:"AgX",[r_]:"Neutral",[n_]:"Custom"};function nw(s,e){const t=tw[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $l=new Z;function iw(){Tt.getLuminanceCoefficients($l);const s=$l.x.toFixed(4),e=$l.y.toFixed(4),t=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function sw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function no(s){return s!==""}function Rg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(ow,cw)}const lw=new Map;function cw(s,e){let t=dt[e];if(t===void 0){const r=lw.get(e);if(r!==void 0)t=dt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(s){return s.replace(uw,fw)}function fw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Lg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const dw={[Zl]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function hw(s){return dw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pw={[cs]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[pc]:"ENVMAP_TYPE_CUBE_UV"};function mw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":pw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const gw={[ea]:"ENVMAP_MODE_REFRACTION"};function _w(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vw={[Zg]:"ENVMAP_BLENDING_MULTIPLY",[ly]:"ENVMAP_BLENDING_MIX",[cy]:"ENVMAP_BLENDING_ADD"};function xw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vw[s.combine]||"ENVMAP_BLENDING_NONE"}function Sw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function yw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=hw(t),p=mw(t),_=_w(t),g=xw(t),S=Sw(t),y=rw(t),T=sw(l),w=o.createProgram();let x,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(no).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(no).join(`
`),v.length>0&&(v+=`
`)):(x=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),v=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?dt.tonemapping_pars_fragment:"",t.toneMapping!==Li?nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),iw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),u=Ud(u),u=Rg(u,t),u=bg(u,t),f=Ud(f),f=Rg(f,t),f=bg(f,t),u=Pg(u),f=Pg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=b+x+u,L=b+v+f,D=wg(o,o.VERTEX_SHADER,P),F=wg(o,o.FRAGMENT_SHADER,L);o.attachShader(w,D),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(z){if(s.debug.checkShaderErrors){const ee=o.getProgramInfoLog(w)||"",J=o.getShaderInfoLog(D)||"",ae=o.getShaderInfoLog(F)||"",ce=ee.trim(),le=J.trim(),Y=ae.trim();let q=!0,fe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,D,F);else{const re=Cg(o,D,"vertex"),U=Cg(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ce+`
`+re+`
`+U)}else ce!==""?at("WebGLProgram: Program Info Log:",ce):(le===""||Y==="")&&(fe=!1);fe&&(z.diagnostics={runnable:q,programLog:ce,vertexShader:{log:le,prefix:x},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(D),o.deleteShader(F),X=new ic(o,w),A=aw(o,w)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,KT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=F,this}let Mw=0;class Ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Tw(e),t.set(e,r)),r}}class Tw{constructor(e){this.id=Mw++,this.code=e,this.usedTimes=0}}function ww(s,e,t,r,o,l,u){const f=new m_,h=new Ew,p=new Set,_=[],g=new Map,S=o.logarithmicDepthBuffer;let y=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function x(A,R,z,ee,J){const ae=ee.fog,ce=J.geometry,le=A.isMeshStandardMaterial?ee.environment:null,Y=(A.isMeshStandardMaterial?t:e).get(A.envMap||le),q=Y&&Y.mapping===pc?Y.image.height:null,fe=T[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=re!==void 0?re.length:0;let oe=0;ce.morphAttributes.position!==void 0&&(oe=1),ce.morphAttributes.normal!==void 0&&(oe=2),ce.morphAttributes.color!==void 0&&(oe=3);let Te,Xe,Ze,ne;if(fe){const yt=Ri[fe];Te=yt.vertexShader,Xe=yt.fragmentShader}else Te=A.vertexShader,Xe=A.fragmentShader,h.update(A),Ze=h.getVertexShaderID(A),ne=h.getFragmentShaderID(A);const de=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,mt=!!A.map,Kt=!!A.matcap,ht=!!Y,xt=!!A.aoMap,Nt=!!A.lightMap,ct=!!A.bumpMap,Ht=!!A.normalMap,k=!!A.displacementMap,Gt=!!A.emissiveMap,gt=!!A.metalnessMap,St=!!A.roughnessMap,je=A.anisotropy>0,N=A.clearcoat>0,M=A.dispersion>0,W=A.iridescence>0,he=A.sheen>0,me=A.transmission>0,ue=je&&!!A.anisotropyMap,$e=N&&!!A.clearcoatMap,we=N&&!!A.clearcoatNormalMap,ze=N&&!!A.clearcoatRoughnessMap,it=W&&!!A.iridescenceMap,Se=W&&!!A.iridescenceThicknessMap,Pe=he&&!!A.sheenColorMap,Ge=he&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Ce=!!A.specularColorMap,lt=!!A.specularIntensityMap,V=me&&!!A.transmissionMap,Ne=me&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,ve=A.alphaTest>0,pe=!!A.alphaHash,Re=!!A.extensions;let rt=Li;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(rt=s.toneMapping);const It={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:Te,fragmentShader:Xe,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ue,batchingColor:Ue&&J._colorsTexture!==null,instancing:ke,instancingColor:ke&&J.instanceColor!==null,instancingMorph:ke&&J.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:na,alphaToCoverage:!!A.alphaToCoverage,map:mt,matcap:Kt,envMap:ht,envMapMode:ht&&Y.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:Nt,bumpMap:ct,normalMap:Ht,displacementMap:k,emissiveMap:Gt,normalMapObjectSpace:Ht&&A.normalMapType===hy,normalMapTangentSpace:Ht&&A.normalMapType===dy,metalnessMap:gt,roughnessMap:St,anisotropy:je,anisotropyMap:ue,clearcoat:N,clearcoatMap:$e,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:M,iridescence:W,iridescenceMap:it,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Pe,sheenRoughnessMap:Ge,specularMap:qe,specularColorMap:Ce,specularIntensityMap:lt,transmission:me,transmissionMap:V,thicknessMap:Ne,gradientMap:Me,opaque:A.transparent===!1&&A.blending===Zs&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:pe,combine:A.combine,mapUv:mt&&w(A.map.channel),aoMapUv:xt&&w(A.aoMap.channel),lightMapUv:Nt&&w(A.lightMap.channel),bumpMapUv:ct&&w(A.bumpMap.channel),normalMapUv:Ht&&w(A.normalMap.channel),displacementMapUv:k&&w(A.displacementMap.channel),emissiveMapUv:Gt&&w(A.emissiveMap.channel),metalnessMapUv:gt&&w(A.metalnessMap.channel),roughnessMapUv:St&&w(A.roughnessMap.channel),anisotropyMapUv:ue&&w(A.anisotropyMap.channel),clearcoatMapUv:$e&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(A.sheenRoughnessMap.channel),specularMapUv:qe&&w(A.specularMap.channel),specularColorMapUv:Ce&&w(A.specularColorMap.channel),specularIntensityMapUv:lt&&w(A.specularIntensityMap.channel),transmissionMapUv:V&&w(A.transmissionMap.channel),thicknessMapUv:Ne&&w(A.thicknessMap.channel),alphaMapUv:De&&w(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ht||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ce.attributes.uv&&(mt||De),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ye,skinning:J.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:mt&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Ft,decodeVideoTextureEmissive:Gt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$i,flipSided:A.side===Gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)R.push(z),R.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(b(R,A),P(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function P(A,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),A.push(f.mask)}function L(A){const R=T[A.type];let z;if(R){const ee=Ri[R];z=Vy.clone(ee.uniforms)}else z=A.uniforms;return z}function D(A,R){let z=g.get(R);return z!==void 0?++z.usedTimes:(z=new yw(s,R,A,l),_.push(z),g.set(R,z)),z}function F(A){if(--A.usedTimes===0){const R=_.indexOf(A);_[R]=_[_.length-1],_.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){h.remove(A)}function X(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:L,acquireProgram:D,releaseProgram:F,releaseShaderCache:O,programs:_,dispose:X}}function Aw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Cw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,S,y,T,w,x){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:T,renderOrder:g.renderOrder,z:w,group:x},s[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=x),e++,v}function f(g,S,y,T,w,x){const v=u(g,S,y,T,w,x);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):t.push(v)}function h(g,S,y,T,w,x){const v=u(g,S,y,T,w,x);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function p(g,S){t.length>1&&t.sort(g||Cw),r.length>1&&r.sort(S||Ng),o.length>1&&o.sort(S||Ng)}function _(){for(let g=e,S=s.length;g<S;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:_,sort:p}}function Rw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Dg,s.set(r,[u])):o>=l.length?(u=new Dg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Rt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function Pw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Lw=0;function Nw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dw(s){const e=new bw,t=Pw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const o=new Z,l=new $t,u=new $t;function f(p){let _=0,g=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,T=0,w=0,x=0,v=0,b=0,P=0,L=0,D=0,F=0,O=0;p.sort(Nw);for(let A=0,R=p.length;A<R;A++){const z=p[A],ee=z.color,J=z.intensity,ae=z.distance;let ce=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ta?ce=z.shadow.map.texture:ce=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=ee.r*J,g+=ee.g*J,S+=ee.b*J;else if(z.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(z.sh.coefficients[le],J);O++}else if(z.isDirectionalLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,q=t.get(z);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=z.shadow.matrix,b++}r.directional[y]=le,y++}else if(z.isSpotLight){const le=e.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy(ee).multiplyScalar(J),le.distance=ae,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,r.spot[w]=le;const Y=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,Y.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[w]=Y.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.spotShadow[w]=q,r.spotShadowMap[w]=ce,L++}w++}else if(z.isRectAreaLight){const le=e.get(z);le.color.copy(ee).multiplyScalar(J),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=le,x++}else if(z.isPointLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),le.distance=z.distance,le.decay=z.decay,z.castShadow){const Y=z.shadow,q=t.get(z);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=z.shadow.matrix,P++}r.point[T]=le,T++}else if(z.isHemisphereLight){const le=e.get(z);le.skyColor.copy(z.color).multiplyScalar(J),le.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[v]=le,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const X=r.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==b||X.numPointShadows!==P||X.numSpotShadows!==L||X.numSpotMaps!==D||X.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=x,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+D-F,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,X.directionalLength=y,X.pointLength=T,X.spotLength=w,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=b,X.numPointShadows=P,X.numSpotShadows=L,X.numSpotMaps=D,X.numLightProbes=O,r.version=Lw++)}function h(p,_){let g=0,S=0,y=0,T=0,w=0;const x=_.matrixWorldInverse;for(let v=0,b=p.length;v<b;v++){const P=p[v];if(P.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),g++}else if(P.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),y++}else if(P.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),T++}else if(P.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(x),w++}}}return{setup:f,setupView:h,state:r}}function Ig(s){const e=new Dw(s),t=[],r=[];function o(_){p.camera=_,t.length=0,r.length=0}function l(_){t.push(_)}function u(_){r.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function Iw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Ig(s),e.set(o,[f])):l>=u.length?(f=new Ig(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
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
}`,Ow=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Bw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ug=new $t,Ja=new Z,Uf=new Z;function kw(s,e,t){let r=new E_;const o=new Lt,l=new Lt,u=new Qt,f=new tM,h=new nM,p={},_=t.maxTextureSize,g={[Nr]:Gn,[Gn]:Nr,[$i]:$i},S=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Uw,fragmentShader:Fw}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new Un;T.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ii(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let v=this.type;this.render=function(F,O,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;F.type===GS&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Zl);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Zi),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const J=v!==this.type;J&&O.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(ce=>ce.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,ce=F.length;ae<ce;ae++){const le=F[ae],Y=le.shadow;if(Y===void 0){at("WebGLShadowMap:",le,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const q=Y.getFrameExtents();if(o.multiply(q),l.copy(Y.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/q.x),o.x=l.x*q.x,Y.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/q.y),o.y=l.y*q.y,Y.mapSize.y=l.y)),Y.map===null||J===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===to){if(le.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ni(o.x,o.y,{format:ta,type:Ji,minFilter:An,magFilter:An,generateMipmaps:!1}),Y.map.texture.name=le.name+".shadowMap",Y.map.depthTexture=new lo(o.x,o.y,bi),Y.map.depthTexture.name=le.name+".shadowMapDepth",Y.map.depthTexture.format=er,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=vn,Y.map.depthTexture.magFilter=vn}else{le.isPointLight?(Y.map=new M_(o.x),Y.map.depthTexture=new Jy(o.x,Di)):(Y.map=new Ni(o.x,o.y),Y.map.depthTexture=new lo(o.x,o.y,Di)),Y.map.depthTexture.name=le.name+".shadowMap",Y.map.depthTexture.format=er;const re=s.state.buffers.depth.getReversed();this.type===Zl?(Y.map.depthTexture.compareFunction=re?qd:jd,Y.map.depthTexture.minFilter=An,Y.map.depthTexture.magFilter=An):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=vn,Y.map.depthTexture.magFilter=vn)}Y.camera.updateProjectionMatrix()}const fe=Y.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<fe;re++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,re),s.clear();else{re===0&&(s.setRenderTarget(Y.map),s.clear());const U=Y.getViewport(re);u.set(l.x*U.x,l.y*U.y,l.x*U.z,l.y*U.w),ee.viewport(u)}if(le.isPointLight){const U=Y.camera,oe=Y.matrix,Te=le.distance||U.far;Te!==U.far&&(U.far=Te,U.updateProjectionMatrix()),Ja.setFromMatrixPosition(le.matrixWorld),U.position.copy(Ja),Uf.copy(U.position),Uf.add(Ow[re]),U.up.copy(Bw[re]),U.lookAt(Uf),U.updateMatrixWorld(),oe.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Ug.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Ug,U.coordinateSystem,U.reversedDepth)}else Y.updateMatrices(le);r=Y.getFrustum(),L(O,X,Y.camera,le,this.type)}Y.isPointLightShadow!==!0&&this.type===to&&b(Y,X),Y.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(A,R,z)};function b(F,O){const X=e.update(w);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ni(o.x,o.y,{format:ta,type:Ji})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,X,S,w,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,X,y,w,null)}function P(F,O,X,A){let R=null;const z=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ee=R.uuid,J=O.uuid;let ae=p[ee];ae===void 0&&(ae={},p[ee]=ae);let ce=ae[J];ce===void 0&&(ce=R.clone(),ae[J]=ce,O.addEventListener("dispose",D)),R=ce}if(R.visible=O.visible,R.wireframe=O.wireframe,A===to?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=s.properties.get(R);ee.light=X}return R}function L(F,O,X,A,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===to)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const J=e.update(F),ae=F.material;if(Array.isArray(ae)){const ce=J.groups;for(let le=0,Y=ce.length;le<Y;le++){const q=ce[le],fe=ae[q.materialIndex];if(fe&&fe.visible){const re=P(F,fe,A,R);F.onBeforeShadow(s,F,O,X,J,re,q),s.renderBufferDirect(X,null,J,re,F,q),F.onAfterShadow(s,F,O,X,J,re,q)}}}else if(ae.visible){const ce=P(F,ae,A,R);F.onBeforeShadow(s,F,O,X,J,ce,null),s.renderBufferDirect(X,null,J,ce,F,null),F.onAfterShadow(s,F,O,X,J,ce,null)}}const ee=F.children;for(let J=0,ae=ee.length;J<ae;J++)L(ee[J],O,X,A,R)}function D(F){F.target.removeEventListener("dispose",D);for(const X in p){const A=p[X],R=F.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const zw={[Gf]:Wf,[Xf]:Yf,[jf]:$f,[Js]:qf,[Wf]:Gf,[Yf]:Xf,[$f]:jf,[qf]:Js};function Vw(s,e){function t(){let V=!1;const Ne=new Qt;let Me=null;const De=new Qt(0,0,0,0);return{setMask:function(ve){Me!==ve&&!V&&(s.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){V=ve},setClear:function(ve,pe,Re,rt,It){It===!0&&(ve*=rt,pe*=rt,Re*=rt),Ne.set(ve,pe,Re,rt),De.equals(Ne)===!1&&(s.clearColor(ve,pe,Re,rt),De.copy(Ne))},reset:function(){V=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let V=!1,Ne=!1,Me=null,De=null,ve=null;return{setReversed:function(pe){if(Ne!==pe){const Re=e.get("EXT_clip_control");pe?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=pe;const rt=ve;ve=null,this.setClear(rt)}},getReversed:function(){return Ne},setTest:function(pe){pe?de(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!V&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Ne&&(pe=zw[pe]),De!==pe){switch(pe){case Gf:s.depthFunc(s.NEVER);break;case Wf:s.depthFunc(s.ALWAYS);break;case Xf:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case jf:s.depthFunc(s.EQUAL);break;case qf:s.depthFunc(s.GEQUAL);break;case Yf:s.depthFunc(s.GREATER);break;case $f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=pe}},setLocked:function(pe){V=pe},setClear:function(pe){ve!==pe&&(Ne&&(pe=1-pe),s.clearDepth(pe),ve=pe)},reset:function(){V=!1,Me=null,De=null,ve=null,Ne=!1}}}function o(){let V=!1,Ne=null,Me=null,De=null,ve=null,pe=null,Re=null,rt=null,It=null;return{setTest:function(yt){V||(yt?de(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(yt){Ne!==yt&&!V&&(s.stencilMask(yt),Ne=yt)},setFunc:function(yt,Wn,Rn){(Me!==yt||De!==Wn||ve!==Rn)&&(s.stencilFunc(yt,Wn,Rn),Me=yt,De=Wn,ve=Rn)},setOp:function(yt,Wn,Rn){(pe!==yt||Re!==Wn||rt!==Rn)&&(s.stencilOp(yt,Wn,Rn),pe=yt,Re=Wn,rt=Rn)},setLocked:function(yt){V=yt},setClear:function(yt){It!==yt&&(s.clearStencil(yt),It=yt)},reset:function(){V=!1,Ne=null,Me=null,De=null,ve=null,pe=null,Re=null,rt=null,It=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],T=null,w=!1,x=null,v=null,b=null,P=null,L=null,D=null,F=null,O=new Rt(0,0,0),X=0,A=!1,R=null,z=null,ee=null,J=null,ae=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Y=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),le=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),le=Y>=2);let fe=null,re={};const U=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Te=new Qt().fromArray(U),Xe=new Qt().fromArray(oe);function Ze(V,Ne,Me,De){const ve=new Uint8Array(4),pe=s.createTexture();s.bindTexture(V,pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Me;Re++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Ne+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return pe}const ne={};ne[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(Js),ct(!1),Ht(Im),de(s.CULL_FACE),xt(Zi);function de(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function ye(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function ke(V,Ne){return g[V]!==Ne?(s.bindFramebuffer(V,Ne),g[V]=Ne,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ue(V,Ne){let Me=y,De=!1;if(V){Me=S.get(Ne),Me===void 0&&(Me=[],S.set(Ne,Me));const ve=V.textures;if(Me.length!==ve.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Re=ve.length;pe<Re;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=ve.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function mt(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const Kt={[ss]:s.FUNC_ADD,[XS]:s.FUNC_SUBTRACT,[jS]:s.FUNC_REVERSE_SUBTRACT};Kt[qS]=s.MIN,Kt[YS]=s.MAX;const ht={[$S]:s.ZERO,[KS]:s.ONE,[ZS]:s.SRC_COLOR,[Vf]:s.SRC_ALPHA,[iy]:s.SRC_ALPHA_SATURATE,[ty]:s.DST_COLOR,[JS]:s.DST_ALPHA,[QS]:s.ONE_MINUS_SRC_COLOR,[Hf]:s.ONE_MINUS_SRC_ALPHA,[ny]:s.ONE_MINUS_DST_COLOR,[ey]:s.ONE_MINUS_DST_ALPHA,[ry]:s.CONSTANT_COLOR,[sy]:s.ONE_MINUS_CONSTANT_COLOR,[ay]:s.CONSTANT_ALPHA,[oy]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(V,Ne,Me,De,ve,pe,Re,rt,It,yt){if(V===Zi){w===!0&&(ye(s.BLEND),w=!1);return}if(w===!1&&(de(s.BLEND),w=!0),V!==WS){if(V!==x||yt!==A){if((v!==ss||L!==ss)&&(s.blendEquation(s.FUNC_ADD),v=ss,L=ss),yt)switch(V){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Um:s.blendFunc(s.ONE,s.ONE);break;case Fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Om:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Um:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}b=null,P=null,D=null,F=null,O.set(0,0,0),X=0,x=V,A=yt}return}ve=ve||Ne,pe=pe||Me,Re=Re||De,(Ne!==v||ve!==L)&&(s.blendEquationSeparate(Kt[Ne],Kt[ve]),v=Ne,L=ve),(Me!==b||De!==P||pe!==D||Re!==F)&&(s.blendFuncSeparate(ht[Me],ht[De],ht[pe],ht[Re]),b=Me,P=De,D=pe,F=Re),(rt.equals(O)===!1||It!==X)&&(s.blendColor(rt.r,rt.g,rt.b,It),O.copy(rt),X=It),x=V,A=!1}function Nt(V,Ne){V.side===$i?ye(s.CULL_FACE):de(s.CULL_FACE);let Me=V.side===Gn;Ne&&(Me=!Me),ct(Me),V.blending===Zs&&V.transparent===!1?xt(Zi):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const De=V.stencilWrite;f.setTest(De),De&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function Ht(V){V!==VS?(de(s.CULL_FACE),V!==z&&(V===Im?s.cullFace(s.BACK):V===HS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),z=V}function k(V){V!==ee&&(le&&s.lineWidth(V),ee=V)}function Gt(V,Ne,Me){V?(de(s.POLYGON_OFFSET_FILL),(J!==Ne||ae!==Me)&&(s.polygonOffset(Ne,Me),J=Ne,ae=Me)):ye(s.POLYGON_OFFSET_FILL)}function gt(V){V?de(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function St(V){V===void 0&&(V=s.TEXTURE0+ce-1),fe!==V&&(s.activeTexture(V),fe=V)}function je(V,Ne,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ce-1:Me=fe);let De=re[Me];De===void 0&&(De={type:void 0,texture:void 0},re[Me]=De),(De.type!==V||De.texture!==Ne)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(V,Ne||ne[V]),De.type=V,De.texture=Ne)}function N(){const V=re[fe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function he(){try{s.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function me(){try{s.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function we(){try{s.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ze(){try{s.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function it(){try{s.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Se(){try{s.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Pe(V){Te.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Te.copy(V))}function Ge(V){Xe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Xe.copy(V))}function qe(V,Ne){let Me=p.get(Ne);Me===void 0&&(Me=new WeakMap,p.set(Ne,Me));let De=Me.get(V);De===void 0&&(De=s.getUniformBlockIndex(Ne,V.name),Me.set(V,De))}function Ce(V,Ne){const De=p.get(Ne).get(V);h.get(Ne)!==De&&(s.uniformBlockBinding(Ne,De,V.__bindingPointIndex),h.set(Ne,De))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},fe=null,re={},g={},S=new WeakMap,y=[],T=null,w=!1,x=null,v=null,b=null,P=null,L=null,D=null,F=null,O=new Rt(0,0,0),X=0,A=!1,R=null,z=null,ee=null,J=null,ae=null,Te.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:ye,bindFramebuffer:ke,drawBuffers:Ue,useProgram:mt,setBlending:xt,setMaterial:Nt,setFlipSided:ct,setCullFace:Ht,setLineWidth:k,setPolygonOffset:Gt,setScissorTest:gt,activeTexture:St,bindTexture:je,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:it,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:ze,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:$e,scissor:Pe,viewport:Ge,reset:lt}}function Hw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,M){return y?new OffscreenCanvas(N,M):oc("canvas")}function w(N,M,W){let he=1;const me=je(N);if((me.width>W||me.height>W)&&(he=W/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(he*me.width),$e=Math.floor(he*me.height);g===void 0&&(g=T(ue,$e));const we=M?T(ue,$e):g;return we.width=ue,we.height=$e,we.getContext("2d").drawImage(N,0,0,ue,$e),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+$e+")."),we}else return"data"in N&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function x(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,M,W,he,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=M;if(M===s.RED&&(W===s.FLOAT&&(ue=s.R32F),W===s.HALF_FLOAT&&(ue=s.R16F),W===s.UNSIGNED_BYTE&&(ue=s.R8)),M===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.R8UI),W===s.UNSIGNED_SHORT&&(ue=s.R16UI),W===s.UNSIGNED_INT&&(ue=s.R32UI),W===s.BYTE&&(ue=s.R8I),W===s.SHORT&&(ue=s.R16I),W===s.INT&&(ue=s.R32I)),M===s.RG&&(W===s.FLOAT&&(ue=s.RG32F),W===s.HALF_FLOAT&&(ue=s.RG16F),W===s.UNSIGNED_BYTE&&(ue=s.RG8)),M===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RG8UI),W===s.UNSIGNED_SHORT&&(ue=s.RG16UI),W===s.UNSIGNED_INT&&(ue=s.RG32UI),W===s.BYTE&&(ue=s.RG8I),W===s.SHORT&&(ue=s.RG16I),W===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),W===s.UNSIGNED_INT&&(ue=s.RGB32UI),W===s.BYTE&&(ue=s.RGB8I),W===s.SHORT&&(ue=s.RGB16I),W===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),W===s.UNSIGNED_INT&&(ue=s.RGBA32UI),W===s.BYTE&&(ue=s.RGBA8I),W===s.SHORT&&(ue=s.RGBA16I),W===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const $e=me?sc:Tt.getTransfer(he);W===s.FLOAT&&(ue=s.RGBA32F),W===s.HALF_FLOAT&&(ue=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ue=$e===Ft?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(N,M){let W;return N?M===null||M===Di||M===ao?W=s.DEPTH24_STENCIL8:M===bi?W=s.DEPTH32F_STENCIL8:M===so&&(W=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===ao?W=s.DEPTH_COMPONENT24:M===bi?W=s.DEPTH_COMPONENT32F:M===so&&(W=s.DEPTH_COMPONENT16),W}function D(N,M){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==vn&&N.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function F(N){const M=N.target;M.removeEventListener("dispose",F),X(M),M.isVideoTexture&&_.delete(M)}function O(N){const M=N.target;M.removeEventListener("dispose",O),R(M)}function X(N){const M=r.get(N);if(M.__webglInit===void 0)return;const W=N.source,he=S.get(W);if(he){const me=he[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(N),Object.keys(he).length===0&&S.delete(W)}r.remove(N)}function A(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const W=N.source,he=S.get(W);delete he[M.__cacheKey],u.memory.textures--}function R(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let me=0;me<M.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[he][me]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=N.textures;for(let he=0,me=W.length;he<me;he++){const ue=r.get(W[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(W[he])}r.remove(N)}let z=0;function ee(){z=0}function J(){const N=z;return N>=o.maxTextures&&at("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),z+=1,N}function ae(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function ce(N,M){const W=r.get(N);if(N.isVideoTexture&&gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const he=N.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,N,M);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+M)}function le(N,M){const W=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ne(W,N,M);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+M)}function Y(N,M){const W=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ne(W,N,M);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+M)}function q(N,M){const W=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){de(W,N,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+M)}const fe={[Qf]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Jf]:s.MIRRORED_REPEAT},re={[vn]:s.NEAREST,[uy]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[nf]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},U={[py]:s.NEVER,[xy]:s.ALWAYS,[my]:s.LESS,[jd]:s.LEQUAL,[gy]:s.EQUAL,[qd]:s.GEQUAL,[_y]:s.GREATER,[vy]:s.NOTEQUAL};function oe(N,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===nf||M.magFilter===wl||M.magFilter===os||M.minFilter===An||M.minFilter===nf||M.minFilter===wl||M.minFilter===os)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,fe[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,fe[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,fe[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==wl&&M.minFilter!==os||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Te(N,M){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",F));const he=M.source;let me=S.get(he);me===void 0&&(me={},S.set(he,me));const ue=ae(M);if(ue!==N.__cacheKey){me[ue]===void 0&&(me[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,W=!0),me[ue].usedTimes++;const $e=me[N.__cacheKey];$e!==void 0&&(me[N.__cacheKey].usedTimes--,$e.usedTimes===0&&A(M)),N.__cacheKey=ue,N.__webglTexture=me[ue].texture}return W}function Xe(N,M,W){return Math.floor(Math.floor(N/W)/M)}function Ze(N,M,W,he){const ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,W,he,M.data);else{ue.sort((Se,Pe)=>Se.start-Pe.start);let $e=0;for(let Se=1;Se<ue.length;Se++){const Pe=ue[$e],Ge=ue[Se],qe=Pe.start+Pe.count,Ce=Xe(Ge.start,M.width,4),lt=Xe(Pe.start,M.width,4);Ge.start<=qe+1&&Ce===lt&&Xe(Ge.start+Ge.count-1,M.width,4)===Ce?Pe.count=Math.max(Pe.count,Ge.start+Ge.count-Pe.start):(++$e,ue[$e]=Ge)}ue.length=$e+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Pe=ue.length;Se<Pe;Se++){const Ge=ue[Se],qe=Math.floor(Ge.start/4),Ce=Math.ceil(Ge.count/4),lt=qe%M.width,V=Math.floor(qe/M.width),Ne=Ce,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,lt,V,Ne,Me,W,he,M.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function ne(N,M,W){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const me=Te(N,M),ue=M.source;t.bindTexture(he,N.__webglTexture,s.TEXTURE0+W);const $e=r.get(ue);if(ue.version!==$e.__version||me===!0){t.activeTexture(s.TEXTURE0+W);const we=Tt.getPrimaries(Tt.workingColorSpace),ze=M.colorSpace===Rr?null:Tt.getPrimaries(M.colorSpace),it=M.colorSpace===Rr||we===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Se=w(M.image,!1,o.maxTextureSize);Se=St(M,Se);const Pe=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let qe=P(M.internalFormat,Pe,Ge,M.colorSpace,M.isVideoTexture);oe(he,M);let Ce;const lt=M.mipmaps,V=M.isVideoTexture!==!0,Ne=$e.__version===void 0||me===!0,Me=ue.dataReady,De=D(M,Se);if(M.isDepthTexture)qe=L(M.format===ls,M.type),Ne&&(V?t.texStorage2D(s.TEXTURE_2D,1,qe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Pe,Ge,null));else if(M.isDataTexture)if(lt.length>0){V&&Ne&&t.texStorage2D(s.TEXTURE_2D,De,qe,lt[0].width,lt[0].height);for(let ve=0,pe=lt.length;ve<pe;ve++)Ce=lt[ve],V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,Ge,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Pe,Ge,Ce.data);M.generateMipmaps=!1}else V?(Ne&&t.texStorage2D(s.TEXTURE_2D,De,qe,Se.width,Se.height),Me&&Ze(M,Se,Pe,Ge)):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Pe,Ge,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,qe,lt[0].width,lt[0].height,Se.depth);for(let ve=0,pe=lt.length;ve<pe;ve++)if(Ce=lt[ve],M.format!==Si)if(Pe!==null)if(V){if(Me)if(M.layerUpdates.size>0){const Re=dg(Ce.width,Ce.height,M.format,M.type);for(const rt of M.layerUpdates){const It=Ce.data.subarray(rt*Re/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Re/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,rt,Ce.width,Ce.height,1,Pe,It)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Se.depth,Pe,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,Se.depth,Pe,Ge,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,qe,Ce.width,Ce.height,Se.depth,0,Pe,Ge,Ce.data)}else{V&&Ne&&t.texStorage2D(s.TEXTURE_2D,De,qe,lt[0].width,lt[0].height);for(let ve=0,pe=lt.length;ve<pe;ve++)Ce=lt[ve],M.format!==Si?Pe!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Ce.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,Ge,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,qe,Ce.width,Ce.height,0,Pe,Ge,Ce.data)}else if(M.isDataArrayTexture)if(V){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,qe,Se.width,Se.height,Se.depth),Me)if(M.layerUpdates.size>0){const ve=dg(Se.width,Se.height,M.format,M.type);for(const pe of M.layerUpdates){const Re=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Pe,Ge,Re)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Pe,Ge,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,Pe,Ge,Se.data);else if(M.isData3DTexture)V?(Ne&&t.texStorage3D(s.TEXTURE_3D,De,qe,Se.width,Se.height,Se.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Pe,Ge,Se.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,Pe,Ge,Se.data);else if(M.isFramebufferTexture){if(Ne)if(V)t.texStorage2D(s.TEXTURE_2D,De,qe,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Re=0;Re<De;Re++)t.texImage2D(s.TEXTURE_2D,Re,qe,ve,pe,0,Pe,Ge,null),ve>>=1,pe>>=1}}else if(lt.length>0){if(V&&Ne){const ve=je(lt[0]);t.texStorage2D(s.TEXTURE_2D,De,qe,ve.width,ve.height)}for(let ve=0,pe=lt.length;ve<pe;ve++)Ce=lt[ve],V?Me&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Pe,Ge,Ce):t.texImage2D(s.TEXTURE_2D,ve,qe,Pe,Ge,Ce);M.generateMipmaps=!1}else if(V){if(Ne){const ve=je(Se);t.texStorage2D(s.TEXTURE_2D,De,qe,ve.width,ve.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ge,Se)}else t.texImage2D(s.TEXTURE_2D,0,qe,Pe,Ge,Se);x(M)&&v(he),$e.__version=ue.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function de(N,M,W){if(M.image.length!==6)return;const he=Te(N,M),me=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+W);const ue=r.get(me);if(me.version!==ue.__version||he===!0){t.activeTexture(s.TEXTURE0+W);const $e=Tt.getPrimaries(Tt.workingColorSpace),we=M.colorSpace===Rr?null:Tt.getPrimaries(M.colorSpace),ze=M.colorSpace===Rr||$e===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let pe=0;pe<6;pe++)!it&&!Se?Pe[pe]=w(M.image[pe],!0,o.maxCubemapSize):Pe[pe]=Se?M.image[pe].image:M.image[pe],Pe[pe]=St(M,Pe[pe]);const Ge=Pe[0],qe=l.convert(M.format,M.colorSpace),Ce=l.convert(M.type),lt=P(M.internalFormat,qe,Ce,M.colorSpace),V=M.isVideoTexture!==!0,Ne=ue.__version===void 0||he===!0,Me=me.dataReady;let De=D(M,Ge);oe(s.TEXTURE_CUBE_MAP,M);let ve;if(it){V&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){ve=Pe[pe].mipmaps;for(let Re=0;Re<ve.length;Re++){const rt=ve[Re];M.format!==Si?qe!==null?V?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,rt.width,rt.height,qe,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,lt,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,rt.width,rt.height,qe,Ce,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,lt,rt.width,rt.height,0,qe,Ce,rt.data)}}}else{if(ve=M.mipmaps,V&&Ne){ve.length>0&&De++;const pe=je(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Pe[pe].width,Pe[pe].height,qe,Ce,Pe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Pe[pe].width,Pe[pe].height,0,qe,Ce,Pe[pe].data);for(let Re=0;Re<ve.length;Re++){const It=ve[Re].image[pe].image;V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,It.width,It.height,qe,Ce,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,lt,It.width,It.height,0,qe,Ce,It.data)}}else{V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,qe,Ce,Pe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,qe,Ce,Pe[pe]);for(let Re=0;Re<ve.length;Re++){const rt=ve[Re];V?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,qe,Ce,rt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,lt,qe,Ce,rt.image[pe])}}}x(M)&&v(s.TEXTURE_CUBE_MAP),ue.__version=me.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ye(N,M,W,he,me,ue){const $e=l.convert(W.format,W.colorSpace),we=l.convert(W.type),ze=P(W.internalFormat,$e,we,W.colorSpace),it=r.get(M),Se=r.get(W);if(Se.__renderTarget=M,!it.__hasExternalTextures){const Pe=Math.max(1,M.width>>ue),Ge=Math.max(1,M.height>>ue);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,ue,ze,Pe,Ge,M.depth,0,$e,we,null):t.texImage2D(me,ue,ze,Pe,Ge,0,$e,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,me,Se.__webglTexture,0,k(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,me,Se.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(N,M,W){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const he=M.depthTexture,me=he&&he.isDepthTexture?he.type:null,ue=L(M.stencilBuffer,me),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),ue,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,N)}else{const he=M.textures;for(let me=0;me<he.length;me++){const ue=he[me],$e=l.convert(ue.format,ue.colorSpace),we=l.convert(ue.type),ze=P(ue.internalFormat,$e,we,ue.colorSpace);Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(M),ze,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(M),ze,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ze,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(N,M,W){const he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),oe(s.TEXTURE_CUBE_MAP,M.depthTexture);const it=l.convert(M.depthTexture.format),Se=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===er?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===ls&&(Pe=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Pe,M.width,M.height,0,it,Se,null)}}else ce(M.depthTexture,0);const ue=me.__webglTexture,$e=k(M),we=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,ze=M.depthTexture.format===ls?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,we,ue,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,we,ue,0);else if(M.depthTexture.format===ls)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,we,ue,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,we,ue,0);else throw new Error("Unknown depthTexture format")}function mt(N){const M=r.get(N),W=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=he}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ue(M.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?Ue(M.__webglFramebuffer[0],N,0):Ue(M.__webglFramebuffer,N,0)}else if(W){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),ke(M.__webglDepthbuffer[he],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ke(M.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(N,M,W){const he=r.get(N);M!==void 0&&ye(he.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&mt(N)}function ht(N){const M=N.texture,W=r.get(N),he=r.get(M);N.addEventListener("dispose",O);const me=N.textures,ue=N.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,u.memory.textures++),ue){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let ze=0;ze<M.mipmaps.length;ze++)W.__webglFramebuffer[we][ze]=s.createFramebuffer()}else W.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)W.__webglFramebuffer[we]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if($e)for(let we=0,ze=me.length;we<ze;we++){const it=r.get(me[we]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Gt(N)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const ze=me[we];W.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const it=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),Pe=P(ze.internalFormat,it,Se,ze.colorSpace,N.isXRRenderTarget===!0),Ge=k(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Pe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,W.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),oe(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)ye(W.__webglFramebuffer[we][ze],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else ye(W.__webglFramebuffer[we],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let we=0,ze=me.length;we<ze;we++){const it=me[we],Se=r.get(it);let Pe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Se.__webglTexture),oe(Pe,it),ye(W.__webglFramebuffer,N,it,s.COLOR_ATTACHMENT0+we,Pe,0),x(it)&&v(Pe)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),oe(we,M),M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)ye(W.__webglFramebuffer[ze],N,M,s.COLOR_ATTACHMENT0,we,ze);else ye(W.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,we,0);x(M)&&v(we),t.unbindTexture()}N.depthBuffer&&mt(N)}function xt(N){const M=N.textures;for(let W=0,he=M.length;W<he;W++){const me=M[W];if(x(me)){const ue=b(N),$e=r.get(me).__webglTexture;t.bindTexture(ue,$e),v(ue),t.unbindTexture()}}}const Nt=[],ct=[];function Ht(N){if(N.samples>0){if(Gt(N)===!1){const M=N.textures,W=N.width,he=N.height;let me=s.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(N),we=M.length>1;if(we)for(let it=0;it<M.length;it++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=N.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let it=0;it<M.length;it++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Se=r.get(M[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,W,he,0,0,W,he,me,s.NEAREST),h===!0&&(Nt.length=0,ct.length=0,Nt.push(s.COLOR_ATTACHMENT0+it),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(ue),ct.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let it=0;it<M.length;it++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Se=r.get(M[it]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function k(N){return Math.min(o.maxSamples,N.samples)}function Gt(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(N){const M=u.render.frame;_.get(N)!==M&&(_.set(N,M),N.update())}function St(N,M){const W=N.colorSpace,he=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==na&&W!==Rr&&(Tt.getTransfer(W)===Ft?(he!==Si||me!==oi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",W)),M}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ee,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Kt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gw(s,e){function t(r,o=Rr){let l;const u=Tt.getTransfer(o);if(r===oi)return s.UNSIGNED_BYTE;if(r===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===l_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===c_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===a_)return s.BYTE;if(r===o_)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===zd)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===Ji)return s.HALF_FLOAT;if(r===u_)return s.ALPHA;if(r===f_)return s.RGB;if(r===Si)return s.RGBA;if(r===er)return s.DEPTH_COMPONENT;if(r===ls)return s.DEPTH_STENCIL;if(r===d_)return s.RED;if(r===Gd)return s.RED_INTEGER;if(r===ta)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===Xd)return s.RGBA_INTEGER;if(r===Ql||r===Jl||r===ec||r===tc)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===td||r===nd||r===id)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ed)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===td)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===id)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===ad||r===od||r===ld||r===cd||r===ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===rd||r===sd)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ad)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===od)return l.COMPRESSED_R11_EAC;if(r===ld)return l.COMPRESSED_SIGNED_R11_EAC;if(r===cd)return l.COMPRESSED_RG11_EAC;if(r===ud)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fd||r===dd||r===hd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===Td)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===fd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===md)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Md)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Td)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wd||r===Ad||r===Cd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wd)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ad)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rd||r===bd||r===Pd||r===Ld)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Rd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ao?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
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

}`;class jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new w_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ui({vertexShader:Ww,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qw extends ra{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,g=null,S=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",x=new jw,v={},b=t.getContextAttributes();let P=null,L=null;const D=[],F=[],O=new Lt;let X=null;const A=new ai;A.viewport=new Qt;const R=new ai;R.viewport=new Qt;const z=[A,R],ee=new iM;let J=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=D[ne];return de===void 0&&(de=new Af,D[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=D[ne];return de===void 0&&(de=new Af,D[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=D[ne];return de===void 0&&(de=new Af,D[ne]=de),de.getHandSpace()};function ce(ne){const de=F.indexOf(ne.inputSource);if(de===-1)return;const ye=D[de];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,p||u),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function le(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",Y);for(let ne=0;ne<D.length;ne++){const de=F[ne];de!==null&&(F[ne]=null,D[ne].disconnect(de))}J=null,ae=null,x.reset();for(const ne in v)delete v[ne];e.setRenderTarget(P),y=null,S=null,g=null,o=null,L=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",le),o.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Ue=null;b.depth&&(Ue=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?ls:er,ke=b.stencil?ao:Di);const mt={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};g=this.getBinding(),S=g.createProjectionLayer(mt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Ni(S.textureWidth,S.textureHeight,{format:Si,type:oi,depthTexture:new lo(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ni(y.framebufferWidth,y.framebufferHeight,{format:Si,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(ne){for(let de=0;de<ne.removed.length;de++){const ye=ne.removed[de],ke=F.indexOf(ye);ke>=0&&(F[ke]=null,D[ke].disconnect(ye))}for(let de=0;de<ne.added.length;de++){const ye=ne.added[de];let ke=F.indexOf(ye);if(ke===-1){for(let mt=0;mt<D.length;mt++)if(mt>=F.length){F.push(ye),ke=mt;break}else if(F[mt]===null){F[mt]=ye,ke=mt;break}if(ke===-1)break}const Ue=D[ke];Ue&&Ue.connect(ye)}}const q=new Z,fe=new Z;function re(ne,de,ye){q.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ke=q.distanceTo(fe),Ue=de.projectionMatrix.elements,mt=ye.projectionMatrix.elements,Kt=Ue[14]/(Ue[10]-1),ht=Ue[14]/(Ue[10]+1),xt=(Ue[9]+1)/Ue[5],Nt=(Ue[9]-1)/Ue[5],ct=(Ue[8]-1)/Ue[0],Ht=(mt[8]+1)/mt[0],k=Kt*ct,Gt=Kt*Ht,gt=ke/(-ct+Ht),St=gt*-ct;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(St),ne.translateZ(gt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ue[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=Kt+gt,N=ht+gt,M=k-St,W=Gt+(ke-St),he=xt*ht/N*je,me=Nt*ht/N*je;ne.projectionMatrix.makePerspective(M,W,he,me,je,N),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let de=ne.near,ye=ne.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),ee.near=R.near=A.near=de,ee.far=R.far=A.far=ye,(J!==ee.near||ae!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),J=ee.near,ae=ee.far),ee.layers.mask=ne.layers.mask|6,A.layers.mask=ee.layers.mask&3,R.layers.mask=ee.layers.mask&5;const ke=ne.parent,Ue=ee.cameras;U(ee,ke);for(let mt=0;mt<Ue.length;mt++)U(Ue[mt],ke);Ue.length===2?re(ee,A,R):ee.projectionMatrix.copy(A.projectionMatrix),oe(ne,ee,ke)};function oe(ne,de,ye){ye===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Nd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(S===null&&y===null))return h},this.setFoveation=function(ne){h=ne,S!==null&&(S.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(ne){return v[ne]};let Te=null;function Xe(ne,de){if(_=de.getViewerPose(p||u),T=de,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let ke=!1;ye.length!==ee.cameras.length&&(ee.cameras.length=0,ke=!0);for(let ht=0;ht<ye.length;ht++){const xt=ye[ht];let Nt=null;if(y!==null)Nt=y.getViewport(xt);else{const Ht=g.getViewSubImage(S,xt);Nt=Ht.viewport,ht===0&&(e.setRenderTargetTextures(L,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(L))}let ct=z[ht];ct===void 0&&(ct=new ai,ct.layers.enable(ht),ct.viewport=new Qt,z[ht]=ct),ct.matrix.fromArray(xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ht===0&&(ee.matrix.copy(ct.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),ke===!0&&ee.cameras.push(ct)}const Ue=o.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const ht=g.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,o.renderState)}if(Ue&&Ue.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let ht=0;ht<ye.length;ht++){const xt=ye[ht].camera;if(xt){let Nt=v[xt];Nt||(Nt=new w_,v[xt]=Nt);const ct=g.getCameraImage(xt);Nt.sourceTexture=ct}}}}for(let ye=0;ye<D.length;ye++){const ke=F[ye],Ue=D[ye];ke!==null&&Ue!==void 0&&Ue.update(ke,de,p||u)}Te&&Te(ne,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ze=new C_;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(ne){Te=ne},this.dispose=function(){}}}const is=new tr,Yw=new $t;function $w(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,x_(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,b,P,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),S(x,v),v.isMeshPhysicalMaterial&&y(x,v,L)):v.isMeshMatcapMaterial?(l(x,v),T(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?h(x,v,b,P):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const b=e.get(v),P=b.envMap,L=b.envMapRotation;P&&(x.envMap.value=P,is.copy(L),is.x*=-1,is.y*=-1,is.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),x.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(is)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,b,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*b,x.scale.value=P*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,b){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const b=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Kw(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,P){const L=P.program;r.uniformBlockBinding(b,L)}function p(b,P){let L=o[b.id];L===void 0&&(T(b),L=_(b),o[b.id]=L,b.addEventListener("dispose",x));const D=P.program;r.updateUBOMapping(b,D);const F=e.render.frame;l[b.id]!==F&&(S(b),l[b.id]=F)}function _(b){const P=g();b.__bindingPointIndex=P;const L=s.createBuffer(),D=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,D,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function g(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(b){const P=o[b.id],L=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,O=L.length;F<O;F++){const X=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,R=X.length;A<R;A++){const z=X[A];if(y(z,F,A,D)===!0){const ee=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let ce=0;ce<J.length;ce++){const le=J[ce],Y=w(le);typeof le=="number"||typeof le=="boolean"?(z.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,ee+ae,z.__data)):le.isMatrix3?(z.__data[0]=le.elements[0],z.__data[1]=le.elements[1],z.__data[2]=le.elements[2],z.__data[3]=0,z.__data[4]=le.elements[3],z.__data[5]=le.elements[4],z.__data[6]=le.elements[5],z.__data[7]=0,z.__data[8]=le.elements[6],z.__data[9]=le.elements[7],z.__data[10]=le.elements[8],z.__data[11]=0):(le.toArray(z.__data,ae),ae+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,P,L,D){const F=b.value,O=P+"_"+L;if(D[O]===void 0)return typeof F=="number"||typeof F=="boolean"?D[O]=F:D[O]=F.clone(),!0;{const X=D[O];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return D[O]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(b){const P=b.uniforms;let L=0;const D=16;for(let O=0,X=P.length;O<X;O++){const A=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,z=A.length;R<z;R++){const ee=A[R],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let ae=0,ce=J.length;ae<ce;ae++){const le=J[ae],Y=w(le),q=L%D,fe=q%Y.boundary,re=q+fe;L+=fe,re!==0&&D-re<Y.storage&&(L+=D-re),ee.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=L,L+=Y.storage}}}const F=L%D;return F>0&&(L+=D-F),b.__size=L,b.__cache={},this}function w(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",b),P}function x(b){const P=b.target;P.removeEventListener("dispose",x);const L=u.indexOf(P.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function v(){for(const b in o)s.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:h,update:p,dispose:v}}const Zw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function Qw(){return Ci===null&&(Ci=new qy(Zw,16,16,ta,Ji),Ci.name="DFG_LUT",Ci.minFilter=An,Ci.magFilter=An,Ci.wrapS=Ki,Ci.wrapT=Ki,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class Jw{constructor(e={}){const{canvas:t=Sy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:y=oi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const w=y,x=new Set([Xd,Wd,Gd]),v=new Set([oi,Di,so,ao,Vd,Hd]),b=new Uint32Array(4),P=new Int32Array(4);let L=null,D=null;const F=[],O=[];let X=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=si;let z=0,ee=0,J=null,ae=-1,ce=null;const le=new Qt,Y=new Qt;let q=null;const fe=new Rt(0);let re=0,U=t.width,oe=t.height,Te=1,Xe=null,Ze=null;const ne=new Qt(0,0,U,oe),de=new Qt(0,0,U,oe);let ye=!1;const ke=new E_;let Ue=!1,mt=!1;const Kt=new $t,ht=new Z,xt=new Qt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ht(){return J===null?Te:1}let k=r;function Gt(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",yt,!1),k===null){const j="webgl2";if(k=Gt(j,C),k===null)throw Gt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let gt,St,je,N,M,W,he,me,ue,$e,we,ze,it,Se,Pe,Ge,qe,Ce,lt,V,Ne,Me,De,ve;function pe(){gt=new Q1(k),gt.init(),Me=new Gw(k,gt),St=new G1(k,gt,e,Me),je=new Vw(k,gt),St.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),N=new tT(k),M=new Aw,W=new Hw(k,gt,je,M,St,Me,N),he=new X1(A),me=new Z1(A),ue=new sM(k),De=new V1(k,ue),$e=new J1(k,ue,N,De),we=new iT(k,$e,ue,N),lt=new nT(k,St,W),Ge=new W1(M),ze=new ww(A,he,me,gt,St,De,Ge),it=new $w(A,M),Se=new Rw,Pe=new Iw(gt),Ce=new z1(A,he,me,je,we,T,h),qe=new kw(A,we,St),ve=new Kw(k,N,St,je),V=new H1(k,gt,N),Ne=new eT(k,gt,N),N.programs=ze.programs,A.capabilities=St,A.extensions=gt,A.properties=M,A.renderLists=Se,A.shadowMap=qe,A.state=je,A.info=N}pe(),w!==oi&&(X=new sT(w,t.width,t.height,o,l));const Re=new qw(A,k);this.xr=Re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(C){C!==void 0&&(Te=C,this.setSize(U,oe,!1))},this.getSize=function(C){return C.set(U,oe)},this.setSize=function(C,j,se=!0){if(Re.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,oe=j,t.width=Math.floor(C*Te),t.height=Math.floor(j*Te),se===!0&&(t.style.width=C+"px",t.style.height=j+"px"),X!==null&&X.setSize(t.width,t.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(U*Te,oe*Te).floor()},this.setDrawingBufferSize=function(C,j,se){U=C,oe=j,Te=se,t.width=Math.floor(C*se),t.height=Math.floor(j*se),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(w===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(le)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,j,se,te){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,j,se,te),je.viewport(le.copy(ne).multiplyScalar(Te).round())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,j,se,te){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,j,se,te),je.scissor(Y.copy(de).multiplyScalar(Te).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){je.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Xe=C},this.setTransparentSort=function(C){Ze=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,se=!0){let te=0;if(C){let K=!1;if(J!==null){const Le=J.texture.format;K=x.has(Le)}if(K){const Le=J.texture.type,Fe=v.has(Le),Ae=Ce.getClearColor(),He=Ce.getClearAlpha(),Be=Ae.r,nt=Ae.g,Qe=Ae.b;Fe?(b[0]=Be,b[1]=nt,b[2]=Qe,b[3]=He,k.clearBufferuiv(k.COLOR,0,b)):(P[0]=Be,P[1]=nt,P[2]=Qe,P[3]=He,k.clearBufferiv(k.COLOR,0,P))}else te|=k.COLOR_BUFFER_BIT}j&&(te|=k.DEPTH_BUFFER_BIT),se&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),Ce.dispose(),Se.dispose(),Pe.dispose(),M.dispose(),he.dispose(),me.dispose(),we.dispose(),De.dispose(),ve.dispose(),ze.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ir),Re.removeEventListener("sessionend",Ur),ci.stop()};function rt(C){C.preventDefault(),Hm("WebGLRenderer: Context Lost."),R=!0}function It(){Hm("WebGLRenderer: Context Restored."),R=!1;const C=N.autoReset,j=qe.enabled,se=qe.autoUpdate,te=qe.needsUpdate,K=qe.type;pe(),N.autoReset=C,qe.enabled=j,qe.autoUpdate=se,qe.needsUpdate=te,qe.type=K}function yt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wn(C){const j=C.target;j.removeEventListener("dispose",Wn),Rn(j)}function Rn(C){oa(C),M.remove(C)}function oa(C){const j=M.get(C).programs;j!==void 0&&(j.forEach(function(se){ze.releaseProgram(se)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,se,te,K,Le){j===null&&(j=Nt);const Fe=K.isMesh&&K.matrixWorld.determinant()<0,Ae=yo(C,j,se,te,K);je.setMaterial(te,Fe);let He=se.index,Be=1;if(te.wireframe===!0){if(He=$e.getWireframeAttribute(se),He===void 0)return;Be=2}const nt=se.drawRange,Qe=se.attributes.position;let ft=nt.start*Be,Mt=(nt.start+nt.count)*Be;Le!==null&&(ft=Math.max(ft,Le.start*Be),Mt=Math.min(Mt,(Le.start+Le.count)*Be)),He!==null?(ft=Math.max(ft,0),Mt=Math.min(Mt,He.count)):Qe!=null&&(ft=Math.max(ft,0),Mt=Math.min(Mt,Qe.count));const Bt=Mt-ft;if(Bt<0||Bt===1/0)return;De.setup(K,te,Ae,se,He);let Ot,wt=V;if(He!==null&&(Ot=ue.get(He),wt=Ne,wt.setIndex(Ot)),K.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Ht()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if(K.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),je.setLineWidth(Je*Ht()),K.isLineSegments?wt.setMode(k.LINES):K.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else K.isPoints?wt.setMode(k.POINTS):K.isSprite&&wt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Je=K._multiDrawStarts,bt=K._multiDrawCounts,_t=K._multiDrawCount,xn=He?ue.get(He).bytesPerElement:1,yi=M.get(te).currentProgram.getUniforms();for(let nn=0;nn<_t;nn++)yi.setValue(k,"_gl_DrawID",nn),wt.render(Je[nn]/xn,bt[nn])}else if(K.isInstancedMesh)wt.renderInstances(ft,Bt,K.count);else if(se.isInstancedBufferGeometry){const Je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,bt=Math.min(se.instanceCount,Je);wt.renderInstances(ft,Bt,bt)}else wt.render(ft,Bt)};function nr(C,j,se){C.transparent===!0&&C.side===$i&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,Fr(C,j,se),C.side=Nr,C.needsUpdate=!0,Fr(C,j,se),C.side=$i):Fr(C,j,se)}this.compile=function(C,j,se=null){se===null&&(se=C),D=Pe.get(se),D.init(j),O.push(D),se.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(D.pushLight(K),K.castShadow&&D.pushShadow(K))}),C!==se&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(D.pushLight(K),K.castShadow&&D.pushShadow(K))}),D.setupLights();const te=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Le=K.material;if(Le)if(Array.isArray(Le))for(let Fe=0;Fe<Le.length;Fe++){const Ae=Le[Fe];nr(Ae,se,K),te.add(Ae)}else nr(Le,se,K),te.add(Le)}),D=O.pop(),te},this.compileAsync=function(C,j,se=null){const te=this.compile(C,j,se);return new Promise(K=>{function Le(){if(te.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&te.delete(Fe)}),te.size===0){K(C);return}setTimeout(Le,10)}gt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let la=null;function Dr(C){la&&la(C)}function Ir(){ci.stop()}function Ur(){ci.start()}const ci=new C_;ci.setAnimationLoop(Dr),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(C){la=C,Re.setAnimationLoop(C),C===null?ci.stop():ci.start()},Re.addEventListener("sessionstart",Ir),Re.addEventListener("sessionend",Ur),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,te=X!==null&&(J===null||se)&&X.begin(A,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(j),j=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,j,J),D=Pe.get(C,O.length),D.init(j),O.push(D),Kt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(Kt,Pi,j.reversedDepth),mt=this.localClippingEnabled,Ue=Ge.init(this.clippingPlanes,mt),L=Se.get(C,F.length),L.init(),F.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Fe=A.xr.getDepthSensingMesh();Fe!==null&&ca(Fe,j,-1/0,A.sortObjects)}ca(C,j,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Xe,Ze),ct=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ct&&Ce.addToRenderList(L,C),this.info.render.frame++,Ue===!0&&Ge.beginShadows();const K=D.state.shadowsArray;if(qe.render(K,C,j),Ue===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&X.hasRenderPass())===!1){const Fe=L.opaque,Ae=L.transmissive;if(D.setupLights(),j.isArrayCamera){const He=j.cameras;if(Ae.length>0)for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be];xo(Fe,Ae,C,Qe)}ct&&Ce.render(C);for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be];vo(L,C,Qe,Qe.viewport)}}else Ae.length>0&&xo(Fe,Ae,C,j),ct&&Ce.render(C),vo(L,C,j)}J!==null&&ee===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),te&&X.end(A),C.isScene===!0&&C.onAfterRender(A,C,j),De.resetDefaultState(),ae=-1,ce=null,O.pop(),O.length>0?(D=O[O.length-1],Ue===!0&&Ge.setGlobalState(A.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function ca(C,j,se,te){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){te&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Kt);const Fe=we.update(C),Ae=C.material;Ae.visible&&L.push(C,Fe,Ae,se,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Fe=we.update(C),Ae=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),xt.copy(Fe.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ae)){const He=Fe.groups;for(let Be=0,nt=He.length;Be<nt;Be++){const Qe=He[Be],ft=Ae[Qe.materialIndex];ft&&ft.visible&&L.push(C,Fe,ft,se,xt.z,Qe)}}else Ae.visible&&L.push(C,Fe,Ae,se,xt.z,null)}}const Le=C.children;for(let Fe=0,Ae=Le.length;Fe<Ae;Fe++)ca(Le[Fe],j,se,te)}function vo(C,j,se,te){const{opaque:K,transmissive:Le,transparent:Fe}=C;D.setupLightsView(se),Ue===!0&&Ge.setGlobalState(A.clippingPlanes,se),te&&je.viewport(le.copy(te)),K.length>0&&Zn(K,j,se),Le.length>0&&Zn(Le,j,se),Fe.length>0&&Zn(Fe,j,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function xo(C,j,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[te.id]===void 0){const ft=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[te.id]=new Ni(1,1,{generateMipmaps:!0,type:ft?Ji:oi,minFilter:os,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=D.state.transmissionRenderTarget[te.id],Fe=te.viewport||le;Le.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);const Ae=A.getRenderTarget(),He=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(fe),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),ct&&Ce.render(se);const nt=A.toneMapping;A.toneMapping=Li;const Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),D.setupLightsView(te),Ue===!0&&Ge.setGlobalState(A.clippingPlanes,te),Zn(C,se,te),W.updateMultisampleRenderTarget(Le),W.updateRenderTargetMipmap(Le),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Mt=0,Bt=j.length;Mt<Bt;Mt++){const Ot=j[Mt],{object:wt,geometry:Je,material:bt,group:_t}=Ot;if(bt.side===$i&&wt.layers.test(te.layers)){const xn=bt.side;bt.side=Gn,bt.needsUpdate=!0,ua(wt,se,te,Je,bt,_t),bt.side=xn,bt.needsUpdate=!0,ft=!0}}ft===!0&&(W.updateMultisampleRenderTarget(Le),W.updateRenderTargetMipmap(Le))}A.setRenderTarget(Ae,He,Be),A.setClearColor(fe,re),Qe!==void 0&&(te.viewport=Qe),A.toneMapping=nt}function Zn(C,j,se){const te=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Le=C.length;K<Le;K++){const Fe=C[K],{object:Ae,geometry:He,group:Be}=Fe;let nt=Fe.material;nt.allowOverride===!0&&te!==null&&(nt=te),Ae.layers.test(se.layers)&&ua(Ae,j,se,He,nt,Be)}}function ua(C,j,se,te,K,Le){C.onBeforeRender(A,j,se,te,K,Le),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(A,j,se,te,C,Le),K.transparent===!0&&K.side===$i&&K.forceSinglePass===!1?(K.side=Gn,K.needsUpdate=!0,A.renderBufferDirect(se,j,te,K,C,Le),K.side=Nr,K.needsUpdate=!0,A.renderBufferDirect(se,j,te,K,C,Le),K.side=$i):A.renderBufferDirect(se,j,te,K,C,Le),C.onAfterRender(A,j,se,te,K,Le)}function Fr(C,j,se){j.isScene!==!0&&(j=Nt);const te=M.get(C),K=D.state.lights,Le=D.state.shadowsArray,Fe=K.state.version,Ae=ze.getParameters(C,K.state,Le,j,se),He=ze.getProgramCacheKey(Ae);let Be=te.programs;te.environment=C.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(C.isMeshStandardMaterial?me:he).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",Wn),Be=new Map,te.programs=Be);let nt=Be.get(He);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Fe)return fa(C,Ae),nt}else Ae.uniforms=ze.getUniforms(C),C.onBeforeCompile(Ae,A),nt=ze.acquireProgram(Ae,He),Be.set(He,nt),te.uniforms=Ae.uniforms;const Qe=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),fa(C,Ae),te.needsLights=Eo(C),te.lightsStateVersion=Fe,te.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function So(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=ic.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function fa(C,j){const se=M.get(C);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function yo(C,j,se,te,K){j.isScene!==!0&&(j=Nt),W.resetTextureUnits();const Le=j.fog,Fe=te.isMeshStandardMaterial?j.environment:null,Ae=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:na,He=(te.isMeshStandardMaterial?me:he).get(te.envMap||Fe),Be=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!se.morphAttributes.position,ft=!!se.morphAttributes.normal,Mt=!!se.morphAttributes.color;let Bt=Li;te.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wt=Ot!==void 0?Ot.length:0,Je=M.get(te),bt=D.state.lights;if(Ue===!0&&(mt===!0||C!==ce)){const ln=C===ce&&te.id===ae;Ge.setState(te,C,ln)}let _t=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==bt.state.version||Je.outputColorSpace!==Ae||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isBatchedMesh&&Je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Je.instancingMorph===!1&&K.morphTexture!==null||Je.envMap!==He||te.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ge.numPlanes||Je.numIntersection!==Ge.numIntersection)||Je.vertexAlphas!==Be||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==ft||Je.morphColors!==Mt||Je.toneMapping!==Bt||Je.morphTargetsCount!==wt)&&(_t=!0):(_t=!0,Je.__version=te.version);let xn=Je.currentProgram;_t===!0&&(xn=Fr(te,j,K));let yi=!1,nn=!1,Or=!1;const Dt=xn.getUniforms(),ot=Je.uniforms;if(je.useProgram(xn.program)&&(yi=!0,nn=!0,Or=!0),te.id!==ae&&(ae=te.id,nn=!0),yi||ce!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(k,"projectionMatrix",C.projectionMatrix),Dt.setValue(k,"viewMatrix",C.matrixWorldInverse);const cn=Dt.map.cameraPosition;cn!==void 0&&cn.setValue(k,ht.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ce!==C&&(ce=C,nn=!0,Or=!0)}if(Je.needsLights&&(bt.state.directionalShadowMap.length>0&&Dt.setValue(k,"directionalShadowMap",bt.state.directionalShadowMap,W),bt.state.spotShadowMap.length>0&&Dt.setValue(k,"spotShadowMap",bt.state.spotShadowMap,W),bt.state.pointShadowMap.length>0&&Dt.setValue(k,"pointShadowMap",bt.state.pointShadowMap,W)),K.isSkinnedMesh){Dt.setOptional(k,K,"bindMatrix"),Dt.setOptional(k,K,"bindMatrixInverse");const ln=K.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(k,"boneTexture",ln.boneTexture,W))}K.isBatchedMesh&&(Dt.setOptional(k,K,"batchingTexture"),Dt.setValue(k,"batchingTexture",K._matricesTexture,W),Dt.setOptional(k,K,"batchingIdTexture"),Dt.setValue(k,"batchingIdTexture",K._indirectTexture,W),Dt.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(k,"batchingColorTexture",K._colorsTexture,W));const bn=se.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&lt.update(K,se,xn),(nn||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,Dt.setValue(k,"receiveShadow",K.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ot.envMap.value=He,ot.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(ot.envMapIntensity.value=j.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=Qw()),nn&&(Dt.setValue(k,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&Mo(ot,Or),Le&&te.fog===!0&&it.refreshFogUniforms(ot,Le),it.refreshMaterialUniforms(ot,te,Te,oe,D.state.transmissionRenderTarget[C.id]),ic.upload(k,So(Je),ot,W)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ic.upload(k,So(Je),ot,W),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(k,"center",K.center),Dt.setValue(k,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(k,"normalMatrix",K.normalMatrix),Dt.setValue(k,"modelMatrix",K.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const ln=te.uniformsGroups;for(let cn=0,hs=ln.length;cn<hs;cn++){const Mi=ln[cn];ve.update(Mi,xn),ve.bind(Mi,xn)}}return xn}function Mo(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Eo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,j,se){const te=M.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=j,M.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const se=M.get(C);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0};const vc=k.createFramebuffer();this.setRenderTarget=function(C,j=0,se=0){J=C,z=j,ee=se;let te=null,K=!1,Le=!1;if(C){const Ae=M.get(C);if(Ae.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(k.FRAMEBUFFER,Ae.__webglFramebuffer),le.copy(C.viewport),Y.copy(C.scissor),q=C.scissorTest,je.viewport(le),je.scissor(Y),je.setScissorTest(q),ae=-1;return}else if(Ae.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Ae.__hasExternalTextures)W.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Ae.__boundDepthTexture!==nt){if(nt!==null&&M.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Le=!0);const Be=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[j])?te=Be[j][se]:te=Be[j],K=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?te=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?te=Be[se]:te=Be,le.copy(C.viewport),Y.copy(C.scissor),q=C.scissorTest}else le.copy(ne).multiplyScalar(Te).floor(),Y.copy(de).multiplyScalar(Te).floor(),q=ye;if(se!==0&&(te=vc),je.bindFramebuffer(k.FRAMEBUFFER,te)&&je.drawBuffers(C,te),je.viewport(le),je.scissor(Y),je.setScissorTest(q),K){const Ae=M.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae.__webglTexture,se)}else if(Le){const Ae=j;for(let He=0;He<C.textures.length;He++){const Be=M.get(C.textures[He]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+He,Be.__webglTexture,se,Ae)}}else if(C!==null&&se!==0){const Ae=M.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ae.__webglTexture,se)}ae=-1},this.readRenderTargetPixels=function(C,j,se,te,K,Le,Fe,Ae=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){je.bindFramebuffer(k.FRAMEBUFFER,He);try{const Be=C.textures[Ae],nt=Be.format,Qe=Be.type;if(!St.textureFormatReadable(nt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Qe)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-te&&se>=0&&se<=C.height-K&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae),k.readPixels(j,se,te,K,Me.convert(nt),Me.convert(Qe),Le))}finally{const Be=J!==null?M.get(J).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,j,se,te,K,Le,Fe,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(j>=0&&j<=C.width-te&&se>=0&&se<=C.height-K){je.bindFramebuffer(k.FRAMEBUFFER,He);const Be=C.textures[Ae],nt=Be.format,Qe=Be.type;if(!St.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.bufferData(k.PIXEL_PACK_BUFFER,Le.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ae),k.readPixels(j,se,te,K,Me.convert(nt),Me.convert(Qe),0);const Mt=J!==null?M.get(J).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Mt);const Bt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await yy(k,Bt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Le),k.deleteBuffer(ft),k.deleteSync(Bt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,se=0){const te=Math.pow(2,-se),K=Math.floor(C.image.width*te),Le=Math.floor(C.image.height*te),Fe=j!==null?j.x:0,Ae=j!==null?j.y:0;W.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Fe,Ae,K,Le),je.unbindTexture()};const xc=k.createFramebuffer(),Xt=k.createFramebuffer();this.copyTextureToTexture=function(C,j,se=null,te=null,K=0,Le=null){Le===null&&(K!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=K,K=0):Le=0);let Fe,Ae,He,Be,nt,Qe,ft,Mt,Bt;const Ot=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(se!==null)Fe=se.max.x-se.min.x,Ae=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,Be=se.min.x,nt=se.min.y,Qe=se.isBox3?se.min.z:0;else{const bn=Math.pow(2,-K);Fe=Math.floor(Ot.width*bn),Ae=Math.floor(Ot.height*bn),C.isDataArrayTexture?He=Ot.depth:C.isData3DTexture?He=Math.floor(Ot.depth*bn):He=1,Be=0,nt=0,Qe=0}te!==null?(ft=te.x,Mt=te.y,Bt=te.z):(ft=0,Mt=0,Bt=0);const wt=Me.convert(j.format),Je=Me.convert(j.type);let bt;j.isData3DTexture?(W.setTexture3D(j,0),bt=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),bt=k.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),bt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),xn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),yi=k.getParameter(k.UNPACK_SKIP_PIXELS),nn=k.getParameter(k.UNPACK_SKIP_ROWS),Or=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe);const Dt=C.isDataArrayTexture||C.isData3DTexture,ot=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const bn=M.get(C),ln=M.get(j),cn=M.get(bn.__renderTarget),hs=M.get(ln.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,cn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Mi=0;Mi<He;Mi++)Dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(C).__webglTexture,K,Qe+Mi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Le,Bt+Mi)),k.blitFramebuffer(Be,nt,Fe,Ae,ft,Mt,Fe,Ae,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||M.has(C)){const bn=M.get(C),ln=M.get(j);je.bindFramebuffer(k.READ_FRAMEBUFFER,xc),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xt);for(let cn=0;cn<He;cn++)Dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bn.__webglTexture,K,Qe+cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bn.__webglTexture,K),ot?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,Le,Bt+cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,Le),K!==0?k.blitFramebuffer(Be,nt,Fe,Ae,ft,Mt,Fe,Ae,k.COLOR_BUFFER_BIT,k.NEAREST):ot?k.copyTexSubImage3D(bt,Le,ft,Mt,Bt+cn,Be,nt,Fe,Ae):k.copyTexSubImage2D(bt,Le,ft,Mt,Be,nt,Fe,Ae);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ot?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(bt,Le,ft,Mt,Bt,Fe,Ae,He,wt,Je,Ot.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(bt,Le,ft,Mt,Bt,Fe,Ae,He,wt,Ot.data):k.texSubImage3D(bt,Le,ft,Mt,Bt,Fe,Ae,He,wt,Je,Ot):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Le,ft,Mt,Fe,Ae,wt,Je,Ot.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Le,ft,Mt,Ot.width,Ot.height,wt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Le,ft,Mt,Fe,Ae,wt,Je,Ot);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yi),k.pixelStorei(k.UNPACK_SKIP_ROWS,nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Or),Le===0&&j.generateMipmaps&&k.generateMipmap(bt),je.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){z=0,ee=0,J=null,je.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const eA="_backgroundContainer_g9xoq_1",tA="_matrixCanvas_g9xoq_12",nA="_threeCanvas_g9xoq_22",iA="_overlay_g9xoq_30",Kl={backgroundContainer:eA,matrixCanvas:tA,threeCanvas:nA,overlay:iA},rA=()=>{const s=be.useRef(),e=be.useRef();return be.useEffect(()=>{try{if(!s.current)return;const t=new jy,r=new ai(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Jw({antialias:!0,alpha:!0});for(o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2));s.current.firstChild;)s.current.removeChild(s.current.firstChild);s.current.appendChild(o.domElement),r.position.z=5;const l=new uc(2,2),u=new Kd({color:62463,wireframe:!0,transparent:!0,opacity:.15}),f=new Ii(l,u);t.add(f);const h=new uc(2.05,3),p=new nc({color:62463,size:.02}),_=new bf(h,p);t.add(_);const g=1e3,S=new Float32Array(g*3);for(let ae=0;ae<g*3;ae++)S[ae]=(Math.random()-.5)*20;const y=new Un;y.setAttribute("position",new li(S,3));const T=new nc({size:.005,color:62463,transparent:!0,opacity:.8}),w=new bf(y,T);t.add(w);const x=10,v=new Un,b=new Float32Array(x*3);for(let ae=0;ae<x*3;ae++)b[ae]=(Math.random()-.5)*10;v.setAttribute("position",new li(b,3));const P=new nc({size:.1,color:16711935,transparent:!0,opacity:.6}),L=new bf(v,P);t.add(L);const D=new fg(20,40,62463,69905);D.position.y=-3,D.rotation.x=Math.PI*.05,t.add(D);const F=new fg(20,40,62463,69905);F.position.y=3,F.rotation.x=-Math.PI*.05,t.add(F);let O=0,X=0;const A=ae=>{O=(ae.clientX/window.innerWidth-.5)*.3,X=(ae.clientY/window.innerHeight-.5)*.3};window.addEventListener("mousemove",A);let R;const z=()=>{R=requestAnimationFrame(z),f.rotation.y+=.002,_.rotation.y-=.001,w.rotation.y+=5e-4,L.rotation.y-=.001,L.rotation.z+=5e-4,D.position.z=(D.position.z+.01)%.5,F.position.z=(F.position.z+.01)%.5,r.position.x+=(O-r.position.x)*.05,r.position.y+=(-X-r.position.y)*.05,r.lookAt(t.position),o.render(t,r)};let ee;if(e.current){const ae=e.current,ce=ae.getContext("2d");let le=ae.width=window.innerWidth,Y=ae.height=window.innerHeight;const q='01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\\#&_(),.;:?!\\\\|{}<>[]^~',fe=14,re=Math.floor(le/fe),U=new Array(re).fill(1);ee=setInterval(()=>{ce.fillStyle="rgba(0, 0, 0, 0.05)",ce.fillRect(0,0,le,Y),ce.fillStyle="#00f3ff66",ce.font=fe+"px monospace";for(let Te=0;Te<U.length;Te++){const Xe=q.charAt(Math.floor(Math.random()*q.length));ce.fillText(Xe,Te*fe,U[Te]*fe),U[Te]*fe>Y&&Math.random()>.975&&(U[Te]=0),U[Te]++}},50)}const J=()=>{if(!s.current||!e.current)return;const ae=e.current,ce=ae.width=window.innerWidth,le=ae.height=window.innerHeight;r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",J),z(),()=>{window.removeEventListener("mousemove",A),window.removeEventListener("resize",J),cancelAnimationFrame(R),ee&&clearInterval(ee);try{s.current&&o.domElement.parentNode===s.current&&s.current.removeChild(o.domElement),o.dispose(),l.dispose(),u.dispose()}catch(ae){console.warn("Cleanup error:",ae)}}}catch(t){console.error("CyberBackground Error:",t),s.current&&(s.current.style.background="linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)")}},[]),G.jsxs("div",{className:Kl.backgroundContainer,children:[G.jsx("canvas",{ref:e,className:Kl.matrixCanvas}),G.jsx("div",{ref:s,className:Kl.threeCanvas}),G.jsx("div",{className:Kl.overlay})]})},sA="_loaderContainer_10a8x_1",aA="_terminal_10a8x_15",oA="_header_10a8x_25",lA="_dot_10a8x_34",cA="_title_10a8x_53",uA="_content_10a8x_61",fA="_textContainer_10a8x_65",dA="_line_10a8x_76",hA="_accessLine_10a8x_80",pA="_cursor_10a8x_100",mA="_progressContainer_10a8x_116",gA="_progressBar_10a8x_125",_A="_status_10a8x_132",vA="_scanline_10a8x_140",xA="_fadeOut_10a8x_155",_n={loaderContainer:sA,terminal:aA,header:oA,dot:lA,title:cA,content:uA,textContainer:fA,line:dA,accessLine:hA,cursor:pA,progressContainer:mA,progressBar:gA,status:_A,scanline:vA,fadeOut:xA},SA=({onFinished:s})=>{const[e,t]=be.useState(""),[r,o]=be.useState(0),[l,u]=be.useState(!1),f=["> INITIALIZING TERMINAL CONSOLE...","> LOADING CLI MODULES...","> SCANNING FOR HIDDEN REPOSITORIES...","> DECRYPTING ANCIENT MAP_DATA...",'> SEARCHING FOR TARGET: "TREASURE_ROOT"',"> FOUND CLUE #1 - BYPASSING FIREWALL...",`
> ACCESS GRANTED.
> START THE HUNT.`];return be.useEffect(()=>{let h=0,p=0,_;const g=()=>{if(h>=f.length){setTimeout(()=>{u(!0),setTimeout(s,500)},200);return}if(p<=f[h].length)t(y=>(p===0?y+`
`:y)+f[h].charAt(p-1)),p++,_=setTimeout(g,10);else{h++,p=0;const y=h===f.length-1;_=setTimeout(g,y?800:100)}};g();const S=setInterval(()=>{o(y=>y>=100?(clearInterval(S),100):y+Math.random()*2)},50);return()=>{clearTimeout(_),clearInterval(S)}},[s]),G.jsxs("div",{className:`${_n.loaderContainer} ${l?_n.fadeOut:""}`,children:[G.jsxs("div",{className:_n.terminal,children:[G.jsxs("div",{className:_n.header,children:[G.jsx("span",{className:_n.dot}),G.jsx("span",{className:_n.dot}),G.jsx("span",{className:_n.dot}),G.jsx("span",{className:_n.title,children:"SYSTEM_TERMINAL"})]}),G.jsxs("div",{className:_n.content,children:[G.jsxs("div",{className:_n.textContainer,children:[e.split(`
`).map((h,p)=>G.jsx("div",{className:h.includes("ACCESS GRANTED")?_n.accessLine:_n.line,children:h},p)),G.jsx("span",{className:_n.cursor,children:"_"})]}),G.jsx("div",{className:_n.progressContainer,children:G.jsx("div",{className:_n.progressBar,style:{width:`${r}%`}})}),G.jsxs("div",{className:_n.status,children:[G.jsxs("span",{children:["STATUS: ",r>=100?"READY":"LOADING..."]}),G.jsxs("span",{children:[Math.floor(r),"%"]})]})]})]}),G.jsx("div",{className:_n.scanline})]})},yA="_statusContainer_1ndxp_1",MA="_indicator_1ndxp_14",EA="_dot_1ndxp_24",TA="_text_1ndxp_33",wA="_coords_1ndxp_40",eo={statusContainer:yA,indicator:MA,dot:EA,text:TA,coords:wA},AA=()=>G.jsxs("div",{className:eo.statusContainer,children:[G.jsxs("div",{className:eo.indicator,children:[G.jsx("span",{className:eo.dot}),G.jsx("span",{className:eo.text,children:"SYSTEM_PROCESSING..."})]}),G.jsx("div",{className:eo.coords,children:"18.52°N, 73.85°E"})]}),CA=()=>{const[s,e]=be.useState(!0);return G.jsxs("div",{className:"home-container",children:[s&&G.jsx(SA,{onFinished:()=>e(!1)}),G.jsx(rA,{}),G.jsx(Ux,{}),G.jsx(AA,{}),G.jsxs("main",{children:[G.jsx(jx,{}),G.jsx(eS,{}),G.jsx(aS,{}),G.jsx(hS,{}),G.jsx(xS,{})]}),G.jsx(zS,{})]})},RA="_formContainer_1pjx1_1",bA="_backgroundGlow_1pjx1_12",PA="_formCard_1pjx1_39",LA="_cardHeader_1pjx1_76",NA="_formTitle_1pjx1_81",DA="_formSubtitle_1pjx1_90",IA="_form_1pjx1_1",UA="_sectionHeader_1pjx1_105",FA="_inputGroup_1pjx1_115",OA="_label_1pjx1_121",BA="_required_1pjx1_129",kA="_input_1pjx1_115",zA="_inputError_1pjx1_156",VA="_errorMessage_1pjx1_160",HA="_membersList_1pjx1_167",GA="_memberRow_1pjx1_173",WA="_memberLabel_1pjx1_181",XA="_memberInputs_1pjx1_189",jA="_addButton_1pjx1_195",qA="_addIcon_1pjx1_215",YA="_submitSection_1pjx1_220",$A="_submitButton_1pjx1_224",KA="_successContainer_1pjx1_266",ZA="_successCard_1pjx1_275",QA="_successIcon_1pjx1_288",JA="_successTitle_1pjx1_294",eC="_successMessage_1pjx1_300",tC="_successSubMessage_1pjx1_306",nC="_successGlow_1pjx1_312",iC="_returnButton_1pjx1_325",Pt={formContainer:RA,backgroundGlow:bA,formCard:PA,cardHeader:LA,formTitle:NA,formSubtitle:DA,form:IA,sectionHeader:UA,inputGroup:FA,label:OA,required:BA,input:kA,inputError:zA,errorMessage:VA,membersList:HA,memberRow:GA,memberLabel:WA,memberInputs:XA,addButton:jA,addIcon:qA,submitSection:YA,submitButton:$A,successContainer:KA,successCard:ZA,successIcon:QA,successTitle:JA,successMessage:eC,successSubMessage:tC,successGlow:nC,returnButton:iC},Ff=({label:s,value:e,onChange:t,error:r,required:o,placeholder:l})=>G.jsxs("div",{className:Pt.inputGroup,children:[G.jsxs("label",{className:Pt.label,children:[s,o&&G.jsx("span",{className:Pt.required,children:"*"})]}),G.jsx("input",{type:"text",value:e,onChange:t,placeholder:l,className:`${Pt.input} ${r?Pt.inputError:""}`,"aria-label":s}),r&&G.jsx("span",{className:Pt.errorMessage,children:r})]}),rC=()=>{const s=jg(),[e,t]=be.useState(""),[r,o]=be.useState([{name:"",email:""},{name:"",email:""}]),[l,u]=be.useState({}),[f,h]=be.useState(!1),p=()=>{o([...r,{name:"",email:""}])},_=(T,w,x)=>{const v=[...r];v[T][w]=x,o(v)},g=()=>{const T={};return e.trim()||(T.teamName="Team name is required"),r.forEach((w,x)=>{w.name.trim()||(T[`memberName${x}`]=`Member ${x+1} name is required`),w.email.trim()?/\S+@\S+\.\S+/.test(w.email)||(T[`memberEmail${x}`]="Invalid email address"):T[`memberEmail${x}`]=`Member ${x+1} email is required`}),u(T),Object.keys(T).length===0},S=T=>{T.preventDefault(),g()&&h(!0)},y=()=>{s("/")};return f?G.jsx("div",{className:Pt.successContainer,children:G.jsxs("div",{className:Pt.successCard,children:[G.jsx("div",{className:Pt.successIcon,children:"✓"}),G.jsx("h1",{className:Pt.successTitle,children:"Registration Submitted Successfully"}),G.jsx("p",{className:Pt.successMessage,children:"Thank you for registering for Quick Snatch 2.0"}),G.jsx("p",{className:Pt.successSubMessage,children:"Further instructions will be shared soon."}),G.jsx("div",{className:Pt.successGlow}),G.jsx("button",{className:Pt.returnButton,onClick:y,children:"Return to Home"})]})}):G.jsxs("div",{className:Pt.formContainer,children:[G.jsx("div",{className:Pt.backgroundGlow}),G.jsxs("div",{className:Pt.formCard,children:[G.jsxs("div",{className:Pt.cardHeader,children:[G.jsx("h1",{className:Pt.formTitle,children:"Team Registration"}),G.jsx("p",{className:Pt.formSubtitle,children:"Quick Snatch 2.0 // MISSION_ENROLLMENT"})]}),G.jsxs("form",{onSubmit:S,className:Pt.form,children:[G.jsx("div",{className:Pt.sectionHeader,children:"TEAM_IDENTITY"}),G.jsx(Ff,{label:"Team Name",placeholder:"Enter your team name",value:e,onChange:T=>t(T.target.value),error:l.teamName,required:!0}),G.jsx("div",{className:Pt.sectionHeader,children:"SQUAD_MEMBERS"}),G.jsx("div",{className:Pt.membersList,children:r.map((T,w)=>G.jsxs("div",{className:Pt.memberRow,children:[G.jsxs("h3",{className:Pt.memberLabel,children:["Member ",w+1]}),G.jsxs("div",{className:Pt.memberInputs,children:[G.jsx(Ff,{label:"Name",placeholder:"Full Name",value:T.name,onChange:x=>_(w,"name",x.target.value),error:l[`memberName${w}`],required:!0}),G.jsx(Ff,{label:"Email",placeholder:"email@example.com",value:T.email,onChange:x=>_(w,"email",x.target.value),error:l[`memberEmail${w}`],required:!0})]})]},w))}),G.jsxs("button",{type:"button",className:Pt.addButton,onClick:p,children:[G.jsx("span",{className:Pt.addIcon,children:"+"})," ADD NEW SQUAD MEMBER"]}),G.jsx("div",{className:Pt.submitSection,children:G.jsx("button",{type:"submit",className:Pt.submitButton,children:"CONFIRM REGISTRATION"})})]})]})]})},sC=()=>G.jsx(rC,{});function aC(){return G.jsxs(dx,{children:[G.jsx(Bf,{path:"/",element:G.jsx(CA,{})}),G.jsx(Bf,{path:"/register",element:G.jsx(sC,{})})]})}Sv.createRoot(document.getElementById("root")).render(G.jsx(Og.StrictMode,{children:G.jsx(xx,{children:G.jsx(aC,{})})}));
