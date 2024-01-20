<template>
    <div class="nav">
        <a @click="$router.push('/')" href="#">Dashboard</a>
        <a @click="$router.push('/users')" href="#">Users</a>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "LogIn" });
        }
    }
}
</script>

<style>
    .nav {
        background-color: skyblue;
        overflow: hidden;
    }

    .nav a {
       float: left;
       color: black;
       padding: 14px 16px;
       text-align: center;
       font-size: 17px;
       text-decoration: none;
    }

    .nav a:hover {
        background: #ddd;
    }
</style>