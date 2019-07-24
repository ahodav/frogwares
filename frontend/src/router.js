import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/description/:id/:alias/:status',
      name: 'description',
      component: function () { 
        return import('./views/Description.vue')
      }
    },
    {
      path: '/nodata',
      name: 'nodata',
      component: function () { 
        return import('./views/NoData.vue')
      }
    }
  ]
})
