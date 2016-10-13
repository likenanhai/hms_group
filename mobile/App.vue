<style lang="sass">
  @import "./assets/styles/common.scss";
</style>
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  import store from './vuex/store';

  export default {
    data() {
      return {
      };
    },
    methods: {
    },
    ready() {
      var html = document.getElementsByTagName('html')[0];
       var width = html.offsetWidth;
       // console.log(width);
       html.style.fontSize = (width>=768?768:width)/375*100 + 'px';
    },
    components: {
    },
    store: store,
  }
 </script>
