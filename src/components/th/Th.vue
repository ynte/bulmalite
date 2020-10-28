<template>
    <thead class="bl-th">
        <tr>
            <th
                v-for="(column, index) in columns"
                :key="index"
                :class="{ 'is-sortable': isSortable && column.key }"
                @click="clicked(column.key)"
            >
                {{ column.header }}
                <span class="icon" v-if="isSortable && column.key === sortedOn">
                    <span v-if="desc">↑</span>
                    <span v-else>↓</span>
                </span>
            </th>
        </tr>
    </thead>
</template>

<script lang="ts" src="./Th.ts"></script>
