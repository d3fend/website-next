import{R as f,S as x}from"./scheduler.7zAg_eaB.js";function h(n){const a=n-1;return a*a*a+1}function v(n,{delay:a=0,duration:p=400,easing:c=x}={}){const s=+getComputedStyle(n).opacity;return{delay:a,duration:p,easing:c,css:t=>`opacity: ${t*s}`}}function F(n,{delay:a=0,duration:p=400,easing:c=h,x:s=0,y:t=0,opacity:l=0}={}){const i=getComputedStyle(n),d=+i.opacity,r=i.transform==="none"?"":i.transform,e=d*(1-l),[y,u]=f(s),[_,m]=f(t);return{delay:a,duration:p,easing:c,css:($,g)=>`
			transform: ${r} translate(${(1-$)*y}${u}, ${(1-$)*_}${m});
			opacity: ${d-e*g}`}}function w(n,{delay:a=0,duration:p=400,easing:c=h,axis:s="y"}={}){const t=getComputedStyle(n),l=+t.opacity,i=s==="y"?"height":"width",d=parseFloat(t[i]),r=s==="y"?["top","bottom"]:["left","right"],e=r.map(o=>`${o[0].toUpperCase()}${o.slice(1)}`),y=parseFloat(t[`padding${e[0]}`]),u=parseFloat(t[`padding${e[1]}`]),_=parseFloat(t[`margin${e[0]}`]),m=parseFloat(t[`margin${e[1]}`]),$=parseFloat(t[`border${e[0]}Width`]),g=parseFloat(t[`border${e[1]}Width`]);return{delay:a,duration:p,easing:c,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*l};${i}: ${o*d}px;padding-${r[0]}: ${o*y}px;padding-${r[1]}: ${o*u}px;margin-${r[0]}: ${o*_}px;margin-${r[1]}: ${o*m}px;border-${r[0]}-width: ${o*$}px;border-${r[1]}-width: ${o*g}px;`}}export{v as a,h as c,F as f,w as s};
