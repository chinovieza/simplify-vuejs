<template>
  <div class="container mt-4">
    <form
      class="d-flex justify-content-center align-items-center"
      @submit.prevent
      >
      <div :style="{ display: 'block', position: 'relative' }">
        <input
          type="file"
          class="custom-file-input"
          id="customFile"
          @change="onFileChange"
          />
        <label class="custom-file-label" for="customFile">
          <div v-if="!file">Select Photo</div>
          <div v-else>{{ file.name }}</div>
        </label>
      </div>
      <div class="ml-3">
        <button
          type="submit"
          @click="uploadHandler"
          class="btn btn-success"
          >Upload</button>
      </div>
    </form>
    <div class="text-center mt-4" v-if="link">
      <hr/>
      <a class="text-secondary" :href="link">Click File {{file.name}}</a>
    </div>
  </div>
</template>
<script>

import { storage } from "./database/firebase";
import "bootstrap/dist/css/bootstrap.css";

const subBucketRef = storage.child("simplify/vue");

export default {
  name: "App",
  data() {
    return {
      file: "",
      link: ""
    };
  },
  methods: {
    uploadHandler() {
      if (this.file) {
        const fileName = this.file.name;
        const targetRef = subBucketRef.child(fileName);
        targetRef.put(this.file).then(response => {
          console.log(response);
          response.ref.getDownloadURL().then(photoURL => {
            this.link = photoURL;
          });
        });
      } else {
        console.log("no file upload!!");
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = file;
      this.link = "";
    }
  }
};
</script>
<style>
</style>