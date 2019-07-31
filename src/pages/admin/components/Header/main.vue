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
        <div class="padding-10" :style="{flex:1}">
            <!-- 1.无过渡效果  -->
            <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path">
                {{item.name}}
                </el-breadcrumb-item>
            </el-breadcrumb> -->

            <!-- 有过渡效果 -->
            <!-- 不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>。你也可以通过 tag 特性更换为其他元素。 -->
            <transition-group tag="el-breadcrumb" separator-class="el-icon-arrow-right" name="fade-move">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path">
                    {{item.name}}
                </el-breadcrumb-item>
            </transition-group>
        </div>
        <div class="header-right">
            <Language />
            <!-- 消息弹框 -->
            <div class="icon-items">
                  <!-- 弹出框 -->
                <el-popover
                    placement="bottom-end"
                    v-model="noticeVisible"
                    popper-class="header-popper"
                    >
                    <!-- 标签页  -->
                    <el-tabs :stretch="true" v-model="activeName">
                        <el-tab-pane label="通知" name="notice">
                        <notice-list></notice-list>
                        </el-tab-pane>
                        <el-tab-pane label="消息" name="message">
                        <notice-list></notice-list>
                        </el-tab-pane>
                        <el-tab-pane label="待办" name="todos">
                        <notice-list></notice-list>
                        </el-tab-pane>
                    </el-tabs>
                    <div
                        class="icon-item"
                        :class="{
                        opened: noticeVisible
                        }"
                        slot="reference"
                    >
                    <!-- Badge 标记 出现在按钮、图标旁的数字或状态标记。 -->
                        <el-badge :value="12">
                        <cc-svg-icon icon-class="notice"></cc-svg-icon>
                        </el-badge>
                    </div>
                </el-popover>
                <!-- 个人中心 dropdown 下拉菜单-->
                <el-dropdown @visible-change="dropdownVivibleHandle" @command="handleDropdownCommand">
                    <div class="icon-item" :class="{opened: dropdownVivible}">
                        <cc-svg-icon class-name="icon-avatar" icon-class="avatar"></cc-svg-icon>
                        <span>{{ userName }}</span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            v-for="item in dropdownList"
                            :key="item.name"
                            :divided="item.divided"
                            :command="item"
                        >
                        <cc-svg-icon :icon-class="item.icon"></cc-svg-icon>
                        {{ item.name }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Breadcrumb, BreadcrumbItem, Badge } from 'element-ui'
import Language from './Language'
import NoticeList from '../notice-list'
// 一种用法：
// Vue.component(Breadcrumb.name, Breadcrumb)
// Vue.component(BreadcrumbItem.name, BreadcrumbItem)
// Vue.component(Badge.name, Badge)

// 另一种用法：
Vue.use(Breadcrumb).use(BreadcrumbItem).use(Badge)
export default {
  components: {
    Language,
    NoticeList
  },
  data () {
    return {
      userName: '奈斯',
      noticeVisible: false,
      activeName: 'notice',
      dropdownVivible: false,
      dropdownList: [
        {
          name: '个人中心',
          icon: 'person'
        },
        {
          name: '个人设置',
          icon: 'setting'
        },
        {
          name: '退出登录',
          divided: true,
          icon: 'login-out'
        }
      ]
    }
  },
  computed: {
    ...mapState(['menuCollapse', 'breadcrumbItems'])
  },
  methods: {
    ...mapActions(['CHANGE_MENU_COLLAPSE']),
    handleMenuFold () {
      this.CHANGE_MENU_COLLAPSE(!this.menuCollapse)
    },
    dropdownVivibleHandle (visible) {
      this.dropdownVivible = visible
    },
    handleDropdownCommand (dropdownItem) {
      switch (dropdownItem.name) {
        case '退出登录':
          location.href = './login.html'
          break
        default:
          this.$message.info(`click on item ${dropdownItem.name}`)
          break
      }
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
    &-right{
        @include flex(row);
        align-items: center;
        /deep/ .el-dropdown-link {
            cursor: pointer;
            color: #409eff;
        }
        /deep/ .el-icon-arrow-down {
            font-size: 12px;
        }
        .icon-items {
            margin-right: 10px;
            height: 100%;
            @include flex(row);
            align-items: center;
            .icon-item {
                padding: 0 12px;
                @include flex(row);
                align-items: center;
                cursor: pointer;
                &.opened {
                background: $touchColor;
                }
                &:focus {
                outline: none;
                }
            }
        }
        .el-badge__content.is-fixed {
        top: 25px;
        }
        .icon-avatar {
            @include wh(30px, 30px);
            margin-right: 10px;
            vertical-align: middle !important;
        }
    }
}
.padding-10{
    padding:0 10px;
}
/*自定义过渡效果样式*/
//   .fade-move-enter-active,
//   .fade-move-leave-active {
//     transition: 3s all ease;
//     // position: absolute
//   }
//   .fade-move-enter,
//   .fade-move-leave-to {
//     opacity: 0;
//     transform: translateX(-100px);
//   }
//   .fade-move-enter-to,
//   .fade-move-leave {
//     opacity: 1;
//     transform: translateX(0);
//   }
</style>
