import likesServices from "@/services/likesServices";

export default {
  create({ commit }, tipop) {//payload
    return new Promise(async (resolve, reject) => {
      await likesServices.createLike(tipop)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`likes/ADD_ITEM`, resp.data["likes"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await likesServices.getLikes()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`likes/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  
  ,
};



