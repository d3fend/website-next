import{e as o}from"./index-2f9fe195.js";async function r({fetch:e}){const t=await e("/api/mappings/attack-mitigations.json"),a=await t.json();if(t.status!==200)throw o(500,a.message||"Internal Server Error");return{mitigations:a}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{s as _,r as l};
