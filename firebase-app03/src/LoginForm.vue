<template>
    <div class="container">
        <div class="row" v-if="loading">
            <Loading />
        </div>
        <div class="row" v-if="message">
            <div class="col-sm-6 mx-auto text-center">
                <div class="alert-warning p-2"> {{ message }} </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 mx-auto text-center">
                <h3 v-if="registerMode">Register</h3>
                <h3 v-else>Login</h3>
            </div>
        </div>
        <div class="row">
            <form class="col-sm-6 mx-auto" @submit.prevent>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" :class="{'form-control is-invalid': errorType === 'email', 'form-control': errorType !== 'email',}" name="email" v-model="email" />
                    <div class="invalid-feedback"></div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" :class="{'form-control is-invalid': errorType === 'password', 'form-control': errorType !== 'password',}" name="password" v-model="password" />
                    <div class="invalid-feedback"></div>
                </div>
                <div class="row card-footer flex-collumn-reverse flex-sm-row">
                    <div class="col-sm-6">
                        <button class="btn btn-secondary mt-1" @click="clearForm" :style="{ width:'100%'}">Clear</button>
                    </div>
                    <div class="col-sm-6" v-if="!registerMode">
                        <button class="btn btn-primary mt-1" @click="onEmailLogin" :style="{ width:'100%'}">Login</button>
                    </div>
                    <div class="col-sm-6" v-else>
                        <button type="submit" class="btn btn-success mt-1" @click="onEmailSignUp" :style="{ width:'100%'}">Register {{ errorType }}</button>
                    </div>
                </div>
                <div class="form-check form-check-inline d-flex justify-content-center">
                    <div class="col-12 text-center">
                        <input class="form-check-input" type="checkbox" id="mode" v-model="registerMode" @change="changeModeHandler" />
                        <label class="form-check-label" for="inlineCheckbox1">ยังไม่ได้ลงทะเบียน ต้องการลงทะเบียน</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { auth, firestore } from "./database/firebase";
import Loading from "./Loading";

export default {
    name: "LoginForm",
    components: {
        Loading
    },
    data() {
        return {
            email: "",
            password: "",
            message: "",
            registerMode: false,
            loading: false
        };
    },
    computed: {
        errorType() {
            if (this.message.lastIndexOf("email") != -1) {
                return "email";
            } else if (this.message.lastIndexOf("password") != -1) {
                return "password";
            } else {
                return "";
            }
        }
    },
    methods: {
        onEmailLogin() {
            this.loading = true;
            auth
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.loading = false;
                })
                .catch(err => {
                    this.message = err.code;
                    this.loading = false;
                });
        },
        onEmailSignUp() {
            this.loading = true;
            auth
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(async restult => {
                    this.message = "ลงทะเบียนเรียบร้อย";
                    if (restult != null) {
                        const userRef = firestore.collection("users").doc(restult.user.uid);
                        const doc = await userRef.get();
                        if (!doc.data()) {
                            await userRef.set({
                                uid: restult.user.uid,
                                displayName: restult.user.email.substring(0,this.email.lastIndexOf("@")),
                                photoURL: restult.user.photoURL ? restult.user.photoURL : require("./assets/logo.png"),
                                email: restult.user.email,
                                created: new Date().valueOf(),
                                role: "user"
                            });
                        }
                    }
                    this.clearForm();
                    this.loading = false;
                })
                .catch(err => {
                    this.message = err.code;
                    this.loading = false;
                });
        },
        changeModeHandler(e) {
            this.registerMode = e.target.checked;
            this.clearForm();
        },
        clearForm() {
            this.email = "";
            this.password = "";
            this.message = "";
        }
    }
};
</script>
<style>
</style>