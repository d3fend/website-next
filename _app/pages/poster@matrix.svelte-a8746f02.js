import{S as q,i as F,s as M,w,k as d,e as x,x as h,m as g,c as v,a as B,d as l,b as j,y as D,g as p,I,E as N,q as y,o as b,B as E}from"../chunks/index-a02da30e.js";import"../chunks/navigation-0e6511d1.js";import{D as P}from"../chunks/D3FMatrix-eeee782d.js";import{T as R}from"../chunks/Title-1d23c88f.js";/* empty css                                                                 */import{H as T}from"../chunks/Header-47fd749a.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/stores-59d8ae96.js";import"../chunks/index-98a102c4.js";function H(_){let r,s,o,i,e,m,$,n,f,u,c;return r=new R({props:{title:"D3FEND Matrix Poster",og_title:"MITRE D3FEND Knowledge Graph",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND Matrix Poster"}}),m=new T({}),n=new P({props:{theme:"poster"}}),{c(){w(r.$$.fragment),s=d(),o=x("br"),i=d(),e=x("div"),w(m.$$.fragment),$=d(),w(n.$$.fragment),f=d(),u=x("br"),this.h()},l(t){h(r.$$.fragment,t),s=g(t),o=v(t,"BR",{}),i=g(t),e=v(t,"DIV",{id:!0,class:!0});var a=B(e);h(m.$$.fragment,a),$=g(a),h(n.$$.fragment,a),a.forEach(l),f=g(t),u=v(t,"BR",{}),this.h()},h(){j(e,"id","mwrap"),j(e,"class","svelte-167t69u")},m(t,a){D(r,t,a),p(t,s,a),p(t,o,a),p(t,i,a),p(t,e,a),D(m,e,null),I(e,$),D(n,e,null),p(t,f,a),p(t,u,a),c=!0},p:N,i(t){c||(y(r.$$.fragment,t),y(m.$$.fragment,t),y(n.$$.fragment,t),c=!0)},o(t){b(r.$$.fragment,t),b(m.$$.fragment,t),b(n.$$.fragment,t),c=!1},d(t){E(r,t),t&&l(s),t&&l(o),t&&l(i),t&&l(e),E(m),E(n),t&&l(f),t&&l(u)}}}async function O({fetch:_}){const r=await _("/api/offensive-technique/all.json"),s=await _("/api/technique/all.json"),o=await r.json(),i=await s.json();return{props:{a_remote_autocomplete_list:o,d_remote_autocomplete_list:i}}}function S(_,r,s){let{a_remote_autocomplete_list:o}=r,{d_remote_autocomplete_list:i}=r;return o["@graph"],i["@graph"],_.$$set=e=>{"a_remote_autocomplete_list"in e&&s(0,o=e.a_remote_autocomplete_list),"d_remote_autocomplete_list"in e&&s(1,i=e.d_remote_autocomplete_list)},[o,i]}class Q extends q{constructor(r){super(),F(this,r,S,H,M,{a_remote_autocomplete_list:0,d_remote_autocomplete_list:1})}}export{Q as default,O as load};
