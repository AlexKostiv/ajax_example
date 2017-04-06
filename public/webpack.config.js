const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    application: './src/app.js',
    vendors: ['jquery', 'moment']
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 5 versions' ]
      }
    ]
  },
   plugins: [
        new webpack.optimize.CommonsChunkPlugin({
                name: 'vendors' // Specify the common bundle's name.
            })
   ]
}