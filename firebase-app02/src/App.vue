<template>
  <div>
    <SignIn :user="user" />
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
