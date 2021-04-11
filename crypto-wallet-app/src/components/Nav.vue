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
      -webkit-box-shadow: 0px 10px 26px -16px rgba(0,0,0,0.64);
      -moz-box-shadow: 0px 10px 26px -16px rgba(0,0,0,0.64);
      box-shadow: 0px 10px 26px -16px rgba(0,0,0,0.64);
      padding: 2vh 2vw;
      font-size: 0.8em;
      text-align: center;
      background-color: #fff;
      /* border : 1px solid #CCC; */
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }

    #nav a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;
      padding: 3vh 5px;
    }

    @media screen and (min-width: 760px) {
      #nav {
        width : 100%;
        margin: 1vh auto;
        border-radius : 40px;
        padding: 3vh 3vw;
        font-size: 1.2em;
      }

      #nav a {
        margin: auto 1vw;
      }

      #nav a:hover {
        border-bottom: 3px solid #42b983;
      }
    }

</style>
