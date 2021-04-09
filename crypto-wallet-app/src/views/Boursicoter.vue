<template>
  <div class="boursicoter">
    <a href="">Acheter</a> <a href="">Vendre</a>
    <p>Nom de l'actif choisi : {{rsp[0]}}</p>
    <p>Nombre d'actifs : {{rsp[0]}}</p>
    <BoursForm/>
  </div>
</template>

<script>

import BoursForm from '@/components/BoursForm.vue'

const api = 'http://localhost:3000/allwallets'

export default {
  name: 'Boursicoter',

  components: {
    BoursForm
  },

  data: () => ({
    error: '',
    rsp: []
  }),

  mounted () {
    fetch(api)
      .then(response => response.json())
      .then(result => {
        this.rsp = result
      })
  },
  methods: {}
}
</script>

<style>
  .boursicoter {
    padding : 2vh 2vw;
  }

    @media screen and (min-width: 760px){
    .boursicoter {
      height: 80vh;
      width : 60vw;
      margin: auto;
      margin-right: 5vw;
      /* border: 1px solid #CCC; */
      border-radius: 50px;
      padding: 3vh 3vw;
    }
  }
</style>
