<template>
<!-- Selon si on achète ou bien si on vend le formulaire sera le même, la requête elle, sera différente -->
<!-- L'utilisation de @submit avec Vue permet de définir à quelle fonction correspond le formulaire-->
<!-- .prevent à les même fonctionnalités qu'en js vanilla, ici on évite d'actualiser la page au submit -->
  <form @submit.prevent="boursicoter">
    <!-- Classe personnalisé à laquelle on passe une fonction. Ici on vérifie l'état des variables achat et btnPressed -->
    <!-- @click permet de définir une action au click du bouton. Ici on effectue la fonction toggleAchat avec un parametre différent selon le bouton -->
    <!-- toggleAchat est la fonction qui nous permet de définir quelle requête effectuer selon quel bouton, avec un seul formulaire, on peut, soit acheter, soit vendre -->
    <button :class="{actif: !form.achat || !btnPressed}" @click="toggleAchat('acheter')" type="button">Acheter</button>
    <button :class="{actif: form.achat || !btnPressed}" @click="toggleAchat('vendre')" type="button">Vendre</button>
    <!-- Champ pour définir quel actif on souhaite échanger -->
    <select name="" id="" v-model="form.select">
      <!-- L'utilisation du v-for permet de définir dans les champs sélectibles les cryptos de la bdd -->
      <option v-for="(item, i) in listeCrypto" :key="i" :value="item.actif">{{item.actif}}</option>
    </select>
    <!-- Champ pour définir le nombre d'unité que l'on souahaite échanger -->
    <input type="number" name="" id="" v-model="form.unites">
    <!-- Boutton de validation -->
    <input type="submit" value="Valider" :disabled="!btnPressed">
  </form>
</template>

<script>
export default {
  name: 'BoursForm',

  props: {
    // Ici on récupère l'attribut passé en paramètre de l'appel du composant
    // On définit sont type : Array et son comportement par défaut : Liste vide
    listeCrypto: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // Dans form on précise les input du formulaire (v-model) et leurs valeurs par défaut
      // On aurait pu spécifier ces éléments sans v-model ni sans les rentrer dans un tableau. Mais la méthode utilisée permet une meilleure utilisation / précision de ces variables      form: {
      form: {
        achat: null,
        unites: 0,
        select: null
      },
      btnPressed: false
    }
  },
  methods: {
    // Méthode appelée par le formulaire
    boursicoter () {
      // Envoie au composant parent l'objet form
      this.$emit('sendForm', this.form)
    },
    // Vérifie l'état des boutons du formulaire et si l'un d'eux est utilisé, désactive le blocage du bouton submit
    toggleAchat (param) {
      this.form.achat = param === 'acheter'
      this.btnPressed = true
    }
  }
}
</script>

<style>
  /* Ici on définit le style des boutons en fonction de leur état */
  button {
    pointer-events: none;
    opacity: 0.3;
  }
  button.actif {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
  }
</style>
