import{b as i,r as n,a as l,f as _}from"./isArray.or_6N2st.js";function E(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var V="[object AsyncFunction]",D="[object Function]",U="[object GeneratorFunction]",N="[object Proxy]";function I(r){if(!E(r))return!1;var e=i(r);return e==D||e==U||e==V||e==N}var p=n["__core-js_shared__"],v=function(){var r=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function R(r){return!!v&&v in r}var G=Function.prototype,W=G.toString;function c(r){if(r!=null){try{return W.call(r)}catch{}try{return r+""}catch{}}return""}var K=/[\\^$.*+?()[\]{}|]/g,L=/^\[object .+?Constructor\]$/,q=Function.prototype,H=Object.prototype,J=q.toString,X=H.hasOwnProperty,z=RegExp("^"+J.call(X).replace(K,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Q(r){if(!E(r)||R(r))return!1;var e=I(r)?z:L;return e.test(c(r))}function Y(r,e){return r?.[e]}function u(r,e){var a=Y(r,e);return Q(a)?a:void 0}var g=u(n,"Map");function Z(r,e){return function(a){return r(e(a))}}var rr=Object.prototype;function er(r){var e=r&&r.constructor,a=typeof e=="function"&&e.prototype||rr;return r===a}var tr="[object Arguments]";function m(r){return l(r)&&i(r)==tr}var k=Object.prototype,ar=k.hasOwnProperty,or=k.propertyIsEnumerable,nr=m(function(){return arguments}())?m:function(r){return l(r)&&ar.call(r,"callee")&&!or.call(r,"callee")};const Xr=nr;var cr=9007199254740991;function C(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=cr}function zr(r){return r!=null&&C(r.length)&&!I(r)}function sr(){return!1}var F=typeof exports=="object"&&exports&&!exports.nodeType&&exports,A=F&&typeof module=="object"&&module&&!module.nodeType&&module,ir=A&&A.exports===F,$=ir?n.Buffer:void 0,ur=$?$.isBuffer:void 0,pr=ur||sr;const Qr=pr;var fr="[object Arguments]",gr="[object Array]",br="[object Boolean]",yr="[object Date]",jr="[object Error]",Tr="[object Function]",lr="[object Map]",dr="[object Number]",vr="[object Object]",mr="[object RegExp]",Ar="[object Set]",$r="[object String]",wr="[object WeakMap]",xr="[object ArrayBuffer]",Or="[object DataView]",Pr="[object Float32Array]",Sr="[object Float64Array]",hr="[object Int8Array]",Mr="[object Int16Array]",Er="[object Int32Array]",Ir="[object Uint8Array]",kr="[object Uint8ClampedArray]",Cr="[object Uint16Array]",Fr="[object Uint32Array]",t={};t[Pr]=t[Sr]=t[hr]=t[Mr]=t[Er]=t[Ir]=t[kr]=t[Cr]=t[Fr]=!0;t[fr]=t[gr]=t[xr]=t[br]=t[Or]=t[yr]=t[jr]=t[Tr]=t[lr]=t[dr]=t[vr]=t[mr]=t[Ar]=t[$r]=t[wr]=!1;function Br(r){return l(r)&&C(r.length)&&!!t[i(r)]}function _r(r){return function(e){return r(e)}}var B=typeof exports=="object"&&exports&&!exports.nodeType&&exports,s=B&&typeof module=="object"&&module&&!module.nodeType&&module,Vr=s&&s.exports===B,f=Vr&&_.process,w=function(){try{var r=s&&s.require&&s.require("util").types;return r||f&&f.binding&&f.binding("util")}catch{}}(),x=w&&w.isTypedArray,Dr=x?_r(x):Br;const Yr=Dr;var Ur=Z(Object.keys,Object),Nr=Object.prototype,Rr=Nr.hasOwnProperty;function Zr(r){if(!er(r))return Ur(r);var e=[];for(var a in Object(r))Rr.call(r,a)&&a!="constructor"&&e.push(a);return e}var b=u(n,"DataView"),y=u(n,"Promise"),j=u(n,"Set"),T=u(n,"WeakMap"),O="[object Map]",Gr="[object Object]",P="[object Promise]",S="[object Set]",h="[object WeakMap]",M="[object DataView]",Wr=c(b),Kr=c(g),Lr=c(y),qr=c(j),Hr=c(T),o=i;(b&&o(new b(new ArrayBuffer(1)))!=M||g&&o(new g)!=O||y&&o(y.resolve())!=P||j&&o(new j)!=S||T&&o(new T)!=h)&&(o=function(r){var e=i(r),a=e==Gr?r.constructor:void 0,d=a?c(a):"";if(d)switch(d){case Wr:return M;case Kr:return O;case Lr:return P;case qr:return S;case Hr:return h}return e});const re=o;export{g as M,j as S,Qr as a,Yr as b,Xr as c,er as d,Zr as e,I as f,re as g,u as h,zr as i,E as j,C as k,_r as l,w as n,Z as o};
