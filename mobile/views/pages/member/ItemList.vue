<style lang="less">
  .item-container{
    padding-left: 15px;
    /*border-bottom: 1px solid #f1f1f1;*/
    background-color: #fff;
    color: #888888;
    li{
      font-family: '微软雅黑';
      font-size: .08rem;
      padding: .09rem 0.12rem .09rem 0;
      border-bottom: 1px solid #f1f1f1;

      /*&:last-of-type{
        border-bottom: none;
      }*/

      i{
        float: right;
        font-size: .26rem;
        color: #CACACA;
      }
      .btn-recharge{
        position: absolute;
        right: 40px;
        top: 8px;
        padding: 0 20px;
        border: 1px solid #12B355;
        border-radius: 3px;
        line-height: .18rem;
        font-size: .0875rem;
        color: #12B355;
      }
      .phone{
        float: right;
      }
    }
  }
  .mayShow {
    margin-top: 0;
  }
</style>
<template>
  <div>
    <ul class="item-container" v-if="register">
      <item text="记录" :link="BaseUrl + '/integral_history'"></item>
      <item text="会员卡消费记录" :link="BaseUrl + '/balance_history'">
        <!-- <a @click.stop.prevent='gotoCharge'
            class="btn-recharge ThemeColor ThemeBorderColor">
          会员充值
        </a> -->
      </item>
    </ul>
    <ul class="item-container mayShow" v-if="register || (mayShow && CardRows.length > 0)">
      <template v-for="row in CardRows">
        <template v-if='register || row.ShowOnRegister'>
          <item v-if="row.Type == 'text'" :text="row.Title" :type='row.Type'>{{row.Content}}</item>
          <item v-else :text="row.Title" :link="row.Url"></item>
        </template>
      </template>
    </ul>
    <ul class="item-container " >
      <item text="常用联系人管理" :link="curUrl + 'contact'"></item>
      <item text="意见反馈" :with-arrow="false" :tel="CustomServicePhone">
        <span class="phone" v-text="CustomServicePhone"></span>
      </item>
    </ul>
  </div>
</template>
<script>
  import Item from './Item';

  export default{
    props: {
      register: Boolean,
    },
    data() {
      return {
        BaseUrl: '',
        CustomServicePhone: '136-8888-8888',
        CardRows: '',
        curUrl: '',
        mayShow: false,
      };
    },

    methods: {
      gotoCharge() {
        window.location.href = `${window.params.BaseUrl}/charge`;
      },
    },
    components: {
      Item,
    },
    // ready() {
    //   let i;
    //   for (i = this.CardRows.length - 1; i >= 0; i--) {
    //     if (this.CardRows[i].ShowOnRegister) {
    //       this.mayShow = true;
    //       break;
    //     }
    //   }
    // },
  };
</script>
