export default {
  ADD_ITEM(state, item) {
    state.suscriptores.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.suscriptores.findIndex((index) => index.id == item.id);
    Object.assign(state.suscriptores[index], item);
  },

  SET_ITEMS(state, items) {
    state.suscriptores = items;
  },

  SET_ITEM(state, item) {
    state.suscriptor = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.suscriptores.findIndex((index) => index.id == id);
    state.suscriptores.splice(index, 1);
  },
};
