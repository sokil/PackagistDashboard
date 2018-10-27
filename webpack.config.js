const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

// set mode
const mode = process.env.NODE_ENV
    ? process.env.NODE_ENV
    : 'production';

console.log('Current mode: ' + '\x1b[36m' + mode + '\x1b[0m');

//less plugin
const extractLess = new ExtractTextPlugin({
    filename: "bundle.css",
    allChunks: true,
    disable: process.env.NODE_ENV === "development"
});

// webpack config
module.exports = {
    mode: mode,
    entry: ['babel-polyfill', './src/app/entrypoint.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
    },
    // included externally but must be used in bundle
    externals: {
        // require("jquery") is external and available on the global var jQuery
        //jquery: "jQuery",
    },
    devtool: mode === "development"
        ? 'cheap-module-eval-source-map'
        : 'source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, ".")
                ],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(sass|css)$/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                {from: './src/html/index.html', to: './index.html'}
            ],
            {
                debug: mode === 'production' ? 'warning' : 'info'
            }
        ),
        extractLess,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(mode),
        })
    ]
};