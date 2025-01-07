<template>
    <nav
        class="navbar"
        role="navigation"
        aria-label="main navigation"
        ref="self"
    >
        <div class="container" :class="{ 'is-fluid': isFluid }">
            <div class="navbar-brand">
                <slot name="navbar-brand"></slot>

                <a
                    role="button"
                    class="navbar-burger"
                    :class="{ 'is-active': isActive }"
                    @click="isActive = !isActive"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{ 'is-active': isActive }">
                <slot></slot>
            </div>
        </div></nav
></template>

<script lang="ts" src="./Navbar.ts"></script>
