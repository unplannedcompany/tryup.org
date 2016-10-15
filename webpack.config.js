const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs');
const Up = require('write-up')


const documentationMarkup = fs.readFileSync(
  sourceFilename('content/document.up'),
  'utf-8')

const result =
  Up.parseAndRenderDocumentAndTableOfContents(
    documentationMarkup, {
      parsing: { createSourceMap: true }
    })

const documentHtml = result.documentHtml
const tableOfContentsHtml = result.tableOfContentsHtml

module.exports = {
  entry: sourceFilename('app.js'),
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
      template: sourceFilename('layout/index.hbs'),
      documentHtml,
      tableOfContentsHtml,
      inject: 'body'
    })
  ]
}


function sourceFilename(path) {
  return './src/' + path
}
