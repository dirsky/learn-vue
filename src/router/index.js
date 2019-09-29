import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Second from '@/components/Second'
import Form from '@/components/Form'
import goods from '@/views/goods/goods'
import ratings from '@/views/ratings/ratings'
import seller from '@/views/seller/seller'
import counter from '@/components/Counter'
import counterv from '@/components/CounterWithVuex'
import counterv2 from '@/components/CounterWithVuex2'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/c',
      name: 'counter',
      component: counter
    },
    {
      path: '/cv',
      name: 'counterv',
      component: counterv
    },
    {
      path: '/cv2',
      name: 'counterv2',
      component: counterv2
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
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
