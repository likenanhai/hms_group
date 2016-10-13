
<style lang="sass" >
  @import "../../assets/styles/common.scss";
  @import "../styles/home1.scss";

</style>
<template>
  <div class="home">
    <!-- banner -->
    <div class="banner" v-if="images.length != 0 ">
      <Swiper :images='images' :options = 'options'  ></Swiper>
    </div>

    <!-- section -->
    <div class="section">
      <div class="slit"></div>
      <!-- 选择日期 -->
      <div class="select-date">
        <div class="stay">
          <div class="title">
            入住
          </div>
          <div class="date">
            <select-date format="MM月dd日" :week="true" w="周" :d.sync="stayDay"></select-date>
          </div>
        </div>
        <div class="days">
          <div class="vertical">
            <div class="shu"></div>
          </div>
          <div class="center">
            共{{total_days}}晚
          </div>
          <div class="vertical">
            <div class="shu"></div>
          </div>

        </div>
        <div class="leave">
          <div class="title">
            离店
          </div>
          <div class="date">
            <select-date format="MM月dd日" :week="true" w="周" :d.sync="leaveDay" ></select-date >

          </div>
        </div>
      </div>
      <div class="slit"></div>
      <!-- 搜索 -->
      <slot></slot>
      <div class="search">
        <div class="box">
          <div class="search-input">
            <Search-bar :value.sync="searchbar_value" placeholder="输入您的的目的地，为您搜索周边酒店" ></SearchBar>
          </div>

          <div class="Button" @click="handerfindHotel">
            <Button >查找酒店</Button>
          </div>
        </div>


      </div>
      <div class="slit"></div>
      <!-- nav -->
      <div class="navs">

        <div class="nav">
          <img src="../../assets/images/ICON-01.png" alt="">
          <div>常住酒店</div>
        </div>
        <div class="nav">
          <img src="../../assets/images/ICON-02.png" alt="">
          <div>我的收藏</div>
        </div>
        <div class="nav">
          <img src="../../assets/images/ICON-03.png" alt="">
          <div>我的订单</div>
        </div>
      </div>
      <div class="slit"></div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="footer-slit"></div>
      <!-- <div class="title">品牌入口</div>
        <div class="footer-slit"></div>
      <div class="links">
        <span href="#" v-for="item in home.data.items.brands" @click='selectBrand(item)' data-brand="item">
          <img :src="item.logo" alt="">
        </span>
      </div>
      <div class="footer-slit"></div> -->
    </div>
    <div v-show="toast.toastShow">
      <div class="weui_mask_transparent"></div>
      <div class="weui_toast">
        <i class="icon_toast fa fa-minus-circle"></i>
        <div class="weui_toast_content">{{toast.toastText}}</div>
      </div>
    </div>
  </div>

</template>
<script src="../scripts/home1.js">

</script>
