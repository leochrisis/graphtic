import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Bresenham from '@/components/bresenham'
import Circle from '@/components/circle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bresenham',
      name: 'Bresenham',
      component: Bresenham
    },
    {
      path: '/circle',
      name: 'Point Circle',
      component: Circle
    }
  ]
})
