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
