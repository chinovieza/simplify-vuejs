import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../components/Books.vue'
import AddEbook from '@/components/AddEbook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'booksname',
    component: Books
  },
  {
    path: '/addebook',
    name: 'addebookname',
    component: AddEbook
  },
  {
    path: '/about',
    name: 'AboutByName',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
