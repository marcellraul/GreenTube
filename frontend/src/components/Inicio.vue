<template>
  <div>
    <div>
      <template>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-card class="mx-auto mt-6 mb-6" max-width="744" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    <v-icon class="mr-4">mdi-television</v-icon>GreenTube
                  </div>
                  <v-list-item-title class="headline mb-1">Subir un Video</v-list-item-title>
                  <v-list-item-subtitle>Tu Canal</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="180" color="grey">
                  <v-img
                    height="200px"
                    width="400px"
                    src="../assets/89105040_2854921071256805_2401245601636286464_n.jpg"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-row class="ma-6">
                <v-col cols="12" sm="12">
                  <v-textarea
                    v-model="publicacion.titulo"
                    color="#145A32"
                    class="mx-2"
                    label="Titulo"
                    rows="1"
                    prepend-icon="mdi-comment"
                  ></v-textarea>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    v-model="publicacion.categoria"
                    :items="categorias"
                    item-text="nombre"
                    autocomplete
                    prepend-icon="mdi-email"
                    label="Categoria"
                    dense
                    color="#145A32"
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    v-model="publicacion.tipo"
                    :items="tipopublicacion"
                    item-text="nombre"
                    autocomplete
                    prepend-icon="mdi-email"
                    label="Tipo Video"
                    dense
                    color="#145A32"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="12">
                  <v-textarea
                    color="#145A32"
                    class="mx-2"
                    label="Descripcion"
                    v-model="publicacion.desc"
                    rows="1"
                    prepend-icon="mdi-comment"
                  ></v-textarea>
                </v-col>

                <template>
                  <v-col cols="12" sm="12">
                    <v-file-input
                      color="#145A32"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Image Preview"
                      prepend-icon="mdi-camera"
                      label
                    ></v-file-input>
                  </v-col>
                </template>

                <template>
                  <v-col cols="12" sm="12">
                    <v-file-input
                      color="#145A32"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Video"
                      prepend-icon="mdi-paperclip"
                      label
                    ></v-file-input>
                  </v-col>
                </template>

                <template>
                  <div class>
                    <v-btn
                      block
                      :loading="loading3"
                      :disabled="loading3"
                      color="blue-grey"
                      class="ma-2 white--text"
                      @click="AddPublicacion"
                    >
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </div>
                </template>
              </v-row>
            </v-card>
          </v-layout>
        </v-container>
      </template>
    </div>
  </div>
</template>

       

<script>
export default {
  data: () => ({
    publicacion: {
      titulo: "",
      desc: "",
      canal: "",
      tipo: null,
      categoria: null,
      imagePreview: "",
      video: ""
    },
    loader: null,
    loading: false,
    loading2: false,
    loading3: false,
    loading4: false,
    loading5: false
  }),
  methods: {
    AddFormData(object) {
      
        Object.keys(object).reduce((formData, key) => {
          formData.append(
            key,
            Array.isArray(object[key])
              ? JSON.stringify(object[key])
              : object[key]
          );
          return formData;
        }, new FormData());
     
    },
    AddPublicacion() {
      let p = new FormData();
      //    fd.append('titulo', this.publicacion.titulo);
      p.append("titulo", this.publicacion.titulo);
      p.append("desc", this.publicacion.desc);
      p.append("tipo", this.publicacion.tipo);
      //p.append('canal', this.publicacion.canal)
      p.append("categoria", this.publicacion.categoria);
      p.append("aldazoro", "maria");

      // p.append('imagePreview', this.publicacion.imagePreview)
      //p.append('video', this.publicacion.video)

      console.log(this.AddFormData(this.publicacion));
      const resp = this.$store.dispatch("post/create", this.publicacion);
      console.log(resp);
    }
  },
  computed: {
    categorias() {
                                       //moduolo
      console.log(this.$store.getters["categoria/getItems"]);
      return this.$store.getters["categoria/getItems"];
    },
    tipopublicacion() {
                                         //modulo
      console.log(this.$store.getters["tipop/getItems"]);
      return this.$store.getters["tipop/getItems"];
    }
  },
  created() {
    this.$store.dispatch("categoria/gets"); //nombre del modulo y nombre del actions
    this.$store.dispatch("tipop/gets");
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
