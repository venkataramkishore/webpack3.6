const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ["babel-polyfill", "jquery", "bootstrap-sass", "./src/app.js"],
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: ['url-loader']
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // build optimization plugins
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].min.js',
        }),
        new HtmlWebpackPlugin({
            title: 'Angular Typescript',
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            { context: './src', from: './assets/**/*', to: path.resolve(__dirname, 'dist') }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
    ],
    resolveLoader: {
        modules: ["node_modules"],
        extensions: [".js", ".json", ".png", ".jpeg", ".jpg", ".svg", ".eot", ".woff", "woff2"]
    }
};