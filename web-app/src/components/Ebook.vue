<template>
    <div class="container">
        <div class="text-warning text-center">
            <div class="display-4">{{ ebook.name }}</div>
            <div class="float-right">
                <router-link :to="{name:`editebookname`, params: {data:ebook}}">
                    <i class="fas fa-edit fa-2x"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Ebook",
    data() {
        return {
            ebook: this.ebookObject
        };
    },
    props: ["ebookObject"]
}
</script>
<style>

</style>