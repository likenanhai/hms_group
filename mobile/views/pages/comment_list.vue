<style lang='sass' scoped>
@import "../../assets/styles/common.scss";
.cover {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #EFEFF4;
    @include flexbox(flex);
    @include flex-direction(column);
    .top {
        position: relative;
        background-color: white;
        .swiper {
          .swiper-pagination-bullet{
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 100%;
            background: #fff;
            opacity: 1;
          }
          .swiper-pagination-bullet-active{
            opacity: 1;
            background: #09bb07;
          }
        }
        .star_bg {
            z-index: 1;
            position: absolute;
            background-color: black;
            opacity: .3;

            height: 18px;
            width: .6rem;
            top: 10px;
            right: 15px;
            border-radius: 20px;
        }
        .star {
        	  z-index: 2;
            position: absolute;
            height: 18px;
            line-height: .18px;
            width: .6rem;
            top: 12px;
            right: 15px;
            border-radius: 20px;
            font-size: .12rem;
            text-align: center;
            i {
            	color: white;
            	&.star_status{
            	color: yellow;
            	}
            }
            span {
            	color: white;
            }
        }
        .comment {
            box-sizing: border-box;
            width: 100vw;
            position: relative;
            display: inline-block;
            padding: 0 .12rem;
            line-height: .54rem;
            label {
                font-family: '微软雅黑';
                font-weight: bold;
                font-size: .14rem;
            }
            div {
                position: relative;
                display: inline-block;
                color: #EC5800;
                font-size: .09rem;
                .star_o {}
                .star_full {
                    white-space: nowrap;
                    /* 不换行 */
                    position: absolute;
                    left: 0;
                    top: 0;
                    overflow: hidden;
                }
            }
            span:nth-child(3) {
                color: #EC5800;
                margin-left: 5px;
                font-family: '微软雅黑';
                font-size: .14rem;
            }
            label:nth-child(4) {
                margin-left: .2rem;
            }
            span:nth-child(5) {
                color: #888888;
                font-family: '微软雅黑';
                font-size: .14rem;
            }
            .button {
                width: .68rem;
                line-height: .3rem;
                display: inline-block;
                font-size: .16rem;
                font-family: '微软雅黑';
                vertical-align: middle;
                position: absolute;
                right: .12rem;
                top: .12rem;
            }
        }
    }
    .detail_ul {
      @include flex(1);
      width:100%;
      overflow-y: scroll;
      margin-top: 0.1rem;

    }
    .detail_li {
    	  border-bottom: 1px solid #D9D9D9;
        width: 100vw;
        background-color: white;
        margin-bottom: .06rem;
        padding: .12rem .12rem 0;
        box-sizing: border-box;
        position: relative;
        .head {
            position: absolute;
            top: .12rem;
            left: .12rem;
            display: inline-block;
            width: .35rem;
            height: .35rem;
        }
        .detail {
        	font-family: '微软雅黑';
            margin-left: .5rem;
            display: inline-block;
            width: 2.2rem;
            .name {
            	font-weight: bold;
            	font-size: .14rem;
            	margin-bottom: 5px;
            }
            .item_score_text{
            	font-size: .09rem;
            }
            .item_score {
            	margin-left: 3px;
            	font-size: .09rem;
            	color: #EC5800;
            }
            .score {
                position: relative;
                display: inline-block;
                color: #EC5800;
                font-size: .08rem;
                .star_o {}
                .star_f {
                    white-space: nowrap;
                    /* 不换行 */
                    position: absolute;
                    left: 0;
                    top: 0;
                    overflow: hidden;
                }
            }
            p {
            	color: #888888;
            	margin:.12rem 0;
            }
            .check_time {
				font-size: .08rem;
				color: #888888;
            }
            li {

            	display: inline-block;
            	color: #09BB07;
            	font-size: .08rem;
            	span {
            		margin-left: 2px;
            	}
            }
        }
        .date {
        	display: inline-block;
        	font-size: .08rem;
        	font-family: '微软雅黑';
        	position: absolute;
        	top: .1rem;
        	right:.15rem;
        }
        .zan {
        	border-top: 1px solid #EFEFF4;
        	margin-top: 3px;
        	&:after{
					content:'.';
					height: 0;
					visibility: hidden;
					display: block;
					clear: both;
				}
        	.border{
        		float: right;
        		margin: 5px 0;
        		line-height: .16px;
        		font-size: .1rem;
        		display: inline-block;
        		border:1px solid #888888;
        		border-radius: 2px;
        		padding: 2px;
        		i {
        			font-size: .08rem;
        		}
        	}
        }
    }
}
</style>
<template>
    <div class="cover">
        <div class="top">
            <div class="swiper" v-if="images.length != 0">
                <Swiper :images='EvaluateList.banners' :options="swiper_options"></Swiper>
            </div>
            <div class="star_bg">
            </div>
            <div class="star" @click='changeStar' >
                <i class="fa fa-star" :class='{star_status : EvaluateList.bSave == 1}' aria-hidden="true"></i>
                <span>{{EvaluateList.bSave == 0 ? '收藏' : '已收藏'}}</span>
            </div>

            <div class="comment">
                <label>综合评分</label>
                <div>
                    <div class="star_o">
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div class="star_full" id="star_full">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
                <span>{{EvaluateList.score}}</span>
                <label>点评数</label>
                <span>{{EvaluateList.total}}</span>
                <!-- <button class="button">点评</button> -->
            </div>
        </div>
        <ul class="detail_ul">
            <li class="detail_li" v-for='item in EvaluateList.items'>
                <div>
                    <img class="head" :src="item.logo">
                    <div class="detail">
                        <div class="name">{{item.name}}</div>
                        <span class="item_score_text">打分</span>
                        <div class="score">
                            <div class="star_o">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <div class="star_f">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                        <span class="item_score">{{item.score}}</span>
                        <p>{{item.comment}}</p>
                        <div class="check_time">
                            <label>住离时间：</label>
                            <span>{{getCheckDate(item.checkInDate)}}</span>
                            <span>至</span>
                            <span>{{getCheckDate(item.checkOutDate)}}</span>
                        </div>
                        <ul>
                            <li><i class="fa fa-home" aria-hidden="true"></i><span>{{item.roomType}}</span></li>
                            <li><i class="fa fa-tag" aria-hidden="true"></i><span>{{item.userType}}</span></li>
                            <li><i <i class="fa fa-jpy" aria-hidden="true"></i><span>{{item.paymentMethod == 1 ? '微信支付' : '到店支付'}}</span></li>
                        </ul>
                    </div>
                    <div class="date">{{computeDate(item.date)}}</div>
                    <div class="zan">
          					  <div class="border" @click='changeLike($index)'>
          					  	<i class="fa fa-heart-o" aria-hidden="true" v-if='item.bLike == 0'></i>
          						  <i class="fa fa-heart" aria-hidden="true" v-if='item.bLike == 1'></i>
          						  <span>{{item.likeNumber}}</span>
          					  </div>
				            </div>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
