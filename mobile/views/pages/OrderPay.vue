<style lang="less" scoped>
	.cover {
	    position: fixed;
	    z-index: 1;
	    left: 0;
	    top: 0;
	    width: 100vw;
	    height: 100vh;
	    background-color: #EFEFF4;
	}
	#head{
		background-color: #09BB07;
		padding-top: 0.12rem;
		padding-bottom: 0.1rem;
	}
	#head p{
		letter-spacing: 1px;
		font-family: '微软雅黑';
		color: white;
		font-size: 0.13rem;
		margin-left: .12rem;
	}
	#head p:nth-child(2){
		margin-top: .05rem;
	}
	#head p:nth-child(3){
		margin-top: .05rem;
	}
	#head p span:nth-child(2){
		margin-left: .12rem;
	}
	.height {
		color: #3D4248;
		display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
 		 display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
 		 display: -ms-flexbox;      /* TWEENER - IE 10 */
 		 display: -webkit-flex;
		display: flex;
		margin-top: .06rem;
		background-color: white;
		line-height: .46rem;
		align-items: center;
		padding-left: .12rem;
	}
	.height label:nth-child(1) {
		letter-spacing: 1px;
		font-family: '微软雅黑';
		font-size: .14rem;
		width: 21vw;
		color: #3D4248;
		font-weight: bold;
	}
	input {
		font-size: 0.14rem;
		font-family: '微软雅黑';
		width: 60vw;
		line-height: .28rem;
		border-radius: 3px;
		border: 1px solid #E3E3E3;
		background-color: #EFEFEF;
		padding-left: .12rem;
	}
	.height span {
		font-family: '微软雅黑';
		font-size: .14rem;
	}
	.height label:nth-child(3) {
		position: absolute;
		font-family: '微软雅黑';
		font-size: .14rem;
		right: .12rem;
		color: #3D4248;
		font-weight: bold;
	}
	.vip {
		border-bottom: 1px solid #DBDBDC;
		margin-top: .05rem;
	}
	.room{
		border-bottom: 1px solid #DBDBDC;
	}
	.phone {
		margin-top: 0;
		border-bottom: 1px solid #DBDBDC;
	}
	.time{
		border-bottom: 1px solid #DBDBDC;
	}
	.weui_cell {
		padding: 0;
		width: 2.7rem;
		height: .19rem;
	}
	.weui_cell::before{
		height: 0;
		border: none;
	}
	.coupon{
		border-bottom: 1px solid #DBDBDC;
	}
	.coupon span {
		color: #EC5800
	}
	.pay {
		display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
 		 display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
 		 display: -ms-flexbox;      /* TWEENER - IE 10 */
 		 display: -webkit-flex;
		display: flex;
		margin-top: .06rem;
		background-color: white;
		height: .7rem;
		padding-top: .15rem;
		padding-left: .12rem;
	}
	.pay label:nth-child(1) {
		letter-spacing: 1px;
		font-family: '微软雅黑';
		font-size: .14rem;
		width: 21vw;
		color: #3D4248;
		font-weight: bold;
	}
	.button {
		letter-spacing: 1px;
		line-height: .36rem;
		height: .36rem;
		width: 1rem;
		text-align: center;
		font-size: .16rem;
		font-family: '微软雅黑';
		border-radius: 5px;
		display: inline-block;
	}
	.weixin_btn {
		border: 1px solid #09BB07;
		color: #09BB07;
		&.checked_weixin {
			color: white;
			background-color: #09BB07;
		}
	}
	.daofu_btn{
		border: 1px solid #EC5800;
		color: #EC5800;
		margin-left: .5rem;
		&.checked_daofu {
			color: white;
			background-color: #EC5800;
		}
	}
	.pay div {
		position: relative;
	}
	.pay p {
		line-height: .08rem;
		margin-top: 10px;
		margin-left: .05rem
	}
	.fa-check-circle {
		font-size: .1rem;
		color: #09BB07
	}
	.pay p span{
		color: #09BB07;
		font-size: .08rem;
		margin-left: .02rem;
	}
	#foot {
		box-sizing: border-box;
		color: #3D4248;
		width: 100vw;
		line-height: .6rem;
		background-color: white;
		position: fixed;
		bottom: 0;
		font-family: '微软雅黑';
		font-size: .17rem;
		padding: 0 .12rem;
	}
	#foot>span:nth-child(2){
		color: #EC5800
	}
	#foot>span:nth-child(3){
		color: #EC5800
	}
	#foot span:nth-child(2){
		font-size: .1rem;
		margin-left: .05rem;
	}
	#foot span:nth-child(3){
		margin-left: .03rem;
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
	.fa-angle-up {
		margin: auto 0;
		font-size: .22rem;
		 }
		 #foot div span{
		 	display: inline-block;
		 	margin-top: .04rem;
		font-size: .08rem;
	}
	.submit_btn {
		color: white;
		background-color:#EC5800;
		float: right;
		margin-top: .12rem
	}
	.weui_toast {
		width: 1.25rem;
		height: 1.4rem;
		margin-left: 0;
		transform: translateX(-50%);
		.icon_toast {
	        margin: 22px 0 10px;
	        display: block;
	        font-size: .4rem;
	    }
		.weui_toast_content {
				font-size: .16rem;
				padding: 0 12px;
		}
	}
