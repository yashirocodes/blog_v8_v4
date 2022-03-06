import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path:'/about',
    name:'AboutMe',
    component: () => import('../views/AboutMe.vue')
  },
  {
    path:'/contact',
    name:'ContactMe',
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
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
