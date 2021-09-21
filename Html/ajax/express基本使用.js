//1. 引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (requestm,response)=>{
    response.send('HELLO EXPRESS')
});

app.listen(8000, ()=>{
    console.log("服务以及启动,8000端口监听中")
})