import"../chunks/CWj6FrbW.js";import{o as _e}from"../chunks/CKLSrT8G.js";import{p as le,ap as V,aq as Q,f as ce,s as o,a as de,d as a,t as me,b as pe,c as ue,V as p,X as c,aU as W,r,g as j,$ as he}from"../chunks/DOkXS4i_.js";import{s as Z}from"../chunks/C8wr6S_b.js";import{e as A,r as R,a as ye,b as be}from"../chunks/DODyupNj.js";import{d as ve,e as ie}from"../chunks/C2TOSY0c.js";import{b as ee}from"../chunks/DZEYEzXt.js";import{p as we}from"../chunks/psTLyq5u.js";import{T as xe}from"../chunks/Xds3KfXC.js";import{b as ke}from"../chunks/CiYBCFzk.js";import{b as Ce}from"../chunks/DpS3c_AD.js";import{S as te}from"../chunks/DQKDZTPg.js";import{g as fe}from"../chunks/C1OkB4oL.js";import{g as Se}from"../chunks/BmfHsGVe.js";import{M as K}from"../chunks/DDWeMiVb.js";/* empty css                */import{L as De}from"../chunks/DO90pegI.js";import{s as Me}from"../chunks/PObTNQlj.js";var je=(t,n)=>n(t,"isReadonly"),Ee=(t,n)=>n(t,"isDrawerOpen"),Pe=(t,n)=>n(t,"associationMode"),$e=(t,n)=>n(t,"matrixCommentMode"),ze=(t,n)=>n(t,"showLegend"),Ne=ce('<h3 class="text-center">Settings</h3> <article class="select-setting svelte-135qkj9"><div class="select-name svelte-135qkj9">Profile</div> <!> <div class="select-name svelte-135qkj9">Matrix Overlay</div> <!></article> <section class="setting-checks-container svelte-135qkj9"><article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="readonly" tabindex="0"/> <span class="layer-text">Matrix Readonly</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="drawer open" tabindex="0"/> <span class="layer-text">Show Side Capabilities</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="Mapping Mode" tabindex="0"/> <span class="layer-text">Mapping Mode</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">View Technique Comments</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">Show Legend</span></form></article> <article class="setting"><div class="select-name svelte-135qkj9">Container Scale<span> </span></div> <div class="size-slider svelte-135qkj9"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article></section>',1);function Fe(t,n){var ae,re,ne,se;le(n,!0);const e=fe(),E=Se();let f=V(null);const P={[K.rootColor]:{name:"multiColor",showLegend:!0},[K.childrenMultiColor]:{name:"childrenMultiColor",showLegend:!1},[K.heatMap]:{name:"heatMap",showLegend:!1},[K["ATT&CK"]]:{name:"ATT&CK",showLegend:!1}};let d=V(Q(P[(ae=e.current)==null?void 0:ae.techniqueMappingMode]||null)),u=V(Q(((se=(re=e.current)==null?void 0:re.profiles)==null?void 0:se[(ne=e.current)==null?void 0:ne.selectedProfile])||null));const g=(s,l)=>{s.stopPropagation(),e.current[l]=!e.current[l]},X=s=>{var l,H;if(s){const oe=e.current.profiles.findIndex(({id:ge})=>ge===s.id);e.current.selectedProfile=oe,p(u,((H=(l=e.current)==null?void 0:l.profiles)==null?void 0:H[oe])||null,!0),E.reset()}else e.current.selectedProfile=null,p(u,s,!0)},G=s=>{if(typeof s=="string")p(d,s,!0);else if(s&&s.name){const{name:l="none",showLegend:H}=s;p(d,s,!0),e.current.techniqueMappingMode=l,e.current.showLegend=H}},Y=s=>{e.current.containerSize=s.target.value/100};var J=Ne(),$=o(de(J),2),z=o(a($),2);{let s=W(()=>{var l;return(l=e.current)==null?void 0:l.profiles});te(z,{inputClassName:"autocomplete-cursor-select",get items(){return c(s)},readonly:!0,labelFieldName:"name",onChange:l=>X(l),get selectedItem(){return c(u)},set selectedItem(l){p(u,l,!0)}})}var U=o(z,4);{let s=W(()=>Object.values(P));te(U,{inputClassName:"autocomplete-cursor-select",get items(){return c(s)},labelFieldName:"name",readonly:!0,onChange:l=>G(l),get selectedItem(){return c(d)},set selectedItem(l){p(d,l,!0)}})}r($);var C=o($,2),_=a(C),B=a(_),h=a(B);R(h),h.__click=[je,g],j(2),r(B),r(_);var y=o(_,2),N=a(y),F=a(N);R(F),F.__click=[Ee,g],j(2),r(N),r(y);var b=o(y,2),L=a(b),T=a(L);R(T),T.__click=[Pe,g],j(2),r(L),r(b);var S=o(b,2),D=a(S),q=a(D);R(q),q.__click=[$e,g],j(2),r(D),r(S);var w=o(S,2),O=a(w),x=a(O);R(x),x.__click=[ze,g],j(2),r(O),r(w);var k=o(w,2),I=a(k),i=o(a(I)),m=a(i);r(i),r(I);var v=o(I,2),M=o(a(v),2);M.__input=Y,ee(M,s=>p(f,s),()=>c(f)),j(2),r(v),r(k),r(C),me(s=>{A(h,e.current.isReadonly),A(F,e.current.isDrawerOpen),A(T,e.current.associationMode),A(q,e.current.matrixCommentMode),A(x,e.current.showLegend),Z(m,`(${s??""})`)},[()=>(e.current.containerSize*100).toFixed(0)]),pe(t,J),ue()}ve(["click","input"]);const Le=({size:t,domain:n},e="<embed-data>")=>`
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
      src="${n}/profile/"
      title="D3FEND Embedded" />
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${t});
      -moz-transform: scale(${t});
      -o-transform: scale(${t});
      -webkit-transform: scale(${t});
    }
  </style>
  `,Te=({size:t,domain:n},e="<embed-data>")=>`
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

      if (event.origin !== "${n}") return;

      post_layers(event);
    });
  <\/script>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${t});
      -moz-transform: scale(${t});
      -o-transform: scale(${t});
      -webkit-transform: scale(${t});
    }
  </style>
</head>

<main>
  <iframe
          id="iframe"
          src="${n}/profile/"
          title="D3FEND Embedded" />
</main>

</html>
`;var qe=(t,n,e)=>n(t,c(e)),Oe=(t,n,e)=>n(t,c(e)),Ie=ce('<!> <main class="svelte-yzoejn"><section id="header" class="svelte-yzoejn"><h1 class="svelte-yzoejn"><span class="fancy-font">D3FEND</span> Embeddable Widget</h1> <h6 class="svelte-yzoejn">Use the D3FEND Embeddable Widget to embed an interactive D3FEND Profile in another webpage.</h6></section> <code id="embed-settings" class="svelte-yzoejn"><!></code> <code id="embed-code" class="config-container svelte-yzoejn"><h3 class="svelte-yzoejn">Embed Code <span id="download-options" class="svelte-yzoejn"><!></span></h3> <div id="code-container" class="svelte-yzoejn"><pre class="svelte-yzoejn"> </pre></div> <div id="download-container" class="svelte-yzoejn"><div> </div> <button class="download-code svelte-yzoejn">Download</button> <button class="download-code svelte-yzoejn">Copy to Clipboard</button></div></code> <iframe id="layers-iframe" title="D3FEND Embedded" class="svelte-yzoejn"></iframe> <dialog class="iframe-dialog"><!></dialog></main>',1);function nt(t,n){le(n,!0);const e=fe();let E,f;const P={"Config Settings":{name:"Config Settings",text:"Profile Config Settings",func:()=>c(g)},"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Te},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Le},"Profile data":{name:"Profile data",text:"Export Profile Data",func:()=>JSON.stringify(e.current,null,2).trim()}};let d=V(Q(P["Config Settings"])),u=W(()=>we.url.origin),g=W(()=>JSON.stringify(e.current,["isReadonly","isDrawerOpen","showLegend","techniqueMappingMode","selectedProfile","matrixSize","containerSize"],2).trim());_e(()=>{e.current.localStorageWarning&&f.showModal()}),ke(()=>{e.current.isReadonly=!1});const X=i=>{var m;if(((m=i.data)==null?void 0:m.call)==="FromParent")try{E.contentWindow.postMessage({call:"toParent",value:e.current},i.origin)}catch(v){console.log(v)}},G=i=>{i&&i.text&&p(d,i,!0)},Y=async(i,{func:m,download:v})=>{const M=m({size:e.current.containerSize,domain:c(u)},e.current);Me(M,v)},J=async(i,{func:m})=>{const v=m({size:e.current.containerSize,domain:c(u)},e.current);try{await navigator.clipboard.writeText(v)}catch(M){console.error("Failed to copy: ",M)}},$=i=>{i.close()};var z=Ie();ie("message",he,X);var U=de(z);xe(U,{title:"Embedded D3FEND Matrix",og_title:"MITRE Embedded D3FEND Layers",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND Capability Layers Analysis."});var C=o(U,2),_=o(a(C),2),B=a(_);Fe(B,{}),r(_);var h=o(_,2),y=a(h),N=o(a(y)),F=a(N);{let i=W(()=>Object.values(P));te(F,{inputClassName:"autocomplete-cursor-select",get items(){return c(i)},labelFieldName:"name",readonly:!0,onChange:m=>G(m),get selectedItem(){return c(d)},set selectedItem(m){p(d,m,!0)}})}r(N),r(y);var b=o(y,2),L=a(b),T=a(L,!0);r(L),r(b);var S=o(b,2),D=a(S),q=a(D,!0);r(D);var w=o(D,2);w.__click=[qe,Y,d];var O=o(w,2);O.__click=[Oe,J,d],r(S),r(h);var x=o(h,2);ee(x,i=>E=i,()=>E);var k=o(x,2),I=a(k);De(I,{}),r(k),ee(k,i=>f=i,()=>f),r(C),me(i=>{ye(C,`--container-size:${e.current.containerSize??""};`),Z(T,i),Z(q,c(d).text),w.disabled=c(d).name==="Config Settings",O.disabled=c(d).name==="Config Settings",be(x,"src",`${Ce}/profile/`)},[()=>c(d).func({size:e.current.containerSize,domain:c(u),data:e.current})]),ie("close",k,()=>$(f)),pe(t,z),ue()}ve(["click"]);export{nt as component};
