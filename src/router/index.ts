import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/ressources',
      name: 'ressources',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Resources.vue')
    },
    {      
      path: '/materiel',
      name: 'materiel',
      component: Accueil
    },
    {
      path: '/blog',
      name: 'blog',
      component: Accueil
    }
  ]
})

export default router
