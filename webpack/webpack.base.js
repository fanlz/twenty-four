const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: false,
            minify: false
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
