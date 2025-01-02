<template>
    <section class="section">
        <h1 class="title">Modal</h1>
        <p class="block">
            A classic modal overlay, in which you can include any content you
            want
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Functionality</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><em>v-model</em></td>
                    <td>Control the active state of the modal</td>
                </tr>
                <tr>
                    <td>has-background-close</td>
                    <td>Close the modal when clicking outside</td>
                </tr>
                <tr>
                    <td>has-modal-close</td>
                    <td>Display a close button on the top right corner</td>
                </tr>
                <tr>
                    <td>is-lazy</td>
                    <td>Only render the modal contents when it is active</td>
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
                    <td>Modal body</td>
                </tr>
            </tbody>
        </table>
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
                <div class="buttons">
                    <button class="button is-success">Save changes</button>
                    <button class="button" @click="modalVisible = false">
                        Cancel
                    </button>
                </div>
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
