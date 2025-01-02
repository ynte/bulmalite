import { Plugin } from 'vue';

import Dropdown from './components/dropdown/Dropdown.vue';
import Loading from './components/loading/Loading.vue';
import Modal from './components/modal/Modal.vue';
import Navbar from './components/navbar/Navbar.vue';
import NavbarDropdown from './components/navbarDropdown/NavbarDropdown.vue';
import Table from './components/table/Table.vue';
import Th from './components/th/Th.vue';

export default {
    install(app) {
        app.component('bl-dropdown', Dropdown);
        app.component('bl-loading', Loading);
        app.component('bl-modal', Modal);
        app.component('bl-navbar', Navbar);
        app.component('bl-navbar-dropdown', NavbarDropdown);
        app.component('bl-table', Table);
        app.component('bl-th', Th);
    },
} as Plugin;
