import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from '../src/components/container'

createApp(App)
  .use(ElContainer)
  .mount('#app')
