import{s as G,c as T,e as k,b as h,d as v,f as O,i as b,j as m,v as A,r as E,k as B,l as p,P as y,u as U,g as V,a as j,x as H,Y as J,F as P}from"./scheduler.xR-uXgLO.js";import{S as L,i as Q,t as q,a as F}from"./index.BpaDVXPB.js";const W=s=>({}),Y=s=>({}),X=s=>({}),z=s=>({});function Z(s){let l,u="Esc",o,d;return{c(){l=k("kbd"),l.textContent=u,this.h()},l(n){l=v(n,"KBD",{title:!0,class:!0,"data-svelte-h":!0}),A(l)!=="svelte-13prh44"&&(l.textContent=u),this.h()},h(){E(l,"title","Close this modal (navigate backwards)."),E(l,"class","svelte-m1ygw"),P(l,"down",s[0])},m(n,c){B(n,l,c),o||(d=y(l,"click",s[3]),o=!0)},p(n,c){c&1&&P(l,"down",n[0])},d(n){n&&b(l),o=!1,d()}}}function x(s){let l,u,o,d,n,c,g,w,C,a,K="close",$,_,I,N;const M=s[5].header,D=T(M,s,s[4],z),i=D||Z(s),R=s[5].default,f=T(R,s,s[4],null),S=s[5].footer,r=T(S,s,s[4],Y);return{c(){l=k("div"),u=h(),o=k("div"),i&&i.c(),d=h(),n=k("br"),c=h(),f&&f.c(),g=h(),w=k("br"),C=h(),a=k("button"),a.textContent=K,$=h(),r&&r.c(),this.h()},l(e){l=v(e,"DIV",{class:!0}),O(l).forEach(b),u=m(e),o=v(e,"DIV",{class:!0});var t=O(o);i&&i.l(t),d=m(t),n=v(t,"BR",{}),c=m(t),f&&f.l(t),g=m(t),w=v(t,"BR",{}),C=m(t),a=v(t,"BUTTON",{class:!0,"data-svelte-h":!0}),A(a)!=="svelte-12i1kop"&&(a.textContent=K),$=m(t),r&&r.l(t),t.forEach(b),this.h()},h(){E(l,"class","modal-background svelte-m1ygw"),E(a,"class","svelte-m1ygw"),E(o,"class","modal svelte-m1ygw")},m(e,t){B(e,l,t),B(e,u,t),B(e,o,t),i&&i.m(o,null),p(o,d),p(o,n),p(o,c),f&&f.m(o,null),p(o,g),p(o,w),p(o,C),p(o,a),p(o,$),r&&r.m(o,null),_=!0,I||(N=[y(window,"keydown",s[1]),y(window,"keyup",s[2]),y(l,"click",s[3]),y(a,"click",s[3])],I=!0)},p(e,[t]){D?D.p&&(!_||t&16)&&U(D,M,e,e[4],_?j(M,e[4],t,X):V(e[4]),z):i&&i.p&&(!_||t&1)&&i.p(e,_?t:-1),f&&f.p&&(!_||t&16)&&U(f,R,e,e[4],_?j(R,e[4],t,null):V(e[4]),null),r&&r.p&&(!_||t&16)&&U(r,S,e,e[4],_?j(S,e[4],t,W):V(e[4]),Y)},i(e){_||(q(i,e),q(f,e),q(r,e),_=!0)},o(e){F(i,e),F(f,e),F(r,e),_=!1},d(e){e&&(b(l),b(u),b(o)),i&&i.d(e),f&&f.d(e),r&&r.d(e),I=!1,H(N)}}}function ee(s,l,u){let{$$slots:o={},$$scope:d}=l;const n=J();let c=!1;function g(a){a.key==="Escape"&&u(0,c=!0)}function w(a){a.key==="Escape"&&(u(0,c=!0),n("close"))}function C(){n("close")}return s.$$set=a=>{"$$scope"in a&&u(4,d=a.$$scope)},[c,g,w,C,d,o]}class le extends L{constructor(l){super(),Q(this,l,ee,x,G,{})}}export{le as M};
