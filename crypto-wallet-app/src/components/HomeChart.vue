<template>
  <div class="homeChart">
    <apexchart height="100%" type="line" :options="options" :series="series"></apexchart>
  </div>
<!-- <select name="" id="" v-model="asset"> -->
<!-- L'utilisation du v-for permet de définir dans les champs sélectibles les cryptos de la bdd -->
<!-- <option v-for="(item, i) in allwallets" :key="i" :value="item.actif">{{item.actif}}</option> -->
<!-- </select> -->
</template>

<script>
/* eslint-disable */
import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  data () {
    return {
      options: {
        chart: {
          id: 'homechart'
        },
        xaxis: {
          type: 'datetime'
        },
				yaxis: {
					forceNiceScale: true,
					decimalsInFloat: 2
				},
				zoom: {
        	type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        },
				colors: ['#42b983'],
      },
			series: [{
					name: 'BTC',
					data: []
			}],
			allWallets: []
    }
  },

	async mounted () {
		const response = await axios.get('/graphique/eth')
		this.series = [{data : response.data}]

		const aWallets = await axios.get('/allwallets')
		this.allWallets = aWallets.data
	}
}
</script>

<style>
	.homeChart {
		height: 100%;
	}
</style>