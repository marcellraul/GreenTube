import api from "@/services/api";

export default {
  createUser(body) {
    return api().post("/users/users", body);
  },

  getUSers(){
    return api().get("/users/users/")
  },

  getUSer(params){
    return api().get("/users/users/"+params)
  },

  deleteUser(params){
    return api().get("/users/users/"+params)
  }

};
