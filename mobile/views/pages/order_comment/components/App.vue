<style lang='less'>
@import url('../config.less');
  .container{
    background-color: rgba(245,245,246,1);
    height:100vh;
    overflow: scroll;
    & > section{
      background-color: #fff;
      padding:2vw;
      border-bottom: 1px solid @cborder;
    }
  }

</style>

<template>
  <div class="container">
    <Index></Index>
  </div>
</template>

<script>
  import Index from './index';
  export default{
    components:{
      Index,
    },

  }
</script>
