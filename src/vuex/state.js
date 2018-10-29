let defaultcity = '深圳'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (error) {}

export default {
// city默认值优先是localStorage.city，如果localStorage.city不存在才使用深圳
  city: defaultcity
}
