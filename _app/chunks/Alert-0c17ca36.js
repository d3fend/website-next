import{S as g,i as h,s as m,H as b,e as d,c as v,a as y,d as f,b as u,f as c,g as k,K as q,L as A,M as w,q as z,o as M,v as S}from"./index-a02da30e.js";function C(i){let t,s,n;const o=i[5].default,l=b(o,i,i[4],null);return{c(){t=d("div"),l&&l.c(),this.h()},l(e){t=v(e,"DIV",{class:!0,style:!0});var a=y(t);l&&l.l(a),a.forEach(f),this.h()},h(){u(t,"class",s="text-small "+i[1]+" svelte-irizvq"),c(t,"background-color",i[2]),c(t,"text-align",i[0])},m(e,a){k(e,t,a),l&&l.m(t,null),n=!0},p(e,[a]){l&&l.p&&(!n||a&16)&&q(l,o,e,e[4],n?w(o,e[4],a,null):A(e[4]),null),(!n||a&2&&s!==(s="text-small "+e[1]+" svelte-irizvq"))&&u(t,"class",s),(!n||a&4)&&c(t,"background-color",e[2]),(!n||a&1)&&c(t,"text-align",e[0])},i(e){n||(z(l,e),n=!0)},o(e){M(l,e),n=!1},d(e){e&&f(t),l&&l.d(e)}}}function D(i,t,s){let{$$slots:n={},$$scope:o}=t,{alert_type:l="info"}=t,{text_align:e="center"}=t,{align:a="center"}=t,_;return S(async()=>{switch(l){case"info":s(2,_="lightblue");break;case"error":s(2,_="lightred");break;case"warning":s(2,_="lightorange");break;case"success":s(2,_="lightgreen");break}}),i.$$set=r=>{"alert_type"in r&&s(3,l=r.alert_type),"text_align"in r&&s(0,e=r.text_align),"align"in r&&s(1,a=r.align),"$$scope"in r&&s(4,o=r.$$scope)},[e,a,_,l,o,n]}class H extends g{constructor(t){super(),h(this,t,D,C,m,{alert_type:3,text_align:0,align:1})}}export{H as A};
