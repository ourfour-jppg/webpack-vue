import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/components/details/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
