<template>
  <div>
    <div>
      <v-container>
        <template>
            <v-container fluid>
              <v-form @submit.prevent="addComentario">
                <v-text-field  v-model="comentarinew.publicacion"  color="#145A32" ></v-text-field>
              <v-textarea v-model="comentarinew.comentariosnew"  clearable:true clear-icon="clear-icon"  label="Comentar" color="#145A32" ></v-textarea>
              <v-btn type="submit" class="ma-2"   color="#145A32"   >
                Comentar
              </v-btn>
              </v-form>
            </v-container>
        </template>

        <div v-if="loading">Cargando...</div>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="headline">Unlimited music now</v-card-title>
              <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
              <v-card-actions>
                <v-btn text>Listen Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!--
          <v-col v-for="item  in items" :key="item" cols="12">
            <v-card color="#1F7087" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">Supermodel</v-card-title>

                  <v-card-subtitle>Foster the People</v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>-->
        </v-row>
      </v-container>
    </div>

    <v-card
      v-for="comentario in comentarios" :key="comentario.id"  class="mx-auto mt-2 mb2" max-width="344" >
      <v-card-text>
        <div>Nombre: {{comentario.usuario}}</div>
        <div class="text--primary">
          {{comentario.comentario}}
          <br />
          "Fechas" {{comentario.createdAt}}
          <p>adjective</p>
        </div>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>

    <div></div>
  </div>
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
      comentarinew: {
        publicacion: "",
        comentariosnew : ""
      },
      comentarios: null,
      info: null,
      loading: true,
      errored: false,
      
    };
  },
  mounted() {
    console.log("mounted is working");
    this.getTodos();
  },
  methods: {
    addComentario(){
      fetch('http://localhost:3000/comentarios/comentarios',{
        method: 'POST',
        body: JSON.stringify(this.comentarinew),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
      console.log(this.comentarinew)
      //this.comentarinew.comentariosnew = '',
      //this.comentarinew.publicacion = ''
    },
    getTodos() {
      console.log("aca va el codigo de todos");
      axios
        .get("http://localhost:3000/comentarios/comentarios")
        .then(response => {
          console.log(response);
          this.comentarios = response.data;
        })
        .catch(e => console.log(e));
      axios
        .post("http://localhost:3000/comentarios/comentarios")
        .then(response => {
          console.log(response);
          this.comentarios = response.data;
        });
    }
  }
};
</script>
