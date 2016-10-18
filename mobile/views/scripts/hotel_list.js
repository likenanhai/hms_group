// date 9.13
// Author likeby;
//


const sequence_items = [
  {
    text:'推荐优先',
    sort:'default'
  },
  {
    text:'低价优先',
    sort:'minPrice'
  },
  {
    text:'高价优先',
    sort:'-minPrice'
  },
  {
    text:'好评优先',
    sort:'-score'
  }
];

import {
  Toast,Button,ButtonArea
} from 'vue-weui';
import BtnLoadMore from '../pages/myorder/BtnLoadMore.vue';


import { Common } from './common.js';
// 引入vuex
// import store from '../../vuex/store.js' ;
import { getStates } from '../../vuex/getters.js';
import { setOrderData } from '../../vuex/actions.js';

export default {
  data() {
    return {
      filter_list: 1,
      sequence_items:sequence_items,
      checked_index: 0,
      loading:true,
      filter_active: 0, //按品牌名筛选中被选中的品牌高亮的下标状态
      url: {
        home: api+'/api/home',
        hotels: api+'/api/hotels'
      },
      req: {
        groupId:this.userSelection.orderData.groupId,
        checkInDate: this.userSelection.orderData.checkInDate,
        checkOutDate: this.userSelection.orderData.checkOutDate,
        sort:'default',
        address: this.userSelection.hotelMessages.address,
        page:1,
        pageSize:20,
        brands: this.userSelection.hotelMessages.selected_brand,
        city:this.userSelection.hotelMessages.city,
      },
      hotel_list:{
        data:{
          items:[],
        }
      },
      publicState: {
        brands: [],       //品牌列表 数据来自home页面
      },
      brands:[],
    };
  },
  computed: {

  },
  events: {
    bindScrollEvent(){
      let footer = document.querySelectorAll(".footer")[0];
      footer.removeEventListener('scroll',this.scrollEvent);
      footer.addEventListener('scroll',this.scrollEvent);
    },
  },
  vuex:{
    getters:{
      selectedBrands:getStates.selectBrand,
      getBrands:getStates.getBrands,
      userSelection: getStates.getUserSelection,
    },
    actions:{
      setOrderData,
    },
  },
  ready() {
    console.log(this.userSelection);
    const vm = this;
    // if(this.selectedBrands.id){
    //   this.options.bizContent.brands = this.selectedBrands.id;
    // };
    let reqHome = {groupId:this.req.groupId},
        reqHotels = {
          groupId: this.userSelection.orderData.groupId,
          checkInDate: this.userSelection.orderData.checkInDate,
          checkOutDate: this.userSelection.orderData.checkOutDate,
          address: this.userSelection.hotelMessages.address,
          sort: this.req.sort,
          pageSize: this.req.pageSize,
          page:this.req.page,
        }
        if(this.req.city != ''){
          reqHotels.city = this.userSelection.hotelMessages.city;
        }
        if(this.req.brands != ''){
          reqHotels.brands = this.userSelection.hotelMessages.selected_brand;
        }
    Common.resource("get",this.url.home,reqHome,(data) => {
      vm.publicState.brands = data.items.brands;
      console.log(vm.publicState.brands);
    });
    Common.resource("get",this.url.hotels,reqHotels,(data) =>{
      vm.hotel_list = data;
      vm.loading = false;
      vm.filter_list = 0;
    });
  },
  attached() {

  },
  methods: {
    //获取参数
    getRequest(){
    let reqHotels = {
        groupId: this.userSelection.orderData.groupId,
        checkInDate: this.userSelection.orderData.checkInDate,
        checkOutDate: this.userSelection.orderData.checkOutDate,
        address: this.userSelection.hotelMessages.address,
        sort: this.req.sort,
        pageSize: this.req.pageSize,
        page:this.req.page,
      }
      if(this.req.city != ''){
        reqHotels.city = this.userSelection.hotelMessages.city;
      }
      if(this.req.brands != ''){
        reqHotels.brands = this.userSelection.hotelMessages.selected_brand;
      }
      return reqHotels;
    },
    // 选择不同的过滤器
    select_filter:function(event){
      var filters = document.getElementsByClassName('filter');
      if(event.target.getAttribute('state') === "0"){
        this.$set('filter_list',1);
        filters[0].style.color = "#09bb07";
        filters[1].style.color = "#888";
        filters[0].childNodes.item(1).style.transform = 'rotate(180deg)';
        filters[1].childNodes.item(1).style.transform = 'rotate(0deg)';
      }
      else{
        //筛选按钮的样式
        this.filter_list = 2 ;
        filters[1].style.color = "#09bb07";
        filters[0].style.color = "#888";
        filters[1].childNodes.item(1).style.transform = 'rotate(180deg)';
        filters[0].childNodes.item(1).style.transform = 'rotate(0deg)';
        //让被选中的品牌高亮
        const vm = this;
        for (var k in this.publicState.brands) {
          if (vm.req.brands == this.publicState.brands[k].id) {
            console.log(typeof(k)+k);
            vm.filter_active = parseInt(k) +1;
          }
        }
      }
    },
    selectHotel(event){
      const userSelection = {
        orderData:{
          hotelId:event.target.getAttribute('hotelId'),
          hotelName: event.target.getAttribute('hotelName'),
        }
      };
      this.setOrderData(userSelection.orderData);
      this.$router.go('./room_list');
    },
    //  点击选择不同的排序方式
    handelSequence:function(event,checked_index){
      console.log(event.target.getAttribute("sort"));
      this.checked_index = checked_index;
      this.req.sort = event.target.getAttribute("sort");
    },
    //点击选择不同的筛选方式
    handerFilter:function(event,checked_index){
      this.filter_active = parseInt(checked_index) + 1;
      this.req.brands = event.target.getAttribute('data-id');
    },
    // 重置按钮 点击事件
    handelReset:function(){
      if(  document.getElementsByClassName('filter-by-logo').length === 0){
        this.req.sort = "default";
        this.checked_index = 0;
      }
      else{
        this.filter_active = 0;
      }
    },
    // 确定按钮 点击事件
    handelConfirm:function(){
      this.req.page = 1;
      const req = this.getRequest();
      const vm = this;
      Common.resource("get",this.url.hotels,req,(data) => {
        vm.hotel_list = data;
        vm.loading = false;
        vm.filter_list = 0;

      })
    },
    scrollEvent(){
      let btn = document.querySelectorAll('#btn-load-more')[0];
      let footer = document.querySelectorAll('.footer')[0];

      if(footer.scrollTop + footer.clientHeight >= btn.offsetTop - 4  && btn.clientHeight !== 0){
        this.loadMore();
      }
    },
    loadMore(){
        const vm = this;
        vm.loading = true;
        this.req.page += 1;
        Common.resource('get',this.url.hotels,this.getRequest(),(data) => {
        vm.hotel_list.items = vm.hotel_list.items.concat(data.items);
        vm.loading = false;
      });
    }

  },
  components: {
    Toast,Button,ButtonArea,BtnLoadMore,
  }
};
