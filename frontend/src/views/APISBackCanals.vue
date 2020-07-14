
<template>
  <v-container fluid>
    <v-form @submit.prevent>
      <v-col cols="12">
        <v-card dark height="150px" outlined>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="90" tile>
              <v-img src="../assets/2c338ad96119c6568d0fe1cea353b696--rap-indigo.jpg"></v-img>
            </v-avatar>
            <div>
              <v-card-title class="headline">Titulo: {{Canal.nombre}}</v-card-title>
              <v-card-subtitle>Canal: {{Canal.desc}}</v-card-subtitle>

              <v-card-actions>
                <v-btn block color="#145A32" dark>Suscribirse</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-form>
    <template>
      <v-container fluid>
        <v-form @submit.prevent="Suscribir">
          <v-textarea v-model="nueva_susp.canal" clearable:true clear-icon="clear-icon" label="Comentar" color="#145A32"></v-textarea>
          <v-btn type="submit" class="ma-2" color="#145A32">Comentar</v-btn>
        </v-form>
      </v-container>
    </template>

    <v-row dense>
      <v-col cols="12">
        <v-card
          hover
          v-for="Cana in suscriptores"
          :key="Cana.id"
          class="mx-auto mt-2 mb2"
          :to="{name: 'ApisBackID', params:{id: Cana._id}}"
        >
          <v-card-text>
            <div>Nombre: {{Cana.canal}}</div>
            <div class="text--primary">
              {{Cana.estado}}
              <br />
              "Fechas" {{Cana.createdAt}}
              <p>adjective</p>
            </div>
          </v-card-text>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      nuevo_comentario: {},
      nueva_susp: {}
    };
  },
  created() {
    //this.$store.dispatch("suscriptores/gets"); //nombre del modulo y nombre del actions
    //this.$store.dispatch("tipop/gets");
    //this.$store.dispatch("canal/gets"); //obtiene todos
    this.$store.dispatch("canal/get", this.URL_ID);//este obtiene uno solo
    this.$store.dispatch("suscriptores/gets", this.URL_ID);//todos
    
    //this.$store.dispatch("suscriptores/get", this.URL_ID);
  },
  computed: {
    Canal() {
      //services
      //return this.$store.getters["suscriptores/getItems"];
      return this.$store.getters["canal/getItem"];
    },
    Canals() {
      //for
      //return this.$store.getters["suscriptores/getItems"];
      return this.$store.getters["canal/getItems"];
    },
    suscriptores(){
            return this.$store.getters["suscriptores/getItems"];
      },

    URL_ID() {
      return this.$route.params.id;
    }
  },
  methods: {
    Suscribir() {
      this.nueva_susp.canal = this.URL_ID;//lo que voy a obtener del modelo
      this.$store.dispatch("suscriptores/create", this.nueva_susp);
      this.nueva_susp = {};
      console.log(this.nueva_susp);
    }
  }
};
</script>        