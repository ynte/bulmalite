<template>
    <div
        class="navbar-item has-dropdown"
        :class="{ 'is-active': isActive }"
        ref="self"
    >
        <a class="navbar-link" @click="isActive = !isActive">
            <slot name="navbar-link">
                {{ label }}
            </slot>
        </a>

        <div class="navbar-dropdown" :class="{ 'is-right': isRight }">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" src="./NavbarDropdown.ts"></script>
