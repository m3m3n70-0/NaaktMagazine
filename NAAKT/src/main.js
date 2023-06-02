import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);
app.use(router);
app.mount('#app');

axios.defaults.baseURL = 'http://127.0.0.1:5173/';
app.config.globalProperties.$http = axios;
app.config.productionTip = false;
