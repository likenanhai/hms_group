// Date 9.12;
// Author likeby;

// 引入组件
import Iscroll from "../../components/Iscroll.vue";
import Swiper from "../../components/Swiper.vue";
import SelectDate from "../../components/Select-date.vue";
import home1_vm from "./home1.js";
import CityList from "../../components/city-list.vue";

// 引入公共方法
import moment from "moment";
//引入vuex数据
import {
    setOrderData
} from '../../vuex/actions.js';

export default {
    data() {
            return {
                images: [],
                options: {
                    pagination: '.swiper-pagination',
                },
                today: new Date().getDate(),
                stayDay: new Date().toISOString().substr(0, 10),
                leaveDay: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().substr(0, 10),
                total_days: '',
                show_cities: false,
                url: [api+'/api/home?groupId=100', api+'/api/hotels?groupId=100'],
                // req
                req: {
                    method: 'home',
                    groupId: '',
                },
                reqHotelList: {
                    method: 'hotel.list',
                    groupId: ''
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
        ready() {
            var _this = this;
            this.getBanner(this.url[0]);
            this.getHotelList(this.url[1]);

            //计算入住日期
            this.total_days = home1_vm.methods.getDays(this.stayDay, this.leaveDay);
        },
        attached() {},
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
            this.total_days = home1_vm.methods.getDays(this.stayDay,this.leaveDay);
          },
          leaveDay(newVal){
            console.log(new Date(this.stayDay).getTime());
            console.log(new Date(newVal).getTime());
            if(new Date(this.stayDay).getTime() >= new Date(newVal).getTime()){
              console.log("change");
              let _leaveDay = new Date(this.stayDay).getTime() + 86400 * 1000;
              this.leaveDay = moment(_leaveDay).format('YYYY-MM-DD');
            }
            this.total_days = home1_vm.methods.getDays(this.stayDay,this.leaveDay);
          },
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
                        groupId: 'groupId',
                        hotelId: event.target.getAttribute('data-id'),
                        hotelName: event.target.getAttribute('hotelName'),
                        checkInDate: this.stayDay,
                        checkOutDate: this.leaveDay,
                        night: this.total_days,
                        userId: 'userId'
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
            CityList
        }
};
