import Vue from 'vue'
import App from './App.vue'

import '@/components' // 引入全局组件
import '@/lib/element-ui' // 引入常用组件
import '@/assets/icons' // 引入所有全局注册svg-icon

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
