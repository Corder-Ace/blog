const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.client');
const { getWorkSpacePath } = require('./util');

const complier = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, {
    host: 'localhost',
    port: 3000,
    inline: true,
    contentBase: getWorkSpacePath('public'),
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    overlay: false,
    stats: 'errors-only',
    compress: true,
    // quiet: true,
});
const server = new WebpackDevServer(complier, devServerOptions);

server.listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Starting server on http://localhost:3000');
});
