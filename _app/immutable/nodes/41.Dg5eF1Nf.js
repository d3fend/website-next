import{e as H}from"../chunks/index.g5YcAAdQ.js";import{s as L,e as p,b as k,t as j,d as m,f as v,y as M,j as q,i as d,h as A,x,k as E,l as f,n as C,P as O}from"../chunks/scheduler.DDVliNtX.js";import{e as P}from"../chunks/each.BFyodu2L.js";import{S as B,i as G}from"../chunks/index.iWffroUJ.js";import{G as K}from"../chunks/lib.DSnscA8f.js";async function z({params:s,fetch:t}){s.technique;const n=await t("/api/offensive-technique/all.json"),r=await n.json();return n.status!==200&&H(500,data.message),{otechs:r}}const U=Object.freeze(Object.defineProperty({__proto__:null,load:z},Symbol.toStringTag,{value:"Module"}));function S(s,t,n){const r=s.slice();return r[2]=t[n],r}function w(s){let t,n,r=s[2]["d3f:attack-id"]+"",_,c,u,o,b=s[2]["rdfs:label"]+"",T,g;return{c(){t=p("tr"),n=p("td"),_=j(r),c=k(),u=p("td"),o=p("a"),T=j(b),g=k(),this.h()},l(h){t=m(h,"TR",{});var e=v(t);n=m(e,"TD",{});var a=v(n);_=A(a,r),a.forEach(d),c=q(e),u=m(e,"TD",{});var i=v(u);o=m(i,"A",{href:!0});var l=v(o);T=A(l,b),l.forEach(d),i.forEach(d),g=q(e),e.forEach(d),this.h()},h(){x(o,"href","/offensive-technique/attack/"+s[2]["d3f:attack-id"])},m(h,e){E(h,t,e),f(t,n),f(n,_),f(t,c),f(t,u),f(u,o),f(o,T),f(t,g)},p:C,d(h){h&&d(t)}}}function I(s){let t,n,r='<th class="stretch">ATT&amp;CK ID</th> <th>ATT&amp;CK Technique Name</th>',_,c,u,o,b,T=s[0].graph.length+"",g,h=P(s[0].graph),e=[];for(let a=0;a<h.length;a+=1)e[a]=w(S(s,h,a));return{c(){t=p("table"),n=p("thead"),n.innerHTML=r,_=k(),c=p("tbody");for(let a=0;a<e.length;a+=1)e[a].c();u=k(),o=p("p"),b=j("total count: "),g=j(T),this.h()},l(a){t=m(a,"TABLE",{id:!0,class:!0});var i=v(t);n=m(i,"THEAD",{"data-svelte-h":!0}),M(n)!=="svelte-1ik2lea"&&(n.innerHTML=r),_=q(i),c=m(i,"TBODY",{});var l=v(c);for(let D=0;D<e.length;D+=1)e[D].l(l);l.forEach(d),i.forEach(d),u=q(a),o=m(a,"P",{});var y=v(o);b=A(y,"total count: "),g=A(y,T),y.forEach(d),this.h()},h(){x(t,"id","mappings"),x(t,"class","table-auto")},m(a,i){E(a,t,i),f(t,n),f(t,_),f(t,c);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(c,null);E(a,u,i),E(a,o,i),f(o,b),f(o,g)},p(a,[i]){if(i&1){h=P(a[0].graph);let l;for(l=0;l<h.length;l+=1){const y=S(a,h,l);e[l]?e[l].p(y,i):(e[l]=w(y),e[l].c(),e[l].m(c,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=h.length}},i:C,o:C,d(a){a&&(d(t),d(u),d(o)),O(e,a)}}}function N(s,t,n){let{data:r}=t,_=new K(r.otechs);return s.$$set=c=>{"data"in c&&n(1,r=c.data)},[_,r]}class V extends B{constructor(t){super(),G(this,t,N,I,L,{data:1})}}export{V as component,U as universal};
