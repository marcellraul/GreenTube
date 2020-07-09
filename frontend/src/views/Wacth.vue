<template>
  <v-container fluid grid-list-md class="">
    <v-layout row wrap>
      <v-flex>
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row>
          <v-col cols="12" md="12">
            <v-card class="pa-2" height="400px" width="100%" tile>
              <!--col-12 .col-md-8-->
              <video preload="auto" controls autoplay width="100%" height="390px"
                src="../videos/3DFlipCardEff.mp4">
                Tu navegador no implementa el elemento <code>video</code>.
              </video>
            </v-card>
          </v-col>

          <v-col cols="12" md="8">
            <v-card class="pa-2" width="100%" tile>
              <!--esta es la segunda .col-12 .col-md-8-->

              <template>
                <v-card class="mx-auto" outlined>
                  <v-col v-for="(item2, i) in items2" :key="i" cols="12">
                    <v-card dark height="150px" outlined="none">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-avatar class="ma-3" size="90" tile>
                          <v-img
                            src="../assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"
                          ></v-img>
                        </v-avatar>
                        <div>
                          <v-card-title
                            class="headline"
                            v-text="item2.title"
                          ></v-card-title>
                          <v-card-subtitle
                            v-text="item2.artist"
                          ></v-card-subtitle>
                          <v-card-actions>
                            <v-btn block color="#145A32" dark>
                              Suscribirse
                            </v-btn>
                          </v-card-actions>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-card-title>
                    Top western road trips
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                      <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </template>
              <template>
                <v-container fluid>
                  <v-textarea
                    clearable
                    clear-icon="clear-icon"
                    label="Comentar"
                    value="Haz un Comentario!!"
                    color="#145A32"
                  ></v-textarea>
                  <v-btn
                    class="ma-2"
                    :loading="loading2"
                    :disabled="loading2"
                    color="#145A32"
                    @click="loader = 'loading2'"
                  >
                    Comentar
                    <template v-slot:loader>
                      <span>Loading...</span>
                    </template>
                  </v-btn>
                </v-container>
              </template>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" width="100%">

            <v-card class="pa-2 mx-auto"  width="100%" outlined tile>
              <template>
                <div>
                  <v-container fluid grid-list-md>
                <!--para las colummnas, row para las columnna y wrap para el responsive-->
                <v-layout row wrap>
                  <!--cada colummna sera un v-flex-->
                  <!-- 12 toda la pantalla, 6 mitad, 3 un cuarto de la pantalla-->
                  <v-flex xs12 md12 >
                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card dark height="100px">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-avatar class="ma-1" size="90" tile>
                          <v-img
                            src="../assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"
                          ></v-img>
                        </v-avatar>
                        <div>
                          <v-card-title
                            class="headline"
                            v-text="item.title"
                          ></v-card-title>
                          <v-card-subtitle
                            v-text="item.artist"
                          ></v-card-subtitle>
                        </div>
                      </div>
                    </v-card>
                  </v-col>

                  <v-flex xs12 md12 >
                    <v-card height="400px">
                      <v-card-title primary-title>Title:</v-card-title>
                      <v-img
                        height="200px"
                        src="../assets/29594460_190300248254978_2107435221263261779_n.jpg"
                      ></v-img>
                      <v-card-text>
                        <p>Descripcion: Lorem "Lorem ipsum dolor o laboris</p>
                      </v-card-text>
                      <v-card-actions>botones</v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 md12>
                    <v-card height="400px">
                      <v-card-title primary-title>Title:</v-card-title>
                      <v-img
                        height="200px"
                        src="../assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"
                      ></v-img>
                      <v-card-text>
                        <p>Descripcion: ostrud exercitation ullamco laboris</p>
                      </v-card-text>
                      <v-card-actions>botones</v-card-actions>
                    </v-card>
                  </v-flex>
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
  data: () => ({
    show: false,
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },

      {
        color: "#145A32",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
    items2: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Nombre del Video",
        artist: "Canal",
      },
    ],
  }),
};
</script>
