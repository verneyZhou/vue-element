
/*
  使用node命令行生成组件
*/

const chalk = require('chalk') // 这个插件能让我们的控制台输出语句有各种颜色区分
const path = require('path')
const fs = require('fs') // // fs模块用于对系统文件及目录进行读写操作
/*
  path.resolve([...paths]) 将路径或路径片段的序列解析为绝对路径,
  如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径,
  传入路径从右至左解析，遇到第一个绝对路径是完成解析
  当传入的参数没有/时，将被传入解析到当前根目录; ../ 为向前跳了一个目录
  __dirname代表的是当前文件的绝对路径
*/
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')) // /Users/zhou/Test/learn2019/vue-element/wwwroot/static_files/gif/image.gif
console.log(path.resolve('wwwroot', 'static_files/png/', './gif/image.gif')) // /Users/zhou/Test/learn2019/vue-element/wwwroot/static_files/png/gif/image.gif
console.log(path.resolve('/foo', '/bar', 'baz')) // /bar/baz
console.log(__dirname) // /Users/zhou/Test/learn2019/vue-element/scripts
console.log(path.resolve(__dirname, './src')) // /Users/zhou/Test/learn2019/vue-element/scripts/src
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const { vueTemplate, entryTemplate } = require('./template')
log('请输入要生成的组件名称、如需生成全局组件，请加 global/ 前缀')

let componentName = ''
/*
  process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。
  作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。
  在Node.js的process对象中，使用process.stdin输入数据；stdin为一个可用于写入标准输入流的对象
*/
process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()
  /**
   * 组件目录路径
   */
  const componentDirectory = resolve('../src/components', inputName)
  /**
   * vue组件路径
   */
  const componentVueName = resolve(componentDirectory, 'main.vue')
  /**
   * 入口文件路径
   */
  const entryComponentName = resolve(componentDirectory, 'index.js')

  const hasComponentDirectory = fs.existsSync(componentDirectory) // 判断是否已存在
  if (hasComponentDirectory) {
    errorLog(`${inputName}组件目录已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`)
    await dotExistDirectoryCreate(componentDirectory) // 生成文件目录...
    // fs.mkdirSync(componentDirectory);
  }
  try {
    if (inputName.includes('/')) { // 格式处理
      const inputArr = inputName.split('/')
      componentName = inputArr[inputArr.length - 1]
    } else {
      componentName = inputName
    }
    log(`正在生成 vue 文件 ${componentVueName}`)
    await generateFile(componentVueName, vueTemplate(componentName)) // 生成文件...
    log(`正在生成 entry 文件 ${entryComponentName}`)
    await generateFile(entryComponentName, entryTemplate)
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end') // 触发end事件
})
process.stdin.on('end', () => {
  log('exit')
  process.exit() // 终止node进程
})

// 创建文件夹
function dotExistDirectoryCreate (directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

// 递归创建目录
function mkdirs (directory, callback) {
  var exists = fs.existsSync(directory) // 判断是否已存在该目录
  console.log('====exists', exists)
  if (exists) {
    callback()
  } else { // 否则获取改文件目录，即上一级路径，再次调用mkdirs exists为true；调用回调函数
    console.log('========path.dirname(directory)', path.dirname(directory))
    mkdirs(path.dirname(directory), function () { //
      fs.mkdirSync(directory) // 生成文件夹
      callback()
    })
  }
}

// 生成文件
const generateFile = (path, data) => {
  if (fs.existsSync(path)) { // 判断是否存在
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    // fs.writeFile(filename,data,[options],callback) 写入文件：文件名、内容、编码、回调
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
