/*
 * @Description: 仿写less-loader
less-loader中主要能将less语法转换成css语法的方法是less中的render()方法，及less.render();
less.render（source,(err,output)=>{}）方法中主要有两个参数，一个参数是要转换的样式源，一个参数是处理后的回调方法，
回调方法有两个参数，一个是返回的错误信息，一个是转换后的输出结果output，其中主要用到的是output.css
 * @Author: jidongyu
 * @Date: 2021-04-21 11:00:01
 * @LastEditTime: 2021-04-21 11:00:02
 * @LastEditors: jidongyu
 * @Reference: 
 */
const less = require('less');
module.exports = function(resouce){
   less.render(resouce,(err,output)=>{
       this.callback(err,output.css);
   })
}
