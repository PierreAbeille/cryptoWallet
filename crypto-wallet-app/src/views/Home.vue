<template>
  <div class="home">
    <div class="chart">
    </div>
  </div>
</template>

<script>

const api = 'http://localhost:3000/home'

export default {

  name: 'Home',

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

<style>

</style>
