import{e as Ve}from"../chunks/index.5e2a9a64.js";import{s as be,p as Oe,f as I,a as G,e as te,g as R,c as P,h as X,d as s,j as U,i as u,A as Ge,F as oe,y as ne,l as p,m as d,G as Le,n as M,r as Pe,x as B,u as He,v as ze,w as Fe}from"../chunks/scheduler.3032ca4b.js";import{S as Me,i as je,f as Ke,b as fe,d as ae,m as ie,g as ve,t as H,c as pe,a as V,e as _e}from"../chunks/index.ee8739bf.js";import{e as me}from"../chunks/each.6507e059.js";import{g as Ue}from"../chunks/navigation.0f3ce0b6.js";import{c as Je,T as Qe,g as O,d as ce,G as $e,k as We}from"../chunks/lib.d08f5f84.js";import{T as Xe}from"../chunks/Title.8f901ed1.js";import{B as he}from"../chunks/Button.122774e3.js";import{A as Ye}from"../chunks/Alert.98814aa7.js";import{M as Ze}from"../chunks/Modal_full.130c4de7.js";import{G as ye}from"../chunks/_Graph.ba211728.js";import{T as xe,t as ke}from"../chunks/ToggleBar.c8062f4c.js";async function el({params:i,fetch:f}){const a=i.technique,l=await f(`/api/offensive-technique/attack/${a}.json`),{description:e,off_to_def:t,subtechniques:_}=await l.json();if(l.status!==200)throw Ve(500,data.message);return{description:e,off_to_def:t,technique_id:a,subtechniques:_}}const Al=Object.freeze(Object.defineProperty({__proto__:null,load:el},Symbol.toStringTag,{value:"Module"}));function ge(i,f,a){const l=i.slice();return l[6]=f[a],l}function ll(i){let f,a=`There are no digital artifacts defined on this offensive technique (yet).
    Please consider <a href="/contribute">contributing</a> an addition to D3FEND.`;return{c(){f=I("small"),f.innerHTML=a},l(l){f=R(l,"SMALL",{"data-svelte-h":!0}),oe(f)!=="svelte-1ymw1cs"&&(f.innerHTML=a)},m(l,e){u(l,f,e)},p:ne,i:ne,o:ne,d(l){l&&s(f)}}}function tl(i){let f=i[1],a,l,e=De(i);return{c(){e.c(),a=te()},l(t){e.l(t),a=te()},m(t,_){e.m(t,_),u(t,a,_),l=!0},p(t,_){_&2&&be(f,f=t[1])?(ve(),H(e,1,1,ne),pe(),e=De(t),e.c(),V(e,1),e.m(a.parentNode,a)):e.p(t,_)},i(t){l||(V(e),l=!0)},o(t){H(e),l=!1},d(t){t&&s(a),e.d(t)}}}function qe(i){let f=i[2].edge_is_unique(i[6].def_tech_label.value,i[6].def_artifact_rel_label.value,i[6].off_artifact_label.value),a,l=f&&Te(i);return{c(){l&&l.c(),a=te()},l(e){l&&l.l(e),a=te()},m(e,t){l&&l.m(e,t),u(e,a,t)},p(e,t){t&1&&(f=e[2].edge_is_unique(e[6].def_tech_label.value,e[6].def_artifact_rel_label.value,e[6].off_artifact_label.value)),f?l?l.p(e,t):(l=Te(e),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(e){e&&s(a),l&&l.d(e)}}}function Te(i){let f=!i[1].includes(i[6].def_tactic_label.value),a,l=f&&we(i);return{c(){l&&l.c(),a=te()},l(e){l&&l.l(e),a=te()},m(e,t){l&&l.m(e,t),u(e,a,t)},p(e,t){t&3&&(f=!e[1].includes(e[6].def_tactic_label.value)),f?l?l.p(e,t):(l=we(e),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(e){e&&s(a),l&&l.d(e)}}}function we(i){let f=O(i[6].def_tech.value)+"",a,l,e=i[6].def_tech_label.value+"",t,_,m="-->",E,b,w=i[6].def_artifact_rel_label.value.replace(/ /g,"")+"",r,$,h=O(i[6].off_artifact.value)+"",D,S,T=i[6].off_artifact_label.value+"",q,g,k=i[2].edge_is_unique(i[6].def_tech.value,i[6].def_tactic_label.value,i[6].off_tech_id.value),c,C=i[6].def_tech_label.value.replace(/ |\./g,"")+"",K,F,y=i[6].off_artifact_label.value.replace(/ /g,"")+"",Y,x,ee=O(i[6].def_tech.value)+"",Z,z,le=O(i[6].def_tech.value)+"",J,j,A=k&&Ee(i);return{c(){a=p(f),l=p('["'),t=p(e),_=p('"] '),E=p(m),b=p(`
          | `),r=p(w),$=p(" | "),D=p(h),S=p('["'),q=p(T),g=p(`"];

          `),A&&A.c(),c=p(`
          class `),K=p(C),F=p(` DefensiveTechniqueNode;
          class `),Y=p(y),x=p(` ArtifactNode;
          click `),Z=p(ee),z=p(' href "/technique/d3f:'),J=p(le),j=p('";')},l(n){a=d(n,f),l=d(n,'["'),t=d(n,e),_=d(n,'"] '),E=d(n,m),b=d(n,`
          | `),r=d(n,w),$=d(n," | "),D=d(n,h),S=d(n,'["'),q=d(n,T),g=d(n,`"];

          `),A&&A.l(n),c=d(n,`
          class `),K=d(n,C),F=d(n,` DefensiveTechniqueNode;
          class `),Y=d(n,y),x=d(n,` ArtifactNode;
          click `),Z=d(n,ee),z=d(n,' href "/technique/d3f:'),J=d(n,le),j=d(n,'";')},m(n,o){u(n,a,o),u(n,l,o),u(n,t,o),u(n,_,o),u(n,E,o),u(n,b,o),u(n,r,o),u(n,$,o),u(n,D,o),u(n,S,o),u(n,q,o),u(n,g,o),A&&A.m(n,o),u(n,c,o),u(n,K,o),u(n,F,o),u(n,Y,o),u(n,x,o),u(n,Z,o),u(n,z,o),u(n,J,o),u(n,j,o)},p(n,o){o&1&&f!==(f=O(n[6].def_tech.value)+"")&&M(a,f),o&1&&e!==(e=n[6].def_tech_label.value+"")&&M(t,e),o&1&&w!==(w=n[6].def_artifact_rel_label.value.replace(/ /g,"")+"")&&M(r,w),o&1&&h!==(h=O(n[6].off_artifact.value)+"")&&M(D,h),o&1&&T!==(T=n[6].off_artifact_label.value+"")&&M(q,T),o&1&&(k=n[2].edge_is_unique(n[6].def_tech.value,n[6].def_tactic_label.value,n[6].off_tech_id.value)),k?A?A.p(n,o):(A=Ee(n),A.c(),A.m(c.parentNode,c)):A&&(A.d(1),A=null),o&1&&C!==(C=n[6].def_tech_label.value.replace(/ |\./g,"")+"")&&M(K,C),o&1&&y!==(y=n[6].off_artifact_label.value.replace(/ /g,"")+"")&&M(Y,y),o&1&&ee!==(ee=O(n[6].def_tech.value)+"")&&M(Z,ee),o&1&&le!==(le=O(n[6].def_tech.value)+"")&&M(J,le)},d(n){n&&(s(a),s(l),s(t),s(_),s(E),s(b),s(r),s($),s(D),s(S),s(q),s(g),s(c),s(K),s(F),s(Y),s(x),s(Z),s(z),s(J),s(j)),A&&A.d(n)}}}function Ee(i){let f=O(i[6].def_tech.value)+"",a,l,e=i[6].def_tech_label.value+"",t,_,m="-.->",E,b,w="May "+i[6].def_tactic_label.value,r,$,h=i[6].off_tech_id.value.replace(/ |\./g,"")+"",D,S,T=i[6].off_tech_label.value+"",q,g;return{c(){a=p(f),l=p('["'),t=p(e),_=p('"] '),E=p(m),b=p(`
            | `),r=p(w),$=p(" | "),D=p(h),S=p('["'),q=p(T),g=p('"] ;')},l(k){a=d(k,f),l=d(k,'["'),t=d(k,e),_=d(k,'"] '),E=d(k,m),b=d(k,`
            | `),r=d(k,w),$=d(k," | "),D=d(k,h),S=d(k,'["'),q=d(k,T),g=d(k,'"] ;')},m(k,c){u(k,a,c),u(k,l,c),u(k,t,c),u(k,_,c),u(k,E,c),u(k,b,c),u(k,r,c),u(k,$,c),u(k,D,c),u(k,S,c),u(k,q,c),u(k,g,c)},p(k,c){c&1&&f!==(f=O(k[6].def_tech.value)+"")&&M(a,f),c&1&&e!==(e=k[6].def_tech_label.value+"")&&M(t,e),c&1&&w!==(w="May "+k[6].def_tactic_label.value)&&M(r,w),c&1&&h!==(h=k[6].off_tech_id.value.replace(/ |\./g,"")+"")&&M(D,h),c&1&&T!==(T=k[6].off_tech_label.value+"")&&M(q,T)},d(k){k&&(s(a),s(l),s(t),s(_),s(E),s(b),s(r),s($),s(D),s(S),s(q),s(g))}}}function Ne(i){let f=i[6].off_tech_id.value.replace(/ |\./g,"")+"",a,l,e=i[6].off_tech_label.value+"",t,_,m="-->",E,b,w=i[6].off_artifact_rel_label.value.replace(/ /g,"")+"",r,$,h=O(i[6].off_artifact.value)+"",D,S,T=i[6].off_artifact_label.value+"",q,g,k=i[6].off_tech_id.value.replace(/ |\./g,"")+"",c,C,K=O(i[6].off_artifact.value)+"",F,y,Y=O(i[6].off_artifact.value)+"",x,ee,Z=O(i[6].off_artifact.value)+"",z,le,J=i[6].off_tech_id.value.replace(/ |\./g,"")+"",j,A,n=ce(i[6].off_tech_id.value)+"",o,L,Q=O(i[6].off_artifact.value)+"",W,ue,se=O(i[6].off_artifact.value)+"",re,de;return{c(){a=p(f),l=p('["'),t=p(e),_=p('"] '),E=p(m),b=p(" |"),r=p(w),$=p("| "),D=p(h),S=p('["'),q=p(T),g=p('"]; class '),c=p(k),C=p(` OffensiveTechniqueNode;
        class `),F=p(K),y=p(" ArtifactNode; click "),x=p(Y),ee=p(' href "/dao/artifact/d3f:'),z=p(Z),le=p(`";
        click `),j=p(J),A=p(' href "'),o=p(n),L=p('"; click '),W=p(Q),ue=p(' href "/dao/artifact/d3f:'),re=p(se),de=p('";')},l(v){a=d(v,f),l=d(v,'["'),t=d(v,e),_=d(v,'"] '),E=d(v,m),b=d(v," |"),r=d(v,w),$=d(v,"| "),D=d(v,h),S=d(v,'["'),q=d(v,T),g=d(v,'"]; class '),c=d(v,k),C=d(v,` OffensiveTechniqueNode;
        class `),F=d(v,K),y=d(v," ArtifactNode; click "),x=d(v,Y),ee=d(v,' href "/dao/artifact/d3f:'),z=d(v,Z),le=d(v,`";
        click `),j=d(v,J),A=d(v,' href "'),o=d(v,n),L=d(v,'"; click '),W=d(v,Q),ue=d(v,' href "/dao/artifact/d3f:'),re=d(v,se),de=d(v,'";')},m(v,N){u(v,a,N),u(v,l,N),u(v,t,N),u(v,_,N),u(v,E,N),u(v,b,N),u(v,r,N),u(v,$,N),u(v,D,N),u(v,S,N),u(v,q,N),u(v,g,N),u(v,c,N),u(v,C,N),u(v,F,N),u(v,y,N),u(v,x,N),u(v,ee,N),u(v,z,N),u(v,le,N),u(v,j,N),u(v,A,N),u(v,o,N),u(v,L,N),u(v,W,N),u(v,ue,N),u(v,re,N),u(v,de,N)},p(v,N){N&1&&f!==(f=v[6].off_tech_id.value.replace(/ |\./g,"")+"")&&M(a,f),N&1&&e!==(e=v[6].off_tech_label.value+"")&&M(t,e),N&1&&w!==(w=v[6].off_artifact_rel_label.value.replace(/ /g,"")+"")&&M(r,w),N&1&&h!==(h=O(v[6].off_artifact.value)+"")&&M(D,h),N&1&&T!==(T=v[6].off_artifact_label.value+"")&&M(q,T),N&1&&k!==(k=v[6].off_tech_id.value.replace(/ |\./g,"")+"")&&M(c,k),N&1&&K!==(K=O(v[6].off_artifact.value)+"")&&M(F,K),N&1&&Y!==(Y=O(v[6].off_artifact.value)+"")&&M(x,Y),N&1&&Z!==(Z=O(v[6].off_artifact.value)+"")&&M(z,Z),N&1&&J!==(J=v[6].off_tech_id.value.replace(/ |\./g,"")+"")&&M(j,J),N&1&&n!==(n=ce(v[6].off_tech_id.value)+"")&&M(o,n),N&1&&Q!==(Q=O(v[6].off_artifact.value)+"")&&M(W,Q),N&1&&se!==(se=O(v[6].off_artifact.value)+"")&&M(re,se)},d(v){v&&(s(a),s(l),s(t),s(_),s(E),s(b),s(r),s($),s(D),s(S),s(q),s(g),s(c),s(C),s(F),s(y),s(x),s(ee),s(z),s(le),s(j),s(A),s(o),s(L),s(W),s(ue),s(re),s(de))}}}function Ce(i){let f,a=i[2].edge_is_unique(i[6].off_tech_label.value,i[6].off_artifact_rel_label.value,i[6].off_artifact_label.value),l,e="def_tech"in i[6]&&qe(i),t=a&&Ne(i);return{c(){e&&e.c(),f=G(),t&&t.c(),l=te()},l(_){e&&e.l(_),f=P(_),t&&t.l(_),l=te()},m(_,m){e&&e.m(_,m),u(_,f,m),t&&t.m(_,m),u(_,l,m)},p(_,m){"def_tech"in _[6]?e?e.p(_,m):(e=qe(_),e.c(),e.m(f.parentNode,f)):e&&(e.d(1),e=null),m&1&&(a=_[2].edge_is_unique(_[6].off_tech_label.value,_[6].off_artifact_rel_label.value,_[6].off_artifact_label.value)),a?t?t.p(_,m):(t=Ne(_),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(_){_&&(s(f),s(l)),e&&e.d(_),t&&t.d(_)}}}function fl(i){let f,a,l=me(i[0].results.bindings),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ce(ge(i,l,t));return{c(){f=p(`graph LR;

    `);for(let t=0;t<e.length;t+=1)e[t].c();a=te()},l(t){f=d(t,`graph LR;

    `);for(let _=0;_<e.length;_+=1)e[_].l(t);a=te()},m(t,_){u(t,f,_);for(let m=0;m<e.length;m+=1)e[m]&&e[m].m(t,_);u(t,a,_)},p(t,_){if(_&7){l=me(t[0].results.bindings);let m;for(m=0;m<l.length;m+=1){const E=ge(t,l,m);e[m]?e[m].p(E,_):(e[m]=Ce(E),e[m].c(),e[m].m(a.parentNode,a))}for(;m<e.length;m+=1)e[m].d(1);e.length=l.length}},d(t){t&&(s(f),s(a)),Le(e,t)}}}function De(i){let f,a;return f=new ye({props:{$$slots:{default:[fl]},$$scope:{ctx:i}}}),{c(){fe(f.$$.fragment)},l(l){ae(f.$$.fragment,l)},m(l,e){ie(f,l,e),a=!0},p(l,e){const t={};e&515&&(t.$$scope={dirty:e,ctx:l}),f.$set(t)},i(l){a||(V(f.$$.fragment,l),a=!0)},o(l){H(f.$$.fragment,l),a=!1},d(l){_e(f,l)}}}function al(i){let f,a,l,e,t,_,m,E,b,w,r,$,h,D;function S(c){i[4](c)}let T={toggles:i[3]};i[1]!==void 0&&(T.selected=i[1]),e=new xe({props:T}),Oe.push(()=>Ke(e,"selected",S));const q=[tl,ll],g=[];function k(c,C){return c[0].results.bindings.length>0?0:1}return r=k(i),$=g[r]=q[r](i),{c(){f=I("br"),a=G(),l=I("div"),fe(e.$$.fragment),_=G(),m=I("br"),E=G(),b=I("br"),w=G(),$.c(),h=te(),this.h()},l(c){f=R(c,"BR",{}),a=P(c),l=R(c,"DIV",{class:!0});var C=X(l);ae(e.$$.fragment,C),C.forEach(s),_=P(c),m=R(c,"BR",{}),E=P(c),b=R(c,"BR",{}),w=P(c),$.l(c),h=te(),this.h()},h(){U(l,"class","center shrink")},m(c,C){u(c,f,C),u(c,a,C),u(c,l,C),ie(e,l,null),u(c,_,C),u(c,m,C),u(c,E,C),u(c,b,C),u(c,w,C),g[r].m(c,C),u(c,h,C),D=!0},p(c,[C]){const K={};!t&&C&2&&(t=!0,K.selected=c[1],Ge(()=>t=!1)),e.$set(K);let F=r;r=k(c),r===F?g[r].p(c,C):(ve(),H(g[F],1,1,()=>{g[F]=null}),pe(),$=g[r],$?$.p(c,C):($=g[r]=q[r](c),$.c()),V($,1),$.m(h.parentNode,h))},i(c){D||(V(e.$$.fragment,c),V($),D=!0)},o(c){H(e.$$.fragment,c),H($),D=!1},d(c){c&&(s(f),s(a),s(l),s(_),s(m),s(E),s(b),s(w),s(h)),_e(e),g[r].d(c)}}}function il(i,f,a){let{off_to_def:l}=f,e=new Qe,t=new Set;l.results.bindings.forEach(b=>{"def_tactic_label"in b&&t.add(b.def_tactic_label.value)});let _=Array.from(t).sort(function(b,w){return ke[b]-ke[w]}),m=["Model"];Je(_,m)&&(m=[]);function E(b){m=b,a(1,m)}return i.$$set=b=>{"off_to_def"in b&&a(0,l=b.off_to_def)},i.$$.update=()=>{i.$$.dirty&2&&e.reset(m)},[l,m,e,_,E]}class _l extends Me{constructor(f){super(),je(this,f,il,al,be,{off_to_def:0})}}function Ae(i,f,a){const l=i.slice();return l[8]=f[a],l}const sl=i=>({}),Be=i=>({});function Ie(i){let f,a,l;return a=new he({props:{href:ce(i[1]),size:"small",$$slots:{default:[ul]},$$scope:{ctx:i}}}),{c(){f=I("span"),fe(a.$$.fragment),this.h()},l(e){f=R(e,"SPAN",{class:!0});var t=X(f);ae(a.$$.fragment,t),t.forEach(s),this.h()},h(){U(f,"class","left")},m(e,t){u(e,f,t),ie(a,f,null),l=!0},p(e,t){const _={};t&2&&(_.href=ce(e[1])),t&66&&(_.$$scope={dirty:t,ctx:e}),a.$set(_)},i(e){l||(V(a.$$.fragment,e),l=!0)},o(e){H(a.$$.fragment,e),l=!1},d(e){e&&s(f),_e(a)}}}function ul(i){let f,a;return{c(){f=p("Parent: "),a=p(i[1])},l(l){f=d(l,"Parent: "),a=d(l,i[1])},m(l,e){u(l,f,e),u(l,a,e)},p(l,e){e&2&&M(a,l[1])},d(l){l&&(s(f),s(a))}}}function nl(i){let f;return{c(){f=p("MITRE ATT&CK® Link")},l(a){f=d(a,"MITRE ATT&CK® Link")},m(a,l){u(a,f,l)},d(a){a&&s(f)}}}function rl(i){let f,a,l,e,t,_,m=i[3]["rdfs:label"]+"",E,b,w=i[3]["d3f:attack-id"]+"",r,$,h,D="(ATT&CK® Technique)",S,T=i[1]&&Ie(i);return e=new he({props:{href:We(i[3]["d3f:attack-id"]),size:"small",$$slots:{default:[nl]},$$scope:{ctx:i}}}),{c(){f=I("div"),T&&T.c(),a=G(),l=I("span"),fe(e.$$.fragment),t=G(),_=I("h1"),E=p(m),b=p(" - "),r=p(w),$=G(),h=I("div"),h.textContent=D,this.h()},l(q){f=R(q,"DIV",{class:!0});var g=X(f);T&&T.l(g),a=P(g),l=R(g,"SPAN",{class:!0});var k=X(l);ae(e.$$.fragment,k),k.forEach(s),g.forEach(s),t=P(q),_=R(q,"H1",{class:!0});var c=X(_);E=d(c,m),b=d(c," - "),r=d(c,w),c.forEach(s),$=P(q),h=R(q,"DIV",{class:!0,"data-svelte-h":!0}),oe(h)!=="svelte-1scusry"&&(h.textContent=D),this.h()},h(){U(l,"class","right"),U(f,"class","flex"),U(_,"class","text-center svelte-14efray"),U(h,"class","center text-center")},m(q,g){u(q,f,g),T&&T.m(f,null),B(f,a),B(f,l),ie(e,l,null),u(q,t,g),u(q,_,g),B(_,E),B(_,b),B(_,r),u(q,$,g),u(q,h,g),S=!0},p(q,g){q[1]?T?(T.p(q,g),g&2&&V(T,1)):(T=Ie(q),T.c(),V(T,1),T.m(f,a)):T&&(ve(),H(T,1,1,()=>{T=null}),pe());const k={};g&64&&(k.$$scope={dirty:g,ctx:q}),e.$set(k)},i(q){S||(V(T),V(e.$$.fragment,q),S=!0)},o(q){H(T),H(e.$$.fragment,q),S=!1},d(q){q&&(s(f),s(t),s(_),s($),s(h)),T&&T.d(),_e(e)}}}function cl(i){let f,a,l="Subtechniques",e,t,_,m,E=me(i[2].i(i[3]["@id"])["rdfs:hasSubClass"]),b=[];for(let r=0;r<E.length;r+=1)b[r]=Re(Ae(i,E,r));const w=r=>H(b[r],1,1,()=>{b[r]=null});return{c(){f=I("div"),a=I("h2"),a.textContent=l,e=G(),t=I("div"),_=I("ul");for(let r=0;r<b.length;r+=1)b[r].c();this.h()},l(r){f=R(r,"DIV",{class:!0});var $=X(f);a=R($,"H2",{class:!0,"data-svelte-h":!0}),oe(a)!=="svelte-flst9x"&&(a.textContent=l),e=P($),t=R($,"DIV",{class:!0});var h=X(t);_=R(h,"UL",{class:!0});var D=X(_);for(let S=0;S<b.length;S+=1)b[S].l(D);D.forEach(s),h.forEach(s),$.forEach(s),this.h()},h(){U(a,"class","text-center"),U(_,"class","center stretch shrink no-style"),U(t,"class","center"),U(f,"class","card")},m(r,$){u(r,f,$),B(f,a),B(f,e),B(f,t),B(t,_);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(_,null);m=!0},p(r,$){if($&12){E=me(r[2].i(r[3]["@id"])["rdfs:hasSubClass"]);let h;for(h=0;h<E.length;h+=1){const D=Ae(r,E,h);b[h]?(b[h].p(D,$),V(b[h],1)):(b[h]=Re(D),b[h].c(),V(b[h],1),b[h].m(_,null))}for(ve(),h=E.length;h<b.length;h+=1)w(h);pe()}},i(r){if(!m){for(let $=0;$<E.length;$+=1)V(b[$]);m=!0}},o(r){b=b.filter(Boolean);for(let $=0;$<b.length;$+=1)H(b[$]);m=!1},d(r){r&&s(f),Le(b,r)}}}function ol(i){let f=i[2].i(i[8]["@id"])["d3f:attack-id"]+"",a,l,e=i[2].i(i[8]["@id"])["rdfs:label"]+"",t;return{c(){a=p(f),l=p(" - "),t=p(e)},l(_){a=d(_,f),l=d(_," - "),t=d(_,e)},m(_,m){u(_,a,m),u(_,l,m),u(_,t,m)},p:ne,d(_){_&&(s(a),s(l),s(t))}}}function Re(i){let f,a,l,e;return a=new he({props:{href:ce(i[2].i(i[8]["@id"])["d3f:attack-id"]),size:"small",$$slots:{default:[ol]},$$scope:{ctx:i}}}),{c(){f=I("li"),fe(a.$$.fragment),l=G()},l(t){f=R(t,"LI",{});var _=X(f);ae(a.$$.fragment,_),l=P(_),_.forEach(s)},m(t,_){u(t,f,_),ie(a,f,null),B(f,l),e=!0},p(t,_){const m={};_&64&&(m.$$scope={dirty:_,ctx:t}),a.$set(m)},i(t){e||(V(a.$$.fragment,t),e=!0)},o(t){H(a.$$.fragment,t),e=!1},d(t){t&&s(f),_e(a)}}}function Se(i){let f,a,l;return a=new Ye({props:{$$slots:{default:[vl]},$$scope:{ctx:i}}}),{c(){f=I("div"),fe(a.$$.fragment),this.h()},l(e){f=R(e,"DIV",{class:!0});var t=X(f);ae(a.$$.fragment,t),t.forEach(s),this.h()},h(){U(f,"class","content")},m(e,t){u(e,f,t),ie(a,f,null),l=!0},i(e){l||(V(a.$$.fragment,e),l=!0)},o(e){H(a.$$.fragment,e),l=!1},d(e){e&&s(f),_e(a)}}}function vl(i){let f,a="Browse the D3FEND knowledge graph by clicking on the nodes below.";return{c(){f=I("small"),f.textContent=a},l(l){f=R(l,"SMALL",{"data-svelte-h":!0}),oe(f)!=="svelte-cj5juo"&&(f.textContent=a)},m(l,e){u(l,f,e)},p:ne,d(l){l&&s(f)}}}function pl(i){let f,a,l,e,t,_,m,E,b,w,r,$,h="D3FEND Inferred Relationships",D,S,T,q,g,k,c,C,K,F,y,Y,x,ee,Z,z;const le=i[5].header,J=Pe(le,i,i[6],Be),j=J||rl(i);let A=i[2].graph.length>0&&cl(i),n=i[0].off_to_def.results.bindings.length>0&&Se(i);return g=new _l({props:{off_to_def:i[0].off_to_def}}),{c(){j&&j.c(),f=G(),a=I("section"),l=I("div"),e=G(),A&&A.c(),t=G(),_=I("br"),m=G(),E=I("br"),b=G(),w=I("section"),r=I("div"),$=I("h2"),$.textContent=h,D=G(),n&&n.c(),S=G(),T=I("br"),q=G(),fe(g.$$.fragment),k=G(),c=I("div"),C=I("a"),K=p("json"),y=G(),Y=I("br"),x=I("br"),ee=I("br"),Z=I("br"),this.h()},l(o){j&&j.l(o),f=P(o),a=R(o,"SECTION",{class:!0});var L=X(a);l=R(L,"DIV",{class:!0}),X(l).forEach(s),e=P(L),A&&A.l(L),t=P(L),_=R(L,"BR",{}),m=P(L),E=R(L,"BR",{}),L.forEach(s),b=P(o),w=R(o,"SECTION",{});var Q=X(w);r=R(Q,"DIV",{class:!0});var W=X(r);$=R(W,"H2",{class:!0,"data-svelte-h":!0}),oe($)!=="svelte-u3n8h4"&&($.textContent=h),D=P(W),n&&n.l(W),S=P(W),T=R(W,"BR",{}),q=P(W),ae(g.$$.fragment,W),k=P(W),c=R(W,"DIV",{class:!0});var ue=X(c);C=R(ue,"A",{href:!0});var se=X(C);K=d(se,"json"),se.forEach(s),ue.forEach(s),W.forEach(s),y=P(Q),Y=R(Q,"BR",{}),x=R(Q,"BR",{}),ee=R(Q,"BR",{}),Z=R(Q,"BR",{}),Q.forEach(s),this.h()},h(){U(l,"class","text-center"),U(a,"class","content"),U($,"class","text-center"),U(C,"href",F=`/api/offensive-technique/attack/${i[0].technique_id}.json`),U(c,"class","text-right"),U(r,"class","text-center card")},m(o,L){j&&j.m(o,L),u(o,f,L),u(o,a,L),B(a,l),B(a,e),A&&A.m(a,null),B(a,t),B(a,_),B(a,m),B(a,E),u(o,b,L),u(o,w,L),B(w,r),B(r,$),B(r,D),n&&n.m(r,null),B(r,S),B(r,T),B(r,q),ie(g,r,null),B(r,k),B(r,c),B(c,C),B(C,K),B(w,y),B(w,Y),B(w,x),B(w,ee),B(w,Z),z=!0},p(o,L){J?J.p&&(!z||L&64)&&He(J,le,o,o[6],z?Fe(le,o[6],L,sl):ze(o[6]),Be):j&&j.p&&(!z||L&2)&&j.p(o,z?L:-1),o[2].graph.length>0&&A.p(o,L),o[0].off_to_def.results.bindings.length>0?n?L&1&&V(n,1):(n=Se(o),n.c(),V(n,1),n.m(r,S)):n&&(ve(),H(n,1,1,()=>{n=null}),pe());const Q={};L&1&&(Q.off_to_def=o[0].off_to_def),g.$set(Q),(!z||L&1&&F!==(F=`/api/offensive-technique/attack/${o[0].technique_id}.json`))&&U(C,"href",F)},i(o){z||(V(j,o),V(A),V(n),V(g.$$.fragment,o),z=!0)},o(o){H(j,o),H(A),H(n),H(g.$$.fragment,o),z=!1},d(o){o&&(s(f),s(a),s(b),s(w)),j&&j.d(o),A&&A.d(),n&&n.d(),_e(g)}}}function dl(i){let f,a,l,e;return f=new Xe({props:{title:"Offensive Technique Details"}}),l=new Ze({props:{$$slots:{default:[pl]},$$scope:{ctx:i}}}),l.$on("close",i[4]),{c(){fe(f.$$.fragment),a=G(),fe(l.$$.fragment)},l(t){ae(f.$$.fragment,t),a=P(t),ae(l.$$.fragment,t)},m(t,_){ie(f,t,_),u(t,a,_),ie(l,t,_),e=!0},p(t,[_]){const m={};_&67&&(m.$$scope={dirty:_,ctx:t}),l.$set(m)},i(t){e||(V(f.$$.fragment,t),V(l.$$.fragment,t),e=!0)},o(t){H(f.$$.fragment,t),H(l.$$.fragment,t),e=!1},d(t){t&&s(a),_e(f,t),_e(l,t)}}}function ml(i,f,a){let{$$slots:l={},$$scope:e}=f,{data:t}=f,_=new $e(t.description),m=new $e(t.subtechniques,{index:!0}),E=_.get("d3f:attack-id",t.technique_id),b;function w(r){Ue("/")}return i.$$set=r=>{"data"in r&&a(0,t=r.data),"$$scope"in r&&a(6,e=r.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&t.technique_id.includes(".")&&a(1,b=t.technique_id.split(".")[0])},[t,b,m,E,w,l,e]}class Bl extends Me{constructor(f){super(),je(this,f,ml,dl,be,{data:0})}}export{Bl as component,Al as universal};