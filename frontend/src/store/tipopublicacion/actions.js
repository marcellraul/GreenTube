import tipopublicacionServices from "@/services/tipopublicacionServices";

export default {
  create({ commit }, tipop) {//payload
    return new Promise(async (resolve, reject) => {
      await tipopublicacionServices.createTipoPublicacion(tipop)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`tipop/ADD_ITEM`, resp.data["tp"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await tipopublicacionServices.getTiposPublicacion()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`tipop/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  
  ,
};



