<template>
  <div class="homeChart">
    <apexchart height="100%" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
/* eslint-disable */
import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'

export default {
	url : 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=14&interval=daily',

  data () {
    return {
      options: {
        chart: {
          id: 'homechart',
					toolbar: {
						show: false
					}
        },
        // xaxis: {
        //   type: 'category'
        // },
				colors: ['#42b983'],
      },
			series: [{
					data: []
			}]
    }
  },

	async mounted () {
		const response = await axios.get(this.url)
		// 	data: response.prices[1]
		// this.series =[{
  	// 	data: [{x: response.prices[0], y: response.prices[1]}]
		// }]
	}
}
</script>

<style>
	.homeChart {
		height: 100%;
	}
</style>