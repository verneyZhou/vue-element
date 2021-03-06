
export default [
  {
    path: '/desc',
    redirect: '/desc/parta' // 重定向
  },
  {
    path: '/desc/parta',
    name: 'descParta',
    component: () => import(/* webpackChunkName: "descParta" */ '@/pages/admin/views/desc/partA/index.vue'), // 按需加载
    meta: {
      title: 'parta'
    }
  },
  {
    path: '/desc/partb',
    name: 'descPartb',
    component: () => import(/* webpackChunkName: "descPartb" */ '@/pages/admin/views/desc/partB/index.vue'),
    meta: {
      title: 'partb'
    }
  },
  {
    path: '/desc/partc',
    name: 'descPartc',
    component: () => import(/* webpackChunkName: "descPartc" */ '@/pages/admin/views/desc/partC/index.vue'),
    meta: {
      title: 'partc'
    }
  },
  {
    path: '/desc/partd',
    name: 'descPartd',
    component: () => import(/* webpackChunkName: "descPartd" */ '@/pages/admin/views/desc/partD/index.vue'),
    meta: {
      title: 'partd'
    }
  },
  {
    path: '/desc/parte',
    name: 'descParte',
    component: () => import(/* webpackChunkName: "descParte" */ '@/pages/admin/views/desc/partE/index.vue'),
    meta: {
      title: 'partE'
    }
  },
  {
    path: '/desc/partf',
    name: 'descPartf',
    component: () => import(/* webpackChunkName: "descPartf" */ '@/pages/admin/views/desc/partF/index.vue'),
    meta: {
      title: 'partf'
    }
  },
  {
    path: '/desc/partg',
    name: 'descPartg',
    component: () => import(/* webpackChunkName: "descPartg" */ '@/pages/admin/views/desc/partG/index.vue'),
    meta: {
      title: 'partg'
    }
  }

]
