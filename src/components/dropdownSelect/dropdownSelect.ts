import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BlDropdownSelect extends Vue {
    @Prop()
    value: any;

    @Prop()
    items: any[];

    /**
     * Show dropdown-menu when items change
     */
    @Prop(Boolean)
    isReactive: boolean;

    /**
     * Return item key in stead of its contents
     */
    @Prop(Boolean)
    willEmitKey: boolean;

    dropdownState = false;

    mounted() {
        if (this.isReactive) {
            this.$watch('items', () => {
                this.dropdownState = true;
            });
        }
    }

    triggerClick(item: any, key: string | number) {
        this.dropdownState = false;
        this.$emit('input', this.willEmitKey ? key : item);
    }

}
