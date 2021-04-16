<template>
  <div class="container">
    <HelloWorld />
    <div class="row">
      <div class="col-4 mx-auto text-center display-4">
        {{ counterFromStore }}
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    counterFromStore() {
      return this.$store.state.counter
    }
  }
}
</script>

<style>
</style>
