const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: ['url-loader']
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
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
        ])
    ]
};