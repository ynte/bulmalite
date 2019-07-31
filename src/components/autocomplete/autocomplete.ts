import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class BlAutocomplete extends Vue {
    @Prop()
    items: any[];

    @Prop({default: false})
    icon: string | false;

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

    keyMapping = {
        ArrowUp: this.cursorUp,
        ArrowDown: this.cursorDown,
        Enter: this.cursorEnter,
        Tab: this.cursorTab,
    };

    @Watch('items')
    itemsChanged() {
        this.cursor = -1;
    }

    cursorDown(e: KeyboardEvent) {
        e.preventDefault();

        this.dropdown = true;

        if (this.items[this.cursor + 1]) {
            this.cursor += 1;
        }
    }

    cursorUp(e: KeyboardEvent) {
        e.preventDefault();

        if (this.cursor > 0) {
            this.cursor -= 1;
        }
    }

    cursorEnter(e: KeyboardEvent) {
        e.preventDefault();

        if (this.cursor >= 0) {
            this.$emit('select', this.items[this.cursor]);
        }

        this.cursorTab(e);
    }

    cursorTab(e: KeyboardEvent) {
        if (this.cursor >= 0) {
            this.$emit('select', this.items[this.cursor]);
        }

        this.dropdown = false;
    }

    keyDown(e: KeyboardEvent) {
        if (this.keyMapping[e.key]) {
            this.keyMapping[e.key](e);
        } else if (!this.dropdown) {
            this.dropdown = true;
        }
    }

    itemClick(item: string) {
        this.$emit('select', item);
    }
}
