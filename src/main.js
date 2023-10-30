import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Editor from '@datatables.net/editor-2023-11-04-dt';   // <-- crash

const app = createApp(App)

//app.use(createPinia())
app.use(router)

app.mount('#app')
