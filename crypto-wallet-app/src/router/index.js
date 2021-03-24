import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "buy" */ '../views/Buy.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import(/* webpackChunkName: "sell" */ '../views/Sell.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
