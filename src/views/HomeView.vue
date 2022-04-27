<template>
    <div class="home">
        <module-component title="时间">
            <template v-slot:module_main_slot>
                <div class="time_date">
                    <!-- <p>中国 china 北京 时间 </p> -->
                    <div class="ymd">
                        <p class="year_box">{{ year }}</p>
                        <span>年</span>
                        <p class="month_box">{{ month }}</p>
                        <span>月</span>
                        <p class="day_box">{{ day }}</p>
                        <span>日</span>
                    </div>
                    <div class="hms">
                        <div class="hms_box">
                            <p class="hour_box">{{ hour }}</p>
                            <span>:</span>
                            <p class="minute_box">{{ minute }}</p>
                            <span>:</span>
                            <p class="seconds_box">{{ seconds }}</p>
                        </div>
                        <!-- 时间段 -->
                        <div>
                            <p class="someTime" :style="{ backgroundColor: bgColor.someTimeColor }">{{ someTime }}</p>
                        </div>
                    </div>
                    <div class="week_period">
                        <!-- 星期 -->
                        <div class="week">
                            <span>星期</span>
                            <p class="week_box" :style="{ backgroundColor: bgColor.weekColor }">{{ week }}</p>
                        </div>
                        <div class="period">
                            <span>当前时间段</span>
                            <p class="period_box" :style="{ backgroundColor: bgColor.periodColor }">{{ period }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </module-component>
        <module-component title="高德天气">
            <template v-slot:module_main_slot>
                <div class="weather_box">
                    <!-- 左 -->
                    <div class="weather_box_left">
                        <span class="temperature">28</span>
                        <span>℃</span>
                    </div>
                    <!-- 右 -->
                    <div class="weather_box_right">
                        <div class="weather_box_right">
                            <!-- 右第一行 -->
                            <div>
                                <span class="weather">天气现象</span>
                                丨
                                <span class="winddirection">风向描述</span>
                                风丨
                                <span class="windpower">风力级别，单位：级</span>
                                级
                            </div>
                            <!-- 右第二行  -->
                            <div>
                                湿度
                                <span class="humidity">空气湿度</span>
                                %
                            </div>
                            <!-- 右第三行 -->
                            <div class="">
                                更新时间：
                                <span class="reporttime">数据发布的时间</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </module-component>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'HomeView',

    data() {
        return {
            year: '1970',
            month: '01',
            day: '01',
            hour: '00',
            minute: '00',
            seconds: '00',
            week: '*',
            period: '某时',
            someTime: '某时',
            bgColor: {
                someTimeColor: '#00a5ff',
                weekColor: '#00a5ff',
                periodColor: '#00a5ff',
            },
        };
    },
    methods: {
        getTime() {
            var date = this.$gm.getTime(new Date());
            this.year = date.Y;
            this.month = date.M;
            this.day = date.D;
            this.hour = date.h;
            this.minute = date.m;
            this.seconds = date.s;
            this.week = date.W;
            this.someTime = date.someTime;
            this.week = date.week;
            this.period = date.period;
            if (this.hour < '09' || this.hour > '20') {
                this.bgColor.periodColor = '#9c27b0';
                this.bgColor.someTimeColor = '#9c27b0';
            } else {
                this.bgColor.periodColor = '#00a5ff';
                this.bgColor.someTimeColor = '#00a5ff';
            }
            if (this.week != '六' && this.week != '日') {
                this.bgColor.weekColor = '#ff5722';
            } else {
                this.bgColor.weekColor = '#00a5ff';
            }
        },
        getWeather() {
            this.$gm.getWeather('110101', 'all');
        },
    },
    mounted() {
        // 时间
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 1000);
        // 天气
        this.getWeather();
    },
};
</script>

<style lang="scss" scoped>
.time_date {
    .ymd,
    .hms,
    .week_period,
    .hms_box,
    .week,
    .period {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ymd,
    .hms {
        margin-bottom: 1rem;
    }
    p {
        padding: 0.5rem;
        background: #00a5ff;
        box-shadow: 0px 13px 24px 0px rgb(3 136 209 / 20%);
        border-radius: 10px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
    }
    span {
        font-weight: bold;
        color: #3589ff;
        display: inline-block;
        text-align: center;
    }
    .year_box,
    .someTime,
    .period_box {
        width: 4rem;
    }
    .month_box,
    .day_box,
    .hour_box,
    .minute_box,
    .seconds_box,
    .week_box {
        width: 2rem;
    }
    .hms_box {
        span {
            margin: 0 0.5rem;
        }
    }
    .week {
        width: 30%;
    }
    .period {
        width: 55%;
    }
}
.weather_box {
    display: flex;
    justify-content: space-between;
    .weather_box_left {
        width: 30%;
        display: flex;
        justify-content: space-between;
        .temperature {
            font-size: 3rem;
            color: #3589ff;
        }
    }
    .weather_box_right {
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        text-align: left;
    }
}
</style>
