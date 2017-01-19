const path = require('path');
const webpack = require("webpack");
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const findParentDir = (path) => {
    return path.split('/')
        .slice(0, -1)
        .join('/');
};

module.exports = _path => {
    //define local variables
    const dependencies = Object.keys(require(path.normalize(_path + '/package')).dependencies);
    const parentDir = findParentDir(_path);

    return {
        //enter point
        entry: {
            application: path.join(_path + "/app/scripts/app.js"),
            vendors: dependencies
        },

        output: {
            path: path.join(parentDir, "build"),
            filename: "js/[name].bundle.[chunkhash].js",
            chunkFilename: "[id].bundle.[chunkhash].js",
            publicPath: "/"
        },

        resolve: {
            extensions: ['', '.js'],
            modulesDirectories: ['node_modules']
        },

        module: {
            preLoaders: [
                // {
                //     test: /\.js$/,
                //     loader: 'eslint-loader',
                //     exclude: [/node_modules/]
                // }
            ],
            loaders: [
                {
                    loader: 'babel',
                    test: /\.js$/,
                    query: {
                        presets: ['es2015'],
                        ignore: ['node_modules']
                    }
                },
                {
                    test: /\.js$/,
                    loader: "ng-annotate"
                },
                {
                    test: /\.styl$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 5 version!stylus-loader')
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url?limit=10000&mimetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file"
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'file-loader?name=images/[name].[ext]'
                }, {
                    /**
                     * HTML LOADER
                     * Reference: https://github.com/webpack/raw-loader
                     * Allow loading html through js
                     */
                    test: /\.html$/,
                    loader: 'html'
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin("bundle.css"),
            new CleanWebpackPlugin(["build"], {
                root: path.normalize(_path),
                verbose: true,
                dry: false
            }),
            new webpack.NoErrorsPlugin(),
            new HtmlPlugin({
                title: 'Test',
                chunks: ['application', 'vendors'],
                filename: 'index.html',
                template: path.join(_path, 'app', 'index.ejs'),
                inject: false
            })
        ]
    }
};