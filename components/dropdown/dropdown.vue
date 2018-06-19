<template>
    <div class="dropdown" :class="isActive ? 'is-active' : ''">
        <div class="dropdown-trigger" aria-haspopup="true" :aria-controls="'dropdown-menu-' + _uid" @click="triggerClick" @blur.capture="triggerBlur">
            <slot></slot>
        </div>
        <div class="dropdown-menu" :id="'dropdown-menu-' + _uid" role="menu">
            <div class="dropdown-content" @click="contentClick">
                <template v-for="(item, index) in items">
                    <slot name="items" :item="item" :index="index"><a class="dropdown-item">{{item}}</a></slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script src="./dropdown.ts" lang="ts"></script>
