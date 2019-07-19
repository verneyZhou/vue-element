import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [ // 此处route采用直接添加的传统方法~
    {
      path: '/',
      redirect: '/info'
    },
    {
      path: '/info',
      name: 'elseInfo',
      component: () => import(/* webpackChunkName: "elseInfo" */ '@/pages/else/views/info/index.vue')
    },
    {
      path: '/well',
      name: 'elseWell',
      component: () => import(/* webpackChunkName: "elseWell" */ '@/pages/else/views/well/index.vue')
    }
  ]
})
