import{e as s}from"./index.2defaa64.js";async function r({params:t,fetch:a}){t.technique;const e=await a("/api/weakness/all.json"),o=await e.json();if(e.status!==200)throw s(500,data.message);return{otechs:o}}const c=Object.freeze(Object.defineProperty({__proto__:null,load:r},Symbol.toStringTag,{value:"Module"}));export{c as _,r as l};
