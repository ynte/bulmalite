<template>
    <div id="sidebar-component">
        <aside class="menu">
            <p class="menu-label">
                Introduction
            </p>
            <p class="menu-label">
                Components
            </p>
            <ul class="menu-list">
                <li><router-link :to="{name: 'dropdown'}">Dropdown</router-link></li>
            </ul>
        </aside>
        <hr>
        <p class="is-size-7">Examples partly from the official bulma documenation. License CC BY-NC-SA 4.0</p>
    </div>
</template>

<script src="./sidebar.ts" lang="ts"></script>