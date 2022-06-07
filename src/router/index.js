import Vue from 'vue'
import VueRouter from 'vue-router'
import BandPi from '../views/BandPi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BandPi',
    component: BandPi
  },
  {
    path: '/songview',
    name: 'SongView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "songview" */ '../views/SongView.vue')
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AdminView" */ '../views/AdminView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
