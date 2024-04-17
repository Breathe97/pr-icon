import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrIcon from '../../dist/index.js'

const app = createApp(App)

app.use(PrIcon)

app.mount('#app')
