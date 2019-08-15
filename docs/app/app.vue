<template>
    <div id="app">
        <bl-navbar class="is-primary" is-contained is-fluid>
            <template #navbar-brand>
                <div class="navbar-item">Bulmalite documentation</div>
            </template>
        </bl-navbar>
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-2">
                    <section class="section">
                        <sidebar />
                    </section>
                </div>
                <div class="column">
                    <section class="section">
                        <router-view></router-view>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./app.ts" lang="ts"></script>