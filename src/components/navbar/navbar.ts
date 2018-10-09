import { Component, Vue, Prop } from 'vue-property-decorator';

import NavbarBurger from './navbarBurger/navbarBurger.vue';

@Component({
    components: {
        NavbarBurger,
    },
})
export default class Navbar extends Vue {
    @Prop(Boolean)
    isContained: boolean;

    @Prop(Boolean)
    isFluid: boolean;

    isActive = false;
}
