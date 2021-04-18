<template>
  <div class="about">
    <h1>Qu'est-ce que CryptoWallet ?</h1>
    <div class="explications">
      <p>CryptoWallet est un site de simulation d'achat et de revente de cryptomonnaie développé par Pierre Abeille et Yohann Markuc.
        Le site est développé principalement avec VUEjs, Coingecko et Charjs (?).
        On peut y consulter le cours actuel du marché, et acheter / vendre des crypto en fonction de notre portefeuille et de la valeur à l'instant T de celles ci.
      </p>
      <img src="../assets/crypto.gif" alt="">
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
  }

  p{
    width: 40vw;
    font-size: 1.8rem;
    line-height: 1.8;
  }

  img {
    height: auto;
    width: 20vw;
  }
</style>
