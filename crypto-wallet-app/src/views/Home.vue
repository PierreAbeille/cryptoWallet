<template>
  <div class="home">
    <p>{{rsp.message}}</p>
  </div>
</template>

<script>
console.log('salut')
const api = 'http://localhost:3000/home'

export default {
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
  name: 'Home'
}
</script>
