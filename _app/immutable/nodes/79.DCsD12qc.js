import"../chunks/CWj6FrbW.js";import{p as S,g as A,f as b,s as k,a as I,d as v,b as i,r as f,c as T,an as F,ao as L,a0 as R,a2 as c,bm as O,t as K,e as P,h as U}from"../chunks/CNwbMRcW.js";import{s as V}from"../chunks/G0J4XiIx.js";import{a as j}from"../chunks/C-10NRXl.js";import{i as B}from"../chunks/pOIhp8Dj.js";import{d as H,e as N}from"../chunks/B2G8ZHD3.js";import{a as Q}from"../chunks/BpEA_y6l.js";import{G as X}from"../chunks/CjxiXH6F.js";import{a as W}from"../chunks/lhB8NNw9.js";import{w as M}from"../chunks/Sa7I6d5M.js";import{S as Y,B as z,a as J,M as Z}from"../chunks/treSdX71.js";import{C as $}from"../chunks/on8ut3TP.js";var tt=b("<!> <!> <!>",1),at=b("DIAGRAM <div><!></div>",1);function et(G,p){S(p,!0);let _=new X(p.graph);console.log(_);let g=[],m=0,u=0;p.graph.graph.forEach(e=>{m=m+0,u=u+50;let a={id:e["@id"]};a.data={label:a.id},a.position={x:m,y:u},a.type="default",a.class="tactic",g.push(a)});let w=[];p.graph.graph.forEach(e=>{let a="d3f:contains";a in e&&e[a].forEach(l=>{let t={};t.id=e["@id"]+l["@id"],t.source=e["@id"],t.target=l["@id"],t.label=a,t.type="default",w.push(t)})});const q=M(g),x=M(w),y=[25,25];A();var h=at(),n=k(I(h));W(n,"",{},{height:"1000px",width:"1000px"});var E=v(n);Y(E,{get nodes(){return q},get edges(){return x},get snapGrid(){return y},fitView:!0,$$events:{nodeclick:e=>console.log("on node click",e.detail.node)},children:(e,a)=>{var l=tt(),t=I(l);$(t,{});var o=k(t,2);z(o,{get variant(){return J.Dots}});var r=k(o,2);Z(r,{}),i(e,l)},$$slots:{default:!0}}),f(n),i(G,h),T()}var rt=b('<p class="error svelte-18w6sgd"> </p>'),ot=b("<p>Loading...</p>"),st=b('<div class="flex"><div><div><textarea class="svelte-18w6sgd"></textarea></div> <div><button>Run Query</button></div></div> <div><!></div></div>');function _t(G,p){S(p,!0);let _=F(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
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
  `),g=F(L(u())),m=F(!0);async function u(){try{R(m,!1),console.log("making request");let t="/api/sparql?query="+encodeURIComponent(c(_));console.log(t);const r=await(await fetch(t)).json();let d=new X(r);R(g,d,!0)}catch(t){t.message}}function w(){R(g,u(),!0)}function q(t){t.ctrlKey==!0&&t.keyCode==13&&w()}var x=st(),y=v(x),h=v(y),n=v(h);O(n),f(h);var E=k(h,2),e=v(E);e.__click=w,f(E),f(y);var a=k(y,2),l=v(a);j(l,()=>c(g),t=>{var o=P(),r=I(o);{var d=s=>{var D=U("hit go!");i(s,D)},C=s=>{var D=ot();i(s,D)};B(r,s=>{c(m)?s(d):s(C,!1)})}i(t,o)},(t,o)=>{var r=P(),d=I(r);{var C=s=>{et(s,{get graph(){return c(o)}})};B(d,s=>{c(o)&&s(C)})}i(t,r)},(t,o)=>{var r=rt(),d=v(r);f(r),K(()=>V(d,`Error: ${c(o)??""}`)),i(t,r)}),f(a),f(x),N("keypress",n,q),Q(n,()=>c(_),t=>R(_,t)),i(G,x),T()}H(["click"]);export{_t as component};
