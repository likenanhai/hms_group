<template lang="html">
    <div class="home3">
      <!-- banner -->
      <div class="banner" v-if="images.length != 0">
        <Swiper :images='images' :options = 'options' ></Swiper>
      </div>
      <!-- section -->
      <div class="section">
        <!-- 选择日期 -->
        <div class="select-date">
          <div class="stay">
            <div class="title">
              入住
            </div>
              <div class="date" @click.prevent="showCalendar=true">
                {{startDate.substr(5,10).replace(/-/,'月')}}
                <span>周{{ week.str[ parseInt(week.end) ] }}</span>
              </div>
          </div>
          <div class="days">
            <div class="vertical">
              <div class="shu"></div>
            </div>
            <div class="center">
              共{{neightNum}}晚
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
              <div class="date" @click.prevent="showCalendar=true">
                {{endDate.substr(5,10).replace(/-/,'月')}}
                <span>周{{ week.str[ parseInt(week.end) ] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- select-city -->
      <div class="select-city">
        <div class="title" @click="selectCity($event)">
          选择城市
          <i class="fa fa-angle-right arrow"  ></i>
        </div>
        <ul class="citys" v-if="show_cities" >
          <li><a href="">北京</a></li>
          <li><a href="">上海</a></li>
          <li><a href="">广州</a></li>
          <li><a href="">深圳</a></li>
        </ul>
        <!-- <city-list :codes="cities" :show="show_city"></city-list> -->
      </div>

      <!-- footer -->

      <div class="footer">
        <!-- <iscroll> -->
        <ul>
          <li v-for="item in hotel_list.items">
            <div class="membrane" :data-id="item.id" :hotelName="item.name" @click='selectHotel($event)'></div>
            <img :src="item.logo" alt="">
            <div class="content" >
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
              <p><span>{{item.address.city}}</span>
              <p><span>￥</span><span>{{item.minPrice}}</span><span>起</span></p>
            </div>
          </li>
        </ul>
        <!-- </iscroll> -->
      </div>
      <!-- calendar -->
      <div class="calendar">
        <calendar-page :show-calendar.sync="showCalendar"></calendar-page>
      </div>
    </div>


</template>

<script src="../scripts/home3.js">

</script>

<style lang="sass">
  @import "../../assets/styles/common.scss";
  @import "../styles/home3.scss";

</style>
