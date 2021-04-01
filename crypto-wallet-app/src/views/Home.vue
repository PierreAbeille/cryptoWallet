<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{rsp.message}}</p>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

console.log('salut')
const api = 'http://localhost:3000/home'

export default {
  name: 'home',
  data: () => ({
    error: '',
    rsp: []
  }),

  mounted () {
    fetch(api)
      .then(response => response.json())
      .then(result => {
        this.rsp = result
      })
  },
  methods: {}
}
</script>
