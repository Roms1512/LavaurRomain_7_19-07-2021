import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Message from '../views/Message.vue'
import Like from '../views/Like.vue'
import Publication from '../views/Publication.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publication',
    name: 'Publication',
    component: Publication
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
