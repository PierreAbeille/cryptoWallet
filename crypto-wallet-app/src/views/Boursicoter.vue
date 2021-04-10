<template>
  <div class="boursicoter">
    <p v-if="dataReady">Nom de l'actif choisi : {{rsp[0].actif}}</p>
    <p v-if="dataReady">Nombre d'actifs : {{rsp[0].total}}</p>
  </div>
</template>

<script>

const api = 'http://localhost:3000/allwallets'

export default {
  name: 'boursicoter',
  data: () => ({
    error: '',
    rsp: [],
    dataReady: false
  }),

  async mounted () {
    // Toutes les opérations à effectuer
    const query = await fetch(api)
      .then(response => response.json())
    this.rsp = query
    this.dataReady = true
  },
  methods: {}
}
</script>

<style>

</style>
