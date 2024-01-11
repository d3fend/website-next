import{e as Kt}from"../chunks/index.aHWtvSLc.js";import"../chunks/config.z_CQNVCu.js";import{s as Lt,b as q,e as w,t as f,A as zt,B as Qt,i as l,j as m,d as g,v as dt,f as D,h as r,k as c,l as h,m as E,n as At,I as Nt}from"../chunks/scheduler.7zAg_eaB.js";import{e as J}from"../chunks/each.VblL_ow5.js";import{S as Rt,i as Ut}from"../chunks/index.vxbr_JN5.js";async function Wt({fetch:o}){const _=await o("/api/progress.json"),n=await _.json();return _.status!==200&&Kt(500,data.message),{progress:n}}const ee=Object.freeze(Object.defineProperty({__proto__:null,load:Wt},Symbol.toStringTag,{value:"Module"}));function Bt(o,s,_){const n=o.slice();return n[1]=s[_],n}function Ft(o,s,_){const n=o.slice();return n[1]=s[_],n}function Mt(o,s,_){const n=o.slice();return n[1]=s[_],n}function Tt(o){let s,_=o[1].technique.value+"",n;return{c(){s=w("div"),n=f(_)},l(a){s=g(a,"DIV",{});var u=D(s);n=r(u,_),u.forEach(l)},m(a,u){c(a,s,u),h(s,n)},p(a,u){u&1&&_!==(_=a[1].technique.value+"")&&E(n,_)},d(a){a&&l(s)}}}function Gt(o){let s,_=o[1].technique.value+"",n;return{c(){s=w("div"),n=f(_)},l(a){s=g(a,"DIV",{});var u=D(s);n=r(u,_),u.forEach(l)},m(a,u){c(a,s,u),h(s,n)},p(a,u){u&1&&_!==(_=a[1].technique.value+"")&&E(n,_)},d(a){a&&l(s)}}}function Jt(o){let s,_=o[1].artifact.value+"",n;return{c(){s=w("div"),n=f(_)},l(a){s=g(a,"DIV",{});var u=D(s);n=r(u,_),u.forEach(l)},m(a,u){c(a,s,u),h(s,n)},p(a,u){u&1&&_!==(_=a[1].artifact.value+"")&&E(n,_)},d(a){a&&l(s)}}}function Xt(o){let s,_,n="Progress",a,u,pt,K=o[0].progress.artifacts_count+"",Z,$,I,qt,L=o[0].progress.artifacts_without_definitions_count+"",x,y,b,mt,Q=o[0].progress.techniques_count+"",tt,et,V,wt,R=o[0].progress.techniques_with_artifacts_count+"",it,lt,j,gt,U=o[0].progress.techniques_without_artifacts_count+"",st,_t,H,kt,W=o[0].progress.otechniques_count+"",ot,nt,N,Ct,X=o[0].progress.otechniques_with_artifacts_count+"",at,ct,P,Dt,Y=o[0].progress.otechniques_without_artifacts_count+"",ut,ft,S,Pt="techniques_without_artifacts directly defined",rt,A,O,St="otechniques_without_artifacts directly defined",ht,B,z,Ot="artifacts_without_definitions",vt,F,M=J(o[0].progress.techniques_without_artifacts),v=[];for(let t=0;t<M.length;t+=1)v[t]=Tt(Mt(o,M,t));let T=J(o[0].progress.otechniques_without_artifacts),d=[];for(let t=0;t<T.length;t+=1)d[t]=Gt(Ft(o,T,t));let G=J(o[0].progress.artifacts_without_definitions),p=[];for(let t=0;t<G.length;t+=1)p[t]=Jt(Bt(o,G,t));return{c(){s=q(),_=w("h1"),_.textContent=n,a=q(),u=w("div"),pt=f("artifacts_count: "),Z=f(K),$=q(),I=w("div"),qt=f("artifacts_without_definitions_count: "),x=f(L),y=q(),b=w("div"),mt=f("techniques_count: "),tt=f(Q),et=q(),V=w("div"),wt=f("techniques_with_artifacts_count: "),it=f(R),lt=q(),j=w("div"),gt=f("techniques_without_artifacts_count: "),st=f(U),_t=q(),H=w("div"),kt=f("otechniques_count: "),ot=f(W),nt=q(),N=w("div"),Ct=f("otechniques_with_artifacts_count: "),at=f(X),ct=q(),P=w("div"),Dt=f("otechniques_without_artifacts_count: "),ut=f(Y),ft=q(),S=w("h1"),S.textContent=Pt,rt=q();for(let t=0;t<v.length;t+=1)v[t].c();A=q(),O=w("h1"),O.textContent=St,ht=q();for(let t=0;t<d.length;t+=1)d[t].c();B=q(),z=w("h1"),z.textContent=Ot,vt=q();for(let t=0;t<p.length;t+=1)p[t].c();F=zt(),this.h()},l(t){Qt("svelte-1ftm7k8",document.head).forEach(l),s=m(t),_=g(t,"H1",{"data-svelte-h":!0}),dt(_)!=="svelte-1q9klmv"&&(_.textContent=n),a=m(t),u=g(t,"DIV",{});var e=D(u);pt=r(e,"artifacts_count: "),Z=r(e,K),e.forEach(l),$=m(t),I=g(t,"DIV",{});var k=D(I);qt=r(k,"artifacts_without_definitions_count: "),x=r(k,L),k.forEach(l),y=m(t),b=g(t,"DIV",{});var Et=D(b);mt=r(Et,"techniques_count: "),tt=r(Et,Q),Et.forEach(l),et=m(t),V=g(t,"DIV",{});var It=D(V);wt=r(It,"techniques_with_artifacts_count: "),it=r(It,R),It.forEach(l),lt=m(t),j=g(t,"DIV",{});var bt=D(j);gt=r(bt,"techniques_without_artifacts_count: "),st=r(bt,U),bt.forEach(l),_t=m(t),H=g(t,"DIV",{});var Vt=D(H);kt=r(Vt,"otechniques_count: "),ot=r(Vt,W),Vt.forEach(l),nt=m(t),N=g(t,"DIV",{});var jt=D(N);Ct=r(jt,"otechniques_with_artifacts_count: "),at=r(jt,X),jt.forEach(l),ct=m(t),P=g(t,"DIV",{});var Ht=D(P);Dt=r(Ht,"otechniques_without_artifacts_count: "),ut=r(Ht,Y),Ht.forEach(l),ft=m(t),S=g(t,"H1",{"data-svelte-h":!0}),dt(S)!=="svelte-oa3eb7"&&(S.textContent=Pt),rt=m(t);for(let C=0;C<v.length;C+=1)v[C].l(t);A=m(t),O=g(t,"H1",{"data-svelte-h":!0}),dt(O)!=="svelte-15nkckg"&&(O.textContent=St),ht=m(t);for(let C=0;C<d.length;C+=1)d[C].l(t);B=m(t),z=g(t,"H1",{"data-svelte-h":!0}),dt(z)!=="svelte-j3kwr1"&&(z.textContent=Ot),vt=m(t);for(let C=0;C<p.length;C+=1)p[C].l(t);F=zt(),this.h()},h(){document.title="D3FEND Progress"},m(t,i){c(t,s,i),c(t,_,i),c(t,a,i),c(t,u,i),h(u,pt),h(u,Z),c(t,$,i),c(t,I,i),h(I,qt),h(I,x),c(t,y,i),c(t,b,i),h(b,mt),h(b,tt),c(t,et,i),c(t,V,i),h(V,wt),h(V,it),c(t,lt,i),c(t,j,i),h(j,gt),h(j,st),c(t,_t,i),c(t,H,i),h(H,kt),h(H,ot),c(t,nt,i),c(t,N,i),h(N,Ct),h(N,at),c(t,ct,i),c(t,P,i),h(P,Dt),h(P,ut),c(t,ft,i),c(t,S,i),c(t,rt,i);for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(t,i);c(t,A,i),c(t,O,i),c(t,ht,i);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(t,i);c(t,B,i),c(t,z,i),c(t,vt,i);for(let e=0;e<p.length;e+=1)p[e]&&p[e].m(t,i);c(t,F,i)},p(t,[i]){if(i&1&&K!==(K=t[0].progress.artifacts_count+"")&&E(Z,K),i&1&&L!==(L=t[0].progress.artifacts_without_definitions_count+"")&&E(x,L),i&1&&Q!==(Q=t[0].progress.techniques_count+"")&&E(tt,Q),i&1&&R!==(R=t[0].progress.techniques_with_artifacts_count+"")&&E(it,R),i&1&&U!==(U=t[0].progress.techniques_without_artifacts_count+"")&&E(st,U),i&1&&W!==(W=t[0].progress.otechniques_count+"")&&E(ot,W),i&1&&X!==(X=t[0].progress.otechniques_with_artifacts_count+"")&&E(at,X),i&1&&Y!==(Y=t[0].progress.otechniques_without_artifacts_count+"")&&E(ut,Y),i&1){M=J(t[0].progress.techniques_without_artifacts);let e;for(e=0;e<M.length;e+=1){const k=Mt(t,M,e);v[e]?v[e].p(k,i):(v[e]=Tt(k),v[e].c(),v[e].m(A.parentNode,A))}for(;e<v.length;e+=1)v[e].d(1);v.length=M.length}if(i&1){T=J(t[0].progress.otechniques_without_artifacts);let e;for(e=0;e<T.length;e+=1){const k=Ft(t,T,e);d[e]?d[e].p(k,i):(d[e]=Gt(k),d[e].c(),d[e].m(B.parentNode,B))}for(;e<d.length;e+=1)d[e].d(1);d.length=T.length}if(i&1){G=J(t[0].progress.artifacts_without_definitions);let e;for(e=0;e<G.length;e+=1){const k=Bt(t,G,e);p[e]?p[e].p(k,i):(p[e]=Jt(k),p[e].c(),p[e].m(F.parentNode,F))}for(;e<p.length;e+=1)p[e].d(1);p.length=G.length}},i:At,o:At,d(t){t&&(l(s),l(_),l(a),l(u),l($),l(I),l(y),l(b),l(et),l(V),l(lt),l(j),l(_t),l(H),l(nt),l(N),l(ct),l(P),l(ft),l(S),l(rt),l(A),l(O),l(ht),l(B),l(z),l(vt),l(F)),Nt(v,t),Nt(d,t),Nt(p,t)}}}function Yt(o,s,_){let{data:n}=s;return o.$$set=a=>{"data"in a&&_(0,n=a.data)},[n]}class ie extends Rt{constructor(s){super(),Ut(this,s,Yt,Xt,Lt,{data:0})}}export{ie as component,ee as universal};
