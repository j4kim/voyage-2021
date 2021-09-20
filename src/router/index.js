import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const min = 9
const max = 28

const routes = [
  {
    path: '/:day?',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      let day = to.params.day
      if (isNaN(day) || day > max) {
        next(`/${min}`)
      } else if (day < min) {
        next(`/${max}`)
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
