<template>
  <div id="app">
    <!-- Appel du composant Nav avec toute les routes -->
    <Nav/>
    <!-- Les composants correspondant aux routes utilisées par Nav sont rendu ici -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Wallet/>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import Wallet from '@/components/Wallet.vue'

export default {
  components: {
    Nav,
    Wallet
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
    color: #2c3e50;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }

</style>
