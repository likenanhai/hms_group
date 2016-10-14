<template lang="html">
  <iscroll>
    <home>
      <div class="position">
        <label for="">城市</label>
        <input type="text" placeholder="请输入您的目的地" v-model="city" >
        <i class="fa fa-angle-right" ></i>
        <div class="get-position">
          <img src="../../assets/images/locate-o.png" alt="" />
          <div>我的位置</div>
        </div>
      </div>
    </home>
    <div class="spread">
      <div class="title">推广</div>
      <ul>
        <li><a href="#"><img src="./../../assets/images/home2_content1.png" alt=""></a></li>
        <li><a href="#"><img src="./../../assets/images/home2_content1.png" alt=""></a></li>
      </ul>
    </div>
  </iscroll>
</template>

<script src="../scripts/home2.js">


</script>

<style lang="sass">
  @import "../../assets/styles/common.scss";
  .section{
    height: 3rem;
    .position{
      height: 0.4rem;
      line-height: 0.04rem;
      @include border(2px 0 2px 0,#efeff4);
      label{
        color:#cacaca;
      }
      input{
        border: 0;
        height: 100%;
        width: 60%;
      }
      .get-position{
        width: 20%;
        float: right;
        font-size: 0.12rem;
        text-align: center;
        img{
          width: 0.19rem;
          margin: 0.04rem 0 0.04rem 0;
        }
      }
    }
  }
  .spread{
    width: 100%;
    text-align: center;
    background: #fff;
    margin-top: 0.05rem;
    .title{
      padding: 0.09rem 0;
    }
    ul{
      li{
        margin-bottom: 0.09rem;
        img{
          width: 82.5%;
        }
      }
    }
  }
  .footer{
    min-height:1.12rem;
  }
</style>
