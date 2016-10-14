const express = require('express');
const Router = express.Router;
const rawBody = require('raw-body');
const app = express();
const router = new Router();
//获取数据文件
const Data = require('./assets/datas/data.js');

// 首页数据
router.get('/api/home', (req, res) => {
  console.log('首页');
  console.log(req.query);
  res.json(Data.home);
});

//酒店数据
router.get('/api/hotels', (req, res) => {
  console.log("酒店列表");
  console.log(req.query);
  res.json(Data.hotel_list);
});

// 房型数据
router.get('/api/roomTypes',(req,res) => {
  console.log("房型列表");
  console.log(req.query);
  res.json(Data.room_list);
});

// 点评列表数据
router.get('/api/evaluate',(req,res) => {
  console.log("评价列表");
  console.log(req.query);
  res.json(Data.evaluate_list);
});

// 收藏
router.post('/api/save',(req,res) =>{
  console.log("是否收藏");
  rawBody(req).then(buf => {
    console.log(String(buf));
    res.json(JSON.parse(String(buf)));
  })
});

// 订单列表
router.get('/api/orders',(req,res) => {
  console.log("订单列表");
  console.log(req.query);
  res.json(Data.orders);
});

//创建订单
router.post('/api/orders',(req,res) => {
  console.log("创建订单");
  rawBody(req).then(buf => {
    console.log(String(buf));
    res.json({status : 200});
  })
});

// 获取订单详情
router.get('/api/orderDetail',(req,res) => {
  console.log("获取订单详情");
  console.log(req.query);
  res.json(Data.order_details);
});

//提交点评
router.post('/api/comments',(req,res) =>{
  console.log("提交点评");
  rawBody(req).then(buf => {
    console.log(String(buf));
    const _buf = JSON.parse(String(buf));
    if(_buf.orderId && _buf.comment && _buf.images && _buf.wholeScore && _buf.serviceAttitude && _buf.serviceEfficiency && _buf.sleepQuality && _buf.travelType && _buf.anonymity){
      console.log("success");
      res.json({ status : 201 })
    }
  })
});

// 评论like
router.post('/api/like',(req,res) => {
  console.log("评论like");
  rawBody(req).then(buf => {
    console.log(JSON.parse(String(buf)));
    const _buf = JSON.parse(String(buf));
    if(_buf.groupId != '' && _buf.orderId != '' && (_buf.bLike === 0 || _buf.bLike === 1 ) ){
      res.json({ status : 201 });
    }
  })
});

// 订单回复
router.post('/api/reply',(req,res) => {
  console.log("点评回复");
  rawBody(req).then(buf => {
    console.log(JSON.parse(String(buf)));
    const _buf = JSON.parse(String(buf));
    res.json({ status : 200 });
  })
});


// 获取订单价格
router.get('/api/orderPrice',(req,res) => {
  console.log("提交订单价格");
  console.log(req.query);
  res.json(Data.orderPrice);
});

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,JSONP");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(router);


app.listen(3000, () => {
  console.log('listen on', 3000);
});
