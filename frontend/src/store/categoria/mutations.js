export default {
  ADD_ITEM(state, item) {
    state.categorias.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.categorias.findIndex((index) => index.id == item.id);
    Object.assign(state.categorias[index], item);
  },

  SET_ITEMS(state, items) {
    state.categorias = items;
  },

  SET_ITEM(state, item) {
    state.categoria = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.categorias.findIndex((index) => index.id == id);
    state.categorias.splice(index, 1);
  },
};
