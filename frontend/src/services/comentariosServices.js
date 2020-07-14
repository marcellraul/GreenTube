import api from "@/services/api";

export default {
  createComentario(body) {
    return api().post("/comentarios/comentarios", body);
  },
  getComentarios(params){
    return api().get("/comentarios/comentarios/"+params)
  }

};
