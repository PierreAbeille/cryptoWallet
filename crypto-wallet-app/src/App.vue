<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 3vh 3vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 3vh 1vw;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
