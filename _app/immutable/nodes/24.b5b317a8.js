import{d as $e}from"../chunks/dao-artifacts.816d0d74.js";import{s as be,a as d,f as r,c as p,g as o,h as g,F as H,d as l,j as i,I as ve,i as q,x as s,y as xe}from"../chunks/scheduler.50831561.js";import{S as ke,i as ye,b as D,d as P,m as z,a as I,t as L,e as j}from"../chunks/index.24431cc3.js";import{B as te}from"../chunks/BlockTree.f9b2587b.js";import{A as Ce}from"../chunks/Alert.d9b74077.js";import{T as Se}from"../chunks/Title.28d88b77.js";import{L as we}from"../chunks/Lookup-DAO.dc7fde75.js";import{G as Ae}from"../chunks/lib.81f27188.js";import"../chunks/paths.c4f7120e.js";function Te(f){return $e(f)}const Ge=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function Ee(f){let n,u="This page is experimental and will improve in future releases.";return{c(){n=r("small"),n.textContent=u},l(t){n=o(t,"SMALL",{"data-svelte-h":!0}),H(n)!=="svelte-1xftvma"&&(n.textContent=u)},m(t,m){q(t,n,m)},p:xe,d(t){t&&l(n)}}}function Oe(f){let n,u,t,m,K="Digital Artifact Ontology",ae,A,pe,se,F,me=`This page renders interesting portions of the Digital Artifact Ontology, but
    not the whole thing. Some concepts have no direct relationships specified,
    sometimes they are inferred through parent classes. Thus, when you click on
    a more detailed view, you may not see direct relationships to offensive or
    defensive techniques.`,ne,h,W,T,G,E,$,X,c,b,M,_e="Top-Level Artifacts",re,v,oe,x,B,ue="Files",le,k,ie,y,V,ge="Network Traffic",fe,C,ce,S,J,he="Software",de,w,Y;return n=new Se({props:{title:"Digital Artifact Ontology"}}),h=new Ce({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),$=new we({props:{da_graph:f[0].da_graph}}),v=new te({props:{root_node:"d3f:DigitalArtifact",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;",max_depth:"1"}}),k=new te({props:{root_node:"d3f:File",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),C=new te({props:{root_node:"d3f:NetworkTraffic",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),w=new te({props:{root_node:"d3f:Software",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),{c(){D(n.$$.fragment),u=d(),t=r("section"),m=r("h1"),m.textContent=K,ae=d(),A=r("img"),se=d(),F=r("p"),F.textContent=me,ne=d(),D(h.$$.fragment),W=d(),T=r("section"),G=r("div"),E=r("span"),D($.$$.fragment),X=d(),c=r("div"),b=r("span"),M=r("h2"),M.textContent=_e,re=d(),D(v.$$.fragment),oe=d(),x=r("span"),B=r("h2"),B.textContent=ue,le=d(),D(k.$$.fragment),ie=d(),y=r("span"),V=r("h2"),V.textContent=ge,fe=d(),D(C.$$.fragment),ce=d(),S=r("span"),J=r("h2"),J.textContent=he,de=d(),D(w.$$.fragment),this.h()},l(e){P(n.$$.fragment,e),u=p(e),t=o(e,"SECTION",{class:!0});var a=g(t);m=o(a,"H1",{class:!0,"data-svelte-h":!0}),H(m)!=="svelte-1ilkpdn"&&(m.textContent=K),ae=p(a),A=o(a,"IMG",{alt:!0,src:!0,class:!0}),se=p(a),F=o(a,"P",{"data-svelte-h":!0}),H(F)!=="svelte-140bylb"&&(F.textContent=me),ne=p(a),P(h.$$.fragment,a),a.forEach(l),W=p(e),T=o(e,"SECTION",{class:!0});var Q=g(T);G=o(Q,"DIV",{class:!0});var R=g(G);E=o(R,"SPAN",{id:!0,class:!0});var U=g(E);P($.$$.fragment,U),U.forEach(l),R.forEach(l),Q.forEach(l),X=p(e),c=o(e,"DIV",{id:!0,class:!0});var _=g(c);b=o(_,"SPAN",{class:!0});var O=g(b);M=o(O,"H2",{"data-svelte-h":!0}),H(M)!=="svelte-14ji1mr"&&(M.textContent=_e),re=p(O),P(v.$$.fragment,O),O.forEach(l),oe=p(_),x=o(_,"SPAN",{class:!0});var N=g(x);B=o(N,"H2",{"data-svelte-h":!0}),H(B)!=="svelte-4q5rlr"&&(B.textContent=ue),le=p(N),P(k.$$.fragment,N),N.forEach(l),ie=p(_),y=o(_,"SPAN",{class:!0});var Z=g(y);V=o(Z,"H2",{"data-svelte-h":!0}),H(V)!=="svelte-15u5kjf"&&(V.textContent=ge),fe=p(Z),P(C.$$.fragment,Z),Z.forEach(l),ce=p(_),S=o(_,"SPAN",{class:!0});var ee=g(S);J=o(ee,"H2",{"data-svelte-h":!0}),H(J)!=="svelte-4ahosz"&&(J.textContent=he),de=p(ee),P(w.$$.fragment,ee),ee.forEach(l),_.forEach(l),this.h()},h(){i(m,"class","text-center"),i(A,"alt","Digital Artifact Ontology Overview"),ve(A.src,pe="/img/attack-dao-defend.png")||i(A,"src",pe),i(A,"class","svelte-1bl82ra"),i(t,"class","content"),i(E,"id","lookup_container"),i(E,"class","text-center"),i(G,"class","card"),i(T,"class","content"),i(b,"class","flex-column flex-column-max-content card"),i(x,"class","flex-column flex-column-max-content card"),i(y,"class","flex-column flex-column-max-content card"),i(S,"class","flex-column flex-column-max-content card"),i(c,"id","browser"),i(c,"class","flex flex-start content center svelte-1bl82ra")},m(e,a){z(n,e,a),q(e,u,a),q(e,t,a),s(t,m),s(t,ae),s(t,A),s(t,se),s(t,F),s(t,ne),z(h,t,null),q(e,W,a),q(e,T,a),s(T,G),s(G,E),z($,E,null),q(e,X,a),q(e,c,a),s(c,b),s(b,M),s(b,re),z(v,b,null),s(c,oe),s(c,x),s(x,B),s(x,le),z(k,x,null),s(c,ie),s(c,y),s(y,V),s(y,fe),z(C,y,null),s(c,ce),s(c,S),s(S,J),s(S,de),z(w,S,null),Y=!0},p(e,[a]){const Q={};a&16&&(Q.$$scope={dirty:a,ctx:e}),h.$set(Q);const R={};a&1&&(R.da_graph=e[0].da_graph),$.$set(R);const U={};a&2&&(U.graph=e[1]),v.$set(U);const _={};a&2&&(_.graph=e[1]),k.$set(_);const O={};a&2&&(O.graph=e[1]),C.$set(O);const N={};a&2&&(N.graph=e[1]),w.$set(N)},i(e){Y||(I(n.$$.fragment,e),I(h.$$.fragment,e),I($.$$.fragment,e),I(v.$$.fragment,e),I(k.$$.fragment,e),I(C.$$.fragment,e),I(w.$$.fragment,e),Y=!0)},o(e){L(n.$$.fragment,e),L(h.$$.fragment,e),L($.$$.fragment,e),L(v.$$.fragment,e),L(k.$$.fragment,e),L(C.$$.fragment,e),L(w.$$.fragment,e),Y=!1},d(e){e&&(l(u),l(t),l(W),l(T),l(X),l(c)),j(n,e),j(h),j($),j(v),j(k),j(C),j(w)}}}function Ne(f,n,u){let{data:t}=n,m;return f.$$set=K=>{"data"in K&&u(0,t=K.data)},f.$$.update=()=>{f.$$.dirty&1&&(t.da_graph["@graph"],u(1,m=new Ae(t.da_graph)))},[t,m]}class Me extends ke{constructor(n){super(),ye(this,n,Ne,Oe,be,{data:0})}}export{Me as component,Ge as universal};