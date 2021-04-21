/*
 * @Description: 仿写css-loader函数，css-loader函数的作用是将传入的数据源进行序列化，因为wenpack只能处理js或者json形式的数据
 * @Author: jidongyu
 * @Date: 2021-04-21 11:16:23
 * @LastEditTime: 2021-04-21 11:16:23
 * @LastEditors: jidongyu
 * @Reference: 
 */
module.exports = function(resource){
    return JSON.stringify(resource);
}