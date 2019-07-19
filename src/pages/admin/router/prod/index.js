
export default [
  {
    path: '/prod',
    name: 'prod',
    component: () => import(/* webpackChunkName: "prod" */ '@/pages/admin/views/prod/index.vue')
  }
]
