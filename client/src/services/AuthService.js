import Api from './Api';

const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
export default {
    register(credentials) {
        return Api().post(
            'signup',
            credentials,
            { headers }
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
            { headers }
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

    getUser(token) {
        return Api().get(
            `userInfo`,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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

    getUsers(credentials, token) {
        return Api().get(
            `users?userId=${credentials}`,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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

    getConversation(user1, user2, token) {
        return Api().get(
            `conversation?user1=${user1}&&user2=${user2}`,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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

    getMessages(conversationId, token) {
        return Api().get(
            `messages?conversation=${conversationId}`,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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

    sendMessage(payload, token) {
        return Api().post(
            'messages/create',
            payload,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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

    encryptMessage(payload, token) {
        return Api().post(
            'encryptMessage',
            payload,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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

    decryptMessage(payload, token) {
        return Api().post(
            'decryptMessage',
            payload,
            {
                headers:
                {
                    ...headers,
                    'Authorization': token,
                }
            },
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