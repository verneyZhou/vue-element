
// https://babeljs.io/docs/en/configuration
// https://www.jianshu.com/p/0ea6065cb39e
const IS_PROD = process.env.NODE_ENV === 'production'

/**
 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
 先 npm install babel-plugin-component -D 安装，再修改plugins如下：
 */
let plugins = [
  [
    'component',
    {
      'libraryName': 'element-ui', // 引入elementUI
      'styleLibraryName': 'theme-chalk' // 引入主题
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
