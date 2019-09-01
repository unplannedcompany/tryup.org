const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const Up = require('up-lang')
const upSettings = require('./src/upSettings')
const { resolve } = require('path')

const documentationMarkup =
  fs.readFileSync(sourceDir('content/documentation.up'), 'utf-8')

const renderedUp =
  Up.parseAndRenderWithTableOfContents(documentationMarkup, upSettings)

module.exports = {
  entry: sourceDir('app.js'),
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
      template: sourceDir('layout/index.hbs'),
      documentationHtml: renderedUp.documentHtml,
      tableOfContentsHtml: renderedUp.tableOfContentsHtml,
      inject: 'head'
    })
  ]
}


function sourceDir(path) {
  return './src/' + path
}
