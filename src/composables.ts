import { ref, Ref, watch } from 'vue';

export const useElementBlur = (
    elementRef: Ref<HTMLElement | null>,
    callback: () => void
) => {
    const clicked = (event: MouseEvent) => {
        if (
            elementRef.value &&
            event.target &&
            !elementRef.value.contains(event.target as Node)
        ) {
            callback();
        }
    };

    const registerBlurListener = () => {
        window.addEventListener('click', clicked);
    };

    const cancelBlurListener = () => {
        window.removeEventListener('click', clicked);
    };

    return {
        cancelBlurListener,
        registerBlurListener,
    };
};

export const useShadowModelValue = (
    prop: Ref<null | boolean>,
    emit: (event: string, payload: any) => unknown
) => {
    const shadow = ref(false);

    watch(
        prop,
        (value) => {
            if (typeof value === 'boolean') {
                shadow.value = value;
            }
        },
        {
            immediate: true,
        }
    );

    watch(shadow, (value) => {
        if (prop.value !== value) {
            emit('update:modelValue', value);
        }
    });

    return shadow;
};
