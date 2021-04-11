// Déclaration de toutes les routes de l'app
// Chaque composant est chargé au click mis à part home, qui est la page d'accueil
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    // Chemin de la page
    path: '/',
    name: 'Market',
    // Composant à charger. Ici il est importé directement dans le fichier, mais pour les autres pages, il est chargé lors de l'accès à la page.
    component: Home,
    meta: {
      enterClass: 'animate__animated animate__fadeInUp',
      leaveClass: 'animate__animated animate__fadeOutRight'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      enterClass: 'animate__animated animate__fadeInUp',
      leaveClass: 'animate__animated animate__fadeOutRight'
    }
  },
  {
    path: '/boursicoter',
    name: 'Bouricoter',
    component: () => import(/* webpackChunkName: "buy" */ '../views/Boursicoter.vue'),
    meta: {
      enterClass: 'animate__animated animate__fadeInUp',
      leaveClass: 'animate__animated animate__fadeOutRight'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
