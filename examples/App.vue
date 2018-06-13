<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  font-size: 100px;
  font-size: calc(1000vw/37.5);
  background: #f0f0f0;
  width: 100%;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
  "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  line-height: 1.2;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
}
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  font-size: 0.14rem;
  line-height: inherit;
  -webkit-tap-highlight-color: transparent;
}
a {
  text-decoration: none;
  color: #8e8e8e;
}
button{
  border:0px;
  background-color:transparent;
}

</style>
