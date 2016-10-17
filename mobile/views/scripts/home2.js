

import Home from './home1';
import Iscroll from './../../components/Iscroll.vue';

// 引入vuex
import { setHotelMessages } from '../../vuex/actions.js';
import { getUserSelection, } from '../../vuex/getters.js';

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
  },
  components: {
    Home,
    Iscroll
  }
};
