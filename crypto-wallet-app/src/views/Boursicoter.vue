<template>
  <div class="boursicoter">
    <p>Nom de l'actif choisi : {{rsp[0].actif}}</p>
    <p>Nombre d'actifs : {{rsp[0].total}}</p>
  </div>
</template>

<script>

const api = 'http://localhost:3000/allwallets'

export default {
  name: 'boursicoter',
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

</style>
