<template>
    <div>
        <form @submit.prevent="submitHandler">
            <div class="input-container">
                <div :style="{'margin':'10px'}">
                    <label :style="{'margin':'0px 5px'}">
                        userName
                    </label>
                    <input type="text" id="userName" name="userName" v-model="userName" autocomplete="off" placeholder="userName"/>
                    <label :style="{'margin':'0px 5px'}">
                        age
                    </label>
                    <input type="number" id="age" name="age" v-model="age" autocomplete="off" placeholder="age"/>
                    <button type="submit" :style="{'margin-left':'5px'}">Add</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "Form",
    data() {
        return {
            userName: null,
            age: null
        };
    },
    methods: {
        submitHandler() {
            const obj = {
                userName: this.userName,
                age: this.age
            };
            if (this.userName != null && this.age != null) {
                this.$emit("add", obj);
                this.age = null;
                this.userName = null;
            }
        }
    }
};
</script>
<style>
</style>