import{S as V,i as Y,s as j,k as m,q as A,a as q,l as g,m as v,r as H,h,c as x,n as G,b as I,H as r,B as S,V as z}from"../../../../chunks/index-9e687d76.js";import{G as F}from"../../../../chunks/lib-470e6689.js";function O(i,t,l){const s=i.slice();return s[2]=t[l],s}function R(i){let t,l,s=i[2]["@id"]+"",E,_,c,u,D=i[2]["rdfs:label"]+"",p,T;return{c(){t=m("tr"),l=m("td"),E=A(s),_=q(),c=m("td"),u=m("a"),p=A(D),T=q(),this.h()},l(n){t=g(n,"TR",{});var d=v(t);l=g(d,"TD",{});var k=v(l);E=H(k,s),k.forEach(h),_=x(d),c=g(d,"TD",{});var y=v(c);u=g(y,"A",{href:!0});var b=v(u);p=H(b,D),b.forEach(h),y.forEach(h),T=x(d),d.forEach(h),this.h()},h(){G(u,"href","/dao/artifact/"+i[2]["@id"])},m(n,d){I(n,t,d),r(t,l),r(l,E),r(t,_),r(t,c),r(c,u),r(u,p),r(t,T)},p:S,d(n){n&&h(t)}}}function J(i){var w;let t,l,s,E,_,c,u,D,p,T,n,d,k=((w=i[0].graph)==null?void 0:w.length)+"",y,b=i[0].graph,o=[];for(let e=0;e<b.length;e+=1)o[e]=R(O(i,b,e));return{c(){t=m("table"),l=m("thead"),s=m("th"),E=A("Identifier"),_=q(),c=m("th"),u=A("Digital Artifact Name"),D=q(),p=m("tbody");for(let e=0;e<o.length;e+=1)o[e].c();T=q(),n=m("p"),d=A("total count: "),y=A(k),this.h()},l(e){t=g(e,"TABLE",{id:!0,class:!0});var f=v(t);l=g(f,"THEAD",{});var a=v(l);s=g(a,"TH",{class:!0});var B=v(s);E=H(B,"Identifier"),B.forEach(h),_=x(a),c=g(a,"TH",{});var C=v(c);u=H(C,"Digital Artifact Name"),C.forEach(h),a.forEach(h),D=x(f),p=g(f,"TBODY",{});var L=v(p);for(let P=0;P<o.length;P+=1)o[P].l(L);L.forEach(h),f.forEach(h),T=x(e),n=g(e,"P",{});var N=v(n);d=H(N,"total count: "),y=H(N,k),N.forEach(h),this.h()},h(){G(s,"class","stretch"),G(t,"id","mappings"),G(t,"class","table-auto")},m(e,f){I(e,t,f),r(t,l),r(l,s),r(s,E),r(l,_),r(l,c),r(c,u),r(t,D),r(t,p);for(let a=0;a<o.length;a+=1)o[a].m(p,null);I(e,T,f),I(e,n,f),r(n,d),r(n,y)},p(e,[f]){if(f&1){b=e[0].graph;let a;for(a=0;a<b.length;a+=1){const B=O(e,b,a);o[a]?o[a].p(B,f):(o[a]=R(B),o[a].c(),o[a].m(p,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=b.length}},i:S,o:S,d(e){e&&h(t),z(o,e),e&&h(T),e&&h(n)}}}function K(i,t,l){let{data:s}=t,E=new F(s.da_graph);return i.$$set=_=>{"data"in _&&l(1,s=_.data)},[E,s]}class U extends V{constructor(t){super(),Y(this,t,K,J,j,{data:1})}}export{U as default};