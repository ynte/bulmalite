<template>
    <div class="dropdown" :class="rootClasses" ref="self">
        <div class="dropdown-trigger" aria-haspopup="true" :aria-controls="'dropdown-menu-' + _uid" @click="triggerClick">
            <slot></slot>
        </div>
        <div class="dropdown-menu" :id="'dropdown-menu-' + _uid" role="menu">
            <!-- <slot name="content" class="dropdown-content"></slot> -->
            <div class="dropdown-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script src="./dropdown.js"></script>
