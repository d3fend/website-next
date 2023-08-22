import{e as ge}from"../chunks/index.5e2a9a64.js";import{s as Ee,a as c,f as a,P as ve,c as p,g as n,h,F as A,d as s,Q as be,j as D,i as l,x as o}from"../chunks/scheduler.3032ca4b.js";import{S as _e,i as $e,b as O,d as q,m as j,a as M,t as P,e as H}from"../chunks/index.ee8739bf.js";import{T as Ne}from"../chunks/Title.8f901ed1.js";import{T as ee}from"../chunks/Table.11503947.js";async function xe({fetch:w}){const r=await w("/changelog.json"),u=await r.json();if(!r.status===200)throw ge(500,u.message);return{changelog:u}}const ye=Object.freeze(Object.defineProperty({__proto__:null,load:xe},Symbol.toStringTag,{value:"Module"}));function Te(w){let r,u,i,f,le="D3FEND Resources",te,se,ae,m,C,ce="General Resources",ne,v,K,b,d,R,pe="Tools",oe,_,V,$,g,S,fe="Mappings",re,N,z,x,E,I,De="Misc",ie,T,W,B,L,G,J,F,y,Q=w[0].changelog.html+"",k;return r=new Ne({props:{title:"Resources"}}),v=new ee({props:{table_cols:["Resource","Description"],table_rows:[{Resource:"<a href='/resources/D3FEND.pdf'>D3FEND Paper</a>",Description:"This paper explains the motivation and design of the D3FEND knowledge graph. PDF format."},{Resource:"<a class='' href='/resources/ontology/'>D3FEND Ontology Resources</a>",Description:"Access the D3FEND Ontology and associated data files in various formats such as TTL, JSON-LD, and RDF/OWL."},{Resource:"<a href='/poster'>D3FEND Poster</a>",Description:"A D3FEND Matrix web view suitable for printing, adjust your printer page size settings to match the resolution and size needed."}]}}),_=new ee({props:{table_cols:["Tool","Description"],table_rows:[{Tool:"<a href='/ontologies/d3fend.csv'>D3FEND Spreadsheet</a>",Description:"This spreadsheet contains all D3FEND techniques and their definitions. CSV format."},{Tool:"<a href='/tools/attack-extractor'>ATT&CK Extractor</a>",Description:"Extracts ATT&CK techniques from blobs of text and recommends <i>potential</i> D3FEND countermeasures."},{Tool:"<a class='' href='/tools/d3fend-extractor'>D3FEND Extractor</a>",Description:"Extracts D3FEND techniques from blobs of text and shows related ATT&CK techniques."},{Tool:"<a class='' href='/tools/artifact-extractor'>D3FEND Artifact Extractor</a>",Description:"Extracts D3FEND Artifacts from blobs of text and links to their definitions."}]}}),N=new ee({props:{table_cols:["Mapping","Description"],table_rows:[{Mapping:"<a href='/mappings/attack-mitigations'>ATT&CK Mitigations to D3FEND Techniques</a>",Description:"The D3FEND team created this mapping in order to help users navigate between the two knowledgebases."},{Mapping:"<a class='' href='/mappings/nist/5'>NIST 800-53 Rev. 5 to D3FEND Techniques</a>",Description:"The D3FEND team created this mapping in order to help users navigate between the two data sets."},{Mapping:"<a class='' href='/mappings/cci/2022-04-05'>DISA CCI to D3FEND Techniques</a>",Description:"The D3FEND team created this mapping in order to help users navigate between the two data sets."}]}}),T=new ee({props:{table_cols:["Resource","Description"],table_rows:[{Resource:"<a href='https://next.d3fend.mitre.org'>D3FEND Next</a>",Description:"The next/upcoming (and alpha) version of the D3FEND website."},{Resource:"<a href='https://github.com/d3fend'>D3FEND Github</a>",Description:"Open source code from the D3FEND project. You can create issues or submit pull requests."},{Resource:"<a class='glow' href='https://join.slack.com/t/mitre-d3fend/shared_invite/zt-1fm6t0lkm-p1IHW1KdabklvDFbxZ1WCw'>D3FEND Slack</a>",Description:"Join our public D3FEND Slack Workspace."},{Resource:"<a class='' href='/api-docs'>D3FEND API</a>",Description:"Initial public D3FEND developer's API"},{Resource:"<a class='glow' href='/profile'>D3FEND Profile Studio</a>",Description:"Alpha-level version of a new tool to create D3FEND profiles to baseline and roadmap your cyber capabiltiies."}]}}),{c(){O(r.$$.fragment),u=c(),i=a("section"),f=a("h1"),f.textContent=le,te=c(),se=a("br"),ae=c(),m=a("div"),C=a("h2"),C.textContent=ce,ne=c(),O(v.$$.fragment),K=c(),b=a("section"),d=a("div"),R=a("h2"),R.textContent=pe,oe=c(),O(_.$$.fragment),V=c(),$=a("section"),g=a("div"),S=a("h2"),S.textContent=fe,re=c(),O(N.$$.fragment),z=c(),x=a("section"),E=a("div"),I=a("h2"),I.textContent=De,ie=c(),O(T.$$.fragment),W=c(),B=a("br"),L=c(),G=a("br"),J=c(),F=a("section"),y=new ve(!1),this.h()},l(e){q(r.$$.fragment,e),u=p(e),i=n(e,"SECTION",{class:!0});var t=h(i);f=n(t,"H1",{class:!0,"data-svelte-h":!0}),A(f)!=="svelte-1k4kpgr"&&(f.textContent=le),te=p(t),se=n(t,"BR",{}),ae=p(t),m=n(t,"DIV",{class:!0});var Y=h(m);C=n(Y,"H2",{"data-svelte-h":!0}),A(C)!=="svelte-1emi3j1"&&(C.textContent=ce),ne=p(Y),q(v.$$.fragment,Y),Y.forEach(s),t.forEach(s),K=p(e),b=n(e,"SECTION",{class:!0});var ue=h(b);d=n(ue,"DIV",{class:!0});var Z=h(d);R=n(Z,"H2",{"data-svelte-h":!0}),A(R)!=="svelte-ngy2mb"&&(R.textContent=pe),oe=p(Z),q(_.$$.fragment,Z),Z.forEach(s),ue.forEach(s),V=p(e),$=n(e,"SECTION",{class:!0});var he=h($);g=n(he,"DIV",{class:!0});var U=h(g);S=n(U,"H2",{"data-svelte-h":!0}),A(S)!=="svelte-4iei75"&&(S.textContent=fe),re=p(U),q(N.$$.fragment,U),U.forEach(s),he.forEach(s),z=p(e),x=n(e,"SECTION",{class:!0});var me=h(x);E=n(me,"DIV",{class:!0});var X=h(E);I=n(X,"H2",{"data-svelte-h":!0}),A(I)!=="svelte-1ws6q3m"&&(I.textContent=De),ie=p(X),q(T.$$.fragment,X),X.forEach(s),me.forEach(s),W=p(e),B=n(e,"BR",{}),L=p(e),G=n(e,"BR",{}),J=p(e),F=n(e,"SECTION",{class:!0});var de=h(F);y=be(de,!1),de.forEach(s),this.h()},h(){D(f,"class","text-center"),D(m,"class","center"),D(i,"class","content"),D(d,"class","center"),D(b,"class","content"),D(g,"class","center"),D($,"class","content"),D(E,"class","center"),D(x,"class","content"),y.a=null,D(F,"class","content")},m(e,t){j(r,e,t),l(e,u,t),l(e,i,t),o(i,f),o(i,te),o(i,se),o(i,ae),o(i,m),o(m,C),o(m,ne),j(v,m,null),l(e,K,t),l(e,b,t),o(b,d),o(d,R),o(d,oe),j(_,d,null),l(e,V,t),l(e,$,t),o($,g),o(g,S),o(g,re),j(N,g,null),l(e,z,t),l(e,x,t),o(x,E),o(E,I),o(E,ie),j(T,E,null),l(e,W,t),l(e,B,t),l(e,L,t),l(e,G,t),l(e,J,t),l(e,F,t),y.m(Q,F),k=!0},p(e,[t]){(!k||t&1)&&Q!==(Q=e[0].changelog.html+"")&&y.p(Q)},i(e){k||(M(r.$$.fragment,e),M(v.$$.fragment,e),M(_.$$.fragment,e),M(N.$$.fragment,e),M(T.$$.fragment,e),k=!0)},o(e){P(r.$$.fragment,e),P(v.$$.fragment,e),P(_.$$.fragment,e),P(N.$$.fragment,e),P(T.$$.fragment,e),k=!1},d(e){e&&(s(u),s(i),s(K),s(b),s(V),s($),s(z),s(x),s(W),s(B),s(L),s(G),s(J),s(F)),H(r,e),H(v),H(_),H(N),H(T)}}}function Fe(w,r,u){let{data:i}=r;return w.$$set=f=>{"data"in f&&u(0,i=f.data)},[i]}class ke extends _e{constructor(r){super(),$e(this,r,Fe,Te,Ee,{data:0})}}export{ke as component,ye as universal};
