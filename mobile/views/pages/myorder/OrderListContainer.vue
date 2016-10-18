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
                    &.finish_status {
                      color: #09BB07;
                    }
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
            padding: 5px 0;

            box-sizing: border-box;
            div:nth-child(1) {
              display: inline-block;
              line-height: .36rem;
              label {
                  font-weight: bold;
                  font-size: .15rem;
                  // &:after {
                  //   content: '.';
                  //   width: 0;
                  //   height: 0;
                  //   clear: both;
                  //   visibility: hidden;
                  //   display: block;
                  // }
              }
              span {
                  margin-left: .06rem;
                  font-size: .1rem;
                  color: #ec5800;
              }
              span:nth-child(3) {
                  font-size: .15rem;
                  margin-left: .05rem;
              }
            }
            .button {
              margin-left: 5px;
              letter-spacing: 1px;
              line-height: .36rem;
              text-align: center;
          		width: 1rem;
          		font-size: .16rem;
          		font-family: '微软雅黑';
          		border-radius: 5px;
          		display: inline-block;
              float: right;
              color: white;
              &.comment_btn {
                border: 1px solid #09BB07;
                color: #09BB07
              }
              &.check_btn {
                background-color: #09BB07;
              }
              &.pay_btn {
                background-color:#EC5800;
              }
          	}
            // .button {
            //     position: absolute;
            //     right: 1.05rem;
            //     border: 1px solid #09BB07;
            //     width: 1rem;
            //     line-height: .36rem;
            //     height: .36rem;
            // }
            // .button {
            //     position: absolute;
            //     right: 0rem;
            //     width: 1rem;
            //     height: .36rem;
            //     line-height: .36rem;
            //     top: -.1rem;
            //     background-color: #09BB07
            // }
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
    <div class="order-list-container" v-if="orders.length > 0">
        <ul>
            <li v-for="item in orders">
                <div class="list-top">
                    <span>{{item.name}}</span>
                    <!-- OrderType: 1=待支付 2=待入住 3=已入住 4=已拒绝 5=已取消(系统)
                          6=已取消(租户), 7=已退款  8=已完成 9=待退款 10=待确认 -->
                    <span class="order-status" v-if='item.status == 1'>待付款</span>
                    <span class="order-status" v-if='item.status == 2'>待入住</span>
                    <span class="order-status" v-if='item.status == 3'>已入住</span>
                    <span class="order-status" v-if='item.status == 4'>已拒绝</span>
                    <span class="order-status" v-if='item.status == 5'>已取消</span>
                    <span class="order-status" v-if='item.status == 6'>已取消</span>
                    <span class="order-status" v-if='item.status == 7'>已退款</span>
                    <span class="order-status" :class="{finish_status : item.status = 8}" v-if='item.status == 8'>已完成</span>
                    <span class="order-status" v-if='item.status == 9'>待退款</span>
                    <span class="order-status" v-if='item.status == 10'>待确认</span>
                </div>
                <div class="flex list-center">
                    <div class="flex-item order-detail">
                        <div>
                            <label>订单号</label><span>{{item.id}}</span></div>
                        <div>
                            <label>入住时间</label><span>{{dateFormat(item.checkInDate)}} ~ {{dateFormat(item.checkOutDate)}}</span></div>
                        <div>
                            <label>房型</label><span>{{item.room.type}}</span></div>
                        <div>
                            <label>数量</label><span>{{item.room.orderNum}} 间</span></div>
                        <div>
                            <label>下单时间</label><span>{{orderTimeFormat(item.date)}}</span></div>
                    </div>
                </div>
                <div class="list-bottom clearfix">
                    <div>
                      <label>订单总额：</label><span>¥</span><span>{{item.actualPrice}}</span>
                    </div>
                    <span class="button check_btn" @click='detailRouter(item.id)' v-if='item.status != 1'>查看订单</span>
                    <span class="button comment_btn" v-if='item.status == 8'>{{item.bComment == 0 ? '评价晒单' : '已点评'}}</span>
                    <span class="button pay_btn" v-if='item.status == 1'>支付订单</span>
                    <!-- <div class="clearfloat"></div> -->
                </div>
            </li>
        </ul>
        <btn-load-more v-if='showLoadMore' id="btn-loadmore"></btn-load-more>
    </div>
    <div class="no-order" v-else>
      <div class="no-order-icon"><i class="fa fa-file-text-o"></i></div>
      <p>暂无此类订单</p>
      <a href="booking" class="weui_btn weui_btn_mini weui_btn_primary BtnColor">预定房间</a>
    </div>
</template>

<script>
import moment from 'moment';
import BtnLoadMore from './BtnLoadMore';
import {getStates} from '../../../vuex/getters.js';
import {setMessages} from '../../../vuex/actions.js';
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
        detailRouter(_orderId) {
          this.setMessages({orderId:_orderId});
          console.log(this.userSelection.message);
          this.$router.go('order_detail')
        },
        dateFormat(time) {
            return moment(time).format('YYYY年MM月DD日');
        },

        orderTimeFormat(time) {
            return moment(time).format('YYYY年MM月DD日 HH:SS');
        },

        scrollEvent() {
            if (!!timeout) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() => {
                if (btn.offsetTop - body.scrollTop - window.innerHeight + btn.clientHeight <= 0 && btn.clientHeight !== 0) {
                    this.$dispatch('loadMore');
                    console.log('loadMore');
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
    vuex: {
			getters :{
				userSelection: getStates.getUserSelection,

			},
			actions :{
				setMessages,
			}
		},
};
</script>
