<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-sm-4">
                <form @submit.prevent="loginFormSubmit">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control is-valid" v-model="username" id="username" name="username" />
                        <div class="valid-feedback">โปรดกรอกชื่อผู้ใช้</div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control is-invalid" v-model="password" id="password" name="password" />
                        <div class="invalid-feedback">รหัสต้องมีความยาวเกินกว่า 6 ตัวอักษร</div>
                    </div>
                    <button type="submit" class="btn btn-primary my-1">Login</button>
                </form>
            </div>
        </div>
        <div class="row mt-3">
            Username:
            <span class="text-info ml-1">{{ username }}</span> 
        </div>
        <div class="row">
            Password:
            <span class="text-warning ml-1">{{ password }}</span>
        </div>
    </div>    
</template>
<script>
export default {
    name: "LoginForm",
    data() {
        return {
            username: null,
            password: null
        };
    },
    methods: {
        loginFormSubmit() {
            console.log(`${this.username} ${this.password}`);
        }
    }
};
</script>
<style>

</style>