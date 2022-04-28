<template>
    <router-view />
    <div style="height: 3.5rem"></div>
    <tabbar v-if="$route.meta.showTab"></tabbar>
</template>

<script>
import Tabbar from './components/Tabbar';
export default {
    name: 'app',
    created: function () {
        this.$router.push('/');
    },
    components: {
        Tabbar,
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
    padding: 1rem;
    background-color: #e7f3fd;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
