<template>
    <section class="section">
        <h1 class="title">Navbar Dropdown</h1>
        <p class="block">An interactive dropdown menu for use in a navbar</p>
        <table class="table block">
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Functionality</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><em>v-model</em></td>
                    <td>Control the active state of the dropdown</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>Label for the dropdown menu item</td>
                </tr>
                <tr>
                    <td>will-blur</td>
                    <td>Will blur the dropdown when clicked outside</td>
                </tr>
                <tr>
                    <td>is-right</td>
                    <td>Position the dropdown to start from the right</td>
                </tr>
            </tbody>
        </table>
        <table class="table block">
            <thead>
                <tr>
                    <th>Slot</th>
                    <th>Functionality</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><em>default</em></td>
                    <td>Dropdown content</td>
                </tr>
                <tr>
                    <td>navbar-link</td>
                    <td>Custom .navbar-link content</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section class="section">
        <h2 class="title is-4">Navbar with dropdowns</h2>
        <bl-navbar
            class="navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <div
                    class="navbar-item has-text-weight-bold"
                    href="https://bulma.io"
                >
                    Example menu
                </div>

                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item"> Normal navbar item </a>
                    <bl-navbar-dropdown label="Navbar dropdown">
                        <a class="navbar-item"> Overview </a>
                        <a class="navbar-item"> Elements </a>
                        <a class="navbar-item"> Components </a>
                        <hr class="navbar-divider" />
                        <div class="navbar-item">Version 0.9.1</div>
                    </bl-navbar-dropdown>
                    <bl-navbar-dropdown label="Blurrable dropdown" will-blur>
                        <a class="navbar-item"> Overview </a>
                        <a class="navbar-item"> Elements </a>
                        <a class="navbar-item"> Components </a>
                        <hr class="navbar-divider" />
                        <div class="navbar-item">Version 0.9.1</div>
                    </bl-navbar-dropdown>
                </div>
            </div>
        </bl-navbar>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
