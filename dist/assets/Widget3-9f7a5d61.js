import{k as y,r as f,S as b,j as v,af as w,ag as S,aq as o,_ as x,n as C,p as k,q as E,v as s,x as p,G as B,B as z}from"./index-98628bbe.js";const A=y({name:"widget-1",props:{widgetClasses:String,stats:Array,stat_name:String,chart_title:String},components:{},setup(e){var d;const i={cs_min:7.8,damage_per_minute:920,gold_per_minute:460,vision_score_per_minute:.7,kda_ratio:4.62,"":0},t=f(null),r=f({}),c=b(),n=()=>{const h=o("--bs-gray-500"),u=o("--bs-gray-200"),_=o("--bs-info");return o("--bs-info-light"),{chart:{fontFamily:"inherit",type:"area",height:350,toolbar:{show:!1}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:.5},stroke:{curve:"smooth",show:!0,width:3,colors:["#E1B43E","#3E83E1"]},xaxis:{categories:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:h,fontSize:"12px"}},crosshairs:{position:"front",stroke:{color:_,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{labels:{style:{colors:h,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(g){return g+" "+(e.chart_title||"")}}},colors:["#E1B43E","#3E83E100"],grid:{borderColor:u,strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{strokeColors:["#E1B400"],strokeWidth:3}}},l=[{name:"You",data:e.stats},{name:"Reference",data:Array((d=e.stats)==null?void 0:d.length).fill(i[e.stat_name||""])}],a=v(()=>c.mode);w(()=>{Object.assign(r.value,n())});const m=()=>{t.value&&t.value.updateOptions(n())};return S(a,()=>{m()}),{chart:r,series:l,chartRef:t}}}),O={class:"card-header border-0 pt-5"},V={class:"card-title align-items-start flex-column"},$={class:"card-label fw-bold fs-3 mb-1"},D={class:"text-muted fw-semibold fs-7"},M={class:"card-body"};function R(e,i,t,r,c,n){var a;const l=C("apexchart");return k(),E("div",{class:z([e.widgetClasses,"card"])},[s("div",O,[s("h3",V,[s("span",$,p(e.chart_title),1),s("span",D,"From last "+p((a=e.stats)==null?void 0:a.length)+" games",1)])]),s("div",M,[B(l,{ref:"chartRef",type:"area",options:e.chart,series:e.series},null,8,["options","series"])])],2)}const j=x(A,[["render",R]]);export{j as K};