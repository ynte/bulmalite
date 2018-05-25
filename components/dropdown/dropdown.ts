import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VBDropdown extends Vue {
    @Prop()
    items: any[];

    @Prop(Boolean)
    isClickable: boolean;

    @Prop(Boolean)
    isReactive: boolean;

    @Prop(Boolean)
    isBlurable: boolean;

    isActive = false;

    mounted() {
        if (this.isReactive) {
            this.$watch('items', this.itemsChanged);
        }
    }

    triggerBlur() {
        if (this.isBlurable) {
            this.isActive = false;
        }
    }

    triggerClick() {
        if (this.isClickable) {
            this.isActive = true;
        }
    }

    contentClick() {
        this.isActive = false;
    }

    itemsChanged() {
        this.isActive = true;
    }
}
