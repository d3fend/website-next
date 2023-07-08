import{m as a}from"./marked.esm.76161808.js";function f(t){return t.sort((e,r)=>e["@id"].localeCompare(r["@id"]))}function h(t){return typeof t=="string"?a(t):JSON.stringify(t)}class p{constructor(e,r){if(this.context=e["@context"],this.graph=e["@graph"],this.options={index:!1,index_key:"@id"},r&&(this.options={...this.options,...r}),this.options.index){this.index={};let n=0;this.graph.forEach(s=>{this.index[s[this.options.index_key]]=n,n++})}}get length(){return this.graph.length}i(e){let r=this.graph[this.index[e]];return r||console.error(`Graph.i(${e}) indexed lookup found no result in graph. The object may not exist in the graph.`),r}search(e,r){return this.graph.filter(s=>s[e]==r)}get(e,r){return this.graph.filter(s=>s[e]==r)[0]}get_multi_value(e,r){return this.graph.filter(s=>{if(s.hasOwnProperty(e)){let i=s[e];return typeof i=="string"?i==r:i.includes(r)}})[0]}get_multi_value_anycase(e,r){return this.graph.filter(s=>{if(s.hasOwnProperty(e)){let i=s[e];return typeof i=="string"?i.toLowerCase()==r.toLowerCase():i.map(l=>l.toLowerCase()).includes(r.toLowerCase())}})[0]}get_and_cache(e,r){let n=this.graph.filter(s=>s[e]==r);return this.current_node=n[0],this.current_node}get_cached(){return this.current_node}get_by_type(e){return this.graph.filter(n=>n["@type"].includes(e))}get_all_values(e){let r=[];return this.graph.forEach(n=>{n.hasOwnProperty(e)&&(typeof n[e]=="string"?r.push(n[e]):r.push(...n[e]))}),r}get_sorted_nodes(e){var r=new Intl.Collator([],{numeric:!0});return this.graph.toSorted((n,s)=>r.compare(n[e],s[e]))}}class g{constructor(){this.unique_edges=new Set}edge_is_unique(e,r,n){let s=`${e}${r}${n}`;return this.unique_edges.has(s)?!1:(this.unique_edges.add(s),!0)}reset(){this.unique_edges.clear()}}function _(t){let e="https://attack.mitre.org/techniques";if(t.includes(".")){let r=t.split(".")[0],n=t.split(".")[1];return`${e}/${r}/${n}/`}else return`${e}/${t}/`}function d(t){return`/offensive-technique/attack/${t}/`}function k(t){return`https://attack.mitre.org/mitigations/${t}/`}function b(t){return`/weakness/cwe/${t}`}function w(t){return`https://cwe.mitre.org/data/definitions/${t.split("-")[1]}.html`}function x(t){return"d3f:"+t.split("#")[1]}function y(t){let e;if(t.includes("#")){let r=t.split("#").length;e=t.split("#")[r-1]}else if(t.includes(":")){let r=t.split(":").length;e=t.split(":")[r-1]}return e}function u(t,e){let r=new RegExp(e+"$");return t.replace(r,"")}function o(t,e){let r=new RegExp("^"+e);return t.replace(r,"")}function $(t,e){let r=u(t,e);return o(r,e)}function m(t){return t==null?"":t.hasOwnProperty("rdfs:label")?t["rdfs:label"]:(console.debug(t),console.debug("item has no label: "+t),"no rdfs:label found")}function q(t){return t.hasOwnProperty("skos:altLabel")?[].concat(t["skos:altLabel"]).join(" "):t.hasOwnProperty("d3f:synonym")?[].concat(t["d3f:synonym"]).join(" "):""}function C(t){navigator.clipboard.writeText(t)}function O(t,e){return t.length==e.length&&t.every(function(r,n){return r===e[n]})}export{p as G,g as T,x as a,m as b,q as c,k as d,f as e,d as f,_ as g,y as h,O as i,b as j,w as k,h as l,C as m,$ as s};
