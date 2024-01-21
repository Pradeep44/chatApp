<template>
    <div>
        <img class="logo" src="../assets/chat-app-logo.avif">
        <h1>Login</h1>
        <div class="login">
            <input type="email" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button 
                v-on:click="login"
                :disabled="isInvalid()"
            >Login</button>
            <p>
                Go to <router-link to="/signup">Sign Up</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
    name: "LogIn",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        isInvalid() {
            if(!this.email || !this.password) return true;
            return false;
        },
        async login() {
            const result = await AuthService.login(
                {
                    email: this.email,
                    password: this.password,
                });

            if(result.status == 200 && result.data) {
                localStorage.setItem("user_info", JSON.stringify(result.data.user));
                this.$router.push({ name: "DashBoard" });
            } else {
                alert(result.data.message);
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

