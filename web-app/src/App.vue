<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/books">All Books</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/addebook">Add New</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: `AboutByName`}">About</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <button class="btn btn-sm btn-danger m-2" @click="goBack">Back</button>
        <button class="btn btn-sm btn-warning m-2" @click="goHome">Home</button>
        <button class="btn btn-sm btn-primary m-2" @click="goAbout">About</button>
        <button class="btn btn-sm btn-secondary m-2" @click="goNext">Next</button>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    goHome() {
      this.$router.push({name:"home"})
    },
    goAbout() {
      this.$router.push("/about")
    },
    goBack() {
      this.$router.go(-1)
    },
    goNext() {
      this.$router.go(1)
    }
  }
}
</script>
<style>
a.router-link-exact-active {
  background-color: lightblue;
}
</style>
