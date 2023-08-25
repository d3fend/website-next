import{s as ae,a as m,f as r,l as Y,c as p,g as d,F as A,h as F,m as Z,d as l,j as R,i,x as f,z as re,n as de}from"../chunks/scheduler.3032ca4b.js";import{S as fe,i as ce,b as z,d as G,m as W,a as K,t as U,e as X}from"../chunks/index.ee8739bf.js";import{T as ue}from"../chunks/Title.8f901ed1.js";import{T as oe}from"../chunks/Table.11503947.js";import{v as me}from"../chunks/stores.d8112164.js";function ie(_){let s=_[0].version+"",a;return{c(){a=Y(s)},l(t){a=Z(t,s)},m(t,h){i(t,a,h)},p(t,h){h&1&&s!==(s=t[0].version+"")&&de(a,s)},d(t){t&&l(a)}}}function pe(_){let s,a,t,h="D3FEND Ontology Resources",N,B,j,D,c,g,I,O,Q,w,ee=`These files contain the entire current D3FEND model.
    Some relationships you might be expecting to see the model are generated through inference, those results are available in the Data Files section.`,V,T,S,E,u,b,te="Data Files",J,x,ne=`These files contain all the inferred relationships that you see on the D3FEND website.
    These can also generated when you load the ontology into a semantic graph database and submit queries. We are working on open sourcing the SPARQL queries soon.`,M,$,L,P,q,v,le='<div><h2>Previous Ontology Releases</h2> <dl class="stretch shrink"><dt class="text-2">0.11.0-BETA-1 <small>(2022-10-31)</small></dt><dd><ul><li><a href="/ontologies/d3fend/0.11.0-BETA-1/d3fend.owl">d3fend.owl</a></li> <li><a href="/ontologies/d3fend/0.11.0-BETA-1/d3fend.json">d3fend.json</a></li> <li><a href="/ontologies/d3fend/0.11.0-BETA-1/d3fend.ttl">d3fend.ttl</a></li></ul> </dd><dt class="text-2">0.10.1-BETA-1 <small>(2022-06-13)</small></dt><dd><ul><li><a href="/ontologies/d3fend/0.10.1-BETA-1/d3fend.owl">d3fend.owl</a></li> <li><a href="/ontologies/d3fend/0.10.1-BETA-1/d3fend.json">d3fend.json</a></li> <li><a href="/ontologies/d3fend/0.10.1-BETA-1/d3fend.ttl">d3fend.ttl</a></li></ul> </dd><dt class="text-2">0.9.3-BETA-1 <small>(2021-07-09)</small></dt><dd><ul><li><a href="/ontologies/d3fend/0.9.3-BETA-1/d3fend.owl">d3fend.owl</a></li> <li><a href="/ontologies/d3fend/0.9.3-BETA-1/d3fend.json">d3fend.json</a></li> <li><a href="/ontologies/d3fend/0.9.3-BETA-1/d3fend.ttl">d3fend.ttl</a></li></ul></dd></dl></div>',k;s=new ue({props:{title:"Ontology Resources"}});let o=_[0]&&ie(_);return T=new oe({props:{table_cols:["Resource","Description"],table_rows:[{Resource:"<a href='/ontologies/d3fend.owl'>d3fend.owl</a>",Description:"The D3FEND Ontology distribution in rdf/owl (xml) format."},{Resource:"<a href='/ontologies/d3fend.ttl'>d3fend.ttl</a>",Description:"The D3FEND Ontology distribution in terse triple language (TTL) format."},{Resource:"<a href='/ontologies/d3fend.json'>d3fend.json</a>",Description:"The D3FEND Ontology distribution in JSON-LD Graph format."}]}}),$=new oe({props:{table_cols:["Resource","Description"],table_rows:[{Resource:"<a href='/api/ontology/inference/d3fend-full-mappings.json'>d3fend-full-mappings.csv</a>",Description:"D3FEND inferred relationships in <a href='https://www.w3.org/TR/sparql11-results-csv-tsv/'>SPARQL1.1 CSV format</a"},{Resource:"<a href='/api/ontology/inference/d3fend-full-mappings.json'>d3fend-full-mappings.json</a>",Description:"D3FEND inferred relationships in <a href='https://www.w3.org/TR/sparql11-results-json/'>SPARQL1.1 JSON format</a"}]}}),{c(){z(s.$$.fragment),a=m(),t=r("h1"),t.textContent=h,N=m(),B=r("br"),j=m(),D=r("section"),c=r("div"),g=r("h2"),I=Y("D3FEND "),o&&o.c(),O=Y(" Ontology Files"),Q=m(),w=r("p"),w.textContent=ee,V=m(),z(T.$$.fragment),S=m(),E=r("section"),u=r("div"),b=r("h2"),b.textContent=te,J=m(),x=r("p"),x.textContent=ne,M=m(),z($.$$.fragment),L=m(),P=r("br"),q=m(),v=r("section"),v.innerHTML=le,this.h()},l(e){G(s.$$.fragment,e),a=p(e),t=d(e,"H1",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-l3iqv0"&&(t.textContent=h),N=p(e),B=d(e,"BR",{}),j=p(e),D=d(e,"SECTION",{class:!0});var n=F(D);c=d(n,"DIV",{class:!0});var C=F(c);g=d(C,"H2",{});var H=F(g);I=Z(H,"D3FEND "),o&&o.l(H),O=Z(H," Ontology Files"),H.forEach(l),Q=p(C),w=d(C,"P",{"data-svelte-h":!0}),A(w)!=="svelte-k1utls"&&(w.textContent=ee),V=p(C),G(T.$$.fragment,C),C.forEach(l),n.forEach(l),S=p(e),E=d(e,"SECTION",{class:!0});var se=F(E);u=d(se,"DIV",{class:!0});var y=F(u);b=d(y,"H2",{"data-svelte-h":!0}),A(b)!=="svelte-1tx2cc1"&&(b.textContent=te),J=p(y),x=d(y,"P",{"data-svelte-h":!0}),A(x)!=="svelte-1o5up36"&&(x.textContent=ne),M=p(y),G($.$$.fragment,y),y.forEach(l),se.forEach(l),L=p(e),P=d(e,"BR",{}),q=p(e),v=d(e,"SECTION",{class:!0,"data-svelte-h":!0}),A(v)!=="svelte-1twir3l"&&(v.innerHTML=le),this.h()},h(){R(t,"class","text-center"),R(c,"class","center"),R(D,"class","content"),R(u,"class","center"),R(E,"class","content"),R(v,"class","content")},m(e,n){W(s,e,n),i(e,a,n),i(e,t,n),i(e,N,n),i(e,B,n),i(e,j,n),i(e,D,n),f(D,c),f(c,g),f(g,I),o&&o.m(g,null),f(g,O),f(c,Q),f(c,w),f(c,V),W(T,c,null),i(e,S,n),i(e,E,n),f(E,u),f(u,b),f(u,J),f(u,x),f(u,M),W($,u,null),i(e,L,n),i(e,P,n),i(e,q,n),i(e,v,n),k=!0},p(e,[n]){e[0]?o?o.p(e,n):(o=ie(e),o.c(),o.m(g,O)):o&&(o.d(1),o=null)},i(e){k||(K(s.$$.fragment,e),K(T.$$.fragment,e),K($.$$.fragment,e),k=!0)},o(e){U(s.$$.fragment,e),U(T.$$.fragment,e),U($.$$.fragment,e),k=!1},d(e){e&&(l(a),l(t),l(N),l(B),l(j),l(D),l(S),l(E),l(L),l(P),l(q),l(v)),X(s,e),o&&o.d(),X(T),X($)}}}function he(_,s,a){let t;return re(_,me,h=>a(0,t=h)),[t]}class Ee extends fe{constructor(s){super(),ce(this,s,he,pe,ae,{})}}export{Ee as component};
