import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class BlDropdown extends Vue {
    @Prop(Boolean)
    value: boolean;

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
     * Close dropdown after a click outside the dropdown root
     */
    @Prop(Boolean)
    willBlur: boolean;

    isActive = false;

    get rootClasses() {
        return this.isActive ? 'is-active' : undefined;
    }

    @Watch('value')
    valueChanged(value: boolean) {
        this.isActive = value;
    }

    beforeMount() {
        this.isActive = this.value;
    }

    mounted() {
        if (this.willBlur) {
            window.addEventListener('click', this.triggerBlur);
        }
    }

    beforeDestroy() {
        window.removeEventListener('click', this.triggerBlur);
    }

    setState(value: boolean) {
        this.isActive = value;
        this.$emit('input', value);
    }

    triggerBlur(event: MouseEvent) {
        if (event.target && !(this.$refs.self as HTMLElement).contains(event.target as Node)) {
            this.setState(false);
        }
    }

    triggerClick() {
        if (this.isToggle) {
            this.setState(!this.isActive);
        } else if (this.isClickable) {
            this.setState(true);
        }
    }
}
