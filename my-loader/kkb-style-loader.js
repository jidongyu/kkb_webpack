/*
 * @Description: 仿写style-loader函数，style-loader的作用是将序列化后的css样式数据插入到html中header头部的style标签中
 * @Author: jidongyu
 * @Date: 2021-04-21 11:40:49
 * @LastEditTime: 2021-04-21 15:11:22
 * @LastEditors: jidongyu
 * @Reference: 
 */
module.exports = function(resource){
    console.log(resource);
    return `
        const targ = document.createElement('style');
        targ.innerHTML = ${resource};
        document.head.appendChild(targ);
    `
}