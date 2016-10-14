

import Home from './home1';
import Iscroll from './../../components/Iscroll.vue';

// 引入vuex
import { setHotelMessages } from '../../vuex/actions.js';
import { getUserSelection, } from '../../vuex/getters.js';

console.log(Home.data);

export default {
  data() {
    return {
      city:'',
    };
  },
  vuex:{
    actions:{
      setHotelMessages,
    },
  },
  computed: {},
  ready() {

  },
  attached() {},
  watch:{
    // city(newval){
    //   setHotelMessages({newval});
    // },

  },
  methods: {
    handerfindHotel(){
      console.log("111");
    },
  },
  components: {
    Home,
    Iscroll
  }
};
