<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-160px symbol-fixed position-relative"
          >
          <img :src="`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/profileicon/${summoner['summoner_profile']['profileIconId']}.png`" alt="" />

            <div
              class="position-absolute bottom-0 start-0 p-3 bg-body" style="margin-bottom: -10px; border-top-right-radius:10px;"
            >{{ summoner['summoner_profile']['summonerLevel'] }}</div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bold me-1"
                  >{{ summoner["summoner_profile"]["gameName"]["gameName"] }}</a
                >
                <a href="#">
                  <KTIcon icon-name="verify" icon-class="fs-1 text-primary" />
                </a>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">

                <div id="main_position" style="margin-right: 10px;"></div>
                <img id="main_position_image" style="height: 20px;" src="">
                
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <a
                href="#"
                class="btn btn-sm btn-light me-2"
                id="kt_user_follow_button"
              >
                <KTIcon icon-name="star" icon-class="fs-3"/>
              </a>

              

              <!--begin::Menu-->
              <!-- <div class="me-0">
                <button
                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <Dropdown3></Dropdown3>
              </div> -->
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap">


                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">





                    <img v-if="summoner['summoner_rank']" style="height: 20px; margin-right: 10px" :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/${summoner['summoner_rank']['tier'].toLowerCase()}.svg`" alt="" />
                    <img v-else  :src="`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/unranked.svg`" alt="" />

                    <div
                      class="fs-2 fw-bold"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                    {{ summoner['summoner_rank'] ? summoner["summoner_rank"]["leaguePoints"] : "" }} LP
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-semibold fs-6 text-gray-500">
                    


          <span class="fs-7 fw-semibold text-muted">{{ summoner['summoner_rank'] ? summoner["summoner_rank"]["tier"] : "Unranked" }} {{ summoner['summoner_rank'] ? summoner["summoner_rank"]["tier"] != "CHALLENGER" ? summoner["summoner_rank"]["rank"] : "" : "Unranked"}}</span>
          <span class="fs-7 fw-semibold text-muted"></span>


                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                

                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <KTIcon
                      icon-name="abstract-22"
                      icon-class="fs-3 text-success me-2"
                    />
                    <div
                      class="fs-2 fw-bold"
                      data-kt-countup="true"
                      data-kt-countup-value="60"
                      data-kt-countup-prefix="%"
                    >
                    <!-- calculate win rate from losses and wins -->
                      {{ summoner["summoner_rank"]  ? summoner["summoner_rank"]["losses"] + summoner["summoner_rank"]["wins"] > 0 ? Math.round((summoner["summoner_rank"]["wins"] / (summoner["summoner_rank"]["losses"] + summoner["summoner_rank"]["wins"])) * 100) : 0  :""}}%
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-semibold fs-6 text-gray-500">Win Rate</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->
<!--begin::Stat-->
<div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <KTIcon
                      icon-name="focus"
                      icon-class="fs-3 text-primary me-2"
                    />
                    <div
                      class="fs-2 fw-bold"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                      id="kda_ratio"
                    >
                    -- KDA
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-semibold fs-6 text-gray-500" id="kda">--/--/--</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->
                


              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Progress-->
            <!-- <div
              class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3"
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-semibold fs-6 text-gray-500"
                  >Weekly Improvement</span
                >
                <span class="fw-bold fs-6">82%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  style="width: 82%"
                  aria-valuenow="82"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div> -->
            <!--end::Progress-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/profile/overview"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Overview
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/profile/projects"
              active-class="active"
            >
            Insights
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              to="/profile/vsme"
              active-class="active"
            >
              Vs ME
            </router-link>
          </li>
          <!--end::Nav item-->
        
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "profile-page-layout",
  components: {
    Dropdown3,
  },
  setup() {

    const summoner = JSON.parse(localStorage.getItem("summoner") || "{}")

    return {
      getAssetPath,
      summoner
    };
  },
});
</script>
