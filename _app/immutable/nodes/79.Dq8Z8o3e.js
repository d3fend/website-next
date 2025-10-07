import"../chunks/CWj6FrbW.js";import{p as S,g as L,f as k,s as b,a as I,d as v,b as i,r as f,c as T,ap as F,aq as M,V as R,X as c,bj as O,t as V,e as P,h as j}from"../chunks/DOkXS4i_.js";import{s as K}from"../chunks/C8wr6S_b.js";import{a as U}from"../chunks/C7KQO4et.js";import{i as B}from"../chunks/BqfZpZLV.js";import{d as H,e as N}from"../chunks/C2TOSY0c.js";import{a as Q}from"../chunks/BkB0nWpE.js";import{G as A}from"../chunks/OR5gwmyQ.js";import{a as W}from"../chunks/DODyupNj.js";import{w as X}from"../chunks/CuBDiroS.js";import{S as Y,B as z,a as J,b as Z}from"../chunks/wAF0Gs8s.js";import{C as $}from"../chunks/CWQvqYxF.js";var tt=k("<!> <!> <!>",1),et=k("DIAGRAM <div><!></div>",1);function at(q,p){S(p,!0);let _=new A(p.graph);console.log(_);let g=[],m=0,u=0;p.graph.graph.forEach(a=>{m=m+0,u=u+50;let e={id:a["@id"]};e.data={label:e.id},e.position={x:m,y:u},e.type="default",e.class="tactic",g.push(e)});let w=[];p.graph.graph.forEach(a=>{let e="d3f:contains";e in a&&a[e].forEach(l=>{let t={};t.id=a["@id"]+l["@id"],t.source=a["@id"],t.target=l["@id"],t.label=e,t.type="default",w.push(t)})});const G=X(g),x=X(w),y=[25,25];L();var h=et(),n=b(I(h));W(n,"",{},{height:"1000px",width:"1000px"});var E=v(n);Y(E,{get nodes(){return G},get edges(){return x},get snapGrid(){return y},fitView:!0,$$events:{nodeclick:a=>console.log("on node click",a.detail.node)},children:(a,e)=>{var l=tt(),t=I(l);$(t,{});var o=b(t,2);z(o,{get variant(){return J.Dots}});var r=b(o,2);Z(r,{}),i(a,l)},$$slots:{default:!0}}),f(n),i(q,h),T()}var rt=k('<p class="error svelte-18w6sgd"> </p>'),ot=k("<p>Loading...</p>"),st=k('<div class="flex"><div><div><textarea class="svelte-18w6sgd"></textarea></div> <div><button>Run Query</button></div></div> <div><!></div></div>');function _t(q,p){S(p,!0);let _=F(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
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
  `),g=F(M(u())),m=F(!0);async function u(){try{R(m,!1),console.log("making request");let t="/api/sparql?query="+encodeURIComponent(c(_));console.log(t);const r=await(await fetch(t)).json();let d=new A(r);R(g,d,!0)}catch(t){t.message}}function w(){R(g,u(),!0)}function G(t){t.ctrlKey==!0&&t.keyCode==13&&w()}var x=st(),y=v(x),h=v(y),n=v(h);O(n),f(h);var E=b(h,2),a=v(E);a.__click=w,f(E),f(y);var e=b(y,2),l=v(e);U(l,()=>c(g),t=>{var o=P(),r=I(o);{var d=s=>{var D=j("hit go!");i(s,D)},C=s=>{var D=ot();i(s,D)};B(r,s=>{c(m)?s(d):s(C,!1)})}i(t,o)},(t,o)=>{var r=P(),d=I(r);{var C=s=>{at(s,{get graph(){return c(o)}})};B(d,s=>{c(o)&&s(C)})}i(t,r)},(t,o)=>{var r=rt(),d=v(r);f(r),V(()=>K(d,`Error: ${c(o)??""}`)),i(t,r)}),f(e),f(x),N("keypress",n,G),Q(n,()=>c(_),t=>R(_,t)),i(q,x),T()}H(["click"]);export{_t as component};
