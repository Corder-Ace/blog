const { getWorkSpacePath } = require('./util');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@components': getWorkSpacePath('src/components'),
            '@utils': getWorkSpacePath('src/routes'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
            },
            {
                oneOf: [
                    {
                        test: /\.(js|jsx)$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        },
                    },
                ],
            },
        ],
    },
};
