<template>
    <section class="section">
        <h1 class="title">Th</h1>
    </section>
    <section class="section">
        <table class="table is-fullwidth">
            <bl-th
                :columns="columns"
                is-sortable
                :sorted-on="sortOn"
                :desc="desc"
                @sort="sort"
            ></bl-th>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ThColumn } from '../../../src/components/th/Th';

export default defineComponent({
    setup() {
        const sortOn = ref('one');
        const desc = ref(false);

        const sort = ({ key, desc: eventDesc }) => {
            sortOn.value = key;
            desc.value = eventDesc;
        };

        return {
            columns: [
                {
                    key: 'one',
                    header: 'One',
                },
                {
                    key: 'two',
                    header: 'Two',
                },
                {
                    header: 'Three (unsortable)',
                },
            ] as ThColumn[],
            desc,
            sort,
            sortOn,
        };
    },
});
</script>
