import { defineComponent, ref, toRefs, computed, PropType } from 'vue';

import BlTh from '../th/Th.vue';
import BlLoading from '../loading/Loading.vue';
import { ThColumn } from '../th/Th';

import sortHelper from '../../utils/sort';

export default defineComponent({
    name: 'BlTable',
    inheritAttrs: false,
    components: { BlTh, BlLoading },
    emits: ['click'],
    props: {
        items: {
            required: true,
            type: Array<Record<string, any>>,
        },
        columns: {
            type: Array as PropType<ThColumn[]>,
            required: false,
        },
        isSortable: {
            default: false,
            type: Boolean,
        },
        sorted: {
            default: '',
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const { columns, items } = toRefs(props);
        const sortOn = ref(props.sorted);
        const desc = ref(false);

        const sortedItems = computed(() => {
            if (!props.isSortable) {
                return props.items;
            }

            return props.items.toSorted(sortHelper(sortOn.value, desc.value));
        });

        const sort = (event: { key: string; desc: boolean }) => {
            sortOn.value = event.key;
            desc.value = event.desc;
        };

        const parsedColumns = computed(() => {
            if (columns?.value) {
                return columns.value;
            } else if (Array.isArray(items.value) && items.value.length > 0) {
                return Object.keys(items.value[0]).map((value) => {
                    return {
                        header: value,
                        key: value,
                    };
                });
            }
            throw new Error('No columns or parsable items provided');
        });

        return {
            ...toRefs(props),
            desc,
            parsedColumns,
            sort,
            sortOn,
            sortedItems,
        };
    },
});
