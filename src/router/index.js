/**
 * Created by Administrator on 2019/5/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Identify from '../pages/Identify/Identify.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Profile from '../pages/Profile/Profile.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/msite',
      component:MSite
    },
    {
      path: '/classify',
      component:Classify
    },
    {
      path: '/identify',
      component:Identify
    },
    {
      path: '/shoppingCart',
      component:ShoppingCart
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
