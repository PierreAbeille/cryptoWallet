<template>
<!-- Selon si on achète ou bien si on vend le formulaire sera le même, la requête elle, sera différente -->
<!-- L'utilisation de @submit avec Vue permet de définir à quelle fonction correspond le formulaire-->
<!-- .prevent à les même fonctionnalités qu'en js vanilla, ici on évite d'actualiser la page au submit -->
  <form @submit.prevent="boursicoter">
    <!-- Classe personnalisé à laquelle on passe une fonction. Ici on vérifie l'état des variables achat et btnPressed -->
    <!-- @click permet de définir une action au click du bouton. Ici on effectue la fonction toggleAchat avec un parametre différent selon le bouton -->
    <!-- toggleAchat est la fonction qui nous permet de définir quelle requête effectuer selon quel bouton, avec un seul formulaire, on peut, soit acheter, soit vendre -->
    <div class="tradeSelection">
      <button :class="{actif: !form.achat || !btnPressed}" @click="toggleAchat('acheter')" type="button">Acheter</button>
      <button :class="{actif: form.achat || !btnPressed}" @click="toggleAchat('vendre')" type="button">Vendre</button>
    </div>
    <div class="tradeSelection">
      <!-- Champ pour définir le nombre d'unité que l'on souahaite échanger -->
      <input type="number" name="" id="" v-model="form.value">
      <!-- Champ pour définir quel actif on souhaite échanger -->
      <select name="" id="" v-model="form.asset">
        <!-- L'utilisation du v-for permet de définir dans les champs sélectibles les cryptos de la bdd -->
        <option v-for="(item, i) in listeCrypto" :key="i" :value="item.actif">{{item.actif}}</option>
      </select>
    </div>
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
  button, input[type="submit"]:disabled {
    border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: #fff;
    padding: 1vh 0;
    pointer-events: none;
    opacity: 0.3;
  }

  button:focus {
    outline: none;
  }

  button.actif, input[type="submit"] {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
    /* -webkit-box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.65);
    box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.65); */
    /* Obligé de surcharger les règles pour le submit (en attendant de trouver les raisons) */
    border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: #fff;
    padding: 1vh 0;
  }

  form>* {
    margin: 1vh auto;
  }

  .tradeSelection {
    display: flex;
    justify-content: space-between;
  }

  .tradeSelection button {
    width: 47%;
  }

  /* .tradeSelection select, .tradeSelection input {
    width: 40%;
    margin: auto 1vw;
    padding: 1vh 1vw;
    border-radius: 5px;
    border: 1px solid #CCC;
  } */

  .tradeSelection select, .tradeSelection input[type="number"] {
    margin-top: 2vh;
    height: 4vh;
    border: 1px solid #CCC;
  }

  .tradeSelection select {
    width: 10vw;
    border-radius: 0 5px 5px 0;
  }

  /* Pointeur personnalisé : https://anybodesign.com/des-select-personnalises-en-css/ */
  .tradeSelection select::after {
    /* Le pointeur du select */
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: .75em;
    display: block;
    width: 0; height: 0;
    border-color: transparent;
    border-top-color: #444;
    border-width: 6px;
    border-style: solid;
    pointer-events: none;
}

  .tradeSelection input[type="number"] {
    width: 100%;
    border-radius: 5px 0 0 5px;
    padding: 15px 10px;
  }

  .tradeSelection input[type="number"]:focus, .tradeSelection select:focus {
    border: 1px solid #42b983;
    outline: none;
  }

  form input[type="submit"]{
    width: 100%;
  }

  form input[type="submit"]:focus{
    outline: none;
  }

</style>
