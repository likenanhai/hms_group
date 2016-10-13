<style lang='less' scoped>
@import url('../../config.less');
  a{
    color: @ctheme;
    font-size: @sm;
  }
  .wrapper{
    position: fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    padding:5vh 4vw;
    background-color: rgba(33,33,33,.95);
    color: #d4d4d4;
    box-sizing: border-box;
    z-index: 10;
    padding: 4vw;
    box-sizing: border-box;
    .description{
      overflow: auto;
      height:78vh;
      margin-bottom: 4vh;
      background-color: #fff;
      padding: 4vw;
      border-radius: 8px;
      color: @dark-grey;
      overflow:auto;
      font-size: @sm;
      > h3 {
        font-weight:normal;
        font-size: @lg;
        color: @ctheme;
        border-bottom: 1px solid @light-grey;
        padding: 2vw 0;
        margin-bottom: 4vw;
        i:before{
          margin-right: 2vw;
        }
      }
    }
    i.btn{
      font-size: .38rem;
      display:block;
      width:10vw;
      height:10vw;
      text-align: center;
      margin: 0 auto;
      color: #fff;
    }
  }
</style>

<template>
  <section>
    <a class="link" href="javascript:void(0);" @click="showPanel(true)">
      <i class="fa fa-question-circle"></i>
    评价规则</a>
    <div class="wrapper" v-if="show">
      <div class="description">
        <h3><i class="fa fa-question-circle"></i>评价规则</h3>
        <slot></slot>
      </div>
      <i class="fa fa-times-circle btn" @click="showPanel(false)"></i>
    </div>
  </section>
</template>
<script>
  let text;
  export default{
    props: ['text'],
    data() {
      return {
        show: false,
      }
    },
    methods: {
      showPanel(d) {
        this.show = d;
      }
    }
  }
</script>
