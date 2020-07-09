<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-card class="mx-auto mt-6 mb-6" max-width="744" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4" ><v-icon class="mr-4" >mdi-television</v-icon>GreenTube</div>
            <v-list-item-title class="headline mb-1"
              >Aqui va tu Canal</v-list-item-title
            >
            <v-list-item-subtitle
              >Descripcion de tu canal </v-list-item-subtitle
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
