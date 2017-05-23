const webpack = require('webpack');
const path = require('path');

module.exports = function () {
    return {
        context: __dirname,
        entry: {
            'index': './src/index.ts'
        },
        target: 'node',
        resolve: {
            extensions: ['.js', '.ts']
        },
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'dist')
        },
        module: {
            loaders: [
                {
                    test: /.ts$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                }
            ]
        }
    }
}