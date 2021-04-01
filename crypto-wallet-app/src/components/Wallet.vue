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
        -webkit-box-shadow: 17px 0px 18px -16px rgba(0,0,0,0.27);
        -moz-box-shadow: 17px 0px 18px -16px rgba(0,0,0,0.27);
        box-shadow: 17px 0px 18px -16px rgba(0,0,0,0.27);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
    }

    h2 {
        border-bottom: 3px solid #42b983;
    }

    @media screen and (min-width: 760px){
        .wallet {
            width: 20vw;
            height: 100vh;
            top: 0;
            left: 0;
            padding: 0 2vw;
        }

        h2 {
            padding : 2vh 2vw;
        }
    }

</style>
