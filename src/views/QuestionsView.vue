<template>
    <div class="home">
        <module-component v-for="(item, index) in questions" :title="item.question">
            <template v-slot:module_main_slot>
                <div class="companyDiv">
                    <span class="companyTitle">回答：</span>
                    <span class="companyMain">{{ item.answer }}</span>
                </div>
            </template>
        </module-component>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {
            questions: [
                {
                    question: 'Vue2与Vue3的区别?',
                    answer: '更快、更小、更易维护、更易于原生;',
                },
                {
                    question: 'JSON.parse()?',
                    answer: '将JSON格式字符串转换为js对象;',
                },
                {
                    question: '深拷贝与浅拷贝?',
                    answer: '深拷贝：拷贝的时候会生成一份新的数据，修改拷贝以后的数据不会原数据。浅拷贝：拷贝的时候只是拷贝了一份引用，修改拷贝以后的数据会影响原来的数据',
                },
                {
                    question: 'ES6新特性?',
                    answer: '变量声明：let、const;模板字符串；箭头函数等；',
                },
                {
                    question: 'Vue 中双向数据绑定是如何实现的?',
                    answer: 'vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的；',
                },
                {
                    question: '前端性能优化?',
                    answer: '减少HTTP请求；压缩HTML、CSS、JavaScript文件；防抖节流；懒加载；',
                },
                {
                    question: '什么是防抖节流?',
                    answer: '防抖策略（debounce）是当事件被触发后，延迟 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。以保证事件里面的代码只执行一次;节流策略（throttle），顾名思义，可以减少一段时间内事件的触发频率。',
                },
                {
                    question: 'HTTP协议?',
                    answer: '三次握手、四次挥手',
                },
                {
                    question: 'css优化?',
                    answer: '不使用@import，会增加加载时间；选择器尽量少于三层；通配符和属性选择器效率最低，需要匹配的元素最多，尽量避免使用；首屏的关键样式使用内联方式，减少加载时间；异步加载；文件压缩；去除无效的样式；',
                },
            ],
        };
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped>
.companyDiv {
    text-align: left;
    .companyTitle {
        font-weight: bold;
    }
}
</style>
