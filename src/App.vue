<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <Visualization1></Visualization1>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Visualization1 from './components/Visualization1.vue'

export default {
  name: 'app',
  components: {
    Visualization1
  }
}
</script>

<style>
body{
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
