import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    isActive = false;
    
    /**
     * User has clicked the burger menu
     */
    burger() {
        this.isActive = !this.isActive;
    }
}
