import"../chunks/index.5e2a9a64.js";import{g as $}from"../chunks/lib.4d124e32.js";import{s as v,e as p,i as m,d as s,y as l,q as d,f as y,g as w,h as S,l as x,m as P}from"../chunks/scheduler.50831561.js";import{h,u as j}from"../chunks/await_block.3cda980a.js";import{S as q,i as C,a as u,t as f,b,d as O,m as g,g as z,e as k,c as D}from"../chunks/index.24431cc3.js";async function E({params:c,fetch:n}){const t=c.post;let a;try{a=await $(t)}catch(o){console.error(o)}let e=a.metadata,r=a.default;return{attributes:e,content:r}}const H=Object.freeze(Object.defineProperty({__proto__:null,load:E},Symbol.toStringTag,{value:"Module"}));function I(c){return{c:l,l,m:l,p:l,i:l,o:l,d:l}}function M(c){let n,t,a;var e=c[0].content;function r(o,i){return{}}return e&&(t=d(e,r())),{c(){n=y("div"),t&&b(t.$$.fragment)},l(o){n=w(o,"DIV",{});var i=S(n);t&&O(t.$$.fragment,i),i.forEach(s)},m(o,i){m(o,n,i),t&&g(t,n,null),a=!0},p(o,i){if(i&1&&e!==(e=o[0].content)){if(t){z();const _=t;f(_.$$.fragment,1,0,()=>{k(_,1)}),D()}e?(t=d(e,r()),b(t.$$.fragment),u(t.$$.fragment,1),g(t,n,null)):t=null}},i(o){a||(t&&u(t.$$.fragment,o),a=!0)},o(o){t&&f(t.$$.fragment,o),a=!1},d(o){o&&s(n),t&&k(t)}}}function N(c){let n;return{c(){n=x("loading...")},l(t){n=P(t,"loading...")},m(t,a){m(t,n,a)},p:l,i:l,o:l,d(t){t&&s(n)}}}function T(c){let n,t,a,e={ctx:c,current:null,token:null,hasCatch:!1,pending:N,then:M,catch:I,blocks:[,,,]};return h(t=c[0],e),{c(){n=p(),e.block.c()},l(r){n=p(),e.block.l(r)},m(r,o){m(r,n,o),e.block.m(r,e.anchor=o),e.mount=()=>n.parentNode,e.anchor=n,a=!0},p(r,[o]){c=r,e.ctx=c,o&1&&t!==(t=c[0])&&h(t,e)||j(e,c,o)},i(r){a||(u(e.block),a=!0)},o(r){for(let o=0;o<3;o+=1){const i=e.blocks[o];f(i)}a=!1},d(r){r&&s(n),e.block.d(r),e.token=null,e=null}}}function U(c,n,t){let{data:a}=n;return c.$$set=e=>{"data"in e&&t(0,a=e.data)},[a]}class J extends q{constructor(n){super(),C(this,n,U,T,v,{data:0})}}export{J as component,H as universal};