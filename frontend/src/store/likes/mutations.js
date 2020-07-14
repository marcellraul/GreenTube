export default {
  ADD_ITEM(state, item) {
    state.likes.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.likes.findIndex((index) => index.id == item.id);
    Object.assign(state.likes[index], item);
  },

  SET_ITEMS(state, items) {
    state.likes = items;
  },

  SET_ITEM(state, item) {
    state.like = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.likes.findIndex((index) => index.id == id);
    state.likes.splice(index, 1);
  },
};
