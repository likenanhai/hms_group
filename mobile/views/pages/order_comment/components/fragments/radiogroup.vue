<style lang='less' scoped>
@import url('../../config.less');
  section{
    font-size: @sm;
    color: @dark-grey;
  }
  i{
    margin-left:1vw;
    color: #888888;
  }
  label{
    color: #888888;
  }
  ul{
    display:flex;
    padding: 2vw 0;
  }
  li{
    flex:1;
    display:block;
    text-align:center;
    position:relative;
    border: 1px solid @light-grey;
    border-radius: 3px;
    margin: 1vw 1vw;
    font-size: @xs;
    color: @grey;
    padding: .5vw 0;
    &.active{
      border-color: @ctheme;
      color: @ctheme;
    }
    &:nth-last-child(1){
      flex:1.5;
    }
  }
  input{
    -webkit-appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
  }
</style>

<template>
  <section>
    <i class="fa fa-tags"></i>
    <label for="">{{title}}</label>
    <ul>
      <li v-for="label in labels" :class="{active:$index == value}">
        <span>{{label}}</span>
        <input type="radio" name="radio[]" value="{{$index}}" v-model="value">
      </li>
    </ul>
  </section>
</template>

<script>
  export default{
    props: ['value'],
    data (){
      return {
        title: '您本次的出行类型',
        labels: ['商务', '夫妻', '亲子', '家庭', '朋友', '独自旅行'],
        // selected: ,
      }
    }

  }
</script>
