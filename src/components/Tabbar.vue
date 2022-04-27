<template>
    <div class="tab">
        <div class="tab_item" v-for="(item, index) in tabBarImg" :key="index" @click="switchToTab(item.path)">
            <img :src="$route.path === item.path ? item.icon : item.normal" alt="" />
            <span :class="$route.path === item.path ? 'active' : ''">{{ item.title }}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'Tabbar',
    data() {
        return {
            tabBarImg: [
                {
                    path: '/',
                    normal: require('../assets/images/home.png'),
                    icon: require('../assets/images/home_active.png'),
                    title: '首页',
                },
                {
                    path: '/weather',
                    normal: require('../assets/images/weather.png'),
                    icon: require('../assets/images/weather_active.png'),
                    title: '天气',
                },
                {
                    path: '/currency',
                    normal: require('../assets/images/currency.png'),
                    icon: require('../assets/images/currency_active.png'),
                    title: '汇率',
                },
                {
                    path: '/my',
                    normal: require('../assets/images/my.png'),
                    icon: require('../assets/images/my_active.png'),
                    title: '我的',
                },
            ],
        };
    },
    methods: {
        switchToTab(path) {
            console.log(path);
            this.$router.replace(path);
        },
    },
};
</script>

<style type="text/css" scoped>
.tab {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 999;
    justify-content: space-between;
    padding: 0.5rem;
}
.tab_item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
.tab_item img {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.3rem;
}

.active {
    color: #1296db;
}
</style>
