import api from "@/services/api";

export default {
  createTipoPublicacion(body) {
    return api().post("/tpublicacion/tpublicacion", body);
  },

  getTiposPublicacion(){
    return api().get("/tpublicacion/tpublicacion")
    
  }
};
