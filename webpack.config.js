const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const Up = require('up-lang')
const upSettings = require('./src/upSettings')
const { resolve } = require('path')

const documentationMarkup =
  fs.readFileSync(getSourceFilename('content/documentation.up'), 'utf-8')

const renderedResult =
  Up.parseAndRenderWithTableOfContents(documentationMarkup, upSettings)

const documentationHtml = renderedResult.documentHtml
const tableOfContentsHtml = renderedResult.tableOfContentsHtml

module.exports = {
  entry: getSourceFilename('app.js'),
  output: {
    path: resolve('./docs'),
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        // TODO: Get rid of this!
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      },
      {
        test: /\.up$/,
        use: 'raw-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getSourceFilename('layout/index.hbs'),
      documentationHtml,
      tableOfContentsHtml,
      inject: 'head'
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
