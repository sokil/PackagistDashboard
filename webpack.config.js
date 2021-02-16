const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

// set mode
const mode = process.env.NODE_ENV
    ? process.env.NODE_ENV
    : 'production';

console.log('Current mode: ' + '\x1b[36m' + mode + '\x1b[0m');

var plugins = [
    new CopyWebpackPlugin({
        patterns: [
            {
                from: './src/html/index.html',
                to: './index.html'
            }
        ]
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
    })
];

if (mode !== "production") {
    plugins.push(new MiniCssExtractPlugin());
}

// webpack config
module.exports = {
    mode: mode,
    entry: ['./src/app/entrypoint.js'],
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
        ? 'cheap-module-source-map'
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
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        node: true,
                                    },
                                },
                            ],
                            '@babel/preset-react',
                            '@babel/preset-flow',
                        ],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-syntax-import-meta',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-private-methods',
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-proposal-function-bind',
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-proposal-json-strings',
                        ]
                    }
                },
            },
            {
                test: /\.(sass|css)$/,
                use: [
                    mode === 'production' ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: plugins
};