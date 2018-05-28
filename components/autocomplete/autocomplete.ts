import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VBAutocomplete extends Vue {
    @Prop()
    items: any[];

    @Prop(Boolean)
    isClickable: boolean;

    @Prop(Boolean)
    isReactive: boolean;

    @Prop(Boolean)
    isBlurable: boolean;

    @Prop()
    value: string;

    cursor = -1;

    dropdown = false;

    @Watch('items')
    itemsChanged() {
        this.cursor = -1;
    }

    keyDown() {
        if (this.items[this.cursor + 1]) {
            this.cursor += 1;
        }
    }

    keyUp() {
        if (this.cursor > 0) {
            this.cursor -= 1;
        }
    }

    keyEnter() {
        if (this.cursor >= 0) {
            this.$emit('select', this.items[this.cursor]);
        }
        
        this.dropdown = false;
    }

    itemClick(item: string) {
        this.$emit('select', item);
    }
}