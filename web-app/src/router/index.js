import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../components/Books.vue'
import AddEbook from '@/components/AddEbook.vue'
import Ebook from '../components/Ebook.vue'
import EditEbook from '@/components/EditEbook.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/ebook',
    name: 'ebookname',
    component: Ebook
  },
  {
    path: '/editebook/:data',
    name: 'editebookname',
    component: EditEbook
  },
  {
    path: '/about',
    name: 'AboutByName',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.id && to.params.hash) {
        next()
      } else {
        next({name: "home"})
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
