<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-4 mx-auto text-center">
        <button class="btn btn-primary mr-2" @click="minus">Minus</button>
        <button class="btn btn-warning mr-2" @click="plus">Plus</button>
        <button class="btn btn-secondary mr-2" @click="plusSync(2)">Plus 2</button>
        <button class="btn btn-danger mr-2" @click="plusAsync(3)">Plus 3</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  methods: {
    plus() {
      this.$store.commit("increment")
    },
    minus() {
      this.$store.commit("decrement")
    },
    plusSync(num) {
      this.$store.commit("incrementPlus", num)
    },
    plusAsync(num) {
      this.$store.dispatch("incrementAsync", num)
    }
  }
}
</script>
<style>
</style>