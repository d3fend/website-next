import{S as L,i as P,s as R,e as m,t as y,k as w,c as v,a as T,h as D,d as h,m as K,b as H,g as I,I as o,E as B,X}from"../../chunks/index-a02da30e.js";import{G as Y}from"../../chunks/lib-c0e834da.js";import"../../chunks/marked.esm-8ab30116.js";function O(n,t,a){const s=n.slice();return s[2]=t[a],s}function S(n){let t,a,s=n[2]["d3f:attack-id"]+"",E,d,c,u,q=n[2]["rdfs:label"]+"",_,A,i;return{c(){t=m("tr"),a=m("td"),E=y(s),d=w(),c=m("td"),u=m("a"),_=y(q),i=w(),this.h()},l(g){t=v(g,"TR",{});var p=T(t);a=v(p,"TD",{});var k=T(a);E=D(k,s),k.forEach(h),d=K(p),c=v(p,"TD",{});var b=T(c);u=v(b,"A",{href:!0});var r=T(u);_=D(r,q),r.forEach(h),b.forEach(h),i=K(p),p.forEach(h),this.h()},h(){H(u,"href",A="/offensive-technique/attack/"+n[2]["d3f:attack-id"])},m(g,p){I(g,t,p),o(t,a),o(a,E),o(t,d),o(t,c),o(c,u),o(u,_),o(t,i)},p:B,d(g){g&&h(t)}}}function z(n){let t,a,s,E,d,c,u,q,_,A,i,g,p=n[0].graph.length+"",k,b=n[0].graph,r=[];for(let e=0;e<b.length;e+=1)r[e]=S(O(n,b,e));return{c(){t=m("table"),a=m("thead"),s=m("th"),E=y("ATT&CK ID"),d=w(),c=m("th"),u=y("ATT&CK Technique Name"),q=w(),_=m("tbody");for(let e=0;e<r.length;e+=1)r[e].c();A=w(),i=m("p"),g=y("total count: "),k=y(p),this.h()},l(e){t=v(e,"TABLE",{id:!0,class:!0});var f=T(t);a=v(f,"THEAD",{});var l=T(a);s=v(l,"TH",{class:!0});var C=T(s);E=D(C,"ATT&CK ID"),C.forEach(h),d=K(l),c=v(l,"TH",{});var G=T(c);u=D(G,"ATT&CK Technique Name"),G.forEach(h),l.forEach(h),q=K(f),_=v(f,"TBODY",{});var N=T(_);for(let x=0;x<r.length;x+=1)r[x].l(N);N.forEach(h),f.forEach(h),A=K(e),i=v(e,"P",{});var j=T(i);g=D(j,"total count: "),k=D(j,p),j.forEach(h),this.h()},h(){H(s,"class","stretch"),H(t,"id","mappings"),H(t,"class","table-auto")},m(e,f){I(e,t,f),o(t,a),o(a,s),o(s,E),o(a,d),o(a,c),o(c,u),o(t,q),o(t,_);for(let l=0;l<r.length;l+=1)r[l].m(_,null);I(e,A,f),I(e,i,f),o(i,g),o(i,k)},p(e,[f]){if(f&1){b=e[0].graph;let l;for(l=0;l<b.length;l+=1){const C=O(e,b,l);r[l]?r[l].p(C,f):(r[l]=S(C),r[l].c(),r[l].m(_,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=b.length}},i:B,o:B,d(e){e&&h(t),X(r,e),e&&h(A),e&&h(i)}}}async function U({params:n,fetch:t}){n.technique;const a=await t("/api/offensive-technique/all.json"),s=await a.json();return a.status===200?{props:{otechs:s}}:{status:a.status,error:new Error(s.message)}}function F(n,t,a){let{otechs:s}=t,E=new Y(s);return n.$$set=d=>{"otechs"in d&&a(1,s=d.otechs)},[E,s]}class V extends L{constructor(t){super(),P(this,t,F,z,R,{otechs:1})}}export{V as default,U as load};
