<template>
  <RouterLink to="/profile"class="d-flex flex-column mb-10 p-lg-20 w-100 w-lg-50">
      <a
        href="#"
        class="d-flex text-gray-900 text-hover-primary align-items-center m-3"
      >
        <!--begin::Symbol-->
        <div class="symbol symbol-40px symbol-circle me-4">
          <img :src="`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/profileicon/${searchResult['summoner_profile']['profileIconId']}.png`" alt="" />
        </div>
        <!--end::Symbol-->
        <!--begin::Title-->
        <div class="d-flex flex-column justify-content-start fw-semibold">
          <span class="fs-6 fw-semibold">{{searchResult["summoner_profile"]["gameName"]["gameName"]}}</span>
          <span class="fs-7 fw-semibold text-muted">lvl {{ searchResult["summoner_profile"]["summonerLevel"] }}</span>
        </div>

        <div style="width: 10vw;"></div>
        <div v-if="searchResult['summoner_rank']" class="symbol symbol-25px symbol-circle m-5">
          <img :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/${searchResult['summoner_rank']['tier'].toLowerCase()}.svg`" alt="" />
        </div>
        <div v-if="searchResult['summoner_rank']" class="d-flex flex-column fw-semibold">
          <span class="fs-7 fw-semibold text-muted">{{ searchResult["summoner_rank"]["tier"] }} {{ searchResult["summoner_rank"]["tier"] != "CHALLENGER" ? searchResult["summoner_rank"]["rank"] : "" }}</span>
          <span class="fs-7 fw-semibold text-muted">{{ searchResult["summoner_rank"]["leaguePoints"] }} LP</span>
        </div>
 

        <div v-if="!searchResult['summoner_rank']" class="d-flex flex-row align-items-center">
          <div class="symbol symbol-25px symbol-circle m-5">
            <img :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/unranked.svg`" alt="" />
          </div>
            <span class="fs-7 fw-semibold text-muted">Unranked</span>
        </div>
        <!--end::Title-->
      </a>
    </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-results",
  components: {},
  props: {
    searchResult: {
      type: String,
      required: true,
    },
  }
});
</script>
