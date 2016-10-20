<style lang='less' scoped>
@import url('../../config.less');
  section{
    padding: 10px;
    display:flex;
    box-sizing: border-box;


    hgroup{
      margin-bottom: 8px;
      color: @dark-grey;
      p{
        line-height:20px;
      }
    }
    i{
      float:right;
      font-size: @xs;
      line-height: 20px;
      color: @cwechat;
    }
    img{
      width:110px;
      height:88px;
      margin-right: 10px;
      box-sizing: border-box;
    }
    & > div{
      flex:1;
      font-size: @sm;
    }
  }
</style>

<template>
  <section>
    <img :src="orderdata.hotelLogo" alt="">
    <div>
      <hgroup>
        <p>入住房型：
          <i class="fa fa-wechat"
            v-if="orderdata.paymentMethod == 1">
            <span>线上支付</span>
          </i>
          <i class="fa fa-paypal"
            v-if="orderdata.paymentMethod == 2">
            <span>到店支付</span>
          </i>
        </p>
        <p>{{orderdata.room[0].roomTypeName}}</p>
      </hgroup>
      <hgroup>
        <p><label>住离时间：</label></p>
        <p>{{orderdata.checkInDate.substring(0,10)}} 至 {{orderdata.checkOutDate.substring(0,10)}}</p>
      </hgroup>
      </p>
    </div>
  </section>
</template>

<script>
  import moment from 'moment';
  export default{
    props: ['orderdata'],
    data() {
      return {
        // image: `/tools/api/thumb?w=220&h=176&q=100&src=${encodeURIComponent(window.params.RoomTypeImage)}`,
         room_type:'豪华',//window.params.RoomTypeName,
        // payType: window.params.PayType,
      }
    },
    computed:{
      checkInDate(){
        //return moment(window.parseInt(window.params.CheckInDate)*1000).format('YYYY-MM-DD');
      },
      checkOutDate(){
        //return moment(window.parseInt(window.params.CheckOutDate)*1000).format('YYYY-MM-DD');
      }
    }
  }
</script>
