<style scoped>
	* {
		box-sizing: border-box;
	}
	.cover {
	    position: fixed;
	    z-index: 1;
	    left: 0;
	    top: 0;
	    width: 100vw;
	    height: 100vh;
	    background-color:  #EFEFF4;
	    color: #3D4248;
	}
	#head_success {
		line-height: 14vh;
		text-align: center;
		color: white;
		background-color: #09BB07;
	}
	#head_success i {
		vertical-align: middle;
		font-size: .22rem;
	}
	#head_success  span{
		font-family: '微软雅黑';
		margin-left: .1rem;
		vertical-align: middle;
		font-size: .2rem;
	}
	#head_other{
		display: table;
		height: 14vh;
		color: white;
		width: 100%;
		background-color: #09BB07;
		font-size: .1rem;
		font-family: '微软雅黑';
		padding-left: .12rem;
	}
	#head_other>div{
		display: table-cell;
			vertical-align: middle;
	}
	#head_other>div>p {

		font-size: .08rem;
	}
	#head_other>div p:nth-child(1) {

		font-size: .2rem;
	}

	.height{
		margin-top: .05rem;
		line-height: .48rem;
		font-size: .14rem;
		font-family: '微软雅黑';
		padding-left: .12rem;
		background-color: white;
		width: 100vw;
		border-bottom: 1px solid #DBDBDC;
	}
	.height label:nth-child(1){
		display: inline-block;
		font-weight: bold;
		width: 1.1rem;
	}
	.height span{
		font-weight: bold;
	}
	.way{
		margin-top: 5px;
		line-height: .48rem;
		font-size: .14rem;
		font-family: '微软雅黑';
		padding-left: .12rem;
		background-color: white;
		width: 100vw;
		border-bottom: 1px solid #DBDBDC;
		font-weight: bold;
	}
	a {
		color: inherit;
		display: inline-block;
	}
	.way i{
		margin-left: .46rem;
		color: #09BB07;
		font-size: .13rem
	}
	.way i:nth-child(3){
		margin-left: 1.15rem;
	}
	.way span{
		margin-left: .05rem;
	}
	.detail{
		margin-top: 5px;
		background-color: white;
		font-size: .14rem;
		font-family: '微软雅黑';
		padding-left: .12rem;
		padding-top: .1rem;
		padding-bottom: .12rem
	}
	.detail>div{
		margin-top: .024rem;
	}
	.detail>div span:nth-child(2){
		color: #888888
	}
	.detail div:nth-child(1) span{
		letter-spacing: 1px;
		color: #3D4248;
	}
	.detail>div span:nth-child(3){
		margin-left: .4rem
	}
	.detail>div label:nth-child(1){
		display: inline-block;
		font-weight: bold;
		width: 1.1rem;
	}
	.pay {
		border-bottom: 1px solid #DBDBDC;
	}
	.pay>div span:nth-child(2) {
		color: #888888;
	}
	.pay div:nth-child(3) span {
		color: #EC5800;
	}
	.pay div:nth-child(4) span {
		color: #EC5800;
	}
	.pay>div span:nth-child(3){
		margin-left: .05rem
	}
	.count_down label:nth-child(1){
		margin-left: 1.09rem;
		width: .95rem;
	}
	.count_down span{
		color: #EC5800;
		font-weight: normal;
	}
	#foot {
		color: #3D4248;
		width: 100vw;
		line-height: 9.9vh;
		background-color: white;
		position: fixed;
		bottom: 0;
		font-family: '微软雅黑';
		font-size: .17rem;
		padding-left: .12rem;
		padding-right: .12rem;
		height: 9.9vh;
	}

	#foot div{
		margin-top: .08rem;
		text-align: center;
		color:#A4A6AA;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: inline-block;
		line-height: .1rem;
	}
	#foot>span:nth-child(2){
		font-size: .1rem;
		margin-left: .05rem;
		color: #EC5800;
	}
	#foot span:nth-child(3){
		color: #EC5800;
		margin-left: .03rem;
	}
	.fa-angle-up {
		margin: auto 0;
		font-size: .22rem;
		 }
		 #foot div span{
		 	display: inline-block;
		 	margin-top: .04rem;
		font-size: .08rem;
	}
	.button {
		letter-spacing: 1px;
		font-family: '微软雅黑';
		display: inline-block;
		background-color:#EC5800;
		border-radius: 3px;
		position: absolute;
		right: .28rem;
		margin-top: .12rem;
		line-height: .36rem;
		font-size: .16rem;
		text-align: center;
		width: 1rem;
		color: white;
	}
	.comment  {
		background-color: white;
		border: 1px solid #09bb07;
		color: #09bb07
	}

