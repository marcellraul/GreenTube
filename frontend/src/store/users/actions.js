import usersServices from "@/services/usersServices";

export default {
  create({ commit }, user) {//payload
    return new Promise(async (resolve, reject) => {
      await usersServices.createUser(user)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`users/ADD_ITEM`, resp.data["user"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await usersServices.getUSers()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`users/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  
  ,
  get({ commit }, user) {//payload
    return new Promise(async (resolve, reject) => {
      await usersServices.getUSer(user)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`users/SET_ITEM`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
};



