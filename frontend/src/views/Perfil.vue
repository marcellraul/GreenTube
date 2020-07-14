<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#1D1E1D "
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-toolbar-title>Nombre: Marcell Viera</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs centered v-model="model" color="#214B33 ">
          <v-tab>Inicio</v-tab>
          <v-tab>Videos</v-tab>
          <v-tab>Listas de Reproducción</v-tab>
          <v-tab>Canales</v-tab>
          <v-tab>Información</v-tab>
        </v-tabs>

        <v-tabs-items v-model="model">
          <v-tab-item :key="i" :value="`1`">
            <v-card flat>
              <v-card-text v-text="text">texteeekjbvklhbsdlhfbsdfsdf</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<style lang=""></style>
