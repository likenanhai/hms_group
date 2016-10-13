<style lang='less' scoped>
    a {
        display: block;
        text-align: center;
        padding: 5px 0;
        margin-bottom: 10px;
        color: #888;
    }
</style>
<template>
    <a href="javascript:;">加载更多</a>
</template>
<script type="text/javascript">
  export default {
    methods: {
    },
    ready() {
      this.$dispatch('bindScrollEvent');
    },
  };
</script>
