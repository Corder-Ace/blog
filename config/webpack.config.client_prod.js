const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postCssEnv = require('postcss-preset-env');
const postCssFlexbugFix = require('postcss-flexbugs-fixes');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getWorkSpacePath } = require('./util');
const webpackBase = require('./webpack.config.base');

module.exports = merge(webpackBase, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: getWorkSpacePath('client/index.jsx'),
    },
    output: {
        path: getWorkSpacePath('build/'),
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/images/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
                        loader: 'file-loader',
                        options: {
                            name: 'static/images/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.css$/,
                        include: /node_modules/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: { minimize: true },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [autoprefixer({ browsers: 'last 5 versions' })],
                                    sourceMap: true,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.scss$/,
                        exclude: /node_modules/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: { minimize: true },
                            },
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
                                options: {
                                    includePaths: [getWorkSpacePath('client/')],
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
        new CopyWebpackPlugin([
            { from: getWorkSpacePath('public/favicon.ico'), to: getWorkSpacePath('build/') },
        ]),
        new HtmlWebpackPlugin({
            inject: true,
            template: getWorkSpacePath('public/index.html'),
            favicon: getWorkSpacePath('public/favicon.ico'),
        }),
        new CleanWebpackPlugin(['build']),
    ],
});
