import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import router from './router'

import './app.css'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

const store = createPinia()
const app = createApp(App)


app.use(store)
    .use(router)
    .mount('#app')
