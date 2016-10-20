// Date 9.13
// Author likeby;

// 引入组件
import Swiper from "../../components/Swiper.vue";
import { Button, } from 'vue-weui';
import CalendarPage from '../pages/calendarPage.vue';

import Circles from '../../assets/libs/circles.js';

// 引入vuex 数据
import { setOrderPrice } from '../../vuex/actions.js';
import { getStates } from '../../vuex/getters.js' ;

// 公共函数库
import { Common }  from './common.js';
import wx from '../../components/Wx.js';

export default {
  data() {
    return {
      images: [
        '../../assets/images/banner1.jpg','../../assets/images/banner2.jpg','../../assets/images/banner3.jpg',
      ],
      showCalendar:false,

      cover:{
        status:'',
        roomBanners:[],
        name:'',
        memo:'',
      },
      options: {
        pagination : '.swiper-pagination',
      },
      options_1: {
        pagination : '.swiper-pagination',
      },
      show_content: 0,
      selected_room: -1,
      url: api+'/api/roomTypes?groupId='+this.userSelection.orderData.groupId,
      // res
      roomType_list:{
        data:{
          comment:'',
        }
      },
      // 入住时间
      days: {
        startDate:this.userSelection.orderData.checkInDate,
        endDate:this.userSelection.orderData.checkOutDate,
        neigthNum: this.userSelection.orderData.night
      },

    };
  },
  computed: {
  },
  events:{
    getPriceDates(date){
      this.days.startDate = date.selectedInfo.daysInfo[date.startDate].date;
      this.days.endDate = date.selectedInfo.daysInfo[date.endDate].date;
      this.days.neigthNum = date.selectedInfo.daysNum - 1;
    },
  },
  ready() {
    console.log(this.userSelection);
    // 画圆形评价图
    const myCircles = Circles.create({
      id:                  'circles-1',
      radius:              28,
      value:               0,
      maxValue:            5,
      width:               5,
      text:                function(value){return value + '分';},
      colors:              ['#D3B6C6', '#09bb07'],
      duration:            1000,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    console.log(myCircles);
    const vm = this;
    const navs = $('.nav');
    navs.on('click',function(){
      $(this).addClass('active').siblings().removeClass("active");
      vm.show_content = $(this).index();
    });
    this.getRoomList(vm.url,myCircles);
  },
  attached() {},
  methods: {
    getRoomList:function(url,myCircles){
      var vm  = this;
      this.$http.get(url).then((res) => {
        console.log(res);
        console.log(JSON.parse(res.body));
        vm.roomType_list = JSON.parse(res.body);
        myCircles.update(vm.roomType_list.score);
      });
    },
    handelRoom(event,_index){
      if(this.selected_room == _index){
        this.selected_room = -1 ;
        return ;
      }
      this.selected_room = _index;
    },
    handelRoomImg(event,index){
      // console.log(index);
      this.cover.roomBanners = this.roomType_list.items[index].banners;
      this.cover.name = this.roomType_list.items[index].name;
      this.cover.memo = this.roomType_list.items[index].memo;
      // console.log(this.roomBanners);
      this.cover.status = "come-out";
    },
    closeCover(){
      this.cover.status = "";
      this.cover.roomBanners = [];
    },
    goHotelIntroduce(){
      this.$router.go('/hotel_introduce');
    },
    goCommentList(){
      this.$router.go('/comment_list');
    },
    handelSetOrders(index,packageIndex,priceTypeIndex){
      const vm = this;
      const userSelection = {
        orderPrice : {
          roomTypeCode: vm.roomType_list.items[index].code,
          priceTypeCode: vm.roomType_list.items[index].package[packageIndex].priceType[priceTypeIndex].code,
          packageName:vm.roomType_list.items[index].package[packageIndex].name,
          userType:1,
        }
      }
      console.log(userSelection.orderPrice);
      vm.$router.go('./orderpay');
    },
    location(){
      console.log("aaa");
      window.wx.openLocation({
        latitude: 80.00, // 纬度，浮点数，范围为90 ~ -90
        longitude: 100.00, // 经度，浮点数，范围为180 ~ -180。
        name: "shenzhen", // 位置名
        address:"nanshan", // 地址详情说明
        scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: '', // 在查看位置界面底部显示的超链接,可点击跳转
      });
    },
  },
  vuex:{
    getters:{
      userSelection:getStates.getUserSelection,
    },
    actions:{
      setOrderPrice,
    },
  },
  components: {
    Swiper,
    Button,
    CalendarPage,
  }
};
