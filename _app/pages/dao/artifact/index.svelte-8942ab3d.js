import{S as P,i as R,s as X,e as m,t as k,k as j,c as v,a as g,h as H,d as n,m as x,b as B,g as G,I as s,E as q,X as Y}from"../../../chunks/index-a02da30e.js";import"../../../chunks/config-6e32f34b.js";import{G as z}from"../../../chunks/lib-c1de3c87.js";import"../../../chunks/marked.esm-8ab30116.js";function L(o,t,a){const i=o.slice();return i[2]=t[a],i}function O(o){let t,a,i=o[2]["@id"]+"",E,d,c,_,A=o[2]["rdfs:label"]+"",u,D,h;return{c(){t=m("tr"),a=m("td"),E=k(i),d=j(),c=m("td"),_=m("a"),u=k(A),h=j(),this.h()},l(b){t=v(b,"TR",{});var p=g(t);a=v(p,"TD",{});var y=g(a);E=H(y,i),y.forEach(n),d=x(p),c=v(p,"TD",{});var T=g(c);_=v(T,"A",{href:!0});var r=g(_);u=H(r,A),r.forEach(n),T.forEach(n),h=x(p),p.forEach(n),this.h()},h(){B(_,"href",D="/dao/artifact/"+o[2]["@id"])},m(b,p){G(b,t,p),s(t,a),s(a,E),s(t,d),s(t,c),s(c,_),s(_,u),s(t,h)},p:q,d(b){b&&n(t)}}}function F(o){let t,a,i,E,d,c,_,A,u,D,h,b,p=o[0].graph.length+"",y,T=o[0].graph,r=[];for(let e=0;e<T.length;e+=1)r[e]=O(L(o,T,e));return{c(){t=m("table"),a=m("thead"),i=m("th"),E=k("Identifier"),d=j(),c=m("th"),_=k("Digital Artifact Name"),A=j(),u=m("tbody");for(let e=0;e<r.length;e+=1)r[e].c();D=j(),h=m("p"),b=k("total count: "),y=k(p),this.h()},l(e){t=v(e,"TABLE",{id:!0,class:!0});var f=g(t);a=v(f,"THEAD",{});var l=g(a);i=v(l,"TH",{class:!0});var I=g(i);E=H(I,"Identifier"),I.forEach(n),d=x(l),c=v(l,"TH",{});var w=g(c);_=H(w,"Digital Artifact Name"),w.forEach(n),l.forEach(n),A=x(f),u=v(f,"TBODY",{});var C=g(u);for(let S=0;S<r.length;S+=1)r[S].l(C);C.forEach(n),f.forEach(n),D=x(e),h=v(e,"P",{});var N=g(h);b=H(N,"total count: "),y=H(N,p),N.forEach(n),this.h()},h(){B(i,"class","stretch"),B(t,"id","mappings"),B(t,"class","table-auto")},m(e,f){G(e,t,f),s(t,a),s(a,i),s(i,E),s(a,d),s(a,c),s(c,_),s(t,A),s(t,u);for(let l=0;l<r.length;l+=1)r[l].m(u,null);G(e,D,f),G(e,h,f),s(h,b),s(h,y)},p(e,[f]){if(f&1){T=e[0].graph;let l;for(l=0;l<T.length;l+=1){const I=L(e,T,l);r[l]?r[l].p(I,f):(r[l]=O(I),r[l].c(),r[l].m(u,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=T.length}},i:q,o:q,d(e){e&&n(t),Y(r,e),e&&n(D),e&&n(h)}}}function V({fetch:o}){return o("/api/dao/artifacts.json").then(a=>a.json()).then(a=>({props:{artifacts:a}}))}function J(o,t,a){let{artifacts:i}=t,E=new z(i);return o.$$set=d=>{"artifacts"in d&&a(1,i=d.artifacts)},[E,i]}class W extends P{constructor(t){super(),R(this,t,J,F,X,{artifacts:1})}}export{W as default,V as load};
