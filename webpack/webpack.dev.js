const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.js');

const devConf = {
    output: {
        path: path.resolve(__dirname, '/'),
        publicPath: '/',
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'eval-source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true,
        stats: {
            children: false,
            chunks: false,
        }
    }
};


module.exports = webpackMerge(devConf, baseConf);
