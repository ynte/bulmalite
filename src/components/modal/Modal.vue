<template>
    <div class="modal is-active" v-show="modelValue">
        <div class="modal-background" @click="backgroundClicked"></div>
        <slot v-if="!isLazy || modelValue"></slot>
        <button
            v-if="hasModalClose"
            class="modal-close is-large"
            aria-label="close"
            @click="close"
        ></button>
    </div>
</template>

<script lang="ts" src="./Modal.ts" />
