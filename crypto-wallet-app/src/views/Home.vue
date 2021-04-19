/* eslint-disable */
<template>
  <div class="home">
    <h1>Evolution de votre portefeuille</h1>
    <div class="chart">
      <HomeChart/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import HomeChart from '@/components/HomeChart'

const api = 'http://localhost:3000/home'

export default {

  name: 'Home',

  components: {
    HomeChart
  },

  data: () => ({
    error: '',
    rsp: [],
    dataReady: false
  }),

  async mounted () {
    const query = await fetch(api)
      .then(response => response.json())
    this.rsp = query
    this.dataReady = true
  },
  methods: {}
}
</script>

<style scoped>
  h1 {
    margin-bottom: 5vh;
  }
</style>
