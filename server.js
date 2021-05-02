/*
 * @Description: 模拟接口
 * @Author: jidongyu
 * @Date: 2021-04-30 18:16:57
 * @LastEditTime: 2021-04-30 20:17:01
 * @LastEditors: jidongyu
 * @Reference: 
 */
const express = require('express');

const appp = express();

appp.get('/api/info', (req, res) => {
    console.log(req.originalUrl, 'req.originalUrl');
    console.log(req.baseUrl, 'req.baseUrl');
    console.log(req.path, 'req.path');
    console.log(req.route, 'req.route');
    res.json({
        name: '开课吧',
    });
})

const server = appp.listen("9092",()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用访问的地址是 http://%s:%s",host,port);
})