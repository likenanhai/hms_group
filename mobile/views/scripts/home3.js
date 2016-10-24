// Date 9.12;
// Author likeby;

// 引入组件
import Iscroll from "../../components/Iscroll.vue";
import Swiper from "../../components/Swiper.vue";
import SelectDate from "../../components/Select-date.vue";
import CityList from "../../components/city-list.vue";
import CalendarPage from "../pages/calendarPage.vue";

// 引入公共方法
import moment from "moment";
import { Common } from "./common.js";
//引入vuex数据
import {
    setOrderData
} from '../../vuex/actions.js';

export default {
    data() {
            return {
                groupId: "groupId",
                userId: 'userId',
                images: [],
                options: {
                  pagination: '.swiper-pagination',
                },
                startDate: moment().format('YYYY-MM-DD'),
                endDate: moment().add('days',1).format('YYYY-MM-DD'),
                neightNum: 1,
                week:{
                  str:['日','一','二','三','四','五','六'],
                  start: moment().format('d'),
                  end: moment().add('days',1).format('d'),
                },
                showCalendar: false,
                show_cities: false,
                url: {
                  home: api+'/api/home',
                  hotels: api+'/api/hotels'
                },
                // res
                cities: {
                    "选择酒店": [{
                        "id": 2305,
                        "name": "北京"
                    }, {
                        "id": 3286,
                        "name": "上海"
                    }, {
                        "id": 3286,
                        "name": "广州"
                    }, {
                        "id": 3286,
                        "name": "深圳"
                    }],
                },
                hotel_list: {
                  items: [],
                },
            };
        },
        computed: {},
        events:{
          getPriceDates(date){
            this.startDate = date.selectedInfo.daysInfo[date.startDate].date;
            this.endDate = date.selectedInfo.daysInfo[date.endDate].date;
            this.neightNum = date.selectedInfo.daysNum - 1;
            this.week.start = moment(this.startDate).format('d');
            this.week.end = moment(this.endDate).format('d');
          },
        },
        ready() {
            var vm = this;
            let reqHome = {},
                reqHotels = {
                  checkInDate: this.startDate,
                  checkOutDate: this.endDate
                }
            Common.resource("get",this.url.home,reqHome,(data) => {
              vm.images = data.items.banners;
            });
            Common.resource("get",this.url.hotels,reqHotels,(data) =>{
              vm.hotel_list = data;
            });
        },
        attached() {},
        watch: {
        },
        methods: {
            getBanner: function(url) {
                var vm = this;
                this.$http.get(url).then((res) => {
                    vm.images = JSON.parse(res.body).items.banners;
                });
            },
            getHotelList: function(url) {
                const vm = this;
                this.$http.get(url).then((res) => {
                    console.log(res);
                    console.log(JSON.parse(res.body));
                    vm.hotel_list = JSON.parse(res.body);
                });
            },
            selectCity: function() {
                const arrow = document.getElementsByClassName('arrow');
                if (!this.show_cities) {
                    this.show_cities = true;
                    arrow[0].className += ' rotate';
                } else {
                    this.show_cities = false;
                    arrow[0].className = arrow[0].className.replace(" rotate", '');
                }
            },
            //选择酒店
            selectHotel: function(event) {
                const userSelection = {
                    orderData: {
                        hotelId: event.target.getAttribute('data-id'),
                        hotelName: event.target.getAttribute('hotelName'),
                        checkInDate: this.startDate,
                        checkOutDate: this.endDate,
                        night: this.neightNum,
                    },
                };
                this.setOrderData(userSelection.orderData);
                this.$router.go('./room_list');
            }
        },
        vuex: {
            actions: {
                setOrderData,
            },
        },
        components: {
            Iscroll,
            Swiper,
            SelectDate,
            CityList,
            CalendarPage,
        }
};
