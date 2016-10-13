<style lang='less'>
@import url('../../config.less');
  textarea{
    height: 100px;
    resize: none;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    font-size: @sm;
    line-height: 24px;
  }
  .editable{
    min-height:100px;
    outline:none;
    font-size: @sm;
    color: @black;
    p{

    }
    .placeholder{
      color: @grey;
    }
  }
  header{
    span{
      float:right;
    }
  }
  .body{
    padding:2vw 3vw;
  }
</style>

<template>
  <section>
    <div class="body">
      <textarea placeholder="对这次消费满意吗？给小伙伴们分享一下吧！"
      v-model="value" wrap="hard"></textarea>
     <!--  <div class="editable" contenteditable="true" @click="edit()">
        <p><span class="placeholder">写下您入住的体会或入住过程中让您难忘的瞬间。<br/>图片最大上传3张。</span></p>
      </div> -->
      <image-upload max-num="3" :images.sync="images"></image-upload>
    </div>
  </section>

</template>

<script>
  import ImageUpload from './imageupload';
  export default{
    props: ['images', 'value'],

    // methods:{
    //   edit() {
    //     if(this.init){
    //       document.querySelector('.placeholder').remove()
    //       this.init = false;
    //     }
    //   },
    // },

    components:{
      ImageUpload,
    }
  }
</script>
