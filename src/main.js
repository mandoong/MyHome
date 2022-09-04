import { createApp } from 'vue'
import './style.css'
import './input.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './components/advantage.vue'

console.log(VueRouter);


const routes = [

    { path: '/', component: Home }
  
  ]
  
const router = VueRouter.createRouter({
    
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  
const app = createApp(App)
  
app.use(router)

app.mount('#app')


