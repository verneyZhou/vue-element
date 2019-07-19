import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// import '@/components'

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。 https://cn.vuejs.org/v2/api/#productionTip

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
