import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Chargement de App.vue et du router associé, tout le reste se passe dans les composant est vues de l'app
createApp(App).use(router).mount('#app')
