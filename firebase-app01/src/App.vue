<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App with Firestore"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import firestore from './database/firebase'

const studentRef = firestore.collection("students");

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    studentRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data()) {
          console.log(doc.id);
          console.log(doc.data().name);
          console.log(doc.data().age);
        }
      });
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
