/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-04-20 21:38:32
 * @LastEditTime: 2021-04-20 22:27:55
 * @LastEditors: jidongyu
 * @Reference: 
 */
/*
   自定义loader的形式
   loader是一个函数，因为牵扯到this指向的问题,这个函数不能是箭头函数
   且loader函数必须有返回值，这个返回值是string或者buffer 
 */
module.exports = function(source){
    // console.log(this.query);
    // const callback = this.async();
    // setTimeout(()=>{
    //     const content = source.replace( "start", this.query.name );
    //     callback(null,content);
    // },100);
    return source.replace('webpack','start');
}