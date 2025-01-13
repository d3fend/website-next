import{s as ye,e as v,b as S,t as O,d as p,v as ce,j as A,f as y,h as z,i as h,w as _,k as F,l as f,p as ne,a6 as at,m as G,n as Y,L as ke,y as Ce,x as we,r as De,I as be,E as de,M as nt,J as Me,N as st,O as it,Y as rt,o as oe,_ as ot}from"../chunks/scheduler.BZHCcSjb.js";import{h as Oe,u as ct}from"../chunks/await_block.ZBpcKnqg.js";import{S as Se,i as Ae,f as dt,c as he,b as me,m as _e,t as ve,a as pe,d as ge}from"../chunks/index.Bh3q8dHK.js";import{w as ze}from"../chunks/index.B1Lvoqmk.js";import{p as ft}from"../chunks/stores.ChykS38N.js";import{T as ut}from"../chunks/Title.C125BUef.js";import{S as ht}from"../chunks/SimpleAutocomplete.B2t2jdYm.js";import{e as le}from"../chunks/each.B4Ydkjy2.js";/* empty css                             */import{m as Ve}from"../chunks/marked.esm.D23x4JZT.js";import{s as mt}from"../chunks/file-system.DbJ-LeZd.js";import{e as _t,n as vt,m as pt}from"../chunks/graphStore.CqTwWi_t.js";/* empty css                     */function He(a,e,t){const l=a.slice();return l[11]=e[t],l[12]=e,l[13]=t,l}function Le(a){let e,t,l,n,s,d,r=a[11].view+"",o,c,i,u;function m(){a[9].call(l,a[12],a[13])}function E(...b){return a[10](a[11],...b)}return{c(){e=v("article"),t=v("form"),l=v("input"),s=S(),d=v("span"),o=O(r),c=S(),this.h()},l(b){e=p(b,"ARTICLE",{class:!0});var w=y(e);t=p(w,"FORM",{class:!0});var k=y(t);l=p(k,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),s=A(k),d=p(k,"SPAN",{class:!0});var g=y(d);o=z(g,r),g.forEach(h),k.forEach(h),c=A(w),w.forEach(h),this.h()},h(){_(l,"class","check-box"),_(l,"type","checkbox"),_(l,"name",n=a[11].field),_(l,"tabindex","0"),_(d,"class","layer-text"),_(t,"class","setting-checks svelte-14q5rrs"),_(e,"class","setting svelte-14q5rrs")},m(b,w){F(b,e,w),f(e,t),f(t,l),l.checked=a[11].checked,f(t,s),f(t,d),f(d,o),f(e,c),i||(u=[ne(l,"change",m),ne(l,"click",at(E))],i=!0)},p(b,w){a=b,w&8&&n!==(n=a[11].field)&&_(l,"name",n),w&8&&(l.checked=a[11].checked),w&8&&r!==(r=a[11].view+"")&&G(o,r)},d(b){b&&h(e),i=!1,Ce(u)}}}function gt(a){let e,t="Settings",l,n,s,d,r,o,c,i,u,m,E,b,w="60",k,g,C,R,H="100",U,K,Z,Q,L,j,x,D,V="Toggle All Metadata",W,X,se,B=le(Object.values(a[3])),N=[];for(let I=0;I<B.length;I+=1)N[I]=Le(He(a,B,I));return{c(){e=v("h3"),e.textContent=t,l=S(),n=v("section"),s=v("article"),d=v("div"),r=O("Container Scale"),o=v("span"),c=O("("),i=O(a[4]),u=O(")"),m=S(),E=v("div"),b=v("span"),b.textContent=w,k=S(),g=v("input"),C=S(),R=v("span"),R.textContent=H,U=S(),K=v("br"),Z=S(),Q=v("article"),L=v("form"),j=v("input"),x=S(),D=v("span"),D.textContent=V,W=S();for(let I=0;I<N.length;I+=1)N[I].c();this.h()},l(I){e=p(I,"H3",{class:!0,"data-svelte-h":!0}),ce(e)!=="svelte-ihiao5"&&(e.textContent=t),l=A(I),n=p(I,"SECTION",{class:!0});var T=y(n);s=p(T,"ARTICLE",{});var P=y(s);d=p(P,"DIV",{class:!0});var J=y(d);r=z(J,"Container Scale"),o=p(J,"SPAN",{});var te=y(o);c=z(te,"("),i=z(te,a[4]),u=z(te,")"),te.forEach(h),J.forEach(h),m=A(P),E=p(P,"DIV",{class:!0});var ee=y(E);b=p(ee,"SPAN",{"data-svelte-h":!0}),ce(b)!=="svelte-nt3n7g"&&(b.textContent=w),k=A(ee),g=p(ee,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),C=A(ee),R=p(ee,"SPAN",{"data-svelte-h":!0}),ce(R)!=="svelte-rbuf0z"&&(R.textContent=H),ee.forEach(h),P.forEach(h),U=A(T),K=p(T,"BR",{}),Z=A(T),Q=p(T,"ARTICLE",{});var ue=y(Q);L=p(ue,"FORM",{class:!0});var ae=y(L);j=p(ae,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),x=A(ae),D=p(ae,"SPAN",{class:!0,"data-svelte-h":!0}),ce(D)!=="svelte-11nf2zc"&&(D.textContent=V),ae.forEach(h),ue.forEach(h),W=A(T);for(let q=0;q<N.length;q+=1)N[q].l(T);T.forEach(h),this.h()},h(){_(e,"class","text-center"),_(d,"class","select-name svelte-14q5rrs"),_(g,"type","range"),_(g,"min","60"),_(g,"max","99"),g.value="80",_(g,"class","slider"),_(g,"id","myRange"),_(E,"class","size-slider svelte-14q5rrs"),_(j,"class","check-box"),_(j,"type","checkbox"),_(j,"name","toggleAll"),j.checked=bt,_(j,"tabindex","0"),_(D,"class","layer-text"),_(L,"class","setting-checks svelte-14q5rrs"),_(n,"class","setting-checks-container svelte-14q5rrs")},m(I,T){F(I,e,T),F(I,l,T),F(I,n,T),f(n,s),f(s,d),f(d,r),f(d,o),f(o,c),f(o,i),f(o,u),f(s,m),f(s,E),f(E,b),f(E,k),f(E,g),a[8](g),f(E,C),f(E,R),f(n,U),f(n,K),f(n,Z),f(n,Q),f(Q,L),f(L,j),f(L,x),f(L,D),f(n,W);for(let P=0;P<N.length;P+=1)N[P]&&N[P].m(n,null);X||(se=[ne(g,"input",a[5]),ne(j,"click",at(a[7]))],X=!0)},p(I,[T]){if(T&16&&G(i,I[4]),T&72){B=le(Object.values(I[3]));let P;for(P=0;P<B.length;P+=1){const J=He(I,B,P);N[P]?N[P].p(J,T):(N[P]=Le(J),N[P].c(),N[P].m(n,null))}for(;P<N.length;P+=1)N[P].d(1);N.length=B.length}},i:Y,o:Y,d(I){I&&(h(e),h(l),h(n)),a[8](null),ke(N,I),X=!1,Ce(se)}}}let bt=!1;function kt(a,e,t){let l,n=Y,s=()=>(n(),n=we(i,C=>t(3,l=C)),i),d,r=Y,o=()=>(r(),r=we(c,C=>t(4,d=C)),c);a.$$.on_destroy.push(()=>n()),a.$$.on_destroy.push(()=>r());let{containerSize:c}=e;o();let{metaData:i}=e;s();let u=null;const m=C=>{De(c,d=C.target.value,d)};function E(C){De(i,l[C.field].checked=!l[C.field].checked,l),i.set(l)}function b(C){const R=C.target.checked;De(i,l=Object.values(l).reduce((H,U)=>(U.checked=R,H[U.field]=U,H),{}),l)}function w(C){be[C?"unshift":"push"](()=>{u=C,t(2,u)})}function k(C,R){C[R].checked=this.checked}const g=(C,R)=>E(C);return a.$$set=C=>{"containerSize"in C&&o(t(0,c=C.containerSize)),"metaData"in C&&s(t(1,i=C.metaData))},[c,i,u,l,d,m,E,b,w,k,g]}class Et extends Se{constructor(e){super(),Ae(this,e,kt,gt,ye,{containerSize:0,metaData:1})}}function Re(a,e,t){const l=a.slice();return l[2]=e[t],l}function qe(a,e,t){const l=a.slice();return l[5]=e[t],l}function Ue(a,e,t){const l=a.slice();return l[2]=e[t],l}function je(a){let e,t=a[1].title.value+"",l;return{c(){e=v("h1"),l=O(t),this.h()},l(n){e=p(n,"H1",{class:!0});var s=y(e);l=z(s,t),s.forEach(h),this.h()},h(){_(e,"class","text-left")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[1].title.value+"")&&G(l,t)},d(n){n&&h(e)}}}function Be(a){let e,t=a[1].description.value+"",l;return{c(){e=v("p"),l=O(t),this.h()},l(n){e=p(n,"P",{class:!0});var s=y(e);l=z(s,t),s.forEach(h),this.h()},h(){_(e,"class","text-large text-left")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[1].description.value+"")&&G(l,t)},d(n){n&&h(e)}}}function Je(a){let e,t,l="Orgs",n,s,d=le(a[1].orgs.value),r=[];for(let o=0;o<d.length;o+=1)r[o]=We(Ue(a,d,o));return{c(){e=v("div"),t=v("p"),t.textContent=l,n=S(),s=v("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=p(o,"DIV",{class:!0,style:!0});var c=y(e);t=p(c,"P",{class:!0,style:!0,"data-svelte-h":!0}),ce(t)!=="svelte-kc9jel"&&(t.textContent=l),n=A(c),s=p(c,"DIV",{});var i=y(s);for(let u=0;u<r.length;u+=1)r[u].l(i);i.forEach(h),c.forEach(h),this.h()},h(){_(t,"class","text-bold"),de(t,"margin-bottom","0px"),_(e,"class","headers svelte-bf4y76"),de(e,"margin-top","10px")},m(o,c){F(o,e,c),f(e,t),f(e,n),f(e,s);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,null)},p(o,c){if(c&2){d=le(o[1].orgs.value);let i;for(i=0;i<d.length;i+=1){const u=Ue(o,d,i);r[i]?r[i].p(u,c):(r[i]=We(u),r[i].c(),r[i].m(s,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=d.length}},d(o){o&&h(e),ke(r,o)}}}function We(a){let e,t=a[2]+"",l;return{c(){e=v("span"),l=O(t),this.h()},l(n){e=p(n,"SPAN",{class:!0});var s=y(e);l=z(s,t),s.forEach(h),this.h()},h(){_(e,"class","view-list svelte-bf4y76")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[2]+"")&&G(l,t)},d(n){n&&h(e)}}}function Ye(a){let e,t,l,n,s=a[1].published_date.checked&&Xe(a),d=a[1].d3fend_version.checked&&Ge(a);return{c(){e=v("div"),s&&s.c(),t=S(),d&&d.c(),l=S(),n=v("hr"),this.h()},l(r){e=p(r,"DIV",{class:!0});var o=y(e);s&&s.l(o),t=A(o),d&&d.l(o),o.forEach(h),l=A(r),n=p(r,"HR",{}),this.h()},h(){_(e,"class","version-date svelte-bf4y76")},m(r,o){F(r,e,o),s&&s.m(e,null),f(e,t),d&&d.m(e,null),F(r,l,o),F(r,n,o)},p(r,o){r[1].published_date.checked?s?s.p(r,o):(s=Xe(r),s.c(),s.m(e,t)):s&&(s.d(1),s=null),r[1].d3fend_version.checked?d?d.p(r,o):(d=Ge(r),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(r){r&&(h(e),h(l),h(n)),s&&s.d(),d&&d.d()}}}function Xe(a){let e,t=lt(a[1].published_date.value)+"",l;return{c(){e=v("p"),l=O(t)},l(n){e=p(n,"P",{});var s=y(e);l=z(s,t),s.forEach(h)},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=lt(n[1].published_date.value)+"")&&G(l,t)},d(n){n&&h(e)}}}function Ge(a){let e,t=a[1].d3fend_version.value+"",l;return{c(){e=v("p"),l=O(t),this.h()},l(n){e=p(n,"P",{style:!0});var s=y(e);l=z(s,t),s.forEach(h),this.h()},h(){de(e,"margin-left","auto")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[1].d3fend_version.value+"")&&G(l,t)},d(n){n&&h(e)}}}function Ke(a){let e,t,l,n,s,d,r=a[1].authors.value.length>1&&Qe(),o=le(a[1].authors.value),c=[];for(let i=0;i<o.length;i+=1)c[i]=Ze(qe(a,o,i));return{c(){e=v("div"),t=v("div"),l=O("Author"),r&&r.c(),n=S(),s=v("p"),d=v("em");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){e=p(i,"DIV",{class:!0});var u=y(e);t=p(u,"DIV",{class:!0});var m=y(t);l=z(m,"Author"),r&&r.l(m),m.forEach(h),n=A(u),s=p(u,"P",{style:!0});var E=y(s);d=p(E,"EM",{class:!0});var b=y(d);for(let w=0;w<c.length;w+=1)c[w].l(b);b.forEach(h),E.forEach(h),u.forEach(h),this.h()},h(){_(t,"class","text-bold"),_(d,"class","font-large"),de(s,"margin-top","0px"),_(e,"class","headers svelte-bf4y76")},m(i,u){F(i,e,u),f(e,t),f(t,l),r&&r.m(t,null),f(e,n),f(e,s),f(s,d);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(d,null)},p(i,u){if(i[1].authors.value.length>1?r||(r=Qe(),r.c(),r.m(t,null)):r&&(r.d(1),r=null),u&2){o=le(i[1].authors.value);let m;for(m=0;m<o.length;m+=1){const E=qe(i,o,m);c[m]?c[m].p(E,u):(c[m]=Ze(E),c[m].c(),c[m].m(d,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=o.length}},d(i){i&&h(e),r&&r.d(),ke(c,i)}}}function Qe(a){let e;return{c(){e=O("s")},l(t){e=z(t,"s")},m(t,l){F(t,e,l)},d(t){t&&h(e)}}}function Ze(a){let e,t=a[5]+"",l;return{c(){e=v("span"),l=O(t),this.h()},l(n){e=p(n,"SPAN",{class:!0});var s=y(e);l=z(s,t),s.forEach(h),this.h()},h(){_(e,"class","view-list svelte-bf4y76")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[5]+"")&&G(l,t)},d(n){n&&h(e)}}}function xe(a){let e,t,l=a[1].references.view+"",n,s,d,r=le(a[1].references.value),o=[];for(let c=0;c<r.length;c+=1)o[c]=et(Re(a,r,c));return{c(){e=v("div"),t=v("b"),n=O(l),s=O(":"),d=S();for(let c=0;c<o.length;c+=1)o[c].c()},l(c){e=p(c,"DIV",{});var i=y(e);t=p(i,"B",{});var u=y(t);n=z(u,l),s=z(u,":"),u.forEach(h),d=A(i);for(let m=0;m<o.length;m+=1)o[m].l(i);i.forEach(h)},m(c,i){F(c,e,i),f(e,t),f(t,n),f(t,s),f(e,d);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null)},p(c,i){if(i&2&&l!==(l=c[1].references.view+"")&&G(n,l),i&2){r=le(c[1].references.value);let u;for(u=0;u<r.length;u+=1){const m=Re(c,r,u);o[u]?o[u].p(m,i):(o[u]=et(m),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=r.length}},d(c){c&&h(e),ke(o,c)}}}function et(a){let e,t,l=a[2]+"",n,s;return{c(){e=v("div"),t=v("a"),n=O(l),this.h()},l(d){e=p(d,"DIV",{class:!0});var r=y(e);t=p(r,"A",{href:!0});var o=y(t);n=z(o,l),o.forEach(h),r.forEach(h),this.h()},h(){_(t,"href",s=a[2]),_(e,"class","refs svelte-bf4y76")},m(d,r){F(d,e,r),f(e,t),f(t,n)},p(d,r){r&2&&l!==(l=d[2]+"")&&G(n,l),r&2&&s!==(s=d[2])&&_(t,"href",s)},d(d){d&&h(e)}}}function tt(a){let e,t=Ve(a[1].article.value)+"",l;return{c(){e=new nt(!1),l=Me(),this.h()},l(n){e=st(n,!1),l=Me(),this.h()},h(){e.a=l},m(n,s){e.m(t,n,s),F(n,l,s)},p(n,s){s&2&&t!==(t=Ve(n[1].article.value)+"")&&e.p(t)},d(n){n&&(h(l),e.d())}}}function Dt(a){let e,t,l,n,s,d,r,o,c=a[1].title.checked&&je(a),i=a[1].description.checked&&Be(a),u=a[1].orgs.checked&&Je(a),m=(a[1].published_date.checked||a[1].d3fend_version.checked)&&Ye(a),E=a[1].authors.checked&&Ke(a),b=a[1].references.checked&&xe(a),w=a[1].article.checked&&tt(a);return{c(){e=v("section"),c&&c.c(),t=S(),i&&i.c(),l=S(),u&&u.c(),n=S(),m&&m.c(),s=S(),E&&E.c(),d=S(),b&&b.c(),r=S(),o=v("div"),w&&w.c(),this.h()},l(k){e=p(k,"SECTION",{class:!0});var g=y(e);c&&c.l(g),t=A(g),i&&i.l(g),l=A(g),u&&u.l(g),n=A(g),m&&m.l(g),s=A(g),E&&E.l(g),d=A(g),b&&b.l(g),r=A(g),o=p(g,"DIV",{});var C=y(o);w&&w.l(C),C.forEach(h),g.forEach(h),this.h()},h(){_(e,"class","content")},m(k,g){F(k,e,g),c&&c.m(e,null),f(e,t),i&&i.m(e,null),f(e,l),u&&u.m(e,null),f(e,n),m&&m.m(e,null),f(e,s),E&&E.m(e,null),f(e,d),b&&b.m(e,null),f(e,r),f(e,o),w&&w.m(o,null)},p(k,[g]){k[1].title.checked?c?c.p(k,g):(c=je(k),c.c(),c.m(e,t)):c&&(c.d(1),c=null),k[1].description.checked?i?i.p(k,g):(i=Be(k),i.c(),i.m(e,l)):i&&(i.d(1),i=null),k[1].orgs.checked?u?u.p(k,g):(u=Je(k),u.c(),u.m(e,n)):u&&(u.d(1),u=null),k[1].published_date.checked||k[1].d3fend_version.checked?m?m.p(k,g):(m=Ye(k),m.c(),m.m(e,s)):m&&(m.d(1),m=null),k[1].authors.checked?E?E.p(k,g):(E=Ke(k),E.c(),E.m(e,d)):E&&(E.d(1),E=null),k[1].references.checked?b?b.p(k,g):(b=xe(k),b.c(),b.m(e,r)):b&&(b.d(1),b=null),k[1].article.checked?w?w.p(k,g):(w=tt(k),w.c(),w.m(o,null)):w&&(w.d(1),w=null)},i:Y,o:Y,d(k){k&&h(e),c&&c.d(),i&&i.d(),u&&u.d(),m&&m.d(),E&&E.d(),b&&b.d(),w&&w.d()}}}function lt(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function wt(a,e,t){let l,n=Y,s=()=>(n(),n=we(d,r=>t(1,l=r)),d);a.$$.on_destroy.push(()=>n());let{metaData:d}=e;return s(),a.$$set=r=>{"metaData"in r&&s(t(0,d=r.metaData))},[d,l]}class yt extends Se{constructor(e){super(),Ae(this,e,wt,Dt,ye,{metaData:0})}}const Ct=({size:a,domain:e},t="<embed-data>",{metadataComp:l,metadata:n})=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(t,null,2)};

  const post_cad = (event) => {
    if (event.data?.call === "FromParent") {
      iframe.contentWindow.postMessage(
        {
          call: "toParent",
          value: user_data,
        },
        event.origin
      );
    }
  };
  <\/script>

  <svelte:window on:message={post_cad} />

  <main>
     <div id="metadata-render">
      ${l==null?void 0:l.innerHTML}
    </div>

    <iframe
      id="iframe"
      bind:this={iframe}
      src="${e}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${a}%);
      -moz-transform: scale(${a}%);
      -o-transform: scale(${a}%);
      -webkit-transform: scale(${a}%);
    }
    #metadata-render {
      margin: auto;
      padding: 2em;
    }
    .view-list:first-child {
      margin-left: 1em;
    }
    .view-list + .view-list::before {
      display: inline-block;
      white-space: pre;
      content: ", ";
    }
    .refs {
      margin-left: 2em;
    }
    .headers {
      text-align: left;
      width: 100%;
      margin-top: 10px;
    }
    .version-date {
      display: flex;
      margin-top: -5px;
      margin-bottom: -10px;
      font-weight: 300;
    }
  </style>
  `,St=({size:a,domain:e},t="<embed-data>",{metadataComp:l,metadata:n})=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(t,null,2)};

      const post_cad = (event) => {
        const iframe = document.getElementById("iframe");

        if (event.data?.call === "FromParent") {
          iframe.contentWindow.postMessage(
            {
              call: "toParent",
              value: user_data,
            },
            event.origin
          );
        }
      };

      window.addEventListener("message", (event) => {

        if (event.origin !== "${e}") return;

        post_cad(event);
      });
    <\/script>

    <style>
      #iframe {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        transform: scale(${a}%);
        -moz-transform: scale(${a}%);
        -o-transform: scale(${a}%);
        -webkit-transform: scale(${a}%);
      }
      #metadata-render {
        margin: auto;
        padding: 2em;
      }
      .view-list:first-child {
        margin-left: 1em;
      }
      .view-list + .view-list::before {
        display: inline-block;
        white-space: pre;
        content: ", ";
      }
      .refs {
        margin-left: 2em;
      }
      .headers {
        text-align: left;
        width: 100%;
        margin-top: 10px;
      }
      .version-date {
        display: flex;
        margin-top: -5px;
        margin-bottom: -10px;
        font-weight: 300;
      }
    </style>
  </head>

  <main>
    <div id="metadata-render">
      ${l==null?void 0:l.innerHTML}
    </div>

    <iframe
      id="iframe"
      src="${e}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>
</html>
`;function At(a){return{c:Y,l:Y,m:Y,p:Y,d:Y}}function It(a){let e,t=a[25]+"",l;return{c(){e=v("pre"),l=O(t),this.h()},l(n){e=p(n,"PRE",{class:!0});var s=y(e);l=z(s,t),s.forEach(h),this.h()},h(){_(e,"class","svelte-tky2v8")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&16&&t!==(t=n[25]+"")&&G(l,t)},d(n){n&&h(e)}}}function Tt(a){let e;return{c(){e=O("...loading")},l(t){e=z(t,"...loading")},m(t,l){F(t,e,l)},p:Y,d(t){t&&h(e)}}}function Nt(a){let e,t,l,n,s='<h1 class="svelte-tky2v8"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-tky2v8">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6>',d,r,o,c,i,u,m,E,b,w,k,g,C,R,H,U,K=a[3].text+"",Z,Q,L,j,x,D,V,W,X,se,B,N,I,T,P,J,te,ee;e=new ut({props:{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."}}),o=new Et({props:{containerSize:a[5],metaData:a[6]}});function ue($){a[18]($)}let ae={inputClassName:"autocomplete-cursor-select",items:Object.values(a[7]),labelFieldName:"name",readonly:!0,onChange:a[17]};a[3]!==void 0&&(ae.selectedItem=a[3]),b=new ht({props:ae}),be.push(()=>dt(b,"selectedItem",ue));let q={ctx:a,current:null,token:null,hasCatch:!1,pending:Tt,then:It,catch:At,value:25};return Oe(C=a[4],q),N=new yt({props:{metaData:a[6]}}),{c(){he(e.$$.fragment),t=S(),l=v("main"),n=v("section"),n.innerHTML=s,d=S(),r=v("code"),he(o.$$.fragment),c=S(),i=v("code"),u=v("h3"),m=O(`Embed Code

      `),E=v("span"),he(b.$$.fragment),k=S(),g=v("div"),q.block.c(),R=S(),H=v("div"),U=v("div"),Z=O(K),Q=S(),L=v("button"),j=O("Download"),D=S(),V=v("button"),W=O("Copy to Clipboard"),se=S(),B=v("div"),he(N.$$.fragment),I=S(),T=v("iframe"),this.h()},l($){me(e.$$.fragment,$),t=A($),l=p($,"MAIN",{style:!0,class:!0});var M=y(l);n=p(M,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),ce(n)!=="svelte-1mht16m"&&(n.innerHTML=s),d=A(M),r=p(M,"CODE",{id:!0,class:!0});var fe=y(r);me(o.$$.fragment,fe),fe.forEach(h),c=A(M),i=p(M,"CODE",{id:!0,class:!0});var ie=y(i);u=p(ie,"H3",{class:!0});var Ee=y(u);m=z(Ee,`Embed Code

      `),E=p(Ee,"SPAN",{id:!0,class:!0});var Ie=y(E);me(b.$$.fragment,Ie),Ie.forEach(h),Ee.forEach(h),k=A(ie),g=p(ie,"DIV",{id:!0,class:!0});var Te=y(g);q.block.l(Te),Te.forEach(h),R=A(ie),H=p(ie,"DIV",{id:!0,class:!0});var re=y(H);U=p(re,"DIV",{});var Ne=y(U);Z=z(Ne,K),Ne.forEach(h),Q=A(re),L=p(re,"BUTTON",{class:!0});var Pe=y(L);j=z(Pe,"Download"),Pe.forEach(h),D=A(re),V=p(re,"BUTTON",{class:!0});var $e=y(V);W=z($e,"Copy to Clipboard"),$e.forEach(h),re.forEach(h),ie.forEach(h),se=A(M),B=p(M,"DIV",{id:!0,class:!0});var Fe=y(B);me(N.$$.fragment,Fe),Fe.forEach(h),I=A(M),T=p(M,"IFRAME",{id:!0,src:!0,title:!0,class:!0}),y(T).forEach(h),M.forEach(h),this.h()},h(){_(n,"id","header"),_(n,"class","svelte-tky2v8"),_(r,"id","embed-settings"),_(r,"class","svelte-tky2v8"),_(E,"id","download-options"),_(E,"class","svelte-tky2v8"),_(u,"class","svelte-tky2v8"),_(g,"id","code-container"),_(g,"class","svelte-tky2v8"),_(L,"class","download-code svelte-tky2v8"),L.disabled=x=a[3].name==="Config Settings",_(V,"class","download-code svelte-tky2v8"),V.disabled=X=a[3].name==="Config Settings",_(H,"id","download-container"),_(H,"class","svelte-tky2v8"),_(i,"id","embed-code"),_(i,"class","config-container svelte-tky2v8"),_(B,"id","metadata-render"),_(B,"class","svelte-tky2v8"),_(T,"id","cad-iframe"),it(T.src,P="/cad-frame/")||_(T,"src",P),_(T,"title","D3FEND Embedded CAD"),_(T,"class","svelte-tky2v8"),de(l,"--container-size",a[1]+"%"),_(l,"class","svelte-tky2v8")},m($,M){_e(e,$,M),F($,t,M),F($,l,M),f(l,n),f(l,d),f(l,r),_e(o,r,null),f(l,c),f(l,i),f(i,u),f(u,m),f(u,E),_e(b,E,null),f(i,k),f(i,g),q.block.m(g,q.anchor=null),q.mount=()=>g,q.anchor=null,f(i,R),f(i,H),f(H,U),f(U,Z),f(H,Q),f(H,L),f(L,j),f(H,D),f(H,V),f(V,W),f(l,se),f(l,B),_e(N,B,null),a[21](B),f(l,I),f(l,T),a[22](T),J=!0,te||(ee=[ne(window,"message",a[8]),ne(L,"click",a[19]),ne(V,"click",a[20])],te=!0)},p($,[M]){a=$;const fe={};!w&&M&8&&(w=!0,fe.selectedItem=a[3],rt(()=>w=!1)),b.$set(fe),q.ctx=a,M&16&&C!==(C=a[4])&&Oe(C,q)||ct(q,a,M),(!J||M&8)&&K!==(K=a[3].text+"")&&G(Z,K),(!J||M&8&&x!==(x=a[3].name==="Config Settings"))&&(L.disabled=x),(!J||M&8&&X!==(X=a[3].name==="Config Settings"))&&(V.disabled=X),(!J||M&2)&&de(l,"--container-size",a[1]+"%")},i($){J||(ve(e.$$.fragment,$),ve(o.$$.fragment,$),ve(b.$$.fragment,$),ve(N.$$.fragment,$),J=!0)},o($){pe(e.$$.fragment,$),pe(o.$$.fragment,$),pe(b.$$.fragment,$),pe(N.$$.fragment,$),J=!1},d($){$&&(h(t),h(l)),ge(e,$),ge(o),ge(b),q.block.d(),q.token=null,q=null,ge(N),a[21](null),a[22](null),te=!1,Ce(ee)}}}function Pt(a,e,t){let l,n,s,d,r,o,c,i;oe(a,_t,D=>t(13,s=D)),oe(a,vt,D=>t(14,d=D)),oe(a,ft,D=>t(16,c=D)),oe(a,pt,D=>t(23,i=D));let u=null,m;const E=ze(90);oe(a,E,D=>t(1,r=D));const b=ze({title:{checked:!1,field:"title",view:"Title",value:i.title},description:{checked:!1,field:"description",view:"Description",value:i.description},authors:{checked:!1,field:"authors",view:"Authors",value:i.authors,tag:"div"},orgs:{checked:!1,field:"orgs",view:"Organizations",value:i.orgs},article:{checked:!1,field:"article",view:"Article",value:i.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:i.d3fend_version},references:{checked:!1,field:"references",view:"References",value:i.references},published_date:{checked:!1,field:"published_date",view:"Date",value:i.published_date}});oe(a,b,D=>t(15,o=D));const w={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:St},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Ct}};let k=w["index.html"];const g=async(D,V,W)=>(await ot(),k.func(D,V,W)),C=D=>{var V;((V=D.data)==null?void 0:V.call)==="FromParent"&&u.contentWindow.postMessage({call:"toParent",value:{nodes:d,edges:s,meta:{settings:{}}}},D.origin)},R=D=>{D&&D.text&&t(3,k=D)},H=async(D,{func:V,download:W})=>{const X=V({size:r,domain:l},{nodes:d,edges:s});mt(X,W)},U=async(D,{func:V})=>{const W=V({size:r,domain:l},{nodes:d,edges:s});try{await navigator.clipboard.writeText(W)}catch(X){console.error("Failed to copy: ",X)}},K=D=>R(D);function Z(D){k=D,t(3,k)}const Q=D=>H(D,k),L=D=>U(D,k);function j(D){be[D?"unshift":"push"](()=>{m=D,t(0,m)})}function x(D){be[D?"unshift":"push"](()=>{u=D,t(2,u)})}return a.$$.update=()=>{a.$$.dirty&65536&&t(12,l=c.url.origin),a.$$.dirty&61443&&t(4,n=g({size:r,domain:l},{nodes:d,edges:s},{metadataComp:m,$metaData:o}))},[m,r,u,k,n,E,b,w,C,R,H,U,l,s,d,o,c,K,Z,Q,L,j,x]}class Jt extends Se{constructor(e){super(),Ae(this,e,Pt,Nt,ye,{})}}export{Jt as component};
