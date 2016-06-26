var  path = require('path');
var webpack = require('webpack');
var config = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
    entry:[path.join(process.cwd(),'src/index.js')],
    resolve:{
        modulesDirectories: [
            'node_modules',
            'lib'
        ]
    },
    output:{
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:config.name+'.js'
    },
    externals:[
        {
            'react':{
                root: "react",//this.root
                commonjs2: "react",//module&&exports
                commonjs: 'react',//require=>node env
                amd: "react"//define(amd)
            },
            'react-dom':{
                root: "react-dom",
                commonjs2: "react-dom",
                commonjs: 'react-dom',
                amd: "react-dom"
            },
            'jquery':{
                root: "jQuery",
                commonjs2: "jquery",
                commonjs: 'jquery',
                amd: "jquery"
            }
    }],
    module:{
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(["css-loader","less-loader"])
            },
            { test: /\.html$/, loader: "handlebars-loader" },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=35000'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('index.css')
    ]
};
