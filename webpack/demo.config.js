var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var config = require('../package.json');

module.exports =extend({}, {
    devtool: "source-map",
    entry:[
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './example/src/index.js'
    ],
    output:{
        path:path.join(process.cwd(),'dist'),
        filename:config.name+'.js',
        publicPath:'/dist/'
    },
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
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            { 
                test: /\.html$/, 
                loader: "handlebars-loader" 
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=35000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});