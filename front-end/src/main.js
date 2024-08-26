import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

loadFonts()

createApp(App)
  .use(Vuetify)
  .use(router) 
  .mount('#app')
