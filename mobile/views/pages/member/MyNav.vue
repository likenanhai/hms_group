<style lang='less' scoped>
  .item-nav{
    margin-top: .06rem;
    padding-top: .05rem;
    padding-bottom: .25rem;
    background-color: #fff;
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
    position: relative;
    &:after {
      position:absolute;
      bottom: 0;
      content:'';
      width: 93%;
      height: 1px;
      background-color: #f1f1f1;
      margin: 0 .12rem;
    }
    /*&:last-of-type:after {
      content:'';
    }*/
    li{
      line-height: .42rem;
      position: relative;
      text-align: center;
      -webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
      -moz-box-flex: 1;         /* OLD - Firefox 19- */
      width: 20%;               /* For old syntax, otherwise collapses. */
      -webkit-flex: 1;          /* Chrome */
      -ms-flex: 1;              /* IE 10 */
      flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
      &:after {
        content:'';
        width: 1px;
        height: .15rem;
        background-color: #f1f1f1;
        position: absolute;
        top: .45rem;
        left: .98rem;
      }
      a{
        color: inherit;
        .item-icon{

          img{
            width: .15rem;
          }
        }
        .item{
          font-family: '微软雅黑';
          font-size: .075rem;
          line-height: .125rem;
          color: #888;
          p:nth-child(2) {
            color: #3D4248;
            font-size: .16rem;
            margin-top: .12rem;
            font-weight: bold;
            span:nth-child(2){
              font-size: .075rem;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <ul class="item-nav">
    <li >
      <div class="block-center">
        <a href="order" >
          <div class="item-icon">
            <img src="/assets/images/ICON-04.png" alt="">
          </div>
          <div class="item">
            <p>我的订单</p>
            <p><span>1672</span><span>分</span></p>
          </div>
        </a>
      </div>
    </li>
    <li >
      <div class="block-center">
        <a :href="MaocouponUrl" >
          <div class="item-icon">
            <img src="/assets/images/ICON-05.png" alt="">
          </div>
          <div class="item">
            <p>我的订单</p>
            <p><span>1672</span><span>分</span></p>
          </div>
        </a>
      </div>
    </li>
    <li >
      <div class="block-center">
        <a href="javascript:;" >
          <div class="item-icon">
            <img src="/assets/images/ICON-06.png" alt="">
          </div>
          <div class="item">
            <p>我的订单</p>
            <p><span>1672</span><span>分</span></p>
          </div>
        </a>
      </div>
    </li>
    <li >
      <div class="block-center">
        <a href="javascript:;" >
          <div class="item-icon">
            <img src="/assets/images/ICON-07.png" alt="">
          </div>
          <div class="item">
            <p>我的订单</p>
            <p><span>1672</span><span>分</span></p>
          </div>
        </a>
      </div>
    </li>
  </ul>
</template>
<script>
  export default{
    data() {
      return {
        MaocouponUrl: '',
      };
    },
  };
</script>
