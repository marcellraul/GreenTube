<template>
  <v-container fluid grid-list-md>
    <!--para las colummnas, row para las columnna y wrap para el responsive-->
    <v-layout row wrap>
      <v-card
        v-for="Publicacion in Publicaciones"
        :key="Publicacion.id"
        class="mx-auto mb-4"
        width="250"
        :to="{name: 'Publicaciones', params:{id: Publicacion._id}}"
        hover
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
        <v-card-title>{{Publicacion.titulo}}</v-card-title>
        <v-card-subtitle class>{{Publicacion.desc}}</v-card-subtitle>
        <v-card-text class="mt-1">{{Publicacion.canal}}</v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data: () => {
    return {
      show: false,
      search: "",
      desserts: [],
      headers: [],
      todos: null
    };
  },
  mounted() {
    //console.log("mounted is working");
    this.getTodos();
  },
  methods: {
    getTodos() {
      console.log("aca va el codigo de todos");
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
          console.log(response);
          this.todos = response.data;
        })
        .catch(e => console.log(e));
    },
    getPublicaciones() {}
  },
  computed: {
    Publicaciones() {
      console.log('publicaciones: ',this.$store.getters["post/getItems"]);
      return this.$store.getters["post/getItems"];
    }
  },
  created() {
    this.$store.dispatch("post/gets"); //nombre del modulo y nombre del actions
    //this.$store.dispatch("tipop/gets");
  }
};
</script>

