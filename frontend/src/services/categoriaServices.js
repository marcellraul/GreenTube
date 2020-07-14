import api from "@/services/api";

export default {
  createCategoria(body) {
    return api().post("/categoria/categoria", body);
  },

  getCategorias(){
    return api().get("/categoria/categoria")
    
  }
};
