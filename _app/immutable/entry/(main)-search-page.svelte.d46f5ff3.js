import{S as Y,b as J,s as K,c as ee,f as k,k as E,l as T,o as p,G as g,L as R,q,v as y,u as te,g as le,d as se,t as D,e as j,y as Q,j as N,h as w,E as I,z as V,p as O,m as B,A as W,a3 as L,P as G,ah as re,O as X,B as Z,r as ne,x as ae,C as oe,w as S,N as $,I as x}from"../chunks/index.f8777a79.js";/* empty css                                                     */import{c as z}from"../chunks/config.6235f7da.js";import"../chunks/navigation.61cd7a83.js";import{T as ie}from"../chunks/Title.b950d120.js";import{p as fe}from"../chunks/stores.ceda234b.js";function ue(c){let t,r,s,a,i;const h=c[4].default,f=ee(h,c,c[3],null);return{c(){t=k("a"),r=k("button"),f&&f.c(),this.h()},l(e){t=E(e,"A",{href:!0,title:!0});var o=T(t);r=E(o,"BUTTON",{class:!0});var l=T(r);f&&f.l(l),l.forEach(p),o.forEach(p),this.h()},h(){g(r,"class",s=R(c[2])+" svelte-1lh49rh"),g(t,"href",a=z.prefix+"/ontology/describe/"+c[0]),g(t,"title",c[1])},m(e,o){q(e,t,o),y(t,r),f&&f.m(r,null),i=!0},p(e,[o]){f&&f.p&&(!i||o&8)&&te(f,h,e,e[3],i?se(h,e[3],o,null):le(e[3]),null),(!i||o&4&&s!==(s=R(e[2])+" svelte-1lh49rh"))&&g(r,"class",s),(!i||o&1&&a!==(a=z.prefix+"/ontology/describe/"+e[0]))&&g(t,"href",a),(!i||o&2)&&g(t,"title",e[1])},i(e){i||(D(f,e),i=!0)},o(e){j(f,e),i=!1},d(e){e&&p(t),f&&f.d(e)}}}function ce(c,t,r){let{$$slots:s={},$$scope:a}=t,{entity:i}=t,{title:h=""}=t,{size:f=""}=t;return c.$$set=e=>{"entity"in e&&r(0,i=e.entity),"title"in e&&r(1,h=e.title),"size"in e&&r(2,f=e.size),"$$scope"in e&&r(3,a=e.$$scope)},[i,h,f,a,s]}class _e extends Y{constructor(t){super(),J(this,t,ce,ue,K,{entity:0,title:1,size:2})}}function P(c,t,r){const s=c.slice();return s[9]=t[r],s}function U(c,t,r){const s=c.slice();return s[12]=t[r],s[14]=r,s}function C(c){let t,r;return{c(){t=k("h3"),r=w("LOADING")},l(s){t=E(s,"H3",{});var a=T(t);r=B(a,"LOADING"),a.forEach(p)},m(s,a){q(s,t,a),y(t,r)},d(s){s&&p(t)}}}function F(c){let t,r,s,a,i,h,f=c[1],e=[];for(let l=0;l<f.length;l+=1)e[l]=M(P(c,f,l));const o=l=>j(e[l],1,1,()=>{e[l]=null});return{c(){t=k("h3"),r=w("Results for: "),s=w(c[0]),a=N(),i=k("table");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=E(l,"H3",{});var n=T(t);r=B(n,"Results for: "),s=B(n,c[0]),n.forEach(p),a=O(l),i=E(l,"TABLE",{class:!0});var u=T(i);for(let m=0;m<e.length;m+=1)e[m].l(u);u.forEach(p),this.h()},h(){g(i,"class","")},m(l,n){q(l,t,n),y(t,r),y(t,s),q(l,a,n),q(l,i,n);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(i,null);h=!0},p(l,n){if((!h||n&1)&&S(s,l[0]),n&2){f=l[1];let u;for(u=0;u<f.length;u+=1){const m=P(l,f,u);e[u]?(e[u].p(m,n),D(e[u],1)):(e[u]=M(m),e[u].c(),D(e[u],1),e[u].m(i,null))}for($(),u=f.length;u<e.length;u+=1)o(u);X()}},i(l){if(!h){for(let n=0;n<f.length;n+=1)D(e[n]);h=!0}},o(l){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)j(e[n]);h=!1},d(l){l&&p(t),l&&p(a),l&&p(i),x(e,l)}}}function he(c){let t=c[9]["@id"]+"",r;return{c(){r=w(t)},l(s){r=B(s,t)},m(s,a){q(s,r,a)},p(s,a){a&2&&t!==(t=s[9]["@id"]+"")&&S(r,t)},d(s){s&&p(r)}}}function H(c){let t,r,s=c[12][0]+"",a,i,h=c[12][1]+"",f;return{c(){t=k("tr"),r=k("td"),a=w(s),i=k("td"),f=w(h),this.h()},l(e){t=E(e,"TR",{});var o=T(t);r=E(o,"TD",{class:!0,colspan:!0});var l=T(r);a=B(l,s),l.forEach(p),i=E(o,"TD",{class:!0});var n=T(i);f=B(n,h),n.forEach(p),o.forEach(p),this.h()},h(){g(r,"class","text-right text-bold predicate svelte-1lgeke3"),g(r,"colspan","2"),g(i,"class","object svelte-1lgeke3")},m(e,o){q(e,t,o),y(t,r),y(r,a),y(t,i),y(i,f)},p(e,o){o&2&&s!==(s=e[12][0]+"")&&S(a,s),o&2&&h!==(h=e[12][1]+"")&&S(f,h)},d(e){e&&p(t)}}}function M(c){let t,r,s,a,i,h,f;a=new _e({props:{size:"small",entity:c[9]["@id"],color:"#ccc",$$slots:{default:[he]},$$scope:{ctx:c}}});let e=Object.entries(c[9]),o=[];for(let l=0;l<e.length;l+=1)o[l]=H(U(c,e,l));return{c(){t=k("tbody"),r=k("tr"),s=k("td"),Q(a.$$.fragment),i=N();for(let l=0;l<o.length;l+=1)o[l].c();h=N(),this.h()},l(l){t=E(l,"TBODY",{class:!0});var n=T(t);r=E(n,"TR",{});var u=T(r);s=E(u,"TD",{colspan:!0,class:!0});var m=T(s);V(a.$$.fragment,m),m.forEach(p),u.forEach(p),i=O(n);for(let d=0;d<o.length;d+=1)o[d].l(n);h=O(n),n.forEach(p),this.h()},h(){g(s,"colspan","3"),g(s,"class","font-medium subject svelte-1lgeke3"),g(t,"class","font-small svelte-1lgeke3")},m(l,n){q(l,t,n),y(t,r),y(r,s),W(a,s,null),y(t,i);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(t,null);y(t,h),f=!0},p(l,n){const u={};if(n&2&&(u.entity=l[9]["@id"]),n&32770&&(u.$$scope={dirty:n,ctx:l}),a.$set(u),n&2){e=Object.entries(l[9]);let m;for(m=0;m<e.length;m+=1){const d=U(l,e,m);o[m]?o[m].p(d,n):(o[m]=H(d),o[m].c(),o[m].m(t,h))}for(;m<o.length;m+=1)o[m].d(1);o.length=e.length}},i(l){f||(D(a.$$.fragment,l),f=!0)},o(l){j(a.$$.fragment,l),f=!1},d(l){l&&p(t),Z(a),x(o,l)}}}function me(c){let t,r,s,a,i,h,f,e,o,l,n,u,m;t=new ie({props:{title:"Search"}});let d=c[2]&&C(),b=c[1]&&F(c);return{c(){Q(t.$$.fragment),r=N(),s=k("form"),a=k("input"),i=N(),h=k("button"),f=w("Search"),e=N(),d&&d.c(),o=N(),b&&b.c(),l=I(),this.h()},l(_){V(t.$$.fragment,_),r=O(_),s=E(_,"FORM",{});var v=T(s);a=E(v,"INPUT",{class:!0,type:!0,id:!0,name:!0}),i=O(v),h=E(v,"BUTTON",{type:!0,class:!0});var A=T(h);f=B(A,"Search"),A.forEach(p),v.forEach(p),e=O(_),d&&d.l(_),o=O(_),b&&b.l(_),l=I(),this.h()},h(){g(a,"class","searchbar svelte-1lgeke3"),g(a,"type","text"),g(a,"id","query"),g(a,"name","query"),g(h,"type","submit"),g(h,"class","svelte-1lgeke3")},m(_,v){W(t,_,v),q(_,r,v),q(_,s,v),y(s,a),L(a,c[0]),y(s,i),y(s,h),y(h,f),q(_,e,v),d&&d.m(_,v),q(_,o,v),b&&b.m(_,v),q(_,l,v),n=!0,u||(m=[G(a,"input",c[5]),G(s,"submit",re(c[3]))],u=!0)},p(_,[v]){v&1&&a.value!==_[0]&&L(a,_[0]),_[2]?d||(d=C(),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null),_[1]?b?(b.p(_,v),v&2&&D(b,1)):(b=F(_),b.c(),D(b,1),b.m(l.parentNode,l)):b&&($(),j(b,1,1,()=>{b=null}),X())},i(_){n||(D(t.$$.fragment,_),D(b),n=!0)},o(_){j(t.$$.fragment,_),j(b),n=!1},d(_){Z(t,_),_&&p(r),_&&p(s),_&&p(e),d&&d.d(_),_&&p(o),b&&b.d(_),_&&p(l),u=!1,ne(m)}}}function pe(c,t,r){let s;ae(c,fe,n=>r(7,s=n));let{data:a}=t,i="",h,f;async function e(n){let u=`${z.backend}/ontology/search/${n}`;return await(await fetch(u)).json()}async function o(){r(2,f=!0);const n=await e(i);r(1,h=n["@graph"]),n["@context"],r(2,f=!1),window.history.pushState("",`D3FEND search for: ${i}`,`/search/?query=${i}`)}oe(async()=>{console.dir(s),(s.query.query||s.query.q)&&(r(0,i=s.query.query||s.query.q),o())});function l(){i=this.value,r(0,i)}return c.$$set=n=>{"data"in n&&r(4,a=n.data)},[i,h,f,o,a,l]}class Ee extends Y{constructor(t){super(),J(this,t,pe,me,K,{data:4})}}export{Ee as default};
