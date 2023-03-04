import{S as re,i as ie,s as oe,G as pe,y as Z,a as H,k as v,q as C,z as x,c as w,l as g,m as E,r as L,h as u,n as y,A as ee,b as U,H as h,u as F,J as ve,K as ge,L as Ee,g as q,d as J,B as te,o as Fe,ae as qe,w as ae,C as be,V as le,e as W,F as Me,I as Ve,v as je,f as ze}from"../chunks/index.38e6a1b1.js";import{b as Je,a as Ye}from"../chunks/navigation.9397734b.js";import{T as Ge}from"../chunks/Title.76b3b16c.js";import{i as De}from"../chunks/isEmpty.55125cbe.js";import{S as Ke}from"../chunks/SimpleAutocomplete.2435e796.js";import{t as Qe}from"../chunks/toString.f08f8ecc.js";function ye(r){return Qe(r).toUpperCase()}const We=r=>({}),Te=r=>({}),Xe=r=>({}),ke=r=>({});function Ze(r){let e,t,l,s,c,a,i,n,f,o,_,S,I,k,N,D,T;e=new Ge({props:{title:r[0]}});const m=r[5].list,d=pe(m,r,r[4],ke),p=r[5].api,A=pe(p,r,r[4],Te);return{c(){Z(e.$$.fragment),t=H(),l=v("header"),s=v("h1"),c=C(r[1]),a=H(),i=v("p"),n=C(`The D3FEND REST API is used to populate the views on the D3FEND website.
    This is an alpha version API, please send `),f=v("a"),o=C("feedback"),_=C(`
    to help improve this community resource.`),S=H(),I=v("main"),k=v("aside"),d&&d.c(),N=H(),D=v("section"),A&&A.c(),this.h()},l(b){x(e.$$.fragment,b),t=w(b),l=g(b,"HEADER",{class:!0});var O=E(l);s=g(O,"H1",{class:!0});var $=E(s);c=L($,r[1]),$.forEach(u),a=w(O),i=g(O,"P",{class:!0});var M=E(i);n=L(M,`The D3FEND REST API is used to populate the views on the D3FEND website.
    This is an alpha version API, please send `),f=g(M,"A",{href:!0});var Y=E(f);o=L(Y,"feedback"),Y.forEach(u),_=L(M,`
    to help improve this community resource.`),M.forEach(u),O.forEach(u),S=w(b),I=g(b,"MAIN",{class:!0});var V=E(I);k=g(V,"ASIDE",{id:!0,class:!0});var K=E(k);d&&d.l(K),K.forEach(u),N=w(V),D=g(V,"SECTION",{id:!0,class:!0});var B=E(D);A&&A.l(B),B.forEach(u),V.forEach(u),this.h()},h(){y(s,"class","text-center"),y(f,"href","/contribute"),y(i,"class","text-center"),y(l,"class","content"),y(k,"id","container-list-api"),y(k,"class","card svelte-v3s3h3"),y(D,"id","container-details"),y(D,"class","flex flex-start svelte-v3s3h3"),y(I,"class","content svelte-v3s3h3")},m(b,O){ee(e,b,O),U(b,t,O),U(b,l,O),h(l,s),h(s,c),h(l,a),h(l,i),h(i,n),h(i,f),h(f,o),h(i,_),U(b,S,O),U(b,I,O),h(I,k),d&&d.m(k,null),r[6](k),h(I,N),h(I,D),A&&A.m(D,null),r[7](D),T=!0},p(b,[O]){const $={};O&1&&($.title=b[0]),e.$set($),(!T||O&2)&&F(c,b[1]),d&&d.p&&(!T||O&16)&&ve(d,m,b,b[4],T?Ee(m,b[4],O,Xe):ge(b[4]),ke),A&&A.p&&(!T||O&16)&&ve(A,p,b,b[4],T?Ee(p,b[4],O,We):ge(b[4]),Te)},i(b){T||(q(e.$$.fragment,b),q(d,b),q(A,b),T=!0)},o(b){J(e.$$.fragment,b),J(d,b),J(A,b),T=!1},d(b){te(e,b),b&&u(t),b&&u(l),b&&u(S),b&&u(I),d&&d.d(b),r[6](null),A&&A.d(b),r[7](null)}}}function xe(r,e,t){let{$$slots:l={},$$scope:s}=e,{title:c}=e,{header:a}=e,i,n,f,o;const _=()=>{f=new IntersectionObserver(k=>{k.forEach(N=>{const D=N.target.getAttribute("id");N.intersectionRatio>0?n.querySelector(`div[id=${D}]`).classList.add("glow"):n.querySelector(`div[id=${D}]`).classList.remove("glow")})}),i.querySelectorAll("section[id]").forEach(k=>{f.observe(k)})};Fe(()=>{_(),o=document.getElementsByTagName("html")[0],o==null||o.classList.add("scroll-smooth")}),Je(()=>{o==null||o.classList.remove("scroll-smooth")}),Ye(()=>{o==null||o.classList.add("scroll-smooth")}),qe(()=>{f&&f.disconnect()});function S(k){ae[k?"unshift":"push"](()=>{n=k,t(3,n)})}function I(k){ae[k?"unshift":"push"](()=>{i=k,t(2,i)})}return r.$$set=k=>{"title"in k&&t(0,c=k.title),"header"in k&&t(1,a=k.header),"$$scope"in k&&t(4,s=k.$$scope)},[c,a,i,n,s,l,S,I]}class et extends re{constructor(e){super(),ie(this,e,xe,Ze,oe,{title:0,header:1})}}function Ae(r,e,t){const l=r.slice();return l[5]=e[t],l}function Ie(r,e,t){const l=r.slice();return l[5]=e[t],l}function Se(r){let e,t,l,s,c,a,i,n,f,o,_,S,I,k,N,D=r[2],T=[];for(let m=0;m<D.length;m+=1)T[m]=Oe(Ie(r,D,m));return{c(){e=v("h5"),t=C("Parameters"),l=H(),s=v("table"),c=v("thead"),a=v("th"),i=C("Name"),n=H(),f=v("th"),o=C("Type"),_=H(),S=v("th"),I=C("Description"),k=H(),N=v("tbody");for(let m=0;m<T.length;m+=1)T[m].c();this.h()},l(m){e=g(m,"H5",{id:!0});var d=E(e);t=L(d,"Parameters"),d.forEach(u),l=w(m),s=g(m,"TABLE",{class:!0});var p=E(s);c=g(p,"THEAD",{});var A=E(c);a=g(A,"TH",{});var b=E(a);i=L(b,"Name"),b.forEach(u),n=w(A),f=g(A,"TH",{});var O=E(f);o=L(O,"Type"),O.forEach(u),_=w(A),S=g(A,"TH",{});var $=E(S);I=L($,"Description"),$.forEach(u),A.forEach(u),k=w(p),N=g(p,"TBODY",{});var M=E(N);for(let Y=0;Y<T.length;Y+=1)T[Y].l(M);M.forEach(u),p.forEach(u),this.h()},h(){y(e,"id","container-parameters"),y(s,"class","table-auto svelte-sz7d95")},m(m,d){U(m,e,d),h(e,t),U(m,l,d),U(m,s,d),h(s,c),h(c,a),h(a,i),h(c,n),h(c,f),h(f,o),h(c,_),h(c,S),h(S,I),h(s,k),h(s,N);for(let p=0;p<T.length;p+=1)T[p].m(N,null)},p(m,d){if(d&4){D=m[2];let p;for(p=0;p<D.length;p+=1){const A=Ie(m,D,p);T[p]?T[p].p(A,d):(T[p]=Oe(A),T[p].c(),T[p].m(N,null))}for(;p<T.length;p+=1)T[p].d(1);T.length=D.length}},d(m){m&&u(e),m&&u(l),m&&u(s),le(T,m)}}}function Ne(r){let e,t,l,s=r[5].name+"",c,a,i,n=r[5].type+"",f,o,_,S=r[5].description+"",I,k;return{c(){e=v("tr"),t=v("td"),l=v("em"),c=C(s),a=H(),i=v("td"),f=C(n),o=H(),_=v("td"),I=C(S),k=H()},l(N){e=g(N,"TR",{});var D=E(e);t=g(D,"TD",{});var T=E(t);l=g(T,"EM",{});var m=E(l);c=L(m,s),m.forEach(u),T.forEach(u),a=w(D),i=g(D,"TD",{});var d=E(i);f=L(d,n),d.forEach(u),o=w(D),_=g(D,"TD",{});var p=E(_);I=L(p,S),p.forEach(u),k=w(D),D.forEach(u)},m(N,D){U(N,e,D),h(e,t),h(t,l),h(l,c),h(e,a),h(e,i),h(i,f),h(e,o),h(e,_),h(_,I),h(e,k)},p(N,D){D&4&&s!==(s=N[5].name+"")&&F(c,s),D&4&&n!==(n=N[5].type+"")&&F(f,n),D&4&&S!==(S=N[5].description+"")&&F(I,S)},d(N){N&&u(e)}}}function Oe(r){let e,t=r[5].tag==="param"&&Ne(r);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,s){t&&t.m(l,s),U(l,e,s)},p(l,s){l[5].tag==="param"?t?t.p(l,s):(t=Ne(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&u(e)}}}function He(r){let e,t,l=r[5].type+"",s,c,a,i=r[5].description+"",n,f;return{c(){e=v("tr"),t=v("td"),s=C(l),c=H(),a=v("td"),n=C(i),f=H()},l(o){e=g(o,"TR",{});var _=E(e);t=g(_,"TD",{});var S=E(t);s=L(S,l),S.forEach(u),c=w(_),a=g(_,"TD",{});var I=E(a);n=L(I,i),I.forEach(u),f=w(_),_.forEach(u)},m(o,_){U(o,e,_),h(e,t),h(t,s),h(e,c),h(e,a),h(a,n),h(e,f)},p(o,_){_&4&&l!==(l=o[5].type+"")&&F(s,l),_&4&&i!==(i=o[5].description+"")&&F(n,i)},d(o){o&&u(e)}}}function we(r){let e,t=r[5].tag==="returns"&&He(r);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,s){t&&t.m(l,s),U(l,e,s)},p(l,s){l[5].tag==="returns"?t?t.p(l,s):(t=He(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&u(e)}}}function tt(r){var fe;let e,t,l,s,c,a=((fe=r[2][0])==null?void 0:fe.name)+"",i,n,f,o,_=r[0].endpoint+"",S,I,k=!De(r[0].params),N,D,T,m,d,p,A,b,O,$,M,Y,V,K,B=k&&Se(r),Q=r[2],j=[];for(let R=0;R<Q.length;R+=1)j[R]=we(Ae(r,Q,R));return{c(){e=v("article"),t=v("h6"),l=C(r[3]),s=H(),c=v("div"),i=C(a),n=H(),f=v("div"),o=v("b"),S=C(_),I=H(),B&&B.c(),N=H(),D=v("h5"),T=C("Returns"),m=H(),d=v("table"),p=v("thead"),A=v("th"),b=C("Type"),O=H(),$=v("th"),M=C("Description"),Y=H(),V=v("tbody");for(let R=0;R<j.length;R+=1)j[R].c();this.h()},l(R){e=g(R,"ARTICLE",{class:!0,id:!0});var P=E(e);t=g(P,"H6",{class:!0});var G=E(t);l=L(G,r[3]),G.forEach(u),s=w(P),c=g(P,"DIV",{class:!0});var z=E(c);i=L(z,a),z.forEach(u),n=w(P),f=g(P,"DIV",{});var X=E(f);o=g(X,"B",{});var he=E(o);S=L(he,_),he.forEach(u),X.forEach(u),I=w(P),B&&B.l(P),N=w(P),D=g(P,"H5",{id:!0});var _e=E(D);T=L(_e,"Returns"),_e.forEach(u),m=w(P),d=g(P,"TABLE",{class:!0});var se=E(d);p=g(se,"THEAD",{});var ne=E(p);A=g(ne,"TH",{});var ue=E(A);b=L(ue,"Type"),ue.forEach(u),O=w(ne),$=g(ne,"TH",{});var de=E($);M=L(de,"Description"),de.forEach(u),ne.forEach(u),Y=w(se),V=g(se,"TBODY",{});var me=E(V);for(let ce=0;ce<j.length;ce+=1)j[ce].l(me);me.forEach(u),se.forEach(u),P.forEach(u),this.h()},h(){y(t,"class","svelte-sz7d95"),y(c,"class","block-verb svelte-sz7d95"),y(D,"id","container-parameters"),y(d,"class","table-auto svelte-sz7d95"),y(e,"class","block-sticky card svelte-sz7d95"),y(e,"id",K=`${r[0].subDirectory}_${r[1]}`)},m(R,P){U(R,e,P),h(e,t),h(t,l),h(e,s),h(e,c),h(c,i),h(e,n),h(e,f),h(f,o),h(o,S),h(e,I),B&&B.m(e,null),h(e,N),h(e,D),h(D,T),h(e,m),h(e,d),h(d,p),h(p,A),h(A,b),h(p,O),h(p,$),h($,M),h(d,Y),h(d,V);for(let G=0;G<j.length;G+=1)j[G].m(V,null)},p(R,[P]){var G;if(P&8&&F(l,R[3]),P&4&&a!==(a=((G=R[2][0])==null?void 0:G.name)+"")&&F(i,a),P&1&&_!==(_=R[0].endpoint+"")&&F(S,_),P&1&&(k=!De(R[0].params)),k?B?B.p(R,P):(B=Se(R),B.c(),B.m(e,N)):B&&(B.d(1),B=null),P&4){Q=R[2];let z;for(z=0;z<Q.length;z+=1){const X=Ae(R,Q,z);j[z]?j[z].p(X,P):(j[z]=we(X),j[z].c(),j[z].m(V,null))}for(;z<j.length;z+=1)j[z].d(1);j.length=Q.length}P&3&&K!==(K=`${R[0].subDirectory}_${R[1]}`)&&y(e,"id",K)},i:be,o:be,d(R){R&&u(e),B&&B.d(),le(j,R)}}}function lt(r,e,t){let l,s,{item:c}=e,{index:a}=e,{urlEndpoint:i={}}=e;return r.$$set=n=>{"item"in n&&t(0,c=n.item),"index"in n&&t(1,a=n.index),"urlEndpoint"in n&&t(4,i=n.urlEndpoint)},r.$$.update=()=>{r.$$.dirty&16&&t(3,{description:l="",tags:s=[]}=i,l,(t(2,s),t(4,i)))},[c,a,s,l,i]}class st extends re{constructor(e){super(),ie(this,e,lt,tt,oe,{item:0,index:1,urlEndpoint:4})}}function nt(r){let e,t,l=JSON.stringify(r[0],null,2)+"",s;return{c(){e=v("pre"),t=v("code"),s=C(l),this.h()},l(c){e=g(c,"PRE",{class:!0});var a=E(e);t=g(a,"CODE",{class:!0});var i=E(t);s=L(i,l),i.forEach(u),a.forEach(u),this.h()},h(){y(t,"class","svelte-1slftyk"),y(e,"class","svelte-1slftyk")},m(c,a){U(c,e,a),h(e,t),h(t,s)},p(c,a){a&1&&l!==(l=JSON.stringify(c[0],null,2)+"")&&F(s,l)},d(c){c&&u(e)}}}function at(r){let e,t,l;return{c(){e=v("pre"),t=v("code"),l=C(r[1]),this.h()},l(s){e=g(s,"PRE",{"data-lang":!0,class:!0});var c=E(e);t=g(c,"CODE",{class:!0});var a=E(t);l=L(a,r[1]),a.forEach(u),c.forEach(u),this.h()},h(){y(t,"class","svelte-1slftyk"),y(e,"data-lang","Typescript"),y(e,"class","svelte-1slftyk")},m(s,c){U(s,e,c),h(e,t),h(t,l)},p(s,c){c&2&&F(l,s[1])},d(s){s&&u(e)}}}function rt(r){let e,t,l,s,c,a,i,n,f,o,_,S,I;function k(d){r[6](d)}let N={inputClassName:"autocomplete-cursor-select",items:r[5],readonly:!0};r[3]!==void 0&&(N.selectedItem=r[3]),i=new Ke({props:N}),ae.push(()=>Me(i,"selectedItem",k)),r[7](i);function D(d,p){if(d[3]===d[5][0])return at;if(d[3]===d[5][1])return nt}let T=D(r),m=T&&T(r);return{c(){e=v("section"),t=v("header"),l=v("span"),s=v("a"),c=C(r[2]),a=H(),Z(i.$$.fragment),f=H(),o=v("details"),_=v("summary"),S=H(),m&&m.c(),this.h()},l(d){e=g(d,"SECTION",{class:!0});var p=E(e);t=g(p,"HEADER",{class:!0});var A=E(t);l=g(A,"SPAN",{class:!0});var b=E(l);s=g(b,"A",{href:!0});var O=E(s);c=L(O,r[2]),O.forEach(u),b.forEach(u),a=w(A),x(i.$$.fragment,A),A.forEach(u),f=w(p),o=g(p,"DETAILS",{});var $=E(o);_=g($,"SUMMARY",{class:!0}),E(_).forEach(u),S=w($),m&&m.l($),$.forEach(u),p.forEach(u),this.h()},h(){y(s,"href",r[2]),y(l,"class","summary-text svelte-1slftyk"),y(t,"class","svelte-1slftyk"),y(_,"class","details-header"),o.open=!0,y(e,"class","container-schema card svelte-1slftyk")},m(d,p){U(d,e,p),h(e,t),h(t,l),h(l,s),h(s,c),h(t,a),ee(i,t,null),h(e,f),h(e,o),h(o,_),h(o,S),m&&m.m(o,null),I=!0},p(d,[p]){(!I||p&4)&&F(c,d[2]),(!I||p&4)&&y(s,"href",d[2]);const A={};!n&&p&8&&(n=!0,A.selectedItem=d[3],Ve(()=>n=!1)),i.$set(A),T===(T=D(d))&&m?m.p(d,p):(m&&m.d(1),m=T&&T(d),m&&(m.c(),m.m(o,null)))},i(d){I||(q(i.$$.fragment,d),I=!0)},o(d){J(i.$$.fragment,d),I=!1},d(d){d&&u(e),r[7](null),te(i),m&&m.d()}}}function it(r,e,t){let{data:l}=e,{typescript:s}=e,{exampleUrl:c}=e;const a=["Typescript","Data"];let i=a[0],n;function f(_){i=_,t(3,i)}function o(_){ae[_?"unshift":"push"](()=>{n=_,t(4,n)})}return r.$$set=_=>{"data"in _&&t(0,l=_.data),"typescript"in _&&t(1,s=_.typescript),"exampleUrl"in _&&t(2,c=_.exampleUrl)},[l,s,c,i,n,a,f,o]}class ot extends re{constructor(e){super(),ie(this,e,it,rt,oe,{data:0,typescript:1,exampleUrl:2})}}function Re(r,e,t){const l=r.slice();return l[1]=e[t][0],l[8]=e[t][1],l}function Ce(r,e,t){const l=r.slice();return l[1]=e[t][0],l[2]=e[t][1],l}function Le(r,e,t){const l=r.slice();return l[5]=e[t],l[7]=t,l}function Pe(r){let e,t,l=ye(r[1])+"",s,c,a,i;return{c(){e=v("div"),t=v("a"),s=C(l),a=H(),this.h()},l(n){e=g(n,"DIV",{class:!0,id:!0});var f=E(e);t=g(f,"A",{href:!0});var o=E(t);s=L(o,l),o.forEach(u),a=w(f),f.forEach(u),this.h()},h(){y(t,"href",c=`#${r[1]}_0`),y(e,"class","list-endpoint svelte-25j19g"),y(e,"id",i=r[1])},m(n,f){U(n,e,f),h(e,t),h(t,s),h(e,a)},p(n,f){f&1&&l!==(l=ye(n[1])+"")&&F(s,l),f&1&&c!==(c=`#${n[1]}_0`)&&y(t,"href",c),f&1&&i!==(i=n[1])&&y(e,"id",i)},d(n){n&&u(e)}}}function ct(r){var i;let e,t,l,s,c=Object.entries((i=r[0])==null?void 0:i.endpoints),a=[];for(let n=0;n<c.length;n+=1)a[n]=Pe(Re(r,c,n));return{c(){e=v("section"),t=v("h2"),l=C("Endpoints"),s=H();for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=g(n,"SECTION",{id:!0,class:!0});var f=E(e);t=g(f,"H2",{class:!0});var o=E(t);l=L(o,"Endpoints"),o.forEach(u),s=w(f);for(let _=0;_<a.length;_+=1)a[_].l(f);f.forEach(u),this.h()},h(){y(t,"class","text-center"),y(e,"id","container-endpoint"),y(e,"class","svelte-25j19g")},m(n,f){U(n,e,f),h(e,t),h(t,l),h(e,s);for(let o=0;o<a.length;o+=1)a[o].m(e,null)},p(n,f){var o;if(f&1){c=Object.entries((o=n[0])==null?void 0:o.endpoints);let _;for(_=0;_<c.length;_+=1){const S=Re(n,c,_);a[_]?a[_].p(S,f):(a[_]=Pe(S),a[_].c(),a[_].m(e,null))}for(;_<a.length;_+=1)a[_].d(1);a.length=c.length}},d(n){n&&u(e),le(a,n)}}}function Ue(r){let e,t,l,s,c;return t=new st({props:{item:r[5],index:r[7],urlEndpoint:r[5].comments[0]}}),s=new ot({props:{typescript:r[5].typescript,exampleUrl:r[5].exampleUrl,data:r[5].data}}),{c(){e=v("section"),Z(t.$$.fragment),l=H(),Z(s.$$.fragment),this.h()},l(a){e=g(a,"SECTION",{class:!0});var i=E(e);x(t.$$.fragment,i),l=w(i),x(s.$$.fragment,i),i.forEach(u),this.h()},h(){y(e,"class","container-detail-item svelte-25j19g")},m(a,i){U(a,e,i),ee(t,e,null),h(e,l),ee(s,e,null),c=!0},p(a,i){const n={};i&1&&(n.item=a[5]),i&1&&(n.urlEndpoint=a[5].comments[0]),t.$set(n);const f={};i&1&&(f.typescript=a[5].typescript),i&1&&(f.exampleUrl=a[5].exampleUrl),i&1&&(f.data=a[5].data),s.$set(f)},i(a){c||(q(t.$$.fragment,a),q(s.$$.fragment,a),c=!0)},o(a){J(t.$$.fragment,a),J(s.$$.fragment,a),c=!1},d(a){a&&u(e),te(t),te(s)}}}function $e(r){let e,t,l,s,c=r[2],a=[];for(let n=0;n<c.length;n+=1)a[n]=Ue(Le(r,c,n));const i=n=>J(a[n],1,1,()=>{a[n]=null});return{c(){e=v("section");for(let n=0;n<a.length;n+=1)a[n].c();t=H(),this.h()},l(n){e=g(n,"SECTION",{id:!0,class:!0});var f=E(e);for(let o=0;o<a.length;o+=1)a[o].l(f);t=w(f),f.forEach(u),this.h()},h(){y(e,"id",l=r[1]),y(e,"class","svelte-25j19g")},m(n,f){U(n,e,f);for(let o=0;o<a.length;o+=1)a[o].m(e,null);h(e,t),s=!0},p(n,f){if(f&1){c=n[2];let o;for(o=0;o<c.length;o+=1){const _=Le(n,c,o);a[o]?(a[o].p(_,f),q(a[o],1)):(a[o]=Ue(_),a[o].c(),q(a[o],1),a[o].m(e,t))}for(je(),o=c.length;o<a.length;o+=1)i(o);ze()}(!s||f&1&&l!==(l=n[1]))&&y(e,"id",l)},i(n){if(!s){for(let f=0;f<c.length;f+=1)q(a[f]);s=!0}},o(n){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)J(a[f]);s=!1},d(n){n&&u(e),le(a,n)}}}function ft(r){var a;let e,t,l=Object.entries((a=r[0])==null?void 0:a.endpoints),s=[];for(let i=0;i<l.length;i+=1)s[i]=$e(Ce(r,l,i));const c=i=>J(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=W()},l(i){for(let n=0;n<s.length;n+=1)s[n].l(i);e=W()},m(i,n){for(let f=0;f<s.length;f+=1)s[f].m(i,n);U(i,e,n),t=!0},p(i,n){var f;if(n&1){l=Object.entries((f=i[0])==null?void 0:f.endpoints);let o;for(o=0;o<l.length;o+=1){const _=Ce(i,l,o);s[o]?(s[o].p(_,n),q(s[o],1)):(s[o]=$e(_),s[o].c(),q(s[o],1),s[o].m(e.parentNode,e))}for(je(),o=l.length;o<s.length;o+=1)c(o);ze()}},i(i){if(!t){for(let n=0;n<l.length;n+=1)q(s[n]);t=!0}},o(i){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)J(s[n]);t=!1},d(i){le(s,i),i&&u(e)}}}function ht(r){let e,t;return e=new et({props:{header:Be,title:Be,$$slots:{api:[ft],list:[ct]},$$scope:{ctx:r}}}),{c(){Z(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,s){ee(e,l,s),t=!0},p(l,[s]){const c={};s&2049&&(c.$$scope={dirty:s,ctx:l}),e.$set(c)},i(l){t||(q(e.$$.fragment,l),t=!0)},o(l){J(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}let Be="D3FEND API Documentation";function _t(r,e,t){let{data:l}=e;return r.$$set=s=>{"data"in s&&t(0,l=s.data)},[l]}class Et extends re{constructor(e){super(),ie(this,e,_t,ht,oe,{data:0})}}export{Et as default};
