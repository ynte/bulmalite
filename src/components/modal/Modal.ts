import { defineComponent, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
    props: {
        hasModalClose: {
            type: Boolean,
            default: false,
        },
        hasBackgroundClose: {
            type: Boolean,
            default: false,
        },
        isLazy: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { emit }) {
        const close = () => {
            emit('update:modelValue', false);
        };

        const backgroundClicked = () => {
            if (props.hasBackgroundClose) {
                close();
            }
        };

        const keyUp = (event: KeyboardEvent) => {
            if (props.hasBackgroundClose && event.key === 'Escape') {
                close();
            }
        };

        onMounted(() => {
            document.addEventListener('keyup', keyUp);
        });

        onBeforeUnmount(() => {
            document.removeEventListener('keyup', keyUp);
        });

        return {
            backgroundClicked,
            close,
        };
    },
});
