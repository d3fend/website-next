import{S as Nt,b as At,s as wt,J as mt,y as rt,j as P,f as _,h as I,z as at,p as C,k as d,l as v,m as F,o as c,G as N,A as lt,q as S,v as o,a2 as vt,P as et,K as It,t as G,e as K,B as st,r as Ft,x as Tt,C as $t,H as qt,w as ot,n as H,E as Et,N as yt,O as xt,I as Pt}from"../chunks/index.43e07aca.js";import{H as Ct}from"../chunks/Header.f71f0103.js";import{T as St}from"../chunks/Title.0ec6725c.js";/* empty css                                                    */import{e as Vt,S as Ot}from"../chunks/extract.4561e1ab.js";import{G as bt}from"../chunks/lib.576aa631.js";import{p as Bt}from"../chunks/stores.0845909a.js";function gt(i,e,r){const t=i.slice();return t[19]=e[r],t}function Gt(i){let e,r=i[22].message+"",t;return{c(){e=_("p"),t=I(r),this.h()},l(a){e=d(a,"P",{style:!0});var n=v(e);t=F(n,r),n.forEach(c),this.h()},h(){qt(e,"color","red")},m(a,n){S(a,e,n),o(e,t)},p(a,n){n&8&&r!==(r=a[22].message+"")&&ot(t,r)},i:H,o:H,d(a){a&&c(e)}}}function Kt(i){let e,r,t,a;const n=[Rt,Ht],s=[];function f(u,b){return u[18].length>0?0:!u[2]&&u[18].length<1?1:-1}return~(e=f(i))&&(r=s[e]=n[e](i)),{c(){r&&r.c(),t=Et()},l(u){r&&r.l(u),t=Et()},m(u,b){~e&&s[e].m(u,b),S(u,t,b),a=!0},p(u,b){let g=e;e=f(u),e===g?~e&&s[e].p(u,b):(r&&(yt(),K(s[g],1,1,()=>{s[g]=null}),xt()),~e?(r=s[e],r?r.p(u,b):(r=s[e]=n[e](u),r.c()),G(r,1),r.m(t.parentNode,t)):r=null)},i(u){a||(G(r),a=!0)},o(u){K(r),a=!1},d(u){~e&&s[e].d(u),u&&c(t)}}}function Ht(i){let e,r;return{c(){e=_("div"),r=I("No D3FEND Artifacts found in text."),this.h()},l(t){e=d(t,"DIV",{class:!0});var a=v(e);r=F(a,"No D3FEND Artifacts found in text."),a.forEach(c),this.h()},h(){N(e,"class","card")},m(t,a){S(t,e,a),o(e,r)},p:H,i:H,o:H,d(t){t&&c(e)}}}function Rt(i){let e,r,t=i[0]&&kt(i);return{c(){e=_("div"),t&&t.c(),this.h()},l(a){e=d(a,"DIV",{class:!0});var n=v(e);t&&t.l(n),n.forEach(c),this.h()},h(){N(e,"class","card")},m(a,n){S(a,e,n),t&&t.m(e,null),r=!0},p(a,n){a[0]?t?(t.p(a,n),n&1&&G(t,1)):(t=kt(a),t.c(),G(t,1),t.m(e,null)):t&&(yt(),K(t,1,1,()=>{t=null}),xt())},i(a){r||(G(t),r=!0)},o(a){K(t),r=!1},d(a){a&&c(e),t&&t.d()}}}function kt(i){let e,r,t,a,n,s,f,u,b=i[0].length+"",g,B,T,A,$;t=new Ot({props:{url:i[4].url}});let y=i[0],m=[];for(let l=0;l<y.length;l+=1)m[l]=Dt(gt(i,y,l));return{c(){e=_("div"),r=_("div"),rt(t.$$.fragment),a=P(),n=_("div"),s=_("b"),f=_("i"),u=I("Extracted "),g=I(b),B=I(" unique IDs:"),T=P(),A=_("dl");for(let l=0;l<m.length;l+=1)m[l].c();this.h()},l(l){e=d(l,"DIV",{class:!0});var E=v(e);r=d(E,"DIV",{class:!0});var p=v(r);at(t.$$.fragment,p),p.forEach(c),E.forEach(c),a=C(l),n=d(l,"DIV",{class:!0});var h=v(n);s=d(h,"B",{});var V=v(s);f=d(V,"I",{});var O=v(f);u=F(O,"Extracted "),g=F(O,b),B=F(O," unique IDs:"),O.forEach(c),V.forEach(c),T=C(h),A=d(h,"DL",{class:!0});var q=v(A);for(let R=0;R<m.length;R+=1)m[R].l(q);q.forEach(c),h.forEach(c),this.h()},h(){N(r,"class","text-right"),N(e,"class","stretch"),N(A,"class","flex flex-wrap svelte-1bg32kq"),N(n,"class","")},m(l,E){S(l,e,E),o(e,r),lt(t,r,null),S(l,a,E),S(l,n,E),o(n,s),o(s,f),o(f,u),o(f,g),o(f,B),o(n,T),o(n,A);for(let p=0;p<m.length;p+=1)m[p]&&m[p].m(A,null);$=!0},p(l,E){const p={};if(E&16&&(p.url=l[4].url),t.$set(p),(!$||E&1)&&b!==(b=l[0].length+"")&&ot(g,b),E&1){y=l[0];let h;for(h=0;h<y.length;h+=1){const V=gt(l,y,h);m[h]?m[h].p(V,E):(m[h]=Dt(V),m[h].c(),m[h].m(A,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=y.length}},i(l){$||(G(t.$$.fragment,l),$=!0)},o(l){K(t.$$.fragment,l),$=!1},d(l){l&&c(e),st(t),l&&c(a),l&&c(n),Pt(m,l)}}}function Dt(i){let e,r,t=i[19]+"",a,n;return{c(){e=_("dd"),r=_("a"),a=I(t),this.h()},l(s){e=d(s,"DD",{});var f=v(e);r=d(f,"A",{href:!0});var u=v(r);a=F(u,t),u.forEach(c),f.forEach(c),this.h()},h(){N(r,"href",n="/dao/artifact/"+i[19])},m(s,f){S(s,e,f),o(e,r),o(r,a)},p(s,f){f&1&&t!==(t=s[19]+"")&&ot(a,t),f&1&&n!==(n="/dao/artifact/"+s[19])&&N(r,"href",n)},d(s){s&&c(e)}}}function jt(i){let e;return{c(){e=I("enter text and click go")},l(r){e=F(r,"enter text and click go")},m(r,t){S(r,e,t)},p:H,i:H,o:H,d(r){r&&c(e)}}}function Jt(i){let e,r,t,a,n,s,f,u,b,g,B,T,A,$,y,m,l,E,p,h,V,O,q,R,J,j,z,M,X,Q,W,Z,U,Y,tt,nt;e=new St({props:{title:"D3FEND Artifact Extractor | Tools | "}}),a=new Ct({});let x={ctx:i,current:null,token:null,hasCatch:!0,pending:jt,then:Kt,catch:Gt,value:18,error:22,blocks:[,,,]};return mt(U=i[3],x),{c(){rt(e.$$.fragment),r=P(),t=_("section"),rt(a.$$.fragment),n=P(),s=_("div"),f=_("h1"),u=I("D3FEND Artifact Extractor"),b=P(),g=_("p"),B=I("Extracts D3FEND artifacts from blobs of text. You may also want to try the "),T=_("a"),A=I("D3FEND Extractor"),$=I(`
      or `),y=_("a"),m=I("ATT&CK Extractor."),l=P(),E=_("p"),p=_("i"),h=I("Paste any text containing D3FEND Artifacts:"),V=P(),O=_("div"),q=_("textarea"),R=P(),J=_("div"),j=_("button"),z=I("GO"),M=P(),X=_("br"),Q=P(),W=_("br"),Z=P(),x.block.c(),this.h()},l(D){at(e.$$.fragment,D),r=C(D),t=d(D,"SECTION",{class:!0});var k=v(t);at(a.$$.fragment,k),n=C(k),s=d(k,"DIV",{class:!0});var w=v(s);f=d(w,"H1",{});var it=v(f);u=F(it,"D3FEND Artifact Extractor"),it.forEach(c),b=C(w),g=d(w,"P",{});var L=v(g);B=F(L,"Extracts D3FEND artifacts from blobs of text. You may also want to try the "),T=d(L,"A",{href:!0});var ct=v(T);A=F(ct,"D3FEND Extractor"),ct.forEach(c),$=F(L,`
      or `),y=d(L,"A",{href:!0});var ft=v(y);m=F(ft,"ATT&CK Extractor."),ft.forEach(c),L.forEach(c),l=C(w),E=d(w,"P",{class:!0});var ut=v(E);p=d(ut,"I",{});var ht=v(p);h=F(ht,"Paste any text containing D3FEND Artifacts:"),ht.forEach(c),ut.forEach(c),V=C(w),O=d(w,"DIV",{});var _t=v(O);q=d(_t,"TEXTAREA",{class:!0}),v(q).forEach(c),_t.forEach(c),R=C(w),J=d(w,"DIV",{});var dt=v(J);j=d(dt,"BUTTON",{class:!0});var pt=v(j);z=F(pt,"GO"),pt.forEach(c),dt.forEach(c),M=C(w),X=d(w,"BR",{}),w.forEach(c),Q=C(k),W=d(k,"BR",{}),Z=C(k),x.block.l(k),k.forEach(c),this.h()},h(){N(T,"href","/tools/d3fend-extractor"),N(y,"href","/tools/attack-extractor"),N(E,"class","text-2"),N(q,"class","svelte-1bg32kq"),N(j,"class","button"),N(s,"class","card"),N(t,"class"," svelte-1bg32kq")},m(D,k){lt(e,D,k),S(D,r,k),S(D,t,k),lt(a,t,null),o(t,n),o(t,s),o(s,f),o(f,u),o(s,b),o(s,g),o(g,B),o(g,T),o(T,A),o(g,$),o(g,y),o(y,m),o(s,l),o(s,E),o(E,p),o(p,h),o(s,V),o(s,O),o(O,q),vt(q,i[1]),o(s,R),o(s,J),o(J,j),o(j,z),o(s,M),o(s,X),o(t,Q),o(t,W),o(t,Z),x.block.m(t,x.anchor=null),x.mount=()=>t,x.anchor=null,Y=!0,tt||(nt=[et(q,"input",i[8]),et(q,"keypress",i[6]),et(j,"click",i[5])],tt=!0)},p(D,[k]){i=D,k&2&&vt(q,i[1]),x.ctx=i,k&8&&U!==(U=i[3])&&mt(U,x)||It(x,i,k)},i(D){Y||(G(e.$$.fragment,D),G(a.$$.fragment,D),G(x.block),Y=!0)},o(D){K(e.$$.fragment,D),K(a.$$.fragment,D);for(let k=0;k<3;k+=1){const w=x.blocks[k];K(w)}Y=!1},d(D){st(e,D),D&&c(r),D&&c(t),st(a),x.block.d(),x.token=null,x=null,tt=!1,Ft(nt)}}}function Lt(i,e,r){let t;Tt(i,Bt,l=>r(4,t=l));let{data:a}=e;const n=new bt(a.techniques,{index:!0,index_key:"d3f:d3fend-id"});let s,f="",u=!0,b;b=t.url.searchParams.get("q"),console.log("Found params: "+b);let g=[];async function B(l){const E=`/api/dao/artifact/${l}.json`,p=await fetch(E);if(p.status==404)return{id:l,def_to_off:[],description:{graph:[]},status:p.status};if(p.ok){const h=await p.json();return{id:l,def_to_off:h.def_to_off,description:new bt(h.description)}}else throw new Error(f)}async function T(){let l=r(0,s=Array.from(new Set(Vt(f,n))));return l&&(l.forEach(function(E){let p=B(E);p&&g.push(p)}),t.url.searchParams.set("q",JSON.stringify(l)),history.replaceState(null,"mapping",t.url)),g}let A=T();function $(){r(3,A=T()),r(2,u=!1)}function y(l){l.ctrlKey==!0&&l.keyCode==13&&$()}$t(async()=>{b?(r(1,f=b),console.log("handlingclick"),$()):(console.log("starting blank"),r(1,f=""))});function m(){f=this.value,r(1,f)}return i.$$set=l=>{"data"in l&&r(7,a=l.data)},[s,f,u,A,t,$,y,a,m]}class Zt extends Nt{constructor(e){super(),At(this,e,Lt,Jt,wt,{data:7})}}export{Zt as default};