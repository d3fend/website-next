import{S as O,i as R,s as V,k as m,q as C,a as H,l as T,m as v,r as D,h as n,c as K,n as x,b as B,H as r,C as N,V as Y}from"../chunks/index.38e6a1b1.js";import{G as j}from"../chunks/lib.1620f930.js";function w(c,t,l){const s=c.slice();return s[2]=t[l],s}function L(c){let t,l,s=c[2]["d3f:attack-id"]+"",g,_,i,u,A=c[2]["rdfs:label"]+"",p,b;return{c(){t=m("tr"),l=m("td"),g=C(s),_=H(),i=m("td"),u=m("a"),p=C(A),b=H(),this.h()},l(o){t=T(o,"TR",{});var d=v(t);l=T(d,"TD",{});var q=v(l);g=D(q,s),q.forEach(n),_=K(d),i=T(d,"TD",{});var k=v(i);u=T(k,"A",{href:!0});var E=v(u);p=D(E,A),E.forEach(n),k.forEach(n),b=K(d),d.forEach(n),this.h()},h(){x(u,"href","/offensive-technique/attack/"+c[2]["d3f:attack-id"])},m(o,d){B(o,t,d),r(t,l),r(l,g),r(t,_),r(t,i),r(i,u),r(u,p),r(t,b)},p:N,d(o){o&&n(t)}}}function z(c){let t,l,s,g,_,i,u,A,p,b,o,d,q=c[0].graph.length+"",k,E=c[0].graph,h=[];for(let e=0;e<E.length;e+=1)h[e]=L(w(c,E,e));return{c(){t=m("table"),l=m("thead"),s=m("th"),g=C("ATT&CK ID"),_=H(),i=m("th"),u=C("ATT&CK Technique Name"),A=H(),p=m("tbody");for(let e=0;e<h.length;e+=1)h[e].c();b=H(),o=m("p"),d=C("total count: "),k=C(q),this.h()},l(e){t=T(e,"TABLE",{id:!0,class:!0});var f=v(t);l=T(f,"THEAD",{});var a=v(l);s=T(a,"TH",{class:!0});var y=v(s);g=D(y,"ATT&CK ID"),y.forEach(n),_=K(a),i=T(a,"TH",{});var P=v(i);u=D(P,"ATT&CK Technique Name"),P.forEach(n),a.forEach(n),A=K(f),p=T(f,"TBODY",{});var S=v(p);for(let I=0;I<h.length;I+=1)h[I].l(S);S.forEach(n),f.forEach(n),b=K(e),o=T(e,"P",{});var G=v(o);d=D(G,"total count: "),k=D(G,q),G.forEach(n),this.h()},h(){x(s,"class","stretch"),x(t,"id","mappings"),x(t,"class","table-auto")},m(e,f){B(e,t,f),r(t,l),r(l,s),r(s,g),r(l,_),r(l,i),r(i,u),r(t,A),r(t,p);for(let a=0;a<h.length;a+=1)h[a].m(p,null);B(e,b,f),B(e,o,f),r(o,d),r(o,k)},p(e,[f]){if(f&1){E=e[0].graph;let a;for(a=0;a<E.length;a+=1){const y=w(e,E,a);h[a]?h[a].p(y,f):(h[a]=L(y),h[a].c(),h[a].m(p,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=E.length}},i:N,o:N,d(e){e&&n(t),Y(h,e),e&&n(b),e&&n(o)}}}function F(c,t,l){let{data:s}=t,g=new j(s.otechs);return c.$$set=_=>{"data"in _&&l(1,s=_.data)},[g,s]}class Q extends O{constructor(t){super(),R(this,t,F,z,V,{data:1})}}export{Q as default};