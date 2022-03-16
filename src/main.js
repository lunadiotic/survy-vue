import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import './app.css'
import router from './router'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

const store = createPinia()
const app = createApp(App)

app.use(router)
    .use(store)
    .mount('#app')
