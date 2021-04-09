<template>
  <div class="actif">
      <ul>
        <!-- Ici, utiliser v-for pour intégrer nom de crypto et montant détenu -->
        <li v-for="response in rsp">
          <h3>{{response.actif}}</h3><br>
          Montant: {{response.total}} unités
        </li>
      </ul>
      <!-- <h3>Monnaie x</h3>
      <p>Montant : 23 000 <br>
         Valeur : 06543148 €
      </p> -->
  </div>
</template>

<script>

const api = 'http://localhost:3000/allwallets'

export default {
  name: 'Actif',

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

<style scoped>
  .actif {
      text-align: justify;
      padding: 2vh auto;
  }

  h3 {
    line-height: 0.8vh;
  }

  li {
    list-style: none;
    border-bottom: 1px solid #ccc;
  }
</style>
