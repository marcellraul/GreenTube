import unlikesServices from "@/services/unlikesServices";

export default {
  create({ commit }, unlikes) {//payload
    return new Promise(async (resolve, reject) => {
      await unlikesServices.createUnlike(unlikes)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`unlikes/ADD_ITEM`, resp.data["likes"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await unlikesServices.getUnlikes()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`unlikes/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  
  ,
};



