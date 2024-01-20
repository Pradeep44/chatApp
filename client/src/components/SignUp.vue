<template>
    <img class="logo" src="../assets/chat-app-logo.avif">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            Already registered? <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async signUp() {
            const result = {
                data:{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                },
                status: 201,
            }
            if(result.status == 201) {
                localStorage.setItem("user_info", JSON.stringify(result.data));
                this.$router.push({ name: "DashBoard" });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user_info');
        if(user) {
            this.$router.push({ name: "DashBoard" });
        }
    }
}
</script>

<style>
</style>