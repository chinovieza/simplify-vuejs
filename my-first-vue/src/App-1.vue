<template>
    <div class="hello">
        <h1>Onepiece App Component</h1>
        <div id="my-data">ชื่อ {{ name }} อายุ {{ age }}</div>
        <div id="my-data2">{{ getFullName() }}</div>
    </div>
</template>
<script>
export default {
    name: "App",
    data() {
        return {
            name: "Monkey D. Luffy",
            age: 19,
            lastname: "monkey d.",
            firstname: "LUFFY"
        }
    },
    methods: {
        getFirstName() {
            return (
                this.firstname.charAt(0).toUpperCase() + this.firstname.slice(1).toLowerCase()
            )
        },
        getLastName() {
            return (
                this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1).toLowerCase()
            )
        },
        getFullName() {
            return `${this.getLastName()} ${this.getFirstName()}`
        }
    }
}
</script>
<style scoped>
.hello {
    text-align: center;
}
#my-data {
    color: gray;
    font-size: 1.5em;
}
#my-data2 {
    color: brown;
    font-size: 1.5em;
}
</style>