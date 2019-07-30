import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 菜单样式
const menuStyle = {
  light: {
    backgroundColor: '#fff',
    textColor: 'rgba(0, 0, 0, .65)',
    activeTextColor: '#1890ff',
    logoBackgroundColor: '#fff',
    logoColor: '#1890ff'
  },
  dark: {
    backgroundColor: '#001529',
    textColor: '#fff',
    activeTextColor: '#116BBE',
    logoBackgroundColor: '#022445',
    logoColor: '#fff'
  }
}
export default new Vuex.Store({
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    menuCollapse: false, // 默认未折叠
    curMenuStyle: 'dark', // 当前样式
    breadcrumbItems: [], // 面包屑导航列表
    userInfo: null
  },
  getters: {
    getMenuStyle (state) {
      return menuStyle[state.curMenuStyle]
    }
  },
  mutations: {
    SETSTATUS (state, payload) { // 改变state
      state[payload.type] = payload.value
    }
  },
  actions: {
    // 改变左侧菜单栏折叠状态
    CHANGE_MENU_COLLAPSE: async ({ commit }, payload) => {
      return commit('SETSTATUS', { type: 'menuCollapse', value: payload })
    },
    // 获取面包屑导航列表
    GET_BREADCRUMB_ITEMS: async ({ commit }, payload) => {
      return commit('SETSTATUS', { type: 'breadcrumbItems', value: payload })
    }
  },
  modules: {

  }
})
