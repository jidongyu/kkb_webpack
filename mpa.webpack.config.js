/*
 * @Description: 自动生成多入口文件和plugin的配置文件
 * @Author: jidongyu
 * @Date: 2021-04-27 11:26:08
 * @LastEditTime: 2021-04-28 10:35:34
 * @LastEditors: jidongyu
 * @Reference: 
 */
const path = require('path');
const minicss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const glob = require('glob');

const setMPA = () => {
    let entry = {};
    let htmlwebpackplugin = [];

    /* todos */
    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));
    console.log('entryFiles:', entryFiles);
    /* 
    entryFiles: [
        'E:/xxxxx/天天向上/webpack/kkb-webpack/src/detail/index.js',
        'E:/xxxxx/天天向上/webpack/kkb-webpack/src/index/index.js',
        'E:/xxxxx/天天向上/webpack/kkb-webpack/src/list/index.js'
    ]
    */
    entryFiles.map((item, index) => {
        const entryFile = item;
        const mach = entryFile.match(/src\/(.*)\/index.js/);
        console.log('mach:', mach);
        const pageName = mach[1];
        entry[pageName] = entryFile;
        htmlwebpackplugin.push(new HtmlWebpackPlugin({
            template: path.join(__dirname,`src/${pageName}/index.html`),
            filename: `${pageName}.html`,
            chunks: [pageName]
        })
        )
    })

    return {
        entry,
        htmlwebpackplugin
    }
}

const { entry, htmlwebpackplugin } = setMPA();

module.exports = {
    /* 入口文件 */
    entry,
    /* 打包输出文件 */
    output: {
        filename: '[name]-[chunkhash:6].js',
        path: path.resolve(__dirname, './mpa')
    },
    mode: 'development',
    resolveLoader: {
        modules: ["node_modules", "./my-loader"]
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
            },
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
                        outputPath: "images",  // 图像资源的输出位置——在压缩包中的最终存放位置
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
            }
        ]
    },
    plugins: [
        new minicss({
            filename: "css/[name]-[contenthash:6].css"
        }),
        new CleanWebpackPlugin(),
        ...htmlwebpackplugin
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'index.html',
        //     chunks: ['index']
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/list.html',
        //     filename: 'list.html',
        //     chunks: ['list']
        // })
    ]
}