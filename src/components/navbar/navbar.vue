<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container" v-if="isContained" :class="{'is-fluid': isFluid}">
            <div class="navbar-brand">
                <slot name="navbar-brand"></slot>
                <navbar-burger :class="{'is-active': isActive}" @clicked="isActive = !isActive"></navbar-burger>
            </div>
            <div class="navbar-menu" :class="isActive ? 'is-active' : ''">
                <slot></slot>
            </div>
        </div>
        <!-- Unfortunate doubling, might be fixable with custom render function -->
        <template v-else>
            <div class="navbar-brand">
                <slot name="navbar-brand"></slot>
                <navbar-burger :class="{'is-active': isActive}" @clicked="isActive = !isActive"></navbar-burger>
            </div>
            <div class="navbar-menu" :class="isActive ? 'is-active' : ''">
                <slot></slot>
            </div>
        </template>
    </nav>
</template>

<script src="./navbar.js"></script>