<template>
    <aside class="menu">
        <p class="menu-label">
            Introduction
        </p>
        <p class="menu-label">
            Components
        </p>
        <ul class="menu-list">
            <li>
                <router-link :to="{ name: 'dropdown' }">Dropdown</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'loading' }">Loading</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'modal' }">Modal</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'navbar' }">Navbar</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'navbar-dropdown' }">Navbar Dropdown</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'table' }">Table</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'th' }">Table Header</router-link>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
