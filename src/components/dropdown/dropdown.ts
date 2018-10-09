import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VBDropdown extends Vue {
    @Prop(Boolean)
    value: boolean;

    @Prop()
    items: any[];

    @Prop(Boolean)
    isClickable: boolean;

    @Prop(Boolean)
    isReactive: boolean;

    @Prop(Boolean)
    isBlurable: boolean;

    isActive = false;

    beforeMount() {
        this.isActive = this.value;
    }

    mounted() {
        if (this.isReactive) {
            this.$watch('items', this.itemsChanged);
        }
    }

    @Watch('isActive')
    isActiveChanged(val: boolean) {
        this.$emit('input', val);
    }

    @Watch('value')
    valueChanged(val: boolean) {
        this.isActive = val;
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
