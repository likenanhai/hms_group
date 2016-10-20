<style scoped>
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
	.way i{
		margin-left: .46rem;
		color: #09BB07;
		font-size: .13rem
	}
	.way i:nth-child(3){
		margin-left: 1.2rem;
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
		right: .4rem;
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
		<p id="head_success"><i class="fa fa-check-circle" aria-hidden="true"></i><span>订单提交成功</span></p>
		<!-- <div id="head_other" v-if='Status != 1'>
			<div>
				<p>{{Title}}</p>
				<p>亲，我们等待您的到来</p>
				<p v-if='Status == 2'>您可点击下方点评按钮对我们客服进行评价</p>
			</div>
		</div> -->
		<div class="height"><label>酒店名称</label><span>{{userSelection.orderData.hotelName}}</span></div>
		<div class="way"><i class="fa fa-phone" aria-hidden="true"></i><span>联系酒店</span><i class="fa fa-map-marker" aria-hidden="true"></i><span>导航过去</span></div>
		<div class="detail">
			<div><label>{{userSelection.orderData.room[0].type}}</label><span>{{userSelection.orderData.room[0].orderNum}}间</span><span>共{{userSelection.orderData.night}}晚</span></div>
			<div><label>入住时间</label><span>{{dateFormat(userSelection.orderData.checkInDate)}}~{{dateFormat(userSelection.orderData.checkOutDate)}}</span></div>
			<div><label>到店时间</label><span>{{userSelection.orderData.arriveTime}}</span></div>
			<div><label>入住客人</label><span>{{userSelection.orderData.name}}</span></div>
			<div><label>联系电话</label><span>{{userSelection.orderData.phone}}</span></div>
		</div>
		<div class="detail pay">
			<div><label>支付方式</label><span>{{userSelection.orderData.paymentMethod == 1 ? '微信支付' : '到店支付'}}</span></div>
			<div><label>使用优惠</label><span>满199减10优惠券</span></div>
			<div><label>订单总价</label><span>¥</span><span>{{userSelection.orderData.totalPrice}}</span></div>
			<div><label>实付总价</label><span>¥</span><span>{{userSelection.orderData.actualPrice}}</span></div>
		</div>
		<!-- <div class="height count_down" v-if='Status == 3'>
			<label>订单关闭时间</label><span>45:00</span>
		</div>
		<div id="foot" v-if='Status != 1'>
			<label v-if='Status == 3'>总价：</label><span v-if='Status == 3'>¥</span><span v-if='Status == 3'>{{userSelection.orderData.actualPrice}}</span>
			<div><p>&nbsp<i class="fa fa-angle-up" aria-hidden="true"></i></p><span>详情</span></div>
			<span class="button" v-if='Status == 2 || Status ==3':class='{comment: Status === 2}'>{{BtnMsg}}</span>
		</div> -->
	</div>
</template>
<script>

import {getStates} from '../../vuex/getters.js';
	export default {
		data() {
			return {
				//1成功 2已完成 3待付款 4其他
				Status:3,
				Title:'',
				BtnMsg:'支付'
			};
		},
		methods: {
				dateFormat(date) {
						return date.replace(/-/g, '.');
				},
		},
		ready() {
			console.log(this.userSelection.orderData.room[0].type);
		},
		components:{

		},
		vuex: {
			getters :{
				userSelection: getStates.getUserSelection,

			},
			actions :{
				//setOrderData,
			}
		},
	}
</script>
