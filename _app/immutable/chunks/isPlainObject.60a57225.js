import{a as b}from"./array.9f3ba611.js";import{c,p as v}from"./constant.6af51708.js";import{p as j}from"./mermaid.core.8e809b15.js";import{a as O,b as h}from"./isArray.43a48bdb.js";import{o as y}from"./isTypedArray.d780b3d2.js";function P(n){return n[0]}function d(n){return n[1]}function B(n,r){var o=c(!0),f=null,l=j,u=null;n=typeof n=="function"?n:n===void 0?P:c(n),r=typeof r=="function"?r:r===void 0?d:c(r);function e(t){var i,g=(t=b(t)).length,s,a=!1,p;for(f==null&&(u=l(p=v())),i=0;i<=g;++i)!(i<g&&o(s=t[i],i,t))===a&&((a=!a)?u.lineStart():u.lineEnd()),a&&u.point(+n(s,i,t),+r(s,i,t));if(p)return u=null,p+""||null}return e.x=function(t){return arguments.length?(n=typeof t=="function"?t:c(+t),e):n},e.y=function(t){return arguments.length?(r=typeof t=="function"?t:c(+t),e):r},e.defined=function(t){return arguments.length?(o=typeof t=="function"?t:c(!!t),e):o},e.curve=function(t){return arguments.length?(l=t,f!=null&&(u=l(f)),e):l},e.context=function(t){return arguments.length?(t==null?f=u=null:u=l(f=t),e):f},e}var S=y(Object.getPrototypeOf,Object);const T=S;var w="[object Object]",C=Function.prototype,L=Object.prototype,m=C.toString,k=L.hasOwnProperty,A=m.call(Object);function D(n){if(!O(n)||h(n)!=w)return!1;var r=T(n);if(r===null)return!0;var o=k.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&m.call(o)==A}export{T as g,D as i,B as l};
