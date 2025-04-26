import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/About.vue'),
  }  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
