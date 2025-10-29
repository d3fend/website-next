import"../chunks/CWj6FrbW.js";import{p as $,f as b,s as l,a as G,d as t,t as E,b as u,c as ee,r as e,Y as n,al as Y,W as B,g as Q,e as ve,h as le,am as ie,aV as K,$ as me,E as fe}from"../chunks/D6nz4E_Z.js";import{s as S}from"../chunks/CFiX9QRO.js";import{s as se}from"../chunks/BZk0CZ6x.js";import{a as ge}from"../chunks/Bgd6Mq88.js";import{e as pe,r as ne,b as te,a as ue}from"../chunks/pRFNOZ0J.js";import{d as de,e as he}from"../chunks/ZcmWl89r.js";import{b as Z}from"../chunks/Czj3OBts.js";import{p as _e}from"../chunks/kRbiZhqe.js";import{b as be}from"../chunks/NGX5jZLt.js";import{S as De}from"../chunks/B39Bj861.js";import{T as we}from"../chunks/CQCOHzst.js";import{e as q,i as X}from"../chunks/DxKOv0cy.js";import{b as xe}from"../chunks/BaIoAGIq.js";import{p as oe,i as C}from"../chunks/Db7K581Z.js";/* empty css                */import{h as ke}from"../chunks/D7dYmxsK.js";import{m as ye}from"../chunks/CesSW9Du.js";import{s as Ee}from"../chunks/PObTNQlj.js";import{f as _}from"../chunks/38DaDJSb.js";/* empty css                */var Se=b('<article class="setting svelte-1fghvxl"><form class="setting-checks svelte-1fghvxl"><input class="check-box" type="checkbox" tabindex="0"/> <span class="layer-text"> </span></form></article>'),Ce=b('<h3 class="text-center">Settings</h3> <section class="setting-checks-container svelte-1fghvxl"><article><div class="select-name svelte-1fghvxl">Container Scale<span> </span></div> <div class="size-slider svelte-1fghvxl"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article> <br/> <article><form class="setting-checks svelte-1fghvxl"><input class="check-box" type="checkbox" name="toggleAll" tabindex="0"/> <span class="layer-text">Toggle All Metadata</span></form></article> <!></section>',1);function Ae(D,i){$(i,!0);let y=oe(i,"containerSize",15),c=oe(i,"metaData",15),x=Y(null),P=!1;const A=r=>{y(r.target.value)};function I(r,m){r.stopPropagation(),c(Object.entries(c()).reduce((g,[d,p])=>(m.field===d?g[d]={...p,checked:r.target.checked}:g[d]=p,g),{}))}function k(r){r.stopPropagation();const m=r.target.checked;c(Object.values(c()).reduce((g,d)=>(d.checked=m,g[d.field]=d,g),{}))}var R=Ce(),O=l(G(R),2),z=t(O),T=t(z),U=l(t(T)),W=t(U);e(U),e(T);var L=l(T,2),N=l(t(L),2);N.__input=A,Z(N,r=>B(x,r),()=>n(x)),Q(2),e(L),e(z);var j=l(z,4),M=t(j),a=t(M);ne(a),pe(a,P),a.__click=k,Q(2),e(M),e(j);var s=l(j,2);q(s,17,()=>Object.values(c()),X,(r,m)=>{var g=Se(),d=t(g),p=t(d);ne(p),p.__click=w=>I(w,n(m));var v=l(p,2),f=t(v,!0);e(v),e(d),e(g),E(()=>{te(p,"name",n(m).field),S(f,n(m).view)}),xe(p,()=>c()[n(m).field].checked,w=>c(c()[n(m).field].checked=w,!0)),u(r,g)}),e(O),E(()=>S(W,`(${y()??""})`)),u(D,R),ee()}de(["input","click"]);var je=b('<h1 class="text-left"> </h1>'),Fe=b('<p class="text-large text-left"> </p>'),Te=b('<span class="view-list svelte-y0do39"> </span>'),Ne=b('<div class="headers svelte-y0do39" style="margin-top: 10px"><p class="text-bold" style="margin-bottom: 0px">Orgs</p> <div></div></div>'),Me=b("<p> </p>"),Pe=b('<p style="margin-left:auto"> </p>'),Oe=b('<div class="version-date svelte-y0do39"><!> <!></div> <hr/>',1),ze=b('<span class="view-list svelte-y0do39"> </span>'),Le=b('<div class="headers svelte-y0do39"><div class="text-bold">Author<!></div> <p style="margin-top: 0px"><em class="font-large"></em></p></div>'),He=b('<div class="refs svelte-y0do39"><a> </a></div>'),Ie=b("<div><b> </b> <!></div>"),Re=b('<section class="content"><!> <!> <!> <!> <!> <!> <div><!></div></section>');function Ue(D,i){$(i,!0);function y(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}var c=Re(),x=t(c);{var P=a=>{var s=je(),r=t(s,!0);e(s),E(()=>S(r,i.metaData.title.value)),u(a,s)};C(x,a=>{i.metaData.title.checked&&a(P)})}var A=l(x,2);{var I=a=>{var s=Fe(),r=t(s,!0);e(s),E(()=>S(r,i.metaData.description.value)),u(a,s)};C(A,a=>{i.metaData.description.checked&&a(I)})}var k=l(A,2);{var R=a=>{var s=Ne(),r=l(t(s),2);q(r,21,()=>i.metaData.orgs.value,X,(m,g)=>{var d=Te(),p=t(d,!0);e(d),E(()=>S(p,n(g))),u(m,d)}),e(r),e(s),u(a,s)};C(k,a=>{i.metaData.orgs.checked&&a(R)})}var O=l(k,2);{var z=a=>{var s=Oe(),r=G(s),m=t(r);{var g=v=>{var f=Me(),w=t(f,!0);e(f),E(H=>S(w,H),[()=>y(i.metaData.published_date.value)]),u(v,f)};C(m,v=>{i.metaData.published_date.checked&&v(g)})}var d=l(m,2);{var p=v=>{var f=Pe(),w=t(f,!0);e(f),E(()=>S(w,i.metaData.d3fend_version.value)),u(v,f)};C(d,v=>{i.metaData.d3fend_version.checked&&v(p)})}e(r),Q(2),u(a,s)};C(O,a=>{(i.metaData.published_date.checked||i.metaData.d3fend_version.checked)&&a(z)})}var T=l(O,2);{var U=a=>{var s=Le(),r=t(s),m=l(t(r));{var g=v=>{var f=le("s");u(v,f)};C(m,v=>{i.metaData.authors.value.length>1&&v(g)})}e(r);var d=l(r,2),p=t(d);q(p,21,()=>i.metaData.authors.value,X,(v,f)=>{var w=ze(),H=t(w,!0);e(w),E(()=>S(H,n(f))),u(v,w)}),e(p),e(d),e(s),u(a,s)};C(T,a=>{i.metaData.authors.checked&&a(U)})}var W=l(T,2);{var L=a=>{var s=Ie(),r=t(s),m=t(r);e(r);var g=l(r,2);q(g,17,()=>i.metaData.references.value,X,(d,p)=>{var v=He(),f=t(v),w=t(f,!0);e(f),e(v),E(()=>{te(f,"href",n(p)),S(w,n(p))}),u(d,v)}),e(s),E(()=>S(m,`${i.metaData.references.view??""}:`)),u(a,s)};C(W,a=>{i.metaData.references.checked&&a(L)})}var N=l(W,2),j=t(N);{var M=a=>{var s=ve(),r=G(s);ke(r,()=>ye(i.metaData.article.value)),u(a,s)};C(j,a=>{i.metaData.article.checked&&a(M)})}e(N),e(c),u(D,c),ee()}const We=({size:D,domain:i},y="<embed-data>",{metadataComp:c,metadata:x})=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(y,null,2)};

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
      ${c==null?void 0:c.innerHTML}
    </div>

    <iframe
      id="iframe"
      bind:this={iframe}
      src="${i}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${D}%);
      -moz-transform: scale(${D}%);
      -o-transform: scale(${D}%);
      -webkit-transform: scale(${D}%);
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
  `,Je=({size:D,domain:i},y="<embed-data>",{metadataComp:c,metadata:x})=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(y,null,2)};

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

        if (event.origin !== "${i}") return;

        post_cad(event);
      });
    <\/script>

    <style>
      #iframe {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        transform: scale(${D}%);
        -moz-transform: scale(${D}%);
        -o-transform: scale(${D}%);
        -webkit-transform: scale(${D}%);
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
      ${c==null?void 0:c.innerHTML}
    </div>

    <iframe
      id="iframe"
      src="${i}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>
</html>
`;var Be=b('<pre class="svelte-1r5lj7g"> </pre>'),Ve=b('<!> <main class="svelte-1r5lj7g"><section id="header" class="svelte-1r5lj7g"><h1 class="svelte-1r5lj7g"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-1r5lj7g">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6></section> <code id="embed-settings" class="svelte-1r5lj7g"><!></code> <code id="embed-code" class="config-container svelte-1r5lj7g"><h3 class="svelte-1r5lj7g">Embed Code <span id="download-options" class="svelte-1r5lj7g"><!></span></h3> <div id="code-container" class="svelte-1r5lj7g"><!></div> <div id="download-container" class="svelte-1r5lj7g"><div> </div> <button class="download-code svelte-1r5lj7g">Download</button> <button class="download-code svelte-1r5lj7g">Copy to Clipboard</button></div></code> <div id="metadata-render" class="svelte-1r5lj7g"><!></div> <iframe id="cad-iframe" title="D3FEND Embedded CAD" class="svelte-1r5lj7g"></iframe></main>',1);function ft(D,i){$(i,!0);let y,c,x=Y(90);const P=K(()=>_e.url.origin);let A=Y(ie({title:{checked:!1,field:"title",view:"Title",value:_.meta.title},description:{checked:!1,field:"description",view:"Description",value:_.meta.description},authors:{checked:!1,field:"authors",view:"Authors",value:_.meta.authors},orgs:{checked:!1,field:"orgs",view:"Organizations",value:_.meta.orgs},article:{checked:!1,field:"article",view:"Article",value:_.meta.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:_.meta.d3fend_version},references:{checked:!1,field:"references",view:"References",value:_.meta.references},published_date:{checked:!1,field:"published_date",view:"Date",value:_.meta.published_date}}));const I={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Je},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:We}};let k=Y(ie(I["index.html"]));const R=async(o,h,F)=>(await fe(),n(k).func(o,h,F)),O=o=>{var h;((h=o.data)==null?void 0:h.call)==="FromParent"&&y.contentWindow.postMessage({call:"toParent",value:{nodes:se(_.nodes),edges:se(_.edges),meta:{settings:{}}}},o.origin)},z=o=>{o&&o.text&&B(k,o,!0)},T=async(o,{func:h,download:F})=>{const J=h({size:n(x),domain:n(P)},{nodes:_.nodes,edges:_.nodes});Ee(J,F)},U=async(o,{func:h})=>{const F=h({size:n(x),domain:n(P)},{nodes:_.nodes,edges:_.nodes});try{await navigator.clipboard.writeText(F)}catch(J){console.error("Failed to copy: ",J)}},W=K(async()=>await R({size:n(x),domain:n(P)},{nodes:_.nodes,edges:_.nodes},{metadataComp:c,metaData:n(A)}));var L=Ve();he("message",me,O);var N=G(L);we(N,{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."});var j=l(N,2),M=l(t(j),2),a=t(M);Ae(a,{get containerSize(){return n(x)},set containerSize(o){B(x,o,!0)},get metaData(){return n(A)},set metaData(o){B(A,o,!0)}}),e(M);var s=l(M,2),r=t(s),m=l(t(r)),g=t(m);{let o=K(()=>Object.values(I));De(g,{inputClassName:"autocomplete-cursor-select",get items(){return n(o)},labelFieldName:"name",readonly:!0,onChange:h=>z(h),get selectedItem(){return n(k)},set selectedItem(h){B(k,h,!0)}})}e(m),e(r);var d=l(r,2),p=t(d);ge(p,()=>n(W),o=>{var h=le("...loading");u(o,h)},(o,h)=>{var F=Be(),J=t(F,!0);e(F),E(()=>S(J,n(h))),u(o,F)}),e(d);var v=l(d,2),f=t(v),w=t(f,!0);e(f);var H=l(f,2);H.__click=o=>T(o,n(k));var ae=l(H,2);ae.__click=o=>U(o,n(k)),e(v),e(s);var V=l(s,2),ce=t(V);Ue(ce,{get metaData(){return n(A)}}),e(V),Z(V,o=>c=o,()=>c);var re=l(V,2);Z(re,o=>y=o,()=>y),e(j),E(()=>{ue(j,`--container-size:${n(x)??""}%;`),S(w,n(k).text),H.disabled=n(k).name==="Config Settings",ae.disabled=n(k).name==="Config Settings",te(re,"src",`${be}/cad-frame/`)}),u(D,L),ee()}de(["click"]);export{ft as component};
