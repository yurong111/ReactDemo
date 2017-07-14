var path = require('path');

module.exports = {

    entry: [
        './entry/index.js'
    ],

    output: {
        path: __dirname+'/build',
        filename: 'bundle.js',
    },


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
    },

    /*solve refresh, btn do note that the Webpack team recommends against using the dev server in production.*/
    /*devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },*/
}