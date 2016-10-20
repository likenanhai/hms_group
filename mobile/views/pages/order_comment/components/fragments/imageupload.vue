<style lang='less' >
  .image-group{
    position: relative;
    li{
      list-style:none;
      float:left;
      margin-right: 5vw;
      position: relative;
    }
    .image-item{
      img{
        width:60px;
        height:60px;
        object-fit:cover;
        object-position:center;
      }
    }
    .max {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #A9A9A9;
    }
  }
  .remove-btn{
    position: absolute;
    top: -4px;
    right: -4px;
    color: red;
    font-size: 1rem;
    display: inline-block;
    &:after{
      content: '';
      position: absolute;
      width:20px;
      height:20px;
      left: -5px;
      top: -4px;
    }
  }
  .add-btn{
    background: #efefef;
    border: 1px dashed #bbb;
    width: 60px;
    height: 60px;
    position: relative;
    text-align:center;
    i{
      font-size:.18rem;
      line-height:60px;
      color: #bbb;
    }

  }
  .uploader{
    position:absolute;
    -webkit-appearance:none;
    width: 60px;
    height: 60px;
    top:0;
    left:0;
    outline: none;
    opacity: 0;
  }


</style>

<template>
  <ul class="image-group clearfix">
    <li class="image-item" v-for="image in images">
      <i class="fa fa-times-circle remove-btn" @click="removeItem($index)"></i>
      <img :src="image" alt="">
    </li>
    <li class="add-btn" v-if="images.length < maxNum">
      <i class="fa fa-camera-retro"></i>
      <Upload :url="url" class="uploader"
        contenttype="application"
        :load="load"
        :success="success"
        :progress="progress"
        :error="error">
      </Upload>
    </li>
    <span class="max">请上传不超过3张照片</span>
  </ul>

  <toast-error :show="ToastFail">{{ErrorMsg}}</toast-error>

  <Toast v-if="ToastLoading" type="loading">{{UploadMsg}}</Toast>
</template>
<script>
  import { Toast } from 'vue-weui';
  import Upload from '../../../../../components/Upload.vue';
  import ToastError from './ToastError';

  let uploadTimeout;
  let uploadInterval;
  let counter;

  export default {
    props: ['maxNum', 'images'],
    data(){
      return{
        url: '',//`/hotel/${window.params.TID}/share_order_upload_pic`,//'http://localhost:3001',
        ToastLoading: false,
        ToastFail: false,
        ErrorMsg: '上传失败',
        UploadMsg: '图片上传中...',
        BaseImages:[],
      }
    },
    methods:{
      load(data){
        this.UploadMsg = '图片上传中...';
        this.ToastLoading = true;
        // here has a fake upload progress number
        // because xhr progress only fire once on complete
        counter = 0;
        this.timeout();
      },
      timeout() {
        // delay start
        const _this = this;
        uploadTimeout = setTimeout(function () {
          _this.interval();
          _this.UploadMsg = '图片上传中...0%';
        }, 300);
      },
      interval() {
        const _this = this;
        let progress = 0;
        let random;
        uploadInterval = setInterval( () => {
          // count 19 times , progress = 19 * random
          // random max is 5
          // promise progress is smaller than 100.
          if (counter >= 19) {
            clearInterval(uploadInterval);
            return;
          }
          random = Math.round(Math.random()*5);
          progress += random;
          counter ++;
          _this.UploadMsg = `图片上传中...${(progress)}%`;
        }, 100);

      },
      success(response, image){
        const {error_code, error_msg, data} = JSON.parse(response);
        if(error_code==0){
          this.ToastLoading = false;
          this.images.push(data.ImageUrl);
          this.BaseImages.push(image);
        }else{
          this.ToastFail = true;
          this.ErrorMsg = error_msg;
        }
      },
      progress(data){
        const _this = this;

        if(data==1){
          // when complete delay to hide toast
          clearTimeout(uploadTimeout);
          clearInterval(uploadInterval);
          _this.UploadMsg = `图片上传中...100%`;
          setTimeout(function () {
            _this.ToastLoading = false;
          }, 300);
        }
      },
      error(data){
        const _this = this;
        _this.ToastLoading = false;
        _this.ErrorMsg = data;
        _this.ToastFail = true;
        setTimeout(function () {
        _this.ToastFail = false;
        }, 2000);
        console.log('error', data);
      },
      removeItem(idx){
        this.images.splice(idx,1);
      },
    },

    components:{
      Upload,
      Toast,
      ToastError,
    }
  };
</script>
