import{S as xe,b as He,s as Ie,j as T,f as h,h as j,F as qe,o as r,p as D,k as d,l as i,m as k,G as g,q as U,v as e,n as Ee,I as me,x as Ae,w as W}from"../chunks/index.43e07aca.js";import{p as Be}from"../chunks/stores.0845909a.js";function Te(o,l,n){const c=o.slice();return c[3]=l[n],c}function je(o,l,n){const c=o.slice();return c[3]=l[n],c}function De(o){let l,n,c=o[3].subject.value+"",_,q,f,x=o[3].predicate.value+"",b,p,v,H=o[3].object.value+"",A,I;return{c(){l=h("tr"),n=h("td"),_=j(c),q=T(),f=h("td"),b=j(x),p=T(),v=h("td"),A=j(H),I=T(),this.h()},l(u){l=d(u,"TR",{});var a=i(l);n=d(a,"TD",{class:!0});var B=i(n);_=k(B,c),B.forEach(r),q=D(a),f=d(a,"TD",{class:!0});var O=i(f);b=k(O,x),O.forEach(r),p=D(a),v=d(a,"TD",{class:!0});var y=i(v);A=k(y,H),y.forEach(r),I=D(a),a.forEach(r),this.h()},h(){g(n,"class","svelte-gsxars"),g(f,"class","svelte-gsxars"),g(v,"class","svelte-gsxars")},m(u,a){U(u,l,a),e(l,n),e(n,_),e(l,q),e(l,f),e(f,b),e(l,p),e(l,v),e(v,A),e(l,I)},p(u,a){a&1&&c!==(c=u[3].subject.value+"")&&W(_,c),a&1&&x!==(x=u[3].predicate.value+"")&&W(b,x),a&1&&H!==(H=u[3].object.value+"")&&W(A,H)},d(u){u&&r(l)}}}function ke(o){let l,n,c=o[3].subject.value+"",_,q,f,x=o[3].predicate.value+"",b,p,v,H=o[3].object.value+"",A,I;return{c(){l=h("tr"),n=h("td"),_=j(c),q=T(),f=h("td"),b=j(x),p=T(),v=h("td"),A=j(H),I=T(),this.h()},l(u){l=d(u,"TR",{});var a=i(l);n=d(a,"TD",{class:!0});var B=i(n);_=k(B,c),B.forEach(r),q=D(a),f=d(a,"TD",{class:!0});var O=i(f);b=k(O,x),O.forEach(r),p=D(a),v=d(a,"TD",{class:!0});var y=i(v);A=k(y,H),y.forEach(r),I=D(a),a.forEach(r),this.h()},h(){g(n,"class","svelte-gsxars"),g(f,"class","svelte-gsxars"),g(v,"class","svelte-gsxars")},m(u,a){U(u,l,a),e(l,n),e(n,_),e(l,q),e(l,f),e(f,b),e(l,p),e(l,v),e(v,A),e(l,I)},p(u,a){a&1&&c!==(c=u[3].subject.value+"")&&W(_,c),a&1&&x!==(x=u[3].predicate.value+"")&&W(b,x),a&1&&H!==(H=u[3].object.value+"")&&W(A,H)},d(u){u&&r(l)}}}function Le(o){let l,n,c,_,q,f,x,b,p,v,H,A,I,u,a,B,O,y,F,X,w,Y,te,se,le,V,R,G,ae,re,P,ce,oe,z,ne,he,J;document.title=l="Description of "+o[1];let K=o[0].sparql_result.results.bindings,E=[];for(let t=0;t<K.length;t+=1)E[t]=De(je(o,K,t));let M=o[0].inbound_links.results.bindings,m=[];for(let t=0;t<M.length;t+=1)m[t]=ke(Te(o,M,t));return{c(){n=T(),c=h("div"),_=h("h1"),q=j("Outbound Links for: "),f=j(o[1]),x=T(),b=h("table"),p=h("thead"),v=h("th"),H=j("subject"),A=T(),I=h("th"),u=j("predicate"),a=T(),B=h("th"),O=j("object"),y=T(),F=h("tbody");for(let t=0;t<E.length;t+=1)E[t].c();X=T(),w=h("div"),Y=h("h1"),te=j("Inbound links for: "),se=j(o[1]),le=T(),V=h("table"),R=h("thead"),G=h("th"),ae=j("subject"),re=T(),P=h("th"),ce=j("predicate"),oe=T(),z=h("th"),ne=j("object"),he=T(),J=h("tbody");for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){qe("svelte-1kw8p1x",document.head).forEach(r),n=D(t),c=d(t,"DIV",{class:!0});var s=i(c);_=d(s,"H1",{class:!0});var S=i(_);q=k(S,"Outbound Links for: "),f=k(S,o[1]),S.forEach(r),x=D(s),b=d(s,"TABLE",{class:!0});var Z=i(b);p=d(Z,"THEAD",{});var N=i(p);v=d(N,"TH",{class:!0});var ie=i(v);H=k(ie,"subject"),ie.forEach(r),A=D(N),I=d(N,"TH",{class:!0});var ue=i(I);u=k(ue,"predicate"),ue.forEach(r),a=D(N),B=d(N,"TH",{class:!0});var fe=i(B);O=k(fe,"object"),fe.forEach(r),N.forEach(r),y=D(Z),F=d(Z,"TBODY",{});var _e=i(F);for(let C=0;C<E.length;C+=1)E[C].l(_e);_e.forEach(r),Z.forEach(r),s.forEach(r),X=D(t),w=d(t,"DIV",{class:!0});var $=i(w);Y=d($,"H1",{class:!0});var de=i(Y);te=k(de,"Inbound links for: "),se=k(de,o[1]),de.forEach(r),le=D($),V=d($,"TABLE",{class:!0});var ee=i(V);R=d(ee,"THEAD",{});var Q=i(R);G=d(Q,"TH",{class:!0});var ve=i(G);ae=k(ve,"subject"),ve.forEach(r),re=D(Q),P=d(Q,"TH",{class:!0});var be=i(P);ce=k(be,"predicate"),be.forEach(r),oe=D(Q),z=d(Q,"TH",{class:!0});var ge=i(z);ne=k(ge,"object"),ge.forEach(r),Q.forEach(r),he=D(ee),J=d(ee,"TBODY",{});var pe=i(J);for(let C=0;C<m.length;C+=1)m[C].l(pe);pe.forEach(r),ee.forEach(r),$.forEach(r),this.h()},h(){g(_,"class","text-center"),g(v,"class","svelte-gsxars"),g(I,"class","svelte-gsxars"),g(B,"class","svelte-gsxars"),g(b,"class","font-small bg-light center svelte-gsxars"),g(c,"class","content svelte-gsxars"),g(Y,"class","text-center"),g(G,"class","svelte-gsxars"),g(P,"class","svelte-gsxars"),g(z,"class","svelte-gsxars"),g(V,"class","font-small bg-light center svelte-gsxars"),g(w,"class","content svelte-gsxars")},m(t,L){U(t,n,L),U(t,c,L),e(c,_),e(_,q),e(_,f),e(c,x),e(c,b),e(b,p),e(p,v),e(v,H),e(p,A),e(p,I),e(I,u),e(p,a),e(p,B),e(B,O),e(b,y),e(b,F);for(let s=0;s<E.length;s+=1)E[s]&&E[s].m(F,null);U(t,X,L),U(t,w,L),e(w,Y),e(Y,te),e(Y,se),e(w,le),e(w,V),e(V,R),e(R,G),e(G,ae),e(R,re),e(R,P),e(P,ce),e(R,oe),e(R,z),e(z,ne),e(V,he),e(V,J);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(J,null)},p(t,[L]){if(L&2&&l!==(l="Description of "+t[1])&&(document.title=l),L&1){K=t[0].sparql_result.results.bindings;let s;for(s=0;s<K.length;s+=1){const S=je(t,K,s);E[s]?E[s].p(S,L):(E[s]=De(S),E[s].c(),E[s].m(F,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=K.length}if(L&1){M=t[0].inbound_links.results.bindings;let s;for(s=0;s<M.length;s+=1){const S=Te(t,M,s);m[s]?m[s].p(S,L):(m[s]=ke(S),m[s].c(),m[s].m(J,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=M.length}},i:Ee,o:Ee,d(t){t&&r(n),t&&r(c),me(E,t),t&&r(X),t&&r(w),me(m,t)}}}function Oe(o,l,n){let c;Ae(o,Be,f=>n(2,c=f));let{data:_}=l,q=c.params.slug;return o.$$set=f=>{"data"in f&&n(0,_=f.data)},[_,q]}class Re extends xe{constructor(l){super(),He(this,l,Oe,Le,Ie,{data:0})}}export{Re as default};