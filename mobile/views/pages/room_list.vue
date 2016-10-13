<template lang="html">
  <div class="room-list">
    <div class="header">
      <Swiper :images='images' :options = 'options'></Swiper>
    </div>
    <div class="center">
      <div class="navs">
        <div class="nav active" >住客点评</div>
        <div class="nav" >酒店详情</div>
      </div>
      <div class="content" v-show="show_content == 0">
        <div class="top">
          <div class="circle" id="circles-1"></div>
          {{roomType_list.comment}}
        </div>
        <div class="bottom" @click="goCommentList">
          查看全部点评&nbsp;
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="content" v-show="show_content == 1">
        <div class="top">
          <span></span>
          <div class="Button">
            <a :href='"tel:"+roomType_list.detail.phone' >
              <i class="fa fa-phone" aria-hidden="true"></i>
              一键拨号
            </a>
          </div>
          <span></span>
          <a href="javascript:void(0);" class="Button" @click="location">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            一键导航
          </a>
          <span></span>
        </div>
        <div class="bottom" @click="goHotelIntroduce">
          查看具体信息&nbsp;
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="title">
        <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
        <span>{{days.stayDay}} ~ {{days.leaveDay}}（{{days.total_days}} 日）</span>
        <span class="right">修改&nbsp;
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
      </div>
      <div class="footer_list">
        <ul class="room-list">
          <li v-for="(index,item) in roomType_list.items">
            <img :src="item.logo" alt=""  @click='handelRoomImg($event,index)' />
            <div class="content">
              <div class="membrane" :data-id="item.id" @click='handelRoom($event,index)' ></div>
              <div class="memo">
                <p>{{item.name}}</p><br/>
                <p>{{item.memo}}</p>
              </div>
              <span></span>
              <div class="minprice">
                <p><span>￥{{item.minPrice}}</span>起</p><br/>
                <p>剩余{{item.empty}}间</p>
              </div>
              <span class="right">
                <i class="icon iconfont yo-ico"   v-if= "selected_room != index">&#xe601</i>
                <i class="yo-ico"  v-if= "selected_room == index">&#xe602</i>
              </span>
            </div>
            <div class="bottom" v-if="selected_room == index">
              <div class="priceTypes"  v-for="(packageIndex,packageItem) in item.package" >
                <div class="priceType" v-for="(priceTypeIndex,priceTypeItem) in packageItem.priceType">
                  <span class="name">{{packageItem.name}}</span> /
                  <span class="priceTypeName">{{priceTypeItem.priceTypeName}}</span>
                  <div class="set">
                    <span class="price">￥{{priceTypeItem.price}}</span>
                    <span class="buttons" v-if='priceTypeItem.Enabled' @click='handelSetOrders(index,packageIndex,priceTypeIndex)'>
                      订
                    </span>
                    <span class="buttons" style="background:#888;" v-if=" !priceTypeItem.Enabled">
                      订
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cover" :class="cover.status">
      <div class="content" >
        <i class="yo-ico close" @click='closeCover'>&#xe600</i>
        <!-- <img src="../../assets/images/close.svg" class="close" alt=""  @click='closeCover'> -->
        <div class="swiper">
          <Swiper  v-if='cover.roomBanners.length != 0 ' :images='cover.roomBanners' :options = 'options_1'></Swiper>
        </div>
        <div class="introduce">
          <div><p>{{cover.name}}</P></div>
          <div><p>{{cover.memo}}</p></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script src="../scripts/room_list.js">


</script>

<style lang="sass">
  @import "../../assets/styles/common.scss";
  @import "../styles/room_list.scss";

</style>
