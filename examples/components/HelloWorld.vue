<template>
  <div class="hello">
    <house-list></house-list>
  </div>
</template>

<script>
  // import { HouseList } from '../../packages/index'
  export default {
    name: 'HelloWorld',
    data () {
      return {}
    },
    created () {
      console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    },
    components: {
      // HouseList
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .hello{
    padding: 0.15rem;
  }
</style>
