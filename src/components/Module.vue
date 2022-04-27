<template>
    <div class="module">
        <div class="module_title">
            {{ title }}
        </div>
        <div class="module_main">
            <slot name="module_main_slot"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Module',
    props: {
        title: String,
    },
};
</script>

<style lang="scss" scoped>
.module {
    padding: 1rem;
    background: #fff;
    margin-bottom: 1rem;
    border-radius: 0.8em;
    box-shadow: 0px 13px 24px 0px rgb(3 136 209 / 20%);
    .module_title {
        border-left: 0.3rem solid #0083cb;
        font-size: 1rem;
        color: #333333;
        padding-left: 1rem;
        font-weight: bold;
        margin-bottom: 1em;
        text-align: left;
    }
}
</style>
