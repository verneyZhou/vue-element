
export default [
  {
    path: '/rules',
    redirect: '/rules/regular'
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "rules" */ '@/pages/admin/views/rules/index.vue'),
    children: [ // 嵌套路由
      {
        path: 'regular',
        name: 'rulesRegular',
        component: () => import(/* webpackChunkName: "rulesRegular" */ '@/pages/admin/views/rules/regular/index.vue'),
        meta: {
          title: 'rulesRegular'
        }
      },
      {
        path: 'more',
        name: 'rulesMore',
        component: () => import(/* webpackChunkName: "rulesMore" */ '@/pages/admin/views/rules/more/index.vue'),
        meta: {
          title: 'rulesRegular'
        }
      }
    ]
  }
]
