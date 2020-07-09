<template>
 
  <template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-image</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Image</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help Box</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <hr class="green darken-2">

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home-city</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>City Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <hr class="green darken-2">

        <v-list-item link>
          <v-list-item-icon>
               <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
           <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
          </v-list>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <hr class="green darken-2">

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mail</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cloud-Upload</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-code-tags</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Code tags</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Wrench</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>     
      <v-spacer></v-spacer>
      <v-row justify="space-around">
        <v-icon large color="green darken-2">mdi-domain</v-icon>
        <v-icon large color="blue darken-2">mdi-message-text</v-icon>
        <v-icon large color="purple darken-2">mdi-dialpad</v-icon>
        <v-icon large color="teal darken-2">mdi-email</v-icon>
        <v-icon large color="blue-grey darken-2">mdi-call-split</v-icon>
        <v-icon large color="orange darken-2">mdi-arrow-up-bold-box-outline</v-icon>
      </v-row>

      <v-btn color="green darken-2">text</v-btn>
      <v-btn flat icon color="primary" disabled>
        <v-icon>x</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--fluid obtiene mas espacio en la pantalla y no tanto contenedor-->
      <!-- Grid-list es para la separacione entre los componentes -->
      <v-container fluid grid-list-md>
        <div class="text-center">
          <v-btn class="ma-2" color="primary" dark>Accept
            <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
          </v-btn>

          <v-btn class="ma-2" color="red" dark>Decline
            <v-icon dark right>mdi-cancel</v-icon>
          </v-btn>

            <v-btn class="ma-2" color="green darken-2" dark>
            <v-icon dark left>mdi-arrow-left</v-icon>Back
          </v-btn>

          <v-btn class="ma-2" color="purple" dark>
            <v-icon dark>mdi-wrench</v-icon>
          </v-btn>

          <v-btn class="ma-2" color="indigo" dark>
            <v-icon dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </div>
        <v-row>
         <v-col cols="12" sm="3" md="3">
              <v-switch
              v-model="ex11"
              label="red darken-3"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-switch>
          </v-col>

          <v-col cols="12" sm="3" md="3">
            <v-switch
              v-model="ex11"
              label="success"
              color="green darken-2"
              value="success"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="3" md="3">
             <v-switch
              v-model="ex11"
              label="indigo darken-3"
              color="indigo darken-3"
              value="indigo darken-3"
              hide-details
              ></v-switch>
          </v-col>
          <v-col cols="12" sm="3" md="3">
            <v-switch
                v-model="ex11"
                label="secondary"
                color="secondary"
                value="secondary"
                hide-details
              ></v-switch>
          </v-col>

          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="success"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>

        <hr class="green darken-2">
        <v-radio-group v-model="row" row>
          <v-radio color="green darken-2" label="Option 1" value="radio-1"></v-radio>
          <v-radio  color="green darken-2" label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>

        <!--para las colummnas, row para las columnna y wrap para el responsive-->
        <v-layout row wrap >
          <!--cada colummna sera un v-flex-->
          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/89105040_2854921071256805_2401245601636286464_n.jpg"></v-img>
            <v-card-text> <p> Descripcion: Lorem "Lorem ipsum dolor sit amet </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/29594460_190300248254978_2107435221263261779_n.jpg"></v-img>
            <v-card-text> <p> Descripcion: Lorem "Lorem ipsum dolor o laboris  </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/50751074_2365582730179290_1725154170845003776_n.jpg"></v-img>
            <v-card-text> <p> Descripcion: Lorem hdvgtsis  luys bs  </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/34062966_207855806499422_3376082197189492736_n.jpg"></v-img>
            <v-card-text> <p> Descripcion: ostrud exercitation ullamco laboris  </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>
          
            <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/ee3a931610ba80487688b617eda82c10.jpg"></v-img>
            <v-card-text> <p> Descripcion: Lorem "Lorem ipsum dolor sit amet </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/Apache_y_Canserbero.jpg"></v-img>
            <v-card-text> <p> Descripcion: Lorem "Lorem ipsum dolor o laboris  </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/50614953_1793038200804841_8105015462678495232_n.jpg"></v-img>
            <v-card-text> <p> Descripcion: Lorem hdvgtsis  luys bs  </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs10 sm3>
            <v-card>
            <v-card-title primary-title>Title:</v-card-title>
            <v-img src="./assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"></v-img>
            <v-card-text> <p> Descripcion: ostrud exercitation ullamco laboris  </p> </v-card-text>
            <v-card-actions>botones</v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

    </v-main>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

 
</template>
