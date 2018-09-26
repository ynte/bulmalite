<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="(th, key) in parsedHeaders" :key="key">{{th.name}}</th>
            </tr>
        </thead>
        <tbody>
            <slot v-for="item in items" :item="item">
            </slot>
        </tbody>
    </table>
</template>

<script src="./table.js"></script>