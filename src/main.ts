import './assets/main.css'


//import { Spinkit } from "spinkit";


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(Spinkit);
app.use(VueAxios, axios)
app.use(useToast)


app.mount('#app')
