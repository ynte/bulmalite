<template>
    <section class="section">
        <h1 class="title">Th</h1>
        <p class="block">An interactive table heading</p>
        <table class="table block">
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Functionality</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>columns</td>
                    <td>Array of table headers</td>
                    <td><pre>Array<{header: string; key?: string}></pre></td>
                </tr>
                <tr>
                    <td>is-sortable</td>
                    <td>
                        Table can be sorted on columns which have the key
                        property set
                    </td>
                    <td><pre>boolean</pre></td>
                </tr>
                <tr>
                    <td>sorted</td>
                    <td>The key of the column to sort</td>
                    <td><pre>string</pre></td>
                </tr>
                <tr>
                    <td>desc</td>
                    <td>Sort descending</td>
                    <td><pre>boolean</pre></td>
                </tr>
            </tbody>
        </table>
        <table class="table block">
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Functionality</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sort</td>
                    <td>Request new sorting state</td>
                    <td><pre>{key: string; desc: string}></pre></td>
                </tr>
            </tbody>
        </table>
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
