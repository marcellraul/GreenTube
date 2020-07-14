import api from "@/services/api";

export default {
  createUnlike(body) {
    return api().post("/unlikes/unlikes", body);
  },

  getUnlikes(){
    return api().get("/unlikes/unlikes")
  }
  
};
