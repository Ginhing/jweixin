module.exports = {
  mode: 'production',
  entry: 'imports-loader?this=>window!./jweixin-1.4.0.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: true
  }
}