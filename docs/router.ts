import Vue from 'vue';
import Router from 'vue-router';

import Dropdown from './views/dropdown/dropdown.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            name: 'dropdown',
            path: 'components/dropdown',
            component: Dropdown,
        }
    ]
})