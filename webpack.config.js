const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
        cardValidator: './card-validator.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
        library: 'cardValidator'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }
                ]
            }

            // Loaders for other file types can go here
        ]
    }
};
