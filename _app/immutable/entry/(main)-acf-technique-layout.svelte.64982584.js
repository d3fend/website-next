import{S,b as W,s as O,f as b,k as v,l as w,o as m,G as $,q as E,P as M,N as q,e as y,O as F,t as I,r as H,x as j,C as B,_ as G,R as P,y as A,z as D,A as T,n as R,B as V,j as N,p as C,X as _,v as k,c as X,u as J,g as K,d as Q}from"../chunks/index.43e07aca.js";import{d as U}from"../chunks/stores.67412d2c.js";import{L as Y,T as Z}from"../chunks/Loading.77ba58a0.js";import{H as x}from"../chunks/Header.f71f0103.js";import"../chunks/navigation.96107ad8.js";/* empty css                                                         */import"../chunks/marked.esm.76161808.js";function ee(i){let t,e;return t=new Y({}),{c(){A(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,r){T(t,s,r),e=!0},p:R,i(s){e||(I(t.$$.fragment,s),e=!0)},o(s){y(t.$$.fragment,s),e=!1},d(s){V(t,s)}}}function se(i){let t,e,s,r,c,u,d,o=i[2]>0&&z(i),a=(i[2]<i[3]||i[2]===void 0)&&i[5]<i[4]&&L(i);return r=new Z({props:{tree:i[7],theme:i[0]}}),{c(){o&&o.c(),t=N(),a&&a.c(),e=N(),s=b("section"),A(r.$$.fragment),this.h()},l(l){o&&o.l(l),t=C(l),a&&a.l(l),e=C(l),s=v(l,"SECTION",{class:!0});var n=w(s);D(r.$$.fragment,n),n.forEach(m),this.h()},h(){$(s,"class","svelte-18shyb5")},m(l,n){o&&o.m(l,n),E(l,t,n),a&&a.m(l,n),E(l,e,n),E(l,s,n),T(r,s,null),i[10](s),c=!0,u||(d=M(s,"scroll",i[11]),u=!0)},p(l,n){l[2]>0?o?o.p(l,n):(o=z(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),(l[2]<l[3]||l[2]===void 0)&&l[5]<l[4]?a?a.p(l,n):(a=L(l),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null);const f={};n&128&&(f.tree=l[7]),n&1&&(f.theme=l[0]),r.$set(f)},i(l){c||(I(r.$$.fragment,l),c=!0)},o(l){y(r.$$.fragment,l),c=!1},d(l){o&&o.d(l),l&&m(t),a&&a.d(l),l&&m(e),l&&m(s),V(r),i[10](null),u=!1,d()}}}function z(i){let t,e;return{c(){t=b("div"),e=b("div"),this.h()},l(s){t=v(s,"DIV",{class:!0});var r=w(t);e=v(r,"DIV",{class:!0}),w(e).forEach(m),r.forEach(m),this.h()},h(){$(e,"class","svelte-18shyb5"),_(e,"scroll-indicator-left",!i[6]),_(e,"show",i[2]>0),$(t,"class","svelte-18shyb5"),_(t,"scroll-indicator-left-container",!i[6]),_(t,"show",i[2]>0)},m(s,r){E(s,t,r),k(t,e)},p(s,r){r&64&&_(e,"scroll-indicator-left",!s[6]),r&4&&_(e,"show",s[2]>0),r&64&&_(t,"scroll-indicator-left-container",!s[6]),r&4&&_(t,"show",s[2]>0)},d(s){s&&m(t)}}}function L(i){let t,e;return{c(){t=b("div"),e=b("div"),this.h()},l(s){t=v(s,"DIV",{class:!0});var r=w(t);e=v(r,"DIV",{class:!0}),w(e).forEach(m),r.forEach(m),this.h()},h(){$(e,"class","svelte-18shyb5"),_(e,"scroll-indicator-right",!i[6]),_(e,"show",i[2]<i[3]),$(t,"class","svelte-18shyb5"),_(t,"scroll-indicator-right-container",!i[6]),_(t,"show",i[2]<i[3])},m(s,r){E(s,t,r),k(t,e)},p(s,r){r&64&&_(e,"scroll-indicator-right",!s[6]),r&12&&_(e,"show",s[2]<s[3]),r&64&&_(t,"scroll-indicator-right-container",!s[6]),r&12&&_(t,"show",s[2]<s[3])},d(s){s&&m(t)}}}function te(i){let t,e,s,r,c,u;const d=[se,ee],o=[];function a(l,n){return l[7]?0:1}return e=a(i),s=o[e]=d[e](i),{c(){t=b("main"),s.c(),this.h()},l(l){t=v(l,"MAIN",{class:!0});var n=w(t);s.l(n),n.forEach(m),this.h()},h(){$(t,"class","svelte-18shyb5")},m(l,n){E(l,t,n),o[e].m(t,null),r=!0,c||(u=[M(window,"scroll",i[8]),M(window,"resize",i[8]),M(window,"load",i[8])],c=!0)},p(l,[n]){let f=e;e=a(l),e===f?o[e].p(l,n):(q(),y(o[f],1,1,()=>{o[f]=null}),F(),s=o[e],s?s.p(l,n):(s=o[e]=d[e](l),s.c()),I(s,1),s.m(t,null))},i(l){r||(I(s),r=!0)},o(l){y(s),r=!1},d(l){l&&m(t),o[e].d(),c=!1,H(u)}}}function le(i,t,e){let s;j(i,U,h=>e(7,s=h));let{theme:r}=t,{scroll_indicator:c=r!="poster"}=t,u,d,o,a,l,n=!1;function f(){if(c){let h=u;e(4,a=h.scrollWidth),e(5,l=h.clientWidth),e(3,o=a-l)}else e(6,n=!0)}B(async()=>{await G(),f()});function g(h){P[h?"unshift":"push"](()=>{u=h,e(1,u)})}const p=()=>e(2,d=u.scrollLeft);return i.$$set=h=>{"theme"in h&&e(0,r=h.theme),"scroll_indicator"in h&&e(9,c=h.scroll_indicator)},[r,u,d,o,a,l,n,s,f,c,g,p]}class re extends S{constructor(t){super(),W(this,t,le,te,O,{theme:0,scroll_indicator:9})}}function ie(i){let t,e,s,r,c,u,d,o,a;const l=i[1].default,n=X(l,i,i[0],null);return r=new x({}),o=new re({props:{scroll_indicator:!1}}),{c(){t=b("main"),e=b("section"),n&&n.c(),s=N(),A(r.$$.fragment),c=N(),u=b("div"),d=N(),A(o.$$.fragment),this.h()},l(f){t=v(f,"MAIN",{class:!0});var g=w(t);e=v(g,"SECTION",{});var p=w(e);n&&n.l(p),s=C(p),D(r.$$.fragment,p),c=C(p),u=v(p,"DIV",{id:!0,class:!0}),w(u).forEach(m),d=C(p),D(o.$$.fragment,p),p.forEach(m),g.forEach(m),this.h()},h(){$(u,"id","searchpad"),$(u,"class","svelte-1xxgzpr"),$(t,"class","svelte-1xxgzpr")},m(f,g){E(f,t,g),k(t,e),n&&n.m(e,null),k(e,s),T(r,e,null),k(e,c),k(e,u),k(e,d),T(o,e,null),a=!0},p(f,[g]){n&&n.p&&(!a||g&1)&&J(n,l,f,f[0],a?Q(l,f[0],g,null):K(f[0]),null)},i(f){a||(I(n,f),I(r.$$.fragment,f),I(o.$$.fragment,f),a=!0)},o(f){y(n,f),y(r.$$.fragment,f),y(o.$$.fragment,f),a=!1},d(f){f&&m(t),n&&n.d(f),V(r),V(o)}}}function ne(i,t,e){let{$$slots:s={},$$scope:r}=t;return i.$$set=c=>{"$$scope"in c&&e(0,r=c.$$scope)},[r,s]}class de extends S{constructor(t){super(),W(this,t,ne,ie,O,{})}}export{de as default};