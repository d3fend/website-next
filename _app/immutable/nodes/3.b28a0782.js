import{s as h,f as d,l as m,g,h as v,m as p,d as f,i as x,x as c,n as u,y as _,z as $}from"../chunks/scheduler.3032ca4b.js";import{S as b,i as y}from"../chunks/index.ee8739bf.js";import{p as E}from"../chunks/stores.9c5c023d.js";function S(n){let e,s=n[0].status+"",r,o,i=n[0].error.message+"",l;return{c(){e=d("h1"),r=m(s),o=m(" : "),l=m(i)},l(a){e=g(a,"H1",{});var t=v(e);r=p(t,s),o=p(t," : "),l=p(t,i),t.forEach(f)},m(a,t){x(a,e,t),c(e,r),c(e,o),c(e,l)},p(a,[t]){t&1&&s!==(s=a[0].status+"")&&u(r,s),t&1&&i!==(i=a[0].error.message+"")&&u(l,i)},i:_,o:_,d(a){a&&f(e)}}}function q(n,e,s){let r;return $(n,E,o=>s(0,r=o)),[r]}class j extends b{constructor(e){super(),y(this,e,q,S,h,{})}}export{j as component};