</style>
<template>
	<div class="cover">
		<!-- <p id="head_success" v-if='Status == 1'><i class="fa fa-check-circle" aria-hidden="true"></i><span>订单提交成功</span></p> -->
		<div id="head_other">
			<div>
				<p v-if='orderDetail.status ==7'>已退款</p>
				<p v-if='orderDetail.status ==7'>亲，您的款项已退还，敬请查收。</p>
				<p v-if='orderDetail.status ==8'>已完成</p>
				<p v-if='orderDetail.status ==8'>亲，欢迎您再次入住本酒店，</p>
				<p v-if='orderDetail.status ==8'>您可点击下方点评按钮对我们客服进行评价。</p>
				<p v-if='orderDetail.status ==2'>待入住</p>
				<p v-if='orderDetail.status ==1'>待付款</p>
				<p v-if='orderDetail.status ==2'>亲，我们等待您的到来</p>
				<p v-if='orderDetail.status ==1'>亲，您有订单未支付，素素下单，我们等您45分钟</p>
			</div>
		</div>
		<div class="height"><label>酒店名称</label><span>{{orderDetail.name}}</span></div>
		<div class="way"><i class="fa fa-phone" aria-hidden="true"></i><a :href='"tel:"+orderDetail.hotelPhone'><span>联系酒店</span></a><i class="fa fa-map-marker" aria-hidden="true"></i><span>导航过去</span></div>
		<div class="detail">
			<div><label>{{orderDetail.room[0].roomTypeName}}</label><span>{{orderDetail.room[0].count}}间</span><span>共{{orderDetail.night}}晚</span></div>
			<div><label>入住时间</label><span>{{dateFormat(orderDetail.checkInDate)}} ~ {{dateFormat(orderDetail.checkOutDate)}}</span></div>
			<div><label>到店时间</label><span>{{orderDetail.arriveTime.substr(11,16)}}</span></div>
			<div><label>入住客人</label><span>{{orderDetail.userName}}</span></div>
			<div><label>联系电话</label><span>{{orderDetail.userPhone}}</span></div>
		</div>
		<div class="detail pay">
			<div><label>支付方式</label><span>{{orderDetail.paymentMethod == 1 ? '微信支付' : '到店支付'}}</span></div>
			<div><label>使用优惠</label><span>满199减10优惠券</span></div>
			<div><label>订单总价</label><span>¥</span><span>{{orderDetail.totalPrice}}</span></div>
			<div><label>实付总价</label><span>¥</span><span>{{orderDetail.actualPrice}}</span></div>
		</div>
		<div class="height count_down" v-if='orderDetail.status == 1'>
			<label>订单关闭时间</label><span id="timer">{{min}}:{{s}}</span>
		</div>
		<pay-Detail :detail="OrderDetail" :show="payDetailShow" :total-price="totalPrice" ></pay-Detail>
		<div id="foot">
			<label v-if='orderDetail.status == 1'>总价：</label><span v-if='orderDetail.status == 1'>¥</span><span v-if='orderDetail.status == 1'>{{userSelection.orderData.actualPrice}}</span>
			<div @click="showPayDatail"><p>&nbsp<i class="fa fa-angle-up" aria-hidden="true"></i></p><span>详情</span></div>
			<span class="button" v-if='orderDetail.status == 1' @click='paySubmit'>支付</span>
			<span class="button comment" v-if='orderDetail.status == 8' >去点评</span>
		</div>
		<toptips v-if='showTopTips'>支付超时，订单已取消</toptips>
    <toast type='loading' v-if='isRequest'>正在提交</toast>
    <div v-show='false' id="pay_html"></div>
	</div>
</template>
<script>
import { Toast, Toptips } from 'vue-weui';
import {getStates} from '../../vuex/getters.js';
import { Common } from '../scripts/common.js';
import PayDetail from './PayDetail.vue';

const timer = (limitTime, callback) => {
    const formatNum = num => num < 9 ? `0${num}` : num;
    const interval = () => {
      const now = parseInt(new Date().getTime() / 1000, 10);
      const remain = parseInt(limitTime, 10) - now;
      let min = Math.floor(remain / 60);
      let s = remain % 60;
      if (remain < 0) {
        callback('00','00',false);
        return false;
      }
			min = formatNum(min);
			s = formatNum(s);
			callback(min+"", s+"",true);
      setTimeout(interval, 1000);
    };
    interval();

  };
	export default {
		data() {
			return {
				totalPrice:0,
				payDetailShow:false,
				OrderDetail: [],
				showBox: false,
				isRequest: false,
				showTopTips: false,
				canPay: true,
				orderDetail:{},
				req: {
					orderId:this.userSelection.message.orderId,
					groupId:this.userSelection.orderData.groupId
				},
				min:'45',
				s:'00',
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
				dateFormat(date) {
						return date.replace(/-/g, '.').substr(0,10);
				},
				showPayDatail() {
		      this.payDetailShow = true;
		      window.scrollTo(0, 0);
	    	},
		},
		events: {
	    hidePayDatail() {
	      this.payDetailShow = false;
	    },
	  },
		ready() {
			//初始化数据，
			const _this = this;
			Common.resource("get",api+'/api/orderDetail',this.req,function(obj){
				_this.orderDetail = obj;
				_this.OrderDetail = obj.room;
				_this.totalPrice = obj.actualPrice;
			});

			setTimeout(() => {

        const $timer = $('#timer');
        const $btnPay = $('#btn-pay');
        timer(1476758159 + (45 * 60), (min,s,isCanPay) => {
					_this.min = min;
					_this.s = s
          $btnPay.className += ' weui_btn_disabled';
          _this.canPay = isCanPay;
        });
        // console.log(JSON.parse(JSON.stringify(this.curOrderData)));
      }, 100);
		},
		components:{
				Toast, Toptips,PayDetail
		},
		vuex: {
			getters :{
				userSelection: getStates.getUserSelection,
			},
			actions :{
				//setMessages,
			}
		},
	}
</script>
