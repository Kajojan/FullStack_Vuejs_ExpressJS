import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './stores/store'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(store)

sync(store, router)


app.mount('#app')
