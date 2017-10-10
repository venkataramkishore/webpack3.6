const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'build.min.css',
            allChunks: true,
        }),
        new MinifyPlugin(),
        // compile time plugins
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        })
    ]
});