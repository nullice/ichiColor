/**
 * Created by bgllj on 2016/5/25.
 */
const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: {
        main:['./demo/demo.js'],
    },
    output: {
        path: './demo',
        filename: 'demo-main.js'
    },
    target: 'web',

    module:{
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},

            ]},
    plugins: [
    ],
    devtool: 'eval',

    vue: {
        loaders: {
        }
    },
    babel: {
        // enable stage 0 babel transforms.
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
};

