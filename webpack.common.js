const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
    entry: "./src/main.module.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: ['url-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
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
            {
                test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'json-loader'
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'AngularJS Typescript',
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            { context: './src', from: './assets/**/*', to: path.resolve(__dirname, 'dist') }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new TypedocWebpackPlugin({
            name: 'Contoso',
            mode: 'file',
            theme: './typedoc-theme/',
            includeDeclarations: false,
            ignoreCompilerErrors: true,
        },
            "./src")
    ],
    resolveLoader: {
        modules: [
            "node_modules",
            "./src"
        ],
        extensions: [".ts", ".tsx", ".js", ".json", ".png", ".jpeg", ".jpg", ".svg", ".eot", ".woff", "woff2"]
    }
};