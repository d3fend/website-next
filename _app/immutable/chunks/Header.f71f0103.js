import{S as M,b as P,s as j,f as h,h as g,j as A,k as m,l as p,m as y,o as u,p as I,G as D,q as N,v as f,w as q,n as L,x as w,P as C,D as G}from"./index.43e07aca.js";import{u as F,v as U}from"./stores.67412d2c.js";function H(i){let e,s,l=i[1].version+"",n,o,_,t;return{c(){e=h("div"),s=h("small"),n=g(l),this.h()},l(r){e=m(r,"DIV",{class:!0,title:!0});var c=p(e);s=m(c,"SMALL",{});var b=p(s);n=y(b,l),b.forEach(u),c.forEach(u),this.h()},h(){D(e,"class","text-center version svelte-1ib5bv6"),D(e,"title",o="D3FEND Version "+i[1].version+" released on "+i[1].release_date)},m(r,c){N(r,e,c),f(e,s),f(s,n),_||(t=C(s,"click",i[2]),_=!0)},p(r,c){c&2&&l!==(l=r[1].version+"")&&q(n,l),c&2&&o!==(o="D3FEND Version "+r[1].version+" released on "+r[1].release_date)&&D(e,"title",o)},d(r){r&&u(e),_=!1,t()}}}function z(i){let e,s,l,n,o,_,t,r,c,b,a=i[1]&&H(i);return{c(){e=h("div"),s=h("div"),l=g(i[0]),n=h("sup"),o=g("™"),_=A(),t=h("div"),r=h("small"),c=g("A knowledge graph of cybersecurity countermeasures"),b=A(),a&&a.c(),this.h()},l(v){e=m(v,"DIV",{});var d=p(e);s=m(d,"DIV",{class:!0});var E=p(s);l=y(E,i[0]),n=m(E,"SUP",{class:!0});var k=p(n);o=y(k,"™"),k.forEach(u),E.forEach(u),_=I(d),t=m(d,"DIV",{class:!0});var V=p(t);r=m(V,"SMALL",{});var S=p(r);c=y(S,"A knowledge graph of cybersecurity countermeasures"),S.forEach(u),V.forEach(u),b=I(d),a&&a.l(d),d.forEach(u),this.h()},h(){D(n,"class","trademark fancy-font svelte-1ib5bv6"),D(s,"class","text-center logo fancy-font svelte-1ib5bv6"),D(t,"class","text-center tagline svelte-1ib5bv6")},m(v,d){N(v,e,d),f(e,s),f(s,l),f(s,n),f(n,o),f(e,_),f(e,t),f(t,r),f(r,c),f(e,b),a&&a.m(e,null)},p(v,[d]){d&1&&q(l,v[0]),v[1]?a?a.p(v,d):(a=H(v),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:L,o:L,d(v){v&&u(e),a&&a.d()}}}function B(i,e,s){let l,n;w(i,F,t=>s(3,l=t)),w(i,U,t=>s(1,n=t));let{header:o="D3FEND"}=e;function _(){G(F,l.display_refcount=!l.display_refcount,l)}return i.$$set=t=>{"header"in t&&s(0,o=t.header)},[o,n,_]}class O extends M{constructor(e){super(),P(this,e,B,z,j,{header:0})}}export{O as H};