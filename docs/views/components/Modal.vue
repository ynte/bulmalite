<template>
    <section class="section">
        <h1 class="title">Modal</h1>
    </section>
    <section class="section">
        <button class="button" @click="modalVisible = true">Open modal</button>
    </section>
    <bl-modal v-model="modalVisible" has-background-close has-modal-close>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button
                    class="delete"
                    aria-label="close"
                    @click="modalVisible = false"
                ></button>
            </header>
            <section class="modal-card-body">
                <h1 class="title">Hello world</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla accumsan, metus ultrices eleifend gravida, nulla nunc
                    varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate
                    semper dui. Fusce erat odio, sollicitudin vel erat vel,
                    interdum mattis neque.
                </p>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button" @click="modalVisible = false">
                    Cancel
                </button>
            </footer>
        </div>
    </bl-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const modalVisible = ref(false);

        return {
            close,
            modalVisible,
        };
    },
});
</script>
