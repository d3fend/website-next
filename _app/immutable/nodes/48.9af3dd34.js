import{e as D}from"../chunks/index.5e2a9a64.js";import{s as L,a as q,f as g,c as T,g as b,h as v,d as p,i as h,x as C,z as P,o as x,p as z,y as _,F as S,C as j,D as I,l as A,m as F}from"../chunks/scheduler.3032ca4b.js";import{h as y,u as U}from"../chunks/await_block.99b27d44.js";import{S as G,i as H,b as w,d as N,m as O,a as $,t as k,e as E}from"../chunks/index.ee8739bf.js";import{p as J}from"../chunks/stores.9c5c023d.js";import{b as K}from"../chunks/navigation.d10cd505.js";import{T as Q}from"../chunks/Technique.f7e72b6d.js";import{T as R}from"../chunks/Title.8f901ed1.js";import{D as V}from"../chunks/D3FMatrix.f7f5e2a9.js";const W=!1;async function X({url:n,fetch:t}){const l=n.searchParams.get("technique_id"),o=await t(`/api/technique/${l}.json`),r=await o.json();if(o.status!==200)throw D(500,o.message);return{technique:r,technique_id:l}}const me=Object.freeze(Object.defineProperty({__proto__:null,load:X,prerender:W},Symbol.toStringTag,{value:"Module"}));function Y(n){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function Z(n){let t,l="esc",o,r,s,i,u="close",f,d,c;return r=new Q({props:{technique_id:n[0].technique_id,technique:n[10]}}),{c(){t=g("button"),t.textContent=l,o=q(),w(r.$$.fragment),s=q(),i=g("button"),i.textContent=u},l(e){t=b(e,"BUTTON",{"data-svelte-h":!0}),S(t)!=="svelte-1ed06k4"&&(t.textContent=l),o=T(e),N(r.$$.fragment,e),s=T(e),i=b(e,"BUTTON",{"data-svelte-h":!0}),S(i)!=="svelte-1x92hpv"&&(i.textContent=u)},m(e,a){h(e,t,a),h(e,o,a),O(r,e,a),h(e,s,a),h(e,i,a),f=!0,d||(c=[j(t,"click",n[7]),j(i,"click",n[8])],d=!0)},p(e,a){const m={};a&1&&(m.technique_id=e[0].technique_id),a&1&&(m.technique=e[10]),r.$set(m)},i(e){f||($(r.$$.fragment,e),f=!0)},o(e){k(r.$$.fragment,e),f=!1},d(e){e&&(p(t),p(o),p(s),p(i)),E(r,e),d=!1,I(c)}}}function B(n){let t;return{c(){t=A("loading...")},l(l){t=F(l,"loading...")},m(l,o){h(l,t,o)},p:_,i:_,o:_,d(l){l&&p(t)}}}function ee(n){let t,l,o,r,s,i,u,f,d;t=new R({props:{title:n[3],og_title:n[4],og_description:n[2]["d3f:definition"],og_type:"article"}}),s=new V({props:{scroll_indicator:!1}});let c={ctx:n,current:null,token:null,hasCatch:!1,pending:B,then:Z,catch:Y,value:10,blocks:[,,,]};return y(f=n[0].technique,c),{c(){w(t.$$.fragment),l=q(),o=g("main"),r=g("section"),w(s.$$.fragment),i=q(),u=g("dialog"),c.block.c()},l(e){N(t.$$.fragment,e),l=T(e),o=b(e,"MAIN",{});var a=v(o);r=b(a,"SECTION",{});var m=v(r);N(s.$$.fragment,m),m.forEach(p),i=T(a),u=b(a,"DIALOG",{});var M=v(u);c.block.l(M),M.forEach(p),a.forEach(p)},m(e,a){O(t,e,a),h(e,l,a),h(e,o,a),C(o,r),O(s,r,null),C(o,i),C(o,u),c.block.m(u,c.anchor=null),c.mount=()=>u,c.anchor=null,n[9](u),d=!0},p(e,[a]){n=e,c.ctx=n,a&1&&f!==(f=n[0].technique)&&y(f,c)||U(c,n,a)},i(e){d||($(t.$$.fragment,e),$(s.$$.fragment,e),$(c.block),d=!0)},o(e){k(t.$$.fragment,e),k(s.$$.fragment,e);for(let a=0;a<3;a+=1){const m=c.blocks[a];k(m)}d=!1},d(e){e&&(p(l),p(o)),E(t,e),E(s),c.block.d(),c.token=null,c=null,n[9](null)}}}function te(n,t,l){let o;P(n,J,m=>l(6,o=m));let{data:r}=t,s,i,u=r.technique.description["@graph"][0];const f=`${u["rdfs:label"]} - Technique ${u["d3f:d3fend-id"]}`,d=`${u["rdfs:label"]} - Technique ${u["d3f:d3fend-id"]}`;x(()=>{l(5,i=document.getElementsByTagName("body")[0])}),K(()=>{i==null||i.classList.remove("scroll--none")});const c=()=>s.close(),e=()=>s.close();function a(m){z[m?"unshift":"push"](()=>{s=m,l(1,s)})}return n.$$set=m=>{"data"in m&&l(0,r=m.data)},n.$$.update=()=>{n.$$.dirty&98&&(s&&o.url.searchParams.size?(s.showModal(),i==null||i.classList.add("scroll--none")):s&&(s.close(),i==null||i.classList.remove("scroll--none")))},[r,s,u,f,d,i,o,c,e,a]}class fe extends G{constructor(t){super(),H(this,t,te,ee,L,{data:0})}}export{fe as component,me as universal};
