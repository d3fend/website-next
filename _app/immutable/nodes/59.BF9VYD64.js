import{e as L}from"../chunks/index.g5YcAAdQ.js";import{s as M,e as p,b as D,t as j,d as m,f as v,y as N,j as x,i as f,h as k,x as w,k as T,l as d,n as P,P as O}from"../chunks/scheduler.DDVliNtX.js";import{e as S}from"../chunks/each.BFyodu2L.js";import{S as z,i as B}from"../chunks/index.iWffroUJ.js";import{G as C}from"../chunks/lib.DSnscA8f.js";async function F({fetch:n}){const t=await n("/api/technique/all.json"),s=await t.json();return t.status!==200&&L(500,s.message),{dtechs:s}}const U=Object.freeze(Object.defineProperty({__proto__:null,load:F},Symbol.toStringTag,{value:"Module"}));function A(n,t,s){const h=n.slice();return h[2]=t[s],h}function H(n){let t,s,h=n[2]["d3f:d3fend-id"]+"",u,i,_,r,b=n[2]["rdfs:label"]+"",E,g;return{c(){t=p("tr"),s=p("td"),u=j(h),i=D(),_=p("td"),r=p("a"),E=j(b),g=D(),this.h()},l(c){t=m(c,"TR",{});var e=v(t);s=m(e,"TD",{});var a=v(s);u=k(a,h),a.forEach(f),i=x(e),_=m(e,"TD",{});var o=v(_);r=m(o,"A",{href:!0});var l=v(r);E=k(l,b),l.forEach(f),o.forEach(f),g=x(e),e.forEach(f),this.h()},h(){w(r,"href","/techs/?technique_id="+n[2]["@id"])},m(c,e){T(c,t,e),d(t,s),d(s,u),d(t,i),d(t,_),d(_,r),d(r,E),d(t,g)},p:P,d(c){c&&f(t)}}}function G(n){let t,s,h='<th class="stretch">D3FEND ID</th> <th>D3FEND Technique Name</th>',u,i,_,r,b,E=n[0].graph.length+"",g,c=S(n[0].graph),e=[];for(let a=0;a<c.length;a+=1)e[a]=H(A(n,c,a));return{c(){t=p("table"),s=p("thead"),s.innerHTML=h,u=D(),i=p("tbody");for(let a=0;a<e.length;a+=1)e[a].c();_=D(),r=p("p"),b=j("total count: "),g=j(E),this.h()},l(a){t=m(a,"TABLE",{id:!0,class:!0});var o=v(t);s=m(o,"THEAD",{"data-svelte-h":!0}),N(s)!=="svelte-1dx50zw"&&(s.innerHTML=h),u=x(o),i=m(o,"TBODY",{});var l=v(i);for(let q=0;q<e.length;q+=1)e[q].l(l);l.forEach(f),o.forEach(f),_=x(a),r=m(a,"P",{});var y=v(r);b=k(y,"total count: "),g=k(y,E),y.forEach(f),this.h()},h(){w(t,"id","mappings"),w(t,"class","table-auto")},m(a,o){T(a,t,o),d(t,s),d(t,u),d(t,i);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(i,null);T(a,_,o),T(a,r,o),d(r,b),d(r,g)},p(a,[o]){if(o&1){c=S(a[0].graph);let l;for(l=0;l<c.length;l+=1){const y=A(a,c,l);e[l]?e[l].p(y,o):(e[l]=H(y),e[l].c(),e[l].m(i,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=c.length}},i:P,o:P,d(a){a&&(f(t),f(_),f(r)),O(e,a)}}}function I(n,t,s){let{data:h}=t,u=new C(h.dtechs);return n.$$set=i=>{"data"in i&&s(1,h=i.data)},[u,h]}class V extends z{constructor(t){super(),B(this,t,I,G,M,{data:1})}}export{V as component,U as universal};
