
<template>
<v-container>
    <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
    </v-card-title>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">PostID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.postId }}</td>
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card> 
  </v-container> 
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';
// :headers="headers"
//:items="desserts"
//:search="search"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data ()  {
    return {
      search: '',
      desserts: [],
      headers: [],
      todos: null
    }
  },
  mounted(){
    console.log('mounted is working');
    this.getTodos()
  },
  methods: {
    getTodos(){
      console.log('aca va el codigo de todos')
      axios.get('https://jsonplaceholder.typicode.com/comments')
          .then(response => {
            console.log(response);
            this.todos = response.data
          })
            .catch( e => console.log(e))
    }
  }


};
</script>






