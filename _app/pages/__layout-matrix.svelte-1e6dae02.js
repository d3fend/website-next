import{S as Y,i as Z,s as x,l as H,g as h,o as k,p as ee,q as $,d,R as I,v as te,$ as J,n as ne,F as K,G as L,H as D,e as O,w as N,k as j,c as R,a as S,x as E,m as F,b as B,y as M,I as se,J as T,K as P,L as Q,M as U,B as q}from"../chunks/index-a02da30e.js";import{v as V,d as z}from"../chunks/stores-59d8ae96.js";import{N as oe,a as re,b as ae,F as ie}from"../chunks/Nav-mobile-a10ff948.js";import{p as le}from"../chunks/stores-cf129ad8.js";import{s as _e}from"../chunks/lib-c0e834da.js";import"../chunks/index-98a102c4.js";import"../chunks/config-6e32f34b.js";import"../chunks/marked.esm-8ab30116.js";function fe(s){let n,t,r,o,l,f,b,a,u,m,c,v,g,i;function W(e){s[7](e)}let C={current_path:s[1]};s[0]!==void 0&&(C.open=s[0]),t=new oe({props:C}),K.push(()=>L(t,"open",W));function X(e){s[8](e)}let G={current_path:s[1]};s[0]!==void 0&&(G.sidebar=s[0]),l=new re({props:G}),K.push(()=>L(l,"sidebar",X));const A=s[6].default,p=D(A,s,s[5],null);return m=new ae({}),g=new ie({}),{c(){n=O("nav"),N(t.$$.fragment),o=j(),N(l.$$.fragment),b=j(),a=O("main"),p&&p.c(),u=j(),N(m.$$.fragment),c=j(),v=O("footer"),N(g.$$.fragment),this.h()},l(e){n=R(e,"NAV",{class:!0});var _=S(n);E(t.$$.fragment,_),o=F(_),E(l.$$.fragment,_),_.forEach(d),b=F(e),a=R(e,"MAIN",{class:!0});var w=S(a);p&&p.l(w),w.forEach(d),u=F(e),E(m.$$.fragment,e),c=F(e),v=R(e,"FOOTER",{class:!0});var y=S(v);E(g.$$.fragment,y),y.forEach(d),this.h()},h(){B(n,"class","svelte-acckgo"),B(a,"class","svelte-acckgo"),B(v,"class","svelte-acckgo")},m(e,_){h(e,n,_),M(t,n,null),se(n,o),M(l,n,null),h(e,b,_),h(e,a,_),p&&p.m(a,null),h(e,u,_),M(m,e,_),h(e,c,_),h(e,v,_),M(g,v,null),i=!0},p(e,_){const w={};_&2&&(w.current_path=e[1]),!r&&_&1&&(r=!0,w.open=e[0],T(()=>r=!1)),t.$set(w);const y={};_&2&&(y.current_path=e[1]),!f&&_&1&&(f=!0,y.sidebar=e[0],T(()=>f=!1)),l.$set(y),p&&p.p&&(!i||_&32)&&P(p,A,e,e[5],i?U(A,e[5],_,null):Q(e[5]),null)},i(e){i||($(t.$$.fragment,e),$(l.$$.fragment,e),$(p,e),$(m.$$.fragment,e),$(g.$$.fragment,e),i=!0)},o(e){k(t.$$.fragment,e),k(l.$$.fragment,e),k(p,e),k(m.$$.fragment,e),k(g.$$.fragment,e),i=!1},d(e){e&&d(n),q(t),q(l),e&&d(b),e&&d(a),p&&p.d(e),e&&d(u),q(m,e),e&&d(c),e&&d(v),q(g)}}}function ue(s){let n;const t=s[6].default,r=D(t,s,s[5],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,l){r&&r.m(o,l),n=!0},p(o,l){r&&r.p&&(!n||l&32)&&P(r,t,o,o[5],n?U(t,o[5],l,null):Q(o[5]),null)},i(o){n||($(r,o),n=!0)},o(o){k(r,o),n=!1},d(o){r&&r.d(o)}}}function me(s){let n,t,r,o;const l=[ue,fe],f=[];function b(a,u){return a[1]==="poster"?0:1}return n=b(s),t=f[n]=l[n](s),{c(){t.c(),r=H()},l(a){t.l(a),r=H()},m(a,u){f[n].m(a,u),h(a,r,u),o=!0},p(a,[u]){let m=n;n=b(a),n===m?f[n].p(a,u):(ne(),k(f[m],1,1,()=>{f[m]=null}),ee(),t=f[n],t?t.p(a,u):(t=f[n]=l[n](a),t.c()),$(t,1),t.m(r.parentNode,r))},i(a){o||($(t),o=!0)},o(a){k(t),o=!1},d(a){f[n].d(a),a&&d(r)}}}async function we({fetch:s}){const t=await(await s("/api/matrix.json")).json(),o=await(await s("/api/version.json")).json();return{props:{remote_d3fend_tree:t,remote_version_info:o}}}function pe(s,n,t){let r,o,l,f;I(s,V,i=>t(9,o=i)),I(s,z,i=>t(10,l=i)),I(s,le,i=>t(4,f=i));let{$$slots:b={},$$scope:a}=n,{remote_d3fend_tree:u}=n,{remote_version_info:m}=n,c=!1;te(async()=>{J(z,l=u,l),J(V,o=m,o)});function v(i){c=i,t(0,c)}function g(i){c=i,t(0,c)}return s.$$set=i=>{"remote_d3fend_tree"in i&&t(2,u=i.remote_d3fend_tree),"remote_version_info"in i&&t(3,m=i.remote_version_info),"$$scope"in i&&t(5,a=i.$$scope)},s.$$.update=()=>{s.$$.dirty&16&&t(1,r=_e(f.url.pathname,"/"))},[c,r,u,m,f,a,b,v,g]}class ye extends Y{constructor(n){super(),Z(this,n,pe,me,x,{remote_d3fend_tree:2,remote_version_info:3})}}export{ye as default,we as load};
