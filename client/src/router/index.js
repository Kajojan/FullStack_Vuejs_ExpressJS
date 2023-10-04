import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Songs from '../components/Songs.vue'
import CreateSongs from '../components/CreateSongs.vue'
import ViewSong from '../components/ViewSong.vue'
import Editsong from '../components/Editsong.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSongs
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/edit/:songId',
      name: 'edit',
      component: Editsong
    }
  ]
})

export default router
