import{S as P,b as Q,s as j,f as k,j as S,k as g,l as v,o as h,p as A,G as y,q as m,v as T,n as d,I as L,E,h as C,m as G}from"./index.f8777a79.js";function H(s,l,c){const i=s.slice();i[8]=l[c];const f=i[5](i[8]);return i[9]=f,i}function R(s,l,c){const i=s.slice();return i[12]=l[c],i}function N(s,l,c){const i=s.slice();return i[12]=l[c],i}function I(s){return{c:d,l:d,m:d,p:d,d}}function O(s){let l,c=s[12].replace("_"," ")+"",i,f;return{c(){l=k("th"),i=C(c),f=S(),this.h()},l(t){l=g(t,"TH",{class:!0});var n=v(l);i=G(n,c),n.forEach(h),f=A(t),this.h()},h(){y(l,"class","svelte-1btwx83")},m(t,n){m(t,l,n),T(l,i),m(t,f,n)},p:d,d(t){t&&h(l),t&&h(f)}}}function q(s){let l,c,i;function f(e,o){if(o&12&&(l=null),o&18&&(c=null),l==null&&(l=!!(e[2].includes(e[12])||e[12].includes(e[3]))),l)return O;if(c==null&&(c=!!(e[1].includes(e[12])||e[1].includes("*")||e[12].includes(e[4]))),c)return I}let t=f(s,-1),n=t&&t(s);return{c(){n&&n.c(),i=E()},l(e){n&&n.l(e),i=E()},m(e,o){n&&n.m(e,o),m(e,i,o)},p(e,o){t===(t=f(e,o))&&n?n.p(e,o):(n&&n.d(1),n=t&&t(e),n&&(n.c(),n.m(i.parentNode,i)))},d(e){n&&n.d(e),e&&h(i)}}}function Y(s){return{c:d,l:d,m:d,p:d,d}}function p(s){let l;function c(t,n){return t[12]in t[9]?F:z}let i=c(s),f=i(s);return{c(){f.c(),l=E()},l(t){f.l(t),l=E()},m(t,n){f.m(t,n),m(t,l,n)},p(t,n){i===(i=c(t))&&f?f.p(t,n):(f.d(1),f=i(t),f&&(f.c(),f.m(l.parentNode,l)))},d(t){f.d(t),t&&h(l)}}}function z(s){let l;return{c(){l=k("td"),this.h()},l(c){l=g(c,"TD",{class:!0}),v(l).forEach(h),this.h()},h(){y(l,"class","svelte-1btwx83")},m(c,i){m(c,l,i)},p:d,d(c){c&&h(l)}}}function F(s){let l,c=s[9][s[12]].value+"";return{c(){l=k("td"),this.h()},l(i){l=g(i,"TD",{class:!0});var f=v(l);f.forEach(h),this.h()},h(){y(l,"class","svelte-1btwx83")},m(i,f){m(i,l,f),l.innerHTML=c},p(i,f){f&33&&c!==(c=i[9][i[12]].value+"")&&(l.innerHTML=c)},d(i){i&&h(l)}}}function B(s){let l,c,i;function f(e,o){if(o&12&&(l=null),o&18&&(c=null),l==null&&(l=!!(e[2].includes(e[12])||e[12].includes(e[3]))),l)return p;if(c==null&&(c=!!(e[1].includes(e[12])||e[1].includes("*")||e[12].includes(e[4]))),c)return Y}let t=f(s,-1),n=t&&t(s);return{c(){n&&n.c(),i=E()},l(e){n&&n.l(e),i=E()},m(e,o){n&&n.m(e,o),m(e,i,o)},p(e,o){t===(t=f(e,o))&&n?n.p(e,o):(n&&n.d(1),n=t&&t(e),n&&(n.c(),n.m(i.parentNode,i)))},d(e){n&&n.d(e),e&&h(i)}}}function M(s){let l,c,i=s[6],f=[];for(let t=0;t<i.length;t+=1)f[t]=B(R(s,i,t));return{c(){l=k("tr");for(let t=0;t<f.length;t+=1)f[t].c();c=S()},l(t){l=g(t,"TR",{});var n=v(l);for(let e=0;e<f.length;e+=1)f[e].l(n);c=A(n),n.forEach(h)},m(t,n){m(t,l,n);for(let e=0;e<f.length;e+=1)f[e]&&f[e].m(l,null);T(l,c)},p(t,n){if(n&127){i=t[6];let e;for(e=0;e<i.length;e+=1){const o=R(t,i,e);f[e]?f[e].p(o,n):(f[e]=B(o),f[e].c(),f[e].m(l,c))}for(;e<f.length;e+=1)f[e].d(1);f.length=i.length}},d(t){t&&h(l),L(f,t)}}}function J(s){let l,c,i,f,t,n=s[6],e=[];for(let _=0;_<n.length;_+=1)e[_]=q(N(s,n,_));let o=s[0].results.bindings,u=[];for(let _=0;_<o.length;_+=1)u[_]=M(H(s,o,_));return{c(){l=k("table"),c=k("thead"),i=k("tr");for(let _=0;_<e.length;_+=1)e[_].c();f=S(),t=k("tbody");for(let _=0;_<u.length;_+=1)u[_].c();this.h()},l(_){l=g(_,"TABLE",{class:!0});var a=v(l);c=g(a,"THEAD",{});var r=v(c);i=g(r,"TR",{});var b=v(i);for(let w=0;w<e.length;w+=1)e[w].l(b);b.forEach(h),r.forEach(h),f=A(a),t=g(a,"TBODY",{});var D=v(t);for(let w=0;w<u.length;w+=1)u[w].l(D);D.forEach(h),a.forEach(h),this.h()},h(){y(l,"class","font-small center svelte-1btwx83")},m(_,a){m(_,l,a),T(l,c),T(c,i);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(i,null);T(l,f),T(l,t);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(t,null)},p(_,[a]){if(a&94){n=_[6];let r;for(r=0;r<n.length;r+=1){const b=N(_,n,r);e[r]?e[r].p(b,a):(e[r]=q(b),e[r].c(),e[r].m(i,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=n.length}if(a&127){o=_[0].results.bindings;let r;for(r=0;r<o.length;r+=1){const b=H(_,o,r);u[r]?u[r].p(b,a):(u[r]=M(b),u[r].c(),u[r].m(t,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=o.length}},i:d,o:d,d(_){_&&h(l),L(e,_),L(u,_)}}}function K(s,l,c){let{results:i}=l,{exclude:f=["*"]}=l,{include:t=[]}=l,{select:n=""}=l,{filter:e=""}=l,{transform_row:o=a=>a}=l,{transform_head:u=a=>a}=l,_=u(i.head.vars);return s.$$set=a=>{"results"in a&&c(0,i=a.results),"exclude"in a&&c(1,f=a.exclude),"include"in a&&c(2,t=a.include),"select"in a&&c(3,n=a.select),"filter"in a&&c(4,e=a.filter),"transform_row"in a&&c(5,o=a.transform_row),"transform_head"in a&&c(7,u=a.transform_head)},[i,f,t,n,e,o,_,u]}class V extends P{constructor(l){super(),Q(this,l,K,J,j,{results:0,exclude:1,include:2,select:3,filter:4,transform_row:5,transform_head:7})}}export{V as S};
