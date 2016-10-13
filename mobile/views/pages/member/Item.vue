<style lang="less" >
  li {
    position: relative;
    .title{
      font-weight: normal;
    }
    .con-desc{
      font-size: .0875rem;
      color: #888;
    }
  }
  a{
    display: block;
    color: inherit;
  }
</style>
<template>
  <li v-if="type == 'text'">
    <h2 class="title txt-overflow" @click="show = !show">
      {{ text }} <i class="fa fa-angle-down arrow-right"></i>
    </h2>

    <div class="con-desc hide-block" v-if="show">
      <slot></slot>
    </div>
  </li>
  <li v-else>
    <a v-if="tel" :href="'tel:' + tel">
      {{text}}
      <slot></slot>
      <i class="fa fa-angle-right" v-if="withArrow"></i>
    </a>
    <a v-else :href='link'>
      {{text}}
      <slot></slot>
      <i class="fa fa-angle-right" v-if="withArrow"></i>
    </a>
  </li>
</template>
<script>
  export default {
    props: {
      text: String,
      link: {
        type: String,
        default: null,
      },
      tel: {
        type: String,
        default: null,
      },
      withArrow: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        show: false,
      };
    },

    ready() {
    },
  };
</script>
