/*
 * @Description: webpack的配置文件
 * @Author: jidongyu
 * @Date: 2021-04-20 16:33:19
 * @LastEditTime: 2021-04-20 22:41:35
 * @LastEditors: jidongyu
 * @Reference: 
 */
const path = require('path');
const minicss = require('mini-css-extract-plugin');
module.exports = {
    /* 入口文件 */
    entry: {
        index: './src/index.js',
    },
    /* 打包输出文件 */
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    resolveLoader: {
        modules: ["node_modules","./my-loader"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    // "style-loader",
                    minicss.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'replace-loader-sync',
                        options: {
                            name: 'kkb 开课吧测试'
                        }
                    },
                    {
                        loader: 'replace-loader',
                        options: {
                            name: '开课吧测试'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new minicss({
            filename: "[name].css"
        })
    ]
}