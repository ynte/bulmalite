<template>
    <div class="tabs">
        <ul>
            <li v-for="(item, key) in items" :key="key" :class="{'is-active': key === value}" @click="$emit('input', key)"><slot :item="item"><a>{{item}}</a></slot></li>
        </ul>
    </div>
</template>

<script src="./tabs.js"></script>
