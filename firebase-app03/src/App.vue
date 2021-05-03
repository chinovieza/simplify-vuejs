<template>
  <div class="container-fluid">
    <div class="row" v-if="loading">
      <Loading />
    </div>
    <div class="row mt-1" v-else-if="user">
      <div class="col-sm-10 mx-auto text-center">
        <div class="display-4 mt-3">สวัสดี : {{ user.displayName }}</div>
        <div v-show="imgLoading" class="mt-5 spinner-border text-primary text-center p-3" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <img v-show="!imgLoading" class="rounded float-center mt-2 border rounded" :src="user.photoURL" alt="user" width="200px" :style="{ maxHeight: 200 + 'px' }" @load="imageLoaded" />
      </div>
    </div>
    <div class="row mt-1" v-if="user">
      <div class="col-sm-10 mx-auto text-center">
        <hr />
        <button class="btn btn-info" @click="signOutHandler">Logout</button>
      </div>
    </div>
    <div class="row mt-1" v-else>
      <LoginForm />
    </div>
  </div>
</template>

<script>

import { auth, firestore } from "./database/firebase";
import LoginForm from "./LoginForm";
import Loading from "./Loading";
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "App",
  data() {
    return {
      user: null,
      loading: false,
      imgLoading: true,
      authUnsubscribe: null
    };
  },
  components: {
    Loading,
    LoginForm
  },
  methods: {
    signOutHandler() {
      auth
        .signOut()
        .then(() => {
          console.log("Logout OK");
        })
        .catch(err => {
          console.log("Logout Not OK." + err);
        });
    },
    setUserData(uid) {
      firestore
        .collection("users")
        .doc(uid)
        .onSnapshot(doc => {
          if (doc.exists) {
            const userObj = {
              uid: doc.id,
              displayName: doc.data().displayName,
              email: doc.data().email,
              photoURL: doc.data().photoURL
            };
            this.user = userObj;
            this.$nextTick;
          }
        });
    },
    imageLoaded() {
      this.imgLoading = false;
    }
  },
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(
      user => {
        if (user) {
          this.setUserData(user.id)
        } else {
          this.user = null;
        }
      },
      err => {
        console.log(err);
      }
    );
  },
  beforeDestroy() {
    this.authUnsubscribe();
  }
};
</script>

<style>
</style>