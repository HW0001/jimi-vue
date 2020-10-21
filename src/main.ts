import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MenuNav from "@/components/MenuNav.vue";

const app = createApp(App)
app.component("MenuNav",MenuNav)
app.use(store).use(router).mount('#app')