<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-if="dataReady">{{rsp[0].actif}} {{rsp[0].Total}}</p>
    <p v-if="dataReady">{{rsp[1].actif}} {{rsp[1].Total}}</p>
    <p v-if="dataReady">{{rsp[2].actif}} {{rsp[2].Total}}</p>
    <p v-if="dataReady">{{rsp[3].actif}} {{rsp[3].Total}}</p>
    <p v-if="dataReady">{{rsp[4].actif}} {{rsp[4].Total}}</p>
    <p v-if="dataReady">{{rsp[5].actif}} {{rsp[5].Total}}</p>
  </div>
</template>

<script>

const api = 'http://localhost:3000/graphique/btc'

export default {
  name: 'about',
  data: () => ({
    error: '',
    rsp: [],
    dataReady: false
  }),

  async mounted () {
    const query = await fetch(api)
      .then(response => response.json())
    this.rsp = query
    console.log(query[6].data.prices.length)
    // console.log(query)
    let date = new Date(query[6].data.prices[0][0])
    // console.log(query[6].data.prices)
    let date2 = new Date(query[0].date)

    this.dataReady = true
    for (let i = 0; i < query.length - 1; i++) {
      date2 = new Date(query[i].date)
      console.log(date2)
      console.log('bonjour')
      for (let j = 0; j < query[6].data.prices.length; j++) {
        console.log('test')
        date = new Date(query[6].data.prices[j][0])
        if (date === date2) {
          console.log('tralala')
        }
      }
    }
  },
  methods: {}
}
</script>
