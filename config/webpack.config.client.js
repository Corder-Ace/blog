const merge = require('webpack-merge');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { getWorkSpacePath } = require('./util');
const webpackBase = require('./webpack.config.base');

module.exports = merge(webpackBase, {
    mode: 'development',
    entry: {
        index: getWorkSpacePath('client/index.js'),
    },
    output: {
        path: getWorkSpacePath('build'),
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
                        test: /.scss$/,
                        use: [
                            {
                                loader: 'sass-loader',
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: ['postcss-flexbugs-fixes',
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 2 versions',
                                                'Firefox ESR',
                                                'not ie < 9',
                                            ],
                                            flexbox: 'no-2009',
                                        })],
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: process.env.NODE_ENV || 'development',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        inline: true,
        contentBase: getWorkSpacePath('public/'),
        watchContentBase: true,
        hot: true,
        overlay: false,
        stats: 'errors-only',
        compress: true,
        quiet: true,
    },
});
