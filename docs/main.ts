import { createApp } from 'vue';

import './main.scss';

import App from './App.vue';
import router from './router';
import bulmalite from '../src/index';

const myApp = createApp(App);
myApp.use(bulmalite);
myApp.use(router);
myApp.mount('#app');
