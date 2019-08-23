const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};