import moment from 'moment';
import Swiper from '../../components/swiper.vue';
import { getStates } from '../../vuex/getters';
import {
    Button
} from 'vue-weui';
export default {
    data() {
            return {
                url:[api+mockApi+'/evaluate',api+mockApi+'/like'],
                images: [],
                swiper_options: {
                  pagination: '.swiper-pagination',
                },
                req: {
                  groupId: this.userSelection.orderData.groupId,
                  hotelId: this.userSelection.orderData.hotelId,
                  userId: this.userSelection.orderData.userId,
                  bSave:0,
                },
                EvaluateList: {},
                now:0,
            };
        },

        computed:{
        	now: {
					cache: false,
					get() {
						return Math.floor(new Date().getTime()/1000);
					}
				},
        },

        methods: {
        	changeLike(index) {
            let req = {
              groupId : this.req.groupId,
              userId : this.req.userId,
              orderId : this.EvaluateList.items[index].orderId
            };
        		if (this.EvaluateList.items[index].bLike == 0) {
              req.bLike = 1 ;
        			this.EvaluateList.items[index].bLike = 1;
              this.EvaluateList.items[index].likeNumber++;
        		}else if (this.EvaluateList.items[index].bLike == 1) {
              req.bLike = 0 ;
              this.EvaluateList.items[index].bLike = 0;
              this.EvaluateList.items[index].likeNumber--;
        		}
            this.HttpSave(this.url[2],req);

        	},
        	changeStar() {
            let req = this.req;
            console.log(this.EvaluateList);
        		if (this.EvaluateList.bSave == 0) {
        			this.EvaluateList.bSave = 1;
        		}else if (this.EvaluateList.bSave == 1) {
        			this.EvaluateList.bSave = 0;
        		}
            req.bSave = this.EvaluateList.bSave;
            this.HttpSave(this.url[1],req);
        	},
        	computeDate(date) {
              console.log(date);
        			var relative = (this.now-date)/60;
        			console.log(this.now);
        			console.log(relative);
        			if (relative < 60) {
        				return Math.floor(relative)+"分钟前";
        			}else if (relative/60 < 24) {
        				return Math.floor(relative/60)+"小时前";
        			}else if(relative/60/24 < 7){
        				return Math.floor(relative/60/24)+"天前";
        			}else {
        				return moment(date*1000).format('YYYY年MM月DD日');
        			}
        		},
            getCheckDate(time) {
                // return moment(time * 1000).format('YYYY.MM.DD');
                var _time = time.substr(0, 10);
                var date = _time.replace(/-/g, '.');
                return date;
            },
            getEvaluateList: function(url) {
                var vm = this;
                this.$http.get(url).then((res) => {
                    console.log(res);
                    console.log(JSON.parse(res.body));
                    const _data = JSON.parse(res.body);
                    vm.EvaluateList = _data;
                    vm.images = _data.banners;
                    document.getElementsByClassName('star_full')[0].style.width = _data.score / 5 * 100 +5 +"%";
                    setTimeout(function() {
                        for (var i in _data.items) {
                            document.getElementsByClassName('star_f')[i].style.width = _data.items[i].score / 5 * 100 +5+ "%";
                        }
                    }, 0);
                    //console.log(document.getElementsByClassName('star_f')[1].style.width )
                });
            },
            HttpSave(url,req){
              var vm = this;
              this.$http.post(url,req).then((res) => {
                console.log(res);
              });
            },
        },
        ready() {
            this.getEvaluateList(this.url[0]);
        },
        vuex: {
          getters:{
            userSelection:getStates.getUserSelection,
          },
        },
        components: {
            Swiper,
            Button,
        },
}
</script>
