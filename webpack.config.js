const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const Up = require('write-up')
const upSettings = require('./src/upSettings')

const documentationMarkup =
  fs.readFileSync(getSourceFilename('content/documentation.up'), 'utf-8')

const result =
  Up.parseAndRenderDocumentAndTableOfContents(documentationMarkup, upSettings)

const documentationHtml = result.documentHtml
const tableOfContentsHtml = result.tableOfContentsHtml

module.exports = {
  entry: getSourceFilename('app.js'),
  output: {
    path: './docs',
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
      template: getSourceFilename('layout/index.hbs'),
      documentationHtml,
      tableOfContentsHtml,
      inject: 'body'
    })
  ]
}

const isForProduction = process.env.NODE_ENV === "production";

if (isForProduction) {
  module.exports.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }))
}

function getSourceFilename(path) {
  return './src/' + path
}
