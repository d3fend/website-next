import"../chunks/CWj6FrbW.js";import{p as S,g as A,f as b,s as k,a as I,d as v,b as i,r as f,c as T,al as F,am as L,W as R,Y as c,bm as O,t as K,e as P,h as U}from"../chunks/vjTeLVSJ.js";import{s as V}from"../chunks/BpItCPlc.js";import{a as W}from"../chunks/Bk_DPQYA.js";import{i as B}from"../chunks/B8sE8lo0.js";import{d as Y,e as j}from"../chunks/CiI8UwBf.js";import{a as H}from"../chunks/kELm4IFj.js";import{G as X}from"../chunks/DW7lA6Au.js";import{a as N}from"../chunks/BGspim47.js";import{w as M}from"../chunks/cow1r7lM.js";import{S as Q,B as z,a as J,M as Z}from"../chunks/B2G-GZx-.js";import{C as $}from"../chunks/BXRJBicP.js";var tt=b("<!> <!> <!>",1),et=b("DIAGRAM <div><!></div>",1);function at(G,p){S(p,!0);let _=new X(p.graph);console.log(_);let g=[],m=0,u=0;p.graph.graph.forEach(a=>{m=m+0,u=u+50;let e={id:a["@id"]};e.data={label:e.id},e.position={x:m,y:u},e.type="default",e.class="tactic",g.push(e)});let w=[];p.graph.graph.forEach(a=>{let e="d3f:contains";e in a&&a[e].forEach(l=>{let t={};t.id=a["@id"]+l["@id"],t.source=a["@id"],t.target=l["@id"],t.label=e,t.type="default",w.push(t)})});const q=M(g),x=M(w),y=[25,25];A();var h=et(),n=k(I(h));N(n,"",{},{height:"1000px",width:"1000px"});var E=v(n);Q(E,{get nodes(){return q},get edges(){return x},get snapGrid(){return y},fitView:!0,$$events:{nodeclick:a=>console.log("on node click",a.detail.node)},children:(a,e)=>{var l=tt(),t=I(l);$(t,{});var o=k(t,2);z(o,{get variant(){return J.Dots}});var r=k(o,2);Z(r,{}),i(a,l)},$$slots:{default:!0}}),f(n),i(G,h),T()}var rt=b('<p class="error svelte-18w6sgd"> </p>'),ot=b("<p>Loading...</p>"),st=b('<div class="flex"><div><div><textarea class="svelte-18w6sgd"></textarea></div> <div><button>Run Query</button></div></div> <div><!></div></div>');function _t(G,p){S(p,!0);let _=F(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX d3f: <http://d3fend.mitre.org/ontologies/d3fend.owl#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  
  CONSTRUCT {
    ?s d3f:contains ?o .
  }
  WHERE {
    ?s rdfs:subClassOf* d3f:DigitalArtifact .
    ?s d3f:contains ?o .
    FILTER (!isBlank(?o))
  }
  ORDER BY ?p
  LIMIT 50
  `),g=F(L(u())),m=F(!0);async function u(){try{R(m,!1),console.log("making request");let t="/api/sparql?query="+encodeURIComponent(c(_));console.log(t);const r=await(await fetch(t)).json();let d=new X(r);R(g,d,!0)}catch(t){t.message}}function w(){R(g,u(),!0)}function q(t){t.ctrlKey==!0&&t.keyCode==13&&w()}var x=st(),y=v(x),h=v(y),n=v(h);O(n),f(h);var E=k(h,2),a=v(E);a.__click=w,f(E),f(y);var e=k(y,2),l=v(e);W(l,()=>c(g),t=>{var o=P(),r=I(o);{var d=s=>{var D=U("hit go!");i(s,D)},C=s=>{var D=ot();i(s,D)};B(r,s=>{c(m)?s(d):s(C,!1)})}i(t,o)},(t,o)=>{var r=P(),d=I(r);{var C=s=>{at(s,{get graph(){return c(o)}})};B(d,s=>{c(o)&&s(C)})}i(t,r)},(t,o)=>{var r=rt(),d=v(r);f(r),K(()=>V(d,`Error: ${c(o)??""}`)),i(t,r)}),f(e),f(x),j("keypress",n,q),H(n,()=>c(_),t=>R(_,t)),i(G,x),T()}Y(["click"]);export{_t as component};
