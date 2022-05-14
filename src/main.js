import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

var Vue = createApp(App);

// 注册全局组件Module
import Module from './components/Module.vue';
Vue.component('module-component', Module);

// 引用js文件
import globalMethod from './assets/js/globalMethod.js';
Vue.config.globalProperties.$gm = globalMethod;

// 引用js文件
import axios from 'axios';
Vue.config.globalProperties.$axios = axios;

// 引入Echarts
import * as echarts from 'echarts';
Vue.config.globalProperties.$echarts = echarts;

// 路由守卫
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();

    router.beforeEach((to, from, next) => {
        if (to.matched.some(m => m.meta.auth)) {
            /**
             * 根据cookie的key获取对应的值
             * @param {String} key 键
             * @return {String} value 值
             */
            function cookieKeyGetValue(key) {
                if (document.cookie.length > 0) {
                    const Cookie = document.cookie;
                    const cookieList = Cookie.split('; ');
                    const cookieKeyList = cookieList.map(item => {
                        return item.split('=')[0];
                    });
                    const index = cookieKeyList.indexOf(key);
                    return cookieList[index].split('=')[1] != 'true' ? false : true;
                }
            }

            // 对路由进行验证
            if (store.state.isLogin || cookieKeyGetValue('isLogin')) {
                // 已经登陆
                next(); // 正常跳转到你设置好的页面
            } else {
                // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
                next({ path: '/login', query: { Rurl: to.fullPath } });
            }
        } else {
            next();
        }
    });
});

Vue.use(store);
Vue.use(router);
Vue.mount('#app');
