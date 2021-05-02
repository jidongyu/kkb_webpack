/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-04-20 16:32:46
 * @LastEditTime: 2021-04-30 20:39:02
 * @LastEditors: jidongyu
 * @Reference: 
 */
// import css from './css/style.css';
import axios from 'axios';
import {log} from './a';
import css from './css/index.less';
// import pig from './images/src.png';
// log();
axios.get('/api/info').then((res)=>{
    console.log(res,'-----------')
})
console.log('webpack');
// console.log(pig,"图像");

// let img = new Image();
// img.src = pig;
// let app = document.getElementById("app");
// app.append(img);

// !!!++++++++++++++++“”“”“”“”“”|||||||||||||