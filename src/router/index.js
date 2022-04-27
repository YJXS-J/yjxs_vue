import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherView from '../views/WeatherView.vue';
import CurrencyView from '../views/CurrencyView.vue';
import MyView from '../views/MyView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: '首页',
            showTab: true,
        },
    },
    {
        path: '/weather',
        name: 'weather',
        component: WeatherView,
        meta: {
            title: '天气',
            showTab: true,
        },
    },
    {
        path: '/currency',
        name: 'currency',
        component: CurrencyView,
        meta: {
            title: '汇率',
            showTab: true,
        },
    },
    {
        path: '/my',
        name: 'my',
        component: MyView,
        meta: {
            title: '我的',
            showTab: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
