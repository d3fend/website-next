const t="build",e=Object.freeze(Object.defineProperty({__proto__:null,PUBLIC_MODE:t},Symbol.toStringTag,{value:"Module"}));console.log(e);const a={backend:"http://127.0.0.1:8000",legacy_base:"http://legacy.d3fend.mitre.org",sparql_target:"http://localhost:9899/blazegraph/namespace/d3fend/sparql",sparql_target_inf:"http://localhost:9899/bigdata/namespace/d3fend_inf/sparql",prefix:"",env:e};console.log("Using backend: \x1B[36m%s\x1B[0m",a.backend);console.log("Base URL Prefix: \x1B[36m%s\x1B[0m",a.prefix);const o={startOnLoad:!1,htmlLabels:!0,flowchart:{useMaxWidth:!1,curve:"linear",nodeSpacing:25},theme:"base",themeVariables:{darkmode:!0,fontSize:"11px"},width:"50%",maxTextSize:1e13};export{a as c,o as m};