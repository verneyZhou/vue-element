<template>
    <menu-drawer @close="drawerClose" :visible="drawerVisible" width="300px">
        <div class="drawer-setting-content">
        <div class="mb20">
          <h3 class="drawer-setting-title">整体风格设置</h3>
          <div class="drawer-setting-block">
            <div class="drawer-setting-item" @click="changeStyle('dark')">
              <cc-svg-icon
                class-name="dark-color"
                icon-class="dark-color"
                size="48px"
              ></cc-svg-icon>
              <i
                v-if="curMenuStyle === 'dark'"
                class="style-selected el-icon-check"
                style="color: #1890ff"
              ></i>
            </div>
            <div class="drawer-setting-item" @click="changeStyle('light')">
              <cc-svg-icon
                class-name="light-color"
                icon-class="light-color"
                size="48px"
              ></cc-svg-icon>
              <i
                v-if="curMenuStyle === 'light'"
                class="style-selected el-icon-check"
                style="color: #1890ff"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer-handle" slot="handle">
        <div @click="toggleDrawer">
          <i
            :class="{
              'el-icon-s-tools': !drawerVisible,
              'el-icon-close': drawerVisible
            }"
          ></i>
        </div>
      </div>
    </menu-drawer>
</template>
<script>
import MenuDrawer from './MenuDrawer'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'menu-set',
  components: {
    MenuDrawer
  },
  data () {
    return {
      drawerVisible: false
    }
  },
  computed: {
    ...mapState(['curMenuStyle'])
  },
  methods: {
    ...mapActions(['CHANGE_MENU_STYLE']),
    toggleDrawer () {
      this.drawerVisible = !this.drawerVisible
    },
    drawerClose () {
      this.drawerVisible = false
    },
    changeStyle (style) {
      this.CHANGE_MENU_STYLE(style)
    }
  }
}
</script>
<style lang="scss" scoped>
.drawer-handle {
  position: absolute;
  right: 300px;
  top: 240px;
  z-index: 0;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: var(--theme-color);
  color: #fff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
  > div {
    @include center(column);
    width: 100%;
    height: 100%;
  }
}
.drawer-setting {
  &-content {
    .dark-color,
    .light-color {
      width: 48px;
      height: 45px;
      cursor: pointer;
    }
  }
  &-block {
    @include flex(row);
  }
  &-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
  }
  &-item {
    margin-right: 25px;
    position: relative;
    .style-selected {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
