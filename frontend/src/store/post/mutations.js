export default {
  ADD_ITEM(state, item) {
    state.posts.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.posts.findIndex((index) => index.id == item.id);
    Object.assign(state.posts[index], item);
  },

  SET_ITEMS(state, items) {
    state.posts = items;
  },

  SET_ITEM(state, item) {
    state.post = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.posts.findIndex((index) => index.id == id);
    state.posts.splice(index, 1);
  },
};
