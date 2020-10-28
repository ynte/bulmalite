<template>
    <div class="bl-table table-container">
        <table class="table" v-bind="$attrs">
            <bl-th
                :columns="parsedColumns"
                :sorted-on="sortOn"
                :is-sortable="isSortable"
                :desc="desc"
                @sort="sort"
            ></bl-th>
            <tbody>
                <tr
                    v-for="(item, index) in sortedItems"
                    :key="index"
                    @click="$emit('click', item)"
                >
                    <slot v-bind:row="item">
                        <td
                            v-for="(column, index) in parsedColumns"
                            :key="index"
                        >
                            {{ item[column.key] }}
                        </td>
                    </slot>
                </tr>
            </tbody>
        </table>
        <bl-loading v-if="isLoading"></bl-loading>
    </div>
</template>

<script lang="ts" src="./Table.ts"></script>
