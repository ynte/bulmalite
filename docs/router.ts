import { createRouter, createWebHistory } from 'vue-router';

import Dropdown from './views/components/Dropdown.vue';
import Loading from './views/components/Loading.vue';
import Modal from './views/components/Modal.vue';
import Navbar from './views/components/Navbar.vue';
import NavbarDropdown from './views/components/NavbarDropdown.vue';
import Table from './views/components/Table.vue';
import Th from './views/components/Th.vue';

export default createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            name: 'dropdown',
            path: '/components/dropdown',
            component: Dropdown,
        },
        {
            name: 'loading',
            path: '/components/loading',
            component: Loading,
        },
        {
            name: 'modal',
            path: '/components/modal',
            component: Modal,
        },
        {
            name: 'navbar',
            path: '/components/navbar',
            component: Navbar,
        },
        {
            name: 'navbar-dropdown',
            path: '/components/navbar-dropdown',
            component: NavbarDropdown,
        },
        {
            name: 'table',
            path: '/components/table',
            component: Table,
        },
        {
            name: 'th',
            path: '/components/th',
            component: Th,
        },
    ],
});
