import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from '../components/HelloWorld.vue'

const app = createApp(App)

// ✅ 全局注册 HelloWorld 组件
app.component('HelloWorld', HelloWorld)

app.mount('#app')