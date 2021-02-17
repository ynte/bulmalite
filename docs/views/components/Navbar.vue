<template>
    <section class="section">
        <h1 class="title">Navbar</h1>
    </section>
    <section class="section">
        <h2 class="title is-4">Standard Navbar</h2>
        <bl-navbar
            class="navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <template #navbar-brand>
                <a class="navbar-item" href="https://bulma.io">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                    />
                </a>
            </template>

            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </bl-navbar>
    </section>
    <section class="section">
        <h2 class="title is-4">Control with v-model</h2>
        <label class="checkbox">
            <input type="checkbox" v-model="model" />
            Navbar is active
        </label>
        <br />
        <br />
        <bl-navbar
            v-model="model"
            class="navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <template #navbar-brand>
                <a class="navbar-item" href="https://bulma.io">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                    />
                </a>
            </template>

            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </bl-navbar>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const model = ref(false);

        return {
            model,
        };
    },
});
</script>
