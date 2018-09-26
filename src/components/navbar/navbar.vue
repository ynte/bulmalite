<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <slot name="navbar-brand"></slot>
            <a role="button" class="navbar-burger" :class="isActive ? 'is-active' : ''" aria-label="menu" aria-expanded="false" @click="burger">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" :class="isActive ? 'is-active' : ''">
            <slot></slot>
        </div>
    </nav>
</template>

<script src="./navbar.js"></script>