import{s as C,e as m,b as B,d as b,f as p,i as f,j as S,x as L,k as w,l as v,n as k,P as T,H as j,w as q}from"./scheduler.DDVliNtX.js";import{e as g}from"./each.BFyodu2L.js";import{S as O,i as P}from"./index.iWffroUJ.js";function E(s,l,n){const o=s.slice();return o[2]=l[n],o}function H(s,l,n){const o=s.slice();return o[5]=l[n],o}function y(s,l,n){const o=s.slice();return o[5]=l[n],o}function D(s){let l,n,o=s[5]+"";return{c(){l=m("th"),n=new j(!1),this.h()},l(e){l=b(e,"TH",{});var t=p(l);n=q(t,!1),t.forEach(f),this.h()},h(){n.a=null},m(e,t){w(e,l,t),n.m(o,l)},p(e,t){t&1&&o!==(o=e[5]+"")&&n.p(o)},d(e){e&&f(l)}}}function x(s){let l,n,o=s[2][s[5]]+"";return{c(){l=m("td"),n=new j(!1),this.h()},l(e){l=b(e,"TD",{});var t=p(l);n=q(t,!1),t.forEach(f),this.h()},h(){n.a=null},m(e,t){w(e,l,t),n.m(o,l)},p(e,t){t&3&&o!==(o=e[2][e[5]]+"")&&n.p(o)},d(e){e&&f(l)}}}function A(s){let l,n,o=g(s[0]),e=[];for(let t=0;t<o.length;t+=1)e[t]=x(H(s,o,t));return{c(){l=m("tr");for(let t=0;t<e.length;t+=1)e[t].c();n=B()},l(t){l=b(t,"TR",{});var r=p(l);for(let h=0;h<e.length;h+=1)e[h].l(r);n=S(r),r.forEach(f)},m(t,r){w(t,l,r);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,null);v(l,n)},p(t,r){if(r&3){o=g(t[0]);let h;for(h=0;h<o.length;h+=1){const i=H(t,o,h);e[h]?e[h].p(i,r):(e[h]=x(i),e[h].c(),e[h].m(l,n))}for(;h<e.length;h+=1)e[h].d(1);e.length=o.length}},d(t){t&&f(l),T(e,t)}}}function R(s){let l,n,o,e,t=g(s[0]),r=[];for(let c=0;c<t.length;c+=1)r[c]=D(y(s,t,c));let h=g(s[1]),i=[];for(let c=0;c<h.length;c+=1)i[c]=A(E(s,h,c));return{c(){l=m("table"),n=m("thead");for(let c=0;c<r.length;c+=1)r[c].c();o=B(),e=m("tbody");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){l=b(c,"TABLE",{class:!0});var _=p(l);n=b(_,"THEAD",{});var a=p(n);for(let d=0;d<r.length;d+=1)r[d].l(a);a.forEach(f),o=S(_),e=b(_,"TBODY",{});var u=p(e);for(let d=0;d<i.length;d+=1)i[d].l(u);u.forEach(f),_.forEach(f),this.h()},h(){L(l,"class","table-auto")},m(c,_){w(c,l,_),v(l,n);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(n,null);v(l,o),v(l,e);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(c,[_]){if(_&1){t=g(c[0]);let a;for(a=0;a<t.length;a+=1){const u=y(c,t,a);r[a]?r[a].p(u,_):(r[a]=D(u),r[a].c(),r[a].m(n,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}if(_&3){h=g(c[1]);let a;for(a=0;a<h.length;a+=1){const u=E(c,h,a);i[a]?i[a].p(u,_):(i[a]=A(u),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=h.length}},i:k,o:k,d(c){c&&f(l),T(r,c),T(i,c)}}}function Y(s,l,n){let{table_cols:o=[]}=l,{table_rows:e=[{}]}=l;return s.$$set=t=>{"table_cols"in t&&n(0,o=t.table_cols),"table_rows"in t&&n(1,e=t.table_rows)},[o,e]}class I extends O{constructor(l){super(),P(this,l,Y,R,C,{table_cols:0,table_rows:1})}}export{I as T};
