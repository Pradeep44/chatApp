import Api from './Api';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
export default {
    register(credentials) {
        return Api().post(
            'signup',
            credentials,
            headers
        ).then(response => {
            return response;
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: err.response.status,
            };
        }) 
    },

    login(credentials) {
        return Api().post(
            'login',
            credentials,
            headers
        ).then(response => {
            return response;
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: err.response.status,
            };
        }) 
    },

    getUsers(credentials) {
        return Api().get(
            `users?userId=${credentials}`,
            headers,
        ).then(response => {
            return response;
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: err.response.status,
            };
        }) 
    },

    getConversation(user1, user2) {
        return Api().get(
            `conversation?user1=${user1}&&user2=${user2}`,
            headers,
        ).then(response => {
            return response;
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: err.response.status,
            };
        }) 
    },

    getMessages(conversationId) {
        return Api().get(
            `messages?conversation=${conversationId}`,
            headers,
        ).then(response => {
            return response;
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: err.response.status,
            };
        }) 
    },

    sendMessage(payload) {
        return Api().post(
            'messages/create',
            payload,
            headers
        ).then(response => {
            return response;
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: err.response.status,
            };
        }) 
    }
}