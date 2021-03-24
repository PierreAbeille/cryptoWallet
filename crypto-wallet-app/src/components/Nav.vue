<template>
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/buy">Acheter</router-link> |
      <router-link to="/sell">Vendre</router-link> |
      <router-link to="/manage">Gestion</router-link> |
      <router-link to="/about">A propos</router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
console.log('ok')
</script>

<style>
    #nav {
        -webkit-box-shadow: 0px 6px 11px -5px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 6px 11px -5px rgba(0,0,0,0.57);
        box-shadow: 0px 6px 11px -5px rgba(0,0,0,0.57);
    }

    #nav a {
        text-decoration: none;
        margin: auto 3vw;
    }

</style>
