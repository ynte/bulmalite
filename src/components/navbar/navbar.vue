<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container" v-if="isContained" :class="isFluid ? 'is-fluid' : ''">
            <div class="navbar-brand">
                <slot name="navbar-brand"></slot>
                <navbar-burger :class="isActive ? 'is-active' : null" @clicked="isActive = !isActive"></navbar-burger>
            </div>
            <div class="navbar-menu" :class="isActive ? 'is-active' : ''">
                <slot></slot>
            </div>
        </div>
        <!-- Unfortunate doubling, might be fixable with custom render function -->
        <template v-else>
            <div class="navbar-brand">
                <slot name="navbar-brand"></slot>
                <navbar-burger :class="isActive ? 'is-active' : null" @clicked="isActive = !isActive"></navbar-burger>
            </div>
            <div class="navbar-menu" :class="isActive ? 'is-active' : ''">
                <slot></slot>
            </div>
        </template>
    </nav>
</template>

<script src="./navbar.js"></script>