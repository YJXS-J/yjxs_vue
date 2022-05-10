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
