<template lang="html">
  <div class="hotel_list">
    <!-- header -->
    <div class="header">
      <!-- 筛选目录 -->
      <ul class="title">
        <li>
          <div class="content">
            <div class="days">
              <img src="/assets/images/ICON-08.png" alt="">
              <div>3晚</div>
            </div>
            <div class="date">
              <div>09-09</div>
              <div><i class="fa fa-angle-down" aria-hidden="true"></i></div>
              <div>09-09</div>
            </div>
          </div>

        </li>
        <li class="filter" @click="select_filter($event)" state='0'>
          <i class="fa fa-sort-desc paixu" aria-hidden="true" state='0'  ></i>
          排序
        </li>
        <li class="filter" @click="select_filter($event)" state='1'>
          <i class="fa fa-sort-desc shaixuan" aria-hidden="true" state='1' ></i>
          筛选
        </li>
      </ul>
      <!-- 筛选项 -->
      <div class="filter-list" v-if="filter_list == 1">
        <ul>
          <li v-for="(index,item) in sequence_items" sort="{{item.sort}}"  @click = "handelSequence($event,index)">{{item.text}}
          <i class="fa fa-check" aria-hidden="true"  v-if="checked_index == index"  ></i>
          </li>
        </ul>
        <div class="buttons">
          <span></span>
          <button :mini="true" :class="options.bizContent.sort" @click="handelReset">重置</button>
          <span></span>
          <button :mini="true" @click="handelConfirm">确认</button>
          <span></span>
        </div>
      </div>
      <div class="filter-by-logo" v-if ="filter_list == 2 ">
        <div class="title">品牌</div>
        <ul>
          <li class="filter-by-brand" :class="{'actived':filter_active == 0}" @click="handerFilter($event,-1)" data-id="">不限</li>
          <li class="filter-by-brand"  :class="{'actived':filter_active == index+1}" v-for='(index,item) in publicState.brands'><img :src="item.logo" data-id="{{item.id}}" @click='handerFilter($event,index)'></li>
        </ul>
        <div class="buttons">
          <span></span>
          <button :mini="true" :class="{'default':filter_active == 0}" @click="handelReset" >重置</button>
          <span></span>
          <button :mini="true" @click="handelConfirm">确认</button>
          <span></span>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li v-for="(index,item) in hotel_list.items">
          <div class="membrane" :hotelId="item.id" :hotelName="item.name" @click="selectHotel($event)">

          </div>
          <img :src="item.logo" alt="">
          <div class="content">
            <p>{{item.name}}</p>
            <p><span style="color:#3d4248;">{{item.score}}分</span><span>&nbsp;&nbsp;&nbsp;{{item.number}}条点评</span></p>
            <p>
              <span>
                <i class="yo-ico">&#xe604</i>
                <i class="yo-ico">&#xe605</i>
                <i class="yo-ico">&#xe606</i>
                <i class="yo-ico">&#xe607</i>
              </span>
            </p>
            <p><span>{{item.address.city}}</span></p>
            <p><span>￥</span><span>{{item.minPrice}}</span><span>起</span></p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 加载图标 -->
      <toast type="loading" v-if="loading" ></toast>
  </div>
</template>

<script src="../scripts/hotel_list.js">

</script>

<style lang="sass">
  @import "../../assets/styles/common.scss";
  @import "../styles/hotel_list.scss";
</style>
