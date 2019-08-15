import { Component, Vue } from 'vue-property-decorator';

import Sidebar from '../components/sidebar/sidebar.vue';

@Component({
    components: {
        Sidebar,
    }
})
export default class App extends Vue {
    
}
