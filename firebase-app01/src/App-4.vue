<template>
  <div>
    <form @submit.prevent="submitHandler">
      <div class="input-container">
        <div>
          <label>ชื่อ</label>
        </div>
        <div>
          <input type="text" id="userName" name="userName" v-model="userName" />
        </div>
      </div>
      <div class="input-container">
        <div>
          <label>อายุ</label>
        </div>
        <div>
          <input type="number" id="age" name="age" v-model="age" />
        </div>
      </div>
      <div :style="{marginTop: '5px'}">
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import firestore from './database/firebase'

export default {
  name: 'App',
  data() {
      return {
          userName: null,
          age: null
      }
  },
  methods: {
      addUser(obj) {
          const ref = firestore.collection("users");
          ref
            .add(obj)
            .then(() => {
                console.log("add successfully");
              })
            .catch(err => console.log(err));
      },
      setUser(obj) {
          const ref = firestore.collection("users");
          const id = "myId#" + Math.random(999).toString();
          ref
            .doc(id)
            .set(obj)
            .then(() => {
                console.log("set successfully");
              })
            .catch(err => console.log(err));
      },
      submitHandler() {
          const obj = {
              userName: this.userName,
              age: this.age
          };
          this.age = null;
          this.userName = null;
        //   this.addUser(obj);
          this.setUser(obj);
      }
  }
}
</script>

<style>
</style>
