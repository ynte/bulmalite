<template>
    <div id="dropdown-vue">
        <h1 class="title">Dropdown</h1>
        <h2 class="subtitle">An interactive dropdown menu for discoverable content</h2>
        <hr />
        <h3 class="title">Controlling dropdown state</h3>
        <p class="content">You can control the state of the dropdown using v-model.</p>
        <div class="field">
            <label class="checkbox">
                <input type="checkbox" v-model="dropdownState"/>
                Remember me
            </label>
        </div>
        <bl-dropdown v-model="dropdownState">
            <button class="button">Dropdown button</button>
            <template #content>
                <a href="#" class="dropdown-item">Dropdown item</a>
                <a class="dropdown-item">Other dropdown item</a>
                <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                <a href="#" class="dropdown-item">Other dropdown item</a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">With a divider</a>
            </template>
        </bl-dropdown>
        <hr />
        <h3 class="title">React to click events</h3>
        <p class="content">Use the "is-clickable" prop to make the dropdown react to click events.</p>
        <bl-dropdown is-clickable v-model="clickableDropdownState">
            <button class="button">Dropdown button</button>
            <template #content>
                <a href="#" class="dropdown-item" @click.prevent="clickableDropdownState = false">Close dropdown again</a>
            </template>
        </bl-dropdown>
        <hr />
        <h3 class="title">Toggle dropdown state</h3>
        <p class="content">Use the "is-toggle" prop to turn the dropdown trigger into an toggle.</p>
        <bl-dropdown is-clickable is-toggle>
            <button class="button">Dropdown button</button>
            <template #content>
                <a href="#" class="dropdown-item">Dropdown item</a>
                <a class="dropdown-item">Other dropdown item</a>
                <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                <a href="#" class="dropdown-item">Other dropdown item</a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">With a divider</a>
            </template>
        </bl-dropdown>
        <hr />
        <h3 class="title">Automatically close the dropdown</h3>
        <p class="content">Use the "will-blur" prop to close the dropdown when the user interacts with another part of the page.</p>
        <bl-dropdown is-clickable is-toggle will-blur>
            <button class="button">Dropdown button</button>
            <template #content>
                <a href="#" class="dropdown-item">Dropdown item</a>
                <a class="dropdown-item">Other dropdown item</a>
                <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                <a href="#" class="dropdown-item">Other dropdown item</a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">With a divider</a>
            </template>
        </bl-dropdown>
    </div>
</template>

<script src="./dropdown.ts" lang="ts"></script>