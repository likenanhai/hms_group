<style lang='less' scoped>
  @majorColor: #09BB07;
  .tab-bar {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 100;
    background-color:#fff;
    border-bottom:1px solid #f1f1f1;

    li {
      flex: 1;
      line-height: .54rem;
      text-align: center;
      border-right: 1px solid #f1f1f1;
      a{
        display: block;
        font-size: .14rem;
        font-family: '微软雅黑';
        color: #666;
      }
      &.curTab a {
        position: relative;
        color: @majorColor;
        &:after{
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: @majorColor;
        }
      }
    }
  }
</style>

<template>
  <ul class="tab-bar ThemeBgColor">
    <li :class="{ curTab: tabtype == 'all' }">
      <a href="javascript:void(0);" @click="tabtype = 'all'">全部</a>
    </li>
    <li :class="{ curTab: tabtype == 'pending_pay' }">
      <a href="javascript:void(0);" @click="tabtype = 'pending_pay'">待支付</a>
    </li>
    <li :class="{ curTab: tabtype == 'pending_checkin' }">
      <a href="javascript:void(0);" @click="tabtype = 'pending_checkin'">待入住</a>
    </li>
    <li :class="{ curTab: tabtype == 'complete' }">
      <a href="javascript:void(0);" @click="tabtype = 'complete'">已完成</a>
    </li>
    <li :class="{ curTab: tabtype == 'refund' }">
      <a href="javascript:void(0);" @click="tabtype = 'refund'">已退款</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      // tabtype: {
      //   type: String,
      // },
    },
    data() {
      return {
        tabtype: 'all'
      };
    },

    methods: {
    },
  };
</script>
