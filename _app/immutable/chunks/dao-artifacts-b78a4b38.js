import{e as o}from"./index-2f9fe195.js";async function e({fetch:r}){const a=await r("/api/dao/artifacts.json"),t=await a.json();if(a.status!==200)throw o(500,(data==null?void 0:data.message)||"Internal Server Error");return{da_graph:t}}export{e as d};