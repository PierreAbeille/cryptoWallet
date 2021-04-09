<template>
  <div class="actif">
      <ul id="listeActif">
        <!-- Ici, utiliser v-for pour intégrer nom de crypto et montant détenu -->
        <li>
          <h3> NomCrypto: {{rsp[0]}} </h3><br>
          Montant: {{rsp[0]}}
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
