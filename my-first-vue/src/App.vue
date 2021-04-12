<template>
    <div class="container text-center">
        <div class="display-4 text-warning">{{ myProperty }}</div>
        <div class="text-danger mt-3 lead">{{ myProperty2 }}</div>
        <div class="display-4 text-center mt-3">{{ message }}</div>
        <hr />
        <div class="display-4">{{ myProperty | uppercase }}</div>
        <div class="text-secondary lead">{{ myProperty2 | readmore }}</div>
        <h2 class="text-secondary">{{ myDateProperty }}</h2>
        <h2 class="text-primary">{{ myDateProperty | date }}</h2>
        <h2 class="text-success">{{ myDateProperty | date("thai") }}</h2>
        <div class="display-4 text-center mt-3">{{ message | messageLowercase }}</div>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            myProperty: "Demon Slayer: Kimetsu no Yaiba",
            myProperty2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis fuga officia temporibus eveniet vitae id fugiat mollitia, autem soluta corporis magni odio cupiditate. Illo aperiam repellendus eos doloribus ducimus!",
            myDateProperty: new Date(),
            message: "Demon Slayer: Kimetsu no Yaiba"
        }
    },
    filters: {
        messageLowercase(value) {
            if (typeof value != "string") {
                return value;
            }
            return value.toLowerCase();
        }
    }
}
</script>
<style>
</style>