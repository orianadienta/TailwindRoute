import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import Contact from '../components/ContactPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
