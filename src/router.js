import Follow from './views/Follow.vue'
import Home from './views/Home.vue'
import Listen from './views/Listen.vue'
import Router from 'vue-router'
import Tour from './views/Tour.vue'
import Vue from 'vue'
import Watch from './views/Watch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tour',
      name: 'Tour',
      component: Tour
    },
    {
      path: '/listen',
      name: 'Listen',
      component: Listen
    },
    {
      path: '/follow',
      name: 'Follow',
      component: Follow
    },
    {
        path: '/watch',
        name: 'Watch',
        component: Watch
      }
  ]
})
