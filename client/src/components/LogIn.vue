<template>
    <img class="logo" src="../assets/chat-app-logo.avif">
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Login</button>
        <p>
            Go to <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: "LogIn",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            const result = {
                data:{
                    email: this.email,
                    password: this.password,
                },
                status: 200,
            }

            if(result.status == 200 && result.data) {
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

