<template>
    <div class="home">
        <module-component title="当前时间">
            <template v-slot:module_main_slot>
                {{ timeNow }}
            </template>
        </module-component>
        <div class="companyDiv">待面试</div>
        <hr />
        <module-component v-for="(item, index) in titleNow" :title="item.companyName">
            <template v-slot:module_main_slot>
                <div class="companyDiv">
                    <span class="companyTitle">面试时间：</span>
                    <span class="companyMain" :style="{ color: item.color }">{{ item.interviewTime }}</span>
                </div>
                <div class="companyDiv">
                    <span class="companyTitle">地址：</span>
                    <span class="companyMain">
                        <a :href="item.url" v-if="item.url != null" class="companyMain">
                            {{ item.InterviewLocation }}
                        </a>
                        <span v-else class="companyMain">
                            {{ item.InterviewLocation }}
                        </span>
                    </span>
                </div>
                <div class="companyDiv">
                    <span class="companyTitle">联系人：</span>
                    <span class="companyMain">
                        {{ item.contact }}|
                        <span v-if="item.phone.indexOf('-') != -1" class="companyMain">
                            {{ item.phone }}
                        </span>
                        <span v-else>
                            <a class="companyMain" :href="'tel:' + item.phone" rel="external nofollow">
                                {{ item.phone }}
                            </a>
                        </span>
                    </span>
                </div>
                <div class="companyDiv">
                    <span class="companyTitle">面试结果：</span>
                    <span class="companyMain">{{ item.status }}</span>
                </div>
            </template>
        </module-component>
        <div class="companyDiv">已面试</div>
        <hr />
        <module-component v-for="(item, index) in title" :title="item.companyName">
            <template v-slot:module_main_slot>
                <div class="companyDiv">
                    <span class="companyTitle">面试时间：</span>
                    <span class="companyMain" :style="{ color: item.color }">{{ item.interviewTime }}</span>
                </div>
                <div class="companyDiv">
                    <span class="companyTitle">地址：</span>
                    <span class="companyMain">
                        <a :href="item.url" v-if="item.url != null" class="companyMain">
                            {{ item.InterviewLocation }}
                        </a>
                        <span v-else class="companyMain">
                            {{ item.InterviewLocation }}
                        </span>
                    </span>
                </div>
                <div class="companyDiv">
                    <span class="companyTitle">联系人：</span>
                    <span class="companyMain">
                        {{ item.contact }}|
                        <span v-if="item.phone.indexOf('-') != -1" class="companyMain">
                            {{ item.phone }}
                        </span>
                        <span v-else>
                            <a class="companyMain" :href="'tel:' + item.phone" rel="external nofollow">
                                {{ item.phone }}
                            </a>
                        </span>
                    </span>
                </div>
                <div class="companyDiv">
                    <span class="companyTitle">面试结果：</span>
                    <!-- <span class="companyMain">{{ item.status }}</span> -->
                    <span class="companyMain">已面试</span>
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
            title: [
                {
                    companyName: '中电金信（线上）',
                    interviewTime: '05 月 19日 星期四 14:00',
                    InterviewLocation: '腾讯会议',
                    contact: '向女士',
                    phone: '188-429-660',
                    status: '待面试',
                    color: 'black',
                    url: null,
                },
            ],
            timeNow: '',
            titleNow: [
                {
                    companyName: '中电金信（线上）',
                    interviewTime: '05 月 19日 星期四 14:00',
                    InterviewLocation: '腾讯会议',
                    contact: '向女士',
                    phone: '188-429-660',
                    status: '待面试',
                    color: 'black',
                    url: null,
                },
            ],
        };
    },
    methods: {
        time() {
            this.timeNow = new Date().toLocaleString() + ' 星期' + '日一二三四五六'.charAt(new Date().getDay());
        },
    },
    mounted() {
        this.time();
        setInterval(() => {
            this.time();
        }, 1000);
    },
    watch: {
        timeNow: function () {
            var data = new Date();
            var day = ('0' + data.getDate()).slice(-2);
            for (let i = 0; i < this.titleNow.length; i++) {
                if (day == this.titleNow[i].interviewTime.substring(5, 7)) {
                    this.titleNow[i].color = 'red';
                } else {
                    this.titleNow[i].color = 'black';
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    text-align: left;
    .companyDiv {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .companyTitle {
            width: 30%;
        }
        .companyMain {
            width: 70%;
            font-weight: normal;
            font-size: 0.8rem;
        }
        a {
            color: #1296db;
        }
    }
    hr {
        margin: 0.5rem 0;
    }
}
</style>
