import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/components' // 引入全局组件
import '@/assets/icons' // 引入所有全局注册svg-icon

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。 https://cn.vuejs.org/v2/api/#productionTip

// 全局前置守卫 to:下一路由  from:上一个路由  next：钩子
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 全局后置守卫
router.afterEach((to, from) => {

})
// 新写法
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// 旧写法
// /* eslint-disable no-new */ // 防止eslint语法检验
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
