import{S as ee,b as te,s as ae,y as K,j as V,f as _,h as p,z as U,p as O,k as v,l as d,m as f,o as r,G as c,A as W,q as j,v as t,t as X,e as Y,B as Z}from"../chunks/index.43e07aca.js";import{S as ne}from"../chunks/SPARQLTable.4c2f2525.js";import{T as se}from"../chunks/Title.0ec6725c.js";import{a as re}from"../chunks/lib.576aa631.js";function ie(m){let i,E,n,$,o,I,N,L,q,l,s,M,g,P,w,J,D,k,A,x,S,y,b,z,B,h,C;return i=new se({props:{title:"Semantic D3FEND Mappings to DISA Common Control Index (CCI)"}}),h=new ne({props:{results:m[0].mappings,transform_row:m[1]}}),{c(){K(i.$$.fragment),E=V(),n=_("section"),$=_("h1"),o=p("Semantic D3FEND Mappings to DISA Common Control Index (CCI)"),I=V(),N=_("p"),L=p(`The D3FEND team created this mapping in order to help users navigate between
    the two data sets.`),q=V(),l=_("section"),s=_("div"),M=p(`Download in
    `),g=_("a"),P=p("CSV"),J=p(`,
    `),D=_("a"),k=p("TSV"),x=p(`,
    `),S=_("a"),y=p("JSON-LD"),z=p("."),B=V(),K(h.$$.fragment),this.h()},l(e){U(i.$$.fragment,e),E=O(e),n=v(e,"SECTION",{class:!0});var a=d(n);$=v(a,"H1",{});var T=d($);o=f(T,"Semantic D3FEND Mappings to DISA Common Control Index (CCI)"),T.forEach(r),I=O(a),N=v(a,"P",{});var G=d(N);L=f(G,`The D3FEND team created this mapping in order to help users navigate between
    the two data sets.`),G.forEach(r),a.forEach(r),q=O(e),l=v(e,"SECTION",{class:!0});var F=d(l);s=v(F,"DIV",{class:!0});var u=d(s);M=f(u,`Download in
    `),g=v(u,"A",{href:!0});var H=d(g);P=f(H,"CSV"),H.forEach(r),J=f(u,`,
    `),D=v(u,"A",{href:!0});var Q=d(D);k=f(Q,"TSV"),Q.forEach(r),x=f(u,`,
    `),S=v(u,"A",{href:!0});var R=d(S);y=f(R,"JSON-LD"),R.forEach(r),z=f(u,"."),u.forEach(r),B=O(F),U(h.$$.fragment,F),F.forEach(r),this.h()},h(){c(n,"class","content"),c(g,"href",w=`/api/mappings/cci.${m[0].version}.csv`),c(D,"href",A=`/api/mappings/cci.${m[0].version}.tsv`),c(S,"href",b=`/api/mappings/cci.${m[0].version}.json`),c(s,"class","text-right"),c(l,"class","content-wider card")},m(e,a){W(i,e,a),j(e,E,a),j(e,n,a),t(n,$),t($,o),t(n,I),t(n,N),t(N,L),j(e,q,a),j(e,l,a),t(l,s),t(s,M),t(s,g),t(g,P),t(s,J),t(s,D),t(D,k),t(s,x),t(s,S),t(S,y),t(s,z),t(l,B),W(h,l,null),C=!0},p(e,[a]){(!C||a&1&&w!==(w=`/api/mappings/cci.${e[0].version}.csv`))&&c(g,"href",w),(!C||a&1&&A!==(A=`/api/mappings/cci.${e[0].version}.tsv`))&&c(D,"href",A),(!C||a&1&&b!==(b=`/api/mappings/cci.${e[0].version}.json`))&&c(S,"href",b);const T={};a&1&&(T.results=e[0].mappings),h.$set(T)},i(e){C||(X(i.$$.fragment,e),X(h.$$.fragment,e),C=!0)},o(e){Y(i.$$.fragment,e),Y(h.$$.fragment,e),C=!1},d(e){Z(i,e),e&&r(E),e&&r(n),e&&r(q),e&&r(l),Z(h)}}}function oe(m,i,E){let{data:n}=i;function $(o){let I=re(o.technique.value);return o.technique.value=`<a href="/technique/${I}">${o.technique_label.value}</a>`,o}return m.$$set=o=>{"data"in o&&E(0,n=o.data)},[n,$]}class me extends ee{constructor(i){super(),te(this,i,oe,ie,ae,{data:0})}}export{me as default};