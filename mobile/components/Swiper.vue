<style lang="less" >
  @import './libs/swiper-3.3.1.min.css';
  img{width: 100%;}
  .swiper-pagination-bullet{
    background: rgba(255,255,255,1);
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    background: rgb(9,187,7);
  }
</style>
<template>
  <div class="swiper-container swiper-container-{{time}}">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='img in images'>
        <img :src="img" alt="" >
      </div>
    </div>
    <div class="swiper-pagination" v-if="options.pagination"></div>
    <div class="swiper-scrollbar" v-if="options.scrollbar"></div>
  </div>
</template>
<script>
  import swiper from './libs/swiper-3.3.1.min.js';


  export default {
    data() {
      return {
        time: +new Date(),
      }
    },
    props: {
      images: {
        type: Array,
        required: true,
        default: [],
      },
      options: {
        type: Object,
        default: {}
      },
    },
    ready() {
      const a = swiper('.swiper-container-'+this.time, this.options);
    },
  };
</script>
