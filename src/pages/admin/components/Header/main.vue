<template>
    <div class="header">
        <!-- 菜单折叠icon -->
        <div class="padding-10">
            <cc-svg-icon
                class-name="menu-fold"
                icon-class="menu-fold"
                @click="handleMenuFold"
            ></cc-svg-icon>
        </div>
        <!-- 面包屑导航 -->
        <div class="padding-10">
            <!-- 1.无过渡效果  -->
            <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path">
                {{item.name}}
                </el-breadcrumb-item>
            </el-breadcrumb> -->
            <!-- 有过渡效果 -->
            <transition-group tag="el-breadcrumb" separator-class="el-icon-arrow-right" name="fade-move">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path">
                    {{item.name}}
                </el-breadcrumb-item>
            </transition-group>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Breadcrumb, BreadcrumbItem, Badge } from 'element-ui'
// 另一种用法：
Vue.use(Breadcrumb).use(BreadcrumbItem).use(Badge)

// 一种用法：
// Vue.component(Breadcrumb.name, Breadcrumb)
// Vue.component(BreadcrumbItem.name, BreadcrumbItem)
// Vue.component(Badge.name, Badge)
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['menuCollapse', 'breadcrumbItems'])
  },
  methods: {
    ...mapActions(['CHANGE_MENU_COLLAPSE']),
    handleMenuFold () {
      this.CHANGE_MENU_COLLAPSE(!this.menuCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
$headerHeight: 65px;
.header{
    height: $headerHeight;
    line-height: $headerHeight;
    padding: 0 35px;
    background: #fff;
    @include boxShadow;
    @include flex(row);
    justify-content: flex-start;
    align-items: center;
    .menu-fold {
        cursor: pointer;
        width: 16px;
        height: 16px;
    }
}
.padding-10{
    padding:0 10px;
}
/*自定义过渡效果样式*/
  .fade-move-enter-active,
  .fade-move-leave-active {
    transition: 0.3s all ease;
    // position: absolute
  }
  .fade-move-enter,
  .fade-move-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .fade-move-enter-to,
  .fade-move-leave {
    opacity: 1;
    transform: translateX(0);
  }
</style>
