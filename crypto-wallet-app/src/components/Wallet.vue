<template>
  <div class="wallet">
      <h2>My wallet</h2>
      <Actif/>
  </div>
</template>

<script>

import Actif from '@/components/Actif.vue'

export default {
  name: 'Wallet',
  components: {
    Actif
  }
}
</script>

<style>
    .wallet {
        text-align: left;
        width: 20vw;
        height: 90vh;
        position: absolute;
        top: 6vh;
        left: 0;
        padding: 2vh 2vw;
    }
</style>
