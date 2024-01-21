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
        let user = localStorage.getItem('user_info');
        if(!user) {
            this.$router.push({ name: "Login" });
        }
    }
}
</script>
