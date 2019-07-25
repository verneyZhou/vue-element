// import store, { types } from '../../store'
// console.log(store)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const svgs = []
// 自动加载同级svg文件夹下以.svg结尾的文件
const svgContext = require.context('./svg', true, /\.svg$/)
/** 不太懂这一步的作用？？？注释掉则icon加载不出来 */
requireAll(svgContext)
svgContext.keys().map(v => {
  // console.log('=====svg', v)
  const svgNames = v.split('/') // 获取svg名称
  const reg = /([\w1-9A-Za-z-_]+)\.svg/

  const result = reg.exec(svgNames[svgNames.length - 1]) // 检索是否匹配  返回数组
  // console.log('=====svg result', result)
  if (result) {
    const svgName = result[1]
    svgs.push(svgName)
  }
  // console.log('=======svgs', svgs)
  // store.dispatch(types.SVG_ICON_NAME, svgs)
})
