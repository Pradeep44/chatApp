<template>
    <div>
        <Header/>
        <h1>Dashboard</h1>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name:"DashBoard",
    components:{
        Header,
    },
    mounted() {
        let token = localStorage.getItem('token');
        if(!token) {
            this.$router.push({ name: "LogIn" });
        }
    }
}
</script>
