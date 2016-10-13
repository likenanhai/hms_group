'use strict';

const fs = require('fs'),
      url = require('url'),
      path = require('path'),
      http = require('http');

const root = path.resolve( process.argv[2]|| '.') ;


//创建服务
const server = http.createServer((req,res) => {
  //获取URL的path
  let pathName = url.parse(req.url).pathname;
  //获取对应的本地文件路径
  let filePath = path.join(root,pathName);
  //获取文件状态
  fs.stat(filePath,(err,stats) => {
    if (!err && stats.isFile()) {
      // 没有出错并且文件存在:
      console.log('200 ' + req.url);
      // 发送200响应:
      res.writeHead(200);
      // 将文件流导向response:
      fs.createReadStream(filePath).pipe(res);
    } else {
      // 出错了或者文件不存在:
      console.log('404 ' + req.url);
      // 发送404响应:
      res.writeHead(404);
      res.end('404 Not Found');
    }
  });
});

server.listen(8000);

console.log("Server is run at http://127.0.0.1:8000");
