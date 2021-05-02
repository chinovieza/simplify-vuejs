<template>
  <div>
    <SignIn :user="user" />
    <div v-if="user">
      <hr/>
      <div style="{margin:10+'px'}">
        <div>uid : {{user.uid}} </div>
        <div>name: {{user.displayName}} </div>
        <div>email: {{user.email}} </div>
      </div>
      <div>
        <img :src="user.photoURL" alt="user" width="80" height="80" />
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "./database/firebase";
import SignIn from "./SignIn";

export default {
  name: 'App',
  components: {
    SignIn
  },
  data() {
    return {
      user: null,
      authUnsubscribe: null
    }
  },
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged( user => {
      this.user = user;
    },
    err => {
      console.log(err);
    });
  },
  beforeDestroy() {
    this.authUnsubscribe();
  }
}
</script>

<style>
</style>
