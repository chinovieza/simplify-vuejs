<template>
    <div class="container">
        <div class="row" v-if="!status">
            <div class="col-2 my-auto mx-auto">
                <i class="fas fa-spinner fa-spin fa-2x"></i>
            </div>
        </div>
        <div class="row" v-else>
            <div class="p-3 text-center col-4 card" v-for="list in users" :key="list.id">
                <div class="card-body">{{ list.name }} | {{ list.email }}</div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            users: null,
            status: null
        };
    },
    watch: {
        users: "showData"
    },
    methods: {
        showData() {
            this.status = false;
            if (this.users) {
                this.status = true;
            }
        }
    },
    created() {
        this.status = false;
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( users => {
            this.users = users.data;
        });
    }
}
</script>
<style>
</style>