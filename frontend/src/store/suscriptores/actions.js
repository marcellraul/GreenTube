import suscriptoresServices from "@/services/suscriptoresServices";

export default {
  create({ commit }, suscriptor) {//payload
    return new Promise(async (resolve, reject) => {
      await suscriptoresServices.createSuscriptor(suscriptor)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`suscriptores/ADD_ITEM`, resp.data["suscrip"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit },post) {//payload
    return new Promise(async (resolve, reject) => {
      await suscriptoresServices.getSuscriptores(post)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`suscriptores/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  
  ,

  get({ commit,params }) {//payload
    return new Promise(async (resolve, reject) => {
      await suscriptoresServices.getSuscriptor(params)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`suscriptores/SET_ITEM`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
};



