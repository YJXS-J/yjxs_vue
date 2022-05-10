<template>
    <div class="login">
        <div class="loginBox">
            <div class="loginImg">
                <img src="../assets/images/login.png" alt="" srcset="" />
            </div>
            <span class="text">Login</span>
            <hr />
            <div class="nameBox">
                <img src="../assets/images/name.png" alt="" />
                <input type="text" placeholder="请输入用户名" v-model="name" />
            </div>
            <div class="pwdBox">
                <img src="../assets/images/pwd.png" alt="" />
                <input type="password" placeholder="请输入密码" v-model="password" />
            </div>
            <div class="msg" v-show="msgStatus" :style="{ color: msgColor }">{{ message }}</div>
            <div class="btn" @click="Login()">登录</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            message: '',
            msgStatus: false,
            msgColor: 'red',
        };
    },
    methods: {
        Login() {
            if (this.name == '' || this.password == '') {
                this.msgColor = 'red';
                this.message = '请输入用户名和密码！';
                this.msgStatus = true;

                this.$store.commit('changeLogin', false);
                setCookie('isLogin', 'false');

                setTimeout(() => {
                    this.msgStatus = false;
                }, 1000);
                return;
            }

            function setCookie(key, value, expires = '', domain = window.location.hostname, path = '/') {
                const time = expires ? new Date(expires) : expires;
                console.log(time);
                const cookie = `${key}=${value}; expires=${time}; domain=${domain}; path=${path}`;
                document.cookie = cookie;
            }

            if (this.name == '1' && this.password == '1') {
                this.msgColor = 'green';
                this.message = '登录成功！';
                this.msgStatus = true;

                this.$store.commit('changeLogin', true);
                setCookie('isLogin', 'true');

                setTimeout(() => {
                    if (this.$route.query.Rurl) {
                        this.$router.push(this.$route.query.Rurl);
                    } else {
                        this.$router.push('/');
                    }
                    this.msgStatus = false;
                }, 1000);
            } else {
                this.msgColor = 'red';
                this.message = '用户名或密码错误！';
                this.msgStatus = true;

                this.$store.commit('changeLogin', false);
                setCookie('isLogin', 'false');

                setTimeout(() => {
                    this.msgStatus = false;
                }, 1000);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.login {
    .loginBox {
        padding: 1rem;
        background: #fff;
        margin-bottom: 1rem;
        border-radius: 0.8em;
        box-shadow: 0px 13px 24px 0px rgb(3 136 209 / 20%);
        text-align: left;
        .text,
        hr,
        .nameBox,
        .pwdBox,
        .msg {
            margin: 1rem 0;
        }
        .text {
            display: block;
            border-left: 0.3rem solid #0083cb;
            font-size: 1rem;
            color: #333333;
            padding-left: 1rem;
            font-weight: bold;
            margin-bottom: 1em;
            text-align: left;
        }
        .loginImg {
            width: 35%;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        .nameBox,
        .pwdBox {
            position: relative;
            height: 2rem;
            padding: 0.5rem 0;
            img {
                width: 10%;
                position: absolute;
                top: 50%;
                left: 8%;
                transform: translate(-50%, -50%);
                z-index: 2;
            }
            input {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border: 1px solid #8a8a8a;
                border-radius: 0.5rem;
                outline: none;
                padding-left: 15%;
                z-index: 1;
                &:focus {
                    border: 1px solid #1296db;
                }
            }
        }
        .msg {
            font-style: italic;
        }
        .btn {
            width: 30%;
            margin: 0 auto;
            text-align: center;
            padding: 0.5rem;
            background: #00a5ff;
            box-shadow: 0px 13px 24px 0px rgb(3 136 209 / 20%);
            border-radius: 10px;
            font-weight: bold;
            color: #ffffff;
            text-align: center;
        }
    }
}
</style>
