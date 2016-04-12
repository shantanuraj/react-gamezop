module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    fileName: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 8888
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel'
      }
    ]
  }
}
