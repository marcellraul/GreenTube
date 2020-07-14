<template>
  <v-container fluid grid-list-md class>
    <v-layout row wrap>
      <v-flex>
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row>
          <v-col cols="12" md="12">
            <v-card class="pa-2" height="400px" width="100%" tile>
              <!--col-12 .col-md-8-->
              <video
                preload="auto"
                controls
                width="100%"
                height="390px"
                src="../videos/3DFlipCardEff.mp4"
              >
                Tu navegador no implementa el elemento
                <code>video</code>.
              </video>
            </v-card>
          </v-col>

          <v-col cols="12" md="8">
            <v-card class="pa-2" width="100%" tile>
              <!--esta es la segunda .col-12 .col-md-8-->

              <template>
                <v-card class="mx-auto" outlined>
                  <v-col cols="12">
                    <v-card dark height="150px" outlined>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-avatar class="ma-3" size="90" tile>
                          <v-img src="../assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"></v-img>
                        </v-avatar>
                        <div>
                          <v-card-title class="headline">Titulo: {{publicacion.titulo}}</v-card-title>
                          <v-card-subtitle>Canal: {{publicacion.canal}}</v-card-subtitle>

                          <v-card-actions>
                            <v-btn block color="#145A32" dark>Suscribirse</v-btn>
                          </v-card-actions>
                        </div>
                      </div>
                    </v-card>
                  </v-col>

                  <v-card-subtitle>Descripcion: {{publicacion.desc}}</v-card-subtitle>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                      <v-icon>{{show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text>Descripcion Completa: {{publicacion.desc}}</v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </template>

              <template>
                <v-container fluid>
                  <v-textarea
                    clear-icon="clear-icon"
                    label="Haz un Comentario!!"
                    color="#145A32"
                    clearable:true
                    v-model="nuevo_comentario.comentario"
                  ></v-textarea>
                  <v-btn class="ma-2" color="#145A32" @click="comentar">
                    Comentar
                    <template v-slot:loader>
                      <span>Loading...</span>
                    </template>
                  </v-btn>
                </v-container>
              </template>

              <template>
                <v-container fluid>
                  <v-textarea
                    v-for=" comentario in comentarios"
                    :key="comentario.id"
                    disabled
                    single-line
                    clear-icon="clear-icon"
                    color="#145A32"
                    :value="comentario.comentario"
                  ></v-textarea>
                </v-container>
              </template>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" width="100%">
            <v-card class="pa-0" width="100%" outlined tile>
              <template>
                <div>
                  <v-container fluid grid-list-md>
                    <!--para las colummnas, row para las columnna y wrap para el responsive-->
                    <v-layout row wrap>
                      <!--cada colummna sera un v-flex-->
                      <!-- 12 toda la pantalla, 6 mitad, 3 un cuarto de la pantalla-->
                      <v-flex xs12 md12>
                        <v-col cols="12">
                          <v-card
                            class="mb-4"
                            hover
                            v-for="publicacionessi in publicacionessig"
                            :key="publicacionessi.i"
                            dark
                            height="100px"
                            :to="{name: 'Publicaciones', params:{id: publicacionessi._id}}"
                          >
                            <div class="d-flex flex-no-wrap justify-space-between">
                              <v-avatar class="ma-1" size="90" tile>
                                <v-img
                                  src="../assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"
                                ></v-img>
                              </v-avatar>
                              <div>
                                <v-card-title class="headline" v-text="publicacionessi.titulo"></v-card-title>
                                <v-card-subtitle v-text="publicacionessi.canal"></v-card-subtitle>
                              </div>
                            </div>
                          </v-card>
                        </v-col>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
              </template>
              <!--.col-6 .col-md-4-->
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>

    <!-- Columns are always 50% wide, on mobile and desktop -->
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      clearable: true,
      show: false,
      nuevo_comentario: {}
    };
  },
  created() {
    this.$store.dispatch("post/gets"); //nombre del modulo y nombre del actions
    //this.$store.dispatch("tipop/gets");
    this.$store.dispatch("post/get", this.URL_ID);
    this.$store.dispatch("comentarios/gets", this.URL_ID);
    this.$store.dispatch("suscriptores/gets");

  },
  computed: {
    publicacion() {
      //del services
      return this.$store.getters["post/getItem"];
      console.log("datos publicacion", this.$store.getters["post/getItem"]);
    },

    publicacionessig() {
      //for
      console.log("ta vacio??", this.$store.getters["post/getItems"]);
      return this.$store.getters["post/getItems"];
    },

    comentarios() {
      //modulo
      return this.$store.getters["comentarios/getItems"];
    }, 
    suscriptores(){
            return this.$store.getters["suscriptores/getItems"];
    },

    URL_ID() {
      return this.$route.params.id;
    }
  },
  methods: {
    comentar() {
      this.nuevo_comentario.publicacion = this.URL_ID; //lo que voy a obtener del modelo
      this.$store.dispatch("comentarios/create", this.nuevo_comentario);
      this.nuevo_comentario = {};
    }
  }
};
</script>
