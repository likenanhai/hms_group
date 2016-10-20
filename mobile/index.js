/*
* @Author: Hedgehog
* @Date:   2016-07-18 16:37:08
* @Last Modified by:   Hedgehog
* @Last Modified time: 2016-07-26 21:41:23
*/
import 'babel-polyfill';
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import App from './App';
import Home from './views/pages/home.vue';
import Home1 from './views/pages/home1.vue';
import Home2 from './views/pages/home2.vue';
import Home3 from './views/pages/home3.vue';
import City_list from './views/pages/city_list.vue';
import Hotel_list from './views/pages/hotel_list.vue';
import Room_list from './views/pages/room_list.vue';
import OrderPay from './views/pages/OrderPay.vue';
import OrderResult from './views/pages/OrderResult.vue';
import MyOrder from './views/pages/myorder/MyOrder.vue';
import OrderDetail from './views/pages/OrderDetail.vue';
import PayDetail from './views/pages/PayDetail.vue';
import Member from './views/pages/member/Member.vue';
import Register from './views/pages/member/Register.vue';
import comment_list from './views/pages/comment_list.vue';
import HotelIntroduce from './views/pages/HotelIntroduce.vue';
import OrderComment from './views/pages/order_comment/components/App.vue';
import calendarTest from './views/pages/calendarPage.vue';
// new Vue(App).$mount().$appendTo('#app');
Vue.config.silent = true;

Vue.use(Router);
Vue.use(Resource);
var router = new Router();
  router.map({
    // 首页 风格 一
    '/home1': {
      component: Home1,
    },
    // 风格2
    '/home':{
      component: Home,
    },
    '/home2':{
      component: Home2,
    },
    // 风格 3
    '/home3':{
      component: Home3,
    },
    // 城市列表
    '/city_list':{
      component: City_list,
    },
    // 酒店列表
    '/hotel_list':{
      component: Hotel_list,
    },
    // 房型列表
    '/room_list':{
      component: Room_list,
    },
    // 进入订单
    '/orderpay':{
      component: OrderPay,
    },
    // 订单结果
    '/order_result':{
      component: OrderResult,
    },
    // 我的订单
    '/my_order':{
      component: MyOrder,
    },
    //订单详情
    '/order_detail':{
      component: OrderDetail,
    },
    // 支付细节
    '/pay_detail':{
      component: PayDetail,
    },
    //会员中心
    '/member':{
      component: Member,
    },
    //注册会员
    '/register':{
      component: Register,
    },
    // 酒店简介
    '/hotel_introduce':{
      component: HotelIntroduce,
    },
    //点评列表
    '/comment_list':{
      component: comment_list,
    },
    //订单点评
    '/order_comment':{
      component: OrderComment,
    },
    //日历测试
    '/calendarTest': {
      component: calendarTest
    },

  });

  router.redirect({ '/':'/home1' });
  router.start(App, '#app');
