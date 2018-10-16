<template>
  <div>
    <Homeheader></Homeheader>
  </div>
</template>

<script>
import Homeheader from './Header/header.vue'
export default {
  name: 'Home',
  components: {
    Homeheader
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
  font-size: 0.12rem
}
</style>
