/*
 * @Description: 异步替换
 * @Author: jidongyu
 * @Date: 2021-04-20 22:37:37
 * @LastEditTime: 2021-04-20 22:38:36
 * @LastEditors: jidongyu
 * @Reference: 
 */
module.exports = function(source){
    console.log(this.query);
    const callback = this.async();
    setTimeout(()=>{
        const content = source.replace( "start", this.query.name );
        callback(null,content);
    },100);
    // return source.replace('start','开始测试');
}