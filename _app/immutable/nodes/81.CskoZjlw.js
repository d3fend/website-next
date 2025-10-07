import"../chunks/CWj6FrbW.js";import{p as $,f as w,s as o,a as G,d as i,t as y,b as g,c as ee,r as t,X as n,ap as V,V as q,g as Q,e as ve,h as le,aq as ie,aU as K,$ as me,C as fe}from"../chunks/DOkXS4i_.js";import{s as E}from"../chunks/C8wr6S_b.js";import{s as se}from"../chunks/znZx2Bd9.js";import{a as ge}from"../chunks/C7KQO4et.js";import{e as pe,r as ne,b as te,a as ue}from"../chunks/DODyupNj.js";import{d as de,e as _e}from"../chunks/C2TOSY0c.js";import{b as Z}from"../chunks/DZEYEzXt.js";import{p as he}from"../chunks/psTLyq5u.js";import{b as be}from"../chunks/DpS3c_AD.js";import{S as De}from"../chunks/DQKDZTPg.js";import{T as we}from"../chunks/Xds3KfXC.js";import{e as X,i as Y}from"../chunks/Cf4ent4e.js";import{b as xe}from"../chunks/BkB0nWpE.js";import{p as oe}from"../chunks/DO9cvD6_.js";/* empty css                */import{i as C}from"../chunks/BqfZpZLV.js";import{h as ke}from"../chunks/DdS_yXyK.js";import{m as ye}from"../chunks/CesSW9Du.js";import{s as Ee}from"../chunks/PObTNQlj.js";import{f as D}from"../chunks/Dbr8d8va.js";/* empty css                */const Se=(l,e)=>{e(l.target.value)};function Ce(l,e){l.stopPropagation();const m=l.target.checked;e(Object.values(e()).reduce((d,p)=>(p.checked=m,d[p.field]=p,d),{}))}var Ae=(l,e,m)=>e(l,n(m)),je=w('<article class="setting svelte-1fghvxl"><form class="setting-checks svelte-1fghvxl"><input class="check-box" type="checkbox" tabindex="0"/> <span class="layer-text"> </span></form></article>'),Fe=w('<h3 class="text-center">Settings</h3> <section class="setting-checks-container svelte-1fghvxl"><article><div class="select-name svelte-1fghvxl">Container Scale<span> </span></div> <div class="size-slider svelte-1fghvxl"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article> <br/> <article><form class="setting-checks svelte-1fghvxl"><input class="check-box" type="checkbox" name="toggleAll" tabindex="0"/> <span class="layer-text">Toggle All Metadata</span></form></article> <!></section>',1);function Te(l,e){$(e,!0);let m=oe(e,"containerSize",15),d=oe(e,"metaData",15),p=V(null),P=!1;function A(a,r){a.stopPropagation(),d(Object.entries(d()).reduce((s,[u,_])=>(r.field===u?s[u]={..._,checked:a.target.checked}:s[u]=_,s),{}))}var O=Fe(),x=o(G(O),2),z=i(x),T=i(z),U=o(i(T)),R=i(U);t(U),t(T);var J=o(T,2),L=o(i(J),2);L.__input=[Se,m],Z(L,a=>q(p,a),()=>n(p)),Q(2),t(J),t(z);var N=o(z,4),M=i(N),j=i(M);ne(j),pe(j,P),j.__click=[Ce,d],Q(2),t(M),t(N);var H=o(N,2);X(H,17,()=>Object.values(d()),Y,(a,r)=>{var s=je(),u=i(s),_=i(u);ne(_),_.__click=[Ae,A,r];var h=o(_,2),k=i(h,!0);t(h),t(u),t(s),y(()=>{te(_,"name",n(r).field),E(k,n(r).view)}),xe(_,()=>d()[n(r).field].checked,v=>d(d()[n(r).field].checked=v,!0)),g(a,s)}),t(x),y(()=>E(R,`(${m()??""})`)),g(l,O),ee()}de(["input","click"]);var Ne=w('<h1 class="text-left"> </h1>'),Me=w('<p class="text-large text-left"> </p>'),Pe=w('<span class="view-list svelte-y0do39"> </span>'),Oe=w('<div class="headers svelte-y0do39" style="margin-top: 10px"><p class="text-bold" style="margin-bottom: 0px">Orgs</p> <div></div></div>'),ze=w("<p> </p>"),Le=w('<p style="margin-left:auto"> </p>'),He=w('<div class="version-date svelte-y0do39"><!> <!></div> <hr/>',1),Ie=w('<span class="view-list svelte-y0do39"> </span>'),Ue=w('<div class="headers svelte-y0do39"><div class="text-bold">Author<!></div> <p style="margin-top: 0px"><em class="font-large"></em></p></div>'),Re=w('<div class="refs svelte-y0do39"><a> </a></div>'),Je=w("<div><b> </b> <!></div>"),We=w('<section class="content"><!> <!> <!> <!> <!> <!> <div><!></div></section>');function qe(l,e){$(e,!0);function m(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}var d=We(),p=i(d);{var P=a=>{var r=Ne(),s=i(r,!0);t(r),y(()=>E(s,e.metaData.title.value)),g(a,r)};C(p,a=>{e.metaData.title.checked&&a(P)})}var A=o(p,2);{var O=a=>{var r=Me(),s=i(r,!0);t(r),y(()=>E(s,e.metaData.description.value)),g(a,r)};C(A,a=>{e.metaData.description.checked&&a(O)})}var x=o(A,2);{var z=a=>{var r=Oe(),s=o(i(r),2);X(s,21,()=>e.metaData.orgs.value,Y,(u,_)=>{var h=Pe(),k=i(h,!0);t(h),y(()=>E(k,n(_))),g(u,h)}),t(s),t(r),g(a,r)};C(x,a=>{e.metaData.orgs.checked&&a(z)})}var T=o(x,2);{var U=a=>{var r=He(),s=G(r),u=i(s);{var _=v=>{var f=ze(),S=i(f,!0);t(f),y(I=>E(S,I),[()=>m(e.metaData.published_date.value)]),g(v,f)};C(u,v=>{e.metaData.published_date.checked&&v(_)})}var h=o(u,2);{var k=v=>{var f=Le(),S=i(f,!0);t(f),y(()=>E(S,e.metaData.d3fend_version.value)),g(v,f)};C(h,v=>{e.metaData.d3fend_version.checked&&v(k)})}t(s),Q(2),g(a,r)};C(T,a=>{(e.metaData.published_date.checked||e.metaData.d3fend_version.checked)&&a(U)})}var R=o(T,2);{var J=a=>{var r=Ue(),s=i(r),u=o(i(s));{var _=v=>{var f=le("s");g(v,f)};C(u,v=>{e.metaData.authors.value.length>1&&v(_)})}t(s);var h=o(s,2),k=i(h);X(k,21,()=>e.metaData.authors.value,Y,(v,f)=>{var S=Ie(),I=i(S,!0);t(S),y(()=>E(I,n(f))),g(v,S)}),t(k),t(h),t(r),g(a,r)};C(R,a=>{e.metaData.authors.checked&&a(J)})}var L=o(R,2);{var N=a=>{var r=Je(),s=i(r),u=i(s);t(s);var _=o(s,2);X(_,17,()=>e.metaData.references.value,Y,(h,k)=>{var v=Re(),f=i(v),S=i(f,!0);t(f),t(v),y(()=>{te(f,"href",n(k)),E(S,n(k))}),g(h,v)}),t(r),y(()=>E(u,`${e.metaData.references.view??""}:`)),g(a,r)};C(L,a=>{e.metaData.references.checked&&a(N)})}var M=o(L,2),j=i(M);{var H=a=>{var r=ve(),s=G(r);ke(s,()=>ye(e.metaData.article.value)),g(a,r)};C(j,a=>{e.metaData.article.checked&&a(H)})}t(M),t(d),g(l,d),ee()}const Be=({size:l,domain:e},m="<embed-data>",{metadataComp:d,metadata:p})=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(m,null,2)};

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
      ${d==null?void 0:d.innerHTML}
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
      transform: scale(${l}%);
      -moz-transform: scale(${l}%);
      -o-transform: scale(${l}%);
      -webkit-transform: scale(${l}%);
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
  `,Ve=({size:l,domain:e},m="<embed-data>",{metadataComp:d,metadata:p})=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(m,null,2)};

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
        transform: scale(${l}%);
        -moz-transform: scale(${l}%);
        -o-transform: scale(${l}%);
        -webkit-transform: scale(${l}%);
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
      ${d==null?void 0:d.innerHTML}
    </div>

    <iframe
      id="iframe"
      src="${e}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>
</html>
`;var Xe=w('<pre class="svelte-1r5lj7g"> </pre>'),Ye=(l,e,m)=>e(l,n(m)),Ge=(l,e,m)=>e(l,n(m)),Ke=w('<!> <main class="svelte-1r5lj7g"><section id="header" class="svelte-1r5lj7g"><h1 class="svelte-1r5lj7g"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-1r5lj7g">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6></section> <code id="embed-settings" class="svelte-1r5lj7g"><!></code> <code id="embed-code" class="config-container svelte-1r5lj7g"><h3 class="svelte-1r5lj7g">Embed Code <span id="download-options" class="svelte-1r5lj7g"><!></span></h3> <div id="code-container" class="svelte-1r5lj7g"><!></div> <div id="download-container" class="svelte-1r5lj7g"><div> </div> <button class="download-code svelte-1r5lj7g">Download</button> <button class="download-code svelte-1r5lj7g">Copy to Clipboard</button></div></code> <div id="metadata-render" class="svelte-1r5lj7g"><!></div> <iframe id="cad-iframe" title="D3FEND Embedded CAD" class="svelte-1r5lj7g"></iframe></main>',1);function bt(l,e){$(e,!0);let m,d,p=V(90);const P=K(()=>he.url.origin);let A=V(ie({title:{checked:!1,field:"title",view:"Title",value:D.meta.title},description:{checked:!1,field:"description",view:"Description",value:D.meta.description},authors:{checked:!1,field:"authors",view:"Authors",value:D.meta.authors},orgs:{checked:!1,field:"orgs",view:"Organizations",value:D.meta.orgs},article:{checked:!1,field:"article",view:"Article",value:D.meta.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:D.meta.d3fend_version},references:{checked:!1,field:"references",view:"References",value:D.meta.references},published_date:{checked:!1,field:"published_date",view:"Date",value:D.meta.published_date}}));const O={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Ve},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Be}};let x=V(ie(O["index.html"]));const z=async(c,b,F)=>(await fe(),n(x).func(c,b,F)),T=c=>{var b;((b=c.data)==null?void 0:b.call)==="FromParent"&&m.contentWindow.postMessage({call:"toParent",value:{nodes:se(D.nodes),edges:se(D.edges),meta:{settings:{}}}},c.origin)},U=c=>{c&&c.text&&q(x,c,!0)},R=async(c,{func:b,download:F})=>{const W=b({size:n(p),domain:n(P)},{nodes:D.nodes,edges:D.nodes});Ee(W,F)},J=async(c,{func:b})=>{const F=b({size:n(p),domain:n(P)},{nodes:D.nodes,edges:D.nodes});try{await navigator.clipboard.writeText(F)}catch(W){console.error("Failed to copy: ",W)}},L=K(async()=>await z({size:n(p),domain:n(P)},{nodes:D.nodes,edges:D.nodes},{metadataComp:d,metaData:n(A)}));var N=Ke();_e("message",me,T);var M=G(N);we(M,{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."});var j=o(M,2),H=o(i(j),2),a=i(H);Te(a,{get containerSize(){return n(p)},set containerSize(c){q(p,c,!0)},get metaData(){return n(A)},set metaData(c){q(A,c,!0)}}),t(H);var r=o(H,2),s=i(r),u=o(i(s)),_=i(u);{let c=K(()=>Object.values(O));De(_,{inputClassName:"autocomplete-cursor-select",get items(){return n(c)},labelFieldName:"name",readonly:!0,onChange:b=>U(b),get selectedItem(){return n(x)},set selectedItem(b){q(x,b,!0)}})}t(u),t(s);var h=o(s,2),k=i(h);ge(k,()=>n(L),c=>{var b=le("...loading");g(c,b)},(c,b)=>{var F=Xe(),W=i(F,!0);t(F),y(()=>E(W,n(b))),g(c,F)}),t(h);var v=o(h,2),f=i(v),S=i(f,!0);t(f);var I=o(f,2);I.__click=[Ye,R,x];var ae=o(I,2);ae.__click=[Ge,J,x],t(v),t(r);var B=o(r,2),ce=i(B);qe(ce,{get metaData(){return n(A)}}),t(B),Z(B,c=>d=c,()=>d);var re=o(B,2);Z(re,c=>m=c,()=>m),t(j),y(()=>{ue(j,`--container-size:${n(p)??""}%;`),E(S,n(x).text),I.disabled=n(x).name==="Config Settings",ae.disabled=n(x).name==="Config Settings",te(re,"src",`${be}/cad-frame/`)}),g(l,N),ee()}de(["click"]);export{bt as component};
