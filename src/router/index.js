import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Second from '@/components/Second'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/f',
      name: 'First',
      component: First
    },
    {
      path: '/s',
      name: 'Second',
      component: Second
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
