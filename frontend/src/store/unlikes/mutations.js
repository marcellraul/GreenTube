export default {
  ADD_ITEM(state, item) {
    state.unlikes.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.unlikes.findIndex((index) => index.id == item.id);
    Object.assign(state.unlikes[index], item);
  },

  SET_ITEMS(state, items) {
    state.unlikes = items;
  },

  SET_ITEM(state, item) {
    state.unlike = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.unlikes.findIndex((index) => index.id == id);
    state.unlikes.splice(index, 1);
  },
};
