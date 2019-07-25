<template>
    <div id="app" ref="login" class="vm-login">
        <Content />
    </div>
</template>
<script>
import { login } from '@/api/login'
import Content from './Content.vue'
export default {
  components: {
    Content
  },
  data () {
    return {

    }
  },
  created () {
    login({ name: '奈斯' }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<!--
scoped会给当前组件节点添加data-v-***这种唯一属性，style样式只能作用于当前节点
所以在类似于App.vue这种设置公共样式的根容器，通常不加scoped
-->
<style lang="scss">
@import '~@/assets/css/index.scss';
    .vm-login{
        height:100vh;
        background: url('https://img.ccode.live/image/jpg/login.jpglogin-bg.29b543c1.jpg') no-repeat center center;
        background-size: cover;
    }
</style>
