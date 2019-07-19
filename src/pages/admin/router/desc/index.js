
export default [
  {
    path: '/desc',
    redirect: '/desc/parta' // 重定向
  },
  {
    path: '/desc/parta',
    name: 'descParta',
    component: () => import(/* webpackChunkName: "descParta" */ '@/pages/admin/views/desc/partA/index.vue') // 按需加载
  },
  {
    path: '/desc/partb',
    name: 'descPartb',
    component: () => import(/* webpackChunkName: "descPartb" */ '@/pages/admin/views/desc/partB/index.vue')
  },
  {
    path: '/desc/partc',
    name: 'descPartc',
    component: () => import(/* webpackChunkName: "descPartc" */ '@/pages/admin/views/desc/partC/index.vue')
  },
  {
    path: '/desc/partd',
    name: 'descPartd',
    component: () => import(/* webpackChunkName: "descPartd" */ '@/pages/admin/views/desc/partD/index.vue')
  }

]
