import{S as p,b as m,s as h,f as g,k as b,l as y,o as f,G as k,q as w,t as u,e as d,R as I,T as $,y as v,z as A,A as D,U as S,B as C}from"./index.f8777a79.js";import{g as F}from"./navigation.61cd7a83.js";import{S as L}from"./SimpleAutocomplete.82ee640e.js";import{b as _,c as q}from"./lib.576aa631.js";function E(o){let e,r,t;function a(n){o[5](n)}let i={items:o[1],labelFunction:_,keywordsFunction:o[3],placeholder:"Search D3FEND's "+o[1].length+" Artifacts",onChange:o[2]};return o[0]!==void 0&&(i.selectedItem=o[0]),e=new L({props:i}),I.push(()=>$(e,"selectedItem",a)),{c(){v(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,l){D(e,n,l),t=!0},p(n,l){const c={};!r&&l&1&&(r=!0,c.selectedItem=n[0],S(()=>r=!1)),e.$set(c)},i(n){t||(u(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function O(o){let e,r,t=o[1].length>0&&E(o);return{c(){e=g("div"),t&&t.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var i=y(e);t&&t.l(i),i.forEach(f),this.h()},h(){k(e,"class","dao-lookup-wrapper")},m(a,i){w(a,e,i),t&&t.m(e,null),r=!0},p(a,[i]){a[1].length>0&&t.p(a,i)},i(a){r||(u(t),r=!0)},o(a){d(t),r=!1},d(a){a&&f(e),t&&t.d()}}}function z(o,e,r){let{da_graph:t}=e,a,i=t["@graph"];async function n(s){typeof window<"u"&&typeof s<"u"&&await F("/dao/artifact/"+s["@id"])}function l(s){return s?s["@id"]+" - "+_(s)+q(s):""}function c(s){a=s,r(0,a)}return o.$$set=s=>{"da_graph"in s&&r(4,t=s.da_graph)},[a,i,n,l,t,c]}class T extends p{constructor(e){super(),m(this,e,z,O,h,{da_graph:4})}}export{T as L};
