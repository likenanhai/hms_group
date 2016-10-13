<style lang='less' scoped>

	.cover {
	    position: fixed;
	    z-index: 1;
	    left: 0;
	    top: 0;
	    width: 100vw;
	    height: 100vh;
	    background-color: rgba(0, 0, 0, .92);
	    padding: 0 .12rem;
			opacity: 0;
			transition: all .3s ease-in;
  		transform: translate3d(0,100%,0);
			&.slideUp {
			transform: none;
			opacity: 1;
			}
		.cell {
			width:93.6%;
			color: white;
			font-size: .14rem;
			font-family: '微软雅黑';
			line-height: .48rem;
			border-bottom: 1px solid #757778;
			span {
				float: right;
				color: #EC5800
			}
		}
		.last {
			border-bottom: none;
		}
		.cell:nth-child(1) span{
				color: white;
		}
		p {
			width:93.6%;
			margin: .1rem 0 .1rem 0;
			color: white;
			font-size: .17rem;
			font-family: '微软雅黑';
			text-align: center;
			letter-spacing: 2px;
		}
		.foot {
			position: absolute;
			bottom: 8px;
			text-align: center;
			width: 93.6vw;
			.button{
				margin: 0 auto;
				font-size: .2rem;
				width: .45rem;
				height: .45rem;
				border-radius: 50%;
				background-color: #09BB07;
				color: white;

				div {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translateX(-50%);
					font-size: .08rem;
				}
			}
		}
	}
</style>
<template>
	<div class="cover" :class="{'slideUp':show}">
		<div class="cell">
			<label>费用明细</label><span v-if="detail[0].date">{{dateFormat(detail[0].date)}}</span>
		</div>
		<p>房费</p>
		<div class="cell">
			<label>{{detail[0].roomTypeName}}</label><span>¥&nbsp{{detail[0].price.toFixed(2)}}X1&nbsp间</span>
		</div>
		<p>优惠</p>
		<div class="cell">
			<label>优惠券</label><span>-&nbsp¥&nbsp10.00</span>
		</div>
		<div class="cell last" >
			<label>实付金额</label><span>¥&nbsp190.00</span>
		</div>
		<div class="foot">
			<div class="button" @click="closeWrap">
				<i class="fa fa-angle-down arrow"></i>
				<div>收回</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['show', 'detail'],
		data() {
			return {
				isShow: true,
				title: '123',
			};
		},
		ready(){
			console.log(this.detail[0].date);
		},
		methods: {
			dateFormat(date) {
					return date.replace(/-/g, '.');
			},
		 closeWrap() {
			 this.$dispatch('hidePayDatail');
		 },
	 },
	}
</script>
