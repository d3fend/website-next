import{s as Ct,J as Ae,e as l,b as g,t as me,d as o,v as ee,j as _,f,i as r,h as fe,r as n,k as Se,l as e,P as oe,a4 as Ve,V as st,m as lt,x as Et,o as ot,O as ye,M as Dt,D as bt,E as It}from"../chunks/scheduler.xR-uXgLO.js";import{S as wt,i as yt,f as it,c as Te,b as $e,m as xe,t as Oe,a as Le,d as Fe}from"../chunks/index.BpaDVXPB.js";import{p as Mt}from"../chunks/stores.Ckz1qvBG.js";import{T as Nt}from"../chunks/Title.lz_tL8Gl.js";import{b as Pt}from"../chunks/entry.08ps5sKA.js";import{S as rt}from"../chunks/SimpleAutocomplete.De_s21ke.js";import{l as ue,M as Ke}from"../chunks/layers.DpT2z-xz.js";import{t as Tt}from"../chunks/updateDefendTree.YJzIXIzN.js";/* empty css                             */import{L as $t,s as xt}from"../chunks/dialog.BCRB1U6H.js";function Ot(a){var pt;let h,p="Settings",s,u,v,O="Profile",y,d,U,b,D,X="Matrix Overlay",L,E,J,j,m,T,N,I,B,S,t,k="Matrix Readonly",$,F,P,R,ie,_e,x,ke="Show Side Capabilities",pe,te,M,V,he,G,z,K="Mapping Mode",ve,re,ne,q,i,C,W,ce="View Technique Comments",be,de,Y,H,Q,De,ae,ze="Show Legend",Ie,ge,Ce,Xe,Ee,Ye,Re=(a[3].containerSize*100).toFixed(0)+"",qe,Qe,Ze,se,Me,ct="60",et,Z,tt,Ne,dt="100",le,nt,ut;function St(c){a[10](c)}let mt={inputClassName:"autocomplete-cursor-select",items:(pt=a[3])==null?void 0:pt.profiles,readonly:!0,labelFieldName:"name",onChange:a[9]};a[2]!==void 0&&(mt.selectedItem=a[2]),d=new rt({props:mt}),Ae.push(()=>it(d,"selectedItem",St));function kt(c){a[12](c)}let ft={inputClassName:"autocomplete-cursor-select",items:Object.values(a[4]),labelFieldName:"name",readonly:!0,onChange:a[11]};return a[1]!==void 0&&(ft.selectedItem=a[1]),E=new rt({props:ft}),Ae.push(()=>it(E,"selectedItem",kt)),{c(){h=l("h3"),h.textContent=p,s=g(),u=l("article"),v=l("div"),v.textContent=O,y=g(),Te(d.$$.fragment),b=g(),D=l("div"),D.textContent=X,L=g(),Te(E.$$.fragment),j=g(),m=l("section"),T=l("article"),N=l("form"),I=l("input"),S=g(),t=l("span"),t.textContent=k,$=g(),F=l("article"),P=l("form"),R=l("input"),_e=g(),x=l("span"),x.textContent=ke,pe=g(),te=l("article"),M=l("form"),V=l("input"),G=g(),z=l("span"),z.textContent=K,ve=g(),re=l("article"),ne=l("form"),q=l("input"),C=g(),W=l("span"),W.textContent=ce,be=g(),de=l("article"),Y=l("form"),H=l("input"),De=g(),ae=l("span"),ae.textContent=ze,Ie=g(),ge=l("article"),Ce=l("div"),Xe=me("Container Scale"),Ee=l("span"),Ye=me("("),qe=me(Re),Qe=me(")"),Ze=g(),se=l("div"),Me=l("span"),Me.textContent=ct,et=g(),Z=l("input"),tt=g(),Ne=l("span"),Ne.textContent=dt,this.h()},l(c){h=o(c,"H3",{class:!0,"data-svelte-h":!0}),ee(h)!=="svelte-ihiao5"&&(h.textContent=p),s=_(c),u=o(c,"ARTICLE",{class:!0});var w=f(u);v=o(w,"DIV",{class:!0,"data-svelte-h":!0}),ee(v)!=="svelte-nczzpi"&&(v.textContent=O),y=_(w),$e(d.$$.fragment,w),b=_(w),D=o(w,"DIV",{class:!0,"data-svelte-h":!0}),ee(D)!=="svelte-czypmm"&&(D.textContent=X),L=_(w),$e(E.$$.fragment,w),w.forEach(r),j=_(c),m=o(c,"SECTION",{class:!0});var A=f(m);T=o(A,"ARTICLE",{class:!0});var Ue=f(T);N=o(Ue,"FORM",{class:!0});var we=f(N);I=o(we,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),S=_(we),t=o(we,"SPAN",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-1saz4fh"&&(t.textContent=k),we.forEach(r),Ue.forEach(r),$=_(A),F=o(A,"ARTICLE",{class:!0});var ht=f(F);P=o(ht,"FORM",{class:!0});var We=f(P);R=o(We,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),_e=_(We),x=o(We,"SPAN",{class:!0,"data-svelte-h":!0}),ee(x)!=="svelte-lt3qpu"&&(x.textContent=ke),We.forEach(r),ht.forEach(r),pe=_(A),te=o(A,"ARTICLE",{class:!0});var gt=f(te);M=o(gt,"FORM",{class:!0});var He=f(M);V=o(He,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),G=_(He),z=o(He,"SPAN",{class:!0,"data-svelte-h":!0}),ee(z)!=="svelte-kuzdv"&&(z.textContent=K),He.forEach(r),gt.forEach(r),ve=_(A),re=o(A,"ARTICLE",{class:!0});var _t=f(re);ne=o(_t,"FORM",{class:!0});var Je=f(ne);q=o(Je,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),C=_(Je),W=o(Je,"SPAN",{class:!0,"data-svelte-h":!0}),ee(W)!=="svelte-nejzkz"&&(W.textContent=ce),Je.forEach(r),_t.forEach(r),be=_(A),de=o(A,"ARTICLE",{class:!0});var vt=f(de);Y=o(vt,"FORM",{class:!0});var je=f(Y);H=o(je,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),De=_(je),ae=o(je,"SPAN",{class:!0,"data-svelte-h":!0}),ee(ae)!=="svelte-1kzsxpu"&&(ae.textContent=ze),je.forEach(r),vt.forEach(r),Ie=_(A),ge=o(A,"ARTICLE",{class:!0});var Be=f(ge);Ce=o(Be,"DIV",{class:!0});var at=f(Ce);Xe=fe(at,"Container Scale"),Ee=o(at,"SPAN",{});var Ge=f(Ee);Ye=fe(Ge,"("),qe=fe(Ge,Re),Qe=fe(Ge,")"),Ge.forEach(r),at.forEach(r),Ze=_(Be),se=o(Be,"DIV",{class:!0});var Pe=f(se);Me=o(Pe,"SPAN",{"data-svelte-h":!0}),ee(Me)!=="svelte-nt3n7g"&&(Me.textContent=ct),et=_(Pe),Z=o(Pe,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),tt=_(Pe),Ne=o(Pe,"SPAN",{"data-svelte-h":!0}),ee(Ne)!=="svelte-rbuf0z"&&(Ne.textContent=dt),Pe.forEach(r),Be.forEach(r),A.forEach(r),this.h()},h(){n(h,"class","text-center"),n(v,"class","select-name svelte-1d9uoe9"),n(D,"class","select-name svelte-1d9uoe9"),n(u,"class","select-setting svelte-1d9uoe9"),n(I,"class","check-box"),n(I,"type","checkbox"),n(I,"name","readonly"),I.checked=B=a[3].isReadonly,n(I,"tabindex","0"),n(t,"class","layer-text"),n(N,"class","svelte-1d9uoe9"),n(T,"class","setting"),n(R,"class","check-box"),n(R,"type","checkbox"),n(R,"name","drawer open"),R.checked=ie=a[3].isDrawerOpen,n(R,"tabindex","0"),n(x,"class","layer-text"),n(P,"class","svelte-1d9uoe9"),n(F,"class","setting"),n(V,"class","check-box"),n(V,"type","checkbox"),n(V,"name","Mapping Mode"),V.checked=he=a[3].associationMode,n(V,"tabindex","0"),n(z,"class","layer-text"),n(M,"class","svelte-1d9uoe9"),n(te,"class","setting"),n(q,"class","check-box"),n(q,"type","checkbox"),n(q,"name","show legend"),q.checked=i=a[3].matrixCommentMode,n(q,"tabindex","0"),n(W,"class","layer-text"),n(ne,"class","svelte-1d9uoe9"),n(re,"class","setting"),n(H,"class","check-box"),n(H,"type","checkbox"),n(H,"name","show legend"),H.checked=Q=a[3].showLegend,n(H,"tabindex","0"),n(ae,"class","layer-text"),n(Y,"class","svelte-1d9uoe9"),n(de,"class","setting"),n(Ce,"class","select-name svelte-1d9uoe9"),n(Z,"type","range"),n(Z,"min","60"),n(Z,"max","99"),Z.value="80",n(Z,"class","slider"),n(Z,"id","myRange"),n(se,"class","size-slider svelte-1d9uoe9"),n(ge,"class","setting"),n(m,"class","setting-checks-container svelte-1d9uoe9")},m(c,w){Se(c,h,w),Se(c,s,w),Se(c,u,w),e(u,v),e(u,y),xe(d,u,null),e(u,b),e(u,D),e(u,L),xe(E,u,null),Se(c,j,w),Se(c,m,w),e(m,T),e(T,N),e(N,I),e(N,S),e(N,t),e(m,$),e(m,F),e(F,P),e(P,R),e(P,_e),e(P,x),e(m,pe),e(m,te),e(te,M),e(M,V),e(M,G),e(M,z),e(m,ve),e(m,re),e(re,ne),e(ne,q),e(ne,C),e(ne,W),e(m,be),e(m,de),e(de,Y),e(Y,H),e(Y,De),e(Y,ae),e(m,Ie),e(m,ge),e(ge,Ce),e(Ce,Xe),e(Ce,Ee),e(Ee,Ye),e(Ee,qe),e(Ee,Qe),e(ge,Ze),e(ge,se),e(se,Me),e(se,et),e(se,Z),a[18](Z),e(se,tt),e(se,Ne),le=!0,nt||(ut=[oe(I,"click",Ve(a[13])),oe(R,"click",Ve(a[14])),oe(V,"click",Ve(a[15])),oe(q,"click",Ve(a[16])),oe(H,"click",Ve(a[17])),oe(Z,"input",a[8])],nt=!0)},p(c,[w]){var we;const A={};w&8&&(A.items=(we=c[3])==null?void 0:we.profiles),!U&&w&4&&(U=!0,A.selectedItem=c[2],st(()=>U=!1)),d.$set(A);const Ue={};!J&&w&2&&(J=!0,Ue.selectedItem=c[1],st(()=>J=!1)),E.$set(Ue),(!le||w&8&&B!==(B=c[3].isReadonly))&&(I.checked=B),(!le||w&8&&ie!==(ie=c[3].isDrawerOpen))&&(R.checked=ie),(!le||w&8&&he!==(he=c[3].associationMode))&&(V.checked=he),(!le||w&8&&i!==(i=c[3].matrixCommentMode))&&(q.checked=i),(!le||w&8&&Q!==(Q=c[3].showLegend))&&(H.checked=Q),(!le||w&8)&&Re!==(Re=(c[3].containerSize*100).toFixed(0)+"")&&lt(qe,Re)},i(c){le||(Oe(d.$$.fragment,c),Oe(E.$$.fragment,c),le=!0)},o(c){Le(d.$$.fragment,c),Le(E.$$.fragment,c),le=!1},d(c){c&&(r(h),r(s),r(u),r(j),r(m)),Fe(d),Fe(E),a[18](null),nt=!1,Et(ut)}}}function Lt(a,h,p){var S;let s;ot(a,ue,t=>p(3,s=t));let u=null;const v={[Ke.rootColor]:{name:"multiColor",showLegend:!0},[Ke.childrenMultiColor]:{name:"childrenMultiColor",showLegend:!1},[Ke.heatMap]:{name:"heatMap",showLegend:!1},[Ke["ATT&CK"]]:{name:"ATT&CK",showLegend:!1}};let O=v[s==null?void 0:s.techniqueMappingMode]||null,y=((S=s==null?void 0:s.profiles)==null?void 0:S[s==null?void 0:s.selectedProfile])||null;const d=t=>{ye(ue,s[t]=!s[t],s)},U=t=>{var k;if(t){const $=s.profiles.findIndex(({id:F})=>F===t.id);ye(ue,s.selectedProfile=$,s),p(2,y=((k=s==null?void 0:s.profiles)==null?void 0:k[$])||null),Tt.reset()}else ye(ue,s.selectedProfile=null,s),p(2,y=t)},b=t=>{if(typeof t=="string")p(1,O=t);else if(t&&t.name){const{name:k="none",showLegend:$}=t;p(1,O=t),ye(ue,s.techniqueMappingMode=k,s),ye(ue,s.showLegend=$,s)}},D=t=>{ye(ue,s.containerSize=t.target.value/100,s)},X=t=>U(t);function L(t){y=t,p(2,y)}const E=t=>b(t);function J(t){O=t,p(1,O)}const j=()=>d("isReadonly"),m=()=>d("isDrawerOpen"),T=()=>d("associationMode"),N=()=>d("matrixCommentMode"),I=()=>d("showLegend");function B(t){Ae[t?"unshift":"push"](()=>{u=t,p(0,u)})}return[u,O,y,s,v,d,U,b,D,X,L,E,J,j,m,T,N,I,B]}class Ft extends wt{constructor(h){super(),yt(this,h,Lt,Ot,Ct,{})}}const At=({size:a,domain:h},p="<embed-data>")=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(p,null,2)};

  const post_layers = (event) => {
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

  <svelte:window on:message={post_layers} />

  <main>
    <iframe
      id="iframe"
      bind:this={iframe}
      src="${h}/profile/"
      title="D3FEND Embedded" />
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${a});
      -moz-transform: scale(${a});
      -o-transform: scale(${a});
      -webkit-transform: scale(${a});
    }
  </style>
  `,zt=({size:a,domain:h},p="<embed-data>")=>`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>D3FEND EMBEDDED</title>

  <script>
    const user_data = ${JSON.stringify(p,null,2)};

    const post_layers = (event) => {
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

      if (event.origin !== "${h}") return;

      post_layers(event);
    });
  <\/script>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${a});
      -moz-transform: scale(${a});
      -o-transform: scale(${a});
      -webkit-transform: scale(${a});
    }
  </style>
