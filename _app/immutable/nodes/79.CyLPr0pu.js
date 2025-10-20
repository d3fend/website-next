import"../chunks/CWj6FrbW.js";import{p as T,g as L,f as k,s as b,a as I,d as v,b as i,r as f,c as X,an as F,ao as M,a0 as R,a2 as c,bm as O,t as K,e as P,h as U}from"../chunks/D2pf42xT.js";import{s as V}from"../chunks/C6QJzXgK.js";import{a as j}from"../chunks/BSGmrj48.js";import{i as B}from"../chunks/BmeaQddS.js";import{d as H,e as N}from"../chunks/p4-hyBOX.js";import{a as Q}from"../chunks/DiD_Aqyn.js";import{G as A}from"../chunks/jXJPlir3.js";import{a as W}from"../chunks/BK-AmZuq.js";import{w as S}from"../chunks/BpQNOVhk.js";import{S as Y,B as z,a as J,b as Z}from"../chunks/Ci-aNEaC.js";import{C as $}from"../chunks/DmLb48pO.js";var tt=k("<!> <!> <!>",1),at=k("DIAGRAM <div><!></div>",1);function et(G,p){T(p,!0);let _=new A(p.graph);console.log(_);let g=[],m=0,u=0;p.graph.graph.forEach(e=>{m=m+0,u=u+50;let a={id:e["@id"]};a.data={label:a.id},a.position={x:m,y:u},a.type="default",a.class="tactic",g.push(a)});let w=[];p.graph.graph.forEach(e=>{let a="d3f:contains";a in e&&e[a].forEach(l=>{let t={};t.id=e["@id"]+l["@id"],t.source=e["@id"],t.target=l["@id"],t.label=a,t.type="default",w.push(t)})});const q=S(g),x=S(w),y=[25,25];L();var h=at(),n=b(I(h));W(n,"",{},{height:"1000px",width:"1000px"});var E=v(n);Y(E,{get nodes(){return q},get edges(){return x},get snapGrid(){return y},fitView:!0,$$events:{nodeclick:e=>console.log("on node click",e.detail.node)},children:(e,a)=>{var l=tt(),t=I(l);$(t,{});var o=b(t,2);z(o,{get variant(){return J.Dots}});var r=b(o,2);Z(r,{}),i(e,l)},$$slots:{default:!0}}),f(n),i(G,h),X()}var rt=k('<p class="error svelte-18w6sgd"> </p>'),ot=k("<p>Loading...</p>"),st=k('<div class="flex"><div><div><textarea class="svelte-18w6sgd"></textarea></div> <div><button>Run Query</button></div></div> <div><!></div></div>');function _t(G,p){T(p,!0);let _=F(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
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
  `),g=F(M(u())),m=F(!0);async function u(){try{R(m,!1),console.log("making request");let t="/api/sparql?query="+encodeURIComponent(c(_));console.log(t);const r=await(await fetch(t)).json();let d=new A(r);R(g,d,!0)}catch(t){t.message}}function w(){R(g,u(),!0)}function q(t){t.ctrlKey==!0&&t.keyCode==13&&w()}var x=st(),y=v(x),h=v(y),n=v(h);O(n),f(h);var E=b(h,2),e=v(E);e.__click=w,f(E),f(y);var a=b(y,2),l=v(a);j(l,()=>c(g),t=>{var o=P(),r=I(o);{var d=s=>{var D=U("hit go!");i(s,D)},C=s=>{var D=ot();i(s,D)};B(r,s=>{c(m)?s(d):s(C,!1)})}i(t,o)},(t,o)=>{var r=P(),d=I(r);{var C=s=>{et(s,{get graph(){return c(o)}})};B(d,s=>{c(o)&&s(C)})}i(t,r)},(t,o)=>{var r=rt(),d=v(r);f(r),K(()=>V(d,`Error: ${c(o)??""}`)),i(t,r)}),f(a),f(x),N("keypress",n,q),Q(n,()=>c(_),t=>R(_,t)),i(G,x),X()}H(["click"]);export{_t as component};
