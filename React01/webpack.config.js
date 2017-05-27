var path = require('path');

module.exports = {

    entry: [
        './js/index.js'
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
        }]
    }
}