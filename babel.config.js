
// https://babeljs.io/docs/en/configuration
// https://www.jianshu.com/p/0ea6065cb39e
const IS_PROD = process.env.NODE_ENV === 'production'

let plugins = [
  [
    'component',
    {
      'libraryName': 'element-ui', // 引入elementUI
      'styleLibraryName': 'theme-chalk'
    }
  ]
]
if (IS_PROD) { // 线上环境
  plugins.unshift([ // 数组首位插入
    'transform-remove-console', // 删除打印
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: [ // 预设置
    '@vue/app'
  ],
  plugins
}
