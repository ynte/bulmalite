<template>
    <bl-dropdown v-model="dropdownState" is-toggle will-blur>
        <slot></slot>
        <template slot="content">
            <template v-for="(item, index) in items">
                <a class="dropdown-item" :key="index" @click="triggerClick(item, index)">
                    <slot name="items" :item="item" :index="index">{{item}}</slot>
                </a>
            </template>
        </template>
    </bl-dropdown>
</template>

<script src="./dropdownSelect.js"></script>