import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VBModal extends Vue {
    @Prop(Boolean)
    isLazy: boolean;

    @Prop(Boolean)
    value: boolean;

    @Prop(Boolean)
    hasModalClose: boolean;

    @Prop(Boolean)
    hasBackgroundClose: boolean;

    mounted() {
        document.addEventListener('keyup', this.keyUp);
    }

    beforeDestroy() {
        document.removeEventListener('keyup', this.keyUp);
    }

    keyUp(event: KeyboardEvent) {
        if (this.value && event.keyCode === 27) {
            this.$emit('input', false);
        }
    }

    close() {
        this.$emit('input', false);
    }
}
