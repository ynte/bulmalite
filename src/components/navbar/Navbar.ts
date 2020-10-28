import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useElementBlur } from '../../composables';

export default defineComponent({
    props: {
        isFluid: {
            type: Boolean,
            default: false,
        },
        willBlur: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const isActive = ref(false);
        const self = ref<HTMLElement | null>(null);

        const { cancelBlurListener, registerBlurListener } = useElementBlur(
            self,
            () => {
                if (props.willBlur) {
                    isActive.value = false;
                }
            }
        );

        onMounted(() => {
            registerBlurListener();
        });

        onBeforeUnmount(() => {
            cancelBlurListener();
        });

        return {
            isActive,
            self,
        };
    },
});
