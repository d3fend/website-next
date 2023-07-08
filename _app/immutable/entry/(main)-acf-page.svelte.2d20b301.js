import{S as It,b as Rt,s as zt,a0 as St,y as be,j as f,f as i,h,z as De,p as m,k as s,l as n,m as p,o as a,G as r,Q as kt,A as ge,q as D,v as e,P as Bt,t as Te,e as _e,B as Ae,n as Pt}from"../chunks/index.f8777a79.js";import{T as Lt}from"../chunks/TaxoMatrix.ee86a9d0.js";import{G as Wt}from"../chunks/_Graph.034cbe67.js";import{G as Mt}from"../chunks/lib.576aa631.js";import{A as Ut}from"../chunks/Alert.eb4712db.js";import{T as Gt}from"../chunks/Title.b950d120.js";/* empty css                                                                 */function Ot(T){let u,l,b,y;return{c(){u=h(`flowchart TD
            subgraph TITLE[`),l=i("b"),b=h("Characterizing D3FEND Techniques with Analytic Techniques "),y=h(`]
                direction LR
                subgraph Capabilities Mapped to D3FEND Techniques
                direction LR
                P1["Cyber capability/product X"] -->|solves domain problem| DP1["Network Traffic Analysis"]
                P1 -->|solves domain problem| DP2["User Behavior Analysis"]
                end

                subgraph Specific Analtyic Techniques Used by Implementation
                direction LR
                DP1["File Analysis"] -->|may be implemented with| AT1["Decision Trees"]
                DP1 -->|may be implemented with| AT2["String Pattern Matching"]
                DP2["Network Traffic Analysis"] -->|may be implemented with| AT3["Regression Analysis"]
                AT1 -->|is a | CA["Analytic Technique"]
                AT2 -->|is a | CA
                AT3 -->|is a | CA
                end
            end


            class DP1 DefensiveTechniqueNode
            click DP1 href "technique/d3f:FileAnalysis"
            class DP2 DefensiveTechniqueNode
            click DP2 href "technique/d4f:NetworkTrafficAnalysis"`)},l(o){u=p(o,`flowchart TD
            subgraph TITLE[`),l=s(o,"B",{});var v=n(l);b=p(v,"Characterizing D3FEND Techniques with Analytic Techniques "),v.forEach(a),y=p(o,`]
                direction LR
                subgraph Capabilities Mapped to D3FEND Techniques
                direction LR
                P1["Cyber capability/product X"] -->|solves domain problem| DP1["Network Traffic Analysis"]
                P1 -->|solves domain problem| DP2["User Behavior Analysis"]
                end

                subgraph Specific Analtyic Techniques Used by Implementation
                direction LR
                DP1["File Analysis"] -->|may be implemented with| AT1["Decision Trees"]
                DP1 -->|may be implemented with| AT2["String Pattern Matching"]
                DP2["Network Traffic Analysis"] -->|may be implemented with| AT3["Regression Analysis"]
                AT1 -->|is a | CA["Analytic Technique"]
                AT2 -->|is a | CA
                AT3 -->|is a | CA
                end
            end


            class DP1 DefensiveTechniqueNode
            click DP1 href "technique/d3f:FileAnalysis"
            class DP2 DefensiveTechniqueNode
            click DP2 href "technique/d4f:NetworkTrafficAnalysis"`)},m(o,v){D(o,u,v),D(o,l,v),e(l,b),D(o,y,v)},p:Pt,d(o){o&&a(u),o&&a(l),o&&a(y)}}}function Vt(T){let u,l,b,y;return{c(){u=h("This is an alpha-level taxonomy and framework within D3FEND. We are releasing it to request feedback and "),l=i("a"),b=h("contributions"),y=h(" from the community."),this.h()},l(o){u=p(o,"This is an alpha-level taxonomy and framework within D3FEND. We are releasing it to request feedback and "),l=s(o,"A",{href:!0});var v=n(l);b=p(v,"contributions"),v.forEach(a),y=p(o," from the community."),this.h()},h(){r(l,"href","/contribute")},m(o,v){D(o,u,v),D(o,l,v),e(l,b),D(o,y,v)},p:Pt,d(o){o&&a(u),o&&a(l),o&&a(y)}}}function Ht(T){let u,l,b,y,o,v,_,d,w,B,K,Ee,we,E,F,L,W,x,rt,$e,M,U,P,lt,Fe,qe,Ne,G,J,ke,xe,Pe,Ce,Ie,Re,C,ze,Y,Se,Be,Le,O,We,Z,V,Me,Ue,ee,Ge,Oe,I,Ve,H,He,je,Qe,j,R,q,Xe,Q,Ke,Je,A,te,Ye,Ze,ae,et,tt,ie,at,it,ne,oe,re,le,N,ce,z,st,fe,me,he,S,pe,nt,ct;return St(T[4]),u=new Gt({props:{title:`D3FEND ${T[1].i(xt)["rdfs:label"]} Taxonomy`}}),q=new Wt({props:{$$slots:{default:[Ot]},$$scope:{ctx:T}}}),N=new Ut({props:{$$slots:{default:[Vt]},$$scope:{ctx:T}}}),S=new Lt({props:{g:T[1],root_node_id:xt,max_depth:jt,row_depth:Qt,collapsable:!1,subject_base_url:Xt}}),{c(){be(u.$$.fragment),l=f(),b=i("div"),y=i("span"),o=h("D3FEND ACF"),v=f(),_=i("div"),d=i("section"),w=i("h5"),B=i("span"),K=i("i"),Ee=h("Analytic Characterization Framework"),we=f(),E=i("div"),F=i("div"),L=i("div"),W=i("a"),x=i("img"),$e=f(),M=i("div"),U=i("a"),P=i("img"),Fe=f(),qe=i("br"),Ne=f(),G=i("div"),J=i("small"),ke=h(`This extension to D3FEND is funded by Office of the Undersecretary of Defense (Research and Engineering), 
                Developmental Test, Evaluation, and Assessments (DTE&A)`),xe=f(),Pe=i("br"),Ce=f(),Ie=i("br"),Re=f(),C=i("p"),ze=h("What is an analytic? In technology, this is a term often used, but not often defined. For our purposes we’ll use the Cambridge Dictionary’s definition for the term "),Y=i("b"),Se=h("analytic"),Be=h(":"),Le=f(),O=i("blockquote"),We=h(`"A process in which a computer examines information using mathematical methods in order to find useful patterns."
            `),Z=i("cite"),V=i("a"),Me=h("Cambridge Dictionary"),Ue=f(),ee=i("p"),Ge=h("Technical capabilities often solve a set of domain problems by performing a set of specific technical functions. With D3FEND, we catalog these discreet functions as they pertain to cybersecurity, we call these D3FEND Techniques. Capability developers use analytics to make sense of or act on the data they are processing. Their implementations can be simple conditional logic or matching, or something more sophisticated like in model-driven approaches. Sometimes simple is better than complex. Other times, you need a complex approach to solve a complex problem. It is always situation dependent."),Oe=f(),I=i("p"),Ve=h("The "),H=i("b"),He=h("D3FEND Analytic Characterization Framework"),je=h(` provides the language necessary to describe the specific technical 
        implementation of a D3FEND technique or even abstract method.`),Qe=f(),j=i("div"),R=i("figure"),be(q.$$.fragment),Xe=f(),Q=i("figcaption"),Ke=h("Essential ACF Concepts and Relationships"),Je=f(),A=i("section"),te=i("p"),Ye=h(`The above diagram depicts our intended use of this framework. These analytic techniques are used to characterize the implementation of 
        D3FEND techniques. We envision multiple use cases for this extension to D3FEND.`),Ze=f(),ae=i("p"),et=h('First, we seek to advance the state of the art in testing knowledge management for verification (does the capability meet its specification) and validation (is the capability fit for operational purpose). A knowledgebase is necessary to drive consistency across a community of engineers who design and execute tests. We have not found a sufficient taxonomy of these mathematical methods or "Analytic Techniques".'),tt=f(),ie=i("p"),at=h(`Another use case is supporting analysis of alternatives. Accurately characterizing a capability's domain function and implementation logic ensures you're making valid comparisons between capabilities. 
        It also can also ensure that a capabilty is a good match for the particular situation and intended problem set.`),it=f(),ne=i("p"),oe=f(),re=i("br"),le=f(),be(N.$$.fragment),ce=f(),z=i("h1"),st=h("Analytic Technique Taxonomy"),fe=f(),me=i("br"),he=f(),be(S.$$.fragment),this.h()},l(t){De(u.$$.fragment,t),l=m(t),b=s(t,"DIV",{class:!0});var c=n(b);y=s(c,"SPAN",{class:!0});var se=n(y);o=p(se,"D3FEND ACF"),se.forEach(a),c.forEach(a),v=m(t),_=s(t,"DIV",{});var $=n(_);d=s($,"SECTION",{class:!0});var g=n(d);w=s(g,"H5",{class:!0});var ft=n(w);B=s(ft,"SPAN",{class:!0});var mt=n(B);K=s(mt,"I",{});var ht=n(K);Ee=p(ht,"Analytic Characterization Framework"),ht.forEach(a),mt.forEach(a),ft.forEach(a),we=m(g),E=s(g,"DIV",{class:!0});var X=n(E);F=s(X,"DIV",{class:!0});var de=n(F);L=s(de,"DIV",{class:!0});var pt=n(L);W=s(pt,"A",{href:!0});var dt=n(W);x=s(dt,"IMG",{class:!0,alt:!0,src:!0}),dt.forEach(a),pt.forEach(a),$e=m(de),M=s(de,"DIV",{class:!0});var ut=n(M);U=s(ut,"A",{href:!0});var yt=n(U);P=s(yt,"IMG",{class:!0,alt:!0,src:!0}),yt.forEach(a),ut.forEach(a),de.forEach(a),Fe=m(X),qe=s(X,"BR",{}),Ne=m(X),G=s(X,"DIV",{class:!0});var vt=n(G);J=s(vt,"SMALL",{});var bt=n(J);ke=p(bt,`This extension to D3FEND is funded by Office of the Undersecretary of Defense (Research and Engineering), 
                Developmental Test, Evaluation, and Assessments (DTE&A)`),bt.forEach(a),vt.forEach(a),X.forEach(a),xe=m(g),Pe=s(g,"BR",{}),Ce=m(g),Ie=s(g,"BR",{}),Re=m(g),C=s(g,"P",{});var ue=n(C);ze=p(ue,"What is an analytic? In technology, this is a term often used, but not often defined. For our purposes we’ll use the Cambridge Dictionary’s definition for the term "),Y=s(ue,"B",{});var Dt=n(Y);Se=p(Dt,"analytic"),Dt.forEach(a),Be=p(ue,":"),ue.forEach(a),Le=m(g),O=s(g,"BLOCKQUOTE",{});var ot=n(O);We=p(ot,`"A process in which a computer examines information using mathematical methods in order to find useful patterns."
            `),Z=s(ot,"CITE",{});var gt=n(Z);V=s(gt,"A",{href:!0});var Tt=n(V);Me=p(Tt,"Cambridge Dictionary"),Tt.forEach(a),gt.forEach(a),ot.forEach(a),Ue=m(g),ee=s(g,"P",{});var _t=n(ee);Ge=p(_t,"Technical capabilities often solve a set of domain problems by performing a set of specific technical functions. With D3FEND, we catalog these discreet functions as they pertain to cybersecurity, we call these D3FEND Techniques. Capability developers use analytics to make sense of or act on the data they are processing. Their implementations can be simple conditional logic or matching, or something more sophisticated like in model-driven approaches. Sometimes simple is better than complex. Other times, you need a complex approach to solve a complex problem. It is always situation dependent."),_t.forEach(a),Oe=m(g),I=s(g,"P",{});var ye=n(I);Ve=p(ye,"The "),H=s(ye,"B",{class:!0});var At=n(H);He=p(At,"D3FEND Analytic Characterization Framework"),At.forEach(a),je=p(ye,` provides the language necessary to describe the specific technical 
        implementation of a D3FEND technique or even abstract method.`),ye.forEach(a),g.forEach(a),Qe=m($),j=s($,"DIV",{class:!0});var Et=n(j);R=s(Et,"FIGURE",{});var ve=n(R);De(q.$$.fragment,ve),Xe=m(ve),Q=s(ve,"FIGCAPTION",{class:!0});var wt=n(Q);Ke=p(wt,"Essential ACF Concepts and Relationships"),wt.forEach(a),ve.forEach(a),Et.forEach(a),Je=m($),A=s($,"SECTION",{class:!0});var k=n(A);te=s(k,"P",{});var $t=n(te);Ye=p($t,`The above diagram depicts our intended use of this framework. These analytic techniques are used to characterize the implementation of 
        D3FEND techniques. We envision multiple use cases for this extension to D3FEND.`),$t.forEach(a),Ze=m(k),ae=s(k,"P",{});var Ft=n(ae);et=p(Ft,'First, we seek to advance the state of the art in testing knowledge management for verification (does the capability meet its specification) and validation (is the capability fit for operational purpose). A knowledgebase is necessary to drive consistency across a community of engineers who design and execute tests. We have not found a sufficient taxonomy of these mathematical methods or "Analytic Techniques".'),Ft.forEach(a),tt=m(k),ie=s(k,"P",{});var qt=n(ie);at=p(qt,`Another use case is supporting analysis of alternatives. Accurately characterizing a capability's domain function and implementation logic ensures you're making valid comparisons between capabilities. 
        It also can also ensure that a capabilty is a good match for the particular situation and intended problem set.`),qt.forEach(a),it=m(k),ne=s(k,"P",{});var Ct=n(ne);Ct.forEach(a),k.forEach(a),$.forEach(a),oe=m(t),re=s(t,"BR",{}),le=m(t),De(N.$$.fragment,t),ce=m(t),z=s(t,"H1",{class:!0});var Nt=n(z);st=p(Nt,"Analytic Technique Taxonomy"),Nt.forEach(a),fe=m(t),me=s(t,"BR",{}),he=m(t),De(S.$$.fragment,t),this.h()},h(){r(y,"class","fancy-font"),r(b,"class","logo text-center"),r(B,"class","fancy-font"),r(w,"class","text-center"),r(x,"class","sponsor_logo svelte-1ma7l2e"),r(x,"alt","USD R&E logo"),kt(x.src,rt="/img/usdre.png")||r(x,"src",rt),r(W,"href","https://ac.cto.mil/"),r(L,"class","flex-column svelte-1ma7l2e"),r(P,"class","sponsor_logo svelte-1ma7l2e"),r(P,"alt","USD R&E logo"),kt(P.src,lt="/img/dtea.png")||r(P,"src",lt),r(U,"href","https://ac.cto.mil/dte/about-dtea/"),r(M,"class","flex-column svelte-1ma7l2e"),r(F,"class","flex flex-center"),r(G,"class",""),r(E,"class","text-center logos svelte-1ma7l2e"),r(V,"href","https://dictionary.cambridge.org/us/dictionary/english/analytics"),r(H,"class","italic"),r(d,"class","content"),r(Q,"class","s-PalH6l0zoH1z"),r(j,"class","text-center center"),r(A,"class","content"),r(z,"class","text-center")},m(t,c){ge(u,t,c),D(t,l,c),D(t,b,c),e(b,y),e(y,o),D(t,v,c),D(t,_,c),e(_,d),e(d,w),e(w,B),e(B,K),e(K,Ee),e(d,we),e(d,E),e(E,F),e(F,L),e(L,W),e(W,x),e(F,$e),e(F,M),e(M,U),e(U,P),e(E,Fe),e(E,qe),e(E,Ne),e(E,G),e(G,J),e(J,ke),e(d,xe),e(d,Pe),e(d,Ce),e(d,Ie),e(d,Re),e(d,C),e(C,ze),e(C,Y),e(Y,Se),e(C,Be),e(d,Le),e(d,O),e(O,We),e(O,Z),e(Z,V),e(V,Me),e(d,Ue),e(d,ee),e(ee,Ge),e(d,Oe),e(d,I),e(I,Ve),e(I,H),e(H,He),e(I,je),e(_,Qe),e(_,j),e(j,R),ge(q,R,null),e(R,Xe),e(R,Q),e(Q,Ke),e(_,Je),e(_,A),e(A,te),e(te,Ye),e(A,Ze),e(A,ae),e(ae,et),e(A,tt),e(A,ie),e(ie,at),e(A,it),e(A,ne),D(t,oe,c),D(t,re,c),D(t,le,c),ge(N,t,c),D(t,ce,c),D(t,z,c),e(z,st),D(t,fe,c),D(t,me,c),D(t,he,c),ge(S,t,c),pe=!0,nt||(ct=Bt(window,"resize",T[4]),nt=!0)},p(t,[c]){const se={};c&128&&(se.$$scope={dirty:c,ctx:t}),q.$set(se);const $={};c&128&&($.$$scope={dirty:c,ctx:t}),N.$set($)},i(t){pe||(Te(u.$$.fragment,t),Te(q.$$.fragment,t),Te(N.$$.fragment,t),Te(S.$$.fragment,t),pe=!0)},o(t){_e(u.$$.fragment,t),_e(q.$$.fragment,t),_e(N.$$.fragment,t),_e(S.$$.fragment,t),pe=!1},d(t){Ae(u,t),t&&a(l),t&&a(b),t&&a(v),t&&a(_),Ae(q),t&&a(oe),t&&a(re),t&&a(le),Ae(N,t),t&&a(ce),t&&a(z),t&&a(fe),t&&a(me),t&&a(he),Ae(S,t),nt=!1,ct()}}}let jt=9,Qt=1,xt="d3f:AnalyticTechnique",Xt="/acf/technique";function Kt(T,u,l){let b,{data:y}=u,o=new Mt(y,{index:!0}),v,_;function d(){l(0,_=window.outerWidth)}return T.$$set=w=>{"data"in w&&l(2,y=w.data)},T.$$.update=()=>{T.$$.dirty&1&&l(3,b=Math.abs(100-100*Math.abs(1-_/v))),T.$$.dirty&8},[_,o,y,b,d]}class sa extends It{constructor(u){super(),Rt(this,u,Kt,Ht,zt,{data:2})}}export{sa as default};
