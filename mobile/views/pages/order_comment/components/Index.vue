<style lang='less' >
@import url('../config.less');
*{
  outline: none;
  -webkit-tap-highlight-color:transparent;
}
  .clearfix{
    &:before{
      content: '';
      display:table;
    }
    &:after{
      content: '';
      display:table;
      clear:both;

    }
  }
  .award{
    background-color: #1CB91C;
    color: #fff;
    padding: 2vw 4vw;
    border-radius: 4px;
    font-size: @sm;
    font-weight: normal;
    position: relative;
    left: 2vw;
    i{
      font-size: .15rem;
      margin-right:2vw;
      vertical-align: middle;
    }
    &:after{
      content:'';
      border-top: 8px solid #1CB91C;
      border-left:8px solid transparent;
      border-right:8px solid transparent;
      position: absolute;
      bottom:-6px;
      left:10%;
    }
  }
  .block{
    padding:1vw 2vw;
  }
  .fr{
    float: right;
  }
  .anonymous{
    color: @dark-grey;
    font-size: @sm;
    i{
      color: @grey;
      font-size: @lg;
      vertical-align: middle;
      &.active{
        color: @ctheme;
      }
    }

  }
  .bbb{
    background-color: @ctheme !important;
    letter-spacing:20px;
    text-indent: 20px;
    border-radius:0;
    /* margin-bottom: 6vh; */
  }
  .block{
    margin-bottom:3vw;
  }
  .padding-top-3{
    padding-top: 3vw !important;
  }

</style>

<template>
  <header-block class="block"></header-block>
  <radio-group class="block" :value.sync="UserType"></radio-group>
  <section class="padding-top-3 clearfix">
    <span class="award" v-if="HasAwards"><i class="fa fa-gift"></i>{{ActiveTitle}}</span>
    <info-panel class="fr"> {{{ShareRuleText}}}</info-panel>
  </section>
  <rate-list :rate.sync="ScoreExtend"></rate-list>
  <Comment :value.sync="Content"
    :images.sync="Images">
  </Comment>
  <section class="clearfix block">
    <Checkbox class="fr anonymous" :value.sync="IsOpen" idle="fa-check-circle" active="fa-check-circle active">匿名评价</Checkbox>
  </section>
  <Button class="bbb" @click="submit()">发表</Button>
  <toast-error :show.sync="ToastShow">{{ToastMsg}}</toast-error>
</template>

<script>
  import HeaderBlock from './fragments/headerblock';
  import InfoPanel from './fragments/infopanel';
  import RateList from './fragments/ratelist';
  import Comment from './fragments/comment';
  import RadioGroup from './fragments/radiogroup';
  import Checkbox from './fragments/checkbox';
  import { Button, Toast } from 'vue-weui';
  import ToastError from './fragments/ToastError';
  //const ShareRuleText = document.querySelector('#ShareRuleText').textContent.trim().replace(/\n/g, '<br/>');

  export default {
    data() {
      return {
        ToastShow: false,
        ToastMsg: '',
        UserType: 0,
        ShareRuleText: 'ShareRuleText',
        ActiveTitle: 'window.params.ActiveTitle',//.slice(0,9),
        ScoreExtend:{
          TotalScore: 0,
          AttitudeScore: 0,
          EfficiencyScore: 0,
          SleepScore: 0,
        },
        Content:'',
        Images:[],
        IsOpen: false,
      }
    },

    computed:{
      HasAwards(){
        // const Awards = window.params.Awards;
        //
        // if (Awards) {
        //   switch(Awards.ModuleID) {
        //     case 4: // 微信原生卡券
        //     case 22: // 微信现金红包
        //     case 33: // h5代金券
        //     case 34: // h5优惠券
        //     case 37: // 会员积分
        //       return true;
        //       break;
        //     default:
        //       return false;
        //   }
        // }
      },
    },

    methods:{
      toastMsg(msg) {
        this.ToastShow = true;
        this.ToastMsg = msg;
        setTimeout(() => {
          this.ToastShow = false;
        }, 1500);
      },

      submit() {

        // 组建提交数据
        const postData = {
          UserType: this.$data.UserType,
          ScoreExtend: this.$data.ScoreExtend,
          Content: this.$data.Content,
          Images: this.$data.Images,
          IsOpen: window.parseInt(!this.$data.IsOpen * 1),
        };
        // 检验4项评分是否都选择
        if (postData.ScoreExtend.TotalScore === 0 ||
            postData.ScoreExtend.AttitudeScore === 0 ||
            postData.ScoreExtend.EfficiencyScore === 0 ||
            postData.ScoreExtend.SleepScore === 0 ) {
          this.toastMsg('评分未完成!');
          return;
        }
        // 评论内容不能为空
        if (postData.Content.trim() == '') {
          this.toastMsg('请填写评论!');
          return;
        }

        this.$http
          .post(`/hotel/${window.params.TID}/share_order_comment/${window.params.OrderID}`, postData, {
          emulateJSON: true,
        }).then(({ status, data }) => {
          if (status === 200) {
            if(data.error_code === 0) {
              window.location.href = `/hotel/${window.params.TID}/share_order_award/${window.params.OrderID}`;
            } else {
              this.toastMsg(data.error_msg);
            }
          }
        });
      },
    },

    components:{
      RateList,
      Comment,
      InfoPanel,
      RadioGroup,
      Button,
      Checkbox,
      HeaderBlock,
      ToastError,
    }

  }
</script>
