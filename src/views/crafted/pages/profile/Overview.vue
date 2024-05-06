<template>
  <div class="">


    <div class="col-xl-9" v-if="games.length > 0">


      <!-- div row flex with group of grid of images -->


      <KTWidget1 v-if="games" :games="games" :key="games"></KTWidget1>




      <!-- <KTListWidget5 widget-classes="mb-5 mb-xxl-8"></KTListWidget5> -->

    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import KTChartWidget3 from "@/components/widgets/charts/Widget3.vue";
import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
import KTEngageWidget1 from "@/components/widgets/engage/Widget1.vue";

import KTWidget1 from "@/components/widgets/lists/Widget1.vue";
import {get_match_history} from "@/core/services/myskillAPI";



export default defineComponent({
  name: "profile-overview",
  components: {
    KTWidget1,

    KTChartWidget3,
    KTListWidget5,
    KTEngageWidget1,

  },
  setup() {

    const summoner = JSON.parse(localStorage.getItem("summoner") || "{}")
    const matchesIds = summoner["last_matches"]

    const main_position_image_url = {
      "TOP":"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-top-hover.png",
      "JUNGLE":"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-jungle-hover.png",
      "MIDDLE":"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-middle-hover.png",
      "BOTTOM":"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-bottom-hover.png",
      "UTILITY":"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-utility-hover.png",
    }

    const post_translate = {
      "TOP":"Top",
      "JUNGLE":"Jungle",
      "MIDDLE":"Middle",
      "BOTTOM":"Adc",
      "UTILITY":"Support",
    }
    const games = ref([]);

    get_match_history(summoner["region"], summoner["summoner_profile"]["puuid"], matchesIds).then((res) => {
      games.value = res["f_mathces"]
      let kda_el = document.getElementById("kda")
      let kda_ratio = document.getElementById("kda_ratio")
      let main_position = document.getElementById("main_position")
      let main_position_image = document.getElementById("main_position_image") as HTMLImageElement

      if(kda_el && kda_ratio && main_position && main_position_image){

        kda_el.innerText = res["KDA"]
        kda_ratio.innerText = res["KDA_ratio"]
        main_position.innerText = post_translate[res["main_position"]]
        main_position_image.src = main_position_image_url[res["main_position"]]
      }

    }).catch((err) => {
      console.log(err)
    })

    return {
      games,
    };
  }
});
</script>
