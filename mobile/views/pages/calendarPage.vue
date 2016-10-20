<template lang="html">
  <div id="calendar">
    <calendar id＝'calendar' :show-calendar.sync="showCalendar" max-date="10m" :start-date="startDate" :end-date='endDate' :is-double-check.sync='isDoubleCheck' :is-vication.sync="isVication" ></calendar>
  </div>
</template>

<script>
import Calendar from "../../components/calendar/components/calendar.vue";
import moment from 'moment';


export default {
  props:{
    showCalendar:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      isDoubleCheck:true,
      isVication:true,
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().add('days',1).format('YYYY-MM-DD'),
    };
  },
  computed: {},
  ready() {

  },
  attached() {},
  methods: {},
  events:{
    vueCalendarConfirm(result) {
      this.$dispatch("getPriceDates",result);
    }
  },
  components: {
    Calendar,
  }
};
</script>

<style lang="less">
</style>
