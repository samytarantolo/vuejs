import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/main.css'

import BaseButton from './components/global/BaseButton.vue'
import DeleteButton from './components/global/DeleteButton.vue'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('delete-button', DeleteButton)

app.mount('#app')
