<template>
    <vb-dropdown v-model="dropdown" style="width: 100%" :is-clickable="isClickable" :is-reactive="isReactive" :is-blurable="isBlurable" :items="items">
        <div class="control" :class="{'has-icons-left': icon}">
            <input type="search" class="input" :value="value" @input="$emit('input', $event.target.value)" @keydown="keyDown">
            <span class="icon is-left" v-if="icon">
                <span :class="icon"></span>
            </span>
        </div>
        <a slot="items" slot-scope="{item}" class="dropdown-item" :class="{'is-active': item === items[cursor]}" @mousedown="itemClick(item)">
            {{item}}
        </a>
    </vb-dropdown>
</template>

<script src="./autocomplete.js"></script>
