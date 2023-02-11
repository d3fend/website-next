import{m as l}from"./marked.esm-5a9deb85.js";function h(t){return typeof t=="string"?l(t):JSON.stringify(t)}class c{constructor(e,r){if(this.context=e["@context"],this.graph=e["@graph"],this.options={index:!1,index_key:"@id"},r&&(this.options={...this.options,...r}),this.options.index){this.index={};let s=0;this.graph.forEach(n=>{this.index[n[this.options.index_key]]=s,s++})}}get length(){return this.graph.length}i(e){let r=this.graph[this.index[e]];if(!r)throw new Error(`Graph.i(${e}) indexed lookup found no result in graph. The object may not exist in the graph.`);return r}search(e,r){return this.graph.filter(n=>n[e]==r)}get(e,r){return this.graph.filter(n=>n[e]==r)[0]}get_multi_value(e,r){return this.graph.filter(n=>{if(n.hasOwnProperty(e)){let i=n[e];return typeof i=="string"?i==r:i.includes(r)}})[0]}get_multi_value_anycase(e,r){return this.graph.filter(n=>{if(n.hasOwnProperty(e)){let i=n[e];return typeof i=="string"?i.toLowerCase()==r.toLowerCase():i.map(a=>a.toLowerCase()).includes(r.toLowerCase())}})[0]}get_and_cache(e,r){let s=this.graph.filter(n=>n[e]==r);return this.current_node=s[0],this.current_node}get_cached(){return this.current_node}get_by_type(e){return this.graph.filter(s=>s["@type"].includes(e))}get_all_values(e){let r=[];return this.graph.forEach(s=>{s.hasOwnProperty(e)&&(typeof s[e]=="string"?r.push(s[e]):r.push(...s[e]))}),r}}class p{constructor(){this.unique_edges=new Set}edge_is_unique(e,r,s){let n=`${e}${r}${s}`;return this.unique_edges.has(n)?!1:(this.unique_edges.add(n),!0)}}function g(t){let e="https://attack.mitre.org/techniques";if(t.includes(".")){let r=t.split(".")[0],s=t.split(".")[1];return`${e}/${r}/${s}/`}else return`${e}/${t}/`}function d(t){return`/offensive-technique/attack/${t}/`}function _(t){return`https://attack.mitre.org/mitigations/${t}/`}function b(t){return"d3f:"+t.split("#")[1]}function x(t){if(t.includes("#")){let r=t.split("#").length;var e=t.split("#")[r-1]}else if(t.includes(":")){let r=t.split(":").length;var e=t.split(":")[r-1]}return e}function u(t,e){let r=new RegExp(e+"$");return t.replace(r,"")}function o(t,e){let r=new RegExp("^"+e);return t.replace(r,"")}function y(t,e){let r=u(t,e);return o(r,e)}function w(t){return t==null?"":t.hasOwnProperty("rdfs:label")?t["rdfs:label"]:(console.debug(t),console.debug("item has no label: "+t),"no rdfs:label found")}function k(t){return t.hasOwnProperty("skos:altLabel")?[].concat(t["skos:altLabel"]).join(" "):t.hasOwnProperty("d3f:synonym")?[].concat(t["d3f:synonym"]).join(" "):""}function $(t){navigator.clipboard.writeText(t)}export{c as G,p as T,w as a,k as b,_ as c,d,b as e,g as f,x as g,h,$ as i,y as s};
