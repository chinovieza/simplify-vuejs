<template>
    <div>
        <button v-if="!user" @click="googleLoginHandler">Google Login</button>
        <button v-else @click="googleLogoutHandler">Google Logout</button>
    </div>
</template>
<script>
import { firestore, auth, googleProvider } from "./database/firebase";
export default {
    name: "SignIn",
    props: ["user"],
    methods: {
        // googleLoginHandler() {
        //     auth
        //         .signInWithPopup(googleProvider)
        //         .then( user => {
        //             console.log(user);
        //         })
        //         .catch( err => {
        //             console.error(err);
        //         });
        // },
        async googleLoginHandler() {
            try {

                const result = await auth.signInWithPopup(googleProvider);

                if (result) {
                    const userRef = firestore.collection("users").doc(result.user.uid);
                    userRef.get().then( doc => {
                        if (!doc.data()) {
                            userRef.set({
                                uid: result.user.uid,
                                displayName:  result.user.displayName,
                                photoURL: result.user.photoURL,
                                email: result.user.email,
                                created: new Date().valueOf(),
                                role: "user"
                            });
                            console.log("Store new user to the firestore success");
                        } else {
                            console.log("Existing user, there not save to firestore");
                        }
                    });
                }

            } catch (err) {
                console.log(err);
            }
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