</style>
<template>
	<div class="cover">
		<div id="head">
			<p>{{req.hotelName}}</p>
			<p><span>住离时间</span><span>{{timeFormat(req.checkInDate)}}-{{timeFormat(req.checkOutDate)}}</span></p>
			<p><span>已选房型</span><span>{{req.room[0].type}}</span></p>
		</div>
		<div class="height vip" v-if='isVIP === true'>
			<label>会员等级</label>
			<span>钻石会员</span>
		</div>
		<div class="height room">
			<label>房间数量</label>
			<input placeholder='每个订单最多可预订3间客房' type="number" v-model='FormData.count' name="ReservationCount" @input='inputRoomQuantity'></input>
			<label>间</label>
		</div>
		<div class="height name">
			<label>姓名</label>
			<input placeholder='请输入联系人姓名' v-model='req.name'></input>

		</div>
		<div class="height phone">
			<label>联系电话</label>
			<input placeholder='请输入联系人电话' type='tel' v-model='req.phone'></input>

		</div>
		<div class="height time">
			<label>到店时间</label>
			<input-cell :value.sync="req.arriveTime" type="time" ></input-cell>
		</div>
		<div class="height coupon">
			<label>优惠券</label>
			<span>一张可用</span>

		</div>
		<div class="pay">
			<label>支付方式</label>
			<div>

				<span class="button weixin_btn" :class="{checked_weixin: FormData.paymentType === 1}" @click='FormData.paymentType = 1'>微信支付</span>
				<p><i class="fa fa-check-circle" aria-hidden="true"></i><span>支付减免¥10元</span></p>
			</div>
			<span class="button daofu_btn" :class="{checked_daofu: FormData.paymentType === 2}" @click='FormData.paymentType = 2'>到店支付</span>
		</div>
		<div id="foot">
			<label>总价：</label><span>¥</span><span>{{req.actualPrice}}</span>
			<div @click="showPayDatail"><p>&nbsp<i class="fa fa-angle-up" aria-hidden="true"></i></p><span>详情</span></div>
			<span class="button submit_btn" @click='submitOrder'>提交订单</span>
		</div>
		<pay-Detail :detail="OrderDetail" :show="payDetailShow" :total-price="req.actualPrice" ></pay-Detail>
		<div v-show="toast.toastShow">
      <div class="weui_mask_transparent"></div>
      <div class="weui_toast">
        <i class="icon_toast fa fa-minus-circle"></i>
        <div class="weui_toast_content">{{toast.toastText}}</div>
      </div>
    </div>
	</div>
