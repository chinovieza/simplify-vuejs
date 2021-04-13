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
                <a class="nav-link" href="/books">All Books</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/addebook">Add New</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About a</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About to</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: `AboutByName`}">About :to</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
}
</script>
<style>
a.router-link-exact-active {
  background-color: lightblue;
}
</style>
