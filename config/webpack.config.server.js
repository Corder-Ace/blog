const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const webpackBase = require('./webpack.config.base');
const { getWorkSpacePath } = require('./util');

module.exports = merge(webpackBase, {
    target: 'node',
    mode: 'development',
    entry: {
        server: getWorkSpacePath('src/server/index.js'),
    },
    output: {
        path: getWorkSpacePath('node'),
        filename: 'server.js',
        // chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    externals: [nodeExternals()],
});
