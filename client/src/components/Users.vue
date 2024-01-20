<template>
<Header/>
    <h1>Users</h1>
    <div class="display">
        <div class="users">
            <tr>
                <th> Name </th>
                <th> Email </th>
                <th> Action</th>
            </tr>
            <tr v-for ="item in users" :key="item.userId">
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>
                    <button @click="showChat(item.userId)">Message</button>
                </td>
            </tr>
        </div>
        <div class='messages' v-if="showPopUp === true">
            <Message
                    v-for='message in messages'
                    :key='message._id'
                    :class='["message", { right: message.isMine }]'
                    :dark='message.isMine'
                    :text='message.text'
                    :time='message.createdAt'
            />
            <ChatBox
                class='chat-box'
                @send='onSubmit'
            />
        </div>
        <div v-else/>
    </div>

</template>

<script>
import ChatBox from './ChatBox.vue';
import Header from './Header.vue';
import Message from './Message.vue';
import AuthService from '@/services/AuthService';

export default {
    name: "Users",
    components: {
        Header,
        ChatBox,
        Message
    },
    data() {
        return {
            showPopUp: false,
            user: null,
            users: [],
            conversation: null,
            messages: [],
            selectedUser: null,
        }
    },
    methods: {
        async getUsers() {
            let user = localStorage.getItem('user_info');
            this.user = JSON.parse(user);

            const result = await AuthService.getUsers(this.user.id);
            const users = result.data.users;
            this.users = users;
        },
        showChat(userId) {
            this.selectedUser = userId;
            this.getChat(this.user?.id, userId);
            this.showPopUp = true;
        },
        async getChat(user1, user2) {
            const result = await AuthService.getConversation(user1, user2);
            const conversationId = result.data.conversation._id;

            const result2 = await AuthService.getMessages(conversationId);
            const chat = result2.data.messages; 
            this.conversation = conversationId;

            this.messages = chat.map(m => ({
                ...m,
                isMine: m.author && m.author === this.user?.id
                }));
        },
         async onSubmit(event, text) {
            event.preventDefault();

            await AuthService.sendMessage({
                userId: this.user?.id,
                conversationId: this.conversation,
                message: text,
            });

            this.getChat(this.user?.id, this.selectedUser);
        }
    },
    created() {
        this.getUsers();
    },
    mounted() {
        let user = localStorage.getItem('user_info');

        if(!user) {
            this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style scoped>
.display {
    display: flex;
}

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

.messages {
  flex-grow: 1;
  overflow: auto;
  padding: 1rem;
  border: 1px solid skyblue;
  margin: 10px;
  max-width: 30%;
}

.message {
  margin: 0.5rem 0rem;
}

.message.right {
  margin-left: auto;
}

</style>