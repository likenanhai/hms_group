<template lang="html">
  <div class="tips">
    {{title}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:'',
    };
  },
  events:{
    vueTipsCreate(title){
      this.title = title;
    },
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
