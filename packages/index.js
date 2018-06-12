import HouseList from './house-list/index'
import Test from './test/index'

const components = [
  HouseList,
  Test
]

const install = function (Vue, params) {
  console.log('params', params)
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
export {
  HouseList,
  Test
}
