<template>
    <section class="section">
        <h1 class="title">Dropdown</h1>
    </section>
    <section class="section">
        <h2 class="title is-4">Default dropdown</h2>
        <bl-dropdown label="Dropdown button">
            <div class="dropdown-item">
                <p>
                    You can insert <strong>any type of content</strong> within
                    the dropdown menu.
                </p>
            </div>
        </bl-dropdown>
    </section>
    <section class="section">
        <h2 class="title is-4">Dropdown that will blur</h2>
        <bl-dropdown label="Dropdown button" will-blur>
            <div class="dropdown-item">
                <p>
                    You can insert <strong>any type of content</strong> within
                    the dropdown menu.
                </p>
            </div>
        </bl-dropdown>
    </section>
    <section class="section">
        <h2 class="title is-4">Dropdown with v-model</h2>
        <label class="checkbox">
            <input type="checkbox" v-model="model" />
            Dropdown open
        </label>
        <br>
        <br>
        <bl-dropdown label="Dropdown button" v-model="model">
            <div class="dropdown-item">
                <p>
                    You can insert <strong>any type of content</strong> within
                    the dropdown menu.
                </p>
            </div>
        </bl-dropdown>
    </section>
    <section class="section">
        <h2 class="title is-4">Dropdown with custom trigger</h2>
        <bl-dropdown>
            <template #dropdown-trigger>
                <button class="button is-success">Button with state</button>
            </template>
            <div class="dropdown-item">
                <p>
                    You can insert <strong>any type of content</strong> within
                    the dropdown menu.
                </p>
            </div>
        </bl-dropdown>
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
