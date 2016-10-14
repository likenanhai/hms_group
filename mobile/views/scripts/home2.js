

import Home from './home1';
import Iscroll from './../../components/Iscroll.vue';

console.log(Home.data);

export default {
  data() {
    return {
      city:'',
    };
  },
  computed: {},
  ready() {

  },
  attached() {},
  watch:{},
  methods: {},
  components: {
    Home,
    Iscroll
  }
};
