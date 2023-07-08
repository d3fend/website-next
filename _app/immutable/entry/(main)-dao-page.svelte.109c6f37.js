import{S as Ae,b as Se,s as Ee,y as N,j as d,f as n,h as z,z as O,p as m,k as l,l as i,m as H,o as r,G as f,Q as Te,A as C,q as I,v as t,t as P,e as L,B as q,n as De}from"../chunks/index.43e07aca.js";import{B as re}from"../chunks/BlockTree.c9522950.js";import{A as Ne}from"../chunks/Alert.5292fb99.js";import{T as Oe}from"../chunks/Title.0ec6725c.js";import{L as Ce}from"../chunks/Lookup-DAO.999034fd.js";import{G as Pe}from"../chunks/lib.576aa631.js";import"../chunks/navigation.96107ad8.js";function Le(h){let o,g;return{c(){o=n("small"),g=z("This page is experimental and will improve in future releases.")},l(a){o=l(a,"SMALL",{});var c=i(o);g=H(c,"This page is experimental and will improve in future releases."),c.forEach(r)},m(a,c){I(a,o,c),t(o,g)},p:De,d(a){a&&r(o)}}}function qe(h){let o,g,a,c,G,oe,E,ve,ne,F,le,ie,u,X,T,B,D,$,Y,p,b,M,fe,ce,v,pe,k,V,de,me,y,he,w,j,ge,_e,x,ue,A,Q,$e,be,S,Z;return o=new Oe({props:{title:"Digital Artifact Ontology"}}),u=new Ne({props:{$$slots:{default:[Le]},$$scope:{ctx:h}}}),$=new Ce({props:{da_graph:h[0].da_graph}}),v=new re({props:{root_node:"d3f:DigitalArtifact",root_node_key:"@id",graph:h[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;",max_depth:"1"}}),y=new re({props:{root_node:"d3f:File",root_node_key:"@id",graph:h[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),x=new re({props:{root_node:"d3f:NetworkTraffic",root_node_key:"@id",graph:h[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),S=new re({props:{root_node:"d3f:Software",root_node_key:"@id",graph:h[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),{c(){N(o.$$.fragment),g=d(),a=n("section"),c=n("h1"),G=z("Digital Artifact Ontology"),oe=d(),E=n("img"),ne=d(),F=n("p"),le=z(`This page renders interesting portions of the Digital Artifact Ontology, but
    not the whole thing. Some concepts have no direct relationships specified,
    sometimes they are inferred through parent classes. Thus, when you click on
    a more detailed view, you may not see direct relationships to offensive or
    defensive techniques.`),ie=d(),N(u.$$.fragment),X=d(),T=n("section"),B=n("div"),D=n("span"),N($.$$.fragment),Y=d(),p=n("div"),b=n("span"),M=n("h2"),fe=z("Top-Level Artifacts"),ce=d(),N(v.$$.fragment),pe=d(),k=n("span"),V=n("h2"),de=z("Files"),me=d(),N(y.$$.fragment),he=d(),w=n("span"),j=n("h2"),ge=z("Network Traffic"),_e=d(),N(x.$$.fragment),ue=d(),A=n("span"),Q=n("h2"),$e=z("Software"),be=d(),N(S.$$.fragment),this.h()},l(e){O(o.$$.fragment,e),g=m(e),a=l(e,"SECTION",{class:!0});var s=i(a);c=l(s,"H1",{class:!0});var J=i(c);G=H(J,"Digital Artifact Ontology"),J.forEach(r),oe=m(s),E=l(s,"IMG",{alt:!0,src:!0,class:!0}),ne=m(s),F=l(s,"P",{});var K=i(F);le=H(K,`This page renders interesting portions of the Digital Artifact Ontology, but
    not the whole thing. Some concepts have no direct relationships specified,
    sometimes they are inferred through parent classes. Thus, when you click on
    a more detailed view, you may not see direct relationships to offensive or
    defensive techniques.`),K.forEach(r),ie=m(s),O(u.$$.fragment,s),s.forEach(r),X=m(e),T=l(e,"SECTION",{class:!0});var R=i(T);B=l(R,"DIV",{class:!0});var U=i(B);D=l(U,"SPAN",{id:!0,class:!0});var W=i(D);O($.$$.fragment,W),W.forEach(r),U.forEach(r),R.forEach(r),Y=m(e),p=l(e,"DIV",{id:!0,class:!0});var _=i(p);b=l(_,"SPAN",{class:!0});var ee=i(b);M=l(ee,"H2",{});var ke=i(M);fe=H(ke,"Top-Level Artifacts"),ke.forEach(r),ce=m(ee),O(v.$$.fragment,ee),ee.forEach(r),pe=m(_),k=l(_,"SPAN",{class:!0});var te=i(k);V=l(te,"H2",{});var ye=i(V);de=H(ye,"Files"),ye.forEach(r),me=m(te),O(y.$$.fragment,te),te.forEach(r),he=m(_),w=l(_,"SPAN",{class:!0});var ae=i(w);j=l(ae,"H2",{});var we=i(j);ge=H(we,"Network Traffic"),we.forEach(r),_e=m(ae),O(x.$$.fragment,ae),ae.forEach(r),ue=m(_),A=l(_,"SPAN",{class:!0});var se=i(A);Q=l(se,"H2",{});var xe=i(Q);$e=H(xe,"Software"),xe.forEach(r),be=m(se),O(S.$$.fragment,se),se.forEach(r),_.forEach(r),this.h()},h(){f(c,"class","text-center"),f(E,"alt","Digital Artifact Ontology Overview"),Te(E.src,ve="/img/attack-dao-defend.png")||f(E,"src",ve),f(E,"class","svelte-1bl82ra"),f(a,"class","content"),f(D,"id","lookup_container"),f(D,"class","text-center"),f(B,"class","card"),f(T,"class","content"),f(b,"class","flex-column flex-column-max-content card"),f(k,"class","flex-column flex-column-max-content card"),f(w,"class","flex-column flex-column-max-content card"),f(A,"class","flex-column flex-column-max-content card"),f(p,"id","browser"),f(p,"class","flex flex-start content center svelte-1bl82ra")},m(e,s){C(o,e,s),I(e,g,s),I(e,a,s),t(a,c),t(c,G),t(a,oe),t(a,E),t(a,ne),t(a,F),t(F,le),t(a,ie),C(u,a,null),I(e,X,s),I(e,T,s),t(T,B),t(B,D),C($,D,null),I(e,Y,s),I(e,p,s),t(p,b),t(b,M),t(M,fe),t(b,ce),C(v,b,null),t(p,pe),t(p,k),t(k,V),t(V,de),t(k,me),C(y,k,null),t(p,he),t(p,w),t(w,j),t(j,ge),t(w,_e),C(x,w,null),t(p,ue),t(p,A),t(A,Q),t(Q,$e),t(A,be),C(S,A,null),Z=!0},p(e,[s]){const J={};s&16&&(J.$$scope={dirty:s,ctx:e}),u.$set(J);const K={};s&1&&(K.da_graph=e[0].da_graph),$.$set(K);const R={};s&2&&(R.graph=e[1]),v.$set(R);const U={};s&2&&(U.graph=e[1]),y.$set(U);const W={};s&2&&(W.graph=e[1]),x.$set(W);const _={};s&2&&(_.graph=e[1]),S.$set(_)},i(e){Z||(P(o.$$.fragment,e),P(u.$$.fragment,e),P($.$$.fragment,e),P(v.$$.fragment,e),P(y.$$.fragment,e),P(x.$$.fragment,e),P(S.$$.fragment,e),Z=!0)},o(e){L(o.$$.fragment,e),L(u.$$.fragment,e),L($.$$.fragment,e),L(v.$$.fragment,e),L(y.$$.fragment,e),L(x.$$.fragment,e),L(S.$$.fragment,e),Z=!1},d(e){q(o,e),e&&r(g),e&&r(a),q(u),e&&r(X),e&&r(T),q($),e&&r(Y),e&&r(p),q(v),q(y),q(x),q(S)}}}function ze(h,o,g){let{data:a}=o,c;return h.$$set=G=>{"data"in G&&g(0,a=G.data)},h.$$.update=()=>{h.$$.dirty&1&&(a.da_graph["@graph"],g(1,c=new Pe(a.da_graph)))},[a,c]}class je extends Ae{constructor(o){super(),Se(this,o,ze,qe,Ee,{data:0})}}export{je as default};