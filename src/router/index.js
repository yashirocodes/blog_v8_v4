import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path:"/home",
    redirect:"/"
  },
  {
    path:"/inicio",
    redirect:"/"
  },
  {
    path:"/portada",
    redirect:"/"
  },
  {
    path:'/about',
    name:'AboutMe',
    alias:['/sobremi','/acerca'],
    component: () => import('../views/AboutMe.vue')
  },
  {
    path:'/contact',
    name:'ContactMe',
    alias:['/contacto', '/contactame'],
    component:() => import('../views/ContactMe.vue')
  },
  {
    path:'/blog',
    name:'BlogView',
    component: () => import('../views/BlogView.vue'),
    children:[{
      path:':1',
      name:'MyArticle',
      component: () => import('../views/blogs/MyArticle.vue')
    }]
  },
  {
    path:'/:catchAll(.*)',
    name:'ErrorNotFound',
    component:() => import('../views/ErrorNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
