import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'

import './styles/base.css';

const app = createApp(App)
  
app.use(store)
app.use(router)
app.config.devtools = true
app.mount('#app')
