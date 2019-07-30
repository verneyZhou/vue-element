// import store, { types } from '../../store'
// console.log(store)
// const svgs = []
// 自动加载同级svg文件夹下以.svg结尾的文件
const svgContext = require.context('./svg', true, /\.svg$/)
/**
 * require.context会返回一个函数，并且该函数有keys()，id， resolve() 属性。
 * keys()方法返回的该模块可以处理的所有可能请求的模块的数组，简单一点就是满足该参数的模块；
 * resolve()返回的是请求的module的id;
 * id是该context module的id;
 */
// 引入所有模块,由于svgContext返回了一个函数，该函数接收req作为参数，
// 在这里其实我们就是把svgContext.keys()中的每一个module传入了svgContext的返回函数中了
/** 不太懂？？？？ */
svgContext.keys().map(svgContext)

// svgContext.keys().map(v => {
//   // console.log('=====svg', v)
//   const svgNames = v.split('/') // 获取svg名称
//   const reg = /([\w1-9A-Za-z-_]+)\.svg/

//   const result = reg.exec(svgNames[svgNames.length - 1]) // 检索是否匹配  返回数组
//   // console.log('=====svg result', result)
//   if (result) {
//     const svgName = result[1]
//     svgs.push(svgName)
//   }
//   // console.log('=======svgs', svgs)
//   // store.dispatch(types.SVG_ICON_NAME, svgs)
// })
