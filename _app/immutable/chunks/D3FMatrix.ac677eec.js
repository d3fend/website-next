import{S as w,b as y,s as v,f as C,k as M,l as D,o as k,G as F,q as T,P as h,N as q,e as m,O as z,t as _,r as A,C as E,_ as L,n as S,a as N,$ as W,y as b,z as g,A as p,B as $}from"./index.43e07aca.js";import{d as B}from"./stores.67412d2c.js";import{L as G,T as I}from"./Loading.22253449.js";import{S as O}from"./ScrollFrame.b9e460c0.js";function P(o){let e,r;return e=new G({}),{c(){b(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p:S,i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){$(e,t)}}}function j(o){let e,r;return e=new O({props:{$$slots:{default:[H]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const a={};n&4101&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){$(e,t)}}}function H(o){var t;let e,r;return e=new I({props:{tree:(t=o[2])==null?void 0:t.tree,theme:o[0]}}),e.$on("elementClick",o[5]),{c(){b(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,a){p(e,n,a),r=!0},p(n,a){var f;const c={};a&4&&(c.tree=(f=n[2])==null?void 0:f.tree),a&1&&(c.theme=n[0]),e.$set(c)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function J(o){let e,r,t,n,a,c;const f=[j,P],i=[];function d(s,u){var l;return(l=s[2])!=null&&l.tree?0:1}return r=d(o),t=i[r]=f[r](o),{c(){e=C("main"),t.c(),this.h()},l(s){e=M(s,"MAIN",{class:!0});var u=D(e);t.l(u),u.forEach(k),this.h()},h(){F(e,"class","svelte-18shyb5")},m(s,u){T(s,e,u),i[r].m(e,null),n=!0,a||(c=[h(window,"scroll",o[3]),h(window,"resize",o[3]),h(window,"load",o[3])],a=!0)},p(s,[u]){let l=r;r=d(s),r===l?i[r].p(s,u):(q(),m(i[l],1,1,()=>{i[l]=null}),z(),t=i[r],t?t.p(s,u):(t=i[r]=f[r](s),t.c()),_(t,1),t.m(e,null))},i(s){n||(_(t),n=!0)},o(s){m(t),n=!1},d(s){s&&k(e),i[r].d(),a=!1,A(c)}}}function K(o,e,r){let t,n=S,a=()=>(n(),n=N(i,l=>r(2,t=l)),i);o.$$.on_destroy.push(()=>n());let{theme:c}=e,{scroll_indicator:f=c!="poster"}=e,{treeStore:i=B}=e;a();let d;function s(){if(f){let l=d;l.scrollWidth,l.clientWidth}}E(async()=>{await L(),s()});function u(l){W.call(this,o,l)}return o.$$set=l=>{"theme"in l&&r(0,c=l.theme),"scroll_indicator"in l&&r(4,f=l.scroll_indicator),"treeStore"in l&&a(r(1,i=l.treeStore))},[c,i,t,s,f,u]}class X extends w{constructor(e){super(),y(this,e,K,J,v,{theme:0,scroll_indicator:4,treeStore:1})}}export{X as D};
