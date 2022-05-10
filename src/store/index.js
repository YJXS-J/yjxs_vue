import { createStore } from 'vuex';

export default createStore({
    state: {
        mxnzpUrl: 'https://www.mxnzp.com',
        app_id: '9hlmoqmsnoh8arpn',
        app_secret: 'dlA0cFk2VWR5QXdTd0E3c0dtSStMQT09',
        isLogin: false,
    },
    getters: {},
    mutations: {
        changeLogin(state, data) {
            console.log(data, state);
            state.isLogin = data;
        },
    },
    actions: {},
    modules: {},
});
