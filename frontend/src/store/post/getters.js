export default {
  getPosts: (state, getters, rootState) => () => {
    return rootState["post"]["posts"]
      .slice()
      .sort((firstItem, secondItem) => firstItem.id - secondItem.id);
  },

  getPost: (state, getters, rootState) => () => {
    return rootState["post"]["post"];
  },
};
