var Ze=Object.defineProperty;var He=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Ke=(n,e,t)=>e in n?Ze(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ge=(n,e)=>{for(var t in e||(e={}))xe.call(e,t)&&Ke(n,t,e[t]);if(He)for(var t of He(e))et.call(e,t)&&Ke(n,t,e[t]);return n};import{S as tt,i as lt,s as at,a7 as De,w as ye,k as C,e as c,t as D,x as we,m as F,c as f,a as h,h as q,d as o,b as T,y as Ne,g as B,I as a,a1 as Oe,N as he,a8 as Qe,q as de,o as _e,B as Ae,Y as We,R as rt,v as ot,f as Ie,j as ae,E as re,l as pe,n as st,p as nt,X as Ce,V as Ve}from"../../chunks/index-a02da30e.js";import{H as it}from"../../chunks/Header-47fd749a.js";import{T as ct}from"../../chunks/Title-1d23c88f.js";import{A as ft}from"../../chunks/Alert-12c40fb9.js";import{b as ht}from"../../chunks/extract-98765c01.js";import{G as Pe,g as fe,e as je,h as Te,d as ke}from"../../chunks/lib-09c47a26.js";import{p as ut}from"../../chunks/stores-cf129ad8.js";import"../../chunks/stores-59d8ae96.js";import"../../chunks/index-98a102c4.js";/* empty css                                                       */import"../../chunks/marked.esm-8ab30116.js";var dt={name:"D3FEND Countermeasure Coverage",domain:"enterprise-attack",description:""};class _t{constructor(e){this.layer=ge({},dt),this.layer.techniques=new Array,this.tech_index={},e&&(this.options=ge(ge({},this.options),e))}add_technique(e){this.tech_index.hasOwnProperty(e.techniqueID)?this.tech_index[e.techniqueID].comment&&this.tech_index[e.techniqueID].comment.indexOf(e.comment)==-1&&(this.tech_index[e.techniqueID].comment+=e.comment):this.tech_index[e.techniqueID]=e}json(){for(let e in this.tech_index)this.layer.techniques.push(this.tech_index[e]);return this.layer}}function Le(n,e,t){const l=n.slice();return l[22]=e[t],l}function Se(n,e,t){const l=n.slice();return l[26]=e[t],l}function Ue(n,e,t){const l=n.slice();return l[30]=e[t],l}function pt(n){let e,t=n[29].message+"",l;return{c(){e=c("p"),l=D(t),this.h()},l(r){e=f(r,"P",{style:!0});var i=h(e);l=q(i,t),i.forEach(o),this.h()},h(){Ie(e,"color","red")},m(r,i){B(r,e,i),a(e,l)},p(r,i){i[0]&32&&t!==(t=r[29].message+"")&&ae(l,t)},i:re,o:re,d(r){r&&o(e)}}}function vt(n){let e,t,l,r;const i=[bt,mt],s=[];function _(m,N){return m[21].length>0?0:!m[3]&&m[21].length<1?1:-1}return~(e=_(n))&&(t=s[e]=i[e](n)),{c(){t&&t.c(),l=pe()},l(m){t&&t.l(m),l=pe()},m(m,N){~e&&s[e].m(m,N),B(m,l,N),r=!0},p(m,N){let k=e;e=_(m),e===k?~e&&s[e].p(m,N):(t&&(st(),_e(s[k],1,1,()=>{s[k]=null}),nt()),~e?(t=s[e],t?t.p(m,N):(t=s[e]=i[e](m),t.c()),de(t,1),t.m(l.parentNode,l)):t=null)},i(m){r||(de(t),r=!0)},o(m){_e(t),r=!1},d(m){~e&&s[e].d(m),m&&o(l)}}}function mt(n){let e,t;return{c(){e=c("div"),t=D("No D3FEND techniques found in text."),this.h()},l(l){e=f(l,"DIV",{class:!0});var r=h(e);t=q(r,"No D3FEND techniques found in text."),r.forEach(o),this.h()},h(){T(e,"class","card")},m(l,r){B(l,e,r),a(e,t)},p:re,i:re,o:re,d(l){l&&o(e)}}}function bt(n){let e,t,l,r,i,s,_,m,N,k,v,p,b,y,L,M,K,Y,$,X,Q,G,g,P,O,R,W,z,S,x,le,J,U,w,d,A=n[0]&&Ge(n);r=new ft({props:{$$slots:{default:[Et]},$$scope:{ctx:n}}});function j(u,I){return u[2]?Tt:gt}let te=j(n),Z=te(n),V=n[21],E=[];for(let u=0;u<V.length;u+=1)E[u]=Xe(Le(n,V,u));return{c(){e=c("div"),A&&A.c(),t=C(),l=c("div"),ye(r.$$.fragment),i=C(),s=c("div"),_=c("div"),m=c("button"),N=D("Download ATT&CK Navigator Layer"),k=C(),v=c("div"),p=c("b"),b=c("i"),y=D("Mapping Results:"),L=C(),M=c("div"),K=c("div"),Z.c(),Y=C(),$=c("button"),X=D("copy"),Q=C(),G=c("table"),g=c("thead"),P=c("th"),O=D("D3FEND ID"),R=C(),W=c("th"),z=D("D3FEND Name"),S=C(),x=c("th"),le=D("Related ATT&CK Techniques"),J=C();for(let u=0;u<E.length;u+=1)E[u].c();this.h()},l(u){e=f(u,"DIV",{class:!0});var I=h(e);A&&A.l(I),I.forEach(o),t=F(u),l=f(u,"DIV",{class:!0});var ee=h(l);we(r.$$.fragment,ee),ee.forEach(o),i=F(u),s=f(u,"DIV",{class:!0});var H=h(s);_=f(H,"DIV",{class:!0});var oe=h(_);m=f(oe,"BUTTON",{class:!0,title:!0});var ne=h(m);N=q(ne,"Download ATT&CK Navigator Layer"),ne.forEach(o),oe.forEach(o),k=F(H),v=f(H,"DIV",{});var se=h(v);p=f(se,"B",{});var ve=h(p);b=f(ve,"I",{});var me=h(b);y=q(me,"Mapping Results:"),me.forEach(o),ve.forEach(o),se.forEach(o),L=F(H),M=f(H,"DIV",{class:!0});var ie=h(M);K=f(ie,"DIV",{class:!0});var ce=h(K);Z.l(ce),Y=F(ce),$=f(ce,"BUTTON",{});var be=h($);X=q(be,"copy"),be.forEach(o),ce.forEach(o),Q=F(ie),G=f(ie,"TABLE",{id:!0,class:!0});var Ee=h(G);g=f(Ee,"THEAD",{});var ue=h(g);P=f(ue,"TH",{class:!0});var Fe=h(P);O=q(Fe,"D3FEND ID"),Fe.forEach(o),R=F(ue),W=f(ue,"TH",{});var Re=h(W);z=q(Re,"D3FEND Name"),Re.forEach(o),S=F(ue),x=f(ue,"TH",{});var Be=h(x);le=q(Be,"Related ATT&CK Techniques"),Be.forEach(o),ue.forEach(o),J=F(Ee);for(let qe=0;qe<E.length;qe+=1)E[qe].l(Ee);Ee.forEach(o),ie.forEach(o),H.forEach(o),this.h()},h(){T(e,"class","card"),T(l,"class","card"),T(m,"class","small button"),T(m,"title","Load into Navigator to see related TTPs"),T(_,"class","text-right"),T(K,"class","text-right"),T(P,"class","stretch"),T(G,"id","mappings"),T(G,"class","table-auto"),T(M,"class","results-wrap center svelte-wn74lb"),T(s,"class","card")},m(u,I){B(u,e,I),A&&A.m(e,null),B(u,t,I),B(u,l,I),Ne(r,l,null),B(u,i,I),B(u,s,I),a(s,_),a(_,m),a(m,N),a(s,k),a(s,v),a(v,p),a(p,b),a(b,y),a(s,L),a(s,M),a(M,K),Z.m(K,null),a(K,Y),a(K,$),a($,X),a(M,Q),a(M,G),a(G,g),a(g,P),a(P,O),a(g,R),a(g,W),a(W,z),a(g,S),a(g,x),a(x,le),a(G,J);for(let ee=0;ee<E.length;ee+=1)E[ee].m(G,null);U=!0,w||(d=[he(m,"click",n[6]),he($,"click",It)],w=!0)},p(u,I){u[0]?A?A.p(u,I):(A=Ge(u),A.c(),A.m(e,null)):A&&(A.d(1),A=null);const ee={};if(I[1]&4&&(ee.$$scope={dirty:I,ctx:u}),r.$set(ee),te===(te=j(u))&&Z?Z.p(u,I):(Z.d(1),Z=te(u),Z&&(Z.c(),Z.m(K,Y))),I[0]&48){V=u[21];let H;for(H=0;H<V.length;H+=1){const oe=Le(u,V,H);E[H]?E[H].p(oe,I):(E[H]=Xe(oe),E[H].c(),E[H].m(G,null))}for(;H<E.length;H+=1)E[H].d(1);E.length=V.length}},i(u){U||(de(r.$$.fragment,u),U=!0)},o(u){_e(r.$$.fragment,u),U=!1},d(u){u&&o(e),A&&A.d(),u&&o(t),u&&o(l),Ae(r),u&&o(i),u&&o(s),Z.d(),Ce(E,u),w=!1,We(d)}}}function Ge(n){let e,t,l,r,i=n[0].length+"",s,_,m,N,k=n[0],v=[];for(let p=0;p<k.length;p+=1)v[p]=Me(Ue(n,k,p));return{c(){e=c("div"),t=c("b"),l=c("i"),r=D("Extracted "),s=D(i),_=D(" unique IDs:"),m=C(),N=c("dl");for(let p=0;p<v.length;p+=1)v[p].c();this.h()},l(p){e=f(p,"DIV",{class:!0});var b=h(e);t=f(b,"B",{});var y=h(t);l=f(y,"I",{});var L=h(l);r=q(L,"Extracted "),s=q(L,i),_=q(L," unique IDs:"),L.forEach(o),y.forEach(o),m=F(b),N=f(b,"DL",{class:!0});var M=h(N);for(let K=0;K<v.length;K+=1)v[K].l(M);M.forEach(o),b.forEach(o),this.h()},h(){T(N,"class","flex flex-wrap svelte-wn74lb"),T(e,"class","")},m(p,b){B(p,e,b),a(e,t),a(t,l),a(l,r),a(l,s),a(l,_),a(e,m),a(e,N);for(let y=0;y<v.length;y+=1)v[y].m(N,null)},p(p,b){if(b[0]&1&&i!==(i=p[0].length+"")&&ae(s,i),b[0]&1){k=p[0];let y;for(y=0;y<k.length;y+=1){const L=Ue(p,k,y);v[y]?v[y].p(L,b):(v[y]=Me(L),v[y].c(),v[y].m(N,null))}for(;y<v.length;y+=1)v[y].d(1);v.length=k.length}},d(p){p&&o(e),Ce(v,p)}}}function Me(n){let e,t,l=n[30]+"",r,i;return{c(){e=c("dd"),t=c("a"),r=D(l),this.h()},l(s){e=f(s,"DD",{});var _=h(e);t=f(_,"A",{href:!0});var m=h(t);r=q(m,l),m.forEach(o),_.forEach(o),this.h()},h(){T(t,"href",i="/technique/"+n[30])},m(s,_){B(s,e,_),a(e,t),a(t,r)},p(s,_){_[0]&1&&l!==(l=s[30]+"")&&ae(r,l),_[0]&1&&i!==(i="/technique/"+s[30])&&T(t,"href",i)},d(s){s&&o(e)}}}function Et(n){let e,t,l;return{c(){e=c("b"),t=D("Note: "),l=D("These relationships are generated based on the digital artifacts specified for the offensive and defensive techniques. They are designed to give you ideas, they are not designed to be exact matches or indicate precise coverage. They can be used to better understand the technologies, ask better questions, and develop test plans for your countermeasures.")},l(r){e=f(r,"B",{});var i=h(e);t=q(i,"Note: "),i.forEach(o),l=q(r,"These relationships are generated based on the digital artifacts specified for the offensive and defensive techniques. They are designed to give you ideas, they are not designed to be exact matches or indicate precise coverage. They can be used to better understand the technologies, ask better questions, and develop test plans for your countermeasures.")},m(r,i){B(r,e,i),a(e,t),B(r,l,i)},p:re,d(r){r&&o(e),r&&o(l)}}}function gt(n){let e,t,l,r;return{c(){e=c("button"),t=D("select"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var s=h(e);t=q(s,"select"),s.forEach(o),this.h()},h(){T(e,"class","selector svelte-wn74lb")},m(i,s){B(i,e,s),a(e,t),l||(r=he(e,"click",n[9]),l=!0)},p:re,d(i){i&&o(e),l=!1,r()}}}function Tt(n){let e,t,l,r;return{c(){e=c("button"),t=D("deselect"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var s=h(e);t=q(s,"deselect"),s.forEach(o),this.h()},h(){T(e,"class","selector svelte-wn74lb")},m(i,s){B(i,e,s),a(e,t),l||(r=he(e,"click",n[8]),l=!0)},p:re,d(i){i&&o(e),l=!1,r()}}}function kt(n){let e,t=n[29].message+"",l;return{c(){e=c("p"),l=D(t),this.h()},l(r){e=f(r,"P",{style:!0});var i=h(e);l=q(i,t),i.forEach(o),this.h()},h(){Ie(e,"color","red")},m(r,i){B(r,e,i),a(e,l)},p(r,i){i[0]&32&&t!==(t=r[29].message+"")&&ae(l,t)},d(r){r&&o(e)}}}function Dt(n){let e;function t(i,s){return i[25].description.graph[0]?yt:qt}let l=t(n),r=l(n);return{c(){r.c(),e=pe()},l(i){r.l(i),e=pe()},m(i,s){r.m(i,s),B(i,e,s)},p(i,s){l===(l=t(i))&&r?r.p(i,s):(r.d(1),r=l(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){r.d(i),i&&o(e)}}}function qt(n){let e,t,l=n[25].id+"",r,i,s,_,m,N,k;return{c(){e=c("td"),t=c("a"),r=D(l),s=C(),_=c("td"),m=D("not found in D3FEND graph"),N=C(),k=c("td"),this.h()},l(v){e=f(v,"TD",{class:!0});var p=h(e);t=f(p,"A",{style:!0,href:!0});var b=h(t);r=q(b,l),b.forEach(o),p.forEach(o),s=F(v),_=f(v,"TD",{});var y=h(_);m=q(y,"not found in D3FEND graph"),y.forEach(o),N=F(v),k=f(v,"TD",{}),h(k).forEach(o),this.h()},h(){Ie(t,"color","red"),T(t,"href",i=je(n[25].id)),T(e,"class","text-center")},m(v,p){B(v,e,p),a(e,t),a(t,r),B(v,s,p),B(v,_,p),a(_,m),B(v,N,p),B(v,k,p)},p(v,p){p[0]&32&&l!==(l=v[25].id+"")&&ae(r,l),p[0]&32&&i!==(i=je(v[25].id))&&T(t,"href",i)},d(v){v&&o(e),v&&o(s),v&&o(_),v&&o(N),v&&o(k)}}}function yt(n){let e,t,l=n[25].description.graph[0]["d3f:d3fend-id"]+"",r,i,s,_,m=n[25].description.graph[0]["rdfs:label"]+"",N,k,v,p,b,y,L,M,K,Y,$,X,Q,G,g,P,O,R,W,z,S,x,le,J=ze(n[25].def_to_off.results.bindings),U=[];for(let d=0;d<J.length;d+=1)U[d]=Je(Se(n,J,d));let w=null;return J.length||(w=Ye()),{c(){e=c("th"),t=c("a"),r=D(l),s=C(),_=c("td"),N=D(m),k=C(),v=c("td"),p=c("table"),b=c("thead"),y=c("th"),L=D("defensive verb"),M=C(),K=c("th"),Y=D("defensive artifact"),$=C(),X=c("th"),Q=D("ATT&CK Technique"),G=C(),g=c("th"),P=D("offensive verb"),O=C(),R=c("th"),W=D("offensive artifact"),z=C(),S=c("th"),x=D("ATT&CK ID"),le=C();for(let d=0;d<U.length;d+=1)U[d].c();w&&w.c(),this.h()},l(d){e=f(d,"TH",{class:!0,scope:!0});var A=h(e);t=f(A,"A",{href:!0});var j=h(t);r=q(j,l),j.forEach(o),A.forEach(o),s=F(d),_=f(d,"TD",{});var te=h(_);N=q(te,m),te.forEach(o),k=F(d),v=f(d,"TD",{});var Z=h(v);p=f(Z,"TABLE",{class:!0});var V=h(p);b=f(V,"THEAD",{class:!0});var E=h(b);y=f(E,"TH",{scope:!0});var u=h(y);L=q(u,"defensive verb"),u.forEach(o),M=F(E),K=f(E,"TH",{scope:!0});var I=h(K);Y=q(I,"defensive artifact"),I.forEach(o),$=F(E),X=f(E,"TH",{scope:!0});var ee=h(X);Q=q(ee,"ATT&CK Technique"),ee.forEach(o),G=F(E),g=f(E,"TH",{scope:!0});var H=h(g);P=q(H,"offensive verb"),H.forEach(o),O=F(E),R=f(E,"TH",{scope:!0});var oe=h(R);W=q(oe,"offensive artifact"),oe.forEach(o),z=F(E),S=f(E,"TH",{scope:!0});var ne=h(S);x=q(ne,"ATT&CK ID"),ne.forEach(o),E.forEach(o),le=F(V);for(let se=0;se<U.length;se+=1)U[se].l(V);w&&w.l(V),V.forEach(o),Z.forEach(o),this.h()},h(){T(t,"href",i="/technique/"+n[25].description.graph[0]["@id"]),T(e,"class","text-center"),T(e,"scope","row"),T(y,"scope","col"),T(K,"scope","col"),T(X,"scope","col"),T(g,"scope","col"),T(R,"scope","col"),T(S,"scope","col"),T(b,"class","svelte-wn74lb"),Ve(b,"hide",n[4]),T(p,"class","table-auto w100 svelte-wn74lb")},m(d,A){B(d,e,A),a(e,t),a(t,r),B(d,s,A),B(d,_,A),a(_,N),B(d,k,A),B(d,v,A),a(v,p),a(p,b),a(b,y),a(y,L),a(b,M),a(b,K),a(K,Y),a(b,$),a(b,X),a(X,Q),a(b,G),a(b,g),a(g,P),a(b,O),a(b,R),a(R,W),a(b,z),a(b,S),a(S,x),a(p,le);for(let j=0;j<U.length;j+=1)U[j].m(p,null);w&&w.m(p,null)},p(d,A){if(A[0]&32&&l!==(l=d[25].description.graph[0]["d3f:d3fend-id"]+"")&&ae(r,l),A[0]&32&&i!==(i="/technique/"+d[25].description.graph[0]["@id"])&&T(t,"href",i),A[0]&32&&m!==(m=d[25].description.graph[0]["rdfs:label"]+"")&&ae(N,m),A[0]&16&&Ve(b,"hide",d[4]),A[0]&32){J=ze(d[25].def_to_off.results.bindings);let j;for(j=0;j<J.length;j+=1){const te=Se(d,J,j);U[j]?U[j].p(te,A):(U[j]=Je(te),U[j].c(),U[j].m(p,null))}for(;j<U.length;j+=1)U[j].d(1);U.length=J.length,!J.length&&w?w.p(d,A):J.length?w&&(w.d(1),w=null):(w=Ye(),w.c(),w.m(p,null))}},d(d){d&&o(e),d&&o(s),d&&o(_),d&&o(k),d&&o(v),Ce(U,d),w&&w.d()}}}function Ye(n){let e,t,l,r,i;return{c(){e=c("td"),t=D("no defensive relations "),l=c("a"),r=D("yet"),i=C(),this.h()},l(s){e=f(s,"TD",{colspan:!0});var _=h(e);t=q(_,"no defensive relations "),l=f(_,"A",{href:!0});var m=h(l);r=q(m,"yet"),m.forEach(o),i=F(_),_.forEach(o),this.h()},h(){T(l,"href","/contribute"),T(e,"colspan","5")},m(s,_){B(s,e,_),a(e,t),a(e,l),a(l,r),a(e,i)},p:re,d(s){s&&o(e)}}}function $e(n){let e,t,l=n[26].def_artifact_rel_label.value+"",r,i,s,_,m=n[26].def_artifact_label.value+"",N,k,v,p,b,y=n[26].off_tech_label.value+"",L,M,K,Y,$=n[26].off_artifact_rel_label.value+"",X,Q,G,g,P=n[26].off_artifact_label.value+"",O,R,W,z,S,x=fe(n[26].off_tech.value)+"",le,J,U;return{c(){e=c("tr"),t=c("td"),r=D(l),i=C(),s=c("td"),_=c("a"),N=D(m),v=C(),p=c("td"),b=c("a"),L=D(y),K=C(),Y=c("td"),X=D($),Q=C(),G=c("td"),g=c("a"),O=D(P),W=C(),z=c("td"),S=c("a"),le=D(x),U=C(),this.h()},l(w){e=f(w,"TR",{});var d=h(e);t=f(d,"TD",{});var A=h(t);r=q(A,l),A.forEach(o),i=F(d),s=f(d,"TD",{});var j=h(s);_=f(j,"A",{href:!0});var te=h(_);N=q(te,m),te.forEach(o),j.forEach(o),v=F(d),p=f(d,"TD",{});var Z=h(p);b=f(Z,"A",{href:!0});var V=h(b);L=q(V,y),V.forEach(o),Z.forEach(o),K=F(d),Y=f(d,"TD",{});var E=h(Y);X=q(E,$),E.forEach(o),Q=F(d),G=f(d,"TD",{});var u=h(G);g=f(u,"A",{href:!0});var I=h(g);O=q(I,P),I.forEach(o),u.forEach(o),W=F(d),z=f(d,"TD",{});var ee=h(z);S=f(ee,"A",{href:!0});var H=h(S);le=q(H,x),H.forEach(o),ee.forEach(o),U=F(d),d.forEach(o),this.h()},h(){T(_,"href",k="/dao/artifact/"+Te(n[26].def_artifact.value)),T(b,"href",M=ke(fe(n[26].off_tech.value))),T(g,"href",R="/dao/artifact/"+Te(n[26].off_artifact.value)),T(S,"href",J=ke(fe(n[26].off_tech.value)))},m(w,d){B(w,e,d),a(e,t),a(t,r),a(e,i),a(e,s),a(s,_),a(_,N),a(e,v),a(e,p),a(p,b),a(b,L),a(e,K),a(e,Y),a(Y,X),a(e,Q),a(e,G),a(G,g),a(g,O),a(e,W),a(e,z),a(z,S),a(S,le),a(e,U)},p(w,d){d[0]&32&&l!==(l=w[26].def_artifact_rel_label.value+"")&&ae(r,l),d[0]&32&&m!==(m=w[26].def_artifact_label.value+"")&&ae(N,m),d[0]&32&&k!==(k="/dao/artifact/"+Te(w[26].def_artifact.value))&&T(_,"href",k),d[0]&32&&y!==(y=w[26].off_tech_label.value+"")&&ae(L,y),d[0]&32&&M!==(M=ke(fe(w[26].off_tech.value)))&&T(b,"href",M),d[0]&32&&$!==($=w[26].off_artifact_rel_label.value+"")&&ae(X,$),d[0]&32&&P!==(P=w[26].off_artifact_label.value+"")&&ae(O,P),d[0]&32&&R!==(R="/dao/artifact/"+Te(w[26].off_artifact.value))&&T(g,"href",R),d[0]&32&&x!==(x=fe(w[26].off_tech.value)+"")&&ae(le,x),d[0]&32&&J!==(J=ke(fe(w[26].off_tech.value)))&&T(S,"href",J)},d(w){w&&o(e)}}}function Je(n){let e,t=n[26].def_tech&&$e(n);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,r){t&&t.m(l,r),B(l,e,r)},p(l,r){l[26].def_tech?t?t.p(l,r):(t=$e(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&o(e)}}}function wt(n){let e;return{c(){e=D("loading...")},l(t){e=q(t,"loading...")},m(t,l){B(t,e,l)},p:re,d(t){t&&o(e)}}}function Xe(n){let e,t,l,r={ctx:n,current:null,token:null,hasCatch:!0,pending:wt,then:Dt,catch:kt,value:25,error:29};return De(t=n[22],r),{c(){e=c("tr"),r.block.c(),l=C()},l(i){e=f(i,"TR",{});var s=h(e);r.block.l(s),l=F(s),s.forEach(o)},m(i,s){B(i,e,s),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=l,a(e,l)},p(i,s){n=i,r.ctx=n,s[0]&32&&t!==(t=n[22])&&De(t,r)||Qe(r,n,s)},d(i){i&&o(e),r.block.d(),r.token=null,r=null}}}function Nt(n){let e;return{c(){e=D("enter text and click go")},l(t){e=q(t,"enter text and click go")},m(t,l){B(t,e,l)},p:re,i:re,o:re,d(t){t&&o(e)}}}function At(n){let e,t,l,r,i,s,_,m,N,k,v,p,b,y,L,M,K,Y,$,X,Q,G,g,P,O,R,W,z,S,x,le,J,U,w,d,A,j,te,Z;e=new ct({props:{title:"D3FEND Extractor | Tools | "}}),r=new it({props:{header:"D3FEND Extractor"}});let V={ctx:n,current:null,token:null,hasCatch:!0,pending:Nt,then:vt,catch:pt,value:21,error:29,blocks:[,,,]};return De(A=n[5],V),{c(){ye(e.$$.fragment),t=C(),l=c("section"),ye(r.$$.fragment),i=C(),s=c("div"),_=c("h1"),m=D("D3FEND Extractor"),N=C(),k=c("p"),v=D("Extracts D3FEND techniques from blobs of text and identifies "),p=c("i"),b=D("related"),y=D(" ATT&CK Techniques. You may also want to try the "),L=c("a"),M=D("ATT&CK Extractor"),K=D(" or the "),Y=c("a"),$=D("Artifact Extractor."),X=C(),Q=c("p"),G=c("i"),g=D("Paste any text containing D3FEND techniques:"),P=C(),O=c("div"),R=c("textarea"),W=C(),z=c("div"),S=c("button"),x=D("GO"),le=C(),J=c("br"),U=C(),w=c("br"),d=C(),V.block.c(),this.h()},l(E){we(e.$$.fragment,E),t=F(E),l=f(E,"SECTION",{class:!0});var u=h(l);we(r.$$.fragment,u),i=F(u),s=f(u,"DIV",{class:!0});var I=h(s);_=f(I,"H1",{});var ee=h(_);m=q(ee,"D3FEND Extractor"),ee.forEach(o),N=F(I),k=f(I,"P",{});var H=h(k);v=q(H,"Extracts D3FEND techniques from blobs of text and identifies "),p=f(H,"I",{});var oe=h(p);b=q(oe,"related"),oe.forEach(o),y=q(H," ATT&CK Techniques. You may also want to try the "),L=f(H,"A",{href:!0});var ne=h(L);M=q(ne,"ATT&CK Extractor"),ne.forEach(o),K=q(H," or the "),Y=f(H,"A",{href:!0});var se=h(Y);$=q(se,"Artifact Extractor."),se.forEach(o),H.forEach(o),X=F(I),Q=f(I,"P",{class:!0});var ve=h(Q);G=f(ve,"I",{});var me=h(G);g=q(me,"Paste any text containing D3FEND techniques:"),me.forEach(o),ve.forEach(o),P=F(I),O=f(I,"DIV",{});var ie=h(O);R=f(ie,"TEXTAREA",{class:!0}),h(R).forEach(o),ie.forEach(o),W=F(I),z=f(I,"DIV",{});var ce=h(z);S=f(ce,"BUTTON",{class:!0});var be=h(S);x=q(be,"GO"),be.forEach(o),ce.forEach(o),le=F(I),J=f(I,"BR",{}),I.forEach(o),U=F(u),w=f(u,"BR",{}),d=F(u),V.block.l(u),u.forEach(o),this.h()},h(){T(L,"href","/tools/attack-extractor"),T(Y,"href","/tools/artifact-extractor"),T(Q,"class","text-2"),T(R,"class","svelte-wn74lb"),T(S,"class","button"),T(s,"class","card"),T(l,"class"," svelte-wn74lb")},m(E,u){Ne(e,E,u),B(E,t,u),B(E,l,u),Ne(r,l,null),a(l,i),a(l,s),a(s,_),a(_,m),a(s,N),a(s,k),a(k,v),a(k,p),a(p,b),a(k,y),a(k,L),a(L,M),a(k,K),a(k,Y),a(Y,$),a(s,X),a(s,Q),a(Q,G),a(G,g),a(s,P),a(s,O),a(O,R),Oe(R,n[1]),a(s,W),a(s,z),a(z,S),a(S,x),a(s,le),a(s,J),a(l,U),a(l,w),a(l,d),V.block.m(l,V.anchor=null),V.mount=()=>l,V.anchor=null,j=!0,te||(Z=[he(R,"input",n[12]),he(R,"keypress",n[10]),he(S,"click",n[7])],te=!0)},p(E,u){n=E,u[0]&2&&Oe(R,n[1]),V.ctx=n,u[0]&32&&A!==(A=n[5])&&De(A,V)||Qe(V,n,u)},i(E){j||(de(e.$$.fragment,E),de(r.$$.fragment,E),de(V.block),j=!0)},o(E){_e(e.$$.fragment,E),_e(r.$$.fragment,E);for(let u=0;u<3;u+=1){const I=V.blocks[u];_e(I)}j=!1},d(E){Ae(e,E),E&&o(t),E&&o(l),Ae(r),V.block.d(),V.token=null,V=null,te=!1,We(Z)}}}async function Gt({params:n,fetch:e}){n.technique;const t=await e("/api/technique/all.json"),l=await t.json();return t.status===200?{props:{techniques:l}}:{status:t.status,error:new Error(l.message)}}function It(){document.execCommand("copy")}function ze(n){let e=new Set,t=[];return n.forEach(function(l){l.hasOwnProperty("off_tech_label")&&(e.has(l.off_tech_label.value)||(e.add(l.off_tech_label.value),t.push(l)))}),t}function Ct(n,e,t){let l;rt(n,ut,g=>t(16,l=g));let{techniques:r}=e,i=new Pe(r,{index:!0,index_key:"d3f:d3fend-id"}),s,_="",m=!1,N=!0,k,v=[];function p(){t(0,s=[]),t(2,m=!1),t(3,N=!0),v=[]}k=l.url.searchParams.get("q"),console.log("Found params: "+k);let b=!1;async function y(){let g=new _t,P=await Promise.all(v);P.forEach(function(z){z.def_to_off.results.bindings.forEach(function(S){g.add_technique({techniqueID:fe(S.off_tech.value),comment:`
`+S.def_tech_label.value+`
`,color:"#9ecae1"})})});let O=`"Navigator_Layer-${P.length}-D3FEND-Techniques.json"`;const R=document.createElement("a"),W=new Blob([JSON.stringify(g.json())],{type:"application/json;charset=utf-8"});R.href=URL.createObjectURL(W),R.download=O,R.click()}async function L(g){let P="/api/technique/"+g+".json";const O=await fetch(P);if(O.status==404)return{id:g,def_to_off:[],description:{graph:[]},status:O.status};if(O.ok){const R=await O.json();return{id:g,def_to_off:R.def_to_off,description:new Pe(R.description)}}else throw new Error(_)}async function M(){p();let g=t(0,s=Array.from(new Set(ht(_,i))));if(g)return g.forEach(function(P){let O;O=L(P),O&&v.push(O)}),l.url.searchParams.set("q",JSON.stringify(g)),history.replaceState(null,"mapping",l.url),v;p(),console.debug("no matches")}let K=M();function Y(){t(5,K=M()),t(3,N=!1)}function $(){window.getSelection().removeAllRanges(),t(2,m=!1),t(4,b=!1)}function X(){t(4,b=!0);let g="mappings";const P=window.getSelection();P.removeAllRanges();let O=document.getElementById(g);const R=document.createRange();R.selectNodeContents(O),P.addRange(R),t(2,m=!0)}function Q(g){g.ctrlKey==!0&&g.keyCode==13&&Y()}ot(async()=>{k?(t(1,_=k),console.log("handlingclick"),Y()):(console.log("starting blank"),t(1,_=""))});function G(){_=this.value,t(1,_)}return n.$$set=g=>{"techniques"in g&&t(11,r=g.techniques)},[s,_,m,N,b,K,y,Y,$,X,Q,r,G]}class Mt extends tt{constructor(e){super(),lt(this,e,Ct,At,at,{techniques:11},null,[-1,-1])}}export{Mt as default,Gt as load};
