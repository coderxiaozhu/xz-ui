import { createApp } from 'vue'
import './index.scss'
import ZButton from './button'
import App from './App.vue'
const app = createApp(App)
app.use(ZButton).mount('#app')
