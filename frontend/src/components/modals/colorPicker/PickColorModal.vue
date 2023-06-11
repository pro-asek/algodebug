<template>
    <AlgoModal title="Wybierz kolor">
        <v-color-picker v-model="selectedColor" />
        <template #buttons>
            <v-btn color="primary" @click="confirmColor">Zapisz</v-btn>
        </template>
    </AlgoModal>
</template>

<script>
    import AlgoModal from "@/components/global/AlgoModal.vue";
    import { popModal, } from "jenesius-vue-modal";
    import { defineComponent } from "vue";

    export default defineComponent({
        components: { AlgoModal },

        props: {
            color: {
            type: String,
            default: "#000000",
            },
        },
  
        data() {
            return {
            selectedColor: "FF00FF",
            };
        },

        methods: {
            confirmColor() {
                this.$emit("newColor", self.selectedColor);
                popModal();
            },
        },
    });
</script>
