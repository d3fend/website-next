import{s as w,a as D,f as p,c as x,g as d,h as T,F as q,d as f,j as _,i as E,x as h,y}from"../chunks/scheduler.3032ca4b.js";import{S as A,i as S,b as $,d as g,m as b,a as v,t as C,e as F}from"../chunks/index.ee8739bf.js";import{T as K}from"../chunks/Title.8f901ed1.js";import{T as k}from"../chunks/Table.11503947.js";function I(N){let e,i,s,a,r,u="Tools",m,o,l;return e=new K({props:{title:"D3FEND Tools"}}),o=new k({props:{table_cols:["Tool","Description"],table_rows:[{Tool:"<a href='/ontologies/d3fend.csv'>D3FEND Spreadsheet</a>",Description:"This spreadsheet contains all D3FEND techniques and their definitions. CSV format."},{Tool:"<a href='/tools/attack-extractor'>ATT&CK Extractor</a>",Description:"Extracts ATT&CK techniques from blobs of text and recommends <i>potential</i> D3FEND countermeasures."},{Tool:"<a class='glow' href='/tools/d3fend-extractor'>D3FEND Extractor</a>",Description:"Extracts D3FEND techniques from blobs of text and shows related ATT&CK techniques."},{Tool:"<a class='glow' href='/tools/artifact-extractor'>D3FEND Artifact Extractor</a>",Description:"Extracts D3FEND Artifacts from blobs of text and links to their definitions."}]}}),{c(){$(e.$$.fragment),i=D(),s=p("section"),a=p("div"),r=p("h2"),r.textContent=u,m=D(),$(o.$$.fragment),this.h()},l(t){g(e.$$.fragment,t),i=x(t),s=d(t,"SECTION",{class:!0});var n=T(s);a=d(n,"DIV",{class:!0});var c=T(a);r=d(c,"H2",{"data-svelte-h":!0}),q(r)!=="svelte-ngy2mb"&&(r.textContent=u),m=x(c),g(o.$$.fragment,c),c.forEach(f),n.forEach(f),this.h()},h(){_(a,"class","center"),_(s,"class","content")},m(t,n){b(e,t,n),E(t,i,n),E(t,s,n),h(s,a),h(a,r),h(a,m),b(o,a,null),l=!0},p:y,i(t){l||(v(e.$$.fragment,t),v(o.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),C(o.$$.fragment,t),l=!1},d(t){t&&(f(i),f(s)),F(e,t),F(o)}}}class P extends A{constructor(e){super(),S(this,e,null,I,w,{})}}export{P as component};