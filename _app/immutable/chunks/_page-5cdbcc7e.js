import{e as r}from"./index-2f9fe195.js";async function c({params:o,fetch:a}){const e=o.technique,t=await a(`/api/offensive-technique/attack/${e}.json`),{description:n,off_to_def:s,subtechniques:i}=await t.json();if(t.status!==200)throw r(500,data.message);return{description:n,off_to_def:s,technique_id:e,subtechniques:i}}const f=Object.freeze(Object.defineProperty({__proto__:null,load:c},Symbol.toStringTag,{value:"Module"}));export{f as _,c as l};
