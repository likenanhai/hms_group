// Date 2016-09-06;
// author jianwen;


import Vue from 'vue';
import Vuex from 'Vuex';

// 告诉vue使用vuex；
Vue.use(Vuex);

// 放置初始状态；
const state = {
  userSelection:{
    // 订单信息
    hotelMessages: {    //用户帅选酒店列表的信息
      selected_brand:'' ,   //zaihome页面中被选中的品牌
      address:'',   //选择的地址
    },
    orderData : {
      // req
      groupId:'100',
      hotelId:'',
      hotelName:'圣淘沙（马家龙店）',
      room:[
        {
          type:'高级大床房',      // 房型
          rice:'',      //房型价格（元/间）
          orderNum: Number,  //订房数
          date:''       //入住房间日期
        },
      ],
      checkInDate:'2016-10-22',   //入住酒店日子
      checkOutDate:'2016-11-25',  // 离店日期
      arriveTime:'18:30',    // 到店时间
      night: 1,         //总共入住几晚
      date:'',          //订单时间
      userId:'',        //用户Id
      name:'',          //用户姓名
      phone:'',         //用户电话
      paymentMethod:0,  //支付方式  1:微信支付    2：到店支付
      paymentStatus:0,  //支付装填 0：待付款   1：已付款   2：已退款
      checkInStatus:0,  //入住状态 0：未入住   1：已入住   2：已退房
      totalPrice:0,     //总价格
      actualPrice:0,    //实际支付总价格
      coupon:{
        id:'',
        rice:''
      },                 //优惠券   ！！
      privilege:{}      //其他优惠方式 ！！
    },
    // message
    message:{
      address:'',
    },
    //订单价格
    orderPrice: {
      roomTypeCode:"",   // 房型代码
      priceTypeCode:'',   // 	房价码
      packageName:'',    //套餐名称
      userType: Number ,  //用户类型 (1: 微信散客 2: 协议客  3: 会员)
      paymentType: Number ,  //支付类型 ( 1: 支付宝 2: 微信 4: 到店支付 99: 会员支付 100: 月结) ;
      //customerID : String , //	协议客用户ID (userType=2必传)
      //memberLevel : Number  // 会员等级 ( userType=3&& paymentType=99, 必填)
    },
  },



};
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state;

  //获取订单信息 函数
  getOrderData(state,setOrderData){
    Object.assign(state.userSelection.orderData,setOrderData);
  },

  //设置订单价格参数
  setOrderPrice(state,setOrderPrice){
    Object.assign(state.userSelection.orderPrice,setOrderPrice);
  },

  // 保存用户对酒店的选择
  setHotelMessages(state,setHotelMessages){
    Object.assign(state.userSelection.hotelMessages,setHotelMessages);
  },
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
});
