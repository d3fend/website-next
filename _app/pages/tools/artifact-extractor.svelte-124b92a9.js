import{S as yt,i as qt,s as wt,a7 as ct,w as ft,k as F,e as d,t as q,x as ut,m as A,c as _,a as p,h as w,d as i,b as C,y as ht,g as K,I as n,a1 as dt,N as W,a8 as xt,q as _t,o as pt,B as mt,Y as Tt,R as Nt,v as It,f as Ft,j as Z,l as Et,E as Dt,X as At}from"../../chunks/index-a02da30e.js";import{H as Ct}from"../../chunks/Header-826dac44.js";import{T as Pt}from"../../chunks/Title-1d23c88f.js";/* empty css                                                       */import{e as Kt}from"../../chunks/extract-487bbbcb.js";import{G as vt}from"../../chunks/lib-c0e834da.js";import{p as St}from"../../chunks/stores-cf129ad8.js";import"../../chunks/stores-59d8ae96.js";import"../../chunks/index-98a102c4.js";import"../../chunks/marked.esm-8ab30116.js";function bt(s,t,a){const e=s.slice();return e[19]=t[a],e}function Vt(s){let t,a=s[22].message+"",e;return{c(){t=d("p"),e=q(a),this.h()},l(r){t=_(r,"P",{style:!0});var l=p(t);e=w(l,a),l.forEach(i),this.h()},h(){Ft(t,"color","red")},m(r,l){K(r,t,l),n(t,e)},p(r,l){l&8&&a!==(a=r[22].message+"")&&Z(e,a)},d(r){r&&i(t)}}}function jt(s){let t;function a(l,o){if(l[18].length>0)return Ot;if(!l[2]&&l[18].length<1)return Bt}let e=a(s),r=e&&e(s);return{c(){r&&r.c(),t=Et()},l(l){r&&r.l(l),t=Et()},m(l,o){r&&r.m(l,o),K(l,t,o)},p(l,o){e===(e=a(l))&&r?r.p(l,o):(r&&r.d(1),r=e&&e(l),r&&(r.c(),r.m(t.parentNode,t)))},d(l){r&&r.d(l),l&&i(t)}}}function Bt(s){let t,a;return{c(){t=d("div"),a=q("No D3FEND techniques found in text."),this.h()},l(e){t=_(e,"DIV",{class:!0});var r=p(t);a=w(r,"No D3FEND techniques found in text."),r.forEach(i),this.h()},h(){C(t,"class","card")},m(e,r){K(e,t,r),n(t,a)},p:Dt,d(e){e&&i(t)}}}function Ot(s){let t,a=s[0]&&gt(s);return{c(){t=d("div"),a&&a.c(),this.h()},l(e){t=_(e,"DIV",{class:!0});var r=p(t);a&&a.l(r),r.forEach(i),this.h()},h(){C(t,"class","card")},m(e,r){K(e,t,r),a&&a.m(t,null)},p(e,r){e[0]?a?a.p(e,r):(a=gt(e),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(e){e&&i(t),a&&a.d()}}}function gt(s){let t,a,e,r,l=s[0].length+"",o,v,N,g,E=s[0],h=[];for(let c=0;c<E.length;c+=1)h[c]=kt(bt(s,E,c));return{c(){t=d("div"),a=d("b"),e=d("i"),r=q("Extracted "),o=q(l),v=q(" unique IDs:"),N=F(),g=d("dl");for(let c=0;c<h.length;c+=1)h[c].c();this.h()},l(c){t=_(c,"DIV",{class:!0});var b=p(t);a=_(b,"B",{});var f=p(a);e=_(f,"I",{});var k=p(e);r=w(k,"Extracted "),o=w(k,l),v=w(k," unique IDs:"),k.forEach(i),f.forEach(i),N=A(b),g=_(b,"DL",{class:!0});var S=p(g);for(let u=0;u<h.length;u+=1)h[u].l(S);S.forEach(i),b.forEach(i),this.h()},h(){C(g,"class","flex flex-wrap svelte-1wbelz3"),C(t,"class","")},m(c,b){K(c,t,b),n(t,a),n(a,e),n(e,r),n(e,o),n(e,v),n(t,N),n(t,g);for(let f=0;f<h.length;f+=1)h[f].m(g,null)},p(c,b){if(b&1&&l!==(l=c[0].length+"")&&Z(o,l),b&1){E=c[0];let f;for(f=0;f<E.length;f+=1){const k=bt(c,E,f);h[f]?h[f].p(k,b):(h[f]=kt(k),h[f].c(),h[f].m(g,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=E.length}},d(c){c&&i(t),At(h,c)}}}function kt(s){let t,a=s[19]+"",e;return{c(){t=d("dd"),e=q(a)},l(r){t=_(r,"DD",{});var l=p(t);e=w(l,a),l.forEach(i)},m(r,l){K(r,t,l),n(t,e)},p(r,l){l&1&&a!==(a=r[19]+"")&&Z(e,a)},d(r){r&&i(t)}}}function Gt(s){let t;return{c(){t=q("enter text and click go")},l(a){t=w(a,"enter text and click go")},m(a,e){K(a,t,e)},p:Dt,d(a){a&&i(t)}}}function Rt(s){let t,a,e,r,l,o,v,N,g,E,h,c,b,f,k,S,u,I,y,V,R,B,P,Y,O,j,X,J,L,M,U,$,z,H,Q,tt;t=new Pt({props:{title:"D3FEND Extractor | Tools | "}}),r=new Ct({});let x={ctx:s,current:null,token:null,hasCatch:!0,pending:Gt,then:jt,catch:Vt,value:18,error:22};return ct(z=s[3],x),{c(){ft(t.$$.fragment),a=F(),e=d("section"),ft(r.$$.fragment),l=F(),o=d("div"),v=d("h1"),N=q("D3FEND Extractor"),g=F(),E=d("p"),h=q("Extracts D3FEND techniques from blobs of text and identifies "),c=d("i"),b=q("related"),f=q(" ATT&CK Techniques. You may also want to try the "),k=d("a"),S=q("ATT&CK Extractor."),u=F(),I=d("p"),y=d("i"),V=q("Paste any text containing D3FEND techniques:"),R=F(),B=d("div"),P=d("textarea"),Y=F(),O=d("div"),j=d("button"),X=q("GO"),J=F(),L=d("br"),M=F(),U=d("br"),$=F(),x.block.c(),this.h()},l(m){ut(t.$$.fragment,m),a=A(m),e=_(m,"SECTION",{class:!0});var D=p(e);ut(r.$$.fragment,D),l=A(D),o=_(D,"DIV",{class:!0});var T=p(o);v=_(T,"H1",{});var et=p(v);N=w(et,"D3FEND Extractor"),et.forEach(i),g=A(T),E=_(T,"P",{});var G=p(E);h=w(G,"Extracts D3FEND techniques from blobs of text and identifies "),c=_(G,"I",{});var at=p(c);b=w(at,"related"),at.forEach(i),f=w(G," ATT&CK Techniques. You may also want to try the "),k=_(G,"A",{href:!0});var rt=p(k);S=w(rt,"ATT&CK Extractor."),rt.forEach(i),G.forEach(i),u=A(T),I=_(T,"P",{class:!0});var lt=p(I);y=_(lt,"I",{});var nt=p(y);V=w(nt,"Paste any text containing D3FEND techniques:"),nt.forEach(i),lt.forEach(i),R=A(T),B=_(T,"DIV",{});var st=p(B);P=_(st,"TEXTAREA",{class:!0}),p(P).forEach(i),st.forEach(i),Y=A(T),O=_(T,"DIV",{});var ot=p(O);j=_(ot,"BUTTON",{class:!0});var it=p(j);X=w(it,"GO"),it.forEach(i),ot.forEach(i),J=A(T),L=_(T,"BR",{}),T.forEach(i),M=A(D),U=_(D,"BR",{}),$=A(D),x.block.l(D),D.forEach(i),this.h()},h(){C(k,"href","/tools/attack-extractor"),C(I,"class","text-2"),C(P,"class","svelte-1wbelz3"),C(j,"class","button"),C(o,"class","card"),C(e,"class"," svelte-1wbelz3")},m(m,D){ht(t,m,D),K(m,a,D),K(m,e,D),ht(r,e,null),n(e,l),n(e,o),n(o,v),n(v,N),n(o,g),n(o,E),n(E,h),n(E,c),n(c,b),n(E,f),n(E,k),n(k,S),n(o,u),n(o,I),n(I,y),n(y,V),n(o,R),n(o,B),n(B,P),dt(P,s[1]),n(o,Y),n(o,O),n(O,j),n(j,X),n(o,J),n(o,L),n(e,M),n(e,U),n(e,$),x.block.m(e,x.anchor=null),x.mount=()=>e,x.anchor=null,H=!0,Q||(tt=[W(P,"input",s[7]),W(P,"keypress",s[5]),W(j,"click",s[4])],Q=!0)},p(m,[D]){s=m,D&2&&dt(P,s[1]),x.ctx=s,D&8&&z!==(z=s[3])&&ct(z,x)||xt(x,s,D)},i(m){H||(_t(t.$$.fragment,m),_t(r.$$.fragment,m),H=!0)},o(m){pt(t.$$.fragment,m),pt(r.$$.fragment,m),H=!1},d(m){mt(t,m),m&&i(a),m&&i(e),mt(r),x.block.d(),x.token=null,x=null,Q=!1,Tt(tt)}}}async function Zt({params:s,fetch:t}){s.technique;const a=await t("/api/dao/artifacts.json"),e=await a.json();return a.status===200?{props:{techniques:e}}:{status:a.status,error:new Error(e.message)}}function zt(s,t,a){let e;Nt(s,St,u=>a(11,e=u));let{techniques:r}=t,l=new vt(r,{index:!0,index_key:"d3f:d3fend-id"}),o,v="",N=!0,g;g=e.url.searchParams.get("q"),console.log("Found params: "+g);let E=[];async function h(u){let I="/api/dao/artifact/"+u+".json";const y=await fetch(I);if(y.status==404)return{id:u,def_to_off:[],description:{graph:[]},status:y.status};if(y.ok){const V=await y.json();return{id:u,def_to_off:V.def_to_off,description:new vt(V.description)}}else throw new Error(v)}async function c(){let u=a(0,o=Array.from(new Set(Kt(v,l))));return u&&(u.forEach(function(I){let y;y=h(I),y&&E.push(y)}),e.url.searchParams.set("q",JSON.stringify(u)),history.replaceState(null,"mapping",e.url)),E}let b=c();function f(){a(3,b=c()),a(2,N=!1)}function k(u){u.ctrlKey==!0&&u.keyCode==13&&f()}It(async()=>{g?(a(1,v=g),console.log("handlingclick"),f()):(console.log("starting blank"),a(1,v=""))});function S(){v=this.value,a(1,v)}return s.$$set=u=>{"techniques"in u&&a(6,r=u.techniques)},[o,v,N,b,f,k,r,S]}class te extends yt{constructor(t){super(),qt(this,t,zt,Rt,wt,{techniques:6})}}export{te as default,Zt as load};