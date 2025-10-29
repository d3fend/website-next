import"../chunks/CWj6FrbW.js";import{o as he}from"../chunks/CpEfU_Eg.js";import{p as le,al as V,am as Q,f as ce,s,a as de,d as a,t as me,b as pe,c as ue,W as m,Y as i,aV as R,r,g as j,$ as ye}from"../chunks/D6nz4E_Z.js";import{s as Z}from"../chunks/CFiX9QRO.js";import{e as W,r as A,a as _e,b as be}from"../chunks/pRFNOZ0J.js";import{d as fe,e as ie}from"../chunks/ZcmWl89r.js";import{b as ee}from"../chunks/Czj3OBts.js";import{p as we}from"../chunks/kRbiZhqe.js";import{T as xe}from"../chunks/CQCOHzst.js";import{b as Ce}from"../chunks/chbY9w8n.js";import{b as Se}from"../chunks/NGX5jZLt.js";import{S as te}from"../chunks/B39Bj861.js";import{g as ve}from"../chunks/Do2v0NVD.js";import{g as De}from"../chunks/CcjrJX9_.js";import{M as K}from"../chunks/DDWeMiVb.js";/* empty css                */import{L as ke}from"../chunks/sEbKVYkq.js";import{s as Me}from"../chunks/PObTNQlj.js";var je=ce('<h3 class="text-center">Settings</h3> <article class="select-setting svelte-135qkj9"><div class="select-name svelte-135qkj9">Profile</div> <!> <div class="select-name svelte-135qkj9">Matrix Overlay</div> <!></article> <section class="setting-checks-container svelte-135qkj9"><article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="readonly" tabindex="0"/> <span class="layer-text">Matrix Readonly</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="drawer open" tabindex="0"/> <span class="layer-text">Show Side Capabilities</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="Mapping Mode" tabindex="0"/> <span class="layer-text">Mapping Mode</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">View Technique Comments</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">Show Legend</span></form></article> <article class="setting"><div class="select-name svelte-135qkj9">Container Scale<span> </span></div> <div class="size-slider svelte-135qkj9"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article></section>',1);function Ee(c,p){var ae,re,ne,se;le(p,!0);const e=ve(),E=De();let v=V(null);const P={[K.rootColor]:{name:"multiColor",showLegend:!0},[K.childrenMultiColor]:{name:"childrenMultiColor",showLegend:!1},[K.heatMap]:{name:"heatMap",showLegend:!1},[K["ATT&CK"]]:{name:"ATT&CK",showLegend:!1}};let l=V(Q(P[(ae=e.current)==null?void 0:ae.techniqueMappingMode]||null)),u=V(Q(((se=(re=e.current)==null?void 0:re.profiles)==null?void 0:se[(ne=e.current)==null?void 0:ne.selectedProfile])||null));const g=(t,o)=>{t.stopPropagation(),e.current[o]=!e.current[o]},Y=t=>{var o,H;if(t){const oe=e.current.profiles.findIndex(({id:ge})=>ge===t.id);e.current.selectedProfile=oe,m(u,((H=(o=e.current)==null?void 0:o.profiles)==null?void 0:H[oe])||null,!0),E.reset()}else e.current.selectedProfile=null,m(u,t,!0)},G=t=>{if(typeof t=="string")m(l,t,!0);else if(t&&t.name){const{name:o="none",showLegend:H}=t;m(l,t,!0),e.current.techniqueMappingMode=o,e.current.showLegend=H}},X=t=>{e.current.containerSize=t.target.value/100};var J=je(),z=s(de(J),2),N=s(a(z),2);{let t=R(()=>{var o;return(o=e.current)==null?void 0:o.profiles});te(N,{inputClassName:"autocomplete-cursor-select",get items(){return i(t)},readonly:!0,labelFieldName:"name",onChange:o=>Y(o),get selectedItem(){return i(u)},set selectedItem(o){m(u,o,!0)}})}var U=s(N,4);{let t=R(()=>Object.values(P));te(U,{inputClassName:"autocomplete-cursor-select",get items(){return i(t)},labelFieldName:"name",readonly:!0,onChange:o=>G(o),get selectedItem(){return i(l)},set selectedItem(o){m(l,o,!0)}})}r(z);var S=s(z,2),h=a(S),B=a(h),y=a(B);A(y),y.__click=t=>g(t,"isReadonly"),j(2),r(B),r(h);var _=s(h,2),$=a(_),F=a($);A(F),F.__click=t=>g(t,"isDrawerOpen"),j(2),r($),r(_);var b=s(_,2),L=a(b),T=a(L);A(T),T.__click=t=>g(t,"associationMode"),j(2),r(L),r(b);var D=s(b,2),k=a(D),q=a(k);A(q),q.__click=t=>g(t,"matrixCommentMode"),j(2),r(k),r(D);var w=s(D,2),O=a(w),x=a(O);A(x),x.__click=t=>g(t,"showLegend"),j(2),r(O),r(w);var C=s(w,2),I=a(C),n=s(a(I)),d=a(n);r(n),r(I);var f=s(I,2),M=s(a(f),2);M.__input=X,ee(M,t=>m(v,t),()=>i(v)),j(2),r(f),r(C),r(S),me(t=>{W(y,e.current.isReadonly),W(F,e.current.isDrawerOpen),W(T,e.current.associationMode),W(q,e.current.matrixCommentMode),W(x,e.current.showLegend),Z(d,`(${t??""})`)},[()=>(e.current.containerSize*100).toFixed(0)]),pe(c,J),ue()}fe(["click","input"]);const Pe=({size:c,domain:p},e="<embed-data>")=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(e,null,2)};

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
      src="${p}/profile/"
      title="D3FEND Embedded" />
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${c});
      -moz-transform: scale(${c});
      -o-transform: scale(${c});
      -webkit-transform: scale(${c});
    }
  </style>
  `,ze=({size:c,domain:p},e="<embed-data>")=>`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>D3FEND EMBEDDED</title>

  <script>
    const user_data = ${JSON.stringify(e,null,2)};

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

      if (event.origin !== "${p}") return;

      post_layers(event);
    });
  <\/script>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${c});
      -moz-transform: scale(${c});
      -o-transform: scale(${c});
      -webkit-transform: scale(${c});
    }
  </style>
