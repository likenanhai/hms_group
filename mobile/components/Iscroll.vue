<template lang="html">
  <div id="wrapper">
    <div id="scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import IScroll from './libs/iscroll.js';

export default {


  props:{

  },
  data() {
    return {
    };
  },
  computed: {},
  ready() {
    var vm = this;
    setTimeout(function () {
      vm.init();
    }, 10);

    // this.$on("iscroll",this.init);
  },
  attached() {},
  methods: {
    init:function(){
      var Iscroll_myScroll = new IScroll("#wrapper",{
        mouseWheel: true,
        preventDefault: false,
      });
    },
  },
  components: {}
};
</script>

<style lang="css">
  #wrapper{
    height: 100%;
    position: relative;
  }
  #scroller{
    width: 100%;
    position: absolute;
  }

</style>
