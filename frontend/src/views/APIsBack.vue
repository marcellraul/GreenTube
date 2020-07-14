<template>
  <div>
    <div>
      <v-container>
        <h1>Suscriptores</h1>
        <template>
          <v-container fluid>
            <v-form @submit.prevent="add">
              <v-text-field  color="#145A32"></v-text-field>
              <v-textarea
                
                clearable:true
                clear-icon="clear-icon"
                label="Comentar"
                color="#145A32"
              ></v-textarea>
              <v-btn type="submit" class="ma-2" color="#145A32">Comentar</v-btn>
            </v-form>
          </v-container>
        </template>

       
        <v-row dense>
          <v-col cols="12">
            <v-card hover  v-for="Cana in Canal" :key="Cana.id" class="mx-auto mt-2 mb2"
            :to="{name: 'ApisBackID', params:{id: Cana._id}}">
              <v-card-text>
                <div>Nombre: {{Cana.nombre}}</div>
                <div class="text--primary">
                  {{Cana.desc}}
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
    </div>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
    
      nuevo_comentario: {},
      nueva_susp: {}
    }
  },

  computed: {
      Canal() {
        //return this.$store.getters["suscriptores/getItems"];
        return this.$store.getters["canal/getItems"];
      },
  },
    created() {
    //this.$store.dispatch("suscriptores/gets"); //nombre del modulo y nombre del actions
    //this.$store.dispatch("tipop/gets");
     this.$store.dispatch("canal/gets");
    //this.$store.dispatch("suscriptores/get", this.URL_ID);
  },

};
</script>