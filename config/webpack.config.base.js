module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
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
