import Test from './src/test.vue'

Test.install = function (Vue) {
  Vue.component(HouseList.name, HouseList)
}
export default Test