</head>

<main>
  <iframe
          id="iframe"
          src="${h}/profile/"
          title="D3FEND Embedded" />
</main>

</html>
`;function Rt(a){let h,p,s,u,v=`<h1 class="svelte-a38n6n"><span class="fancy-font">D3FEND</span> Embeddable Widget</h1> <h6 class="svelte-a38n6n">Use the D3FEND Embeddable Widget to embed an interactive D3FEND Profile in
      another webpage.</h6>`,O,y,d,U,b,D,X,L,E,J,j,m,T,N=a[3].func({size:a[0].containerSize,domain:a[4],data:a[0]})+"",I,B,S,t,k=a[3].text+"",$,F,P,R,ie,_e,x,ke,pe,te,M,V,he,G,z,K,ve,re;h=new Nt({props:{title:"Embedded D3FEND Matrix",og_title:"MITRE Embedded D3FEND Layers",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND Capability Layers Analysis."}}),d=new Ft({});function ne(i){a[13](i)}let q={inputClassName:"autocomplete-cursor-select",items:Object.values(a[5]),labelFieldName:"name",readonly:!0,onChange:a[12]};return a[3]!==void 0&&(q.selectedItem=a[3]),E=new rt({props:q}),Ae.push(()=>it(E,"selectedItem",ne)),z=new $t({}),{c(){Te(h.$$.fragment),p=g(),s=l("main"),u=l("section"),u.innerHTML=v,O=g(),y=l("code"),Te(d.$$.fragment),U=g(),b=l("code"),D=l("h3"),X=me(`Embed Code

      `),L=l("span"),Te(E.$$.fragment),j=g(),m=l("div"),T=l("pre"),I=me(N),B=g(),S=l("div"),t=l("div"),$=me(k),F=g(),P=l("button"),R=me("Download"),_e=g(),x=l("button"),ke=me("Copy to Clipboard"),te=g(),M=l("iframe"),he=g(),G=l("dialog"),Te(z.$$.fragment),this.h()},l(i){$e(h.$$.fragment,i),p=_(i),s=o(i,"MAIN",{style:!0,class:!0});var C=f(s);u=o(C,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),ee(u)!=="svelte-1maub7"&&(u.innerHTML=v),O=_(C),y=o(C,"CODE",{id:!0,class:!0});var W=f(y);$e(d.$$.fragment,W),W.forEach(r),U=_(C),b=o(C,"CODE",{id:!0,class:!0});var ce=f(b);D=o(ce,"H3",{class:!0});var be=f(D);X=fe(be,`Embed Code

      `),L=o(be,"SPAN",{id:!0,class:!0});var de=f(L);$e(E.$$.fragment,de),de.forEach(r),be.forEach(r),j=_(ce),m=o(ce,"DIV",{id:!0,class:!0});var Y=f(m);T=o(Y,"PRE",{class:!0});var H=f(T);I=fe(H,N),H.forEach(r),Y.forEach(r),B=_(ce),S=o(ce,"DIV",{id:!0,class:!0});var Q=f(S);t=o(Q,"DIV",{});var De=f(t);$=fe(De,k),De.forEach(r),F=_(Q),P=o(Q,"BUTTON",{class:!0});var ae=f(P);R=fe(ae,"Download"),ae.forEach(r),_e=_(Q),x=o(Q,"BUTTON",{class:!0});var ze=f(x);ke=fe(ze,"Copy to Clipboard"),ze.forEach(r),Q.forEach(r),ce.forEach(r),te=_(C),M=o(C,"IFRAME",{id:!0,src:!0,title:!0,class:!0}),f(M).forEach(r),he=_(C),G=o(C,"DIALOG",{class:!0});var Ie=f(G);$e(z.$$.fragment,Ie),Ie.forEach(r),C.forEach(r),this.h()},h(){n(u,"id","header"),n(u,"class","svelte-a38n6n"),n(y,"id","embed-settings"),n(y,"class","svelte-a38n6n"),n(L,"id","download-options"),n(L,"class","svelte-a38n6n"),n(D,"class","svelte-a38n6n"),n(T,"class","svelte-a38n6n"),n(m,"id","code-container"),n(m,"class","svelte-a38n6n"),n(P,"class","download-code svelte-a38n6n"),P.disabled=ie=a[3].name==="Config Settings",n(x,"class","download-code svelte-a38n6n"),x.disabled=pe=a[3].name==="Config Settings",n(S,"id","download-container"),n(S,"class","svelte-a38n6n"),n(b,"id","embed-code"),n(b,"class","config-container svelte-a38n6n"),n(M,"id","layers-iframe"),Dt(M.src,V="/profile/")||n(M,"src",V),n(M,"title","D3FEND Embedded"),n(M,"class","svelte-a38n6n"),n(G,"class","iframe-dialog"),bt(s,"--container-size",a[0].containerSize),n(s,"class","svelte-a38n6n")},m(i,C){xe(h,i,C),Se(i,p,C),Se(i,s,C),e(s,u),e(s,O),e(s,y),xe(d,y,null),e(s,U),e(s,b),e(b,D),e(D,X),e(D,L),xe(E,L,null),e(b,j),e(b,m),e(m,T),e(T,I),e(b,B),e(b,S),e(S,t),e(t,$),e(S,F),e(S,P),e(P,R),e(S,_e),e(S,x),e(x,ke),e(s,te),e(s,M),a[16](M),e(s,he),e(s,G),xe(z,G,null),a[17](G),K=!0,ve||(re=[oe(window,"message",a[6]),oe(P,"click",a[14]),oe(x,"click",a[15]),oe(G,"close",a[18])],ve=!0)},p(i,[C]){const W={};!J&&C&8&&(J=!0,W.selectedItem=i[3],st(()=>J=!1)),E.$set(W),(!K||C&25)&&N!==(N=i[3].func({size:i[0].containerSize,domain:i[4],data:i[0]})+"")&&lt(I,N),(!K||C&8)&&k!==(k=i[3].text+"")&&lt($,k),(!K||C&8&&ie!==(ie=i[3].name==="Config Settings"))&&(P.disabled=ie),(!K||C&8&&pe!==(pe=i[3].name==="Config Settings"))&&(x.disabled=pe),(!K||C&1)&&bt(s,"--container-size",i[0].containerSize)},i(i){K||(Oe(h.$$.fragment,i),Oe(d.$$.fragment,i),Oe(E.$$.fragment,i),Oe(z.$$.fragment,i),K=!0)},o(i){Le(h.$$.fragment,i),Le(d.$$.fragment,i),Le(E.$$.fragment,i),Le(z.$$.fragment,i),K=!1},d(i){i&&(r(p),r(s)),Fe(h,i),Fe(d),Fe(E),a[16](null),Fe(z),a[17](null),ve=!1,Et(re)}}}function Ut(a,h,p){let s,u,v,O;ot(a,ue,t=>p(0,v=t)),ot(a,Mt,t=>p(11,O=t));let y=null,d=null;const U={"Config Settings":{name:"Config Settings",text:"Profile Config Settings",func:()=>u},"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:zt},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:At},"Profile data":{name:"Profile data",text:"Export Profile Data",func:()=>JSON.stringify(v,null,2).trim()}};let b=U["Config Settings"];It(()=>{v.localStorageWarning&&d.showModal()}),Pt(()=>{ye(ue,v.isReadonly=!1,v)});const D=t=>{var k;((k=t.data)==null?void 0:k.call)==="FromParent"&&y.contentWindow.postMessage({call:"toParent",value:v},t.origin)},X=t=>{t&&t.text&&p(3,b=t)},L=async(t,{func:k,download:$})=>{const F=k({size:v.containerSize,domain:s},v);xt(F,$)},E=async(t,{func:k})=>{const $=k({size:v.containerSize,domain:s},v);try{await navigator.clipboard.writeText($)}catch(F){console.error("Failed to copy: ",F)}},J=t=>{t.close()},j=t=>X(t);function m(t){b=t,p(3,b)}const T=t=>L(t,b),N=t=>E(t,b);function I(t){Ae[t?"unshift":"push"](()=>{y=t,p(1,y)})}function B(t){Ae[t?"unshift":"push"](()=>{d=t,p(2,d)})}const S=()=>J(d);return a.$$.update=()=>{a.$$.dirty&2048&&p(4,s=O.url.origin),a.$$.dirty&1&&(u=JSON.stringify(v,["isReadonly","isDrawerOpen","showLegend","techniqueMappingMode","selectedProfile","matrixSize","containerSize"],2).trim())},[v,y,d,b,s,U,D,X,L,E,J,O,j,m,T,N,I,B,S]}class Yt extends wt{constructor(h){super(),yt(this,h,Ut,Rt,Ct,{})}}export{Yt as component};
