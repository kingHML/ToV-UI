import HouseList from './src/house-list.vue'

HouseList.install = function (Vue) {
  Vue.component(HouseList.name, HouseList)
}
export default HouseList
