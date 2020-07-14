import categoriaService from "@/services/categoriaServices";

export default {
  create({ commit }, categoria) {//payload
    return new Promise(async (resolve, reject) => {
      await categoriaService.createCategoria(categoria)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`categoria/ADD_ITEM`, resp.data["ca"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await categoriaService.getCategorias()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`categoria/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
};



