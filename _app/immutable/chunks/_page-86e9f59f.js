import{e as o}from"./index-2f9fe195.js";async function r({fetch:a}){const t=await a("/api/tactic/all.json"),e=await t.json();if(t.status!==200)throw o(500,data.message);return{graph:e}}const n=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{n as _,r as l};
