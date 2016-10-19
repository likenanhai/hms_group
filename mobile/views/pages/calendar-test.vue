<template lang="html">
  <div id="calendar">
    <calendar id＝'calendar' :show-calendar.sync="showCalendar" max-date="10m" start-date="2016-10-19" end-date="2016-10-28" :is-double-check.sync='isDoubleCheck' :is-vication.sync="isVication" ></calendar>
  </div>
</template>

<script>
import Calendar from "../../components/calendar/components/calendar.vue";
import Vue from 'vue';
console.log(Vue);
// import bulid from '../../components/calendar/lib/build.js';

export default {
  data() {
    return {
      showCalendar:true,
      isDoubleCheck:true,
      isVication:true,
    };
  },
  computed: {},
  ready() {
    // var html = document.getElementsByTagName('html')[0];
    //  var width = html.offsetWidth;
    //  // console.log(width);
    //  html.style.fontSize = (width>=768?768:width)/320*100 + 'px';

  },
  attached() {},
  methods: {},
  components: {
    Calendar,
  }
};
</script>

<style lang="less">
</style>
