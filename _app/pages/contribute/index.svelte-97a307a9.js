import{S as le,i as re,s as ie,e as n,t as h,k as p,c as a,a as s,h as d,d as l,m as b,g as N,I as t,j as oe,X as Xt,w as ne,x as ae,b as U,y as se,q as ce,o as ue,B as fe}from"../../chunks/index-a02da30e.js";import{T as he}from"../../chunks/Title-1d23c88f.js";function Zt(v,i,f){const o=v.slice();return o[1]=i[f],o}function Jt(v,i,f){const o=v.slice();return o[1]=i[f],o}function Yt(v){let i,f,o,u,E,x,y,M,T,q,B,A,F,P,k,j=v[0].commited,D=[];for(let e=0;e<j.length;e+=1)D[e]=te(Jt(v,j,e));let C=v[0].contributors,m=[];for(let e=0;e<C.length;e+=1)m[e]=ee(Zt(v,C,e));return{c(){i=n("h2"),f=h("Commiting Contributors"),o=p(),u=n("p"),E=h("The D3FEND project team would like to thank all of the contributors who have submitted pull requests on Github."),x=p(),y=n("ul");for(let e=0;e<D.length;e+=1)D[e].c();M=p(),T=n("h2"),q=h("Contributors"),B=p(),A=n("p"),F=h(`The D3FEND project team would like to thank all of the contributors in the
      community who have provided content to grow the knowledge graph for public
      benefit.`),P=p(),k=n("ul");for(let e=0;e<m.length;e+=1)m[e].c()},l(e){i=a(e,"H2",{});var _=s(i);f=d(_,"Commiting Contributors"),_.forEach(l),o=b(e),u=a(e,"P",{});var r=s(u);E=d(r,"The D3FEND project team would like to thank all of the contributors who have submitted pull requests on Github."),r.forEach(l),x=b(e),y=a(e,"UL",{});var I=s(y);for(let L=0;L<D.length;L+=1)D[L].l(I);I.forEach(l),M=b(e),T=a(e,"H2",{});var S=s(T);q=d(S,"Contributors"),S.forEach(l),B=b(e),A=a(e,"P",{});var V=s(A);F=d(V,`The D3FEND project team would like to thank all of the contributors in the
      community who have provided content to grow the knowledge graph for public
      benefit.`),V.forEach(l),P=b(e),k=a(e,"UL",{});var O=s(k);for(let L=0;L<m.length;L+=1)m[L].l(O);O.forEach(l)},m(e,_){N(e,i,_),t(i,f),N(e,o,_),N(e,u,_),t(u,E),N(e,x,_),N(e,y,_);for(let r=0;r<D.length;r+=1)D[r].m(y,null);N(e,M,_),N(e,T,_),t(T,q),N(e,B,_),N(e,A,_),t(A,F),N(e,P,_),N(e,k,_);for(let r=0;r<m.length;r+=1)m[r].m(k,null)},p(e,_){if(_&1){j=e[0].commited;let r;for(r=0;r<j.length;r+=1){const I=Jt(e,j,r);D[r]?D[r].p(I,_):(D[r]=te(I),D[r].c(),D[r].m(y,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=j.length}if(_&1){C=e[0].contributors;let r;for(r=0;r<C.length;r+=1){const I=Zt(e,C,r);m[r]?m[r].p(I,_):(m[r]=ee(I),m[r].c(),m[r].m(k,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=C.length}},d(e){e&&l(i),e&&l(o),e&&l(u),e&&l(x),e&&l(y),Xt(D,e),e&&l(M),e&&l(T),e&&l(B),e&&l(A),e&&l(P),e&&l(k),Xt(m,e)}}}function te(v){let i,f=v[1]+"",o;return{c(){i=n("li"),o=h(f)},l(u){i=a(u,"LI",{});var E=s(i);o=d(E,f),E.forEach(l)},m(u,E){N(u,i,E),t(i,o)},p(u,E){E&1&&f!==(f=u[1]+"")&&oe(o,f)},d(u){u&&l(i)}}}function ee(v){let i,f=v[1]+"",o;return{c(){i=n("li"),o=h(f)},l(u){i=a(u,"LI",{});var E=s(i);o=d(E,f),E.forEach(l)},m(u,E){N(u,i,E),t(i,o)},p(u,E){E&1&&f!==(f=u[1]+"")&&oe(o,f)},d(u){u&&l(i)}}}function de(v){let i,f,o,u,E,x,y,M,T,q,B,A,F,P,k,j,D,C,m,e,_,r,I,S,V,O,L,at,st,G,ct,R,ut,ft,ht,$,J,dt,mt,Y,_t,pt,tt,bt,Et,et,vt,Dt,H,z,W,gt,wt,K,Q,Nt,kt,yt,Ft,Ct,Lt,lt,ot,It,rt;i=new he({props:{title:"Contribute"}});let w=v[0]&&Yt(v);return{c(){ne(i.$$.fragment),f=p(),o=n("section"),u=n("h1"),E=h("Contribute to D3FEND"),x=p(),y=n("p"),M=h(`D3FEND is an early stage initiative and needs community input to grow. We
    welcome any feedback or contributions to the project.`),T=p(),q=n("p"),B=h("There are numerous ways to connect with the D3FEND team or submit contributions or feedback."),A=p(),F=n("ul"),P=n("li"),k=n("a"),j=h("D3FEND Github"),D=p(),C=n("li"),m=n("a"),e=h("D3FEND Slack"),_=p(),r=n("li"),I=h("Email "),S=n("a"),V=h("d3fend@mitre.org"),O=p(),L=n("h2"),at=h("Contribution Processes:"),st=p(),G=n("p"),ct=h("Are you interested in contributing to the "),R=n("a"),ut=h("next version of D3FEND"),ft=h("?"),ht=p(),$=n("ul"),J=n("li"),dt=h("Is there a defensive technique or digital artifact you want added?"),mt=p(),Y=n("li"),_t=h("Are there missing or incorrect relationships?"),pt=p(),tt=n("li"),bt=h("Does a knowledgebase article seem incomplete, dated, or inaccurate?"),Et=p(),et=n("h3"),vt=h("Content Submission Forms"),Dt=p(),H=n("ul"),z=n("li"),W=n("a"),gt=h("New Technique Proposal Form"),wt=p(),K=n("li"),Q=n("a"),Nt=h("Contributing to the D3FEND Ontology"),kt=p(),yt=n("br"),Ft=p(),Ct=n("br"),Lt=p(),w&&w.c(),lt=p(),ot=n("p"),It=h("Thank you!"),this.h()},l(g){ae(i.$$.fragment,g),f=b(g),o=a(g,"SECTION",{class:!0});var c=s(o);u=a(c,"H1",{});var At=s(u);E=d(At,"Contribute to D3FEND"),At.forEach(l),x=b(c),y=a(c,"P",{});var Pt=s(y);M=d(Pt,`D3FEND is an early stage initiative and needs community input to grow. We
    welcome any feedback or contributions to the project.`),Pt.forEach(l),T=b(c),q=a(c,"P",{});var jt=s(q);B=d(jt,"There are numerous ways to connect with the D3FEND team or submit contributions or feedback."),jt.forEach(l),A=b(c),F=a(c,"UL",{});var X=s(F);P=a(X,"LI",{});var Ut=s(P);k=a(Ut,"A",{href:!0});var qt=s(k);j=d(qt,"D3FEND Github"),qt.forEach(l),Ut.forEach(l),D=b(X),C=a(X,"LI",{class:!0});var St=s(C);m=a(St,"A",{href:!0});var $t=s(m);e=d($t,"D3FEND Slack"),$t.forEach(l),St.forEach(l),_=b(X),r=a(X,"LI",{});var Tt=s(r);I=d(Tt,"Email "),S=a(Tt,"A",{href:!0});var xt=s(S);V=d(xt,"d3fend@mitre.org"),xt.forEach(l),Tt.forEach(l),X.forEach(l),O=b(c),L=a(c,"H2",{});var Mt=s(L);at=d(Mt,"Contribution Processes:"),Mt.forEach(l),st=b(c),G=a(c,"P",{});var it=s(G);ct=d(it,"Are you interested in contributing to the "),R=a(it,"A",{href:!0});var Bt=s(R);ut=d(Bt,"next version of D3FEND"),Bt.forEach(l),ft=d(it,"?"),it.forEach(l),ht=b(c),$=a(c,"UL",{});var Z=s($);J=a(Z,"LI",{});var Gt=s(J);dt=d(Gt,"Is there a defensive technique or digital artifact you want added?"),Gt.forEach(l),mt=b(Z),Y=a(Z,"LI",{});var Ht=s(Y);_t=d(Ht,"Are there missing or incorrect relationships?"),Ht.forEach(l),pt=b(Z),tt=a(Z,"LI",{});var Vt=s(tt);bt=d(Vt,"Does a knowledgebase article seem incomplete, dated, or inaccurate?"),Vt.forEach(l),Z.forEach(l),Et=b(c),et=a(c,"H3",{});var Ot=s(et);vt=d(Ot,"Content Submission Forms"),Ot.forEach(l),Dt=b(c),H=a(c,"UL",{});var nt=s(H);z=a(nt,"LI",{class:!0});var Rt=s(z);W=a(Rt,"A",{href:!0});var zt=s(W);gt=d(zt,"New Technique Proposal Form"),zt.forEach(l),Rt.forEach(l),wt=b(nt),K=a(nt,"LI",{class:!0});var Wt=s(K);Q=a(Wt,"A",{href:!0});var Kt=s(Q);Nt=d(Kt,"Contributing to the D3FEND Ontology"),Kt.forEach(l),Wt.forEach(l),nt.forEach(l),kt=b(c),yt=a(c,"BR",{}),Ft=b(c),Ct=a(c,"BR",{}),Lt=b(c),w&&w.l(c),lt=b(c),ot=a(c,"P",{});var Qt=s(ot);It=d(Qt,"Thank you!"),Qt.forEach(l),c.forEach(l),this.h()},h(){U(k,"href","https://github.com/d3fend"),U(m,"href","https://join.slack.com/t/mitre-d3fend/shared_invite/zt-108eicnoj-fpZPD9EFNtuMNDVrlRWQlA"),U(C,"class","glow"),U(S,"href","mailto:d3fend@mitre.org"),U(R,"href","https://next.d3fend.mitre.org"),U(W,"href","https://forms.office.com/Pages/ResponsePage.aspx?id=SNwgxlAdUkmLOd9NVNdNgnMBKyUeqgtLlzLvGbM9fblUMzNNTFMzVlA5MlpHWDlDUEM5VjBVN0g3Vy4u"),U(z,"class","glow"),U(Q,"href","https://github.com/d3fend/d3fend-ontology/blob/develop/CONTRIBUTING.md"),U(K,"class","glow"),U(o,"class","content")},m(g,c){se(i,g,c),N(g,f,c),N(g,o,c),t(o,u),t(u,E),t(o,x),t(o,y),t(y,M),t(o,T),t(o,q),t(q,B),t(o,A),t(o,F),t(F,P),t(P,k),t(k,j),t(F,D),t(F,C),t(C,m),t(m,e),t(F,_),t(F,r),t(r,I),t(r,S),t(S,V),t(o,O),t(o,L),t(L,at),t(o,st),t(o,G),t(G,ct),t(G,R),t(R,ut),t(G,ft),t(o,ht),t(o,$),t($,J),t(J,dt),t($,mt),t($,Y),t(Y,_t),t($,pt),t($,tt),t(tt,bt),t(o,Et),t(o,et),t(et,vt),t(o,Dt),t(o,H),t(H,z),t(z,W),t(W,gt),t(H,wt),t(H,K),t(K,Q),t(Q,Nt),t(o,kt),t(o,yt),t(o,Ft),t(o,Ct),t(o,Lt),w&&w.m(o,null),t(o,lt),t(o,ot),t(ot,It),rt=!0},p(g,[c]){g[0]?w?w.p(g,c):(w=Yt(g),w.c(),w.m(o,lt)):w&&(w.d(1),w=null)},i(g){rt||(ce(i.$$.fragment,g),rt=!0)},o(g){ue(i.$$.fragment,g),rt=!1},d(g){fe(i,g),g&&l(f),g&&l(o),w&&w.d()}}}async function be({fetch:v}){const i=await v("/contribute/contributors.json"),f=await i.json();return i.status===200?{props:{contributors:f}}:{status:i.status,error:new Error(f.message)}}function me(v,i,f){let{contributors:o}=i;return v.$$set=u=>{"contributors"in u&&f(0,o=u.contributors)},[o]}class Ee extends le{constructor(i){super(),re(this,i,me,de,ie,{contributors:0})}}export{Ee as default,be as load};