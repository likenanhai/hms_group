<style lang='less' scoped>

* {
box-sizing: border-box;
}
.dash-line{
border-top: 1px dashed rgba(255,255,255,.25);
}
.book-detail {
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, .92);
z-index: 100;
color: #fff;
padding: 0 .12rem;
opacity: 0;
transform: translate3d(0,100%,0);
}

h2 {
	color: #bfbfbf;
font-size: 14px;
line-height: 8vh;
}

h3 {
	color: #bfbfbf;
text-align: center;
font-size: 16px;
line-height: 14vw;
font-family: '微软雅黑'
}

.body {
font-size: 3.8vw;
border-top: 1px solid rgba(255,255,255,.7);
border-bottom: 1px solid rgba(255,255,255,.7);
color: #bfbfbf;
font-weight: normal;
height: 66vh;
overflow: auto;
padding: 0;
}

.detail-item {
	height: 8.2vh;
}


.txt-left {
	display: inline-block;
	font-size: 14px;
	font-family: '微软雅黑';
	font-weight: bold;
}

.txt-right {
text-align: right;
float: right;
display: inline-block;
	p:nth-child(2) {
		color: #EC5800;
	}
}

footer {
font-size: 4.2vw;
height: 34vh;
p {
	font-size: 14px;
	font-family: '微软雅黑';
	font-weight: bold;
	padding: 2vw 0;
	color: #bfbfbf;
	span {
		color: #EC5800;
		float: right;
		font-weight: normal;
	}
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
.slideUp {
transform: none;
opacity: 1;
}

</style>

<template>
<div class="book-detail" :class="{'slideUp':show}">

  <h2>
    费用明细
  </h2>
  <div class="body">
  <section>
    <h3>
      房费
    </h3>
    <div class="detail-item flex-block" v-for="room in detail">
      <div class="txt-left flex-item">
        {{room.roomTypeName}}
      </div>
      <div class="txt-right flex-item">
        <p>
          {{room.date}}
        </p>
        <p>
          ¥ {{room.price.toFixed(2)}} x {{room.count}} 间
        </p>
      </div>
    </div>
  </section>

  <section class="dash-line" v-if="detail.TotalGiftPrice>0||showPaymentDiscount">
    <h3>
      优惠
    </h3>
    <div class="detail-block">
      <div class="detail-item flex-block" v-if="detail.TotalGiftPrice>0">
        <div class="txt-left flex-item">
          {{detail.GiftExtend.Name}}
        </div>
        <div class="txt-right flex-item">
          -¥{{detail.TotalGiftPrice.toFixed(2)}} x 1张
        </div>
      </div>
      <div class="detail-item flex-block" v-if="showPaymentDiscount">
        <div class="txt-left flex-item">
          支付减免
        </div>
        <div class="txt-right flex-item">
          -¥{{detail.PaymentDiscount.toFixed(2)}}
        </div>
      </div>
    </div>
  </section>
  </div>
  <footer>
    <p >实付金额
      <span class="ThemeAuxColor">
        ¥ {{totalPrice.toFixed(2)}}
      </span>
    </p>
		<div class="foot">
				<div class="button" @click="closeWrap">
					<i class="fa fa-angle-down arrow"></i>
					<div>收回</div>
				</div>
		</div>
  </footer>
</div>
</template>
<script>
  export default {
    //props: ['detail', 'show','totalPrice'],
		props:{
			detail:{
				type: Array,
				default: [],
			},
			show:{
				type: Boolean,
				default: false,
			},
			totalPrice:{
				type: Number,
				default: 0,
			},
		},
    data() {
      return {};
    },

    computed: {
      showPaymentDiscount() {
        // console.log(this.detail.PaymentDiscount,this.detail.PaymentPrice,(this.detail.PaymentDiscount<this.detail.PaymentPrice));
        return (this.detail.PaymentDiscount < this.detail.PaymentPrice);
      },
    },
    methods: {
      closeWrap() {
        this.$dispatch('hidePayDatail');
      },
    },
		ready() {
			console.log(this.totalPrice);
		},
    created() {
      // console.log(this.detail);
    },
  };
</script>
