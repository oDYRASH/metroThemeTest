<template>
  <!--begin::List Widget 1-->
  <div>
    <!--begin::Body-->
    <div class="card-body p-10 ">
      <template v-for="(game, index) in games" :key="index">
          <!--begin::Text-->
          <div class="d-flex flex-row align-items-center p-5 rounded mb-4  justify-content-between" :class="game.win ? 'bg-light-primary' : 'bg-light-danger'">
            <div class="d-flex flex-column justify-content-between" style="gap: 14px; margin-right: 10px">
              <div class="d-flex flex-column">
                <span class="fw-bold" :class="game.win ? 'text-primary' : 'text-danger'"> {{ game.win ? "Victory" : "Deafeat" }} </span>
                <span class="text-gray-800 fw-semibold"> {{ game.game_mode }} </span>
              </div>
              <div class="d-flex flex-column ">
                <span class="text-muted fw-semibold"> {{ game.game_end_timestamp}} </span>
                <span class="text-muted fw-semibold"> {{ game.game_duration }} </span>
              </div>

            </div>
            <div class="d-flex flex-row justify-content-between align-items-center">

              <div class="text-gray-900 text-hover-primary fs-6 fw-bold">
                
                <img :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${game.champion_name}.png`" alt="" style="height: 93px;">
              </div>
              <div class="d-flex flex-row">

                <div class="d-flex flex-column">
                  <img class="m-2 h-40px" 
                    :src="`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${summonerSpells[game.summoner1_id]}`" alt="">
                  <img class="m-2 h-40px" 
                    :src="`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${summonerSpells[game.summoner2_id]}`" alt="">
                </div>

                <div class="d-flex flex-column">
                  <img class="m-2 h-40px" 
                  :src="`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[game.main_rune]}`" alt="">
                  <img class="m-2 h-40px" 
                  :src="`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${runes[game.secondary_rune]}`" alt="">
                </div>

              </div>
              <div class="d-flex flex-column align-items-center">
                
                <span class="text-muted fw-semibold">{{ game.kda_string }}</span>
                <span class="text-muted fw-semibold">{{ game.kda_ratio }} KDA</span>
                <span class="text-muted fw-semibold"> {{ "CS " + game.cs + " ("+ game.cs_min+")"}} </span>
                <span class="text-muted fw-semibold">P/Kill {{ game.kill_participation_percentage }}%</span>
                <span class="text-muted fw-semibold">Vision {{ game.vision_score }}</span>

              </div>
              <div>
                <div class="d-flex flex-row">
                  <div v-for="(item, index) in game.items.slice(0, 3)" :key="item">
                    <img class="m-1 h-40px w-40px" v-if="item" :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/item/${item}.png`" :alt="item">
                    <div class="m-1 h-40px w-40px" v-else :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/item/${item}.png`"></div>
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <div v-for="(item, index) in game.items.slice(3, 7)" :key="item">
                    <img class="m-1 h-40px w-40px" v-if="item" :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/item/${item}.png`" :alt="item">
                    <div class="m-1 h-40px w-40px" v-else :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/item/${item}.png`"></div>
                  </div>
                </div>

              </div>

            </div>
            <div class="d-flex flex-row">
              <div class="w-100px">
                <div  v-for="(player, index) in game.players" :key="index" class="d-flex flex-column w-100">
                  <div class="d-flex flex-row mb-1 w-100" v-if="index < 5">
                    <img :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${player.champion_name}.png`" alt="" style="height: 20px;">
                    <div class="team_player">{{player.name}}</div>
                  </div>
                </div>
              </div>

              <div class="w-100px">

                <div  v-for="(player, index) in game.players" :key="index" class="d-flex flex-column w-100">
                  <div class="d-flex flex-row mb-1 w-100" v-if="index > 4">
                    <img :src="`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${player.champion_name}.png`" alt="" style="height: 20px;">
                    <div class="team_player">{{player.name}}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 1-->
</template>

<script>
import { defineComponent } from "vue";
import {summonerSpells, runes} from "@/constants";
export default defineComponent({
  name: "kt-widget-1",
  components: {},
  props: {
    games:Array,
  },
  setup(games){

    console.log( games)

    return {
      summonerSpells,
      runes
    }
   
  }
  
});
</script>
