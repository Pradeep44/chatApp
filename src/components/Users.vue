<template>
<Header/>
    <h1>Users</h1>
    <div class="users">
        <tr>
            <th> Name </th>
            <th> Email </th>
            <th> Action</th>
        </tr>
        <tr v-for ="item in users" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>
                <button>Message</button>
            </td>
        </tr>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: "Users",
    components: {
        Header,
    },
    data() {
        return {
            showPopUp: false,
            users: [
                {
                id: 1,
                email: 'user1@gmail.com',
                name: 'User 1',
                },
                {
                id: 2,
                email: 'user2@gmail.com',
                name: 'User 2',
                },
                {
                id: 3,
                email: 'user3@gmail.com',
                name: 'User 3',
                }
            ],
        }
    }
}
</script>

<style>
.users tr{
    width: 80px;
    padding: 10px;
}
.users td{
    width: 80px;
    padding: 10px;
}
.users button{
        width: 80px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color: #fff;
}
</style>