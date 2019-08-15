
import Vue from 'vue';

import 'bulma/bulma.sass';
import '../lib/index';

import App from './app/app.vue';
import router from './router';


new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
