import canalServices from "@/services/canalServices";

export default {
  create({ commit }, canal) {//payload
    return new Promise(async (resolve, reject) => {
      await canalServices.createCanal(canal)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`canal/ADD_ITEM`, resp.data["canal"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await canalServices.getCanals()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`canal/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  ,
  
  get({ commit }, post) {//payload
    return new Promise(async (resolve, reject) => {
      await canalServices.getCanalbyId(post)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`canal/SET_ITEM`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },


};



