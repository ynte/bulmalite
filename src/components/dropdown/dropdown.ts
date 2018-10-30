import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class BlDropdown extends Vue {
    @Prop(Boolean)
    value: boolean;

    @Prop({ default: () => [null] })
    items: any[];

    /**
     * Activate dropdown after click on trigger
     */
    @Prop(Boolean)
    isClickable: boolean;

    /**
     * Dropdown-trigger acts a toggle for dropdown state
     */
    @Prop(Boolean)
    isToggle: boolean;

    /**
     * Activate dropdown after items change
     */
    @Prop(Boolean)
    isReactive: boolean;

    /**
     * Close dropdown after a click outside the dropdown root
     */
    @Prop(Boolean)
    isBlurable: boolean;

    @Prop(Boolean)
    isBlurableOutside: boolean;

    isActive = false;

    get rootClasses() {
        return this.isActive ? 'is-active' : undefined;
    }

    beforeMount() {
        this.isActive = this.value;
    }

    mounted() {
        if (this.isReactive) {
            this.$watch('items', this.itemsChanged);
        }

        if (this.isBlurable) {
            window.addEventListener('click', this.triggerBlur);
        }
    }

    beforeDestroy() {
        window.removeEventListener('click', this.triggerBlur);
    }

    @Watch('isActive')
    isActiveChanged(val: boolean) {
        this.$emit('input', val);
    }

    @Watch('value')
    valueChanged(val: boolean) {
        this.isActive = val;
    }

    triggerBlur(event: MouseEvent) {
        if (event.target && !(this.$refs.self as HTMLElement).contains(event.target as Node)) {
            this.isActive = false;
        }
    }

    triggerClick() {
        if (this.isToggle) {
            this.isActive = !this.isActive;
        } else if (this.isClickable) {
            this.isActive = true;
        }
    }

    contentClick() {
        // this.isActive = false;
    }

    itemsChanged() {
        this.isActive = true;
    }
}
