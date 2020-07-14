export default {
  ADD_ITEM(state, item) {
    state.users.push(item);
  },

  UPDATE_ITEM(state, item) {
    let index = state.users.findIndex((index) => index.id == item.id);
    Object.assign(state.users[index], item);
  },

  SET_ITEMS(state, items) {
    state.users = items;
  },

  SET_ITEM(state, item) {
    state.user = item;
  },

  DELETE_ITEM(state, id) {
    let index = state.users.findIndex((index) => index.id == id);
    state.users.splice(index, 1);
  },
};
