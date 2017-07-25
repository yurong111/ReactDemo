var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [
        './src/index.js'
    ],

    output: {
        // path: __dirname+'/build',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-webpack',
            template: 'src/index.ejs'
        })
    ],




    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    resolve:{
        extensions:['.css','.js','.jsx']
    }
}