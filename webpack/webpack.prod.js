const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.js');

const prodConf = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '../dist',
        filename: "bundle.[hash].js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            output: { comments: false }
        })
    ],
    devtool: 'none',
    cache: true
};

module.exports = webpackMerge(prodConf, baseConf);
