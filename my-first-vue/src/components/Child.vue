<template>
    <div class="container">
        <h2 class="display-4">Child Component</h2>
    </div>
</template>
<script>
export default {
    name: "Child",
    data() {
        return {}
    },
    props: ["myProps"],
    created() {
        console.log(
            `created hook => myProps => {id:${this.myProps.id}, name:${this.myProps.name}}`
        )
    }
}
</script>