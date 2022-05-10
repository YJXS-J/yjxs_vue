<template>
    <div class="home">
        <router-link to="/login">登录</router-link>
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
    },
    mounted() {
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 1000);
    },
};
</script>

<style lang="scss" scoped>
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
</style>
