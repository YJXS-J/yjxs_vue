import { createStore } from 'vuex';

export default createStore({
    state: {
        mxnzpUrl: 'https://www.mxnzp.com',
        app_id: '9hlmoqmsnoh8arpn',
        app_secret: 'dlA0cFk2VWR5QXdTd0E3c0dtSStMQT09',
        isLogin: false,
        amapKey: '3c63ae331c3c5b812a328d3b6fb26a4c',
        amaHttps1: 'https://uri.amap.com/navigation?from=&to=',
        amaHttps2: '&policy=0&src=mypage&coordinate=gaode&callnative=1',
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
