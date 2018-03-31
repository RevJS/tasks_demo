var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

var outputPath = path.resolve(__dirname, '..', 'dist', 'static');

module.exports = function() {
    return {
        entry: './src/client/client.tsx',
        output: {
            path: outputPath, 
            filename: 'client.js'
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        devtool: 'source-map',
        externals: [],
        plugins: [
            new webpack.DllReferencePlugin({
                manifest: require(path.join(outputPath, 'clientlibs.json'))
            }),
        ],
        optimization: {
            minimizer: [
                new UglifyJSPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        compress: {
                            inline: false
                        },
                        mangle: {
                            keep_fnames: true
                        }
                    }
                }),
            ]
        },
        performance: {
            hints: false
        }
    }
}
