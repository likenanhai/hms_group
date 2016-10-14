// Date 2016-09-06
// Autor jianwen;


// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入



//设置orderData
export const setOrderData = function({dispatch},setData){
  dispatch('getOrderData',setData);
};

// 设置 orderPrice
export const setOrderPrice = function({dispatch},setData){
  dispatch('setOrderPrice',setData);
}

// 酒店信息
export const setHotelMessages = function({dispatch},setData){
  dispatch("setHotelMessages",setData);
}

// 用户选择的订单id
export const setMessages = function({dispatch},setData){
  dispatch("setMessages",setData);
}




// 公共函数
export const hmsGroup = {
  timeFormat({dispatch},time,format){
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
};
