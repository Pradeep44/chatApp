<template>
    <div>
        <img class="logo" src="../assets/chat-app-logo.avif">
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="email" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button
                v-on:click="signUp"
                :disabled="isInvalid()"
            >Sign Up</button>
            <p>
                Already registered? <router-link to="/login">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService';

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
        isInvalid() {
            if(!this.name || !this.email || !this.password) return true;
            return false;
        },
        async signUp() {
            const result = await AuthService.register(
                {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
            
            if(result.status == 201 && result.data) {
                localStorage.setItem("token", result.data.token);
                this.$router.push({ name: "DashBoard" });
            } else {
                alert(result.data.message);
            }
        }
    },
    mounted() {
        let token = localStorage.getItem('token');
        if(token) {
            this.$router.push({ name: "DashBoard" });
        }
    }
}
</script>

<style>
</style>