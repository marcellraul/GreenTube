import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import postModule from "./post";

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    post: postModule,
  },
});
