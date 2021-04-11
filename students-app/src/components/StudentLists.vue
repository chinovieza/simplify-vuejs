<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-3 col-sm-6 mt-3" v-for="item in lists" :key="item.id">
                <Student :studentData="item" @deleteStudent="callEmitDelStudent" />
            </div>
        </div>
    </div>
</template>
<script>
import Student from './Student.vue';
export default {
    name: "StudentLists",
    components: { 
        Student 
    },
    props: {
        lists: Array
    },
    methods: {
        callEmitDelStudent(id) {
            this.$emit("customEventDel", id);
        }
    }
}
</script>
<style>
</style>
