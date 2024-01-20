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
    }
}