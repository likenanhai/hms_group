<style lang='less' scoped>
.cover {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #EFEFF4;
    .bg {
        background-color: white;
        padding: 0 .06rem;
        padding-bottom: .12rem;
        border-bottom: 1px solid #E0E0E1;
        .cell {
            line-height: .47rem;
            font-size: .155rem;
            font-family: '微软雅黑';
            font-weight: bold;
            border-bottom: 1px solid #EFEFF4;
            color: #3D4248;
            label:nth-child(2) {
                margin-left: .16rem;
            }
            input {
                box-sizing: border-box;
                font-size: .15rem;
                font-family: '微软雅黑';
                letter-spacing: 1px;
                margin-left: .1rem;
                width: 3rem;
                height: .38rem;
                background-color: #EFEFEF;
                border: 1px solid #E0E0E1;
                border-radius: 2px;
                padding-left: 10px;
				
            }
        }
        .sex {
            line-height: .47rem;
            font-size: .155rem;
            font-family: '微软雅黑';
            font-weight: bold;
            border-bottom: 1px solid #EFEFF4;
            color: #3D4248;
            label:nth-child(2) {
                margin-left: .16rem;
            }
            label:nth-child(4) {
                margin-left: .32rem;
            }
            label:nth-child(5) {
                margin-left: .16rem;
            }
            select {
                box-sizing: border-box;
                font-size: .15rem;
                font-family: '微软雅黑';
                letter-spacing: 1px;
                margin-left: .05rem;
                width: .54rem;
                height: .38rem;
                background-color: #EFEFEF;
                border: 1px solid #E0E0E1;
                border-radius: 2px;
                padding-left: 5px;
                color: #A9A9A9;
            }
            select:nth-child(8) {
				margin-left: 0;
            }
             label:nth-child(7) {
				color: #A9A9A9;
				font-weight: normal;
            }
             label:nth-child(9) {
				color: #A9A9A9;
				font-weight: normal;
            }
        }
        .button {
            margin: .38rem 5px 0 5px;
        }
    }
}

</style>
<template>
	<div class="cover">
		<div class="bg">
			<div class="cell"><label>姓</label><label>名</label><input placeholder="请输入您的姓名"></input></div>
			<div class="sex">
				<label>性</label><label>别</label>
				<select placeholder="请输入您的姓名" >
					<option>男</option>
					<option>女</option>
				</select>
				<label>生</label><label>日</label>
				<select  v-model='days' @click='select($index)'>
					<option v-for='option in options'  v-bind:value="option.value">{{option.text}}</option>
				</select>
				<label>月</label>
				<select>
					<option>00</option>
					<option v-for='n in days'>{{n > 8 ? n+1 : "0"+(n+1)}}</option>
				</select>
				<label>日</label>
			</div>
			<div class="cell"><label>身份证</label><input placeholder="请输入您的身份证号码"></input></div>
			<div class="cell"><label>地</label><label>址</label><input placeholder="请输入您的地址"></input></div>
			<div class="cell"><label>手</label><label>机</label><input placeholder="请输入您的手机号码"></input></div>
			<button class="button">确定</button>
		</div>
		
	</div>
</template>
<script>
	import {Button} from 'vue-weui';
	export default {
		data() {
			// const day = [31, 29 ,31, 30,31, 30,31, 31, 30,31, 30,31];
			return {
				days:0,
				month:0,
				options: [
						      { text: '00', value: 0 },
						      { text: '01', value: 31 },
						      { text: '02', value: 29 },
						      { text: '03', value: 31 },
						      { text: '04', value: 30 },
						      { text: '05', value: 31 },
						      { text: '06', value: 30 },
						      { text: '07', value: 31 },
						      { text: '08', value: 31 },
						      { text: '09', value: 30 },
						      { text: '10', value: 31 },
						      { text: '11', value: 30 },
						      { text: '12', value: 31 },
						    ]
			};
		},
        methods:{
                select(index) {
                    console.log('nixuanze');
                } ,
        },
		computed: {
			date() {
				return this.day[month];
			}
		},

		components :{
			Button,	
		},
	}
</script>