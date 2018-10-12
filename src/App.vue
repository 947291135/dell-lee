<template>
  <div id="app">
    <list></list>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import list from '@/components/list.vue'
export default {
  name: 'App',
  components: { list }
}
</script>

<style>
  body{
    background: #2c3e50;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app > img{
  margin-top: 110px;
}
</style>
