<template>
    <div class="home">
        <module-component title="当前时间">
            <template v-slot:module_main_slot>
                {{ timeNow }}
            </template>
        </module-component>
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
                        {{ item.contact }}-
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
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {
            title: [
                {
                    companyName: '财税项目（线上）',
                    interviewTime: '05 月 11日 星期三 10:30',
                    InterviewLocation: '南山区',
                    contact: '腾讯会议',
                    phone: '--',
                    status: '已面试（结果不是很理想）',
                    color: 'black',
                    url: null,
                },
                {
                    companyName: '车安科技（现场）',
                    interviewTime: '05 月 11日 星期三 15:00',
                    InterviewLocation: '南山区西丽麻磡路18号工业北区7栋3楼',
                    contact: '--',
                    phone: '--',
                    status: '已面试（一般,但是没过）',
                    color: 'black',
                    url:
                        this.$store.state.amaHttps1 +
                        '113.949856,22.635194,南山区西丽麻磡路18号工业北区7栋' +
                        this.$store.state.amaHttps2,
                },
                {
                    companyName: '华润置地（现场）',
                    interviewTime: '05 月 11日 星期三 17:30',
                    InterviewLocation: '华润置地B座21层',
                    contact: '--',
                    phone: '--',
                    status: '已面试（虽然没过，但面试官很nice）',
                    color: 'black',
                    url:
                        this.$store.state.amaHttps1 +
                        '113.957561,22.541757,深圳市华润置地B座' +
                        this.$store.state.amaHttps2,
                },
                {
                    companyName: '睿呈时代（线上）',
                    interviewTime: '05 月 12日 星期四 14:00',
                    InterviewLocation: '--',
                    contact: '腾讯会议',
                    phone: '--',
                    status: '已面试（面试过程中感觉面试官人还挺不错，等待通知）',
                    color: 'black',
                    url: null,
                },
            ],
            timeNow: '',
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

            for (let i = 0; i < this.title.length; i++) {
                if (day == this.title[i].interviewTime.substring(5, 7)) {
                    this.title[i].color = 'red';
                } else {
                    this.title[i].color = 'black';
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
}
</style>
