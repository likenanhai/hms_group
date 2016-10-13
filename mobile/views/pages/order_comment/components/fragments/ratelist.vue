<style lang="less" scoped>
  section{
  }
</style>
<template>
  <section>
    <Rate2 title="总体评分" :point.sync="rate.TotalScore"></Rate2>
    <Rate title="服务态度" :point.sync="rate.AttitudeScore"></Rate>
    <Rate title="服务效率" :point.sync="rate.EfficiencyScore"></Rate>
    <Rate title="睡眠质量" :point.sync="rate.SleepScore"></Rate>
  </section>
</template>
<script>
  import Rate from './rate';
  import Rate2 from './rate2';
  export default {
    props: ['rate'],
    data() {
      return {
      }
    },

    components:{
      Rate,
      Rate2,
    }

  }
</script>
