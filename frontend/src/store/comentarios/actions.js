import comentariosServices from "@/services/comentariosServices";


export default {
  create({ commit }, comentario) {//payload
    return new Promise(async (resolve, reject) => {
      await comentariosServices.createComentario(comentario)
        .then((resp) => {
          console.log(resp)
          commit(`comentarios/ADD_ITEM`, resp.data["co"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }, post) {//payload
    return new Promise(async (resolve, reject) => {
      await comentariosServices.getComentarios(post)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`comentarios/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  ,
};
