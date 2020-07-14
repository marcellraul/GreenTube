<template>
  <v-app id="inspire">
    <v-main>
        <div>
          <v-alert v-if="alert" type="error" dismissible >
            Credenciales Incorrectas !
          </v-alert>
        </div>
      <v-container class="fill-height" fluid>
        
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-3">
              <v-img
              class="white--text"
              height="100px"
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
            >
            </v-img>
              <v-toolbar color="#145A32" dark flat>
                
                <v-toolbar-title>Ingresar</v-toolbar-title>

                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="loginnn">
                  <v-text-field
                  v-model="login"
                    color="#145A32"
                    label="Email"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    color="#145A32"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="#145A32" block>Login</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>

              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    alert: false,

    show: false,
    login: "",
    password: "",
    rules: {
      required: value => !!value || "Requerido",
      min: v => v.length >= 8 || "Mínimo 8 caracteres"
    }
  }),
  methods: {
       async  loginnn(){
        const user = {
          email : this.login,
          password : this.password
          }
        console.log(user)
        const resp = await this.$store.dispatch("auth/login", user)
        if(resp.user){//resp.status==200
           this.$router.push({ name: "Home" })
         }else {
              this.alert = true
            console.log('xxxxxx');}
        console.log(resp)
      }
  },
  mounted() {
    console.log("mounted is working");
  },

  created() {
    this.$store.dispatch("users/gets"); //nombre del modulo y nombre del actions
    //this.$store.dispatch("tipop/gets");
    this.$store.dispatch("tipop/gets");
  }
};
</script>
