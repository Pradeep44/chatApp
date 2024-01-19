<template>
    <h1>Dashboard</h1>
</template>

<script>

export default {
    name:"DashBoard",
    mounted() {
        let user = localStorage.getItem('user_info');
        if(!user) {
            this.$router.push({ name: "SignUp" });
        }
    }
}
</script>
