<style lang='less' scoped>
	.cover {
	    position: fixed;
	    z-index: 1;
	    left: 0;
	    top: 0;
	    width: 100vw;
	    height: 100vh;
	    background-color:  #EFEFF4;
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
	}
	
</style>
<template>
	<div class="cover">
		<div class="member_top">
			<img src="/assets/images/img_light_red_30x30.png">
				fsdfsf
			<p><label>袁德帅</label><span>130-4646-878985494</span></p>
		</div>
		<My-Nav></My-Nav>
	</div>
</template>
<script>
	import MyNav from './MyNav.vue';
	export default {
		data() {
			return {
				isShow: true,
				title: '123',
			};
		},
		components {
			MyNav,
		}
	}
</script>