<template>
    <div id="nav">
      <!-- Chaque route est déclarée ici, '<router-link>' est ensuite rendu en lien '<a>' -->
      <router-link to="/">Accueil</router-link> |
      <router-link to="/boursicoter">Boursicoter</router-link> |
      <router-link to="/about">A propos</router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
    #nav {
        -webkit-box-shadow: 0px 6px 11px -5px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 6px 11px -5px rgba(0,0,0,0.57);
        box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
        width : 50vw;
        border-radius : 50px;
    }

    #nav a {
        text-decoration: none;
        margin: auto 3vw;
    }

</style>
