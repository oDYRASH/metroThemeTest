const n="http://127.0.0.1:5000";async function r(e,t){let s=t.includes("#")?t.replace("#","-"):t;console.log(`${n}/summoner/${e}/${s}`);const a=await fetch(`${n}/summoner/${e}/${s}`);return console.log(a.status),a.status===200?await a.json():!1}async function c(e,t,s){const a=await fetch(`${n}/summoner/matches/${e}/${t}/${s}`);return a.status===200?await a.json():!1}async function u(e,t){const s=await fetch(`${n}/summoner/insight/${e}/${t}`);return s.status===200?await s.json():!1}export{c as a,u as b,r as g};