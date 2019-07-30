
export default [
  {
    name: '组件',
    path: '/desc',
    icon: 'component',
    children: [
      {
        name: '数字渐变',
        path: '/desc/parta',
        icon: 'rise'
      },
      {
        name: '树状表格',
        path: '/desc/partb',
        icon: 'tree'
      },
      {
        name: '可拖拽列表',
        path: '/desc/partc',
        icon: 'drag'
      },
      {
        name: 'markdown编辑器',
        path: '/desc/partd',
        icon: 'markdown'
      },
      {
        name: '富文本编辑器',
        path: '/desc/parte',
        icon: 'rich-text'
      },
      {
        name: '抽屉',
        path: '/desc/partf',
        icon: 'drawer'
      },
      {
        name: 'svg图标',
        path: '/desc/partg',
        icon: 'svg'
      }
    ]
  },
  {
    name: '简介',
    path: '/prod',
    icon: 'dashboard'
  },
  {
    name: '其他',
    path: '/rules',
    icon: 'optimization',
    children: [
      {
        name: '图片自动压缩',
        path: '/rules/more',
        icon: 'compression'
      },
      {
        name: '雪碧图',
        path: '/rules/regular',
        icon: 'sprites'
      }
    ]
  }
]
