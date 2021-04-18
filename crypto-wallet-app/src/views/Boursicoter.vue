<template>
  <div class="boursicoter">
    <div class="chart">
    </div>
    <!-- @sendForm est une classe personnalisée -->
    <!-- Elle permet de passer en parametre du composant une fonction du parent-->
    <!-- listeCrypto correspond à l'objet json crée par la reqûete effectué dans ce composant  -->
    <!-- Ici aussi ça permet d'envoyer au composant enfant un objet -->
    <BoursForm @sendForm="sendForm" :listeCrypto="rsp"/>
  </div>
</template>

<script>

import BoursForm from '@/components/BoursForm.vue'
// import de axios en tant que module
import axios from 'axios'
// Ici on définie l'URL de base de l'api, celle des requêtes étant spécifiée à part
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  name: 'Boursicoter',

  components: {
    BoursForm
  },

  data: () => ({
    error: '',
    rsp: [],
    dataReady: false
  }),

  // En utilisant axios l'appel de l'api est plus rapide et lisible
  // Utilisation de async obligatoire avec await. Il s'agit d'une fonction asynchrone
  async mounted () {
    // L'URL de la requête est à part, c'est plus lisible
    // L'utilisation de await permet d'éviter les '.then' à répétition
    const response = await axios.get('/allwallets')
    // "Tu lances cette opération qu'une fois la bonne réception du résultat de la requête"
    this.rsp = response.data
  },
  methods: {
    // Fonction asynchrone
    // Elle prend en parametre un form
    // Elle permet d'appeler une fonction d'un composant enfant. On réalise une requête à partir du parent
    async sendForm (form) {
      // 'achat' est un objet de form dans le composant cible (@/components/BoursForm.vue)
      if (form.achat) {
        // requete pour achat
        // a remplacer par une requête adéquate
        const response = await axios.post('/deposit', form)
        console.log(response)
        console.log('acheter')
        console.log(form)
      } else {
        // requete pour vendre
        // a remplacer par une requête adéquate
        const response = await axios.post('/withdraw', form)
        console.log(response)
        console.log('vendre')
        console.log(form)
      }
    }
  }
}
</script>

<style>

</style>
