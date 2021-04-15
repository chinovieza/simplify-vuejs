<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 mt-3" v-for="user in lists" :key="user.id">
            <div class="card">
                <div class="card-header">{{ user.name }}</div>
                <div class="card-body">
                    <div class="card-text">
                        <div class="pl-3">
                            <dt>Email</dt>
                            <dl>{{ user.email }}</dl>
                            <dt>Phone</dt>
                            <dl>{{ user.phone }}</dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";

export default {
    name: "Users",
    data() {
        return {
            lists: []
        };
    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            this.lists = res.data;
            this.dataComplete();
        });
    },
    methods: {
        dataComplete() {
            this.$emit("dataOK", true);
        }
    }
}
</script>
<style>
</style>