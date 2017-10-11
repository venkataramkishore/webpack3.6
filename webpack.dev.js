const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    devtool: 'inline-source-map',
    watch: true,
    watchOptions: {
        ignored: [/node_modules/, "test/**/*"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true
    },
    plugins: [
        // compile time plugins
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});