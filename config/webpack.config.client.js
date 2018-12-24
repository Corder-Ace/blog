const merge = require('webpack-merge');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postCssEnv = require('postcss-preset-env');
const postCssFlexbugFix = require('postcss-flexbugs-fixes');
const { getWorkSpacePath } = require('./utils');
const webpackBase = require('./webpack.config.base');

module.exports = merge(webpackBase, {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        getWorkSpacePath('src/client/index.jsx'),
        'webpack-dev-server/client?http://localhost:3000/',
    ],
    output: {
        path: getWorkSpacePath('build/'),
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: [/.bmp$/, /.jpe?g$/, /.png$/, /.gif$/],
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/images/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.css$/,
                        loader: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            {
                                loader: 'style-loader',
                                options: { singleton: true },
                            },
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [
                                        postCssFlexbugFix,
                                        postCssEnv(autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 2 versions',
                                                'Firefox ESR',
                                                'not ie < 9',
                                            ],
                                            flexbox: 'no-2009',
                                        }))],
                                },
                            },
                            {
                                loader: 'sass-loader',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: getWorkSpacePath('public/index.html'),
        }),
        new webpack.DefinePlugin({
            NODE_ENV: process.env.NODE_ENV || 'development',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        inline: true,
        contentBase: getWorkSpacePath('public'),
        watchContentBase: true,
        historyApiFallback: true,
        hot: true,
        overlay: {
            errors: true,
        },
        stats: 'errors-only',
        compress: true,
    },
});
