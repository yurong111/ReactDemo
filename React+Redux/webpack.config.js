var path = require('path');
// var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

    entry: [
        './src/entries/index.js'
    ],


    output: {
        publicPath: "/", // 表示资源的发布地址 如，为／assets时，访问：http://localhost:8080/assets/；如为／，访问http://localhost:8080/
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.[hash:8].js',
    },


    module: {
        rules: [
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]']
            }
        ]
    },

    resolve:{
        extensions:['.css', '.less', '.js','.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'react+redux',
            filename: 'index.html',
            template: './src/entries/template.ejs', //a template for generating HTML
        }),

        //extract css
        new ExtractTextPlugin({
            filename: "[name].[contenthash].css",
        }),

        /*new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
        })*/
    ],
}


