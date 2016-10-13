// date 2016.9.7
// Author liekby
// 引入组件

import Swiper from '../../components/swiper.vue';
import SelectDate from '../../components/Select-date.vue';
import {
  Button,
  SearchBar,
  Dialog,
  Toast,
} from 'vue-weui';
// 引入公共js
import moment from "moment";
// 引入vuex;

import { setOrderData,setHotelMessages } from '../../vuex/actions.js';
import { getCount, } from '../../vuex/getters';

export default {
  data() {
    return {
      groupId:'groupId',
      userId:'userId',
      images: [],
      options: {
        pagination : '.swiper-pagination',
      },
      searchbar_value:'',
      today: new Date().getDate(),
      stayDay: new Date().toISOString().substr(0,10),
      leaveDay: new Date( new Date().setDate(new Date().getDate()+1)).toISOString().substr(0,10),
      total_days:'',
      url: api+'/api/home?groupId=100&ueserId="userId"',
      home:{
        data:{
          items:[],
        }
      },
      dialog:true,
      dialogTitle: "请输入您要查询的地址",
      toast:{
        toastShow: false,
        toastText:""
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
  },
  methods: {
    getDays:function(startDay,endDay){
      var startDay_date = new Date(startDay);
      var endDay_date = new　Date(endDay);
      var days_stamp = endDay_date.getTime() - startDay_date.getTime();
      var days = (days_stamp/1000/60/60/24);
      return days;
    },
    getData:function(url,req){
      var vm = this;
      this.$http.get(url).then((data) => {
        const _data = JSON.parse(data.body);
        vm.images = _data.items.banners;
        vm.home = _data;
        // vm.ac_getBrands(vm.home.data.items.brands);
      });
    },
    // 选择品牌
    selectBrand:function(brands){
      this.ac_selectBrands(brands);
      this.$router.go('/hotel_list');
    },
    handerfindHotel(){
      if(this.searchbar_value === ''){
        this.$dispatch("toastError","请输入您要查询的地址")
      }else {
        const userSelection ={
          orderData:{
            groupId:this.groupId,
            userId:this.userId,
            checkInDate : this.stayDay,
            checkOutDate : this.leaveDay,
            night : this.total_days
          }
        }
        this.ac_setOrderData(orderData);
        // this.$router.go('/hotel_list');
      }
    },
    handledialog(){
      this.dialog = false;
      // 清空输入狂内容
    },

  },
  watch: {
    stayDay(newVal) {
      if(new Date(newVal).getTime() < new Date().getTime()){
        this.stayDay = moment(new Date().getTime() + 10000).format("YYYY-MM-DD");
        console.log(this.stayDay + '_____');
      }
      if(new Date(this.stayDay).getTime() >= new Date(this.leaveDay).getTime()){
        let _leaveDay = new Date(this.stayDay).getTime() + 86400 * 1000;
        this.leaveDay = moment(_leaveDay).format('YYYY-MM-DD');
      }
      this.total_days = this.getDays(this.stayDay,this.leaveDay);
    },
    leaveDay(newVal){
      if(new Date(this.stayDay).getTime() >= new Date(newVal).getTime()){
        console.log("change");
        let _leaveDay = new Date(this.stayDay).getTime() + 86400 * 1000;
        this.leaveDay = moment(_leaveDay).format('YYYY-MM-DD');
      }
      this.total_days = this.getDays(this.stayDay,this.leaveDay);
    },
  },
  components: {
    Swiper,
    Button,
    SelectDate,
    SearchBar,
    Dialog,
    Toast,
  },
  ready() {
    var _this = this;
    this.getData(this.url,this.req);
    // 计算入住时间
    //科学的日期选择
    const dateComponents = document.getElementsByClassName('date-components');
    this.total_days = this.getDays(this.stayDay,this.leaveDay);
    var date_input = document.getElementsByClassName("date-components");
    date_input[0].onchange = function(){
      _this.total_days = _this.getDays(_this.stayDay,_this.leaveDay);
    };
    date_input[1].onchange = function(){
      _this.total_days = _this.getDays(_this.stayDay,_this.leaveDay);
    };

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
