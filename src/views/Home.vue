<template>

  <div class="d-flex flex-lg-row-fluid w-100 bgi-size-cover bgi-position-center order-1 order-lg-2" :style="`background-image: url('${getAssetPath(
    '/media/misc/auth-bg.png'
  )}')`">
    <!--begin::Content-->
    <div class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
      <!-- div height 100% of the rest of the screen in heigh -->
      <div class="d-flex flex-column flex-center w-100 h-100">
        <!--begin::Title-->
      

      <!--begin::Logo-->
        <img alt="Logo" :src="getAssetPath('media/logos/custom-1.png')" class="h-40px h-lg-150px" />
      <!--end::Logo-->

      <!--begin::Input group-->
      <div class="input-group input-group-lg m-15 w-90 w-lg-75">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          <span v-if="loading" class="spinner-border h-15px w-15px align-middle text-gray-500"></span>
          <KTIcon v-else icon-name="magnifier" icon-class="fs-1" />
        </span>
        <input type="text" id="main-search-input" class="form-control" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg" placeholder="Game Name + #TAG" v-on:keydown.enter="search" @input="search" v-model="inputvalue"/>
        </div>
        <Results v-if="serchResult" :search-result="serchResult" />
        <Empty v-if="!serchResult && inputvalue.length > 0"/>


      <!--end::Input group-->
    </div>
      <!--begin::Image-->
      <img class="d-lg-block mx-auto w-275px w-md-50 w-xl-300px mb-10 mb-lg-20"
        :src="getAssetPath('media/misc/auth-screens.png')" alt="" />
      <!--end::Image-->

      <!--begin::Title-->
      <h1 class=" d-lg-block text-white fs-2qx fw-bolder text-center mb-7">
        Track & Compare Performances
      </h1>
      <!--end::Title-->

      <!--begin::Text-->
      <div class="d-lg-block text-white fs-base text-center">
        
        Set your goals, compete with best players and levelup with 
        <a href="#" class="opacity-75-hover text-warning fw-bold me-1">MYSKILL.GG</a>

      </div>
      <!--end::Text-->
    </div>
    <!--end::Content-->
  </div>

</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { getAssetPath } from "@/core/helpers/assets";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import Results from "@/layouts/default-layout/components/search/partials/Results.vue";
import Empty from "@/layouts/default-layout/components/search/partials/Empty.vue";
import {get_summoner} from "@/core/services/myskillAPI";


export default defineComponent({
  name: "Home",
  components: {
    Results,
    Empty,
    KTChartWidget1
  },

  setup() {

    const { t, te } = useI18n();

    const serchResult = ref();
    const loading = ref(false);
    const inputvalue = ref("");
    //functrion alerteEnter alerte the input content
    const search = () => {

      const input = document.getElementById("main-search-input") as HTMLFormElement;
      const search = input.value;

      if (search) {

        const region = "EUW1";
        loading.value = true;
        get_summoner(region, search).then((res) => {
          loading.value = false;
          if(!res){
            serchResult.value = false
            return
          } 
          serchResult.value = res
          res["region"] = region
          localStorage.setItem("summoner", JSON.stringify(res))
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })

      }

    }

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    return {
      translate,
      getAssetPath,
      search,
      serchResult,
      inputvalue,
      loading
    };
  }
  ,
  mounted() {
    const input = document.getElementById("main-search-input");
      if (input) {
        input.focus();
      }
  }
});
</script>
