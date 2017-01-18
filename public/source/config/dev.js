'use strict';
const path = require("path");

module.exports = function(_path) {
    return {
        context: path.normalize(_path),
        debug: true,
        devtool: 'source-map',
        devServer: {
            contentBase: path.normalize('./build'),
            info: false,
            hot: false,
            inline: true,
            historyApiFallback: true
        }
    }
};