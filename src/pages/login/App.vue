<template>
    <div id="app" ref="login" class="vm-login">
        <div>

        </div>
    </div>
</template>
<script>
import { login } from '@/api/login'
export default {
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
<style lang="scss" scoped>
@import '~@/assets/css/index.scss';
    .vm-login{
        height:100vh;
        background: url('https://img.ccode.live/image/jpg/login.jpglogin-bg.29b543c1.jpg') no-repeat center center;
        background-size: cover;
    }
</style>