</template>
<script>
	import {Icon} from'vue-weui';
	import {
  Actionsheet,
  CellsTitle,
  CellsTips,
  Cells,
  Cell,
  RadioCell,
  SwitchCell,
  InputCell,
  SelectCell,
  CellInput,
  Toast,
  Dialog,
}
from 'vue-weui';
	import {getStates} from '../../vuex/getters.js';
	import {setOrderData} from '../../vuex/actions.js';
	import { Common } from '../scripts/common.js';
	import PayDetail from './PayDetail.vue';
	import moment from 'moment';
	let updateNameTimeout;
	let updateMobileTimeout;
	let updateTimeTimeout;
	let updateCommentTimeout;
	export default {
		data() {
			return {
				test:1,
				payDetailShow:false,
				req: this.getUserSelection.orderData,
				FormData :{
					groupId:this.getUserSelection.orderData.groupId,
					hotelId:this.getUserSelection.orderData.hotelId,
					checkInDate:this.getUserSelection.orderData.checkInDate,
					checkOutDate:this.getUserSelection.orderData.checkOutDate,
					roomTypeCode:this.getUserSelection.orderPrice.roomTypeCode,
					priceTypeCode:this.getUserSelection.orderPrice.priceTypeCode,
					packageName:this.getUserSelection.orderPrice.packageName,
					count:Number,
					paymentType:1,//支付类型(1: 支付宝2: 微信4: 到店支付99: 会员支付100: 月结)
				}	,
				toast: {
        	toastShow: false,
        	toastText: '',
      	},
				OrderDetail: [],
			};
		},
		watch: {
	    // 'FormData.Coupon'(value) {
	    //   updateFormdata({
	    //     Coupon: value,
	    //   });
	    //   this.getTotalPrice();
	    // },
	    'FormData.paymentType'() {
	      this.getTotalPrice();
	    },
  	},
		methods: {
			inputRoomQuantity({
	      target: {
	        value,
	      },
	      }) {

	      const _this = this;
				//console.log(value);
	      // 最大订房数：min(3，房型剩余数，协议客可订房数)
	      const MAX_COUNT = 3;//Math.min(!!window.Pact && window.Pact.RoomCount || 3,_this.FormData.Remainders);
	      if (!value) {
	        return;
	      }
	      let quantity = parseInt(value, 10);
	      if (quantity > MAX_COUNT) {
	        quantity = MAX_COUNT;
	        _this.$dispatch('toastError', '已超过订房上限');
	      } else if (!(quantity > 1)) {
	        quantity = 1;
	      }
	      const $ReservationCount = document.querySelector(
	        'input[name="ReservationCount"]');

	      $ReservationCount.value = quantity;
				//console.log(quantity);
	      // updateFormdata({
	      //   ReservationCount: quantity,
	      // });
	      _this.getTotalPrice();
    	},
			getTotalPrice() {
		      const _this = this;
		      const ajaxparams = Common.reqString(this.FormData);//window.getEnumerableSet(this.FormData);
					//console.log(ajaxparams);
					//
		      this.$http.get(api+'/api/orderPrice'+ ajaxparams)
		        .then((res) => {
							console.log(JSON.parse(res.body));
							let data = JSON.parse(res.body);
							_this.req.totalPrice = data.totalPrice + data.paymentDiscount;
							_this.req.actualPrice = data.totalPrice;
							console.log(data.totalPrice);
							console.log(_this.req.actualPrice);
							_this.OrderDetail = data.dailyPriceList;
							//_this.OrderDetail[0].date = _this.OrderDetail[0].date.replace(/\-/g,'.');
		          // if (status === 200) {
		          //   if (errorCode === 0) {
		          //     updateFormdata({
		          //       TotalPrice: data.TotalPrice,
		          //       PaymentPrice: data.PaymentPrice,
		          //       PaymentDiscount: data.PaymentDiscount,
		          //     });
		          //     this.OrderDetail = window.getEnumerableSet(data);
		          //   } else {
		          //     _this.toast.toastShow = true;
		          //     _this.toast.toastText = errorMsg;
		          //     setTimeout(() => {
		          //       _this.toast.toastShow = false;
		          //     }, 2000);
		          //   }
		          // }
		        });
		    },
			submitOrder() {
				this.req.room[0].orderNum = this.FormData.count;
				this.req.paymentMethod = this.FormData.paymentType
				this.setOrderData(this.req);
				const _this = this;
				console.log(this.req.room[0].orderNum);
						// 是否填写姓名
					if (this.req.room[0].orderNum == Number)
					{
						_this.$dispatch('toastError', '请输入房间数量');
						return;
					}
				 		// 是否填写姓名
					if (this.req.name==null || this.req.name=="")
					{
						_this.$dispatch('toastError', '请填写联系人姓名！');
						return;
					}
					// 手机号验证
				 if (!/^\d{11}$/.test(_this.req.phone)){	//ajaxparams.ContactPhone)) {
					 _this.$dispatch('toastError', '请输入合法手机号码');
					 return;
				 }
				 // 到店时间验证
				 const now = moment().format('x');
				 console.log(this.req.arriveTime);
				 const timestamp = moment(`${this.req.checkInDate} ${this.req.arriveTime}`,'YYYY-MM-DD hh:mm').format('x');
				 console.log(now +":" +timestamp);
				 if(now >= timestamp) {
					 _this.$dispatch('toastError', '到店时间不能小于当前时间');
					 return;
				 }
				 this.$http.post(api+'/api/orders',_this.req)
					 .then((data) => {
						 console.log(JSON.parse(data.body));
						 _this.$router.go('order_result')
						 // if (status === 200) {
						 //   if (errorCode === 0) {
						 //     updateFormdata({
						 //       TotalPrice: data.TotalPrice,
						 //       PaymentPrice: data.PaymentPrice,
						 //       PaymentDiscount: data.PaymentDiscount,
						 //     });
						 //     this.OrderDetail = window.getEnumerableSet(data);
						 //   } else {
						 //     _this.toast.toastShow = true;
						 //     _this.toast.toastText = errorMsg;
						 //     setTimeout(() => {
						 //       _this.toast.toastShow = false;
						 //     }, 2000);
						 //   }
						 // }
					 });
			},
			showPayDatail() {
	      this.payDetailShow = true;
	      window.scrollTo(0, 0);
    	},
			timeFormat(time) {
				return Common.timeFormat(time,'MM月dd日');
			},
	},
	events: {
    hidePayDatail() {
      this.payDetailShow = false;
    },
    toastError(data) {
      const _this = this;
      _this.toast.toastShow = true;
      _this.toast.toastText = data;
      setTimeout(() => {
        _this.toast.toastShow = false;
      }, 2000);
    },
  },
		components:{
			PayDetail,
			Icon,
			CellsTitle,
		    CellsTips,
		    Cells,
		    Cell,
		    RadioCell,
		    SwitchCell,
		    InputCell,
		    SelectCell,
		    CellInput,
				Toast,
		},
		ready() {
		},
		vuex: {
			getters :{
				getUserSelection: getStates.getUserSelection,
			},
			actions :{
				setOrderData,
			}
		},
	}
</script>
