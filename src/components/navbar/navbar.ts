import { Component, Vue, Prop } from 'vue-property-decorator';

import NavbarBurger from './navbarBurger/navbarBurger.vue';

@Component({
    components: {
        NavbarBurger,
    },
})
export default class Navbar extends Vue {
    /**
     * Wrap Navbar contents in a container
     */
    @Prop(Boolean)
    isContained: boolean;

    /**
     * Make the container fluid
     */
    @Prop(Boolean)
    isFluid: boolean;

    /**
     * Close the navbar after the route changes
     */
    @Prop(Boolean)
    willClose: boolean;

    isActive = false;

    mounted() {
        if (this.willClose && this.$route) {
            this.$watch('$route', () => {
                this.isActive = false;
            });
        }
    }
}
