'use strict'
const path = require('path')

// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require('glob')
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
var PAGE_PATH = path.resolve(__dirname, './src/pages')

// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件
exports.entries = function () {
  var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  var map = {}
  entryFiles.forEach((filePath, index) => {
    var filename = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'))
    map[filename] = {
      entry: filePath, // page入口
      template: filePath.replace(/\.js$/ig, '.html'), // 模板来源
      filename: `${filename}.html`, // 在 dist/index.html 的输出
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', `${filename}`]
    }
  })
  console.log('======pages', map)
  return map
}
