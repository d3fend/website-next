import{S as Y,b as Z,s as x,E as G,q as h,e as $,O as ee,t as k,o as b,x as R,C as te,D as I,N as ne,R as L,T as U,c as K,f as S,y as w,j as A,k as T,l as j,z as F,p as O,G as z,A as q,v as se,U as V,u as P,g as Q,d as W,B as C}from"../chunks/index.f8777a79.js";import{v as H,d as J}from"../chunks/stores.b03672be.js";import{N as ae,F as oe}from"../chunks/Notification.0f8504ca.js";import{N as re,a as le}from"../chunks/Nav-mobile.dd5ff977.js";import{p as fe}from"../chunks/stores.ceda234b.js";import{s as ie}from"../chunks/lib.576aa631.js";function _e(r){let n,t,s,a,l,i,d,o,u,m,N,p,v,g;function _(e){r[6](e)}let B={current_path:r[1]};r[0]!==void 0&&(B.open=r[0]),t=new re({props:B}),L.push(()=>U(t,"open",_));function X(e){r[7](e)}let D={current_path:r[1]};r[0]!==void 0&&(D.sidebar=r[0]),l=new le({props:D}),L.push(()=>U(l,"sidebar",X));const M=r[5].default,c=K(M,r,r[4],null);return m=new ae({}),v=new oe({}),{c(){n=S("nav"),w(t.$$.fragment),a=A(),w(l.$$.fragment),d=A(),o=S("main"),c&&c.c(),u=A(),w(m.$$.fragment),N=A(),p=S("footer"),w(v.$$.fragment),this.h()},l(e){n=T(e,"NAV",{class:!0});var f=j(n);F(t.$$.fragment,f),a=O(f),F(l.$$.fragment,f),f.forEach(b),d=O(e),o=T(e,"MAIN",{class:!0});var y=j(o);c&&c.l(y),y.forEach(b),u=O(e),F(m.$$.fragment,e),N=O(e),p=T(e,"FOOTER",{class:!0});var E=j(p);F(v.$$.fragment,E),E.forEach(b),this.h()},h(){z(n,"class","svelte-anufko"),z(o,"class","svelte-anufko"),z(p,"class","svelte-anufko")},m(e,f){h(e,n,f),q(t,n,null),se(n,a),q(l,n,null),h(e,d,f),h(e,o,f),c&&c.m(o,null),h(e,u,f),q(m,e,f),h(e,N,f),h(e,p,f),q(v,p,null),g=!0},p(e,f){const y={};f&2&&(y.current_path=e[1]),!s&&f&1&&(s=!0,y.open=e[0],V(()=>s=!1)),t.$set(y);const E={};f&2&&(E.current_path=e[1]),!i&&f&1&&(i=!0,E.sidebar=e[0],V(()=>i=!1)),l.$set(E),c&&c.p&&(!g||f&16)&&P(c,M,e,e[4],g?W(M,e[4],f,null):Q(e[4]),null)},i(e){g||(k(t.$$.fragment,e),k(l.$$.fragment,e),k(c,e),k(m.$$.fragment,e),k(v.$$.fragment,e),g=!0)},o(e){$(t.$$.fragment,e),$(l.$$.fragment,e),$(c,e),$(m.$$.fragment,e),$(v.$$.fragment,e),g=!1},d(e){e&&b(n),C(t),C(l),e&&b(d),e&&b(o),c&&c.d(e),e&&b(u),C(m,e),e&&b(N),e&&b(p),C(v)}}}function ue(r){let n;const t=r[5].default,s=K(t,r,r[4],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){s&&s.p&&(!n||l&16)&&P(s,t,a,a[4],n?W(t,a[4],l,null):Q(a[4]),null)},i(a){n||(k(s,a),n=!0)},o(a){$(s,a),n=!1},d(a){s&&s.d(a)}}}function me(r){let n,t,s,a;const l=[ue,_e],i=[];function d(o,u){return o[1]==="poster"?0:1}return n=d(r),t=i[n]=l[n](r),{c(){t.c(),s=G()},l(o){t.l(o),s=G()},m(o,u){i[n].m(o,u),h(o,s,u),a=!0},p(o,[u]){let m=n;n=d(o),n===m?i[n].p(o,u):(ne(),$(i[m],1,1,()=>{i[m]=null}),ee(),t=i[n],t?t.p(o,u):(t=i[n]=l[n](o),t.c()),k(t,1),t.m(s.parentNode,s))},i(o){a||(k(t),a=!0)},o(o){$(t),a=!1},d(o){i[n].d(o),o&&b(s)}}}function pe(r,n,t){let s,a,l,i;R(r,H,_=>t(8,a=_)),R(r,J,_=>t(9,l=_)),R(r,fe,_=>t(3,i=_));let{$$slots:d={},$$scope:o}=n,{data:u}=n,{remote_d3fend_tree:m,remote_version_info:N}=u,p=!1;te(async()=>{I(J,l=m,l),I(H,a=N,a)});function v(_){p=_,t(0,p)}function g(_){p=_,t(0,p)}return r.$$set=_=>{"data"in _&&t(2,u=_.data),"$$scope"in _&&t(4,o=_.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&t(1,s=ie(i.url.pathname,"/"))},[p,s,u,i,o,d,v,g]}class ke extends Y{constructor(n){super(),Z(this,n,pe,me,x,{data:2})}}export{ke as default};
