import{s as E,e as u,b as g,M as N,d as h,f,j as y,N as T,i as D,w as C,k as v,l as r,n as F}from"../chunks/scheduler.g8N5vUpP.js";import{S as A,i as _,c as S,b as k,m as w,t as x,a as L,d as $}from"../chunks/index.DzcqoJ5-.js";import{m as O}from"../chunks/marked.esm.D23x4JZT.js";import{C as j}from"../chunks/CADHeader.D_YPxf2a.js";function G(c){let e,l,m,n,d,a,s,b=O(c[0])+"",i;return n=new j({}),{c(){e=u("div"),l=u("br"),m=g(),S(n.$$.fragment),d=g(),a=u("section"),s=new N(!1),this.h()},l(t){e=h(t,"DIV",{});var o=f(e);l=h(o,"BR",{}),m=y(o),k(n.$$.fragment,o),d=y(o),a=h(o,"SECTION",{class:!0});var p=f(a);s=T(p,!1),p.forEach(D),o.forEach(D),this.h()},h(){s.a=null,C(a,"class","content")},m(t,o){v(t,e,o),r(e,l),r(e,m),w(n,e,null),r(e,d),r(e,a),s.m(b,a),i=!0},p:F,i(t){i||(x(n.$$.fragment,t),i=!0)},o(t){L(n.$$.fragment,t),i=!1},d(t){t&&D(e),$(n)}}}function I(c){return[`
# D3FEND CAD User Documentation
Put the D3FEND ontology into action with the D3FEND CAD Tool!

CAD is designed to be versatile and to support many modeling and diagramming use cases. When you create a CAD diagram you are implementing the D3FEND ontology, also known as "instances" of the ontology's classes. 

## 1. Quickstart
- See the examples by clicking <button>Example Graphs</button> button.
  - The shadowcat.json example models a CTI Report.
  - The bushwalk.json examples models malware "procedures".
  - The disk-formatting-contribution.json  represents an advanced use case of CAD.
- Drag and drop nodes onto the canvas to create your scenario, connect them by hovering over a node.
- Click the <d3fend class> on any node to select the correct class, *you can type to filter*.
- Right click the various node types to apply ontology inference results to your diagram.
- Connect nodes together, and select D3FEND object properties with autocomplete.
- Extend the D3FEND ontology yourself! See the disk-formatting-contribution.json example.

## 2. Saving and loading

### 2.1 Loading
You can load a D3FEND CAD JSON file from your file system by clicking <button>Load</button>.
### 2.2 D3FEND CAD JSON
This is the native format the D3FEND CAD GUI uses. You can save a D3FEND CAD JSON file to your computer by clicking <button>Save</button>.
### 2.4 D3FEND CAD TTL
This format creates a file with D3FEND instances stored in Terse Triple Language (TTL). You can save a D3FEND CAD JSON file to your computer by clicking <button>Save As</button>.
### 2.5 Creating a D3FEND Extension (TTL)
This format creates a D3FEND Extension file you can submit to the D3FEND team to add new concepts and relationships to the D3FEND ontology. An extension is serialized in the Terse Triple Language (TTL). You can save a D3FEND Extension file to your computer by clicking <button>Save As</button>.

## 3. Sharing and Embedding


## 4. [Design](design)
### 4.1 [CAD Schema](schema)
### 4.2 [CAD Graph to Semantic Graph Conversions](/cad/docs/design#CAD-Graph-to-Semantic-Graph-Conversions)


## 5 Terminology

The D3FEND ontology is represented in the OWL2-DL specification. Ontologies in OWL2-DL can be serialized into json-ld, rdf/xml, and ttl formats. The D3FEND team prefers the ttl format.

The ontology comprises classes, object properties, data properties, and annotation properties. Additionally it includes OWL axioms.


`]}class R extends A{constructor(e){super(),_(this,e,I,G,E,{})}}export{R as component};
