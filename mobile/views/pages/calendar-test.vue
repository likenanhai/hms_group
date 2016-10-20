<template lang="html">
  <div id="calendar">
    <calendar id＝'calendar' :show-calendar.sync="showCalendar" max-date="10m" start-date="2016-10-19" «» :is-double-check.sync='isDoubleCheck' :is-vication.sync="isVication" ></calendar>
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

  },
  attached() {},
  methods: {},
  events:{
    'vue-calendar-confirm':(result) => {
      console.log(result);
    }
  },
  components: {
    Calendar,
  }
};
</script>

<style lang="less">
</style>
