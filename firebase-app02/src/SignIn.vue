<template>
    <div>
        <button v-if="!user" @click="googleLoginHandler">Google Login</button>
        <button v-else @click="googleLogoutHandler">Google Logout</button>
    </div>
</template>
<script>
import { auth, googleProvider } from "./database/firebase";
export default {
    name: "SignIn",
    props: ["user"],
    methods: {
        googleLoginHandler() {
            auth
                .signInWithPopup(googleProvider)
                .then( user => {
                    console.log(user);
                })
                .catch( err => {
                    console.error(err);
                });
        },
        googleLogoutHandler() {
            auth
                .signOut()
                .then( () => {
                    console.log("Logout OK");
                })
                .catch( err => {
                    console.log("Logout Not OK." + err);
                });
        }
    }
};
</script>
<style>
</style>