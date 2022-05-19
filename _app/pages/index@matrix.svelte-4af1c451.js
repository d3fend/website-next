import{S as Y,i as Z,s as ee,F as O,G as R,w as b,k as v,e as I,x as D,m as k,c as q,a as L,d as w,b as c,y as E,g as V,I as _,J,q as F,o as N,B as j}from"../chunks/index-a02da30e.js";import{g as Q}from"../chunks/navigation-0e6511d1.js";import{D as te}from"../chunks/D3FMatrix-3aa45275.js";import{T as ae}from"../chunks/Title-1d23c88f.js";import{S as U,L as oe}from"../chunks/Lookup-DAO-0ce5045d.js";import{H as ne}from"../chunks/Header-826dac44.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/stores-59d8ae96.js";import"../chunks/index-98a102c4.js";/* empty css                                                                 */function se(t){let n,m,o,i,h,y,A,r,d,l,S,C,f,u,T,a,p,M,x,$,P;n=new ae({props:{title:"D3FEND Matrix",og_title:"MITRE D3FEND Knowledge Graph",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND is a knowledge base of cybersecurity countermeasure techniques. In the simplest sense, it is a catalog of defensive cybersecurity techniques and their relationships to offensive/adversary techniques. The primary goal of the initial D3FEND release is to help standardize the vocabulary used to describe defensive cybersecurity technology functionality."}}),i=new ne({});function W(e){t[10](e)}let B={items:t[2],labelFunction:re,keywordsFunction:le,placeholder:"ATT&CK Lookup",onChange:t[6]};t[0]!==void 0&&(B.selectedItem=t[0]),l=new U({props:B}),O.push(()=>R(l,"selectedItem",W)),u=new oe({props:{da_graph:t[4]}});function X(e){t[12](e)}let G={items:t[3],labelFunction:me,keywordsFunction:t[11],placeholder:"D3FEND Lookup",onChange:t[5]};return t[1]!==void 0&&(G.selectedItem=t[1]),p=new U({props:G}),O.push(()=>R(p,"selectedItem",X)),$=new te({}),{c(){b(n.$$.fragment),m=v(),o=I("div"),b(i.$$.fragment),h=v(),y=I("br"),A=v(),r=I("div"),d=I("span"),b(l.$$.fragment),C=v(),f=I("span"),b(u.$$.fragment),T=v(),a=I("span"),b(p.$$.fragment),x=v(),b($.$$.fragment),this.h()},l(e){D(n.$$.fragment,e),m=k(e),o=q(e,"DIV",{id:!0,class:!0});var s=L(o);D(i.$$.fragment,s),h=k(s),y=q(s,"BR",{}),A=k(s),r=q(s,"DIV",{id:!0,class:!0});var g=L(r);d=q(g,"SPAN",{id:!0,class:!0});var z=L(d);D(l.$$.fragment,z),z.forEach(w),C=k(g),f=q(g,"SPAN",{id:!0,class:!0});var H=L(f);D(u.$$.fragment,H),H.forEach(w),T=k(g),a=q(g,"SPAN",{id:!0,class:!0});var K=L(a);D(p.$$.fragment,K),K.forEach(w),g.forEach(w),x=k(s),D($.$$.fragment,s),s.forEach(w),this.h()},h(){c(d,"id","offensive"),c(d,"class","left"),c(f,"id","dao"),c(f,"class","middle svelte-axm6z3"),c(a,"id","defensive"),c(a,"class","right"),c(r,"id","wrapper"),c(r,"class","flex svelte-axm6z3"),c(o,"id","mwrap"),c(o,"class","svelte-axm6z3")},m(e,s){E(n,e,s),V(e,m,s),V(e,o,s),E(i,o,null),_(o,h),_(o,y),_(o,A),_(o,r),_(r,d),E(l,d,null),_(r,C),_(r,f),E(u,f,null),_(r,T),_(r,a),E(p,a,null),_(o,x),E($,o,null),P=!0},p(e,[s]){const g={};!S&&s&1&&(S=!0,g.selectedItem=e[0],J(()=>S=!1)),l.$set(g);const z={};!M&&s&2&&(M=!0,z.selectedItem=e[1],J(()=>M=!1)),p.$set(z)},i(e){P||(F(n.$$.fragment,e),F(i.$$.fragment,e),F(l.$$.fragment,e),F(u.$$.fragment,e),F(p.$$.fragment,e),F($.$$.fragment,e),P=!0)},o(e){N(n.$$.fragment,e),N(i.$$.fragment,e),N(l.$$.fragment,e),N(u.$$.fragment,e),N(p.$$.fragment,e),N($.$$.fragment,e),P=!1},d(e){j(n,e),e&&w(m),e&&w(o),j(i),j(l),j(u),j(p),j($)}}}async function be({fetch:t}){const n=await t("/api/offensive-technique/all.json"),m=await t("/api/technique/all.json"),o=await n.json(),i=await m.json(),y=await(await t("/api/dao/artifacts.json")).json();return{props:{a_remote_autocomplete_list:o,d_remote_autocomplete_list:i,dao_remote_autocomplete_list:y}}}function ie(t){return t.hasOwnProperty("d3f:synonym")?[].concat(t["d3f:synonym"]).join(" "):""}const re=t=>t["d3f:attack-id"]+" - "+t["rdfs:label"],le=t=>t["d3f:attack-id"]+" - "+t["rdfs:label"],me=t=>t["d3f:d3fend-id"]+" - "+t["rdfs:label"];function de(t,n,m){let{a_remote_autocomplete_list:o}=n,{d_remote_autocomplete_list:i}=n,{dao_remote_autocomplete_list:h}=n,y=o["@graph"],A=i["@graph"],r=h,d,l;function S(a){typeof window!="undefined"&&typeof a!="undefined"&&Q("/technique/"+a["@id"])}function C(a){typeof window!="undefined"&&typeof a!="undefined"&&Q("/offensive-technique/attack/"+a["d3f:attack-id"])}function f(a){d=a,m(0,d)}const u=a=>a["d3f:d3fend-id"]+" - "+a["rdfs:label"]+ie(a);function T(a){l=a,m(1,l)}return t.$$set=a=>{"a_remote_autocomplete_list"in a&&m(7,o=a.a_remote_autocomplete_list),"d_remote_autocomplete_list"in a&&m(8,i=a.d_remote_autocomplete_list),"dao_remote_autocomplete_list"in a&&m(9,h=a.dao_remote_autocomplete_list)},[d,l,y,A,r,S,C,o,i,h,f,u,T]}class ve extends Y{constructor(n){super(),Z(this,n,de,se,ee,{a_remote_autocomplete_list:7,d_remote_autocomplete_list:8,dao_remote_autocomplete_list:9})}}export{ve as default,be as load};
