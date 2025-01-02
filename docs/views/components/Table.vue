<template>
    <section class="section">
        <h1 class="title">Table</h1>
        <p class="block">The inevitable HTML table, with special case cells</p>
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
                    <td>items</td>
                    <td>Array of items</td>
                    <td><pre>Record&lt;string, any&gt;[]</pre></td>
                </tr>
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
                    <td>The key of the column to sort on mount</td>
                    <td><pre>string</pre></td>
                </tr>
                <tr>
                    <td>is-loading</td>
                    <td>Show a loading state</td>
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
                    <td>click</td>
                    <td>Click on table row</td>
                    <td><pre>any</pre></td>
                </tr>
            </tbody>
        </table>
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
