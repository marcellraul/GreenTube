export default {
  ADD_ITEM(state, item) {
    state.comentarios.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.comentarios.findIndex((index) => index.id == item.id);
    Object.assign(state.comentarios[index], item);
  },

  SET_ITEMS(state, items) {
    state.comentarios = items;
  },

  SET_ITEM(state, item) {
    state.comentario = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.comentarios.findIndex((index) => index.id == id);
    state.comentarios.splice(index, 1);
  },
};
