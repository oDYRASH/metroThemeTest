import{k as _,j as d,_ as h,p as s,q as o,v as e,B as p,x as i,N as y,F as g,w as b,y as x,r as u,P as v,n as w,G as S}from"./index-98628bbe.js";import{K as C}from"./Widget3-9f7a5d61.js";import{b as $}from"./myskillAPI-aa4aefde.js";const D=_({name:"card-1",components:{},props:{progress:Number,statusDataBadgeColor:String,statusDataColor:String,status:String,icon:String,title:String,description:String,date:String,budget:String,users:Array},setup(t){const r=d(()=>t.description?t.description:"CRM App application to HR efficiency"),c=d(()=>t.date?t.date:"Feb 21, 2021"),n=d(()=>t.budget?t.budget:"$284,900.00"),l=d(()=>t.status?t.status:"In Progress"),m=d(()=>t.statusDataBadgeColor?t.statusDataBadgeColor:"badge-light-primary"),a=d(()=>t.statusDataColor?t.statusDataColor:"bg-primary");return{getDescription:r,getDate:c,getBudget:n,getStatus:l,getStatusDataBadgeColor:m,getStatusDataColor:a}}}),B={href:"#",class:"card border border-2 border-gray-300 border-hover"},k={class:"card-header border-0 pt-9"},N={class:"card-title m-0"},T={class:"symbol symbol-50px w-50px bg-light"},j=["src"],K={class:"card-toolbar"},A={class:"card-body p-9"},G={class:"fs-3 fw-bold text-gray-900"},V={class:"text-gray-500 fw-semibold fs-5 mt-1 mb-7"},P={class:"d-flex flex-wrap mb-5"},R={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3"},z={class:"fs-6 text-gray-800 fw-bold"},F=e("div",{class:"fw-semibold text-gray-500"},"Due Date",-1),I={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3"},M={class:"fs-6 text-gray-800 fw-bold"},W=e("div",{class:"fw-semibold text-gray-500"},"Budget",-1),E=["title"],q=["aria-valuenow"],H={key:0,class:"symbol-group symbol-hover"},J=["title"],L=["src"];function O(t,r,c,n,l,m){return s(),o("a",B,[e("div",k,[e("div",N,[e("div",T,[e("img",{src:t.icon,alt:"image",class:"p-3"},null,8,j)])]),e("div",K,[e("span",{class:p([t.getStatusDataBadgeColor,"badge fw-bold me-auto px-4 py-3"])},i(t.getStatus),3)])]),e("div",A,[e("div",G,i(t.title),1),e("p",V,i(t.getDescription),1),e("div",P,[e("div",R,[e("div",z,i(t.getDate),1),F]),e("div",I,[e("div",M,i(t.getBudget),1),W])]),e("div",{class:"h-4px w-100 bg-light mb-5","data-bs-toggle":"tooltip",title:`This project ${t.progress}% completed`},[e("div",{class:p([t.getStatusDataColor,"rounded h-4px"]),role:"progressbar",style:y({width:t.progress+"%"}),"aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,14,q)],8,E),t.users?(s(),o("div",H,[(s(!0),o(g,null,b(t.users,(a,f)=>(s(),o("div",{key:f,class:"symbol symbol-35px symbol-circle","data-bs-toggle":"tooltip",title:a.title},[a.src?(s(),o("img",{key:0,alt:"Pic",src:a.src},null,8,L)):(s(),o("span",{key:1,class:p(["symbol-label fw-bold",`bg-${a.state} text-inverse-${a.state}`])},i(a.initials),3))],8,J))),128))])):x("",!0)])])}const Q=h(D,[["render",O]]),U=_({name:"profile-projects",components:{KTCard:Q,KTChartWidget3:C},setup(){const t=u([]),r=JSON.parse(localStorage.getItem("summoner")||"{}");$(r.region,r.summoner_profile.puuid).then(l=>{t.value=l,console.log("RES STATS : ",l)});const c={cs_min:"CS / min",damage_per_minute:"DMG / min",gold_per_minute:"Gold / min",vision_score_per_minute:"Vision Score / min",kda_ratio:"KDA Ratio","":"No Data"},n=u(0);return setInterval(()=>{n.value+=1},210),{insightStats:t,title_dict:c,loadingCount:n}}}),X=v('<div class="d-flex flex-wrap flex-stack my-5"><h2 class="fs-2 fw-semibold my-2"> Skills <span class="fs-6 text-gray-500 ms-1">translated to Game Stats</span></h2><div class="d-flex flex-wrap my-1"><div class="m-0"><select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-white form-select-sm fw-bold w-125px"><option value="Total">Mean</option><option value="Best">Best</option><option value="By_min" selected>By min</option></select></div></div></div>',1),Y={key:0,style:{display:"flex","flex-wrap":"wrap",gap:"2%","justify-content":"center","align-items":"center"}},Z={class:"col-md-6 col-xl-4"},tt={key:1},et={class:"container",style:{width:"250px",height:"250px","border-radius":"100%",position:"relative","margin-top":"200px",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},st={style:{"font-size":"x-large"}},ot=e("div",{class:"loader",style:{"@keyframes rotate {\n            100% {\n              transform":`rotate(360deg)
            }
          }`,position:"absolute",content:"''",width:"100%",height:"100%","border-radius":"100%","border-bottom":"0 solid #ffffff05","box-shadow":`0 -1px 2px 0px #ffffff inset,
              0 -5px 1px 0px #ffffff ,
              0 -2px 5px #ffffff80 inset,
              0 -3px 2px #ffffff,
              0 2px 0px #ffffff,
              0 2px 3px #ffffff,
              0 5px 5px #ffffff,
              0 1px 5px #ffffff,
              0 1px 2px 0px #ffffff`,filter:"blur(3px)",animation:"2s rotate linear infinite"}},null,-1);function at(t,r,c,n,l,m){const a=w("KTChartWidget3");return s(),o(g,null,[X,t.insightStats.length>0?(s(),o("div",Y,[(s(!0),o(g,null,b(t.insightStats,f=>(s(),o("div",Z,[S(a,{"widget-classes":"mb-5 mb-xxl-8",stats:f.statsArray,stat_name:f.statName,chart_title:t.title_dict[f.statName]},null,8,["stats","stat_name","chart_title"])]))),256))])):(s(),o("div",tt,[e("div",et,[e("div",st,i(t.loadingCount)+" Games",1),ot])]))],64)}const lt=h(U,[["render",at]]);export{lt as default};
