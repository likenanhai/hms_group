

// 引入vuex
import {getStates} from "../../vuex/getters.js";


export default {
  data() {
    return {
      isShowMore:false,
      url:api+mockApi+'/hotels?groupId='+this.userSelection.orderData.groupId,
      thisHotel:'',
    };
  },
  computed: {
  },
  ready() {
    console.log(this.userSelection);
    this.getHotelist(this.url);
  },
  attached() {},
  methods: {
    getHotelist(url){
      var vm = this;
      vm.$http.get(url).then((res) => {
        console.log(res);
        console.log(JSON.parse(String(res.body)));
        const data = JSON.parse(String(res.body));
        console.log(data.items);
        for (var i in data.items) {
          console.log(vm.userSelection.orderData.hotelId);
          if (data.items[i].id === vm.userSelection.orderData.hotelId) {
            vm.thisHotel = data.items[i];
          }
        }
      });
    },
  },
  components: {},
  vuex:{
    getters:{
      userSelection:getStates.getUserSelection,
    },
  },
};
