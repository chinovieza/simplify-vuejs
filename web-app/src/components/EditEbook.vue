<template>
    <div class="container">
        <div class="display-4 text-center">Edit Ebook</div>
        <div class="row text-center">
            <div class="col col-sm-6 col-12 mx-auto mt-3">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">{{ data.id }}</div>
                    </div>
                    <div class="card-body">
                        <div class="display-3 text-primary">{{ data.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col col-sm-6 col-12 mx-auto mt-3">
                <button class="btn btn-sm btn-primary m-2" @click="goHome">Home</button>
                <button class="btn btn-sm btn-secondary m-2" @click="goAbout">About</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EditEbook",
    data() {
        return {
            data: this.$route.params.data
        };
    },
    methods: {
        goHome() {
            this.$router.push("/")
        },
        goAbout() {
            this.$router.push({name: "AboutByName"})
        }
    }   
}
</script>
<style>

</style>