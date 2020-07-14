<template>
  <div>
    <div>
      <v-container>
        <h1>Suscriptores</h1>
        <template>
          <v-container fluid>
            <v-form @submit.prevent="addComentario">
              <v-text-field v-model="comentarinew.publicacion" color="#145A32"></v-text-field>
              <v-textarea
                v-model="comentarinew.comentariosnew"
                clearable:true
                clear-icon="clear-icon"
                label="Comentar"
                color="#145A32"
              ></v-textarea>
              <v-btn type="submit" class="ma-2" color="#145A32">Comentar</v-btn>
            </v-form>
          </v-container>
        </template>

        <div v-if="loading">Cargando...</div>
        <v-row dense>
          <v-col cols="12">
            <v-card v-for="comentario in comentarios" :key="comentario.id" class="mx-auto mt-2 mb2">
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
          </v-col>
        </v-row>
      </v-container>
    </div>

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
        comentariosnew: ""
      },
      comentarios: null,
      info: null,
      loading: true,
      errored: false
    };
  },
  mounted() {
    console.log("mounted is working");
    this.getTodos();
  },
  methods: {
    addComentario() {
      fetch("http://localhost:3000/comentarios/comentarios", {
        method: "POST",
        body: JSON.stringify(this.comentarinew),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => console.log(data));
      console.log(this.comentarinew);
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
