<template>
  <div class="homeChart">
    <form @submit.prevent="loadCrypto">
      <select name="" id="" v-model="asset">
        <!-- L'utilisation du v-for permet de définir dans les champs sélectibles les cryptos de la bdd -->
        <option v-for="(item, i) in allWallets" :key="i" :value="item.actif">{{item.actif}}</option>
      </select>
      <input type="submit" value="Valider">
    </form>
    <apexchart height="100%" type="area" :options="options" :series="series" id="thisComponentChart"></apexchart>
  </div>
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
					decimalsInFloat: 2,
					// labels: {
          //   formatter: function (val) {
          //     return (val / 1000).toFixed(0);
          //   }
					// },
					title: {
						text: 'Prix en euros'
					},
					opposite: true
				},
				zoom: {
        	type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
					tools: {
						download: false,
						pan: false,
						zoom: false,
					}
        },
				colors: ['#42b983'],
				noData: {
    			text: 'Sélectionnez une cryptomonnaie à afficher'
  			},
				dataLabels: {
					enabled : false
				},
				tooltip: {
        	x: {
          	format: 'dd MMM yyyy'
        	}
      	},
				stroke: {
          curve: 'smooth'
        },
				fill: {
					gradient: {
						shadeIntensity: 1,
						opacityFrom: [0.5, 0.3]
					}
				}
      },
			series: [{
					name: '',
					data: []
			}],
			asset: '',
			allWallets: []
    }
  },

	async mounted () {
		const aWallets = await axios.get('/allwallets')
		this.allWallets = aWallets.data
	},

	methods: {
		async loadCrypto () {
			const response = await axios.get('/graphiqueG/'+this.asset.toLowerCase())
			this.series = [{data : response.data}]
		}
	},
}
</script>

<style scoped>
	.homeChart {
		height: 100%;
	}

	form {
		height: 20%;
		margin-bottom: 0.5vh;
	}

	select {
    width: 60%;
    border-radius: 5px;
		padding: 0.8vh 0;
		margin-bottom: 1vh;
		margin-right: 10%;
    }

	input[type="submit"] {
		width: 30%;
		cursor: pointer;
		border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: #fff;
    padding: 1vh 0;
	}

	#thisComponentChart {
		-webkit-box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.65);
    -moz-box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.65);
    box-shadow: 0px 5px 8px -5px rgba(0,0,0,0.65);
		border-radius: 5px;
	}
</style>