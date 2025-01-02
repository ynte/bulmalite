<template>
    <bl-navbar class="is-primary">
        <template v-slot:navbar-brand>
            <div class="navbar-item">Bulmalite docs</div>
        </template>
    </bl-navbar>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-narrow">
                    <section class="section">
                        <aside-menu />
                    </section>
                </div>
                <div class="column">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="container">
            Examples partly from the official bulma documentation. License CC
            BY-NC-SA 4.0
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AsideMenu from './components/AsideMenu.vue';

export default defineComponent({
    components: { AsideMenu },
});
</script>
