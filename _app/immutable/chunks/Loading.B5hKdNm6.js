import{s as w,Q as g,R as _,f as v,i as h,r as s,D as o,k as E,l as z,n as y}from"./scheduler.xR-uXgLO.js";import{S as L,i as C}from"./index.BpaDVXPB.js";/* empty css                                              */const F=t=>{t.focus()},I=t=>{const e=({target:i})=>{t.contains(i)||t.dispatchEvent(new CustomEvent("outsideclick"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}};function b(t){let e,i,l;return{c(){e=g("svg"),i=g("circle"),this.h()},l(a){e=_(a,"svg",{height:!0,width:!0,style:!0,class:!0,viewBox:!0});var r=v(e);i=_(r,"circle",{role:!0,cx:!0,cy:!0,r:!0,stroke:!0,fill:!0,"stroke-width":!0,"stroke-dasharray":!0,"stroke-linecap":!0}),v(i).forEach(h),r.forEach(h),this.h()},h(){s(i,"role","presentation"),s(i,"cx","16"),s(i,"cy","16"),s(i,"r",t[4]),s(i,"stroke",t[2]),s(i,"fill","none"),s(i,"stroke-width",t[3]),s(i,"stroke-dasharray",l=t[7]+",100"),s(i,"stroke-linecap","round"),s(e,"height",t[0]),s(e,"width",t[0]),o(e,"animation-duration",t[1]+"ms"),o(e,"display",t[5]),o(e,"margin",t[6]),s(e,"class","svelte-spinner svelte-1195q9f"),s(e,"viewBox","0 0 32 32")},m(a,r){E(a,e,r),z(e,i)},p(a,[r]){r&16&&s(i,"r",a[4]),r&4&&s(i,"stroke",a[2]),r&8&&s(i,"stroke-width",a[3]),r&128&&l!==(l=a[7]+",100")&&s(i,"stroke-dasharray",l),r&1&&s(e,"height",a[0]),r&1&&s(e,"width",a[0]),r&2&&o(e,"animation-duration",a[1]+"ms"),r&32&&o(e,"display",a[5]),r&64&&o(e,"margin",a[6])},i:y,o:y,d(a){a&&h(e)}}}function q(t,e,i){let{size:l=25}=e,{speed:a=750}=e,{color:r="rgba(0,0,0,0.4)"}=e,{thickness:f=2}=e,{gap:c=40}=e,{radius:u=10}=e,{display:d="block"}=e,{margin:m="auto"}=e,k;return t.$$set=n=>{"size"in n&&i(0,l=n.size),"speed"in n&&i(1,a=n.speed),"color"in n&&i(2,r=n.color),"thickness"in n&&i(3,f=n.thickness),"gap"in n&&i(8,c=n.gap),"radius"in n&&i(4,u=n.radius),"display"in n&&i(5,d=n.display),"margin"in n&&i(6,m=n.margin)},t.$$.update=()=>{t.$$.dirty&272&&i(7,k=2*Math.PI*u*(100-c)/100)},[l,a,r,f,u,d,m,k,c]}class M extends L{constructor(e){super(),C(this,e,q,b,w,{size:0,speed:1,color:2,thickness:3,gap:8,radius:4,display:5,margin:6})}}export{M as L,I as c,F as f};
