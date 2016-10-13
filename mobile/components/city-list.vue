<style lang="css" scoped>
  #wrapper{
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  #scroller{
    position: absolute;
    width: 100%;
  }
  .code{
    min-height: 0.3rem;
    line-height: 0.3rem;
    padding: 0 0.15rem;
    position: relative;
    color: #7a7e83;
  }
  .code::after{
    content: '';
    width: 100%;
    border-bottom: 1px solid #999;
    transform: scale(0.9,0.5);
    left: 0;
    position: absolute;
  }
  .title{
    z-index: 1000;
  }
  i{
    position:absolute;
    right: 0.15rem;
    height: 0.3rem;
    width: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: .22rem;
    z-index:50;
    /*animation:myfirst 1.3s ease both;*/
  }
  .citys{
    width: 100%;
    min-height: .3rem;
    height: auto;
  }
  .city{
    width: 30%;
    float: left;
    text-align: center;
    line-height: .14rem;
    padding: .08rem 0;
  }
  .clear{
    clear: both;
  }
  @keyframes expansion{
    from {transform: rotate(0);}
    to {transform: rotate(90deg);}
  }
  @-webkit-keyframes expansion /* Safari and Chrome */
    {
      from {transform: rotate(0);}
      to {transform: rotate(90deg);}
    }
  @keyframes recovery {
    form {transform: rotate(90deg);}
    to {transform: rotate(0);}
  }
  @-webkit-keyframes recovery{
    form {transform: rotate(90deg);}
    to {transform: rotate(0);}
  }
</style>
<template lang="html">
  <div id="wrapper">
    <div id="scroller" >
      <ul>
        <li class="code" v-for = '(code,cities) in codes'>
          <div class="title"  @click="showCity($event)" >
            {{code}}
            <i class="fa fa-angle-right" ></i>
          </div>
          <div class="citys"  v-show="show" >
            <div class="city" v-for = 'city in cities'>
              {{city.name}}
            </div>
            <div class="clear"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from './libs/iscroll.js';

export default {
  props: {
    codes: {
      type: Object,
      required: true,
      default: {},
    },
    show:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      clicked: false,
    };
  },
  computed: {},
  ready() {
    this.init_iscroll();
  },
  attached() {},
  methods: {
    // 展示被点击的城市
    showCity:function(event){
      if(event.path.length == 12){
        var citiesList_display =     event.target.parentNode.childNodes[3].style.display;
        if (citiesList_display == "none") {
          event.target.parentNode.childNodes[3].style.display = "block";
          event.target.childNodes[3].style.animation = "expansion 0.6s ease both";
          event.target.childNodes[3].style.transform = "rotate(90deg)";
        } else {
          event.target.parentNode.childNodes[3].style.display = "none";
          event.target.childNodes[3].style.animation = "recovery 0.6s ease both";
        }
        this.init_iscroll();
      }
      else{
        var citiesList_display =     event.target.parentNode.parentNode.childNodes[3].style.display;
        if (citiesList_display == "none") {
          event.target.parentNode.parentNode.childNodes[3].style.display = "block";
          console.log(event.target);
          event.target.style.animation = "expansion 0.6s ease both";
          event.target.style.transform = "rotate(90deg)";
        } else {
          event.target.parentNode.parentNode.childNodes[3].style.display = "none";
          event.target.style.animation = "recovery 0.6s ease both";
        }
        this.init_iscroll();
      }

    },
    // 初始化iscroll
    init_iscroll: function(){
      var myScroll = new IScroll('#wrapper', {
        mouseWheel: true,
        preventDefault: false,
      });
    }
  },
  components: {}
};
</script>
