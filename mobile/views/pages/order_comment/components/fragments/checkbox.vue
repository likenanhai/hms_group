<style lang='less' scoped>
  label{
    position: relative;
  }
  i{
    display:inline-block;
    width:15px;
    text-align:center;
  }
  input{
    -webkit-appearance: none;
    position: absolute;
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    opacity: 0;
  }
</style>
<template>
  <label>
    <i class="fa {{active}}" v-if="value"></i>
    <i class="fa {{idle}}" v-else="value"></i>
    <slot></slot>
    <input type="checkbox" v-model="value">
  </label>
</template>
<script>
  export default{
    props: {
      value: {
        type: Boolean,
        required: true,
      },
      active: {
        type: String,
        required: true,
        default: 'fa-check-square',
      },
      idle: {
        type: String,
        required: true,
        default: 'fa-square-o',
      },
    },
  }
</script>