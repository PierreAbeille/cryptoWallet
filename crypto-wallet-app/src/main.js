import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

// Chargement de App.vue et du router associé, tout le reste se passe dans les composant est vues de l'app
createApp(App).use(router).use(VueApexCharts).mount('#app')
