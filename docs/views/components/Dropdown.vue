<template>
    <section class="section">
        <h1 class="title">Dropdown</h1>
        <p class="block">
            An interactive dropdown menu for discoverable content
        </p>
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
                    <td>Label for the dropdown button</td>
                </tr>
                <tr>
                    <td>will-blur</td>
                    <td>Will blur the dropdown when clicked outside</td>
                </tr>
                <tr>
                    <td>dropdown-trigger</td>
                    <td>Custom trigger for the dropdown</td>
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
                    <td>dropdown-trigger</td>
                    <td>Custom trigger for the dropdown</td>
                </tr>
            </tbody>
        </table>
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
        <br />
        <br />
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
