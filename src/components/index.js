
// 扫描全局对象并自动注册
import Vue from 'vue'

// 自动加载global 目录下的.vue结尾的文件
const componentsContext = require.context('./global', false, /\.vue$/)
console.log('=====componentsContext', componentsContext.keys())
componentsContext.keys().forEach(v => {
  const componentConfig = componentsContext(v)
  // 兼容import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig
  console.log('ctrl', ctrl)
  Vue.component(ctrl.name, ctrl)
})
