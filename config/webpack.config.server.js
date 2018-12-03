const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const webpackBase = require('./webpack.config.base');
const { getWorkSpacePath } = require('./util');

module.exports = merge(webpackBase, {
    target: 'node',
    mode: 'development',
    entry: {
        server: getWorkSpacePath('server/index.jsx'),
    },
    output: {
        path: getWorkSpacePath('node'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    external: [nodeExternals()],
});
