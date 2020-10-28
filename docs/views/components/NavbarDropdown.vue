<template>
    <section class="section">
        <h1 class="title">Navbar Dropdown</h1>
    </section>
    <section class="section">
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
                    <a class="navbar-item">
                        Normal navbar item
                    </a>
                    <bl-navbar-dropdown label="Navbar dropdown">
                        <a class="navbar-item">
                            Overview
                        </a>
                        <a class="navbar-item">
                            Elements
                        </a>
                        <a class="navbar-item">
                            Components
                        </a>
                        <hr class="navbar-divider" />
                        <div class="navbar-item">
                            Version 0.9.1
                        </div>
                    </bl-navbar-dropdown>
                    <bl-navbar-dropdown label="Blurrable dropdown" will-blur>
                        <a class="navbar-item">
                            Overview
                        </a>
                        <a class="navbar-item">
                            Elements
                        </a>
                        <a class="navbar-item">
                            Components
                        </a>
                        <hr class="navbar-divider" />
                        <div class="navbar-item">
                            Version 0.9.1
                        </div>
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
