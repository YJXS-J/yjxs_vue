// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Interviewiew from '../views/Interviewiew.vue';
import QuestionsView from '../views/QuestionsView.vue';
import MyView from '../views/MyView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: '首页',
            showTab: true,
            keepAlive: true,
        },
    },
    {
        path: '/interview',
        name: 'interview',
        component: Interviewiew,
        meta: {
            title: '面试',
            showTab: true,
            auth: true,
        },
    },
    {
        path: '/questionsview',
        name: 'questionsview',
        component: QuestionsView,
        meta: {
            title: '面试题',
            showTab: true,
            auth: true,
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
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            title: '登录',
            showTab: true,
        },
    },
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes,
});

export default router;
