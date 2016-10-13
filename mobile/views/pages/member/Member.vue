<style lang='less' scoped>
	.cover {
	    position: fixed;
	    z-index: 1;
	    left: 0;
	    top: 0;
	    width: 100vw;
	    height: 100vh;
	    background-color:  #EFEFF4;
	    overflow: scroll;
		.member_top{
			 box-sizing:border-box;
			-moz-box-sizing:border-box; /* Firefox */
			-webkit-box-sizing:border-box; /* Safari */
			 padding-top: .12rem;
	    	 height: 1.5rem;
	    	 width: 100vw;
   			 background: -webkit-linear-gradient(left, #5386C6 , #B9D5EE); /* Safari 5.1 - 6.0 */
   			 background: -o-linear-gradient(right, #5386C6, #B9D5EE); /* Opera 11.1 - 12.0 */
             background: -moz-linear-gradient(right, #5386C6, #B9D5EE); /* Firefox 3.6 - 15 */
             background: linear-gradient(to right, #5386C6 , #B9D5EE); /* 标准的语法（必须放在最后） */
             div {
             	margin: 0 auto;
             	img{
             		margin: 0 auto;
             		display: block;
             	width: .72rem;
             	height: .72rem;
             	border-radius: 50%;
             	border: 3px solid white;
             	}
				div:nth-child(2) {
				position: relative;
				top: -.1rem;
             	width: .9rem;
             	height: .25rem;
             	border-radius: 30px;
             	background-color: white;
             	color: #d6ae3c;
             	font-size: .14rem;
             	text-align: center;
             	}
             	p {
             		padding-top: .02rem;
             		text-align: center;
             		margin: 0 auto;
             		font-size: .13rem;
             		font-family: '微软雅黑';
             		color: white;
             		span {
             			margin-left: .1rem;
             		}
             	}
             }
	    }
	    .member_center {
	    	margin-bottom: 5px;
	    	box-sizing: border-box;
	    	height: 1.54rem;
	    	width: 100vw;
	    	background-color: white;
	    	padding-left: .12rem;
	    	padding-right: .12rem;
	    	padding-top: .17rem;
	    	line-height: .3rem;
	    	border-bottom: 1px solid #E0E0E1;
			.button{
				letter-spacing: 1px;
				font-family: '微软雅黑';
				font-size: .16rem;
				display: block;
				line-height: .45rem;
			}
			ul {
				display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
			    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
			    display: -ms-flexbox;      /* TWEENER - IE 10 */
			    display: -webkit-flex;     /* NEW - Chrome */
			    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
			    li {
			    	text-align: center;
			    	-webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
				      -moz-box-flex: 1;         /* OLD - Firefox 19- */
				      width: 20%;               /* For old syntax, otherwise collapses. */
				      -webkit-flex: 1;          /* Chrome */
				      -ms-flex: 1;              /* IE 10 */
				      flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
				    img {
						width: .31rem;
						margin-top: .2rem
						}
					p{
						font-size: .075rem;
						margin-top: -2px;
					}  
			    }
			}
			
	    }
	}
	
</style>
<template>
	<div class="cover">
		<div class="member_top">
			<div>
				<img src="/assets/images/img_light_red_30x30.png">
				<div>钻石会员</div>
				<p><label>袁德帅</label><span>130-4646-8789</span></p>
			</div>
		</div>
		<My-Nav></My-Nav>
		<div class="member_center">
			<button class="button">刷卡消费</button>
			<ul>
				<li>
					<img src="/assets/images/ICON-01.png">
					<p>常住酒店</p>
				</li>
				<li>
					<img src="/assets/images/ICON-02.png">
					<p>我的收藏</p>
				</li>
				<li>
					<img src="/assets/images/ICON-03.png">
					<p>我的订单</p>
				</li>
			</ul>
		</div>
		<item-list :register='register'></item-list>
	</div>
</template>
<script>
	import MyNav from './MyNav.vue';
	import {Button} from 'vue-weui';
	import ItemList from './ItemList';
	export default {
		data() {
			return {
				register: true,
			};
		},
		components :{
			MyNav,
			Button,
			ItemList,
		}
	}
</script>