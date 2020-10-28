<template>
    <section class="section">
        <h1 class="title">Table</h1>
    </section>
    <section class="section">
        <h2 class="title">Default table</h2>
        <bl-table
            class="is-fullwidth"
            :columns="columns"
            :items="items"
        ></bl-table>
    </section>
    <section class="section">
        <h2 class="title">Sortable</h2>
        <bl-table
            class="is-fullwidth"
            is-sortable
            :columns="columns"
            :items="items"
        ></bl-table>
    </section>
    <section class="section">
        <h2 class="title">Loading</h2>
        <bl-table
            class="is-fullwidth"
            is-loading
            :columns="columns"
            :items="items"
        ></bl-table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ThColumn } from '../../../src/components/th/Th';

export default defineComponent({
    setup() {
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
                    key: 'three',
                    header: 'Three',
                },
            ] as ThColumn[],
            items: [
                {
                    one: 'one-one',
                    two: 'two-one',
                    three: 'three-one',
                },
                {
                    one: 'one-two',
                    two: 'two-two',
                    three: 'three-two',
                },
                {
                    one: 'one-three',
                    two: 'two-three',
                    three: 'three-three',
                },
            ],
        };
    },
});
</script>
