import{S as rt,i as st,s as ot,ak as we,w as Ee,a as $,k as c,q as k,x as ge,c as F,l as f,m as h,r as D,h as s,n as p,y as Te,b as R,H as a,a0 as Oe,M as _e,al as xe,f as fe,t as he,z as ke,W as et,C as nt,o as it,p as Ce,u as ne,B as ie,e as pe,g as tt,d as lt,V as $e,T as Pe}from"../../../../chunks/index-360fd992.js";import{H as ct}from"../../../../chunks/Header-3cb519d0.js";import{T as ft}from"../../../../chunks/Title-dc0f8b01.js";import{A as ht}from"../../../../chunks/Alert-3ff1d322.js";import{b as ut,S as at}from"../../../../chunks/extract-053a57d9.js";import{G as Se,g as de,f as Le,e as qe,d as Ae}from"../../../../chunks/lib-470e6689.js";import{p as dt}from"../../../../chunks/stores-422eb0ed.js";var _t={name:"D3FEND Countermeasure Coverage",domain:"enterprise-attack",description:""};class vt{constructor(e){this.layer={..._t},this.layer.techniques=new Array,this.tech_index={},e&&(this.options={...this.options,...e})}add_technique(e){this.tech_index.hasOwnProperty(e.techniqueID)?this.tech_index[e.techniqueID].comment&&this.tech_index[e.techniqueID].comment.indexOf(e.comment)==-1&&(this.tech_index[e.techniqueID].comment+=e.comment):this.tech_index[e.techniqueID]=e}json(){for(let e in this.tech_index)this.layer.techniques.push(this.tech_index[e]);return this.layer}}function Ue(i,e,t){const l=i.slice();return l[22]=e[t],l}function Ge(i,e,t){const l=i.slice();return l[26]=e[t],l}function Me(i,e,t){const l=i.slice();return l[30]=e[t],l}function pt(i){let e,t=i[29].message+"",l;return{c(){e=c("p"),l=k(t),this.h()},l(r){e=f(r,"P",{style:!0});var n=h(e);l=D(n,t),n.forEach(s),this.h()},h(){Ce(e,"color","red")},m(r,n){R(r,e,n),a(e,l)},p(r,n){n[0]&32&&t!==(t=r[29].message+"")&&ne(l,t)},i:ie,o:ie,d(r){r&&s(e)}}}function mt(i){let e,t,l,r;const n=[Et,bt],o=[];function d(_,N){return _[21].length>0?0:!_[3]&&_[21].length<1?1:-1}return~(e=d(i))&&(t=o[e]=n[e](i)),{c(){t&&t.c(),l=pe()},l(_){t&&t.l(_),l=pe()},m(_,N){~e&&o[e].m(_,N),R(_,l,N),r=!0},p(_,N){let q=e;e=d(_),e===q?~e&&o[e].p(_,N):(t&&(tt(),he(o[q],1,1,()=>{o[q]=null}),lt()),~e?(t=o[e],t?t.p(_,N):(t=o[e]=n[e](_),t.c()),fe(t,1),t.m(l.parentNode,l)):t=null)},i(_){r||(fe(t),r=!0)},o(_){he(t),r=!1},d(_){~e&&o[e].d(_),_&&s(l)}}}function bt(i){let e,t;return{c(){e=c("div"),t=k("No D3FEND techniques found in text."),this.h()},l(l){e=f(l,"DIV",{class:!0});var r=h(e);t=D(r,"No D3FEND techniques found in text."),r.forEach(s),this.h()},h(){p(e,"class","card")},m(l,r){R(l,e,r),a(e,t)},p:ie,i:ie,o:ie,d(l){l&&s(e)}}}function Et(i){let e,t,l,r,n,o,d,_,N,q,E,T,b,O,J,C,v,H,G,A,j,W,g,P,S,I,X,Q,M,le,ee,x,Y,w,u,z,B,ae,ce,y=i[0]&&Je(i);r=new ht({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),N=new at({props:{url:i[6].url}});function V(m,Z){return m[2]?kt:Tt}let L=V(i),K=L(i),se=i[21],U=[];for(let m=0;m<se.length;m+=1)U[m]=Qe(Ue(i,se,m));return{c(){e=c("div"),y&&y.c(),t=$(),l=c("div"),Ee(r.$$.fragment),n=$(),o=c("div"),d=c("div"),_=c("div"),Ee(N.$$.fragment),q=$(),E=c("div"),T=c("b"),b=c("i"),O=k("Mapping Results:"),J=$(),C=c("div"),v=c("button"),H=k("Download ATT&CK Navigator Layer"),G=$(),A=c("div"),j=c("div"),K.c(),W=$(),g=c("button"),P=k("copy"),S=$(),I=c("table"),X=c("thead"),Q=c("th"),M=k("D3FEND ID"),le=$(),ee=c("th"),x=k("D3FEND Name"),Y=$(),w=c("th"),u=k("Related ATT&CK Techniques"),z=$();for(let m=0;m<U.length;m+=1)U[m].c();this.h()},l(m){e=f(m,"DIV",{class:!0});var Z=h(e);y&&y.l(Z),Z.forEach(s),t=F(m),l=f(m,"DIV",{class:!0});var re=h(l);ge(r.$$.fragment,re),re.forEach(s),n=F(m),o=f(m,"DIV",{class:!0});var oe=h(o);d=f(oe,"DIV",{class:!0});var te=h(d);_=f(te,"DIV",{class:!0});var ue=h(_);ge(N.$$.fragment,ue),ue.forEach(s),te.forEach(s),q=F(oe),E=f(oe,"DIV",{});var me=h(E);T=f(me,"B",{});var be=h(T);b=f(be,"I",{});var Fe=h(b);O=D(Fe,"Mapping Results:"),Fe.forEach(s),be.forEach(s),me.forEach(s),J=F(oe),C=f(oe,"DIV",{class:!0});var Ve=h(C);v=f(Ve,"BUTTON",{class:!0,title:!0});var He=h(v);H=D(He,"Download ATT&CK Navigator Layer"),He.forEach(s),Ve.forEach(s),G=F(oe),A=f(oe,"DIV",{class:!0});var De=h(A);j=f(De,"DIV",{class:!0});var ye=h(j);K.l(ye),W=F(ye),g=f(ye,"BUTTON",{});var Re=h(g);P=D(Re,"copy"),Re.forEach(s),ye.forEach(s),S=F(De),I=f(De,"TABLE",{id:!0,class:!0});var Ne=h(I);X=f(Ne,"THEAD",{});var ve=h(X);Q=f(ve,"TH",{class:!0});var je=h(Q);M=D(je,"D3FEND ID"),je.forEach(s),le=F(ve),ee=f(ve,"TH",{});var Be=h(ee);x=D(Be,"D3FEND Name"),Be.forEach(s),Y=F(ve),w=f(ve,"TH",{});var Ke=h(w);u=D(Ke,"Related ATT&CK Techniques"),Ke.forEach(s),ve.forEach(s),z=F(Ne);for(let Ie=0;Ie<U.length;Ie+=1)U[Ie].l(Ne);Ne.forEach(s),De.forEach(s),oe.forEach(s),this.h()},h(){p(e,"class","card"),p(l,"class","card"),p(_,"class","text-right"),p(d,"class","stretch"),p(v,"class","small button"),p(v,"title","Load into Navigator to see related TTPs"),p(C,"class","text-right"),p(j,"class","text-right"),p(Q,"class","stretch"),p(I,"id","mappings"),p(I,"class","table-auto"),p(A,"class","results-wrap center svelte-xumjr3"),p(o,"class","card")},m(m,Z){R(m,e,Z),y&&y.m(e,null),R(m,t,Z),R(m,l,Z),Te(r,l,null),R(m,n,Z),R(m,o,Z),a(o,d),a(d,_),Te(N,_,null),a(o,q),a(o,E),a(E,T),a(T,b),a(b,O),a(o,J),a(o,C),a(C,v),a(v,H),a(o,G),a(o,A),a(A,j),K.m(j,null),a(j,W),a(j,g),a(g,P),a(A,S),a(A,I),a(I,X),a(X,Q),a(Q,M),a(X,le),a(X,ee),a(ee,x),a(X,Y),a(X,w),a(w,u),a(I,z);for(let re=0;re<U.length;re+=1)U[re].m(I,null);B=!0,ae||(ce=[_e(v,"click",i[7]),_e(g,"click",Ct)],ae=!0)},p(m,Z){m[0]?y?(y.p(m,Z),Z[0]&1&&fe(y,1)):(y=Je(m),y.c(),fe(y,1),y.m(e,null)):y&&(tt(),he(y,1,1,()=>{y=null}),lt());const re={};Z[1]&4&&(re.$$scope={dirty:Z,ctx:m}),r.$set(re);const oe={};if(Z[0]&64&&(oe.url=m[6].url),N.$set(oe),L===(L=V(m))&&K?K.p(m,Z):(K.d(1),K=L(m),K&&(K.c(),K.m(j,W))),Z[0]&48){se=m[21];let te;for(te=0;te<se.length;te+=1){const ue=Ue(m,se,te);U[te]?U[te].p(ue,Z):(U[te]=Qe(ue),U[te].c(),U[te].m(I,null))}for(;te<U.length;te+=1)U[te].d(1);U.length=se.length}},i(m){B||(fe(y),fe(r.$$.fragment,m),fe(N.$$.fragment,m),B=!0)},o(m){he(y),he(r.$$.fragment,m),he(N.$$.fragment,m),B=!1},d(m){m&&s(e),y&&y.d(),m&&s(t),m&&s(l),ke(r),m&&s(n),m&&s(o),ke(N),K.d(),$e(U,m),ae=!1,et(ce)}}}function Je(i){let e,t,l,r,n,o,d,_,N=i[0].length+"",q,E,T,b,O;l=new at({props:{url:i[6].url}});let J=i[0],C=[];for(let v=0;v<J.length;v+=1)C[v]=Ye(Me(i,J,v));return{c(){e=c("div"),t=c("div"),Ee(l.$$.fragment),r=$(),n=c("div"),o=c("b"),d=c("i"),_=k("Extracted "),q=k(N),E=k(" unique IDs:"),T=$(),b=c("dl");for(let v=0;v<C.length;v+=1)C[v].c();this.h()},l(v){e=f(v,"DIV",{class:!0});var H=h(e);t=f(H,"DIV",{class:!0});var G=h(t);ge(l.$$.fragment,G),G.forEach(s),H.forEach(s),r=F(v),n=f(v,"DIV",{class:!0});var A=h(n);o=f(A,"B",{});var j=h(o);d=f(j,"I",{});var W=h(d);_=D(W,"Extracted "),q=D(W,N),E=D(W," unique IDs:"),W.forEach(s),j.forEach(s),T=F(A),b=f(A,"DL",{class:!0});var g=h(b);for(let P=0;P<C.length;P+=1)C[P].l(g);g.forEach(s),A.forEach(s),this.h()},h(){p(t,"class","text-right"),p(e,"class","stretch"),p(b,"class","flex flex-wrap svelte-xumjr3"),p(n,"class","")},m(v,H){R(v,e,H),a(e,t),Te(l,t,null),R(v,r,H),R(v,n,H),a(n,o),a(o,d),a(d,_),a(d,q),a(d,E),a(n,T),a(n,b);for(let G=0;G<C.length;G+=1)C[G].m(b,null);O=!0},p(v,H){const G={};if(H[0]&64&&(G.url=v[6].url),l.$set(G),(!O||H[0]&1)&&N!==(N=v[0].length+"")&&ne(q,N),H[0]&1){J=v[0];let A;for(A=0;A<J.length;A+=1){const j=Me(v,J,A);C[A]?C[A].p(j,H):(C[A]=Ye(j),C[A].c(),C[A].m(b,null))}for(;A<C.length;A+=1)C[A].d(1);C.length=J.length}},i(v){O||(fe(l.$$.fragment,v),O=!0)},o(v){he(l.$$.fragment,v),O=!1},d(v){v&&s(e),ke(l),v&&s(r),v&&s(n),$e(C,v)}}}function Ye(i){let e,t,l=i[30]+"",r,n;return{c(){e=c("dd"),t=c("a"),r=k(l),this.h()},l(o){e=f(o,"DD",{});var d=h(e);t=f(d,"A",{href:!0});var _=h(t);r=D(_,l),_.forEach(s),d.forEach(s),this.h()},h(){p(t,"href",n="/technique/"+i[30])},m(o,d){R(o,e,d),a(e,t),a(t,r)},p(o,d){d[0]&1&&l!==(l=o[30]+"")&&ne(r,l),d[0]&1&&n!==(n="/technique/"+o[30])&&p(t,"href",n)},d(o){o&&s(e)}}}function gt(i){let e,t,l;return{c(){e=c("b"),t=k("Note: "),l=k(`These relationships are generated based on the digital
          artifacts specified for the offensive and defensive techniques. They
          are designed to give you ideas, they are not designed to be exact
          matches or indicate precise coverage. They can be used to better
          understand the technologies, ask better questions, and develop test
          plans for your countermeasures.`)},l(r){e=f(r,"B",{});var n=h(e);t=D(n,"Note: "),n.forEach(s),l=D(r,`These relationships are generated based on the digital
          artifacts specified for the offensive and defensive techniques. They
          are designed to give you ideas, they are not designed to be exact
          matches or indicate precise coverage. They can be used to better
          understand the technologies, ask better questions, and develop test
          plans for your countermeasures.`)},m(r,n){R(r,e,n),a(e,t),R(r,l,n)},p:ie,d(r){r&&s(e),r&&s(l)}}}function Tt(i){let e,t,l,r;return{c(){e=c("button"),t=k("select"),this.h()},l(n){e=f(n,"BUTTON",{class:!0});var o=h(e);t=D(o,"select"),o.forEach(s),this.h()},h(){p(e,"class","selector svelte-xumjr3")},m(n,o){R(n,e,o),a(e,t),l||(r=_e(e,"click",i[10]),l=!0)},p:ie,d(n){n&&s(e),l=!1,r()}}}function kt(i){let e,t,l,r;return{c(){e=c("button"),t=k("deselect"),this.h()},l(n){e=f(n,"BUTTON",{class:!0});var o=h(e);t=D(o,"deselect"),o.forEach(s),this.h()},h(){p(e,"class","selector svelte-xumjr3")},m(n,o){R(n,e,o),a(e,t),l||(r=_e(e,"click",i[9]),l=!0)},p:ie,d(n){n&&s(e),l=!1,r()}}}function Dt(i){let e,t=i[29].message+"",l;return{c(){e=c("p"),l=k(t),this.h()},l(r){e=f(r,"P",{style:!0});var n=h(e);l=D(n,t),n.forEach(s),this.h()},h(){Ce(e,"color","red")},m(r,n){R(r,e,n),a(e,l)},p(r,n){n[0]&32&&t!==(t=r[29].message+"")&&ne(l,t)},d(r){r&&s(e)}}}function yt(i){let e;function t(n,o){return n[25].description.graph[0]?qt:Nt}let l=t(i),r=l(i);return{c(){r.c(),e=pe()},l(n){r.l(n),e=pe()},m(n,o){r.m(n,o),R(n,e,o)},p(n,o){l===(l=t(n))&&r?r.p(n,o):(r.d(1),r=l(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){r.d(n),n&&s(e)}}}function Nt(i){let e,t,l=i[25].id+"",r,n,o,d,_,N,q;return{c(){e=c("td"),t=c("a"),r=k(l),o=$(),d=c("td"),_=k("not found in D3FEND graph"),N=$(),q=c("td"),this.h()},l(E){e=f(E,"TD",{class:!0});var T=h(e);t=f(T,"A",{style:!0,href:!0});var b=h(t);r=D(b,l),b.forEach(s),T.forEach(s),o=F(E),d=f(E,"TD",{});var O=h(d);_=D(O,"not found in D3FEND graph"),O.forEach(s),N=F(E),q=f(E,"TD",{}),h(q).forEach(s),this.h()},h(){Ce(t,"color","red"),p(t,"href",n=Le(i[25].id)),p(e,"class","text-center")},m(E,T){R(E,e,T),a(e,t),a(t,r),R(E,o,T),R(E,d,T),a(d,_),R(E,N,T),R(E,q,T)},p(E,T){T[0]&32&&l!==(l=E[25].id+"")&&ne(r,l),T[0]&32&&n!==(n=Le(E[25].id))&&p(t,"href",n)},d(E){E&&s(e),E&&s(o),E&&s(d),E&&s(N),E&&s(q)}}}function qt(i){let e,t,l=i[25].description.graph[0]["d3f:d3fend-id"]+"",r,n,o,d,_=i[25].description.graph[0]["rdfs:label"]+"",N,q,E,T,b,O,J,C,v,H,G,A,j,W,g,P,S,I,X,Q,M,le,ee,x=Ze(i[25].def_to_off.results.bindings),Y=[];for(let u=0;u<x.length;u+=1)Y[u]=Xe(Ge(i,x,u));let w=null;return x.length||(w=ze()),{c(){e=c("th"),t=c("a"),r=k(l),o=$(),d=c("td"),N=k(_),q=$(),E=c("td"),T=c("table"),b=c("thead"),O=c("th"),J=k("defensive verb"),C=$(),v=c("th"),H=k("defensive artifact"),G=$(),A=c("th"),j=k("ATT&CK Technique"),W=$(),g=c("th"),P=k("offensive verb"),S=$(),I=c("th"),X=k("offensive artifact"),Q=$(),M=c("th"),le=k("ATT&CK ID"),ee=$();for(let u=0;u<Y.length;u+=1)Y[u].c();w&&w.c(),this.h()},l(u){e=f(u,"TH",{class:!0,scope:!0});var z=h(e);t=f(z,"A",{href:!0});var B=h(t);r=D(B,l),B.forEach(s),z.forEach(s),o=F(u),d=f(u,"TD",{});var ae=h(d);N=D(ae,_),ae.forEach(s),q=F(u),E=f(u,"TD",{});var ce=h(E);T=f(ce,"TABLE",{class:!0});var y=h(T);b=f(y,"THEAD",{class:!0});var V=h(b);O=f(V,"TH",{scope:!0});var L=h(O);J=D(L,"defensive verb"),L.forEach(s),C=F(V),v=f(V,"TH",{scope:!0});var K=h(v);H=D(K,"defensive artifact"),K.forEach(s),G=F(V),A=f(V,"TH",{scope:!0});var se=h(A);j=D(se,"ATT&CK Technique"),se.forEach(s),W=F(V),g=f(V,"TH",{scope:!0});var U=h(g);P=D(U,"offensive verb"),U.forEach(s),S=F(V),I=f(V,"TH",{scope:!0});var m=h(I);X=D(m,"offensive artifact"),m.forEach(s),Q=F(V),M=f(V,"TH",{scope:!0});var Z=h(M);le=D(Z,"ATT&CK ID"),Z.forEach(s),V.forEach(s),ee=F(y);for(let re=0;re<Y.length;re+=1)Y[re].l(y);w&&w.l(y),y.forEach(s),ce.forEach(s),this.h()},h(){p(t,"href",n="/technique/"+i[25].description.graph[0]["@id"]),p(e,"class","text-center"),p(e,"scope","row"),p(O,"scope","col"),p(v,"scope","col"),p(A,"scope","col"),p(g,"scope","col"),p(I,"scope","col"),p(M,"scope","col"),p(b,"class","svelte-xumjr3"),Pe(b,"hide",i[4]),p(T,"class","table-auto w100 svelte-xumjr3")},m(u,z){R(u,e,z),a(e,t),a(t,r),R(u,o,z),R(u,d,z),a(d,N),R(u,q,z),R(u,E,z),a(E,T),a(T,b),a(b,O),a(O,J),a(b,C),a(b,v),a(v,H),a(b,G),a(b,A),a(A,j),a(b,W),a(b,g),a(g,P),a(b,S),a(b,I),a(I,X),a(b,Q),a(b,M),a(M,le),a(T,ee);for(let B=0;B<Y.length;B+=1)Y[B].m(T,null);w&&w.m(T,null)},p(u,z){if(z[0]&32&&l!==(l=u[25].description.graph[0]["d3f:d3fend-id"]+"")&&ne(r,l),z[0]&32&&n!==(n="/technique/"+u[25].description.graph[0]["@id"])&&p(t,"href",n),z[0]&32&&_!==(_=u[25].description.graph[0]["rdfs:label"]+"")&&ne(N,_),z[0]&16&&Pe(b,"hide",u[4]),z[0]&32){x=Ze(u[25].def_to_off.results.bindings);let B;for(B=0;B<x.length;B+=1){const ae=Ge(u,x,B);Y[B]?Y[B].p(ae,z):(Y[B]=Xe(ae),Y[B].c(),Y[B].m(T,null))}for(;B<Y.length;B+=1)Y[B].d(1);Y.length=x.length,!x.length&&w?w.p(u,z):x.length?w&&(w.d(1),w=null):(w=ze(),w.c(),w.m(T,null))}},d(u){u&&s(e),u&&s(o),u&&s(d),u&&s(q),u&&s(E),$e(Y,u),w&&w.d()}}}function ze(i){let e,t,l,r,n;return{c(){e=c("td"),t=k("no defensive relations "),l=c("a"),r=k("yet"),n=$(),this.h()},l(o){e=f(o,"TD",{colspan:!0});var d=h(e);t=D(d,"no defensive relations "),l=f(d,"A",{href:!0});var _=h(l);r=D(_,"yet"),_.forEach(s),n=F(d),d.forEach(s),this.h()},h(){p(l,"href","/contribute"),p(e,"colspan","5")},m(o,d){R(o,e,d),a(e,t),a(e,l),a(l,r),a(e,n)},p:ie,d(o){o&&s(e)}}}function We(i){let e,t,l=i[26].def_artifact_rel_label.value+"",r,n,o,d,_=i[26].def_artifact_label.value+"",N,q,E,T,b,O=i[26].off_tech_label.value+"",J,C,v,H,G=i[26].off_artifact_rel_label.value+"",A,j,W,g,P=i[26].off_artifact_label.value+"",S,I,X,Q,M,le=de(i[26].off_tech.value)+"",ee,x,Y;return{c(){e=c("tr"),t=c("td"),r=k(l),n=$(),o=c("td"),d=c("a"),N=k(_),E=$(),T=c("td"),b=c("a"),J=k(O),v=$(),H=c("td"),A=k(G),j=$(),W=c("td"),g=c("a"),S=k(P),X=$(),Q=c("td"),M=c("a"),ee=k(le),Y=$(),this.h()},l(w){e=f(w,"TR",{});var u=h(e);t=f(u,"TD",{});var z=h(t);r=D(z,l),z.forEach(s),n=F(u),o=f(u,"TD",{});var B=h(o);d=f(B,"A",{href:!0});var ae=h(d);N=D(ae,_),ae.forEach(s),B.forEach(s),E=F(u),T=f(u,"TD",{});var ce=h(T);b=f(ce,"A",{href:!0});var y=h(b);J=D(y,O),y.forEach(s),ce.forEach(s),v=F(u),H=f(u,"TD",{});var V=h(H);A=D(V,G),V.forEach(s),j=F(u),W=f(u,"TD",{});var L=h(W);g=f(L,"A",{href:!0});var K=h(g);S=D(K,P),K.forEach(s),L.forEach(s),X=F(u),Q=f(u,"TD",{});var se=h(Q);M=f(se,"A",{href:!0});var U=h(M);ee=D(U,le),U.forEach(s),se.forEach(s),Y=F(u),u.forEach(s),this.h()},h(){p(d,"href",q="/dao/artifact/"+qe(i[26].def_artifact.value)),p(b,"href",C=Ae(de(i[26].off_tech.value))),p(g,"href",I="/dao/artifact/"+qe(i[26].off_artifact.value)),p(M,"href",x=Ae(de(i[26].off_tech.value)))},m(w,u){R(w,e,u),a(e,t),a(t,r),a(e,n),a(e,o),a(o,d),a(d,N),a(e,E),a(e,T),a(T,b),a(b,J),a(e,v),a(e,H),a(H,A),a(e,j),a(e,W),a(W,g),a(g,S),a(e,X),a(e,Q),a(Q,M),a(M,ee),a(e,Y)},p(w,u){u[0]&32&&l!==(l=w[26].def_artifact_rel_label.value+"")&&ne(r,l),u[0]&32&&_!==(_=w[26].def_artifact_label.value+"")&&ne(N,_),u[0]&32&&q!==(q="/dao/artifact/"+qe(w[26].def_artifact.value))&&p(d,"href",q),u[0]&32&&O!==(O=w[26].off_tech_label.value+"")&&ne(J,O),u[0]&32&&C!==(C=Ae(de(w[26].off_tech.value)))&&p(b,"href",C),u[0]&32&&G!==(G=w[26].off_artifact_rel_label.value+"")&&ne(A,G),u[0]&32&&P!==(P=w[26].off_artifact_label.value+"")&&ne(S,P),u[0]&32&&I!==(I="/dao/artifact/"+qe(w[26].off_artifact.value))&&p(g,"href",I),u[0]&32&&le!==(le=de(w[26].off_tech.value)+"")&&ne(ee,le),u[0]&32&&x!==(x=Ae(de(w[26].off_tech.value)))&&p(M,"href",x)},d(w){w&&s(e)}}}function Xe(i){let e,t=i[26].def_tech&&We(i);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,r){t&&t.m(l,r),R(l,e,r)},p(l,r){l[26].def_tech?t?t.p(l,r):(t=We(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&s(e)}}}function At(i){let e;return{c(){e=k("loading...")},l(t){e=D(t,"loading...")},m(t,l){R(t,e,l)},p:ie,d(t){t&&s(e)}}}function Qe(i){let e,t,l,r={ctx:i,current:null,token:null,hasCatch:!0,pending:At,then:yt,catch:Dt,value:25,error:29};return we(t=i[22],r),{c(){e=c("tr"),r.block.c(),l=$()},l(n){e=f(n,"TR",{});var o=h(e);r.block.l(o),l=F(o),o.forEach(s)},m(n,o){R(n,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=l,a(e,l)},p(n,o){i=n,r.ctx=i,o[0]&32&&t!==(t=i[22])&&we(t,r)||xe(r,i,o)},d(n){n&&s(e),r.block.d(),r.token=null,r=null}}}function wt(i){let e;return{c(){e=k("enter text and click go")},l(t){e=D(t,"enter text and click go")},m(t,l){R(t,e,l)},p:ie,i:ie,o:ie,d(t){t&&s(e)}}}function It(i){let e,t,l,r,n,o,d,_,N,q,E,T,b,O,J,C,v,H,G,A,j,W,g,P,S,I,X,Q,M,le,ee,x,Y,w,u,z,B,ae,ce;e=new ft({props:{title:"D3FEND Extractor | Tools | "}}),r=new ct({props:{header:"D3FEND Extractor"}});let y={ctx:i,current:null,token:null,hasCatch:!0,pending:wt,then:mt,catch:pt,value:21,error:29,blocks:[,,,]};return we(z=i[5],y),{c(){Ee(e.$$.fragment),t=$(),l=c("section"),Ee(r.$$.fragment),n=$(),o=c("div"),d=c("h1"),_=k("D3FEND Extractor"),N=$(),q=c("p"),E=k("Extracts D3FEND techniques from blobs of text and identifies "),T=c("i"),b=k("related"),O=k(`
      ATT&CK Techniques. You may also want to try the
      `),J=c("a"),C=k("ATT&CK Extractor"),v=k(`
      or the `),H=c("a"),G=k("Artifact Extractor."),A=$(),j=c("p"),W=c("i"),g=k("Paste any text containing D3FEND techniques:"),P=$(),S=c("div"),I=c("textarea"),X=$(),Q=c("div"),M=c("button"),le=k("GO"),ee=$(),x=c("br"),Y=$(),w=c("br"),u=$(),y.block.c(),this.h()},l(V){ge(e.$$.fragment,V),t=F(V),l=f(V,"SECTION",{class:!0});var L=h(l);ge(r.$$.fragment,L),n=F(L),o=f(L,"DIV",{class:!0});var K=h(o);d=f(K,"H1",{});var se=h(d);_=D(se,"D3FEND Extractor"),se.forEach(s),N=F(K),q=f(K,"P",{});var U=h(q);E=D(U,"Extracts D3FEND techniques from blobs of text and identifies "),T=f(U,"I",{});var m=h(T);b=D(m,"related"),m.forEach(s),O=D(U,`
      ATT&CK Techniques. You may also want to try the
      `),J=f(U,"A",{href:!0});var Z=h(J);C=D(Z,"ATT&CK Extractor"),Z.forEach(s),v=D(U,`
      or the `),H=f(U,"A",{href:!0});var re=h(H);G=D(re,"Artifact Extractor."),re.forEach(s),U.forEach(s),A=F(K),j=f(K,"P",{class:!0});var oe=h(j);W=f(oe,"I",{});var te=h(W);g=D(te,"Paste any text containing D3FEND techniques:"),te.forEach(s),oe.forEach(s),P=F(K),S=f(K,"DIV",{});var ue=h(S);I=f(ue,"TEXTAREA",{class:!0}),h(I).forEach(s),ue.forEach(s),X=F(K),Q=f(K,"DIV",{});var me=h(Q);M=f(me,"BUTTON",{class:!0});var be=h(M);le=D(be,"GO"),be.forEach(s),me.forEach(s),ee=F(K),x=f(K,"BR",{}),K.forEach(s),Y=F(L),w=f(L,"BR",{}),u=F(L),y.block.l(L),L.forEach(s),this.h()},h(){p(J,"href","/tools/attack-extractor"),p(H,"href","/tools/artifact-extractor"),p(j,"class","text-2"),p(I,"class","svelte-xumjr3"),p(M,"class","button"),p(o,"class","card"),p(l,"class"," svelte-xumjr3")},m(V,L){Te(e,V,L),R(V,t,L),R(V,l,L),Te(r,l,null),a(l,n),a(l,o),a(o,d),a(d,_),a(o,N),a(o,q),a(q,E),a(q,T),a(T,b),a(q,O),a(q,J),a(J,C),a(q,v),a(q,H),a(H,G),a(o,A),a(o,j),a(j,W),a(W,g),a(o,P),a(o,S),a(S,I),Oe(I,i[1]),a(o,X),a(o,Q),a(Q,M),a(M,le),a(o,ee),a(o,x),a(l,Y),a(l,w),a(l,u),y.block.m(l,y.anchor=null),y.mount=()=>l,y.anchor=null,B=!0,ae||(ce=[_e(I,"input",i[13]),_e(I,"keypress",i[11]),_e(M,"click",i[8])],ae=!0)},p(V,L){i=V,L[0]&2&&Oe(I,i[1]),y.ctx=i,L[0]&32&&z!==(z=i[5])&&we(z,y)||xe(y,i,L)},i(V){B||(fe(e.$$.fragment,V),fe(r.$$.fragment,V),fe(y.block),B=!0)},o(V){he(e.$$.fragment,V),he(r.$$.fragment,V);for(let L=0;L<3;L+=1){const K=y.blocks[L];he(K)}B=!1},d(V){ke(e,V),V&&s(t),V&&s(l),ke(r),y.block.d(),y.token=null,y=null,ae=!1,et(ce)}}}function Ct(){document.execCommand("copy")}function Ze(i){let e=new Set,t=[];return i.forEach(function(l){l.hasOwnProperty("off_tech_label")&&(e.has(l.off_tech_label.value)||(e.add(l.off_tech_label.value),t.push(l)))}),t}function $t(i,e,t){let l;nt(i,dt,g=>t(6,l=g));let{data:r}=e,n=new Se(r.techniques,{index:!0,index_key:"d3f:d3fend-id"}),o,d="",_=!1,N=!0,q,E=[];function T(){t(0,o=[]),t(2,_=!1),t(3,N=!0),E=[]}q=l.url.searchParams.get("q"),console.log("Found params: "+q);let b=!1;async function O(){let g=new vt,P=await Promise.all(E);P.forEach(function(Q){Q.def_to_off.results.bindings.forEach(function(M){g.add_technique({techniqueID:de(M.off_tech.value),comment:`
`+M.def_tech_label.value+`
`,color:"#9ecae1"})})});let S=`"Navigator_Layer-${P.length}-D3FEND-Techniques.json"`;const I=document.createElement("a"),X=new Blob([JSON.stringify(g.json())],{type:"application/json;charset=utf-8"});I.href=URL.createObjectURL(X),I.download=S,I.click()}async function J(g){let P="/api/technique/"+g+".json";const S=await fetch(P);if(S.status==404)return{id:g,def_to_off:[],description:{graph:[]},status:S.status};if(S.ok){const I=await S.json();return{id:g,def_to_off:I.def_to_off,description:new Se(I.description)}}else throw new Error(d)}async function C(){T();let g=t(0,o=Array.from(new Set(ut(d,n))));if(g)return g.forEach(function(P){let S;S=J(P),S&&E.push(S)}),l.url.searchParams.set("q",JSON.stringify(g)),history.replaceState(null,"mapping",l.url),E;T(),console.debug("no matches")}let v=C();function H(){t(5,v=C()),t(3,N=!1)}function G(){window.getSelection().removeAllRanges(),t(2,_=!1),t(4,b=!1)}function A(){t(4,b=!0);let g="mappings";const P=window.getSelection();P.removeAllRanges();let S=document.getElementById(g);const I=document.createRange();I.selectNodeContents(S),P.addRange(I),t(2,_=!0)}function j(g){g.ctrlKey==!0&&g.keyCode==13&&H()}it(async()=>{q?(t(1,d=q),console.log("handlingclick"),H()):(console.log("starting blank"),t(1,d=""))});function W(){d=this.value,t(1,d)}return i.$$set=g=>{"data"in g&&t(12,r=g.data)},[o,d,_,N,b,v,l,O,H,G,A,j,r,W]}class Ot extends rt{constructor(e){super(),st(this,e,$t,It,ot,{data:12},null,[-1,-1])}}export{Ot as default};
