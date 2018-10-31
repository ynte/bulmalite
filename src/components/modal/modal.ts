import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VBModal extends Vue {
    @Prop(Boolean)
    value: boolean;

    /**
     * Only load modal contents after modal becomes active
     */
    @Prop(Boolean)
    isLazy: boolean;

    /**
     * Show a .modal-close button
     */
    @Prop(Boolean)
    hasModalClose: boolean;

    /**
     * Close the modal when clicking on the .modal-background or when pressing escape
     */
    @Prop(Boolean)
    hasBackgroundClose: boolean;

    mounted() {
        document.addEventListener('keyup', this.keyUp);
    }

    beforeDestroy() {
        document.removeEventListener('keyup', this.keyUp);
    }

    keyUp(event: KeyboardEvent) {
        if (this.value && this.hasBackgroundClose && event.keyCode === 27) {
            this.$emit('input', false);
        }
    }

    close() {
        this.$emit('input', false);
    }
}
