import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/apis',
    name: 'Apis',
    component: () => import(/* webpackChunkName: "Apis" */ '../views/ApisPruebas')
  },
  {
    path: '/apisback',
    name: 'ApisBack',
    component: () => import(/* webpackChunkName: "ApisBack" */ '../views/APIsBack')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import(/* webpackChunkName: "Axios" */ '../views/Axios')
  },
  {
    path: '/reacciones',
    name: 'Reacciones',
    component: () => import(/* webpackChunkName: "Reacciones" */ '../views/Reacciones')
  },
 //-----------------Usuarios-------------
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue')
  },
  //---------------Publicacion------------
  {
    path: '/publicaciones',
    name: 'Publicaciones',
    component: () => import(/* webpackChunkName: "Publicaciones" */ '../views/Publicaciones.vue')
  },
  {
    path: '/watch',
    name: 'Publicaciones',
    component: () => import(/* webpackChunkName: "Publicaciones" */ '../views/Wacth.vue')
  },
  //------------Perfill----------------
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "Perfil" */ '../views/Perfil.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  },
  {
    path: '/perfil/tabs',
    name: 'TabPerfilInicio',
    component: () => import(/* webpackChunkName: "Inicio" */ '../components/TabsCom.vue')
  },
  {
    path: '/perfil/inicio',
    name: 'TabPerfilInicio',
    component: () => import(/* webpackChunkName: "Inicio" */ '../components/Inicio')
  },
  //-----------Videos------------
  {
    path: '/perfil/videos',
    name: 'TabPerfilVideos',
    component: () => import(/* webpackChunkName: "Videos" */ '../components/Videos')
  },
  {
    path: '/perfil/playlistvideo',
    name: 'TabPerfilPlayListVideo',
    component: () => import(/* webpackChunkName: "playlistVideos" */ '../components/PlayList')
  },
  {
    path: '/perfil/canales',//canales seguidos
    name: 'TabCanales',
    component: () => import(/* webpackChunkName: "TabCanales" */ '../components/Canales.vue')
  },
  {
    path: '/perfil/informacion',//informacion del canal
    name: 'TabInformacion',
    component: () => import(/* webpackChunkName: "TabInformacion" */ '../components/Informacion.vue')
  },
  {
    path: '/perfil/tablavideos',//informacion del canal
    name: 'TabInformacion',
    component: () => import(/* webpackChunkName: "TabInformacion" */ '../views/TablasVideos')
  },
  {
    path: '/perfil/vuetifymediaplayer',
    name: 'vuetifymediaplayer',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/vuetifymediaplayer.vue')
  },
  {
    path: '/perfil/vuecorevideoplayer',
    name: 'vuecorevideoplayer',
    component: () => import(/* webpackChunkName: "vuecorevideoplayer" */ '../views/vuecorevideoplayer.vue')
  },

  //---------------Usuarios------------
  {
    path: '/perfil/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "vuecorevideoplayer" */ '../views/TablasUsuario.vue')
  },
 ,
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
