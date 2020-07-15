<template>
  <v-row align="center" t6>
    <v-card class="mx-auto mt-6 mb-6" max-width="650" tile>
      <v-toolbar-title align="center" class="mx-auto mt-6 mb-6 " > Seguidores</v-toolbar-title>
      <v-list
        
        :disabled="disabled"
        :dense="dense"
        :two-line="twoLine"
        :three-line="threeLine"
        :shaped="shaped"
        :flat="flat"
        :subheader="subheader"
        :sub-group="subGroup"
        :nav="nav"
        :avatar="avatar"
        :rounded="rounded"
      >
        <v-list-item-group v-model="item"  color="#145A32">
          <v-list-item v-for="(item, i) in items" :key="i" :inactive="inactive">
            <v-list-item-avatar v-if="avatar">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    item: 5,
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ],
    disabled: false,
    dense: false,
    twoLine: false,
    threeLine: true,
    shaped: false,
    flat: false,
    subheader: false,
    inactive: false,
    subGroup: false,
    nav: true,
    avatar: true,
    rounded: true
  }),
    created() {
    //this.$store.dispatch("suscriptores/gets"); //nombre del modulo y nombre del actions
    //this.$store.dispatch("tipop/gets");
    //this.$store.dispatch("canal/gets"); //obtiene todos
    this.$store.dispatch("canal/get", this.URL_ID);//este obtiene uno solo
    this.$store.dispatch("suscriptores/gets", this.Canal.id);//todos
    
    //this.$store.dispatch("suscriptores/get", this.URL_ID);
  },
    computed: {
    Canal() {
      return this.$store.getters["canal/getItem"];
    },
    Canals() {
      //return this.$store.getters["suscriptores/getItems"];
      return this.$store.getters["canal/getItems"];
    },
    suscriptores(){
      return this.$store.getters["suscriptores/getItems"];
      },

    URL_ID() {
      return this.$route.params.id;
    },
    URL_CANAL(){

    }
  },
    created() {
    this.$store.dispatch("canal/get", this.URL_ID);
    this.$store.dispatch("post/getPC");
  }


};
</script>