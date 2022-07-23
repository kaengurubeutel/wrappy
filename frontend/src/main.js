import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index';
import VueAxios from 'vue-axios'

createApp(App).use(router).use(VueAxios).mount('#app')
