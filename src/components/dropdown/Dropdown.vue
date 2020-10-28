<template>
    <div class="dropdown" :class="{'is-active': isActive}" ref="self">
        <div class="dropdown-trigger" @click="isActive = !isActive">
            <slot name="dropdown-trigger">
                <button class="button dropdown-trigger-button">
                    {{ label }}
                </button>
            </slot>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
               <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Dropdown.ts"></script>
