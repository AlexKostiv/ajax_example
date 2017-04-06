module.exports = {
  entry: './src/app.js',
  output: {
    filename: './bundle.js'
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
   plugins: []
}