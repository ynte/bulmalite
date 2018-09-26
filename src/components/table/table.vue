<template>
    <table class="table is-bl">
        <thead>
            <tr>
                <th v-for="(th, key) in parsedHeaders" :key="key">{{th.name}}
                    <span class="icon is-pulled-right" v-if="isSortable && th.property">
                        <a class=" is-unselectable" v-if="th.property === parsedSort && !desc" @click="desc = true">↓</a>
                        <a class="is--right is-unselectable" v-else-if="th.property === parsedSort" @click="desc = false">↑</a>
                        <a class="is--right is-unselectable" v-else="" @click="setSort(th.property)">⇅</a>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <slot v-for="item in parsedItems" :item="item">
            </slot>
        </tbody>
    </table>
</template>

<script src="./table.js"></script>