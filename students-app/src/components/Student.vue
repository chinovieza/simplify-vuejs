<template>
    <div class="card">
        <div class="card-header">
            <div class="float-start">id: {{ studentData.id }}</div>
            <button class="float-end btn btn-sm btn-danger" @click="delStudent(studentData.id)">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="card-body">
            <dl class="row">
                <dt class="col-lg-7 col-sm-8">
                    ชื่อ: {{ studentData.name }}
                </dt>
                <dd class="col-lg-5 col-sm-4">
                    อายุ: {{ studentData.age }}
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name: "Student",
    data() {
        return {};
    },
    props: ["studentData"],
    methods: {
        delStudent(id) {
            this.$emit("deleteStudent", id);
        }
    }
}
</script>
<style>
</style>
