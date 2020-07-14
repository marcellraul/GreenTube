import api from "@/services/api";

export default {
  createUser(body) {
    return api().post("/users/users", body);
  },

  Login(params){
    return api().post("/users/users/login", params)
  },

  Logout(params){
    return api().post("/users/users/logout", params)
  },

 

};
