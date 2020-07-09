<template>
  <v-card>
    <v-row justify="space-around">
      <v-card class="mb-4 mt-4" width="444" dark>
        <v-card-text>
          <p class="display-1 text--primary">
            Tu Canal
          </p>
          <div class="text--primary">
            180.568 Seguidores!
          </div>
          <v-card-actions>
            <v-btn color="#145A32">Seguir</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>

      <v-avatar class="mb-4 mt-4"  size="180">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-row>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="#145A32"
      grow
      class="mb-1"
    >
      <v-tab v-for="item in items" :key="item" v-text="item"> </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <component :is="item"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import TabsCom from "./TabsCom";
import Inicio from "./Inicio";
import Videos from "./Videos";
import PlayList from "./PlayList";
import Canales from "./Canales";
import Informacion from "./Informacion";
import vuecorevideoplayer from './vuecorevideoplayer'
export default {
  components: {
    Inicio,
    Videos,
    PlayList,
    Informacion,
    Canales,
    vuecorevideoplayer
  },
  data() {
    return {
      tab: null,
      items: ["Inicio", "Videos", "PlayList", "Canales", "Informacion","vuecorevideoplayer"],
    };
  },
};
</script>
