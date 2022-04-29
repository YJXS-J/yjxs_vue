import { createStore } from 'vuex';

export default createStore({
    state: {
        forecasts: null,
    },
    getters: {},
    mutations: {
        setExchange(state, forecasts) {
            state.forecasts = forecasts;
        },
        getExchange(state) {
            return state.forecasts;
        },
    },
    actions: {},
    modules: {},
});
