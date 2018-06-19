<template>
    <transition name="fade">
        <div class="modal is-active" v-show="value">
            <div class="modal-background" v-on="hasBackgroundClose ? {click: close} : {}"></div>
            <slot v-if="!isLazy || value"></slot>
            <div class="modal-close" v-if="hasModalClose" @click="close"></div>
        </div>
    </transition>
</template>

<script src="./modal.js"></script>

<style scoped>
/* Temp solution */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
