import api from "@/services/api";

export default {
  createLike(body) {
    return api().post("/likes/likes", body);
  },

  getLikes(){
    return api().get("/likes/likes")
  }
  
};
