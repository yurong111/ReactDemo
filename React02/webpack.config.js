var path = require('path');

module.exports = {

    entry: [
        './src/index.js'
    ],

    output: {
        // path: __dirname+'/build',
        path: path.resolve(__dirname, 'build'),
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
    }
}