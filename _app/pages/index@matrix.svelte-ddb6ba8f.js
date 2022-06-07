import{S as x,i as ee,s as te,F as J,G as O,w as b,k as I,e as D,x as k,m as q,c as E,a as P,d as v,b as _,y as F,g as Q,I as f,J as U,q as N,o as A,B as S}from"../chunks/index-a02da30e.js";import{g as W}from"../chunks/navigation-0e6511d1.js";import{D as ae}from"../chunks/D3FMatrix-3aa45275.js";import{T as oe}from"../chunks/Title-1d23c88f.js";import{S as X,L as ne}from"../chunks/Lookup-DAO-469d2983.js";import{H as se}from"../chunks/Header-47fd749a.js";import{a as G,b as ie}from"../chunks/lib-09c47a26.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/stores-59d8ae96.js";import"../chunks/index-98a102c4.js";/* empty css                                                                 */import"../chunks/marked.esm-8ab30116.js";function re(a){let n,m,o,i,$,y,j,r,d,l,C,T,c,p,z,g,u,L,e,w,B;n=new oe({props:{title:"D3FEND Matrix",og_title:"MITRE D3FEND Knowledge Graph",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND is a knowledge base of cybersecurity countermeasure techniques. In the simplest sense, it is a catalog of defensive cybersecurity techniques and their relationships to offensive/adversary techniques. The primary goal of the initial D3FEND release is to help standardize the vocabulary used to describe defensive cybersecurity technology functionality."}}),i=new se({});function Y(t){a[12](t)}let H={items:a[2],labelFunction:a[10],keywordsFunction:a[11],placeholder:"ATT&CK Lookup",onChange:a[6]};a[0]!==void 0&&(H.selectedItem=a[0]),l=new X({props:H}),J.push(()=>O(l,"selectedItem",Y)),p=new ne({props:{da_graph:a[4]}});function Z(t){a[15](t)}let K={items:a[3],labelFunction:a[13],keywordsFunction:a[14],placeholder:"D3FEND Lookup",onChange:a[5]};return a[1]!==void 0&&(K.selectedItem=a[1]),u=new X({props:K}),J.push(()=>O(u,"selectedItem",Z)),w=new ae({}),{c(){b(n.$$.fragment),m=I(),o=D("div"),b(i.$$.fragment),$=I(),y=D("br"),j=I(),r=D("div"),d=D("span"),b(l.$$.fragment),T=I(),c=D("span"),b(p.$$.fragment),z=I(),g=D("span"),b(u.$$.fragment),e=I(),b(w.$$.fragment),this.h()},l(t){k(n.$$.fragment,t),m=q(t),o=E(t,"DIV",{id:!0,class:!0});var s=P(o);k(i.$$.fragment,s),$=q(s),y=E(s,"BR",{}),j=q(s),r=E(s,"DIV",{id:!0,class:!0});var h=P(r);d=E(h,"SPAN",{id:!0,class:!0});var M=P(d);k(l.$$.fragment,M),M.forEach(v),T=q(h),c=E(h,"SPAN",{id:!0,class:!0});var R=P(c);k(p.$$.fragment,R),R.forEach(v),z=q(h),g=E(h,"SPAN",{id:!0,class:!0});var V=P(g);k(u.$$.fragment,V),V.forEach(v),h.forEach(v),e=q(s),k(w.$$.fragment,s),s.forEach(v),this.h()},h(){_(d,"id","offensive"),_(d,"class","left"),_(c,"id","dao"),_(c,"class","middle svelte-axm6z3"),_(g,"id","defensive"),_(g,"class","right"),_(r,"id","wrapper"),_(r,"class","flex svelte-axm6z3"),_(o,"id","mwrap"),_(o,"class","svelte-axm6z3")},m(t,s){F(n,t,s),Q(t,m,s),Q(t,o,s),F(i,o,null),f(o,$),f(o,y),f(o,j),f(o,r),f(r,d),F(l,d,null),f(r,T),f(r,c),F(p,c,null),f(r,z),f(r,g),F(u,g,null),f(o,e),F(w,o,null),B=!0},p(t,[s]){const h={};!C&&s&1&&(C=!0,h.selectedItem=t[0],U(()=>C=!1)),l.$set(h);const M={};!L&&s&2&&(L=!0,M.selectedItem=t[1],U(()=>L=!1)),u.$set(M)},i(t){B||(N(n.$$.fragment,t),N(i.$$.fragment,t),N(l.$$.fragment,t),N(p.$$.fragment,t),N(u.$$.fragment,t),N(w.$$.fragment,t),B=!0)},o(t){A(n.$$.fragment,t),A(i.$$.fragment,t),A(l.$$.fragment,t),A(p.$$.fragment,t),A(u.$$.fragment,t),A(w.$$.fragment,t),B=!1},d(t){S(n,t),t&&v(m),t&&v(o),S(i),S(l),S(p),S(u),S(w)}}}async function ve({fetch:a}){const n=await a("/api/offensive-technique/all.json"),m=await a("/api/technique/all.json"),o=await n.json(),i=await m.json(),y=await(await a("/api/dao/artifacts.json")).json();return{props:{a_remote_autocomplete_list:o,d_remote_autocomplete_list:i,dao_remote_autocomplete_list:y}}}function le(a,n,m){let{a_remote_autocomplete_list:o}=n,{d_remote_autocomplete_list:i}=n,{dao_remote_autocomplete_list:$}=n,y=o["@graph"],j=i["@graph"],r=$,d,l;function C(e){typeof window!="undefined"&&typeof e!="undefined"&&W("/technique/"+e["@id"])}function T(e){typeof window!="undefined"&&typeof e!="undefined"&&W("/offensive-technique/attack/"+e["d3f:attack-id"])}const c=e=>{if(e!=null)return e["d3f:attack-id"]+" - "+G(e)},p=e=>e["d3f:attack-id"]+" - "+G(e);function z(e){d=e,m(0,d)}const g=e=>{if(e!=null)return e["d3f:d3fend-id"]+" - "+G(e)},u=e=>e["d3f:d3fend-id"]+" - "+G(e)+ie(e);function L(e){l=e,m(1,l)}return a.$$set=e=>{"a_remote_autocomplete_list"in e&&m(7,o=e.a_remote_autocomplete_list),"d_remote_autocomplete_list"in e&&m(8,i=e.d_remote_autocomplete_list),"dao_remote_autocomplete_list"in e&&m(9,$=e.dao_remote_autocomplete_list)},[d,l,y,j,r,C,T,o,i,$,c,p,z,g,u,L]}class be extends x{constructor(n){super(),ee(this,n,le,re,te,{a_remote_autocomplete_list:7,d_remote_autocomplete_list:8,dao_remote_autocomplete_list:9})}}export{be as default,ve as load};
