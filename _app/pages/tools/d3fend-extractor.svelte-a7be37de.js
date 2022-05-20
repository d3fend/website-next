var Ze=Object.defineProperty;var He=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Ke=(n,e,t)=>e in n?Ze(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ge=(n,e)=>{for(var t in e||(e={}))xe.call(e,t)&&Ke(n,t,e[t]);if(He)for(var t of He(e))et.call(e,t)&&Ke(n,t,e[t]);return n};import{S as tt,i as lt,s as at,a7 as De,w as ye,k as F,e as c,t as D,x as we,m as R,c as f,a as h,h as q,d as o,b as g,y as Ne,g as B,I as a,a1 as Oe,N as he,a8 as Qe,q as de,o as _e,B as Ae,Y as We,R as rt,v as ot,f as Ie,j as ae,E as re,l as pe,n as st,p as nt,X as Ce,V as Ve}from"../../chunks/index-a02da30e.js";import{H as it}from"../../chunks/Header-826dac44.js";import{T as ct}from"../../chunks/Title-1d23c88f.js";import{A as ft}from"../../chunks/Alert-12c40fb9.js";import{b as ht}from"../../chunks/extract-71b4e4e9.js";import{G as Pe,g as fe,b as je,e as Te,d as ke}from"../../chunks/lib-c0e834da.js";import{p as ut}from"../../chunks/stores-cf129ad8.js";import"../../chunks/stores-59d8ae96.js";import"../../chunks/index-98a102c4.js";/* empty css                                                       */import"../../chunks/marked.esm-8ab30116.js";var dt={name:"D3FEND Countermeasure Coverage",domain:"enterprise-attack",description:""};class _t{constructor(e){this.layer=ge({},dt),this.layer.techniques=new Array,this.tech_index={},e&&(this.options=ge(ge({},this.options),e))}add_technique(e){this.tech_index.hasOwnProperty(e.techniqueID)?this.tech_index[e.techniqueID].comment&&this.tech_index[e.techniqueID].comment.indexOf(e.comment)==-1&&(this.tech_index[e.techniqueID].comment+=e.comment):this.tech_index[e.techniqueID]=e}json(){for(let e in this.tech_index)this.layer.techniques.push(this.tech_index[e]);return this.layer}}function Le(n,e,t){const l=n.slice();return l[20]=e[t],l}function Se(n,e,t){const l=n.slice();return l[24]=e[t],l}function $e(n,e,t){const l=n.slice();return l[28]=e[t],l}function pt(n){let e,t=n[27].message+"",l;return{c(){e=c("p"),l=D(t),this.h()},l(r){e=f(r,"P",{style:!0});var i=h(e);l=q(i,t),i.forEach(o),this.h()},h(){Ie(e,"color","red")},m(r,i){B(r,e,i),a(e,l)},p(r,i){i[0]&32&&t!==(t=r[27].message+"")&&ae(l,t)},i:re,o:re,d(r){r&&o(e)}}}function vt(n){let e,t,l,r;const i=[bt,mt],s=[];function p(m,A){return m[19].length>0?0:!m[3]&&m[19].length<1?1:-1}return~(e=p(n))&&(t=s[e]=i[e](n)),{c(){t&&t.c(),l=pe()},l(m){t&&t.l(m),l=pe()},m(m,A){~e&&s[e].m(m,A),B(m,l,A),r=!0},p(m,A){let k=e;e=p(m),e===k?~e&&s[e].p(m,A):(t&&(st(),_e(s[k],1,1,()=>{s[k]=null}),nt()),~e?(t=s[e],t?t.p(m,A):(t=s[e]=i[e](m),t.c()),de(t,1),t.m(l.parentNode,l)):t=null)},i(m){r||(de(t),r=!0)},o(m){_e(t),r=!1},d(m){~e&&s[e].d(m),m&&o(l)}}}function mt(n){let e,t;return{c(){e=c("div"),t=D("No D3FEND techniques found in text."),this.h()},l(l){e=f(l,"DIV",{class:!0});var r=h(e);t=q(r,"No D3FEND techniques found in text."),r.forEach(o),this.h()},h(){g(e,"class","card")},m(l,r){B(l,e,r),a(e,t)},p:re,i:re,o:re,d(l){l&&o(e)}}}function bt(n){let e,t,l,r,i,s,p,m,A,k,v,_,b,y,P,U,O,M,Y,z,Q,T,I,H,L,$,Z,J,G,x,le,X,S,w,d,N=n[0]&&Ue(n);r=new ft({props:{$$slots:{default:[Et]},$$scope:{ctx:n}}});function j(u,C){return u[2]?Tt:gt}let te=j(n),W=te(n),V=n[19],E=[];for(let u=0;u<V.length;u+=1)E[u]=Xe(Le(n,V,u));return{c(){e=c("div"),N&&N.c(),t=F(),l=c("div"),ye(r.$$.fragment),i=F(),s=c("div"),p=c("div"),m=c("button"),A=D("Download ATT&CK Navigator Layer"),k=F(),v=c("div"),_=c("b"),b=c("i"),y=D("Mapping Results:"),P=F(),U=c("div"),O=c("div"),W.c(),M=F(),Y=c("button"),z=D("copy"),Q=F(),T=c("table"),I=c("thead"),H=c("th"),L=D("D3FEND ID"),$=F(),Z=c("th"),J=D("D3FEND Name"),G=F(),x=c("th"),le=D("Related ATT&CK Techniques"),X=F();for(let u=0;u<E.length;u+=1)E[u].c();this.h()},l(u){e=f(u,"DIV",{class:!0});var C=h(e);N&&N.l(C),C.forEach(o),t=R(u),l=f(u,"DIV",{class:!0});var ee=h(l);we(r.$$.fragment,ee),ee.forEach(o),i=R(u),s=f(u,"DIV",{class:!0});var K=h(s);p=f(K,"DIV",{class:!0});var oe=h(p);m=f(oe,"BUTTON",{class:!0,title:!0});var ne=h(m);A=q(ne,"Download ATT&CK Navigator Layer"),ne.forEach(o),oe.forEach(o),k=R(K),v=f(K,"DIV",{});var se=h(v);_=f(se,"B",{});var ve=h(_);b=f(ve,"I",{});var me=h(b);y=q(me,"Mapping Results:"),me.forEach(o),ve.forEach(o),se.forEach(o),P=R(K),U=f(K,"DIV",{class:!0});var ie=h(U);O=f(ie,"DIV",{class:!0});var ce=h(O);W.l(ce),M=R(ce),Y=f(ce,"BUTTON",{});var be=h(Y);z=q(be,"copy"),be.forEach(o),ce.forEach(o),Q=R(ie),T=f(ie,"TABLE",{id:!0,class:!0});var Ee=h(T);I=f(Ee,"THEAD",{});var ue=h(I);H=f(ue,"TH",{class:!0});var Fe=h(H);L=q(Fe,"D3FEND ID"),Fe.forEach(o),$=R(ue),Z=f(ue,"TH",{});var Re=h(Z);J=q(Re,"D3FEND Name"),Re.forEach(o),G=R(ue),x=f(ue,"TH",{});var Be=h(x);le=q(Be,"Related ATT&CK Techniques"),Be.forEach(o),ue.forEach(o),X=R(Ee);for(let qe=0;qe<E.length;qe+=1)E[qe].l(Ee);Ee.forEach(o),ie.forEach(o),K.forEach(o),this.h()},h(){g(e,"class","card"),g(l,"class","card"),g(m,"class","small button"),g(m,"title","Load into Navigator to see related TTPs"),g(p,"class","text-right"),g(O,"class","text-right"),g(H,"class","stretch"),g(T,"id","mappings"),g(T,"class","table-auto"),g(U,"class","results-wrap center svelte-wn74lb"),g(s,"class","card")},m(u,C){B(u,e,C),N&&N.m(e,null),B(u,t,C),B(u,l,C),Ne(r,l,null),B(u,i,C),B(u,s,C),a(s,p),a(p,m),a(m,A),a(s,k),a(s,v),a(v,_),a(_,b),a(b,y),a(s,P),a(s,U),a(U,O),W.m(O,null),a(O,M),a(O,Y),a(Y,z),a(U,Q),a(U,T),a(T,I),a(I,H),a(H,L),a(I,$),a(I,Z),a(Z,J),a(I,G),a(I,x),a(x,le),a(T,X);for(let ee=0;ee<E.length;ee+=1)E[ee].m(T,null);S=!0,w||(d=[he(m,"click",n[6]),he(Y,"click",It)],w=!0)},p(u,C){u[0]?N?N.p(u,C):(N=Ue(u),N.c(),N.m(e,null)):N&&(N.d(1),N=null);const ee={};if(C[1]&1&&(ee.$$scope={dirty:C,ctx:u}),r.$set(ee),te===(te=j(u))&&W?W.p(u,C):(W.d(1),W=te(u),W&&(W.c(),W.m(O,M))),C[0]&48){V=u[19];let K;for(K=0;K<V.length;K+=1){const oe=Le(u,V,K);E[K]?E[K].p(oe,C):(E[K]=Xe(oe),E[K].c(),E[K].m(T,null))}for(;K<E.length;K+=1)E[K].d(1);E.length=V.length}},i(u){S||(de(r.$$.fragment,u),S=!0)},o(u){_e(r.$$.fragment,u),S=!1},d(u){u&&o(e),N&&N.d(),u&&o(t),u&&o(l),Ae(r),u&&o(i),u&&o(s),W.d(),Ce(E,u),w=!1,We(d)}}}function Ue(n){let e,t,l,r,i=n[0].length+"",s,p,m,A,k=n[0],v=[];for(let _=0;_<k.length;_+=1)v[_]=Ge($e(n,k,_));return{c(){e=c("div"),t=c("b"),l=c("i"),r=D("Extracted "),s=D(i),p=D(" unique IDs:"),m=F(),A=c("dl");for(let _=0;_<v.length;_+=1)v[_].c();this.h()},l(_){e=f(_,"DIV",{class:!0});var b=h(e);t=f(b,"B",{});var y=h(t);l=f(y,"I",{});var P=h(l);r=q(P,"Extracted "),s=q(P,i),p=q(P," unique IDs:"),P.forEach(o),y.forEach(o),m=R(b),A=f(b,"DL",{class:!0});var U=h(A);for(let O=0;O<v.length;O+=1)v[O].l(U);U.forEach(o),b.forEach(o),this.h()},h(){g(A,"class","flex flex-wrap svelte-wn74lb"),g(e,"class","")},m(_,b){B(_,e,b),a(e,t),a(t,l),a(l,r),a(l,s),a(l,p),a(e,m),a(e,A);for(let y=0;y<v.length;y+=1)v[y].m(A,null)},p(_,b){if(b[0]&1&&i!==(i=_[0].length+"")&&ae(s,i),b[0]&1){k=_[0];let y;for(y=0;y<k.length;y+=1){const P=$e(_,k,y);v[y]?v[y].p(P,b):(v[y]=Ge(P),v[y].c(),v[y].m(A,null))}for(;y<v.length;y+=1)v[y].d(1);v.length=k.length}},d(_){_&&o(e),Ce(v,_)}}}function Ge(n){let e,t,l=n[28]+"",r,i;return{c(){e=c("dd"),t=c("a"),r=D(l),this.h()},l(s){e=f(s,"DD",{});var p=h(e);t=f(p,"A",{href:!0});var m=h(t);r=q(m,l),m.forEach(o),p.forEach(o),this.h()},h(){g(t,"href",i="/technique/"+n[28])},m(s,p){B(s,e,p),a(e,t),a(t,r)},p(s,p){p[0]&1&&l!==(l=s[28]+"")&&ae(r,l),p[0]&1&&i!==(i="/technique/"+s[28])&&g(t,"href",i)},d(s){s&&o(e)}}}function Et(n){let e,t,l;return{c(){e=c("b"),t=D("Note: "),l=D("These relationships are generated based on the digital artifacts specified for the offensive and defensive techniques. They are designed to give you ideas, they are not designed to be exact matches or indicate precise coverage. They can be used to better understand the technologies, ask better questions, and develop test plans for your countermeasures.")},l(r){e=f(r,"B",{});var i=h(e);t=q(i,"Note: "),i.forEach(o),l=q(r,"These relationships are generated based on the digital artifacts specified for the offensive and defensive techniques. They are designed to give you ideas, they are not designed to be exact matches or indicate precise coverage. They can be used to better understand the technologies, ask better questions, and develop test plans for your countermeasures.")},m(r,i){B(r,e,i),a(e,t),B(r,l,i)},p:re,d(r){r&&o(e),r&&o(l)}}}function gt(n){let e,t,l,r;return{c(){e=c("button"),t=D("select"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var s=h(e);t=q(s,"select"),s.forEach(o),this.h()},h(){g(e,"class","selector svelte-wn74lb")},m(i,s){B(i,e,s),a(e,t),l||(r=he(e,"click",n[9]),l=!0)},p:re,d(i){i&&o(e),l=!1,r()}}}function Tt(n){let e,t,l,r;return{c(){e=c("button"),t=D("deselect"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var s=h(e);t=q(s,"deselect"),s.forEach(o),this.h()},h(){g(e,"class","selector svelte-wn74lb")},m(i,s){B(i,e,s),a(e,t),l||(r=he(e,"click",n[8]),l=!0)},p:re,d(i){i&&o(e),l=!1,r()}}}function kt(n){let e,t=n[27].message+"",l;return{c(){e=c("p"),l=D(t),this.h()},l(r){e=f(r,"P",{style:!0});var i=h(e);l=q(i,t),i.forEach(o),this.h()},h(){Ie(e,"color","red")},m(r,i){B(r,e,i),a(e,l)},p(r,i){i[0]&32&&t!==(t=r[27].message+"")&&ae(l,t)},d(r){r&&o(e)}}}function Dt(n){let e;function t(i,s){return i[23].description.graph[0]?yt:qt}let l=t(n),r=l(n);return{c(){r.c(),e=pe()},l(i){r.l(i),e=pe()},m(i,s){r.m(i,s),B(i,e,s)},p(i,s){l===(l=t(i))&&r?r.p(i,s):(r.d(1),r=l(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){r.d(i),i&&o(e)}}}function qt(n){let e,t,l=n[23].id+"",r,i,s,p,m,A,k;return{c(){e=c("td"),t=c("a"),r=D(l),s=F(),p=c("td"),m=D("not found in D3FEND graph"),A=F(),k=c("td"),this.h()},l(v){e=f(v,"TD",{class:!0});var _=h(e);t=f(_,"A",{style:!0,href:!0});var b=h(t);r=q(b,l),b.forEach(o),_.forEach(o),s=R(v),p=f(v,"TD",{});var y=h(p);m=q(y,"not found in D3FEND graph"),y.forEach(o),A=R(v),k=f(v,"TD",{}),h(k).forEach(o),this.h()},h(){Ie(t,"color","red"),g(t,"href",i=je(n[23].id)),g(e,"class","text-center")},m(v,_){B(v,e,_),a(e,t),a(t,r),B(v,s,_),B(v,p,_),a(p,m),B(v,A,_),B(v,k,_)},p(v,_){_[0]&32&&l!==(l=v[23].id+"")&&ae(r,l),_[0]&32&&i!==(i=je(v[23].id))&&g(t,"href",i)},d(v){v&&o(e),v&&o(s),v&&o(p),v&&o(A),v&&o(k)}}}function yt(n){let e,t,l=n[23].description.graph[0]["d3f:d3fend-id"]+"",r,i,s,p,m=n[23].description.graph[0]["rdfs:label"]+"",A,k,v,_,b,y,P,U,O,M,Y,z,Q,T,I,H,L,$,Z,J,G,x,le,X=ze(n[23].def_to_off.results.bindings),S=[];for(let d=0;d<X.length;d+=1)S[d]=Je(Se(n,X,d));let w=null;return X.length||(w=Me()),{c(){e=c("th"),t=c("a"),r=D(l),s=F(),p=c("td"),A=D(m),k=F(),v=c("td"),_=c("table"),b=c("thead"),y=c("th"),P=D("defensive verb"),U=F(),O=c("th"),M=D("defensive artifact"),Y=F(),z=c("th"),Q=D("ATT&CK Technique"),T=F(),I=c("th"),H=D("offensive verb"),L=F(),$=c("th"),Z=D("offensive artifact"),J=F(),G=c("th"),x=D("ATT&CK ID"),le=F();for(let d=0;d<S.length;d+=1)S[d].c();w&&w.c(),this.h()},l(d){e=f(d,"TH",{class:!0,scope:!0});var N=h(e);t=f(N,"A",{href:!0});var j=h(t);r=q(j,l),j.forEach(o),N.forEach(o),s=R(d),p=f(d,"TD",{});var te=h(p);A=q(te,m),te.forEach(o),k=R(d),v=f(d,"TD",{});var W=h(v);_=f(W,"TABLE",{class:!0});var V=h(_);b=f(V,"THEAD",{class:!0});var E=h(b);y=f(E,"TH",{scope:!0});var u=h(y);P=q(u,"defensive verb"),u.forEach(o),U=R(E),O=f(E,"TH",{scope:!0});var C=h(O);M=q(C,"defensive artifact"),C.forEach(o),Y=R(E),z=f(E,"TH",{scope:!0});var ee=h(z);Q=q(ee,"ATT&CK Technique"),ee.forEach(o),T=R(E),I=f(E,"TH",{scope:!0});var K=h(I);H=q(K,"offensive verb"),K.forEach(o),L=R(E),$=f(E,"TH",{scope:!0});var oe=h($);Z=q(oe,"offensive artifact"),oe.forEach(o),J=R(E),G=f(E,"TH",{scope:!0});var ne=h(G);x=q(ne,"ATT&CK ID"),ne.forEach(o),E.forEach(o),le=R(V);for(let se=0;se<S.length;se+=1)S[se].l(V);w&&w.l(V),V.forEach(o),W.forEach(o),this.h()},h(){g(t,"href",i="/technique/"+n[23].description.graph[0]["@id"]),g(e,"class","text-center"),g(e,"scope","row"),g(y,"scope","col"),g(O,"scope","col"),g(z,"scope","col"),g(I,"scope","col"),g($,"scope","col"),g(G,"scope","col"),g(b,"class","svelte-wn74lb"),Ve(b,"hide",n[4]),g(_,"class","table-auto w100 svelte-wn74lb")},m(d,N){B(d,e,N),a(e,t),a(t,r),B(d,s,N),B(d,p,N),a(p,A),B(d,k,N),B(d,v,N),a(v,_),a(_,b),a(b,y),a(y,P),a(b,U),a(b,O),a(O,M),a(b,Y),a(b,z),a(z,Q),a(b,T),a(b,I),a(I,H),a(b,L),a(b,$),a($,Z),a(b,J),a(b,G),a(G,x),a(_,le);for(let j=0;j<S.length;j+=1)S[j].m(_,null);w&&w.m(_,null)},p(d,N){if(N[0]&32&&l!==(l=d[23].description.graph[0]["d3f:d3fend-id"]+"")&&ae(r,l),N[0]&32&&i!==(i="/technique/"+d[23].description.graph[0]["@id"])&&g(t,"href",i),N[0]&32&&m!==(m=d[23].description.graph[0]["rdfs:label"]+"")&&ae(A,m),N[0]&16&&Ve(b,"hide",d[4]),N[0]&32){X=ze(d[23].def_to_off.results.bindings);let j;for(j=0;j<X.length;j+=1){const te=Se(d,X,j);S[j]?S[j].p(te,N):(S[j]=Je(te),S[j].c(),S[j].m(_,null))}for(;j<S.length;j+=1)S[j].d(1);S.length=X.length,!X.length&&w?w.p(d,N):X.length?w&&(w.d(1),w=null):(w=Me(),w.c(),w.m(_,null))}},d(d){d&&o(e),d&&o(s),d&&o(p),d&&o(k),d&&o(v),Ce(S,d),w&&w.d()}}}function Me(n){let e,t,l,r,i;return{c(){e=c("td"),t=D("no defensive relations "),l=c("a"),r=D("yet"),i=F(),this.h()},l(s){e=f(s,"TD",{colspan:!0});var p=h(e);t=q(p,"no defensive relations "),l=f(p,"A",{href:!0});var m=h(l);r=q(m,"yet"),m.forEach(o),i=R(p),p.forEach(o),this.h()},h(){g(l,"href","/contribute"),g(e,"colspan","5")},m(s,p){B(s,e,p),a(e,t),a(e,l),a(l,r),a(e,i)},p:re,d(s){s&&o(e)}}}function Ye(n){let e,t,l=n[24].def_artifact_rel_label.value+"",r,i,s,p,m=n[24].def_artifact_label.value+"",A,k,v,_,b,y=n[24].off_tech_label.value+"",P,U,O,M,Y=n[24].off_artifact_rel_label.value+"",z,Q,T,I,H=n[24].off_artifact_label.value+"",L,$,Z,J,G,x=fe(n[24].off_tech.value)+"",le,X,S;return{c(){e=c("tr"),t=c("td"),r=D(l),i=F(),s=c("td"),p=c("a"),A=D(m),v=F(),_=c("td"),b=c("a"),P=D(y),O=F(),M=c("td"),z=D(Y),Q=F(),T=c("td"),I=c("a"),L=D(H),Z=F(),J=c("td"),G=c("a"),le=D(x),S=F(),this.h()},l(w){e=f(w,"TR",{});var d=h(e);t=f(d,"TD",{});var N=h(t);r=q(N,l),N.forEach(o),i=R(d),s=f(d,"TD",{});var j=h(s);p=f(j,"A",{href:!0});var te=h(p);A=q(te,m),te.forEach(o),j.forEach(o),v=R(d),_=f(d,"TD",{});var W=h(_);b=f(W,"A",{href:!0});var V=h(b);P=q(V,y),V.forEach(o),W.forEach(o),O=R(d),M=f(d,"TD",{});var E=h(M);z=q(E,Y),E.forEach(o),Q=R(d),T=f(d,"TD",{});var u=h(T);I=f(u,"A",{href:!0});var C=h(I);L=q(C,H),C.forEach(o),u.forEach(o),Z=R(d),J=f(d,"TD",{});var ee=h(J);G=f(ee,"A",{href:!0});var K=h(G);le=q(K,x),K.forEach(o),ee.forEach(o),S=R(d),d.forEach(o),this.h()},h(){g(p,"href",k="/dao/artifact/"+Te(n[24].def_artifact.value)),g(b,"href",U=ke(fe(n[24].off_tech.value))),g(I,"href",$="/dao/artifact/"+Te(n[24].off_artifact.value)),g(G,"href",X=ke(fe(n[24].off_tech.value)))},m(w,d){B(w,e,d),a(e,t),a(t,r),a(e,i),a(e,s),a(s,p),a(p,A),a(e,v),a(e,_),a(_,b),a(b,P),a(e,O),a(e,M),a(M,z),a(e,Q),a(e,T),a(T,I),a(I,L),a(e,Z),a(e,J),a(J,G),a(G,le),a(e,S)},p(w,d){d[0]&32&&l!==(l=w[24].def_artifact_rel_label.value+"")&&ae(r,l),d[0]&32&&m!==(m=w[24].def_artifact_label.value+"")&&ae(A,m),d[0]&32&&k!==(k="/dao/artifact/"+Te(w[24].def_artifact.value))&&g(p,"href",k),d[0]&32&&y!==(y=w[24].off_tech_label.value+"")&&ae(P,y),d[0]&32&&U!==(U=ke(fe(w[24].off_tech.value)))&&g(b,"href",U),d[0]&32&&Y!==(Y=w[24].off_artifact_rel_label.value+"")&&ae(z,Y),d[0]&32&&H!==(H=w[24].off_artifact_label.value+"")&&ae(L,H),d[0]&32&&$!==($="/dao/artifact/"+Te(w[24].off_artifact.value))&&g(I,"href",$),d[0]&32&&x!==(x=fe(w[24].off_tech.value)+"")&&ae(le,x),d[0]&32&&X!==(X=ke(fe(w[24].off_tech.value)))&&g(G,"href",X)},d(w){w&&o(e)}}}function Je(n){let e,t=n[24].def_tech&&Ye(n);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,r){t&&t.m(l,r),B(l,e,r)},p(l,r){l[24].def_tech?t?t.p(l,r):(t=Ye(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&o(e)}}}function wt(n){let e;return{c(){e=D("loading...")},l(t){e=q(t,"loading...")},m(t,l){B(t,e,l)},p:re,d(t){t&&o(e)}}}function Xe(n){let e,t,l,r={ctx:n,current:null,token:null,hasCatch:!0,pending:wt,then:Dt,catch:kt,value:23,error:27};return De(t=n[20],r),{c(){e=c("tr"),r.block.c(),l=F()},l(i){e=f(i,"TR",{});var s=h(e);r.block.l(s),l=R(s),s.forEach(o)},m(i,s){B(i,e,s),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=l,a(e,l)},p(i,s){n=i,r.ctx=n,s[0]&32&&t!==(t=n[20])&&De(t,r)||Qe(r,n,s)},d(i){i&&o(e),r.block.d(),r.token=null,r=null}}}function Nt(n){let e;return{c(){e=D("enter text and click go")},l(t){e=q(t,"enter text and click go")},m(t,l){B(t,e,l)},p:re,i:re,o:re,d(t){t&&o(e)}}}function At(n){let e,t,l,r,i,s,p,m,A,k,v,_,b,y,P,U,O,M,Y,z,Q,T,I,H,L,$,Z,J,G,x,le,X,S,w,d,N,j,te,W;e=new ct({props:{title:"D3FEND Extractor | Tools | "}}),r=new it({});let V={ctx:n,current:null,token:null,hasCatch:!0,pending:Nt,then:vt,catch:pt,value:19,error:27,blocks:[,,,]};return De(N=n[5],V),{c(){ye(e.$$.fragment),t=F(),l=c("section"),ye(r.$$.fragment),i=F(),s=c("div"),p=c("h1"),m=D("D3FEND Extractor"),A=F(),k=c("p"),v=D("Extracts D3FEND techniques from blobs of text and identifies "),_=c("i"),b=D("related"),y=D(" ATT&CK Techniques. You may also want to try the "),P=c("a"),U=D("ATT&CK Extractor"),O=D(" or the "),M=c("a"),Y=D("Artifact Extractor."),z=F(),Q=c("p"),T=c("i"),I=D("Paste any text containing D3FEND techniques:"),H=F(),L=c("div"),$=c("textarea"),Z=F(),J=c("div"),G=c("button"),x=D("GO"),le=F(),X=c("br"),S=F(),w=c("br"),d=F(),V.block.c(),this.h()},l(E){we(e.$$.fragment,E),t=R(E),l=f(E,"SECTION",{class:!0});var u=h(l);we(r.$$.fragment,u),i=R(u),s=f(u,"DIV",{class:!0});var C=h(s);p=f(C,"H1",{});var ee=h(p);m=q(ee,"D3FEND Extractor"),ee.forEach(o),A=R(C),k=f(C,"P",{});var K=h(k);v=q(K,"Extracts D3FEND techniques from blobs of text and identifies "),_=f(K,"I",{});var oe=h(_);b=q(oe,"related"),oe.forEach(o),y=q(K," ATT&CK Techniques. You may also want to try the "),P=f(K,"A",{href:!0});var ne=h(P);U=q(ne,"ATT&CK Extractor"),ne.forEach(o),O=q(K," or the "),M=f(K,"A",{href:!0});var se=h(M);Y=q(se,"Artifact Extractor."),se.forEach(o),K.forEach(o),z=R(C),Q=f(C,"P",{class:!0});var ve=h(Q);T=f(ve,"I",{});var me=h(T);I=q(me,"Paste any text containing D3FEND techniques:"),me.forEach(o),ve.forEach(o),H=R(C),L=f(C,"DIV",{});var ie=h(L);$=f(ie,"TEXTAREA",{class:!0}),h($).forEach(o),ie.forEach(o),Z=R(C),J=f(C,"DIV",{});var ce=h(J);G=f(ce,"BUTTON",{class:!0});var be=h(G);x=q(be,"GO"),be.forEach(o),ce.forEach(o),le=R(C),X=f(C,"BR",{}),C.forEach(o),S=R(u),w=f(u,"BR",{}),d=R(u),V.block.l(u),u.forEach(o),this.h()},h(){g(P,"href","/tools/attack-extractor"),g(M,"href","/tools/artifact-extractor"),g(Q,"class","text-2"),g($,"class","svelte-wn74lb"),g(G,"class","button"),g(s,"class","card"),g(l,"class"," svelte-wn74lb")},m(E,u){Ne(e,E,u),B(E,t,u),B(E,l,u),Ne(r,l,null),a(l,i),a(l,s),a(s,p),a(p,m),a(s,A),a(s,k),a(k,v),a(k,_),a(_,b),a(k,y),a(k,P),a(P,U),a(k,O),a(k,M),a(M,Y),a(s,z),a(s,Q),a(Q,T),a(T,I),a(s,H),a(s,L),a(L,$),Oe($,n[1]),a(s,Z),a(s,J),a(J,G),a(G,x),a(s,le),a(s,X),a(l,S),a(l,w),a(l,d),V.block.m(l,V.anchor=null),V.mount=()=>l,V.anchor=null,j=!0,te||(W=[he($,"input",n[12]),he($,"keypress",n[10]),he(G,"click",n[7])],te=!0)},p(E,u){n=E,u[0]&2&&Oe($,n[1]),V.ctx=n,u[0]&32&&N!==(N=n[5])&&De(N,V)||Qe(V,n,u)},i(E){j||(de(e.$$.fragment,E),de(r.$$.fragment,E),de(V.block),j=!0)},o(E){_e(e.$$.fragment,E),_e(r.$$.fragment,E);for(let u=0;u<3;u+=1){const C=V.blocks[u];_e(C)}j=!1},d(E){Ae(e,E),E&&o(t),E&&o(l),Ae(r),V.block.d(),V.token=null,V=null,te=!1,We(W)}}}async function Ut({params:n,fetch:e}){n.technique;const t=await e("/api/technique/all.json"),l=await t.json();return t.status===200?{props:{techniques:l}}:{status:t.status,error:new Error(l.message)}}function It(){document.execCommand("copy")}function ze(n){let e=new Set,t=[];return n.forEach(function(l){l.hasOwnProperty("off_tech_label")&&(e.has(l.off_tech_label.value)||(e.add(l.off_tech_label.value),t.push(l)))}),t}function Ct(n,e,t){let l;rt(n,ut,T=>t(14,l=T));let{techniques:r}=e,i=new Pe(r,{index:!0,index_key:"d3f:d3fend-id"}),s,p="",m=!1,A=!0,k;k=l.url.searchParams.get("q"),console.log("Found params: "+k);let v=!1,_=[];async function b(){let T=new _t,I=await Promise.all(_);I.forEach(function(Z){Z.def_to_off.results.bindings.forEach(function(J){T.add_technique({techniqueID:fe(J.off_tech.value),comment:`
`+J.def_tech_label.value+`
`,color:"#9ecae1"})})});let H=`"Navigator_Layer-${I.length}-D3FEND-Techniques.json"`;const L=document.createElement("a"),$=new Blob([JSON.stringify(T.json())],{type:"application/json;charset=utf-8"});L.href=URL.createObjectURL($),L.download=H,L.click()}async function y(T){let I="/api/technique/"+T+".json";const H=await fetch(I);if(H.status==404)return{id:T,def_to_off:[],description:{graph:[]},status:H.status};if(H.ok){const L=await H.json();return{id:T,def_to_off:L.def_to_off,description:new Pe(L.description)}}else throw new Error(p)}async function P(){let T=t(0,s=Array.from(new Set(ht(p,i))));return T&&(T.forEach(function(I){let H;H=y(I),H&&_.push(H)}),l.url.searchParams.set("q",JSON.stringify(T)),history.replaceState(null,"mapping",l.url)),_}let U=P();function O(){t(5,U=P()),t(3,A=!1)}function M(){window.getSelection().removeAllRanges(),t(2,m=!1),t(4,v=!1)}function Y(){t(4,v=!0);let T="mappings";const I=window.getSelection();I.removeAllRanges();let H=document.getElementById(T);const L=document.createRange();L.selectNodeContents(H),I.addRange(L),t(2,m=!0)}function z(T){T.ctrlKey==!0&&T.keyCode==13&&O()}ot(async()=>{k?(t(1,p=k),console.log("handlingclick"),O()):(console.log("starting blank"),t(1,p=""))});function Q(){p=this.value,t(1,p)}return n.$$set=T=>{"techniques"in T&&t(11,r=T.techniques)},[s,p,m,A,v,U,b,O,M,Y,z,r,Q]}class Gt extends tt{constructor(e){super(),lt(this,e,Ct,At,at,{techniques:11},null,[-1,-1])}}export{Gt as default,Ut as load};
