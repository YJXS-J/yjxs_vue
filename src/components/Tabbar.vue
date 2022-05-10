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
                    path: '/interview',
                    normal: require('../assets/images/interview.png'),
                    icon: require('../assets/images/interview_active.png'),
                    title: '面试',
                },
                {
                    path: '/questionsview',
                    normal: require('../assets/images/questionsview.png'),
                    icon: require('../assets/images/questionsview_active.png'),
                    title: '面试题',
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
