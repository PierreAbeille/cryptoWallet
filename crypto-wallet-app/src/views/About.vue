<template>
  <div class="about">
    <h1>Qu'est-ce que CryptoWallet ?</h1>
    <div class="explications">
      <p>CryptoWallet est un site de simulation d'achat et de revente de cryptomonnaie développé par <a href="https://github.com/PierreAbeille">Pierre Abeille</a> et <a href="https://github.com/ymarkuc">Yohann Markuc</a>. <br>
        Le site est développé principalement avec <a href="https://v3.vuejs.org/guide/introduction.html">Vue.js</a>, <a href="https://www.coingecko.com/api/documentations/v3">Coingecko API</a> et <a href="https://apexcharts.com/docs/installation/">ApexCharts</a>.
        On peut y consulter le cours actuel du marché, et acheter / vendre des crypto en fonction de notre portefeuille et de la valeur à l'instant T de celles ci.
        On peut aussi y consulter la valorisation de nos portefeuilles au cours du temps.
      </p>
      <img src="../assets/crypto.svg" alt="">
			<img src="../assets/update.svg" alt="">
			<p>
				Actuellement le volet de gauche ne se met pas à jour en temps réel lors des transactions. Il faut actualiser la page pour que celui ci se mette à jour. <br>
				Une future mise à jour devrait régler ce problème.
			</p>
    </div>
  </div>
</template>

<script>

export default {
	name: 'About'
}
</script>

<style scoped>
  .explications {
    margin-top: 5vh;
    display: flex;
    justify-content: space-between;
		flex-wrap: wrap;
  }

  p{
    width: 35vw;
    font-size: 1.6rem;
    line-height: 1.7;
  }

  img {
    height: auto;
    width: 20vw;
		margin-bottom: 10vh;
  }

	a {
		text-decoration: none;
		color: #42b983;
		font-weight: bold;
	}

	a:hover {
		opacity : 0.75;
		text-decoration: underline;
		}
</style>
