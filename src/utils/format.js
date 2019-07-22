const dec = window.decodeURIComponent

// 补0
export function addPreZero (num, n) {
  return (Array(n).join(0) + num).slice(-n)
}

// formData
export const createFormData = data => {
  const formData = new FormData()
  for (let i in data) {
    formData.append(i, data[i])
  }
  return formData
}

// 时间格式化
export function timeToDate (date, format) {
  let d = date
  if (isNaN(d)) {
    return ''
  }
  if (!(d instanceof Date)) {
    d = new Date(date)
  }
  var _date = {
    'M+': d.getMonth() + 1,
    'd+': d.getDate(),
    'h+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    'q+': Math.floor((d.getMonth() + 3) / 3),
    'S+': d.getMilliseconds()
  }
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in _date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1
        ? _date[k]
        : ('00' + _date[k]).substr(('' + _date[k]).length))
    }
  }
  return format
}

// '?a=1&b=2'
export function searchQuery (search) {
  const queryStr = search.split('?').pop()
  if (!queryStr) return {}
  return queryStr.split('&').reduce((prev, cur) => {
    const [key, value] = cur.split('=')
    return {
      ...prev,
      [key]: dec(value)
    }
  }, {})
}

//
export function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var regRewrite = new RegExp('(^|/)' + name + '/([^/]*)(/|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  var q = window.location.pathname.substr(1).match(regRewrite)
  if (r != null) {
    return decodeURIComponent(r[2])
  } else if (q != null) {
    return decodeURIComponent(q[2])
  } else {
    return null
  }
}

// 拷贝
export function merge (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i]
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}
