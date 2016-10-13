<style lang='less' scoped>
  @import url('../../../booking/components/fragments/BookDetail.less');

  @majorColor: #12B355;
  .weui_btn_primary {
    border-radius: 3px;
    background-color: @majorColor;
  }
  .weui_btn_primary:not(.weui_btn_disabled):active{
    background-color: desaturate(@majorColor, 20%);
  }
  .detail-bottom-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #fff;
    border-top:1px solid #eee;

    .btn-openDetail{
      width: 15vw;
      text-align: center;
      line-height: 4.6vw;
      color: #999;
      font-size: 4.6vw;
      cursor: pointer;
      &:active{
        background-color: rgba(0,0,0,0.07);
      }

      i{
        font-size: 1rem;
      }
    }

    .time-container{
      padding-left: 10px;
      font-size: 4.6vw;
      color: #999;
      line-height: 41px;
      .timer{
        text-align: center;
        line-height: 2rem;
        color: #EC5800;
      }
    }

    .pay-container{
      padding: 0 10px;
      .btn-pay{
        font-size: 4.6vw;
        padding: 2px 6vw;
      }
    }
  }
  .charge-detail-box{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.85);
    color: #fff;

    .box-header{
      margin: 40px auto 0;
      text-align: center;
      font-weight: normal;
    }

    .box-body{
      margin: 20px 20px 0;
      overflow: auto;
      max-height: 50%;

      .box-subTitle{
        padding: 5px 0;
        font-weight: normal;
        border-bottom: 1px solid #D9D9D9;
      }

      ul{
        margin-bottom: 10px;
        padding: 5px;
        list-style: none;
        border-bottom: 1px solid #D9D9D9;
        li{
          padding: 10px 0;
          font-size: .875rem;
          line-height: 1rem;
        }

        .room-name, .room-coupon-price, .room-payment-discount{
          text-align: right;
        }
      }
    }

    .box-footer{
      margin: 20px 20px 0;
      .order-price{
        text-align: right;
        .price-text{
          color: #EC5800;
        }
      }

      .btn-close{
        position: absolute;
        padding: 5px;
        left: 50%;
        margin-left: -16px;
        bottom: 30px;
        cursor: pointer;
        font-size: 1.6rem;
        color: #BF3F3F;
      }
    }
  }
</style>
<template>
  <div class="detail-bottom">
    <div class="flex detail-bottom-bar">
      <div class="flex-item time-container">
        订单关闭时间：<span class="timer" id="timer">00:00</span>
      </div>
      <div class="btn-openDetail" @click='showBox = true'>
        <i class="fa fa-angle-up"></i><br>详单
      </div>
      <div class="pay-container">
        <a class="btn-pay weui_btn weui_btn_primary BtnColor" id="btn-pay" @click='paySubmit'>
          立即支付
        </a>
      </div>
    </div>
<!--  detail -->

<div class="book-detail" :class="{'slideUp':showBox}" v-if="showBox">
  <h2>
    费用明细
  </h2>
  <div class="body">
  <section>
    <h3>
      房费
    </h3>
    <div class="detail-item flex" v-for="room in curOrderData.OrderPriceExtend">
      <div class="txt-left flex-item">
        {{room.ReleaseDate}}
      </div>
      <div class="txt-right flex-item">
        <p>
          {{room.RoomTypeName}}
        </p>
        <p>
          ¥{{room.Price.toFixed(2)}} x {{room.ReservationCount}}间
        </p>
      </div>
    </div>
  </section>

  <section class="dash-line" v-if="curOrderData.TotalGiftPrice>0||curOrderData.PaymentDiscount>0">
    <h3>
      优惠
    </h3>
    <div class="detail-block">
      <div class="detail-item flex" v-if="curOrderData.TotalGiftPrice>0">
        <div class="txt-left flex-item">
          {{curOrderData.GiftExtend.Name}}
        </div>
        <div class="txt-right flex-item">
          -¥{{curOrderData.TotalGiftPrice.toFixed(2)}} x 1张
        </div>
      </div>
      <div class="detail-item flex" v-if="curOrderData.PaymentDiscount>0">
        <div class="txt-left flex-item">
          支付减免
        </div>
        <div class="txt-right flex-item">
          -¥{{curOrderData.PaymentDiscount.toFixed(2)}}
        </div>
      </div>
    </div>
  </section>
  </div>
  <footer>
    <p class="txt-right">订单金额：
      <span class="ThemeAuxColor">
        ¥{{curOrderData.PaymentPrice.toFixed(2)}}
      </span>
    </p>
  <a href="javascript:void(0);" class="btn-role ThemeAuxColor" @click="showBox = false">
    <i class="fa fa-times-circle">
    </i>
  </a>
  </footer>
</div>
<!-- endof detail -->

    <toptips v-if='showTopTips'>支付超时，订单已取消</toptips>
    <toast type='loading' v-if='isRequest'>正在提交</toast>
    <div v-show='false' id="pay_html"></div>
  </div>
</template>
<script>
  import { Toast, Toptips } from 'vue-weui';

  const $ = (el) => document.querySelector(el);
  const timer = (limitTime, el, callback) => {
    const formatNum = num => num < 9 ? `0${num}` : num;
    const interval = () => {
      const now = parseInt(new Date().getTime() / 1000, 10);
      const remain = parseInt(limitTime, 10) - now;
      let min = Math.floor(remain / 60);
      let s = remain % 60;
      if (remain < 0) {
        callback();
        return false;
      }

      min = formatNum(min);
      s = formatNum(s);
      Object.assign(el, {
        innerHTML: `${min}:${s}`,
      });
      setTimeout(interval, 1000);
    };
    interval();
  };
  export default {
    data() {
      return {
        showBox: false,
        canPay: true,
        showTopTips: false,
        isRequest: false,
      };
    },

    methods: {
      paySubmit() {
        if (this.canPay) {
          if (this.isRequest) {
            return false;
          }

          this.isRequest = true;
          const _this = this;
          this.$http.post(this.curOrderData.PayUrl).then((rsp) => {
            if (rsp.status === 200 && rsp.data.error_code === 0) {
              // 请求成功
              $('#pay_html').innerHTML = rsp.data.data;
              document.forms.wxpaysubmit.submit();
            }

            _this.isRequest = false;
          }).catch(() => {
            _this.isRequest = false;
          });
        } else if (this.showTopTips === false) {
          this.showTopTips = true;
          setTimeout(() => this.showTopTips = false, 3000);
        }
      },
    },
    props: {
      curOrderData: Object,
    },
    ready() {
      setTimeout(() => {
        const $timer = $('#timer');
        const $btnPay = $('#btn-pay');
        timer(parseInt(this.curOrderData.OrderTime, 10) + (45 * 60), $timer, () => {
          $btnPay.className += ' weui_btn_disabled';
          this.canPay = false;
        });
        // console.log(JSON.parse(JSON.stringify(this.curOrderData)));
      }, 100);
    },

    components: {
      Toptips,
      Toast,
    },
  };
</script>
