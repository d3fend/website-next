import{S as P,b as S,s as z,J as D,y as N,j as v,f as b,z as w,p as E,k as g,l as k,o as m,A as C,q as h,v as $,K as U,t as q,e as T,B as L,x as j,C as y,R as F,n as p,h as M,m as O,P as I,r as G}from"../chunks/index.f8777a79.js";import{p as J}from"../chunks/stores.ceda234b.js";import{b as K}from"../chunks/navigation.61cd7a83.js";import{T as R}from"../chunks/Technique.81e8ef44.js";import{T as H}from"../chunks/Title.b950d120.js";import{D as Q}from"../chunks/D3FMatrix.fd597c68.js";function V(n){return{c:p,l:p,m:p,p,i:p,o:p,d:p}}function W(n){let l,o,c,u,i,a,f,_,d,s;return u=new R({props:{technique_id:n[0].technique_id,technique:n[10]}}),{c(){l=b("button"),o=M("esc"),c=v(),N(u.$$.fragment),i=v(),a=b("button"),f=M("close")},l(e){l=g(e,"BUTTON",{});var t=k(l);o=O(t,"esc"),t.forEach(m),c=E(e),w(u.$$.fragment,e),i=E(e),a=g(e,"BUTTON",{});var r=k(a);f=O(r,"close"),r.forEach(m)},m(e,t){h(e,l,t),$(l,o),h(e,c,t),C(u,e,t),h(e,i,t),h(e,a,t),$(a,f),_=!0,d||(s=[I(l,"click",n[7]),I(a,"click",n[8])],d=!0)},p(e,t){const r={};t&1&&(r.technique_id=e[0].technique_id),t&1&&(r.technique=e[10]),u.$set(r)},i(e){_||(q(u.$$.fragment,e),_=!0)},o(e){T(u.$$.fragment,e),_=!1},d(e){e&&m(l),e&&m(c),L(u,e),e&&m(i),e&&m(a),d=!1,G(s)}}}function X(n){let l;return{c(){l=M("loading...")},l(o){l=O(o,"loading...")},m(o,c){h(o,l,c)},p,i:p,o:p,d(o){o&&m(l)}}}function Y(n){let l,o,c,u,i,a,f,_,d;l=new H({props:{title:n[3],og_title:n[4],og_description:n[2]["d3f:definition"],og_type:"article"}}),i=new Q({props:{scroll_indicator:!1}});let s={ctx:n,current:null,token:null,hasCatch:!1,pending:X,then:W,catch:V,value:10,blocks:[,,,]};return D(_=n[0].technique,s),{c(){N(l.$$.fragment),o=v(),c=b("main"),u=b("section"),N(i.$$.fragment),a=v(),f=b("dialog"),s.block.c()},l(e){w(l.$$.fragment,e),o=E(e),c=g(e,"MAIN",{});var t=k(c);u=g(t,"SECTION",{});var r=k(u);w(i.$$.fragment,r),r.forEach(m),a=E(t),f=g(t,"DIALOG",{});var A=k(f);s.block.l(A),A.forEach(m),t.forEach(m)},m(e,t){C(l,e,t),h(e,o,t),h(e,c,t),$(c,u),C(i,u,null),$(c,a),$(c,f),s.block.m(f,s.anchor=null),s.mount=()=>f,s.anchor=null,n[9](f),d=!0},p(e,[t]){n=e,s.ctx=n,t&1&&_!==(_=n[0].technique)&&D(_,s)||U(s,n,t)},i(e){d||(q(l.$$.fragment,e),q(i.$$.fragment,e),q(s.block),d=!0)},o(e){T(l.$$.fragment,e),T(i.$$.fragment,e);for(let t=0;t<3;t+=1){const r=s.blocks[t];T(r)}d=!1},d(e){L(l,e),e&&m(o),e&&m(c),L(i),s.block.d(),s.token=null,s=null,n[9](null)}}}function Z(n,l,o){let c;j(n,J,r=>o(6,c=r));let{data:u}=l,i,a,f=u.technique.description["@graph"][0];const _=`${f["rdfs:label"]} - Technique ${f["d3f:d3fend-id"]}`,d=`${f["rdfs:label"]} - Technique ${f["d3f:d3fend-id"]}`;y(()=>{o(5,a=document.getElementsByTagName("body")[0])}),K(()=>{a==null||a.classList.remove("scroll--none")});const s=()=>i.close(),e=()=>i.close();function t(r){F[r?"unshift":"push"](()=>{i=r,o(1,i)})}return n.$$set=r=>{"data"in r&&o(0,u=r.data)},n.$$.update=()=>{n.$$.dirty&98&&(i&&c.url.searchParams.size?(i.showModal(),a==null||a.classList.add("scroll--none")):i&&(i.close(),a==null||a.classList.remove("scroll--none")))},[u,i,f,_,d,a,c,s,e,t]}class ae extends P{constructor(l){super(),S(this,l,Z,Y,z,{data:0})}}export{ae as default};
