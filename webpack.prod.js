const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {

    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'build.min.css',
            allChunks: true,
        }),
        // build optimization plugins
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].min.js',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new MinifyPlugin(),
        // compile time plugins
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        })
    ]
});