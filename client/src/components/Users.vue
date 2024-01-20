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
            <tr v-for ="item in users" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>
                    <button @click="showChat(item.uid)">Message</button>
                </td>
            </tr>
        </div>
        <div class='messages' v-if="showPopUp === true">
            <Message
                    v-for='message in messages'
                    :key='message.id'
                    :class='["message", { right: message.isMine }]'
                    :dark='message.isMine'
                    :text='message.text'
                    :author='message.author'
            />
            <ChatBox
                class='chat-box'
                @submit='onSubmit'
            />
        </div>
        <div v-else/>
    </div>

</template>

<script>
import ChatBox from './ChatBox.vue';
import Header from './Header.vue';
import Message from './Message.vue';

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
            user: {
                id: 1
            },
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
            messages: []
        }
    },
    methods: {
        showChat(userId) {
            console.log(userId);
            this.getChat();
            this.showPopUp = true;
        },
        getChat() {
            // listenChat((chat) => {//fetch messages from backend
            const chat = [
                {
                id:1,
                text: 'hi',
                uid: 1,
                author: 'User 1'
                },
                {
                id:2,
                text: 'hi',
                uid: 2,
                author: 'User 2'
                },
                {
                id:3,
                text: 'how are you',
                uid: 1,
                author: 'User 1'
                },
                {
                id:4,
                text: 'I m good what abt u??',
                uid: 2,
                author: 'User 2'
                },
            ];
                this.messages = chat.map(m => ({
                ...m,
                isMine: m.uid && m.uid === this.user?.id
                }));
            // });
        },
        onSubmit(event, text) {
            event.preventDefault();
            
            console.log('Message sent', text);
            // sendMessage({//send messages to backend
            //     text,
            //     uid: this.user?.id,
            //     author: this.user?.name
            // });
            // this.getChat();
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