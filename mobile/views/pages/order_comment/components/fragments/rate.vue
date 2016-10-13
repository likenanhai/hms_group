<style lang='less' scoped>
@import url('../../config.less');
.wrapper{
  display:flex;
  line-height: 36px;
  width: 100%;
}
  label{
    text-align: center;
    font-size: @sm;
    width: 80px;
    display: inline-block;
  }
  span.text{
    display: block;
    font-size: @sm;
    width: 18vw;
    text-align:right;
    padding-right:2vw;
    box-sizing:border-box;
    color: @grey;
  }
  .list{
    flex:1;
    display: flex;
    span{
      font-size: @xxl;
      /* vertical-align: top; */
      margin-right: 4vw;
    }
  }
/*   ul{
    display:flex;
    vertical-align: middle;
  }
  li{
    flex:1;
    float: left;
    list-style:none;
    font-size: @xxl;
  } */
  i{
    color: @light-grey;
    &.active{
      color: @gloden;
    }
  }
</style>
<template>
  <div class="wrapper">
    <label for="">{{title}}</label>
    <div class="list">
        <span @click='setPoint(1)'><i class="fa fa-star" :class="{'active':point>=1}"></i></span>
        <span @click='setPoint(2)'><i class="fa fa-star" :class="{'active':point>=2}"></i></span>
        <span @click='setPoint(3)'><i class="fa fa-star" :class="{'active':point>=3}"></i></span>
        <span @click='setPoint(4)'><i class="fa fa-star" :class="{'active':point>=4}"></i></span>
        <span @click='setPoint(5)'><i class="fa fa-star" :class="{'active':point>=5}"></i></span>
     <!--  <ul>
        <li @click='setPoint(1)'><i class="fa fa-star" :class="{'active':point>=1}"></i></li>
        <li @click='setPoint(2)'><i class="fa fa-star" :class="{'active':point>=2}"></i></li>
        <li @click='setPoint(3)'><i class="fa fa-star" :class="{'active':point>=3}"></i></li>
        <li @click='setPoint(4)'><i class="fa fa-star" :class="{'active':point>=4}"></i></li>
        <li @click='setPoint(5)'><i class="fa fa-star" :class="{'active':point>=5}"></i></li>
      </ul> -->
    </div>
    <span class="text">{{rateText}}</span>
  </div>
</template>

<script>
  export default{
    props:['title','point'],
    data(){
      return{
      }
    },
    computed:{
      rateText(){
        switch(window.parseInt(this.point)) {
          case 1:
            return '糟糕';
            break;
          case 2:
            return '差';
            break;
          case 3:
            return '一般';
            break;
          case 4:
            return '很好';
            break;
          case 5:
            return '非常好';
            break;
          default:
            return '';
        }
      }
    },

    methods:{
      setPoint(n){
        this.point = n;
        switch(n) {
          case 1:
            this.rateText = '糟糕';
            break;
          case 2:
            this.rateText = '差';
            break;
          case 3:
            this.rateText = '一般';
            break;
          case 4:
            this.rateText = '很好';
            break;
          case 5:
            this.rateText = '非常好';
            break;

        }
      }
    }
  };
</script>