</head>

<main>
  <iframe
          id="iframe"
          src="${p}/profile/"
          title="D3FEND Embedded" />
</main>

</html>
`;var Ne=ce('<!> <main class="svelte-yzoejn"><section id="header" class="svelte-yzoejn"><h1 class="svelte-yzoejn"><span class="fancy-font">D3FEND</span> Embeddable Widget</h1> <h6 class="svelte-yzoejn">Use the D3FEND Embeddable Widget to embed an interactive D3FEND Profile in another webpage.</h6></section> <code id="embed-settings" class="svelte-yzoejn"><!></code> <code id="embed-code" class="config-container svelte-yzoejn"><h3 class="svelte-yzoejn">Embed Code <span id="download-options" class="svelte-yzoejn"><!></span></h3> <div id="code-container" class="svelte-yzoejn"><pre class="svelte-yzoejn"> </pre></div> <div id="download-container" class="svelte-yzoejn"><div> </div> <button class="download-code svelte-yzoejn">Download</button> <button class="download-code svelte-yzoejn">Copy to Clipboard</button></div></code> <iframe id="layers-iframe" title="D3FEND Embedded" class="svelte-yzoejn"></iframe> <dialog class="iframe-dialog"><!></dialog></main>',1);function Xe(c,p){le(p,!0);const e=ve();let E,v;const P={"Config Settings":{name:"Config Settings",text:"Profile Config Settings",func:()=>i(g)},"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:ze},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Pe},"Profile data":{name:"Profile data",text:"Export Profile Data",func:()=>JSON.stringify(e.current,null,2).trim()}};let l=V(Q(P["Config Settings"])),u=R(()=>we.url.origin),g=R(()=>JSON.stringify(e.current,["isReadonly","isDrawerOpen","showLegend","techniqueMappingMode","selectedProfile","matrixSize","containerSize"],2).trim());he(()=>{e.current.localStorageWarning&&v.showModal()}),Ce(()=>{e.current.isReadonly=!1});const Y=n=>{var d;if(((d=n.data)==null?void 0:d.call)==="FromParent")try{E.contentWindow.postMessage({call:"toParent",value:e.current},n.origin)}catch(f){console.log(f)}},G=n=>{n&&n.text&&m(l,n,!0)},X=async(n,{func:d,download:f})=>{const M=d({size:e.current.containerSize,domain:i(u)},e.current);Me(M,f)},J=async(n,{func:d})=>{const f=d({size:e.current.containerSize,domain:i(u)},e.current);try{await navigator.clipboard.writeText(f)}catch(M){console.error("Failed to copy: ",M)}},z=n=>{n.close()};var N=Ne();ie("message",ye,Y);var U=de(N);xe(U,{title:"Embedded D3FEND Matrix",og_title:"MITRE Embedded D3FEND Layers",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND Capability Layers Analysis."});var S=s(U,2),h=s(a(S),2),B=a(h);Ee(B,{}),r(h);var y=s(h,2),_=a(y),$=s(a(_)),F=a($);{let n=R(()=>Object.values(P));te(F,{inputClassName:"autocomplete-cursor-select",get items(){return i(n)},labelFieldName:"name",readonly:!0,onChange:d=>G(d),get selectedItem(){return i(l)},set selectedItem(d){m(l,d,!0)}})}r($),r(_);var b=s(_,2),L=a(b),T=a(L,!0);r(L),r(b);var D=s(b,2),k=a(D),q=a(k,!0);r(k);var w=s(k,2);w.__click=n=>X(n,i(l));var O=s(w,2);O.__click=n=>J(n,i(l)),r(D),r(y);var x=s(y,2);ee(x,n=>E=n,()=>E);var C=s(x,2),I=a(C);ke(I,{}),r(C),ee(C,n=>v=n,()=>v),r(S),me(n=>{_e(S,`--container-size:${e.current.containerSize??""};`),Z(T,n),Z(q,i(l).text),w.disabled=i(l).name==="Config Settings",O.disabled=i(l).name==="Config Settings",be(x,"src",`${Se}/profile/`)},[()=>i(l).func({size:e.current.containerSize,domain:i(u),data:e.current})]),ie("close",C,()=>z(v)),pe(c,N),ue()}fe(["click"]);export{Xe as component};
