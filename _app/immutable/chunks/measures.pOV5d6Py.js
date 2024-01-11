import{w as L}from"./index.wZ80w3Bq.js";import{c as R}from"./_createCompounder.oCNsAIha.js";import{P as f,S as j,f as _}from"./consts.d4TzO-0d.js";var I={local:{},session:{}};function A(u){return u==="local"?localStorage:sessionStorage}function U(u,a,r){var i,M;const q=(i=r?.serializer)!=null?i:JSON,m=(M=r?.storage)!=null?M:"local",P=typeof window<"u"&&typeof document<"u",T=P?A(m):null;function C(g,b){T?.setItem(g,q.stringify(b))}if(!I[m][u]){const g=L(a,p=>{const v=T?.getItem(u);if(v&&p(q.parse(v)),P&&m=="local"){const x=S=>{S.key===u&&p(S.newValue?q.parse(S.newValue):null)};return window.addEventListener("storage",x),()=>window.removeEventListener("storage",x)}}),{subscribe:b,set:O}=g;I[m][u]={set(p){C(u,p),O(p)},update(p){return g.update(v=>{const x=p(v);return C(u,x),x})},subscribe:b}}return I[m][u]}var k=R(function(u,a,r){return u+(r?"-":"")+a.toLowerCase()});const D=()=>{let u=new Date().getTime(),a=typeof performance<"u"&&performance.now&&performance.now()*1e3||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{let i=Math.random()*16;return u>0?(i=(u+i)%16|0,u=Math.floor(u/16)):(i=(a+i)%16|0,a=Math.floor(a/16)),(r=="x"?i:i&7|8).toString(16)})};function E(u){return`${k(u)}-${D().split("-").slice(0,2).join("")}`}function G(u,a){return u.map(r=>(r.children=r.children.map(i=>a[i]),r))}const F=u=>{const{subscribe:a,update:r,set:i}=U("d3fend-measures",_);return{subscribe:a,update:r,set:i,createPortfolio:n=>r(e=>{const t=e.portfolios.length;return n.id=t,n.includedMeasures=[],e.portfolios.push(n),e.selectedPortfolio=t,e}),deletePortfolio:()=>r(n=>(n.portfolios=n.portfolios.filter((e,t)=>t!==n.selectedPortfolio),n.selectedPortfolio=n.portfolios.length?0:null,n)),addMeasure:n=>r(e=>(e.measures[n.id]=n,e.portfolios[e.selectedPortfolio].includedMeasures.push(n.id),e)),bulkAddMeasure:(n,e)=>r(t=>{for(const s of n)t.measures[s.id]=s;return t.portfolios[t.selectedPortfolio].includedMeasures.push(e),t}),addTemplate:n=>r(e=>(e.templates[n.id]=n,e.rootTemplates.push(n.id),e)),copyFromTemplate:(n,e=f.measures)=>r(t=>(n.id=E(n.name),t[e][n.id]=n,t)),appendMeasure:n=>r(e=>(e.measures[n]&&e.portfolios[e.selectedPortfolio].includedMeasures.push(n),e)),editName:(n,e,t=f.measures)=>r(s=>(s[t][n].name=e,s)),addChild:(n,e,t,s=f.measures)=>r(d=>{const l=E(e.name),o=n.id;return e.id=l,e.checked=!0,e.children=[],e.techniques=[...n.techniques],e.color=n.color,d[s][l]=e,d[s][o].children||(d[s][o].children=[]),d[s][o].children.push(l),d[s][o].techniques=[],d}),addNonRootChild:(n,e,t=f.measures)=>r(s=>{const d=E(e.name);return e.id=d,e.checked=!0,e.techniques=[],e.children=[],e.color=n.color,s[t][d]=e,s[t][n.id].children.push(d),s}),deleteMeasure:n=>r(e=>{const{[n]:t,...s}=e.measures,d=e.portfolios.reduce((l,o,c)=>{if(e.selectedPortfolio===c){const h={...o,includedMeasures:o.includedMeasures.filter(y=>y!==n)};l.push(h)}else l.push(o);return l},[]);return{...e,portfolios:d,measures:s}}),deleteTemplate:n=>r(e=>{const{[n]:t,...s}=e.templates,d=e.rootTemplates.filter(l=>n!==l);return{...e,templates:s,rootTemplates:d}}),deleteSubmeasure:(n,e,t=f.measures)=>r(s=>{const d=n.id;return s[t][d].children=s[t][d].children.filter(l=>l!==e.id),s}),saveTechniques:(n,e,t=f.measures)=>r(s=>{const d=Object.values(n).reduce((o,c)=>(c.classes.isSelected&&o.push(c["@id"]),o),[]);return Object.entries(e).reduce((o,[c,h])=>(h===j.selected&&o.push(c),o),[]).forEach(o=>{const c=[...new Set([...s[t][o].techniques,...d])];s[t][o].techniques=c,s[t][o].checked=!0}),s}),removeTechniques:(n,e,t=f.measures)=>r(s=>{const d=Object.values(n).reduce((o,c)=>(c.classes.isSelected&&o.push(c["@id"]),o),[]);return Object.entries(e).reduce((o,[c,h])=>(h===j.selected&&o.push(c),o),[]).forEach(o=>{const c=s[t][o].techniques.filter(h=>!d.includes(h));s[t][o].techniques=c,s[t][o].checked=!0}),s}),saveMeasureColor:(n,e,t=f.measures)=>r(s=>(s[t][n.id].color=e,s)),changeTechniqueMappingMode:(n,e)=>r(t=>(t.techniqueMappingMode=n,t.showLegend=e,t))}},H=F();export{G as a,E as c,H as m};
