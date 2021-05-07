/*
 * @Description: webpack弟3节课的配置
 * @Author: jidongyu
 * @Date: 2021-04-21 15:05:21
 * @LastEditTime: 2021-05-05 22:49:46
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
const path = require('path');
const minicss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    /* 入口文件 */
    entry: {
        index: './src/index.js',
        list: './src/list.js'
    },
    /* 打包输出文件 */
    output: {
        filename: '[name]-[chunkhash:6].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port: "8081",
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9092/'
            }
        }
    },
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
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: 'replace-loader-sync',
            //             options: {
            //                 name: 'kkb 开课吧测试'
            //             }
            //         },
            //         {
            //             loader: 'replace-loader',
            //             options: {
            //                 name: '开课吧测试'
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.(png|jpe?g|gif|webp)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "images/[name].[ext]"
            //         }
            //     }
            // }
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: {
                    // loader: "file-loader",
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images", // 图像资源的输出位置——在压缩包中的最终存放位置
                        publicPath: "../images/" // 这里表示css文件中如果要获取图像资源，需要经过的路径是什么，因为打包后css文件夹中的样式文件中，如果引入了图像作为背景，或者其他用途，
                            // 即使原样式文件中路径应用正确了如：background-image: url(../images/src.png)，到了打包打包后的css文件中，还是会丢失引用路径，如：
                            // background-image: url('src.png');所以需要在这里指明样式文件中图像资源的应用路径
                    }
                }
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "css",
                        publicPath: "./"
                    }
                }
            },
            {
                test: /\.js$/,
                use: "babel-loader",
            }
        ]
    },
    plugins: [
        new minicss({
            filename: "css/[name]-[contenthash:6].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/list.html',
        //     filename: 'list.html',
        //     chunks: ['list']
        // })
    ]
}