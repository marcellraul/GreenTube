import authServices from "@/services/authServices";

export default {
  create({ commit }, auth) {//payload
    return new Promise(async (resolve, reject) => {
      await authServices.createUser(auth)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`auth/ADD_ITEM`, resp.data["user"], { root: true });//el objeto que envio del back
         
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  login({ commit }, params) {//payload
    return new Promise(async (resolve, reject) => {
      await authServices.Login(params)
        .then((resp) => {
          console.log('conselo login',resp.data['user'])//nombre del modulo
          commit(`auth/SET_AUTH`, resp.data['user'], { root: true });//el objeto que envio del back
          commit(`auth/SET_TOKEN`, resp.data['token'], { root: true });//el objeto que envio del back
          window.localStorage.setItem('_token',resp.data['token'])
          window.localStorage.setItem('auth',resp.data['user'])
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  ,
  logout({ commit }) {//payload
      commit(`auth/SET_AUTH`, null, { root: true });//el objeto que envio del back
      commit(`auth/SET_TOKEN`, '', { root: true });//el objeto que envio del back
      window.localStorage.setItem('_token','')
      window.localStorage.setItem('auth','')
    }
  ,

};



