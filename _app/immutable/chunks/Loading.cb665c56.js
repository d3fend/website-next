import{S as ue,b as ce,s as W,j as P,f as q,h as G,E as y,p as J,k as T,l as B,m as H,o as b,G as d,X as S,H as F,q as N,v as D,P as Y,ah as _e,w as Q,t as k,N as z,e as E,O,x as Ge,a2 as je,I as $,y as x,z as ee,A as le,B as te,$ as U,c as se,u as ne,g as fe,d as oe,C as He,n as ae,r as Xe,Y as we,Z as Ee}from"./index.f8777a79.js";import"./navigation.61cd7a83.js";import{u as Ye}from"./stores.b03672be.js";import{e as j}from"./lib.576aa631.js";function Ie(r,l,s){const t=r.slice();return t[11]=l[s],t}function Se(r){let l,s=r[0]["d3f:ref-count"]["@value"]+"",t,e;return{c(){l=q("span"),t=G(s),this.h()},l(n){l=T(n,"SPAN",{class:!0,title:!0});var i=B(l);t=H(i,s),i.forEach(b),this.h()},h(){d(l,"class","ref-count svelte-2z97ft"),d(l,"title",e="This technique has "+r[0]["d3f:ref-count"]["@value"]+" public references.")},m(n,i){N(n,l,i),D(l,t)},p(n,i){i&1&&s!==(s=n[0]["d3f:ref-count"]["@value"]+"")&&Q(t,s),i&1&&e!==(e="This technique has "+n[0]["d3f:ref-count"]["@value"]+" public references.")&&d(l,"title",e)},d(n){n&&b(l)}}}function Ce(r){let l,s,t=j(r[0].children),e=[];for(let i=0;i<t.length;i+=1)e[i]=Ne(Ie(r,t,i));const n=i=>E(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=y()},l(i){for(let f=0;f<e.length;f+=1)e[f].l(i);l=y()},m(i,f){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(i,f);N(i,l,f),s=!0},p(i,f){if(f&19){t=j(i[0].children);let o;for(o=0;o<t.length;o+=1){const v=Ie(i,t,o);e[o]?(e[o].p(v,f),k(e[o],1)):(e[o]=Ne(v),e[o].c(),k(e[o],1),e[o].m(l.parentNode,l))}for(z(),o=t.length;o<e.length;o+=1)n(o);O()}},i(i){if(!s){for(let f=0;f<t.length;f+=1)k(e[f]);s=!0}},o(i){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)E(e[f]);s=!1},d(i){$(e,i),i&&b(l)}}}function Ne(r){let l,s;return l=new he({props:{leaf:r[11],depth:r[1]+1,recursive:!0,parent:r[0]["@id"],theme:r[4]}}),l.$on("elementClick",r[9]),{c(){x(l.$$.fragment)},l(t){ee(l.$$.fragment,t)},m(t,e){le(l,t,e),s=!0},p(t,e){const n={};e&1&&(n.leaf=t[11]),e&2&&(n.depth=t[1]+1),e&1&&(n.parent=t[0]["@id"]),e&16&&(n.theme=t[4]),l.$set(n)},i(t){s||(k(l.$$.fragment,t),s=!0)},o(t){E(l.$$.fragment,t),s=!1},d(t){te(l,t)}}}function Ze(r){let l,s,t,e,n=r[0]["rdfs:label"]+"",i,f,o,v,g,_,a,h,u=r[0]["d3f:ref-count"]&&r[6].display_refcount&&Se(r),w=r[0].children&&Ce(r);return{c(){u&&u.c(),l=P(),s=q("div"),t=q("div"),e=q("a"),i=G(n),v=P(),w&&w.c(),g=y(),this.h()},l(m){u&&u.l(m),l=J(m),s=T(m,"DIV",{style:!0,class:!0,"data-parent":!0,title:!0});var p=B(s);t=T(p,"DIV",{style:!0,class:!0});var L=B(t);e=T(L,"A",{href:!0});var V=B(e);i=H(V,n),V.forEach(b),L.forEach(b),p.forEach(b),v=J(m),w&&w.l(m),g=y(),this.h()},h(){var m,p;d(e,"href",f="/technique/"+r[0]["@id"]),d(t,"style",""),d(t,"class","svelte-2z97ft"),S(t,"indent",r[2]),F(s,"--measure-color",((m=r[0].classes)==null?void 0:m.color)||r[5]),F(s,"--measure-select",((p=r[0].classes)==null?void 0:p.select)||""),d(s,"class","tree-leaf svelte-2z97ft"),d(s,"data-parent",r[3]),d(s,"title",o=`Definition: 

`+r[0]["d3f:definition"]),S(s,"poster_border",r[4]=="poster"),S(s,"sub-leaf",r[2]),S(s,"hidden",!r[0].hasOwnProperty("d3f:ref-count"))},m(m,p){u&&u.m(m,p),N(m,l,p),N(m,s,p),D(s,t),D(t,e),D(e,i),N(m,v,p),w&&w.m(m,p),N(m,g,p),_=!0,a||(h=Y(e,"click",_e(r[8])),a=!0)},p(m,[p]){var L,V;m[0]["d3f:ref-count"]&&m[6].display_refcount?u?u.p(m,p):(u=Se(m),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null),(!_||p&1)&&n!==(n=m[0]["rdfs:label"]+"")&&Q(i,n),(!_||p&1&&f!==(f="/technique/"+m[0]["@id"]))&&d(e,"href",f),(!_||p&4)&&S(t,"indent",m[2]),(!_||p&33)&&F(s,"--measure-color",((L=m[0].classes)==null?void 0:L.color)||m[5]),(!_||p&1)&&F(s,"--measure-select",((V=m[0].classes)==null?void 0:V.select)||""),(!_||p&8)&&d(s,"data-parent",m[3]),(!_||p&1&&o!==(o=`Definition: 

`+m[0]["d3f:definition"]))&&d(s,"title",o),(!_||p&16)&&S(s,"poster_border",m[4]=="poster"),(!_||p&4)&&S(s,"sub-leaf",m[2]),(!_||p&1)&&S(s,"hidden",!m[0].hasOwnProperty("d3f:ref-count")),m[0].children?w?(w.p(m,p),p&1&&k(w,1)):(w=Ce(m),w.c(),k(w,1),w.m(g.parentNode,g)):w&&(z(),E(w,1,1,()=>{w=null}),O())},i(m){_||(k(w),_=!0)},o(m){E(w),_=!1},d(m){u&&u.d(m),m&&b(l),m&&b(s),m&&b(v),w&&w.d(m),m&&b(g),a=!1,h()}}}function Ke(r,l,s){let t,e;Ge(r,Ye,u=>s(6,e=u));let{leaf:n}=l,{depth:i=0}=l,{recursive:f=!1}=l,{parent:o=""}=l,{theme:v}=l;const g=je(),_=(u,w,m)=>{g("elementClick",{event:u,element:w,href:m})},a=u=>_(u,n,`/technique/${n["@id"]}`);function h(u){U.call(this,r,u)}return r.$$set=u=>{"leaf"in u&&s(0,n=u.leaf),"depth"in u&&s(1,i=u.depth),"recursive"in u&&s(2,f=u.recursive),"parent"in u&&s(3,o=u.parent),"theme"in u&&s(4,v=u.theme)},r.$$.update=()=>{r.$$.dirty&4&&s(5,t=f?"#f3f3f3":"white")},[n,i,f,o,v,t,e,_,a,h]}class he extends ue{constructor(l){super(),ce(this,l,Ke,Ze,W,{leaf:0,depth:1,recursive:2,parent:3,theme:4})}}const Qe=r=>({}),De=r=>({});function Be(r,l,s){const t=r.slice();return t[23]=l[s],t}function Ve(r,l,s){const t=r.slice();return t[26]=l[s],t}function qe(r,l,s){const t=r.slice();return t[26]=l[s],t}const Re=r=>({}),Te=r=>({});function Ae(r){let l,s,t=r[0],e=[];for(let i=0;i<t.length;i+=1)e[i]=Me(Be(r,t,i));const n=i=>E(e[i],1,1,()=>{e[i]=null});return{c(){l=q("div");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){l=T(i,"DIV",{class:!0});var f=B(l);for(let o=0;o<e.length;o+=1)e[o].l(f);f.forEach(b),this.h()},h(){d(l,"class","tree-trunk svelte-1gn7evi"),S(l,"tree-trunk-first",!r[2])},m(i,f){N(i,l,f);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,null);s=!0},p(i,f){if(f&1019){t=i[0];let o;for(o=0;o<t.length;o+=1){const v=Be(i,t,o);e[o]?(e[o].p(v,f),k(e[o],1)):(e[o]=Me(v),e[o].c(),k(e[o],1),e[o].m(l,null))}for(z(),o=t.length;o<e.length;o+=1)n(o);O()}(!s||f&4)&&S(l,"tree-trunk-first",!i[2])},i(i){if(!s){for(let f=0;f<t.length;f+=1)k(e[f]);s=!0}},o(i){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)E(e[f]);s=!1},d(i){i&&b(l),$(e,i)}}}function Le(r){let l=(r[5],r[6]),s,t,e=Oe(r);return{c(){e.c(),s=y()},l(n){e.l(n),s=y()},m(n,i){e.m(n,i),N(n,s,i),t=!0},p(n,i){i&96&&W(l,l=(n[5],n[6]))?(z(),E(e,1,1,ae),O(),e=Oe(n),e.c(),k(e,1),e.m(s.parentNode,s)):e.p(n,i)},i(n){t||(k(e),t=!0)},o(n){E(e),t=!1},d(n){n&&b(s),e.d(n)}}}function Ue(r){let l,s,t=r[23]["rdfs:label"]+"",e,n,i,f,o;function v(...g){return r[17](r[23],...g)}return{c(){l=q("div"),s=q("a"),e=G(t),this.h()},l(g){l=T(g,"DIV",{class:!0});var _=B(l);s=T(_,"A",{href:!0,class:!0});var a=B(s);e=H(a,t),a.forEach(b),_.forEach(b),this.h()},h(){d(s,"href",n="/technique/"+r[23]["@id"]),d(s,"class","svelte-1gn7evi"),d(l,"class",i="tree-branch-fork tree-level-"+r[1]+" svelte-1gn7evi"),S(l,"poster_border",r[4]=="poster")},m(g,_){N(g,l,_),D(l,s),D(s,e),f||(o=Y(s,"click",_e(v)),f=!0)},p(g,_){r=g,_&1&&t!==(t=r[23]["rdfs:label"]+"")&&Q(e,t),_&1&&n!==(n="/technique/"+r[23]["@id"])&&d(s,"href",n),_&2&&i!==(i="tree-branch-fork tree-level-"+r[1]+" svelte-1gn7evi")&&d(l,"class",i),_&18&&S(l,"poster_border",r[4]=="poster")},d(g){g&&b(l),f=!1,o()}}}function We(r){let l,s,t=r[23]["rdfs:label"]+"",e,n,i,f,o,v,g,_,a=r[23]["rdfs:label"]+"",h,u,w,m,p,L,V,M,Z,X,K,R;function ie(){return r[13](r[23])}function c(){return r[14](r[23])}function I(...A){return r[15](r[23],...A)}function re(){return r[16](r[23])}return{c(){l=q("div"),s=q("div"),e=G(t),i=P(),f=q("div"),o=G("−"),g=P(),_=q("a"),h=G(a),m=P(),p=q("div"),L=q("div"),V=q("div"),M=q("a"),Z=G("+"),this.h()},l(A){l=T(A,"DIV",{class:!0});var C=B(l);s=T(C,"DIV",{class:!0,title:!0});var de=B(s);e=H(de,t),de.forEach(b),i=J(C),f=T(C,"DIV",{class:!0,title:!0});var me=B(f);o=H(me,"−"),me.forEach(b),g=J(C),_=T(C,"A",{class:!0,href:!0});var ve=B(_);h=H(ve,a),ve.forEach(b),C.forEach(b),m=J(A),p=T(A,"DIV",{class:!0});var ge=B(p);L=T(ge,"DIV",{class:!0});var be=B(L);V=T(be,"DIV",{class:!0,title:!0});var ke=B(V);M=T(ke,"A",{class:!0});var pe=B(M);Z=H(pe,"+"),pe.forEach(b),ke.forEach(b),be.forEach(b),ge.forEach(b),this.h()},h(){d(s,"class","fork-open svelte-1gn7evi"),d(s,"title",n="Expand "+r[23]["rdfs:label"]),S(s,"hide",!r[9](r[23])),d(f,"class","button-collapse small-button left svelte-1gn7evi"),d(f,"title",v="Collapse "+r[23]["rdfs:label"]),S(f,"hide",r[9](r[23])),d(_,"class","center svelte-1gn7evi"),d(_,"href",u="/tactic/"+r[23]["@id"]),S(_,"hide",r[9](r[23])),d(l,"class",w="tree-branch-fork tree-level-"+r[1]+" svelte-1gn7evi"),S(l,"poster_border",r[4]=="poster"),d(M,"class","button-open small-button svelte-1gn7evi"),d(V,"class","tree-branch-fork tree-level-1 svelte-1gn7evi"),d(V,"title",X="Expand "+r[23]["rdfs:label"]),d(L,"class","tree-branch svelte-1gn7evi"),d(p,"class","tree-trunk svelte-1gn7evi"),S(p,"hide",!r[9](r[23]))},m(A,C){N(A,l,C),D(l,s),D(s,e),D(l,i),D(l,f),D(f,o),D(l,g),D(l,_),D(_,h),N(A,m,C),N(A,p,C),D(p,L),D(L,V),D(V,M),D(M,Z),K||(R=[Y(s,"click",ie),Y(f,"click",c),Y(_,"click",_e(I)),Y(V,"click",re)],K=!0)},p(A,C){r=A,C&1&&t!==(t=r[23]["rdfs:label"]+"")&&Q(e,t),C&1&&n!==(n="Expand "+r[23]["rdfs:label"])&&d(s,"title",n),C&513&&S(s,"hide",!r[9](r[23])),C&1&&v!==(v="Collapse "+r[23]["rdfs:label"])&&d(f,"title",v),C&513&&S(f,"hide",r[9](r[23])),C&1&&a!==(a=r[23]["rdfs:label"]+"")&&Q(h,a),C&1&&u!==(u="/tactic/"+r[23]["@id"])&&d(_,"href",u),C&513&&S(_,"hide",r[9](r[23])),C&2&&w!==(w="tree-branch-fork tree-level-"+r[1]+" svelte-1gn7evi")&&d(l,"class",w),C&18&&S(l,"poster_border",r[4]=="poster"),C&1&&X!==(X="Expand "+r[23]["rdfs:label"])&&d(V,"title",X),C&513&&S(p,"hide",!r[9](r[23]))},d(A){A&&b(l),A&&b(m),A&&b(p),K=!1,Xe(R)}}}function $e(r){let l,s,t=j(r[23].children),e=[];for(let i=0;i<t.length;i+=1)e[i]=ye(qe(r,t,i));const n=i=>E(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=y()},l(i){for(let f=0;f<e.length;f+=1)e[f].l(i);l=y()},m(i,f){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(i,f);N(i,l,f),s=!0},p(i,f){if(f&17){t=j(i[23].children);let o;for(o=0;o<t.length;o+=1){const v=qe(i,t,o);e[o]?(e[o].p(v,f),k(e[o],1)):(e[o]=ye(v),e[o].c(),k(e[o],1),e[o].m(l.parentNode,l))}for(z(),o=t.length;o<e.length;o+=1)n(o);O()}},i(i){if(!s){for(let f=0;f<t.length;f+=1)k(e[f]);s=!0}},o(i){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)E(e[f]);s=!1},d(i){$(e,i),i&&b(l)}}}function xe(r){let l,s,t=r[23].children&&ze(r);return{c(){t&&t.c(),l=y()},l(e){t&&t.l(e),l=y()},m(e,n){t&&t.m(e,n),N(e,l,n),s=!0},p(e,n){e[23].children?t?(t.p(e,n),n&1&&k(t,1)):(t=ze(e),t.c(),k(t,1),t.m(l.parentNode,l)):t&&(z(),E(t,1,1,()=>{t=null}),O())},i(e){s||(k(t),s=!0)},o(e){E(t),s=!1},d(e){t&&t.d(e),e&&b(l)}}}function ye(r){let l,s;return l=new he({props:{leaf:r[26],theme:r[4]}}),l.$on("elementClick",r[19]),{c(){x(l.$$.fragment)},l(t){ee(l.$$.fragment,t)},m(t,e){le(l,t,e),s=!0},p(t,e){const n={};e&1&&(n.leaf=t[26]),e&16&&(n.theme=t[4]),l.$set(n)},i(t){s||(k(l.$$.fragment,t),s=!0)},o(t){E(l.$$.fragment,t),s=!1},d(t){te(l,t)}}}function ze(r){let l,s;return l=new tl({props:{tree:j(r[23].children),treeLevel:r[1]+1,recursive:!0,theme:r[4]}}),l.$on("elementClick",r[18]),{c(){x(l.$$.fragment)},l(t){ee(l.$$.fragment,t)},m(t,e){le(l,t,e),s=!0},p(t,e){const n={};e&1&&(n.tree=j(t[23].children)),e&2&&(n.treeLevel=t[1]+1),e&16&&(n.theme=t[4]),l.$set(n)},i(t){s||(k(l.$$.fragment,t),s=!0)},o(t){E(l.$$.fragment,t),s=!1},d(t){te(l,t)}}}function Oe(r){let l,s,t,e,n;function i(a,h){return a[1]==0?We:Ue}let f=i(r),o=f(r);const v=[xe,$e],g=[];function _(a,h){return a[1]<a[3]?0:a[23].children?1:-1}return~(t=_(r))&&(e=g[t]=v[t](r)),{c(){l=q("div"),o.c(),s=P(),e&&e.c(),this.h()},l(a){l=T(a,"DIV",{class:!0});var h=B(l);o.l(h),s=J(h),e&&e.l(h),h.forEach(b),this.h()},h(){d(l,"class","tree-branch svelte-1gn7evi"),S(l,"hide_sibling",r[1]==0&&r[9](r[23]))},m(a,h){N(a,l,h),o.m(l,null),D(l,s),~t&&g[t].m(l,null),n=!0},p(a,h){f===(f=i(a))&&o?o.p(a,h):(o.d(1),o=f(a),o&&(o.c(),o.m(l,s)));let u=t;t=_(a),t===u?~t&&g[t].p(a,h):(e&&(z(),E(g[u],1,1,()=>{g[u]=null}),O()),~t?(e=g[t],e?e.p(a,h):(e=g[t]=v[t](a),e.c()),k(e,1),e.m(l,null)):e=null),(!n||h&515)&&S(l,"hide_sibling",a[1]==0&&a[9](a[23]))},i(a){n||(k(e),n=!0)},o(a){E(e),n=!1},d(a){a&&b(l),o.d(),~t&&g[t].d()}}}function Pe(r){let l,s,t,e=r[23].children&&Je(r);return{c(){l=q("div"),e&&e.c(),s=P(),this.h()},l(n){l=T(n,"DIV",{class:!0});var i=B(l);e&&e.l(i),s=J(i),i.forEach(b),this.h()},h(){d(l,"class","tree-branch test svelte-1gn7evi")},m(n,i){N(n,l,i),e&&e.m(l,null),D(l,s),t=!0},p(n,i){n[23].children?e?(e.p(n,i),i&1&&k(e,1)):(e=Je(n),e.c(),k(e,1),e.m(l,s)):e&&(z(),E(e,1,1,()=>{e=null}),O())},i(n){t||(k(e),t=!0)},o(n){E(e),t=!1},d(n){n&&b(l),e&&e.d()}}}function Je(r){let l,s,t=j(r[23].children),e=[];for(let i=0;i<t.length;i+=1)e[i]=Fe(Ve(r,t,i));const n=i=>E(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=y()},l(i){for(let f=0;f<e.length;f+=1)e[f].l(i);l=y()},m(i,f){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(i,f);N(i,l,f),s=!0},p(i,f){if(f&17){t=j(i[23].children);let o;for(o=0;o<t.length;o+=1){const v=Ve(i,t,o);e[o]?(e[o].p(v,f),k(e[o],1)):(e[o]=Fe(v),e[o].c(),k(e[o],1),e[o].m(l.parentNode,l))}for(z(),o=t.length;o<e.length;o+=1)n(o);O()}},i(i){if(!s){for(let f=0;f<t.length;f+=1)k(e[f]);s=!0}},o(i){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)E(e[f]);s=!1},d(i){$(e,i),i&&b(l)}}}function Fe(r){let l,s;return l=new he({props:{leaf:r[26],theme:r[4]}}),l.$on("elementClick",r[20]),{c(){x(l.$$.fragment)},l(t){ee(l.$$.fragment,t)},m(t,e){le(l,t,e),s=!0},p(t,e){const n={};e&1&&(n.leaf=t[26]),e&16&&(n.theme=t[4]),l.$set(n)},i(t){s||(k(l.$$.fragment,t),s=!0)},o(t){E(l.$$.fragment,t),s=!1},d(t){te(l,t)}}}function Me(r){let l,s,t,e=r[1]<=r[3]&&Le(r),n=r[1]>r[3]&&Pe(r);return{c(){e&&e.c(),l=P(),n&&n.c(),s=y()},l(i){e&&e.l(i),l=J(i),n&&n.l(i),s=y()},m(i,f){e&&e.m(i,f),N(i,l,f),n&&n.m(i,f),N(i,s,f),t=!0},p(i,f){i[1]<=i[3]?e?(e.p(i,f),f&10&&k(e,1)):(e=Le(i),e.c(),k(e,1),e.m(l.parentNode,l)):e&&(z(),E(e,1,1,()=>{e=null}),O()),i[1]>i[3]?n?(n.p(i,f),f&10&&k(n,1)):(n=Pe(i),n.c(),k(n,1),n.m(s.parentNode,s)):n&&(z(),E(n,1,1,()=>{n=null}),O())},i(i){t||(k(e),k(n),t=!0)},o(i){E(e),E(n),t=!1},d(i){e&&e.d(i),i&&b(l),n&&n.d(i),i&&b(s)}}}function el(r){let l,s,t,e;const n=r[12].above,i=se(n,r,r[11],Te);let f=r[0].length>0&&Ae(r);const o=r[12].default,v=se(o,r,r[11],null),g=r[12].below,_=se(g,r,r[11],De);return{c(){i&&i.c(),l=P(),f&&f.c(),s=P(),v&&v.c(),t=P(),_&&_.c()},l(a){i&&i.l(a),l=J(a),f&&f.l(a),s=J(a),v&&v.l(a),t=J(a),_&&_.l(a)},m(a,h){i&&i.m(a,h),N(a,l,h),f&&f.m(a,h),N(a,s,h),v&&v.m(a,h),N(a,t,h),_&&_.m(a,h),e=!0},p(a,[h]){i&&i.p&&(!e||h&2048)&&ne(i,n,a,a[11],e?oe(n,a[11],h,Re):fe(a[11]),Te),a[0].length>0?f?(f.p(a,h),h&1&&k(f,1)):(f=Ae(a),f.c(),k(f,1),f.m(s.parentNode,s)):f&&(z(),E(f,1,1,()=>{f=null}),O()),v&&v.p&&(!e||h&2048)&&ne(v,o,a,a[11],e?oe(o,a[11],h,null):fe(a[11]),null),_&&_.p&&(!e||h&2048)&&ne(_,g,a,a[11],e?oe(g,a[11],h,Qe):fe(a[11]),De)},i(a){e||(k(i,a),k(f),k(v,a),k(_,a),e=!0)},o(a){E(i,a),E(f),E(v,a),E(_,a),e=!1},d(a){i&&i.d(a),a&&b(l),f&&f.d(a),a&&b(s),v&&v.d(a),a&&b(t),_&&_.d(a)}}}function ll(r,l,s){let{$$slots:t={},$$scope:e}=l,{tree:n}=l,{treeLevel:i=0}=l,{recursive:f=!1}=l,{row_depth:o=1}=l,{theme:v}=l,{min_display_priority:g=0}=l;const _=je();function a(c,I,re){_("elementClick",{event:c,element:I,href:re})}i>0&&n.sort((c,I)=>c["@id"].localeCompare(I["@id"]));let h=new Set,u=new Set;He(async()=>{if(localStorage.getItem("show_set"))try{JSON.parse(localStorage.getItem("show_set")).forEach(c=>h.add(c))}catch{console.warn("Failed to load show_set from localeStorage, deleting show_set"),localStorage.removeItem("show_set"),s(5,h)}if(localStorage.getItem("hide_set"))try{JSON.parse(localStorage.getItem("hide_set")).forEach(c=>u.add(c)),s(6,u)}catch{console.warn("Failed to load hide_set from localeStorage, deleting hide_set"),localStorage.removeItem("hide_set")}});function w(c){if(c["d3f:display-order"]){if(c["d3f:display-order"]["@value"]>=g)return console.debug(c["@id"]+" meets min priority of "+g),!0}else return console.debug(c["@id"]+" is less than min priority of "+g),!1}function m(c){let I=c["@id"];console.debug("before"),console.debug("show: "+Array.from(h)),console.debug("hide: "+Array.from(u)),h.has(I)?(h.delete(I),u.add(I)):u.has(I)?(h.add(I),u.delete(I)):u.has(I)&&h.has(I)?(h.delete(I),u.delete(I)):!u.has(I)&&!h.has(I)&&w(c)?u.add(I):h.add(I),s(5,h),s(6,u),h&&localStorage.setItem("show_set",JSON.stringify([...h])),u&&localStorage.setItem("hide_set",JSON.stringify([...u])),console.debug("after"),console.debug("show: "+Array.from(h)),console.debug("hide: "+Array.from(u))}function p(c){return console.debug(`Status for Branch: ${c["@id"]}`),w(c)&&console.debug(`	Branch ${c["@id"]} meets minimum priority`),h.has(c["@id"])&&console.debug(`	Branch ${c["@id"]} is in show_set`),u.has(c["@id"])?console.debug(`	Branch ${c["@id"]} is in hide_set`):console.debug(`	Branch ${c["@id"]} is not in hide_set`),!((w(c)||h.has(c["@id"]))&&!u.has(c["@id"]))}const L=c=>m(c),V=c=>m(c),M=(c,I)=>a(I,c,`/tactic/${c["@id"]}`),Z=c=>m(c),X=(c,I)=>a(I,c,`/technique/${c["@id"]}`);function K(c){U.call(this,r,c)}function R(c){U.call(this,r,c)}function ie(c){U.call(this,r,c)}return r.$$set=c=>{"tree"in c&&s(0,n=c.tree),"treeLevel"in c&&s(1,i=c.treeLevel),"recursive"in c&&s(2,f=c.recursive),"row_depth"in c&&s(3,o=c.row_depth),"theme"in c&&s(4,v=c.theme),"min_display_priority"in c&&s(10,g=c.min_display_priority),"$$scope"in c&&s(11,e=c.$$scope)},[n,i,f,o,v,h,u,a,m,p,g,e,t,L,V,M,Z,X,K,R,ie]}class tl extends ue{constructor(l){super(),ce(this,l,ll,el,W,{tree:0,treeLevel:1,recursive:2,row_depth:3,theme:4,min_display_priority:10})}}function il(r){let l,s,t;return{c(){l=we("svg"),s=we("circle"),this.h()},l(e){l=Ee(e,"svg",{height:!0,width:!0,style:!0,class:!0,viewBox:!0});var n=B(l);s=Ee(n,"circle",{role:!0,cx:!0,cy:!0,r:!0,stroke:!0,fill:!0,"stroke-width":!0,"stroke-dasharray":!0,"stroke-linecap":!0}),B(s).forEach(b),n.forEach(b),this.h()},h(){d(s,"role","presentation"),d(s,"cx","16"),d(s,"cy","16"),d(s,"r",r[4]),d(s,"stroke",r[2]),d(s,"fill","none"),d(s,"stroke-width",r[3]),d(s,"stroke-dasharray",t=r[7]+",100"),d(s,"stroke-linecap","round"),d(l,"height",r[0]),d(l,"width",r[0]),F(l,"animation-duration",r[1]+"ms"),F(l,"display",r[5]),F(l,"margin",r[6]),d(l,"class","svelte-spinner svelte-1195q9f"),d(l,"viewBox","0 0 32 32")},m(e,n){N(e,l,n),D(l,s)},p(e,[n]){n&16&&d(s,"r",e[4]),n&4&&d(s,"stroke",e[2]),n&8&&d(s,"stroke-width",e[3]),n&128&&t!==(t=e[7]+",100")&&d(s,"stroke-dasharray",t),n&1&&d(l,"height",e[0]),n&1&&d(l,"width",e[0]),n&2&&F(l,"animation-duration",e[1]+"ms"),n&32&&F(l,"display",e[5]),n&64&&F(l,"margin",e[6])},i:ae,o:ae,d(e){e&&b(l)}}}function rl(r,l,s){let{size:t=25}=l,{speed:e=750}=l,{color:n="rgba(0,0,0,0.4)"}=l,{thickness:i=2}=l,{gap:f=40}=l,{radius:o=10}=l,{display:v="block"}=l,{margin:g="auto"}=l,_;return r.$$set=a=>{"size"in a&&s(0,t=a.size),"speed"in a&&s(1,e=a.speed),"color"in a&&s(2,n=a.color),"thickness"in a&&s(3,i=a.thickness),"gap"in a&&s(8,f=a.gap),"radius"in a&&s(4,o=a.radius),"display"in a&&s(5,v=a.display),"margin"in a&&s(6,g=a.margin)},r.$$.update=()=>{r.$$.dirty&272&&s(7,_=2*Math.PI*o*(100-f)/100)},[t,e,n,i,o,v,g,_,f]}class al extends ue{constructor(l){super(),ce(this,l,rl,il,W,{size:0,speed:1,color:2,thickness:3,gap:8,radius:4,display:5,margin:6})}}export{al as L,tl as T};
