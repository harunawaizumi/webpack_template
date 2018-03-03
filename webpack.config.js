const webpack = require('webpack')
const path = require('path')
const SplitChunksPlugin = require('webpack-split-chunks')

const VENDOR_LIBS = [
    'react', 'lodash', 'redux', 'react-redux', 'react-dom',
    'faker', 'react-input-range', 'redux-form', 'redux-thunk'
]

module.exports = {
    entry: {
        bundle: './src/index.js',  // two entry points
    }
    ,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/  // No need to compile because it's ES5
            }, {
                use: ['style-loader', 'css-loader'],   // understand the contents of css, and put the code into index.html
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new SplitChunksPlugin({
            to: 'vendor',
            test: /node_modules/
        })
    ]
};
