import{S as h,b as d,s as g,f as v,h as m,k as b,l as x,m as p,o as u,q as $,v as c,w as f,n as _,x as q}from"../chunks/index.f8777a79.js";import{p as E}from"../chunks/stores.ceda234b.js";function S(n){let e,s=n[0].status+"",r,o,l=n[0].error.message+"",i;return{c(){e=v("h1"),r=m(s),o=m(" : "),i=m(l)},l(a){e=b(a,"H1",{});var t=x(e);r=p(t,s),o=p(t," : "),i=p(t,l),t.forEach(u)},m(a,t){$(a,e,t),c(e,r),c(e,o),c(e,i)},p(a,[t]){t&1&&s!==(s=a[0].status+"")&&f(r,s),t&1&&l!==(l=a[0].error.message+"")&&f(i,l)},i:_,o:_,d(a){a&&u(e)}}}function k(n,e,s){let r;return q(n,E,o=>s(0,r=o)),[r]}class C extends h{constructor(e){super(),d(this,e,k,S,g,{})}}export{C as default};
