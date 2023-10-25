import{e as Me}from"../chunks/index.5e2a9a64.js";import{s as Ve,a as L,f as p,c as M,g as v,h as y,F as G,d as i,j as $,i as I,x as f,ab as me,C as se,D as Se,z as Re,o as xe,l as B,m as O,k as pe,n as U,y as Q,e as oe,G as ve,E as be}from"../chunks/scheduler.50831561.js";import{h as de,u as He}from"../chunks/await_block.3cda980a.js";import{e as ie}from"../chunks/each.8d18d1a2.js";import{S as Be,i as Oe,b as ce,d as fe,m as ue,a as W,t as Z,e as he,g as je,c as qe}from"../chunks/index.24431cc3.js";import{a as Pe,S as Le}from"../chunks/extract.90fc9ad0.js";import{G as ge,d as _e,l as ke,k as ne}from"../chunks/lib.4d124e32.js";import{T as Ke}from"../chunks/Title.28d88b77.js";import{H as Fe}from"../chunks/Header.66ace148.js";import{A as ze}from"../chunks/Alert.d9b74077.js";import{p as Ue}from"../chunks/stores.c574813b.js";async function Ge({fetch:n}){const e=await n("/api/offensive-technique/all.json"),t=await e.json();if(e.status!==200)throw Me(500,data.message);return{techniques:t}}const Et=Object.freeze(Object.defineProperty({__proto__:null,load:Ge},Symbol.toStringTag,{value:"Module"}));function Ee(n,e,t){const l=n.slice();return l[21]=e[t],l}function Te(n,e,t){const l=n.slice();return l[25]=e[t],l}function De(n,e,t){const l=n.slice();return l[29]=e[t],l}function Je(n){let e,t,l=n[28].message+"",a;return{c(){e=p("p"),t=B("error with promise: "),a=B(l),this.h()},l(s){e=v(s,"P",{style:!0});var r=y(e);t=O(r,"error with promise: "),a=O(r,l),r.forEach(i),this.h()},h(){pe(e,"color","red")},m(s,r){I(s,e,r),f(e,t),f(e,a)},p(s,r){r[0]&32&&l!==(l=s[28].message+"")&&U(a,l)},i:Q,o:Q,d(s){s&&i(e)}}}function Xe(n){let e,t,l,a;const s=[Qe,Ye],r=[];function u(h,m){return h[20].length>0?0:!h[3]&&h[20].length<1?1:-1}return~(e=u(n))&&(t=r[e]=s[e](n)),{c(){t&&t.c(),l=oe()},l(h){t&&t.l(h),l=oe()},m(h,m){~e&&r[e].m(h,m),I(h,l,m),a=!0},p(h,m){let A=e;e=u(h),e===A?~e&&r[e].p(h,m):(t&&(je(),Z(r[A],1,1,()=>{r[A]=null}),qe()),~e?(t=r[e],t?t.p(h,m):(t=r[e]=s[e](h),t.c()),W(t,1),t.m(l.parentNode,l)):t=null)},i(h){a||(W(t),a=!0)},o(h){Z(t),a=!1},d(h){h&&i(l),~e&&r[e].d(h)}}}function Ye(n){let e,t="No ATT&CK techniques found in text.";return{c(){e=p("div"),e.textContent=t,this.h()},l(l){e=v(l,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1f3fsck"&&(e.textContent=t),this.h()},h(){$(e,"class","card")},m(l,a){I(l,e,a)},p:Q,i:Q,o:Q,d(l){l&&i(e)}}}function Qe(n){let e,t,l,a,s,r,u,h,m,A,k,T="<b><i>Mapping Results:</i></b>",D,S,q,g,c,E="copy",_,d,C,w='<th class="stretch">ATT&amp;CK ID</th> <th>ATT&amp;CK Name</th> <th>Related D3FEND Techniques</th>',V,H,x,J,j=n[0]&&Ce(n);a=new ze({props:{$$slots:{default:[We]},$$scope:{ctx:n}}}),m=new Le({props:{url:n[6].url}});function X(o,N){return o[2]?et:Ze}let Y=X(n),P=Y(n),R=ie(n[20]),b=[];for(let o=0;o<R.length;o+=1)b[o]=Ie(Ee(n,R,o));return{c(){e=p("div"),j&&j.c(),t=L(),l=p("div"),ce(a.$$.fragment),s=L(),r=p("div"),u=p("div"),h=p("div"),ce(m.$$.fragment),A=L(),k=p("div"),k.innerHTML=T,D=L(),S=p("div"),q=p("div"),P.c(),g=L(),c=p("button"),c.textContent=E,_=L(),d=p("table"),C=p("thead"),C.innerHTML=w,V=L();for(let o=0;o<b.length;o+=1)b[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0});var N=y(e);j&&j.l(N),N.forEach(i),t=M(o),l=v(o,"DIV",{class:!0});var F=y(l);fe(a.$$.fragment,F),F.forEach(i),s=M(o),r=v(o,"DIV",{class:!0});var z=y(r);u=v(z,"DIV",{class:!0});var K=y(u);h=v(K,"DIV",{class:!0});var ee=y(h);fe(m.$$.fragment,ee),ee.forEach(i),K.forEach(i),A=M(z),k=v(z,"DIV",{"data-svelte-h":!0}),G(k)!=="svelte-1hnfu3y"&&(k.innerHTML=T),D=M(z),S=v(z,"DIV",{class:!0});var te=y(S);q=v(te,"DIV",{class:!0});var le=y(q);P.l(le),g=M(le),c=v(le,"BUTTON",{"data-svelte-h":!0}),G(c)!=="svelte-1gemhfw"&&(c.textContent=E),le.forEach(i),_=M(te),d=v(te,"TABLE",{id:!0,class:!0});var ae=y(d);C=v(ae,"THEAD",{"data-svelte-h":!0}),G(C)!=="svelte-17r3wjn"&&(C.innerHTML=w),V=M(ae);for(let re=0;re<b.length;re+=1)b[re].l(ae);ae.forEach(i),te.forEach(i),z.forEach(i),this.h()},h(){$(e,"class","card"),$(l,"class","card"),$(h,"class","text-right"),$(u,"class","stretch"),$(q,"class","text-right"),$(d,"id","mappings"),$(d,"class","table-auto"),$(S,"class","results-wrap center svelte-xumjr3"),$(r,"class","card")},m(o,N){I(o,e,N),j&&j.m(e,null),I(o,t,N),I(o,l,N),ue(a,l,null),I(o,s,N),I(o,r,N),f(r,u),f(u,h),ue(m,h,null),f(r,A),f(r,k),f(r,D),f(r,S),f(S,q),P.m(q,null),f(q,g),f(q,c),f(S,_),f(S,d),f(d,C),f(d,V);for(let F=0;F<b.length;F+=1)b[F]&&b[F].m(d,null);H=!0,x||(J=se(c,"click",it),x=!0)},p(o,N){o[0]?j?(j.p(o,N),N[0]&1&&W(j,1)):(j=Ce(o),j.c(),W(j,1),j.m(e,null)):j&&(je(),Z(j,1,1,()=>{j=null}),qe());const F={};N[1]&2&&(F.$$scope={dirty:N,ctx:o}),a.$set(F);const z={};if(N[0]&64&&(z.url=o[6].url),m.$set(z),Y===(Y=X(o))&&P?P.p(o,N):(P.d(1),P=Y(o),P&&(P.c(),P.m(q,g))),N[0]&48){R=ie(o[20]);let K;for(K=0;K<R.length;K+=1){const ee=Ee(o,R,K);b[K]?b[K].p(ee,N):(b[K]=Ie(ee),b[K].c(),b[K].m(d,null))}for(;K<b.length;K+=1)b[K].d(1);b.length=R.length}},i(o){H||(W(j),W(a.$$.fragment,o),W(m.$$.fragment,o),H=!0)},o(o){Z(j),Z(a.$$.fragment,o),Z(m.$$.fragment,o),H=!1},d(o){o&&(i(e),i(t),i(l),i(s),i(r)),j&&j.d(),he(a),he(m),P.d(),ve(b,o),x=!1,J()}}}function Ce(n){let e,t,l,a,s,r,u,h,m=n[0].length+"",A,k,T,D,S;l=new Le({props:{url:n[6].url}});let q=ie(n[0]),g=[];for(let c=0;c<q.length;c+=1)g[c]=we(De(n,q,c));return{c(){e=p("div"),t=p("div"),ce(l.$$.fragment),a=L(),s=p("div"),r=p("b"),u=p("i"),h=B("Extracted "),A=B(m),k=B(" unique IDs:"),T=L(),D=p("dl");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=v(c,"DIV",{class:!0});var E=y(e);t=v(E,"DIV",{class:!0});var _=y(t);fe(l.$$.fragment,_),_.forEach(i),E.forEach(i),a=M(c),s=v(c,"DIV",{class:!0});var d=y(s);r=v(d,"B",{});var C=y(r);u=v(C,"I",{});var w=y(u);h=O(w,"Extracted "),A=O(w,m),k=O(w," unique IDs:"),w.forEach(i),C.forEach(i),T=M(d),D=v(d,"DL",{class:!0});var V=y(D);for(let H=0;H<g.length;H+=1)g[H].l(V);V.forEach(i),d.forEach(i),this.h()},h(){$(t,"class","text-right"),$(e,"class","stretch"),$(D,"class","flex flex-wrap svelte-xumjr3"),$(s,"class","")},m(c,E){I(c,e,E),f(e,t),ue(l,t,null),I(c,a,E),I(c,s,E),f(s,r),f(r,u),f(u,h),f(u,A),f(u,k),f(s,T),f(s,D);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(D,null);S=!0},p(c,E){const _={};if(E[0]&64&&(_.url=c[6].url),l.$set(_),(!S||E[0]&1)&&m!==(m=c[0].length+"")&&U(A,m),E[0]&1){q=ie(c[0]);let d;for(d=0;d<q.length;d+=1){const C=De(c,q,d);g[d]?g[d].p(C,E):(g[d]=we(C),g[d].c(),g[d].m(D,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=q.length}},i(c){S||(W(l.$$.fragment,c),S=!0)},o(c){Z(l.$$.fragment,c),S=!1},d(c){c&&(i(e),i(a),i(s)),he(l),ve(g,c)}}}function we(n){let e,t,l=n[29]+"",a,s;return{c(){e=p("dd"),t=p("a"),a=B(l),this.h()},l(r){e=v(r,"DD",{});var u=y(e);t=v(u,"A",{href:!0});var h=y(t);a=O(h,l),h.forEach(i),u.forEach(i),this.h()},h(){$(t,"href",s=_e(n[29]))},m(r,u){I(r,e,u),f(e,t),f(t,a)},p(r,u){u[0]&1&&l!==(l=r[29]+"")&&U(a,l),u[0]&1&&s!==(s=_e(r[29]))&&$(t,"href",s)},d(r){r&&i(e)}}}function We(n){let e,t="Note: ",l;return{c(){e=p("b"),e.textContent=t,l=B(`These relationships are designed to give you ideas, they
          are not designed to be exact matches or indicate coverage. They can be
          used to better understand the technologies, ask better questions, and
          develop test plans for your countermeasures.`)},l(a){e=v(a,"B",{"data-svelte-h":!0}),G(e)!=="svelte-gwu32y"&&(e.textContent=t),l=O(a,`These relationships are designed to give you ideas, they
          are not designed to be exact matches or indicate coverage. They can be
          used to better understand the technologies, ask better questions, and
          develop test plans for your countermeasures.`)},m(a,s){I(a,e,s),I(a,l,s)},p:Q,d(a){a&&(i(e),i(l))}}}function Ze(n){let e,t="select",l,a;return{c(){e=p("button"),e.textContent=t,this.h()},l(s){e=v(s,"BUTTON",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-3feg34"&&(e.textContent=t),this.h()},h(){$(e,"class","selector svelte-xumjr3")},m(s,r){I(s,e,r),l||(a=se(e,"click",n[9]),l=!0)},p:Q,d(s){s&&i(e),l=!1,a()}}}function et(n){let e,t="deselect",l,a;return{c(){e=p("button"),e.textContent=t,this.h()},l(s){e=v(s,"BUTTON",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-iey0zo"&&(e.textContent=t),this.h()},h(){$(e,"class","selector svelte-xumjr3")},m(s,r){I(s,e,r),l||(a=se(e,"click",n[8]),l=!0)},p:Q,d(s){s&&i(e),l=!1,a()}}}function tt(n){let e,t,l=n[28].message+"",a,s,r=console.log(n[28])+"",u;return{c(){e=p("p"),t=B("error with row: "),a=B(l),s=L(),u=B(r),this.h()},l(h){e=v(h,"P",{style:!0});var m=y(e);t=O(m,"error with row: "),a=O(m,l),m.forEach(i),s=M(h),u=O(h,r),this.h()},h(){pe(e,"color","red")},m(h,m){I(h,e,m),f(e,t),f(e,a),I(h,s,m),I(h,u,m)},p(h,m){m[0]&32&&l!==(l=h[28].message+"")&&U(a,l),m[0]&32&&r!==(r=console.log(h[28])+"")&&U(u,r)},d(h){h&&(i(e),i(s),i(u))}}}function lt(n){let e;function t(s,r){return s[24].description.graph[0]?rt:at}let l=t(n),a=l(n);return{c(){a.c(),e=oe()},l(s){a.l(s),e=oe()},m(s,r){a.m(s,r),I(s,e,r)},p(s,r){l===(l=t(s))&&a?a.p(s,r):(a.d(1),a=l(s),a&&(a.c(),a.m(e.parentNode,e)))},d(s){s&&i(e),a.d(s)}}}function at(n){let e,t,l=n[24].id+"",a,s,r,u,h="not found in D3FEND graph",m,A;return{c(){e=p("td"),t=p("a"),a=B(l),r=L(),u=p("td"),u.textContent=h,m=L(),A=p("td"),this.h()},l(k){e=v(k,"TD",{class:!0});var T=y(e);t=v(T,"A",{style:!0,href:!0});var D=y(t);a=O(D,l),D.forEach(i),T.forEach(i),r=M(k),u=v(k,"TD",{"data-svelte-h":!0}),G(u)!=="svelte-mgiypo"&&(u.textContent=h),m=M(k),A=v(k,"TD",{}),y(A).forEach(i),this.h()},h(){pe(t,"color","red"),$(t,"href",s=ke(n[24].id)),$(e,"class","text-center")},m(k,T){I(k,e,T),f(e,t),f(t,a),I(k,r,T),I(k,u,T),I(k,m,T),I(k,A,T)},p(k,T){T[0]&32&&l!==(l=k[24].id+"")&&U(a,l),T[0]&32&&s!==(s=ke(k[24].id))&&$(t,"href",s)},d(k){k&&(i(e),i(r),i(u),i(m),i(A))}}}function rt(n){let e,t,l=n[24].description.graph[0]["d3f:attack-id"]+"",a,s,r,u,h=n[24].description.graph[0]["rdfs:label"]+"",m,A,k,T,D,S='<th scope="col">off rel</th> <th scope="col">off artifact</th> <th scope="col">D3FEND Tactic</th> <th scope="col">D3FEND Technique</th> <th scope="col">def rel</th> <th scope="col">def artifact</th>',q,g=ie(Ne(n[24].off_to_def.results.bindings)),c=[];for(let _=0;_<g.length;_+=1)c[_]=$e(Te(n,g,_));let E=null;return g.length||(E=ye()),{c(){e=p("th"),t=p("a"),a=B(l),r=L(),u=p("td"),m=B(h),A=L(),k=p("td"),T=p("table"),D=p("thead"),D.innerHTML=S,q=L();for(let _=0;_<c.length;_+=1)c[_].c();E&&E.c(),this.h()},l(_){e=v(_,"TH",{class:!0,scope:!0});var d=y(e);t=v(d,"A",{href:!0});var C=y(t);a=O(C,l),C.forEach(i),d.forEach(i),r=M(_),u=v(_,"TD",{});var w=y(u);m=O(w,h),w.forEach(i),A=M(_),k=v(_,"TD",{});var V=y(k);T=v(V,"TABLE",{class:!0});var H=y(T);D=v(H,"THEAD",{class:!0,"data-svelte-h":!0}),G(D)!=="svelte-hv82y0"&&(D.innerHTML=S),q=M(H);for(let x=0;x<c.length;x+=1)c[x].l(H);E&&E.l(H),H.forEach(i),V.forEach(i),this.h()},h(){$(t,"href",s=_e(n[24].id)),$(e,"class","text-center"),$(e,"scope","row"),$(D,"class","svelte-xumjr3"),be(D,"hide",n[4]),$(T,"class","table-auto w100 svelte-xumjr3")},m(_,d){I(_,e,d),f(e,t),f(t,a),I(_,r,d),I(_,u,d),f(u,m),I(_,A,d),I(_,k,d),f(k,T),f(T,D),f(T,q);for(let C=0;C<c.length;C+=1)c[C]&&c[C].m(T,null);E&&E.m(T,null)},p(_,d){if(d[0]&32&&l!==(l=_[24].description.graph[0]["d3f:attack-id"]+"")&&U(a,l),d[0]&32&&s!==(s=_e(_[24].id))&&$(t,"href",s),d[0]&32&&h!==(h=_[24].description.graph[0]["rdfs:label"]+"")&&U(m,h),d[0]&16&&be(D,"hide",_[4]),d[0]&32){g=ie(Ne(_[24].off_to_def.results.bindings));let C;for(C=0;C<g.length;C+=1){const w=Te(_,g,C);c[C]?c[C].p(w,d):(c[C]=$e(w),c[C].c(),c[C].m(T,null))}for(;C<c.length;C+=1)c[C].d(1);c.length=g.length,!g.length&&E?E.p(_,d):g.length?E&&(E.d(1),E=null):(E=ye(),E.c(),E.m(T,null))}},d(_){_&&(i(e),i(r),i(u),i(A),i(k)),ve(c,_),E&&E.d()}}}function ye(n){let e,t='no defensive relations <a href="/contribute">yet</a> ';return{c(){e=p("td"),e.innerHTML=t,this.h()},l(l){e=v(l,"TD",{colspan:!0,"data-svelte-h":!0}),G(e)!=="svelte-3z0dm2"&&(e.innerHTML=t),this.h()},h(){$(e,"colspan","5")},m(l,a){I(l,e,a)},p:Q,d(l){l&&i(e)}}}function Ae(n){let e,t,l=n[25].off_artifact_rel_label.value+"",a,s,r,u,h=n[25].off_artifact_label.value+"",m,A,k,T,D=n[25].def_tactic_label.value+"",S,q,g,c,E=n[25].def_tech_label.value+"",_,d,C,w,V=n[25].def_artifact_rel_label.value+"",H,x,J,j,X=n[25].def_artifact_label.value+"",Y,P,R;return{c(){e=p("tr"),t=p("td"),a=B(l),s=L(),r=p("td"),u=p("a"),m=B(h),k=L(),T=p("td"),S=B(D),q=L(),g=p("td"),c=p("a"),_=B(E),C=L(),w=p("td"),H=B(V),x=L(),J=p("td"),j=p("a"),Y=B(X),R=L(),this.h()},l(b){e=v(b,"TR",{});var o=y(e);t=v(o,"TD",{});var N=y(t);a=O(N,l),N.forEach(i),s=M(o),r=v(o,"TD",{});var F=y(r);u=v(F,"A",{href:!0});var z=y(u);m=O(z,h),z.forEach(i),F.forEach(i),k=M(o),T=v(o,"TD",{});var K=y(T);S=O(K,D),K.forEach(i),q=M(o),g=v(o,"TD",{});var ee=y(g);c=v(ee,"A",{href:!0});var te=y(c);_=O(te,E),te.forEach(i),ee.forEach(i),C=M(o),w=v(o,"TD",{});var le=y(w);H=O(le,V),le.forEach(i),x=M(o),J=v(o,"TD",{});var ae=y(J);j=v(ae,"A",{href:!0});var re=y(j);Y=O(re,X),re.forEach(i),ae.forEach(i),R=M(o),o.forEach(i),this.h()},h(){$(u,"href",A="/dao/artifact/"+ne(n[25].off_artifact.value)),$(c,"href",d="/technique/"+ne(n[25].def_tech.value)),$(j,"href",P="/dao/artifact/"+ne(n[25].def_artifact.value))},m(b,o){I(b,e,o),f(e,t),f(t,a),f(e,s),f(e,r),f(r,u),f(u,m),f(e,k),f(e,T),f(T,S),f(e,q),f(e,g),f(g,c),f(c,_),f(e,C),f(e,w),f(w,H),f(e,x),f(e,J),f(J,j),f(j,Y),f(e,R)},p(b,o){o[0]&32&&l!==(l=b[25].off_artifact_rel_label.value+"")&&U(a,l),o[0]&32&&h!==(h=b[25].off_artifact_label.value+"")&&U(m,h),o[0]&32&&A!==(A="/dao/artifact/"+ne(b[25].off_artifact.value))&&$(u,"href",A),o[0]&32&&D!==(D=b[25].def_tactic_label.value+"")&&U(S,D),o[0]&32&&E!==(E=b[25].def_tech_label.value+"")&&U(_,E),o[0]&32&&d!==(d="/technique/"+ne(b[25].def_tech.value))&&$(c,"href",d),o[0]&32&&V!==(V=b[25].def_artifact_rel_label.value+"")&&U(H,V),o[0]&32&&X!==(X=b[25].def_artifact_label.value+"")&&U(Y,X),o[0]&32&&P!==(P="/dao/artifact/"+ne(b[25].def_artifact.value))&&$(j,"href",P)},d(b){b&&i(e)}}}function $e(n){let e,t=n[25].def_tech&&Ae(n);return{c(){t&&t.c(),e=oe()},l(l){t&&t.l(l),e=oe()},m(l,a){t&&t.m(l,a),I(l,e,a)},p(l,a){l[25].def_tech?t?t.p(l,a):(t=Ae(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&i(e),t&&t.d(l)}}}function nt(n){let e;return{c(){e=B("loading...")},l(t){e=O(t,"loading...")},m(t,l){I(t,e,l)},p:Q,d(t){t&&i(e)}}}function Ie(n){let e,t,l,a={ctx:n,current:null,token:null,hasCatch:!0,pending:nt,then:lt,catch:tt,value:24,error:28};return de(t=n[21],a),{c(){e=p("tr"),a.block.c(),l=L()},l(s){e=v(s,"TR",{});var r=y(e);a.block.l(r),l=M(r),r.forEach(i)},m(s,r){I(s,e,r),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=l,f(e,l)},p(s,r){n=s,a.ctx=n,r[0]&32&&t!==(t=n[21])&&de(t,a)||He(a,n,r)},d(s){s&&i(e),a.block.d(),a.token=null,a=null}}}function st(n){let e;return{c(){e=B("enter text and click go")},l(t){e=O(t,"enter text and click go")},m(t,l){I(t,e,l)},p:Q,i:Q,o:Q,d(t){t&&i(e)}}}function ot(n){let e,t,l,a,s,r,u,h="ATT&CK Extractor",m,A,k=`Extracts ATT&amp;CK techniques from blobs of text and recommends potential
      D3FEND countermeasures. You may also want to try the <a href="/tools/d3fend-extractor">D3FEND Extractor</a>
      or the <a href="/tools/artifact-extractor">Artifact Extractor.</a>`,T,D,S="<i>Paste any text containing ATT&amp;CK IDs:</i>",q,g,c,E,_,d,C="GO",w,V,H,x,J,j,X,Y,P;e=new Ke({props:{title:"ATT&CK Extractor | Tools | "}}),a=new Fe({});let R={ctx:n,current:null,token:null,hasCatch:!0,pending:st,then:Xe,catch:Je,value:20,error:28,blocks:[,,,]};return de(j=n[5],R),{c(){ce(e.$$.fragment),t=L(),l=p("section"),ce(a.$$.fragment),s=L(),r=p("div"),u=p("h1"),u.textContent=h,m=L(),A=p("p"),A.innerHTML=k,T=L(),D=p("p"),D.innerHTML=S,q=L(),g=p("div"),c=p("textarea"),E=L(),_=p("div"),d=p("button"),d.textContent=C,w=L(),V=p("br"),H=L(),x=p("br"),J=L(),R.block.c(),this.h()},l(b){fe(e.$$.fragment,b),t=M(b),l=v(b,"SECTION",{class:!0});var o=y(l);fe(a.$$.fragment,o),s=M(o),r=v(o,"DIV",{class:!0});var N=y(r);u=v(N,"H1",{"data-svelte-h":!0}),G(u)!=="svelte-of1ivt"&&(u.textContent=h),m=M(N),A=v(N,"P",{"data-svelte-h":!0}),G(A)!=="svelte-12tzzip"&&(A.innerHTML=k),T=M(N),D=v(N,"P",{class:!0,"data-svelte-h":!0}),G(D)!=="svelte-10wdblh"&&(D.innerHTML=S),q=M(N),g=v(N,"DIV",{});var F=y(g);c=v(F,"TEXTAREA",{class:!0}),y(c).forEach(i),F.forEach(i),E=M(N),_=v(N,"DIV",{});var z=y(_);d=v(z,"BUTTON",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-88k995"&&(d.textContent=C),z.forEach(i),w=M(N),V=v(N,"BR",{}),N.forEach(i),H=M(o),x=v(o,"BR",{}),J=M(o),R.block.l(o),o.forEach(i),this.h()},h(){$(D,"class","text-2"),$(c,"class","svelte-xumjr3"),$(d,"class","button"),$(r,"class","card"),$(l,"class"," svelte-xumjr3")},m(b,o){ue(e,b,o),I(b,t,o),I(b,l,o),ue(a,l,null),f(l,s),f(l,r),f(r,u),f(r,m),f(r,A),f(r,T),f(r,D),f(r,q),f(r,g),f(g,c),me(c,n[1]),f(r,E),f(r,_),f(_,d),f(r,w),f(r,V),f(l,H),f(l,x),f(l,J),R.block.m(l,R.anchor=null),R.mount=()=>l,R.anchor=null,X=!0,Y||(P=[se(c,"input",n[12]),se(c,"keypress",n[10]),se(d,"click",n[7])],Y=!0)},p(b,o){n=b,o[0]&2&&me(c,n[1]),R.ctx=n,o[0]&32&&j!==(j=n[5])&&de(j,R)||He(R,n,o)},i(b){X||(W(e.$$.fragment,b),W(a.$$.fragment,b),W(R.block),X=!0)},o(b){Z(e.$$.fragment,b),Z(a.$$.fragment,b);for(let o=0;o<3;o+=1){const N=R.blocks[o];Z(N)}X=!1},d(b){b&&(i(t),i(l)),he(e,b),he(a),R.block.d(),R.token=null,R=null,Y=!1,Se(P)}}}function it(){document.execCommand("copy")}function Ne(n){let e=new Set,t=[];return n.forEach(function(l){l.hasOwnProperty("def_tech_label")&&(e.has(l.def_tech_label.value)||(e.add(l.def_tech_label.value),t.push(l)))}),t}function ct(n,e,t){let l;Re(n,Ue,w=>t(6,l=w));let{data:a}=e;const s=new ge(a.techniques,{index:!0,index_key:"d3f:attack-id"});let r,u="",h=!1,m=!0,A,k=[];function T(){t(0,r=[]),t(2,h=!1),t(3,m=!0),k=[]}A=l.url.searchParams.get("q");let D=!1;async function S(w){let V="/api/offensive-technique/attack/"+w+".json";const H=await fetch(V);if(H.status==404)return{id:w,off_to_def:[],description:{graph:[]},status:H.status};if(H.ok){const x=await H.json();return{id:w,off_to_def:x.off_to_def,description:new ge(x.description)}}else throw console.log(`Error processing ${w}, response status: ${H.status}`),console.dir(H),new Error(`Error processing ${w}, response status: ${H.status}`)}async function q(){return T(),t(0,r=Array.from(new Set(Pe(u,s)))),r?(r.forEach(function(w){let V;V=S(w),V&&k.push(V)}),l.url.searchParams.set("q",JSON.stringify(r)),history.replaceState(null,"mapping",l.url)):(T(),console.debug("no matches")),k}let g=q();function c(){t(5,g=q()),t(3,m=!1)}function E(){window.getSelection().removeAllRanges(),t(2,h=!1),t(4,D=!1)}function _(){t(4,D=!0);let w="mappings";const V=window.getSelection();V.removeAllRanges();let H=document.getElementById(w);const x=document.createRange();x.selectNodeContents(H),V.addRange(x),t(2,h=!0)}function d(w){w.ctrlKey==!0&&w.keyCode==13&&c()}xe(async()=>{A?(t(1,u=A),console.log("handlingclick"),c()):(console.log("starting blank"),t(1,u=""))});function C(){u=this.value,t(1,u)}return n.$$set=w=>{"data"in w&&t(11,a=w.data)},[r,u,h,m,D,g,l,c,E,_,d,a,C]}class Tt extends Be{constructor(e){super(),Oe(this,e,ct,ot,Ve,{data:11},null,[-1,-1])}}export{Tt as component,Et as universal};