import{s as g,e as k,d as S,f as w,i as b,w as T,k as y,n as d,x as C,T as v}from"./scheduler.7zAg_eaB.js";import{S as D,i as F,g as L,a as m,e as M,t as f,c as _,b as $,m as h,d as p}from"./index.vxbr_JN5.js";import{L as q,T as A}from"./Loading.gxx7ArZC.js";import{S as E}from"./ScrollFrame.5j-3epdK.js";import{d as I}from"./stores.lwUwfTPQ.js";function N(s){let t,r;return t=new q({}),{c(){_(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,n){h(t,e,n),r=!0},p:d,i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){p(t,e)}}}function j(s){let t,r;return t=new E({props:{$$slots:{default:[x]},$$scope:{ctx:s}}}),{c(){_(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,n){h(t,e,n),r=!0},p(e,n){const l={};n&21&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){p(t,e)}}}function x(s){let t,r;return t=new A({props:{tree:s[2]?.tree,theme:s[0]}}),t.$on("elementClick",s[3]),{c(){_(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,n){h(t,e,n),r=!0},p(e,n){const l={};n&4&&(l.tree=e[2]?.tree),n&1&&(l.theme=e[0]),t.$set(l)},i(e){r||(f(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){p(t,e)}}}function z(s){let t,r,e,n;const l=[j,N],c=[];function i(a,o){return a[2]?.tree?0:1}return r=i(s),e=c[r]=l[r](s),{c(){t=k("main"),e.c(),this.h()},l(a){t=S(a,"MAIN",{class:!0});var o=w(t);e.l(o),o.forEach(b),this.h()},h(){T(t,"class","svelte-51re1e")},m(a,o){y(a,t,o),c[r].m(t,null),n=!0},p(a,[o]){let u=r;r=i(a),r===u?c[r].p(a,o):(L(),m(c[u],1,1,()=>{c[u]=null}),M(),e=c[r],e?e.p(a,o):(e=c[r]=l[r](a),e.c()),f(e,1),e.m(t,null))},i(a){n||(f(e),n=!0)},o(a){m(e),n=!1},d(a){a&&b(t),c[r].d()}}}function B(s,t,r){let e,n=d,l=()=>(n(),n=C(i,o=>r(2,e=o)),i);s.$$.on_destroy.push(()=>n());let{theme:c}=t,{treeStore:i=I}=t;l();function a(o){v.call(this,s,o)}return s.$$set=o=>{"theme"in o&&r(0,c=o.theme),"treeStore"in o&&l(r(1,i=o.treeStore))},[c,i,e,a]}class P extends D{constructor(t){super(),F(this,t,B,z,g,{theme:0,treeStore:1})}}export{P as D};
