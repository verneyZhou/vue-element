
// const CompressionPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const IS_PROD = process.env.NODE_ENV === 'production'
const cdnDomian = '/'

const utils = require('./utils')

module.exports = {
  publicPath: IS_PROD ? cdnDomian : '/', // 部署应用包时的基本URL  当用pages配置多页面时 慎用
  baseUrl: '/', // 同publicPath
  pages: utils.entries(), // 构建多页面
  assetsDir: 'static', // 放置生成的静态资源
  css: {
    loaderOptions: { // 向预处理器 Loader 传递选项

    }
  },
  configureWebpack: () => ({

  }),
  chainWebpack: config => {
    // #region svg-config
    const rule = config.module.rule('svg')
    rule.exclude.add(path.resolve('./src/assets/icons/svg'))
    const svgRule = config.module.rule('auto-svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .exclude
      .add(/node_modules/) // 正则匹配排除node_modules目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // #endregion svg-config

    if (IS_PROD) {

    }
  }

}
