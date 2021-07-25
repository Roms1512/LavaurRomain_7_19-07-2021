import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Message from '../views/Message.vue'
import Like from '../views/Like.vue'
import Post from '../views/Post.vue'
import Setting from '../views/Setting.vue'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'
import ModifyPassword from '../views/ModifyPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/signup',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/modifyPassword',
    name: 'ModifyPassword',
    component: ModifyPassword
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
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
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
