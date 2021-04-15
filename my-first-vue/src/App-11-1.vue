<template>
    <div class="container">
        <h1 class="display-4">Lifecycle Hook</h1>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            myPropery: null
        }
    },
    methods: {
        myMethod() {
            console.log("About the world!!!")
        }
    },
    mounted() {
        console.log("3. Component have been mounted")
    },
    created() {
        console.log("1. Data have been created")
    },
    beforeMount() {
        console.log("2. Before component mount to the DOM")
    }
}
</script>