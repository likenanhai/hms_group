<style lang="css" scoped>
  .view{
    width: 100%;
    height: 100%;
    position:relative;
  }
  .show{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .input{
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }
  input{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="view">
    <div class="show">
      <span id="showDate">{{showDate}}</span>
      <span id="showWeek">{{showWeek}}</span>
    </div>
    <div class="input" >
      <input type="Date" class = "date-components" v-model="d">
      <!-- <input type="Date" class = "date-components" @change="changeDate" v-model="d"> -->
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      // 格式 yyyy（你想要的字符）MM（你想要的字符）dd ……
      format:{
        type: String,
        require: false,
        default: "yyyy-MM-dd HH:mm:ss"
      },
      d: {
        type: String,
        require: true,
        default: '2016-09-07'
      },
      w: {
        type: String,
        require: false,
        default: "周"
      },
      // 是否显示中文的week
      week:{
        type: Boolean,
        require: false,
        default: false
      }
    },
    data() {
      return{
        date: "2016-09-07",
        showWeek:'三',
        showDate:'',
        w_format: '',

      }
    },
    ready() {
      var vm = this;
    },
    computed: {
      showDate() {
        return this.timeFormat(this.d,this.format);
      },
      showWeek() {
        if(this.week){
          return this.getWeek(this.d,this.w);
        } else {
          return ;
        }
      },
    },
    methods: {
      getWeek:function(time,format){
        var t = new Date(time);
        var week = t.toString().substr(0,3);
        switch (week) {
          case 'Sun':
            return format+"日";
            break;
          case 'Mon':
            return format+"一";
            break;
          case 'Tue':
            return format+"二";
            break;
          case 'Wed':
            return format+"三";
            break;
          case 'Thu':
            return format+"四";
            break;
          case 'Fri':
            return format+"五";
            break;
          case 'Sat':
            return format+"六";
            break;
          default:

        }
      },

      timeFormat: function(time, format){
        var t = new Date(time);
        var tf = function(i){return (i < 10 ? '0' : '') + i};
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
            switch(a){
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
          })
        },
    }
  };
</script>
