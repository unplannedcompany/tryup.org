const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs');
const Up = require('write-up')

var documentationMarkup = fs.readFileSync('./src/content/document.up', 'utf-8')

var prerenderedDocumentation = Up.parseAndRender(documentationMarkup, {
  parsing: {
    createSourceMap: true
  }
})

module.exports = {
  entry: './src/app.js',
  output: {
    path: './site',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "postcss"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "postcss", "sass"]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars'
      },
      {
        test: /\.up$/,
        loader: 'raw',
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/layout/index.hbs',
      prerenderedDocumentation: prerenderedDocumentation,
      inject: 'body'
    })
  ]
}
