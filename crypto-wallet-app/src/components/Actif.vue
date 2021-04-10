<template>
  <div class="actif">
      <ul>
        <!-- La directive v-for permet d'itérer sur une liste -->
        <!-- Dans le cas ci-dessous on itère sur 'rsp', le résultat en json de la requête à l'api -->
        <!-- item correspond à l'objet sur lequel on se situe, i étant l'index. La clé est important pour pouvoir itérer sur des objets uniques -->
        <li v-for="(item, i) in rsp" :key="i">
          <h3>{{item.actif}}</h3>
          {{item.total}} unités
        </li>
      </ul>
  </div>
</template>

<script>

// Penser à passer à axios pour les requêtes
// Il est important de spécifier l'url du localhost et celle de la requête à part
// (Voir @/views/Boursicoter.vue)
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

  li {
    list-style: none;
    border-bottom: 1px solid #ccc;
  }
</style>
