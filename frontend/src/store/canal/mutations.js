export default {
  ADD_ITEM(state, item) {
    state.canals.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.canals.findIndex((index) => index.id == item.id);
    Object.assign(state.canals[index], item);
  },

  SET_ITEMS(state, items) {
    state.canals = items;
  },

  SET_ITEM(state, item) {
    state.canal = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.canals.findIndex((index) => index.id == id);
    state.canals.splice(index, 1);
  },
};
