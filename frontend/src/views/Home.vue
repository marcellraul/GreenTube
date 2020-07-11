<template>
  <v-container fluid grid-list-md>
    <!--para las colummnas, row para las columnna y wrap para el responsive-->
    <v-layout row wrap>
      <!--cada colummna sera un v-flex-->
      <!-- 12 toda la pantalla, 6 mitad, 3 un cuarto de la pantalla-->
      <!-- <v-flex xs12 sm6 md3 lg2>
                <v-card class="" v-for="todo in todos" :key="todo.id" height="350px" width="300px" :to="'watch'" hover>
                <v-card-title primary-title>Title:{{todo.id}}</v-card-title>
                <v-img height="200px" ></v-img>
                <v-card-text> <p> {{todo.name}} </p> </v-card-text>
                </v-card>
      </v-flex>-->
      <v-card  v-for="todo in todos" :key="todo.id" class="mx-auto mb-4" width="250" >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
        <v-card-title>{{todo.id}}</v-card-title>
        <v-card-subtitle class=" ">{{todo.name}}</v-card-subtitle>
        <v-card-text  class="mt-1">{{todo.email}}</v-card-text>
        
      </v-card>

    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
// :headers="headers"
//:items="desserts"
//:search="search"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
         show: false,
      search: "",
      desserts: [],
      headers: [],
      todos: null
    };
  },
  mounted() {
    console.log("mounted is working");
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
    }
  }
};
</script>

