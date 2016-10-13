<style lang='sass'>
  @import "../../assets/styles/common.scss";
  @import "../styles/city_list.scss";

</style>
<template>
  <div class="city-list">
    <!-- header -->
    <div class="header">
      <Search-bar :value.sync="searchbar_value" placeholder="搜索城市" ></Search-bar>
      <div class="tabs">
        <div class="tab">国内
          <div class="under-line"></div>
        </div>
        <div class="tab" style="border">国际</div>

      </div>
    </div>
    <!-- recommend -->
    <div class="recommend">
      <div class="title">推荐城市</div>
      <div class="content">
        <div class="care">北京</div>
        <div class="care">上海</div>
        <div class="care">广州</div>
        <div class="care">深圳</div>
      </div>
    </div>
    <!-- section -->
    <div class="section" >
      <City-list :codes="codes" :show="show_city"></City-list>
    </div>
    <!-- loading -->
      <toast type="loading" v-if="loading"></toast>
  </div>
</template>
<script src="../scripts/city_list.js"></script>
