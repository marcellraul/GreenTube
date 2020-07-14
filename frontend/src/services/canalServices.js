import api from "@/services/api";

export default {
  createCanal(body) {
    return api().post("/canal/canal", body);
  },

  getCanals(){
    return api().get("/canal/canal")
  },

  getCanalbyId(params){
    return api().get("/canal/canal/"+params)
  },


};
