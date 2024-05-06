<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semibold my-2">
      Skills
      <span class="fs-6 text-gray-500 ms-1">translated to Game Stats</span>
    </h2>
    <!--end::Heading-->
    <!-- <button class="btn btn-primary" type="button" data-kt-element="send"><KTIcon
                      icon-name="abstract-22"
                      icon-class="fs-3 text-success me-2"
                    /></button> -->
    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select
          name="status"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm fw-bold w-125px"
        >
          <option value="Total">Mean</option>
          <option value="Best">Best</option>
          <option value="By_min" selected>By min</option>

        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->

    <!--begin::Col-->
    <div style="display: flex; flex-wrap: wrap; gap: 2%; justify-content: center; align-items: center;" v-if="insightStats.length > 0">

      <div class="col-md-6 col-xl-4"  v-for="s in insightStats">
        <KTChartWidget3 widget-classes="mb-5 mb-xxl-8" :stats="s['statsArray']" :stat_name="s['statName']" :chart_title="title_dict[s['statName']]"></KTChartWidget3>
      </div>
    <!--end::Col-->
    </div>
    <div v-else>
      <div class="container" style="
          width: 250px;
          height: 250px;
          border-radius: 100%;
          position: relative;
          margin-top: 200px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center
      ">
        <div style="font-size: x-large; ">{{ loadingCount }} Games</div>
        
        <div class="loader" style="@keyframes rotate {
            100% {
              transform: rotate(360deg)
            }
          };
          position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            border-radius: 100%;
            border-bottom: 0 solid #ffffff05;
            
            box-shadow: 
              0 -1px 2px 0px #ffffff inset,
              0 -5px 1px 0px #ffffff ,
              0 -2px 5px #ffffff80 inset,
              0 -3px 2px #ffffff,
              0 2px 0px #ffffff,
              0 2px 3px #ffffff,
              0 5px 5px #ffffff,
              0 1px 5px #ffffff,
              0 1px 2px 0px #ffffff;
            filter: blur(3px);
            animation: 2s rotate linear infinite;">
        </div>
      </div>



    </div>


</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import KTCard from "@/components/cards/Card1.vue";
import KTChartWidget3 from "@/components/widgets/charts/Widget3.vue";
import {get_summoner_insight} from "@/core/services/myskillAPI";

export default defineComponent({
  name: "profile-projects",
  components: {
    KTCard,
    KTChartWidget3
  },
  setup() {
    const insightStats = ref([]);
    const summoner = JSON.parse(localStorage.getItem("summoner") || "{}")

    get_summoner_insight(summoner["region"], summoner["summoner_profile"]["puuid"]).then((res) => {

      insightStats.value = res
      console.log("RES STATS : ",res)
    })

    const title_dict = {
      "cs_min": "CS / min",
      "damage_per_minute": "DMG / min",
      "gold_per_minute": "Gold / min",
      "vision_score_per_minute": "Vision Score / min",
      "kda_ratio": "KDA Ratio",
      "": "No Data"
    }

    const loadingCount = ref(0)
    //fake loading incrementation each 0.21 sec
    setInterval(() => {
      loadingCount.value += 1
    }, 210)


    return {
      insightStats,
      title_dict,
      loadingCount
    };

  },
});
</script>
