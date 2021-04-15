<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4 text-center mt-3 mb-3">Users</h1>
                <div class="border-top my-3"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 mx-auto">
                <div class="text-center" v-if="!userStatus">
                    <i id="spinner" class="fas fa-spinner fa-3x fa-pulse"></i>
                </div>
            </div>
        </div>
        <Users @dataOK="setUserStatus" />
    </div>
</template>
<script>

import Users from "@/components/Users";

export default {
    name: "App",
    components: {
        Users
    },
    data() {
        return {
            userStatus: false
        };
    },
    methods: {
        setUserStatus(param) {
            this.userStatus = param;
        }
    }
};
</script>
<style>
#spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    color: rgb(125, 125, 125);
}
</style>