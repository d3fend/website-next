import{e as G}from"../chunks/index.5e2a9a64.js";import{s as K,a as F,f as T,l as g,c as y,g as D,F as U,h as b,m as $,d as m,j as c,i as N,x as i}from"../chunks/scheduler.3032ca4b.js";import{S as W,i as X,b as x,d as z,m as Q,a as R,t as k,e as B}from"../chunks/index.ee8739bf.js";import{S as Y}from"../chunks/SPARQLTable.c5b6134e.js";import{T as Z}from"../chunks/Title.8f901ed1.js";import{j as ee}from"../chunks/lib.d08f5f84.js";async function te({fetch:p,params:n}){const{version:f}=n,a=await p(`/api/mappings/nist.${f}.json`),S=await a.json();if(a.status!==200)throw G(500,data.message);return{mappings:S,version:f}}const fe=Object.freeze(Object.defineProperty({__proto__:null,load:te},Symbol.toStringTag,{value:"Module"}));function ae(p){let n,f,a,S=`<h1>Semantic D3FEND Mappings to NIST 800-53</h1> <p>The D3FEND team created this mapping in order to help users navigate between
    the two data sets.</p>`,s,o,r,q,h,C,E,O,_,I,j,L,v,M,w,V,A,u,d;return n=new Z({props:{title:"Semantic D3FEND Mappings to NIST 800-53"}}),u=new Y({props:{results:p[0].mappings,transform_row:p[1]}}),{c(){x(n.$$.fragment),f=F(),a=T("section"),a.innerHTML=S,s=F(),o=T("section"),r=T("div"),q=g(`Download in 
    `),h=T("a"),C=g("CSV"),O=g(`,
    `),_=T("a"),I=g("TSV"),L=g(`,
    `),v=T("a"),M=g("JSON-LD"),V=g("."),A=F(),x(u.$$.fragment),this.h()},l(e){z(n.$$.fragment,e),f=y(e),a=D(e,"SECTION",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-1x0hb9j"&&(a.innerHTML=S),s=y(e),o=D(e,"SECTION",{class:!0});var t=b(o);r=D(t,"DIV",{class:!0});var l=b(r);q=$(l,`Download in 
    `),h=D(l,"A",{href:!0});var P=b(h);C=$(P,"CSV"),P.forEach(m),O=$(l,`,
    `),_=D(l,"A",{href:!0});var H=b(_);I=$(H,"TSV"),H.forEach(m),L=$(l,`,
    `),v=D(l,"A",{href:!0});var J=b(v);M=$(J,"JSON-LD"),J.forEach(m),V=$(l,"."),l.forEach(m),A=y(t),z(u.$$.fragment,t),t.forEach(m),this.h()},h(){c(a,"class","content"),c(h,"href",E=`/api/mappings/nist.${p[0].version}.csv`),c(_,"href",j=`/api/mappings/nist.${p[0].version}.tsv`),c(v,"href",w=`/api/mappings/nist.${p[0].version}.json`),c(r,"class","text-right"),c(o,"class","content-wider card")},m(e,t){Q(n,e,t),N(e,f,t),N(e,a,t),N(e,s,t),N(e,o,t),i(o,r),i(r,q),i(r,h),i(h,C),i(r,O),i(r,_),i(_,I),i(r,L),i(r,v),i(v,M),i(r,V),i(o,A),Q(u,o,null),d=!0},p(e,[t]){(!d||t&1&&E!==(E=`/api/mappings/nist.${e[0].version}.csv`))&&c(h,"href",E),(!d||t&1&&j!==(j=`/api/mappings/nist.${e[0].version}.tsv`))&&c(_,"href",j),(!d||t&1&&w!==(w=`/api/mappings/nist.${e[0].version}.json`))&&c(v,"href",w);const l={};t&1&&(l.results=e[0].mappings),u.$set(l)},i(e){d||(R(n.$$.fragment,e),R(u.$$.fragment,e),d=!0)},o(e){k(n.$$.fragment,e),k(u.$$.fragment,e),d=!1},d(e){e&&(m(f),m(a),m(s),m(o)),B(n,e),B(u)}}}function ne(p,n,f){let{data:a}=n;function S(s){let o=ee(s.technique.value);return s.technique.value=`<a href="/technique/${o}">${s.technique_label.value}</a>`,s}return p.$$set=s=>{"data"in s&&f(0,a=s.data)},[a,S]}class me extends W{constructor(n){super(),X(this,n,ne,ae,K,{data:0})}}export{me as component,fe as universal};
