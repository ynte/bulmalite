import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    @Prop(Boolean)
    isContained: boolean;

    isActive = false;
    
    /**
     * User has clicked the burger menu
     */
    burger() {
        this.isActive = !this.isActive;
    }
}
