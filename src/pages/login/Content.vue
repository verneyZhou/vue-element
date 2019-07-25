<template>
    <div class="login-content">
        <!-- 引入卡片组件 -->
        <el-card shadow="hover" :body-style="{ padding: '10px' }">
            <div slot="header" >欢迎登录!</div>
            <!-- 引入表单组件 -->
            <!-- 具体表单使用方法参考官网 https://element.eleme.cn/#/zh-CN/component/form -->
            <el-form ref="loginForm" :model="loginData" :rules="rules" @keyup.enter="doLogin">
                <!-- 用户名 -->
                <el-form-item prop="name">
                    <el-input autofocus v-model="loginData.name" placeholder="请输入用户名">
                        <cc-svg-icon style="padding-left: 5px;" slot="prefix" icon-class="user"></cc-svg-icon>
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginData.password" type="password" placeholder="请输入密码">
                        <cc-svg-icon style="padding-left: 5px;" slot="prefix" icon-class="lock"></cc-svg-icon>
                    </el-input>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item class="clearfix">
                    <el-button type="primary" @click="doLogin" :loading="loading">{{loading ? '正在登陆中...' : '登录'}}</el-button>
                    <el-button @click="resetForm('loginForm')">清空</el-button>
                </el-form-item>
                <p style="font-size: 12px;text-align: center;color: #999;">输入任意用户名密码登录</p>
            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      loginData: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {

  },
  methods: {
    doLogin () {
      this.loading = true
      this.$refs.loginForm.validate(async validate => {
        console.log('=====validate', validate)
        this.loading = false
        if (validate) { // 有效
          this.handleLogin({
            username: this.form.name,
            password: this.form.password,
            loginDateTime: Date.now()
          }).then(res => {
            this.loading = false
            this.$router.push('/dashboard')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
    .login-content{
        width:400px;
        position: absolute;
        top:50%;
        transform: translateY(-60%);
        right:200px;
    }
    .clearfix:before,.clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
</style>
