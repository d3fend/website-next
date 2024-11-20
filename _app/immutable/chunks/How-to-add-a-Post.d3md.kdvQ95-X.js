import{s as Xe,Q as oe,R as Oe,e as l,b as s,t as st,H as gt,d as n,y as h,j as r,f as m,h as rt,w as xt,i as a,x as q,O as Ze,k as d,l as e,n as y}from"./scheduler.Bk8QkZQF.js";import{h as ta,u as ea}from"./await_block.JAXStjXu.js";import{S as aa,i as la,c as se,b as re,m as de,t as Pt,a as Ut,d as ue}from"./index.Bsw9yEAT.js";import{g as na,a as Be}from"./spread.CgU5AtxT.js";import{B as ia}from"./blog-layout.Baz09Ow7.js";import{D as oa}from"./D3FMatrix.TkUIj6BI.js";import{G as sa}from"./Graph-neighbors.CqxMdQ2K.js";function ra(_){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function da(_){let o,p;return o=new sa({props:{class:"text-center",neighbors:_[2].neighbors,root_node:_[2].description["@id"]}}),{c(){se(o.$$.fragment)},l(f){re(o.$$.fragment,f)},m(f,c){de(o,f,c),p=!0},p:y,i(f){p||(Pt(o.$$.fragment,f),p=!0)},o(f){Ut(o.$$.fragment,f),p=!1},d(f){ue(o,f)}}}function ua(_){let o;return{c(){o=st("loading...")},l(p){o=rt(p,"loading...")},m(p,f){d(p,o,f)},p:y,i:y,o:y,d(p){p&&a(o)}}}function fa(_){let o,p="How to add an article post to this page",f,c,u,I="Create a markdown file with your content, but rename the extension ‘.d3md’",P,U,Ft,v,dt,F,yt,Ye=`<code class="language-undefined">---
title: &#39;Your title&#39;
description: &#39;Your description&#39;
tags: Post tags, seperated by a comma
category: Post category
last_modified: Date last modified, in form: Month Day, Year 24HRTIME
authors: Your authors, seperated by comma
version: Related version of D3FEND
target_audience: Target audiences, seperated by comma
layout: blog_layout, must be &#39;d3fend_post&#39;
---</code>`,zt,z,fe="Example:",jt,ut,j,It,Qe=`<code class="language-undefined">---
title: &#39;Sample Title&#39;
description: &#39;Sample Description&#39;
tags: sample, post, tags
category: Tutorial
last_modified: May 3, 2023 01:00:00
authors: Tin man, Blue man
version: 0.12.0-BETA-2
target_audience: D3FEND users, MITRE employees, software engineers
layout: d3fend_post
---</code>`,St,S,ce="<strong><em>If all 9 attributes above are not defined, the post will not render</em></strong>",Gt,G,me="Currently, ‘d3fend_post’ is the only supported layout, but additonal ones can be made for specific use cases",Ot,O,he="The remainder of the file can contain basic markdown code along with html elements, such as <code>&lt;div&gt;, &lt;script&gt;, &lt;style&gt;</code> to customize content",Bt,B,pe="Insert the file into the designated folder within src/blog_posts (ex: src/blog_posts/2023/), along with any images needed",Vt,V,_e="That’s it! The post should render successfully (reach out to Naveed with any problems)",wt,A,ve="How to add images",bt,k,ge="<li>Insert the image file into the corresponding images/ folder within static/img/*</li> <li>Add the following image tag: <code>&lt;img src=&quot;/img/mitre.png alt=&quot;&quot;/&gt;</code></li>",qt,R,xe,Ct,D,ye="How to add svelte components",Lt,x,Y,Ie="Svelte components can be easily added to .d3md files",Yt,Q,we=`Import the component within a script tag: 
<ul><li><code>&lt;script&gt; import D3FMatrix from &quot;$lib/components/D3FMatrix.svelte&quot;; &lt;/script&gt;</code></li> <li>script tag must be anywhere below attributes section on .d3md file</li></ul>`,Qt,W,Wt,ft,ct,J,Rt,We=`<code class="language-undefined">## Here is the D3FEND Matrix
&lt;D3FMatrix theme=&#39;poster&#39;/&gt;</code>`,Jt,K,Kt,C,mt,X,Et,Je=`<code class="language-undefined">&lt;script&gt;
import GraphNeighbors from &quot;$lib/components/Graph-neighbors.svelte&quot;;
async function loadit() &#123;
  const res = await fetch(&#96;/api/dao/artifact/d3f:NetworkTraffic.json&#96;);
  const data = await res.json()
  if (res.ok) &#123;
    return data
  &#125;
&#125;
let promise = loadit()
&lt;/script&gt;
  &lt;div&gt;
    &#123;#await promise&#125;
      loading...
    &#123;:then data&#125;
      &lt;GraphNeighbors neighbors=&#123;data.neighbors&#125; root_node=&#123;data.description[&quot;@id&quot;]&#125; /&gt;
    &#123;/await&#125;
  &lt;/div&gt;</code>`,Xt,Z,be="The <code>{#await}</code> must exist inside a <code>&lt;div&gt;</code>",Zt,tt,qe="The above code results in the following:",Tt,H,At,$,kt,N,Ce="How to add mermaid graphs",Dt,w,et,Le="Mermaid graphs can be imported as components (shown above) or as raw text",te,E,ee,at,Re="<div>",ae,ht,pt,lt,Ht,Ke=`<code class="language-undefined">&lt;div id=&quot;mermaid&quot;&gt;
  graph LR;
  d3f:IdentifierReputationAnalysis[&quot;Identifier Reputation Analysis&quot;] --&gt; |&quot;analyzes&quot; | FileHash[&quot;File Hash&quot;];
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click FileHash href &quot;/dao/artifact/d3f:FileHash&quot;;
  d3f:IdentifierReputationAnalysis[&quot;Identifier Reputation Analysis&quot;] --&gt; |&quot;analyzes&quot; | DomainName[&quot;Domain Name&quot;]; 
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click DomainName href &quot;/dao/artifact/d3f:DomainName&quot;;
  d3f:IdentifierReputationAnalysis[&quot;Identifier Reputation Analysis&quot;] --&gt; |&quot;analyzes&quot; | IPAddress[&quot;IP Address&quot;];
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click IPAddress href &quot;/dao/artifact/d3f:IPAddress&quot;;
  d3f:IdentifierReputationAnalysis[&quot;Identifier Reputation Analysis&quot;] --&gt; |&quot;analyzes&quot; | URL[&quot;URL&quot;]; 
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click URL href &quot;/dao/artifact/d3f:URL&quot;;
&lt;/div&gt;</code>`,le,nt,Ee="Which results in the following:",$t,L,Te=`graph LR;
  d3f:IdentifierReputationAnalysis["Identifier Reputation Analysis"] --> |"analyzes" | FileHash["File Hash"];
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click FileHash href "/dao/artifact/d3f:FileHash";
  d3f:IdentifierReputationAnalysis["Identifier Reputation Analysis"] --> |"analyzes" | DomainName["Domain Name"]; 
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click DomainName href "/dao/artifact/d3f:DomainName";
  d3f:IdentifierReputationAnalysis["Identifier Reputation Analysis"] --> |"analyzes" | IPAddress["IP Address"];
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click IPAddress href "/dao/artifact/d3f:IPAddress";
  d3f:IdentifierReputationAnalysis["Identifier Reputation Analysis"] --> |"analyzes" | URL["URL"]; 
  class d3f:IdentifierReputationAnalysis DefensiveTechniqueNode;
  click URL href "/dao/artifact/d3f:URL";`,Nt,M,Ae="<em>Check out other posts in src/blog_posts/ for exmaples</em>",Mt,g={ctx:_,current:null,token:null,hasCatch:!1,pending:ua,then:da,catch:ra,value:2,blocks:[,,,]};return ta(_[0],g),$=new oa({props:{theme:"poster"}}),{c(){o=l("h3"),o.textContent=p,f=s(),c=l("ul"),u=l("li"),u.textContent=I,P=s(),U=l("li"),Ft=st(`In the markdown, front-matter attributes are defined at the top of the file
`),v=l("ul"),dt=l("li"),F=l("pre"),yt=new gt(!1),zt=s(),z=l("li"),z.textContent=fe,jt=s(),ut=l("li"),j=l("pre"),It=new gt(!1),St=s(),S=l("li"),S.innerHTML=ce,Gt=s(),G=l("li"),G.textContent=me,Ot=s(),O=l("li"),O.innerHTML=he,Bt=s(),B=l("li"),B.textContent=pe,Vt=s(),V=l("li"),V.textContent=_e,wt=s(),A=l("h3"),A.textContent=ve,bt=s(),k=l("ul"),k.innerHTML=ge,qt=s(),R=l("img"),Ct=s(),D=l("h3"),D.textContent=ye,Lt=s(),x=l("ul"),Y=l("li"),Y.textContent=Ie,Yt=s(),Q=l("li"),Q.innerHTML=we,Qt=s(),W=l("li"),Wt=st(`Place the component in the body of the .d3md file:
`),ft=l("ul"),ct=l("li"),J=l("pre"),Rt=new gt(!1),Jt=s(),K=l("li"),Kt=st(`If the component requires data to be fetched and loaded, you can do that inside the script tag: 
`),C=l("ul"),mt=l("li"),X=l("pre"),Et=new gt(!1),Xt=s(),Z=l("li"),Z.innerHTML=be,Zt=s(),tt=l("li"),tt.textContent=qe,Tt=s(),H=l("div"),g.block.c(),At=s(),se($.$$.fragment),kt=s(),N=l("h3"),N.textContent=Ce,Dt=s(),w=l("ul"),et=l("li"),et.textContent=Le,te=s(),E=l("li"),ee=st("If you have the raw mermiad text simply put it in a "),at=l("code"),at.textContent=Re,ae=st(` with id=mermaid: 
`),ht=l("ul"),pt=l("li"),lt=l("pre"),Ht=new gt(!1),le=s(),nt=l("li"),nt.textContent=Ee,$t=s(),L=l("div"),L.textContent=Te,Nt=s(),M=l("p"),M.innerHTML=Ae,this.h()},l(t){o=n(t,"H3",{"data-svelte-h":!0}),h(o)!=="svelte-x6d9g1"&&(o.textContent=p),f=r(t),c=n(t,"UL",{});var i=m(c);u=n(i,"LI",{"data-svelte-h":!0}),h(u)!=="svelte-12c5gag"&&(u.textContent=I),P=r(i),U=n(i,"LI",{});var _t=m(U);Ft=rt(_t,`In the markdown, front-matter attributes are defined at the top of the file
`),v=n(_t,"UL",{});var b=m(v);dt=n(b,"LI",{});var ke=m(dt);F=n(ke,"PRE",{class:!0});var De=m(F);yt=xt(De,!1),De.forEach(a),ke.forEach(a),zt=r(b),z=n(b,"LI",{"data-svelte-h":!0}),h(z)!=="svelte-1v3jr6y"&&(z.textContent=fe),jt=r(b),ut=n(b,"LI",{});var He=m(ut);j=n(He,"PRE",{class:!0});var $e=m(j);It=xt($e,!1),$e.forEach(a),He.forEach(a),St=r(b),S=n(b,"LI",{"data-svelte-h":!0}),h(S)!=="svelte-arr7zn"&&(S.innerHTML=ce),Gt=r(b),G=n(b,"LI",{"data-svelte-h":!0}),h(G)!=="svelte-fbmynq"&&(G.textContent=me),b.forEach(a),_t.forEach(a),Ot=r(i),O=n(i,"LI",{"data-svelte-h":!0}),h(O)!=="svelte-1o5n7ic"&&(O.innerHTML=he),Bt=r(i),B=n(i,"LI",{"data-svelte-h":!0}),h(B)!=="svelte-1dafjj9"&&(B.textContent=pe),Vt=r(i),V=n(i,"LI",{"data-svelte-h":!0}),h(V)!=="svelte-1rv7izw"&&(V.textContent=_e),i.forEach(a),wt=r(t),A=n(t,"H3",{"data-svelte-h":!0}),h(A)!=="svelte-1qlicw0"&&(A.textContent=ve),bt=r(t),k=n(t,"UL",{"data-svelte-h":!0}),h(k)!=="svelte-zwcloe"&&(k.innerHTML=ge),qt=r(t),R=n(t,"IMG",{src:!0,alt:!0,class:!0}),Ct=r(t),D=n(t,"H3",{"data-svelte-h":!0}),h(D)!=="svelte-ktbsy9"&&(D.textContent=ye),Lt=r(t),x=n(t,"UL",{});var T=m(x);Y=n(T,"LI",{"data-svelte-h":!0}),h(Y)!=="svelte-1ubzedl"&&(Y.textContent=Ie),Yt=r(T),Q=n(T,"LI",{"data-svelte-h":!0}),h(Q)!=="svelte-nwd86n"&&(Q.innerHTML=we),Qt=r(T),W=n(T,"LI",{});var ne=m(W);Wt=rt(ne,`Place the component in the body of the .d3md file:
`),ft=n(ne,"UL",{});var Ne=m(ft);ct=n(Ne,"LI",{});var Me=m(ct);J=n(Me,"PRE",{class:!0});var Pe=m(J);Rt=xt(Pe,!1),Pe.forEach(a),Me.forEach(a),Ne.forEach(a),ne.forEach(a),Jt=r(T),K=n(T,"LI",{});var ie=m(K);Kt=rt(ie,`If the component requires data to be fetched and loaded, you can do that inside the script tag: 
`),C=n(ie,"UL",{});var it=m(C);mt=n(it,"LI",{});var Ue=m(mt);X=n(Ue,"PRE",{class:!0});var Fe=m(X);Et=xt(Fe,!1),Fe.forEach(a),Ue.forEach(a),Xt=r(it),Z=n(it,"LI",{"data-svelte-h":!0}),h(Z)!=="svelte-th5x4t"&&(Z.innerHTML=be),Zt=r(it),tt=n(it,"LI",{"data-svelte-h":!0}),h(tt)!=="svelte-gx5h4o"&&(tt.textContent=qe),it.forEach(a),ie.forEach(a),T.forEach(a),Tt=r(t),H=n(t,"DIV",{});var ze=m(H);g.block.l(ze),ze.forEach(a),At=r(t),re($.$$.fragment,t),kt=r(t),N=n(t,"H3",{"data-svelte-h":!0}),h(N)!=="svelte-1nj8d8q"&&(N.textContent=Ce),Dt=r(t),w=n(t,"UL",{});var ot=m(w);et=n(ot,"LI",{"data-svelte-h":!0}),h(et)!=="svelte-1tigwee"&&(et.textContent=Le),te=r(ot),E=n(ot,"LI",{});var vt=m(E);ee=rt(vt,"If you have the raw mermiad text simply put it in a "),at=n(vt,"CODE",{"data-svelte-h":!0}),h(at)!=="svelte-noso26"&&(at.textContent=Re),ae=rt(vt,` with id=mermaid: 
`),ht=n(vt,"UL",{});var je=m(ht);pt=n(je,"LI",{});var Se=m(pt);lt=n(Se,"PRE",{class:!0});var Ge=m(lt);Ht=xt(Ge,!1),Ge.forEach(a),Se.forEach(a),je.forEach(a),vt.forEach(a),le=r(ot),nt=n(ot,"LI",{"data-svelte-h":!0}),h(nt)!=="svelte-r2j9k"&&(nt.textContent=Ee),ot.forEach(a),$t=r(t),L=n(t,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),h(L)!=="svelte-x3uqvk"&&(L.textContent=Te),Nt=r(t),M=n(t,"P",{"data-svelte-h":!0}),h(M)!=="svelte-1y6x1un"&&(M.innerHTML=Ae),this.h()},h(){yt.a=null,q(F,"class","language-undefined"),It.a=null,q(j,"class","language-undefined"),Ze(R.src,xe="/img/mitre.png")||q(R,"src",xe),q(R,"alt",""),q(R,"class","w-20"),Rt.a=null,q(J,"class","language-undefined"),Et.a=null,q(X,"class","language-undefined"),Ht.a=null,q(lt,"class","language-undefined"),q(L,"id","mermaid"),q(L,"class","text-center")},m(t,i){d(t,o,i),d(t,f,i),d(t,c,i),e(c,u),e(c,P),e(c,U),e(U,Ft),e(U,v),e(v,dt),e(dt,F),yt.m(Ye,F),e(v,zt),e(v,z),e(v,jt),e(v,ut),e(ut,j),It.m(Qe,j),e(v,St),e(v,S),e(v,Gt),e(v,G),e(c,Ot),e(c,O),e(c,Bt),e(c,B),e(c,Vt),e(c,V),d(t,wt,i),d(t,A,i),d(t,bt,i),d(t,k,i),d(t,qt,i),d(t,R,i),d(t,Ct,i),d(t,D,i),d(t,Lt,i),d(t,x,i),e(x,Y),e(x,Yt),e(x,Q),e(x,Qt),e(x,W),e(W,Wt),e(W,ft),e(ft,ct),e(ct,J),Rt.m(We,J),e(x,Jt),e(x,K),e(K,Kt),e(K,C),e(C,mt),e(mt,X),Et.m(Je,X),e(C,Xt),e(C,Z),e(C,Zt),e(C,tt),d(t,Tt,i),d(t,H,i),g.block.m(H,g.anchor=null),g.mount=()=>H,g.anchor=null,d(t,At,i),de($,t,i),d(t,kt,i),d(t,N,i),d(t,Dt,i),d(t,w,i),e(w,et),e(w,te),e(w,E),e(E,ee),e(E,at),e(E,ae),e(E,ht),e(ht,pt),e(pt,lt),Ht.m(Ke,lt),e(w,le),e(w,nt),d(t,$t,i),d(t,L,i),d(t,Nt,i),d(t,M,i),Mt=!0},p(t,i){_=t,ea(g,_,i)},i(t){Mt||(Pt(g.block),Pt($.$$.fragment,t),Mt=!0)},o(t){for(let i=0;i<3;i+=1){const _t=g.blocks[i];Ut(_t)}Ut($.$$.fragment,t),Mt=!1},d(t){t&&(a(o),a(f),a(c),a(wt),a(A),a(bt),a(k),a(qt),a(R),a(Ct),a(D),a(Lt),a(x),a(Tt),a(H),a(At),a(kt),a(N),a(Dt),a(w),a($t),a(L),a(Nt),a(M)),g.block.d(),g.token=null,g=null,ue($,t)}}}function ca(_){let o,p;const f=[_[1],Ve];let c={$$slots:{default:[fa]},$$scope:{ctx:_}};for(let u=0;u<f.length;u+=1)c=oe(c,f[u]);return o=new ia({props:c}),{c(){se(o.$$.fragment)},l(u){re(o.$$.fragment,u)},m(u,I){de(o,u,I),p=!0},p(u,[I]){const P=I&2?na(f,[I&2&&Be(u[1]),I&0&&Be(Ve)]):{};I&8&&(P.$$scope={dirty:I,ctx:u}),o.$set(P)},i(u){p||(Pt(o.$$.fragment,u),p=!0)},o(u){Ut(o.$$.fragment,u),p=!1},d(u){ue(o,u)}}}const Ve={title:"How to Add an Article Post - D3VELOPERS",description:"This post outlines how successfully add an article post to this page. It also describes the capabilities within each post and how to utilize them.",tags:"D3VELOPERS, how-to, post",category:"TUTORIAL",last_modified:"May 3, 2023 01:00:00",authors:"Naveed Nekoo",version:"0.12.0-BETA-2",target_audience:"D3VELOPERS",layout:"d3fend_post"};async function ma(){const _=await fetch("/api/dao/artifact/d3f:NetworkTraffic.json"),o=await _.json();if(_.ok)return o}function ha(_,o,p){let f=ma();return _.$$set=c=>{p(1,o=oe(oe({},o),Oe(c)))},o=Oe(o),[f,o]}class wa extends aa{constructor(o){super(),la(this,o,ha,ca,Xe,{})}}export{wa as default,Ve as metadata};
