import Vue from 'vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import { Menu, MenuItem, Submenu } from 'element-ui'
import menuConfig from './config'
import './menu.scss'
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
export default {
  name: 'leftMenu',
  data () {
    return {
      menuConfig,
      defaultActive: ''
    }
  },
  computed: {
    ...mapState(['menuCollapse', 'curMenuStyle']),
    ...mapGetters(['getMenuStyle'])
  },
  watch: {
    $route () {
      console.log('====route', this.$route)
      this.defaultActive = this.$route.path
      this.changeBreadcrumb(this.$route)
    }
  },
  created () {
    console.log('====route', this.$route)
  },
  mounted () {
    console.log('====route', this.$route)
  },
  methods: {
    ...mapActions(['GET_BREADCRUMB_ITEMS']),
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 改变面包屑列表
    changeBreadcrumb (route) {
      let oneLevelMenu = {}
      let twoLevelMenu = {}
      menuConfig.forEach(menu => {
        if (menu.children) {
          const item = menu.children.find(item => item.path === route.path)
          if (item) {
            oneLevelMenu = menu
            twoLevelMenu = item
            return false
          }
        } else {
          if (menu.path === route.path) {
            oneLevelMenu = menu
          }
        }
      })
      console.log('===[oneLevelMenu, twoLevelMenu]', [oneLevelMenu, twoLevelMenu])
      this.GET_BREADCRUMB_ITEMS([oneLevelMenu, twoLevelMenu])
    },
    renderMenu (menus) {
      return menus.map(menu => {
        if (menu.children) {
          const icon = menu.icon ? <cc-svg-icon icon-class={menu.icon} /> : ''
          return (
            <el-submenu index={menu.path}>
              <template slot="title">
                {icon}
                <span>{menu.name}</span>
              </template>
              {this.renderMenu(menu.children)}
            </el-submenu>
          )
        } else {
          const icon = menu.icon ? <cc-svg-icon icon-class={menu.icon} /> : ''
          return (
            <el-menu-item index={menu.path}>
              {icon}
              <span slot="title">{menu.name}</span>
            </el-menu-item>
          )
        }
      })
    }

  },
  render () {
    return (
      <div
        class="sider"
        style={{
          backgroundColor: this.getMenuStyle.backgroundColor
        }}>
        <div
          class="sider-logo"
          style={{
            color: this.getMenuStyle.logoColor,
            backgroundColor: this.getMenuStyle.logoBackgroundColor
          }}>
          Admin
        </div>
        <el-menu
          default-active={this.defaultActive}
          class={[
            'el-menu-vertical-demo',
            this.curMenuStyle === 'light' ? 'menu-light' : 'menu-dark'
          ]}
          background-color={this.getMenuStyle.backgroundColor}
          text-color={this.getMenuStyle.textColor}
          active-text-color={this.getMenuStyle.activeTextColor}
          router={true}
          collapse={this.menuCollapse}
          open={this.handleOpen}
          close={this.handleClose}>
          {this.renderMenu(this.menuConfig)}
        </el-menu>

      </div>
    )
  }
}
