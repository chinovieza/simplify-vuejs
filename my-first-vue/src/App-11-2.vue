<template>
    <div class="container">
        <Child :myProps="parentObject" />
    </div>
</template>
<script>
import Child from "@/components/Child"
export default {
    name: "App",
    components: {
        Child
    },
    data() {
        return {
            parentObject: { id:1, name:"Monkey D. Luffy" }
        }
    }
}
</script>
<style>
</style>