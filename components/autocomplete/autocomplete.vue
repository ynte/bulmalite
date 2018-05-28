<template>
    <vb-dropdown v-model="dropdown" style="width: 100%" :is-clickable="isClickable" :is-reactive="isReactive" :is-blurable="isBlurable" :items="items">
        <input type="search" class="input" :value="value" @input="$emit('input', $event.target.value)" @keydown.prevent.down="keyDown" @keydown.prevent.up="keyUp" @keydown.prevent.enter="keyEnter">
        <a slot="items" slot-scope="{item}" class="dropdown-item" :class="item === items[cursor] ? 'is-active' : ''" @mousedown="itemClick(item)">
            {{item}}
        </a>
    </vb-dropdown>
</template>

<script src="./autocomplete.ts" lang="ts"></script>
