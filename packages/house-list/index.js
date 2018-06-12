import HouseList from './src/house-list.vue'

HouseList.install = function (Vue, params) {
  console.log(params)
  Vue.component(HouseList.name, HouseList)
}
export default HouseList
