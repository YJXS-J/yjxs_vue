<template>
    <div class="home">
        <!-- 时间 -->
        <module-component title="时间">
            <template v-slot:module_main_slot>
                <div class="time_date">
                    <!-- <p>中国 china 北京 时间 </p> -->
                    <div class="ymd">
                        <p class="year_box">{{ time.year }}</p>
                        <span>年</span>
                        <p class="month_box">{{ time.month }}</p>
                        <span>月</span>
                        <p class="day_box">{{ time.day }}</p>
                        <span>日</span>
                    </div>
                    <div class="hms">
                        <div class="hms_box">
                            <p class="hour_box">{{ time.hour }}</p>
                            <span>:</span>
                            <p class="minute_box">{{ time.minute }}</p>
                            <span>:</span>
                            <p class="seconds_box">{{ time.seconds }}</p>
                        </div>
                        <!-- 时间段 -->
                        <div>
                            <p class="someTime" :style="{ backgroundColor: time.bgColor.someTimeColor }">
                                {{ time.someTime }}
                            </p>
                        </div>
                    </div>
                    <div class="week_period">
                        <!-- 星期 -->
                        <div class="week">
                            <span>星期</span>
                            <p class="week_box" :style="{ backgroundColor: time.bgColor.weekColor }">{{ time.week }}</p>
                        </div>
                        <div class="period">
                            <span>当前时间段</span>
                            <p class="period_box" :style="{ backgroundColor: time.bgColor.periodColor }">
                                {{ time.period }}
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </module-component>
        <!-- 高德天气 -->
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
                        <!-- 右第一行 -->
                        <div>
                            <span>{{ weatherToday.weather }}</span>
                            丨
                            <span>{{ weatherToday.winddirection }}</span>
                            风丨
                            <span>{{ weatherToday.windpower }}</span>
                            级
                        </div>
                        <!-- 右第二行  -->
                        <div class="weather_box_right_center">
                            湿度
                            <span>{{ weatherToday.humidity }}</span>
                            %
                        </div>
                        <!-- 右第三行 -->
                        <div class="">
                            更新时间：
                            <span>{{ weatherToday.reporttime }}</span>
                        </div>
                    </div>
                </div>
                <!-- 分割线 -->
                <hr class="splitLine" />
                <!-- 明日天气 -->
                <div class="hotTitle2">明天天气</div>
                <div class="weather_tomorrow">
                    <div class="weather_tomorrow_box">
                        <span class="daytime">白天天气信息：</span>
                        <span class="nightStyle">{{ weatherTomorrow.dayweather }}</span>
                        <span>
                            <span>{{ weatherTomorrow.daytemp }}</span>
                            ℃
                        </span>
                        <span>
                            <span>{{ weatherTomorrow.daywind }}</span>
                            风
                        </span>
                        <span>
                            <span>{{ weatherTomorrow.daypower }}</span>
                            级
                        </span>
                    </div>
                    <div class="weather_tomorrow_box">
                        <span class="night">晚上天气信息：</span>
                        <span class="nightStyle">{{ weatherTomorrow.nightweather }}</span>
                        <span>
                            <span>{{ weatherTomorrow.nighttemp }}</span>
                            ℃
                        </span>
                        <span>
                            <span>{{ weatherTomorrow.nightwind }}</span>
                            风
                        </span>
                        <span>
                            <span>{{ weatherTomorrow.nightpower }}</span>
                            级
                        </span>
                    </div>
                </div>
            </template>
        </module-component>
        <!-- 汇率 -->
        <module-component title="汇率">
            <template v-slot:module_main_slot>
                <div class="exchange_box">
                    <div class="exchange_top">
                        <img class="currency_convert" src="../assets/images/currency_convert.png" alt="" srcset="" />
                        <!-- 货币转换 -->
                        <div class="currency_convert_box">
                            <span class="currency_convert_box_text">货币转换</span>
                            <span class="currency_convert_box_bold">
                                {{ exchange.currency_convert_1 }}{{ exchange.currency_1 }} =
                                {{ exchange.currency_convert_2 }} {{ exchange.currency_2 }}
                            </span>
                            <span class="currency_convert_box_bold">
                                {{ exchange.currency_convert_3 }}{{ exchange.currency_3 }} =
                                {{ exchange.currency_convert_4 }} {{ exchange.currency_4 }}
                            </span>
                        </div>
                    </div>
                    <!-- 当前汇率 -->
                    <div class="currency_convert_now">
                        当前1人民币 =
                        <span>{{ exchange.USD }}美元 | {{ exchange.JPY }}日元 | {{ exchange.HKD }}港元</span>
                    </div>
                    <!-- 汇率转换 -->
                    <div class="currency_value_box">
                        <input type="text" id="currency_value" value="1" />
                        <select name="" class="currency_sel" id="currency_sel_1">
                            <option value="人民币CNY">人民币CNY</option>
                            <option value="美元USD">美元USD</option>
                            <option value="港元HKD">港元HKD</option>
                            <option value="日元JPY">日元JPY</option>
                        </select>
                        <img class="convert_png" src="../assets/images/convert.png" alt="" />
                        <select name="" class="currency_sel" id="currency_sel_2">
                            <option value="人民币CNY">人民币CNY</option>
                            <option value="美元USD" selected="">美元USD</option>
                            <option value="港元HKD">港元HKD</option>
                            <option value="日元JPY">日元JPY</option>
                        </select>
                        <button id="currency_convert" onclick="currency_convert()">转换</button>
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
            time: {
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
            },
            weatherToday: {
                weather: '--',
                winddirection: '--',
                windpower: '--',
                humidity: '--',
                reporttime: '0000-00-00 00:00:00',
            },
            weatherTomorrow: {
                dayweather: '--',
                daytemp: '--',
                daywind: '--',
                daypower: '--',
                nightweather: '--',
                nighttemp: '--',
                nightwind: '--',
                nightpower: '--',
            },
            exchange: {
                currency_convert_1: '0',
                currency_convert_2: '0',
                currency_convert_3: '0',
                currency_convert_4: '0',
                currency_1: '人民币',
                currency_2: '美元',
                currency_3: '人民币',
                currency_4: '美元',
                USD: '0',
                JPY: '0',
                HKD: '0',
                exchangeData: null,
            },
        };
    },
    methods: {
        async getTime() {
            var date = this.$gm.getTime(new Date());
            this.time.year = date.Y;
            this.time.month = date.M;
            this.time.day = date.D;
            this.time.hour = date.h;
            this.time.minute = date.m;
            this.time.seconds = date.s;
            this.time.week = date.W;
            this.time.someTime = date.someTime;
            this.time.week = date.week;
            this.time.period = date.period;
            if (this.hour < '09' || this.hour > '20') {
                this.time.bgColor.periodColor = '#9c27b0';
                this.time.bgColor.someTimeColor = '#9c27b0';
            } else {
                this.time.bgColor.periodColor = '#00a5ff';
                this.time.bgColor.someTimeColor = '#00a5ff';
            }
            if (this.week != '六' && this.week != '日') {
                this.time.bgColor.weekColor = '#ff5722';
            } else {
                this.time.bgColor.weekColor = '#00a5ff';
            }
        },
        async getWeather(cityCode, extensions) {
            let that = this; //存储this
            var key = '3c63ae331c3c5b812a328d3b6fb26a4c';
            that.$axios
                .get(
                    'https://restapi.amap.com/v3/weather/weatherInfo?key=' +
                        key +
                        '&city=' +
                        cityCode +
                        '&extensions=' +
                        extensions
                )
                .then(function (res) {
                    if (extensions == 'base') {
                        var wData = res.data.lives[0];
                        that.weatherToday.weather = wData.weather;
                        that.weatherToday.winddirection = wData.winddirection;
                        that.weatherToday.windpower = wData.windpower;
                        that.weatherToday.humidity = wData.humidity;
                        that.weatherToday.reporttime = wData.reporttime;
                    } else if (extensions == 'all') {
                        var wData = res.data.forecasts[0].casts[1];
                        that.weatherTomorrow.dayweather = wData.dayweather;
                        that.weatherTomorrow.daytemp = wData.daytemp;
                        that.weatherTomorrow.daywind = wData.daywind;
                        that.weatherTomorrow.daypower = wData.daypower;
                        that.weatherTomorrow.nightweather = wData.nightweather;
                        that.weatherTomorrow.nighttemp = wData.nighttemp;
                        that.weatherTomorrow.nightwind = wData.nightwind;
                        that.weatherTomorrow.nightpower = wData.nightpower;
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        },
        async getExchange(FromCode, toCode) {
            var url =
                'https://api.it120.cc/gooking/forex/rate?fromCode=' +
                FromCode.slice(-3) +
                '&toCode=' +
                toCode.slice(-3);
            this.$axios.get(url).then(res => {
                if (res.data.msg == 'success') {
                    var rate = res.data.data.rate;
                    var fromCode = res.data.data.fromCode;
                    var toCode = res.data.data.toCode;

                    if (FromCode == 'USD') {
                        this.exchange.USD = rate;
                    }
                    if (FromCode == 'JPY') {
                        this.exchange.JPY = rate;
                    }
                    if (FromCode == 'HKD') {
                        this.exchange.HKD = rate;
                    }
                }
            });
        },
    },
    mounted() {
        // 时间
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 1000);
        // 天气
        this.getWeather('440300', 'base'); // 今日天气
        this.getWeather('440300', 'all'); // 明日天气
        // 初始化汇率
        this.getExchange('USD', 'CNY');
        this.getExchange('JPY', 'CNY');
        this.getExchange('HKD', 'CNY');
        // 汇率获取失败重新获取
        var setexchangeUSD = setInterval(() => {
            if (this.exchange.USD == '0') {
                this.getExchange('USD', 'CNY');
                clearInterval(setexchangeUSD);
            }
        }, 1000);
        var setexchangeJPY = setInterval(() => {
            if (this.exchange.JPY == '0') {
                this.getExchange('JPY', 'CNY');
                clearInterval(setexchangeJPY);
            }
        }, 1000);
        var setexchangeHKD = setInterval(() => {
            if (this.exchange.HKD == '0') {
                this.getExchange('HKD', 'CNY');
                clearInterval(setexchangeHKD);
            }
        }, 1000);
    },
    watch: {
        time: {
            handler(time) {
                var time_date = time.hour + time.minute + time.seconds;
                // 每天6点调用今天天气
                if (time_date == '060000') {
                    this.getWeather('440300', 'base');
                }
                // 每天21点调用明天天气
                if (time_date == '210000') {
                    this.getWeather('440300', 'all');
                }
            },
            deep: true,
        },
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
        width: 25%;
        display: flex;
        justify-content: space-between;
        .temperature {
            font-size: 3.3rem;
            color: #00a5ff;
            display: flex;
            align-items: center;
        }
    }
    .weather_box_right {
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        text-align: left;
        .weather_box_right_center {
            margin: 0.5rem 0;
        }
    }
}
.splitLine {
    width: 100%;
    background-color: #0083cb;
    margin: 1rem 0;
}
.hotTitle2 {
    font-size: 1rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: left;
}
.weather_tomorrow {
    .weather_tomorrow_box {
        display: flex;
        justify-content: space-between;
        .daytime {
            color: #0d789c;
            margin-bottom: 0.5rem;
        }
        .night {
            color: #9121db;
        }
        .nightStyle {
            width: 3rem;
        }
    }
}
.exchange_box {
    .exchange_top {
        display: flex;
        img {
            width: 3rem;
        }
        .currency_convert_box {
            display: flex;
            justify-content: space-between;
            flex-flow: column;
            margin-left: 1rem;
            .currency_convert_box_text {
                text-align: left;
            }
            .currency_convert_box_bold {
                font-weight: bold;
            }
        }
    }
    .currency_convert_now {
        text-align: left;
        margin: 0.5rem 0;
        span {
            display: block;
            margin: 0.5rem 0;
        }
    }
    .currency_value_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        #currency_value,
        .currency_sel,
        #currency_convert {
            font-size: 0.7rem;
            padding: 0.3rem 0;
        }
        #currency_value {
            width: 3rem;
            outline: none;
        }
        .currency_sel {
        }
        .convert_png {
            width: 1rem;
        }
        #currency_convert {
            background: #00a5ff;
            border: transparent;
            font-weight: bold;
            border-radius: 0.5rem;
            color: #ffffff;
            width: 3rem;
        }
    }
}
</style>
