<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  max-width: 100%;
  margin: auto;
}
</style>

<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
