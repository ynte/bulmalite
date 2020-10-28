import { defineComponent, onBeforeUnmount, onMounted, ref, toRefs } from 'vue';
import { useElementBlur, useShadowModelValue } from '../../composables';

export default defineComponent({
    props: {
        label: {
            type: String,
        },
        modelValue: {
            type: Boolean,
            default: null,
        },
        willBlur: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const { modelValue } = toRefs(props);
        const self = ref<HTMLElement | null>(null);

        const isActive = useShadowModelValue(modelValue, emit);

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
