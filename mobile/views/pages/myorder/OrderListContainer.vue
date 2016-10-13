<style lang='less' scoped>
@majorColor: #12B355;
.clearfix {
    &:before,
    &:after {
        content: '';
        display: table;
    }
    &:after {
        clear: both;
    }
}

.weui_btn_primary {
    background-color: @majorColor;
}

.weui_btn_primary:not(.weui_btn_disabled):active {
    background-color: desaturate(@majorColor, 20%);
}

.order-list-container {
    padding-top: .54rem;
    padding-bottom: .5rem;
    li {
        padding: 0 .12rem;
        margin-top: .06rem;
        background-color: #fff;
        border-bottom: 1px solid #f1f1f1;
        &:last-of-type {
            margin-bottom: .08rem;
        }
        .list-top {
            padding: .04rem 0;
            font-size: .14rem;
            color: #333;
            font-family: '微软雅黑';
            font-weight: bold;
            span {
                &.order-status {
                    float: right;
                    color: #EC5800;
                    &.status1 {
                        color: #EE6C43;
                    }
                    &.status2 {
                        color: #12B355;
                    }
                }
            }
        }
        .list-center {
            padding: .14rem 0;
            border-top: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            font-family: '微软雅黑';
            .order-detail {
                font-size: .14rem;
                div {
                    line-height: .24rem;
                }
                div label {
                    font-weight: bold;
                    display: inline-block;
                    width: .9rem
                }
                div span {
                    color: #ABABAB
                }
            }
        }
        .list-bottom {
            position: relative;
            font-family: '微软雅黑';
            font-size: .15rem;
            padding: .115rem 0;
            label {
                font-weight: bold;
            }
            span {
                margin-left: .06rem;
                font-size: .1rem;
                color: #ec5800
            }
            span:nth-child(3) {
                font-size: .15rem;
                margin-left: .05rem;
            }
            .weui_btn {
                text-align: center;
                display: inline-block;
                width: 1rem;
                height: .36rem;
                top: .05rem;
                font-size: .16rem;
            }
            .comment_button {
                position: absolute;
                right: 1.05rem;
                border: 1px solid #09BB07;
                width: 1rem;
                line-height: .36rem;
                height: .36rem;
            }
            .check_button {
                position: absolute;
                right: 0rem;
                width: 1rem;
                height: .36rem;
                line-height: .36rem;
                top: -.1rem;
                background-color: #09BB07
            }
        }
    }
}

.no-order {
    padding-top: 45vw;
    text-align: center;
    .no-order-icon {
        margin: 0 auto;
        width: 1.1rem;
        height: 1.1rem;
        background-color: #D7D7D9;
        border-radius: 1rem;
        font-size: .4rem;
        font-weight: normal;
        color: #fff;
        line-height: 1.1rem;
    }
    p {
        margin-top: .15rem;
        font-size: .0875rem;
        color: #666;
    }
    a {
        margin-top: .2rem;
        padding: 1.5vw 9vw;
    }
}

.vertical-middle {
    vertical-align: middle;
    border-radius: 0px;
}

.BtnShareColor {
    background-color: #728cc0 !important;
}

.BtnSharedColor {
    background-color: #ff6d26 !important;
}
</style>
<template>
    <div class="order-list-container">
        <ul>
            <li>
                <div class="list-top">
                    <span>圣淘沙（马家龙店）</span>
                    <span class="order-status">
            待支付</span>
                </div>
                <div class="flex list-center">
                    <div class="flex-item order-detail">
                        <div>
                            <label>订单号</label><span>18:30</span></div>
                        <div>
                            <label>入住时间</label><span>袁德帅</span></div>
                        <div>
                            <label>房型</label><span>188-8888-8888</span></div>
                        <div>
                            <label>数量</label><span>18:30</span></div>
                        <div>
                            <label>下单时间</label><span>袁德帅</span></div>
                    </div>
                </div>
                <div class="list-bottom clearfix">
                    <label>订单总额：</label><span>¥</span><span>189</span>
                    <button class="weui_btn weui_btn_plain_primary comment_button" type="weui_btn_plain_primary">评价晒单</button>
                    <button class="weui_btn check_button">查看订单</button>
                </div>
            </li>
            <li>
                <div class="list-top">
                    <span>圣淘沙（马家龙店）</span>
                    <span class="order-status">
            待支付</span>
                </div>
                <div class="flex list-center">
                    <div class="flex-item order-detail">
                        <div>
                            <label>订单号</label><span>18:30</span></div>
                        <div>
                            <label>入住时间</label><span>袁德帅</span></div>
                        <div>
                            <label>房型</label><span>188-8888-8888</span></div>
                        <div>
                            <label>数量</label><span>18:30</span></div>
                        <div>
                            <label>下单时间</label><span>袁德帅</span></div>
                    </div>
                </div>
                <div class="list-bottom clearfix">
                    <label>订单总额：</label><span>¥</span><span>189</span>
                    <button class="weui_btn weui_btn_plain_primary comment_button" type="weui_btn_plain_primary">评价晒单</button>
                    <button class="weui_btn check_button">查看订单</button>
                </div>
            </li>
        </ul>
        <btn-load-more v-if='showLoadMore' id="btn-loadmore"></btn-load-more>
    </div>
    <!-- <div class="no-order" v-else>
    <div class="no-order-icon"><i class="fa fa-file-text-o"></i></div>
    <p>暂无此类订单</p>
    <a href="booking" class="weui_btn weui_btn_mini weui_btn_primary BtnColor">预定房间</a>
  </div> -->
</template>

<script>
import moment from 'moment';
import BtnLoadMore from './BtnLoadMore';
import {
    Button
} from 'vue-weui';
const $ = (el) => document.querySelectorAll(el);
let timeout = null;
const body = $('body')[0];
let btn = null;

export default {
    props: {
        orders: Array,
        showLoadMore: Boolean,
    },
    computed: {
        orderTime() {},
    },
    methods: {
        getCheckDate(time) {
            return moment(time * 1000).format('YYYY-MM-DD');
        },

        getOrderTime(time) {
            return moment(time * 1000).format('YYYY-MM-DD HH:mm');
        },

        scrollEvent() {
            if (!!timeout) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() => {
                if (btn.offsetTop - body.scrollTop - window.innerHeight + btn.clientHeight <= 0 && btn.clientHeight !== 0) {
                    this.$dispatch('loadMore');
                }
            }, 100);
        },
    },
    events: {
        bindScrollEvent() {
            btn = $('#btn-loadmore')[0];
            window.removeEventListener('scroll', this.scrollEvent);
            window.addEventListener('scroll', this.scrollEvent);
        },
    },
    ready() {},

    components: {
        BtnLoadMore,
        Button,
    },
};
</script>
