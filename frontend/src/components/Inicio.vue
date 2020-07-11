<template>
<div>
  <div>
    <template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-card class="mx-auto mt-6 mb-6" max-width="744" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4" ><v-icon class="mr-4" >mdi-television</v-icon>GreenTube</div>
            <v-list-item-title class="headline mb-1"
              >Subir un Video</v-list-item-title
            >
            <v-list-item-subtitle
              >Tu Canal </v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="180" color="grey">
            <v-img height="200px" width="400px" src="../assets/89105040_2854921071256805_2401245601636286464_n.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        
        <v-row class="ma-6">
         
          <v-col cols="12" sm="6">
            <v-text-field  
            prepend-icon="mdi-email"
              value="marcellraul20@gmail.com"
              label="Correo"
              color="#145A32"
              readonly
            ></v-text-field>
          </v-col>

            <v-col cols="12" sm="6">
            <v-text-field
            prepend-icon="mdi-phone"
              value="0416-4547183"
              label="Telefono "
              color="#145A32"
              readonly
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
            prepend-icon="mdi-facebook"
              value=" Marcell Viera"
              label="Facebook"
              color="#145A32"
              readonly
            ></v-text-field>
          </v-col>


          <v-col cols="12" sm="6">
            <v-text-field
              prepend-icon="mdi-instagram"
              value=" @marcellmono"
              label="Instagram"
              color="#145A32"
              readonly
            ></v-text-field>
          </v-col>


          <v-col cols="12" sm="6">
            <v-text-field
              prepend-icon="mdi-linkedin"
              value=" @marcellmono"
              label="Twitter"
              color="#145A32"
              readonly
            ></v-text-field>
          </v-col>
       
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

  </div>


  <v-container  >
   <v-row justify="center">
      <v-card  outlined class="text-center" width="500" >
        <v-img 
          height="250px"  
          src="../assets/89105040_2854921071256805_2401245601636286464_n.jpg"
        ></v-img>
        <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Upload your Video"
            prepend-icon="mdi-camera"
            label="File"
        ></v-file-input>
        <v-list-item-content >
          <v-list-item-title class="headline mb-1"
            >Subir un Video</v-list-item-title
          >
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >

        </v-list-item-content>
        <v-card-actions >
          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="blue-grey"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
   </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
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
