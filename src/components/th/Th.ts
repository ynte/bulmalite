import { defineComponent, PropType } from 'vue';

export interface ThColumn {
    header: string;
    key?: string;
}

export default defineComponent({
    props: {
        columns: {
            required: true,
            type: Object as PropType<ThColumn>,
        },
        isSortable: {
            type: Boolean,
            default: false,
        },
        sortedOn: {
            default: '',
        },
        desc: {
            default: false,
        },
    },
    setup(props, { emit }) {
        const clicked = (key: string | undefined) => {
            if (key) {
                emit('sort', {
                    key,
                    desc: key === props.sortedOn && !props.desc,
                });
            }
        };

        return {
            clicked,
        };
    },
});
