<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-if="dataReady">{{rsp.message}}</p>
  </div>
</template>

<script>

const api = 'http://localhost:3000/home'

export default {
  name: 'home',
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
