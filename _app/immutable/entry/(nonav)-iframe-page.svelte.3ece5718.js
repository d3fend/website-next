import{S as d,b as p,s as h,f as _,k as f,l as m,o as c,G as r,Q as g,q as v,v as E,P as I,n as u,R as M}from"../chunks/index.f8777a79.js";import{f as P}from"../chunks/consts.558b10bc.js";const b="5173",A="localhost";function R(n){let s,e,a,l,i;return{c(){s=_("main"),e=_("iframe"),this.h()},l(t){s=f(t,"MAIN",{class:!0});var o=m(s);e=f(o,"IFRAME",{id:!0,src:!0,title:!0,class:!0}),m(e).forEach(c),o.forEach(c),this.h()},h(){r(e,"id","measures-iframe"),g(e.src,a=`http://${A}:${b}/profile/`)||r(e,"src",a),r(e,"title","D3FEND Embedded"),r(e,"class","svelte-1ku0r4"),r(s,"class","svelte-1ku0r4")},m(t,o){v(t,s,o),E(s,e),n[2](e),l||(i=I(window,"message",n[1]),l=!0)},p:u,i:u,o:u,d(t){t&&c(s),n[2](null),l=!1,i()}}}function k(n,s,e){let a=null;const l=t=>{console.log(t),a.contentWindow.postMessage({call:"toParent",value:P},"*")};function i(t){M[t?"unshift":"push"](()=>{a=t,e(0,a)})}return[a,l,i]}class $ extends d{constructor(s){super(),p(this,s,k,R,h,{})}}export{$ as default};
