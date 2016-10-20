<template>
  <input type="file" accept="image/*" @change="onChange">
</template>

<script>
  function isUploadSupported() {
    if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
      return false;
    }

    var elem = document.createElement('input');
    elem.type = 'file';
    return !elem.disabled && window.File && window.FileReader && window.FormData;
  }

  if (!isUploadSupported()) {
    alert('您的浏览器暂不支持图片上传');
  }

  function resize(img, type, w, h) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toDataURL(type);
  }

  export default {
    props: {
      width: {
        type: Number,
        required: false,
        default: 0,
      },
      height: {
        type: Number,
        required: false,
        default: 0,
      },
      url: {
        type: String,
        required: true,
      },
      load: {
        type: Function,
        required: false,
        default: () => {},
      },
      progress: {
        type: Function,
        required: false,
        default: () => {},
      },
      success: {
        type: Function,
        required: false,
        default: () => {},
      },
      error: {
        type: Function,
        required: false,
        default: () => {},
      },
      contenttype: {
        type: String,
        required: false,
        default: () => {},
      }
    },
    methods: {
      onChange(e) {
        const file = e.target.files[0];
        if (file && isUploadSupported()) {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.parseImg(reader.result, file.type);
          };

          reader.onerror = () => {
            this.error('读取文件失败');
          };

          reader.readAsDataURL(file);
        }
      },
      parseImg(data, filetype) {
        const img = new Image();
        img.src = data;
        img.onload = () => {
          if (this.width > 0 && this.height > 0 && (img.width > this.width || img.height > this.height)) {
            let newWidth, newHeight;
            if (img.width > img.height) {
              newWidth = this.width;
              newHeight = img.height * (this.width / img.width);
            } else {
              newHeight = this.height;
              newWidth = img.width * (this.height / img.height);
            }

            data = resize(img, filetype, newWidth, newHeight);
          }

          this.load(data);
          this.uploadImg(data);
        }
      },
      uploadImg(data) {

        if (!this.url) {
          console.log('上传地址为空');
          return this.error('上传地址为空');
        }

        const xhr = new XMLHttpRequest();
        xhr.onload = (e) => {
          if (xhr.status !== 200) {
            return this.error('上传失败');
          }
          this.success(xhr.responseText, data);
        };

        xhr.onprogress = (e) => {
          if(e.lengthComputable){
            this.progress(e.loaded / e.total);
          }
        };

        xhr.onerror = () => {
          this.error('上传失败');
        };

        const formData = new FormData();

        if(this.contenttype !== 'application'){
          formData.append('imageData', data);
        }

        xhr.open('post', this.url, true);
        
        if(this.contenttype == 'application'){
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(`imageData=${encodeURIComponent(data)}`);
        }else{
          xhr.send(formData);
        }
      },
    },
  };
</script>
