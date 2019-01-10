const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'index.js')],
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'qiscus-sdk-core.min.js',
    library: 'QiscusSDKCore',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }]
  },
  resolve: {
    extensions: ['.js']
  }
}
