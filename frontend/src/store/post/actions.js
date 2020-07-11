import PostService from "@/services/postService";

export default {
  create({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      await PostService.createPost(payload)
        .then((resp) => {
          commit(`post/ADD_ITEM`, resp.body["post"], { root: true });
          resolve(resp.body);
        })
        .catch((err) => {
          reject(err.body);
        });
    });
  },
};
