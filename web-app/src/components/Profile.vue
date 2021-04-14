<template>
    <div class="profile">
        <h1 class="display-3">This is an profile page</h1>
        <h1 class="display-4 alert-primary p-2">id: {{id}}</h1>
        <h1 class="display-4 alert-success p-2">has: {{hash}}</h1>
        <button class="btn btn-success" @click="goHome">Go Home</button>
    </div>
</template>
<script>
export default {
    name: "Profile",
    props: ["id", "hash"],
    methods: {
        goHome() {
            this.$router.push({name: "home"})
        }
    }
}
</script>