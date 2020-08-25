module.exports = {
  mode: 'production',
  entry: 'imports-loader?this=>window!./jweixin.js',
  output: {
    filename: 'jweixin.min.js',
    libraryTarget: 'commonjs2',
  }
}
