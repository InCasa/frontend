var webpack = require('webpack');
var path = require('path');

// define Webpack configuration object to be exported
var config = {
    context: path.resolve('./app'),
    entry: './app.js',
    output: {
        path: path.resolve('./app'),
        filename: './app-bundle.js'
    },
    resolve: {        
        alias: {
          'npm': path.resolve('./app/node_modules')
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;