<template>
  <div>
    houseList5555
  </div>
</template>
<script>
  import $Api from './houseListApi'
  export default {
    name: 'house-list',
    created () {
      console.log('houselest components')
      this.getList()
    },
    methods: {
      getList () {
        let params = {
          cityId: 605,
          type: 2
        }
        $Api.getHouseList(params).then(res => {
          console.log('res', res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
