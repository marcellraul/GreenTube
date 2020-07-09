<template>
  <div>
  
    <v-container>
      <template> Tabla Videos 
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by=""
          class="elevation-1"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar flat class="ma-0" color="dark">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                color="#145A32"
              ></v-text-field>
              <v-spacer></v-spacer>
            
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Video",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "ID", value: "calories" },
      { text: "Canal", value: "protein" },
      { text: "Tipo", value: "fat" },
      { text: "Categoria", value: "cat" },
      { text: "Fecha", value: "carbs" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      cat:0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
     
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        {
          name: "Nombre Video",
          calories: "154485dasf565",
          protein: "nombre Canal",
          fat: "Comercial",
          cat: "Musica",
          carbs: "25/06/2020",
         
        },
        
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
