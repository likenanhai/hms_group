// date 2016.9.7
// Author liekby

// vue插件引入模块

// 组件引入木块
import {SearchBar,Toast} from 'vue-weui';
import CityList from '../../components/city-list.vue';

export default {
  data() {
    return {
      searchbar_value:'',
      codes:{},
      show_city: false,
      loading:false,
      Url:{
        citys:'/api/city_list',
      }
    };
  },
  components:{
    SearchBar,
    CityList,
    Toast
  },
  ready() {
    this.getCity(this.Url.citys);
    this.$on("showCity");
  },
  methods: {
    getCity:function(url){
      this.$http.get(url).then((data) => {
        this.$set('codes',JSON.parse(data.data).cities);
      });
    },
    show_citys:function(){
    },
  },

};
