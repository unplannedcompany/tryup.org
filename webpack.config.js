module.exports = {
  entry: './src/app.js',
  output: {
    path: './site',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}
