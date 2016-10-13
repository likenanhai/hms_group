<style lang='less' scoped>
  .icon_toast{
    font-size: 55px;
    margin:20px 0 0;
  }
</style>
<template>
  <div v-if="show">
    <div class="weui_mask_transparent"></div>
    <div class="weui_toast">
      <i class="icon_toast fa fa-times"></i>
      <div class="weui_toast_content"><slot></slot></div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vue-weui';
  export default {
    props: ['show'],
  }
</script>