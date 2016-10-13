

// 公共方法
//

export const Common = {
  // 把 yyyy-MM-dd  HH:mm:ss 转换成相应格式的函数
  timeFormat(time,format){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : '') + i ; };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
            case 'MM':
                return tf(t.getMonth() + 1);
            case 'mm':
                return tf(t.getMinutes());
            case 'dd':
                return tf(t.getDate());
            case 'HH':
                return tf(t.getHours());
            case 'ss':
                return tf(t.getSeconds());
        }
    });
  },

  //把req对象  转换成get中query参数形式的字符串
  reqString(obj){
    let objString = JSON.stringify(obj);
    let reqString = "?" + objString.substring(1,objString.length-1).replace(/\"/g,'').replace(/:/g,'=').replace(/\,/g,'&');
    return reqString;
  },


};

//
