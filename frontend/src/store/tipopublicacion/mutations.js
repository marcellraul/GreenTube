export default {
  ADD_ITEM(state, item) {
    state.tiposp.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.tiposp.findIndex((index) => index.id == item.id);
    Object.assign(state.tiposp[index], item);
  },

  SET_ITEMS(state, items) {
    state.tiposp = items;
  },

  SET_ITEM(state, item) {
    state.tipop = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.tiposp.findIndex((index) => index.id == id);
    state.tiposp.splice(index, 1);
  },
};
