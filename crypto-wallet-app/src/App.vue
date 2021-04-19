<template>
  <div id="app">
    <Wallet/>
    <div id=main--container>
      <!-- Appel du composant Nav avec toute les routes -->
      <Nav/>
      <!-- Les composants correspondant aux routes utilisées par Nav sont rendu ici -->
      <!-- <router-view/> -->
      <div id="pages--content">
        <router-view v-slot="{ Component, route }">
          <transition
            :enter-active-class="route.meta.enterClass"
            :leave-active-class="route.meta.leaveClass"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Pour prévenir des propriétés du navigateur : */
    margin-block-start: 0;
    margin-block-end: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 99vh;
    /* display: flex; */
    text-align: justify;
  }

  #main--container {
    height: 95vh;
    width: 100vw;
    /* Je n'ai rien trouvé de mieux pour centré la page après la sidebar */
    /* Usuellement elle est censé intéragir avec les autres éléments dans le css, mais surement du au routeur elle est comme considéré à part */
    /* margin-left: 20vw; */
    padding: 0 25px;
    /* display: flex;
    flex-direction: column; */
  }

  #pages--content {
    padding: 3% 5px;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }

  @media screen and (min-width: 760px){
      #main--container {
        width: 79vw;
        /* Je n'ai rien trouvé de mieux pour centrer la page après la sidebar */
        /* Usuellement elle est censé intéragir avec les autres éléments dans le css, mais surement du au routeur elle est comme considéré à part */
        margin-left: 20vw;
        padding: 0 100px;
        /* display: flex;
        flex-direction: column; */
      }
  }

  .chart {
    border: 1px solid #000;
    height: 50vh;
    margin-bottom: 5vh;
  }
</style>
