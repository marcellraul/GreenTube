import api from "@/services/api";

export default {
  createSuscriptor(body) {
    return api().post("/suscriptores/suscriptores", body);
  },

  getSuscriptores(post){
    return api().get("/suscriptores/suscriptores/"+post)
  },

  getSuscriptor(params){
    return api().get("/suscriptores/suscriptores/"+params)
  }
};
