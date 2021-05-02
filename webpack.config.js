/*
 * @Description: webpack弟3节课的配置
 * @Author: jidongyu
 * @Date: 2021-04-21 15:05:21
 * @LastEditTime: 2021-04-25 01:41:50
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
const path = require('path');
const minicss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
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
        modules: ["node_modules", "./my-loader"]
    },
    module: {
        rules: [{
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
            // {
            //     test: /\.less$/,
            //     use: [
            //         "kkb-style-loader",
            //         "kkb-css-loader",
            //         "kkb-less-loader"
            //     ]
            // },
            {
                test: /\.js$/,
                use: [{
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
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[ext]",
                    }
                }
            }
        ]
    },
    plugins: [
        new minicss({
            filename: "css/[name].css"
        }),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
    ]
}