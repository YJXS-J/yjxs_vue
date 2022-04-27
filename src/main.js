import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
var Vue = createApp(App);

Vue.use(store);
Vue.use(router);
Vue.mount('#app');

// 注册全局组件Module
import Module from './components/Module.vue';
Vue.component('module-component', Module);

// 引用js文件
import globalMethod from './assets/js/globalMethod.js';
Vue.config.globalProperties.$gm = globalMethod;

// 路由守卫
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
