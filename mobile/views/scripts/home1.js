// date 2016.9.7
// Author liekby
// 引入组件

import Swiper from '../../components/swiper.vue';
import CalendarPage from '../pages/calendarPage.vue';

import {
  Button,
  SearchBar,
  Dialog,
  Toast,
} from 'vue-weui';
// 引入公共js
import moment from "moment";
import { Common } from "./common.js";
// 引入vuex;

import { setOrderData,setHotelMessages } from '../../vuex/actions.js';
import { getCount, } from '../../vuex/getters';

export default {
  props: {
    city: {
      type: String,
      required: false,
      default:'',
    },
    homeStyle: {
      type: String,
      required: false,
      default: '1',
    }
  },
  data() {
    return {
      groupId:'groupId',
      userId:'userId',
      images: [],
      options: {
        pagination : '.swiper-pagination',
      },
      searchbar_value:'',
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().add('days',1).format('YYYY-MM-DD'),
      neightNum: 1,
      week: {
        str:['日','一','二','三','四','五','六'],
        start: moment().format('d'),
        end: moment().add('days',1).format('d'),
      },
      calendar:{
        show:false,
      },
      url: api+'/api/home',
      home:{
        data:{
          items:[],
        }
      },
      dialog:true,
      dialogTitle: "请输入您要查询的地址",
      toast:{
        toastShow: false,
        toastText: ""
      }
    };
  },
  events: {
    toastError(data) {
      const _this = this;
      _this.toast.toastShow = true;
      _this.toast.toastText = data;
      setTimeout(() => {
        _this.toast.toastShow = false;
      }, 2000);
    },
    getPriceDates(date){
      this.startDate = date.selectedInfo.daysInfo[date.startDate].date;
      this.endDate = date.selectedInfo.daysInfo[date.endDate].date;
      this.neightNum = date.selectedInfo.daysNum - 1;
      this.week.start = moment(this.startDate).format('d');
      this.week.end = moment(this.endDate).format('d');
    },
  },
  methods: {
    // 选择品牌
    selectBrand:function(brands){
      this.ac_selectBrands(brands);
      this.$router.go('/hotel_list');
    },
    handerfindHotel(){
      // console.log(this.city);
      // console.log(this.homeStyle);
      if(this.homeStyle === "2"){
        if(this.city === ''){
          this.$dispatch('toastError',"请输入您要查找的城市");
          return;
        }
        if(this.searchbar_value === ""){
          this.$dispatch('toastError','请输入您要查询的地址');
          return;
        }
        else{
          this.setHotelMessages({city:this.city,address:this.searchbar_value});
          this.$router.go('/hotel_list');
        }
      }else{
        if(this.searchbar_value === '' ){
          this.$dispatch("toastError","请输入您要查询的地址");
        }else {
          const userSelection ={
            orderData:{
              checkInDate : this.startDate,
              checkOutDate : this.endDate,
              night : this.neightNum
            },
            hotelMessages:{
              address:this.searchbar_value, //查询地址
            }
          }
          this.ac_setOrderData(userSelection.orderData);
          this.setHotelMessages(userSelection.hotelMessages);
          this.$router.go('/hotel_list');
        }
      }
    },
    handledialog(){
      this.dialog = false;
      // 清空输入框内容
    },

  },
  watch: {
  },
  components: {
    Swiper,
    Button,
    SearchBar,
    Dialog,
    Toast,
    CalendarPage,
  },
  ready() {
    var _this = this;
    let req = {
    };
    //初始化数据，
    Common.resource("get",this.url,req,function(obj){
      _this.home = obj;
      _this.images = obj.items.banners;
    });
  },
  vuex: {
    getters: {
       // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
       counterValue: getCount,
    },
    actions:{
      setHotelMessages,
      ac_setOrderData : setOrderData,
    }
  }

};
