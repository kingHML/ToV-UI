import HouseList from './house-list/index'

const components = [
  HouseList
]

const install = function (Vue) {
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  HouseList
}
