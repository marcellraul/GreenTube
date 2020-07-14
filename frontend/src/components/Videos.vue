<template>
  <v-container fluid grid-list-md>
    <!--para las colummnas, row para las columnna y wrap para el responsive-->
    <v-layout row wrap>
          <div v-if="PublicacionesCanl<=0" class="mx-auto mt-6 mb-6"  >
              <h1 >No tienes Videos Publica uno!!!</h1>         
              <!--<v-img :src="item.avatar"></v-img>-->
           </div>
      <v-card
        v-for="PublicacionesCanlal in PublicacionesCanl "
        :key="PublicacionesCanlal.id"
        class="mx-auto mb-4"
        width="250"
        :to="{name: 'Publicaciones', params:{id: PublicacionesCanlal._id}}"
        hover >
           
           <div >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                <v-card-title>{{PublicacionesCanlal.titulo}}</v-card-title>
                <v-card-subtitle class>{{PublicacionesCanlal.desc}}</v-card-subtitle>
                <v-card-text class="mt-1">{{PublicacionesCanlal.categoria}}</v-card-text>            
          </div>

      </v-card>
           
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => {
    return {
      nuevo_comentario: {}
    };
  },

  computed: {
    publicacion() {
      return this.$store.getters["getItem"];
    },
    PublicacionesCanl() {
      //modulo
      return this.$store.getters["post/getItems"];
    },
    URL_ID() {
      return this.$route.params._id;
    }
  },
  methods: {},
  created() {
    console.log('this.URL: ', this.$store.dispatch("post/get", this.URL_ID));
    this.$store.dispatch("post/get", this.URL_ID);
    this.$store.dispatch("post/getPC");//esta
  }
};
</script>
