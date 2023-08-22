import{e as X}from"../chunks/index.5e2a9a64.js";import{s as L,f as h,l as Y,a as b,P as A,g as p,h as y,m as Z,d as _,c as q,F as x,Q as J,j as E,i as N,x as u,n as tt}from"../chunks/scheduler.3032ca4b.js";import{S as U,i as W,b as k,d as G,m as M,a as O,t as P,e as V}from"../chunks/index.ee8739bf.js";import{g as et}from"../chunks/navigation.d10cd505.js";import{G as K}from"../chunks/lib.d08f5f84.js";import{m as I}from"../chunks/marked.esm.76161808.js";import{T as at}from"../chunks/TechniqueSubclasses.1cfb888c.js";import{M as st}from"../chunks/Modal_full.130c4de7.js";import{T as nt}from"../chunks/Title.8f901ed1.js";const it=!0;async function rt({params:n,fetch:e}){const s=n.tactic,t=await e(`/api/tactic/${s}.json`),i=await t.json();if(t.status!==200)throw X(500,i.message);return{...i,tactic_id:s}}const wt=Object.freeze(Object.defineProperty({__proto__:null,load:rt,prerender:it},Symbol.toStringTag,{value:"Module"}));function lt(n){let e,s,t=n[0]["rdfs:label"]+"",i,a,l,f,c,g,Q="Definition",z,w,S=I(n[0]["d3f:definition"]||"")+"",j,T,C=I(n[0]["d3f:kb-article"]||"")+"",B,F,D,m,d;return m=new at({props:{title:"Techniques",techniques:n[1],category_name:n[0]["rdfs:label"]}}),{c(){e=h("section"),s=h("h1"),i=Y(t),a=b(),l=h("div"),f=h("div"),c=h("div"),g=h("h2"),g.textContent=Q,z=b(),w=new A(!1),j=b(),T=new A(!1),B=b(),F=h("br"),D=b(),k(m.$$.fragment),this.h()},l(r){e=p(r,"SECTION",{class:!0});var o=y(e);s=p(o,"H1",{class:!0});var $=y(s);i=Z($,t),$.forEach(_),a=q(o),l=p(o,"DIV",{class:!0});var R=y(l);f=p(R,"DIV",{class:!0});var H=y(f);c=p(H,"DIV",{class:!0});var v=y(c);g=p(v,"H2",{"data-svelte-h":!0}),x(g)!=="svelte-uhe5tn"&&(g.textContent=Q),z=q(v),w=J(v,!1),j=q(v),T=J(v,!1),v.forEach(_),B=q(H),F=p(H,"BR",{}),H.forEach(_),R.forEach(_),o.forEach(_),D=q(r),G(m.$$.fragment,r),this.h()},h(){E(s,"class","svelte-1u73dvo"),w.a=j,T.a=null,E(c,"class","external-html"),E(f,"class",""),E(l,"class","card"),E(e,"class","svelte-1u73dvo")},m(r,o){N(r,e,o),u(e,s),u(s,i),u(e,a),u(e,l),u(l,f),u(f,c),u(c,g),u(c,z),w.m(S,c),u(c,j),T.m(C,c),u(f,B),u(f,F),N(r,D,o),M(m,r,o),d=!0},p(r,[o]){(!d||o&1)&&t!==(t=r[0]["rdfs:label"]+"")&&tt(i,t),(!d||o&1)&&S!==(S=I(r[0]["d3f:definition"]||"")+"")&&w.p(S),(!d||o&1)&&C!==(C=I(r[0]["d3f:kb-article"]||"")+"")&&T.p(C);const $={};o&2&&($.techniques=r[1]),o&1&&($.category_name=r[0]["rdfs:label"]),m.$set($)},i(r){d||(O(m.$$.fragment,r),d=!0)},o(r){P(m.$$.fragment,r),d=!1},d(r){r&&(_(e),_(D)),V(m,r)}}}function ct(n,e,s){let{tactic:t}=e,{techniques:i}=e;return n.$$set=a=>{"tactic"in a&&s(0,t=a.tactic),"techniques"in a&&s(1,i=a.techniques)},[t,i]}class ot extends U{constructor(e){super(),W(this,e,ct,lt,L,{tactic:0,techniques:1})}}function ft(n){let e,s;return e=new ot({props:{tactic:n[2],techniques:n[1],tactic_id:n[0].tactic_id}}),{c(){k(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,i){M(e,t,i),s=!0},p(t,i){const a={};i&1&&(a.tactic_id=t[0].tactic_id),e.$set(a)},i(t){s||(O(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function ut(n){let e,s,t,i;return e=new nt({props:{title:n[2]["rdfs:label"]+" Group Details",og_title:n[2]["rdfs:label"],og_description:n[2]["d3f:definition"],og_type:"article"}}),t=new st({props:{$$slots:{default:[ft]},$$scope:{ctx:n}}}),t.$on("close",n[3]),{c(){k(e.$$.fragment),s=b(),k(t.$$.fragment)},l(a){G(e.$$.fragment,a),s=q(a),G(t.$$.fragment,a)},m(a,l){M(e,a,l),N(a,s,l),M(t,a,l),i=!0},p(a,[l]){const f={};l&33&&(f.$$scope={dirty:l,ctx:a}),t.$set(f)},i(a){i||(O(e.$$.fragment,a),O(t.$$.fragment,a),i=!0)},o(a){P(e.$$.fragment,a),P(t.$$.fragment,a),i=!1},d(a){a&&_(s),V(e,a),V(t,a)}}}function mt(n,e,s){let{data:t}=e,i=new K(t.group),a=new K(t.techniques),l=i.graph[0];function f(c){et("/")}return n.$$set=c=>{"data"in c&&s(0,t=c.data)},[t,a,l,f]}class Tt extends U{constructor(e){super(),W(this,e,mt,ut,L,{data:0})}}export{Tt as component,wt as universal};
