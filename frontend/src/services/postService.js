import api from "@/services/api";

export default {
  createPost(body) {
    return api().post("/publicacion/publicacion", body);
  },

  getPosts(){
    return api().get("/publicacion/publicacion")
  },

  getPostbyId(params){
    return api().get("/publicacion/publicacion/"+params)
  },

  getPostCanal(){
    return api().get("/publicacion/canal/")
  }
};
