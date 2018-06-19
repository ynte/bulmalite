<template>
    <div class="tabs">
        <ul>
            <li v-for="(item, key) in items" :key="key" :class="[key === value ? 'is-active' : '']" @click="$emit('input', key)"><slot :item="item"><a>{{item}}</a></slot></li>
        </ul>
    </div>
</template>

<script src="./tabs.ts" lang="ts"></script>
