<template>
    <div class="dropdown" :class="rootClasses" ref="self">
        <div class="dropdown-trigger" aria-haspopup="true" :aria-controls="'dropdown-menu-' + _uid" @click="triggerClick">
            <slot></slot>
        </div>
        <div class="dropdown-menu" :id="'dropdown-menu-' + _uid" role="menu">
            <div class="dropdown-content" @click="contentClick">
                <template v-for="(item, index) in items">
                    <slot name="items" :item="item" :index="index"><a class="dropdown-item" :key="index">{{item}}</a></slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script src="./dropdown.js"></script>
