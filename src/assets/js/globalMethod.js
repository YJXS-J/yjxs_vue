export default {
    getTime: function (time) {
        var date = time;
        var Y = date.getFullYear();
        var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var D = date.getDate();
        var h = ('0' + date.getHours()).slice(-2);
        var m = ('0' + date.getMinutes()).slice(-2);
        var s = ('0' + date.getSeconds()).slice(-2);
        var w = date.getDay();
        var someTime =
            h >= 23 || h < 1
                ? '子时'
                : h >= 1 && h < 3
                ? '丑时'
                : h >= 3 && h < 5
                ? '寅时'
                : h >= 5 && h < 7
                ? '卯时'
                : h >= 7 && h < 9
                ? '辰时'
                : h >= 9 && h < 11
                ? '巳时'
                : h >= 11 && h < 13
                ? '午时'
                : h >= 13 && h < 15
                ? '未时'
                : h >= 15 && h < 17
                ? '申时'
                : h >= 17 && h < 19
                ? '酉时'
                : h >= 19 && h < 21
                ? '戌时'
                : '亥时';
        var week = w == 1 ? '一' : w == 2 ? '二' : w == 3 ? '三' : w == 4 ? '四' : w == 5 ? '五' : w == 6 ? '六' : '日';

        var period =
            h >= 0 && h < 3
                ? '拂晓'
                : h >= 3 && h < 6
                ? '黎明'
                : h >= 6 && h < 9
                ? '早晨'
                : h >= 9 && h < 12
                ? '上午'
                : h >= 12 && h < 15
                ? '中午'
                : h >= 15 && h < 18
                ? '下午'
                : h >= 18 && h < 21
                ? '晚上'
                : '夜晚';
        return { Y, M, D, h, m, s, someTime, week, period };
    },
};
