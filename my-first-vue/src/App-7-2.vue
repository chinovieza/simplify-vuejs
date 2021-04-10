<template>
    <div class="primary">
        <button class="btn btn-secondary" @click="randomNumber">Random</button>
        <span class="ml-2 mr-2">สุ่มได้ {{ stockRandom }}</span>
        <hr/>
        <button
            v-bind:class="{
                'btn btn-primary':stockStatus, 
                'btn btn-danger':!stockStatus 
                }"
            :disabled="!stockStatus"
            @click="showAlert"
        >
            {{ cartButtonText }}
        </button>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            stockRandom: null
        };
    },
    computed: {
        cartButtonText() {
            return this.stockStatus ? "Add to Cart" : "Out of Stock";
        },
        stockStatus() {
            return Math.round(this.stockRandom) == 0 ? false : true;
        }
    },
    methods: {
        randomNumber() {
            this.stockRandom = Math.random().toFixed(2);
        },
        showAlert() {
            alert("Add to Cart Successfully");
        }
    }
}
</script>
<style>
</style>