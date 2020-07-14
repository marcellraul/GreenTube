import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import postModule from "./post";
import categoriaModule from './categoria';
import tipopublicacionModule from './tipopublicacion';
import comentariosModule from './comentarios';
import canalModule from './canal/';
import suscriptoresModule from './suscriptores';
import likesModule from './likes';
import unlikesModule from './unlikes';
import usersModule from './users';
import authModule from './auth';

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    post: postModule,
    categoria: categoriaModule,
    tipop: tipopublicacionModule,
    comentarios : comentariosModule,
    canal: canalModule,
    suscriptores: suscriptoresModule,
    likes: likesModule,
    unlikes: unlikesModule,
    users: usersModule,
    auth: authModule,
    
    
  },
});
