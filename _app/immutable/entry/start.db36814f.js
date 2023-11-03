import{o as De,t as ye}from"../chunks/scheduler.50831561.js";import{S as Be,a as Ke,I as V,g as Ce,f as Ve,b as we,c as le,s as ee,i as _e,d as M,P as qe,e as We}from"../chunks/singletons.c3676c4f.js";import{b as z}from"../chunks/paths.c4f7120e.js";import{R as Fe,H as te}from"../chunks/control.f5b05b5f.js";function Xe(n,i){return n==="/"||i==="ignore"?n:i==="never"?n.endsWith("/")?n.slice(0,-1):n:i==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function Qe(n){for(const i in n)n[i]=decodeURIComponent(n[i]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,i){const p=new URL(n);for(const s of et)Object.defineProperty(p,s,{get(){return i(),n[s]},enumerable:!0,configurable:!0});return nt(p),p}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function ot(...n){let i=5381;for(const p of n)if(typeof p=="string"){let s=p.length;for(;s;)i=i*33^p.charCodeAt(--s)}else if(ArrayBuffer.isView(p)){const s=new Uint8Array(p.buffer,p.byteOffset,p.byteLength);let u=s.length;for(;u;)i=i*33^s[--u]}else throw new TypeError("value must be a string or TypedArray");return(i>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,i)=>((n instanceof Request?n.method:(i==null?void 0:i.method)||"GET")!=="GET"&&ne.delete(Se(n)),fe(n,i));const ne=new Map;function it(n,i){const p=Se(n,i),s=document.querySelector(p);if(s!=null&&s.textContent){const{body:u,...f}=JSON.parse(s.textContent),S=s.getAttribute("data-ttl");return S&&ne.set(p,{body:u,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(u,f))}return fe(n,i)}function st(n,i,p){if(ne.size>0){const s=Se(n,p),u=ne.get(s);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(p==null?void 0:p.cache))return new Response(u.body,u.init);ne.delete(s)}}return fe(i,p)}function Se(n,i){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(i!=null&&i.headers||i!=null&&i.body){const u=[];i.headers&&u.push([...new Headers(i.headers)].join(",")),i.body&&(typeof i.body=="string"||ArrayBuffer.isView(i.body))&&u.push(i.body),s+=`[data-hash="${ot(...u)}"]`}return s}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(n){const i=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return i.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return i.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const S=s.split(/\[(.+?)\](?!\])/);return"/"+S.map((y,w)=>{if(w%2){if(y.startsWith("x+"))return be(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return be(String.fromCharCode(...y.slice(2).split("-").map(U=>parseInt(U,16))));const h=ct.exec(y);if(!h)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,x,k,N]=h;return i.push({name:k,matcher:N,optional:!!D,rest:!!x,chained:x?w===1&&S[0]==="":!1}),x?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(y)}).join("")}).join("")}/?$`),params:i}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,i,p){const s={},u=n.slice(1);let f=0;for(let S=0;S<i.length;S+=1){const l=i[S];let y=u[S-f];if(l.chained&&l.rest&&f&&(y=u.slice(S-f,S+1).filter(w=>w).join("/"),f=0),y===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||p[l.matcher](y)){s[l.name]=y;const w=i[S+1],h=u[S+1];w&&!w.rest&&w.optional&&h&&l.chained&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return s}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:n,server_loads:i,dictionary:p,matchers:s}){const u=new Set(i);return Object.entries(p).map(([l,[y,w,h]])=>{const{pattern:D,params:x}=lt(l),k={id:l,exec:N=>{const U=D.exec(N);if(U)return dt(U,x,s)},errors:[1,...h||[]].map(N=>n[N]),layouts:[0,...w||[]].map(S),leaf:f(y)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const y=l<0;return y&&(l=~l),[y,n[l]]}function S(l){return l===void 0?l:[u.has(l),n[l]]}}function ze(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Me(n,i){const p=JSON.stringify(i);try{sessionStorage[n]=p}catch{}}const ht=-1,mt=-2,gt=-3,yt=-4,wt=-5,_t=-6;function bt(n,i){if(typeof n=="number")return u(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const p=n,s=Array(p.length);function u(f,S=!1){if(f===ht)return;if(f===gt)return NaN;if(f===yt)return 1/0;if(f===wt)return-1/0;if(f===_t)return-0;if(S)throw new Error("Invalid input");if(f in s)return s[f];const l=p[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const y=l[0],w=i==null?void 0:i[y];if(w)return s[f]=w(u(l[1]));switch(y){case"Date":s[f]=new Date(l[1]);break;case"Set":const h=new Set;s[f]=h;for(let k=1;k<l.length;k+=1)h.add(u(l[k]));break;case"Map":const D=new Map;s[f]=D;for(let k=1;k<l.length;k+=2)D.set(u(l[k]),u(l[k+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const x=Object.create(null);s[f]=x;for(let k=1;k<l.length;k+=2)x[l[k]]=u(l[k+1]);break;default:throw new Error(`Unknown type ${y}`)}}else{const y=new Array(l.length);s[f]=y;for(let w=0;w<l.length;w+=1){const h=l[w];h!==mt&&(y[w]=u(h))}}else{const y={};s[f]=y;for(const w in l){const h=l[w];y[w]=u(h)}}return s[f]}return u(0)}function vt(n){return n.filter(i=>i!=null)}const Ge=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ge];const Et=new Set([...Ge]);[...Et];async function St(n){var i;for(const p in n)if(typeof((i=n[p])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,u])=>[s,await u])));return n}const kt="x-sveltekit-invalidated",G=ze(Be)??{},Q=ze(Ke)??{};function ve(n){G[n]=ee()}function Rt(n,i){var $e;const p=pt(n),s=n.nodes[0],u=n.nodes[1];s(),u();const f=document.documentElement,S=[],l=[];let y=null;const w={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},D=!1,x=!1,k=!0,N=!1,U=!1,H=!1,B=!1,q,j=($e=history.state)==null?void 0:$e[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const ue=G[j];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let F,ae,Y;async function ke(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),o=X(e,!0);y=null;const t=ae={},r=o&&await he(o);if(t===ae&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(F=r.props.page),q.$set(r.props)}}function Re(e){l.some(o=>o==null?void 0:o.snapshot)&&(Q[e]=l.map(o=>{var t;return(t=o==null?void 0:o.snapshot)==null?void 0:t.capture()}))}function Ae(e){var o;(o=Q[e])==null||o.forEach((t,r)=>{var a,c;(c=(a=l[r])==null?void 0:a.snapshot)==null||c.restore(t)})}function Ie(){ve(j),Me(Be,G),Re(j),Me(Ke,Q)}async function re(e,{noScroll:o=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:c=!1},d,v){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:o?ee():null,keepfocus:r,redirect_chain:d,details:{state:a,replaceState:t},nav_token:v,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return y={id:e.id,promise:he(e).then(o=>(o.type==="loaded"&&o.state.error&&(y=null),o))},y.promise}async function oe(...e){const t=p.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Oe(e){var r;h=e.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),F=e.props.page,q=new n.root({target:i,props:{...e.props,stores:M,components:l},hydrate:!0}),Ae(j);const t={from:null,to:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(a=>a(t)),x=!0}async function W({url:e,params:o,branch:t,status:r,error:a,route:c,form:d}){let v="never";for(const m of t)(m==null?void 0:m.slash)!==void 0&&(v=m.slash);e.pathname=Xe(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:o,branch:t,error:a,route:c},props:{constructors:vt(t).map(m=>m.node.component)}};d!==void 0&&(b.props.form=d);let _={},R=!F,A=0;for(let m=0;m<Math.max(t.length,h.branch.length);m+=1){const g=t[m],P=h.branch[m];(g==null?void 0:g.data)!==(P==null?void 0:P.data)&&(R=!0),g&&(_={..._,...g.data},R&&(b.props[`data_${A}`]=_),A+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||d!==void 0&&d!==F.form||R)&&(b.props.page={error:a,params:o,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(e),form:d??null,data:R?_:F.data}),b}async function de({loader:e,parent:o,url:t,params:r,route:a,server_data_node:c}){var _,R,A;let d=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((_=b.universal)!=null&&_.load){let I=function(...g){for(const P of g){const{href:$}=new URL(P,t);v.dependencies.add($)}};const m={route:{get id(){return v.route=!0,a.id}},params:new Proxy(r,{get:(g,P)=>(v.params.add(P),g[P])}),data:(c==null?void 0:c.data)??null,url:tt(t,()=>{v.url=!0}),async fetch(g,P){let $;g instanceof Request?($=g.url,P={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...P}):$=g;const C=new URL($,t);return I(C.href),C.origin===t.origin&&($=C.href.slice(t.origin.length)),x?st($,C.href,P):it($,P)},setHeaders:()=>{},depends:I,parent(){return v.parent=!0,o()}};d=await b.universal.load.call(null,m)??null,d=d?await St(d):null}return{node:b,loader:e,server:c,universal:(R=b.universal)!=null&&R.load?{type:"data",data:d,uses:v}:null,data:d??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Ue(e,o,t,r,a){if(B)return!0;if(!r)return!1;if(r.parent&&e||r.route&&o||r.url&&t)return!0;for(const c of r.params)if(a[c]!==h.params[c])return!0;for(const c of r.dependencies)if(S.some(d=>d(new URL(c))))return!0;return!1}function pe(e,o){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?o??null:null}async function he({id:e,invalidating:o,url:t,params:r,route:a}){if((y==null?void 0:y.id)===e)return y.promise;const{errors:c,layouts:d,leaf:v}=a,b=[...d,v];c.forEach(E=>E==null?void 0:E().catch(()=>{})),b.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let _=null;const R=h.url?e!==h.url.pathname+h.url.search:!1,A=h.route?a.id!==h.route.id:!1;let I=!1;const m=b.map((E,O)=>{var K;const L=h.branch[O],T=!!(E!=null&&E[0])&&((L==null?void 0:L.loader)!==E[1]||Ue(I,A,R,(K=L.server)==null?void 0:K.uses,r));return T&&(I=!0),T});if(m.some(Boolean)){try{_=await He(t,m)}catch(E){return ie({status:E instanceof te?E.status:500,error:await Z(E,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(_.type==="redirect")return _}const g=_==null?void 0:_.nodes;let P=!1;const $=b.map(async(E,O)=>{var me;if(!E)return;const L=h.branch[O],T=g==null?void 0:g[O];if((!T||T.type==="skip")&&E[1]===(L==null?void 0:L.loader)&&!Ue(P,A,R,(me=L.universal)==null?void 0:me.uses,r))return L;if(P=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:t,params:r,route:a,parent:async()=>{var Te;const je={};for(let ge=0;ge<O;ge+=1)Object.assign(je,(Te=await $[ge])==null?void 0:Te.data);return je},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?L==null?void 0:L.server:void 0)})});for(const E of $)E.catch(()=>{});const C=[];for(let E=0;E<b.length;E+=1)if(b[E])try{C.push(await $[E])}catch(O){if(O instanceof Fe)return{type:"redirect",location:O.location};let L=500,T;if(g!=null&&g.includes(O))L=O.status??L,T=O.error;else if(O instanceof te)L=O.status,T=O.body;else{if(await M.updated.check())return await J(t);T=await Z(O,{params:r,url:t,route:{id:a.id}})}const K=await Pe(E,C,c);return K?await W({url:t,params:r,branch:C.slice(0,K.idx).concat(K.node),status:L,error:T,route:a}):await Ne(t,{id:a.id},T,L)}else C.push(void 0);return await W({url:t,params:r,branch:C,status:200,error:null,route:a,form:o?void 0:null})}async function Pe(e,o,t){for(;e--;)if(t[e]){let r=e;for(;!o[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:o,url:t,route:r}){const a={};let c=null;if(n.server_loads[0]===0)try{const _=await He(t,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;c=_.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||D)&&await J(t)}const v=await de({loader:s,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),b={node:await u(),loader:u,universal:null,server:null,data:null};return await W({url:t,params:a,branch:[v,b],status:e,error:o,route:null})}function X(e,o){if(_e(e,z))return;const t=se(e);for(const r of p){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:o,route:r,params:Qe(a),url:e}}}function se(e){return Ze(e.pathname.slice(z.length)||"/")}function xe({url:e,type:o,intent:t,delta:r}){var v,b;let a=!1;const c={from:{params:h.params,route:{id:((v=h.route)==null?void 0:v.id)??null},url:h.url},to:{params:(t==null?void 0:t.params)??null,route:{id:((b=t==null?void 0:t.route)==null?void 0:b.id)??null},url:e},willUnload:!t,type:o};r!==void 0&&(c.delta=r);const d={...c,cancel:()=>{a=!0}};return U||w.before_navigate.forEach(_=>_(d)),a?null:c}async function ce({url:e,scroll:o,keepfocus:t,redirect_chain:r,details:a,type:c,delta:d,nav_token:v={},accepted:b,blocked:_}){var $,C,E;const R=X(e,!1),A=xe({url:e,type:c,delta:d,intent:R});if(!A){_();return}const I=j;b(),U=!0,x&&M.navigating.set(A),ae=v;let m=R&&await he(R);if(!m){if(_e(e,z))return await J(e);m=await Ne(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ae!==v)return!1;if(m.type==="redirect")if(r.length>10||r.includes(e.pathname))m=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(m.location,e).href,{},[...r,e.pathname],v),!1;else(($=m.props.page)==null?void 0:$.status)>=400&&await M.updated.check()&&await J(e);if(S.length=0,B=!1,N=!0,ve(I),Re(I),(C=m.props.page)!=null&&C.url&&m.props.page.url.pathname!==e.pathname&&(e.pathname=(E=m.props.page)==null?void 0:E.url.pathname),a){const O=a.replaceState?0:1;if(a.state[V]=j+=O,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let L=j+1;for(;Q[L]||G[L];)delete Q[L],delete G[L],L+=1}}y=null,x?(h=m.state,m.props.page&&(m.props.page.url=e),q.$set(m.props)):Oe(m);const{activeElement:g}=document;if(await ye(),k){const O=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));o?scrollTo(o.x,o.y):O?O.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==g&&document.activeElement!==document.body;!t&&!P&&Ee(),k=!0,m.props.page&&(F=m.props.page),U=!1,c==="popstate"&&Ae(j),w.after_navigate.forEach(O=>O(A)),M.navigating.set(null),N=!1}async function Ne(e,o,t,r){return e.origin===location.origin&&e.pathname===location.pathname&&!D?await ie({status:r,error:t,url:e,route:o}):await J(e)}function J(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const d=c.target;clearTimeout(e),e=setTimeout(()=>{r(d,2)},20)});function o(c){r(c.composedPath()[0],1)}f.addEventListener("mousedown",o),f.addEventListener("touchstart",o,{passive:!0});const t=new IntersectionObserver(c=>{for(const d of c)d.isIntersecting&&(oe(se(new URL(d.target.href))),t.unobserve(d.target))},{threshold:0});function r(c,d){const v=Ve(c,f);if(!v)return;const{url:b,external:_,download:R}=we(v,z);if(_||R)return;const A=le(v);if(!A.reload)if(d<=A.preload_data){const I=X(b,!1);I&&Le(I)}else d<=A.preload_code&&oe(se(b))}function a(){t.disconnect();for(const c of f.querySelectorAll("a")){const{url:d,external:v,download:b}=we(c,z);if(v||b)continue;const _=le(c);_.reload||(_.preload_code===qe.viewport&&t.observe(c),_.preload_code===qe.eager&&oe(se(d)))}}w.after_navigate.push(a),a()}function Z(e,o){return e instanceof te?e.body:n.hooks.handleError({error:e,event:o})??{message:o.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(w.after_navigate.push(e),()=>{const o=w.after_navigate.indexOf(e);w.after_navigate.splice(o,1)}))},before_navigate:e=>{De(()=>(w.before_navigate.push(e),()=>{const o=w.before_navigate.indexOf(e);w.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(N||!x)&&(k=!1)},goto:(e,o={})=>re(e,o,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:o}=new URL(e,location.href);S.push(t=>t.href===o)}return ke()},invalidate_all:()=>(B=!0,ke()),preload_data:async e=>{const o=new URL(e,Ce(document)),t=X(o,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);await Le(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const o=new URL(location.href),{branch:t,route:r}=h;if(!r)return;const a=await Pe(h.branch.length,t,r.errors);if(a){const c=await W({url:o,params:h.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});h=c.state,q.$set(c.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:e.data,status:e.status}}),await ye(),q.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a;let r=!1;if(Ie(),!U){const c={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(d=>d(c))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(o=navigator.connection)!=null&&o.saveData||Ye(),f.addEventListener("click",t=>{var I;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ve(t.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:d,download:v}=we(r,z);if(!a)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const b=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){xe({url:a,type:"link"})?U=!0:t.preventDefault();return}const[R,A]=a.href.split("#");if(A!==void 0&&R===location.href.split("#")[0]){if(h.url.hash===a.hash){t.preventDefault(),(I=r.ownerDocument.getElementById(A))==null||I.scrollIntoView();return}if(H=!0,ve(j),e(a),!b.replace_state)return;H=!1,t.preventDefault()}ce({url:a,scroll:b.noscroll?ee():null,keepfocus:b.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const d=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(d,z))return;const v=t.target,{keep_focus:b,noscroll:_,reload:R,replace_state:A}=le(v);if(R)return;t.preventDefault(),t.stopPropagation();const I=new FormData(v),m=a==null?void 0:a.getAttribute("name");m&&I.append(m,(a==null?void 0:a.getAttribute("value"))??""),d.search=new URLSearchParams(I).toString(),ce({url:d,scroll:_?ee():null,keepfocus:b??!1,redirect_chain:[],details:{state:{},replaceState:A??d.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[V]){if(t.state[V]===j)return;const a=G[t.state[V]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){G[j]=ee(),j=t.state[V],scrollTo(a.x,a.y);return}const c=t.state[V]-j;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=t.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&M.navigating.set(null)});function e(t){h.url=t,M.page.set({...F,url:t}),M.page.notify()}},_hydrate:async({status:e=200,error:o,node_ids:t,params:r,route:a,data:c,form:d})=>{D=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=X(v,!1)||{});let b;try{const _=t.map(async(I,m)=>{const g=c[m];return g!=null&&g.uses&&(g.uses=Je(g.uses)),de({loader:n.nodes[I],url:v,params:r,route:a,parent:async()=>{const P={};for(let $=0;$<m;$+=1)Object.assign(P,(await _[$]).data);return P},server_data_node:pe(g)})}),R=await Promise.all(_),A=p.find(({id:I})=>I===a.id);if(A){const I=A.layouts;for(let m=0;m<I.length;m++)I[m]||R.splice(m,0,void 0)}b=await W({url:v,params:r,branch:R,status:e,error:o,form:d,route:A??null})}catch(_){if(_ instanceof Fe){await J(new URL(_.location,location.href));return}b=await ie({status:_ instanceof te?_.status:500,error:await Z(_,{url:v,params:r,route:a}),url:v,route:a})}Oe(b)}}}async function He(n,i){const p=new URL(n);p.pathname=rt(n.pathname),p.searchParams.append(kt,i.map(u=>u?"1":"0").join(""));const s=await fe(p.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async u=>{var h;const f=new Map,S=s.body.getReader(),l=new TextDecoder;function y(D){return bt(D,{Promise:x=>new Promise((k,N)=>{f.set(x,{fulfil:k,reject:N})})})}let w="";for(;;){const{done:D,value:x}=await S.read();if(D&&!w)break;for(w+=!x&&w?`
`:l.decode(x);;){const k=w.indexOf(`
`);if(k===-1)break;const N=JSON.parse(w.slice(0,k));if(w=w.slice(k+1),N.type==="redirect")return u(N);if(N.type==="data")(h=N.nodes)==null||h.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=Je(U.uses),U.data=y(U.data))}),u(N);else if(N.type==="chunk"){const{id:U,data:H,error:B}=N,q=f.get(U);f.delete(U),B?q.reject(y(B)):q.fulfil(y(H))}}}})}function Je(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Ee(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const i=document.body,p=i.getAttribute("tabindex");i.tabIndex=-1,i.focus({preventScroll:!0,focusVisible:!1}),p!==null?i.setAttribute("tabindex",p):i.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const u=[];for(let f=0;f<s.rangeCount;f+=1)u.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===u.length){for(let f=0;f<s.rangeCount;f+=1){const S=u[f],l=s.getRangeAt(f);if(S.commonAncestorContainer!==l.commonAncestorContainer||S.startContainer!==l.startContainer||S.endContainer!==l.endContainer||S.startOffset!==l.startOffset||S.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}async function Ut(n,i,p){const s=Rt(n,i);We({client:s}),p?await s._hydrate(p):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ut as start};