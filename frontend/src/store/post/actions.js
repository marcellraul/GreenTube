import PostService from "@/services/postService";

export default {
  create({ commit }, publicacion) {//payload
    return new Promise(async (resolve, reject) => {
      await PostService.createPost(publicacion)
        .then((resp) => {
          console.log(resp)
          commit(`post/ADD_ITEM`, resp.data["pu"], { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  ,
  gets({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await PostService.getPosts()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`post/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  get({ commit }, post) {//payload
    return new Promise(async (resolve, reject) => {
      await PostService.getPostbyId(post)
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`post/SET_ITEM`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  getPC({ commit }) {//payload
    return new Promise(async (resolve, reject) => {
      await PostService.getPostCanal()
        .then((resp) => {
          console.log(resp)//nombre del modulo
          commit(`post/SET_ITEMS`, resp.data, { root: true });//el objeto que envio del back
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },



  
};
