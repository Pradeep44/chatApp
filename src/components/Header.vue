<template>
    <div class="nav">
        <a href="#">Dashboard</a>
        <a href="#">Users</a>
        <a href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: "Header"
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